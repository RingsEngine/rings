import { DEGREES_TO_RADIANS } from "./MathUtil";
import { Rect } from "./Rect";
import { Vector3 } from "./Vector3";

let PI = Math.PI;
let TwoPI = PI * 2;

export class Matrix3 {
  public a: number;
  public b: number;
  public c: number;
  public d: number;
  public tx: number;
  public ty: number;

  /**
   * Create a Matrix3
   * @param a The width of x
   * @param b The slope of y
   * @param c The slope of x
   * @param d The height of y
   * @param tx The position of the x coordinate
   * @param ty The position of the y coordinate
   */
  constructor(
    a: number = 1,
    b: number = 0,
    c: number = 0,
    d: number = 1,
    tx: number = 0,
    ty: number = 0
  ) {
    this.a = a; // x轴缩放
    this.b = b; // y轴倾斜
    this.c = c; // x轴倾斜
    this.d = d; // y轴缩放
    this.tx = tx; // x轴平移
    this.ty = ty; // y轴平移
  }

  /**
   * 克隆当前矩阵 - 返回一个新矩阵对象
   * @returns New Matrix3 object
   */
  public clone(): Matrix3 {
    return new Matrix3(this.a, this.b, this.c, this.d, this.tx, this.ty);
  }

  /**
   * 合并矩阵 - 将当前矩阵与目标矩阵相乘(后乘)
   * @param matrix target matrix
   */
  public concat(matrix: Matrix3): void {
    let a: number = this.a;
    let c: number = this.c;
    let tx: number = this.tx;
    this.a = a * matrix.a + this.b * matrix.c;
    this.b = a * matrix.b + this.b * matrix.d;
    this.c = c * matrix.a + this.d * matrix.c;
    this.d = c * matrix.b + this.d * matrix.d;
    this.tx = tx * matrix.a + this.ty * matrix.c + matrix.tx;
    this.ty = tx * matrix.b + this.ty * matrix.d + matrix.ty;
  }

  /**
   * 复制矩阵值 - 从另一个矩阵复制值到当前矩阵
   * @param other  target matrix value
   * @returns current matrix
   */
  public copyFrom(other: Matrix3): Matrix3 {
    this.a = other.a;
    this.b = other.b;
    this.c = other.c;
    this.d = other.d;
    this.tx = other.tx;
    this.ty = other.ty;
    return this;
  }

  /**
   * 重置为单位矩阵 - 将矩阵重置为无变换状态
   */
  public identity(): this {
    this.a = this.d = 1;
    this.b = this.c = this.tx = this.ty = 0;
    return this;
  }

  /**
   * 矩阵求逆 - 将当前矩阵变为它的逆矩阵
   */
  public invert(): void {
    this._invertInto(this);
  }

  /**
   * 旋转矩阵 - 按指定角度旋转(角度制)
   * @param angle rotation angle
   */
  public rotate(angle: number): void {
    angle = +angle;
    if (angle !== 0) {
      angle = angle * DEGREES_TO_RADIANS;
      let u = Math.cos(angle);
      let v = Math.sin(angle);
      let ta = this.a;
      let tb = this.b;
      let tc = this.c;
      let td = this.d;
      let ttx = this.tx;
      let tty = this.ty;
      this.a = ta * u - tb * v;
      this.b = ta * v + tb * u;
      this.c = tc * u - td * v;
      this.d = tc * v + td * u;
      this.tx = ttx * u - tty * v;
      this.ty = ttx * v + tty * u;
    }
  }

  /**
   * 缩放矩阵 - 按指定比例缩放
   * @param sx x axis scaling
   * @param sy y axis scaling
   */
  public scale(sx: number, sy: number): void {
    if (sx !== 1) {
      this.a *= sx;
      this.c *= sx;
      this.tx *= sx;
    }
    if (sy !== 1) {
      this.b *= sy;
      this.d *= sy;
      this.ty *= sy;
    }
  }

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
  public setTo(
    a: number,
    b: number,
    c: number,
    d: number,
    tx: number,
    ty: number
  ): Matrix3 {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.tx = tx;
    this.ty = ty;
    return this;
  }

