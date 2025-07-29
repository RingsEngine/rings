# 工具集

## 调试工具

### 1. 场景调试器

```javascript
// 启用场景调试器
import { SceneDebugger } from "@rings/tools";
SceneDebugger.enable(scene);
```

### 2. 性能面板

```javascript
// 显示性能面板
import { Stats } from "@rings/tools";
new Stats().show();
```

## 资源管理

### 1. 资源加载器

```javascript
import { ResourceLoader } from "@rings/core";

const loader = new ResourceLoader();
const texture = await loader.loadTexture("path/to/texture.png");
const model = await loader.loadModel("path/to/model.glb");
```

### 2. 资源热更新

```javascript
// 监听资源变化
loader.watch("path/to/assets", (event) => {
  console.log("资源已更新:", event.path);
});
```

## 实用工具函数

```javascript
import { MathUtils, ColorUtils } from "@rings/utils";

// 颜色转换
const hexColor = ColorUtils.rgbToHex(255, 0, 0);

// 数学计算
const lerpValue = MathUtils.lerp(0, 100, 0.5); // 50
```

[学习 Shader 开发 →](/shaders)
