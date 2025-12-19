import { Texture } from "../gfx/graphics/webGpu/core/texture/Texture";
import { GPUTextureFormat } from "../gfx/graphics/webGpu/WebGPUConst";
import { webGPUContext } from "../gfx/graphics/webGpu/Context3D";
import { GPUContext } from "../gfx/renderJob/GPUContext";

/**
 * @internal
 * RGBA32Uint texture backed by Uint32Array
 * @group Texture
 */
export class Uint32ArrayTexture extends Texture {
  private _dataBuffer: GPUBuffer;
  public create(
    width: number,
    height: number,
    data: Uint32Array
  ): this {
    let device = webGPUContext.device;
    const bytesPerRow = width * 4 * 4;

    this.format = GPUTextureFormat.rgba32uint;
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

    // integer textures are sampled with textureLoad (no sampler). Keep a default sampler anyway.
    this.samplerBindingLayout.type = `non-filtering`;
    this.textureBindingLayout.sampleType = `uint`;
    this.gpuSampler = device.createSampler({});

    return this;
  }

  public updateTexture(width: number, height: number, data: Uint32Array, startRow?: number, rowCount?: number) {
    let device = webGPUContext.device;
    const bytesPerRow = width * 4 * 4;
    
    // Partial update: only update specified rows
    if (startRow !== undefined && rowCount !== undefined && rowCount < height) {
      const updateHeight = rowCount;
      const updateOffset = startRow * width * 4; // Offset in elements
      const updateData = data.subarray(updateOffset, updateOffset + updateHeight * width * 4);
      
      device.queue.writeTexture(
        { 
          texture: this.getGPUTexture(),
          origin: [0, startRow, 0], // Start at row startRow
        },
        updateData.buffer,
        { 
          bytesPerRow: bytesPerRow,
          offset: updateData.byteOffset,
        },
        { width: width, height: updateHeight, depthOrArrayLayers: 1 }
      );
      return;
    }

    // Full update: update entire texture
    device.queue.writeTexture(
      { texture: this.getGPUTexture() },
      data.buffer,
      { bytesPerRow: bytesPerRow },
      { width: width, height: height, depthOrArrayLayers: 1 }
    );
  }
}


