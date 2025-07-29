[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / BiMap

# Class: BiMap\<K, V\>

## Type parameters

| Name |
| :------ |
| `K` |
| `V` |

## Hierarchy

- `Map`\<`K`, `V`\>

  ↳ **`BiMap`**

## Table of contents

### Constructors

- [constructor](BiMap.md#constructor)

### Methods

- [delete](BiMap.md#delete)
- [getKey](BiMap.md#getkey)
- [deleteValue](BiMap.md#deletevalue)
- [set](BiMap.md#set)
- [clear](BiMap.md#clear)

## Constructors

### constructor

• **new BiMap**\<`K`, `V`\>(`iterable?`): [`BiMap`](BiMap.md)\<`K`, `V`\>

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable?` | `Iterable`\<readonly [`K`, `V`], `any`, `any`\> |

#### Returns

[`BiMap`](BiMap.md)\<`K`, `V`\>

#### Overrides

Map\&lt;K, V\&gt;.constructor

#### Defined in

math/BiMap.ts:4

## Methods

### delete

▸ **delete**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`boolean`

#### Overrides

Map.delete

#### Defined in

math/BiMap.ts:13

___

### getKey

▸ **getKey**(`value`): `K`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `V` |

#### Returns

`K`

#### Defined in

math/BiMap.ts:22

___

### deleteValue

▸ **deleteValue**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `V` |

#### Returns

`boolean`

#### Defined in

math/BiMap.ts:26

___

### set

▸ **set**(`key`, `value`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |
| `value` | `V` |

#### Returns

`this`

#### Overrides

Map.set

#### Defined in

math/BiMap.ts:32

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Overrides

Map.clear

#### Defined in

math/BiMap.ts:38
