# IBLEnvMapCreator

## Overview
- 基于图像的光照环境贴图生成器，用于创建IBL环境光照贴图。

## Hierarchy
- `Object` → `IBLEnvMapCreator`

## Constructor
- 静态类，无需实例化

## Methods (static)
| 名称 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| importantSample | 重要采样生成IBL环境贴图 | `image: {width:number, height:number, erpTexture:Texture}, dstSize:number, roughness:number, dstView:GPUTextureView` | `void` |

## Examples
```ts
const erpImage = { width: 1024, height: 512, erpTexture: texture };
IBLEnvMapCreator.importantSample(erpImage, 256, 0.5, cubeTextureView);
```