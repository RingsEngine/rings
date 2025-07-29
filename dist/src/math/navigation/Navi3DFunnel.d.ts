import { Vector3 } from "../Vector3";
import { Navi3DTriangle } from "./Navi3DTriangle";
export declare class Navi3DFunnel {
    private _aiRadius;
    private _router;
    private _result;
    private _tempPublicEdgeList;
    private _tempSamePlaneList;
    private static CROSS_TEST_DIRECTION;
    constructor();
    searchPath(startPt: Vector3, endPt: Vector3, triangleList: Array<Navi3DTriangle>, radius?: number): boolean;
    get path(): Array<Vector3>;
    private searchEnable;
    private search;
    private optimusTerminusFat;
    private pushAllPathPoint2;
    private optimusByRadius;
    private getFatPoint;
}
