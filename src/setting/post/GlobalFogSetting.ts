import { Color } from "../../math/Color";

export type GlobalFogSetting = {
  debug: any;
  enable: boolean;
  fogType: number;
  fogHeightScale: number;
  start: number;
  end: number;
  density: number;
  // 浓度
  ins: number;
  skyFactor: number;
  skyRoughness: number;
  // 大于 1.0：增强天空光照的影响
  overrideSkyFactor: number;
  fogColor: Color;
  // 衰减
  falloff: number;
  rayLength: number;
  // 散射指数
  scatteringExponent: number;
  // 雾的垂直分布
  dirHeightLine: number;
};
