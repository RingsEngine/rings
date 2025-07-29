[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / Skeleton

# Class: Skeleton

## Table of contents

### Constructors

- [constructor](Skeleton.md#constructor)

### Properties

- [joints](Skeleton.md#joints)

### Accessors

- [numJoint](Skeleton.md#numjoint)

### Methods

- [addJoint](Skeleton.md#addjoint)
- [getJointName](Skeleton.md#getjointname)
- [getJointParentIndex](Skeleton.md#getjointparentindex)
- [getJointByName](Skeleton.md#getjointbyname)

## Constructors

### constructor

• **new Skeleton**(`joints?`): [`Skeleton`](Skeleton.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `joints` | [`Joint`](Joint.md)[] | `[]` |

#### Returns

[`Skeleton`](Skeleton.md)

#### Defined in

components/anim/skeletonAnim/Skeleton.ts:5

## Properties

### joints

• **joints**: [`Joint`](Joint.md)[]

#### Defined in

components/anim/skeletonAnim/Skeleton.ts:4

## Accessors

### numJoint

• `get` **numJoint**(): `number`

#### Returns

`number`

#### Defined in

components/anim/skeletonAnim/Skeleton.ts:9

## Methods

### addJoint

▸ **addJoint**(`joint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `joint` | [`Joint`](Joint.md) |

#### Returns

`void`

#### Defined in

components/anim/skeletonAnim/Skeleton.ts:13

___

### getJointName

▸ **getJointName**(`jointIndex`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `jointIndex` | `number` |

#### Returns

`string`

#### Defined in

components/anim/skeletonAnim/Skeleton.ts:17

___

### getJointParentIndex

▸ **getJointParentIndex**(`jointIndex`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `jointIndex` | `number` |

#### Returns

`number`

#### Defined in

components/anim/skeletonAnim/Skeleton.ts:21

___

### getJointByName

▸ **getJointByName**(`name`): [`Joint`](Joint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`Joint`](Joint.md)

#### Defined in

components/anim/skeletonAnim/Skeleton.ts:26
