# LitMaterial

## Overview
- 物理基（近似 PBR）的受光材质，默认使用 `StandShader`。支持基础贴图、法线、发光、AO、ClearCoat 相关参数与贴图等。

## Hierarchy
- `Material` → `LitMaterial`

## Constructor
- `new LitMaterial()`

## Properties
| 名称 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| baseMap | 基础色贴图 | Texture | — | — |
| maskMap | Mask/RGBA 多通道贴图 | Texture | — | — |
| normalMap | 法线贴图 | Texture | — | — |
| emissiveMap | 自发光贴图 | Texture | — | — |
| aoMap | 环境遮蔽贴图 | Texture | — | — |
| clearCoatRoughnessMap | 清漆粗糙度贴图（启用 ClearCoat 宏） | Texture | — | — |
| baseColor | 基础颜色 | Color | — | — |
| roughness | 粗糙度 | number | — | — |
| metallic | 金属度 | number | — | — |
| emissiveColor | 自发光颜色 | Color | — | — |
| emissiveIntensity | 自发光强度 | number | — | — |
| ao | 环境遮蔽强度 | number | — | — |
| alphaCutoff | 透明裁剪阈值 | number | — | — |
| ior | 反射率（用于 ClearCoat） | number | — | — |
| clearcoatColor | 清漆颜色（启用 ClearCoat 宏） | Color | — | — |
| clearcoatWeight | 清漆权重 | number | — | — |
| clearcoatFactor | 清漆系数 | number | — | — |
| clearcoatRoughnessFactor | 清漆粗糙度系数 | number | — | — |

## Methods
| 名称 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| clone | 克隆材质并复制默认 Color pass 的 Uniform/Define/Texture | — | `Material` |

## Examples
```ts
const mat = new LitMaterial();
mat.baseColor = new Color(1, 0.8, 0.8, 1);
mat.roughness = 0.5;
mat.metallic = 0.2;
```


