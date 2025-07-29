import { Texture } from "../gfx/graphics/webGpu/core/texture/Texture";
import { TextureCube } from "../gfx/graphics/webGpu/core/texture/TextureCube";
import { LoaderFunctions } from "../loader/LoaderFunctions";
import { TextureCubeFaceData } from "./TextureCubeFaceData";
export declare class HDRTextureCube extends TextureCube {
    private _url;
    protected _faceData: TextureCubeFaceData;
    constructor();
    createFromHDRData(size: number, data: {
        width: number;
        height: number;
        array: Uint8Array;
    }): this;
    createFromTexture(size: number, texture: Texture): this;
    load(url: string, loaderFunctions?: LoaderFunctions): Promise<HDRTextureCube>;
}
