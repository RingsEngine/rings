import { Frustum } from "./Frustum";
import { IBound } from "./IBound";
import { Object3D } from "../entities/Object3D";
import { Ray } from "../../math/Ray";
import { Vector3 } from "../../math/Vector3";

export class BoundingBox implements IBound {
  public center: Vector3;
  public extents: Vector3;
  public max: Vector3;
  public min: Vector3;
  public size: Vector3;
  private static maxVector3: Vector3 = new Vector3(1, 1, 1).multiplyScalar(
    Number.MAX_VALUE * 0.1
  );
  private static minVector3: Vector3 = new Vector3(1, 1, 1).multiplyScalar(
    -Number.MAX_VALUE * 0.1
  );
  constructor(center?: Vector3, size?: Vector3) {
    center ||= Vector3.ZERO.clone();
    size ||= Vector3.ZERO.clone();
    this.setFromCenterAndSize(center, size);
  }
  public makeEmpty(): this {
    this.setFromMinMax(BoundingBox.maxVector3, BoundingBox.minVector3);
    return this;
  }
  public setFromMinMax(min: Vector3, max: Vector3): this {
    this.init();
    max.subtract(min, this.size);
    min.add(max, this.center).multiplyScalar(0.5);
    this.extents.copyFrom(this.size).multiplyScalar(0.5);
    this.min.copyFrom(min);
    this.max.copyFrom(max);
    return this;
  }
  private init(): this {
    this.min ||= new Vector3();
    this.max ||= new Vector3();
    this.size ||= new Vector3();
    this.center ||= new Vector3();
    this.extents ||= new Vector3();
    return this;
  }
  public setFromCenterAndSize(center: Vector3, size: Vector3): this {
    this.size = size;
    this.center = center;
    this.init();
    this.extents.copy(size).multiplyScalar(0.5);
    this.center.subtract(this.extents, this.min);
    this.center.add(this.extents, this.max);
    return this;
  }
  public inFrustum(obj: Object3D, frustum: Frustum) {
    return frustum.containsBox(obj.bound);
  }
  public merge(bound: BoundingBox) {
    if (bound.min.x < this.min.x) this.min.x = bound.min.x;
    if (bound.min.y < this.min.y) this.min.y = bound.min.y;
    if (bound.min.z < this.min.z) this.min.z = bound.min.z;

    if (bound.max.x > this.max.x) this.max.x = bound.max.x;
    if (bound.max.y > this.max.y) this.max.y = bound.max.y;
    if (bound.max.z > this.max.z) this.max.z = bound.max.z;

    this.size.x = bound.max.x - bound.min.x;
    this.size.y = bound.max.y - bound.min.y;
    this.size.z = bound.max.z - bound.min.z;

    this.extents.x = this.size.x * 0.5;
    this.extents.y = this.size.y * 0.5;
    this.extents.z = this.size.z * 0.5;

    this.center.x = this.extents.x + bound.min.x;
    this.center.y = this.extents.y + bound.min.y;
    this.center.z = this.extents.z + bound.min.z;
  }
  public intersects(bounds: IBound): boolean {
    return (
      this.min.x <= bounds.max.x &&
      this.max.x >= bounds.min.x &&
      this.min.y <= bounds.max.y &&
      this.max.y >= bounds.min.y &&
      this.min.z <= bounds.max.z &&
      this.max.z >= bounds.min.z
    );
  }
  public intersectsSphere(sphere: IBound): boolean {
    return (
      this.min.x <= sphere.max.x &&
      this.max.x >= sphere.min.x &&
      this.min.y <= sphere.max.y &&
      this.max.y >= sphere.min.y &&
      this.min.z <= sphere.max.z &&
      this.max.z >= sphere.min.z
    );
  }
  public intersectsBox(box: IBound): boolean {
    return (
      this.min.x <= box.max.x &&
      this.max.x >= box.min.x &&
      this.min.y <= box.max.y &&
      this.max.y >= box.min.y &&
      this.min.z <= box.max.z &&
      this.max.z >= box.min.z
    );
  }
  public equals(bounds: IBound): boolean {
    return (
      this.center.equals(bounds.center) && this.extents.equals(bounds.extents)
    );
  }
  public expandByPoint(point: Vector3): void {
    if (point.x < this.min.x) {
      this.min.x = point.x;
    }
    if (point.x > this.max.x) {
      this.max.x = point.x;
    }
    if (point.y < this.min.y) {
      this.min.y = point.y;
    }
    if (point.y > this.max.y) {
      this.max.y = point.y;
    }
    if (point.z < this.min.z) {
      this.min.z = point.z;
    }
    if (point.z > this.max.z) {
      this.max.z = point.z;
    }
  }
  public static fromPoints(points: Vector3[]): BoundingBox {
    var bounds: BoundingBox = new BoundingBox(new Vector3(), new Vector3());
    for (var i: number = 0; i < points.length; i++) {
      bounds.expandByPoint(points[i]);
    }
    return bounds;
  }
  public calculateTransform(obj: Object3D): void {}
  public clone(): IBound {
    var bound: BoundingBox = new BoundingBox(
      this.center.clone(),
      this.size.clone()
    );
    return bound;
  }
  public intersectsRay(ray: Ray, point: Vector3): boolean {
    throw new Error("Method not implemented.");
  }
  public containsPoint(point: Vector3): boolean {
    return (
      this.min.x <= point.x &&
      this.max.x >= point.x &&
      this.min.y <= point.y &&
      this.max.y >= point.y &&
      this.min.z <= point.z &&
      this.max.z >= point.z
    );
  }
  public containsBox(box: BoundingBox): boolean {
    let min = this.min;
    let max = this.max;
    let isContain =
      min.x <= box.min.x &&
      min.y <= box.min.y &&
      min.z <= box.min.z &&
      max.x >= box.max.x &&
      max.y >= box.max.y &&
      max.z >= box.max.z;
    return isContain;
  }
  public updateBound() {}
  public destroy(force?: boolean) {
    this.center = null;
    this.extents = null;
    this.min = null;
    this.max = null;
    this.size = null;
  }
}
