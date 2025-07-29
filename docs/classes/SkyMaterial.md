[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / SkyMaterial

# Class: SkyMaterial

## Hierarchy

- [`Material`](Material.md)

  ↳ **`SkyMaterial`**

## Table of contents

### Constructors

- [constructor](SkyMaterial.md#constructor)

### Properties

- [instanceID](SkyMaterial.md#instanceid)
- [name](SkyMaterial.md#name)
- [enable](SkyMaterial.md#enable)
- [\_shader](SkyMaterial.md#_shader)

### Accessors

- [shader](SkyMaterial.md#shader)
- [doubleSide](SkyMaterial.md#doubleside)
- [castShadow](SkyMaterial.md#castshadow)
- [acceptShadow](SkyMaterial.md#acceptshadow)
- [castReflection](SkyMaterial.md#castreflection)
- [blendMode](SkyMaterial.md#blendmode)
- [depthCompare](SkyMaterial.md#depthcompare)
- [transparent](SkyMaterial.md#transparent)
- [cullMode](SkyMaterial.md#cullmode)
- [depthWriteEnabled](SkyMaterial.md#depthwriteenabled)
- [useBillboard](SkyMaterial.md#usebillboard)
- [topology](SkyMaterial.md#topology)
- [baseColor](SkyMaterial.md#basecolor)
- [baseMap](SkyMaterial.md#basemap)
- [envMap](SkyMaterial.md#envmap)
- [shadowMap](SkyMaterial.md#shadowmap)
- [exposure](SkyMaterial.md#exposure)
- [roughness](SkyMaterial.md#roughness)

### Methods

- [getPass](SkyMaterial.md#getpass)
- [getAllPass](SkyMaterial.md#getallpass)
- [clone](SkyMaterial.md#clone)
- [destroy](SkyMaterial.md#destroy)
- [setDefine](SkyMaterial.md#setdefine)
- [setTexture](SkyMaterial.md#settexture)
- [setStorageBuffer](SkyMaterial.md#setstoragebuffer)
- [setUniformBuffer](SkyMaterial.md#setuniformbuffer)
- [setUniformFloat](SkyMaterial.md#setuniformfloat)
- [setUniformVector2](SkyMaterial.md#setuniformvector2)
- [setUniformVector3](SkyMaterial.md#setuniformvector3)
- [setUniformVector4](SkyMaterial.md#setuniformvector4)
- [setUniformColor](SkyMaterial.md#setuniformcolor)
- [getUniformFloat](SkyMaterial.md#getuniformfloat)
- [getUniformV2](SkyMaterial.md#getuniformv2)
- [getUniformV3](SkyMaterial.md#getuniformv3)
- [getUniformV4](SkyMaterial.md#getuniformv4)
- [getUniformColor](SkyMaterial.md#getuniformcolor)
- [getTexture](SkyMaterial.md#gettexture)
- [getStorageBuffer](SkyMaterial.md#getstoragebuffer)
- [getStructStorageBuffer](SkyMaterial.md#getstructstoragebuffer)
- [getUniformBuffer](SkyMaterial.md#getuniformbuffer)
- [applyUniform](SkyMaterial.md#applyuniform)

## Constructors

### constructor

• **new SkyMaterial**(): [`SkyMaterial`](SkyMaterial.md)

#### Returns

[`SkyMaterial`](SkyMaterial.md)

#### Overrides

[Material](Material.md).[constructor](Material.md#constructor)

#### Defined in

materials/SkyMaterial.ts:8

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

___

### baseMap

• `get` **baseMap**(): [`Texture`](Texture.md)

#### Returns

[`Texture`](Texture.md)

#### Defined in

materials/SkyMaterial.ts:26

• `set` **baseMap**(`texture`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Defined in

materials/SkyMaterial.ts:17

___

### envMap

• `set` **envMap**(`texture`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Defined in

materials/SkyMaterial.ts:31

___

### shadowMap

• `set` **shadowMap**(`texture`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Defined in

materials/SkyMaterial.ts:33

___

### exposure

• `get` **exposure**(): `number`

#### Returns

`number`

#### Defined in

materials/SkyMaterial.ts:35

• `set` **exposure**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

materials/SkyMaterial.ts:38

___

### roughness

• `get` **roughness**(): `number`

#### Returns

`number`

#### Defined in

materials/SkyMaterial.ts:42

• `set` **roughness**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

materials/SkyMaterial.ts:46

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
