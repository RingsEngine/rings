import { MemoryDO } from "../../../../../../core/pool/memory/MemoryDO";
import { Probe } from "../../../../../renderJob/passRenderer/ddgi/Probe";
export declare class ProbeEntries {
    gpuBuffer: GPUBuffer;
    probes: Probe[];
    memoryDo: MemoryDO;
    private _probeInfoList;
    initDataUniform(probes: Probe[]): void;
    private updateGPUBuffer;
}
