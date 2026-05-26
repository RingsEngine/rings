# 航线与 KMZ

解析 **KMZ**（ZIP 内 KML，常见于无人机航线 `wpmz` 目录）为 `WayLines3D` 场景对象。

## 可运行示例

示例加载 NOAA `ghcnd.kmz`。`Res.loadKMZ` / `KMZParser` 面向大疆 `wpmz` 航线；该文件为标准 KML，示例会自动解压 KMZ 并解析 `coordinates`，以 `PointCloudRenderer` 绘制气象站点。

<iframe src="examples/data-kmz-demo.html" title="航线示例" style="width:100%;min-height:420px;border:1px solid #e2e8f0;border-radius:8px;background:#0f172a"></iframe>

## `KMZParser`

| 成员 | 说明 |
|------|------|
| `static format` | `ParserFormat.BIN` |
| `data` | `WayLines3D` |
| `parseBuffer(buffer)` | 解压 ZIP，解析 KML 为 `KmzFile` |

## `WayLines3D`（extends `Object3D`）

| 成员 | 说明 |
|------|------|
| `line` | `Object3D` | 航线折线对象 |
| `static register3DRepresentation` | 自定义折线生成函数 |
| `setup3DRepresentation()` | 根据航点重建 `line` |

子节点为 `WayPoint3D`（按 `positionIndex` 排序）。

## `Res.loadKMZ`

```typescript
loadKMZ(url: string, loaderFunctions?: LoaderFunctions): Promise<WayLines3D>
```

## 使用示例

```typescript
import { Engine3D } from "@rings-webgpu/core";

const waylines = await Engine3D.res.loadKMZ("mission.kmz");
scene.addChild(waylines);

// 自定义航线几何
import { WayLines3D } from "@rings-webgpu/core";
WayLines3D.register3DRepresentation = (w) => { /* return custom Object3D */ };
waylines.setup3DRepresentation();
```

## 相关

- [GIS 与矢量数据](数据处理/GIS与矢量数据)
- [数据处理总览](数据处理/README)
