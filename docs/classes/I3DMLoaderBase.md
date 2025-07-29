[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / I3DMLoaderBase

# Class: I3DMLoaderBase

## Hierarchy

- **`I3DMLoaderBase`**

  ↳ [`I3DMLoader`](I3DMLoader.md)

## Table of contents

### Constructors

- [constructor](I3DMLoaderBase.md#constructor)

### Methods

- [parse](I3DMLoaderBase.md#parse)

## Constructors

### constructor

• **new I3DMLoaderBase**(): [`I3DMLoaderBase`](I3DMLoaderBase.md)

#### Returns

[`I3DMLoaderBase`](I3DMLoaderBase.md)

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

loader/parser/i3dm/I3DMLoaderBase.ts:5
