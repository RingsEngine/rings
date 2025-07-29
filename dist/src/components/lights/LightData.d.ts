import { Color } from "../../math/Color";
import { Vector3 } from "../../math/Vector3";
import { Struct } from "../../util/struct/Struct";
export declare enum LightType {
    None = 0,
    PointLight = 1,
    DirectionLight = 2,
    SpotLight = 3,
    SkyLight = 4
}
export declare class LightData extends Struct {
    static lightSize: number;
    index: number;
    lightType: number;
    radius: number;
    linear: number;
    lightPosition: Vector3;
    lightMatrixIndex: number;
    direction: Vector3;
    quadratic: number;
    lightColor: Color;
    intensity: number;
    innerAngle: number;
    outerAngle: number;
    range: number;
    castShadowIndex: number;
    lightTangent: Vector3;
    iesIndex: number;
}
