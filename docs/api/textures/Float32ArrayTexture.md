# Float32ArrayTexture

## Overview
- 32位浮点数组纹理，用于最高精度的数据存储和科学计算。

## Hierarchy
- `Texture` → `Float32ArrayTexture`

## Constructor
- `new Float32ArrayTexture(width: number, height: number, layerCount: number, format?: GPUTextureFormat = rgba32float)`

## Properties
| 名称 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| width | 纹理宽度 | number | — | — |
| height | 纹理高度 | number | — | — |
| layerCount | 纹理层数 | number | — | — |
| format | 纹理格式 | GPUTextureFormat | rgba32float | — |

## Methods
| 名称 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| resize | 重新调整纹理尺寸 | `width: number, height: number` | `void` |

## Examples
```ts
const float32Tex = new Float32ArrayTexture(512, 512, 1);
// 用于高精度计算
computeTexture = float32Tex;
```