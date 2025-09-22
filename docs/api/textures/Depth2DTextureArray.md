# Depth2DTextureArray

## Overview
- 2D深度纹理数组，专门用于存储深度信息，常用于阴影贴图和深度预处理。

## Hierarchy
- `Texture` → `Depth2DTextureArray`

## Constructor
- `new Depth2DTextureArray(width: number, height: number, layerCount: number, format?: GPUTextureFormat = depth32float)`

## Properties
| 名称 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| width | 纹理宽度 | number | — | — |
| height | 纹理高度 | number | — | — |
| layerCount | 纹理层数 | number | — | — |
| format | 深度格式 | GPUTextureFormat | depth32float | depth32float/depth24plus |

## Methods
| 名称 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| resize | 重新调整纹理尺寸 | `width: number, height: number` | `void` |

## Examples
```ts
const depthArray = new Depth2DTextureArray(2048, 2048, 4);
// 用于阴影贴图
shadowMaterial.depthTexture = depthArray;
```