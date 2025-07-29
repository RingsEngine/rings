[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / LitShader

# Class: LitShader

## Hierarchy

- [`Shader`](Shader.md)

  ↳ **`LitShader`**

## Table of contents

### Constructors

- [constructor](LitShader.md#constructor)

### Properties

- [computes](LitShader.md#computes)
- [passShader](LitShader.md#passshader)

### Accessors

- [\_MainTex](LitShader.md#_maintex)
- [\_BumpMap](LitShader.md#_bumpmap)
- [\_MaskTex](LitShader.md#_masktex)
- [\_UVTransform](LitShader.md#_uvtransform)
- [\_Metallic](LitShader.md#_metallic)
- [\_Roughness](LitShader.md#_roughness)
- [\_MainColor](LitShader.md#_maincolor)
- [\_AlphaCutoff](LitShader.md#_alphacutoff)
- [\_DoubleSidedEnable](LitShader.md#_doublesidedenable)
- [\_SurfaceType](LitShader.md#_surfacetype)
- [\_AlphaCutoffEnable](LitShader.md#_alphacutoffenable)

### Methods

- [addRenderPass](LitShader.md#addrenderpass)
- [removeShader](LitShader.md#removeshader)
- [removeShaderByIndex](LitShader.md#removeshaderbyindex)
- [getSubShaders](LitShader.md#getsubshaders)
- [hasSubShaders](LitShader.md#hassubshaders)
- [getDefaultShaders](LitShader.md#getdefaultshaders)
- [getDefaultColorShader](LitShader.md#getdefaultcolorshader)
- [setDefine](LitShader.md#setdefine)
- [hasDefine](LitShader.md#hasdefine)
- [deleteDefine](LitShader.md#deletedefine)
- [setUniform](LitShader.md#setuniform)
- [setUniformFloat](LitShader.md#setuniformfloat)
- [setUniformVector2](LitShader.md#setuniformvector2)
- [setUniformVector3](LitShader.md#setuniformvector3)
- [setUniformVector4](LitShader.md#setuniformvector4)
- [setUniformColor](LitShader.md#setuniformcolor)
- [getUniform](LitShader.md#getuniform)
- [getUniformFloat](LitShader.md#getuniformfloat)
- [getUniformVector2](LitShader.md#getuniformvector2)
- [getUniformVector3](LitShader.md#getuniformvector3)
- [getUniformVector4](LitShader.md#getuniformvector4)
- [getUniformColor](LitShader.md#getuniformcolor)
- [setTexture](LitShader.md#settexture)
- [getTexture](LitShader.md#gettexture)
- [setUniformBuffer](LitShader.md#setuniformbuffer)
- [getUniformBuffer](LitShader.md#getuniformbuffer)
- [setStorageBuffer](LitShader.md#setstoragebuffer)
- [getStorageBuffer](LitShader.md#getstoragebuffer)
- [setStructStorageBuffer](LitShader.md#setstructstoragebuffer)
- [getStructStorageBuffer](LitShader.md#getstructstoragebuffer)
- [noticeValueChange](LitShader.md#noticevaluechange)
- [destroy](LitShader.md#destroy)
- [clone](LitShader.md#clone)
- [applyUniform](LitShader.md#applyuniform)
- [setDefault](LitShader.md#setdefault)

## Constructors

### constructor

• **new LitShader**(): [`LitShader`](LitShader.md)

#### Returns

[`LitShader`](LitShader.md)

#### Overrides

[Shader](Shader.md).[constructor](Shader.md#constructor)

#### Defined in

loader/parser/prefab/mats/shader/LitShader.ts:13

## Properties

### computes

• **computes**: [`RenderShaderCompute`](RenderShaderCompute.md)[]

#### Inherited from

[Shader](Shader.md).[computes](Shader.md#computes)

#### Defined in

gfx/graphics/webGpu/shader/Shader.ts:17

___

### passShader

• **passShader**: `Map`\<[`PassType`](../enums/PassType.md), [`RenderShaderPass`](RenderShaderPass.md)[]\>

#### Inherited from

[Shader](Shader.md).[passShader](Shader.md#passshader)

#### Defined in

gfx/graphics/webGpu/shader/Shader.ts:18

## Accessors

### \_MainTex

• `set` **_MainTex**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Defined in

loader/parser/prefab/mats/shader/LitShader.ts:62

___

### \_BumpMap

• `set` **_BumpMap**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Defined in

loader/parser/prefab/mats/shader/LitShader.ts:66

___

### \_MaskTex

• `set` **_MaskTex**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Defined in

loader/parser/prefab/mats/shader/LitShader.ts:70

___

### \_UVTransform

• `set` **_UVTransform**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector4`](Vector4.md) |

#### Returns

`void`

#### Defined in

loader/parser/prefab/mats/shader/LitShader.ts:74

___

### \_Metallic

• `set` **_Metallic**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

loader/parser/prefab/mats/shader/LitShader.ts:78

___

### \_Roughness

• `set` **_Roughness**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

loader/parser/prefab/mats/shader/LitShader.ts:82

___

### \_MainColor

• `set` **_MainColor**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Color`](Color.md) |

#### Returns

`void`

#### Defined in

loader/parser/prefab/mats/shader/LitShader.ts:86

___

### \_AlphaCutoff

• `set` **_AlphaCutoff**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

loader/parser/prefab/mats/shader/LitShader.ts:90

___

### \_DoubleSidedEnable

• `set` **_DoubleSidedEnable**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

loader/parser/prefab/mats/shader/LitShader.ts:94

___

### \_SurfaceType

• `set` **_SurfaceType**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

loader/parser/prefab/mats/shader/LitShader.ts:101

___

### \_AlphaCutoffEnable

• `set` **_AlphaCutoffEnable**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

loader/parser/prefab/mats/shader/LitShader.ts:110

## Methods

### addRenderPass

▸ **addRenderPass**(`renderShader`, `index?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `renderShader` | [`RenderShaderPass`](RenderShaderPass.md) | `undefined` |
| `index` | `number` | `-1` |

#### Returns

`void`

#### Inherited from

[Shader](Shader.md).[addRenderPass](Shader.md#addrenderpass)

#### Defined in

gfx/graphics/webGpu/shader/Shader.ts:23

___

### removeShader

▸ **removeShader**(`renderShader`, `index?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `renderShader` | [`RenderShaderPass`](RenderShaderPass.md) | `undefined` |
| `index` | `number` | `-1` |

#### Returns

`void`

#### Inherited from

[Shader](Shader.md).[removeShader](Shader.md#removeshader)

#### Defined in

gfx/graphics/webGpu/shader/Shader.ts:33

___

### removeShaderByIndex

▸ **removeShaderByIndex**(`passType`, `index?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `passType` | [`PassType`](../enums/PassType.md) | `undefined` |
| `index` | `number` | `-1` |

#### Returns

`void`

#### Inherited from

[Shader](Shader.md).[removeShaderByIndex](Shader.md#removeshaderbyindex)

#### Defined in

gfx/graphics/webGpu/shader/Shader.ts:48

___

### getSubShaders

▸ **getSubShaders**(`passType`): [`RenderShaderPass`](RenderShaderPass.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `passType` | [`PassType`](../enums/PassType.md) |

#### Returns

[`RenderShaderPass`](RenderShaderPass.md)[]

#### Inherited from

[Shader](Shader.md).[getSubShaders](Shader.md#getsubshaders)

#### Defined in

gfx/graphics/webGpu/shader/Shader.ts:58

___

### hasSubShaders

▸ **hasSubShaders**(`passType`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `passType` | [`PassType`](../enums/PassType.md) |

#### Returns

`boolean`

#### Inherited from

[Shader](Shader.md).[hasSubShaders](Shader.md#hassubshaders)

#### Defined in

gfx/graphics/webGpu/shader/Shader.ts:62

___

### getDefaultShaders

▸ **getDefaultShaders**(): [`RenderShaderPass`](RenderShaderPass.md)[]

#### Returns

[`RenderShaderPass`](RenderShaderPass.md)[]

#### Inherited from

[Shader](Shader.md).[getDefaultShaders](Shader.md#getdefaultshaders)

#### Defined in

gfx/graphics/webGpu/shader/Shader.ts:67

___

### getDefaultColorShader

▸ **getDefaultColorShader**(): [`RenderShaderPass`](RenderShaderPass.md)

#### Returns

[`RenderShaderPass`](RenderShaderPass.md)

#### Inherited from

[Shader](Shader.md).[getDefaultColorShader](Shader.md#getdefaultcolorshader)

#### Defined in

gfx/graphics/webGpu/shader/Shader.ts:71

___

### setDefine

▸ **setDefine**(`arg0`, `arg1`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `arg1` | `boolean` |

#### Returns

`void`

#### Inherited from

[Shader](Shader.md).[setDefine](Shader.md#setdefine)

#### Defined in

gfx/graphics/webGpu/shader/Shader.ts:75

___

### hasDefine

▸ **hasDefine**(`arg0`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |

#### Returns

`boolean`

#### Inherited from

[Shader](Shader.md).[hasDefine](Shader.md#hasdefine)

#### Defined in

gfx/graphics/webGpu/shader/Shader.ts:83

___

### deleteDefine

▸ **deleteDefine**(`arg0`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |

#### Returns

`void`

#### Inherited from

[Shader](Shader.md).[deleteDefine](Shader.md#deletedefine)

#### Defined in

gfx/graphics/webGpu/shader/Shader.ts:93

___

### setUniform

▸ **setUniform**(`arg0`, `arg1`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `arg1` | `any` |

#### Returns

`void`

#### Inherited from

[Shader](Shader.md).[setUniform](Shader.md#setuniform)

#### Defined in

gfx/graphics/webGpu/shader/Shader.ts:101

___

### setUniformFloat

▸ **setUniformFloat**(`arg0`, `arg1`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `arg1` | `number` |

#### Returns

`void`

#### Inherited from

[Shader](Shader.md).[setUniformFloat](Shader.md#setuniformfloat)

#### Defined in

gfx/graphics/webGpu/shader/Shader.ts:109

___

### setUniformVector2

▸ **setUniformVector2**(`arg0`, `arg1`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `arg1` | [`Vector2`](Vector2.md) |

#### Returns

`void`

#### Inherited from

[Shader](Shader.md).[setUniformVector2](Shader.md#setuniformvector2)

#### Defined in

gfx/graphics/webGpu/shader/Shader.ts:117

___

### setUniformVector3

▸ **setUniformVector3**(`arg0`, `arg1`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `arg1` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Inherited from

[Shader](Shader.md).[setUniformVector3](Shader.md#setuniformvector3)

#### Defined in

gfx/graphics/webGpu/shader/Shader.ts:125

___

### setUniformVector4

▸ **setUniformVector4**(`arg0`, `arg1`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `arg1` | [`Vector4`](Vector4.md) |

#### Returns

`void`

#### Inherited from

[Shader](Shader.md).[setUniformVector4](Shader.md#setuniformvector4)

#### Defined in

gfx/graphics/webGpu/shader/Shader.ts:133

___

### setUniformColor

▸ **setUniformColor**(`arg0`, `arg1`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `arg1` | [`Color`](Color.md) |

#### Returns

`void`

#### Inherited from

[Shader](Shader.md).[setUniformColor](Shader.md#setuniformcolor)

#### Defined in

gfx/graphics/webGpu/shader/Shader.ts:141

___

### getUniform

▸ **getUniform**(`arg0`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |

#### Returns

`any`

#### Inherited from

[Shader](Shader.md).[getUniform](Shader.md#getuniform)

#### Defined in

gfx/graphics/webGpu/shader/Shader.ts:149

___

### getUniformFloat

▸ **getUniformFloat**(`arg0`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |

#### Returns

`number`

#### Inherited from

[Shader](Shader.md).[getUniformFloat](Shader.md#getuniformfloat)

#### Defined in

gfx/graphics/webGpu/shader/Shader.ts:153

___

### getUniformVector2

▸ **getUniformVector2**(`arg0`): [`Vector2`](Vector2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |

#### Returns

[`Vector2`](Vector2.md)

#### Inherited from

[Shader](Shader.md).[getUniformVector2](Shader.md#getuniformvector2)

#### Defined in

gfx/graphics/webGpu/shader/Shader.ts:157

___

### getUniformVector3

▸ **getUniformVector3**(`arg0`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[Shader](Shader.md).[getUniformVector3](Shader.md#getuniformvector3)

#### Defined in

gfx/graphics/webGpu/shader/Shader.ts:161

___

### getUniformVector4

▸ **getUniformVector4**(`arg0`): [`Vector4`](Vector4.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |

#### Returns

[`Vector4`](Vector4.md)

#### Inherited from

[Shader](Shader.md).[getUniformVector4](Shader.md#getuniformvector4)

#### Defined in

gfx/graphics/webGpu/shader/Shader.ts:165

___

### getUniformColor

▸ **getUniformColor**(`arg0`): [`Color`](Color.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |

#### Returns

[`Color`](Color.md)

#### Inherited from

[Shader](Shader.md).[getUniformColor](Shader.md#getuniformcolor)

#### Defined in

gfx/graphics/webGpu/shader/Shader.ts:169

___

### setTexture

▸ **setTexture**(`arg0`, `arg1`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `arg1` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Inherited from

[Shader](Shader.md).[setTexture](Shader.md#settexture)

#### Defined in

gfx/graphics/webGpu/shader/Shader.ts:173

___

### getTexture

▸ **getTexture**(`arg0`): [`Texture`](Texture.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |

#### Returns

[`Texture`](Texture.md)

#### Inherited from

[Shader](Shader.md).[getTexture](Shader.md#gettexture)

#### Defined in

gfx/graphics/webGpu/shader/Shader.ts:182

___

### setUniformBuffer

▸ **setUniformBuffer**(`arg0`, `arg1`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `arg1` | [`UniformGPUBuffer`](UniformGPUBuffer.md) |

#### Returns

`void`

#### Inherited from

[Shader](Shader.md).[setUniformBuffer](Shader.md#setuniformbuffer)

#### Defined in

gfx/graphics/webGpu/shader/Shader.ts:186

___

### getUniformBuffer

▸ **getUniformBuffer**(`arg0`): [`GPUBufferBase`](GPUBufferBase.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |

#### Returns

[`GPUBufferBase`](GPUBufferBase.md)

#### Inherited from

[Shader](Shader.md).[getUniformBuffer](Shader.md#getuniformbuffer)

#### Defined in

gfx/graphics/webGpu/shader/Shader.ts:194

___

### setStorageBuffer

▸ **setStorageBuffer**(`arg0`, `arg1`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `arg1` | [`StorageGPUBuffer`](StorageGPUBuffer.md) |

#### Returns

`void`

#### Inherited from

[Shader](Shader.md).[setStorageBuffer](Shader.md#setstoragebuffer)

#### Defined in

gfx/graphics/webGpu/shader/Shader.ts:198

___

### getStorageBuffer

▸ **getStorageBuffer**(`arg0`): [`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |

#### Returns

[`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Inherited from

[Shader](Shader.md).[getStorageBuffer](Shader.md#getstoragebuffer)

#### Defined in

gfx/graphics/webGpu/shader/Shader.ts:206

___

### setStructStorageBuffer

▸ **setStructStorageBuffer**\<`T`\>(`arg0`, `arg1`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Struct`](Struct.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `arg1` | [`StructStorageGPUBuffer`](StructStorageGPUBuffer.md)\<`T`\> |

#### Returns

`void`

#### Inherited from

[Shader](Shader.md).[setStructStorageBuffer](Shader.md#setstructstoragebuffer)

#### Defined in

gfx/graphics/webGpu/shader/Shader.ts:210

___

### getStructStorageBuffer

▸ **getStructStorageBuffer**(`arg0`): [`GPUBufferBase`](GPUBufferBase.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |

#### Returns

[`GPUBufferBase`](GPUBufferBase.md)

#### Inherited from

[Shader](Shader.md).[getStructStorageBuffer](Shader.md#getstructstoragebuffer)

#### Defined in

gfx/graphics/webGpu/shader/Shader.ts:221

___

### noticeValueChange

▸ **noticeValueChange**(): `void`

#### Returns

`void`

#### Inherited from

[Shader](Shader.md).[noticeValueChange](Shader.md#noticevaluechange)

#### Defined in

gfx/graphics/webGpu/shader/Shader.ts:225

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[Shader](Shader.md).[destroy](Shader.md#destroy)

#### Defined in

gfx/graphics/webGpu/shader/Shader.ts:233

___

### clone

▸ **clone**(): [`Shader`](Shader.md)

#### Returns

[`Shader`](Shader.md)

#### Inherited from

[Shader](Shader.md).[clone](Shader.md#clone)

#### Defined in

gfx/graphics/webGpu/shader/Shader.ts:237

___

### applyUniform

▸ **applyUniform**(): `void`

#### Returns

`void`

#### Inherited from

[Shader](Shader.md).[applyUniform](Shader.md#applyuniform)

#### Defined in

gfx/graphics/webGpu/shader/Shader.ts:246

___

### setDefault

▸ **setDefault**(): `void`

#### Returns

`void`

#### Defined in

loader/parser/prefab/mats/shader/LitShader.ts:33
