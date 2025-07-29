import { Texture } from "../gfx/graphics/webGpu/core/texture/Texture";
export declare class Float32ArrayTexture extends Texture {
    create(width: number, height: number, data: Float32Array, filtering?: boolean): void;
    fromBuffer(width: number, height: number, textureDataBuffer: GPUBuffer): this;
}
