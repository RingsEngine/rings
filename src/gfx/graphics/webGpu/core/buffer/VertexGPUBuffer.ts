import { MemoryDO } from "../../../../../core/pool/memory/MemoryDO";
import { MemoryInfo } from "../../../../../core/pool/memory/MemoryInfo";
import { webGPUContext } from "../../Context3D";
import { GPUBufferBase } from "./GPUBufferBase";
import { GPUBufferType } from "./GPUBufferType";

export class VertexGPUBuffer extends GPUBufferBase {
  public node: MemoryInfo;
  constructor(size: number) {
    super();
    this.bufferType = GPUBufferType.VertexGPUBuffer;
    this.createVertexBuffer(
      GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST | GPUBufferUsage.VERTEX,
      size
    );
  }

  protected createVertexBuffer(usage: GPUBufferUsageFlags, size: number) {
    let device = webGPUContext.device;
    this.byteSize = size * Float32Array.BYTES_PER_ELEMENT;
    this.usage = usage;
    if (this.buffer) {
      this.destroy();
    }
    this.buffer = device.createBuffer({
      label: "VertexGPUBuffer",
      size: this.byteSize,
      usage: usage,
      mappedAtCreation: false,
    });

    this.memory = new MemoryDO();
    this.memoryNodes = new Map<string | number, MemoryInfo>();
    this.memory.allocation(this.byteSize);
    this.node = this.memory.allocation_node(this.byteSize);
  }
}
