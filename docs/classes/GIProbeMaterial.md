[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / GIProbeMaterial

# Class: GIProbeMaterial

## Hierarchy

- [`Material`](Material.md)

  ↳ **`GIProbeMaterial`**

## Table of contents

### Constructors

- [constructor](GIProbeMaterial.md#constructor)

### Properties

- [count](GIProbeMaterial.md#count)
- [instanceID](GIProbeMaterial.md#instanceid)
- [name](GIProbeMaterial.md#name)
- [enable](GIProbeMaterial.md#enable)
- [\_shader](GIProbeMaterial.md#_shader)

### Accessors

- [shader](GIProbeMaterial.md#shader)
- [doubleSide](GIProbeMaterial.md#doubleside)
- [castShadow](GIProbeMaterial.md#castshadow)
- [acceptShadow](GIProbeMaterial.md#acceptshadow)
- [castReflection](GIProbeMaterial.md#castreflection)
- [blendMode](GIProbeMaterial.md#blendmode)
- [depthCompare](GIProbeMaterial.md#depthcompare)
- [transparent](GIProbeMaterial.md#transparent)
- [cullMode](GIProbeMaterial.md#cullmode)
- [depthWriteEnabled](GIProbeMaterial.md#depthwriteenabled)
- [useBillboard](GIProbeMaterial.md#usebillboard)
- [topology](GIProbeMaterial.md#topology)
- [baseColor](GIProbeMaterial.md#basecolor)

### Methods

- [getPass](GIProbeMaterial.md#getpass)
- [getAllPass](GIProbeMaterial.md#getallpass)
- [clone](GIProbeMaterial.md#clone)
- [destroy](GIProbeMaterial.md#destroy)
- [setDefine](GIProbeMaterial.md#setdefine)
- [setTexture](GIProbeMaterial.md#settexture)
- [setStorageBuffer](GIProbeMaterial.md#setstoragebuffer)
- [setUniformBuffer](GIProbeMaterial.md#setuniformbuffer)
- [setUniformFloat](GIProbeMaterial.md#setuniformfloat)
- [setUniformVector2](GIProbeMaterial.md#setuniformvector2)
- [setUniformVector3](GIProbeMaterial.md#setuniformvector3)
- [setUniformVector4](GIProbeMaterial.md#setuniformvector4)
- [setUniformColor](GIProbeMaterial.md#setuniformcolor)
- [getUniformFloat](GIProbeMaterial.md#getuniformfloat)
- [getUniformV2](GIProbeMaterial.md#getuniformv2)
- [getUniformV3](GIProbeMaterial.md#getuniformv3)
- [getUniformV4](GIProbeMaterial.md#getuniformv4)
- [getUniformColor](GIProbeMaterial.md#getuniformcolor)
- [getTexture](GIProbeMaterial.md#gettexture)
- [getStorageBuffer](GIProbeMaterial.md#getstoragebuffer)
- [getStructStorageBuffer](GIProbeMaterial.md#getstructstoragebuffer)
- [getUniformBuffer](GIProbeMaterial.md#getuniformbuffer)
- [applyUniform](GIProbeMaterial.md#applyuniform)

## Constructors

### constructor

• **new GIProbeMaterial**(`type?`, `index?`): [`GIProbeMaterial`](GIProbeMaterial.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `type` | [`GIProbeMaterialType`](../enums/GIProbeMaterialType.md) | `GIProbeMaterialType.CastGI` |
| `index` | `number` | `0` |

#### Returns

[`GIProbeMaterial`](GIProbeMaterial.md)

#### Overrides

[Material](Material.md).[constructor](Material.md#constructor)

#### Defined in

materials/GIProbeMaterial.ts:23

## Properties

### count

▪ `Static` **count**: `number` = `0`

#### Defined in

materials/GIProbeMaterial.ts:21

___

### instanceID

• **instanceID**: `string`

#### Inherited from

[Material](Material.md).[instanceID](Material.md#instanceid)

#### Defined in

materials/Material.ts:15

___

### name

• **name**: `string`

#### Inherited from

[Material](Material.md).[name](Material.md#name)

#### Defined in

materials/Material.ts:16

___

### enable

• **enable**: `boolean` = `true`

#### Inherited from

[Material](Material.md).[enable](Material.md#enable)

#### Defined in

materials/Material.ts:17

___

### \_shader

• `Protected` **\_shader**: [`Shader`](Shader.md)

#### Inherited from

[Material](Material.md).[_shader](Material.md#_shader)

#### Defined in

materials/Material.ts:19

## Accessors

### shader

• `get` **shader**(): [`Shader`](Shader.md)

#### Returns

[`Shader`](Shader.md)

#### Inherited from

Material.shader

#### Defined in

materials/Material.ts:30

• `set` **shader**(`shader`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shader` | [`Shader`](Shader.md) |

#### Returns

`void`

#### Inherited from

Material.shader

#### Defined in

materials/Material.ts:25

___

### doubleSide

• `get` **doubleSide**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Material.doubleSide

#### Defined in

materials/Material.ts:34

• `set` **doubleSide**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

Material.doubleSide

#### Defined in

materials/Material.ts:38

___

### castShadow

• `get` **castShadow**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Material.castShadow

#### Defined in

materials/Material.ts:42

• `set` **castShadow**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

Material.castShadow

#### Defined in

materials/Material.ts:46

___

### acceptShadow

• `get` **acceptShadow**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Material.acceptShadow

#### Defined in

materials/Material.ts:53

• `set` **acceptShadow**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

Material.acceptShadow

#### Defined in

materials/Material.ts:57

___

### castReflection

• `get` **castReflection**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Material.castReflection

#### Defined in

materials/Material.ts:66

• `set` **castReflection**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

Material.castReflection

#### Defined in

materials/Material.ts:70

___

### blendMode

• `get` **blendMode**(): [`BlendMode`](../enums/BlendMode.md)

#### Returns

[`BlendMode`](../enums/BlendMode.md)

#### Inherited from

Material.blendMode

#### Defined in

materials/Material.ts:74

• `set` **blendMode**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`BlendMode`](../enums/BlendMode.md) |

#### Returns

`void`

#### Inherited from

Material.blendMode

#### Defined in

materials/Material.ts:78

___

### depthCompare

• `get` **depthCompare**(): `GPUCompareFunction`

#### Returns

`GPUCompareFunction`

#### Inherited from

Material.depthCompare

#### Defined in

materials/Material.ts:82

• `set` **depthCompare**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUCompareFunction` |

#### Returns

`void`

#### Inherited from

Material.depthCompare

#### Defined in

materials/Material.ts:86

___

### transparent

• `get` **transparent**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Material.transparent

#### Defined in

materials/Material.ts:95

• `set` **transparent**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

Material.transparent

#### Defined in

materials/Material.ts:99

___

### cullMode

• `get` **cullMode**(): `GPUCullMode`

#### Returns

`GPUCullMode`

#### Inherited from

Material.cullMode

#### Defined in

materials/Material.ts:106

• `set` **cullMode**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUCullMode` |

#### Returns

`void`

#### Inherited from

Material.cullMode

#### Defined in

materials/Material.ts:110

___

### depthWriteEnabled

• `get` **depthWriteEnabled**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Material.depthWriteEnabled

#### Defined in

materials/Material.ts:121

• `set` **depthWriteEnabled**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

Material.depthWriteEnabled

#### Defined in

materials/Material.ts:125

___

### useBillboard

• `set` **useBillboard**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

Material.useBillboard

#### Defined in

materials/Material.ts:129

___

### topology

• `get` **topology**(): `GPUPrimitiveTopology`

#### Returns

`GPUPrimitiveTopology`

#### Inherited from

Material.topology

#### Defined in

materials/Material.ts:133

• `set` **topology**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUPrimitiveTopology` |

#### Returns

`void`

#### Inherited from

Material.topology

#### Defined in

materials/Material.ts:137

___

### baseColor

• `get` **baseColor**(): [`Color`](Color.md)

#### Returns

[`Color`](Color.md)

#### Inherited from

Material.baseColor

#### Defined in

materials/Material.ts:145

• `set` **baseColor**(`color`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`Color`](Color.md) |

#### Returns

`void`

#### Inherited from

Material.baseColor

#### Defined in

materials/Material.ts:141

## Methods

### getPass

▸ **getPass**(`passType`): [`RenderShaderPass`](RenderShaderPass.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `passType` | [`PassType`](../enums/PassType.md) |

#### Returns

[`RenderShaderPass`](RenderShaderPass.md)[]

#### Inherited from

[Material](Material.md).[getPass](Material.md#getpass)

#### Defined in

materials/Material.ts:149

___

### getAllPass

▸ **getAllPass**(): [`RenderShaderPass`](RenderShaderPass.md)[]

#### Returns

[`RenderShaderPass`](RenderShaderPass.md)[]

#### Inherited from

[Material](Material.md).[getAllPass](Material.md#getallpass)

#### Defined in

materials/Material.ts:153

___

### clone

▸ **clone**(): [`Material`](Material.md)

#### Returns

[`Material`](Material.md)

#### Inherited from

[Material](Material.md).[clone](Material.md#clone)

#### Defined in

materials/Material.ts:157

___

### destroy

▸ **destroy**(`force`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `force` | `boolean` |

#### Returns

`void`

#### Inherited from

[Material](Material.md).[destroy](Material.md#destroy)

#### Defined in

materials/Material.ts:163

___

### setDefine

▸ **setDefine**(`define`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `define` | `string` |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

[Material](Material.md).[setDefine](Material.md#setdefine)

#### Defined in

materials/Material.ts:170

___

### setTexture

▸ **setTexture**(`propertyName`, `texture`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `propertyName` | `string` |
| `texture` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Inherited from

[Material](Material.md).[setTexture](Material.md#settexture)

#### Defined in

materials/Material.ts:174

___

### setStorageBuffer

▸ **setStorageBuffer**(`propertyName`, `buffer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `propertyName` | `string` |
| `buffer` | [`StorageGPUBuffer`](StorageGPUBuffer.md) |

#### Returns

`void`

#### Inherited from

[Material](Material.md).[setStorageBuffer](Material.md#setstoragebuffer)

#### Defined in

materials/Material.ts:178

___

### setUniformBuffer

▸ **setUniformBuffer**(`propertyName`, `buffer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `propertyName` | `string` |
| `buffer` | [`UniformGPUBuffer`](UniformGPUBuffer.md) |

#### Returns

`void`

#### Inherited from

[Material](Material.md).[setUniformBuffer](Material.md#setuniformbuffer)

#### Defined in

materials/Material.ts:182

___

### setUniformFloat

▸ **setUniformFloat**(`propertyName`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `propertyName` | `string` |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

[Material](Material.md).[setUniformFloat](Material.md#setuniformfloat)

#### Defined in

materials/Material.ts:186

___

### setUniformVector2

▸ **setUniformVector2**(`propertyName`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `propertyName` | `string` |
| `value` | [`Vector2`](Vector2.md) |

#### Returns

`void`

#### Inherited from

[Material](Material.md).[setUniformVector2](Material.md#setuniformvector2)

#### Defined in

materials/Material.ts:190

___

### setUniformVector3

▸ **setUniformVector3**(`propertyName`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `propertyName` | `string` |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Inherited from

[Material](Material.md).[setUniformVector3](Material.md#setuniformvector3)

#### Defined in

materials/Material.ts:194

___

### setUniformVector4

▸ **setUniformVector4**(`propertyName`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `propertyName` | `string` |
| `value` | [`Vector4`](Vector4.md) |

#### Returns

`void`

#### Inherited from

[Material](Material.md).[setUniformVector4](Material.md#setuniformvector4)

#### Defined in

materials/Material.ts:198

___

### setUniformColor

▸ **setUniformColor**(`propertyName`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `propertyName` | `string` |
| `value` | [`Color`](Color.md) |

#### Returns

`void`

#### Inherited from

[Material](Material.md).[setUniformColor](Material.md#setuniformcolor)

#### Defined in

materials/Material.ts:202

___

### getUniformFloat

▸ **getUniformFloat**(`str`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`any`

#### Inherited from

[Material](Material.md).[getUniformFloat](Material.md#getuniformfloat)

#### Defined in

materials/Material.ts:206

___

### getUniformV2

▸ **getUniformV2**(`str`): [`Vector2`](Vector2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

[`Vector2`](Vector2.md)

#### Inherited from

[Material](Material.md).[getUniformV2](Material.md#getuniformv2)

#### Defined in

materials/Material.ts:210

___

### getUniformV3

▸ **getUniformV3**(`str`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[Material](Material.md).[getUniformV3](Material.md#getuniformv3)

#### Defined in

materials/Material.ts:214

___

### getUniformV4

▸ **getUniformV4**(`str`): [`Vector4`](Vector4.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

[`Vector4`](Vector4.md)

#### Inherited from

[Material](Material.md).[getUniformV4](Material.md#getuniformv4)

#### Defined in

materials/Material.ts:218

___

### getUniformColor

▸ **getUniformColor**(`str`): [`Color`](Color.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

[`Color`](Color.md)

#### Inherited from

[Material](Material.md).[getUniformColor](Material.md#getuniformcolor)

#### Defined in

materials/Material.ts:222

___

### getTexture

▸ **getTexture**(`str`): [`Texture`](Texture.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

[`Texture`](Texture.md)

#### Inherited from

[Material](Material.md).[getTexture](Material.md#gettexture)

#### Defined in

materials/Material.ts:226

___

### getStorageBuffer

▸ **getStorageBuffer**(`str`): [`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

[`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Inherited from

[Material](Material.md).[getStorageBuffer](Material.md#getstoragebuffer)

#### Defined in

materials/Material.ts:230

___

### getStructStorageBuffer

▸ **getStructStorageBuffer**(`str`): [`GPUBufferBase`](GPUBufferBase.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

[`GPUBufferBase`](GPUBufferBase.md)

#### Inherited from

[Material](Material.md).[getStructStorageBuffer](Material.md#getstructstoragebuffer)

#### Defined in

materials/Material.ts:234

___

### getUniformBuffer

▸ **getUniformBuffer**(`str`): [`GPUBufferBase`](GPUBufferBase.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

[`GPUBufferBase`](GPUBufferBase.md)

#### Inherited from

[Material](Material.md).[getUniformBuffer](Material.md#getuniformbuffer)

#### Defined in

materials/Material.ts:238

___

### applyUniform

▸ **applyUniform**(): `void`

#### Returns

`void`

#### Inherited from

[Material](Material.md).[applyUniform](Material.md#applyuniform)

#### Defined in

materials/Material.ts:242
