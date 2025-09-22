# AtmosphericScatteringSky

## Overview
- 大气散射天空纹理，用于实现基于物理的大气散射效果，创建逼真的天空和大气外观。

## Hierarchy
- `Texture` → `AtmosphericScatteringSky`

## Constructor
- `new AtmosphericScatteringSky()`

## Properties
| 名称 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| useMipmap | 是否使用Mipmap | boolean | true | true/false |
| format | 纹理格式 | GPUTextureFormat | rgba8unorm | — |

## Methods
| 名称 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| generate | 生成大气散射纹理 | `params?: AtmosphericScatteringParams` | `void` |

## Examples
```ts
const sky = new AtmosphericScatteringSky();
sky.generate({
  sunPosition: new Vector3(0.5, 0.8, 0.2),
  turbidity: 2.0,
  rayleigh: 1.0
});
scene.envMap = sky;
```