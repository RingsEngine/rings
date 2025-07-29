[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / ComputeShader

# Class: ComputeShader

## Hierarchy

- [`ShaderPassBase`](ShaderPassBase.md)

  ↳ **`ComputeShader`**

## Table of contents

### Constructors

- [constructor](ComputeShader.md#constructor)

### Properties

- [entryPoint](ComputeShader.md#entrypoint)
- [workerSizeX](ComputeShader.md#workersizex)
- [workerSizeY](ComputeShader.md#workersizey)
- [workerSizeZ](ComputeShader.md#workersizez)
- [\_computePipeline](ComputeShader.md#_computepipeline)
- [\_csShaderModule](ComputeShader.md#_csshadermodule)
- [\_destCS](ComputeShader.md#_destcs)
- [\_sourceCS](ComputeShader.md#_sourcecs)
- [instanceID](ComputeShader.md#instanceid)
- [shaderVariant](ComputeShader.md#shadervariant)
- [vsEntryPoint](ComputeShader.md#vsentrypoint)
- [fsEntryPoint](ComputeShader.md#fsentrypoint)
- [bindGroups](ComputeShader.md#bindgroups)
- [shaderReflection](ComputeShader.md#shaderreflection)
- [defineValue](ComputeShader.md#definevalue)
- [constValues](ComputeShader.md#constvalues)
- [uniforms](ComputeShader.md#uniforms)
- [materialDataUniformBuffer](ComputeShader.md#materialdatauniformbuffer)
- [\_bufferDic](ComputeShader.md#_bufferdic)
- [\_shaderChange](ComputeShader.md#_shaderchange)
- [\_valueChange](ComputeShader.md#_valuechange)

### Methods

- [setStorageTexture](ComputeShader.md#setstoragetexture)
- [setSamplerTexture](ComputeShader.md#setsamplertexture)
- [compute](ComputeShader.md#compute)
- [noticeBufferChange](ComputeShader.md#noticebufferchange)
- [genGroups](ComputeShader.md#gengroups)
- [genComputePipeline](ComputeShader.md#gencomputepipeline)
- [preCompileShader](ComputeShader.md#precompileshader)
- [compileShader](ComputeShader.md#compileshader)
- [noticeShaderChange](ComputeShader.md#noticeshaderchange)
- [noticeValueChange](ComputeShader.md#noticevaluechange)
- [setStorageBuffer](ComputeShader.md#setstoragebuffer)
- [setStructStorageBuffer](ComputeShader.md#setstructstoragebuffer)
- [setUniformBuffer](ComputeShader.md#setuniformbuffer)
- [setDefine](ComputeShader.md#setdefine)
- [hasDefine](ComputeShader.md#hasdefine)
- [deleteDefine](ComputeShader.md#deletedefine)
- [setUniformFloat](ComputeShader.md#setuniformfloat)
- [setUniformVector2](ComputeShader.md#setuniformvector2)
- [setUniformVector3](ComputeShader.md#setuniformvector3)
- [setUniformVector4](ComputeShader.md#setuniformvector4)
- [setUniformColor](ComputeShader.md#setuniformcolor)
- [setUniformArray](ComputeShader.md#setuniformarray)
- [setUniform](ComputeShader.md#setuniform)
- [getUniform](ComputeShader.md#getuniform)
- [getUniformFloat](ComputeShader.md#getuniformfloat)
- [getUniformVector2](ComputeShader.md#getuniformvector2)
- [getUniformVector3](ComputeShader.md#getuniformvector3)
- [getUniformVector4](ComputeShader.md#getuniformvector4)
- [getUniformColor](ComputeShader.md#getuniformcolor)
- [getBuffer](ComputeShader.md#getbuffer)
- [applyUniform](ComputeShader.md#applyuniform)
- [destroy](ComputeShader.md#destroy)

## Constructors

### constructor

• **new ComputeShader**(`computeShader`): [`ComputeShader`](ComputeShader.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `computeShader` | `string` |

#### Returns

[`ComputeShader`](ComputeShader.md)

#### Overrides

[ShaderPassBase](ShaderPassBase.md).[constructor](ShaderPassBase.md#constructor)

#### Defined in

gfx/graphics/webGpu/shader/ComputeShader.ts:26

## Properties

### entryPoint

• **entryPoint**: `string`

#### Defined in

gfx/graphics/webGpu/shader/ComputeShader.ts:12

___

### workerSizeX

• **workerSizeX**: `number` = `1`

#### Defined in

gfx/graphics/webGpu/shader/ComputeShader.ts:13

___

### workerSizeY

• **workerSizeY**: `number` = `0`

#### Defined in

gfx/graphics/webGpu/shader/ComputeShader.ts:14

___

### workerSizeZ

• **workerSizeZ**: `number` = `0`

#### Defined in

gfx/graphics/webGpu/shader/ComputeShader.ts:15

___

### \_computePipeline

• `Protected` **\_computePipeline**: `GPUComputePipeline`

#### Defined in

gfx/graphics/webGpu/shader/ComputeShader.ts:16

___

### \_csShaderModule

• `Protected` **\_csShaderModule**: `GPUShaderModule`

#### Defined in

gfx/graphics/webGpu/shader/ComputeShader.ts:17

___

### \_destCS

• `Protected` **\_destCS**: `string`

#### Defined in

gfx/graphics/webGpu/shader/ComputeShader.ts:18

___

### \_sourceCS

• `Protected` **\_sourceCS**: `string`

#### Defined in

gfx/graphics/webGpu/shader/ComputeShader.ts:19

___

### instanceID

• `Readonly` **instanceID**: `string`

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[instanceID](ShaderPassBase.md#instanceid)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:17

___

### shaderVariant

• **shaderVariant**: `string`

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[shaderVariant](ShaderPassBase.md#shadervariant)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:18

___

### vsEntryPoint

• **vsEntryPoint**: `string`

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[vsEntryPoint](ShaderPassBase.md#vsentrypoint)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:19

___

### fsEntryPoint

• **fsEntryPoint**: `string`

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[fsEntryPoint](ShaderPassBase.md#fsentrypoint)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:20

___

### bindGroups

• **bindGroups**: `GPUBindGroup`[]

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[bindGroups](ShaderPassBase.md#bindgroups)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:21

___

### shaderReflection

• **shaderReflection**: [`ShaderReflection`](ShaderReflection.md)

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[shaderReflection](ShaderPassBase.md#shaderreflection)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:22

___

### defineValue

• **defineValue**: `Object`

#### Index signature

▪ [name: `string`]: `any`

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[defineValue](ShaderPassBase.md#definevalue)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:23

___

### constValues

• **constValues**: `Object`

#### Index signature

▪ [name: `string`]: `any`

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[constValues](ShaderPassBase.md#constvalues)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:24

___

### uniforms

• **uniforms**: `Object`

#### Index signature

▪ [name: `string`]: [`UniformNode`](UniformNode.md)

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[uniforms](ShaderPassBase.md#uniforms)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:25

___

### materialDataUniformBuffer

• **materialDataUniformBuffer**: [`MaterialDataUniformGPUBuffer`](MaterialDataUniformGPUBuffer.md)

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[materialDataUniformBuffer](ShaderPassBase.md#materialdatauniformbuffer)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:26

___

### \_bufferDic

• `Protected` **\_bufferDic**: `Map`\<`string`, [`GPUBufferBase`](GPUBufferBase.md)\>

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[_bufferDic](ShaderPassBase.md#_bufferdic)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:27

___

### \_shaderChange

• `Protected` **\_shaderChange**: `boolean` = `true`

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[_shaderChange](ShaderPassBase.md#_shaderchange)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:28

___

### \_valueChange

• `Protected` **\_valueChange**: `boolean` = `false`

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[_valueChange](ShaderPassBase.md#_valuechange)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:29

## Methods

### setStorageTexture

▸ **setStorageTexture**(`name`, `texture`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `texture` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/shader/ComputeShader.ts:34

___

### setSamplerTexture

▸ **setSamplerTexture**(`name`, `texture`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `texture` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/shader/ComputeShader.ts:40

___

### compute

▸ **compute**(`computePass`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `computePass` | `GPUComputePassEncoder` |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/shader/ComputeShader.ts:44

___

### noticeBufferChange

▸ **noticeBufferChange**(`name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Overrides

[ShaderPassBase](ShaderPassBase.md).[noticeBufferChange](ShaderPassBase.md#noticebufferchange)

#### Defined in

gfx/graphics/webGpu/shader/ComputeShader.ts:92

___

### genGroups

▸ **genGroups**(`groupIndex`, `infos`, `force?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `groupIndex` | `number` | `undefined` |
| `infos` | [`ShaderReflectionVarInfo`](../modules.md#shaderreflectionvarinfo)[][] | `undefined` |
| `force` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/shader/ComputeShader.ts:99

___

### genComputePipeline

▸ **genComputePipeline**(): `void`

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/shader/ComputeShader.ts:209

___

### preCompileShader

▸ **preCompileShader**(`shader`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shader` | `string` |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/shader/ComputeShader.ts:244

___

### compileShader

▸ **compileShader**(): `GPUShaderModule`

#### Returns

`GPUShaderModule`

#### Defined in

gfx/graphics/webGpu/shader/ComputeShader.ts:254

___

### noticeShaderChange

▸ **noticeShaderChange**(): `void`

#### Returns

`void`

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[noticeShaderChange](ShaderPassBase.md#noticeshaderchange)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:39

___

### noticeValueChange

▸ **noticeValueChange**(): `void`

#### Returns

`void`

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[noticeValueChange](ShaderPassBase.md#noticevaluechange)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:43

___

### setStorageBuffer

▸ **setStorageBuffer**(`name`, `buffer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `buffer` | [`StorageGPUBuffer`](StorageGPUBuffer.md) |

#### Returns

`void`

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[setStorageBuffer](ShaderPassBase.md#setstoragebuffer)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:47

___

### setStructStorageBuffer

▸ **setStructStorageBuffer**\<`T`\>(`name`, `buffer`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Struct`](Struct.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `buffer` | [`StructStorageGPUBuffer`](StructStorageGPUBuffer.md)\<`T`\> |

#### Returns

`void`

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[setStructStorageBuffer](ShaderPassBase.md#setstructstoragebuffer)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:56

___

### setUniformBuffer

▸ **setUniformBuffer**(`name`, `buffer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `buffer` | [`UniformGPUBuffer`](UniformGPUBuffer.md) |

#### Returns

`void`

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[setUniformBuffer](ShaderPassBase.md#setuniformbuffer)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:68

___

### setDefine

▸ **setDefine**(`defineName`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `defineName` | `string` |
| `value` | `any` |

#### Returns

`void`

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[setDefine](ShaderPassBase.md#setdefine)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:77

___

### hasDefine

▸ **hasDefine**(`defineName`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `defineName` | `string` |

#### Returns

`boolean`

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[hasDefine](ShaderPassBase.md#hasdefine)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:89

___

### deleteDefine

▸ **deleteDefine**(`defineName`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `defineName` | `string` |

#### Returns

`void`

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[deleteDefine](ShaderPassBase.md#deletedefine)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:93

___

### setUniformFloat

▸ **setUniformFloat**(`name`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[setUniformFloat](ShaderPassBase.md#setuniformfloat)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:98

___

### setUniformVector2

▸ **setUniformVector2**(`name`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | [`Vector2`](Vector2.md) |

#### Returns

`void`

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[setUniformVector2](ShaderPassBase.md#setuniformvector2)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:107

___

### setUniformVector3

▸ **setUniformVector3**(`name`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[setUniformVector3](ShaderPassBase.md#setuniformvector3)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:116

___

### setUniformVector4

▸ **setUniformVector4**(`name`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | [`Vector4`](Vector4.md) |

#### Returns

`void`

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[setUniformVector4](ShaderPassBase.md#setuniformvector4)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:124

___

### setUniformColor

▸ **setUniformColor**(`name`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | [`Color`](Color.md) |

#### Returns

`void`

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[setUniformColor](ShaderPassBase.md#setuniformcolor)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:132

___

### setUniformArray

▸ **setUniformArray**(`name`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `Float32Array`\<`ArrayBufferLike`\> |

#### Returns

`void`

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[setUniformArray](ShaderPassBase.md#setuniformarray)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:140

___

### setUniform

▸ **setUniform**(`name`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `any` |

#### Returns

`void`

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[setUniform](ShaderPassBase.md#setuniform)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:148

___

### getUniform

▸ **getUniform**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[getUniform](ShaderPassBase.md#getuniform)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:156

___

### getUniformFloat

▸ **getUniformFloat**(`name`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`number`

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[getUniformFloat](ShaderPassBase.md#getuniformfloat)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:160

___

### getUniformVector2

▸ **getUniformVector2**(`name`): [`Vector2`](Vector2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`Vector2`](Vector2.md)

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[getUniformVector2](ShaderPassBase.md#getuniformvector2)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:164

___

### getUniformVector3

▸ **getUniformVector3**(`name`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[getUniformVector3](ShaderPassBase.md#getuniformvector3)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:168

___

### getUniformVector4

▸ **getUniformVector4**(`name`): [`Vector4`](Vector4.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`Vector4`](Vector4.md)

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[getUniformVector4](ShaderPassBase.md#getuniformvector4)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:172

___

### getUniformColor

▸ **getUniformColor**(`name`): [`Color`](Color.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`Color`](Color.md)

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[getUniformColor](ShaderPassBase.md#getuniformcolor)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:176

___

### getBuffer

▸ **getBuffer**(`name`): [`GPUBufferBase`](GPUBufferBase.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`GPUBufferBase`](GPUBufferBase.md)

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[getBuffer](ShaderPassBase.md#getbuffer)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:180

___

### applyUniform

▸ **applyUniform**(): `void`

#### Returns

`void`

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[applyUniform](ShaderPassBase.md#applyuniform)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:186

___

### destroy

▸ **destroy**(`force?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `force?` | `boolean` |

#### Returns

`void`

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[destroy](ShaderPassBase.md#destroy)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:192
