export type TAASetting = {
  enable: boolean;
  // 数值=8表示每8帧后抖动模式重复
  jitterSeedCount: number;
  // 混合比例
  blendFactor: number;
  // 抖动范围
  temporalJitterScale: number;
  // 锐化比例
  sharpFactor: number;
  sharpPreBlurFactor: number;
  debug: boolean;
};
