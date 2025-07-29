[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / ComponentBase

# Class: ComponentBase

## Hierarchy

- **`ComponentBase`**

  ↳ [`BillboardComponent`](BillboardComponent.md)

  ↳ [`ColliderComponent`](ColliderComponent.md)

  ↳ [`SkeletonAnimationComponent`](SkeletonAnimationComponent.md)

  ↳ [`Transform`](Transform.md)

  ↳ [`AnimatorComponent`](AnimatorComponent.md)

  ↳ [`PropertyAnimation`](PropertyAnimation.md)

  ↳ [`MorphTargetBlender`](MorphTargetBlender.md)

  ↳ [`FirstPersonCameraController`](FirstPersonCameraController.md)

  ↳ [`FlyCameraController`](FlyCameraController.md)

  ↳ [`HoverCameraController`](HoverCameraController.md)

  ↳ [`OrbitController`](OrbitController.md)

  ↳ [`ThirdPersonCameraController`](ThirdPersonCameraController.md)

  ↳ [`GUICanvas`](GUICanvas.md)

  ↳ [`UIComponentBase`](UIComponentBase.md)

  ↳ [`UITransform`](UITransform.md)

  ↳ [`LightBase`](LightBase.md)

  ↳ [`PostProcessingComponent`](PostProcessingComponent.md)

  ↳ [`GlobalIlluminationComponent`](GlobalIlluminationComponent.md)

  ↳ [`RenderNode`](RenderNode.md)

  ↳ [`Camera3D`](Camera3D.md)

  ↳ [`TransformControllerBaseComponent`](TransformControllerBaseComponent.md)

## Implements

- [`IComponent`](../interfaces/IComponent.md)

## Table of contents

### Constructors

- [constructor](ComponentBase.md#constructor)

### Properties

- [object3D](ComponentBase.md#object3d)
- [\_eventDispatcher](ComponentBase.md#_eventdispatcher)
- [\_enable](ComponentBase.md#_enable)
- [isDestroyed](ComponentBase.md#isdestroyed)

### Accessors

- [eventDispatcher](ComponentBase.md#eventdispatcher)
- [isStart](ComponentBase.md#isstart)
- [transform](ComponentBase.md#transform)
- [enable](ComponentBase.md#enable)

### Methods

- [init](ComponentBase.md#init)
- [start](ComponentBase.md#start)
- [stop](ComponentBase.md#stop)
- [onEnable](ComponentBase.md#onenable)
- [onDisable](ComponentBase.md#ondisable)
- [onUpdate](ComponentBase.md#onupdate)
- [onLateUpdate](ComponentBase.md#onlateupdate)
- [onBeforeUpdate](ComponentBase.md#onbeforeupdate)
- [onCompute](ComponentBase.md#oncompute)
- [onGraphic](ComponentBase.md#ongraphic)
- [onParentChange](ComponentBase.md#onparentchange)
- [onAddChild](ComponentBase.md#onaddchild)
- [onRemoveChild](ComponentBase.md#onremovechild)
- [cloneTo](ComponentBase.md#cloneto)
- [copyComponent](ComponentBase.md#copycomponent)
- [beforeDestroy](ComponentBase.md#beforedestroy)
- [destroy](ComponentBase.md#destroy)

## Constructors

### constructor

• **new ComponentBase**(): [`ComponentBase`](ComponentBase.md)

#### Returns

[`ComponentBase`](ComponentBase.md)

## Properties

### object3D

• **object3D**: [`Object3D`](Object3D.md) = `null`

#### Implementation of

[IComponent](../interfaces/IComponent.md).[object3D](../interfaces/IComponent.md#object3d)

#### Defined in

components/ComponentBase.ts:9

___

### \_eventDispatcher

• `Protected` **\_eventDispatcher**: [`CEventDispatcher`](CEventDispatcher.md)

#### Defined in

components/ComponentBase.ts:10

___

### \_enable

• `Protected` **\_enable**: `boolean` = `true`

#### Defined in

components/ComponentBase.ts:18

___

### isDestroyed

• **isDestroyed**: `boolean` = `false`

#### Implementation of

[IComponent](../interfaces/IComponent.md).[isDestroyed](../interfaces/IComponent.md#isdestroyed)

#### Defined in

components/ComponentBase.ts:20

## Accessors

### eventDispatcher

• `get` **eventDispatcher**(): [`CEventDispatcher`](CEventDispatcher.md)

#### Returns

[`CEventDispatcher`](CEventDispatcher.md)

#### Implementation of

[IComponent](../interfaces/IComponent.md).[eventDispatcher](../interfaces/IComponent.md#eventdispatcher)

#### Defined in

components/ComponentBase.ts:11

• `set` **eventDispatcher**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`CEventDispatcher`](CEventDispatcher.md) |

#### Returns

`void`

#### Implementation of

[IComponent](../interfaces/IComponent.md).[eventDispatcher](../interfaces/IComponent.md#eventdispatcher)

#### Defined in

components/ComponentBase.ts:15

___

### isStart

• `get` **isStart**(): `boolean`

#### Returns

`boolean`

#### Defined in

components/ComponentBase.ts:21

___

### transform

• `get` **transform**(): [`Transform`](Transform.md)

#### Returns

[`Transform`](Transform.md)

#### Implementation of

[IComponent](../interfaces/IComponent.md).[transform](../interfaces/IComponent.md#transform)

#### Defined in

components/ComponentBase.ts:24

___

### enable

• `get` **enable**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IComponent](../interfaces/IComponent.md).[enable](../interfaces/IComponent.md#enable)

#### Defined in

components/ComponentBase.ts:37

• `set` **enable**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Implementation of

[IComponent](../interfaces/IComponent.md).[enable](../interfaces/IComponent.md#enable)

#### Defined in

components/ComponentBase.ts:27

## Methods

### init

▸ **init**(`param?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `param?` | `any` |

#### Returns

`void`

#### Implementation of

[IComponent](../interfaces/IComponent.md).[init](../interfaces/IComponent.md#init)

#### Defined in

components/ComponentBase.ts:77

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Implementation of

[IComponent](../interfaces/IComponent.md).[start](../interfaces/IComponent.md#start)

#### Defined in

components/ComponentBase.ts:78

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Implementation of

[IComponent](../interfaces/IComponent.md).[stop](../interfaces/IComponent.md#stop)

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

#### Implementation of

[IComponent](../interfaces/IComponent.md).[onEnable](../interfaces/IComponent.md#onenable)

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

#### Implementation of

[IComponent](../interfaces/IComponent.md).[onDisable](../interfaces/IComponent.md#ondisable)

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

#### Implementation of

[IComponent](../interfaces/IComponent.md).[onUpdate](../interfaces/IComponent.md#onupdate)

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

#### Implementation of

[IComponent](../interfaces/IComponent.md).[onLateUpdate](../interfaces/IComponent.md#onlateupdate)

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

#### Implementation of

[IComponent](../interfaces/IComponent.md).[onBeforeUpdate](../interfaces/IComponent.md#onbeforeupdate)

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

#### Implementation of

[IComponent](../interfaces/IComponent.md).[onCompute](../interfaces/IComponent.md#oncompute)

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

#### Implementation of

[IComponent](../interfaces/IComponent.md).[onGraphic](../interfaces/IComponent.md#ongraphic)

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

#### Implementation of

[IComponent](../interfaces/IComponent.md).[onParentChange](../interfaces/IComponent.md#onparentchange)

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

#### Implementation of

[IComponent](../interfaces/IComponent.md).[onAddChild](../interfaces/IComponent.md#onaddchild)

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

#### Implementation of

[IComponent](../interfaces/IComponent.md).[onRemoveChild](../interfaces/IComponent.md#onremovechild)

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

#### Implementation of

[IComponent](../interfaces/IComponent.md).[cloneTo](../interfaces/IComponent.md#cloneto)

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

#### Implementation of

[IComponent](../interfaces/IComponent.md).[beforeDestroy](../interfaces/IComponent.md#beforedestroy)

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

#### Implementation of

[IComponent](../interfaces/IComponent.md).[destroy](../interfaces/IComponent.md#destroy)

#### Defined in

components/ComponentBase.ts:139
