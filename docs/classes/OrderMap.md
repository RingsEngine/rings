[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / OrderMap

# Class: OrderMap\<K, V\>

## Type parameters

| Name |
| :------ |
| `K` |
| `V` |

## Hierarchy

- `Map`\<`K`, `V`\>

  ↳ **`OrderMap`**

## Table of contents

### Constructors

- [constructor](OrderMap.md#constructor)

### Properties

- [valueList](OrderMap.md#valuelist)
- [keyList](OrderMap.md#keylist)
- [isChange](OrderMap.md#ischange)

### Methods

- [delete](OrderMap.md#delete)
- [set](OrderMap.md#set)
- [clear](OrderMap.md#clear)

## Constructors

### constructor

• **new OrderMap**\<`K`, `V`\>(`iterable?`, `recordKey?`, `recordValue?`): [`OrderMap`](OrderMap.md)\<`K`, `V`\>

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable?` | `Iterable`\<readonly [`K`, `V`], `any`, `any`\> |
| `recordKey?` | `boolean` |
| `recordValue?` | `boolean` |

#### Returns

[`OrderMap`](OrderMap.md)\<`K`, `V`\>

#### Overrides

Map\&lt;K, V\&gt;.constructor

#### Defined in

math/OrderMap.ts:5

## Properties

### valueList

• `Readonly` **valueList**: `V`[]

#### Defined in

math/OrderMap.ts:2

___

### keyList

• `Readonly` **keyList**: `K`[]

#### Defined in

math/OrderMap.ts:3

___

### isChange

• **isChange**: `boolean` = `true`

#### Defined in

math/OrderMap.ts:4

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

math/OrderMap.ts:22

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

math/OrderMap.ts:51

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Overrides

Map.clear

#### Defined in

math/OrderMap.ts:60
