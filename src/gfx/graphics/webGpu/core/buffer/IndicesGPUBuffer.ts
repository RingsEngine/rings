import { MemoryDO } from "../../../../../core/pool/memory/MemoryDO";
import { MemoryInfo } from "../../../../../core/pool/memory/MemoryInfo";
import { webGPUContext } from "../../Context3D";
import { ArrayBufferData } from "./ArrayBufferData";
import { GPUBufferBase } from "./GPUBufferBase";
import { GPUBufferType } from "./GPUBufferType";

/**
 * 用于几何体索引的缓冲区
 * 可在计算着色器或CPU代码中写入
 * 使用标志: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST | GPUBufferUsage.INDEX | GPUBufferUsage.INDIRECT
 * @group GFX
 */
export class IndicesGPUBuffer extends GPUBufferBase {
  public indicesNode: MemoryInfo; // 存储索引数据的内存节点
  constructor(data?: ArrayBufferData) {
    super();
    this.bufferType = GPUBufferType.IndicesGPUBuffer; // 设置缓冲区类型为索引缓冲区
    this.createIndicesBuffer(
      GPUBufferUsage.STORAGE |
        GPUBufferUsage.COPY_DST |
        GPUBufferUsage.INDEX |
        GPUBufferUsage.INDIRECT,
      data
    );
  }

  protected createIndicesBuffer(
    usage: GPUBufferUsageFlags,
    data?: ArrayBufferData
  ) {
    let device = webGPUContext.device;
    this.byteSize = data.length * 4;
    this.usage = usage;
    if (this.buffer) {
      this.destroy();
    }
    this.buffer = device.createBuffer({
      label: "IndicesGPUBuffer",
      size: this.byteSize,
      usage: usage,
      mappedAtCreation: false,
    });

    this.memory = new MemoryDO();
    this.memoryNodes = new Map<string | number, MemoryInfo>();
    this.memory.allocation(this.byteSize);
    if (data) {
      // 分配内存节点并设置数据
      this.indicesNode = this.memory.allocation_node(data.length * 4);
      this.indicesNode.setArrayBuffer(0, data);
      this.apply();
    }
  }
}
