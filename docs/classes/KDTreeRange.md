[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / KDTreeRange

# Class: KDTreeRange

## Table of contents

### Constructors

- [constructor](KDTreeRange.md#constructor)

### Properties

- [min](KDTreeRange.md#min)
- [max](KDTreeRange.md#max)

### Methods

- [set](KDTreeRange.md#set)
- [copy](KDTreeRange.md#copy)
- [isInterestRange](KDTreeRange.md#isinterestrange)

## Constructors

### constructor

• **new KDTreeRange**(): [`KDTreeRange`](KDTreeRange.md)

#### Returns

[`KDTreeRange`](KDTreeRange.md)

## Properties

### min

• **min**: `number` = `0`

#### Defined in

core/tree/kdTree/KDTreeSpace.ts:6

___

### max

• **max**: `number` = `0`

#### Defined in

core/tree/kdTree/KDTreeSpace.ts:7

## Methods

### set

▸ **set**(`min`, `max`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `number` |
| `max` | `number` |

#### Returns

`this`

#### Defined in

core/tree/kdTree/KDTreeSpace.ts:9

___

### copy

▸ **copy**(`src`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | [`KDTreeRange`](KDTreeRange.md) |

#### Returns

`this`

#### Defined in

core/tree/kdTree/KDTreeSpace.ts:15

___

### isInterestRange

▸ **isInterestRange**(`src`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | [`KDTreeRange`](KDTreeRange.md) |

#### Returns

`boolean`

#### Defined in

core/tree/kdTree/KDTreeSpace.ts:21
