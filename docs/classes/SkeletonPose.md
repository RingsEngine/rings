[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / SkeletonPose

# Class: SkeletonPose

## Table of contents

### Constructors

- [constructor](SkeletonPose.md#constructor)

### Properties

- [time](SkeletonPose.md#time)
- [\_skeleton](SkeletonPose.md#_skeleton)
- [\_jointsPose](SkeletonPose.md#_jointspose)
- [mJointMatrixIndexTable](SkeletonPose.md#mjointmatrixindextable)

### Accessors

- [numJoint](SkeletonPose.md#numjoint)
- [joints](SkeletonPose.md#joints)
- [jointMatrixIndexTable](SkeletonPose.md#jointmatrixindextable)

### Methods

- [buildSkeletonPose](SkeletonPose.md#buildskeletonpose)
- [lerp](SkeletonPose.md#lerp)
- [copyFrom](SkeletonPose.md#copyfrom)
- [reset](SkeletonPose.md#reset)

## Constructors

### constructor

• **new SkeletonPose**(`skeleton`, `useGlobalMatrix?`): [`SkeletonPose`](SkeletonPose.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `skeleton` | [`Skeleton`](Skeleton.md) | `undefined` |
| `useGlobalMatrix` | `boolean` | `false` |

#### Returns

[`SkeletonPose`](SkeletonPose.md)

#### Defined in

components/anim/skeletonAnim/SkeletonPose.ts:17

## Properties

### time

• **time**: `number`

#### Defined in

components/anim/skeletonAnim/SkeletonPose.ts:12

___

### \_skeleton

• `Protected` **\_skeleton**: [`Skeleton`](Skeleton.md)

#### Defined in

components/anim/skeletonAnim/SkeletonPose.ts:13

___

### \_jointsPose

• `Protected` **\_jointsPose**: [`JointPose`](JointPose.md)[]

#### Defined in

components/anim/skeletonAnim/SkeletonPose.ts:14

___

### mJointMatrixIndexTable

• `Protected` **mJointMatrixIndexTable**: `number`[]

#### Defined in

components/anim/skeletonAnim/SkeletonPose.ts:15

## Accessors

### numJoint

• `get` **numJoint**(): `number`

#### Returns

`number`

#### Defined in

components/anim/skeletonAnim/SkeletonPose.ts:69

___

### joints

• `get` **joints**(): [`JointPose`](JointPose.md)[]

#### Returns

[`JointPose`](JointPose.md)[]

#### Defined in

components/anim/skeletonAnim/SkeletonPose.ts:73

___

### jointMatrixIndexTable

• `get` **jointMatrixIndexTable**(): `number`[]

#### Returns

`number`[]

#### Defined in

components/anim/skeletonAnim/SkeletonPose.ts:77

## Methods

### buildSkeletonPose

▸ **buildSkeletonPose**(`poseData`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `poseData` | `Float32Array`\<`ArrayBufferLike`\> |

#### Returns

`void`

#### Defined in

components/anim/skeletonAnim/SkeletonPose.ts:28

___

### lerp

▸ **lerp**(`a`, `b`, `weight`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`SkeletonPose`](SkeletonPose.md) |
| `b` | [`SkeletonPose`](SkeletonPose.md) |
| `weight` | `number` |

#### Returns

`void`

#### Defined in

components/anim/skeletonAnim/SkeletonPose.ts:81

___

### copyFrom

▸ **copyFrom**(`other`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`SkeletonPose`](SkeletonPose.md) |

#### Returns

`void`

#### Defined in

components/anim/skeletonAnim/SkeletonPose.ts:102

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

components/anim/skeletonAnim/SkeletonPose.ts:110
