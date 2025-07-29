import { Matrix4 } from "..";
import { GeometryBase } from "../core/geometry/GeometryBase";
/**
 * @internal
 */
export declare class GeometryUtil {
    static merge(geometries: GeometryBase[], matrixes: Matrix4[], target?: GeometryBase): void;
    static mergeNumber(geometries: GeometryBase, num: number, target?: GeometryBase): GeometryBase;
    static generateNormal(): void;
    static generateTangent(): void;
    static packUV(): void;
}
