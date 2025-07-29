[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / DecelerateInterpolator

# Class: DecelerateInterpolator

## Implements

- [`TimeInterpolator`](../interfaces/TimeInterpolator.md)

## Table of contents

### Constructors

- [constructor](DecelerateInterpolator.md#constructor)

### Accessors

- [decelerateInterpolator](DecelerateInterpolator.md#decelerateinterpolator)

### Methods

- [getInterpolation](DecelerateInterpolator.md#getinterpolation)

## Constructors

### constructor

• **new DecelerateInterpolator**(): [`DecelerateInterpolator`](DecelerateInterpolator.md)

#### Returns

[`DecelerateInterpolator`](DecelerateInterpolator.md)

#### Defined in

math/TimeInterpolator.ts:35

## Accessors

### decelerateInterpolator

• `get` **decelerateInterpolator**(): `number`

#### Returns

`number`

#### Defined in

math/TimeInterpolator.ts:37

• `set` **decelerateInterpolator**(`factor`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `factor` | `number` |

#### Returns

`void`

#### Defined in

math/TimeInterpolator.ts:41

## Methods

### getInterpolation

▸ **getInterpolation**(`input`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `number` |

#### Returns

`number`

#### Implementation of

[TimeInterpolator](../interfaces/TimeInterpolator.md).[getInterpolation](../interfaces/TimeInterpolator.md#getinterpolation)

#### Defined in

math/TimeInterpolator.ts:45
