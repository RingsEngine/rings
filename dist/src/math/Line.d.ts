import { Color } from "./Color";
import { Matrix4 } from "./Matrix4";
import { Ray } from "./Ray";
import { Vector3 } from "./Vector3";
export declare enum LineClassification {
    COLLINEAR = 0,
    LINES_INTERSECT = 1,
    SEGMENTS_INTERSECT = 2,
    A_BISECTS_B = 3,
    B_BISECTS_A = 4,
    PARALELL = 5
}
export declare enum PointClassification {
    ON_LINE = 0,
    LEFT_SIDE = 1,
    RIGHT_SIDE = 2
}
export declare class Line {
    static cacluteLine0: Line;
    static cacluteLine1: Line;
    start: Vector3;
    end: Vector3;
    color: Color;
    private _normal;
    private _normalCalculated;
    constructor(start?: Vector3, end?: Vector3);
    set(start: Vector3, end: Vector3): void;
    getCenter(): Vector3;
    inverse(): void;
    equals(l: Line): boolean;
    toArray(): number[];
    static getLines(ps: Vector3[]): Line[];
    intersection(other: Line, pIntersectPoint?: Vector3): LineClassification;
    getDirection(): Vector3;
    copyFrom(line: Line): void;
    static IsEqual(d1: any, d2: any): boolean;
    static squreDistanceSegmentToSegment(lineA: Line, lineB: Line, mat?: Matrix4): number;
    isNear(ray: Ray, maxDistance?: number, mat?: Matrix4): boolean;
}
