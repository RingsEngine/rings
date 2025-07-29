[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / I3DMParser

# Class: I3DMParser

## Hierarchy

- [`ParserBase`](ParserBase.md)

  ↳ **`I3DMParser`**

## Table of contents

### Constructors

- [constructor](I3DMParser.md#constructor)

### Properties

- [format](I3DMParser.md#format)
- [baseUrl](I3DMParser.md#baseurl)
- [initUrl](I3DMParser.md#initurl)
- [loaderFunctions](I3DMParser.md#loaderfunctions)
- [userData](I3DMParser.md#userdata)
- [data](I3DMParser.md#data)

### Methods

- [parseBuffer](I3DMParser.md#parsebuffer)
- [verification](I3DMParser.md#verification)
- [parseString](I3DMParser.md#parsestring)
- [parseJson](I3DMParser.md#parsejson)
- [parseTexture](I3DMParser.md#parsetexture)
- [parse](I3DMParser.md#parse)
- [parserError](I3DMParser.md#parsererror)

## Constructors

### constructor

• **new I3DMParser**(): [`I3DMParser`](I3DMParser.md)

#### Returns

[`I3DMParser`](I3DMParser.md)

#### Inherited from

[ParserBase](ParserBase.md).[constructor](ParserBase.md#constructor)

## Properties

### format

▪ `Static` **format**: [`ParserFormat`](../enums/ParserFormat.md) = `ParserFormat.BIN`

#### Overrides

[ParserBase](ParserBase.md).[format](ParserBase.md#format)

#### Defined in

loader/parser/I3DMParser.ts:6

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

loader/parser/I3DMParser.ts:7

___

### verification

▸ **verification**(): `boolean`

#### Returns

`boolean`

#### Overrides

[ParserBase](ParserBase.md).[verification](ParserBase.md#verification)

#### Defined in

loader/parser/I3DMParser.ts:13

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
