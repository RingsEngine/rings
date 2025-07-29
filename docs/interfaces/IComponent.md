[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / IComponent

# Interface: IComponent

## Implemented by

- [`ComponentBase`](../classes/ComponentBase.md)

## Table of contents

### Properties

- [object3D](IComponent.md#object3d)
- [eventDispatcher](IComponent.md#eventdispatcher)
- [transform](IComponent.md#transform)
- [enable](IComponent.md#enable)
- [isDestroyed](IComponent.md#isdestroyed)

### Methods

- [init](IComponent.md#init)
- [start](IComponent.md#start)
- [stop](IComponent.md#stop)
- [onEnable](IComponent.md#onenable)
- [onDisable](IComponent.md#ondisable)
- [onUpdate](IComponent.md#onupdate)
- [onLateUpdate](IComponent.md#onlateupdate)
- [onBeforeUpdate](IComponent.md#onbeforeupdate)
- [onCompute](IComponent.md#oncompute)
- [onGraphic](IComponent.md#ongraphic)
- [cloneTo](IComponent.md#cloneto)
- [destroy](IComponent.md#destroy)
- [beforeDestroy](IComponent.md#beforedestroy)
- [onParentChange](IComponent.md#onparentchange)
- [onAddChild](IComponent.md#onaddchild)
- [onRemoveChild](IComponent.md#onremovechild)

## Properties

### object3D

• **object3D**: [`Object3D`](../classes/Object3D.md)

#### Defined in

components/IComponent.ts:7

___

### eventDispatcher

• **eventDispatcher**: [`CEventDispatcher`](../classes/CEventDispatcher.md)

#### Defined in

components/IComponent.ts:8

___

### transform

• **transform**: [`Transform`](../classes/Transform.md)

#### Defined in

components/IComponent.ts:9

___

### enable

• **enable**: `boolean`

#### Defined in

components/IComponent.ts:10

___

### isDestroyed

• `Optional` **isDestroyed**: `boolean`

#### Defined in

components/IComponent.ts:11

## Methods

### init

▸ **init**(`param?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `param?` | `any` |

#### Returns

`any`

#### Defined in

components/IComponent.ts:12

___

### start

▸ **start**(): `any`

#### Returns

`any`

#### Defined in

components/IComponent.ts:13

___

### stop

▸ **stop**(): `any`

#### Returns

`any`

#### Defined in

components/IComponent.ts:14

___

### onEnable

▸ **onEnable**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](../classes/View3D.md) |

#### Returns

`any`

#### Defined in

components/IComponent.ts:15

___

### onDisable

▸ **onDisable**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](../classes/View3D.md) |

#### Returns

`any`

#### Defined in

components/IComponent.ts:16

___

### onUpdate

▸ **onUpdate**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](../classes/View3D.md) |

#### Returns

`any`

#### Defined in

components/IComponent.ts:17

___

### onLateUpdate

▸ **onLateUpdate**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](../classes/View3D.md) |

#### Returns

`any`

#### Defined in

components/IComponent.ts:18

___

### onBeforeUpdate

▸ **onBeforeUpdate**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](../classes/View3D.md) |

#### Returns

`any`

#### Defined in

components/IComponent.ts:19

___

### onCompute

▸ **onCompute**(`view?`, `command?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](../classes/View3D.md) |
| `command?` | `GPUCommandEncoder` |

#### Returns

`any`

#### Defined in

components/IComponent.ts:20

___

### onGraphic

▸ **onGraphic**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](../classes/View3D.md) |

#### Returns

`any`

#### Defined in

components/IComponent.ts:21

___

### cloneTo

▸ **cloneTo**(`obj`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`Object3D`](../classes/Object3D.md) |

#### Returns

`any`

#### Defined in

components/IComponent.ts:22

___

### destroy

▸ **destroy**(`force?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `force?` | `boolean` |

#### Returns

`any`

#### Defined in

components/IComponent.ts:23

___

### beforeDestroy

▸ **beforeDestroy**(`force?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `force?` | `boolean` |

#### Returns

`any`

#### Defined in

components/IComponent.ts:24

___

### onParentChange

▸ **onParentChange**(`lastParent?`, `currentParent?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lastParent?` | [`Object3D`](../classes/Object3D.md) |
| `currentParent?` | [`Object3D`](../classes/Object3D.md) |

#### Returns

`any`

#### Defined in

components/IComponent.ts:25

___

### onAddChild

▸ **onAddChild**(`child`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Object3D`](../classes/Object3D.md) |

#### Returns

`any`

#### Defined in

components/IComponent.ts:27

___

### onRemoveChild

▸ **onRemoveChild**(`child`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Object3D`](../classes/Object3D.md) |

#### Returns

`any`

#### Defined in

components/IComponent.ts:28
