[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / PrefabAvatarData

# Class: PrefabAvatarData

## Table of contents

### Constructors

- [constructor](PrefabAvatarData.md#constructor)

### Properties

- [name](PrefabAvatarData.md#name)
- [count](PrefabAvatarData.md#count)
- [boneData](PrefabAvatarData.md#bonedata)
- [boneMap](PrefabAvatarData.md#bonemap)

### Methods

- [formBytes](PrefabAvatarData.md#formbytes)

## Constructors

### constructor

• **new PrefabAvatarData**(): [`PrefabAvatarData`](PrefabAvatarData.md)

#### Returns

[`PrefabAvatarData`](PrefabAvatarData.md)

## Properties

### name

• **name**: `string`

#### Defined in

loader/parser/prefab/prefabData/PrefabAvatarData.ts:5

___

### count

• **count**: `number`

#### Defined in

loader/parser/prefab/prefabData/PrefabAvatarData.ts:6

___

### boneData

• **boneData**: [`PrefabBoneData`](PrefabBoneData.md)[]

#### Defined in

loader/parser/prefab/prefabData/PrefabAvatarData.ts:7

___

### boneMap

• **boneMap**: `Map`\<`string`, [`PrefabBoneData`](PrefabBoneData.md)\>

#### Defined in

loader/parser/prefab/prefabData/PrefabAvatarData.ts:8

## Methods

### formBytes

▸ **formBytes**(`bytes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | [`BytesArray`](BytesArray.md) |

#### Returns

`void`

#### Defined in

loader/parser/prefab/prefabData/PrefabAvatarData.ts:9
