import { HDRTextureCube } from "../textures/HDRTextureCube";

export type SkySetting = {
  type: `HDRSKY` | `ShaderSky`;
  sky: HDRTextureCube;
  skyExposure: number; // 曝光参数
  defaultFar: number;
  defaultNear: number;
};
