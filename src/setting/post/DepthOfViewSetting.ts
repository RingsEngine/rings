export type DepthOfViewSetting = {
  enable: boolean;
  iterationCount: number; // 迭代次数，一般是8或16
  pixelOffset: number; // = 1.0;
  near: number; // = 150;
  far: number; // = 300;
};
