export class Vector4 {
  public static X_AXIS: Vector4 = new Vector4(1, 0, 0);
  public static Y_AXIS: Vector4 = new Vector4(0, 1, 0);
  public static Z_AXIS: Vector4 = new Vector4(0, 0, 1);
  public static HELP_0: Vector4 = new Vector4();
  public static HELP_1: Vector4 = new Vector4();
  public static HELP_2: Vector4 = new Vector4();
  public static EPSILON: number = 0.00001;
  public static HELP_3: Vector4 = new Vector4();
  public static HELP_4: Vector4 = new Vector4();
  public static HELP_5: Vector4 = new Vector4();
  public static HELP_6: Vector4 = new Vector4();
  public static ZERO: Vector4 = new Vector4();
  public static ONE: Vector4 = new Vector4(1, 1, 1, 1);
  public static LEFT: Vector4 = new Vector4(-1, 0, 0);
  public static RIGHT: Vector4 = new Vector4(1, 0, 0);
  public static UP: Vector4 = new Vector4(0, -1, 0);
  public static DOWN: Vector4 = new Vector4(0, 1, 0);
  public static BACK: Vector4 = new Vector4(0, 0, -1);
  public static FORWARD: Vector4 = new Vector4(0, 0, 1);

  public x: number = 0;
  public y: number = 0;
  public z: number = 0;
  public w: number = 1;
  constructor(x: number = 0, y: number = 0, z: number = 0, w: number = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
  }
  public get width() {
    return this.z;
  }
  public get height() {
    return this.w;
  }
  public static crossVectors(a: Vector4, b: Vector4, target?: Vector4) {
    target = target || new Vector4();
    var ax = a.x,
      ay = a.y,
      az = a.z;
    var bx = b.x,
      by = b.y,
      bz = b.z;

    target.x = ay * bz - az * by;
    target.y = az * bx - ax * bz;
    target.z = ax * by - ay * bx;

    return target;
  }
  public static distance(pt1: Vector4, pt2: Vector4): number {
    let x: number = pt1.x - pt2.x;
    let y: number = pt1.y - pt2.y;
    let z: number = pt1.z - pt2.z;
    let w: number = pt1.w - pt2.w;
    return Math.sqrt(x * x + y * y + z * z + w * w);
  }
  public set(x: number, y: number, z: number, w: number): this {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
    return this;
  }
  public multiplyScalar(scalar: number): this {
    this.x *= scalar;
    this.y *= scalar;
    this.z *= scalar;
    this.w *= scalar;
    return this;
  }
  public copyFrom(v: Vector4): this {
    this.x = v.x;
    this.y = v.y;
    this.z = v.z;
    this.w = v.w;
    return this;
  }
  public clone(): Vector4 {
    return new Vector4(this.x, this.y, this.z, this.w);
  }
}