  /**
   * 坐标变换 - 将点坐标应用当前矩阵变换
   * @param pointX x coordinate
   * @param pointY y coordinate
   * @param resultPoint Vector of results
   * @returns Vector of results
   */
  public transformPoint(
    pointX: number,
    pointY: number,
    resultPoint?: Vector3
  ): Vector3 {
    let x = this.a * pointX + this.c * pointY + this.tx;
    let y = this.b * pointX + this.d * pointY + this.ty;
    if (resultPoint) {
      resultPoint.setTo(x, y, 0, 1);
      return resultPoint;
    }
    return new Vector3(x, y, 0, 1);
  }

  /**
   * 设置平移量 - 直接设置tx/ty值
   * @param x x coordinate
   * @param y y coordinate
   */
  public setTranslate(x: number, y: number) {
    this.tx = x;
    this.ty = y;
  }

  /**
   * 平移矩阵 - 增加平移偏移量
   * @param dx The x-coordinate offset
   * @param dy The y-coordinate offset
   */
  public translate(dx: number, dy: number): void {
    this.tx += dx;
    this.ty += dy;
  }

  /**
   * 矩阵乘法 - 当前矩阵乘以目标矩阵(后乘)
   * @param t target matrix
   */
  public mul(t: Matrix3) {
    let m1 = this;
    let m2 = t;
    let aa: number = m1.a;
    let ab: number = m1.b;
    let ac: number = m1.c;
    let ad: number = m1.d;
    let atx: number = m1.tx;
    let aty: number = m1.ty;
    let ba: number = m2.a;
    let bb: number = m2.b;
    let bc: number = m2.c;
    let bd: number = m2.d;
    let btx: number = m2.tx;
    let bty: number = m2.ty;

    if (bb !== 0 || bc !== 0) {
      this.a = aa * ba + ab * bc;
      this.b = aa * bb + ab * bd;
      this.c = ac * ba + ad * bc;
      this.d = ac * bb + ad * bd;
      this.tx = ba * atx + bc * aty + btx;
      this.ty = bb * atx + bd * aty + bty;
    } else {
      this.a = aa * ba;
      this.b = ab * bd;
      this.c = ac * ba;
      this.d = ad * bd;
      this.tx = ba * atx + btx;
      this.ty = bd * aty + bty;
    }
  }

  /**
   * 矩阵相等判断 - 判断与另一矩阵是否相等
   * @param other matrix
   * @returns
   */
  public equals(other: Matrix3): boolean {
    return (
      this.a == other.a &&
      this.b == other.b &&
      this.c == other.c &&
      this.d == other.d &&
      this.tx == other.tx &&
      this.ty == other.ty
    );
  }

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
  public prepend(
    a: number,
    b: number,
    c: number,
    d: number,
    tx: number,
    ty: number
  ): Matrix3 {
    let tx1 = this.tx;
    if (a != 1 || b != 0 || c != 0 || d != 1) {
      let a1 = this.a;
      let c1 = this.c;
      this.a = a1 * a + this.b * c;
      this.b = a1 * b + this.b * d;
      this.c = c1 * a + this.d * c;
      this.d = c1 * b + this.d * d;
    }
    this.tx = tx1 * a + this.ty * c + tx;
    this.ty = tx1 * b + this.ty * d + ty;
    return this;
  }

  /**
   * 后乘矩阵 - 用目标矩阵后乘当前矩阵
   * @param mat Matrix
   * @returns result
   */
  public append(mat: Matrix3): Matrix3 {
    let a1 = this.a;
    let b1 = this.b;
    let c1 = this.c;
    let d1 = this.d;
    if (mat.a != 1 || mat.b != 0 || mat.c != 0 || mat.d != 1) {
      this.a = mat.a * a1 + mat.b * c1;
      this.b = mat.a * b1 + mat.b * d1;
      this.c = mat.c * a1 + mat.d * c1;
      this.d = mat.c * b1 + mat.d * d1;
    }
    this.tx = mat.tx * a1 + mat.ty * c1 + this.tx;
    this.ty = mat.tx * b1 + mat.ty * d1 + this.ty;

    return this;
  }

