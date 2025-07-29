[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / HoverCameraController

# Class: HoverCameraController

## Hierarchy

- [`ComponentBase`](ComponentBase.md)

  ↳ **`HoverCameraController`**

## Table of contents

### Constructors

- [constructor](HoverCameraController.md#constructor)

### Properties

- [object3D](HoverCameraController.md#object3d)
- [\_eventDispatcher](HoverCameraController.md#_eventdispatcher)
- [\_enable](HoverCameraController.md#_enable)
- [isDestroyed](HoverCameraController.md#isdestroyed)
- [camera](HoverCameraController.md#camera)
- [minDistance](HoverCameraController.md#mindistance)
- [maxDistance](HoverCameraController.md#maxdistance)
- [rollSmooth](HoverCameraController.md#rollsmooth)
- [dragSmooth](HoverCameraController.md#dragsmooth)
- [wheelSmooth](HoverCameraController.md#wheelsmooth)
- [wheelStep](HoverCameraController.md#wheelstep)
- [mouseRightFactor](HoverCameraController.md#mouserightfactor)
- [mouseLeftFactor](HoverCameraController.md#mouseleftfactor)
- [smooth](HoverCameraController.md#smooth)
- [distance](HoverCameraController.md#distance)
- [roll](HoverCameraController.md#roll)
- [pitch](HoverCameraController.md#pitch)

### Accessors

- [eventDispatcher](HoverCameraController.md#eventdispatcher)
- [isStart](HoverCameraController.md#isstart)
- [transform](HoverCameraController.md#transform)
- [enable](HoverCameraController.md#enable)
- [bottomClamp](HoverCameraController.md#bottomclamp)
- [topClamp](HoverCameraController.md#topclamp)
- [target](HoverCameraController.md#target)

### Methods

- [init](HoverCameraController.md#init)
- [stop](HoverCameraController.md#stop)
- [onEnable](HoverCameraController.md#onenable)
- [onDisable](HoverCameraController.md#ondisable)
- [onUpdate](HoverCameraController.md#onupdate)
- [onLateUpdate](HoverCameraController.md#onlateupdate)
- [onCompute](HoverCameraController.md#oncompute)
- [onGraphic](HoverCameraController.md#ongraphic)
- [onParentChange](HoverCameraController.md#onparentchange)
- [onAddChild](HoverCameraController.md#onaddchild)
- [onRemoveChild](HoverCameraController.md#onremovechild)
- [cloneTo](HoverCameraController.md#cloneto)
- [copyComponent](HoverCameraController.md#copycomponent)
- [beforeDestroy](HoverCameraController.md#beforedestroy)
- [start](HoverCameraController.md#start)
- [flowTarget](HoverCameraController.md#flowtarget)
- [getFlowTarget](HoverCameraController.md#getflowtarget)
- [setCamera](HoverCameraController.md#setcamera)
- [focusByBounds](HoverCameraController.md#focusbybounds)
- [onBeforeUpdate](HoverCameraController.md#onbeforeupdate)
- [destroy](HoverCameraController.md#destroy)

## Constructors

### constructor

• **new HoverCameraController**(): [`HoverCameraController`](HoverCameraController.md)

#### Returns

[`HoverCameraController`](HoverCameraController.md)

#### Overrides

[ComponentBase](ComponentBase.md).[constructor](ComponentBase.md#constructor)

#### Defined in

components/controller/HoverCameraController.ts:74

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

### camera

• **camera**: [`Camera3D`](Camera3D.md)

#### Defined in

components/controller/HoverCameraController.ts:15

___

### minDistance

• **minDistance**: `number` = `0.1`

#### Defined in

components/controller/HoverCameraController.ts:17

___

### maxDistance

• **maxDistance**: `number` = `500`

#### Defined in

components/controller/HoverCameraController.ts:19

___

### rollSmooth

• **rollSmooth**: `number` = `15.0`

#### Defined in

components/controller/HoverCameraController.ts:21

___

### dragSmooth

• **dragSmooth**: `number` = `20`

#### Defined in

components/controller/HoverCameraController.ts:23

___

### wheelSmooth

• **wheelSmooth**: `number` = `10`

#### Defined in

components/controller/HoverCameraController.ts:25

___

### wheelStep

• **wheelStep**: `number` = `0.002`

#### Defined in

components/controller/HoverCameraController.ts:27

___

### mouseRightFactor

• **mouseRightFactor**: `number` = `0.25`

#### Defined in

components/controller/HoverCameraController.ts:29

___

### mouseLeftFactor

• **mouseLeftFactor**: `number` = `20`

#### Defined in

components/controller/HoverCameraController.ts:31

___

### smooth

• **smooth**: `boolean` = `true`

#### Defined in

components/controller/HoverCameraController.ts:33

___

### distance

• **distance**: `number` = `10`

#### Defined in

components/controller/HoverCameraController.ts:39

___

### roll

• **roll**: `number` = `0`

#### Defined in

components/controller/HoverCameraController.ts:42

___

### pitch

• **pitch**: `number` = `0`

#### Defined in

components/controller/HoverCameraController.ts:45

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

### bottomClamp

• `get` **bottomClamp**(): `number`

#### Returns

`number`

#### Defined in

components/controller/HoverCameraController.ts:58

• `set` **bottomClamp**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

components/controller/HoverCameraController.ts:61

___

### topClamp

• `get` **topClamp**(): `number`

#### Returns

`number`

#### Defined in

components/controller/HoverCameraController.ts:65

• `set` **topClamp**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

components/controller/HoverCameraController.ts:68

___

### target

• `get` **target**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

components/controller/HoverCameraController.ts:144

• `set` **target**(`target`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

components/controller/HoverCameraController.ts:140

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

### onUpdate

▸ **onUpdate**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`any`

#### Inherited from

[ComponentBase](ComponentBase.md).[onUpdate](ComponentBase.md#onupdate)

#### Defined in

components/ComponentBase.ts:82

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

### start

▸ **start**(): `void`

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[start](ComponentBase.md#start)

#### Defined in

components/controller/HoverCameraController.ts:80

___

### flowTarget

▸ **flowTarget**(`target`, `offset?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `target` | [`Object3D`](Object3D.md) | `undefined` |
| `offset` | [`Vector3`](Vector3.md) | `Vector3.ZERO` |

#### Returns

`void`

#### Defined in

components/controller/HoverCameraController.ts:108

___

### getFlowTarget

▸ **getFlowTarget**(): [`Object3D`](Object3D.md)

#### Returns

[`Object3D`](Object3D.md)

#### Defined in

components/controller/HoverCameraController.ts:114

___

### setCamera

▸ **setCamera**(`roll`, `pitch`, `distance`, `target?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `roll` | `number` |
| `pitch` | `number` |
| `distance` | `number` |
| `target?` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

components/controller/HoverCameraController.ts:118

___

### focusByBounds

▸ **focusByBounds**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`Object3D`](Object3D.md) |

#### Returns

`void`

#### Defined in

components/controller/HoverCameraController.ts:135

___

### onBeforeUpdate

▸ **onBeforeUpdate**(`view?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[onBeforeUpdate](ComponentBase.md#onbeforeupdate)

#### Defined in

components/controller/HoverCameraController.ts:202

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

components/controller/HoverCameraController.ts:256
