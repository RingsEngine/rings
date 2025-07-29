[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / FontParser

# Class: FontParser

## Hierarchy

- [`ParserBase`](ParserBase.md)

  ↳ **`FontParser`**

## Table of contents

### Constructors

- [constructor](FontParser.md#constructor)

### Properties

- [format](FontParser.md#format)
- [baseUrl](FontParser.md#baseurl)
- [initUrl](FontParser.md#initurl)
- [loaderFunctions](FontParser.md#loaderfunctions)
- [userData](FontParser.md#userdata)
- [data](FontParser.md#data)

### Methods

- [parseSprite](FontParser.md#parsesprite)
- [verification](FontParser.md#verification)
- [parseString](FontParser.md#parsestring)
- [parseJson](FontParser.md#parsejson)
- [parseBuffer](FontParser.md#parsebuffer)
- [parseTexture](FontParser.md#parsetexture)
- [parse](FontParser.md#parse)
- [parserError](FontParser.md#parsererror)

## Constructors

### constructor

• **new FontParser**(): [`FontParser`](FontParser.md)

#### Returns

[`FontParser`](FontParser.md)

#### Inherited from

[ParserBase](ParserBase.md).[constructor](ParserBase.md#constructor)

## Properties

### format

▪ `Static` **format**: [`ParserFormat`](../enums/ParserFormat.md) = `ParserFormat.TEXT`

#### Overrides

[ParserBase](ParserBase.md).[format](ParserBase.md#format)

#### Defined in

loader/parser/FontParser.ts:52

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

### parseSprite

▸ **parseSprite**(`guiTexture`, `fontData`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `guiTexture` | [`GUITexture`](GUITexture.md)[] |
| `fontData` | [`FontInfo`](FontInfo.md) |

#### Returns

`void`

#### Defined in

loader/parser/FontParser.ts:54

___

### verification

▸ **verification**(): `boolean`

#### Returns

`boolean`

#### Overrides

[ParserBase](ParserBase.md).[verification](ParserBase.md#verification)

#### Defined in

loader/parser/FontParser.ts:79

___

### parseString

▸ **parseString**(`data`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

#### Returns

`Promise`\<`void`\>

#### Overrides

[ParserBase](ParserBase.md).[parseString](ParserBase.md#parsestring)

#### Defined in

loader/parser/FontParser.ts:86

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
