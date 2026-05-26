# 网格 PLY 与高斯溅射

`PlyParser` 按文件头自动区分 **3D Gaussian Splatting**、**点云**、**三角网格**；也可使用 `GaussianSplatParser` 直接得到 `GaussianSplatAsset`。

## 可运行示例

示例从 CDN 加载 `massa.ply`，经 `PlyParser`（Splat 模式）→ `GSplatRenderer` 渲染。

<iframe src="examples/data-gaussian-splat-demo.html" title="3DGS PLY 示例" style="width:100%;min-height:420px;border:1px solid #e2e8f0;border-radius:8px;background:#0f172a"></iframe>

## `PlyMode` 识别

| 模式 | 条件 | 输出 |
|------|------|------|
| `Splat` | 含完整 `scale_*` / `rot_*` 等 11 项 + 3 项颜色 | `GSplatRenderer` |
| `PointCloud` | 顶点 + 颜色，无 face | `PointCloudRenderer` |
| `Mesh` | 含 `face` 元素 | 一个或多个 `MeshRenderer` |

大文件可使用 `PlyStreamParser` 流式读取。

## `GaussianSplatParser`

| 成员 | 说明 |
|------|------|
| `static format` | `ParserFormat.BIN` |
| `data` | `GaussianSplatAsset` |

支持格式检测（`GSplatFormat`）：`PLY`、`SPLAT`、`KSPLAT`（后两者检测逻辑可扩展）。

## `GaussianSplatAsset`

| 字段 | 类型 | 说明 |
|------|------|------|
| `count` | `number` | 高斯数量 |
| `position` | `Float32Array` | `count * 3` |
| `rotation` | `Float32Array?` | 四元数 `count * 4` |
| `scale` | `Float32Array?` | 各向异性 `count * 3` |
| `opacity` | `Float32Array?` | `count` |
| `sh` | `SHEncoding?` | 球谐颜色 |
| `bbox` | `{ min, max }` | 包围盒 |

## `GSplatRenderer`

| 方法 | 说明 |
|------|------|
| `initAsset(asset: GaussianSplatAsset)` | 上传 GPU 缓冲并准备绘制 |

## `StreamingGaussianSplatParser`

用于大规模 3DGS 分块流式加载（见源码 `StreamingGaussianSplatParser.ts`）。

## 使用示例

```typescript
import { FileLoader, PlyParser, GaussianSplatParser, GSplatRenderer } from "@rings-webgpu/core";

const root = await Engine3D.res.load("scene.ply", PlyParser);
scene.addChild(root); // 已挂 GSplatRenderer

// 仅要资产数据
const loader = new FileLoader();
const p = await loader.load("blob.ply", GaussianSplatParser);
const asset = p.data;
const obj = new Object3D();
obj.addComponent(GSplatRenderer).initAsset(asset);
```

## 相关

- [点云与激光雷达](数据处理/点云与激光雷达)
- [数据处理总览](数据处理/README)
