# TextureCubeUtils

## Overview
- 立方体贴图工具类，提供立方体纹理面的旋转四元数计算。

## Hierarchy
- `Object` → `TextureCubeUtils`

## Enums
| 名称 | 说明 | 值 |
| --- | --- | --- |
| CubeMapFaceEnum.Left | 左面 | 0 |
| CubeMapFaceEnum.Right | 右面 | 1 |
| CubeMapFaceEnum.Bottom | 底面 | 2 |
| CubeMapFaceEnum.Top | 顶面 | 3 |
| CubeMapFaceEnum.Back | 背面 | 4 |
| CubeMapFaceEnum.Front | 正面 | 5 |

## Constructor
- 静态类，无需实例化

## Methods (static)
| 名称 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| getRotationToFace | 获取立方体指定面的旋转四元数 | `face: CubeMapFaceEnum` | `Quaternion` |

## Examples
```ts
const quaternion = TextureCubeUtils.getRotationToFace(CubeMapFaceEnum.Top);
const frontRotation = TextureCubeUtils.getRotationToFace(CubeMapFaceEnum.Front);
```