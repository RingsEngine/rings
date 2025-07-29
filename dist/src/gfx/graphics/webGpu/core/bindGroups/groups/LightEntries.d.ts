import { View3D } from "../../../../../../core/View3D";
import { DDGIIrradianceVolume } from "../../../../../renderJob/passRenderer/ddgi/DDGIIrradianceVolume";
import { StorageGPUBuffer } from "../../buffer/StorageGPUBuffer";
export declare class LightEntries {
    storageGPUBuffer: StorageGPUBuffer;
    irradianceVolume: DDGIIrradianceVolume;
    private _lightList;
    constructor();
    update(view: View3D): void;
    private writeLightBytes;
}
