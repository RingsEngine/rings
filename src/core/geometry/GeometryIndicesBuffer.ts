import { ArrayBufferData } from "../../gfx/graphics/webGpu/core/buffer/ArrayBufferData";
import { IndicesGPUBuffer } from "../../gfx/graphics/webGpu/core/buffer/IndicesGPUBuffer";
import { VertexAttributeData } from "./VertexAttributeData";

export class GeometryIndicesBuffer {
  public uuid: string = "";
  public name: string;
  public indicesGPUBuffer: IndicesGPUBuffer;
  public indicesFormat: GPUIndexFormat = `uint16`;
  public indicesCount: number = 0;
  constructor() {}

  public createIndicesBuffer(indicesData: VertexAttributeData) {
    if (indicesData.data instanceof Uint16Array) {
      this.indicesFormat = `uint16`;
    } else if (indicesData.data instanceof Uint32Array) {
      this.indicesFormat = `uint32`;
    }
    this.indicesCount = indicesData.data.length;
    this.indicesGPUBuffer = new IndicesGPUBuffer(indicesData.data);
  }

  public upload(data: ArrayBufferData) {
    this.indicesGPUBuffer.indicesNode.setArrayBuffer(0, data as ArrayBuffer);
    this.indicesGPUBuffer.apply();
  }

  public compute() {}

  destroy() {
    this.uuid = null;
    this.name = null;
    this.indicesFormat = null;
    this.indicesCount = null;
    this.indicesGPUBuffer.destroy();
    this.indicesGPUBuffer = null;
  }
}
