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

export enum ColliderShapeType {
  None,
  Box,
  Capsule,
  Sphere,
  Mesh,
}

export class ColliderShape {
  private _center: Vector3;
  private _size: Vector3;
  private _halfSize: Vector3;
  protected _shapeType: ColliderShapeType = ColliderShapeType.None;
  protected static v3_help_0: Vector3;
  protected static helpMatrix: Matrix4;
  protected static helpRay: Ray;

  constructor() {
    ColliderShape.v3_help_0 ||= new Vector3();
    ColliderShape.helpMatrix ||= new Matrix4();
    ColliderShape.helpRay ||= new Ray();
    this._center = new Vector3();
    this._size = new Vector3();
    this._halfSize = new Vector3();
  }

  public get shapeType() {
    return this._shapeType;
  }

  public setFromCenterAndSize(ct?: Vector3, sz?: Vector3): this {
    ct && this._center.copy(ct);
    sz && this._size.copy(sz);
    return this;
  }

  public get center(): Vector3 {
    return this._center;
  }

  public set center(value: Vector3) {
    this._center.copy(value);
  }

  public get size(): Vector3 {
    return this._size;
  }

  public set size(value: Vector3) {
    this._size.copy(value);
    this._halfSize.copy(value).multiplyScalar(0.5);
  }

  public get halfSize(): Vector3 {
    return this._halfSize;
  }

  public rayPick(ray: Ray, fromMatrix: Matrix4): HitInfo {
    return null;
  }
}
