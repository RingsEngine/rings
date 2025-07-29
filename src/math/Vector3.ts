export class Vector3 {
  public static readonly MAX: Vector3 = new Vector3(
    Number.MAX_VALUE,
    Number.MAX_VALUE,
    Number.MAX_VALUE
  );
  public static readonly MIN: Vector3 = new Vector3(
    Number.MIN_VALUE,
    Number.MIN_VALUE,
    Number.MIN_VALUE
  );
  public static readonly SAFE_MAX: Vector3 = new Vector3(
    Number.MAX_SAFE_INTEGER,
    Number.MAX_SAFE_INTEGER,
    Number.MAX_SAFE_INTEGER,
    Number.MAX_SAFE_INTEGER
  );
  public static readonly SAFE_MIN: Vector3 = new Vector3(
    Number.MIN_SAFE_INTEGER,
    Number.MIN_SAFE_INTEGER,
    Number.MIN_SAFE_INTEGER,
    Number.MIN_SAFE_INTEGER
  );
  public static readonly X_AXIS: Vector3 = new Vector3(1, 0, 0);
  public static readonly neg_X_AXIS: Vector3 = new Vector3(-1, 0, 0);
  public static readonly Y_AXIS: Vector3 = new Vector3(0, 1, 0);
  public static readonly Z_AXIS: Vector3 = new Vector3(0, 0, 1);
  public static HELP_0: Vector3 = new Vector3();
  public static HELP_1: Vector3 = new Vector3();
  public static HELP_2: Vector3 = new Vector3();
  public static readonly EPSILON: number = 0.00001;
  public static HELP_3: Vector3 = new Vector3();
  public static HELP_4: Vector3 = new Vector3();
  public static HELP_5: Vector3 = new Vector3();
  public static HELP_6: Vector3 = new Vector3();
  public static get ZERO(): Vector3 {
    return new Vector3(0, 0, 0);
  }
  public static get ONE(): Vector3 {
    return new Vector3(1, 1, 1);
  }
  public static get LEFT(): Vector3 {
    return new Vector3(-1, 0, 0);
  }
  public static get RIGHT(): Vector3 {
    return new Vector3(1, 0, 0);
  }
  public static get UP(): Vector3 {
    return new Vector3(0, 1, 0);
  }
  public static get DOWN(): Vector3 {
    return new Vector3(0, -1, 0);
  }
  public static get BACK(): Vector3 {
    return new Vector3(0, 0, -1);
  }
  public static get FORWARD(): Vector3 {
    return new Vector3(0, 0, 1);
  }
  public x: number = 0;
  public y: number = 0;
  public z: number = 0;
  public w: number = 1;
  public index: number = 0;
  private static _index: number = 0;

  constructor(x: number = 0, y: number = 0, z: number = 0, w: number = 0) {
    this.set(x, y, z, w);
    this.index = Vector3._index++;
  }

  public set a(value: number) {
    this.w = value;
  }
  public set r(value: number) {
    this.x = value;
  }
  public set g(value: number) {
    this.y = value;
  }
  public set b(value: number) {
    this.z = value;
  }
  public get a(): number {
    return this.w;
  }
  public get r(): number {
    return this.x;
  }
  public get g(): number {
    return this.y;
  }
  public get b(): number {
    return this.z;
  }
  public get length(): number {
    return Math.sqrt(this.lengthSquared);
  }
  public get lengthSquared(): number {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  public get position() {
    return this;
  }
  public static getTowPointbyDir(
    dir: Vector3,
    tp1: Vector3,
    tp2: Vector3,
    width: number,
    aix: Vector3
  ) {
    if (aix == Vector3.Z_AXIS) {
      tp1.x = dir.y;
      tp1.y = -dir.x;

      tp2.x = -dir.y;
      tp2.y = dir.x;

      tp1.scaleBy(width * 0.5);
      tp2.scaleBy(width * 0.5);
    } else if (aix == Vector3.Y_AXIS) {
      tp1.x = dir.z;
      tp1.z = -dir.x;

      tp2.x = -dir.z;
      tp2.z = dir.x;

      tp1.scaleBy(width * 0.5);
      tp2.scaleBy(width * 0.5);
    }
  }
  public static pointToLine(
    point1: Vector3,
    point2: Vector3,
    position: Vector3
  ) {
    let space = 0;
    let a, b, c;
    a = Vector3.distance(point1, point2);
    b = Vector3.distance(point1, position);
    c = Vector3.distance(point2, position);
    if (c <= 0.000001 || b <= 0.000001) {
      space = 0;
      return space;
    }
    if (a <= 0.000001) {
      space = b;
      return space;
    }
    if (c * c >= a * a + b * b) {
      space = b;
      return space;
    }
    if (b * b >= a * a + c * c) {
      space = c;
      return space;
    }
    let p = (a + b + c) / 2;
    let s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    space = (2 * s) / a;
    return space;
  }
  public static dot(a: Vector3, b: Vector3): number {
    return a.x * b.x + a.y * b.y + a.z * b.z;
  }
  public static getPoints(total: number, randSeed: number) {
    let points = [];
    for (let index = 0; index < total; index++) {
      const element = new Vector3(
        Math.random() * randSeed - randSeed * 0.5,
        Math.random() * randSeed - randSeed * 0.5,
        Math.random() * randSeed - randSeed * 0.5
      );
      points.push(element);
    }
    return points;
  }
  public static getPointNumbers(total: number, randSeed: number) {
    let points = [];
    for (let index = 0; index < total; index++) {
      points.push(
        Math.random() * randSeed - randSeed * 0.5,
        Math.random() * randSeed - randSeed * 0.5,
        Math.random() * randSeed - randSeed * 0.5
      );
    }
    return points;
  }
  public static getAngle(from: Vector3, to: Vector3): number {
    let t = from.dotProduct(to) / (from.length * to.length);
    return (Math.acos(t) * 180) / Math.PI;
  }
  public static sqrMagnitude(arg0: Vector3): number {
    return arg0.x * arg0.x + arg0.y * arg0.y + arg0.z * arg0.z;
  }
  public static getZYAngle(zd: Vector3, yd: Vector3) {
    return this.calAngle(zd.y, zd.z, yd.y, yd.z);
  }
  public static sub(a: Vector3, b: Vector3, target: Vector3 = null): Vector3 {
    target = target || new Vector3();
    target.x = a.x - b.x;
    target.y = a.y - b.y;
    target.z = a.z - b.z;

    return target;
  }
  public static add(a: Vector3, b: Vector3, target: Vector3 = null): Vector3 {
    target = target || new Vector3();
    target.x = a.x + b.x;
    target.y = a.y + b.y;
    target.z = a.z + b.z;
    return target;
  }
  public static smoothDamp(
    current: Vector3,
    target: Vector3,
    currentVelocity: Vector3,
    smoothTime: number,
    maxSpeed: number,
    deltaTime: number
  ) {
    return null;
  }
  public static distance(pt1: Vector3, pt2: Vector3): number {
    let x: number = pt1.x - pt2.x;
    let y: number = pt1.y - pt2.y;
    let z: number = pt1.z - pt2.z;
    return Math.sqrt(x * x + y * y + z * z);
  }
  public static squareDistance(pt1: Vector3, pt2: Vector3): number {
    let x: number = pt1.x - pt2.x;
    let y: number = pt1.y - pt2.y;
    let z: number = pt1.z - pt2.z;
    return x * x + y * y + z * z;
  }
  public static distanceXZ(pt1: Vector3, pt2: Vector3): number {
    let x: number = pt1.x - pt2.x;
    let y: number = 0;
    let z: number = pt1.z - pt2.z;
    return Math.sqrt(x * x + y * y + z * z);
  }
  public set(x: number, y: number, z: number, w: number = 1) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
    return this;
  }
  public add(a: Vector3, target: Vector3 = null): Vector3 {
    target ||= new Vector3();

    let a0x: number = this.x;
    let a0y: number = this.y;
    let a0z: number = this.z;
    let a0w: number = this.w;
    let a1x: number = a.x;
    let a1y: number = a.y;
    let a1z: number = a.z;
    let a1w: number = a.w;
    target.setTo(a0x + a1x, a0y + a1y, a0z + a1z, a0w + a1w);
    return target;
  }
  public subVectors(a: Vector3, b: Vector3): this {
    this.x = a.x - b.x;
    this.y = a.y - b.y;
    this.z = a.z - b.z;
    return this;
  }
  public addScalar(scalar: number): Vector3 {
    this.x += scalar;
    this.y += scalar;
    this.z += scalar;
    return this;
  }
  public subScalar(scalar: number): Vector3 {
    this.x -= scalar;
    this.y -= scalar;
    this.z -= scalar;
    return this;
  }
  public min(v: Vector3, target: Vector3 = this): Vector3 {
    target.x = Math.min(this.x, v.x);
    target.y = Math.min(this.y, v.y);
    target.z = Math.min(this.z, v.z);
    return target;
  }
  public max(v: Vector3, target: Vector3 = this): Vector3 {
    target.x = Math.max(this.x, v.x);
    target.y = Math.max(this.y, v.y);
    target.z = Math.max(this.z, v.z);
    return target;
  }
  public distanceToSquared(v: Vector3): number {
    let dx = this.x - v.x;
    let dy = this.y - v.y;
    let dz = this.z - v.z;
    return dx * dx + dy * dy + dz * dz;
  }
  public addXYZW(
    x: number,
    y: number,
    z: number,
    w: number,
    target: Vector3 = null
  ): Vector3 {
    target ||= new Vector3();

    let a0x: number = this.x;
    let a0y: number = this.y;
    let a0z: number = this.z;
    let a0w: number = this.w;
    let a1x: number = x;
    let a1y: number = y;
    let a1z: number = z;
    let a1w: number = w;
    target.setTo(a0x + a1x, a0y + a1y, a0z + a1z, a0w + a1w);
    return target;
  }
  public clone(): Vector3 {
    return new Vector3(this.x, this.y, this.z, this.w);
  }
  public copyFrom(src: Vector3): Vector3 {
    let v = this;
    v.x = src.x;
    v.y = src.y;
    v.z = src.z;
    v.w = src.w;
    return v;
  }
  public decrementBy(a: Vector3): void {
    this.x -= a.x;
    this.y -= a.y;
    this.z -= a.z;
  }
  public dotProduct(a: Vector3): number {
    return this.x * a.x + this.y * a.y + this.z * a.z;
  }
  public equals(toCompare: Vector3, allFour: boolean = false): boolean {
    return (
      this.x == toCompare.x &&
      this.y == toCompare.y &&
      this.z == toCompare.z &&
      (!allFour || this.w == toCompare.w)
    );
  }
  public incrementBy(a: Vector3) {
    this.x += a.x;
    this.y += a.y;
    this.z += a.z;
  }
  public divide(v): Vector3 {
    if (v instanceof Vector3)
      return new Vector3(this.x / v.x, this.y / v.y, this.z / v.z);
    else {
      this.x = this.x / v;
      this.y = this.y / v;
      this.z = this.z / v;
    }
    return this;
  }
  public negate() {
    this.x = -this.x;
    this.y = -this.y;
    this.z = -this.z;
    return this;
  }
  public normalize(thickness: number = 1): Vector3 {
    let self = this;
    if (this.length != 0) {
      let invLength = thickness / this.length;
      this.x *= invLength;
      this.y *= invLength;
      this.z *= invLength;
      return self;
    }
    return self;
  }
  public applyQuaternion(q) {
    const x = this.x,
      y = this.y,
      z = this.z;
    const qx = q.x,
      qy = q.y,
      qz = q.z,
      qw = q.w;

    // calculate quat * vector

    const ix = qw * x + qy * z - qz * y;
    const iy = qw * y + qz * x - qx * z;
    const iz = qw * z + qx * y - qy * x;
    const iw = -qx * x - qy * y - qz * z;

    // calculate result * inverse quat

    this.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
    this.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
    this.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;

    return this;
  }
  public applyMatrix4(m): Vector3 {
    return m.transformPoint(this, this);
  }
  public scaleBy(s: number): Vector3 {
    this.x *= s;
    this.y *= s;
    this.z *= s;
    return this;
  }
  public mul(s: number): Vector3 {
    let v = new Vector3();
    v.x = this.x * s;
    v.y = this.y * s;
    v.z = this.z * s;
    return v;
  }
  public scale(s: Vector3): Vector3 {
    this.x *= s.x;
    this.y *= s.y;
    this.z *= s.z;
    return this;
  }
  public scaleToRef(s: number, ref: Vector3): Vector3 {
    if (!ref) {
      ref = new Vector3();
    }

    ref.x = this.x * s;
    ref.y = this.y * s;
    ref.z = this.z * s;
    return ref;
  }
  public setTo(xa: number, ya: number, za: number, wa: number = 1): void {
    this.x = xa;
    this.y = ya;
    this.z = za;
    this.w = wa;
  }
  public copy(src: Vector3): this {
    this.x = src.x;
    this.y = src.y;
    this.z = src.z;
    this.w = src.w;
    return this;
  }
  public subtract(a: Vector3, target: Vector3 = null): Vector3 {
    if (!target) {
      target = new Vector3();
    }
    target.setTo(this.x - a.x, this.y - a.y, this.z - a.z);
    return target;
  }
  public multiply(other: Vector3, target: Vector3 = null): Vector3 {
    if (!target) {
      target = new Vector3();
    }

    let x0: number = this.x;
    let y0: number = this.y;
    let z0: number = this.z;

    let x1: number = other.x;
    let y1: number = other.y;
    let z1: number = other.z;

    target.setTo(x0 * x1, y0 * y1, z0 * z1);
    return target;
  }
  public divided(other: Vector3, target: Vector3 = null): Vector3 {
    if (!target) {
      target = new Vector3();
    }

    let x0: number = this.x;
    let y0: number = this.y;
    let z0: number = this.z;

    let x1: number = other.x;
    let y1: number = other.y;
    let z1: number = other.z;

    target.setTo(x0 / x1, y0 / y1, z0 / z1);
    return target;
  }
  public div(v: number, target?: Vector3): Vector3 {
    if (!target) {
      target = new Vector3();
    }

    let x0: number = this.x;
    let y0: number = this.y;
    let z0: number = this.z;
    let w0: number = this.w;

    target.setTo(x0 / v, y0 / v, z0 / v, w0 / v);
    return target;
  }
  public lerp(v0: Vector3, v1: Vector3, t: number): void {
    let v0x: number = v0.x,
      v0y: number = v0.y,
      v0z: number = v0.z,
      v0w: number = v0.w;
    let v1x: number = v1.x,
      v1y: number = v1.y,
      v1z: number = v1.z,
      v1w: number = v1.w;

    this.x = (v1x - v0x) * t + v0x;
    this.y = (v1y - v0y) * t + v0y;
    this.z = (v1z - v0z) * t + v0z;
    this.w = (v1w - v0w) * t + v0w;
  }
  public clamp(min: Vector3, max: Vector3): Vector3 {
    this.x = Math.max(min.x, Math.min(max.x, this.x));
    this.y = Math.max(min.y, Math.min(max.y, this.y));
    this.z = Math.max(min.z, Math.min(max.z, this.z));

    return this;
  }
  public toString(): string {
    return "<" + this.x + ", " + this.y + ", " + this.z + ">";
  }
  public normalizeToWay2D_XY() {
    let tx = Math.abs(this.x);
    let ty = Math.abs(this.y);
    if (tx > ty) {
      if (this.x > 0) {
        this.copyFrom(Vector3.RIGHT);
      } else {
        this.copyFrom(Vector3.LEFT);
      }
    } else {
      if (this.y > 0) {
        this.copyFrom(Vector3.DOWN);
      } else {
        this.copyFrom(Vector3.UP);
      }
    }
  }
  public toArray() {
    return [this.x, this.y, this.z];
  }
  public copyToBytes(byte: DataView) {
    byte.setFloat32(0 * Float32Array.BYTES_PER_ELEMENT, this.x, true);
    byte.setFloat32(1 * Float32Array.BYTES_PER_ELEMENT, this.y, true);
    byte.setFloat32(2 * Float32Array.BYTES_PER_ELEMENT, this.z, true);
  }
  public crossProduct(a: Vector3, target: Vector3 = null): Vector3 {
    target = target || new Vector3();
    target.x = this.y * a.z - this.z * a.y;
    target.y = this.z * a.x - this.x * a.z;
    target.z = this.x * a.y - this.y * a.x;
    target.w = 1;
    return target;
  }
  public crossVectors(a: Vector3, b: Vector3): this {
    a.crossProduct(b, this);
    return this;
  }
  public multiplyScalar(scalar: number) {
    this.x *= scalar;
    this.y *= scalar;
    this.z *= scalar;

    return this;
  }
  public setFromArray(array: number[], firstElementPos: number = 0) {
    this.x = array[firstElementPos];
    this.y = array[firstElementPos + 1];
    this.z = array[firstElementPos + 2];
  }
  public divideScalar(scalar) {
    return this.multiplyScalar(1 / scalar);
  }
  public clampLength(min: number, max: number) {
    let length = this.length;
    return this.divideScalar(length || 1).multiplyScalar(
      Math.max(min, Math.min(max, length))
    );
  }
  public setScalar(value: number) {
    this.x = value;
    this.y = value;
    this.z = value;
    return this;
  }
  public addScaledVector(v: Vector3, scale: number): Vector3 {
    this.x += v.x * scale;
    this.y += v.y * scale;
    this.z += v.z * scale;
    return this;
  }
  private static calAngle(cx, cy, x, y) {
    const radian = getCosBy2pt(x, y, cx, cy);
    let angle = (Math.acos(radian) * 180) / Math.PI;

    if (x < cx) angle = -angle;
    return angle;

    // Calculate the vector formed by point 1 and point 2
    function getCosBy2pt(x, y, cx, cy) {
      // Dot product formula
      let a = [x - cx, y - cy];
      let b = [0, -1];
      return calCos(a, b);
    }
    function calCos(a, b) {
      let dotProduct = a[0] * b[0] + a[1] * b[1];
      let d =
        Math.sqrt(a[0] * a[0] + a[1] * a[1]) *
        Math.sqrt(b[0] * b[0] + b[1] * b[1]);
      return dotProduct / d;
    }
  }
  public static pointInsideTriangle(
    pt: Vector3,
    pt0: Vector3,
    pt1: Vector3,
    pt2: Vector3
  ): boolean {
    Vector3.HELP_0.setTo(pt.x, pt.z, 0);
    Vector3.HELP_1.setTo(pt0.x, pt0.z, 0);
    Vector3.HELP_2.setTo(pt1.x, pt1.z, 0);
    Vector3.HELP_3.setTo(pt2.x, pt2.z, 0);

    return Vector3.pointInsideTriangle2d();
  }
  private static pointInsideTriangle2d(): boolean {
    if (
      Vector3.productXY(Vector3.HELP_1, Vector3.HELP_2, Vector3.HELP_3) >= 0
    ) {
      return (
        Vector3.productXY(Vector3.HELP_1, Vector3.HELP_2, Vector3.HELP_0) >=
          0 &&
        Vector3.productXY(Vector3.HELP_2, Vector3.HELP_3, Vector3.HELP_0) >=
          0 &&
        Vector3.productXY(Vector3.HELP_3, Vector3.HELP_1, Vector3.HELP_0) >= 0
      );
    } else {
      return (
        Vector3.productXY(Vector3.HELP_1, Vector3.HELP_2, Vector3.HELP_0) <=
          0 &&
        Vector3.productXY(Vector3.HELP_2, Vector3.HELP_3, Vector3.HELP_0) <=
          0 &&
        Vector3.productXY(Vector3.HELP_3, Vector3.HELP_1, Vector3.HELP_0) <= 0
      );
    }
  }
  private static productXY(
    p1: { x: number; y: number },
    p2: { x: number; y: number },
    p3: { x: number; y: number }
  ): number {
    var val: number =
      (p1.x - p3.x) * (p2.y - p3.y) - (p1.y - p3.y) * (p2.x - p3.x);
    if (val > -0.00001 && val < 0.00001) val = 0;
    return val;
  }
  static serialize(position: Vector3): Vector3 {
    let v = new Vector3(position.x, position.y, position.z, position.w);
    return v;
  }
}
