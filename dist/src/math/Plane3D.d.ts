import { Vector3 } from "..";
/**
 * @language zh_CN
 * @class Plane3D
 * @classdesc
 * Plane3D 类 3D空间中的平面表示数据
 * 由a,b,c,d4个分量组成 在三维空间中定义了一个平面 Ax + By + Cz + D = 0
 * @includeExample geom/Plane3D.ts
 * @platform Web,Native
 */
export declare class Plane3D {
    /**
     * @language en_US
     * The A coefficient of this plane. (Also the x dimension of the plane normal)
     */
    /**
     * @language zh_CN
     * 平面中的a分量
     * @platform Web,Native
     */
    a: number;
    /**
     * @language en_US
     * The B coefficient of this plane. (Also the y dimension of the plane normal)
     */
    /**
     * @language zh_CN
     * 平面中的b分量
     * @platform Web,Native
     */
    b: number;
    /**
     * @language en_US
     * The C coefficient of this plane. (Also the z dimension of the plane normal)
     */
    /**
     * @language zh_CN
     * 平面中的c分量
     * @platform Web,Native
     */
    c: number;
    /**
     * @language en_US
     * The D coefficient of this plane. (Also the inverse dot product between normal and point)
     */
    /**
     * @language zh_CN
     * 平面中的d分量
     * @platform Web,Native
     */
    d: number;
    /**
     * @private
     */
    static ALIGN_ANY: number;
    /**
     * @private
     */
    static ALIGN_XY_AXIS: number;
    /**
     * @private
     */
    static ALIGN_YZ_AXIS: number;
    /**
     * @private
     */
    static ALIGN_XZ_AXIS: number;
    /**
     * @language en_US
     * Create a Plane3D with ABCD coefficients
     */
    /**
     * @language zh_CN
     * 创建一个平面实例
     * @param a
     * @param b
     * @param c
     * @param d
     * @platform Web,Native
     */
    constructor(a?: number, b?: number, c?: number, d?: number);
    /**
     * @language zh_CN
     * 填充平面的各分量的值
     * @param a
     * @param b
     * @param c
     * @param d
     * @platform Web,Native
     */
    setTo(a?: number, b?: number, c?: number, d?: number): void;
    /**
     * @language en_US
     * Fills this Plane3D with the coefficients from 3 points in 3d space.
     * @param p0 Vector3
     * @param p1 Vector3
     * @param p2 Vector3
     */
    /**
     * @language zh_CN
     * 由3个坐标来创建一个3d平面
     * @param p0 Vector3
     * @param p1 Vector3
     * @param p2 Vector3
     * @platform Web,Native
     */
    fromPoints(p0: Vector3, p1: Vector3, p2: Vector3): void;
    /**
     * @language en_US
     * Fills this Plane3D with the coefficients from the plane's normal and a point in 3d space.
     * @param normal Vector3
     * @param point  Vector3
     */
    /**
     * @language zh_CN
     * 由一条normal向量和一个坐标创建一个3d平面
     * @param normal Vector3
     * @param point  Vector3
     * @platform Web,Native
     */
    fromNormalAndPoint(normal: Vector3, point: Vector3): void;
    /**
     * @language en_US
     * Normalize this Plane3D
     * @returns Plane3D This Plane3D.
     */
    /**
     * @language zh_CN
     * 单位化3d平面
     * @returns number 返回平面长度
     * @platform Web,Native
     */
    normalize(): number;
    /**
     * @language en_US
     * Returns the signed distance between this Plane3D and the point p.
     * @param p Vector3
     * @returns Number
     */
    /**
     * @language zh_CN
     * 计算3d平面到点p的距离
     * @param p Vector3
     * @returns number 返回计算后的距离
     * @platform Web,Native
     */
    distance(p: Vector3): number;
    /**
     * @language en_US
     * Classify a point against this Plane3D. (in front, back or intersecting)
     * @param p Vector3
     * @param epsilon
     * @returns PlaneClassification.FRONT在平面正面
     * PlaneClassification.BACK在平面背面面
     * PlaneClassification.INTERSECT在平面上
     */
    /**
     * @language zh_CN
     * 计算3d平面和点p的空间关系
     * @param p Vector3
     * @param epsilon 相对偏移值
     * @returns number int Plane3.FRONT or Plane3D.BACK or Plane3D.INTERSECT
     * @platform Web,Native
     */
    classifyPoint(p: Vector3, epsilon?: number): number;
    /**
     * @language zh_CN
     * 当前Plane3D以字符串形式返回
     * @returns string
     * @platform Web,Native
     */
    toString(): string;
}
