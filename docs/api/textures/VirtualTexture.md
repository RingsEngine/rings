# VirtualTexture

## Overview
- 虚拟纹理，类似于Three.js的WebGLRenderTarget，可作为渲染目标和纹理采样源，支持多种GPU格式和多重采样配置。

## Hierarchy
- `Texture` → `VirtualTexture`

## Constructor
- `new VirtualTexture(width: number, height: number, format?: GPUTextureFormat = rgba8unorm, useMipMap?: boolean = false, usage?: GPUFlagsConstant, numberLayer?: number = 1, sampleCount?: number = 0, mipmapCount?: number = 1)`

## Properties
| 名称 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| resolveTarget | 多重采样解析目标视图 | GPUTextureView | — | — |
| sampleCount | 多重采样数 | number | 0 | 0/2/4/8... |
| format | GPU纹理格式 | GPUTextureFormat | rgba8unorm | 各种GPU格式 |
| usage | GPU使用标志 | GPUFlagsConstant | RENDER_ATTACHMENT \| TEXTURE_BINDING \| COPY_SRC \| COPY_DST | — |
| numberLayer | 纹理层数 | number | 1 | — |
| mipmapCount | Mipmap级别数 | number | 1 | — |

## Methods
| 名称 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| resize | 重新创建GPU纹理与采样器 | `width: number, height: number` | `void` |
| create | 创建并写入空纹理数据 | `width: number, height: number, useMipMap?: boolean` | `void` |
| clone | 克隆同配置的VirtualTexture | — | `VirtualTexture` |
| readTextureToImage | 读取纹理数据到Buffer（用于截图等） | — | `ArrayBuffer` |

## Examples
```ts
const vt = new VirtualTexture(1024, 1024, GPUTextureFormat.rgba16float, false, undefined, 1, 4);
vt.create(1024, 1024, false);
```