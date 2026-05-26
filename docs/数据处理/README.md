# 数据处理

Rings 通过 **`FileLoader`**、**`Engine3D.res`** 与各类 **Parser** 将外部文件转为场景资源（`Object3D`、纹理、点云、瓦片流等）。

**导入**：`import { ... } from "@rings-webgpu/core"`

## 分类导航

| 专题 | 说明 |
|------|------|
| [三维模型与场景](数据处理/三维模型与场景) | glTF / GLB / OBJ / Prefab |
| [3D Tiles 瓦片流](数据处理/3D-Tiles瓦片流) | tileset / B3DM / I3DM / PNTS |
| [点云与激光雷达](数据处理/点云与激光雷达) | PLY 点云、LAS / LAZ |
| [网格 PLY 与高斯溅射](数据处理/网格PLY与高斯溅射) | PLY 网格、3DGS、流式 3DGS |
| [GIS 与矢量数据](数据处理/GIS与矢量数据) | GeoJSON |
| [航线与 KMZ](数据处理/航线与KMZ) | 无人机航线 KMZ |
| [字体与 GUI 图集](数据处理/字体与GUI图集) | `.fnt`、图集 JSON |
| [通用数据接口](数据处理/通用数据接口) | ParserBase、FileLoader |

## 总览表 {#overview}

| 类别 | 扩展名 | 解析器 / 入口 |
|------|--------|---------------|
| 三维模型 | `.gltf` `.glb` `.obj` | `GLTFParser` `GLBParser` `OBJParser` |
| 预制 | 二进制 | `PrefabParser` |
| 3D Tiles | `tileset.json` `.b3dm` … | `TilesRenderer` 等 |
| 点云 | `.las` `.ply` | `LASParser` `PlyParser` |
| 3DGS | `.ply` `.splat` | `GaussianSplatParser` |
| GIS | `.geojson` | `GeoJsonParser` |
| 航线 | `.kmz` | `KMZParser` |
| 字体 / 图集 | `.fnt` `.json` | `FontParser` `AtlasParser` |

## 快速上手 {#quick}

```typescript
import { Engine3D, FileLoader, GeoJsonParser } from "@rings-webgpu/core";

const model = await Engine3D.res.loadGltf("model.glb");
scene.addChild(model);

const parser = await new FileLoader().load("data.geojson", GeoJsonParser);
console.log(parser.data.features.length);
```

各专题页含 **API 表**、**代码示例** 与 **可运行 iframe 演示**（需 HTTP(S) + WebGPU，部分示例需网络）。
