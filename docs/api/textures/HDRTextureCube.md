# HDRTextureCube

## Overview
- HDR立方体纹理，用于环境贴图和天空盒，支持从RGBE格式的HDR图像加载并转换为立方体贴图格式。

## Hierarchy
- `TextureCube` → `HDRTextureCube`

## Constructor
- `new HDRTextureCube()`

## Properties
| 名称 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| useMipmap | 是否使用Mipmap | boolean | true | true/false |
| format | 纹理格式 | GPUTextureFormat | rgba16float | — |
| isHDRTexture | 是否为HDR纹理 | boolean | true | true/false |
| _faceData | 立方体面部数据 | TextureCubeFaceData | — | — |

## Methods
| 名称 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| createFromHDRData | 从HDR数据创建立方体纹理 | `size: number, data: { width: number, height: number, array: Uint8Array }` | `this` |
| createFromTexture | 从纹理创建 | `size: number, texture: Texture` | `this` |
| load | 从URL加载HDR立方体贴图 | `url: string, loaderFunctions?: LoaderFunctions` | `Promise<HDRTextureCube>` |

## Examples
```ts
const hdrCube = new HDRTextureCube();
await hdrCube.load('/assets/env.hdr');
scene.envMap = hdrCube;
```