import { RenderTexture } from "../../../textures/RenderTexture";
import { RTFrame } from "./RTFrame";
export declare class GBufferFrame extends RTFrame {
    static colorPass_GBuffer: string;
    static reflections_GBuffer: string;
    static gui_GBuffer: string;
    static gBufferMap: Map<string, GBufferFrame>;
    private _colorBufferTex;
    private _compressGBufferTex;
    constructor();
    createGBuffer(key: string, rtWidth: number, rtHeight: number, autoResize?: boolean, outColor?: boolean, depthTexture?: RenderTexture): void;
    getPositionMap(): RenderTexture;
    getNormalMap(): RenderTexture;
    getColorTexture(): RenderTexture;
    getCompressGBufferTexture(): RenderTexture;
    static getGBufferFrame(key: string, fixedWidth?: number, fixedHeight?: number, outColor?: boolean, depthTexture?: RenderTexture): GBufferFrame;
    static getGUIBufferFrame(): GBufferFrame;
    clone(): GBufferFrame;
}
