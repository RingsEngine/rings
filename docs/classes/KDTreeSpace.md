[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / KDTreeSpace

# Class: KDTreeSpace

## Table of contents

### Constructors

- [constructor](KDTreeSpace.md#constructor)

### Properties

- [\_spaceDesc](KDTreeSpace.md#_spacedesc)

### Methods

- [getRange](KDTreeSpace.md#getrange)
- [initSpace](KDTreeSpace.md#initspace)
- [isContain](KDTreeSpace.md#iscontain)
- [isInterestRange](KDTreeSpace.md#isinterestrange)
- [splitSpace](KDTreeSpace.md#splitspace)
- [copySpace](KDTreeSpace.md#copyspace)

## Constructors

### constructor

• **new KDTreeSpace**(): [`KDTreeSpace`](KDTreeSpace.md)

#### Returns

[`KDTreeSpace`](KDTreeSpace.md)

## Properties

### \_spaceDesc

• `Protected` **\_spaceDesc**: `Object`

#### Index signature

▪ [key: `string`]: [`KDTreeRange`](KDTreeRange.md)

#### Defined in

core/tree/kdTree/KDTreeSpace.ts:32

## Methods

### getRange

▸ **getRange**(`dimension`): [`KDTreeRange`](KDTreeRange.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimension` | `string` |

#### Returns

[`KDTreeRange`](KDTreeRange.md)

#### Defined in

core/tree/kdTree/KDTreeSpace.ts:34

___

### initSpace

▸ **initSpace**(`dimensions`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimensions` | `string`[] |

#### Returns

`this`

#### Defined in

core/tree/kdTree/KDTreeSpace.ts:38

___

### isContain

▸ **isContain**(`dimension`, `value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimension` | `string` |
| `value` | `number` |

#### Returns

`boolean`

#### Defined in

core/tree/kdTree/KDTreeSpace.ts:47

___

### isInterestRange

▸ **isInterestRange**(`dimension`, `range1`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimension` | `string` |
| `range1` | [`KDTreeRange`](KDTreeRange.md) |

#### Returns

`boolean`

#### Defined in

core/tree/kdTree/KDTreeSpace.ts:52

___

### splitSpace

▸ **splitSpace**(`dimension`, `less`, `value`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimension` | `string` |
| `less` | `boolean` |
| `value` | `number` |

#### Returns

`this`

#### Defined in

core/tree/kdTree/KDTreeSpace.ts:58

___

### copySpace

▸ **copySpace**(`space`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `space` | [`KDTreeSpace`](KDTreeSpace.md) |

#### Returns

`this`

#### Defined in

core/tree/kdTree/KDTreeSpace.ts:65
