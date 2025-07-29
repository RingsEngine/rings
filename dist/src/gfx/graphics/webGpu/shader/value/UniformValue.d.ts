import { Color } from "../../../../../math/Color";
import { Vector2 } from "../../../../../math/Vector2";
import { Vector3 } from "../../../../../math/Vector3";
import { Vector4 } from "../../../../../math/Vector4";
export type UniformValue = number | Vector2 | Vector3 | Vector4 | Color | Float32Array | any;
export declare enum UniformType {
    Number = 0,
    Vector2 = 1,
    Vector3 = 2,
    Vector4 = 3,
    Color = 4,
    Float32Array = 5
}
