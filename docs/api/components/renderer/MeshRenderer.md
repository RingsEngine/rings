# MeshRenderer

## Overview
- 网格渲染组件，继承 `RenderNode`。负责普通网格、带变形目标（MorphTarget）的渲染，能根据几何体自动开启/关闭变形计算。

## Hierarchy
- `ComponentBase` → `RenderNode` → `MeshRenderer`

## Constructor
- `object3D.addComponent(MeshRenderer)`

## Properties
| 名称 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| receiveShadow | 是否接收阴影 | boolean | — | true/false |
| morphData | 变形目标数据（几何含 morph 时自动初始化） | MorphTargetData | — | — |
| material | 便捷访问第 0 个材质（get/set） | Material | — | — |
| geometry | 绑定几何体（含 morph 时自动启用） | GeometryBase | — | — |
| materials | 材质数组 | Material[] | [] | — |

## Methods
| 名称 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| cloneTo | 将本组件复制到目标对象 | `obj: Object3D` | `void` |
| copyComponent | 从另一个组件复制属性（包含 receiveShadow） | `from: this` | `this` |
| setMorphInfluence | 通过名称设置变形目标权重 | `key: string, value: number` | `void` |
| setMorphInfluenceIndex | 通过索引设置变形目标权重 | `index: number, value: number` | `void` |
| onCompute | 计算阶段更新变形目标数据 | `view: View3D, command: GPUCommandEncoder` | `void` |
| nodeUpdate | 渲染前为材质 pass 注入变形数据后再走基类流程 | `view: View3D, passType: PassType, passState: RendererPassState, clusterLightingBuffer: ClusterLightingBuffer` | `void` |
| destroy | 销毁组件并清理内部引用 | `force?: boolean` | `void` |

## Behavior
- 设置 `geometry` 时：
  - 若几何包含 `morphTargetDictionary`，自动创建/启用 `morphData`，并设置 `RendererMask.MorphTarget`。
  - 同步 `object3D.bound = geometry.bounds.clone()`。
  - 首次准备时初始化管线与 computes。
  - 若移除 morph 源几何，自动关闭变形并移除掩码。

## Examples
```ts
const obj = new Object3D();
const mr = obj.addComponent(MeshRenderer);
mr.geometry = new BoxGeometry();
mr.material = new LitMaterial();
mr.castShadow = true;

// 带 morph 的几何体
// mr.setMorphInfluence('Smile', 0.8);
// mr.setMorphInfluenceIndex(0, 0.8);
```


