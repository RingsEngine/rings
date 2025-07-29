import { MemoryDO } from "../../../../core/pool/memory/MemoryDO";
import { MemoryInfo } from "../../../../core/pool/memory/MemoryInfo";
export declare class SkeletonTransformComputeArgs extends MemoryDO {
    numJoint: MemoryInfo;
    numFrame: MemoryInfo;
    retain0: MemoryInfo;
    retain1: MemoryInfo;
    argumentsData: {
        [name: string]: MemoryInfo;
    };
    protected _isDirty: boolean;
    protected _argumentsBuffer: GPUBuffer;
    protected _argumentsBufferEntries: GPUBindGroupEntry;
    constructor();
    getGPUBuffer(): GPUBuffer;
    getGPUBindGroupEntry(): GPUBindGroupEntry;
    updateGPUBuffer(): void;
    protected allocationMemorySet(dataDic: {
        name: string;
        data: number[];
    }[]): void;
    protected generateGPUBuffer(): void;
}
