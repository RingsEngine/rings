[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / RGBEParser

# Class: RGBEParser

## Hierarchy

- [`ParserBase`](ParserBase.md)

  ↳ **`RGBEParser`**

## Table of contents

### Constructors

- [constructor](RGBEParser.md#constructor)

### Properties

- [format](RGBEParser.md#format)
- [baseUrl](RGBEParser.md#baseurl)
- [initUrl](RGBEParser.md#initurl)
- [loaderFunctions](RGBEParser.md#loaderfunctions)
- [userData](RGBEParser.md#userdata)
- [data](RGBEParser.md#data)

### Methods

- [parseString](RGBEParser.md#parsestring)
- [parseJson](RGBEParser.md#parsejson)
- [parseTexture](RGBEParser.md#parsetexture)
- [parse](RGBEParser.md#parse)
- [parserError](RGBEParser.md#parsererror)
- [parseBuffer](RGBEParser.md#parsebuffer)
- [verification](RGBEParser.md#verification)
- [getTexture](RGBEParser.md#gettexture)
- [getCubeTexture](RGBEParser.md#getcubetexture)
- [getHDRTexture](RGBEParser.md#gethdrtexture)
- [parseError](RGBEParser.md#parseerror)
- [parserBlock](RGBEParser.md#parserblock)
- [paserHeader](RGBEParser.md#paserheader)
- [parserPixel](RGBEParser.md#parserpixel)
- [rbgeToFloat](RGBEParser.md#rbgetofloat)
- [rbgeToHalfFloat](RGBEParser.md#rbgetohalffloat)

## Constructors

### constructor

• **new RGBEParser**(): [`RGBEParser`](RGBEParser.md)

#### Returns

[`RGBEParser`](RGBEParser.md)

#### Inherited from

[ParserBase](ParserBase.md).[constructor](ParserBase.md#constructor)

## Properties

### format

▪ `Static` **format**: [`ParserFormat`](../enums/ParserFormat.md) = `ParserFormat.BIN`

#### Inherited from

[ParserBase](ParserBase.md).[format](ParserBase.md#format)

#### Defined in

loader/parser/ParserBase.ts:6

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

▸ **parseBuffer**(`buffer`): [`Texture`](Texture.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `ArrayBuffer` |

#### Returns

[`Texture`](Texture.md)

#### Overrides

[ParserBase](ParserBase.md).[parseBuffer](ParserBase.md#parsebuffer)

#### Defined in

loader/parser/RGBEParser.ts:35

___

### verification

▸ **verification**(): `boolean`

#### Returns

`boolean`

#### Overrides

[ParserBase](ParserBase.md).[verification](ParserBase.md#verification)

#### Defined in

loader/parser/RGBEParser.ts:66

___

### getTexture

▸ **getTexture**(): [`Texture`](Texture.md)

#### Returns

[`Texture`](Texture.md)

#### Defined in

loader/parser/RGBEParser.ts:75

___

### getCubeTexture

▸ **getCubeTexture**(): [`HDRTextureCube`](HDRTextureCube.md)

#### Returns

[`HDRTextureCube`](HDRTextureCube.md)

#### Defined in

loader/parser/RGBEParser.ts:79

___

### getHDRTexture

▸ **getHDRTexture**(): [`HDRTexture`](HDRTexture.md)

#### Returns

[`HDRTexture`](HDRTexture.md)

#### Defined in

loader/parser/RGBEParser.ts:89

___

### parseError

▸ **parseError**(`rgbe_error_code`, `msg`): [`RGBEErrorCode`](../enums/RGBEErrorCode.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rgbe_error_code` | `any` |
| `msg` | `any` |

#### Returns

[`RGBEErrorCode`](../enums/RGBEErrorCode.md)

#### Defined in

loader/parser/RGBEParser.ts:98

___

### parserBlock

▸ **parserBlock**(`buffer`, `lineLimit?`, `consume?`): `string` \| ``false``

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `Uint8Array`\<`ArrayBufferLike`\> |
| `lineLimit?` | `number` |
| `consume?` | `boolean` |

#### Returns

`string` \| ``false``

#### Defined in

loader/parser/RGBEParser.ts:119

___

### paserHeader

▸ **paserHeader**(`buffer`): `number` \| [`RGBEHeader`](RGBEHeader.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `Uint8Array`\<`ArrayBufferLike`\> |

#### Returns

`number` \| [`RGBEHeader`](RGBEHeader.md)

#### Defined in

loader/parser/RGBEParser.ts:158

___

### parserPixel

▸ **parserPixel**(`buffer`, `w`, `h`): [`RGBEErrorCode`](../enums/RGBEErrorCode.md) \| `Uint8Array`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `any` |
| `w` | `any` |
| `h` | `any` |

#### Returns

[`RGBEErrorCode`](../enums/RGBEErrorCode.md) \| `Uint8Array`\<`any`\>

#### Defined in

loader/parser/RGBEParser.ts:245

___

### rbgeToFloat

▸ **rbgeToFloat**(`sourceArray`, `sourceOffset`, `destArray`, `destOffset`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sourceArray` | `any` |
| `sourceOffset` | `any` |
| `destArray` | `any` |
| `destOffset` | `any` |

#### Returns

`void`

#### Defined in

loader/parser/RGBEParser.ts:353

___

### rbgeToHalfFloat

▸ **rbgeToHalfFloat**(`sourceArray`, `sourceOffset`, `destArray`, `destOffset`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sourceArray` | `any` |
| `sourceOffset` | `any` |
| `destArray` | `any` |
| `destOffset` | `any` |

#### Returns

`void`

#### Defined in

loader/parser/RGBEParser.ts:362
