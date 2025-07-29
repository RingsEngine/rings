[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / PrefabMeshParser

# Class: PrefabMeshParser

## Hierarchy

- [`ParserBase`](ParserBase.md)

  ↳ **`PrefabMeshParser`**

## Table of contents

### Constructors

- [constructor](PrefabMeshParser.md#constructor)

### Properties

- [format](PrefabMeshParser.md#format)
- [baseUrl](PrefabMeshParser.md#baseurl)
- [initUrl](PrefabMeshParser.md#initurl)
- [loaderFunctions](PrefabMeshParser.md#loaderfunctions)
- [userData](PrefabMeshParser.md#userdata)
- [data](PrefabMeshParser.md#data)

### Methods

- [parserMeshs](PrefabMeshParser.md#parsermeshs)
- [parseString](PrefabMeshParser.md#parsestring)
- [parseJson](PrefabMeshParser.md#parsejson)
- [parseTexture](PrefabMeshParser.md#parsetexture)
- [parse](PrefabMeshParser.md#parse)
- [parserError](PrefabMeshParser.md#parsererror)
- [parseBuffer](PrefabMeshParser.md#parsebuffer)
- [verification](PrefabMeshParser.md#verification)

## Constructors

### constructor

• **new PrefabMeshParser**(): [`PrefabMeshParser`](PrefabMeshParser.md)

#### Returns

[`PrefabMeshParser`](PrefabMeshParser.md)

#### Inherited from

[ParserBase](ParserBase.md).[constructor](ParserBase.md#constructor)

## Properties

### format

▪ `Static` **format**: [`ParserFormat`](../enums/ParserFormat.md) = `ParserFormat.BIN`

#### Overrides

[ParserBase](ParserBase.md).[format](ParserBase.md#format)

#### Defined in

loader/parser/prefab/PrefabMeshParser.ts:16

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

### parserMeshs

▸ **parserMeshs**(`bytesStream`, `prefabParser`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytesStream` | [`BytesArray`](BytesArray.md) |
| `prefabParser` | [`PrefabParser`](PrefabParser.md) |

#### Returns

`void`

#### Defined in

loader/parser/prefab/PrefabMeshParser.ts:20

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

loader/parser/prefab/PrefabMeshParser.ts:18

___

### verification

▸ **verification**(): `boolean`

#### Returns

`boolean`

#### Overrides

[ParserBase](ParserBase.md).[verification](ParserBase.md#verification)

#### Defined in

loader/parser/prefab/PrefabMeshParser.ts:139
