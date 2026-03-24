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
    <script src="https://unpkg.com/@rings-webgpu/core@1.0.52/dist/rings.es.js"></script>
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
npm install @rings-webgpu/core
```

```typescript
import { Engine3D, Scene3D, Object3D, Camera3D, LitMaterial, BoxGeometry, MeshRenderer } from '@rings-webgpu/core';
```

## 🎯 第一个3D场景

### 完整示例

下方为仓库内自带的 **可运行 HTML**：

- **在文档页内嵌预览**（若当前文档站点支持内联 HTML，可直接看到运行效果；左侧为示例，右侧为代码，可切换）：

<div class="rings-quick-demo" style="margin: 1em 0; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
  <input type="radio" name="rings-demo-tab" id="rings-tab-preview" checked style="position: absolute; opacity: 0; pointer-events: none;">
  <input type="radio" name="rings-demo-tab" id="rings-tab-code" style="position: absolute; opacity: 0; pointer-events: none;">
  <style>
    .rings-quick-demo .rings-tab-bar { display: flex; border-bottom: 1px solid #e2e8f0; background: #f8fafc; }
    .rings-quick-demo .rings-tab-bar label { flex: 1; padding: 10px 16px; cursor: pointer; font-size: 14px; color: #64748b; text-align: center; margin: 0; }
    .rings-quick-demo #rings-tab-preview:checked ~ .rings-tab-bar label[for="rings-tab-preview"],
    .rings-quick-demo #rings-tab-code:checked ~ .rings-tab-bar label[for="rings-tab-code"] { font-weight: 600; color: #0f172a; }
    .rings-quick-demo .rings-demo-preview,
    .rings-quick-demo .rings-demo-code { display: none; height: 420px; }
    .rings-quick-demo #rings-tab-preview:checked ~ .rings-demo-preview,
    .rings-quick-demo #rings-tab-code:checked ~ .rings-demo-code { display: block; }
  </style>
  <div class="rings-tab-bar">
    <label for="rings-tab-preview">示例</label>
    <label for="rings-tab-code">代码</label>
  </div>
  <div class="rings-demo-preview" style="background: #fff;">
    <iframe src="examples/quick-start-first-scene.html" title="Rings 第一个 3D 场景" style="width: 100%; height: 100%; border: none; min-height: 420px;"></iframe>
  </div>
  <div class="rings-demo-code" style="overflow: auto; background: #1e293b;">
    <pre style="margin: 0; padding: 16px; font-size: 12px; line-height: 1.5; color: #e2e8f0; white-space: pre;"><code>&lt;!DOCTYPE html&gt;
&lt;html lang="zh-CN"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8" /&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;
  &lt;title&gt;Rings — 第一个 3D 场景&lt;/title&gt;
  &lt;style&gt;
    html, body { margin: 0; height: 100%; overflow: hidden; }
    #canvas { display: block; width: 100%; height: 100%; }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;canvas id="canvas"&gt;&lt;/canvas&gt;
  &lt;script type="module"&gt;
    import {
      Engine3D, Scene3D, Object3D, Camera3D, View3D,
      LitMaterial, BoxGeometry, SphereGeometry, PlaneGeometry,
      MeshRenderer, AtmosphericComponent, DirectLight,
      HoverCameraController, Color,
    } from 'https://unpkg.com/@rings-webgpu/core@1.0.52/dist/rings.es.js';

    async function main() {
      const canvas = document.getElementById('canvas');
      await Engine3D.init({ canvasConfig: { canvas } });

      const scene = new Scene3D();
      const sky = scene.addComponent(AtmosphericComponent);
      sky.sunY = 0.6; sky.sunZ = 0.8;

      const cameraObj = new Object3D();
      const camera = cameraObj.addComponent(Camera3D);
      camera.perspective(60, canvas.clientWidth / Math.max(canvas.clientHeight, 1), 0.1, 1000);
      const hoverController = cameraObj.addComponent(HoverCameraController);
      hoverController.setCamera(45, -30, 10);
      scene.addChild(cameraObj);

      const lightObj = new Object3D();
      const light = lightObj.addComponent(DirectLight);
      light.lightColor = new Color(1, 1, 1, 1);
      light.intensity = 1.2; light.castShadow = true;
      scene.addChild(lightObj);

      const ground = new Object3D();
      const groundR = ground.addComponent(MeshRenderer);
      groundR.geometry = new PlaneGeometry(10, 10);
      groundR.material = new LitMaterial();
      groundR.material.baseColor = new Color(0.3, 0.3, 0.3, 1);
      groundR.receiveShadow = true;
      scene.addChild(ground);

      const box = new Object3D();
      const boxR = box.addComponent(MeshRenderer);
      boxR.geometry = new BoxGeometry(1, 1, 1);
      boxR.material = new LitMaterial();
      boxR.material.baseColor = new Color(0.8, 0.2, 0.2, 1);
      boxR.castShadow = true; box.y = 0.5;
      scene.addChild(box);

      const sphere = new Object3D();
      const sphereR = sphere.addComponent(MeshRenderer);
      sphereR.geometry = new SphereGeometry(0.5, 32, 32);
      sphereR.material = new LitMaterial();
      sphereR.material.baseColor = new Color(0.2, 0.8, 0.2, 1);
      sphereR.castShadow = true;
      sphere.x = 2; sphere.y = 0.5;
      scene.addChild(sphere);

      const view = new View3D();
      view.scene = scene; view.camera = camera;
      Engine3D.startRenderView(view);
    }
    main();
  &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
  </div>
</div>

---

下面给出 **可直接对照使用** 的页面与引用方式（版本号与引擎包一致时可替换 URL 中的 `1.0.52`）。

**要点：**

- 须使用 **HTTPS 或 localhost**（WebGPU 安全上下文）；不要直接用 `file://` 打开。
- 若页面里已有 `<canvas id="canvas">`，请在 `Engine3D.init` 里传入 **`canvasConfig: { canvas }`**，否则会由引擎自动在 `body` 末尾再插入一块画布。

