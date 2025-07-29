[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / OrbitController

# Class: OrbitController

围绕目标点进行轨道运动

## Hierarchy

- [`ComponentBase`](ComponentBase.md)

  ↳ **`OrbitController`**

## Table of contents

### Constructors

- [constructor](OrbitController.md#constructor)

### Properties

- [object3D](OrbitController.md#object3d)
- [\_eventDispatcher](OrbitController.md#_eventdispatcher)
- [\_enable](OrbitController.md#_enable)
- [isDestroyed](OrbitController.md#isdestroyed)
- [autoRotate](OrbitController.md#autorotate)
- [autoRotateSpeed](OrbitController.md#autorotatespeed)
- [rotateFactor](OrbitController.md#rotatefactor)
- [zoomFactor](OrbitController.md#zoomfactor)
- [panFactor](OrbitController.md#panfactor)

### Accessors

- [eventDispatcher](OrbitController.md#eventdispatcher)
- [isStart](OrbitController.md#isstart)
- [transform](OrbitController.md#transform)
- [enable](OrbitController.md#enable)
- [target](OrbitController.md#target)
- [smooth](OrbitController.md#smooth)
- [minDistance](OrbitController.md#mindistance)
- [maxDistance](OrbitController.md#maxdistance)
- [minPolarAngle](OrbitController.md#minpolarangle)
- [maxPolarAngle](OrbitController.md#maxpolarangle)
- [spherical](OrbitController.md#spherical)

### Methods

- [init](OrbitController.md#init)
- [stop](OrbitController.md#stop)
- [onLateUpdate](OrbitController.md#onlateupdate)
- [onBeforeUpdate](OrbitController.md#onbeforeupdate)
- [onCompute](OrbitController.md#oncompute)
- [onGraphic](OrbitController.md#ongraphic)
- [onParentChange](OrbitController.md#onparentchange)
- [onAddChild](OrbitController.md#onaddchild)
- [onRemoveChild](OrbitController.md#onremovechild)
- [cloneTo](OrbitController.md#cloneto)
- [copyComponent](OrbitController.md#copycomponent)
- [beforeDestroy](OrbitController.md#beforedestroy)
- [destroy](OrbitController.md#destroy)
- [start](OrbitController.md#start)
- [onEnable](OrbitController.md#onenable)
- [onDisable](OrbitController.md#ondisable)
- [onUpdate](OrbitController.md#onupdate)
- [updateCamera](OrbitController.md#updatecamera)

## Constructors

### constructor

• **new OrbitController**(): [`OrbitController`](OrbitController.md)

#### Returns

[`OrbitController`](OrbitController.md)

#### Overrides

[ComponentBase](ComponentBase.md).[constructor](ComponentBase.md#constructor)

#### Defined in

components/controller/OrbitController.ts:56

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

### autoRotate

• **autoRotate**: `boolean` = `false`

Whether to enable automatic rotation

#### Defined in

components/controller/OrbitController.ts:20

___

### autoRotateSpeed

• **autoRotateSpeed**: `number` = `0.1`

Automatic rotation speed coefficient

#### Defined in

components/controller/OrbitController.ts:24

___

### rotateFactor

• **rotateFactor**: `number` = `0.5`

Rotation speed coefficient

#### Defined in

components/controller/OrbitController.ts:28

___

### zoomFactor

• **zoomFactor**: `number` = `0.1`

Scale speed coefficient

#### Defined in

components/controller/OrbitController.ts:32

___

### panFactor

• **panFactor**: `number` = `0.25`

Angle translation velocity coefficient

#### Defined in

components/controller/OrbitController.ts:36

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

### target

• `get` **target**(): [`Vector3`](Vector3.md)

Get the target position

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

components/controller/OrbitController.ts:62

• `set` **target**(`v`): `void`

Set the target position

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

components/controller/OrbitController.ts:68

___

### smooth

• `get` **smooth**(): `number`

Set smoothing coefficient of controller

#### Returns

`number`

#### Defined in

components/controller/OrbitController.ts:75

• `set` **smooth**(`v`): `void`

Get smoothing coefficient of controller

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

components/controller/OrbitController.ts:81

___

### minDistance

• `get` **minDistance**(): `number`

Get the minimum distance between the camera and the target coordinate

#### Returns

`number`

**`Default Value`**

```ts
1
```

#### Defined in

components/controller/OrbitController.ts:88

• `set` **minDistance**(`v`): `void`

Set the minimum distance between the camera and the target position
min value: 0.000002
max value: `this._maxDistance` [maxDistance](OrbitController.md#maxdistance)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

components/controller/OrbitController.ts:96

___

### maxDistance

• `get` **maxDistance**(): `number`

Get the max distance between the camera and the target position

#### Returns

`number`

**`Default Value`**

```ts
100000
```

#### Defined in

components/controller/OrbitController.ts:103

• `set` **maxDistance**(`v`): `void`

Set the max distance between the camera and the target position
min - `this._maxDistance`
max - Infinity

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

components/controller/OrbitController.ts:111

___

### minPolarAngle

• `get` **minPolarAngle**(): `number`

Get the lower elevation limit of the camera from the xz plane

#### Returns

`number`

**`Default Value`**

```ts
-90
```

#### Defined in

components/controller/OrbitController.ts:119

• `set` **minPolarAngle**(`v`): `void`

Set the lower elevation limit of the camera from the xz plane
min - -90
max - [maxPolarAngle](OrbitController.md#maxpolarangle)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

components/controller/OrbitController.ts:127

___

### maxPolarAngle

• `get` **maxPolarAngle**(): `number`

Get the upper elevation limit of the camera from the xz plane

#### Returns

`number`

**`Default Value`**

```ts
90
```

#### Defined in

components/controller/OrbitController.ts:134

• `set` **maxPolarAngle**(`v`): `void`

Set the upper elevation limit of the camera to the xz plane
min - less than [minPolarAngle](OrbitController.md#minpolarangle)
max - 90

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

components/controller/OrbitController.ts:142

___

### spherical

• `get` **spherical**(): `Spherical`

#### Returns

`Spherical`

#### Defined in

components/controller/OrbitController.ts:146

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

components/controller/OrbitController.ts:152

___

### onEnable

▸ **onEnable**(): `void`

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[onEnable](ComponentBase.md#onenable)

#### Defined in

components/controller/OrbitController.ts:169

___

### onDisable

▸ **onDisable**(): `void`

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[onDisable](ComponentBase.md#ondisable)

#### Defined in

components/controller/OrbitController.ts:175

___

### onUpdate

▸ **onUpdate**(): `void`

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[onUpdate](ComponentBase.md#onupdate)

#### Defined in

components/controller/OrbitController.ts:181

___

### updateCamera

▸ **updateCamera**(): `void`

#### Returns

`void`

#### Defined in

components/controller/OrbitController.ts:296
