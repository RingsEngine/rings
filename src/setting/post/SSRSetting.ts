export type SSRSetting = {
  debug: any;
  enable: boolean;
  // 像素比
  pixelRatio: number;
  // 边缘淡出比例 0.5高值，平滑
  fadeEdgeRatio: number;
  // 光线行进速度比
  rayMarchRatio: number;
  fadeDistanceMin: number;
  fadeDistanceMax: number;
  // 粗糙度阈值
  roughnessThreshold: number;
  // 反射强度
  powDotRN: number;
  mixThreshold: number;
};
