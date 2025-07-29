import { GeometryBase, Material, PropertyAnimationClip, Texture } from "../../../..";
import { Skeleton } from "../../../../components/anim/skeletonAnim/Skeleton";
import { Color } from "../../../../math/Color";
import { Quaternion } from "../../../../math/Quaternion";
import { Vector2 } from "../../../../math/Vector2";
import { Vector3 } from "../../../../math/Vector3";
import { Vector4 } from "../../../../math/Vector4";
import { BytesArray } from "../../../../util/BytesArray";
import { ValueEnumType } from "./ValueType";
export type CurveValueType = string | number | Vector2 | Vector3 | Vector4 | Quaternion | Color | boolean | Texture | Material | string[] | number[] | Float32Array | GeometryBase | Skeleton | PropertyAnimationClip[];
export declare class ValueParser {
    static parser(bytes: BytesArray): {
        t: ValueEnumType;
        v: CurveValueType;
    };
}
