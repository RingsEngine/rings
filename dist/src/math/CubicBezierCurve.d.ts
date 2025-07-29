import { Vector3 } from "./Vector3";
/**
 * 三次贝塞尔曲线
 * @group Math
 */
export declare class CubicBezierCurve {
    private controlVertices;
    /**
     * @constructor
     * @param cvs 更新控制点
     */
    constructor(cvs: Vector3[]);
    /**
     * 根据参数t计算曲线上点的位置
     * @param t 参数值，范围[0-1]
     * @returns 曲线上的点坐标(Vector3)
     */
    setControlVertices(cvs: Vector3[]): void;
    /**
     * 根据参数t计算曲线上点的位置
     * @param t 参数值，范围[0-1]
     * @returns 曲线上的点坐标(Vector3)
     */
    getPoint(t: number): Vector3;
    /**
     * 计算曲线上参数t处的切线方向
     * @param t 参数值，范围[0-1]
     * @returns 切线方向向量
     */
    getTangent(t: number): Vector3;
    /**
     * 获取曲线上最接近给定点的参数t值
     * @param pos 给定的点位置
     * @param paramThreshold 阈值
     * @returns 参数t值，范围[0-1]
     */
    getClosestParam(pos: Vector3, paramThreshold?: number): number;
    /**
     * 递归计算给定范围内最接近点的参数t值
     * @param pos 给定的点位置
     * @param beginT 起始参数
     * @param endT 结束参数
     * @param thresholdT 阈值
     * @returns 参数t值
     */
    getClosestParamRec(pos: Vector3, beginT: number, endT: number, thresholdT: number): number;
}
