[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / BatchTable

# Class: BatchTable

## Hierarchy

- [`FeatureTable`](FeatureTable.md)

  ↳ **`BatchTable`**

## Table of contents

### Constructors

- [constructor](BatchTable.md#constructor)

### Methods

- [getKeys](BatchTable.md#getkeys)
- [getData](BatchTable.md#getdata)

## Constructors

### constructor

• **new BatchTable**(`buffer`, `batchSize`, `start`, `headerLength`, `binLength`): [`BatchTable`](BatchTable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `any` |
| `batchSize` | `any` |
| `start` | `any` |
| `headerLength` | `any` |
| `binLength` | `any` |

#### Returns

[`BatchTable`](BatchTable.md)

#### Overrides

[FeatureTable](FeatureTable.md).[constructor](FeatureTable.md#constructor)

#### Defined in

loader/parser/b3dm/FeatureTable.ts:135

## Methods

### getKeys

▸ **getKeys**(): `string`[]

#### Returns

`string`[]

#### Inherited from

[FeatureTable](FeatureTable.md).[getKeys](FeatureTable.md#getkeys)

#### Defined in

loader/parser/b3dm/FeatureTable.ts:24

___

### getData

▸ **getData**(`key`, `componentType?`, `type?`): `any`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `key` | `any` | `undefined` |
| `componentType` | `any` | `null` |
| `type` | `any` | `null` |

#### Returns

`any`

#### Overrides

[FeatureTable](FeatureTable.md).[getData](FeatureTable.md#getdata)

#### Defined in

loader/parser/b3dm/FeatureTable.ts:140
