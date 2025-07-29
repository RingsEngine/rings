import { View3D } from "../../core/View3D";
import { Object3D } from "../../core/entities/Object3D";
import { MeshRenderer } from "./MeshRenderer";
import { StorageGPUBuffer } from "../../gfx/graphics/webGpu/core/buffer/StorageGPUBuffer";
import { PassType } from "../../gfx/renderJob/passRenderer/state/PassType";
import { RendererPassState } from "../../gfx/renderJob/passRenderer/state/RendererPassState";
import { ClusterLightingBuffer } from "../../gfx/renderJob/passRenderer/cluster/ClusterLightingBuffer";
import { AnimatorComponent, GeometryBase } from "../..";
export declare class SkinnedMeshRenderer2 extends MeshRenderer {
    skinJointsName: Array<string>;
    protected mInverseBindMatrixData: Array<Float32Array>;
    protected mInverseBindMatrixBuffer: StorageGPUBuffer;
    protected mSkeletonAnimation: AnimatorComponent;
    protected mJointIndexTableBuffer: StorageGPUBuffer;
    constructor();
    get geometry(): GeometryBase;
    set geometry(value: GeometryBase);
    start(): void;
    get blendShape(): import("../..").MorphTargetData;
    onEnable(): void;
    get skeletonAnimation(): AnimatorComponent;
    set skeletonAnimation(value: AnimatorComponent);
    get skinInverseBindMatrices(): Array<Float32Array>;
    set skinInverseBindMatrices(inverseBindMatrices: Array<Float32Array>);
    get inverseBindMatrixBuffer(): StorageGPUBuffer;
    get jointIndexTableBuffer(): GPUBuffer;
    cloneTo(obj: Object3D): void;
    /**
     * @internal
     * @param passType
     * @param renderPassState
     * @param scene3D
     * @param clusterLightingRender
     * @param probes
     */
    nodeUpdate(view: View3D, passType: PassType, renderPassState: RendererPassState, clusterLightingBuffer: ClusterLightingBuffer): void;
}
