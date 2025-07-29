import { Texture } from "../gfx/graphics/webGpu/core/texture/Texture";
import { TextureMipmapGenerator } from "../gfx/graphics/webGpu/core/texture/TextureMipmapGenerator";
import { GPUTextureFormat } from "../gfx/graphics/webGpu/WebGPUConst";
import { webGPUContext } from "../gfx/graphics/webGpu/Context3D";
import { toHalfFloat } from "../util/Convert";
import { GPUContext } from "../gfx/renderJob/GPUContext";
/**
 * @internal
 * Float16Array texture
 * @group Texture
 */
export class Float16ArrayTexture extends Texture {
  public uint16Array: Uint16Array;
  public floatArray: number[];
  private _dataBuffer: GPUBuffer;
  /**
   * 使用数字数组填充纹理，格式为[红0, 绿0, 蓝0, 透明度0, 红1, 绿1, 蓝1, 透明度1...]
   * @param width 纹理宽度
   * @param height 纹理高度
   * @param numbers 每个像素的颜色值数组
   * @param useMipmap 是否生成Mipmap
   * @returns 返回纹理实例
   */
  public create(
    width: number,
    height: number,
    numbers: number[] = null,
    mipmap: boolean = true
  ): this {
    if (numbers == null) {
      numbers = [];
      for (let i = 0, c = width * height * 4; i < c; i++) {
        numbers[i] = 0;
      }
    }
    this.updateTexture(width, height, numbers, mipmap);
    return this;
  }

  /**
   * 更新纹理内容
   * @param width 纹理宽度
   * @param height 纹理高度
   * @param numbers 像素数据数组
   * @param mipmap 是否生成Mipmap
   */
  public updateTexture(
    width: number,
    height: number,
    numbers: number[],
    mipmap: boolean = true
  ) {
    if (width != this.width || height != this.height) {
      this._dataBuffer && this._dataBuffer.destroy();
      this._dataBuffer = null;
      this.gpuTexture && this.gpuTexture.destroy();
      this.gpuTexture = null;
    }

    this.floatArray = numbers;
    let device = webGPUContext.device;
    const bytesPerRow = width * 4 * 2;
    this.format = GPUTextureFormat.rgba16float;

    this.mipmapCount = Math.floor(mipmap ? Math.log2(width) : 1);
    this.createTextureDescriptor(width, height, this.mipmapCount, this.format);
    if (!this.uint16Array || this.uint16Array.length != numbers.length) {
      this.uint16Array = new Uint16Array(numbers.length);
    }
    let uint16Array = this.uint16Array;
    for (let i = 0, c = uint16Array.length; i < c; i++) {
      uint16Array[i] = toHalfFloat(numbers[i]);
    }
    const textureDataBuffer = (this._dataBuffer = device.createBuffer({
      size: uint16Array.byteLength,
      usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
    }));

    device.queue.writeBuffer(textureDataBuffer, 0, uint16Array);
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
