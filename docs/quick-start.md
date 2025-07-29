# 快速入门

## 安装 Rings

使用 npm 安装 Rings：

```bash
npm install @rings/webgpu
```

或者通过 CDN 引入：

```html
<script src="https://cdn.jsdelivr.net/npm/@rings/webgpu/dist/rings.min.js"></script>
```

## 第一个 Rings 应用

```javascript
import { Engine3D, Scene3D, Object3D, Camera3D } from "@rings/webgpu";

// 初始化引擎
await Engine3D.init();

// 创建场景
const scene = new Scene3D();

// 创建相机
const camera = new Object3D();
camera.addComponent(Camera3D);
scene.addChild(camera);

// 启动渲染
Engine3D.startRender(scene);
```

## 下一步

- [了解核心概念](/core)
- [探索组件系统](/components)
