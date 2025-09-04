# Material

## Overview
- 材质基类，封装渲染状态（透明/剔除/深度/混合）、Shader 与统一的纹理/Uniform 设置接口，提供 Pass 获取与克隆。

## Hierarchy
- `Object` → `Material`

## Constructor
- `new Material()`

## Properties
| 名称 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| instanceID | 实例 ID | string | 生成 UUID | — |
| name | 名称 | string | — | — |
| enable | 是否启用 | boolean | true | true/false |
| shader | 绑定的 Shader | Shader | — | — |
| doubleSide | 是否双面渲染 | boolean | 依 shader | true/false |
| castShadow | 是否投射阴影 | boolean | 依 shader | true/false |
| acceptShadow | 是否接收阴影 | boolean | 依 shader | true/false |
| castReflection | 是否参与反射 | boolean | 依 shader | true/false |
| blendMode | 混合模式 | BlendMode | 依 shader | BlendMode 枚举 |
| depthCompare | 深度比较函数 | GPUCompareFunction | 依 shader | WebGPU Compare |
| transparent | 是否透明（启用时默认 renderOrder=3000） | boolean | false | true/false |
| cullMode | 剔除模式 | GPUCullMode | 依 shader | none/front/back |
| depthWriteEnabled | 写深度 | boolean | 依 shader | true/false |
| topology | 图元拓扑 | GPUPrimitiveTopology | 依 shader | triangle-list 等 |
| baseColor | 基础颜色 | Color | — | — |

## Methods
| 名称 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| getPass | 获取指定 Pass 的子着色器数组 | `passType: PassType` | `RenderShaderPass[]` |
| getAllPass | 获取颜色通道所有 Pass | — | `RenderShaderPass[]` |
| clone | 深拷贝材质（克隆内部 Shader） | — | `Material` |
| destroy | 释放材质与 Shader | `force: boolean` | `void` |
| setDefine | 设置 Shader 宏定义 | `define: string, value: boolean` | `void` |
| setTexture | 绑定纹理 | `propertyName: string, texture: Texture` | `void` |
| setStorageBuffer | 绑定存储缓冲 | `propertyName: string, buffer: StorageGPUBuffer` | `void` |
| setUniformBuffer | 绑定 Uniform 缓冲 | `propertyName: string, buffer: UniformGPUBuffer` | `void` |
| setUniformFloat | 设置 float Uniform | `name: string, value: number` | `void` |
| setUniformVector2/3/4 | 设置向量 Uniform | `name: string, value: VectorN` | `void` |
| setUniformColor | 设置颜色 Uniform | `name: string, value: Color` | `void` |
| getUniformFloat/V2/V3/V4/Color | 读取 Uniform | `name: string` | 对应类型 |
| getTexture/StorageBuffer/StructStorageBuffer/UniformBuffer | 读取绑定资源 | `name: string` | 对应类型 |
| applyUniform | 提交所有 Uniform 更改 | — | `void` |

## Examples
```ts
const mat = new Material();
mat.transparent = true;
mat.depthWriteEnabled = false;
mat.blendMode = BlendMode.Alpha;
```


