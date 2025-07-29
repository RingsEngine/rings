import { GPUAddressMode } from "../../WebGPUConst";
import { Texture } from "./Texture";

export class TextureCube extends Texture {
  public width: number = 4;
  public height: number = 4;
  public depthOrArrayLayers: number = 6;
  public visibility: number = GPUShaderStage.FRAGMENT;
  public textureBindingLayout: GPUTextureBindingLayout = {
    viewDimension: "cube",
    multisampled: false,
  };
  public samplerBindingLayout: GPUSamplerBindingLayout = {
    type: "filtering",
  };
  constructor() {
    super(4, 4);
    this.addressModeU = GPUAddressMode.clamp_to_edge;
    this.addressModeV = GPUAddressMode.clamp_to_edge;
    this.addressModeW = GPUAddressMode.clamp_to_edge;
    this.magFilter = this.minFilter = "linear";
    this.mipmapFilter = "linear";
    this.visibility = GPUShaderStage.FRAGMENT;
  }
  protected createTextureDescriptor(
    width: number,
    height: number,
    mipLevelCount: number,
    format: GPUTextureFormat,
    usage: number = GPUTextureUsage.TEXTURE_BINDING |
      GPUTextureUsage.COPY_DST |
      GPUTextureUsage.COPY_SRC |
      GPUTextureUsage.STORAGE_BINDING |
      GPUTextureUsage.RENDER_ATTACHMENT,
    sizeCount: number = 1
  ) {
    this.width = width;
    this.height = height;
    this.format = format;
    this.usage = usage;
    this.textureDescriptor = {
      size: { width: width, height: height, depthOrArrayLayers: 6 },
      mipLevelCount: mipLevelCount,
      format: format,
      usage: usage,
      dimension: "2d",
    };

    if (sizeCount > 1) {
      this.viewDescriptor = {
        dimension: `cube-array`,
      };
    } else {
      this.viewDescriptor = {
        dimension: this.textureBindingLayout.viewDimension,
      };
    }
  }
}
