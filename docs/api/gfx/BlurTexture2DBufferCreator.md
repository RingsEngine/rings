# BlurTexture2DBufferCreator

## Overview
- 2D纹理模糊处理工具，支持从源纹理创建模糊或采样后的目标纹理。

## Hierarchy
- `Object` → `BlurTexture2DBufferCreator`

## Constructor
- 静态类，无需实例化

## Methods (static)
| 名称 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| blurImageFromTexture | 从源纹理创建模糊或采样后的纹理 | `image: {width:number, height:number, gpuTexture:GPUTexture}, dstWidth:number, dstHeight:number, blur:boolean` | `GPUTexture` |

## Examples
```ts
const sourceTexture = { width: 512, height: 512, gpuTexture: gpuTexture };
const blurredTexture = BlurTexture2DBufferCreator.blurImageFromTexture(sourceTexture, 256, 256, true);
const sampledTexture = BlurTexture2DBufferCreator.blurImageFromTexture(sourceTexture, 128, 128, false);
```