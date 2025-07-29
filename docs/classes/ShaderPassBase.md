[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / ShaderPassBase

# Class: ShaderPassBase

## Hierarchy

- **`ShaderPassBase`**

  ↳ [`ComputeShader`](ComputeShader.md)

  ↳ [`RenderShaderPass`](RenderShaderPass.md)

## Table of contents

### Constructors

- [constructor](ShaderPassBase.md#constructor)

### Properties

- [instanceID](ShaderPassBase.md#instanceid)
- [shaderVariant](ShaderPassBase.md#shadervariant)
- [vsEntryPoint](ShaderPassBase.md#vsentrypoint)
- [fsEntryPoint](ShaderPassBase.md#fsentrypoint)
- [bindGroups](ShaderPassBase.md#bindgroups)
- [shaderReflection](ShaderPassBase.md#shaderreflection)
- [defineValue](ShaderPassBase.md#definevalue)
- [constValues](ShaderPassBase.md#constvalues)
- [uniforms](ShaderPassBase.md#uniforms)
- [materialDataUniformBuffer](ShaderPassBase.md#materialdatauniformbuffer)
- [\_bufferDic](ShaderPassBase.md#_bufferdic)
- [\_shaderChange](ShaderPassBase.md#_shaderchange)
- [\_valueChange](ShaderPassBase.md#_valuechange)

### Methods

- [noticeShaderChange](ShaderPassBase.md#noticeshaderchange)
- [noticeValueChange](ShaderPassBase.md#noticevaluechange)
- [setStorageBuffer](ShaderPassBase.md#setstoragebuffer)
- [setStructStorageBuffer](ShaderPassBase.md#setstructstoragebuffer)
- [setUniformBuffer](ShaderPassBase.md#setuniformbuffer)
- [setDefine](ShaderPassBase.md#setdefine)
- [hasDefine](ShaderPassBase.md#hasdefine)
- [deleteDefine](ShaderPassBase.md#deletedefine)
- [setUniformFloat](ShaderPassBase.md#setuniformfloat)
- [setUniformVector2](ShaderPassBase.md#setuniformvector2)
- [setUniformVector3](ShaderPassBase.md#setuniformvector3)
- [setUniformVector4](ShaderPassBase.md#setuniformvector4)
- [setUniformColor](ShaderPassBase.md#setuniformcolor)
- [setUniformArray](ShaderPassBase.md#setuniformarray)
- [setUniform](ShaderPassBase.md#setuniform)
- [getUniform](ShaderPassBase.md#getuniform)
- [getUniformFloat](ShaderPassBase.md#getuniformfloat)
- [getUniformVector2](ShaderPassBase.md#getuniformvector2)
- [getUniformVector3](ShaderPassBase.md#getuniformvector3)
- [getUniformVector4](ShaderPassBase.md#getuniformvector4)
- [getUniformColor](ShaderPassBase.md#getuniformcolor)
- [getBuffer](ShaderPassBase.md#getbuffer)
- [noticeBufferChange](ShaderPassBase.md#noticebufferchange)
- [applyUniform](ShaderPassBase.md#applyuniform)
- [destroy](ShaderPassBase.md#destroy)

## Constructors

### constructor

• **new ShaderPassBase**(): [`ShaderPassBase`](ShaderPassBase.md)

#### Returns

[`ShaderPassBase`](ShaderPassBase.md)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:31

## Properties

### instanceID

• `Readonly` **instanceID**: `string`

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:17

___

### shaderVariant

• **shaderVariant**: `string`

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:18

___

### vsEntryPoint

• **vsEntryPoint**: `string`

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:19

___

### fsEntryPoint

• **fsEntryPoint**: `string`

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:20

___

### bindGroups

• **bindGroups**: `GPUBindGroup`[]

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:21

___

### shaderReflection

• **shaderReflection**: [`ShaderReflection`](ShaderReflection.md)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:22

___

### defineValue

• **defineValue**: `Object`

#### Index signature

▪ [name: `string`]: `any`

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:23

___

### constValues

• **constValues**: `Object`

#### Index signature

▪ [name: `string`]: `any`

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:24

___

### uniforms

• **uniforms**: `Object`

#### Index signature

▪ [name: `string`]: [`UniformNode`](UniformNode.md)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:25

___

### materialDataUniformBuffer

• **materialDataUniformBuffer**: [`MaterialDataUniformGPUBuffer`](MaterialDataUniformGPUBuffer.md)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:26

___

### \_bufferDic

• `Protected` **\_bufferDic**: `Map`\<`string`, [`GPUBufferBase`](GPUBufferBase.md)\>

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:27

___

### \_shaderChange

• `Protected` **\_shaderChange**: `boolean` = `true`

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:28

___

### \_valueChange

• `Protected` **\_valueChange**: `boolean` = `false`

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:29

## Methods

### noticeShaderChange

▸ **noticeShaderChange**(): `void`

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:39

___

### noticeValueChange

▸ **noticeValueChange**(): `void`

#### Returns

`void`

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

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:180

___

### noticeBufferChange

▸ **noticeBufferChange**(`name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:184

___

### applyUniform

▸ **applyUniform**(): `void`

#### Returns

`void`

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

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:192
