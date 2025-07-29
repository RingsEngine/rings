export class Vector2 {
  public static HELP_0: Vector2 = new Vector2();
  public static HELP_1: Vector2 = new Vector2();
  public static HELP_2: Vector2 = new Vector2();
  public static readonly ZERO: Vector2 = new Vector2(0, 0);
  public static readonly SAFE_MAX: Vector2 = new Vector2(
    Number.MAX_SAFE_INTEGER,
    Number.MAX_SAFE_INTEGER
  );
  public static readonly SAFE_MIN: Vector2 = new Vector2(
    Number.MIN_SAFE_INTEGER,
    Number.MIN_SAFE_INTEGER
  );
  public x: number = 0.0;
  public y: number = 0.0;

  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }

  public static getAngle(a: Vector2, b: Vector2): number {
    return Math.atan2(b.y - a.y, b.x - a.x);
  }
  public static slerp(from: Vector2, to: Vector2, t: number): Vector2 {
    let v = new Vector2();
    let dot = from.dot(to);
    if (dot < 0) {
      to.x = -to.x;
      to.y = -to.y;
      dot = -dot;
    }
    if (dot > 0.9995) {
      v.x = from.x + t * (to.x - from.x);
      v.y = from.y + t * (to.y - from.y);
      return v;
    }
    let theta = Math.acos(dot);
    let sinTheta = Math.sin(theta);
    let scale0 = Math.sin((1 - t) * theta) / sinTheta;
    let scale1 = Math.sin(t * theta) / sinTheta;
    v.x = scale0 * from.x + scale1 * to.x;
    v.y = scale0 * from.y + scale1 * to.y;
    return v;
  }
  public static lerp(from: Vector2, to: Vector2, t: number) {
    Vector2.HELP_0.copyFrom(from);
    Vector2.HELP_1.copyFrom(to);
    Vector2.HELP_0.scale(t);
    Vector2.HELP_1.scale(1.0 - t);
    return new Vector2(
      Vector2.HELP_0.x + Vector2.HELP_1.x,
      Vector2.HELP_0.y + Vector2.HELP_1.y
    );
  }
  public set(x: number = 0, y: number = 0): this {
    this.x = x;
    this.y = y;
    return this;
  }
  public distance(a: Vector2): number {
    return Math.sqrt(Math.pow(this.x - a.x, 2) + Math.pow(this.y - a.y, 2));
  }
  public add(a: Vector2, target?: Vector2): Vector2 {
    target = target || new Vector2();
    target.x = this.x + a.x;
    target.y = this.y + a.y;
    return target;
  }
  public sub(a: Vector2, target?: Vector2): Vector2 {
    target = target || new Vector2();
    target.x = this.x - a.x;
    target.y = this.y - a.y;
    return target;
  }
  public scale(v: number): this {
    this.x = this.x * v;
    this.y = this.y * v;
    return this;
  }
  public multiply(a: number, target?: Vector2) {
    target = target || new Vector2();
    target.x = this.x * a;
    target.y = this.y * a;
    return target;
  }
  public multiplyScaler(a: number): this {
    this.x *= a;
    this.y *= a;
    return this;
  }
  public divide(v: number, target?: Vector2) {
    target = target || new Vector2();
    target.x = this.x / v;
    target.y = this.y / v;
    return target;
  }
  public neg(target?: Vector2): Vector2 {
    if (!target) target = new Vector2();
    target.x = -target.x;
    target.y = -target.y;
    return target;
  }
  public abs() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  public length(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  public getAngle(target: Vector2): number {
    return Math.atan2(target.y - this.y, target.x - this.x);
  }
  public unt(target?: Vector2): Vector2 {
    target = target || new Vector2();
    let d = this.abs();
    target.x = this.x / d;
    target.y = this.y / d;
    return target;
  }
  public angleTo(v: Vector2): number {
    let dx = v.x - this.x;
    let dy = v.y - this.y;
    return Math.atan2(dy, dx);
  }
  public equals(a: Vector2): boolean {
    if (Math.abs(this.x - a.x) < 1e-6 && Math.abs(this.y - a.y) < 1e-6)
      return true;
    return false;
  }
  public pal(a: Vector2): number {
    let u1 = this.unt();
    let u2 = a.unt();
    if (u1.equals(u2)) return 1;
    if (u1.equals(u2.neg())) return -1;
    return 0;
  }
  public clone(): Vector2 {
    return new Vector2(this.x, this.y);
  }
  public copyFrom(v: Vector2): Vector2 {
    this.x = v.x;
    this.y = v.y;
    return this;
  }
  public addScaledVector(v: Vector2, size: number): Vector2 {
    this.x += v.x * size;
    this.y += v.y * size;
    return this;
  }
  public dot(value: Vector2): number {
    return this.x * value.x + this.y * value.y;
  }
  public normalize(): this {
    let d = this.abs();
    this.x = this.x / d;
    this.y = this.y / d;
    return this;
  }
  public addInPlace(otherVector: Vector2): this {
    this.x += otherVector.x;
    this.y += otherVector.y;
    return this;
  }
  public addScalar(s: number): this {
    this.x += s;
    this.y += s;
    return this;
  }
  public clampScalar(minVal: number, maxVal: number) {
    this.x = Math.max(minVal, Math.min(maxVal, this.x));
    this.y = Math.max(minVal, Math.min(maxVal, this.y));

    return this;
  }
}
