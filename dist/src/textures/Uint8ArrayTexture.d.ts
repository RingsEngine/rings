import { Texture } from "../gfx/graphics/webGpu/core/texture/Texture";
export declare class Uint8ArrayTexture extends Texture {
    private _dataBuffer;
    create(width: number, height: number, data: Uint8Array, useMipmap?: boolean): this;
    updateTexture(width: number, height: number, data: Uint8Array): void;
}
