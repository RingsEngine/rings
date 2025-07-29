import { CurveValueType, Quaternion, Vector2, Vector3, Vector4 } from "../../..";
export declare class ValueOp<T extends CurveValueType> {
    static sub<T extends CurveValueType>(v1: T, v2: T): number | Vector2 | Vector4 | Vector3 | Quaternion;
}
