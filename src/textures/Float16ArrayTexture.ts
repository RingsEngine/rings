import { Texture } from "../gfx/graphics/webGpu/core/texture/Texture";
import { TextureMipmapGenerator } from "../gfx/graphics/webGpu/core/texture/TextureMipmapGenerator";
import { GPUTextureFormat } from "../gfx/graphics/webGpu/WebGPUConst";
import { webGPUContext } from "../gfx/graphics/webGpu/Context3D";
import { toHalfFloat } from "../util/Convert";
import { GPUContext } from "../gfx/renderJob/GPUContext";

// Optimized batch conversion using shared views
const _floatView = new Float32Array(1);
const _int32View = new Int32Array(_floatView.buffer);

/**
 * Batch convert numbers to half float (optimized version)
 * @param src Source number array
 * @param dst Destination Uint16Array
 * @param offset Start offset in both arrays
 * @param length Number of elements to convert
 */
function batchConvertToHalfFloat(src: number[], dst: Uint16Array, offset: number, length: number): void {
  for (let i = 0; i < length; i++) {
    const val = src[offset + i];
    _floatView[0] = val;
    const x = _int32View[0];

    let bits = (x >> 16) & 0x8000;
    let m = (x >> 12) & 0x07ff;
    const e = (x >> 23) & 0xff;

    if (e < 103) {
      dst[offset + i] = bits;
      continue;
    }

    if (e > 142) {
      bits |= 0x7c00;
      bits |= (e == 255 ? 1 : 0) && x & 0x007fffff;
      dst[offset + i] = bits;
      continue;
    }

    if (e < 114) {
      m |= 0x0800;
      bits |= (m >> (114 - e)) + ((m >> (113 - e)) & 1);
      dst[offset + i] = bits;
      continue;
    }

    bits |= ((e - 112) << 10) | (m >> 1);
    bits += m & 1;
    dst[offset + i] = bits;
  }
}
/**
 * @internal
 * Float16Array texture
 * @group Texture
 */
export class Float16ArrayTexture extends Texture {
  public uint16Array: Uint16Array;
  private _dataBuffer: GPUBuffer;
  /**
   * 使用 Uint16Array 填充纹理（Float16 格式），格式为[红0, 绿0, 蓝0, 透明度0, 红1, 绿1, 蓝1, 透明度1...]
   * @param width 纹理宽度
   * @param height 纹理高度
   * @param data Float16 数据数组（Uint16Array），每个元素是一个 Float16 值
   * @param useMipmap 是否生成Mipmap
   * @returns 返回纹理实例
   */
  public create(
    width: number,
    height: number,
    data: Uint16Array | null = null,
    mipmap: boolean = true
  ): this {
    if (data == null) {
      const size = width * height * 4;
      data = new Uint16Array(size);
      data.fill(0);
    }
    this.updateTexture(width, height, data, mipmap);
    return this;
  }

  /**
   * 更新纹理内容
   * @param width 纹理宽度
   * @param height 纹理高度
   * @param data Float16 数据数组（Uint16Array），每个元素是一个 Float16 值
   * @param mipmap 是否生成Mipmap
   * @param startRow 起始行（部分更新）
   * @param rowCount 更新的行数（部分更新）
   */
  public updateTexture(
    width: number,
    height: number,
    data: Uint16Array,
    mipmap: boolean = true,
    startRow?: number,
    rowCount?: number
  ) {
    if (width != this.width || height != this.height) {
      this._dataBuffer && this._dataBuffer.destroy();
      this._dataBuffer = null;
      this.gpuTexture && this.gpuTexture.destroy();
      this.gpuTexture = null;
    }

    // Store reference to the data
    this.uint16Array = data;
    let device = webGPUContext.device;
    const bytesPerRow = width * 4 * 2;
    this.format = GPUTextureFormat.rgba16float;

    this.mipmapCount = Math.floor(mipmap ? Math.log2(width) : 1);
    this.createTextureDescriptor(width, height, this.mipmapCount, this.format);

    // Partial update: only convert and update specified rows
    if (startRow !== undefined && rowCount !== undefined && rowCount < height) {
      const updateHeight = rowCount;
      const updateOffset = startRow * width * 4; // Offset in elements
      const updateLength = updateHeight * width * 4;
      
      // Create subarray for the update region
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

      device.queue.writeBuffer(this._dataBuffer, 0, updateData.buffer as ArrayBuffer, updateData.byteOffset, updateData.byteLength);
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
      if (!this.useMipmap) {
        this.samplerBindingLayout.type = `filtering`;
        this.textureBindingLayout.sampleType = `float`;
      }
      GPUContext.endCommandEncoder(commandEncoder);
      // Don't regenerate mipmaps for partial updates
      return;
    }

    // Full update: use data directly
    const uint16Array = data;

    // Reuse buffer if size is sufficient, otherwise recreate
    const neededSize = uint16Array.byteLength;
    if (!this._dataBuffer || this._dataBuffer.size < neededSize) {
      this._dataBuffer && this._dataBuffer.destroy();
      this._dataBuffer = device.createBuffer({
        size: neededSize,
        usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
      });
    }

    device.queue.writeBuffer(this._dataBuffer, 0, uint16Array.buffer as ArrayBuffer, uint16Array.byteOffset, uint16Array.byteLength);
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
    if (!this.useMipmap) {
      this.samplerBindingLayout.type = `filtering`;
      this.textureBindingLayout.sampleType = `float`;
    }
    GPUContext.endCommandEncoder(commandEncoder);

    this.gpuSampler = device.createSampler(this);
    this.gpuTexture = this.getGPUTexture();

    if (this.mipmapCount > 1) TextureMipmapGenerator.webGPUGenerateMipmap(this);
  }
}
