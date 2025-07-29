# 后处理效果

## 后处理基础

后处理是在场景渲染完成后对图像进行的额外处理。Rings 使用多 Pass 渲染实现后处理：

```javascript
import { PostProcessing } from "@rings/webgpu";

// 创建后处理栈
const postProcessing = new PostProcessing();
postProcessing.addPass(new BloomPass());
postProcessing.addPass(new FXAAPass());

// 应用到场景
scene.postProcessing = postProcessing;
```

## 内置后处理效果

### 1. 泛光(Bloom)

```javascript
import { BloomPass } from "@rings/postprocess";

const bloom = new BloomPass({
  intensity: 0.8,
  threshold: 0.6,
});
```

### 2. 抗锯齿(FXAA)

```javascript
import { FXAAPass } from "@rings/postprocess";

const fxaa = new FXAAPass();
```

### 3. 色彩校正(ColorGrading)

```javascript
import { ColorGradingPass } from "@rings/postprocess";

const colorGrading = new ColorGradingPass({
  saturation: 1.2,
  contrast: 1.1,
});
```

## 自定义后处理

```javascript
import { PostProcessPass } from "@rings/postprocess";

class MyCustomPass extends PostProcessPass {
  constructor() {
    super(myCustomShader);
  }

  update() {
    // 每帧更新逻辑
  }
}
```

## 完整示例

```javascript
// 创建带后处理的场景
const scene = new Scene3D();
scene.postProcessing = new PostProcessing()
  .addPass(new BloomPass())
  .addPass(new FXAAPass())
  .addPass(new MyCustomPass());
```

[返回文档首页 →](/)
