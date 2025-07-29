[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / AnimatorComponent

# Class: AnimatorComponent

## Hierarchy

- [`ComponentBase`](ComponentBase.md)

  ↳ **`AnimatorComponent`**

## Table of contents

### Constructors

- [constructor](AnimatorComponent.md#constructor)

### Properties

- [object3D](AnimatorComponent.md#object3d)
- [\_eventDispatcher](AnimatorComponent.md#_eventdispatcher)
- [\_enable](AnimatorComponent.md#_enable)
- [isDestroyed](AnimatorComponent.md#isdestroyed)
- [timeScale](AnimatorComponent.md#timescale)
- [jointMatrixIndexTableBuffer](AnimatorComponent.md#jointmatrixindextablebuffer)
- [playBlendShapeLoop](AnimatorComponent.md#playblendshapeloop)
- [inverseBindMatrices](AnimatorComponent.md#inversebindmatrices)
- [\_avatar](AnimatorComponent.md#_avatar)
- [\_rendererList](AnimatorComponent.md#_rendererlist)
- [propertyCache](AnimatorComponent.md#propertycache)
- [\_clips](AnimatorComponent.md#_clips)
- [\_clipsState](AnimatorComponent.md#_clipsstate)
- [\_clipsMap](AnimatorComponent.md#_clipsmap)
- [\_currentSkeletonClip](AnimatorComponent.md#_currentskeletonclip)
- [\_currentBlendAnimClip](AnimatorComponent.md#_currentblendanimclip)
- [root](AnimatorComponent.md#root)

### Accessors

- [eventDispatcher](AnimatorComponent.md#eventdispatcher)
- [isStart](AnimatorComponent.md#isstart)
- [transform](AnimatorComponent.md#transform)
- [enable](AnimatorComponent.md#enable)
- [avatar](AnimatorComponent.md#avatar)
- [numJoint](AnimatorComponent.md#numjoint)
- [clips](AnimatorComponent.md#clips)
- [clipsState](AnimatorComponent.md#clipsstate)

### Methods

- [stop](AnimatorComponent.md#stop)
- [onEnable](AnimatorComponent.md#onenable)
- [onDisable](AnimatorComponent.md#ondisable)
- [onLateUpdate](AnimatorComponent.md#onlateupdate)
- [onBeforeUpdate](AnimatorComponent.md#onbeforeupdate)
- [onCompute](AnimatorComponent.md#oncompute)
- [onGraphic](AnimatorComponent.md#ongraphic)
- [onParentChange](AnimatorComponent.md#onparentchange)
- [onAddChild](AnimatorComponent.md#onaddchild)
- [onRemoveChild](AnimatorComponent.md#onremovechild)
- [copyComponent](AnimatorComponent.md#copycomponent)
- [beforeDestroy](AnimatorComponent.md#beforedestroy)
- [destroy](AnimatorComponent.md#destroy)
- [init](AnimatorComponent.md#init)
- [start](AnimatorComponent.md#start)
- [playAnim](AnimatorComponent.md#playanim)
- [crossFade](AnimatorComponent.md#crossfade)
- [playBlendShape](AnimatorComponent.md#playblendshape)
- [getJointIndexTable](AnimatorComponent.md#getjointindextable)
- [cloneTo](AnimatorComponent.md#cloneto)
- [onUpdate](AnimatorComponent.md#onupdate)
- [updateBlendShape](AnimatorComponent.md#updateblendshape)
- [getAnimationClipState](AnimatorComponent.md#getanimationclipstate)
- [cloneMorphRenderers](AnimatorComponent.md#clonemorphrenderers)

## Constructors

### constructor

• **new AnimatorComponent**(): [`AnimatorComponent`](AnimatorComponent.md)

#### Returns

[`AnimatorComponent`](AnimatorComponent.md)

#### Inherited from

[ComponentBase](ComponentBase.md).[constructor](ComponentBase.md#constructor)

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

### timeScale

• **timeScale**: `number` = `1.0`

#### Defined in

components/anim/AnimatorComponent.ts:25

___

### jointMatrixIndexTableBuffer

• **jointMatrixIndexTableBuffer**: [`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Defined in

components/anim/AnimatorComponent.ts:26

___

### playBlendShapeLoop

• **playBlendShapeLoop**: `boolean` = `false`

#### Defined in

components/anim/AnimatorComponent.ts:27

___

### inverseBindMatrices

• `Protected` **inverseBindMatrices**: `FloatArray`[]

#### Defined in

components/anim/AnimatorComponent.ts:28

___

### \_avatar

• `Protected` **\_avatar**: [`PrefabAvatarData`](PrefabAvatarData.md)

#### Defined in

components/anim/AnimatorComponent.ts:29

___

### \_rendererList

• `Protected` **\_rendererList**: [`SkinnedMeshRenderer2`](SkinnedMeshRenderer2.md)[]

#### Defined in

components/anim/AnimatorComponent.ts:30

___

### propertyCache

• `Protected` **propertyCache**: `Map`\<[`RenderNode`](RenderNode.md), \{ `[name: string]`: `any`;  }\>

#### Defined in

components/anim/AnimatorComponent.ts:31

___

### \_clips

• `Protected` **\_clips**: [`PropertyAnimationClip`](PropertyAnimationClip.md)[]

#### Defined in

components/anim/AnimatorComponent.ts:33

___

### \_clipsState

• `Protected` **\_clipsState**: [`PropertyAnimationClipState`](PropertyAnimationClipState.md)[]

#### Defined in

components/anim/AnimatorComponent.ts:34

___

### \_clipsMap

• `Protected` **\_clipsMap**: `Map`\<`string`, [`PropertyAnimationClip`](PropertyAnimationClip.md)\>

#### Defined in

components/anim/AnimatorComponent.ts:35

___

### \_currentSkeletonClip

• `Protected` **\_currentSkeletonClip**: [`PropertyAnimationClipState`](PropertyAnimationClipState.md)

#### Defined in

components/anim/AnimatorComponent.ts:36

___

### \_currentBlendAnimClip

• `Protected` **\_currentBlendAnimClip**: [`PropertyAnimationClip`](PropertyAnimationClip.md)

#### Defined in

components/anim/AnimatorComponent.ts:37

___

### root

• **root**: [`Object3D`](Object3D.md)

#### Defined in

components/anim/AnimatorComponent.ts:45

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

### avatar

• `set` **avatar**(`name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Defined in

components/anim/AnimatorComponent.ts:154

___

### numJoint

• `get` **numJoint**(): `number`

#### Returns

`number`

#### Defined in

components/anim/AnimatorComponent.ts:169

___

### clips

• `get` **clips**(): [`PropertyAnimationClip`](PropertyAnimationClip.md)[]

#### Returns

[`PropertyAnimationClip`](PropertyAnimationClip.md)[]

#### Defined in

components/anim/AnimatorComponent.ts:231

• `set` **clips**(`clips`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `clips` | [`PropertyAnimationClip`](PropertyAnimationClip.md)[] |

#### Returns

`void`

#### Defined in

components/anim/AnimatorComponent.ts:217

___

### clipsState

• `get` **clipsState**(): [`PropertyAnimationClipState`](PropertyAnimationClipState.md)[]

#### Returns

[`PropertyAnimationClipState`](PropertyAnimationClipState.md)[]

#### Defined in

components/anim/AnimatorComponent.ts:235

## Methods

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

### init

▸ **init**(`param?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `param?` | `any` |

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[init](ComponentBase.md#init)

#### Defined in

components/anim/AnimatorComponent.ts:53

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[start](ComponentBase.md#start)

#### Defined in

components/anim/AnimatorComponent.ts:78

___

### playAnim

▸ **playAnim**(`anim`, `time?`, `speed?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `anim` | `string` | `undefined` |
| `time` | `number` | `0` |
| `speed` | `number` | `1` |

#### Returns

`void`

#### Defined in

components/anim/AnimatorComponent.ts:82

___

### crossFade

▸ **crossFade**(`anim`, `crossTime`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `anim` | `string` |
| `crossTime` | `number` |

#### Returns

`void`

#### Defined in

components/anim/AnimatorComponent.ts:98

___

### playBlendShape

▸ **playBlendShape**(`shapeName`, `time?`, `speed?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `shapeName` | `string` | `undefined` |
| `time` | `number` | `0` |
| `speed` | `number` | `1` |

#### Returns

`void`

#### Defined in

components/anim/AnimatorComponent.ts:139

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

components/anim/AnimatorComponent.ts:173

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

components/anim/AnimatorComponent.ts:239

___

### onUpdate

▸ **onUpdate**(`view?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[onUpdate](ComponentBase.md#onupdate)

#### Defined in

components/anim/AnimatorComponent.ts:280

___

### updateBlendShape

▸ **updateBlendShape**(`attributes`, `key`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attributes` | `string`[] |
| `key` | `string` |
| `value` | `number` |

#### Returns

`void`

#### Defined in

components/anim/AnimatorComponent.ts:345

___

### getAnimationClipState

▸ **getAnimationClipState**(`name`): [`PropertyAnimationClipState`](PropertyAnimationClipState.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`PropertyAnimationClipState`](PropertyAnimationClipState.md)

#### Defined in

components/anim/AnimatorComponent.ts:493

___

### cloneMorphRenderers

▸ **cloneMorphRenderers**(): `Object`

#### Returns

`Object`

#### Defined in

components/anim/AnimatorComponent.ts:502
