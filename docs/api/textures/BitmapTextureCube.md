# BitmapTextureCube

## Overview
- 位图立方体纹理，支持从6个URL或图像数组创建立方体贴图，自动处理Mipmap生成。

## Hierarchy
- `TextureCube` → `BitmapTextureCube`

## Constructor
- `new BitmapTextureCube()`

## Properties
| 名称 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| useMipmap | 是否使用Mipmap | boolean | true | true/false |
| images | 6个面的图像数组 | HTMLCanvasElement[] \| ImageBitmap[] \| OffscreenCanvas[] | — | — |
| _url | 图像URL或URL数组 | string \| string[] | — | — |

## Methods
| 名称 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| load | 从6个URL加载立方体贴图 | `urls: string[]` | `Promise<boolean>` |
| generateImages | 从图像数组生成GPU纹理 | `images: HTMLCanvasElement[] \| ImageBitmap[] \| OffscreenCanvas[] \| Texture[]` | `void` |

## Examples
```ts
const cubeTex = new BitmapTextureCube();
const urls = [
  '/assets/sky_px.jpg', '/assets/sky_nx.jpg',
  '/assets/sky_py.jpg', '/assets/sky_ny.jpg',
  '/assets/sky_pz.jpg', '/assets/sky_nz.jpg'
];
await cubeTex.load(urls);
```