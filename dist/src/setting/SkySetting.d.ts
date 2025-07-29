import { HDRTextureCube } from "../textures/HDRTextureCube";
export type SkySetting = {
    type: `HDRSKY` | `ShaderSky`;
    sky: HDRTextureCube;
    skyExposure: number;
    defaultFar: number;
    defaultNear: number;
};
