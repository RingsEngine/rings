import { GPUTextureFormat } from "../gfx/graphics/webGpu/WebGPUConst";
import { webGPUContext } from "../gfx/graphics/webGpu/Context3D";
import { ITexture } from "../gfx/graphics/webGpu/core/texture/ITexture";
import { Texture } from "../gfx/graphics/webGpu/core/texture/Texture";

export class Depth2DTextureArray extends Texture implements ITexture {
  constructor(
    width: number,
    height: number,
    format: GPUTextureFormat = GPUTextureFormat.depth32float,
    numberLayer: number = 4
  ) {
    super(width, height, numberLayer);
    this.format = format;
    this.mipmapCount = 1;
    this.init();
  }

  internalCreateBindingLayoutDesc() {
    this.textureBindingLayout.sampleType = `depth`;
    this.textureBindingLayout.viewDimension = `2d-array`;
    this.samplerBindingLayout.type = `filtering`;
    this.sampler_comparisonBindingLayout.type = `comparison`;
  }

  internalCreateTexture() {
    this.textureDescriptor = {
      format: this.format,
      size: {
        width: this.width,
        height: this.height,
        depthOrArrayLayers: this.numberLayer,
      },
      dimension: "2d",
      usage: GPUTextureUsage.COPY_DST | GPUTextureUsage.TEXTURE_BINDING,
    };
    this.gpuTexture = this.getGPUTexture();
  }

  internalCreateView() {
    this.viewDescriptor = {
      dimension: `2d-array`,
    };
    this.view = this.getGPUView();
  }

  internalCreateSampler() {
    this.gpuSampler = webGPUContext.device.createSampler({});
    this.gpuSampler_comparison = webGPUContext.device.createSampler({
      compare: "less",
      label: "sampler_comparison",
    });
  }
}
