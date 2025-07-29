import { AnimationCurve } from "./AnimationCurve";
import { Vector2 } from "./Vector2";
/**
 * @internal
 * @group Math
 */
export declare class Polynomial {
    coeff: number[];
    static EvalSegment(t: number, coeff: number[]): number;
}
/**
 * @internal
 * @group Math
 */
export declare class PolynomialCurve {
    private static kMaxNumSegments;
    segments: Polynomial[];
    integrationCache: number[];
    doubleIntegrationCache: number[];
    times: number[];
    segmentCount: number;
    constructor();
    calculateMinMax(minmax: Vector2, value: any): void;
    findMinMaxDoubleIntegrated(): Vector2;
    findMinMaxIntegrated(): Vector2;
    generateIntegrationCache(curve: PolynomialCurve): void;
    generateDoubleIntegrationCache(curve: PolynomialCurve): void;
    integrate(): void;
    doubleIntegrate(): void;
    static isValidCurve(editorCurve: AnimationCurve): boolean;
    evaluateDoubleIntegrated(t: any): number;
    evaluateIntegrated(t: any): number;
    evaluate(t: any): number;
    buildCurve(editorCurve: AnimationCurve, scale: number): boolean;
}
/**
 * @internal
 */
export declare function doubleIntegrateSegment(coeff: any): void;
/**
 * @internal
 */
export declare function integrateSegment(coeff: any): void;
