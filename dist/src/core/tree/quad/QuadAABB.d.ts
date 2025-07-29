import { Vector3 } from "../../../math/Vector3";
export declare class QuadAABB {
    minPosX: number;
    minPosY: number;
    maxPosX: number;
    maxPosY: number;
    testID: number;
    points: Array<Vector3>;
    private offsetPosition;
    private static TINY;
    constructor();
    setAABox(cx: number, cy: number, sideX: number, sideY: number): void;
    setOffset(vec: Vector3): void;
    setContainRect(minX: number, minY: number, maxX: number, maxY: number): void;
    clear(): void;
    addPoint(pos: Vector3): void;
    clone(): QuadAABB;
    get radius(): number;
    get sideX(): number;
    get sideY(): number;
    get centreX(): number;
    get centreY(): number;
    overlapTest(box: QuadAABB): boolean;
    isPointInside(pos: Vector3): boolean;
    isIntersectLineSegment(p1x: number, p1y: number, p2x: number, p2y: number): boolean;
}
