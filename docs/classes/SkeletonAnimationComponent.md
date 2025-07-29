[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / SkeletonAnimationComponent

# Class: SkeletonAnimationComponent

## Hierarchy

- [`ComponentBase`](ComponentBase.md)

  ↳ **`SkeletonAnimationComponent`**

## Table of contents

### Constructors

- [constructor](SkeletonAnimationComponent.md#constructor)

### Properties

- [object3D](SkeletonAnimationComponent.md#object3d)
- [\_eventDispatcher](SkeletonAnimationComponent.md#_eventdispatcher)
- [\_enable](SkeletonAnimationComponent.md#_enable)
- [isDestroyed](SkeletonAnimationComponent.md#isdestroyed)
- [isPlaying](SkeletonAnimationComponent.md#isplaying)
- [timeScale](SkeletonAnimationComponent.md#timescale)
- [\_skeleton](SkeletonAnimationComponent.md#_skeleton)
- [\_clips](SkeletonAnimationComponent.md#_clips)
- [\_clipStates](SkeletonAnimationComponent.md#_clipstates)
- [\_mixSkeletonPose](SkeletonAnimationComponent.md#_mixskeletonpose)
- [\_mixTempSkeletonPose](SkeletonAnimationComponent.md#_mixtempskeletonpose)
- [\_currentClipState](SkeletonAnimationComponent.md#_currentclipstate)
- [\_bindList](SkeletonAnimationComponent.md#_bindlist)
- [\_jointMatrixIndexTableBuffer](SkeletonAnimationComponent.md#_jointmatrixindextablebuffer)
- [\_crossFadeState](SkeletonAnimationComponent.md#_crossfadestate)

### Accessors

- [eventDispatcher](SkeletonAnimationComponent.md#eventdispatcher)
- [isStart](SkeletonAnimationComponent.md#isstart)
- [transform](SkeletonAnimationComponent.md#transform)
- [enable](SkeletonAnimationComponent.md#enable)
- [skeleton](SkeletonAnimationComponent.md#skeleton)
- [finalSkeletonPose](SkeletonAnimationComponent.md#finalskeletonpose)
- [jointMatrixIndexTableBuffer](SkeletonAnimationComponent.md#jointmatrixindextablebuffer)

### Methods

- [init](SkeletonAnimationComponent.md#init)
- [stop](SkeletonAnimationComponent.md#stop)
- [onEnable](SkeletonAnimationComponent.md#onenable)
- [onDisable](SkeletonAnimationComponent.md#ondisable)
- [onLateUpdate](SkeletonAnimationComponent.md#onlateupdate)
- [onBeforeUpdate](SkeletonAnimationComponent.md#onbeforeupdate)
- [onCompute](SkeletonAnimationComponent.md#oncompute)
- [onGraphic](SkeletonAnimationComponent.md#ongraphic)
- [onParentChange](SkeletonAnimationComponent.md#onparentchange)
- [onAddChild](SkeletonAnimationComponent.md#onaddchild)
- [onRemoveChild](SkeletonAnimationComponent.md#onremovechild)
- [copyComponent](SkeletonAnimationComponent.md#copycomponent)
- [beforeDestroy](SkeletonAnimationComponent.md#beforedestroy)
- [destroy](SkeletonAnimationComponent.md#destroy)
- [start](SkeletonAnimationComponent.md#start)
- [getJointIndexTable](SkeletonAnimationComponent.md#getjointindextable)
- [addAnimationClip](SkeletonAnimationComponent.md#addanimationclip)
- [getAnimationClip](SkeletonAnimationComponent.md#getanimationclip)
- [getAnimationClips](SkeletonAnimationComponent.md#getanimationclips)
- [getAnimationClipState](SkeletonAnimationComponent.md#getanimationclipstate)
- [getAnimationClipStates](SkeletonAnimationComponent.md#getanimationclipstates)
- [pause](SkeletonAnimationComponent.md#pause)
- [resume](SkeletonAnimationComponent.md#resume)
- [play](SkeletonAnimationComponent.md#play)
- [crossFade](SkeletonAnimationComponent.md#crossfade)
- [setAnimIsLoop](SkeletonAnimationComponent.md#setanimisloop)
- [addJointBind](SkeletonAnimationComponent.md#addjointbind)
- [removeJointBind](SkeletonAnimationComponent.md#removejointbind)
- [onUpdate](SkeletonAnimationComponent.md#onupdate)
- [cloneTo](SkeletonAnimationComponent.md#cloneto)
- [setCurrentClipState](SkeletonAnimationComponent.md#setcurrentclipstate)

## Constructors

### constructor

• **new SkeletonAnimationComponent**(): [`SkeletonAnimationComponent`](SkeletonAnimationComponent.md)

#### Returns

[`SkeletonAnimationComponent`](SkeletonAnimationComponent.md)

#### Overrides

[ComponentBase](ComponentBase.md).[constructor](ComponentBase.md#constructor)

#### Defined in

components/SkeletonAnimationComponent.ts:28

## Properties

### object3D

• **object3D**: [`Object3D`](Object3D.md) = `null`

#### Inherited from

[ComponentBase](ComponentBase.md).[object3D](ComponentBase.md#object3d)

#### Defined in

components/ComponentBase.ts:9

___

### \_eventDispatcher

• `Protected` **\_eventDispatcher**: [`CEventDispatcher`](CEventDispatcher.md)

#### Inherited from

[ComponentBase](ComponentBase.md).[_eventDispatcher](ComponentBase.md#_eventdispatcher)

#### Defined in

components/ComponentBase.ts:10

___

### \_enable

• `Protected` **\_enable**: `boolean` = `true`

#### Inherited from

[ComponentBase](ComponentBase.md).[_enable](ComponentBase.md#_enable)

#### Defined in

components/ComponentBase.ts:18

___

### isDestroyed

• **isDestroyed**: `boolean` = `false`

#### Inherited from

[ComponentBase](ComponentBase.md).[isDestroyed](ComponentBase.md#isdestroyed)

#### Defined in

components/ComponentBase.ts:20

___

### isPlaying

• **isPlaying**: `boolean` = `true`

#### Defined in

components/SkeletonAnimationComponent.ts:13

___

### timeScale

• **timeScale**: `number` = `1.0`

#### Defined in

components/SkeletonAnimationComponent.ts:14

___

### \_skeleton

• `Protected` **\_skeleton**: [`Skeleton`](Skeleton.md)

#### Defined in

components/SkeletonAnimationComponent.ts:15

___

### \_clips

• `Protected` **\_clips**: [`SkeletonAnimationClip`](SkeletonAnimationClip.md)[] = `[]`

#### Defined in

components/SkeletonAnimationComponent.ts:16

___

### \_clipStates

• `Protected` **\_clipStates**: `Map`\<`string`, [`SkeletonAnimationClipState`](SkeletonAnimationClipState.md)\>

#### Defined in

components/SkeletonAnimationComponent.ts:17

___

### \_mixSkeletonPose

• `Protected` **\_mixSkeletonPose**: [`SkeletonPose`](SkeletonPose.md)

#### Defined in

components/SkeletonAnimationComponent.ts:21

___

### \_mixTempSkeletonPose

• `Protected` **\_mixTempSkeletonPose**: [`SkeletonPose`](SkeletonPose.md)

#### Defined in

components/SkeletonAnimationComponent.ts:22

___

### \_currentClipState

• `Protected` **\_currentClipState**: [`SkeletonAnimationClipState`](SkeletonAnimationClipState.md)

#### Defined in

components/SkeletonAnimationComponent.ts:23

___

### \_bindList

• `Protected` **\_bindList**: `any`[] = `[]`

#### Defined in

components/SkeletonAnimationComponent.ts:24

___

### \_jointMatrixIndexTableBuffer

• `Protected` **\_jointMatrixIndexTableBuffer**: [`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Defined in

components/SkeletonAnimationComponent.ts:25

___

### \_crossFadeState

• `Protected` **\_crossFadeState**: `SkeletonAnimationCrossFadeState`

#### Defined in

components/SkeletonAnimationComponent.ts:26

## Accessors

### eventDispatcher

• `get` **eventDispatcher**(): [`CEventDispatcher`](CEventDispatcher.md)

#### Returns

[`CEventDispatcher`](CEventDispatcher.md)

#### Inherited from

ComponentBase.eventDispatcher

#### Defined in

components/ComponentBase.ts:11

• `set` **eventDispatcher**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`CEventDispatcher`](CEventDispatcher.md) |

#### Returns

`void`

#### Inherited from

ComponentBase.eventDispatcher

#### Defined in

components/ComponentBase.ts:15

___

### isStart

• `get` **isStart**(): `boolean`

#### Returns

`boolean`

#### Inherited from

ComponentBase.isStart

#### Defined in

components/ComponentBase.ts:21

___

### transform

• `get` **transform**(): [`Transform`](Transform.md)

#### Returns

[`Transform`](Transform.md)

#### Inherited from

ComponentBase.transform

#### Defined in

components/ComponentBase.ts:24

___

### enable

• `get` **enable**(): `boolean`

#### Returns

`boolean`

#### Inherited from

ComponentBase.enable

#### Defined in

components/ComponentBase.ts:37

• `set` **enable**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

ComponentBase.enable

#### Defined in

components/ComponentBase.ts:27

___

### skeleton

• `get` **skeleton**(): [`Skeleton`](Skeleton.md)

#### Returns

[`Skeleton`](Skeleton.md)

#### Defined in

components/SkeletonAnimationComponent.ts:48

• `set` **skeleton**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Skeleton`](Skeleton.md) |

#### Returns

`void`

#### Defined in

components/SkeletonAnimationComponent.ts:34

___

### finalSkeletonPose

• `get` **finalSkeletonPose**(): [`SkeletonPose`](SkeletonPose.md)

#### Returns

[`SkeletonPose`](SkeletonPose.md)

#### Defined in

components/SkeletonAnimationComponent.ts:52

___

### jointMatrixIndexTableBuffer

• `get` **jointMatrixIndexTableBuffer**(): [`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Returns

[`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Defined in

components/SkeletonAnimationComponent.ts:56

## Methods

### init

▸ **init**(`param?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `param?` | `any` |

#### Returns

`void`

#### Inherited from

[ComponentBase](ComponentBase.md).[init](ComponentBase.md#init)

#### Defined in

components/ComponentBase.ts:77

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

[ComponentBase](ComponentBase.md).[stop](ComponentBase.md#stop)

#### Defined in

components/ComponentBase.ts:79

___

### onEnable

▸ **onEnable**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`any`

#### Inherited from

[ComponentBase](ComponentBase.md).[onEnable](ComponentBase.md#onenable)

#### Defined in

components/ComponentBase.ts:80

___

### onDisable

▸ **onDisable**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`any`

#### Inherited from

[ComponentBase](ComponentBase.md).[onDisable](ComponentBase.md#ondisable)

#### Defined in

components/ComponentBase.ts:81

___

### onLateUpdate

▸ **onLateUpdate**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`any`

#### Inherited from

[ComponentBase](ComponentBase.md).[onLateUpdate](ComponentBase.md#onlateupdate)

#### Defined in

components/ComponentBase.ts:83

___

### onBeforeUpdate

▸ **onBeforeUpdate**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`any`

#### Inherited from

[ComponentBase](ComponentBase.md).[onBeforeUpdate](ComponentBase.md#onbeforeupdate)

#### Defined in

components/ComponentBase.ts:84

___

### onCompute

▸ **onCompute**(`view?`, `command?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |
| `command?` | `GPUCommandEncoder` |

#### Returns

`any`

#### Inherited from

[ComponentBase](ComponentBase.md).[onCompute](ComponentBase.md#oncompute)

#### Defined in

components/ComponentBase.ts:85

___

### onGraphic

▸ **onGraphic**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`any`

#### Inherited from

[ComponentBase](ComponentBase.md).[onGraphic](ComponentBase.md#ongraphic)

#### Defined in

components/ComponentBase.ts:86

___

### onParentChange

▸ **onParentChange**(`lastParent?`, `currentParent?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lastParent?` | [`Object3D`](Object3D.md) |
| `currentParent?` | [`Object3D`](Object3D.md) |

#### Returns

`any`

#### Inherited from

[ComponentBase](ComponentBase.md).[onParentChange](ComponentBase.md#onparentchange)

#### Defined in

components/ComponentBase.ts:87

___

### onAddChild

▸ **onAddChild**(`child`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Object3D`](Object3D.md) |

#### Returns

`any`

#### Inherited from

[ComponentBase](ComponentBase.md).[onAddChild](ComponentBase.md#onaddchild)

#### Defined in

components/ComponentBase.ts:88

___

### onRemoveChild

▸ **onRemoveChild**(`child`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Object3D`](Object3D.md) |

#### Returns

`any`

#### Inherited from

[ComponentBase](ComponentBase.md).[onRemoveChild](ComponentBase.md#onremovechild)

#### Defined in

components/ComponentBase.ts:89

___

### copyComponent

▸ **copyComponent**(`from`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `this` |

#### Returns

`this`

#### Inherited from

[ComponentBase](ComponentBase.md).[copyComponent](ComponentBase.md#copycomponent)

#### Defined in

components/ComponentBase.ts:91

___

### beforeDestroy

▸ **beforeDestroy**(`force?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `force?` | `boolean` |

#### Returns

`void`

#### Inherited from

[ComponentBase](ComponentBase.md).[beforeDestroy](ComponentBase.md#beforedestroy)

#### Defined in

components/ComponentBase.ts:135

___

### destroy

▸ **destroy**(`force?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `force?` | `boolean` |

#### Returns

`void`

#### Inherited from

[ComponentBase](ComponentBase.md).[destroy](ComponentBase.md#destroy)

#### Defined in

components/ComponentBase.ts:139

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[start](ComponentBase.md#start)

#### Defined in

components/SkeletonAnimationComponent.ts:32

___

### getJointIndexTable

▸ **getJointIndexTable**(`skinJointsName`): `number`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `skinJointsName` | `string`[] |

#### Returns

`number`[]

#### Defined in

components/SkeletonAnimationComponent.ts:60

___

### addAnimationClip

▸ **addAnimationClip**(`clip`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `clip` | [`SkeletonAnimationClip`](SkeletonAnimationClip.md) |

#### Returns

`void`

#### Defined in

components/SkeletonAnimationComponent.ts:70

___

### getAnimationClip

▸ **getAnimationClip**(`name`): [`SkeletonAnimationClip`](SkeletonAnimationClip.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`SkeletonAnimationClip`](SkeletonAnimationClip.md)

#### Defined in

components/SkeletonAnimationComponent.ts:82

___

### getAnimationClips

▸ **getAnimationClips**(): [`SkeletonAnimationClip`](SkeletonAnimationClip.md)[]

#### Returns

[`SkeletonAnimationClip`](SkeletonAnimationClip.md)[]

#### Defined in

components/SkeletonAnimationComponent.ts:90

___

### getAnimationClipState

▸ **getAnimationClipState**(`name`): [`SkeletonAnimationClipState`](SkeletonAnimationClipState.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`SkeletonAnimationClipState`](SkeletonAnimationClipState.md)

#### Defined in

components/SkeletonAnimationComponent.ts:94

___

### getAnimationClipStates

▸ **getAnimationClipStates**(): `Map`\<`string`, [`SkeletonAnimationClipState`](SkeletonAnimationClipState.md)\>

#### Returns

`Map`\<`string`, [`SkeletonAnimationClipState`](SkeletonAnimationClipState.md)\>

#### Defined in

components/SkeletonAnimationComponent.ts:101

___

### pause

▸ **pause**(): `void`

#### Returns

`void`

#### Defined in

components/SkeletonAnimationComponent.ts:105

___

### resume

▸ **resume**(): `void`

#### Returns

`void`

#### Defined in

components/SkeletonAnimationComponent.ts:109

___

### play

▸ **play**(`animName`, `speed?`, `reset?`): `boolean`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `animName` | `string` | `undefined` |
| `speed` | `number` | `1` |
| `reset` | `boolean` | `false` |

#### Returns

`boolean`

#### Defined in

components/SkeletonAnimationComponent.ts:113

___

### crossFade

▸ **crossFade**(`animName`, `crossTime`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `animName` | `string` |
| `crossTime` | `number` |

#### Returns

`void`

#### Defined in

components/SkeletonAnimationComponent.ts:141

___

### setAnimIsLoop

▸ **setAnimIsLoop**(`animName`, `isLoop`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `animName` | `string` |
| `isLoop` | `boolean` |

#### Returns

`void`

#### Defined in

components/SkeletonAnimationComponent.ts:176

___

### addJointBind

▸ **addJointBind**(`jointName`, `obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `jointName` | `string` |
| `obj` | [`Object3D`](Object3D.md) |

#### Returns

`void`

#### Defined in

components/SkeletonAnimationComponent.ts:182

___

### removeJointBind

▸ **removeJointBind**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`Object3D`](Object3D.md) |

#### Returns

`void`

#### Defined in

components/SkeletonAnimationComponent.ts:189

___

### onUpdate

▸ **onUpdate**(): `void`

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[onUpdate](ComponentBase.md#onupdate)

#### Defined in

components/SkeletonAnimationComponent.ts:199

___

### cloneTo

▸ **cloneTo**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`Object3D`](Object3D.md) |

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[cloneTo](ComponentBase.md#cloneto)

#### Defined in

components/SkeletonAnimationComponent.ts:234

___

### setCurrentClipState

▸ **setCurrentClipState**(`clipState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `clipState` | [`SkeletonAnimationClipState`](SkeletonAnimationClipState.md) |

#### Returns

`void`

#### Defined in

components/SkeletonAnimationComponent.ts:242
