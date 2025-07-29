[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / FeatureTable

# Class: FeatureTable

## Hierarchy

- **`FeatureTable`**

  ↳ [`BatchTable`](BatchTable.md)

## Table of contents

### Constructors

- [constructor](FeatureTable.md#constructor)

### Methods

- [getKeys](FeatureTable.md#getkeys)
- [getData](FeatureTable.md#getdata)

## Constructors

### constructor

• **new FeatureTable**(`buffer`, `start`, `headerLength`, `binLength`): [`FeatureTable`](FeatureTable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `any` |
| `start` | `any` |
| `headerLength` | `any` |
| `binLength` | `any` |

#### Returns

[`FeatureTable`](FeatureTable.md)

#### Defined in

loader/parser/b3dm/FeatureTable.ts:9

## Methods

### getKeys

▸ **getKeys**(): `string`[]

#### Returns

`string`[]

#### Defined in

loader/parser/b3dm/FeatureTable.ts:24

___

### getData

▸ **getData**(`key`, `count?`, `defaultComponentType?`, `defaultType?`): `any`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `key` | `any` | `undefined` |
| `count?` | `any` | `undefined` |
| `defaultComponentType` | `any` | `null` |
| `defaultType` | `any` | `null` |

#### Returns

`any`

#### Defined in

loader/parser/b3dm/FeatureTable.ts:28
