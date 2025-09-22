# BitmapTexture2DArray

## Overview
- 2D位图纹理数组，支持存储多个2D纹理层，常用于纹理数组和实例化渲染。

## Hierarchy
- `Texture` → `BitmapTexture2DArray`

## Constructor
- `new BitmapTexture2DArray(width: number, height: number, layerCount: number, format?: GPUTextureFormat = rgba8unorm, useMipmap?: boolean = true)`

## Properties
| 名称 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| width | 纹理宽度 | number | — | — |
| height | 纹理高度 | number | — | — |
| layerCount | 纹理层数 | number | — | — |
| format | 纹理格式 | GPUTextureFormat | rgba8unorm | — |
| useMipmap | 是否使用Mipmap | boolean | true | true/false |

## Methods
| 名称 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| load | 从URL数组加载纹理层 | `urls: string[]` | `Promise<boolean>` |
| setLayer | 设置指定层的纹理数据 | `layerIndex: number, data: ImageData \| HTMLImageElement` | `void` |

## Examples
```ts
const texArray = new BitmapTexture2DArray(512, 512, 4);
await texArray.load(['/assets/tex0.png', '/assets/tex1.png', '/assets/tex2.png', '/assets/tex3.png']);
```