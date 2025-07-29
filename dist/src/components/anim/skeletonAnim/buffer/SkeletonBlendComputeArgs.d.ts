import { MemoryDO } from "../../../../core/pool/memory/MemoryDO";
import { MemoryInfo } from "../../../../core/pool/memory/MemoryInfo";
export declare class SkeletonBlendComputeArgs extends MemoryDO {
    numJoint: MemoryInfo;
    numState: MemoryInfo;
    time: MemoryInfo;
    weight: MemoryInfo;
    argumentsData: {
        [name: string]: MemoryInfo;
    };
    protected _isDirty: boolean;
    protected _argumentsBuffer: GPUBuffer;
    protected _argumentsBufferEntries: GPUBindGroupEntry;
    constructor();
    getGPUBuffer(): GPUBuffer;
    getGPUBindGroupEntry(): GPUBindGroupEntry;
    updateGPUBuffer(): this;
    protected allocationMemorySet(dataDic: {
        name: string;
        data: number[];
    }[]): void;
    protected generateGPUBuffer(): void;
}
