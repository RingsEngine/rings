import { VirtualTexture } from "../../../textures/VirtualTexture";
import { StorageGPUBuffer } from "../../graphics/webGpu/core/buffer/StorageGPUBuffer";
import { ComputeShader } from "../../graphics/webGpu/shader/ComputeShader";
import { RendererPassState } from "../passRenderer/state/RendererPassState";
import { PostBase } from "./PostBase";
import { View3D } from "../../../core/View3D";
import { RTFrame } from "../frame/RTFrame";
export declare class DepthOfFieldPost extends PostBase {
    /**
     * @internal
     */
    blurTexture1: VirtualTexture;
    /**
     * @internal
     */
    blurTexture2: VirtualTexture;
    /**
     * @internal
     */
    rendererPassState: RendererPassState;
    /**
     * @internal
     */
    blurComputes: ComputeShader[];
    /**
     * @internal
     */
    blurSettings: StorageGPUBuffer[];
    /**
     * @internal
     */
    outTexture: VirtualTexture;
    rtFrame: RTFrame;
    constructor();
    /**
     * @internal
     */
    onAttach(view: View3D): void;
    /**
     * @internal
     */
    onDetach(view: View3D): void;
    get pixelOffset(): number;
    set pixelOffset(value: number);
    get near(): number;
    set near(value: number);
    get far(): number;
    set far(value: number);
    private createBlurCompute;
    private createResource;
    /**
     * @internal
     */
    render(view: View3D, command: GPUCommandEncoder): void;
    onResize(): void;
}