---

#### 方式一：单文件 HTML + CDN（ESM 打包入口）

**引用：** `https://unpkg.com/@rings-webgpu/core@1.0.52/dist/rings.es.js`（与 `package.json` 的 `exports.import` 一致）

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Rings — 第一个 3D 场景（CDN）</title>
  <style>
    html, body { margin: 0; height: 100%; overflow: hidden; }
    #canvas { display: block; width: 100%; height: 100%; }
  </style>
</head>
<body>
  <canvas id="canvas"></canvas>
  <script type="module">
    /** 与发布包一致的 ESM 入口（可按需改版本号） */
    import {
      Engine3D,
      Scene3D,
      Object3D,
      Camera3D,
      View3D,
      LitMaterial,
      BoxGeometry,
      SphereGeometry,
      PlaneGeometry,
      MeshRenderer,
      AtmosphericComponent,
      DirectLight,
      HoverCameraController,
      Color,
    } from 'https://unpkg.com/@rings-webgpu/core@1.0.52/dist/rings.es.js';

    async function main() {
      const canvas = document.getElementById('canvas');
      if (!canvas) throw new Error('缺少 #canvas');

      try {
        await Engine3D.init({
          canvasConfig: { canvas },
        });
      } catch (e) {
        document.body.innerHTML =
          '<p style="padding:1rem;font-family:sans-serif">WebGPU 初始化失败，请使用 Chrome/Edge 最新版并在 localhost 或 HTTPS 下打开。</p>';
        console.error(e);
        return;
      }

      const scene = new Scene3D();
      const sky = scene.addComponent(AtmosphericComponent);
      sky.sunY = 0.6;
      sky.sunZ = 0.8;

      const cameraObj = new Object3D();
      const camera = cameraObj.addComponent(Camera3D);
      camera.perspective(60, canvas.clientWidth / Math.max(canvas.clientHeight, 1), 0.1, 1000);

      const hoverController = cameraObj.addComponent(HoverCameraController);
      hoverController.setCamera(45, -30, 10);
      scene.addChild(cameraObj);

      const lightObj = new Object3D();
      const light = lightObj.addComponent(DirectLight);
      light.lightColor = new Color(1, 1, 1, 1);
      light.intensity = 1.2;
      light.castShadow = true;
      scene.addChild(lightObj);

      const ground = new Object3D();
      const groundR = ground.addComponent(MeshRenderer);
      groundR.geometry = new PlaneGeometry(10, 10);
      groundR.material = new LitMaterial();
      groundR.material.baseColor = new Color(0.3, 0.3, 0.3, 1);
      groundR.receiveShadow = true;
      scene.addChild(ground);

      const box = new Object3D();
      const boxR = box.addComponent(MeshRenderer);
      boxR.geometry = new BoxGeometry(1, 1, 1);
      boxR.material = new LitMaterial();
      boxR.material.baseColor = new Color(0.8, 0.2, 0.2, 1);
      boxR.castShadow = true;
      box.y = 0.5;
      scene.addChild(box);

      const sphere = new Object3D();
      const sphereR = sphere.addComponent(MeshRenderer);
      sphereR.geometry = new SphereGeometry(0.5, 32, 32);
      sphereR.material = new LitMaterial();
      sphereR.material.baseColor = new Color(0.2, 0.8, 0.2, 1);
      sphereR.castShadow = true;
      sphere.x = 2;
      sphere.y = 0.5;
      scene.addChild(sphere);

      const view = new View3D();
      view.scene = scene;
      view.camera = camera;
      Engine3D.startRenderView(view);
    }

    main();
  </script>
