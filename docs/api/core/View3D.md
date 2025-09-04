# View3D

## Overview
- 独立渲染视图。负责管理场景、相机、视口区域以及 UI 画布，并可启用 3D/GUI 拾取。

## Hierarchy
- `CEventListener` → `View3D`

## Constructor
- `new View3D(x?: number, y?: number, width?: number, height?: number)`

## Properties
| 名称 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| scene | 视图绑定的场景（设置时：`value.view = this`，创建光源缓冲并挂载已有 UI 画布） | Scene3D | — | — |
| camera | 渲染相机 | Camera3D | — | — |
| viewPort | 视口矩形 `(x, y, w, h)` | Vector4 | (0,0,0,0) | — |
| enablePick | 是否启用拾取（启用时自动创建并启动 PickFire） | boolean | false | true/false |
| enable | 视图是否启用 | boolean | true | true/false |
| pickFire | 拾取事件派发器（只读） | PickFire | — | — |
| guiPick | GUI 拾取帮助器（首次启用 UI 画布时初始化） | GUIPick | — | — |
| canvasList | UI 画布列表（只读） | GUICanvas[] | [] | — |

## Methods
| 名称 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| enableUICanvas | 启用/创建指定索引的 UI 画布并挂到场景；首次启用会初始化 GUI 拾取 | `index?: number` | `GUICanvas` |
| disableUICanvas | 从场景移除指定索引的 UI 画布（不销毁实体） | `index?: number` | `void` |

## Examples
```ts
const view = new View3D(0, 0, Engine3D.width, Engine3D.height);
view.scene = new Scene3D();

const cameraNode = new Object3D();
view.camera = cameraNode.addComponent(Camera3D);

// 拾取与 UI 画布
view.enablePick = true;
const canvas = view.enableUICanvas(0);
```


