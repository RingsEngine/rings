# BRDFLUTGenerate

## Overview
- BRDF查找表生成器，用于预计算BRDF（双向反射分布函数）查找表，提升PBR渲染性能。

## Hierarchy
- `Object` → `BRDFLUTGenerate`

## Constructor
- `new BRDFLUTGenerate()`

## Properties
| 名称 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| compute | BRDF计算着色器 | ComputeShader | — | — |

## Methods
| 名称 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| generateBRDFLUTTexture | 生成BRDF查找表纹理 | — | `VirtualTexture` |

## Examples
```ts
const brdfGen = new BRDFLUTGenerate();
const brdfLUT = brdfGen.generateBRDFLUTTexture();
material.brdfLUT = brdfLUT;
```