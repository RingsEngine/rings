import { Matrix4 } from "../../math/Matrix4";
import { Ray } from "../../math/Ray";
import { Vector3 } from "../../math/Vector3";
import { ColliderComponent } from "../ColliderComponent";
export type HitInfo = {
    intersectPoint?: Vector3;
    normal?: Vector3;
    distance: number;
    collider?: ColliderComponent;
};
export declare enum ColliderShapeType {
    None = 0,
    Box = 1,
    Capsule = 2,
    Sphere = 3,
    Mesh = 4
}
export declare class ColliderShape {
    private _center;
    private _size;
    private _halfSize;
    protected _shapeType: ColliderShapeType;
    protected static v3_help_0: Vector3;
    protected static helpMatrix: Matrix4;
    protected static helpRay: Ray;
    constructor();
    get shapeType(): ColliderShapeType;
    setFromCenterAndSize(ct?: Vector3, sz?: Vector3): this;
    get center(): Vector3;
    set center(value: Vector3);
    get size(): Vector3;
    set size(value: Vector3);
    get halfSize(): Vector3;
    rayPick(ray: Ray, fromMatrix: Matrix4): HitInfo;
}
