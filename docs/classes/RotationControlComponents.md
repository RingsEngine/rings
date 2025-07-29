[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / RotationControlComponents

# Class: RotationControlComponents

## Hierarchy

- [`TransformControllerBaseComponent`](TransformControllerBaseComponent.md)

  ↳ **`RotationControlComponents`**

## Table of contents

### Constructors

- [constructor](RotationControlComponents.md#constructor)

### Properties

- [object3D](RotationControlComponents.md#object3d)
- [\_eventDispatcher](RotationControlComponents.md#_eventdispatcher)
- [\_enable](RotationControlComponents.md#_enable)
- [isDestroyed](RotationControlComponents.md#isdestroyed)
- [mLastAngle](RotationControlComponents.md#mlastangle)
- [mAxis](RotationControlComponents.md#maxis)
- [mAxisColor](RotationControlComponents.md#maxiscolor)
- [mContainer](RotationControlComponents.md#mcontainer)
- [mAxisMaterial](RotationControlComponents.md#maxismaterial)
- [mAxisCollider](RotationControlComponents.md#maxiscollider)
- [currentAxis](RotationControlComponents.md#currentaxis)
- [beginPoint](RotationControlComponents.md#beginpoint)
- [beginMousePos](RotationControlComponents.md#beginmousepos)
- [currentPoint](RotationControlComponents.md#currentpoint)
- [lastMoveObj](RotationControlComponents.md#lastmoveobj)
- [lastMoveAxis](RotationControlComponents.md#lastmoveaxis)

### Accessors

- [eventDispatcher](RotationControlComponents.md#eventdispatcher)
- [isStart](RotationControlComponents.md#isstart)
- [transform](RotationControlComponents.md#transform)
- [enable](RotationControlComponents.md#enable)
- [target](RotationControlComponents.md#target)
- [mX](RotationControlComponents.md#mx)
- [mY](RotationControlComponents.md#my)
- [mZ](RotationControlComponents.md#mz)
- [transformSpaceMode](RotationControlComponents.md#transformspacemode)

### Methods

- [stop](RotationControlComponents.md#stop)
- [onLateUpdate](RotationControlComponents.md#onlateupdate)
- [onBeforeUpdate](RotationControlComponents.md#onbeforeupdate)
- [onCompute](RotationControlComponents.md#oncompute)
- [onGraphic](RotationControlComponents.md#ongraphic)
- [onParentChange](RotationControlComponents.md#onparentchange)
- [onAddChild](RotationControlComponents.md#onaddchild)
- [onRemoveChild](RotationControlComponents.md#onremovechild)
- [cloneTo](RotationControlComponents.md#cloneto)
- [copyComponent](RotationControlComponents.md#copycomponent)
- [beforeDestroy](RotationControlComponents.md#beforedestroy)
- [destroy](RotationControlComponents.md#destroy)
- [applyLocalTransform](RotationControlComponents.md#applylocaltransform)
- [getAngle](RotationControlComponents.md#getangle)
- [applyGlobalTransform](RotationControlComponents.md#applyglobaltransform)
- [onMouseDown](RotationControlComponents.md#onmousedown)
- [onMouseUp](RotationControlComponents.md#onmouseup)
- [createCustomAxis](RotationControlComponents.md#createcustomaxis)
- [createAxis](RotationControlComponents.md#createaxis)
- [pickAxis](RotationControlComponents.md#pickaxis)
- [init](RotationControlComponents.md#init)
- [start](RotationControlComponents.md#start)
- [onEnable](RotationControlComponents.md#onenable)
- [onDisable](RotationControlComponents.md#ondisable)
- [reset](RotationControlComponents.md#reset)
- [onMouseMove](RotationControlComponents.md#onmousemove)
- [onUpdate](RotationControlComponents.md#onupdate)

## Constructors

### constructor

• **new RotationControlComponents**(): [`RotationControlComponents`](RotationControlComponents.md)

#### Returns

[`RotationControlComponents`](RotationControlComponents.md)

#### Inherited from

[TransformControllerBaseComponent](TransformControllerBaseComponent.md).[constructor](TransformControllerBaseComponent.md#constructor)

#### Defined in

util/transformUtil/TransformControllerBaseComponent.ts:28

## Properties

### object3D

• **object3D**: [`Object3D`](Object3D.md) = `null`

#### Inherited from

[TransformControllerBaseComponent](TransformControllerBaseComponent.md).[object3D](TransformControllerBaseComponent.md#object3d)

#### Defined in

components/ComponentBase.ts:9

___

### \_eventDispatcher

• `Protected` **\_eventDispatcher**: [`CEventDispatcher`](CEventDispatcher.md)

#### Inherited from

[TransformControllerBaseComponent](TransformControllerBaseComponent.md).[_eventDispatcher](TransformControllerBaseComponent.md#_eventdispatcher)

#### Defined in

components/ComponentBase.ts:10

___

### \_enable

• `Protected` **\_enable**: `boolean` = `true`

#### Inherited from

[TransformControllerBaseComponent](TransformControllerBaseComponent.md).[_enable](TransformControllerBaseComponent.md#_enable)

#### Defined in

components/ComponentBase.ts:18

___

### isDestroyed

• **isDestroyed**: `boolean` = `false`

#### Inherited from

[TransformControllerBaseComponent](TransformControllerBaseComponent.md).[isDestroyed](TransformControllerBaseComponent.md#isdestroyed)

#### Defined in

components/ComponentBase.ts:20

___

### mLastAngle

• `Protected` **mLastAngle**: `number` = `0`

#### Defined in

util/transformUtil/RotationControlComponents.ts:131

___

### mAxis

• `Protected` **mAxis**: [`Object3D`](Object3D.md)[]

#### Inherited from

[TransformControllerBaseComponent](TransformControllerBaseComponent.md).[mAxis](TransformControllerBaseComponent.md#maxis)

#### Defined in

util/transformUtil/TransformControllerBaseComponent.ts:22

___

### mAxisColor

• `Protected` **mAxisColor**: [`Color`](Color.md)[]

#### Inherited from

[TransformControllerBaseComponent](TransformControllerBaseComponent.md).[mAxisColor](TransformControllerBaseComponent.md#maxiscolor)

#### Defined in

util/transformUtil/TransformControllerBaseComponent.ts:23

___

### mContainer

• `Protected` **mContainer**: [`Object3D`](Object3D.md)

#### Inherited from

[TransformControllerBaseComponent](TransformControllerBaseComponent.md).[mContainer](TransformControllerBaseComponent.md#mcontainer)

#### Defined in

util/transformUtil/TransformControllerBaseComponent.ts:24

___

### mAxisMaterial

• `Protected` **mAxisMaterial**: [`UnLitMaterial`](UnLitMaterial.md)[]

#### Inherited from

[TransformControllerBaseComponent](TransformControllerBaseComponent.md).[mAxisMaterial](TransformControllerBaseComponent.md#maxismaterial)

#### Defined in

util/transformUtil/TransformControllerBaseComponent.ts:25

___

### mAxisCollider

• `Protected` **mAxisCollider**: [`ColliderComponent`](ColliderComponent.md)[]

#### Inherited from

[TransformControllerBaseComponent](TransformControllerBaseComponent.md).[mAxisCollider](TransformControllerBaseComponent.md#maxiscollider)

#### Defined in

util/transformUtil/TransformControllerBaseComponent.ts:26

___

### currentAxis

• `Protected` **currentAxis**: [`TransformAxisEnum`](../enums/TransformAxisEnum.md) = `TransformAxisEnum.NONE`

#### Inherited from

[TransformControllerBaseComponent](TransformControllerBaseComponent.md).[currentAxis](TransformControllerBaseComponent.md#currentaxis)

#### Defined in

util/transformUtil/TransformControllerBaseComponent.ts:193

___

### beginPoint

• `Protected` **beginPoint**: [`Vector3`](Vector3.md)

#### Inherited from

[TransformControllerBaseComponent](TransformControllerBaseComponent.md).[beginPoint](TransformControllerBaseComponent.md#beginpoint)

#### Defined in

util/transformUtil/TransformControllerBaseComponent.ts:194

___

### beginMousePos

• `Protected` **beginMousePos**: [`Vector3`](Vector3.md)

#### Inherited from

[TransformControllerBaseComponent](TransformControllerBaseComponent.md).[beginMousePos](TransformControllerBaseComponent.md#beginmousepos)

#### Defined in

util/transformUtil/TransformControllerBaseComponent.ts:195

___

### currentPoint

• `Protected` **currentPoint**: [`Vector3`](Vector3.md)

#### Inherited from

[TransformControllerBaseComponent](TransformControllerBaseComponent.md).[currentPoint](TransformControllerBaseComponent.md#currentpoint)

#### Defined in

util/transformUtil/TransformControllerBaseComponent.ts:196

___

### lastMoveObj

• `Protected` **lastMoveObj**: [`Object3D`](Object3D.md)

#### Inherited from

[TransformControllerBaseComponent](TransformControllerBaseComponent.md).[lastMoveObj](TransformControllerBaseComponent.md#lastmoveobj)

#### Defined in

util/transformUtil/TransformControllerBaseComponent.ts:223

___

### lastMoveAxis

• `Protected` **lastMoveAxis**: [`TransformAxisEnum`](../enums/TransformAxisEnum.md)

#### Inherited from

[TransformControllerBaseComponent](TransformControllerBaseComponent.md).[lastMoveAxis](TransformControllerBaseComponent.md#lastmoveaxis)

#### Defined in

util/transformUtil/TransformControllerBaseComponent.ts:224

## Accessors

### eventDispatcher

• `get` **eventDispatcher**(): [`CEventDispatcher`](CEventDispatcher.md)

#### Returns

[`CEventDispatcher`](CEventDispatcher.md)

#### Inherited from

TransformControllerBaseComponent.eventDispatcher

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

TransformControllerBaseComponent.eventDispatcher

#### Defined in

components/ComponentBase.ts:15

___

### isStart

• `get` **isStart**(): `boolean`

#### Returns

`boolean`

#### Inherited from

TransformControllerBaseComponent.isStart

#### Defined in

components/ComponentBase.ts:21

___

### transform

• `get` **transform**(): [`Transform`](Transform.md)

#### Returns

[`Transform`](Transform.md)

#### Inherited from

TransformControllerBaseComponent.transform

#### Defined in

components/ComponentBase.ts:24

___

### enable

• `get` **enable**(): `boolean`

#### Returns

`boolean`

#### Inherited from

TransformControllerBaseComponent.enable

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

TransformControllerBaseComponent.enable

#### Defined in

components/ComponentBase.ts:27

___

### target

• `get` **target**(): [`Object3D`](Object3D.md)

#### Returns

[`Object3D`](Object3D.md)

#### Inherited from

TransformControllerBaseComponent.target

#### Defined in

util/transformUtil/TransformControllerBaseComponent.ts:37

___

### mX

• `get` **mX**(): [`Object3D`](Object3D.md)

#### Returns

[`Object3D`](Object3D.md)

#### Inherited from

TransformControllerBaseComponent.mX

#### Defined in

util/transformUtil/TransformControllerBaseComponent.ts:41

___

### mY

• `get` **mY**(): [`Object3D`](Object3D.md)

#### Returns

[`Object3D`](Object3D.md)

#### Inherited from

TransformControllerBaseComponent.mY

#### Defined in

util/transformUtil/TransformControllerBaseComponent.ts:45

___

### mZ

• `get` **mZ**(): [`Object3D`](Object3D.md)

#### Returns

[`Object3D`](Object3D.md)

#### Inherited from

TransformControllerBaseComponent.mZ

#### Defined in

util/transformUtil/TransformControllerBaseComponent.ts:49

___

### transformSpaceMode

• `get` **transformSpaceMode**(): [`TransformSpaceMode`](../enums/TransformSpaceMode.md)

#### Returns

[`TransformSpaceMode`](../enums/TransformSpaceMode.md)

#### Inherited from

TransformControllerBaseComponent.transformSpaceMode

#### Defined in

util/transformUtil/TransformControllerBaseComponent.ts:53

## Methods

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

[TransformControllerBaseComponent](TransformControllerBaseComponent.md).[stop](TransformControllerBaseComponent.md#stop)

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

[TransformControllerBaseComponent](TransformControllerBaseComponent.md).[onLateUpdate](TransformControllerBaseComponent.md#onlateupdate)

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

[TransformControllerBaseComponent](TransformControllerBaseComponent.md).[onBeforeUpdate](TransformControllerBaseComponent.md#onbeforeupdate)

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

[TransformControllerBaseComponent](TransformControllerBaseComponent.md).[onCompute](TransformControllerBaseComponent.md#oncompute)

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

[TransformControllerBaseComponent](TransformControllerBaseComponent.md).[onGraphic](TransformControllerBaseComponent.md#ongraphic)

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

[TransformControllerBaseComponent](TransformControllerBaseComponent.md).[onParentChange](TransformControllerBaseComponent.md#onparentchange)

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

[TransformControllerBaseComponent](TransformControllerBaseComponent.md).[onAddChild](TransformControllerBaseComponent.md#onaddchild)

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

[TransformControllerBaseComponent](TransformControllerBaseComponent.md).[onRemoveChild](TransformControllerBaseComponent.md#onremovechild)

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

[TransformControllerBaseComponent](TransformControllerBaseComponent.md).[cloneTo](TransformControllerBaseComponent.md#cloneto)

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

[TransformControllerBaseComponent](TransformControllerBaseComponent.md).[copyComponent](TransformControllerBaseComponent.md#copycomponent)

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

[TransformControllerBaseComponent](TransformControllerBaseComponent.md).[beforeDestroy](TransformControllerBaseComponent.md#beforedestroy)

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

[TransformControllerBaseComponent](TransformControllerBaseComponent.md).[destroy](TransformControllerBaseComponent.md#destroy)

#### Defined in

components/ComponentBase.ts:139

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

#### Overrides

[TransformControllerBaseComponent](TransformControllerBaseComponent.md).[applyLocalTransform](TransformControllerBaseComponent.md#applylocaltransform)

#### Defined in

util/transformUtil/RotationControlComponents.ts:17

___

### getAngle

▸ **getAngle**(): `number`

#### Returns

`number`

#### Defined in

util/transformUtil/RotationControlComponents.ts:62

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

#### Overrides

[TransformControllerBaseComponent](TransformControllerBaseComponent.md).[applyGlobalTransform](TransformControllerBaseComponent.md#applyglobaltransform)

#### Defined in

util/transformUtil/RotationControlComponents.ts:132

___

### onMouseDown

▸ **onMouseDown**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`PointerEvent3D`](PointerEvent3D.md) |

#### Returns

`void`

#### Overrides

[TransformControllerBaseComponent](TransformControllerBaseComponent.md).[onMouseDown](TransformControllerBaseComponent.md#onmousedown)

#### Defined in

util/transformUtil/RotationControlComponents.ts:184

___

### onMouseUp

▸ **onMouseUp**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`PointerEvent3D`](PointerEvent3D.md) |

#### Returns

`void`

#### Overrides

[TransformControllerBaseComponent](TransformControllerBaseComponent.md).[onMouseUp](TransformControllerBaseComponent.md#onmouseup)

#### Defined in

util/transformUtil/RotationControlComponents.ts:195

___

### createCustomAxis

▸ **createCustomAxis**(`axis`): [`Object3D`](Object3D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `axis` | [`TransformAxisEnum`](../enums/TransformAxisEnum.md) |

#### Returns

[`Object3D`](Object3D.md)

#### Overrides

[TransformControllerBaseComponent](TransformControllerBaseComponent.md).[createCustomAxis](TransformControllerBaseComponent.md#createcustomaxis)

#### Defined in

util/transformUtil/RotationControlComponents.ts:204

___

### createAxis

▸ **createAxis**(`axis`): [`Object3D`](Object3D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `axis` | [`TransformAxisEnum`](../enums/TransformAxisEnum.md) |

#### Returns

[`Object3D`](Object3D.md)

#### Overrides

[TransformControllerBaseComponent](TransformControllerBaseComponent.md).[createAxis](TransformControllerBaseComponent.md#createaxis)

#### Defined in

util/transformUtil/RotationControlComponents.ts:209

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

#### Overrides

[TransformControllerBaseComponent](TransformControllerBaseComponent.md).[pickAxis](TransformControllerBaseComponent.md#pickaxis)

#### Defined in

util/transformUtil/RotationControlComponents.ts:241

___

### init

▸ **init**(`param?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `param?` | `any` |

#### Returns

`void`

#### Inherited from

[TransformControllerBaseComponent](TransformControllerBaseComponent.md).[init](TransformControllerBaseComponent.md#init)

#### Defined in

util/transformUtil/TransformControllerBaseComponent.ts:57

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Inherited from

[TransformControllerBaseComponent](TransformControllerBaseComponent.md).[start](TransformControllerBaseComponent.md#start)

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

#### Inherited from

[TransformControllerBaseComponent](TransformControllerBaseComponent.md).[onEnable](TransformControllerBaseComponent.md#onenable)

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

#### Inherited from

[TransformControllerBaseComponent](TransformControllerBaseComponent.md).[onDisable](TransformControllerBaseComponent.md#ondisable)

#### Defined in

util/transformUtil/TransformControllerBaseComponent.ts:101

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Inherited from

[TransformControllerBaseComponent](TransformControllerBaseComponent.md).[reset](TransformControllerBaseComponent.md#reset)

#### Defined in

util/transformUtil/TransformControllerBaseComponent.ts:105

___

### onMouseMove

▸ **onMouseMove**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`PointerEvent3D`](PointerEvent3D.md) |

#### Returns

`void`

#### Inherited from

[TransformControllerBaseComponent](TransformControllerBaseComponent.md).[onMouseMove](TransformControllerBaseComponent.md#onmousemove)

#### Defined in

util/transformUtil/TransformControllerBaseComponent.ts:225

___

### onUpdate

▸ **onUpdate**(`view?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`void`

#### Inherited from

[TransformControllerBaseComponent](TransformControllerBaseComponent.md).[onUpdate](TransformControllerBaseComponent.md#onupdate)

#### Defined in

util/transformUtil/TransformControllerBaseComponent.ts:318
