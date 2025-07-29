[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / StandShader

# Class: StandShader

## Hierarchy

- [`Shader`](Shader.md)

  ↳ **`StandShader`**

## Table of contents

### Constructors

- [constructor](StandShader.md#constructor)

### Properties

- [computes](StandShader.md#computes)
- [passShader](StandShader.md#passshader)

### Accessors

- [baseMap](StandShader.md#basemap)
- [baseColor](StandShader.md#basecolor)
- [normalMap](StandShader.md#normalmap)
- [doubleSide](StandShader.md#doubleside)
- [alphaCutoff](StandShader.md#alphacutoff)
- [emissiveColor](StandShader.md#emissivecolor)
- [emissiveIntensity](StandShader.md#emissiveintensity)
- [transformUV1](StandShader.md#transformuv1)
- [uvTransform\_2](StandShader.md#uvtransform_2)
- [depthWriteEnabled](StandShader.md#depthwriteenabled)
- [materialF0](StandShader.md#materialf0)
- [specularColor](StandShader.md#specularcolor)
- [roughness](StandShader.md#roughness)
- [metallic](StandShader.md#metallic)
- [ao](StandShader.md#ao)
- [metallic\_min](StandShader.md#metallic_min)
- [metallic\_max](StandShader.md#metallic_max)
- [roughness\_min](StandShader.md#roughness_min)
- [roughness\_max](StandShader.md#roughness_max)
- [normalScale](StandShader.md#normalscale)
- [maskMap](StandShader.md#maskmap)
- [aoMap](StandShader.md#aomap)
- [clearCoatRoughnessMap](StandShader.md#clearcoatroughnessmap)
- [brdfLUT](StandShader.md#brdflut)
- [emissiveMap](StandShader.md#emissivemap)
- [envIntensity](StandShader.md#envintensity)
- [ior](StandShader.md#ior)
- [clearcoatFactor](StandShader.md#clearcoatfactor)
- [clearcoatRoughnessFactor](StandShader.md#clearcoatroughnessfactor)
- [clearcoatWeight](StandShader.md#clearcoatweight)
- [clearcoatColor](StandShader.md#clearcoatcolor)

### Methods

- [addRenderPass](StandShader.md#addrenderpass)
- [removeShader](StandShader.md#removeshader)
- [removeShaderByIndex](StandShader.md#removeshaderbyindex)
- [getSubShaders](StandShader.md#getsubshaders)
- [hasSubShaders](StandShader.md#hassubshaders)
- [getDefaultShaders](StandShader.md#getdefaultshaders)
- [getDefaultColorShader](StandShader.md#getdefaultcolorshader)
- [setDefine](StandShader.md#setdefine)
- [hasDefine](StandShader.md#hasdefine)
- [deleteDefine](StandShader.md#deletedefine)
- [setUniform](StandShader.md#setuniform)
- [setUniformFloat](StandShader.md#setuniformfloat)
- [setUniformVector2](StandShader.md#setuniformvector2)
- [setUniformVector3](StandShader.md#setuniformvector3)
- [setUniformVector4](StandShader.md#setuniformvector4)
- [setUniformColor](StandShader.md#setuniformcolor)
- [getUniform](StandShader.md#getuniform)
- [getUniformFloat](StandShader.md#getuniformfloat)
- [getUniformVector2](StandShader.md#getuniformvector2)
- [getUniformVector3](StandShader.md#getuniformvector3)
- [getUniformVector4](StandShader.md#getuniformvector4)
- [getUniformColor](StandShader.md#getuniformcolor)
- [setTexture](StandShader.md#settexture)
- [getTexture](StandShader.md#gettexture)
- [setUniformBuffer](StandShader.md#setuniformbuffer)
- [getUniformBuffer](StandShader.md#getuniformbuffer)
- [setStorageBuffer](StandShader.md#setstoragebuffer)
- [getStorageBuffer](StandShader.md#getstoragebuffer)
- [setStructStorageBuffer](StandShader.md#setstructstoragebuffer)
- [getStructStorageBuffer](StandShader.md#getstructstoragebuffer)
- [noticeValueChange](StandShader.md#noticevaluechange)
- [destroy](StandShader.md#destroy)
- [clone](StandShader.md#clone)
- [applyUniform](StandShader.md#applyuniform)
- [setDefault](StandShader.md#setdefault)
- [useCleanCoat](StandShader.md#usecleancoat)

## Constructors

### constructor

• **new StandShader**(): [`StandShader`](StandShader.md)

#### Returns

[`StandShader`](StandShader.md)

#### Overrides

[Shader](Shader.md).[constructor](Shader.md#constructor)

#### Defined in

loader/parser/prefab/mats/shader/StandShader.ts:9

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

### baseMap

• `get` **baseMap**(): [`Texture`](Texture.md)

#### Returns

[`Texture`](Texture.md)

#### Defined in

loader/parser/prefab/mats/shader/StandShader.ts:62

• `set` **baseMap**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Defined in

loader/parser/prefab/mats/shader/StandShader.ts:66

___

### baseColor

• `get` **baseColor**(): [`Color`](Color.md)

#### Returns

[`Color`](Color.md)

#### Defined in

loader/parser/prefab/mats/shader/StandShader.ts:70

• `set` **baseColor**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Color`](Color.md) |

#### Returns

`void`

#### Defined in

loader/parser/prefab/mats/shader/StandShader.ts:74

___

### normalMap

• `get` **normalMap**(): [`Texture`](Texture.md)

#### Returns

[`Texture`](Texture.md)

#### Defined in

loader/parser/prefab/mats/shader/StandShader.ts:78

• `set` **normalMap**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Defined in

loader/parser/prefab/mats/shader/StandShader.ts:82

___

### doubleSide

• `get` **doubleSide**(): `boolean`

#### Returns

`boolean`

#### Defined in

loader/parser/prefab/mats/shader/StandShader.ts:86

• `set` **doubleSide**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

loader/parser/prefab/mats/shader/StandShader.ts:89

___

### alphaCutoff

• `get` **alphaCutoff**(): `any`

#### Returns

`any`

#### Defined in

loader/parser/prefab/mats/shader/StandShader.ts:93

• `set` **alphaCutoff**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`void`

#### Defined in

loader/parser/prefab/mats/shader/StandShader.ts:96

___

### emissiveColor

• `get` **emissiveColor**(): [`Color`](Color.md)

#### Returns

[`Color`](Color.md)

#### Defined in

loader/parser/prefab/mats/shader/StandShader.ts:102

• `set` **emissiveColor**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Color`](Color.md) |

#### Returns

`void`

#### Defined in

loader/parser/prefab/mats/shader/StandShader.ts:106

___

### emissiveIntensity

• `get` **emissiveIntensity**(): `number`

#### Returns

`number`

#### Defined in

loader/parser/prefab/mats/shader/StandShader.ts:110

• `set` **emissiveIntensity**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

loader/parser/prefab/mats/shader/StandShader.ts:114

___

### transformUV1

• `get` **transformUV1**(): [`Vector4`](Vector4.md)

get transformUV1

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

loader/parser/prefab/mats/shader/StandShader.ts:121

• `set` **transformUV1**(`value`): `void`

set transformUV1

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector4`](Vector4.md) |

#### Returns

`void`

#### Defined in

loader/parser/prefab/mats/shader/StandShader.ts:128

___

### uvTransform\_2

• `get` **uvTransform_2**(): [`Vector4`](Vector4.md)

get transformUV2

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

loader/parser/prefab/mats/shader/StandShader.ts:136

• `set` **uvTransform_2**(`value`): `void`

set transformUV2

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector4`](Vector4.md) |

#### Returns

`void`

#### Defined in

loader/parser/prefab/mats/shader/StandShader.ts:143

___

### depthWriteEnabled

• `get` **depthWriteEnabled**(): `boolean`

#### Returns

`boolean`

#### Defined in

loader/parser/prefab/mats/shader/StandShader.ts:148

• `set` **depthWriteEnabled**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

loader/parser/prefab/mats/shader/StandShader.ts:151

___

### materialF0

• `get` **materialF0**(): [`Vector4`](Vector4.md)

get reflectivity

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

loader/parser/prefab/mats/shader/StandShader.ts:158

• `set` **materialF0**(`value`): `void`

set reflectivity

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector4`](Vector4.md) |

#### Returns

`void`

#### Defined in

loader/parser/prefab/mats/shader/StandShader.ts:165

___

### specularColor

• `get` **specularColor**(): [`Color`](Color.md)

get specularColor

#### Returns

[`Color`](Color.md)

#### Defined in

loader/parser/prefab/mats/shader/StandShader.ts:172

• `set` **specularColor**(`value`): `void`

specularColor
set reflectivity

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Color`](Color.md) |

#### Returns

`void`

#### Defined in

loader/parser/prefab/mats/shader/StandShader.ts:179

___

### roughness

• `get` **roughness**(): `number`

get roughness

#### Returns

`number`

#### Defined in

loader/parser/prefab/mats/shader/StandShader.ts:186

• `set` **roughness**(`value`): `void`

set roughness

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

loader/parser/prefab/mats/shader/StandShader.ts:193

___

### metallic

• `get` **metallic**(): `number`

get metallic

#### Returns

`number`

#### Defined in

loader/parser/prefab/mats/shader/StandShader.ts:200

• `set` **metallic**(`value`): `void`

set metallic

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

loader/parser/prefab/mats/shader/StandShader.ts:207

___

### ao

• `get` **ao**(): `number`

get Ambient Occlussion, dealing with the effect of ambient light on object occlusion

#### Returns

`number`

#### Defined in

loader/parser/prefab/mats/shader/StandShader.ts:214

• `set` **ao**(`value`): `void`

set Ambient Occlussion, dealing with the effect of ambient light on object occlusion

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

loader/parser/prefab/mats/shader/StandShader.ts:221

___

### metallic\_min

• `get` **metallic_min**(): `number`

get min metallic

#### Returns

`number`

#### Defined in

loader/parser/prefab/mats/shader/StandShader.ts:228

• `set` **metallic_min**(`value`): `void`

set min metallic

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

loader/parser/prefab/mats/shader/StandShader.ts:235

___

### metallic\_max

• `get` **metallic_max**(): `number`

get max metallic

#### Returns

`number`

#### Defined in

loader/parser/prefab/mats/shader/StandShader.ts:242

• `set` **metallic_max**(`value`): `void`

set max metallic

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

loader/parser/prefab/mats/shader/StandShader.ts:249

___

### roughness\_min

• `get` **roughness_min**(): `number`

get min roughness

#### Returns

`number`

#### Defined in

loader/parser/prefab/mats/shader/StandShader.ts:256

• `set` **roughness_min**(`value`): `void`

set min roughness

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

loader/parser/prefab/mats/shader/StandShader.ts:263

___

### roughness\_max

• `get` **roughness_max**(): `number`

get max roughness

#### Returns

`number`

#### Defined in

loader/parser/prefab/mats/shader/StandShader.ts:270

• `set` **roughness_max**(`value`): `void`

set max roughness

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

loader/parser/prefab/mats/shader/StandShader.ts:277

___

### normalScale

• `get` **normalScale**(): `number`

Get the influence of Normal mapping on materials

#### Returns

`number`

#### Defined in

loader/parser/prefab/mats/shader/StandShader.ts:284

• `set` **normalScale**(`value`): `void`

Set the influence of Normal mapping on materials

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

loader/parser/prefab/mats/shader/StandShader.ts:291

___

### maskMap

• `get` **maskMap**(): [`Texture`](Texture.md)

get Mask Map
R_chanel -> AoMap
G_chanel -> Roughness
B_chanel -> Metallic
A_chanel -> C

#### Returns

[`Texture`](Texture.md)

#### Defined in

loader/parser/prefab/mats/shader/StandShader.ts:302

• `set` **maskMap**(`value`): `void`

set Mask Map
R_chanel -> AoMap
G_chanel -> Roughness
B_chanel -> Metallic
A_chanel -> C

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Defined in

loader/parser/prefab/mats/shader/StandShader.ts:313

___

### aoMap

• `get` **aoMap**(): [`Texture`](Texture.md)

get Ambient Occlussion Map, dealing with the effect of ambient light on object occlusion

#### Returns

[`Texture`](Texture.md)

#### Defined in

loader/parser/prefab/mats/shader/StandShader.ts:336

• `set` **aoMap**(`value`): `void`

set Ambient Occlussion Map, dealing with the effect of ambient light on object occlusion

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Defined in

loader/parser/prefab/mats/shader/StandShader.ts:325

___

### clearCoatRoughnessMap

• `get` **clearCoatRoughnessMap**(): [`Texture`](Texture.md)

get clearCoatRoughnessMap

#### Returns

[`Texture`](Texture.md)

#### Defined in

loader/parser/prefab/mats/shader/StandShader.ts:354

• `set` **clearCoatRoughnessMap**(`value`): `void`

set clearCoatRoughnessMap

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Defined in

loader/parser/prefab/mats/shader/StandShader.ts:343

___

### brdfLUT

• `get` **brdfLUT**(): [`Texture`](Texture.md)

get brdf query map

#### Returns

[`Texture`](Texture.md)

#### Defined in

loader/parser/prefab/mats/shader/StandShader.ts:361

• `set` **brdfLUT**(`value`): `void`

set brdf query map

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Defined in

loader/parser/prefab/mats/shader/StandShader.ts:368

___

### emissiveMap

• `get` **emissiveMap**(): [`Texture`](Texture.md)

get emissive map

#### Returns

[`Texture`](Texture.md)

#### Defined in

loader/parser/prefab/mats/shader/StandShader.ts:376

• `set` **emissiveMap**(`value`): `void`

set emissive map

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Defined in

loader/parser/prefab/mats/shader/StandShader.ts:383

___

### envIntensity

• `get` **envIntensity**(): `number`

get intensity of environment light or color of sampled by texture

#### Returns

`number`

#### Defined in

loader/parser/prefab/mats/shader/StandShader.ts:397

• `set` **envIntensity**(`value`): `void`

set intensity of environment light or color of sampled by texture

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

loader/parser/prefab/mats/shader/StandShader.ts:390

___

### ior

• `get` **ior**(): `number`

get factor of refractive

#### Returns

`number`

#### Defined in

loader/parser/prefab/mats/shader/StandShader.ts:411

• `set` **ior**(`value`): `void`

set factor of refractive

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

loader/parser/prefab/mats/shader/StandShader.ts:404

___

### clearcoatFactor

• `get` **clearcoatFactor**(): `number`

get the factor of the clearcoat

#### Returns

`number`

#### Defined in

loader/parser/prefab/mats/shader/StandShader.ts:433

• `set` **clearcoatFactor**(`value`): `void`

Set the factor of the clearcoat

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

loader/parser/prefab/mats/shader/StandShader.ts:425

___

### clearcoatRoughnessFactor

• `get` **clearcoatRoughnessFactor**(): `number`

get the factor of the clearcoat Roughness

#### Returns

`number`

#### Defined in

loader/parser/prefab/mats/shader/StandShader.ts:451

• `set` **clearcoatRoughnessFactor**(`value`): `void`

set the factor of the clearcoat Roughness

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

loader/parser/prefab/mats/shader/StandShader.ts:440

___

### clearcoatWeight

• `get` **clearcoatWeight**(): `number`

get the weight of the clearcoat

#### Returns

`number`

#### Defined in

loader/parser/prefab/mats/shader/StandShader.ts:467

• `set` **clearcoatWeight**(`value`): `void`

set the weight of the clearcoat

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

loader/parser/prefab/mats/shader/StandShader.ts:459

___

### clearcoatColor

• `get` **clearcoatColor**(): [`Color`](Color.md)

set the color of the clearcoat

#### Returns

[`Color`](Color.md)

#### Defined in

loader/parser/prefab/mats/shader/StandShader.ts:482

• `set` **clearcoatColor**(`value`): `void`

get the color of the clearcoat

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Color`](Color.md) |

#### Returns

`void`

#### Defined in

loader/parser/prefab/mats/shader/StandShader.ts:474

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

loader/parser/prefab/mats/shader/StandShader.ts:28

___

### useCleanCoat

▸ **useCleanCoat**(): `void`

valid USE_CLEARCOAT define in shader

#### Returns

`void`

#### Defined in

loader/parser/prefab/mats/shader/StandShader.ts:418
