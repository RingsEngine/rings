[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / BounceInterpolator

# Class: BounceInterpolator

## Implements

- [`TimeInterpolator`](../interfaces/TimeInterpolator.md)

## Table of contents

### Constructors

- [constructor](BounceInterpolator.md#constructor)

### Methods

- [getInterpolation](BounceInterpolator.md#getinterpolation)
- [getBounceInterpolation](BounceInterpolator.md#getbounceinterpolation)
- [geJumpUp](BounceInterpolator.md#gejumpup)

## Constructors

### constructor

• **new BounceInterpolator**(): [`BounceInterpolator`](BounceInterpolator.md)

#### Returns

[`BounceInterpolator`](BounceInterpolator.md)

#### Defined in

math/TimeInterpolator.ts:79

## Methods

### getInterpolation

▸ **getInterpolation**(`t`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `number` |

#### Returns

`number`

#### Implementation of

[TimeInterpolator](../interfaces/TimeInterpolator.md).[getInterpolation](../interfaces/TimeInterpolator.md#getinterpolation)

#### Defined in

math/TimeInterpolator.ts:85

___

### getBounceInterpolation

▸ **getBounceInterpolation**(`t`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `number` |

#### Returns

`number`

#### Defined in

math/TimeInterpolator.ts:93

___

### geJumpUp

▸ **geJumpUp**(`v0`, `t`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v0` | `number` |
| `t` | `number` |

#### Returns

`number`

#### Defined in

math/TimeInterpolator.ts:98
