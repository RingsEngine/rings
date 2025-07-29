[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / TransformControllerBaseComponent

# Class: TransformControllerBaseComponent

## Hierarchy

- [`ComponentBase`](ComponentBase.md)

  ↳ **`TransformControllerBaseComponent`**

  ↳↳ [`RotationControlComponents`](RotationControlComponents.md)

  ↳↳ [`ScaleControlComponents`](ScaleControlComponents.md)

  ↳↳ [`TranslationControlComponents`](TranslationControlComponents.md)

## Table of contents

### Constructors

- [constructor](TransformControllerBaseComponent.md#constructor)

### Properties

- [object3D](TransformControllerBaseComponent.md#object3d)
- [\_eventDispatcher](TransformControllerBaseComponent.md#_eventdispatcher)
- [\_enable](TransformControllerBaseComponent.md#_enable)
- [isDestroyed](TransformControllerBaseComponent.md#isdestroyed)
- [mAxis](TransformControllerBaseComponent.md#maxis)
- [mAxisColor](TransformControllerBaseComponent.md#maxiscolor)
- [mContainer](TransformControllerBaseComponent.md#mcontainer)
- [mAxisMaterial](TransformControllerBaseComponent.md#maxismaterial)
- [mAxisCollider](TransformControllerBaseComponent.md#maxiscollider)
- [currentAxis](TransformControllerBaseComponent.md#currentaxis)
- [beginPoint](TransformControllerBaseComponent.md#beginpoint)
- [beginMousePos](TransformControllerBaseComponent.md#beginmousepos)
- [currentPoint](TransformControllerBaseComponent.md#currentpoint)
- [lastMoveObj](TransformControllerBaseComponent.md#lastmoveobj)
- [lastMoveAxis](TransformControllerBaseComponent.md#lastmoveaxis)

### Accessors

- [eventDispatcher](TransformControllerBaseComponent.md#eventdispatcher)
- [isStart](TransformControllerBaseComponent.md#isstart)
- [transform](TransformControllerBaseComponent.md#transform)
- [enable](TransformControllerBaseComponent.md#enable)
- [target](TransformControllerBaseComponent.md#target)
- [mX](TransformControllerBaseComponent.md#mx)
- [mY](TransformControllerBaseComponent.md#my)
- [mZ](TransformControllerBaseComponent.md#mz)
- [transformSpaceMode](TransformControllerBaseComponent.md#transformspacemode)

### Methods

- [stop](TransformControllerBaseComponent.md#stop)
- [onLateUpdate](TransformControllerBaseComponent.md#onlateupdate)
- [onBeforeUpdate](TransformControllerBaseComponent.md#onbeforeupdate)
- [onCompute](TransformControllerBaseComponent.md#oncompute)
- [onGraphic](TransformControllerBaseComponent.md#ongraphic)
- [onParentChange](TransformControllerBaseComponent.md#onparentchange)
- [onAddChild](TransformControllerBaseComponent.md#onaddchild)
- [onRemoveChild](TransformControllerBaseComponent.md#onremovechild)
- [cloneTo](TransformControllerBaseComponent.md#cloneto)
- [copyComponent](TransformControllerBaseComponent.md#copycomponent)
- [beforeDestroy](TransformControllerBaseComponent.md#beforedestroy)
- [destroy](TransformControllerBaseComponent.md#destroy)
- [init](TransformControllerBaseComponent.md#init)
- [start](TransformControllerBaseComponent.md#start)
- [onEnable](TransformControllerBaseComponent.md#onenable)
- [onDisable](TransformControllerBaseComponent.md#ondisable)
- [reset](TransformControllerBaseComponent.md#reset)
- [pickAxis](TransformControllerBaseComponent.md#pickaxis)
- [onMouseDown](TransformControllerBaseComponent.md#onmousedown)
- [onMouseMove](TransformControllerBaseComponent.md#onmousemove)
- [onMouseUp](TransformControllerBaseComponent.md#onmouseup)
- [onUpdate](TransformControllerBaseComponent.md#onupdate)
- [applyLocalTransform](TransformControllerBaseComponent.md#applylocaltransform)
- [applyGlobalTransform](TransformControllerBaseComponent.md#applyglobaltransform)
- [createCustomAxis](TransformControllerBaseComponent.md#createcustomaxis)
- [createAxis](TransformControllerBaseComponent.md#createaxis)

## Constructors

### constructor

• **new TransformControllerBaseComponent**(): [`TransformControllerBaseComponent`](TransformControllerBaseComponent.md)

#### Returns

[`TransformControllerBaseComponent`](TransformControllerBaseComponent.md)

#### Overrides

[ComponentBase](ComponentBase.md).[constructor](ComponentBase.md#constructor)

#### Defined in

util/transformUtil/TransformControllerBaseComponent.ts:28

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

### mAxis

• `Protected` **mAxis**: [`Object3D`](Object3D.md)[]

#### Defined in

util/transformUtil/TransformControllerBaseComponent.ts:22

___

### mAxisColor

• `Protected` **mAxisColor**: [`Color`](Color.md)[]

#### Defined in

util/transformUtil/TransformControllerBaseComponent.ts:23

___

### mContainer

• `Protected` **mContainer**: [`Object3D`](Object3D.md)

#### Defined in

util/transformUtil/TransformControllerBaseComponent.ts:24

___

### mAxisMaterial

• `Protected` **mAxisMaterial**: [`UnLitMaterial`](UnLitMaterial.md)[]

#### Defined in

util/transformUtil/TransformControllerBaseComponent.ts:25

___

### mAxisCollider

• `Protected` **mAxisCollider**: [`ColliderComponent`](ColliderComponent.md)[]

#### Defined in

util/transformUtil/TransformControllerBaseComponent.ts:26

___

### currentAxis

• `Protected` **currentAxis**: [`TransformAxisEnum`](../enums/TransformAxisEnum.md) = `TransformAxisEnum.NONE`

#### Defined in

util/transformUtil/TransformControllerBaseComponent.ts:193

___

### beginPoint

• `Protected` **beginPoint**: [`Vector3`](Vector3.md)

#### Defined in

util/transformUtil/TransformControllerBaseComponent.ts:194

___

### beginMousePos

• `Protected` **beginMousePos**: [`Vector3`](Vector3.md)

#### Defined in

util/transformUtil/TransformControllerBaseComponent.ts:195

___

### currentPoint

• `Protected` **currentPoint**: [`Vector3`](Vector3.md)

#### Defined in

util/transformUtil/TransformControllerBaseComponent.ts:196

___

### lastMoveObj

• `Protected` **lastMoveObj**: [`Object3D`](Object3D.md)

#### Defined in

util/transformUtil/TransformControllerBaseComponent.ts:223

___

### lastMoveAxis

• `Protected` **lastMoveAxis**: [`TransformAxisEnum`](../enums/TransformAxisEnum.md)

#### Defined in

util/transformUtil/TransformControllerBaseComponent.ts:224

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

• `get` **target**(): [`Object3D`](Object3D.md)

#### Returns

[`Object3D`](Object3D.md)

#### Defined in

util/transformUtil/TransformControllerBaseComponent.ts:37

___

### mX

• `get` **mX**(): [`Object3D`](Object3D.md)

#### Returns

[`Object3D`](Object3D.md)

#### Defined in

util/transformUtil/TransformControllerBaseComponent.ts:41

___

### mY

• `get` **mY**(): [`Object3D`](Object3D.md)

#### Returns

[`Object3D`](Object3D.md)

#### Defined in

util/transformUtil/TransformControllerBaseComponent.ts:45

___

### mZ

• `get` **mZ**(): [`Object3D`](Object3D.md)

#### Returns

[`Object3D`](Object3D.md)

#### Defined in

util/transformUtil/TransformControllerBaseComponent.ts:49

___

### transformSpaceMode

• `get` **transformSpaceMode**(): [`TransformSpaceMode`](../enums/TransformSpaceMode.md)

#### Returns

[`TransformSpaceMode`](../enums/TransformSpaceMode.md)

#### Defined in

util/transformUtil/TransformControllerBaseComponent.ts:53

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

util/transformUtil/TransformControllerBaseComponent.ts:57

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[start](ComponentBase.md#start)

#### Defined in

util/transformUtil/TransformControllerBaseComponent.ts:94

___

### onEnable

▸ **onEnable**(`view?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[onEnable](ComponentBase.md#onenable)

#### Defined in

util/transformUtil/TransformControllerBaseComponent.ts:96

___

### onDisable

▸ **onDisable**(`view?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[onDisable](ComponentBase.md#ondisable)

#### Defined in

util/transformUtil/TransformControllerBaseComponent.ts:101

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

util/transformUtil/TransformControllerBaseComponent.ts:105

___

### pickAxis

▸ **pickAxis**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `intersectPoint?` | [`Vector3`](Vector3.md) |
| `distance` | `number` |
| `obj` | [`Object3D`](Object3D.md) |
| `axis` | [`TransformAxisEnum`](../enums/TransformAxisEnum.md) |

#### Defined in

util/transformUtil/TransformControllerBaseComponent.ts:144

___

### onMouseDown

▸ **onMouseDown**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`PointerEvent3D`](PointerEvent3D.md) |

#### Returns

`void`

#### Defined in

util/transformUtil/TransformControllerBaseComponent.ts:197

___

### onMouseMove

▸ **onMouseMove**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`PointerEvent3D`](PointerEvent3D.md) |

#### Returns

`void`

#### Defined in

util/transformUtil/TransformControllerBaseComponent.ts:225

___

### onMouseUp

▸ **onMouseUp**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`PointerEvent3D`](PointerEvent3D.md) |

#### Returns

`void`

#### Defined in

util/transformUtil/TransformControllerBaseComponent.ts:310

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

util/transformUtil/TransformControllerBaseComponent.ts:318

___

### applyLocalTransform

▸ **applyLocalTransform**(`currentAxis`, `offset`, `distance`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `currentAxis` | [`TransformAxisEnum`](../enums/TransformAxisEnum.md) |
| `offset` | [`Vector3`](Vector3.md) |
| `distance` | `number` |

#### Returns

`void`

#### Defined in

util/transformUtil/TransformControllerBaseComponent.ts:336

___

### applyGlobalTransform

▸ **applyGlobalTransform**(`currentAxis`, `offset`, `distance`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `currentAxis` | [`TransformAxisEnum`](../enums/TransformAxisEnum.md) |
| `offset` | [`Vector3`](Vector3.md) |
| `distance` | `number` |

#### Returns

`void`

#### Defined in

util/transformUtil/TransformControllerBaseComponent.ts:344

___

### createCustomAxis

▸ **createCustomAxis**(`axis`): [`Object3D`](Object3D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `axis` | [`TransformAxisEnum`](../enums/TransformAxisEnum.md) |

#### Returns

[`Object3D`](Object3D.md)

#### Defined in

util/transformUtil/TransformControllerBaseComponent.ts:352

___

### createAxis

▸ **createAxis**(`axis`): [`Object3D`](Object3D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `axis` | [`TransformAxisEnum`](../enums/TransformAxisEnum.md) |

#### Returns

[`Object3D`](Object3D.md)

#### Defined in

util/transformUtil/TransformControllerBaseComponent.ts:357
