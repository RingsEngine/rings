import {
  Matrix4,
  makeMatrix44,
  multiplyMatrices4x4REF,
} from "../../../math/Matrix4";
import { Quaternion } from "../../../math/Quaternion";
import { Vector3 } from "../../../math/Vector3";
import { JointPose } from "./JointPose";
import { Skeleton } from "./Skeleton";

export class SkeletonPose {
  public time: number;
  protected _skeleton: Skeleton;
  protected _jointsPose: Array<JointPose>;
  protected mJointMatrixIndexTable: Array<number>;

  constructor(skeleton: Skeleton, useGlobalMatrix: boolean = false) {
    this._skeleton = skeleton;
    this._jointsPose = new Array<JointPose>(skeleton.numJoint);
    this.mJointMatrixIndexTable = new Array<number>(skeleton.numJoint);
    for (let index = 0; index < skeleton.numJoint; index++) {
      let joint = new JointPose(index, useGlobalMatrix);
      this._jointsPose[index] = joint;
      this.mJointMatrixIndexTable[index] = joint.worldMatrix.index;
    }
  }

  public buildSkeletonPose(poseData: Float32Array) {
    let scale = new Vector3();
    let rotation = new Quaternion();
    let translation = new Vector3();
    let jointLocalMatrix = new Array<Matrix4>(this._skeleton.numJoint);
    this.time = poseData[11] > 0 ? poseData[11] : poseData[24];
    for (
      let jointIndex = 0;
      jointIndex < this._skeleton.numJoint;
      jointIndex++
    ) {
      let byteOffset = 12 * jointIndex * 4;
      let jointData = new Float32Array(
        poseData.buffer,
        poseData.byteOffset + byteOffset,
        12
      );

      let localMatrix = new Matrix4();
      scale.set(jointData[0], jointData[1], jointData[2]);
      rotation.set(jointData[4], jointData[5], jointData[6], jointData[7]);
      translation.set(jointData[8], jointData[9], jointData[10]);
      makeMatrix44(rotation.getEulerAngles(), translation, scale, localMatrix);
      jointLocalMatrix[jointIndex] = localMatrix;

      let joint = new JointPose(jointIndex);
      const nParentIndex = this._skeleton.getJointParentIndex(jointIndex);
      if (nParentIndex < 0) {
        joint.worldMatrix.copyFrom(localMatrix);
      } else {
        let parentJoint = this._jointsPose[nParentIndex];
        multiplyMatrices4x4REF(
          parentJoint.worldMatrix,
          localMatrix,
          joint.worldMatrix
        );
      }
      this._jointsPose[jointIndex] = joint;
    }
  }

  public get numJoint(): number {
    return this._skeleton.numJoint;
  }

  public get joints(): Array<JointPose> {
    return this._jointsPose;
  }

  public get jointMatrixIndexTable(): Array<number> {
    return this.mJointMatrixIndexTable;
  }

  public lerp(a: SkeletonPose, b: SkeletonPose, weight: number) {
    if (a && b) {
      for (let index = 0; index < this._jointsPose.length; index++) {
        let jointA = a._jointsPose[index];
        let jointB = b._jointsPose[index];
        let jointDst = this._jointsPose[index];
        jointDst.worldMatrix.lerp(
          jointA.worldMatrix,
          jointB.worldMatrix,
          weight
        );
      }
    } else {
      for (let index = 0; index < this._jointsPose.length; index++) {
        let jointA = a._jointsPose[index];
        let jointDst = this._jointsPose[index];
        jointDst.worldMatrix.copyFrom(jointA.worldMatrix);
      }
    }
  }

  public copyFrom(other: SkeletonPose) {
    for (let index = 0; index < this._jointsPose.length; index++) {
      this._jointsPose[index].worldMatrix.copyFrom(
        other._jointsPose[index].worldMatrix
      );
    }
  }

  public reset() {
    for (let index = 0; index < this._jointsPose.length; index++) {
      this._jointsPose[index].worldMatrix.identity();
    }
  }
}
