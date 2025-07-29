[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / Material

# Class: Material

## Hierarchy

- **`Material`**

  ↳ [`GUIMaterial`](GUIMaterial.md)

  ↳ [`GIProbeMaterial`](GIProbeMaterial.md)

  ↳ [`LambertMaterial`](LambertMaterial.md)

  ↳ [`LitMaterial`](LitMaterial.md)

  ↳ [`ReflectionMaterial`](ReflectionMaterial.md)

  ↳ [`SkyMaterial`](SkyMaterial.md)

  ↳ [`UnLitMaterial`](UnLitMaterial.md)

  ↳ [`UnLitTexArrayMaterial`](UnLitTexArrayMaterial.md)

## Table of contents

### Constructors

- [constructor](Material.md#constructor)

### Properties

- [instanceID](Material.md#instanceid)
- [name](Material.md#name)
- [enable](Material.md#enable)
- [\_shader](Material.md#_shader)

### Accessors

- [shader](Material.md#shader)
- [doubleSide](Material.md#doubleside)
- [castShadow](Material.md#castshadow)
- [acceptShadow](Material.md#acceptshadow)
- [castReflection](Material.md#castreflection)
- [blendMode](Material.md#blendmode)
- [depthCompare](Material.md#depthcompare)
- [transparent](Material.md#transparent)
- [cullMode](Material.md#cullmode)
- [depthWriteEnabled](Material.md#depthwriteenabled)
- [useBillboard](Material.md#usebillboard)
- [topology](Material.md#topology)
- [baseColor](Material.md#basecolor)

### Methods

- [getPass](Material.md#getpass)
- [getAllPass](Material.md#getallpass)
- [clone](Material.md#clone)
- [destroy](Material.md#destroy)
- [setDefine](Material.md#setdefine)
- [setTexture](Material.md#settexture)
- [setStorageBuffer](Material.md#setstoragebuffer)
- [setUniformBuffer](Material.md#setuniformbuffer)
- [setUniformFloat](Material.md#setuniformfloat)
- [setUniformVector2](Material.md#setuniformvector2)
- [setUniformVector3](Material.md#setuniformvector3)
- [setUniformVector4](Material.md#setuniformvector4)
- [setUniformColor](Material.md#setuniformcolor)
- [getUniformFloat](Material.md#getuniformfloat)
- [getUniformV2](Material.md#getuniformv2)
- [getUniformV3](Material.md#getuniformv3)
- [getUniformV4](Material.md#getuniformv4)
- [getUniformColor](Material.md#getuniformcolor)
- [getTexture](Material.md#gettexture)
- [getStorageBuffer](Material.md#getstoragebuffer)
- [getStructStorageBuffer](Material.md#getstructstoragebuffer)
- [getUniformBuffer](Material.md#getuniformbuffer)
- [applyUniform](Material.md#applyuniform)

## Constructors

### constructor

• **new Material**(): [`Material`](Material.md)

#### Returns

[`Material`](Material.md)

#### Defined in

materials/Material.ts:21

## Properties

### instanceID

• **instanceID**: `string`

#### Defined in

materials/Material.ts:15

___

### name

• **name**: `string`

#### Defined in

materials/Material.ts:16

___

### enable

• **enable**: `boolean` = `true`

#### Defined in

materials/Material.ts:17

___

### \_shader

• `Protected` **\_shader**: [`Shader`](Shader.md)

#### Defined in

materials/Material.ts:19

## Accessors

### shader

• `get` **shader**(): [`Shader`](Shader.md)

#### Returns

[`Shader`](Shader.md)

#### Defined in

materials/Material.ts:30

• `set` **shader**(`shader`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shader` | [`Shader`](Shader.md) |

#### Returns

`void`

#### Defined in

materials/Material.ts:25

___

### doubleSide

• `get` **doubleSide**(): `boolean`

#### Returns

`boolean`

#### Defined in

materials/Material.ts:34

• `set` **doubleSide**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

materials/Material.ts:38

___

### castShadow

• `get` **castShadow**(): `boolean`

#### Returns

`boolean`

#### Defined in

materials/Material.ts:42

• `set` **castShadow**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

materials/Material.ts:46

___

### acceptShadow

• `get` **acceptShadow**(): `boolean`

#### Returns

`boolean`

#### Defined in

materials/Material.ts:53

• `set` **acceptShadow**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

materials/Material.ts:57

___

### castReflection

• `get` **castReflection**(): `boolean`

#### Returns

`boolean`

#### Defined in

materials/Material.ts:66

• `set` **castReflection**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

materials/Material.ts:70

___

### blendMode

• `get` **blendMode**(): [`BlendMode`](../enums/BlendMode.md)

#### Returns

[`BlendMode`](../enums/BlendMode.md)

#### Defined in

materials/Material.ts:74

• `set` **blendMode**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`BlendMode`](../enums/BlendMode.md) |

#### Returns

`void`

#### Defined in

materials/Material.ts:78

___

### depthCompare

• `get` **depthCompare**(): `GPUCompareFunction`

#### Returns

`GPUCompareFunction`

#### Defined in

materials/Material.ts:82

• `set` **depthCompare**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUCompareFunction` |

#### Returns

`void`

#### Defined in

materials/Material.ts:86

___

### transparent

• `get` **transparent**(): `boolean`

#### Returns

`boolean`

#### Defined in

materials/Material.ts:95

• `set` **transparent**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

materials/Material.ts:99

___

### cullMode

• `get` **cullMode**(): `GPUCullMode`

#### Returns

`GPUCullMode`

#### Defined in

materials/Material.ts:106

• `set` **cullMode**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUCullMode` |

#### Returns

`void`

#### Defined in

materials/Material.ts:110

___

### depthWriteEnabled

• `get` **depthWriteEnabled**(): `boolean`

#### Returns

`boolean`

#### Defined in

materials/Material.ts:121

• `set` **depthWriteEnabled**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

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

#### Defined in

materials/Material.ts:129

___

### topology

• `get` **topology**(): `GPUPrimitiveTopology`

#### Returns

`GPUPrimitiveTopology`

#### Defined in

materials/Material.ts:133

• `set` **topology**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUPrimitiveTopology` |

#### Returns

`void`

#### Defined in

materials/Material.ts:137

___

### baseColor

• `get` **baseColor**(): [`Color`](Color.md)

#### Returns

[`Color`](Color.md)

#### Defined in

materials/Material.ts:145

• `set` **baseColor**(`color`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`Color`](Color.md) |

#### Returns

`void`

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

#### Defined in

materials/Material.ts:149

___

### getAllPass

▸ **getAllPass**(): [`RenderShaderPass`](RenderShaderPass.md)[]

#### Returns

[`RenderShaderPass`](RenderShaderPass.md)[]

#### Defined in

materials/Material.ts:153

___

### clone

▸ **clone**(): [`Material`](Material.md)

#### Returns

[`Material`](Material.md)

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

#### Defined in

materials/Material.ts:238

___

### applyUniform

▸ **applyUniform**(): `void`

#### Returns

`void`

#### Defined in

materials/Material.ts:242
