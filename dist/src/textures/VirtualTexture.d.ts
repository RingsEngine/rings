import { Texture } from "../gfx/graphics/webGpu/core/texture/Texture";
/**
 * 虚拟纹理 类似于 Three.js 的 WebGLRenderTarget
 */
export declare class VirtualTexture extends Texture {
    resolveTarget: GPUTextureView;
    sampleCount: number;
    clone(): VirtualTexture;
    /**
     * create virtual texture
     * @param width width of texture
     * @param height height of texture
     * @param format GPUTextureFormat, default value is rgba8unorm
     * @param useMipmap whether or not gen mipmap
     * @returns
     */
    constructor(width: number, height: number, format?: GPUTextureFormat, useMipMap?: boolean, usage?: GPUFlagsConstant, numberLayer?: number, sampleCount?: number, mipmapCount?: number);
    resize(width: any, height: any): void;
    /**
     * create rt texture
     * @param width texture width
     * @param height texture height
     * @param data  texture pixel data
     * @param useMipmap texture use mipmap switch
     * @returns
     */
    create(width: number, height: number, useMiamp?: boolean): void;
    readTextureToImage(): ArrayBuffer;
}
