[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / SkeletonAnimationClip

# Class: SkeletonAnimationClip

## Table of contents

### Constructors

- [constructor](SkeletonAnimationClip.md#constructor)

### Properties

- [name](SkeletonAnimationClip.md#name)
- [\_skeleton](SkeletonAnimationClip.md#_skeleton)
- [\_skeletonPoses](SkeletonAnimationClip.md#_skeletonposes)
- [\_animationClipData](SkeletonAnimationClip.md#_animationclipdata)
- [\_events](SkeletonAnimationClip.md#_events)

### Accessors

- [totalTime](SkeletonAnimationClip.md#totaltime)
- [frameRate](SkeletonAnimationClip.md#framerate)
- [skeleton](SkeletonAnimationClip.md#skeleton)
- [numFrame](SkeletonAnimationClip.md#numframe)
- [animationClipData](SkeletonAnimationClip.md#animationclipdata)

### Methods

- [getSkeletonPose](SkeletonAnimationClip.md#getskeletonpose)
- [getLerpSkeletonPose](SkeletonAnimationClip.md#getlerpskeletonpose)
- [createSubClip](SkeletonAnimationClip.md#createsubclip)
- [addEvent](SkeletonAnimationClip.md#addevent)
- [removeEvent](SkeletonAnimationClip.md#removeevent)
- [getEvents](SkeletonAnimationClip.md#getevents)

## Constructors

### constructor

• **new SkeletonAnimationClip**(`name`, `skeleton`, `numFrame`, `bufferData`): [`SkeletonAnimationClip`](SkeletonAnimationClip.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `skeleton` | [`Skeleton`](Skeleton.md) |
| `numFrame` | `number` |
| `bufferData` | `Float32Array`\<`ArrayBufferLike`\> |

#### Returns

[`SkeletonAnimationClip`](SkeletonAnimationClip.md)

#### Defined in

components/anim/skeletonAnim/SkeletonAnimationClip.ts:12

## Properties

### name

• **name**: `string` = `""`

#### Defined in

components/anim/skeletonAnim/SkeletonAnimationClip.ts:6

___

### \_skeleton

• `Protected` **\_skeleton**: [`Skeleton`](Skeleton.md)

#### Defined in

components/anim/skeletonAnim/SkeletonAnimationClip.ts:7

___

### \_skeletonPoses

• `Protected` **\_skeletonPoses**: [`SkeletonPose`](SkeletonPose.md)[]

#### Defined in

components/anim/skeletonAnim/SkeletonAnimationClip.ts:8

___

### \_animationClipData

• `Protected` **\_animationClipData**: `Float32Array`\<`ArrayBufferLike`\>

#### Defined in

components/anim/skeletonAnim/SkeletonAnimationClip.ts:9

___

### \_events

• `Protected` **\_events**: [`OAnimationEvent`](OAnimationEvent.md)[]

#### Defined in

components/anim/skeletonAnim/SkeletonAnimationClip.ts:10

## Accessors

### totalTime

• `get` **totalTime**(): `number`

#### Returns

`number`

#### Defined in

components/anim/skeletonAnim/SkeletonAnimationClip.ts:38

___

### frameRate

• `get` **frameRate**(): `number`

#### Returns

`number`

#### Defined in

components/anim/skeletonAnim/SkeletonAnimationClip.ts:42

___

### skeleton

• `get` **skeleton**(): [`Skeleton`](Skeleton.md)

#### Returns

[`Skeleton`](Skeleton.md)

#### Defined in

components/anim/skeletonAnim/SkeletonAnimationClip.ts:46

___

### numFrame

• `get` **numFrame**(): `number`

#### Returns

`number`

#### Defined in

components/anim/skeletonAnim/SkeletonAnimationClip.ts:50

___

### animationClipData

• `get` **animationClipData**(): `Float32Array`\<`ArrayBufferLike`\>

#### Returns

`Float32Array`\<`ArrayBufferLike`\>

#### Defined in

components/anim/skeletonAnim/SkeletonAnimationClip.ts:54

## Methods

### getSkeletonPose

▸ **getSkeletonPose**(`frame`): [`SkeletonPose`](SkeletonPose.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `frame` | `number` |

#### Returns

[`SkeletonPose`](SkeletonPose.md)

#### Defined in

components/anim/skeletonAnim/SkeletonAnimationClip.ts:58

___

### getLerpSkeletonPose

▸ **getLerpSkeletonPose**(`currFrame`, `nextFrame`, `weight`, `dst`): [`SkeletonPose`](SkeletonPose.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `currFrame` | `number` |
| `nextFrame` | `number` |
| `weight` | `number` |
| `dst` | [`SkeletonPose`](SkeletonPose.md) |

#### Returns

[`SkeletonPose`](SkeletonPose.md)

#### Defined in

components/anim/skeletonAnim/SkeletonAnimationClip.ts:62

___

### createSubClip

▸ **createSubClip**(`name`, `startTime`, `endTime`): [`SkeletonAnimationClip`](SkeletonAnimationClip.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `startTime` | `number` |
| `endTime` | `number` |

#### Returns

[`SkeletonAnimationClip`](SkeletonAnimationClip.md)

#### Defined in

components/anim/skeletonAnim/SkeletonAnimationClip.ts:74

___

### addEvent

▸ **addEvent**(`eventName`, `triggerTime`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `triggerTime` | `number` |

#### Returns

`void`

#### Defined in

components/anim/skeletonAnim/SkeletonAnimationClip.ts:95

___

### removeEvent

▸ **removeEvent**(`eventName`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |

#### Returns

`void`

#### Defined in

components/anim/skeletonAnim/SkeletonAnimationClip.ts:102

___

### getEvents

▸ **getEvents**(): [`OAnimationEvent`](OAnimationEvent.md)[]

#### Returns

[`OAnimationEvent`](OAnimationEvent.md)[]

#### Defined in

components/anim/skeletonAnim/SkeletonAnimationClip.ts:108
