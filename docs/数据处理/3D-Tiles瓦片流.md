# 3D Tiles 瓦片流

面向 OGC **3D Tiles** 的海量三维数据：倾斜摄影、城市白模、点云瓦片等。核心调度类为 `TilesRenderer`，单瓦片可用 `B3DMParser` / `I3DMParser` / `PNTSParser`。

## 可运行示例

需 **网络** 拉取远程 `tileset.json`（示例使用公开测试瓦片）。

<iframe src="examples/data-3d-tiles-demo.html" title="3D Tiles 示例" style="width:100%;min-height:420px;border:1px solid #e2e8f0;border-radius:8px;background:#0f172a"></iframe>

## `TilesRenderer`

### 主要属性

| 属性 | 类型 | 说明 |
|------|------|------|
| `group` | `Object3D`（只读） | 挂到场景中的根节点 |
| `rootURL` | `string \| null` | 瓦片集根路径 |
| `rootTileSet` | `TileSet \| null` | 解析后的 tileset.json |
| `errorTarget` | `number` | 目标屏幕空间误差（像素），默认 16 |
| `maxDepth` | `number` | 最大树深度，默认 30 |
| `stats` | `TilesRendererStats` | 下载/解析/可见瓦片统计 |
| `loadProgress` | `number`（getter） | 0–1 加载进度 |
| `onRootTileLoaded` | 回调 | 根瓦片就绪，含 `center`、`radius`、`rtcOffset` |
| `transCdnUrlFunc` | `(url) => string` | 可选 CDN URL 转换 |

### 主要方法

| 方法 | 说明 |
|------|------|
| `loadTileSet(rootPath, file)` | 加载瓦片集，如 `loadTileSet(baseUrl, 'tileset.json')` |
| `update()` | **每帧**在 `renderLoop` 中调用，驱动 LOD 与下载 |
| `setCamera(camera, width, height)` | 注册主相机与分辨率 |
| `setResolution` / `deleteCamera` | 多相机时更新或移除 |
| `registerPlugin` / `unregisterPlugin` | 插件扩展 |
| `addEventListener` / `dispatchEvent` | 事件：`load-tile-set`、`load-error` 等 |
| `getVisibleTiles` / `getActiveTiles` / `getLoadedTiles` | 调试与统计 |
| `dispose(force?)` | 释放资源 |

### 单瓦片解析器（`Res`）

| 方法 | Parser | 扩展名 |
|------|--------|--------|
| `loadB3DM(url, ...)` | `B3DMParser` | `.b3dm` |
| `loadI3DM(url, ...)` | `I3DMParser` | `.i3dm` |
| — | `PNTSParser` | `.pnts`（通过 `FileLoader.load`） |

## 使用示例

```typescript
import { Engine3D, TilesRenderer, webGPUContext } from "@rings-webgpu/core";

let tiles: TilesRenderer;

await Engine3D.init({
  renderLoop: () => tiles?.update(),
});

tiles = new TilesRenderer();
tiles.onRootTileLoaded = ({ center, radius, rtcOffset }) => {
  controller.setCamera(0, -30, radius * 1.5, targetWithRtc);
};
await tiles.loadTileSet("https://your-cdn/tiles/", "tileset.json");
const [w, h] = webGPUContext.presentationSize;
tiles.setCamera(camera, w, h);
scene.addChild(tiles.group);
```

## 相关

- [数据处理总览](数据处理/README)
- [三维模型与场景](数据处理/三维模型与场景)
