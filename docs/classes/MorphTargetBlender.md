[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / MorphTargetBlender

# Class: MorphTargetBlender

## Hierarchy

- [`ComponentBase`](ComponentBase.md)

  ↳ **`MorphTargetBlender`**

## Table of contents

### Constructors

- [constructor](MorphTargetBlender.md#constructor)

### Properties

- [object3D](MorphTargetBlender.md#object3d)
- [\_eventDispatcher](MorphTargetBlender.md#_eventdispatcher)
- [\_enable](MorphTargetBlender.md#_enable)
- [isDestroyed](MorphTargetBlender.md#isdestroyed)

### Accessors

- [eventDispatcher](MorphTargetBlender.md#eventdispatcher)
- [isStart](MorphTargetBlender.md#isstart)
- [transform](MorphTargetBlender.md#transform)
- [enable](MorphTargetBlender.md#enable)

### Methods

- [start](MorphTargetBlender.md#start)
- [stop](MorphTargetBlender.md#stop)
- [onEnable](MorphTargetBlender.md#onenable)
- [onDisable](MorphTargetBlender.md#ondisable)
- [onUpdate](MorphTargetBlender.md#onupdate)
- [onLateUpdate](MorphTargetBlender.md#onlateupdate)
- [onBeforeUpdate](MorphTargetBlender.md#onbeforeupdate)
- [onCompute](MorphTargetBlender.md#oncompute)
- [onGraphic](MorphTargetBlender.md#ongraphic)
- [onParentChange](MorphTargetBlender.md#onparentchange)
- [onAddChild](MorphTargetBlender.md#onaddchild)
- [onRemoveChild](MorphTargetBlender.md#onremovechild)
- [cloneTo](MorphTargetBlender.md#cloneto)
- [copyComponent](MorphTargetBlender.md#copycomponent)
- [beforeDestroy](MorphTargetBlender.md#beforedestroy)
- [destroy](MorphTargetBlender.md#destroy)
- [init](MorphTargetBlender.md#init)
- [getMorphRenderersByKey](MorphTargetBlender.md#getmorphrenderersbykey)
- [cloneMorphRenderers](MorphTargetBlender.md#clonemorphrenderers)
- [applyBlendShape](MorphTargetBlender.md#applyblendshape)

## Constructors

### constructor

• **new MorphTargetBlender**(): [`MorphTargetBlender`](MorphTargetBlender.md)

#### Returns

[`MorphTargetBlender`](MorphTargetBlender.md)

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

## Methods

### start

▸ **start**(): `void`

#### Returns

`void`

#### Inherited from

[ComponentBase](ComponentBase.md).[start](ComponentBase.md#start)

#### Defined in

components/ComponentBase.ts:78

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

components/anim/morphAnim/MorphTargetBlender.ts:22

___

### getMorphRenderersByKey

▸ **getMorphRenderersByKey**(`key`): [`SkinnedMeshRenderer2`](SkinnedMeshRenderer2.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

[`SkinnedMeshRenderer2`](SkinnedMeshRenderer2.md)[]

#### Defined in

components/anim/morphAnim/MorphTargetBlender.ts:49

___

### cloneMorphRenderers

▸ **cloneMorphRenderers**(): `Object`

#### Returns

`Object`

#### Defined in

components/anim/morphAnim/MorphTargetBlender.ts:53

___

### applyBlendShape

▸ **applyBlendShape**(`frame`, `keyMapper`, `multiplier?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `frame` | [`MorphTargetFrame`](MorphTargetFrame.md) | `undefined` |
| `keyMapper` | [`MorphTargetMapper`](../modules.md#morphtargetmapper) | `undefined` |
| `multiplier` | `number` | `1` |

#### Returns

`void`

#### Defined in

components/anim/morphAnim/MorphTargetBlender.ts:61
