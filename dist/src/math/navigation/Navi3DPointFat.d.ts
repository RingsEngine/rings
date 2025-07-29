import { Navi3DEdge } from "./Navi3DEdge";
import { Navi3DPoint } from "./Navi3DPoint";
export declare class Navi3DPointFat extends Navi3DPoint {
    private _ownerPoint;
    private _ownerEdge;
    radius: number;
    constructor(_point: Navi3DPoint, _edge: Navi3DEdge);
    get ownerPoint(): Navi3DPoint;
    get ownerEdge(): Navi3DEdge;
    scalePoint(value?: number): Navi3DPointFat;
}
