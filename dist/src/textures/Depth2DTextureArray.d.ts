import { ITexture } from "../gfx/graphics/webGpu/core/texture/ITexture";
import { Texture } from "../gfx/graphics/webGpu/core/texture/Texture";
export declare class Depth2DTextureArray extends Texture implements ITexture {
    constructor(width: number, height: number, format?: GPUTextureFormat, numberLayer?: number);
    internalCreateBindingLayoutDesc(): void;
    internalCreateTexture(): void;
    internalCreateView(): void;
    internalCreateSampler(): void;
}