  /**
   * 忽略平移的坐标变换 - 只应用缩放/旋转变换
   * @param point A given point
   * @returns
   */
  public deltaTransformPoint(point: Vector3): Vector3 {
    let self = this;
    let x = self.a * point.x + self.c * point.y;
    let y = self.b * point.x + self.d * point.y;
    return new Vector3(x, y);
  }

  /**
   * 转换为字符串 - 返回矩阵的字符串表示
   * @returns
   */
  public toString(): string {
    return (
      "(a=" +
      this.a +
      ", b=" +
      this.b +
      ", c=" +
      this.c +
      ", d=" +
      this.d +
      ", tx=" +
      this.tx +
      ", ty=" +
      this.ty +
      ")"
    );
  }

  /**
   * 创建变换矩阵 - 设置缩放、旋转和平移参数
   * @param scaleX x axis scaling
   * @param scaleY y axis scaling
   * @param rotation rotation
   * @param tx x-coordinate
   * @param ty y-coordinate
   */
  public createBox(
    scaleX: number,
    scaleY: number,
    rotation: number = 0,
    tx: number = 0,
    ty: number = 0
  ): void {
    let self = this;
    if (rotation !== 0) {
      rotation = rotation * DEGREES_TO_RADIANS;
      let u = Math.cos(rotation);
      let v = Math.sin(rotation);
      self.a = u * scaleX;
      self.b = v * scaleY;
      self.c = -v * scaleX;
      self.d = u * scaleY;
    } else {
      self.a = scaleX;
      self.b = 0;
      self.c = 0;
      self.d = scaleY;
    }
    self.tx = tx;
    self.ty = ty;
  }

  /**
   * 创建渐变框矩阵 - 特殊用途的矩阵创建方法
   * @param width width
   * @param height height
   * @param rotation rotation
   * @param tx x-coordinate
   * @param ty y-coordinate
   */
  public createGradientBox(
    width: number,
    height: number,
    rotation: number = 0,
    tx: number = 0,
    ty: number = 0
  ): void {
    this.createBox(
      width / 1638.4,
      height / 1638.4,
      rotation,
      tx + width / 2,
      ty + height / 2
    );
  }

  /**
   * 内部方法 - 将矩阵求逆结果存入目标矩阵
   * @param target matrix
   * @returns
   */
  private _invertInto(target: Matrix3): void {
    let a = this.a;
    let b = this.b;
    let c = this.c;
    let d = this.d;
    let tx = this.tx;
    let ty = this.ty;
    if (b == 0 && c == 0) {
      target.b = target.c = 0;
      if (a == 0 || d == 0) {
        target.a = target.d = target.tx = target.ty = 0;
      } else {
        a = target.a = 1 / a;
        d = target.d = 1 / d;
        target.tx = -a * tx;
        target.ty = -d * ty;
      }

      return;
    }
    let determinant = a * d - b * c;
    if (determinant == 0) {
      target.identity();
      return;
    }
    determinant = 1 / determinant;
    let k = (target.a = d * determinant);
    b = target.b = -b * determinant;
    c = target.c = -c * determinant;
    d = target.d = a * determinant;
    target.tx = -(k * tx + c * ty);
    target.ty = -(b * tx + d * ty);
  }

  /**
   * @private
   */
  public getScaleX(): number {
    let m = this;
    if (m.a == 1 && m.b == 0) {
      return 1;
    }
    let result = Math.sqrt(m.a * m.a + m.b * m.b);
    return this.getDeterminant() < 0 ? -result : result;
  }

  /**
   * @private
   */
  public getScaleY(): number {
    let m = this;
    if (m.c == 0 && m.d == 1) {
      return 1;
    }
    let result = Math.sqrt(m.c * m.c + m.d * m.d);
    return this.getDeterminant() < 0 ? -result : result;
  }

