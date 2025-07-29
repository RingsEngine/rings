[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / PrefabBoneData

# Class: PrefabBoneData

## Table of contents

### Constructors

- [constructor](PrefabBoneData.md#constructor)

### Properties

- [boneName](PrefabBoneData.md#bonename)
- [bonePath](PrefabBoneData.md#bonepath)
- [parentBoneName](PrefabBoneData.md#parentbonename)
- [boneID](PrefabBoneData.md#boneid)
- [parentBoneID](PrefabBoneData.md#parentboneid)
- [instanceID](PrefabBoneData.md#instanceid)
- [parentInstanceID](PrefabBoneData.md#parentinstanceid)
- [t](PrefabBoneData.md#t)
- [q](PrefabBoneData.md#q)
- [s](PrefabBoneData.md#s)

### Methods

- [formBytes](PrefabBoneData.md#formbytes)

## Constructors

### constructor

• **new PrefabBoneData**(): [`PrefabBoneData`](PrefabBoneData.md)

#### Returns

[`PrefabBoneData`](PrefabBoneData.md)

## Properties

### boneName

• **boneName**: `string`

#### Defined in

loader/parser/prefab/prefabData/PrefabBoneData.ts:6

___

### bonePath

• **bonePath**: `string`

#### Defined in

loader/parser/prefab/prefabData/PrefabBoneData.ts:7

___

### parentBoneName

• **parentBoneName**: `string`

#### Defined in

loader/parser/prefab/prefabData/PrefabBoneData.ts:8

___

### boneID

• **boneID**: `number`

#### Defined in

loader/parser/prefab/prefabData/PrefabBoneData.ts:9

___

### parentBoneID

• **parentBoneID**: `number`

#### Defined in

loader/parser/prefab/prefabData/PrefabBoneData.ts:10

___

### instanceID

• **instanceID**: `string`

#### Defined in

loader/parser/prefab/prefabData/PrefabBoneData.ts:11

___

### parentInstanceID

• **parentInstanceID**: `string`

#### Defined in

loader/parser/prefab/prefabData/PrefabBoneData.ts:12

___

### t

• **t**: [`Vector3`](Vector3.md)

#### Defined in

loader/parser/prefab/prefabData/PrefabBoneData.ts:13

___

### q

• **q**: [`Quaternion`](Quaternion.md)

#### Defined in

loader/parser/prefab/prefabData/PrefabBoneData.ts:14

___

### s

• **s**: [`Vector3`](Vector3.md)

#### Defined in

loader/parser/prefab/prefabData/PrefabBoneData.ts:15

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

loader/parser/prefab/prefabData/PrefabBoneData.ts:17
