import { Texture } from "../gfx/graphics/webGpu/core/texture/Texture";
import { GPUTextureFormat } from "../gfx/graphics/webGpu/WebGPUConst";
import { webGPUContext } from "../gfx/graphics/webGpu/Context3D";

/**
 * @internal
 * R32Uint texture backed by Uint32Array
 * @group Texture
 */
export class R32UintTexture extends Texture {
  private _dataBuffer: GPUBuffer;
  
  public create(
    width: number,
    height: number,
    data: Uint32Array
  ): this {
    let device = webGPUContext.device;
    // R32U: 4 bytes per texel (vs RGBA32U: 16 bytes per texel)
    const bytesPerRow = width * 4;

    this.format = GPUTextureFormat.r32uint;
    const mipmapCount = 1;
    this.createTextureDescriptor(width, height, mipmapCount, this.format);

    const textureDataBuffer = (this._dataBuffer = device.createBuffer({
      size: data.byteLength,
      usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
    }));

    device.queue.writeBuffer(textureDataBuffer, 0, data.buffer as ArrayBuffer);
    const encoder = device.createCommandEncoder();
    encoder.copyBufferToTexture(
      { buffer: textureDataBuffer, bytesPerRow: bytesPerRow },
      { texture: this.getGPUTexture() },
      { width: width, height: height, depthOrArrayLayers: 1 }
    );
    device.queue.submit([encoder.finish()]);

    // integer textures are sampled with textureLoad (no sampler)
    this.samplerBindingLayout.type = `non-filtering`;
    this.textureBindingLayout.sampleType = `uint`;
    this.gpuSampler = device.createSampler({});

    return this;
  }

  public updateTexture(width: number, height: number, data: Uint32Array) {
    let device = webGPUContext.device;
    // R32U: 4 bytes per texel (75% less than RGBA32U)
    const bytesPerRow = width * 4;
    
    // Direct texture write with R32U format
    // 75% less data to transfer compared to RGBA32U
    device.queue.writeTexture(
      { texture: this.getGPUTexture() },
      data.buffer,
      { bytesPerRow: bytesPerRow },
      { width: width, height: height, depthOrArrayLayers: 1 }
    );
  }
}

