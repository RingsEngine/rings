# 性能与调优

本文档承接 [核心概念](./core) 中的引擎分工说明，集中整理 **性能相关能力、资源缓存细节与可选监控**，避免在「核心概念」中混入实现细节。

## GPU 与渲染相关能力

| 方向 | 引擎中的体现（以源码为准） |
|------|------------------------------|
| **实例化** | `InstancedMesh`、`InstanceDrawComponent` 等 |
| **遮挡** | `Engine3D.setting.occlusionQuery`、`OcclusionSystem` |
| **合批 / 实例 Draw** | 渲染收集与各 Pass 中的实例绘制路径 |
| **纹理** | 压缩格式为可选 GPU 特性（BC / ETC2 / ASTC 等，见 `Context3D`）；`VirtualTexture` 等 |
| **管线** | `PipelinePool`、Shader 编译与缓存 |

具体帧率、Draw Call 收益与 **场景规模、材质复杂度、目标平台** 强相关，需以实测为准。

## 资源缓存与加载

- **URL 级缓存**：`Res` 对纹理、GLTF 等按 URL 使用 `Map` 缓存，同一 URL 重复加载可命中缓存。
- **GPU 可选特性**：`requestDevice` 时按适配器能力申请纹理压缩等特性，失败则自动跳过该项。
- **并发加载**：`FileLoader` / `LoaderManager` 与 **`Engine3D.setting.loader.numConcurrent`** 控制并发数量。

## 内存与大规模场景

- **对象池**：`core/pool` 等工具，用于减少频繁创建带来的 GC 压力。
- **虚拟纹理**：`VirtualTexture` 等类型，适合大图集或流式贴图场景。
- **流式 / 海量数据**：3D Tiles（`TilesRenderer`）、高斯泼溅流式（`StreamingGaussianSplatParser` 等）——参见 `examples` 与对应 Loader。

## 调试与监控

- **渲染调试**：`Engine3D.setting.render.debug = true`，以及各后处理、GI 子配置中的 `debug` 开关。
- **FPS / 内存面板**：核心包不含 `Engine3D.stats`；安装 **`@rings/stats`**，将 `Stats` 组件挂到场景或物体上（见 [快速入门 - 调试技巧](./quick-start.md)）。

## 实践建议（简要）

1. 优先保证 **Draw Call 与光源数量** 在目标设备可接受范围内。
2. 纹理尽量使用 **压缩格式**（在目标 GPU 支持的前提下）。
3. 大量相同网格优先 **`InstancedMesh` 或实例化路径**，而非独立 `MeshRenderer` 堆砌。
4. 需要分屏、画中画时使用 **`Engine3D.startRenderViews`**，并注意每视图独立 `ForwardRenderJob` 的开销。

## 相关文档

- [核心概念](./core) — 架构与主循环
- [渲染管线](./rendering) — Pass 与光照扩展（含 DDGI、Cluster 等）
- [后处理效果](./post-processing)
