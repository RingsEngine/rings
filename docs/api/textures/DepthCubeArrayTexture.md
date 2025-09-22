# DepthCubeArrayTexture

## Overview
- 立方体深度纹理数组，用于点光源阴影贴图和立方体阴影渲染。

## Hierarchy
- `Texture` → `DepthCubeArrayTexture`

## Constructor
- `new DepthCubeArrayTexture(size: number, layerCount: number, format?: GPUTextureFormat = depth32float)`

## Properties
| 名称 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| size | 立方体尺寸 | number | — | — |
| layerCount | 纹理层数 | number | — | — |
| format | 深度格式 | GPUTextureFormat | depth32float | depth32float/depth24plus |

## Methods
| 名称 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| resize | 重新调整纹理尺寸 | `size: number` | `void` |

## Examples
```ts
const cubeShadowArray = new DepthCubeArrayTexture(512, 8);
// 用于8个点光源的阴影
pointLight.shadowTexture = cubeShadowArray;
```