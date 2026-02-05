import { Texture } from "../gfx/graphics/webGpu/core/texture/Texture";
import { TextureMipmapGenerator } from "../gfx/graphics/webGpu/core/texture/TextureMipmapGenerator";
import { GPUTextureFormat } from "../gfx/graphics/webGpu/WebGPUConst";
import { webGPUContext } from "../gfx/graphics/webGpu/Context3D";
import { GPUContext } from "../gfx/renderJob/GPUContext";

export class Float32ArrayTexture extends Texture {
  private _dataBuffer: GPUBuffer;

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

    // Reuse buffer if size is sufficient, otherwise recreate
    const neededSize = data.byteLength;
    if (!this._dataBuffer || this._dataBuffer.size < neededSize) {
      this._dataBuffer && this._dataBuffer.destroy();
      this._dataBuffer = device.createBuffer({
        size: neededSize,
        usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
      });
    }

    device.queue.writeBuffer(
      this._dataBuffer,
      0,
      data.buffer as ArrayBuffer,
      data.byteOffset,
      data.byteLength
    );
    
    const commandEncoder = GPUContext.beginCommandEncoder();
    commandEncoder.copyBufferToTexture(
      {
        buffer: this._dataBuffer,
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

  /**
   * Clean up resources
   */
  public destroy(force?: boolean): void {
    if (this._dataBuffer) {
      this._dataBuffer.destroy();
      this._dataBuffer = null;
    }
    super.destroy(force);
  }

  /**
   * Update texture content
   * @param width Texture width
   * @param height Texture height
   * @param data Float32Array data (RGBA format: width * height * 4)
   * @param filtering Whether to use filtering (default: true)
   * @param startRow Start row for partial update (optional)
   * @param rowCount Number of rows to update for partial update (optional)
   */
  public updateTexture(
    width: number,
    height: number,
    data: Float32Array,
    filtering: boolean = true,
    startRow?: number,
    rowCount?: number
  ) {
    let device = webGPUContext.device;
    const bytesPerRow = width * 4 * 4; // RGBA32Float: 4 floats * 4 bytes each
    this.format = GPUTextureFormat.rgba32float;

    // Partial update: only update specified rows
    if (startRow !== undefined && rowCount !== undefined && rowCount < height) {
      const updateHeight = rowCount;
      const updateOffset = startRow * width * 4; // Offset in elements (not bytes)
      const updateLength = updateHeight * width * 4;
      const updateData = data.subarray(updateOffset, updateOffset + updateLength);
      
      // Reuse buffer if size is sufficient, otherwise recreate
      const neededSize = updateData.byteLength;
      if (!this._dataBuffer || this._dataBuffer.size < neededSize) {
        this._dataBuffer && this._dataBuffer.destroy();
        this._dataBuffer = device.createBuffer({
          size: neededSize,
          usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
        });
      }

      device.queue.writeBuffer(
        this._dataBuffer,
        0,
        updateData.buffer as ArrayBuffer,
        updateData.byteOffset,
        updateData.byteLength
      );
      
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
      
      if (filtering) {
        this.samplerBindingLayout.type = `non-filtering`;
        this.textureBindingLayout.sampleType = `unfilterable-float`;
      }
      
      // Don't regenerate mipmaps for partial updates
      return;
    }

    // Full update: update entire texture
    // Reuse buffer if size is sufficient, otherwise recreate
    const neededSize = data.byteLength;
    if (!this._dataBuffer || this._dataBuffer.size < neededSize) {
      this._dataBuffer && this._dataBuffer.destroy();
      this._dataBuffer = device.createBuffer({
        size: neededSize,
        usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
      });
    }

    device.queue.writeBuffer(
      this._dataBuffer,
      0,
      data.buffer as ArrayBuffer,
      data.byteOffset,
      data.byteLength
    );
    
    const commandEncoder = GPUContext.beginCommandEncoder();
    commandEncoder.copyBufferToTexture(
      {
        buffer: this._dataBuffer,
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
  }
}
