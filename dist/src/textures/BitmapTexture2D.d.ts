import { LoaderFunctions } from "../loader/LoaderFunctions";
import { Texture } from "../gfx/graphics/webGpu/core/texture/Texture";
export declare class BitmapTexture2D extends Texture {
    private _source;
    premultiplyAlpha: PremultiplyAlpha;
    constructor(useMipmap?: boolean);
    get source(): HTMLCanvasElement | ImageBitmap | OffscreenCanvas | HTMLImageElement;
    set source(value: HTMLCanvasElement | ImageBitmap | OffscreenCanvas | HTMLImageElement);
    load(url: string, loaderFunctions?: LoaderFunctions): Promise<unknown>;
    private imageData;
    loadFromBlob(imgData: Blob): Promise<boolean>;
}
