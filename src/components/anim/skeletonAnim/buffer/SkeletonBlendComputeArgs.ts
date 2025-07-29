import { MemoryDO } from "../../../../core/pool/memory/MemoryDO";
import { MemoryInfo } from "../../../../core/pool/memory/MemoryInfo";
import { webGPUContext } from "../../../../gfx/graphics/webGpu/Context3D";

export class SkeletonBlendComputeArgs extends MemoryDO {
  public numJoint: MemoryInfo;
  public numState: MemoryInfo;
  public time: MemoryInfo;
  public weight: MemoryInfo;
  public argumentsData: { [name: string]: MemoryInfo };
  protected _isDirty: boolean = false;
  protected _argumentsBuffer: GPUBuffer;
  protected _argumentsBufferEntries: GPUBindGroupEntry;

  constructor() {
    super();
    this.allocationMemorySet([
      { name: `numJoint`, data: [0] },
      { name: `numState`, data: [0] },
      { name: `retain1`, data: [0] },
      { name: `retain2`, data: [0] },
      { name: `time`, data: [0, 0] },
      { name: `weight`, data: [0, 0] },
    ]);
    this.generateGPUBuffer();
  }

  public getGPUBuffer(): GPUBuffer {
    return this._argumentsBuffer;
  }

  public getGPUBindGroupEntry(): GPUBindGroupEntry {
    return this._argumentsBufferEntries;
  }

  public updateGPUBuffer(): this {
    if (this._isDirty) {
      this._isDirty = false;
      webGPUContext.device.queue.writeBuffer(
        this._argumentsBuffer,
        0,
        this.shareDataBuffer
      );
    }
    return this;
  }

  protected allocationMemorySet(
    dataDic: { name: string; data: number[] }[]
  ): void {
    this.argumentsData = {};

    let count = 0;
    for (let i = 0; i < dataDic.length; i++) {
      const element = dataDic[i];
      count += element.data.length;
    }

    this.allocation(count * 4);

    let self = this;
    for (let i = 0; i < dataDic.length; i++) {
      const element = dataDic[i];
      const key = element.name;
      this.argumentsData[key] = this.allocation_node(element.data.length * 4);
    }
  }

  protected generateGPUBuffer() {
    let device = webGPUContext.device;

    this._argumentsBuffer = device.createBuffer({
      size: this.shareDataBuffer.byteLength,
      usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
      mappedAtCreation: false,
    });

    this._argumentsBufferEntries = {
      binding: 0,
      resource: {
        buffer: this._argumentsBuffer,
        offset: 0,
        size: this.shareDataBuffer.byteLength,
      },
    };
  }
}
