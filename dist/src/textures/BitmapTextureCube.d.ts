import { TextureCube } from "../gfx/graphics/webGpu/core/texture/TextureCube";
import { Texture } from "../gfx/graphics/webGpu/core/texture/Texture";
export declare class BitmapTextureCube extends TextureCube {
    private _images;
    private _url;
    constructor();
    protected generateImages(images: HTMLCanvasElement[] | ImageBitmap[] | OffscreenCanvas[] | Texture[]): void;
    private uploadBaseImages;
    private uploadMipmapGPUTexture;
    get images(): HTMLCanvasElement[] | ImageBitmap[] | OffscreenCanvas[];
    set images(value: HTMLCanvasElement[] | ImageBitmap[] | OffscreenCanvas[]);
    load(urls: string[]): Promise<boolean>;
    loadStd(url: string): Promise<boolean>;
}
