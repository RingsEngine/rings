# 后处理效果

## 后处理基础

后处理是在场景渲染完成后对图像进行的额外处理。Rings 使用多 Pass 渲染实现后处理：

```javascript
import { PostProcessing } from "@rings/core";

// 创建后处理栈
const postProcessing = new PostProcessing();
postProcessing.addPass(new BloomPass());
postProcessing.addPass(new FXAAPass());

// 应用到场景
scene.postProcessing = postProcessing;
```

## 内置后处理效果（基于源码实现）

### 1. 泛光(Bloom) - BloomPost

基于源码的 Bloom 实现，使用多 Pass 降采样/升采样高斯模糊。

**配置参数（基于 BloomSetting.ts）：**
- `enable`: 是否启用
- `downSampleStep`: 降采样步长（默认：5）
- `downSampleBlurSize`: 降采样模糊尺寸（默认：0.5）
- `downSampleBlurSigma`: 降采样高斯模糊强度（默认：1.0）
- `upSampleBlurSize`: 升采样模糊尺寸（默认：1.0）
- `upSampleBlurSigma`: 升采样高斯模糊强度（默认：1.0）
- `luminanceThreshole`: 亮度阈值（默认：0.8）
- `bloomIntensity`: 泛光强度（默认：0.5）
- `hdr`: HDR模式（默认：1.0）

**使用示例：**
```javascript
// 启用Bloom后处理
Engine3D.setting.render.postProcessing.bloom.enable = true;

// 配置参数
Engine3D.setting.render.postProcessing.bloom.downSampleStep = 5;
Engine3D.setting.render.postProcessing.bloom.luminanceThreshole = 0.8;
Engine3D.setting.render.postProcessing.bloom.bloomIntensity = 0.5;

// 或者通过组件属性访问
const bloomPost = new BloomPost();
bloomPost.luminanceThreshole = 0.9;
bloomPost.bloomIntensity = 0.7;
```

### 2. 屏幕空间反射(SSR) - SSRPost

基于屏幕空间的实时反射效果，使用光线追踪算法。

**配置参数（基于 SSRSetting.ts）：**
- `enable`: 是否启用
- `pixelRatio`: 像素比例（默认：1.0）
- `fadeEdgeRatio`: 边缘淡出比例，高值更平滑（默认：0.5）
- `rayMarchRatio`: 光线行进速度比（默认：0.05）
- `fadeDistanceMin`: 最小淡出距离（默认：1.0）
- `fadeDistanceMax`: 最大淡出距离（默认：1000.0）
- `roughnessThreshold`: 粗糙度阈值（默认：0.9）
- `powDotRN`: 反射强度（默认：0.5）
- `mixThreshold`: 混合阈值（默认：0.5）

**使用示例：**
```javascript
// 启用SSR后处理
Engine3D.setting.render.postProcessing.ssr.enable = true;

// 配置参数
Engine3D.setting.render.postProcessing.ssr.roughnessThreshold = 0.9;
Engine3D.setting.render.postProcessing.ssr.fadeEdgeRatio = 0.5;
Engine3D.setting.render.postProcessing.ssr.rayMarchRatio = 0.05;

// 通过组件属性访问
const ssrPost = new SSRPost();
ssrPost.roughnessThreshold = 0.8;
ssrPost.fadeDistanceMax = 2000.0;
```

### 3. 描边效果(Outline) - OutlinePost

基于物体ID的边缘描边效果，支持自定义颜色和强度。

**配置参数（基于 OutlineSetting.ts）：**
- `enable`: 是否启用
- `groupCount`: 分组数量（默认：1）
- `outlinePixel`: 描边像素宽度（默认：2.0）
- `fadeOutlinePixel`: 淡出描边像素宽度（默认：1.0）
- `strength`: 描边强度（默认：1.0）
- `useAddMode`: 是否使用叠加模式（默认：true）
- `textureScale`: 纹理缩放（默认：0.5）
- `debug`: 调试模式

