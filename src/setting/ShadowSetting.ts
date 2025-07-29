export type ShadowSetting = {
  debug: any;
  enable: boolean;
  needUpdate: boolean;
  autoUpdate: boolean;
  updateFrameRate: number;
  type: `PCF` | `HARD` | `SOFT`;
  pointShadowBias: number;
  shadowBound?: number;
  shadowSize: number;
  shadowBias: number;
  shadowSoft: number;
  pointShadowSize: number;
  csmMargin: number;
  csmScatteringExp: number;
  csmAreaScale: number;
};
