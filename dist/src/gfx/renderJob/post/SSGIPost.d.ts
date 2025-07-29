import { VirtualTexture } from "../../../textures/VirtualTexture";
import { StorageGPUBuffer } from "../../graphics/webGpu/core/buffer/StorageGPUBuffer";
import { ComputeShader } from "../../graphics/webGpu/shader/ComputeShader";
import { RendererPassState } from "../passRenderer/state/RendererPassState";
import { PostBase } from "./PostBase";
import { View3D } from "../../../core/View3D";
import { RTFrame } from "../frame/RTFrame";
import { TextureScaleCompute } from "../../generate/convert/TextureScaleCompute";
import { RenderTexture } from "../../../textures/RenderTexture";
import { Vector3 } from "../../..";
export declare class SSGIPost extends PostBase {
    /**
     * @internal
     */
    outTexture: VirtualTexture;
    newTexture: VirtualTexture;
    oldTexture: VirtualTexture;
    combineTexture: VirtualTexture;
    /**
     * @internal
     */
    rendererPassState: RendererPassState;
    /**
     * @internal
     */
    ssgiCompute: ComputeShader;
    delayCompute: ComputeShader;
    combineCompute: ComputeShader;
    rtFrame: RTFrame;
    textureScaleSmallCompute: TextureScaleCompute;
    textureScaleBigCompute: TextureScaleCompute;
    view: View3D;
    colorTexture: RenderTexture;
    posTexture: RenderTexture;
    normalTexture: RenderTexture;
    gBufferTexture: RenderTexture;
    lastPosTexture: RenderTexture;
    downSampleCofe: number;
    debugChanal: string;
    updateBuffer: StorageGPUBuffer;
    constructor();
    /**
     * @internal
     */
    onAttach(view: View3D): void;
    onCameraChange(oldPos: Vector3, newPos: Vector3): void;
    /**
     * @internal
     */ Render: any;
    onDetach(view: View3D): void;
    set ins(v: number);
    get ins(): number;
    set delay(v: number);
    get delay(): number;
    set colorIns(v: number);
    get colorIns(): number;
    set frameCount(v: number);
    get frameCount(): number;
    set d1(v: number);
    get d1(): number;
    private createResource;
    private createCompute;
    render(view: View3D, command: GPUCommandEncoder): void;
    private frame;
    compute(view: View3D): void;
    onResize(): void;
}
