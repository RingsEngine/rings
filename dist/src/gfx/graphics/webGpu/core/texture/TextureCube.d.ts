import { Texture } from "./Texture";
export declare class TextureCube extends Texture {
    width: number;
    height: number;
    depthOrArrayLayers: number;
    visibility: number;
    textureBindingLayout: GPUTextureBindingLayout;
    samplerBindingLayout: GPUSamplerBindingLayout;
    constructor();
    protected createTextureDescriptor(width: number, height: number, mipLevelCount: number, format: GPUTextureFormat, usage?: number, sizeCount?: number): void;
}
