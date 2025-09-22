# Uint8ArrayTexture

## Overview
- 8位无符号整数数组纹理，用于标准颜色和遮罩数据存储。

## Hierarchy
- `Texture` → `Uint8ArrayTexture`

## Constructor
- `new Uint8ArrayTexture(width: number, height: number, layerCount: number, format?: GPUTextureFormat = rgba8unorm)`

## Properties
| 名称 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| width | 纹理宽度 | number | — | — |
| height | 纹理高度 | number | — | — |
| layerCount | 纹理层数 | number | — | — |
| format | 纹理格式 | GPUTextureFormat | rgba8unorm | — |

## Methods
| 名称 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| resize | 重新调整纹理尺寸 | `width: number, height: number` | `void` |

## Examples
```ts
const uint8Tex = new Uint8ArrayTexture(1024, 1024, 1);
// 用于颜色贴图
colorTexture = uint8Tex;
```