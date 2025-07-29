[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / AnticipateOvershootInterpolator

# Class: AnticipateOvershootInterpolator

## Implements

- [`TimeInterpolator`](../interfaces/TimeInterpolator.md)

## Table of contents

### Constructors

- [constructor](AnticipateOvershootInterpolator.md#constructor)

### Methods

- [anticipateOvershootInterpolator](AnticipateOvershootInterpolator.md#anticipateovershootinterpolator)
- [anticipateOvershootInterpolator2](AnticipateOvershootInterpolator.md#anticipateovershootinterpolator2)
- [getInterpolation](AnticipateOvershootInterpolator.md#getinterpolation)

## Constructors

### constructor

• **new AnticipateOvershootInterpolator**(): [`AnticipateOvershootInterpolator`](AnticipateOvershootInterpolator.md)

#### Returns

[`AnticipateOvershootInterpolator`](AnticipateOvershootInterpolator.md)

#### Defined in

math/TimeInterpolator.ts:135

## Methods

### anticipateOvershootInterpolator

▸ **anticipateOvershootInterpolator**(`tension`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tension` | `number` |

#### Returns

`void`

#### Defined in

math/TimeInterpolator.ts:139

___

### anticipateOvershootInterpolator2

▸ **anticipateOvershootInterpolator2**(`tension`, `extraTension`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tension` | `number` |
| `extraTension` | `number` |

#### Returns

`void`

#### Defined in

math/TimeInterpolator.ts:143

___

### getInterpolation

▸ **getInterpolation**(`t`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `any` |

#### Returns

`number`

#### Implementation of

[TimeInterpolator](../interfaces/TimeInterpolator.md).[getInterpolation](../interfaces/TimeInterpolator.md#getinterpolation)

#### Defined in

math/TimeInterpolator.ts:150
