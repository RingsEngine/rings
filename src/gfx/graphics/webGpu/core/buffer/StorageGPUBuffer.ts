import { ArrayBufferData } from "./ArrayBufferData";
import { GPUBufferBase } from "./GPUBufferBase";
import { GPUBufferType } from "./GPUBufferType";

export class StorageGPUBuffer extends GPUBufferBase {
  constructor(size: number, usage: number = 0, data?: ArrayBufferData) {
    super();
    this.bufferType = GPUBufferType.StorageGPUBuffer;
    this.createBuffer(
      GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST | usage,
      size,
      data,
      "StorageGPUBuffer"
    );
  }
}
