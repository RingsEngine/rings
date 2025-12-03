import { Texture } from "../gfx/graphics/webGpu/core/texture/Texture";
import { TextureMipmapGenerator } from "../gfx/graphics/webGpu/core/texture/TextureMipmapGenerator";
import { GPUTextureFormat } from "../gfx/graphics/webGpu/WebGPUConst";
import { webGPUContext } from "../gfx/graphics/webGpu/Context3D";
import { GPUContext } from "../gfx/renderJob/GPUContext";

export class Float32ArrayTexture extends Texture {
  public create(
    width: number,
    height: number,
    data: Float32Array,
    filtering: boolean = true
  ): this {
    let device = webGPUContext.device;
    const bytesPerRow = width * 4 * 4;
    this.format = GPUTextureFormat.rgba32float;

    let mipmapCount = 1;
    this.createTextureDescriptor(width, height, mipmapCount, this.format);

    const textureDataBuffer = device.createBuffer({
      size: data.byteLength,
      usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
    });

    device.queue.writeBuffer(textureDataBuffer, 0, data.buffer as ArrayBuffer);
    const commandEncoder = GPUContext.beginCommandEncoder();
    commandEncoder.copyBufferToTexture(
      {
        buffer: textureDataBuffer,
        bytesPerRow: bytesPerRow,
      },
      {
        texture: this.getGPUTexture(),
      },
      {
        width: width,
        height: height,
        depthOrArrayLayers: 1,
      }
    );

    GPUContext.endCommandEncoder(commandEncoder);
    if (filtering) {
      this.samplerBindingLayout.type = `non-filtering`;
      this.textureBindingLayout.sampleType = `unfilterable-float`;
    }

    this.gpuSampler = device.createSampler({});

    if (mipmapCount > 1) TextureMipmapGenerator.webGPUGenerateMipmap(this);
    return this;
  }

  public fromBuffer(
    width: number,
    height: number,
    textureDataBuffer: GPUBuffer
  ): this {
    let device = webGPUContext.device;
    const bytesPerRow = width * 4 * 4;
    this.format = GPUTextureFormat.rgba32float;

    this.mipmapCount = 1;
    this.createTextureDescriptor(width, height, this.mipmapCount, this.format);

    const commandEncoder = GPUContext.beginCommandEncoder();
    commandEncoder.copyBufferToTexture(
      {
        buffer: textureDataBuffer,
        bytesPerRow: bytesPerRow,
      },
      {
        texture: this.getGPUTexture(),
      },
      {
        width: width,
        height: height,
        depthOrArrayLayers: 1,
      }
    );

    GPUContext.endCommandEncoder(commandEncoder);

    this.samplerBindingLayout.type = `non-filtering`;
    this.textureBindingLayout.sampleType = `unfilterable-float`;
    this.gpuSampler = device.createSampler({});
    return this;
  }
}
