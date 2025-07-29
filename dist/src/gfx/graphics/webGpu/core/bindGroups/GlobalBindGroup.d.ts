import { Camera3D } from "../../../../../core/Camera3D";
import { Scene3D } from "../../../../../core/Scene3D";
import { GlobalUniformGroup } from "./GlobalUniformGroup";
import { LightEntries } from "./groups/LightEntries";
import { ReflectionEntries } from "./groups/ReflectionEntries";
import { MatrixBindGroup } from "./MatrixBindGroup";
export declare class GlobalBindGroup {
    private static _cameraBindGroups;
    private static _lightEntriesMap;
    private static _reflectionEntriesMap;
    static modelMatrixBindGroup: MatrixBindGroup;
    static init(): void;
    static getAllCameraGroup(): Map<Camera3D, GlobalUniformGroup>;
    static getCameraGroup(camera: Camera3D): GlobalUniformGroup;
    static updateCameraGroup(camera: Camera3D): void;
    static getLightEntries(scene: Scene3D): LightEntries;
    static getReflectionEntries(scene: Scene3D): ReflectionEntries;
}
