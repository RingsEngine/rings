import { Texture } from "../gfx/graphics/webGpu/core/texture/Texture";
export declare class RenderTexture extends Texture {
    resolveTarget: GPUTextureView;
    sampleCount: number;
    autoResize?: boolean;
    clear?: boolean;
    constructor(width: number, height: number, format?: GPUTextureFormat, useMipMap?: boolean, usage?: GPUFlagsConstant, numberLayer?: number, sampleCount?: number, clear?: boolean, autoResize?: boolean);
    resize(width: any, height: any): void;
    create(width: number, height: number, useMiamp?: boolean): void;
    clone(): RenderTexture;
    readTextureToImage(): ArrayBuffer;
}
