import { Texture } from "../gfx/graphics/webGpu/core/texture/Texture";
export declare class TextureCubeFaceData {
    faceTextureRef: {
        [key: string]: {
            t: GPUTexture;
            v: GPUTextureView;
        };
    };
    private _texture;
    constructor(texture: Texture);
    uploadTexture(mip: number, texture: Texture): this;
    uploadErpTexture(texture: Texture): this;
    getGpuSource(mip: number): {
        t: GPUTexture;
        v: GPUTextureView;
    };
    private generateMipmap;
    private generateMipmapAtLevel;
}
