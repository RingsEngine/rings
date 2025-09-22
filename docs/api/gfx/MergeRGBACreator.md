# MergeRGBACreator

## Overview
- RGBA通道合并工具，将四个单通道纹理合并为一个RGBA纹理。

## Hierarchy
- `Object` → `MergeRGBACreator`

## Constructor
- 静态类，无需实例化

## Methods (static)
| 名称 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| merge | 合并四个单通道纹理为RGBA纹理 | `textureR: Texture, textureG: Texture, textureB: Texture, textureA: Texture` | `VirtualTexture` |

## Examples
```ts
const redTexture = new Texture();
const greenTexture = new Texture();
const blueTexture = new Texture();
const alphaTexture = new Texture();
const mergedTexture = MergeRGBACreator.merge(redTexture, greenTexture, blueTexture, alphaTexture);
```