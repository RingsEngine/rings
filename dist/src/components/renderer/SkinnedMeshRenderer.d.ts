import { View3D } from "../../core/View3D";
import { Object3D } from "../../core/entities/Object3D";
import { MeshRenderer } from "./MeshRenderer";
import { StorageGPUBuffer } from "../../gfx/graphics/webGpu/core/buffer/StorageGPUBuffer";
import { PassType } from "../../gfx/renderJob/passRenderer/state/PassType";
import { RendererPassState } from "../../gfx/renderJob/passRenderer/state/RendererPassState";
import { SkeletonAnimationComponent } from "../SkeletonAnimationComponent";
import { ClusterLightingBuffer } from "../../gfx/renderJob/passRenderer/cluster/ClusterLightingBuffer";
export declare class SkinnedMeshRenderer extends MeshRenderer {
    skinJointsName: Array<string>;
    protected mInverseBindMatrixData: Array<Float32Array>;
    protected mInverseBindMatrixBuffer: StorageGPUBuffer;
    protected mSkeletonAnimation: SkeletonAnimationComponent;
    protected mJointIndexTableBuffer: StorageGPUBuffer;
    constructor();
    start(): void;
    onEnable(): void;
    get skeletonAnimation(): SkeletonAnimationComponent;
    set skeletonAnimation(value: SkeletonAnimationComponent);
    get skinInverseBindMatrices(): Array<Float32Array>;
    set skinInverseBindMatrices(inverseBindMatrices: Array<Float32Array>);
    get inverseBindMatrixBuffer(): StorageGPUBuffer;
    get jointIndexTableBuffer(): GPUBuffer;
    cloneTo(obj: Object3D): void;
    nodeUpdate(view: View3D, passType: PassType, renderPassState: RendererPassState, clusterLightingBuffer: ClusterLightingBuffer): void;
}
