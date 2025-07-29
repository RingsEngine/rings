import { Color } from "../../math/Color";
export type GlobalFogSetting = {
    debug: any;
    enable: boolean;
    fogType: number;
    fogHeightScale: number;
    start: number;
    end: number;
    density: number;
    ins: number;
    skyFactor: number;
    skyRoughness: number;
    overrideSkyFactor: number;
    fogColor: Color;
    falloff: number;
    rayLength: number;
    scatteringExponent: number;
    dirHeightLine: number;
};
