[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / B3DMLoaderBase

# Class: B3DMLoaderBase

## Hierarchy

- **`B3DMLoaderBase`**

  ↳ [`B3DMLoader`](B3DMLoader.md)

## Table of contents

### Constructors

- [constructor](B3DMLoaderBase.md#constructor)

### Methods

- [parse](B3DMLoaderBase.md#parse)

## Constructors

### constructor

• **new B3DMLoaderBase**(): [`B3DMLoaderBase`](B3DMLoaderBase.md)

#### Returns

[`B3DMLoaderBase`](B3DMLoaderBase.md)

## Methods

### parse

▸ **parse**(`buffer`): `Promise`\<\{ `version`: `number` ; `featureTable`: [`FeatureTable`](FeatureTable.md) ; `batchTable`: [`BatchTable`](BatchTable.md) ; `glbBytes`: `Uint8Array`\<`ArrayBuffer`\>  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `ArrayBuffer` |

#### Returns

`Promise`\<\{ `version`: `number` ; `featureTable`: [`FeatureTable`](FeatureTable.md) ; `batchTable`: [`BatchTable`](BatchTable.md) ; `glbBytes`: `Uint8Array`\<`ArrayBuffer`\>  }\>

#### Defined in

loader/parser/b3dm/B3DMLoaderBase.ts:5
