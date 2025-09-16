/* eslint-disable */
import { Skeleton } from "./Skeleton";
import { SkeletonPose } from "./SkeletonPose";
import { OAnimationEvent } from "../OAnimationEvent";

export class SkeletonAnimationClip {
  public name: string = "";
  protected _skeleton: Skeleton;
  protected _skeletonPoses: Array<SkeletonPose>;
  protected _animationClipData: Float32Array;
  protected _events: Array<OAnimationEvent>;

  constructor(
    name: string,
    skeleton: Skeleton,
    numFrame: number,
    bufferData: Float32Array
  ) {
    this.name = name;
    this._skeleton = skeleton;
    this._animationClipData = bufferData;
    if (numFrame > 0 && bufferData) {
      this._skeletonPoses = new Array<SkeletonPose>(numFrame);
      let skeletonPoseLength: number = 12 * skeleton.numJoint;
      for (let nFrame: number = 0; nFrame < numFrame; nFrame++) {
        let byteOffset: number = skeletonPoseLength * nFrame * 4;
        const buffer = bufferData.buffer instanceof ArrayBuffer ? bufferData.buffer : new Uint8Array(bufferData.buffer).buffer;
        let poseData = new Float32Array(
          buffer as ArrayBuffer,
          byteOffset,
          skeletonPoseLength
        );
        let skeletonPose = new SkeletonPose(skeleton);
        skeletonPose.buildSkeletonPose(poseData);
        this._skeletonPoses[nFrame] = skeletonPose;
      }
    }
  }

  public get totalTime(): number {
    return this._skeletonPoses[this._skeletonPoses.length - 1].time;
  }

  public get frameRate(): number {
    return this.totalTime / this._skeletonPoses.length;
  }

  public get skeleton(): Skeleton {
    return this._skeleton;
  }

  public get numFrame(): number {
    return this._skeletonPoses.length - 1;
  }

  public get animationClipData(): Float32Array {
    return this._animationClipData;
  }

  public getSkeletonPose(frame: number): SkeletonPose {
    return this._skeletonPoses[frame];
  }

  public getLerpSkeletonPose(
    currFrame: number,
    nextFrame: number,
    weight: number,
    dst: SkeletonPose
  ): SkeletonPose {
    let skeletonPoseA = this.getSkeletonPose(currFrame);
    let skeletonPoseB = this.getSkeletonPose(nextFrame);
    dst.lerp(skeletonPoseA, skeletonPoseB, weight);
    return dst;
  }

  public createSubClip(
    name: string,
    startTime: number,
    endTime: number
  ): SkeletonAnimationClip {
    var result = new SkeletonAnimationClip(name, this._skeleton, 0, null);
    const startFrame = Math.max(Math.floor(startTime / this.frameRate), 0);
    const endFrame = Math.min(
      Math.floor(endTime / this.frameRate),
      this._skeletonPoses.length - 1
    );
    result._skeletonPoses = this._skeletonPoses.slice(startFrame, endFrame);
    const skeletonPoseByteLength = 12 * this._skeleton.numJoint * 4;
    const buffer = this._animationClipData.buffer instanceof ArrayBuffer ? this._animationClipData.buffer : new Uint8Array(this._animationClipData.buffer).buffer;
    this._animationClipData = new Float32Array(
      buffer as ArrayBuffer,
      startFrame * skeletonPoseByteLength,
      (endFrame - startFrame) * skeletonPoseByteLength
    );
    return result;
  }

  public addEvent(eventName: string, triggerTime: number) {
    if (!this._events) {
      this._events = new Array<OAnimationEvent>();
    }
    this._events.push(new OAnimationEvent(eventName, triggerTime));
  }

  public removeEvent(eventName: string) {
    if (this._events) {
      this._events = this._events.filter((items) => items.type != eventName);
    }
  }

  public getEvents(): Array<OAnimationEvent> {
    return this._events;
  }
}
