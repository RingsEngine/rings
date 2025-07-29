import { BitmapTexture2D } from "../textures/BitmapTexture2D";
import { LoaderFunctions } from "./LoaderFunctions";
export declare class LoaderBase {
    baseUrl: string;
    initUrl: string;
    private _progress;
    constructor();
    /**
     * @private
     */
    loadBinData(url: string, loaderFunctions?: LoaderFunctions): Promise<any>;
    /**
     *
     * @private
     */
    loadAsyncBitmapTexture(url: string, loaderFunctions?: LoaderFunctions): Promise<BitmapTexture2D>;
    /**
     *
     * @private
     */
    loadJson(url: string, loaderFunctions?: LoaderFunctions): Promise<object>;
    /**
     * @private
     */
    loadTxt(url: string, loaderFunctions?: LoaderFunctions): Promise<object>;
    /**
     * @private
     */
    static read(url: string, response: any, loaderFunctions?: LoaderFunctions): Promise<Uint8Array>;
}
