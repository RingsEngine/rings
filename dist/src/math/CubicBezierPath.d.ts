import { Vector3 } from "./Vector3";
/**
 * 三次贝塞尔曲线类型
 * @group Math
 */
export declare enum CubicBezierType {
    Open = 0,
    Closed = 1
}
/**
 * @group Math
 */
export declare class CubicBezierPath {
    private type;
    private numCurveSegments;
    private numControlVertices;
    private controlVertices;
    constructor(controlVertices: Vector3[], t?: CubicBezierType);
    getPathType(): CubicBezierType;
    isClosed(): boolean;
    /**
     * @returns
     */
    isValid(): boolean;
    clear(): void;
    computeApproxLength(): number;
    computeApproxParamPerUnitLength(): number;
    computeApproxNormParamPerUnitLength(): number;
    interpolatePoints(knots: Vector3[], t: CubicBezierType): void;
    setControlVertices(cvs: Vector3[], t: CubicBezierType): void;
    getPoint(t: number): Vector3;
    getPointNorm(t: number): Vector3;
    getTangent(t: number): Vector3;
    getTangentNorm(t: number): Vector3;
    computeClosestParam(pos: Vector3, paramThreshold: number): number;
    computeClosestNormParam(pos: Vector3, paramThreshold: number): number;
}
