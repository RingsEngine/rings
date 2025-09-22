# Float16ArrayTexture

## Overview
- 16位浮点数组纹理，用于高精度数据存储，如HDR光照信息和计算结果。

## Hierarchy
- `Texture` → `Float16ArrayTexture`

## Constructor
- `new Float16ArrayTexture(width: number, height: number, layerCount: number, format?: GPUTextureFormat = rgba16float)`

## Properties
| 名称 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| width | 纹理宽度 | number | — | — |
| height | 纹理高度 | number | — | — |
| layerCount | 纹理层数 | number | — | — |
| format | 纹理格式 | GPUTextureFormat | rgba16float | — |

## Methods
| 名称 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| resize | 重新调整纹理尺寸 | `width: number, height: number` | `void` |

## Examples
```ts
const float16Tex = new Float16ArrayTexture(1024, 1024, 1);
// 用于光照计算
lightingBuffer.texture = float16Tex;
```