# TextureScaleCompute

## Overview
- 纹理缩放计算着色器，用于纹理的压缩和缩放处理。

## Hierarchy
- `Object` → `TextureScaleCompute`

## Constructor
```ts
new TextureScaleCompute()
```

## Properties
| 名称 | 说明 | 类型 |
| --- | --- | --- |
| computeShader | 计算着色器实例 | `ComputeShader` |

## Methods
| 名称 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| setInputes | 设置输入输出纹理 | `colorMap: Texture, inputs: Texture[], outputs: Texture[]` | `void` |

## Examples
```ts
const scaleCompute = new TextureScaleCompute();
const colorMap = new Texture();
const inputs = [texture1, texture2];
const outputs = [output1, output2];
scaleCompute.setInputes(colorMap, inputs, outputs);
```