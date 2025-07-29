[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / FileLoader

# Class: FileLoader

## Hierarchy

- [`LoaderBase`](LoaderBase.md)

  ↳ **`FileLoader`**

## Table of contents

### Constructors

- [constructor](FileLoader.md#constructor)

### Properties

- [baseUrl](FileLoader.md#baseurl)
- [initUrl](FileLoader.md#initurl)

### Methods

- [load](FileLoader.md#load)

## Constructors

### constructor

• **new FileLoader**(): [`FileLoader`](FileLoader.md)

#### Returns

[`FileLoader`](FileLoader.md)

#### Inherited from

[LoaderBase](LoaderBase.md).[constructor](LoaderBase.md#constructor)

#### Defined in

loader/LoaderBase.ts:11

## Properties

### baseUrl

• **baseUrl**: `string` = `""`

#### Inherited from

[LoaderBase](LoaderBase.md).[baseUrl](LoaderBase.md#baseurl)

#### Defined in

loader/LoaderBase.ts:7

___

### initUrl

• **initUrl**: `string`

#### Inherited from

[LoaderBase](LoaderBase.md).[initUrl](LoaderBase.md#initurl)

#### Defined in

loader/LoaderBase.ts:8

## Methods

### load

▸ **load**\<`T`\>(`url`, `c`, `loaderFunctions?`, `userData?`): `Promise`\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ParserBase`](ParserBase.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `c` | [`Parser`](../modules.md#parser)\<`T`\> |
| `loaderFunctions?` | [`LoaderFunctions`](../modules.md#loaderfunctions) |
| `userData?` | `any` |

#### Returns

`Promise`\<`T`\>

#### Defined in

loader/FileLoader.ts:8
