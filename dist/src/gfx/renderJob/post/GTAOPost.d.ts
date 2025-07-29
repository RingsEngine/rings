import { VirtualTexture } from "../../../textures/VirtualTexture";
import { StorageGPUBuffer } from "../../graphics/webGpu/core/buffer/StorageGPUBuffer";
import { ComputeShader } from "../../graphics/webGpu/shader/ComputeShader";
import { RendererPassState } from "../passRenderer/state/RendererPassState";
import { PostBase } from "./PostBase";
import { View3D } from "../../../core/View3D";
import { RTFrame } from "../frame/RTFrame";
export declare class GTAOPost extends PostBase {
    /**
     * @internal
     */
    gtaoTexture: VirtualTexture;
    /**
     * @internal
     */
    rendererPassState: RendererPassState;
    /**
     * @internal
     */
    gtaoCompute: ComputeShader;
    /**
     * @internal
     */
    gtaoSetting: StorageGPUBuffer;
    /**
     * @internal
     */
    aoBuffer: StorageGPUBuffer;
    /**
     * @internal
     */
    directionsBuffer: StorageGPUBuffer;
    /**
     * @internal
     */
    directionsArray: Float32Array;
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
    get maxDistance(): number;
    set maxDistance(value: number);
    get maxPixel(): number;
    set maxPixel(value: number);
    get darkFactor(): number;
    set darkFactor(value: number);
    get rayMarchSegment(): number;
    set rayMarchSegment(value: number);
    get multiBounce(): boolean;
    set multiBounce(value: boolean);
    get blendColor(): boolean;
    set blendColor(value: boolean);
    get usePosFloat32(): boolean;
    set usePosFloat32(value: boolean);
    private createCompute;
    private createResource;
    private randomCount;
    private randomDirection;
    render(view: View3D, command: GPUCommandEncoder): void;
    onResize(): void;
}
