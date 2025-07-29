import { getFloatFromInt } from "./MathUtil";

export class Rand {
  private _x: number = 0;
  private _y: number = 0;
  private _z: number = 0;
  private _w: number = 0;

  constructor(seed = 0) {
    this.seed = seed;
  }

  public get seed(): number {
    return this._x;
  }

  public set seed(value: number) {
    this._x = value;
    this._y = this._x * 1812433253 + 1;
    this._z = this._y * 1812433253 + 1;
    this._w = this._z * 1812433253 + 1;
  }

  public static getFloatFromInt(value) {
    // take 23 bits of integer, and divide by 2^23-1
    return Math.floor((value & 0x007fffff) * (1.0 / 8388607.0));
  }

  public static getByteFromInt(value) {
    // take the most significant byte from the 23-bit value
    return value >> (23 - 8);
  }

  public clone(): Rand {
    let result = new Rand();
    result._x = this._x;
    result._y = this._y;
    result._z = this._z;
    result._w = this._w;
    return result;
  }

  public get() {
    let t = this._x ^ (this._x << 11);
    this._x = this._y;
    this._y = this._z;
    this._z = this._w;
    return (this._w = this._w ^ (this._w >> 19) ^ (t ^ (t >> 8)));
  }

  public getFloat() {
    return getFloatFromInt(this.get());
  }

  public getSignedFloat() {
    return this.getFloat() * 2.0 - 1.0;
  }
}
