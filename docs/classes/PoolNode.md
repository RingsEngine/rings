[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / PoolNode

# Class: PoolNode\<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Constructors

- [constructor](PoolNode.md#constructor)

### Methods

- [pushBack](PoolNode.md#pushback)
- [getUseList](PoolNode.md#getuselist)
- [getOne](PoolNode.md#getone)
- [hasFree](PoolNode.md#hasfree)

## Constructors

### constructor

• **new PoolNode**\<`T`\>(): [`PoolNode`](PoolNode.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`PoolNode`](PoolNode.md)\<`T`\>

#### Defined in

core/pool/ObjectPool.ts:5

## Methods

### pushBack

▸ **pushBack**(`node`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `T` |

#### Returns

`void`

#### Defined in

core/pool/ObjectPool.ts:10

___

### getUseList

▸ **getUseList**(): `T`[]

#### Returns

`T`[]

#### Defined in

core/pool/ObjectPool.ts:18

___

### getOne

▸ **getOne**(`instance`, `param?`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `instance` | (`arg?`: `any`) => `T` |
| `param?` | `any` |

#### Returns

`T`

#### Defined in

core/pool/ObjectPool.ts:22

___

### hasFree

▸ **hasFree**(): `boolean`

#### Returns

`boolean`

#### Defined in

core/pool/ObjectPool.ts:37
