# RenderTexture

## Overview
- 可作为渲染目标与采样源的纹理，支持多层/多样本、自动随窗口尺寸变化、深度/颜色等多种格式配置。

## Hierarchy
- `Texture` → `RenderTexture`

## Constructor
- `new RenderTexture(width: number, height: number, format?: GPUTextureFormat = rgba8unorm, useMipMap?: boolean = false, usage?: GPUFlagsConstant, numberLayer?: number = 1, sampleCount?: number = 0, clear?: boolean = true, autoResize?: boolean = true)`

## Properties
| 名称 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| resolveTarget | 多重采样解析目标视图 | GPUTextureView | — | — |
| sampleCount | 多重采样数 | number | 0 | 0/2/4/8... |
| autoResize | 是否随窗口尺寸变化自动重建 | boolean | true | true/false |
| clear | 是否清屏 | boolean | true | true/false |

## Methods
| 名称 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| resize | 重新创建 GPU 纹理与采样器 | `width: number, height: number` | `void` |
| create | 创建并写入空纹理数据 | `width: number, height: number, useMipMap?: boolean` | `void` |
| clone | 克隆同配置的 RenderTexture | — | `RenderTexture` |
| readTextureToImage | 读取纹理数据到 Buffer（用于截图等） | — | `ArrayBuffer` |

## Examples
```ts
const rt = new RenderTexture(1024, 1024, GPUTextureFormat.rgba8unorm, false, undefined, 1, 4, true, true);
```


