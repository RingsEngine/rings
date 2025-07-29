import { DepthOfViewSetting } from "./post/DepthOfViewSetting";
import { GlobalFogSetting } from "./post/GlobalFogSetting";
import { GTAOSetting } from "./post/GTAOSetting";
import { OutlineSetting } from "./post/OutlineSetting";
import { SSRSetting } from "./post/SSRSetting";
import { TAASetting } from "./post/TAASetting";
import { BloomSetting } from "./post/BloomSetting";
import { GodRaySetting } from "./post/GodRaySetting";

export type RenderSetting = {
  debug: boolean;
  renderPassState: number;
  renderState_left: number;
  renderState_right: number;
  renderState_split: number;
  quadScale: number;
  hdrExposure: number;
  debugQuad: number;
  maxPointLight: number;
  maxDirectLight: number;
  maxSportLight: number;
  drawOpMin: number;
  drawOpMax: number;
  drawTrMin: number;
  drawTrMax: number;
  zPrePass: boolean;
  useLogDepth: boolean;
  useCompressGBuffer: boolean;
  gi: boolean;

  postProcessing: {
    enable?: boolean;
    bloom?: BloomSetting;
    ssao?: {
      debug: any;
      enable: boolean;
      radius: number;
      bias: number;
      aoPower: number;
    };
    ssr?: SSRSetting;
    taa?: TAASetting;
    // 高级环境光遮蔽
    gtao?: GTAOSetting;
    // 全局光线追踪
    ssgi?: GTAOSetting;
    outline?: OutlineSetting;
    globalFog?: GlobalFogSetting;
    // 丁达尔效应
    godRay?: GodRaySetting;
    // 近似抗锯齿
    fxaa?: {
      enable: boolean;
    };
    // 景深
    depthOfView?: DepthOfViewSetting;
  };
};
