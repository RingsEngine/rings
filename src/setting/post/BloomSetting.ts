export type BloomSetting = {
  enable?: boolean;
  // 降采样步长 step=2：隔1个像素采样（分辨率减半）
  downSampleStep: number;
  // 降采样模糊尺寸 理想核尺寸 ≈ 降采样倍数 / 2
  downSampleBlurSize: number;
  // 高斯模糊的强度
  downSampleBlurSigma: number;
  // 理想核尺寸 ≈ 升采样倍数 × 0.5
  upSampleBlurSize: number;
  upSampleBlurSigma: number;
  // 亮度阈值
  luminanceThreshole: number;
  bloomIntensity: number;
  hdr: number;
};
