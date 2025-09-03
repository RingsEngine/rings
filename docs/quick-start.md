# 快速入门指南

本指南将帮助您快速上手Rings Engine，创建一个完整的3D场景。

## 🚀 环境准备

### 系统要求

- **Node.js**: 16.0 或更高版本
- **浏览器**: Chrome 113+, Firefox 111+, Safari 16.4+
- **GPU**: 支持WebGPU的显卡

### 安装方式

#### 方式一：CDN引入
```html
<!DOCTYPE html>
<html>
<head>
    <title>Rings Engine Demo</title>
    <script src="https://unpkg.com/@orillusion/core/dist/orillusion.js"></script>
</head>
<body>
    <canvas id="canvas" width="800" height="600"></canvas>
    <script>
        // 您的代码将在这里
    </script>
</body>
</html>
```

#### 方式二：NPM安装
```bash
npm install @orillusion/core
```

```typescript
import { Engine3D, Scene3D, Object3D, Camera3D, LitMaterial, BoxGeometry, MeshRenderer } from '@orillusion/core';
```

## 🎯 第一个3D场景

### 完整示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rings Engine - 第一个3D场景</title>
    <style>
        body { margin: 0; overflow: hidden; }
        canvas { width: 100%; height: 100%; display: block; }
    </style>
</head>
<body>
    <canvas id="canvas"></canvas>
    
    <script type="module">
        import {
            Engine3D, Scene3D, Object3D, Camera3D, View3D, LitMaterial, 
            BoxGeometry, SphereGeometry, PlaneGeometry, MeshRenderer, 
            AtmosphericComponent, DirectLight, HoverCameraController
        } from 'https://unpkg.com/@orillusion/core/dist/orillusion.es.js';

        async function init() {
            // 初始化引擎
            await Engine3D.init();

            // 创建场景
            const scene = new Scene3D();
            
            // 添加大气环境
            const sky = scene.addComponent(AtmosphericComponent);
            sky.sunY = 0.6;
            sky.sunZ = 0.8;

            // 创建相机
            const cameraObj = new Object3D();
            const camera = cameraObj.addComponent(Camera3D);
            camera.perspective(60, window.innerWidth / window.innerHeight, 0.1, 1000);
            
            // 添加相机控制器
            const hoverController = cameraObj.addComponent(HoverCameraController);
            hoverController.setCamera(45, -30, 10);
            
            scene.addChild(cameraObj);

            // 创建光源
            const lightObj = new Object3D();
            const light = lightObj.addComponent(DirectLight);
            light.lightColor = new Float32Array([1, 1, 1, 1]);
            light.intensity = 1.2;
            light.castShadow = true;
            scene.addChild(lightObj);

            // 创建地面
            const ground = new Object3D();
            const renderer = ground.addComponent(MeshRenderer);
            renderer.geometry = new PlaneGeometry(10, 10);
            renderer.material = new LitMaterial();
            renderer.material.baseColor = new Float32Array([0.3, 0.3, 0.3, 1]);
            renderer.receiveShadow = true;
            scene.addChild(ground);

            // 创建立方体
            const box = new Object3D();
            const boxRenderer = box.addComponent(MeshRenderer);
            boxRenderer.geometry = new BoxGeometry(1, 1, 1);
            boxRenderer.material = new LitMaterial();
            boxRenderer.material.baseColor = new Float32Array([0.8, 0.2, 0.2, 1]);
            boxRenderer.castShadow = true;
            box.y = 0.5;
            scene.addChild(box);

            // 创建球体
            const sphere = new Object3D();
            const sphereRenderer = sphere.addComponent(MeshRenderer);
            sphereRenderer.geometry = new SphereGeometry(0.5, 32, 32);
            sphereRenderer.material = new LitMaterial();
            sphereRenderer.material.baseColor = new Float32Array([0.2, 0.8, 0.2, 1]);
            sphereRenderer.castShadow = true;
            sphere.x = 2;
            sphere.y = 0.5;
            scene.addChild(sphere);

            // 创建视图
            const view = new View3D();
            view.scene = scene;
            view.camera = camera;

            // 启动渲染
            Engine3D.startRenderView(view);
        }

        init();
    </script>
</body>
</html>
```

## 📁 项目结构

### 推荐目录结构

```
my-rings-project/
├── src/
│   ├── main.ts          # 入口文件
│   ├── scenes/
│   │   └── game-scene.ts
│   ├── components/
│   │   └── custom-components.ts
│   └── assets/
│       ├── models/
│       └── textures/
├── public/
│   ├── index.html
│   └── assets/
├── package.json
└── tsconfig.json
```

### TypeScript项目配置

#### package.json
```json
{
  "name": "rings-demo",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@orillusion/core": "latest"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "vite": "^4.0.0"
  }
}
```

#### tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["src"]
}
```

## 🎮 交互控制

### 相机控制

