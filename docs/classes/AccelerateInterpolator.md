[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / AccelerateInterpolator

# Class: AccelerateInterpolator

## Implements

- [`TimeInterpolator`](../interfaces/TimeInterpolator.md)

## Table of contents

### Constructors

- [constructor](AccelerateInterpolator.md#constructor)

### Accessors

- [accelerateInterpolator](AccelerateInterpolator.md#accelerateinterpolator)

### Methods

- [getInterpolation](AccelerateInterpolator.md#getinterpolation)

## Constructors

### constructor

• **new AccelerateInterpolator**(): [`AccelerateInterpolator`](AccelerateInterpolator.md)

#### Returns

[`AccelerateInterpolator`](AccelerateInterpolator.md)

#### Defined in

math/TimeInterpolator.ts:9

## Accessors

### accelerateInterpolator

• `get` **accelerateInterpolator**(): `number`

#### Returns

`number`

#### Defined in

math/TimeInterpolator.ts:14

• `set` **accelerateInterpolator**(`factor`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `factor` | `number` |

#### Returns

`void`

#### Defined in

math/TimeInterpolator.ts:18

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

math/TimeInterpolator.ts:23
