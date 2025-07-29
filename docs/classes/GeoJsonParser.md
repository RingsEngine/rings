[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / GeoJsonParser

# Class: GeoJsonParser

## Hierarchy

- [`ParserBase`](ParserBase.md)

  ↳ **`GeoJsonParser`**

## Table of contents

### Constructors

- [constructor](GeoJsonParser.md#constructor)

### Properties

- [format](GeoJsonParser.md#format)
- [baseUrl](GeoJsonParser.md#baseurl)
- [initUrl](GeoJsonParser.md#initurl)
- [loaderFunctions](GeoJsonParser.md#loaderfunctions)
- [userData](GeoJsonParser.md#userdata)
- [data](GeoJsonParser.md#data)
- [json](GeoJsonParser.md#json)

### Methods

- [parseJson](GeoJsonParser.md#parsejson)
- [parseBuffer](GeoJsonParser.md#parsebuffer)
- [parseTexture](GeoJsonParser.md#parsetexture)
- [parse](GeoJsonParser.md#parse)
- [verification](GeoJsonParser.md#verification)
- [parserError](GeoJsonParser.md#parsererror)
- [parseString](GeoJsonParser.md#parsestring)

## Constructors

### constructor

• **new GeoJsonParser**(): [`GeoJsonParser`](GeoJsonParser.md)

#### Returns

[`GeoJsonParser`](GeoJsonParser.md)

#### Inherited from

[ParserBase](ParserBase.md).[constructor](ParserBase.md#constructor)

## Properties

### format

▪ `Static` **format**: [`ParserFormat`](../enums/ParserFormat.md) = `ParserFormat.JSON`

#### Overrides

[ParserBase](ParserBase.md).[format](ParserBase.md#format)

#### Defined in

loader/parser/gis/GeoJsonParser.ts:32

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

___

### json

• **json**: `string`

#### Defined in

loader/parser/gis/GeoJsonParser.ts:33

## Methods

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

### verification

▸ **verification**(`ret`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ret` | `void` |

#### Returns

`boolean`

#### Inherited from

[ParserBase](ParserBase.md).[verification](ParserBase.md#verification)

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

#### Inherited from

[ParserBase](ParserBase.md).[parserError](ParserBase.md#parsererror)

#### Defined in

loader/parser/ParserBase.ts:22

___

### parseString

▸ **parseString**(`data`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`Promise`\<`void`\>

#### Overrides

[ParserBase](ParserBase.md).[parseString](ParserBase.md#parsestring)

#### Defined in

loader/parser/gis/GeoJsonParser.ts:34
