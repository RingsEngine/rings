# Scene3D

## Overview
- 3D 场景容器，继承 `Object3D`。负责天空与环境贴图，且与 `View3D` 绑定。

## Hierarchy
- `Entity` → `Object3D` → `Scene3D`

## Constructor
- `new Scene3D()`：创建内部 `skyObject`，标记为场景节点，默认 `envMap = Engine3D.res.defaultSky`。

## Properties
| 名称 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| view | 绑定视图实例 | View3D | — | — |
| envMap | 环境贴图；设置后标记 `envMapChange=true` 并同步天空材质 | Texture | `Engine3D.res.defaultSky` | — |
| envMapChange | 环境贴图是否变更 | boolean | true | true/false |
| exposure | 天空曝光（代理到天空与 `Engine3D.setting.sky.skyExposure`） | number | 见引擎设置 | — |
| roughness | 天空粗糙度（代理到天空） | number | — | — |

## Methods
| 名称 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| （继承） | 继承自 `Object3D` 的层级/组件管理与变换接口 | — | — |

## Examples
```ts
const scene = new Scene3D();
scene.envMap = Engine3D.res.defaultSky;
scene.exposure = 1.1;
scene.roughness = 0.4;
```


