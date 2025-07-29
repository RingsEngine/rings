[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / UnLitTexArrayShader

# Class: UnLitTexArrayShader

## Hierarchy

- [`Shader`](Shader.md)

  ↳ **`UnLitTexArrayShader`**

## Table of contents

### Constructors

- [constructor](UnLitTexArrayShader.md#constructor)

### Properties

- [computes](UnLitTexArrayShader.md#computes)
- [passShader](UnLitTexArrayShader.md#passshader)

### Accessors

- [\_MainTex](UnLitTexArrayShader.md#_maintex)
- [\_BumpMap](UnLitTexArrayShader.md#_bumpmap)
- [\_MaskTex](UnLitTexArrayShader.md#_masktex)
- [\_UVTransform](UnLitTexArrayShader.md#_uvtransform)
- [\_Metallic](UnLitTexArrayShader.md#_metallic)
- [\_Roughness](UnLitTexArrayShader.md#_roughness)
- [\_MainColor](UnLitTexArrayShader.md#_maincolor)
- [\_AlphaCutoff](UnLitTexArrayShader.md#_alphacutoff)
- [\_DoubleSidedEnable](UnLitTexArrayShader.md#_doublesidedenable)
- [\_SurfaceType](UnLitTexArrayShader.md#_surfacetype)
- [\_AlphaCutoffEnable](UnLitTexArrayShader.md#_alphacutoffenable)

### Methods

- [addRenderPass](UnLitTexArrayShader.md#addrenderpass)
- [removeShader](UnLitTexArrayShader.md#removeshader)
- [removeShaderByIndex](UnLitTexArrayShader.md#removeshaderbyindex)
- [getSubShaders](UnLitTexArrayShader.md#getsubshaders)
- [hasSubShaders](UnLitTexArrayShader.md#hassubshaders)
- [getDefaultShaders](UnLitTexArrayShader.md#getdefaultshaders)
- [getDefaultColorShader](UnLitTexArrayShader.md#getdefaultcolorshader)
- [setDefine](UnLitTexArrayShader.md#setdefine)
- [hasDefine](UnLitTexArrayShader.md#hasdefine)
- [deleteDefine](UnLitTexArrayShader.md#deletedefine)
- [setUniform](UnLitTexArrayShader.md#setuniform)
- [setUniformFloat](UnLitTexArrayShader.md#setuniformfloat)
- [setUniformVector2](UnLitTexArrayShader.md#setuniformvector2)
- [setUniformVector3](UnLitTexArrayShader.md#setuniformvector3)
- [setUniformVector4](UnLitTexArrayShader.md#setuniformvector4)
- [setUniformColor](UnLitTexArrayShader.md#setuniformcolor)
- [getUniform](UnLitTexArrayShader.md#getuniform)
- [getUniformFloat](UnLitTexArrayShader.md#getuniformfloat)
- [getUniformVector2](UnLitTexArrayShader.md#getuniformvector2)
- [getUniformVector3](UnLitTexArrayShader.md#getuniformvector3)
- [getUniformVector4](UnLitTexArrayShader.md#getuniformvector4)
- [getUniformColor](UnLitTexArrayShader.md#getuniformcolor)
- [setTexture](UnLitTexArrayShader.md#settexture)
- [getTexture](UnLitTexArrayShader.md#gettexture)
- [setUniformBuffer](UnLitTexArrayShader.md#setuniformbuffer)
- [getUniformBuffer](UnLitTexArrayShader.md#getuniformbuffer)
- [setStorageBuffer](UnLitTexArrayShader.md#setstoragebuffer)
- [getStorageBuffer](UnLitTexArrayShader.md#getstoragebuffer)
- [setStructStorageBuffer](UnLitTexArrayShader.md#setstructstoragebuffer)
- [getStructStorageBuffer](UnLitTexArrayShader.md#getstructstoragebuffer)
- [noticeValueChange](UnLitTexArrayShader.md#noticevaluechange)
- [destroy](UnLitTexArrayShader.md#destroy)
- [clone](UnLitTexArrayShader.md#clone)
- [applyUniform](UnLitTexArrayShader.md#applyuniform)
- [setDefault](UnLitTexArrayShader.md#setdefault)

## Constructors

### constructor

• **new UnLitTexArrayShader**(): [`UnLitTexArrayShader`](UnLitTexArrayShader.md)

#### Returns

[`UnLitTexArrayShader`](UnLitTexArrayShader.md)

#### Overrides

[Shader](Shader.md).[constructor](Shader.md#constructor)

#### Defined in

loader/parser/prefab/mats/shader/UnLitTexArrayShader.ts:15

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

loader/parser/prefab/mats/shader/UnLitTexArrayShader.ts:51

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

loader/parser/prefab/mats/shader/UnLitTexArrayShader.ts:55

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

loader/parser/prefab/mats/shader/UnLitTexArrayShader.ts:59

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

loader/parser/prefab/mats/shader/UnLitTexArrayShader.ts:63

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

loader/parser/prefab/mats/shader/UnLitTexArrayShader.ts:67

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

loader/parser/prefab/mats/shader/UnLitTexArrayShader.ts:71

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

loader/parser/prefab/mats/shader/UnLitTexArrayShader.ts:75

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

loader/parser/prefab/mats/shader/UnLitTexArrayShader.ts:79

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

loader/parser/prefab/mats/shader/UnLitTexArrayShader.ts:83

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

loader/parser/prefab/mats/shader/UnLitTexArrayShader.ts:90

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

loader/parser/prefab/mats/shader/UnLitTexArrayShader.ts:99

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

loader/parser/prefab/mats/shader/UnLitTexArrayShader.ts:44
