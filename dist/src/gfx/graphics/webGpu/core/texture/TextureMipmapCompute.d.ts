import { Texture } from "./Texture";
export declare class TextureMipmapCompute {
    private static codeMax;
    private static codeMin;
    private static _pipelineMax;
    private static _pipelineMin;
    static createMipmap(texture: Texture, mipmapCount: number): void;
    private static mipmap;
}
