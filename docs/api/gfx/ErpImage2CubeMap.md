# ErpImage2CubeMap

## Overview
- 等距圆柱投影图像到立方体贴图转换工具，支持RGBE格式转换和立方体纹理生成。

## Hierarchy
- `Object` → `ErpImage2CubeMap`

## Constructor
- 静态类，无需实例化

## Methods (static)
| 名称 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| convertRGBE2RGBA | 将RGBE格式转换为RGBA | `image: VirtualTexture, data: Float32Array` | `void` |
| makeTextureCube | 生成立方体纹理 | `image: Texture, dstSize: number, dstView: GPUTextureView` | `void` |

## Examples
```ts
const image = new VirtualTexture(512, 512);
const data = new Float32Array(512 * 512 * 4);
ErpImage2CubeMap.convertRGBE2RGBA(image, data);

const textureView = cubeTexture.getGPUView();
ErpImage2CubeMap.makeTextureCube(sourceTexture, 256, textureView);
```