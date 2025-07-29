[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / PropertyAnimation

# Class: PropertyAnimation

## Hierarchy

- [`ComponentBase`](ComponentBase.md)

  ↳ **`PropertyAnimation`**

## Table of contents

### Constructors

- [constructor](PropertyAnimation.md#constructor)

### Properties

- [object3D](PropertyAnimation.md#object3d)
- [\_eventDispatcher](PropertyAnimation.md#_eventdispatcher)
- [\_enable](PropertyAnimation.md#_enable)
- [isDestroyed](PropertyAnimation.md#isdestroyed)
- [defaultClip](PropertyAnimation.md#defaultclip)
- [autoPlay](PropertyAnimation.md#autoplay)

### Accessors

- [eventDispatcher](PropertyAnimation.md#eventdispatcher)
- [isStart](PropertyAnimation.md#isstart)
- [transform](PropertyAnimation.md#transform)
- [enable](PropertyAnimation.md#enable)
- [speed](PropertyAnimation.md#speed)
- [currentClip](PropertyAnimation.md#currentclip)
- [time](PropertyAnimation.md#time)

### Methods

- [onEnable](PropertyAnimation.md#onenable)
- [onDisable](PropertyAnimation.md#ondisable)
- [onLateUpdate](PropertyAnimation.md#onlateupdate)
- [onBeforeUpdate](PropertyAnimation.md#onbeforeupdate)
- [onCompute](PropertyAnimation.md#oncompute)
- [onGraphic](PropertyAnimation.md#ongraphic)
- [onParentChange](PropertyAnimation.md#onparentchange)
- [onAddChild](PropertyAnimation.md#onaddchild)
- [onRemoveChild](PropertyAnimation.md#onremovechild)
- [beforeDestroy](PropertyAnimation.md#beforedestroy)
- [destroy](PropertyAnimation.md#destroy)
- [registerEventKeyFrame](PropertyAnimation.md#registereventkeyframe)
- [init](PropertyAnimation.md#init)
- [onUpdate](PropertyAnimation.md#onupdate)
- [appendClip](PropertyAnimation.md#appendclip)
- [stop](PropertyAnimation.md#stop)
- [toggle](PropertyAnimation.md#toggle)
- [getClip](PropertyAnimation.md#getclip)
- [seek](PropertyAnimation.md#seek)
- [play](PropertyAnimation.md#play)
- [start](PropertyAnimation.md#start)
- [copyComponent](PropertyAnimation.md#copycomponent)
- [cloneTo](PropertyAnimation.md#cloneto)

## Constructors

### constructor

• **new PropertyAnimation**(): [`PropertyAnimation`](PropertyAnimation.md)

#### Returns

[`PropertyAnimation`](PropertyAnimation.md)

#### Overrides

[ComponentBase](ComponentBase.md).[constructor](ComponentBase.md#constructor)

#### Defined in

components/anim/curveAnim/PropertyAnimation.ts:21

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

### defaultClip

• **defaultClip**: `string`

#### Defined in

components/anim/curveAnim/PropertyAnimation.ts:14

___

### autoPlay

• **autoPlay**: `boolean`

#### Defined in

components/anim/curveAnim/PropertyAnimation.ts:15

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

### speed

• `get` **speed**(): `number`

#### Returns

`number`

#### Defined in

components/anim/curveAnim/PropertyAnimation.ts:79

• `set` **speed**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

components/anim/curveAnim/PropertyAnimation.ts:75

___

### currentClip

• `get` **currentClip**(): [`PropertyAnimClip`](PropertyAnimClip.md)

#### Returns

[`PropertyAnimClip`](PropertyAnimClip.md)

#### Defined in

components/anim/curveAnim/PropertyAnimation.ts:102

___

### time

• `get` **time**(): `number`

#### Returns

`number`

#### Defined in

components/anim/curveAnim/PropertyAnimation.ts:106

## Methods

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

### registerEventKeyFrame

▸ **registerEventKeyFrame**(`frame`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `frame` | [`AnimatorEventKeyframe`](AnimatorEventKeyframe.md) |

#### Returns

`void`

#### Defined in

components/anim/curveAnim/PropertyAnimation.ts:34

___

### init

▸ **init**(): `void`

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[init](ComponentBase.md#init)

#### Defined in

components/anim/curveAnim/PropertyAnimation.ts:42

___

### onUpdate

▸ **onUpdate**(): `void`

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[onUpdate](ComponentBase.md#onupdate)

#### Defined in

components/anim/curveAnim/PropertyAnimation.ts:46

___

### appendClip

▸ **appendClip**(`clip`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `clip` | [`PropertyAnimClip`](PropertyAnimClip.md) |

#### Returns

`void`

#### Defined in

components/anim/curveAnim/PropertyAnimation.ts:52

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[stop](ComponentBase.md#stop)

#### Defined in

components/anim/curveAnim/PropertyAnimation.ts:83

___

### toggle

▸ **toggle**(): `void`

#### Returns

`void`

#### Defined in

components/anim/curveAnim/PropertyAnimation.ts:87

___

### getClip

▸ **getClip**(`name`): [`PropertyAnimClip`](PropertyAnimClip.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`PropertyAnimClip`](PropertyAnimClip.md)

#### Defined in

components/anim/curveAnim/PropertyAnimation.ts:91

___

### seek

▸ **seek**(`time`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `time` | `number` |

#### Returns

`void`

#### Defined in

components/anim/curveAnim/PropertyAnimation.ts:110

___

### play

▸ **play**(`name`, `reset?`): [`PropertyAnimClip`](PropertyAnimClip.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `reset` | `boolean` | `true` |

#### Returns

[`PropertyAnimClip`](PropertyAnimClip.md)

#### Defined in

components/anim/curveAnim/PropertyAnimation.ts:114

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[start](ComponentBase.md#start)

#### Defined in

components/anim/curveAnim/PropertyAnimation.ts:123

___

### copyComponent

▸ **copyComponent**(`from`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `this` |

#### Returns

`this`

#### Overrides

[ComponentBase](ComponentBase.md).[copyComponent](ComponentBase.md#copycomponent)

#### Defined in

components/anim/curveAnim/PropertyAnimation.ts:129

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

components/anim/curveAnim/PropertyAnimation.ts:139
