import { IQuadNode } from "../../core/tree/quad/IQuadNode";
import { Vector3 } from "../Vector3";
import { Navi3DEdge } from "./Navi3DEdge";
import { Navi3DPoint } from "./Navi3DPoint";
import { Navi3DTriangle } from "./Navi3DTriangle";
export declare class Navi3DMesh {
    private _nav3dPoints;
    private _nav3dEdges;
    private _nav3dTriangles;
    private _path;
    private _edgesDict;
    private _nav3dAstar;
    private _nav3dFunnel;
    private _terrainQuad;
    private _triangleList;
    get edges(): Array<Navi3DEdge>;
    get points(): Array<Navi3DPoint>;
    get path(): Array<Vector3>;
    get triangles(): Array<Navi3DTriangle>;
    constructor(pointList: Array<Vector3>, triangleIndexList: Array<Array<number>>);
    getTriangleAtPoint(point: Vector3, threshold?: number): IQuadNode;
    findPath(startPt: Vector3, endPt: Vector3, aiRadius?: number): boolean;
    private initPoints;
    private initEdgesAndTriangles;
    private tryCreateEdge;
    private createConnections;
}
