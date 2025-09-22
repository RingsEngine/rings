# LDRTextureCube

## Overview
- 低动态范围立方体纹理，用于标准动态范围的天空盒和环境贴图。

## Hierarchy
- `TextureCube` → `LDRTextureCube`

## Constructor
- `new LDRTextureCube()`

## Properties
| 名称 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| useMipmap | 是否使用Mipmap | boolean | true | true/false |
| format | 纹理格式 | GPUTextureFormat | rgba8unorm | — |

## Methods
| 名称 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| load | 从6个URL加载LDR立方体贴图 | `urls: string[]` | `Promise<LDRTextureCube>` |

## Examples
```ts
const ldrCube = new LDRTextureCube();
const skyboxUrls = ['/assets/sky_px.jpg', '/assets/sky_nx.jpg', '/assets/sky_py.jpg', '/assets/sky_ny.jpg', '/assets/sky_pz.jpg', '/assets/sky_nz.jpg'];
await ldrCube.load(skyboxUrls);
scene.envMap = ldrCube;
```