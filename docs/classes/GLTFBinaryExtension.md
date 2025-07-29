[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / GLTFBinaryExtension

# Class: GLTFBinaryExtension

## Table of contents

### Constructors

- [constructor](GLTFBinaryExtension.md#constructor)

### Properties

- [name](GLTFBinaryExtension.md#name)
- [content](GLTFBinaryExtension.md#content)
- [body](GLTFBinaryExtension.md#body)
- [header](GLTFBinaryExtension.md#header)

## Constructors

### constructor

• **new GLTFBinaryExtension**(`data`): [`GLTFBinaryExtension`](GLTFBinaryExtension.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `ArrayBuffer` |

#### Returns

[`GLTFBinaryExtension`](GLTFBinaryExtension.md)

#### Defined in

loader/parser/B3DMParser.ts:52

## Properties

### name

• **name**: `string`

#### Defined in

loader/parser/B3DMParser.ts:47

___

### content

• **content**: `string`

#### Defined in

loader/parser/B3DMParser.ts:48

___

### body

• **body**: `ArrayBuffer`

#### Defined in

loader/parser/B3DMParser.ts:49

___

### header

• **header**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `magic` | `string` |
| `length` | `number` |
| `version` | `number` |

#### Defined in

loader/parser/B3DMParser.ts:50
