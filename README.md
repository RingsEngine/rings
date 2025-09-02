# Rings Engine - 基于WebGPU的现代3D渲染引擎

## 🚀 项目简介

Rings Engine 是一个基于WebGPU的高性能3D渲染引擎，专为现代Web应用设计。采用组件-实体系统(ECS)架构，提供完整的3D渲染解决方案，支持PBR材质、动态光照、阴影、后处理等高级渲染特性。

## 🏗️ 核心架构

### 系统架构图
```
┌─────────────────────────────────────────────────────────────┐
│                        Engine3D (引擎核心)                   │
├─────────────────┬─────────────────┬─────────────────────────┤
│   场景管理       │   渲染系统       │      资源管理            │
│  Scene3D        │  ForwardRender  │  Res (纹理/材质/模型)    │
│  Object3D       │  ColorPass      │  TexturePool            │
│  Transform      │  ShadowPass     │  MaterialPool           │
│  Camera3D       │  PostProcess    │  PrefabPool             │
├─────────────────┼─────────────────┼─────────────────────────┤
│   组件系统       │   GPU上下文      │      工具系统            │
│  ComponentBase  │  Context3D      │  Math (矩阵/向量)        │
│  Light          │  GlobalBindGroup │  InputSystem            │
│  Material       │  WebGPUDevice   │  Time/Utils             │
└─────────────────┴─────────────────┴─────────────────────────┘
```

## 📁 文件结构分析

### 1. 引擎核心 (`src/`)
```
src/
├── Engine3D.ts                 # 引擎入口，生命周期管理
├── index.ts                   # 统一导出接口
├── core/                      # 核心系统
│   ├── Scene3D.ts           # 场景管理，环境配置
│   ├── Camera3D.ts           # 相机系统，投影矩阵
│   ├── View3D.ts           # 视图管理
│   └── entities/            # 实体系统
│       └── Object3D.ts      # 3D对象，组件容器
├── components/               # 组件系统
│   ├── ComponentBase.ts    # 组件基类
│   ├── Transform.ts        # 变换组件
│   ├── lights/             # 光照组件
│   │   └── Light.ts        # 点光源
│   ├── renderer/           # 渲染组件
│   └── shape/              # 形状组件
├── gfx/                     # 图形渲染
│   ├── graphics/           # GPU上下文
│   │   └── webGpu/
│   │       └── Context3D.ts # WebGPU设备管理
│   └── renderJob/          # 渲染管线
│       ├── jobs/
│       │   └── ForwardRenderJob.ts  # 前向渲染任务
│       └── passRenderer/
│           └── color/
│               └── ColorPassRenderer.ts # 颜色通道渲染
├── materials/               # 材质系统
│   └── Material.ts         # 材质基类，PBR支持
├── assets/                  # 资源管理
│   └── Res.ts             # 资源加载器，多格式支持
├── math/                   # 数学库
│   ├── Vector3.ts         # 3D向量
│   ├── Matrix4.ts         # 4x4矩阵
│   └── Quaternion.ts      # 四元数
├── io/                     # 输入系统
│   └── InputSystem.ts     # 键盘鼠标输入
└── util/                   # 工具类
    ├── Time.ts            # 时间管理
    └── Global.ts          # 全局配置
```

### 2. 资源与配置
```
├── package.json             # 项目依赖
├── tsconfig.json           # TypeScript配置
├── vite.config.js          # 构建配置
├── docs/                   # 文档系统
│   ├── classes/            # API文档
│   ├── quick-start.md      # 快速开始
│   └── shaders.md          # 着色器系统
└── packages/               # 外部依赖包
    ├── wasm-matrix/        # WebAssembly矩阵运算
    └── ammo/              # 物理引擎
```

## ⚡ 技术特色

### 1. 现代WebGPU渲染
- **原生WebGPU支持**：基于最新WebGPU标准，充分利用GPU计算能力
- **多平台兼容**：支持Windows、macOS、Linux等主流平台
- **高性能渲染**：优化的渲染管线，支持实例化渲染和GPU剔除

### 2. 组件-实体系统(ECS)
- **模块化架构**：所有功能通过组件实现，易于扩展和维护
- **数据驱动**：实体-组件-系统分离，提高代码复用性
- **生命周期管理**：完整的组件生命周期（init/start/update/destroy）

### 3. 高级渲染特性
- **PBR材质系统**：基于物理的渲染，支持金属度/粗糙度工作流
- **动态光照**：支持方向光、点光源、聚光灯等多种光源
- **实时阴影**：级联阴影映射(CSM)，支持软阴影和接触阴影
- **后处理效果**：FXAA抗锯齿、色调映射、Bloom等
- **全局光照**：DDGI探针系统，实现间接光照

### 4. 资源管理优化
- **多格式支持**：GLTF/GLB、OBJ、B3DM、I3DM等主流3D格式
- **资源池化**：纹理、材质、几何体等资源池管理
- **异步加载**：支持并发加载，减少等待时间
- **智能缓存**：基于LRU的资源缓存策略

### 5. WebAssembly加速
- **矩阵运算优化**：关键数学运算使用WebAssembly加速
- **内存管理**：高效的内存分配和垃圾回收
- **SIMD支持**：利用现代CPU的向量指令集

### 6. 开发者友好
- **TypeScript支持**：完整的类型定义和IDE智能提示
- **调试工具**：内置调试面板和性能分析器
- **文档完善**：详细的API文档和示例代码
- **热重载**：开发模式下支持代码热更新

## 🎯 性能特性

