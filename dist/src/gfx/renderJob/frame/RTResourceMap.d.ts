import { ViewQuad } from "../../../core/ViewQuad";
import { RenderTexture } from "../../../textures/RenderTexture";
export declare class RTResourceMap {
    static rtTextureMap: Map<string, RenderTexture>;
    static rtViewQuad: Map<string, ViewQuad>;
    static init(): void;
    static createRTTexture(name: string, rtWidth: number, rtHeight: number, format: GPUTextureFormat, useMipmap?: boolean, sampleCount?: number): RenderTexture;
    static createRTTextureArray(name: string, rtWidth: number, rtHeight: number, format: GPUTextureFormat, length?: number, useMipmap?: boolean, sampleCount?: number): RenderTexture;
    static createViewQuad(name: string, shaderVS: string, shaderFS: string, outRtTexture: RenderTexture, multisample?: number): ViewQuad;
    static getTexture(name: string): RenderTexture;
    static CreateSplitTexture(id: string): RenderTexture;
    static WriteSplitColorTexture(id: string): void;
}
