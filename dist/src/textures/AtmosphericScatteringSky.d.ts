import { Texture } from "../gfx/graphics/webGpu/core/texture/Texture";
import { Color } from "../math/Color";
import { LDRTextureCube } from "./LDRTextureCube";
export declare class AtmosphericScatteringSkySetting {
    sunRadius: number;
    sunRadiance: number;
    mieG: number;
    mieHeight: number;
    eyePos: number;
    sunX: number;
    sunY: number;
    sunBrightness: number;
    displaySun: boolean;
    defaultTextureCubeSize: number;
    defaultTexture2DSize: number;
    skyColor: Color;
}
export declare class AtmosphericScatteringSky extends LDRTextureCube {
    private _internalTexture;
    private _cubeSize;
    readonly setting: AtmosphericScatteringSkySetting;
    constructor(setting: AtmosphericScatteringSkySetting);
    get texture2D(): Texture;
    apply(): this;
}
