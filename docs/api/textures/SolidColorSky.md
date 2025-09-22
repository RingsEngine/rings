# SolidColorSky

## Overview
- 纯色天空纹理，用于简单的单色天空背景，支持颜色渐变和基本的大气效果。

## Hierarchy
- `Texture` → `SolidColorSky`

## Constructor
- `new SolidColorSky(color?: Color = Color.SKYBLUE)`

## Properties
| 名称 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| color | 天空颜色 | Color | Color.SKYBLUE | — |
| useMipmap | 是否使用Mipmap | boolean | false | true/false |
| format | 纹理格式 | GPUTextureFormat | rgba8unorm | — |

## Methods
| 名称 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| setColor | 设置天空颜色 | `color: Color` | `void` |
| generate | 生成天空纹理 | — | `void` |

## Examples
```ts
const sky = new SolidColorSky(new Color(0.5, 0.7, 1.0, 1.0));
sky.generate();
scene.envMap = sky;
```