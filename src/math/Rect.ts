export class Rect {
  public x: number;
  public y: number;
  public w: number;
  public h: number;
  constructor(
    x: number = 0,
    y: number = 0,
    width: number = 0,
    height: number = 0
  ) {
    this.x = x;
    this.y = y;
    this.w = width;
    this.h = height;
  }
  public get width(): number {
    return this.w;
  }
  public set width(v) {
    this.w = v;
  }
  public get height(): number {
    return this.h;
  }
  public set height(v) {
    this.h = v;
  }
  public static pointInRect(
    x: number,
    y: number,
    lt_x: number,
    lt_y: number,
    rb_x: number,
    rb_y: number
  ): boolean {
    if (x < lt_x || x > rb_x || y < lt_y || y > rb_y) {
      return false;
    }

    return true;
  }
  public clone(): Rect {
    return new Rect(this.x, this.y, this.w, this.h);
  }
  public copyFrom(rect: Rect) {
    this.x = rect.x;
    this.y = rect.y;
    this.w = rect.w;
    this.h = rect.h;
  }
  public copyTo(rect: Rect): void {
    rect.copyFrom(this);
  }
  public inner(x: number, y: number): boolean {
    if (
      x < this.x ||
      x > this.x + this.width ||
      y < this.y ||
      y > this.y + this.height
    ) {
      return false;
    }
    return true;
  }
  public equal(rectangle: Rect): boolean {
    return !(
      this.x != rectangle.x ||
      this.y != rectangle.y ||
      this.width != rectangle.width ||
      this.height != rectangle.height
    );
  }
  public equalArea(
    x: number,
    y: number,
    width: number,
    height: number
  ): boolean {
    return !(
      this.x != x ||
      this.y != y ||
      this.width != width ||
      this.height != height
    );
  }
  public equalInnerArea(source: Rect): boolean {
    var aMinX = this.x;
    var aMinY = this.y;

    var aMaxX = this.x + this.width;
    var aMaxY = this.y + this.height;

    var bMinX = source.x;
    var bMinY = source.y;

    var bMaxX = source.x + source.width;
    var bMaxY = source.y + source.height;

    if (
      Math.max(aMinX, bMinX) <= Math.min(aMaxX, bMaxX) &&
      Math.max(aMinY, bMinY) <= Math.min(aMaxY, bMaxY)
    ) {
      return true;
    }
    return false;
  }
  public innerArea(source: Rect, target: Rect): Rect {
    target = target || new Rect();
    var Xa1 = this.x;
    var Ya1 = this.y;

    var Xa2 = this.x + this.width;
    var Ya2 = this.y + this.height;

    var Xb1 = source.x;
    var Yb1 = source.y;

    var Xb2 = source.x + source.width;
    var Yb2 = source.y + source.height;

    var top: number = Math.max(Ya1, Yb1);
    var bottom: number = Math.min(Ya2, Yb2);
    var left: number = Math.max(Xa1, Xb1);
    var right: number = Math.min(Xb2, Xa2);
    if (top >= 0 && bottom >= 0 && bottom - top >= 0 && right - left > 0) {
      target.x = left;
      target.y = top;
      target.width = right - left;
      target.height = bottom - top;
    } else {
      target.x = 0;
      target.y = 0;
      target.width = 0;
      target.height = 0;
    }
    return target;
  }
  public setTo(x: number, y: number, width: number, height: number): void {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
}
