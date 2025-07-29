import { Vector3 } from "./Vector3";
export declare class Matrix3 {
    a: number;
    b: number;
    c: number;
    d: number;
    tx: number;
    ty: number;
    /**
     * Create a Matrix3
     * @param a The width of x
     * @param b The slope of y
     * @param c The slope of x
     * @param d The height of y
     * @param tx The position of the x coordinate
     * @param ty The position of the y coordinate
     */
    constructor(a?: number, b?: number, c?: number, d?: number, tx?: number, ty?: number);
    /**
     * 克隆当前矩阵 - 返回一个新矩阵对象
     * @returns New Matrix3 object
     */
    clone(): Matrix3;
    /**
     * 合并矩阵 - 将当前矩阵与目标矩阵相乘(后乘)
     * @param matrix target matrix
     */
    concat(matrix: Matrix3): void;
    /**
     * 复制矩阵值 - 从另一个矩阵复制值到当前矩阵
     * @param other  target matrix value
     * @returns current matrix
     */
    copyFrom(other: Matrix3): Matrix3;
    /**
     * 重置为单位矩阵 - 将矩阵重置为无变换状态
     */
    identity(): this;
    /**
     * 矩阵求逆 - 将当前矩阵变为它的逆矩阵
     */
    invert(): void;
    /**
     * 旋转矩阵 - 按指定角度旋转(角度制)
     * @param angle rotation angle
     */
    rotate(angle: number): void;
    /**
     * 缩放矩阵 - 按指定比例缩放
     * @param sx x axis scaling
     * @param sy y axis scaling
     */
    scale(sx: number, sy: number): void;
    /**
     * 设置矩阵值 - 直接设置矩阵各元素值
     * @param a Matrix element a
     * @param b Matrix element b
     * @param c Matrix element c
     * @param d Matrix element d
     * @param tx Matrix element tx
     * @param ty Matrix element ty
     * @returns The modified matrix
     */
    setTo(a: number, b: number, c: number, d: number, tx: number, ty: number): Matrix3;
    /**
     * 坐标变换 - 将点坐标应用当前矩阵变换
     * @param pointX x coordinate
     * @param pointY y coordinate
     * @param resultPoint Vector of results
     * @returns Vector of results
     */
    transformPoint(pointX: number, pointY: number, resultPoint?: Vector3): Vector3;
    /**
     * 设置平移量 - 直接设置tx/ty值
     * @param x x coordinate
     * @param y y coordinate
     */
    setTranslate(x: number, y: number): void;
    /**
     * 平移矩阵 - 增加平移偏移量
     * @param dx The x-coordinate offset
     * @param dy The y-coordinate offset
     */
    translate(dx: number, dy: number): void;
    /**
     * 矩阵乘法 - 当前矩阵乘以目标矩阵(后乘)
     * @param t target matrix
     */
    mul(t: Matrix3): void;
    /**
     * 矩阵相等判断 - 判断与另一矩阵是否相等
     * @param other matrix
     * @returns
     */
    equals(other: Matrix3): boolean;
    /**
     * 前乘矩阵 - 用指定参数创建一个矩阵并前乘当前矩阵
     * @param a Multiply by a
     * @param b Multiply by b
     * @param c Multiply by c
     * @param d Multiply by d
     * @param tx Multiply by tx
     * @param ty Multiply by ty
     * @returns prematrix
     */
    prepend(a: number, b: number, c: number, d: number, tx: number, ty: number): Matrix3;
    /**
     * 后乘矩阵 - 用目标矩阵后乘当前矩阵
     * @param mat Matrix
     * @returns result
     */
    append(mat: Matrix3): Matrix3;
    /**
     * 忽略平移的坐标变换 - 只应用缩放/旋转变换
     * @param point A given point
     * @returns
     */
    deltaTransformPoint(point: Vector3): Vector3;
    /**
     * 转换为字符串 - 返回矩阵的字符串表示
     * @returns
     */
    toString(): string;
    /**
     * 创建变换矩阵 - 设置缩放、旋转和平移参数
     * @param scaleX x axis scaling
     * @param scaleY y axis scaling
     * @param rotation rotation
     * @param tx x-coordinate
     * @param ty y-coordinate
     */
    createBox(scaleX: number, scaleY: number, rotation?: number, tx?: number, ty?: number): void;
    /**
     * 创建渐变框矩阵 - 特殊用途的矩阵创建方法
     * @param width width
     * @param height height
     * @param rotation rotation
     * @param tx x-coordinate
     * @param ty y-coordinate
     */
    createGradientBox(width: number, height: number, rotation?: number, tx?: number, ty?: number): void;
    /**
     * 内部方法 - 将矩阵求逆结果存入目标矩阵
     * @param target matrix
     * @returns
     */
    private _invertInto;
    /**
     * @private
     */
    getScaleX(): number;
    /**
     * @private
     */
    getScaleY(): number;
    /**
     * @private
     */
    getSkewX(): number;
    /**
     * @private
     */
    getSkewY(): number;
    /**
     * @private
     */
    updateScaleAndRotation(scaleX: number, scaleY: number, skewX: number, skewY: number): void;
    /**
     * 前乘到目标矩阵 - 计算 other * this 存入target
     * @private
     * target = other * this
     */
    preMultiplyInto(other: Matrix3, target: Matrix3): void;
    /**
     * 变换矩形边界 - 对矩形应用矩阵变换
     * @private
     */
    private $transformBounds;
    /**
     * @private
     */
    private getDeterminant;
}
