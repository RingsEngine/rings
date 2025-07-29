import { Vector3 } from "../math/Vector3";
export declare class Vector3Ex {
    static add(v1: Vector3, v2: Vector3, target?: Vector3): Vector3;
    static sub(v1: Vector3, v2: Vector3, target?: Vector3): Vector3;
    static mul(v1: Vector3, v2: Vector3, target?: Vector3): Vector3;
    static mulScale(v1: Vector3, v: number, target?: Vector3): Vector3;
    static div(v1: Vector3, v2: Vector3, target?: Vector3): Vector3;
    static normalize(v1: Vector3): Vector3;
    static dot(v1: Vector3, v2: Vector3): number;
    static calculateVectorAngle_xz(v1: Vector3, v2: Vector3): number;
    static distance(v1: Vector3, v2: Vector3): number;
    static getRandomXYZ(min?: number, max?: number): Vector3;
    static getRandomV3(min: number, max: number, yMin: number, yMax: number): Vector3;
    static sphere(radius: number): Vector3;
    static sphereXYZ(radiusMin: number, radiusMax: number, x?: number, y?: number, z?: number): Vector3;
}
