import { VirtualTexture } from "../../../textures/VirtualTexture";
import { StorageGPUBuffer } from "../../graphics/webGpu/core/buffer/StorageGPUBuffer";
import { ComputeShader } from "../../graphics/webGpu/shader/ComputeShader";
import { RendererPassState } from "../passRenderer/state/RendererPassState";
import { PostBase } from "./PostBase";
import { View3D } from "../../../core/View3D";
import { RTFrame } from "../frame/RTFrame";
export declare class GodRayPost extends PostBase {
    /**
     * @internal
     */
    godRayTexture: VirtualTexture;
    /**
     * @internal
     */
    rendererPassState: RendererPassState;
    /**
     * @internal
     */
    godRayCompute: ComputeShader;
    /**
     * @internal
     */
    historyGodRayData: StorageGPUBuffer;
    /**
     * @internal
     */
    godRaySetting: StorageGPUBuffer;
    rtFrame: RTFrame;
    constructor();
    /**
     * @internal
     */
    onAttach(view: View3D): void;
    /**
     * @internal
     */ Render: any;
    onDetach(view: View3D): void;
    get blendColor(): boolean;
    set blendColor(value: boolean);
    get rayMarchCount(): number;
    set rayMarchCount(value: number);
    get scatteringExponent(): number;
    set scatteringExponent(value: number);
    get intensity(): number;
    set intensity(value: number);
    private createGUI;
    private removeGUI;
    private createCompute;
    private createResource;
    onResize(): void;
    /**
     * @internal
     */
    render(view: View3D, command: GPUCommandEncoder): void;
}