</body>
</html>
```

---

#### 方式二：Vite 项目 + npm（推荐实际工程）

**1）安装依赖**

```bash
npm create vite@latest my-rings-app -- --template vanilla-ts
cd my-rings-app
npm install @rings-webgpu/core
```

**2）`index.html`（根目录，注意入口脚本路径）**

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Rings — 第一个 3D 场景</title>
    <style>
      html, body { margin: 0; height: 100%; overflow: hidden; }
      #canvas { display: block; width: 100%; height: 100%; }
    </style>
  </head>
  <body>
    <canvas id="canvas"></canvas>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
```

**3）`src/main.ts`（实际模块引用：与 `exports` 一致）**

```typescript
import {
  Engine3D,
  Scene3D,
  Object3D,
  Camera3D,
  View3D,
  LitMaterial,
  BoxGeometry,
  SphereGeometry,
  PlaneGeometry,
  MeshRenderer,
  AtmosphericComponent,
  DirectLight,
  HoverCameraController,
  Color,
} from '@rings-webgpu/core';

async function main() {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  await Engine3D.init({ canvasConfig: { canvas } });

  const scene = new Scene3D();
  const sky = scene.addComponent(AtmosphericComponent);
  sky.sunY = 0.6;
  sky.sunZ = 0.8;

  const cameraObj = new Object3D();
  const camera = cameraObj.addComponent(Camera3D);
  camera.perspective(60, canvas.clientWidth / Math.max(canvas.clientHeight, 1), 0.1, 1000);

  const hoverController = cameraObj.addComponent(HoverCameraController);
  hoverController.setCamera(45, -30, 10);
  scene.addChild(cameraObj);

  const lightObj = new Object3D();
  const light = lightObj.addComponent(DirectLight);
  light.lightColor = new Color(1, 1, 1, 1);
  light.intensity = 1.2;
  light.castShadow = true;
  scene.addChild(lightObj);

  const ground = new Object3D();
  const groundR = ground.addComponent(MeshRenderer);
  groundR.geometry = new PlaneGeometry(10, 10);
  groundR.material = new LitMaterial();
  groundR.material.baseColor = new Color(0.3, 0.3, 0.3, 1);
  groundR.receiveShadow = true;
  scene.addChild(ground);

  const box = new Object3D();
  const boxR = box.addComponent(MeshRenderer);
  boxR.geometry = new BoxGeometry(1, 1, 1);
  boxR.material = new LitMaterial();
  boxR.material.baseColor = new Color(0.8, 0.2, 0.2, 1);
  boxR.castShadow = true;
  box.y = 0.5;
  scene.addChild(box);

  const sphere = new Object3D();
  const sphereR = sphere.addComponent(MeshRenderer);
  sphereR.geometry = new SphereGeometry(0.5, 32, 32);
  sphereR.material = new LitMaterial();
  sphereR.material.baseColor = new Color(0.2, 0.8, 0.2, 1);
  sphereR.castShadow = true;
  sphere.x = 2;
  sphere.y = 0.5;
  scene.addChild(sphere);

  const view = new View3D();
  view.scene = scene;
  view.camera = camera;
  Engine3D.startRenderView(view);
}

main().catch(console.error);
```


