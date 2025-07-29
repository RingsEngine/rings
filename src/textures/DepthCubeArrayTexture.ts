import {
  GPUFilterMode,
  GPUTextureFormat,
} from "../gfx/graphics/webGpu/WebGPUConst";
import { webGPUContext } from "../gfx/graphics/webGpu/Context3D";
import { ITexture } from "../gfx/graphics/webGpu/core/texture/ITexture";
import { Texture } from "../gfx/graphics/webGpu/core/texture/Texture";

export class DepthCubeArrayTexture extends Texture implements ITexture {
  constructor(width: number, height: number, numberLayer: number) {
    super(width, height, numberLayer);
    this.format = GPUTextureFormat.depth32float;
    this.mipmapCount = 1;
    this.init();
  }

  internalCreateBindingLayoutDesc() {
    this.textureBindingLayout.sampleType = `depth`;
    this.textureBindingLayout.viewDimension = `cube-array`;
    this.samplerBindingLayout.type = `filtering`;
    this.sampler_comparisonBindingLayout.type = `comparison`;
  }

  internalCreateTexture() {
    this.textureDescriptor = {
      format: this.format,
      size: {
        width: this.width,
        height: this.height,
        depthOrArrayLayers: 6 * this.numberLayer,
      },
      dimension: "2d",
      usage: GPUTextureUsage.COPY_DST | GPUTextureUsage.TEXTURE_BINDING,
    };
    this.gpuTexture = this.getGPUTexture();
  }

  internalCreateView() {
    this.viewDescriptor = {
      dimension: `cube-array`,
    };
    this.view = this.getGPUView();
  }

  internalCreateSampler() {
    this.gpuSampler = webGPUContext.device.createSampler({
      minFilter: GPUFilterMode.linear,
      magFilter: GPUFilterMode.linear,
    });
    this.gpuSampler_comparison = webGPUContext.device.createSampler({
      compare: "less",
      label: "sampler_comparison",
    });
  }
}
