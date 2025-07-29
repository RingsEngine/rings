[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / PrefabParser

# Class: PrefabParser

## Hierarchy

- [`ParserBase`](ParserBase.md)

  ↳ **`PrefabParser`**

## Table of contents

### Constructors

- [constructor](PrefabParser.md#constructor)

### Properties

- [baseUrl](PrefabParser.md#baseurl)
- [initUrl](PrefabParser.md#initurl)
- [useWebp](PrefabParser.md#usewebp)
- [format](PrefabParser.md#format)
- [loaderFunctions](PrefabParser.md#loaderfunctions)
- [userData](PrefabParser.md#userdata)
- [data](PrefabParser.md#data)
- [avatarDic](PrefabParser.md#avatardic)
- [nodeData](PrefabParser.md#nodedata)

### Methods

- [parseString](PrefabParser.md#parsestring)
- [parseJson](PrefabParser.md#parsejson)
- [parseTexture](PrefabParser.md#parsetexture)
- [parse](PrefabParser.md#parse)
- [parserError](PrefabParser.md#parsererror)
- [parseBuffer](PrefabParser.md#parsebuffer)
- [verification](PrefabParser.md#verification)

## Constructors

### constructor

• **new PrefabParser**(): [`PrefabParser`](PrefabParser.md)

#### Returns

[`PrefabParser`](PrefabParser.md)

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

### useWebp

▪ `Static` **useWebp**: `boolean` = `true`

#### Defined in

loader/parser/prefab/PrefabParser.ts:20

___

### format

▪ `Static` **format**: [`ParserFormat`](../enums/ParserFormat.md) = `ParserFormat.BIN`

#### Overrides

[ParserBase](ParserBase.md).[format](ParserBase.md#format)

#### Defined in

loader/parser/prefab/PrefabParser.ts:21

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

### avatarDic

• **avatarDic**: `Object`

#### Index signature

▪ [name: `string`]: [`PrefabAvatarData`](PrefabAvatarData.md)

#### Defined in

loader/parser/prefab/PrefabParser.ts:22

___

### nodeData

• **nodeData**: [`PrefabNode`](PrefabNode.md)

#### Defined in

loader/parser/prefab/PrefabParser.ts:23

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

### parseBuffer

▸ **parseBuffer**(`buffer`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `ArrayBuffer` |

#### Returns

`Promise`\<`void`\>

#### Overrides

[ParserBase](ParserBase.md).[parseBuffer](ParserBase.md#parsebuffer)

#### Defined in

loader/parser/prefab/PrefabParser.ts:24

___

### verification

▸ **verification**(): `boolean`

#### Returns

`boolean`

#### Overrides

[ParserBase](ParserBase.md).[verification](ParserBase.md#verification)

#### Defined in

loader/parser/prefab/PrefabParser.ts:84
