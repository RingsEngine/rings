# RenderNode

## Overview
- 所有渲染组件的基类。管理几何体、材质、渲染层、渲染顺序、实例化数量、渲染通道准备、与场景/八叉树绑定、以及不同 Pass 的提交流程。

## Hierarchy
- `ComponentBase` → `RenderNode`

## Constructor
- 通过组件系统添加：`object3D.addComponent(RenderNode)`（通常使用其子类，如 `MeshRenderer`）。

## Properties
| 名称 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| geometry | 绑定的几何体 | GeometryBase | — | — |
| materials | 材质数组（更新时重建管线与计算） | Material[] | [] | — |
| renderLayer | 渲染层 | RenderLayer | None | RenderLayer 枚举 |
| renderOrder | 渲染顺序 | number | 0 | 任意数值 |
| rendererMask | 渲染掩码（功能位） | number | RendererMask.Default | RendererMask 枚举位 |
| castShadow | 是否投射阴影 | boolean | true | true/false |
| castReflection | 是否参与反射 | boolean | true | true/false |
| castGI | 是否参与 GI | boolean | false | true/false |
| alwaysRender | 是否总是渲染 | boolean | false | true/false |
| instanceCount | 实例化数量 | number | 0 | >= 0 |
| lodLevel | LOD 级别 | number | 0 | >= 0 |
| needSortOnCameraZ | 是否基于相机 Z 排序 | boolean | — | true/false |
| isRecievePostEffectUI | 是否接收后处理 UI | boolean | — | true/false |
| drawType | 绘制类型（0=网格，2=全屏） | number | 0 | 0/2 |

## Methods
| 名称 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| init | 组件初始化 | `param?: any` | `void` |
| onEnable | 组件启用时，准备管线并注册到收集器 | — | `void` |
| onDisable | 组件禁用时，从收集器移除 | — | `void` |
| beforeDestroy | 销毁前释放引用与资源 | `force?: boolean` | `void` |
| destroy | 销毁组件与清理内部引用 | `force?: boolean` | `void` |
| initPipeline | 基于几何与材质预编译 pass 并生成几何布局 | — | `void` |
| castNeedPass | 基于阴影/反射/GI/深度预通道设置所需 pass | — | `void` |
| nodeUpdate | 渲染前为材质 pass 注入资源与绑定（envMap/反射/光照等） | `view: View3D, passType: PassType, renderPassState: RendererPassState, clusterLightingBuffer?: ClusterLightingBuffer` | `void` |
| renderPass | 传统绘制路径：绑定几何/管线并提交 drawIndexed | `view: View3D, passType: PassType, renderContext: RenderContext` | `void` |
| renderPass2 | 新绘制路径：基于 encoder 提交 draw（支持全屏/网格） | `view: View3D, passType: PassType, rendererPassState: RendererPassState, clusterLightingBuffer: ClusterLightingBuffer, encoder: GPURenderPassEncoder, useBundle?: boolean` | `void` |
| recordRenderPass2 | 仅记录命令到 encoder | 同上 | `void` |
| addMask | 添加渲染掩码位 | `mask: RendererMask` | `void` |
| removeMask | 移除渲染掩码位 | `mask: RendererMask` | `void` |
| hasMask | 判断是否包含掩码位 | `mask: RendererMask` | `boolean` |
| addRendererMask | 便捷添加掩码位 | `tag: RendererMask` | `void` |
| removeRendererMask | 便捷移除掩码位 | `tag: RendererMask` | `void` |
| attachSceneOctree | 绑定到场景八叉树并注册变换变更监听 | `octree: Octree` | `void` |
| detachSceneOctree | 从八叉树解绑并移除监听 | — | `void` |
| selfCloneMaterials | 深拷贝材质数组并重建管线 | `key: string` | `this` |

Examples
```ts
const node = new Object3D().addComponent(MeshRenderer);
node.geometry = new BoxGeometry();
node.materials = [new LitMaterial()];
node.castShadow = true;
node.renderOrder = 3100; // 透明排序示例
```