| 特性 | 实现方式 | 性能提升 |
|------|----------|----------|
| 实例化渲染 | GPU Instancing | 10x+ 渲染对象数量 |
| 遮挡剔除 | 层级Z-Buffer | 减少50%+绘制调用 |
| 纹理压缩 | BCn格式支持 | 减少75%内存占用 |
| 着色器缓存 | 预编译管线 | 减少90%编译时间 |
| 内存池化 | 对象复用 | 减少80%GC压力 |

## 🔧 核心技术实现

### 引擎初始化与主循环

**Engine3D.ts** 是引擎的核心入口，负责：
- 初始化WebGPU上下文、渲染管线、时间管理（Time）、输入系统（InputSystem）
- 通过`webGPUContext`管理GPU设备、画布和渲染上下文
- 统一生命周期管理和渲染调度

### 渲染管线架构

#### 前向渲染系统
- **ForwardRenderJob.ts**：实现前向渲染逻辑
  - 颜色通道：ColorPassRenderer处理主渲染
  - GUI渲染：GUIPassRenderer处理界面元素
  - 支持深度预渲染：PreDepthPassRenderer优化性能

#### 阴影渲染系统
- **ShadowMapPassRenderer.ts**：处理方向光和点光源的阴影贴图生成
- **CSM（级联阴影映射）**：支持大场景的高质量阴影
- **软阴影算法**：PCF和VSM阴影过滤

#### 后处理管线
- **FXAAPost.ts**：快速近似抗锯齿
- **PostRenderer.ts**：统一后处理框架
- **多渲染目标(MRT)**：支持复杂后处理效果

### 资源管理系统

#### 动态渲染目标管理
- **RTResourceMap.ts**：管理RenderTexture等动态资源
- **资源复用机制**：避免重复创建GPU资源
- **多渲染目标支持**：同时输出到多个渲染纹理

#### 全局绑定组管理
- **GlobalBindGroup.ts**：统一管理全局Uniform和绑定组
- **光照数据传递**：高效的光源数据管理
- **相机参数共享**：避免重复设置视图投影矩阵

### 光照系统

#### 动态光源收集
- **ShadowLightsCollect.ts**：收集场景中的光源数据
- **阴影剔除算法**：视锥体裁剪和距离剔除
- **光源LOD系统**：根据距离动态调整光源质量

#### 全局光照技术
- **DDGIProbeRenderer.ts**：动态全局光照（DDGI）
  - 实时探针更新
  - 间接光照计算
  - 环境光遮蔽

#### 反射系统
- **ReflectionRenderer.ts**：环境反射处理
- **立方体贴图支持**：预过滤环境映射
- **实时反射探针**：动态场景反射

### 组件与实体系统

#### 组件生命周期管理
- **ComponentCollect.ts**：管理组件的生命周期和更新逻辑
- **统一更新调度**：按优先级和依赖关系排序
- **自定义组件扩展**：支持第三方组件集成

#### 场景图管理
- **View3D.ts**：视图管理，处理相机和视口
- **Scene3D.ts**：场景根节点，管理环境设置
- **Object3D.ts**：场景图节点，支持层级变换

### 着色器资源绑定策略

采用**"按更新频率 + 功能模块"**的分层策略：

| 分组 | 绑定内容 | 更新频率 | 示例资源 |
|------|----------|----------|----------|
| Group 0 | 全局帧数据 | 每帧更新 | 摄像机矩阵、时间、全局光照 |
| Group 1 | 渲染Pass配置 | Pass级别 | 阴影参数、后处理设置 |
| Group 2 | 材质共享数据 | 材质变更时 | 纹理采样器、PBR参数 |
| Group 3 | 实例数据 | 每物体更新 | 模型矩阵、变形目标参数 |

#### 固定槽位预留
| Binding | 资源类型 | 说明 |
|---------|----------|------|
| 0 | uniform camera | 摄像机矩阵 |
| 1 | storage lights | 光源数据 |
| 2-5 | 材质纹理 | diffuse/normal等 |
| 6-7 | 计算着色器输入 | 粒子/变形目标数据 |

## 🚀 快速开始

### 安装
```bash
npm install rings-engine
# 或使用pnpm
pnpm add rings-engine
```

### 基础使用
```typescript
import { Engine3D, Scene3D, Object3D, Camera3D, LitMaterial } from 'rings-engine';

// 初始化引擎
await Engine3D.init();

// 创建场景
const scene = new Scene3D();
const camera = new Object3D();
camera.addComponent(Camera3D);

// 添加物体
const cube = new Object3D();
cube.addComponent(MeshRenderer).geometry = new BoxGeometry();
cube.addComponent(LitMaterial);
scene.addChild(cube);

// 开始渲染
Engine3D.startRenderView(view);
```

## 📊 浏览器支持

| 浏览器 | WebGPU | 状态 |
|--------|--------|------|
| Chrome 113+ | ✅ | 完全支持 |
| Firefox Nightly | ✅ | 实验支持 |
| Safari TP | ✅ | 技术预览 |
| Edge 113+ | ✅ | 完全支持 |

## 🤝 贡献指南

欢迎提交Issue和Pull Request！请遵循以下规范：
- 使用TypeScript编写，遵循ESLint规则
- 添加适当的单元测试
- 更新相关文档
- 遵循Conventional Commits规范

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 🔗 相关链接

- [官方文档](https://rings-engine.github.io/docs)
- [示例项目](https://github.com/rings-engine/examples)
- [API参考](https://rings-engine.github.io/api)
- [讨论社区](https://github.com/rings-engine/rings/discussions)
