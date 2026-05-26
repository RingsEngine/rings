# GIS 与矢量数据

解析 **GeoJSON** 为结构化对象，并可用 `GeoJsonUtil` 提取折线用于可视化。

## 可运行示例

从 Natural Earth CDN 加载 `ne_50m_populated_places_simple.geojson`（全球主要居民点 `Point`），解析后经 `PointCloudRenderer` 绘制。

<iframe src="examples/data-geojson-demo.html" title="GeoJSON 示例" style="width:100%;min-height:420px;border:1px solid #e2e8f0;border-radius:8px;background:#0f172a"></iframe>

## `GeoJsonParser`

| 成员 | 类型 | 说明 |
|------|------|------|
| `static format` | `ParserFormat.JSON` | 走 `FileLoader` JSON 分支或 `parseString` |
| `data` | `GeoJsonStruct` | 解析结果 |
| `json` | `string` | 原始字符串 |
| `parseString(data)` | — | 解析文本 |

### `GeoJsonStruct`

```typescript
interface GeoJsonStruct {
  type: string;
  features: GeoJsonNodeStruct[];
}
```

### `GeoType`

| 枚举 | 几何 |
|------|------|
| `Point` | 点 |
| `LineString` | 线 |
| `MultiPolygon` | 多多边形 |

## `GeoJsonUtil`

| 方法 | 返回值 | 说明 |
|------|--------|------|
| `getPath(data)` | `Vector3[][]` | 当前实现主要展开 `MultiPolygon` 为折线点列（Y 置 0，XZ 来自坐标） |

## 使用示例

```typescript
import { FileLoader, GeoJsonParser, GeoJsonUtil, FatLineGeometry, FatLineRenderer } from "@rings-webgpu/core";

const parser = await new FileLoader().load("region.geojson", GeoJsonParser);
const paths = GeoJsonUtil.getPath(parser.data);

for (const pts of paths) {
  const flat = new Float32Array(pts.length * 3);
  for (let i = 0; i < pts.length; i++) {
    flat[i * 3] = pts[i].x;
    flat[i * 3 + 1] = 0.05;
    flat[i * 3 + 2] = pts[i].z;
  }
  // FatLineRenderer 绘制 ...
}
```

## 相关

- [通用数据接口](数据处理/通用数据接口)
- [数据处理总览](数据处理/README)
