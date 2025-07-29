[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / AnticipateInterpolator

# Class: AnticipateInterpolator

## Implements

- [`TimeInterpolator`](../interfaces/TimeInterpolator.md)

## Table of contents

### Constructors

- [constructor](AnticipateInterpolator.md#constructor)

### Accessors

- [anticipateInterpolator](AnticipateInterpolator.md#anticipateinterpolator)

### Methods

- [getInterpolation](AnticipateInterpolator.md#getinterpolation)

## Constructors

### constructor

• **new AnticipateInterpolator**(): [`AnticipateInterpolator`](AnticipateInterpolator.md)

#### Returns

[`AnticipateInterpolator`](AnticipateInterpolator.md)

#### Defined in

math/TimeInterpolator.ts:115

## Accessors

### anticipateInterpolator

• `get` **anticipateInterpolator**(): `number`

#### Returns

`number`

#### Defined in

math/TimeInterpolator.ts:119

• `set` **anticipateInterpolator**(`tension`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tension` | `number` |

#### Returns

`void`

#### Defined in

math/TimeInterpolator.ts:123

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

math/TimeInterpolator.ts:127
