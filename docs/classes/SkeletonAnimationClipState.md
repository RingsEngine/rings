[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / SkeletonAnimationClipState

# Class: SkeletonAnimationClipState

## Table of contents

### Constructors

- [constructor](SkeletonAnimationClipState.md#constructor)

### Properties

- [loop](SkeletonAnimationClipState.md#loop)
- [speed](SkeletonAnimationClipState.md#speed)
- [t](SkeletonAnimationClipState.md#t)
- [time](SkeletonAnimationClipState.md#time)
- [weight](SkeletonAnimationClipState.md#weight)
- [currFrame](SkeletonAnimationClipState.md#currframe)
- [lastFrame](SkeletonAnimationClipState.md#lastframe)
- [nextFrame](SkeletonAnimationClipState.md#nextframe)
- [clip](SkeletonAnimationClipState.md#clip)
- [animation](SkeletonAnimationClipState.md#animation)
- [\_isEnd](SkeletonAnimationClipState.md#_isend)
- [\_currSkeletonPose](SkeletonAnimationClipState.md#_currskeletonpose)

### Accessors

- [name](SkeletonAnimationClipState.md#name)
- [currSkeletonPose](SkeletonAnimationClipState.md#currskeletonpose)

### Methods

- [reset](SkeletonAnimationClipState.md#reset)
- [update](SkeletonAnimationClipState.md#update)

## Constructors

### constructor

• **new SkeletonAnimationClipState**(`clip`): [`SkeletonAnimationClipState`](SkeletonAnimationClipState.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `clip` | [`SkeletonAnimationClip`](SkeletonAnimationClip.md) |

#### Returns

[`SkeletonAnimationClipState`](SkeletonAnimationClipState.md)

#### Defined in

components/anim/skeletonAnim/SkeletonAnimationClipState.ts:18

## Properties

### loop

• **loop**: `boolean` = `true`

#### Defined in

components/anim/skeletonAnim/SkeletonAnimationClipState.ts:5

___

### speed

• **speed**: `number` = `1.0`

#### Defined in

components/anim/skeletonAnim/SkeletonAnimationClipState.ts:6

___

### t

• **t**: `number` = `0.0`

#### Defined in

components/anim/skeletonAnim/SkeletonAnimationClipState.ts:7

___

### time

• **time**: `number` = `0.0`

#### Defined in

components/anim/skeletonAnim/SkeletonAnimationClipState.ts:8

___

### weight

• **weight**: `number` = `0`

#### Defined in

components/anim/skeletonAnim/SkeletonAnimationClipState.ts:9

___

### currFrame

• **currFrame**: `number` = `0`

#### Defined in

components/anim/skeletonAnim/SkeletonAnimationClipState.ts:10

___

### lastFrame

• **lastFrame**: `number` = `-1`

#### Defined in

components/anim/skeletonAnim/SkeletonAnimationClipState.ts:11

___

### nextFrame

• **nextFrame**: `number` = `0`

#### Defined in

components/anim/skeletonAnim/SkeletonAnimationClipState.ts:12

___

### clip

• **clip**: [`SkeletonAnimationClip`](SkeletonAnimationClip.md)

#### Defined in

components/anim/skeletonAnim/SkeletonAnimationClipState.ts:13

___

### animation

• **animation**: `any`

#### Defined in

components/anim/skeletonAnim/SkeletonAnimationClipState.ts:14

___

### \_isEnd

• `Protected` **\_isEnd**: `boolean` = `false`

#### Defined in

components/anim/skeletonAnim/SkeletonAnimationClipState.ts:15

___

### \_currSkeletonPose

• `Protected` **\_currSkeletonPose**: [`SkeletonPose`](SkeletonPose.md)

#### Defined in

components/anim/skeletonAnim/SkeletonAnimationClipState.ts:16

## Accessors

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Defined in

components/anim/skeletonAnim/SkeletonAnimationClipState.ts:29

___

### currSkeletonPose

• `get` **currSkeletonPose**(): [`SkeletonPose`](SkeletonPose.md)

#### Returns

[`SkeletonPose`](SkeletonPose.md)

#### Defined in

components/anim/skeletonAnim/SkeletonAnimationClipState.ts:33

## Methods

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

components/anim/skeletonAnim/SkeletonAnimationClipState.ts:23

___

### update

▸ **update**(`delta`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `delta` | `number` |

#### Returns

`void`

#### Defined in

components/anim/skeletonAnim/SkeletonAnimationClipState.ts:37
