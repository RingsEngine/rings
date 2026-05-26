# 字体与 GUI 图集

**Bitmap Font**（`.fnt` + 页纹理）与 **GUI 精灵图集**（`.json` + `.png`）用于 UI 渲染。

可运行示例对齐 `WorldPanel` + `UITextField` / `UIImage`，通过 `Engine3D.res.loadFont` / `loadAtlas` 加载官方 CDN 资源（`0.fnt`、`Sheet_atlas.json`）。

## 可运行示例

需 **HTTP(S)** 打开文档站。

<iframe src="examples/data-font-atlas-demo.html" title="字体与 GUI 图集" style="width:100%;min-height:520px;border:1px solid #334155;border-radius:8px;background:#0f172a"></iframe>

与其它数据处理示例相同：**全屏 WebGPU `#canvas` + 左上 HUD + 右侧控件**。场景逻辑参考 Orillusion `Sample_POI`：

| 面板 | 行为 |
|------|------|
| **固定场景面板** | `WorldPanel` 固定在场景中，`UITextField` 文本可由右侧输入实时更新 |
| **绑定 POI 面板** | 挂在 `skeleton_warrior.glb` 上，`billboard` 朝向相机；`UIImage` 显示 `Sheet_atlas` 精灵帧 |

| 资源 | CDN |
|------|-----|
| 位图字体 | `https://cdn.jsdelivr.net/gh/RingsEngine/rings-resource@resources-0.0.6/font/0.fnt` |
| GUI 图集 | `https://cdn.jsdelivr.net/gh/RingsEngine/rings-resource@resources-0.0.6/atlas/Sheet_atlas.json` |
| 示例模型 | `https://cdn.jsdelivr.net/gh/RingsEngine/rings-resource@resource-0.0.5/glb/skeleton_warrior.glb` |

## `FontParser`

| 成员 | 说明 |
|------|------|
| `static format` | `ParserFormat.TEXT` |
| `data` | `FontInfo` |
| `parseString(data)` | 解析 AngelCode `.fnt`，并加载 `page` 行引用的 PNG |
| `static parseSprite(guiTextures, fontData)` | 生成 `GUISprite` 并注册到 `fonts` |

### `FontInfo` 主要字段

| 字段 | 说明 |
|------|------|
| `face` / `size` | 字体名与字号 |
| `lineHeight` / `base` | 行高与基线 |
| `scaleW` / `scaleH` | 纹理页尺寸（与精灵表宽高一致） |
| `fontPage` | `FontPage[]`，`file` 为页 PNG 路径或完整 URL |
| `fontChar` | 字符 id → `FontChar`（`x/y/width/height/xadvance` 等） |

## `AtlasParser`

| 成员 | 说明 |
|------|------|
| `static format` | `ParserFormat.TEXT` |
| `parseString` | 解析图集 JSON（`size` + `atlas` 各精灵的 `textureRect` 等） |
| `userData` | JSON 的 URL；内部将 `.json` 替换为 `.png` 加载纹理 |

`Res.loadAtlas` 注册 `GUIAtlasTexture`，`Res.getGUISprite(id)` 取精灵。

## `Res` API

| 方法 | 返回 | 说明 |
|------|------|------|
| `loadFont(url, ...)` | `FontInfo` | 加载 `.fnt` + 页图 |
| `loadAtlas(url, ...)` | 图集数据 | 加载 `.json` + 同名 `.png` |
| `getAtlas(name)` | `GUIAtlasTexture` | 按名取图集 |
| `getGUISprite(id)` | `GUISprite` | 全局查找精灵 |

## 使用示例（与 Orillusion 多面板一致）

```typescript
import {
  Engine3D, Scene3D, View3D, Object3D, WorldPanel, UITextField,
  UIImage, BillboardType, TextAnchor,
} from "@rings-webgpu/core";

await Engine3D.init({ canvasConfig: { canvas } });
const view = new View3D();
// … scene / camera / startRenderView …

await Engine3D.res.loadFont(
  "https://cdn.jsdelivr.net/gh/RingsEngine/rings-resource@resources-0.0.6/font/0.fnt"
);
await Engine3D.res.loadAtlas(
  "https://cdn.jsdelivr.net/gh/RingsEngine/rings-resource@resources-0.0.6/atlas/Sheet_atlas.json"
);

const canvas = view.enableUICanvas();
const panel = new Object3D().addComponent(WorldPanel);
panel.billboard = BillboardType.BillboardXYZ;
canvas.addChild(panel.object3D);

const text = panel.object3D.addChild(new Object3D()).addComponent(UITextField);
text.text = "Hello, Rings";
text.fontSize = 10;

const icon = panel.object3D.addChild(new Object3D()).addComponent(UIImage);
icon.sprite = Engine3D.res.getGUISprite("00065");
```

## 相关

- [纹理](/组件系统/纹理)
- [数据处理总览](数据处理/README)
