[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / ParserBase

# Class: ParserBase

## Hierarchy

- **`ParserBase`**

  ↳ [`AtlasParser`](AtlasParser.md)

  ↳ [`B3DMParser`](B3DMParser.md)

  ↳ [`FontParser`](FontParser.md)

  ↳ [`I3DMParser`](I3DMParser.md)

  ↳ [`OBJParser`](OBJParser.md)

  ↳ [`RGBEParser`](RGBEParser.md)

  ↳ [`GeoJsonParser`](GeoJsonParser.md)

  ↳ [`GLBParser`](GLBParser.md)

  ↳ [`GLTFParser`](GLTFParser.md)

  ↳ [`PrefabAvatarParser`](PrefabAvatarParser.md)

  ↳ [`PrefabMaterialParser`](PrefabMaterialParser.md)

  ↳ [`PrefabMeshParser`](PrefabMeshParser.md)

  ↳ [`PrefabParser`](PrefabParser.md)

  ↳ [`PrefabTextureParser`](PrefabTextureParser.md)

## Table of contents

### Constructors

- [constructor](ParserBase.md#constructor)

### Properties

- [format](ParserBase.md#format)
- [baseUrl](ParserBase.md#baseurl)
- [initUrl](ParserBase.md#initurl)
- [loaderFunctions](ParserBase.md#loaderfunctions)
- [userData](ParserBase.md#userdata)
- [data](ParserBase.md#data)

### Methods

- [parseString](ParserBase.md#parsestring)
- [parseJson](ParserBase.md#parsejson)
- [parseBuffer](ParserBase.md#parsebuffer)
- [parseTexture](ParserBase.md#parsetexture)
- [parse](ParserBase.md#parse)
- [verification](ParserBase.md#verification)
- [parserError](ParserBase.md#parsererror)

## Constructors

### constructor

• **new ParserBase**(): [`ParserBase`](ParserBase.md)

#### Returns

[`ParserBase`](ParserBase.md)

## Properties

### format

▪ `Static` **format**: [`ParserFormat`](../enums/ParserFormat.md) = `ParserFormat.BIN`

#### Defined in

loader/parser/ParserBase.ts:6

___

### baseUrl

• **baseUrl**: `string`

#### Defined in

loader/parser/ParserBase.ts:7

___

### initUrl

• **initUrl**: `string`

#### Defined in

loader/parser/ParserBase.ts:8

___

### loaderFunctions

• `Optional` **loaderFunctions**: [`LoaderFunctions`](../modules.md#loaderfunctions)

#### Defined in

loader/parser/ParserBase.ts:9

___

### userData

• `Optional` **userData**: `any`

#### Defined in

loader/parser/ParserBase.ts:10

___

### data

• **data**: `any`

#### Defined in

loader/parser/ParserBase.ts:11

## Methods

### parseString

▸ **parseString**(`str`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`void`

#### Defined in

loader/parser/ParserBase.ts:12

___

### parseJson

▸ **parseJson**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `object` |

#### Returns

`void`

#### Defined in

loader/parser/ParserBase.ts:13

___

### parseBuffer

▸ **parseBuffer**(`buffer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `ArrayBuffer` |

#### Returns

`void`

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

#### Defined in

loader/parser/ParserBase.ts:18

___

### verification

▸ **verification**(`ret`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ret` | `void` |

#### Returns

`boolean`

#### Defined in

loader/parser/ParserBase.ts:19

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

#### Defined in

loader/parser/ParserBase.ts:22
