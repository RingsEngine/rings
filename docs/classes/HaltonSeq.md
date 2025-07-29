[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / HaltonSeq

# Class: HaltonSeq

https://en.wikipedia.org/wiki/Halton_sequence
https://baike.baidu.com/item/Halton%20sequence/16697800
Class for generating the Halton low-discrepancy series for Quasi Monte Carlo integration.

## Table of contents

### Constructors

- [constructor](HaltonSeq.md#constructor)

### Methods

- [get](HaltonSeq.md#get)
- [getBase](HaltonSeq.md#getbase)
- [next](HaltonSeq.md#next)
- [get](HaltonSeq.md#get-1)

## Constructors

### constructor

• **new HaltonSeq**(): [`HaltonSeq`](HaltonSeq.md)

#### Returns

[`HaltonSeq`](HaltonSeq.md)

## Methods

### get

▸ **get**(`index`, `radix`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `radix` | `number` |

#### Returns

`number`

#### Defined in

math/HaltonSeq.ts:10

___

### getBase

▸ **getBase**(`index`, `base`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `base` | `number` |

#### Returns

`void`

#### Defined in

math/HaltonSeq.ts:24

___

### next

▸ **next**(): `void`

#### Returns

`void`

#### Defined in

math/HaltonSeq.ts:34

___

### get

▸ **get**(): `number`

#### Returns

`number`

#### Defined in

math/HaltonSeq.ts:48
