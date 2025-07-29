import { Vector3 } from "./Vector3";

/**
 * 三次贝塞尔曲线
 * @group Math
 */
export class CubicBezierCurve {
  private controlVertices: Vector3[];

  /**
   * @constructor
   * @param cvs 更新控制点
   */
  constructor(cvs: Vector3[]) {
    this.setControlVertices(cvs);
  }

  /**
   * 根据参数t计算曲线上点的位置
   * @param t 参数值，范围[0-1]
   * @returns 曲线上的点坐标(Vector3)
   */
  public setControlVertices(cvs: Vector3[]) {
    // Cubic Bezier curves require 4 cvs.
    if (cvs.length == 4) {
      this.controlVertices = cvs.concat();
    }
  }

  /**
   * 根据参数t计算曲线上点的位置
   * @param t 参数值，范围[0-1]
   * @returns 曲线上的点坐标(Vector3)
   */
  public getPoint(t: number): Vector3 {
    if (!(t >= 0.0 && t <= 1.0)) {
      return Vector3.ZERO;
    }
    let c = 1.0 - t;

    let bb0 = c * c * c;
    let bb1 = 3 * t * c * c;
    let bb2 = 3 * t * t * c;
    let bb3 = t * t * t;

    let point = this.controlVertices[0]
      .mul(bb0)
      .add(this.controlVertices[1].mul(bb1))
      .add(this.controlVertices[2].mul(bb2))
      .add(this.controlVertices[3].mul(bb3));

    return point;
  }

  /**
   * 计算曲线上参数t处的切线方向
   * @param t 参数值，范围[0-1]
   * @returns 切线方向向量
   */
  public getTangent(t: number): Vector3 {
    if (!(t >= 0.0 && t <= 1.0)) {
      return Vector3.ZERO;
    }
    let controlVerts = this.controlVertices;
    let q0 = controlVerts[0].add(controlVerts[1].add(controlVerts[0]).mul(t));
    let q1 = controlVerts[1].add(controlVerts[2].add(controlVerts[1]).mul(t));
    let q2 = controlVerts[2].add(controlVerts[3].add(controlVerts[2]).mul(t));

    let r0 = q0.add(q1.subtract(q0).mul(t));
    let r1 = q1.add(q2.subtract(q1).mul(t));
    let tangent = r1.subtract(r0);
    return tangent;
  }

  /**
   * 获取曲线上最接近给定点的参数t值
   * @param pos 给定的点位置
   * @param paramThreshold 阈值
   * @returns 参数t值，范围[0-1]
   */
  public getClosestParam(
    pos: Vector3,
    paramThreshold: number = 0.000001
  ): number {
    return this.getClosestParamRec(pos, 0.0, 1.0, paramThreshold);
  }

  /**
   * 递归计算给定范围内最接近点的参数t值
   * @param pos 给定的点位置
   * @param beginT 起始参数
   * @param endT 结束参数
   * @param thresholdT 阈值
   * @returns 参数t值
   */
  public getClosestParamRec(
    pos: Vector3,
    beginT: number,
    endT: number,
    thresholdT: number
  ): number {
    let mid = (beginT + endT) / 2.0;

    if (endT - beginT < thresholdT) {
      return mid;
    }

    let paramA = (beginT + mid) / 2.0;
    let paramB = (mid + endT) / 2.0;
    let posA = this.getPoint(paramA);
    let posB = this.getPoint(paramB);
    let distASq = posA.subtract(pos).lengthSquared;
    let distBSq = posB.subtract(pos).lengthSquared;

    if (distASq < distBSq) {
      endT = mid;
    } else {
      beginT = mid;
    }

    return this.getClosestParamRec(pos, beginT, endT, thresholdT);
  }
}