#### 方式三：克隆本仓库、跑仓库内示例时的引用

本仓库 `examples/*` 中常直接从源码入口引用（与 `tsconfig` 中导出一致），例如：

```typescript
import {
  Engine3D,
  Scene3D,
  Object3D,
  Camera3D,
  View3D,
  HoverCameraController,
  Color,
} from '../../index';  // 相对路径因示例目录深度而异，如 examples/gsplat → ../../index
```

此时由 Vite 解析 `@rings/wasm-matrix` 等路径别名；**发布到 npm 的应用**请统一使用 `@rings-webgpu/core`，勿依赖仓库内 `../../index`。

## 📁 项目结构

以下为 **Rings 引擎本仓库**（`@rings-webgpu/core` 源码）的实际布局，便于对照阅读源码与扩展。

### 引擎仓库目录（rings）

```
rings/
├── src/                          # 引擎核心源码（对外 API 由 index.ts 汇总导出）
│   ├── Engine3D.ts               # 引擎入口：初始化 WebGPU、渲染循环、全局设置
│   ├── index.ts                  # 公共导出
│   ├── core/                     # 场景图：Scene3D、Camera3D、Object3D、Entity、包围体、空间划分（八叉树/四叉树/KD）等
│   ├── components/               # 组件：渲染器、灯光、动画、相机控制器、GUI、后处理、碰撞体形状等
│   ├── gfx/                      # 图形子系统
│   │   ├── graphics/webGpu/      # WebGPU：设备上下文、Pipeline、Buffer/Texture、BindGroup、Shader（含 GLSL 转换）
│   │   ├── renderJob/            # 渲染任务：ForwardRenderJob、各 Pass（阴影/GBuffer/光照/后处理/GUI）、资源表 RTResourceMap
│   │   └── generate/             # 纹理/环境贴图等 GPU 侧生成工具
│   ├── assets/                   # 内置资源与 Shader 片段（ShaderLib、各类 .ts 着色器模块）
│   ├── materials/                # 材质定义（PBR、UnLit、天空、GSplat、点云等）
│   ├── loader/                   # 加载器：GLTF、Tileset、Prefab、PLY/LAS、3DGS、KMZ 等
│   ├── textures/                 # 纹理类型封装
│   ├── shape/                    # 基础几何体
│   ├── math/                     # 数学库（部分矩阵运算走 WASM）
│   ├── io/                       # 输入与拾取
│   ├── event/                    # 事件系统
│   ├── setting/                  # EngineSetting 及各子项（渲染、阴影、GI、后处理等）
│   └── util/                     # 工具与辅助
├── packages/                     # 独立子包（可单独构建/发布）
│   ├── wasm-matrix/              # @rings/wasm-matrix：矩阵 WASM
│   ├── wasm-splat-sort/          # @rings/wasm-splat-sort：高斯泼溅排序 WASM
│   ├── ammo/                     # @rings/ammo：Ammo.js
│   ├── physics/                  # @rings/physics：物理（依赖 ammo，peer @rings/core）
│   ├── stats/                    # @rings/stats：性能统计（peer @rings/core）
│   └── media-extention/          # @rings/media-extention：音视频等媒体扩展（peer @rings/core）
├── libs/
│   └── fflate/                   # 内联压缩库（如 KMZ 解压）
├── examples/                     # 示例工程（如 gsplat 等）
├── docs/                         # 文档与 API 说明
├── scripts/                      # 构建、类型声明、压缩等脚本
├── test/                         # 测试相关
├── package.json                  # 包名 @rings-webgpu/core
├── tsconfig.json                 # 路径别名：@rings/core → src，@rings/* → packages/*
├── tsconfig.build.json
└── vite.config.js                # 打包配置
```