**使用示例：**
```javascript
// 启用Outline后处理
Engine3D.setting.render.postProcessing.outline.enable = true;

// 配置参数
Engine3D.setting.render.postProcessing.outline.outlinePixel = 2.0;
Engine3D.setting.render.postProcessing.outline.strength = 1.5;
Engine3D.setting.render.postProcessing.outline.useAddMode = true;

// 通过组件属性访问
const outlinePost = new OutlinePost();
outlinePost.outlinePixel = 3.0;
outlinePost.strength = 2.0;
```

### 4. 全局雾效(GlobalFog) - GlobalFogPost

基于高度的全局雾效，支持多种雾类型。

**配置参数（基于 GlobalFogSetting.ts）：**
- `enable`: 是否启用
- `fogType`: 雾类型（0:线性，1:指数，2:高度）
- `fogHeightScale`: 雾高度缩放（默认：0.1）
- `start`: 雾起始距离（默认：0.0）
- `end`: 雾结束距离（默认：100.0）
- `density`: 雾密度（默认：0.1）
- `ins`: 浓度（默认：0.5）
- `skyFactor`: 天空因子（默认：1.0）
- `skyRoughness`: 天空粗糙度（默认：0.0）
- `overrideSkyFactor`: 覆盖天空因子（默认：1.0）
- `fogColor`: 雾颜色（Color对象）
- `falloff`: 衰减系数（默认：1.0）
- `rayLength`: 光线长度（默认：1.0）
- `scatteringExponent`: 散射指数（默认：1.0）
- `dirHeightLine`: 雾的垂直分布（默认：0.0）

**使用示例：**
```javascript
// 启用GlobalFog后处理
Engine3D.setting.render.postProcessing.globalFog.enable = true;

// 配置参数
Engine3D.setting.render.postProcessing.globalFog.fogType = 2; // 高度雾
Engine3D.setting.render.postProcessing.globalFog.density = 0.05;
Engine3D.setting.render.postProcessing.globalFog.fogColor = new Color(0.8, 0.9, 1.0);
```

### 5. 全局光照遮蔽(GTAO) - GTAOPost

基于光线追踪的全局环境光遮蔽效果。

**配置参数（基于 GTAOSetting.ts）：**
- `enable`: 是否启用
- `maxDistance`: 最大距离（默认：15.0）
- `maxPixel`: 最大像素（默认：16.0）
- `darkFactor`: 暗化因子（默认：0.5）
- `rayMarchSegment`: 光线行进段数（默认：6）
- `multiBounce`: 是否启用多次反弹（默认：true）
- `usePosFloat32`: 是否使用32位浮点位置（默认：false）
- `blendColor`: 是否混合颜色（默认：true）
- `debug`: 调试模式

**使用示例：**
```javascript
// 启用GTAO后处理
Engine3D.setting.render.postProcessing.gtao.enable = true;

// 配置参数
Engine3D.setting.render.postProcessing.gtao.maxDistance = 20.0;
Engine3D.setting.render.postProcessing.gtao.darkFactor = 0.4;
Engine3D.setting.render.postProcessing.gtao.rayMarchSegment = 8;
```

### 6. 丁达尔效应(GodRay) - GodRayPost

模拟光线穿过介质产生的体积光效果。

**配置参数（基于 GodRaySetting.ts）：**
- `enable`: 是否启用
- `blendColor`: 是否混合颜色（默认：true）
- `rayMarchCount`: 光线行进次数（默认：12）
- `scatteringExponent`: 散射指数（默认：10.0）
- `intensity`: 强度（默认：1.0）

**使用示例：**
```javascript
// 启用GodRay后处理
Engine3D.setting.render.postProcessing.godRay.enable = true;

// 配置参数
Engine3D.setting.render.postProcessing.godRay.rayMarchCount = 16;
Engine3D.setting.render.postProcessing.godRay.scatteringExponent = 15.0;
Engine3D.setting.render.postProcessing.godRay.intensity = 1.5;
```

### 7. 时间性抗锯齿(TAA) - TAAPost

