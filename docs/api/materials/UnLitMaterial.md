# UnLitMaterial

## Overview
- 不受光照影响的材质，适合 UI、纯色/贴图显示等。默认使用 `UnLitShader`，并将 `baseMap` 初始化为引擎白纹理。

## Hierarchy
- `Material` → `UnLitMaterial`

## Constructor
- `new UnLitMaterial()`

## Properties
| 名称 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| baseMap | 基础色贴图 | Texture | `Engine3D.res.whiteTexture` | — |
| baseColor | 基础颜色 | Color | — | — |

## Methods
| 名称 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| （继承） | 继承自 `Material` 的方法 | — | — |

## Examples
```ts
const mat = new UnLitMaterial();
mat.baseColor = new Color(1, 1, 1, 1);
```


