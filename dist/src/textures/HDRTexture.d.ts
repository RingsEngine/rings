import { Texture } from "../gfx/graphics/webGpu/core/texture/Texture";
import { LoaderFunctions } from "../loader/LoaderFunctions";
export declare class HDRTexture extends Texture {
    constructor();
    create(width?: number, height?: number, data?: ArrayBuffer, useMipmap?: boolean): this;
    load(url: string, loaderFunctions?: LoaderFunctions): Promise<HDRTexture>;
}