基于时间累积的抗锯齿技术，使用历史帧信息。

**配置参数（基于 TAASetting.ts）：**
- `enable`: 是否启用
- `jitterSeedCount`: 抖动种子数量（默认：8）
- `blendFactor`: 混合因子（默认：0.1）
- `temporalJitterScale`: 时间抖动缩放（默认：1.0）
- `sharpFactor`: 锐化因子（默认：0.5）
- `sharpPreBlurFactor`: 预模糊锐化因子（默认：0.15）
- `debug`: 调试模式

**使用示例：**
```javascript
// 启用TAA后处理
Engine3D.setting.render.postProcessing.taa.enable = true;

// 配置参数
Engine3D.setting.render.postProcessing.taa.jitterSeedCount = 8;
Engine3D.setting.render.postProcessing.taa.blendFactor = 0.1;
Engine3D.setting.render.postProcessing.taa.sharpFactor = 0.5;
```

### 8. 景深(DepthOfField) - DepthOfFieldPost

基于深度的景深效果，模拟相机焦距。

**配置参数（基于 DepthOfViewSetting.ts）：**
- `enable`: 是否启用
- `iterationCount`: 迭代次数（默认：8）
- `pixelOffset`: 像素偏移（默认：1.0）
- `near`: 近裁剪面距离（默认：150.0）
- `far`: 远裁剪面距离（默认：300.0）

**使用示例：**
```javascript
// 启用DepthOfField后处理
Engine3D.setting.render.postProcessing.depthOfView.enable = true;

// 配置参数
Engine3D.setting.render.postProcessing.depthOfView.near = 100.0;
Engine3D.setting.render.postProcessing.depthOfView.far = 500.0;
Engine3D.setting.render.postProcessing.depthOfView.iterationCount = 16;
```

## 完整配置示例

```javascript
import { Engine3D, Scene3D, View3D, Camera3D } from '@rings/core';

// 初始化引擎
await Engine3D.init();

// 创建场景和相机
const scene = new Scene3D();
const camera = new Camera3D();
const view = new View3D();
view.scene = scene;
view.camera = camera;

// 配置后处理参数
Engine3D.setting.render.postProcessing.enable = true;

// Bloom配置
Engine3D.setting.render.postProcessing.bloom = {
  enable: true,
  downSampleStep: 5,
  luminanceThreshole: 0.8,
  bloomIntensity: 0.5,
  downSampleBlurSize: 0.5,
  downSampleBlurSigma: 1.0,
  upSampleBlurSize: 1.0,
  upSampleBlurSigma: 1.0,
  hdr: 1.0
};

// SSR配置
Engine3D.setting.render.postProcessing.ssr = {
  enable: true,
  pixelRatio: 1.0,
  fadeEdgeRatio: 0.5,
  rayMarchRatio: 0.05,
  fadeDistanceMin: 1.0,
  fadeDistanceMax: 1000.0,
  roughnessThreshold: 0.9,
  powDotRN: 0.5,
  mixThreshold: 0.5,
  debug: false
};

// GTAO配置
Engine3D.setting.render.postProcessing.gtao = {
  enable: true,
  maxDistance: 15.0,
  maxPixel: 16.0,
  darkFactor: 0.5,
  rayMarchSegment: 6,
  multiBounce: true,
  usePosFloat32: false,
  blendColor: true,
  debug: false
};

// 启动渲染
Engine3D.startRenderView(view);
```

## 性能优化建议

1. **分辨率缩放**：对于性能要求高的效果，可以降低渲染分辨率
2. **按需启用**：只在需要时启用特定的后处理效果
3. **参数调整**：降低迭代次数、减少光线行进步数等
4. **纹理压缩**：使用压缩纹理格式减少内存带宽

## 调试模式

大多数后处理效果都支持调试模式：

```javascript
// 开启调试视图
Engine3D.setting.render.postProcessing.ssr.debug = true;
Engine3D.setting.render.postProcessing.gtao.debug = true;
```

[返回文档首页 →](/)
