import { Vector3 } from "../Vector3";
export declare class Navi3DPoint extends Vector3 {
    static CALC_VECTOR3D1: Vector3;
    static CALC_VECTOR3D2: Vector3;
    static CALC_VECTOR3D3: Vector3;
    static CALC_VECTOR3D4: Vector3;
    static CALC_VECTOR3D5: Vector3;
    private _pointId;
    constructor(id: number, X: number, Y: number, Z: number);
    get id(): number;
    static equalPoint(p1: Vector3, p2: Vector3): boolean;
    static calcDistance(pt1: Vector3, pt2: Vector3): number;
}
