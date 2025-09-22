# HDRTexture

## Overview
- HDR纹理，支持高动态范围图像加载和显示，常用于环境光照和反射。

## Hierarchy
- `Texture` → `HDRTexture`

## Constructor
- `new HDRTexture()`

## Properties
| 名称 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| isHDRTexture | 是否为HDR纹理 | boolean | true | true/false |
| format | 纹理格式 | GPUTextureFormat | rgba16float | — |
| useMipmap | 是否使用Mipmap | boolean | true | true/false |

## Methods
| 名称 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| load | 从URL加载HDR纹理 | `url: string, loaderFunctions?: LoaderFunctions` | `Promise<HDRTexture>` |

## Examples
```ts
const hdrTex = new HDRTexture();
await hdrTex.load('/assets/hdr_image.hdr');
```