```typescript
// 轨道控制器
const hoverController = camera.addComponent(HoverCameraController);
hoverController.setCamera(45, -30, 10);
hoverController.distance = 10;
hoverController.maxDistance = 50;
hoverController.minDistance = 2;

// 第一人称控制器
const fpsController = camera.addComponent(FPSController);
fpsController.moveSpeed = 5;
fpsController.sensitivity = 0.1;
```

### 鼠标交互

```typescript
// 鼠标拾取
const pointer = new PointerEvent3D();
pointer.on(PointerEvent3D.POINTER_CLICK, (event) => {
    const pickResult = scene.view.pick(event.mouseX, event.mouseY);
    if (pickResult.object) {
        console.log('点击了对象:', pickResult.object.name);
    }
});
```

## 🎨 材质与纹理

### 加载纹理

```typescript
// 加载纹理
const texture = await Engine3D.res.loadTexture('diffuse.jpg');

// 设置到材质
const material = new LitMaterial();
material.baseTexture = texture;
material.normalTexture = await Engine3D.res.loadTexture('normal.jpg');
material.metallicTexture = await Engine3D.res.loadTexture('metallic.jpg');
material.roughnessTexture = await Engine3D.res.loadTexture('roughness.jpg');
```

### 创建程序化材质

```typescript
// 创建自定义材质
const customMaterial = new LitMaterial();
customMaterial.baseColor = new Float32Array([0.8, 0.3, 0.2, 1]);
customMaterial.metallic = 0.8;
customMaterial.roughness = 0.3;
```

## 📦 资源加载

### 加载3D模型

```typescript
// 加载GLTF模型
const model = await Engine3D.res.loadGltf('model.gltf');
scene.addChild(model);

// 加载后处理
model.traverse((child) => {
    if (child.hasComponent(MeshRenderer)) {
        const renderer = child.getComponent(MeshRenderer);
        renderer.castShadow = true;
        renderer.receiveShadow = true;
    }
});
```

### 加载HDR环境贴图

```typescript
// 加载HDR环境
const hdr = await Engine3D.res.loadTexture('studio.hdr', {
    type: 'hdr',
    flipY: false
});
scene.envMap = hdr;
scene.roughness = 0.5;
scene.exposure = 1.2;
```

## ⚡ 性能优化

### 启用阴影

```typescript
// 方向光阴影
const light = lightObj.addComponent(DirectLight);
light.castShadow = true;
light.shadowResolution = 2048;
light.shadowBias = 0.001;

// 物体阴影设置
renderer.castShadow = true;
renderer.receiveShadow = true;
```

### 实例化渲染

```typescript
// 创建实例化渲染器
const instancedRenderer = new InstancedMeshRenderer();
instancedRenderer.geometry = new BoxGeometry(1, 1, 1);
instancedRenderer.material = new LitMaterial();

// 添加多个实例
for (let i = 0; i < 1000; i++) {
    const matrix = new Matrix4();
    matrix.setTranslation(
        Math.random() * 50 - 25,
        Math.random() * 10,
        Math.random() * 50 - 25
    );
    instancedRenderer.addInstance(matrix);
}

scene.addChild(instancedRenderer.object3D);
```

## 🐛 调试技巧

### 启用调试模式

```typescript
// 显示统计信息
Engine3D.stats.showStats = true;

// 显示包围盒
Engine3D.debug.showBounds = true;

// 显示线框
Engine3D.debug.showWireframe = true;
```

### 性能监控

```typescript
// 监听性能数据
Engine3D.stats.onUpdate = (stats) => {
    console.log(`FPS: ${stats.fps}`);
    console.log(`Draw Calls: ${stats.drawCalls}`);
    console.log(`Triangles: ${stats.triangles}`);
    console.log(`GPU Memory: ${stats.gpuMemory}MB`);
};
```

## 🚀 下一步

完成快速入门后，您可以：

1. **深入学习**：[核心概念 →](/core)
2. **探索组件**：[组件系统 →](/components)
3. **渲染技术**：[渲染管线 →](/rendering)
4. **着色器开发**：[Shader开发 →](/shaders)
5. **后处理效果**：[后处理 →](/post-processing)

## 📚 示例代码仓库

- [基础示例](https://github.com/orillusion/orillusion-examples)
- [进阶教程](https://github.com/orillusion/orillusion-tutorials)
- [官方演示](https://github.com/orillusion/orillusion-demos)

## 💡 常见问题

### Q: 浏览器不支持WebGPU怎么办？
A: 请使用最新版Chrome/Edge，并在chrome://flags中启用WebGPU。

### Q: 模型加载失败？
A: 检查模型路径是否正确，确保支持GLTF/GLB格式。

### Q: 性能问题？
A: 使用实例化渲染、LOD系统、减少光源数量。

---

🎉 恭喜！您已经成功创建了第一个Rings Engine 3D场景。继续探索更多高级功能吧！
