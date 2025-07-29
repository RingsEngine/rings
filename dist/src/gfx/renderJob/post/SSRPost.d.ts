import { Vector3 } from "../../../math/Vector3";
import { VirtualTexture } from "../../../textures/VirtualTexture";
import { StorageGPUBuffer } from "../../graphics/webGpu/core/buffer/StorageGPUBuffer";
import { UniformGPUBuffer } from "../../graphics/webGpu/core/buffer/UniformGPUBuffer";
import { RendererPassState } from "../passRenderer/state/RendererPassState";
import { PostBase } from "./PostBase";
import { RTFrame } from "../frame/RTFrame";
import { View3D } from "../../../core/View3D";
export declare class SSRPost extends PostBase {
    private SSR_RayTraceCompute;
    private SSR_IS_Compute;
    private SSR_Blend_Compute;
    /**
     * @internal
     */
    isRetTexture: VirtualTexture;
    /**
     * @internal
     */
    finalTexture: VirtualTexture;
    /**
     * @internal
     */
    rendererPassState: RendererPassState;
    /**
     * @internal
     */
    ssrUniformBuffer: UniformGPUBuffer;
    /**
     * @internal
     */
    rayTraceData: StorageGPUBuffer;
    /**
     * @internal
     */
    ssrColorData: StorageGPUBuffer;
    /**
     * @internal
     */
    rtFrame: RTFrame;
    historyPosition: StorageGPUBuffer;
    view: View3D;
    /**
     * @internal
     */
    onAttach(view: View3D): void;
    /**
     * @internal
     */
    onDetach(view: View3D): void;
    private reflectionRatio;
    get fadeEdgeRatio(): number;
    set fadeEdgeRatio(value: number);
    get rayMarchRatio(): number;
    set rayMarchRatio(value: number);
    get roughnessThreshold(): number;
    set roughnessThreshold(value: number);
    get fadeDistanceMin(): number;
    set fadeDistanceMin(value: number);
    get fadeDistanceMax(): number;
    set fadeDistanceMax(value: number);
    get powDotRN(): number;
    set powDotRN(value: number);
    private createRayTraceShader;
    private createISShader;
    private createBlendShader;
    private createResource;
    /**
     * @internal
     */
    render(view: View3D, command: GPUCommandEncoder): void;
    onResize(): void;
}
export declare class SSR_IS_Kernel {
    static createSeeds(): Vector3[];
}
