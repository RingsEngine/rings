import { Vector4 } from "..";
import { Vector2 } from "./Vector2";
export declare class UV extends Vector2 {
    static uv_0: UV;
    u: number;
    v: number;
    constructor(x?: number, y?: number);
    length(): number;
    static getUVSheet(frame: number, countX: number, countY: number): Vector4;
}
