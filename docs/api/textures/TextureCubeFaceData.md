# TextureCubeFaceData

## Overview
- 立方体纹理面部数据管理器，用于处理立方体贴图的6个面的数据上传和管理。

## Hierarchy
- `Object` → `TextureCubeFaceData`

## Constructor
- `new TextureCubeFaceData(cubeTexture: TextureCube)`

## Properties
| 名称 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| cubeTexture | 关联的立方体纹理 | TextureCube | — | — |
| faceData | 面部数据数组 | any[] | [] | — |

## Methods
| 名称 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| uploadErpTexture | 上传ERP纹理到立方体面部 | `texture: Texture` | `void` |
| getFaceData | 获取指定面的数据 | `faceIndex: number` | `any` |
| setFaceData | 设置指定面的数据 | `faceIndex: number, data: any` | `void` |

## Examples
```ts
const faceData = new TextureCubeFaceData(cubeTexture);
faceData.uploadErpTexture(erpTexture);
```