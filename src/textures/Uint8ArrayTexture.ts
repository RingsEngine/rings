import { Texture } from "../gfx/graphics/webGpu/core/texture/Texture";
import { TextureMipmapGenerator } from "../gfx/graphics/webGpu/core/texture/TextureMipmapGenerator";
import { GPUTextureFormat } from "../gfx/graphics/webGpu/WebGPUConst";
import { webGPUContext } from "../gfx/graphics/webGpu/Context3D";
import { GPUContext } from "../gfx/renderJob/GPUContext";

export class Uint8ArrayTexture extends Texture {
  private _dataBuffer: GPUBuffer;

  public create(
    width: number,
    height: number,
    data: Uint8Array,
    useMipmap: boolean = false
  ): this {
    let device = webGPUContext.device;
    const bytesPerRow = Math.ceil((width * 4) / 256) * 256;

    this.format = GPUTextureFormat.rgba8unorm;
    this.mipmapCount = Math.floor(useMipmap ? Math.log2(width) : 1);
    this.createTextureDescriptor(width, height, this.mipmapCount, this.format);

    const textureDataBuffer = (this._dataBuffer = device.createBuffer({
      size: data.byteLength,
      usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
    }));

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

    if (useMipmap) {
      TextureMipmapGenerator.webGPUGenerateMipmap(this);
    }
    return this;
  }

  public updateTexture(width: number, height: number, data: Uint8Array, startRow?: number, rowCount?: number) {
    let device = webGPUContext.device;
    const bytesPerRow = Math.ceil((width * 4) / 256) * 256;
    this.mipmapCount = Math.floor(true ? Math.log2(width) : 1);

    // Partial update: only update specified rows
    if (startRow !== undefined && rowCount !== undefined && rowCount < height) {
      const updateHeight = rowCount;
      const updateOffset = startRow * width * 4; // Offset in bytes for the data array
      const updateData = data.subarray(updateOffset, updateOffset + updateHeight * width * 4);
      
      // Reuse buffer if size is sufficient, otherwise recreate
      const neededSize = updateData.byteLength;
      if (!this._dataBuffer || this._dataBuffer.size < neededSize) {
        this._dataBuffer && this._dataBuffer.destroy();
        this._dataBuffer = device.createBuffer({
          size: neededSize,
          usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
        });
      }

      device.queue.writeBuffer(this._dataBuffer, 0, updateData.buffer, updateData.byteOffset, updateData.byteLength);
      const commandEncoder = GPUContext.beginCommandEncoder();
      commandEncoder.copyBufferToTexture(
        {
          buffer: this._dataBuffer,
          bytesPerRow: bytesPerRow,
          offset: 0,
        },
        {
          texture: this.getGPUTexture(),
          origin: [0, startRow, 0], // Start at row startRow
        },
        {
          width: width,
          height: updateHeight,
          depthOrArrayLayers: 1,
        }
      );

      GPUContext.endCommandEncoder(commandEncoder);
      // Don't regenerate mipmaps for partial updates
      return;
    }

    // Full update: update entire texture
    this._dataBuffer && this._dataBuffer.destroy();
    this._dataBuffer = null;
    const textureDataBuffer = (this._dataBuffer = device.createBuffer({
      size: data.byteLength,
      usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
    }));

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
    this.gpuSampler = device.createSampler(this);

    if (this.mipmapCount > 1) {
      TextureMipmapGenerator.webGPUGenerateMipmap(this);
    }
  }
}
