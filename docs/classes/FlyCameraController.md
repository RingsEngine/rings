[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / FlyCameraController

# Class: FlyCameraController

## Hierarchy

- [`ComponentBase`](ComponentBase.md)

  ↳ **`FlyCameraController`**

## Table of contents

### Constructors

- [constructor](FlyCameraController.md#constructor)

### Properties

- [object3D](FlyCameraController.md#object3d)
- [\_eventDispatcher](FlyCameraController.md#_eventdispatcher)
- [\_enable](FlyCameraController.md#_enable)
- [isDestroyed](FlyCameraController.md#isdestroyed)
- [moveSpeed](FlyCameraController.md#movespeed)
- [targetPos](FlyCameraController.md#targetpos)
- [lookAtPos](FlyCameraController.md#lookatpos)
- [config](FlyCameraController.md#config)

### Accessors

- [eventDispatcher](FlyCameraController.md#eventdispatcher)
- [isStart](FlyCameraController.md#isstart)
- [transform](FlyCameraController.md#transform)
- [enable](FlyCameraController.md#enable)
- [factory](FlyCameraController.md#factory)
- [mouseFactory](FlyCameraController.md#mousefactory)

### Methods

- [init](FlyCameraController.md#init)
- [stop](FlyCameraController.md#stop)
- [onEnable](FlyCameraController.md#onenable)
- [onDisable](FlyCameraController.md#ondisable)
- [onLateUpdate](FlyCameraController.md#onlateupdate)
- [onBeforeUpdate](FlyCameraController.md#onbeforeupdate)
- [onCompute](FlyCameraController.md#oncompute)
- [onGraphic](FlyCameraController.md#ongraphic)
- [onParentChange](FlyCameraController.md#onparentchange)
- [onAddChild](FlyCameraController.md#onaddchild)
- [onRemoveChild](FlyCameraController.md#onremovechild)
- [cloneTo](FlyCameraController.md#cloneto)
- [copyComponent](FlyCameraController.md#copycomponent)
- [beforeDestroy](FlyCameraController.md#beforedestroy)
- [setCamera](FlyCameraController.md#setcamera)
- [start](FlyCameraController.md#start)
- [onUpdate](FlyCameraController.md#onupdate)
- [destroy](FlyCameraController.md#destroy)

## Constructors

### constructor

• **new FlyCameraController**(): [`FlyCameraController`](FlyCameraController.md)

#### Returns

[`FlyCameraController`](FlyCameraController.md)

#### Overrides

[ComponentBase](ComponentBase.md).[constructor](ComponentBase.md#constructor)

#### Defined in

components/controller/FlyCameraController.ts:32

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

### moveSpeed

• **moveSpeed**: `number` = `2`

#### Defined in

components/controller/FlyCameraController.ts:11

___

### targetPos

• **targetPos**: [`Vector3`](Vector3.md)

#### Defined in

components/controller/FlyCameraController.ts:12

___

### lookAtPos

• **lookAtPos**: [`Vector3`](Vector3.md)

#### Defined in

components/controller/FlyCameraController.ts:13

___

### config

• **config**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `shiftMoveScale` | `number` |

#### Defined in

components/controller/FlyCameraController.ts:14

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

### factory

• `get` **factory**(): `number`

#### Returns

`number`

#### Defined in

components/controller/FlyCameraController.ts:155

• `set` **factory**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

components/controller/FlyCameraController.ts:159

___

### mouseFactory

• `get` **mouseFactory**(): `number`

#### Returns

`number`

#### Defined in

components/controller/FlyCameraController.ts:163

• `set` **mouseFactory**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

components/controller/FlyCameraController.ts:167

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

### cloneTo

▸ **cloneTo**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`Object3D`](Object3D.md) |

#### Returns

`void`

#### Inherited from

[ComponentBase](ComponentBase.md).[cloneTo](ComponentBase.md#cloneto)

#### Defined in

components/ComponentBase.ts:90

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

### setCamera

▸ **setCamera**(`cameraPos`, `lookAt`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cameraPos` | [`Vector3`](Vector3.md) |
| `lookAt` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

components/controller/FlyCameraController.ts:46

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[start](ComponentBase.md#start)

#### Defined in

components/controller/FlyCameraController.ts:52

___

### onUpdate

▸ **onUpdate**(): `void`

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[onUpdate](ComponentBase.md#onupdate)

#### Defined in

components/controller/FlyCameraController.ts:175

___

### destroy

▸ **destroy**(`force?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `force?` | `boolean` |

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[destroy](ComponentBase.md#destroy)

#### Defined in

components/controller/FlyCameraController.ts:291
