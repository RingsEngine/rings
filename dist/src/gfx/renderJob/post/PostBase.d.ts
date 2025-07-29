import { ViewQuad } from "../../../core/ViewQuad";
import { VirtualTexture } from "../../../textures/VirtualTexture";
import { Texture } from "../../graphics/webGpu/core/texture/Texture";
import { ComputeShader } from "../../../gfx/graphics/webGpu/shader/ComputeShader";
import { PostRenderer } from "../passRenderer/post/PostRenderer";
import { View3D } from "../../../core/View3D";
export declare class PostBase {
    enable: boolean;
    postRenderer: PostRenderer;
    protected rtViewQuad: Map<string, ViewQuad>;
    protected virtualTexture: Map<string, VirtualTexture>;
    constructor();
    protected createRTTexture(name: string, rtWidth: number, rtHeight: number, format: GPUTextureFormat, useMipmap?: boolean, sampleCount?: number): import("../../..").RenderTexture;
    protected createViewQuad(name: string, shaderName: string, outRtTexture: VirtualTexture, msaa?: number): ViewQuad;
    protected getOutTexture(): Texture;
    protected autoSetColorTexture(name: string, compute: ComputeShader): void;
    /**
     * @internal
     */
    compute(view: View3D): void;
    /**
     * @internal
     */
    onAttach(view: View3D): void;
    /**
     * @internal
     */
    onDetach(view: View3D): void;
    onResize(): void;
    /**
     * @internal
     */
    render(view: View3D, command: GPUCommandEncoder): void;
    destroy(force?: boolean): void;
}
