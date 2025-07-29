import { Triangle } from "../math/Triangle";
import { Ray } from "../math/Ray";
import { Vector3 } from "../math/Vector3";
import { PickResult } from "./PickResult";
/**
 * @internal
 * @group IO
 */
export declare class RayCastMeshDetail {
    /**
     * 取一个最小值
     */
    static EPS: number;
    /**
     * 定义一个极大值
     */
    static FLT_MAX: number;
    /**
     * 计算点与平面(由三点a、b、c定义)之间的距离
     * @param p 测试点
     * @param a 三角形顶点A
     * @param b 三角形顶点B
     * @param c 三角形顶点C
     * @returns 点到平面的距离
     */
    static distPtTri(p: Vector3, a: Vector3, b: Vector3, c: Vector3): number;
    private static _info;
    static IntersectTriangle(ray: Ray, face: Triangle, backfaceCulling: boolean): PickResult;
    private static _u0;
    private static _u1;
    private static _u2;
}
