import { GPUBufferBase } from "./GPUBufferBase";
import { GPUBufferType } from "./GPUBufferType";

export class ComputeGPUBuffer extends GPUBufferBase {
  constructor(size: number, data?: Float32Array) {
    super();
    this.bufferType = GPUBufferType.ComputeGPUBuffer;
    this.createBuffer(
      GPUBufferUsage.STORAGE |
        GPUBufferUsage.COPY_SRC |
        GPUBufferUsage.COPY_DST,
      size,
      data,
      "ComputeGPUBuffer"
    );
  }
}
