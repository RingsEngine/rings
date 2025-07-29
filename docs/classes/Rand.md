[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / Rand

# Class: Rand

## Table of contents

### Constructors

- [constructor](Rand.md#constructor)

### Accessors

- [seed](Rand.md#seed)

### Methods

- [getFloatFromInt](Rand.md#getfloatfromint)
- [getByteFromInt](Rand.md#getbytefromint)
- [clone](Rand.md#clone)
- [get](Rand.md#get)
- [getFloat](Rand.md#getfloat)
- [getSignedFloat](Rand.md#getsignedfloat)

## Constructors

### constructor

• **new Rand**(`seed?`): [`Rand`](Rand.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `seed` | `number` | `0` |

#### Returns

[`Rand`](Rand.md)

#### Defined in

math/Rand.ts:9

## Accessors

### seed

• `get` **seed**(): `number`

#### Returns

`number`

#### Defined in

math/Rand.ts:13

• `set` **seed**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

math/Rand.ts:17

## Methods

### getFloatFromInt

▸ **getFloatFromInt**(`value`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`number`

#### Defined in

math/Rand.ts:24

___

### getByteFromInt

▸ **getByteFromInt**(`value`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`number`

#### Defined in

math/Rand.ts:29

___

### clone

▸ **clone**(): [`Rand`](Rand.md)

#### Returns

[`Rand`](Rand.md)

#### Defined in

math/Rand.ts:34

___

### get

▸ **get**(): `number`

#### Returns

`number`

#### Defined in

math/Rand.ts:43

___

### getFloat

▸ **getFloat**(): `number`

#### Returns

`number`

#### Defined in

math/Rand.ts:51

___

### getSignedFloat

▸ **getSignedFloat**(): `number`

#### Returns

`number`

#### Defined in

math/Rand.ts:55
