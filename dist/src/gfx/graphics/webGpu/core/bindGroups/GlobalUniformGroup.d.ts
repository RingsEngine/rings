import { Camera3D } from "../../../../../core/Camera3D";
import { UniformGPUBuffer } from "../buffer/UniformGPUBuffer";
import { MatrixBindGroup } from "./MatrixBindGroup";
export declare class GlobalUniformGroup {
    uuid: string;
    usage: number;
    globalBindGroup: GPUBindGroup;
    uniformGPUBuffer: UniformGPUBuffer;
    private matrixBindGroup;
    private uniformByteLength;
    private matrixesByteLength;
    private shadowMatrixRaw;
    private csmMatrixRaw;
    private csmShadowBias;
    shadowLights: Float32Array<ArrayBuffer>;
    dirShadowStart: number;
    dirShadowEnd: number;
    pointShadowStart: number;
    pointShadowEnd: number;
    constructor(matrixBindGroup: MatrixBindGroup);
    createBindGroup(): void;
    setCamera(camera: Camera3D): void;
    setShadowCamera(camera: Camera3D): void;
    setShadowLight(): void;
}
