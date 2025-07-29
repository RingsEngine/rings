[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / KV

# Class: KV

## Table of contents

### Constructors

- [constructor](KV.md#constructor)

### Properties

- [key](KV.md#key)
- [type](KV.md#type)

### Methods

- [getValue](KV.md#getvalue)
- [formBytes](KV.md#formbytes)

## Constructors

### constructor

• **new KV**(): [`KV`](KV.md)

#### Returns

[`KV`](KV.md)

## Properties

### key

• **key**: `string`

#### Defined in

loader/parser/prefab/prefabData/KVData.ts:6

___

### type

• **type**: [`ValueEnumType`](../enums/ValueEnumType.md)

#### Defined in

loader/parser/prefab/prefabData/KVData.ts:7

## Methods

### getValue

▸ **getValue**\<`T`\>(): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

`T`

#### Defined in

loader/parser/prefab/prefabData/KVData.ts:10

___

### formBytes

▸ **formBytes**(`matBytes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `matBytes` | [`BytesArray`](BytesArray.md) |

#### Returns

`void`

#### Defined in

loader/parser/prefab/prefabData/KVData.ts:14