**路径说明（开发本仓库时）：** `@rings/core` 指向 `src`；`@rings/wasm-matrix` 等指向 `packages/` 下对应目录。

### 基于引擎的业务项目（推荐）

若仅 **npm 安装** `@rings-webgpu/core` 做应用，目录可保持简单，例如：

```
my-app/
├── src/
│   └── main.ts
├── public/
│   └── index.html
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
    "@rings-webgpu/core": "latest"
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
// 轨道控制器（挂在相机所在 Object3D 上）
const cameraObj = new Object3D();
const camera = cameraObj.addComponent(Camera3D);
const hoverController = cameraObj.addComponent(HoverCameraController);
hoverController.setCamera(45, -30, 10);
hoverController.distance = 10;
hoverController.maxDistance = 50;
hoverController.minDistance = 2;

// 第一人称控制器（需指定 focus 目标点，通过 distance 与鼠标拖拽控制）
const fpsController = cameraObj.addComponent(FirstPersonCameraController);
fpsController.focus = someTargetObject3D;  // 围绕的目标物体
fpsController.distance = 5;
```

### 鼠标交互

拾取需在 **View3D** 上开启 `enablePick = true`（引擎默认在 `pick.mode` 为 `bound` 或 `pixel` 时会开启）。通过 **view.pickFire** 监听拾取事件，事件对象的 `target` 为命中的 Object3D，`data` 为拾取详情（世界坐标、法线等）：

```typescript
// 需先 import { PointerEvent3D } from '@rings-webgpu/core'
// 确保视图已启用拾取（Engine3D.startRenderView(view) 会根据 setting.pick.mode 自动设置）
view.enablePick = true;

// 监听点击拾取（PICK_CLICK 为引擎内部拾取事件，非 POINTER_CLICK）
view.pickFire.addEventListener(PointerEvent3D.PICK_CLICK, (event: PointerEvent3D) => {
  if (event.target) {
    console.log('点击了对象:', event.target.name);
    // event.data 含 worldPos、worldNormal、meshID 等
  }
});
```

## 🎨 材质与纹理

### 加载纹理

`Res.loadTexture(url, loaderFunctions?, flipY?)` 加载普通 2D 贴图；材质使用 **baseMap / normalMap / maskMap**（maskMap 可包含金属度/粗糙度等通道）：

```typescript
// 加载纹理
const diffuseTex = await Engine3D.res.loadTexture('diffuse.jpg');
const normalTex = await Engine3D.res.loadTexture('normal.jpg', null, true);

// 设置到 LitMaterial（baseMap 对应漫反射贴图）
const material = new LitMaterial();
material.baseMap = diffuseTex;
material.normalMap = normalTex;
// 金属度/粗糙度等可在 maskMap 中或直接用标量：material.metallic = 0.2; material.roughness = 0.5;
```

### 创建程序化材质

`LitMaterial.baseColor` 类型为 **Color**，非 Float32Array：

