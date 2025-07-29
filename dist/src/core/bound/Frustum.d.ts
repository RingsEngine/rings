import { Matrix4 } from "../../math/Matrix4";
import { Object3D } from "../entities/Object3D";
import { Vector3 } from "../../math/Vector3";
import { BoundingBox } from "./BoundingBox";
export declare class Frustum {
    planes: Vector3[];
    corners: Vector3[];
    boundingBox: BoundingBox;
    constructor();
    updateBoundBox(pvInv: Matrix4): this;
    setFrustumCorners(pvInv: Matrix4): void;
    update(vpMatrix: Matrix4): void;
    containsPoint(point: Vector3): boolean;
    containsSphere(object3D: Object3D): 1 | 0 | 2;
    containsBox(box: any): number;
    containsBox2(box: any): number;
}
