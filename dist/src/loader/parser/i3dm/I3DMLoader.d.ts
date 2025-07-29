import { I3DMLoaderBase } from "./I3DMLoaderBase";
import { Matrix4 } from "../../../math/Matrix4";
import { Quaternion } from "../../../math/Quaternion";
import { Vector3 } from "../../../math/Vector3";
export declare class I3DMLoader extends I3DMLoaderBase {
    static tempFwd: Vector3;
    static tempUp: Vector3;
    static tempRight: Vector3;
    static tempPos: Vector3;
    static tempQuat: Quaternion;
    static tempSca: Vector3;
    static tempMat: Matrix4;
    adjustmentTransform: Matrix4;
    private _gltfBuffer;
    constructor();
    parse(buffer: ArrayBuffer): Promise<any>;
}
