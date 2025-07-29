import { View3D } from "../../core/View3D";
import { Vector2 } from "../../math/Vector2";
import { Vector3 } from "../../math/Vector3";
export declare class PickCompute {
    private _computeShader;
    private _outBuffer;
    constructor();
    init(): void;
    compute(view: View3D): void;
    getPickMeshID(): number;
    getPickWorldPosition(target?: Vector3): Vector3;
    getPickWorldNormal(target?: Vector3): Vector3;
    getPickScreenUV(target?: Vector2): Vector2;
}
