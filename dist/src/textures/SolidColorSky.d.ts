import { Color } from "../math/Color";
import { LDRTextureCube } from "./LDRTextureCube";
export declare class SolidColorSky extends LDRTextureCube {
    private _internalTexture;
    private readonly _minSize;
    private _skyColor;
    constructor(color: Color);
    private changeColor;
    get color(): Color;
    set color(value: Color);
}
