import { Struct } from "../../../../../util/struct/Struct";
import { GPUBufferBase } from "./GPUBufferBase";
import { GPUBufferType } from "./GPUBufferType";

export class StructStorageGPUBuffer<T extends Struct> extends GPUBufferBase {
  constructor(struct: { new (): T }, count: number, usage: number = 0) {
    super();
    this.bufferType = GPUBufferType.StructStorageGPUBuffer;
    this.createBufferByStruct(
      GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST | usage,
      struct,
      count
    );
  }
}
