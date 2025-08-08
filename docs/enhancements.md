## 媒体图片

### 类概述
- **继承自**：`Material` 基类
- **功能**：专用于图片渲染的材质，不参与光照计算，直接从图片源读取像素颜色。

### 核心属性
| 属性 | 类型 | 描述 |
|------|------|------|
| `baseMap` | `Texture` | 基础贴图（图片纹理） |
| `baseColor` | `Color` | 基础颜色（ tint color ） |
| `rectClip` | `Vector4` | 图片裁剪区域 |

### 关键方法
- **构造函数**：初始化着色器和默认参数
- **调试支持**：提供 `debug()` 方法（当前为空实现）

### 着色器特性
- 使用自定义 WGSL 着色器（`ImageMaterialShader.wgsl`）
- 禁用阴影、环境光、全局光照等效果

### 示例代码
```typescript
// 创建 ImageMaterial 实例
const imageMaterial = new ImageMaterial();

// 设置基础贴图
imageMaterial.baseMap = new Texture("path/to/image.png");

// 设置基础颜色（tint color）
imageMaterial.baseColor = new Color(1, 1, 1, 1);

// 设置裁剪区域（x, y, width, height）
imageMaterial.rectClip = new Vector4(0, 0, 1, 1);
```

```typescript
import { ImageMaterial } from '@rings/media-extention';
```

