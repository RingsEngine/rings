[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / PrefabTextureParser

# Class: PrefabTextureParser

## Hierarchy

- [`ParserBase`](ParserBase.md)

  ↳ **`PrefabTextureParser`**

## Table of contents

### Constructors

- [constructor](PrefabTextureParser.md#constructor)

### Properties

- [format](PrefabTextureParser.md#format)
- [baseUrl](PrefabTextureParser.md#baseurl)
- [initUrl](PrefabTextureParser.md#initurl)
- [loaderFunctions](PrefabTextureParser.md#loaderfunctions)
- [userData](PrefabTextureParser.md#userdata)
- [data](PrefabTextureParser.md#data)

### Methods

- [parserTexture](PrefabTextureParser.md#parsertexture)
- [parseString](PrefabTextureParser.md#parsestring)
- [parseJson](PrefabTextureParser.md#parsejson)
- [parseBuffer](PrefabTextureParser.md#parsebuffer)
- [parseTexture](PrefabTextureParser.md#parsetexture)
- [parse](PrefabTextureParser.md#parse)
- [parserError](PrefabTextureParser.md#parsererror)
- [verification](PrefabTextureParser.md#verification)

## Constructors

### constructor

• **new PrefabTextureParser**(): [`PrefabTextureParser`](PrefabTextureParser.md)

#### Returns

[`PrefabTextureParser`](PrefabTextureParser.md)

#### Inherited from

[ParserBase](ParserBase.md).[constructor](ParserBase.md#constructor)

## Properties

### format

▪ `Static` **format**: [`ParserFormat`](../enums/ParserFormat.md) = `ParserFormat.TEXT`

#### Overrides

[ParserBase](ParserBase.md).[format](ParserBase.md#format)

#### Defined in

loader/parser/prefab/PrefabTextureParser.ts:9

___

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

## Methods

### parserTexture

▸ **parserTexture**(`bytesStream`, `prefabParser`, `loaderFunctions`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytesStream` | [`BytesArray`](BytesArray.md) |
| `prefabParser` | [`PrefabParser`](PrefabParser.md) |
| `loaderFunctions` | [`LoaderFunctions`](../modules.md#loaderfunctions) |

#### Returns

`Promise`\<`void`\>

#### Defined in

loader/parser/prefab/PrefabTextureParser.ts:11

___

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

### parseJson

▸ **parseJson**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `object` |

#### Returns

`void`

#### Inherited from

[ParserBase](ParserBase.md).[parseJson](ParserBase.md#parsejson)

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

### verification

▸ **verification**(): `boolean`

#### Returns

`boolean`

#### Overrides

[ParserBase](ParserBase.md).[verification](ParserBase.md#verification)

#### Defined in

loader/parser/prefab/PrefabTextureParser.ts:41
