[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / LambertMaterial

# Class: LambertMaterial

Lambert Mateiral
一种无光泽的表面材质，没有镜面高光。

## Hierarchy

- [`Material`](Material.md)

  ↳ **`LambertMaterial`**

## Table of contents

### Constructors

- [constructor](LambertMaterial.md#constructor)

### Properties

- [instanceID](LambertMaterial.md#instanceid)
- [name](LambertMaterial.md#name)
- [enable](LambertMaterial.md#enable)
- [\_shader](LambertMaterial.md#_shader)

### Accessors

- [baseMap](LambertMaterial.md#basemap)
- [baseColor](LambertMaterial.md#basecolor)
- [envMap](LambertMaterial.md#envmap)
- [shadowMap](LambertMaterial.md#shadowmap)
- [shader](LambertMaterial.md#shader)
- [doubleSide](LambertMaterial.md#doubleside)
- [castShadow](LambertMaterial.md#castshadow)
- [acceptShadow](LambertMaterial.md#acceptshadow)
- [castReflection](LambertMaterial.md#castreflection)
- [blendMode](LambertMaterial.md#blendmode)
- [depthCompare](LambertMaterial.md#depthcompare)
- [transparent](LambertMaterial.md#transparent)
- [cullMode](LambertMaterial.md#cullmode)
- [depthWriteEnabled](LambertMaterial.md#depthwriteenabled)
- [useBillboard](LambertMaterial.md#usebillboard)
- [topology](LambertMaterial.md#topology)

### Methods

- [getPass](LambertMaterial.md#getpass)
- [getAllPass](LambertMaterial.md#getallpass)
- [clone](LambertMaterial.md#clone)
- [destroy](LambertMaterial.md#destroy)
- [setDefine](LambertMaterial.md#setdefine)
- [setTexture](LambertMaterial.md#settexture)
- [setStorageBuffer](LambertMaterial.md#setstoragebuffer)
- [setUniformBuffer](LambertMaterial.md#setuniformbuffer)
- [setUniformFloat](LambertMaterial.md#setuniformfloat)
- [setUniformVector2](LambertMaterial.md#setuniformvector2)
- [setUniformVector3](LambertMaterial.md#setuniformvector3)
- [setUniformVector4](LambertMaterial.md#setuniformvector4)
- [setUniformColor](LambertMaterial.md#setuniformcolor)
- [getUniformFloat](LambertMaterial.md#getuniformfloat)
- [getUniformV2](LambertMaterial.md#getuniformv2)
- [getUniformV3](LambertMaterial.md#getuniformv3)
- [getUniformV4](LambertMaterial.md#getuniformv4)
- [getUniformColor](LambertMaterial.md#getuniformcolor)
- [getTexture](LambertMaterial.md#gettexture)
- [getStorageBuffer](LambertMaterial.md#getstoragebuffer)
- [getStructStorageBuffer](LambertMaterial.md#getstructstoragebuffer)
- [getUniformBuffer](LambertMaterial.md#getuniformbuffer)
- [applyUniform](LambertMaterial.md#applyuniform)

## Constructors

### constructor

• **new LambertMaterial**(): [`LambertMaterial`](LambertMaterial.md)

#### Returns

[`LambertMaterial`](LambertMaterial.md)

#### Overrides

[Material](Material.md).[constructor](Material.md#constructor)

#### Defined in

materials/LambertMaterial.ts:22

## Properties

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

### baseMap

• `get` **baseMap**(): [`Texture`](Texture.md)

get base color map texture

#### Returns

[`Texture`](Texture.md)

#### Defined in

materials/LambertMaterial.ts:55

• `set` **baseMap**(`tex`): `void`

set base color map texture

#### Parameters

| Name | Type |
| :------ | :------ |
| `tex` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Defined in

materials/LambertMaterial.ts:48

___

### baseColor

• `get` **baseColor**(): [`Color`](Color.md)

get base color (tint color)

#### Returns

[`Color`](Color.md)

#### Overrides

Material.baseColor

#### Defined in

materials/LambertMaterial.ts:69

• `set` **baseColor**(`color`): `void`

set base color (tint color)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`Color`](Color.md) |

#### Returns

`void`

#### Overrides

Material.baseColor

#### Defined in

materials/LambertMaterial.ts:62

___

### envMap

• `set` **envMap**(`texture`): `void`

set environment texture, usually referring to cubemap

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Defined in

materials/LambertMaterial.ts:76

___

### shadowMap

• `set` **shadowMap**(`texture`): `void`

set shadow map

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Defined in

materials/LambertMaterial.ts:84

___

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
