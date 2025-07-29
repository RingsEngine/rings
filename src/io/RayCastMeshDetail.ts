import { Triangle } from "../math/Triangle";
import { dot } from "../math/MathUtil";
import { Ray } from "../math/Ray";
import { Vector2 } from "../math/Vector2";
import { Vector3 } from "../math/Vector3";
import { PickResult } from "./PickResult";
/**
 * @internal
 * @group IO
 */
export class RayCastMeshDetail {
  /**
   * 取一个最小值
   */
  public static EPS: number = 1e-4;

  /**
   * 定义一个极大值
   */
  public static FLT_MAX: number = 3.402823466e38;

  /**
   * 计算点与平面(由三点a、b、c定义)之间的距离
   * @param p 测试点
   * @param a 三角形顶点A
   * @param b 三角形顶点B
   * @param c 三角形顶点C
   * @returns 点到平面的距离
   */
  public static distPtTri(
    p: Vector3,
    a: Vector3,
    b: Vector3,
    c: Vector3
  ): number {
    let v0 = new Vector3();
    let v1 = new Vector3();
    let v2 = new Vector3();
    c.subtract(a, v0);
    b.subtract(a, v1);
    p.subtract(a, v2);

    let dot00 = dot(v0, v0);
    let dot01 = dot(v0, v1);
    let dot02 = dot(v0, v2);
    let dot11 = dot(v1, v1);
    let dot12 = dot(v1, v2);

    let invDenom = 1.0 / (dot00 * dot11 - dot01 * dot01);
    let u = (dot11 * dot02 - dot01 * dot12) * invDenom;
    let v = (dot00 * dot12 - dot01 * dot02) * invDenom;

    if (
      u >= -RayCastMeshDetail.EPS &&
      v >= -RayCastMeshDetail.EPS &&
      u + v <= 1 + RayCastMeshDetail.EPS
    ) {
      let y = a[1] + v0[1] * u + v1[1] * v;
      return Math.abs(y - p[1]);
    }
    return RayCastMeshDetail.FLT_MAX;
  }

  private static _info: PickResult = new PickResult();
  public static IntersectTriangle(
    ray: Ray,
    face: Triangle,
    backfaceCulling: boolean
  ): PickResult {
    let v0 = face.v1;
    let v1 = face.v2;
    let v2 = face.v3;

    let E1 = v1.subtract(v0, Vector3.HELP_3);

    let E2 = v2.subtract(v0, Vector3.HELP_4);

    let P = ray.direction.crossProduct(E2, Vector3.HELP_5);

    let det = dot(E1, P);

    let T: Vector3;
    if (det > 0) {
      if (backfaceCulling) {
        return null;
      }
      T = ray.origin.subtract(v0, Vector3.HELP_2);
    } else {
      T = v0.subtract(ray.origin, Vector3.HELP_2);
      det = -det;
    }

    if (det < 0.0001) {
      this._info.isIn = false;
      this._info.t = 0;
      this._info.u = 0;
      this._info.v = 0;
      return this._info;
    }

    let u = dot(T, P);
    if (u < 0.0 || u > det) {
      this._info.isIn = false;
      this._info.t = 0;
      this._info.u = 0;
      this._info.v = 0;
      return this._info;
    }

    let Q = T.crossProduct(E1, Vector3.HELP_1);

    let v = dot(ray.direction, Q);
    if (v < 0.0 || u + v > det) {
      this._info.isIn = false;
      this._info.t = 0;
      this._info.u = 0;
      this._info.v = 0;
      return this._info;
    }

    let t = dot(E2, Q);

    let fInvDet = 1.0 / det;
    t *= fInvDet;
    u *= fInvDet;
    v *= fInvDet;

    this._info.isIn = true;
    this._info.t = t;
    this._info.u = u;
    this._info.v = v;

    let d = 1 - u - v;

    this._u0.copyFrom(face.u1);
    this._u0.scale(d);

    this._u1.copyFrom(face.u2);
    this._u1.scale(u);

    this._u2.copyFrom(face.u3);
    this._u2.scale(v);

    this._info.uv.copyFrom(this._u0);
    this._info.uv.add(this._u1, this._info.uv);
    this._info.uv.add(this._u2, this._info.uv);

    this._info.localPosition.copyFrom(ray.direction).multiplyScalar(t);
    this._info.localPosition.add(ray.origin, this._info.localPosition);
    return this._info;
  }

  private static _u0: Vector2 = new Vector2();
  private static _u1: Vector2 = new Vector2();
  private static _u2: Vector2 = new Vector2();
}
