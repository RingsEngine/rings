[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / GLBParser

# Class: GLBParser

## Hierarchy

- [`ParserBase`](ParserBase.md)

  ↳ **`GLBParser`**

## Table of contents

### Constructors

- [constructor](GLBParser.md#constructor)

### Properties

- [format](GLBParser.md#format)
- [baseUrl](GLBParser.md#baseurl)
- [initUrl](GLBParser.md#initurl)
- [loaderFunctions](GLBParser.md#loaderfunctions)
- [userData](GLBParser.md#userdata)
- [data](GLBParser.md#data)

### Methods

- [parseString](GLBParser.md#parsestring)
- [parseJson](GLBParser.md#parsejson)
- [parseTexture](GLBParser.md#parsetexture)
- [parse](GLBParser.md#parse)
- [parserError](GLBParser.md#parsererror)
- [parseBuffer](GLBParser.md#parsebuffer)
- [parseJsonAndBuffer](GLBParser.md#parsejsonandbuffer)
- [verification](GLBParser.md#verification)

## Constructors

### constructor

• **new GLBParser**(): [`GLBParser`](GLBParser.md)

#### Returns

[`GLBParser`](GLBParser.md)

#### Inherited from

[ParserBase](ParserBase.md).[constructor](ParserBase.md#constructor)

## Properties

### format

▪ `Static` **format**: [`ParserFormat`](../enums/ParserFormat.md) = `ParserFormat.BIN`

#### Overrides

[ParserBase](ParserBase.md).[format](ParserBase.md#format)

#### Defined in

loader/parser/gltf/GLBParser.ts:20

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

▸ **parseBuffer**(`buffer`): `Promise`\<``false`` \| [`Object3D`](Object3D.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `ArrayBuffer` |

#### Returns

`Promise`\<``false`` \| [`Object3D`](Object3D.md)\>

#### Overrides

[ParserBase](ParserBase.md).[parseBuffer](ParserBase.md#parsebuffer)

#### Defined in

loader/parser/gltf/GLBParser.ts:22

___

### parseJsonAndBuffer

▸ **parseJsonAndBuffer**(`obj`, `bin`): `Promise`\<[`Object3D`](Object3D.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `object` |
| `bin` | `ArrayBuffer` |

#### Returns

`Promise`\<[`Object3D`](Object3D.md)\>

#### Defined in

loader/parser/gltf/GLBParser.ts:96

___

### verification

▸ **verification**(): `boolean`

#### Returns

`boolean`

#### Overrides

[ParserBase](ParserBase.md).[verification](ParserBase.md#verification)

#### Defined in

loader/parser/gltf/GLBParser.ts:136
