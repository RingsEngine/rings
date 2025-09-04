# Engine3D

## Overview
- 引擎核心入口。初始化 WebGPU、资源与绑定组、建立渲染循环、管理视图与渲染任务。

## Hierarchy
- `Object` → `Engine3D` (static-only pattern)

## Constructor
- 无实例化。通过静态方法使用。

## Methods (static)
| 名称 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| init | 初始化引擎（WASM 矩阵库、WebGPU、GBuffer、ShaderLib、GlobalBindGroup、RTResourceMap、ShadowLightsCollect、默认资源、输入系统） | `descriptor?: { canvasConfig?, beforeRender?, renderLoop?, lateRender?, engineSetting? }` | `Promise<void>` |
| startRenderView | 启动单视图渲染，按拾取模式自动处理 FXAA 与拾取 | `view: View3D` | `RendererJob` |
| startRenderViews | 启动多视图渲染 | `views: View3D[]` | `void` |
| getRenderJob | 获取指定视图的渲染任务 | `view: View3D` | `RendererJob` |
| pause | 暂停渲染循环 | — | `void` |
| resume | 恢复渲染循环 | — | `void` |

## Properties
| 名称 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| res | 全局资源管理器 | Res | — | — |
| inputSystem | 输入系统 | InputSystem | — | — |
| views | 当前激活视图 | View3D[] | [] | — |
| renderJobs | 视图与渲染任务映射 | Map<View3D, RendererJob> | — | — |
| setting | 引擎设置（渲染/阴影/GI/天空/材质/加载/反射/后处理） | EngineSetting | 见源码默认 | — |
| frameRate | 目标帧率（>=360 为不限） | number | 360 | 任意正数 |
| size | 交换链尺寸 [w, h] | number[] | — | — |
| aspect | 宽高比 | number | — | — |
| width/height | 画布宽高 | number | — | — |

## Examples
```ts
await Engine3D.init();

const scene = new Scene3D();
const view = new View3D();
const node = new Object3D();
const cam = node.addComponent(Camera3D);

view.scene = scene;
view.camera = cam;

Engine3D.startRenderView(view);
```


