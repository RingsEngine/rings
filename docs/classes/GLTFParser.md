[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / GLTFParser

# Class: GLTFParser

## Hierarchy

- [`ParserBase`](ParserBase.md)

  ↳ **`GLTFParser`**

## Table of contents

### Constructors

- [constructor](GLTFParser.md#constructor)

### Properties

- [baseUrl](GLTFParser.md#baseurl)
- [initUrl](GLTFParser.md#initurl)
- [loaderFunctions](GLTFParser.md#loaderfunctions)
- [userData](GLTFParser.md#userdata)
- [data](GLTFParser.md#data)
- [format](GLTFParser.md#format)
- [defaultMaterial](GLTFParser.md#defaultmaterial)

### Methods

- [parseString](GLTFParser.md#parsestring)
- [parseBuffer](GLTFParser.md#parsebuffer)
- [parseTexture](GLTFParser.md#parsetexture)
- [parse](GLTFParser.md#parse)
- [parserError](GLTFParser.md#parsererror)
- [getMeshNameCounter](GLTFParser.md#getmeshnamecounter)
- [getModelNameCounter](GLTFParser.md#getmodelnamecounter)
- [getTexCoordDefine](GLTFParser.md#gettexcoorddefine)
- [getVertexColorDefine](GLTFParser.md#getvertexcolordefine)
- [getBaseColorTextureDefine](GLTFParser.md#getbasecolortexturedefine)
- [getMetalRoughnessDefine](GLTFParser.md#getmetalroughnessdefine)
- [getNormalMapDefine](GLTFParser.md#getnormalmapdefine)
- [getEmissiveMapDefine](GLTFParser.md#getemissivemapdefine)
- [getOcclusionMapDefine](GLTFParser.md#getocclusionmapdefine)
- [getMorphTargetsDefine](GLTFParser.md#getmorphtargetsdefine)
- [getMorphtargetPositionDefine](GLTFParser.md#getmorphtargetpositiondefine)
- [getMorphtargetNormalDefine](GLTFParser.md#getmorphtargetnormaldefine)
- [getMorphtargetTangentDefine](GLTFParser.md#getmorphtargettangentdefine)
- [getJointsNumDefine](GLTFParser.md#getjointsnumdefine)
- [getJointVec8Define](GLTFParser.md#getjointvec8define)
- [getHasNormalDefine](GLTFParser.md#gethasnormaldefine)
- [getHasTangentDefine](GLTFParser.md#gethastangentdefine)
- [getHasNormalMapDefine](GLTFParser.md#gethasnormalmapdefine)
- [getAlphaMaskDefine](GLTFParser.md#getalphamaskdefine)
- [getAlphaBlendDefine](GLTFParser.md#getalphablenddefine)
- [parseJson](GLTFParser.md#parsejson)
- [verification](GLTFParser.md#verification)

## Constructors

### constructor

• **new GLTFParser**(): [`GLTFParser`](GLTFParser.md)

#### Returns

[`GLTFParser`](GLTFParser.md)

#### Inherited from

[ParserBase](ParserBase.md).[constructor](ParserBase.md#constructor)

## Properties

### baseUrl

• **baseUrl**: `string`

#### Inherited from

[ParserBase](ParserBase.md).[baseUrl](ParserBase.md#baseurl)

#### Defined in

loader/parser/ParserBase.ts:7

___

### initUrl

• **initUrl**: `string`

#### Inherited from

[ParserBase](ParserBase.md).[initUrl](ParserBase.md#initurl)

#### Defined in

loader/parser/ParserBase.ts:8

___

### loaderFunctions

• `Optional` **loaderFunctions**: [`LoaderFunctions`](../modules.md#loaderfunctions)

#### Inherited from

[ParserBase](ParserBase.md).[loaderFunctions](ParserBase.md#loaderfunctions)

#### Defined in

loader/parser/ParserBase.ts:9

___

### userData

• `Optional` **userData**: `any`

#### Inherited from

[ParserBase](ParserBase.md).[userData](ParserBase.md#userdata)

#### Defined in

loader/parser/ParserBase.ts:10

___

### data

• **data**: `any`

#### Inherited from

[ParserBase](ParserBase.md).[data](ParserBase.md#data)

#### Defined in

loader/parser/ParserBase.ts:11

___

### format

▪ `Static` **format**: [`ParserFormat`](../enums/ParserFormat.md) = `ParserFormat.JSON`

#### Overrides

[ParserBase](ParserBase.md).[format](ParserBase.md#format)

#### Defined in

loader/parser/gltf/GLTFParser.ts:9

___

### defaultMaterial

▪ `Static` `Readonly` **defaultMaterial**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `alphaCutoff` | `number` |
| `alphaMode` | `string` |
| `pbrMetallicRoughness` | \{ `name`: `string` = "GLTF\_DEFAULT\_MATERIAL"; `defines`: `any`[] = []; `doubleSided`: `boolean` = false; `baseColorFactor`: `number`[] ; `metallicFactor`: `number` = 1; `roughnessFactor`: `number` = 1; `emissiveFactor`: `number`[]  } |
| `pbrMetallicRoughness.name` | `string` |
| `pbrMetallicRoughness.defines` | `any`[] |
| `pbrMetallicRoughness.doubleSided` | `boolean` |
| `pbrMetallicRoughness.baseColorFactor` | `number`[] |
| `pbrMetallicRoughness.metallicFactor` | `number` |
| `pbrMetallicRoughness.roughnessFactor` | `number` |
| `pbrMetallicRoughness.emissiveFactor` | `number`[] |

#### Defined in

loader/parser/gltf/GLTFParser.ts:127

## Methods

### parseString

▸ **parseString**(`str`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`void`

#### Inherited from

[ParserBase](ParserBase.md).[parseString](ParserBase.md#parsestring)

#### Defined in

loader/parser/ParserBase.ts:12

___

### parseBuffer

▸ **parseBuffer**(`buffer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `ArrayBuffer` |

#### Returns

`void`

#### Inherited from

[ParserBase](ParserBase.md).[parseBuffer](ParserBase.md#parsebuffer)

#### Defined in

loader/parser/ParserBase.ts:14

___

### parseTexture

▸ **parseTexture**(`buffer`): [`Texture`](Texture.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `ArrayBuffer` |

#### Returns

[`Texture`](Texture.md)

#### Inherited from

[ParserBase](ParserBase.md).[parseTexture](ParserBase.md#parsetexture)

#### Defined in

loader/parser/ParserBase.ts:15

___

### parse

▸ **parse**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`void`

#### Inherited from

[ParserBase](ParserBase.md).[parse](ParserBase.md#parse)

#### Defined in

loader/parser/ParserBase.ts:18

___

### parserError

▸ **parserError**(`info`, `id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `info` | `string` |
| `id` | `number` |

#### Returns

`void`

#### Inherited from

[ParserBase](ParserBase.md).[parserError](ParserBase.md#parsererror)

#### Defined in

loader/parser/ParserBase.ts:22

___

### getMeshNameCounter

▸ **getMeshNameCounter**(): () => `string`

#### Returns

`fn`

▸ (): `string`

##### Returns

`string`

#### Defined in

loader/parser/gltf/GLTFParser.ts:41

___

### getModelNameCounter

▸ **getModelNameCounter**(): () => `string`

#### Returns

`fn`

▸ (): `string`

##### Returns

`string`

#### Defined in

loader/parser/gltf/GLTFParser.ts:47

___

### getTexCoordDefine

▸ **getTexCoordDefine**(`texNum`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `texNum` | `any` |

#### Returns

`string`

#### Defined in

loader/parser/gltf/GLTFParser.ts:55

___

### getVertexColorDefine

▸ **getVertexColorDefine**(`num`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `any` |

#### Returns

`string`

#### Defined in

loader/parser/gltf/GLTFParser.ts:59

___

### getBaseColorTextureDefine

▸ **getBaseColorTextureDefine**(): `string`

#### Returns

`string`

#### Defined in

loader/parser/gltf/GLTFParser.ts:63

___

### getMetalRoughnessDefine

▸ **getMetalRoughnessDefine**(): `string`

#### Returns

`string`

#### Defined in

loader/parser/gltf/GLTFParser.ts:67

___

### getNormalMapDefine

▸ **getNormalMapDefine**(): `string`

#### Returns

`string`

#### Defined in

loader/parser/gltf/GLTFParser.ts:71

___

### getEmissiveMapDefine

▸ **getEmissiveMapDefine**(): `string`

#### Returns

`string`

#### Defined in

loader/parser/gltf/GLTFParser.ts:75

___

### getOcclusionMapDefine

▸ **getOcclusionMapDefine**(): `string`

#### Returns

`string`

#### Defined in

loader/parser/gltf/GLTFParser.ts:79

___

### getMorphTargetsDefine

▸ **getMorphTargetsDefine**(`targetNum`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetNum` | `any` |

#### Returns

`string`

#### Defined in

loader/parser/gltf/GLTFParser.ts:83

___

### getMorphtargetPositionDefine

▸ **getMorphtargetPositionDefine**(): `string`

#### Returns

`string`

#### Defined in

loader/parser/gltf/GLTFParser.ts:87

___

### getMorphtargetNormalDefine

▸ **getMorphtargetNormalDefine**(): `string`

#### Returns

`string`

#### Defined in

loader/parser/gltf/GLTFParser.ts:91

___

### getMorphtargetTangentDefine

▸ **getMorphtargetTangentDefine**(): `string`

#### Returns

`string`

#### Defined in

loader/parser/gltf/GLTFParser.ts:95

___

### getJointsNumDefine

▸ **getJointsNumDefine**(`num`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `any` |

#### Returns

`string`

#### Defined in

loader/parser/gltf/GLTFParser.ts:99

___

### getJointVec8Define

▸ **getJointVec8Define**(): `string`

#### Returns

`string`

#### Defined in

loader/parser/gltf/GLTFParser.ts:103

___

### getHasNormalDefine

▸ **getHasNormalDefine**(): `string`

#### Returns

`string`

#### Defined in

loader/parser/gltf/GLTFParser.ts:107

___

### getHasTangentDefine

▸ **getHasTangentDefine**(): `string`

#### Returns

`string`

#### Defined in

loader/parser/gltf/GLTFParser.ts:111

___

### getHasNormalMapDefine

▸ **getHasNormalMapDefine**(): `string`

#### Returns

`string`

#### Defined in

loader/parser/gltf/GLTFParser.ts:115

___

### getAlphaMaskDefine

▸ **getAlphaMaskDefine**(): `string`

#### Returns

`string`

#### Defined in

loader/parser/gltf/GLTFParser.ts:119

___

### getAlphaBlendDefine

▸ **getAlphaBlendDefine**(): `string`

#### Returns

`string`

#### Defined in

loader/parser/gltf/GLTFParser.ts:123

___

### parseJson

▸ **parseJson**(`obj`): `Promise`\<[`Object3D`](Object3D.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `object` |

#### Returns

`Promise`\<[`Object3D`](Object3D.md)\>

#### Overrides

[ParserBase](ParserBase.md).[parseJson](ParserBase.md#parsejson)

#### Defined in

loader/parser/gltf/GLTFParser.ts:12

___

### verification

▸ **verification**(): `boolean`

#### Returns

`boolean`

#### Overrides

[ParserBase](ParserBase.md).[verification](ParserBase.md#verification)

#### Defined in

loader/parser/gltf/GLTFParser.ts:33
