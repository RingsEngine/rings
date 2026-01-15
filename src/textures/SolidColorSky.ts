import { Engine3D } from "../Engine3D";
import { Color } from "../math/Color";
import { Float16ArrayTexture } from "./Float16ArrayTexture";
import { LDRTextureCube } from "./LDRTextureCube";
import { toHalfFloat } from "../util/Convert";

export class SolidColorSky extends LDRTextureCube {
  private _internalTexture: Float16ArrayTexture;
  private readonly _minSize = 32;
  private _skyColor: Color;

  constructor(color: Color) {
    super();
    this._skyColor = color;
    this._internalTexture = new Float16ArrayTexture();
    let numbers: number[] = [];
    Engine3D.res.fillColor(
      numbers,
      this._minSize,
      this._minSize,
      this.color.r,
      this.color.g,
      this.color.b,
      this.color.a
    );
    // Convert number[] to Uint16Array (Float16 format)
    const float16Data = new Uint16Array(numbers.length);
    for (let i = 0; i < numbers.length; i++) {
      float16Data[i] = toHalfFloat(numbers[i]) & 0xffff;
    }
    this._internalTexture.create(this._minSize, this._minSize, float16Data, false);
    this.createFromTexture(this._minSize, this._internalTexture);
    return this;
  }

  private changeColor(color: Color): this {
    this._skyColor = color;
    // Create temporary number array for fillColor
    const numbers: number[] = [];
    Engine3D.res.fillColor(
      numbers,
      this._minSize,
      this._minSize,
      this.color.r,
      this.color.g,
      this.color.b,
      this.color.a
    );
    // Convert number[] to Uint16Array (Float16 format)
    const float16Data = new Uint16Array(numbers.length);
    for (let i = 0; i < numbers.length; i++) {
      float16Data[i] = toHalfFloat(numbers[i]) & 0xffff;
    }
    this._internalTexture.updateTexture(
      this._minSize,
      this._minSize,
      float16Data,
      false
    );
    this._faceData.uploadTexture(0, this._internalTexture);
    return this;
  }

  public get color(): Color {
    return this._skyColor;
  }

  public set color(value: Color) {
    this.changeColor(value);
  }
}