  /**
   * @private
   */
  public getSkewX(): number {
    return Math.atan2(this.d, this.c) - Math.PI / 2;
  }

  /**
   * @private
   */
  public getSkewY(): number {
    return Math.atan2(this.b, this.a);
  }

  /**
   * @private
   */
  public updateScaleAndRotation(
    scaleX: number,
    scaleY: number,
    skewX: number,
    skewY: number
  ) {
    if ((skewX == 0 || skewX == TwoPI) && (skewY == 0 || skewY == TwoPI)) {
      this.a = scaleX;
      this.b = this.c = 0;
      this.d = scaleY;
      return;
    }
    skewX = skewX * DEGREES_TO_RADIANS;
    skewY = skewY * DEGREES_TO_RADIANS;
    let u = Math.cos(skewX);
    let v = Math.sin(skewX);
    if (skewX == skewY) {
      this.a = u * scaleX;
      this.b = v * scaleX;
    } else {
      this.a = Math.cos(skewY) * scaleX;
      this.b = Math.sin(skewY) * scaleX;
    }
    this.c = -v * scaleY;
    this.d = u * scaleY;
  }

  /**
   * 前乘到目标矩阵 - 计算 other * this 存入target
   * @private
   * target = other * this
   */
  public preMultiplyInto(other: Matrix3, target: Matrix3): void {
    let a = other.a * this.a;
    let b = 0.0;
    let c = 0.0;
    let d = other.d * this.d;
    let tx = other.tx * this.a + this.tx;
    let ty = other.ty * this.d + this.ty;

    if (
      other.b !== 0.0 ||
      other.c !== 0.0 ||
      this.b !== 0.0 ||
      this.c !== 0.0
    ) {
      a += other.b * this.c;
      d += other.c * this.b;
      b += other.a * this.b + other.b * this.d;
      c += other.c * this.a + other.d * this.c;
      tx += other.ty * this.c;
      ty += other.tx * this.b;
    }

    target.a = a;
    target.b = b;
    target.c = c;
    target.d = d;
    target.tx = tx;
    target.ty = ty;
  }

  /**
   * 变换矩形边界 - 对矩形应用矩阵变换
   * @private
   */
  private $transformBounds(bounds: Rect): void {
    let a = this.a;
    let b = this.b;
    let c = this.c;
    let d = this.d;
    let tx = this.tx;
    let ty = this.ty;

    let x = bounds.x;
    let y = bounds.y;
    let xMax = x + bounds.width;
    let yMax = y + bounds.height;

    let x0 = a * x + c * y + tx;
    let y0 = b * x + d * y + ty;
    let x1 = a * xMax + c * y + tx;
    let y1 = b * xMax + d * y + ty;
    let x2 = a * xMax + c * yMax + tx;
    let y2 = b * xMax + d * yMax + ty;
    let x3 = a * x + c * yMax + tx;
    let y3 = b * x + d * yMax + ty;

    let tmp = 0;

    if (x0 > x1) {
      tmp = x0;
      x0 = x1;
      x1 = tmp;
    }
    if (x2 > x3) {
      tmp = x2;
      x2 = x3;
      x3 = tmp;
    }

    bounds.x = Math.floor(x0 < x2 ? x0 : x2);
    bounds.width = Math.ceil((x1 > x3 ? x1 : x3) - bounds.x);

    if (y0 > y1) {
      tmp = y0;
      y0 = y1;
      y1 = tmp;
    }
    if (y2 > y3) {
      tmp = y2;
      y2 = y3;
      y3 = tmp;
    }

    bounds.y = Math.floor(y0 < y2 ? y0 : y2);
    bounds.height = Math.ceil((y1 > y3 ? y1 : y3) - bounds.y);
  }

  /**
   * @private
   */
  private getDeterminant() {
    return this.a * this.d - this.b * this.c;
  }
}
