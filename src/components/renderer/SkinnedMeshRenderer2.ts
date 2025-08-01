import { View3D } from "../../core/View3D";
import { Object3D } from "../../core/entities/Object3D";
import { MeshRenderer } from "./MeshRenderer";
import { RendererMask } from "../../gfx/renderJob/passRenderer/state/RendererMask";
import { StorageGPUBuffer } from "../../gfx/graphics/webGpu/core/buffer/StorageGPUBuffer";
import { PassType } from "../../gfx/renderJob/passRenderer/state/PassType";
import { RendererPassState } from "../../gfx/renderJob/passRenderer/state/RendererPassState";
import { ClusterLightingBuffer } from "../../gfx/renderJob/passRenderer/cluster/ClusterLightingBuffer";
import { AnimatorComponent, GeometryBase, RegisterComponent } from "../..";

@RegisterComponent(SkinnedMeshRenderer2, "SkinnedMeshRenderer2")
export class SkinnedMeshRenderer2 extends MeshRenderer {
  public skinJointsName: Array<string>;
  protected mInverseBindMatrixData: Array<Float32Array>;
  protected mInverseBindMatrixBuffer: StorageGPUBuffer;
  protected mSkeletonAnimation: AnimatorComponent;
  protected mJointIndexTableBuffer: StorageGPUBuffer;

  constructor() {
    super();
    this.addRendererMask(RendererMask.SkinnedMesh);
  }

  public get geometry(): GeometryBase {
    return this._geometry;
  }

  public set geometry(value: GeometryBase) {
    this.skinJointsName = value.skinNames;
    let matrixList: Float32Array[] = [];
    for (let i = 0; i < value.bindPose.length; i++) {
      matrixList.push(new Float32Array(value.bindPose[i].rawData.slice(0, 16)));
    }
    this.skinInverseBindMatrices = matrixList;
    super.geometry = value;
  }

  public start() {
    super.start();
    this.skeletonAnimation = this.object3D.getComponent(AnimatorComponent);
    if (!this.skeletonAnimation) {
      let comps =
        this.object3D.parentObject.parentObject.getComponentsInChild(
          AnimatorComponent
        );
      if (comps.length > 0) {
        this.skeletonAnimation = comps[0];
      }
      let parentObj = this.object3D;
      while (!this.skeletonAnimation && parentObj) {
        this.skeletonAnimation =
          parentObj.getComponentFromParent(AnimatorComponent);
        if (parentObj.parent) {
          parentObj = parentObj.parent.object3D;
        }
      }
    }
  }

  public get blendShape() {
    return this.morphData;
  }

  public onEnable(): void {
    super.onEnable();
  }

  public get skeletonAnimation(): AnimatorComponent {
    return this.mSkeletonAnimation;
  }

  public set skeletonAnimation(value: AnimatorComponent) {
    this.mSkeletonAnimation = value;
    if (!value) {
      return;
    }

    if (!this.mJointIndexTableBuffer) {
      let skinJointIndexData = this.mSkeletonAnimation.getJointIndexTable(
        this.skinJointsName
      );
      this.mJointIndexTableBuffer = new StorageGPUBuffer(
        skinJointIndexData.length,
        0,
        new Float32Array(skinJointIndexData)
      );
      this.mJointIndexTableBuffer.visibility =
        GPUShaderStage.VERTEX | GPUShaderStage.COMPUTE;
    }
  }

  public get skinInverseBindMatrices(): Array<Float32Array> {
    return this.mInverseBindMatrixData;
  }

  public set skinInverseBindMatrices(inverseBindMatrices: Array<Float32Array>) {
    this.mInverseBindMatrixData = inverseBindMatrices;
    var inverseBindMatricesData = new Float32Array(
      inverseBindMatrices.length * 16
    );
    for (let i = 0; i < inverseBindMatrices.length; i++) {
      let index = i * 16;
      let mat4x4 = inverseBindMatrices[i];
      inverseBindMatricesData.set(mat4x4, index);
    }
    this.mInverseBindMatrixBuffer = new StorageGPUBuffer(
      inverseBindMatricesData.byteLength,
      0,
      inverseBindMatricesData
    );
    this.mInverseBindMatrixBuffer.visibility =
      GPUShaderStage.VERTEX | GPUShaderStage.COMPUTE;
  }

  public get inverseBindMatrixBuffer(): StorageGPUBuffer {
    return this.mInverseBindMatrixBuffer;
  }

  public get jointIndexTableBuffer(): GPUBuffer {
    return this.mJointIndexTableBuffer.buffer;
  }

  public cloneTo(obj: Object3D) {
    let skinnedMesh = obj.addComponent(SkinnedMeshRenderer2);
    let newMats = [];
    for (const mat of this.materials) {
      newMats.push(mat.clone());
    }
    skinnedMesh.materials = newMats;
    skinnedMesh.geometry = this.geometry;
    skinnedMesh.castShadow = this.castShadow;
    skinnedMesh.castGI = this.castGI;
    skinnedMesh.receiveShadow = this.receiveShadow;
    skinnedMesh.rendererMask = this.rendererMask;
    skinnedMesh.skinJointsName = this.skinJointsName;
    skinnedMesh.skinInverseBindMatrices = this.skinInverseBindMatrices;
    skinnedMesh.mJointIndexTableBuffer = this.mJointIndexTableBuffer;
  }

  /**
   * @internal
   * @param passType
   * @param renderPassState
   * @param scene3D
   * @param clusterLightingRender
   * @param probes
   */
  public nodeUpdate(
    view: View3D,
    passType: PassType,
    renderPassState: RendererPassState,
    clusterLightingBuffer: ClusterLightingBuffer
  ) {
    for (let i = 0; i < this.materials.length; i++) {
      const material = this.materials[i];
      let passes = material.getPass(passType);
      if (passes)
        for (let i = 0; i < passes.length; i++) {
          const renderShader = passes[i];
          if (!renderShader.pipeline && this.mSkeletonAnimation) {
            renderShader.setStorageBuffer(
              "jointsMatrixIndexTable",
              this.mSkeletonAnimation.jointMatrixIndexTableBuffer
            );
            renderShader.setStorageBuffer(
              "jointsInverseMatrix",
              this.mInverseBindMatrixBuffer
            );
            renderShader.setStorageBuffer(
              "jointsIndexMapingTable",
              this.mJointIndexTableBuffer
            );
          }
        }
    }
    super.nodeUpdate(view, passType, renderPassState, clusterLightingBuffer);
  }
}
