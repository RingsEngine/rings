import { BitmapTexture2D } from "./BitmapTexture2D";
import { ITexture } from "../gfx/graphics/webGpu/core/texture/ITexture";
import { Texture } from "../gfx/graphics/webGpu/core/texture/Texture";
export declare class BitmapTexture2DArray extends Texture implements ITexture {
    private _bitmapTextures;
    constructor(width: number, height: number, numberLayer: number);
    setTextures(texs: BitmapTexture2D[]): void;
    addTexture(bitmapTexture: BitmapTexture2D): void;
    removeTexture(bitmapTexture: BitmapTexture2D): void;
    private updateTexture;
    internalCreateBindingLayoutDesc(): void;
    internalCreateTexture(): void;
    internalCreateView(): void;
    internalCreateSampler(): void;
}
