# TextureCubeStdCreator

## Overview
- 立方体贴图标准创建器，用于从标准布局的2D纹理创建立方体纹理面。

## Hierarchy
- `Object` → `TextureCubeStdCreator`

## Constructor
- 静态类，无需实例化

## Methods (static)
| 名称 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| createFace | 创建立方体纹理的单个面 | `index: number, size: number, inTex: Texture, outTex: RenderTexture` | `void` |

## Examples
```ts
const inputTexture = new Texture();
const outputTexture = new RenderTexture(256, 256);
TextureCubeStdCreator.createFace(0, 256, inputTexture, outputTexture); // 创建左面
```