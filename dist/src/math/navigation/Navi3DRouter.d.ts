import { Vector3 } from "../Vector3";
import { Navi3DEdge } from "./Navi3DEdge";
import { Navi3DPoint } from "./Navi3DPoint";
export declare class Navi3DRouter {
    endPoint: Vector3;
    curPoint: Vector3;
    rayA: Vector3;
    rayB: Vector3;
    rayAPoint: Navi3DPoint;
    rayBPoint: Navi3DPoint;
    static RAY_1: Vector3;
    static RAY_2: Vector3;
    static TEST_RAY: Vector3;
    static TEST_RAY_1: Vector3;
    static TEST_RAY_2: Vector3;
    private static CALC_CROSS_POINT;
    private static CALC_CROSS_TEST;
    cornerPoint: Navi3DPoint;
    cornerEdge: Navi3DEdge;
    continuePass(fromPt: Vector3, endPt: Vector3, fromEdge: Navi3DEdge): void;
    passEdge(commonEdge: Navi3DEdge, nextCommonEdge: Navi3DEdge, targetPoint: Vector3, lastEdge: boolean): boolean;
    private checkEndPoint;
    calcCrossEdge(_edge: Navi3DEdge, linePoint: Vector3, lineDirection: Vector3): Vector3;
    calcCrossPoint(segmentPt1: Vector3, segmentPt2: Vector3, linePoint: Vector3, lineDirection: Vector3): Vector3;
    calcCrossPointOut(segmentPt1: Vector3, segmentPt2: Vector3, linePoint: Vector3, lineDirection: Vector3): Vector3;
    hasCrossPoint(segmentPt1: Vector3, segmentPt2: Vector3, linePoint: Vector3, lineDirection: Vector3): boolean;
    private isPointAtCenter;
    resetData(): void;
}
