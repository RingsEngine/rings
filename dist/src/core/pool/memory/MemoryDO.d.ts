import { MemoryInfo } from "./MemoryInfo";
export declare class MemoryDO {
    shareDataBuffer: ArrayBuffer;
    private _byteOffset;
    allocation(byteSize: number): void;
    allocation_node(byteSize: number): MemoryInfo;
    allocation_memory(memoryInfo: MemoryInfo): MemoryInfo;
    reset(): void;
    destroy(force?: boolean): void;
}