```typescript
const customMaterial = new LitMaterial();
customMaterial.baseColor = new Color(0.8, 0.3, 0.2, 1);
customMaterial.metallic = 0.8;
customMaterial.roughness = 0.3;
```

## 📦 资源加载

### 加载3D模型

```typescript
// 加载 GLTF/GLB 模型（返回根 Object3D）
const model = await Engine3D.res.loadGltf('model.gltf');
scene.addChild(model);

// 遍历设置阴影等
model.traverse((child) => {
  if (child.hasComponent(MeshRenderer)) {
    const renderer = child.getComponent(MeshRenderer);
    renderer.castShadow = true;
    renderer.receiveShadow = true;
  }
});
```

### 加载HDR环境贴图

HDR 环境使用 **loadHDRTextureCube**（立方体）或 **loadHDRTexture**（2D）；场景的 `envMap`、`exposure`、`roughness` 作用于天空/环境：

```typescript
// 加载 HDR 立方体环境贴图
const hdrCube = await Engine3D.res.loadHDRTextureCube('studio.hdr');
scene.envMap = hdrCube;
scene.roughness = 0.5;   // 天空粗糙度
scene.exposure = 1.2;    // 天空曝光
```

## ⚡ 性能优化

### 启用阴影

方向光设置 `castShadow = true` 即可；阴影分辨率与 bias 在 **Engine3D.setting.shadow** 中统一配置：

```typescript
// 方向光阴影
const light = lightObj.addComponent(DirectLight);
light.castShadow = true;

// 全局阴影参数（可选）
Engine3D.setting.shadow.shadowSize = 2048;   // 阴影贴图尺寸
Engine3D.setting.shadow.shadowBias = 0.05;  // 阴影偏移

// 物体阴影设置
renderer.castShadow = true;
renderer.receiveShadow = true;
```

### 实例化渲染

使用 **InstancedMesh(geometry, material, count)** 创建固定数量的实例，再用 **setMatrixAt(index, matrix)** 设置每个实例的变换：

```typescript
import { InstancedMesh, BoxGeometry, LitMaterial, Matrix4 } from '@rings-webgpu/core';

const count = 1000;
const instanced = new InstancedMesh(
  new BoxGeometry(1, 1, 1),
  new LitMaterial(),
  count
);

for (let i = 0; i < count; i++) {
  const matrix = new Matrix4();
  matrix.setTranslation(
    Math.random() * 50 - 25,
    Math.random() * 10,
    Math.random() * 50 - 25
  );
  instanced.setMatrixAt(i, matrix);
}

scene.addChild(instanced);
```

## 🐛 调试技巧

### 引擎内置调试

渲染相关调试通过 **Engine3D.setting** 控制，例如：

```typescript
// 渲染调试（如 debugQuad 等）
Engine3D.setting.render.debug = true;

// 各后处理/光照模块也有 debug 开关，例如：
// Engine3D.setting.postProcessing.gtao.debug = true;
// Engine3D.setting.gi.debug = true;
```

### 性能统计（插件 @rings/stats）

**Engine3D** 核心包不包含 FPS 面板；若需 FPS/内存等统计，请安装 **@rings/stats** 插件，将 Stats 组件挂到场景或视图上，由插件创建并更新统计面板：

```typescript
import { Stats } from '@rings/stats';

// 安装后：将 Stats 组件添加到场景或某个 Object3D，插件会创建 DOM 统计面板
const stats = scene.addComponent(Stats);
// 显示/隐藏：stats.enable = true / false
```

## 🚀 下一步

完成快速入门后，您可以：

1. **深入学习**：[核心概念 →](/core)
2. **探索组件**：[组件系统 →](/components)
3. **渲染技术**：[渲染管线 →](/rendering)
4. **着色器开发**：[Shader开发 →](/shaders)
5. **后处理效果**：[后处理 →](/post-processing)

🎉 恭喜！您已经成功创建了第一个Rings Engine 3D场景。继续探索更多高级功能吧！
