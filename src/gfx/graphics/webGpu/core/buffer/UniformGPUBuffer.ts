import { GPUBufferType } from "./GPUBufferType";
import { GPUBufferBase } from "./GPUBufferBase";

export class UniformGPUBuffer extends GPUBufferBase {
  constructor(size: number, data?: Float32Array) {
    super();
    this.bufferType = GPUBufferType.UniformGPUBuffer;
    this.createBuffer(
      GPUBufferUsage.UNIFORM |
        GPUBufferUsage.COPY_DST |
        GPUBufferUsage.COPY_SRC,
      size,
      data,
      "UniformGPUBuffer"
    );
  }

  public genUniformNodes() {}
}
