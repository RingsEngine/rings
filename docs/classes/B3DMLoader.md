[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / B3DMLoader

# Class: B3DMLoader

## Hierarchy

- [`B3DMLoaderBase`](B3DMLoaderBase.md)

  ↳ **`B3DMLoader`**

## Table of contents

### Constructors

- [constructor](B3DMLoader.md#constructor)

### Properties

- [adjustmentTransform](B3DMLoader.md#adjustmenttransform)

### Methods

- [parse](B3DMLoader.md#parse)
- [decodeText](B3DMLoader.md#decodetext)

## Constructors

### constructor

• **new B3DMLoader**(): [`B3DMLoader`](B3DMLoader.md)

#### Returns

[`B3DMLoader`](B3DMLoader.md)

#### Overrides

[B3DMLoaderBase](B3DMLoaderBase.md).[constructor](B3DMLoaderBase.md#constructor)

#### Defined in

loader/parser/b3dm/B3DMLoader.ts:13

## Properties

### adjustmentTransform

• **adjustmentTransform**: [`Matrix4`](Matrix4.md)

#### Defined in

loader/parser/b3dm/B3DMLoader.ts:9

## Methods

### parse

▸ **parse**(`buffer`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `ArrayBuffer` |

#### Returns

`Promise`\<`any`\>

#### Overrides

[B3DMLoaderBase](B3DMLoaderBase.md).[parse](B3DMLoaderBase.md#parse)

#### Defined in

loader/parser/b3dm/B3DMLoader.ts:19

___

### decodeText

▸ **decodeText**(`array`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `any` |

#### Returns

`string`

#### Defined in

loader/parser/b3dm/B3DMLoader.ts:64
