# BitmapTexture2D

## Overview
- 2D 位图纹理封装，支持从 URL、Blob、HTML 元素（Image/Canvas/ImageBitmap/OffscreenCanvas）加载，自动生成 GPU 纹理并可配置翻转与 Mipmap。

## Hierarchy
- `Texture` → `BitmapTexture2D`

## Constructor
- `new BitmapTexture2D(useMipmap: boolean = true)`

## Properties
| 名称 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| source | 源图像（设置后自动生成 GPU 纹理） | HTMLCanvasElement \| ImageBitmap \| OffscreenCanvas \| HTMLImageElement | — | — |
| premultiplyAlpha | 预乘 Alpha 模式 | 'none' | 'none' |
| useMipmap | 是否生成 Mipmap | boolean | true | true/false |
| lodMinClamp/lodMaxClamp | LOD 钳制范围 | number | 0/4 | — |

## Methods
| 名称 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| load | 从 URL 加载位图（支持 base64 与自定义 headers） | `url: string, loaderFunctions?: LoaderFunctions` | `Promise<boolean>` |
| loadFromBlob | 从 Blob 生成位图并上传到 GPU | `imgData: Blob` | `Promise<boolean>` |

## Examples
```ts
const tex = new BitmapTexture2D(true);
await tex.load('/assets/diffuse.jpg');
```


