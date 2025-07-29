[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / OBJParser

# Class: OBJParser

## Hierarchy

- [`ParserBase`](ParserBase.md)

  ↳ **`OBJParser`**

## Table of contents

### Constructors

- [constructor](OBJParser.md#constructor)

### Properties

- [format](OBJParser.md#format)
- [matLibs](OBJParser.md#matlibs)
- [geometrys](OBJParser.md#geometrys)
- [facesMaterialsIndex](OBJParser.md#facesmaterialsindex)
- [mtl](OBJParser.md#mtl)
- [mtlUrl](OBJParser.md#mtlurl)
- [baseUrl](OBJParser.md#baseurl)
- [initUrl](OBJParser.md#initurl)
- [loaderFunctions](OBJParser.md#loaderfunctions)
- [userData](OBJParser.md#userdata)
- [data](OBJParser.md#data)

### Methods

- [parseString](OBJParser.md#parsestring)
- [verification](OBJParser.md#verification)
- [parseJson](OBJParser.md#parsejson)
- [parseBuffer](OBJParser.md#parsebuffer)
- [parseTexture](OBJParser.md#parsetexture)
- [parse](OBJParser.md#parse)
- [parserError](OBJParser.md#parsererror)

## Constructors

### constructor

• **new OBJParser**(): [`OBJParser`](OBJParser.md)

#### Returns

[`OBJParser`](OBJParser.md)

#### Inherited from

[ParserBase](ParserBase.md).[constructor](ParserBase.md#constructor)

## Properties

### format

▪ `Static` **format**: [`ParserFormat`](../enums/ParserFormat.md) = `ParserFormat.TEXT`

#### Overrides

[ParserBase](ParserBase.md).[format](ParserBase.md#format)

#### Defined in

loader/parser/OBJParser.ts:49

___

### matLibs

• **matLibs**: `Object`

#### Index signature

▪ [name: `string`]: `MatData`

#### Defined in

loader/parser/OBJParser.ts:56

___

### geometrys

• **geometrys**: `Object`

#### Index signature

▪ [name: `string`]: `GeometryData`

#### Defined in

loader/parser/OBJParser.ts:58

___

### facesMaterialsIndex

• **facesMaterialsIndex**: \{ `materialName`: `string` ; `materialStartIndex`: `number`  }[]

#### Defined in

loader/parser/OBJParser.ts:61

___

### mtl

• **mtl**: `string`

#### Defined in

loader/parser/OBJParser.ts:66

___

### mtlUrl

• **mtlUrl**: `string`

#### Defined in

loader/parser/OBJParser.ts:67

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

▸ **parseString**(`obj`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `string` |

#### Returns

`Promise`\<`string`\>

#### Overrides

[ParserBase](ParserBase.md).[parseString](ParserBase.md#parsestring)

#### Defined in

loader/parser/OBJParser.ts:69

___

### verification

▸ **verification**(): `boolean`

Verify parsing validity

#### Returns

`boolean`

#### Overrides

[ParserBase](ParserBase.md).[verification](ParserBase.md#verification)

#### Defined in

loader/parser/OBJParser.ts:370

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
