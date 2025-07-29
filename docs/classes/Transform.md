[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / Transform

# Class: Transform

## Hierarchy

- [`ComponentBase`](ComponentBase.md)

  ↳ **`Transform`**

## Table of contents

### Constructors

- [constructor](Transform.md#constructor)

### Properties

- [object3D](Transform.md#object3d)
- [\_eventDispatcher](Transform.md#_eventdispatcher)
- [\_enable](Transform.md#_enable)
- [isDestroyed](Transform.md#isdestroyed)
- [LIMIT](Transform.md#limit)
- [COMPONENT\_NAME](Transform.md#component_name)
- [COMPONENT\_TYPE](Transform.md#component_type)
- [POSITION\_ONCHANGE](Transform.md#position_onchange)
- [ROTATION\_ONCHANGE](Transform.md#rotation_onchange)
- [SCALE\_ONCHANGE](Transform.md#scale_onchange)
- [PARENT\_ONCHANGE](Transform.md#parent_onchange)
- [CHILDREN\_ONCHANGE](Transform.md#children_onchange)
- [ADD\_ONCHANGE](Transform.md#add_onchange)
- [LOCAL\_ONCHANGE](Transform.md#local_onchange)
- [eventPositionChange](Transform.md#eventpositionchange)
- [eventRotationChange](Transform.md#eventrotationchange)
- [eventScaleChange](Transform.md#eventscalechange)
- [eventLocalChange](Transform.md#eventlocalchange)
- [onPositionChange](Transform.md#onpositionchange)
- [onRotationChange](Transform.md#onrotationchange)
- [onScaleChange](Transform.md#onscalechange)
- [\_localRot](Transform.md#_localrot)
- [index](Transform.md#index)
- [index2](Transform.md#index2)
- [\_worldMatrix](Transform.md#_worldmatrix)
- [static](Transform.md#static)
- [depthOrder](Transform.md#depthorder)

### Accessors

- [eventDispatcher](Transform.md#eventdispatcher)
- [isStart](Transform.md#isstart)
- [transform](Transform.md#transform)
- [localChange](Transform.md#localchange)
- [targetPos](Transform.md#targetpos)
- [parent](Transform.md#parent)
- [enable](Transform.md#enable)
- [scene3D](Transform.md#scene3d)
- [view3D](Transform.md#view3d)
- [up](Transform.md#up)
- [down](Transform.md#down)
- [forward](Transform.md#forward)
- [back](Transform.md#back)
- [left](Transform.md#left)
- [right](Transform.md#right)
- [localRotQuat](Transform.md#localrotquat)
- [worldMatrix](Transform.md#worldmatrix)
- [x](Transform.md#x)
- [y](Transform.md#y)
- [z](Transform.md#z)
- [scaleX](Transform.md#scalex)
- [scaleY](Transform.md#scaley)
- [scaleZ](Transform.md#scalez)
- [rotationX](Transform.md#rotationx)
- [rotationY](Transform.md#rotationy)
- [rotationZ](Transform.md#rotationz)
- [worldPosition](Transform.md#worldposition)
- [localPosition](Transform.md#localposition)
- [localRotation](Transform.md#localrotation)
- [localScale](Transform.md#localscale)
- [localDetailScale](Transform.md#localdetailscale)
- [localDetailRot](Transform.md#localdetailrot)
- [localDetailPos](Transform.md#localdetailpos)

### Methods

- [init](Transform.md#init)
- [onEnable](Transform.md#onenable)
- [onDisable](Transform.md#ondisable)
- [onUpdate](Transform.md#onupdate)
- [onLateUpdate](Transform.md#onlateupdate)
- [onBeforeUpdate](Transform.md#onbeforeupdate)
- [onCompute](Transform.md#oncompute)
- [onGraphic](Transform.md#ongraphic)
- [onParentChange](Transform.md#onparentchange)
- [onAddChild](Transform.md#onaddchild)
- [onRemoveChild](Transform.md#onremovechild)
- [copyComponent](Transform.md#copycomponent)
- [awake](Transform.md#awake)
- [start](Transform.md#start)
- [stop](Transform.md#stop)
- [notifyLocalChange](Transform.md#notifylocalchange)
- [notifyChange](Transform.md#notifychange)
- [updateWorldMatrix](Transform.md#updateworldmatrix)
- [updateChildTransform](Transform.md#updatechildtransform)
- [lookTarget](Transform.md#looktarget)
- [lookAt](Transform.md#lookat)
- [decomposeFromMatrix](Transform.md#decomposefrommatrix)
- [cloneTo](Transform.md#cloneto)
- [beforeDestroy](Transform.md#beforedestroy)
- [destroy](Transform.md#destroy)

## Constructors

### constructor

• **new Transform**(): [`Transform`](Transform.md)

#### Returns

[`Transform`](Transform.md)

#### Overrides

[ComponentBase](ComponentBase.md).[constructor](ComponentBase.md#constructor)

#### Defined in

components/Transform.ts:138

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

### LIMIT

▪ `Static` **LIMIT**: `number` = `1`

#### Defined in

components/Transform.ts:15

___

### COMPONENT\_NAME

▪ `Static` **COMPONENT\_NAME**: `string` = `"UUTransform"`

#### Defined in

components/Transform.ts:16

___

### COMPONENT\_TYPE

▪ `Static` **COMPONENT\_TYPE**: `string` = `"Transform"`

#### Defined in

components/Transform.ts:17

___

### POSITION\_ONCHANGE

▪ `Static` **POSITION\_ONCHANGE**: `string` = `"POSITION_ONCHANGE"`

#### Defined in

components/Transform.ts:18

___

### ROTATION\_ONCHANGE

▪ `Static` **ROTATION\_ONCHANGE**: `string` = `"ROTATION_ONCHANGE"`

#### Defined in

components/Transform.ts:19

___

### SCALE\_ONCHANGE

▪ `Static` **SCALE\_ONCHANGE**: `string` = `"SCALE_ONCHANGE"`

#### Defined in

components/Transform.ts:20

___

### PARENT\_ONCHANGE

▪ `Static` **PARENT\_ONCHANGE**: `string` = `"PARENT_ONCHANGE"`

#### Defined in

components/Transform.ts:21

___

### CHILDREN\_ONCHANGE

▪ `Static` **CHILDREN\_ONCHANGE**: `string` = `"CHILDREN_ONCHANGE"`

#### Defined in

components/Transform.ts:22

___

### ADD\_ONCHANGE

▪ `Static` **ADD\_ONCHANGE**: `string` = `"ADD_ONCHANGE"`

#### Defined in

components/Transform.ts:23

___

### LOCAL\_ONCHANGE

▪ `Static` **LOCAL\_ONCHANGE**: `string` = `"LOCAL_ONCHANGE"`

#### Defined in

components/Transform.ts:24

___

### eventPositionChange

• **eventPositionChange**: [`CEvent`](CEvent.md)

#### Defined in

components/Transform.ts:25

___

### eventRotationChange

• **eventRotationChange**: [`CEvent`](CEvent.md)

#### Defined in

components/Transform.ts:26

___

### eventScaleChange

• **eventScaleChange**: [`CEvent`](CEvent.md)

#### Defined in

components/Transform.ts:27

___

### eventLocalChange

• **eventLocalChange**: [`CEvent`](CEvent.md)

#### Defined in

components/Transform.ts:28

___

### onPositionChange

• **onPositionChange**: `Function`

#### Defined in

components/Transform.ts:29

___

### onRotationChange

• **onRotationChange**: `Function`

#### Defined in

components/Transform.ts:30

___

### onScaleChange

• **onScaleChange**: `Function`

#### Defined in

components/Transform.ts:31

___

### \_localRot

• **\_localRot**: [`Vector3`](Vector3.md)

#### Defined in

components/Transform.ts:35

___

### index

• **index**: `number`

#### Defined in

components/Transform.ts:41

___

### index2

• **index2**: `number`

#### Defined in

components/Transform.ts:42

___

### \_worldMatrix

• `Readonly` **\_worldMatrix**: [`Matrix4`](Matrix4.md)

#### Defined in

components/Transform.ts:49

___

### static

• **static**: `boolean` = `false`

#### Defined in

components/Transform.ts:51

___

### depthOrder

• **depthOrder**: `number` = `0`

#### Defined in

components/Transform.ts:52

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

### localChange

• `get` **localChange**(): `boolean`

#### Returns

`boolean`

#### Defined in

components/Transform.ts:54

• `set` **localChange**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

components/Transform.ts:58

___

### targetPos

• `get` **targetPos**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

components/Transform.ts:62

• `set` **targetPos**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

components/Transform.ts:65

___

### parent

• `get` **parent**(): [`Transform`](Transform.md)

#### Returns

[`Transform`](Transform.md)

#### Defined in

components/Transform.ts:69

• `set` **parent**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Transform`](Transform.md) |

#### Returns

`void`

#### Defined in

components/Transform.ts:73

___

### enable

• `get` **enable**(): `boolean`

#### Returns

`boolean`

#### Overrides

ComponentBase.enable

#### Defined in

components/Transform.ts:119

• `set` **enable**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Overrides

ComponentBase.enable

#### Defined in

components/Transform.ts:108

___

### scene3D

• `get` **scene3D**(): [`Scene3D`](Scene3D.md)

#### Returns

[`Scene3D`](Scene3D.md)

#### Defined in

components/Transform.ts:123

• `set` **scene3D**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Scene3D`](Scene3D.md) |

#### Returns

`void`

#### Defined in

components/Transform.ts:127

___

### view3D

• `get` **view3D**(): [`View3D`](View3D.md)

#### Returns

[`View3D`](View3D.md)

#### Defined in

components/Transform.ts:131

___

### up

• `get` **up**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

components/Transform.ts:188

• `set` **up**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

components/Transform.ts:193

___

### down

• `get` **down**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

components/Transform.ts:200

• `set` **down**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

components/Transform.ts:205

___

### forward

• `get` **forward**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

components/Transform.ts:219

• `set` **forward**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

components/Transform.ts:224

___

### back

• `get` **back**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

components/Transform.ts:238

• `set` **back**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

components/Transform.ts:243

___

### left

• `get` **left**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

components/Transform.ts:250

• `set` **left**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

components/Transform.ts:255

___

### right

• `get` **right**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

components/Transform.ts:262

• `set` **right**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

components/Transform.ts:267

___

### localRotQuat

• `get` **localRotQuat**(): [`Quaternion`](Quaternion.md)

#### Returns

[`Quaternion`](Quaternion.md)

#### Defined in

components/Transform.ts:281

• `set` **localRotQuat**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Quaternion`](Quaternion.md) |

#### Returns

`void`

#### Defined in

components/Transform.ts:288

___

### worldMatrix

• `get` **worldMatrix**(): [`Matrix4`](Matrix4.md)

#### Returns

[`Matrix4`](Matrix4.md)

#### Defined in

components/Transform.ts:330

___

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Defined in

components/Transform.ts:429

• `set` **x**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

components/Transform.ts:411

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Defined in

components/Transform.ts:451

• `set` **y**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

components/Transform.ts:433

___

### z

• `get` **z**(): `number`

#### Returns

`number`

#### Defined in

components/Transform.ts:473

• `set` **z**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

components/Transform.ts:455

___

### scaleX

• `get` **scaleX**(): `number`

#### Returns

`number`

#### Defined in

components/Transform.ts:495

• `set` **scaleX**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

components/Transform.ts:477

___

### scaleY

• `get` **scaleY**(): `number`

#### Returns

`number`

#### Defined in

components/Transform.ts:517

• `set` **scaleY**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

components/Transform.ts:499

___

### scaleZ

• `get` **scaleZ**(): `number`

#### Returns

`number`

#### Defined in

components/Transform.ts:539

• `set` **scaleZ**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

components/Transform.ts:521

___

### rotationX

• `get` **rotationX**(): `number`

#### Returns

`number`

#### Defined in

components/Transform.ts:561

• `set` **rotationX**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

components/Transform.ts:543

___

### rotationY

• `get` **rotationY**(): `number`

#### Returns

`number`

#### Defined in

components/Transform.ts:583

• `set` **rotationY**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

components/Transform.ts:565

___

### rotationZ

• `get` **rotationZ**(): `number`

#### Returns

`number`

#### Defined in

components/Transform.ts:605

• `set` **rotationZ**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

components/Transform.ts:587

___

### worldPosition

• `get` **worldPosition**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

components/Transform.ts:609

___

### localPosition

• `get` **localPosition**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

components/Transform.ts:635

• `set` **localPosition**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

components/Transform.ts:616

___

### localRotation

• `get` **localRotation**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

components/Transform.ts:659

• `set` **localRotation**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

components/Transform.ts:639

___

### localScale

• `get` **localScale**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

components/Transform.ts:674

• `set` **localScale**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

components/Transform.ts:663

___

### localDetailScale

• `get` **localDetailScale**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

components/Transform.ts:678

• `set` **localDetailScale**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

components/Transform.ts:682

___

### localDetailRot

• `get` **localDetailRot**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

components/Transform.ts:687

• `set` **localDetailRot**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

components/Transform.ts:691

___

### localDetailPos

• `get` **localDetailPos**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

components/Transform.ts:696

• `set` **localDetailPos**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

components/Transform.ts:699

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

### awake

▸ **awake**(): `void`

#### Returns

`void`

#### Defined in

components/Transform.ts:168

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[start](ComponentBase.md#start)

#### Defined in

components/Transform.ts:170

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[stop](ComponentBase.md#stop)

#### Defined in

components/Transform.ts:172

___

### notifyLocalChange

▸ **notifyLocalChange**(): `void`

#### Returns

`void`

#### Defined in

components/Transform.ts:174

___

### notifyChange

▸ **notifyChange**(): `void`

#### Returns

`void`

#### Defined in

components/Transform.ts:313

___

### updateWorldMatrix

▸ **updateWorldMatrix**(`force?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `force` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

components/Transform.ts:335

___

### updateChildTransform

▸ **updateChildTransform**(): `void`

#### Returns

`void`

#### Defined in

components/Transform.ts:357

___

### lookTarget

▸ **lookTarget**(`target`, `up?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `target` | [`Vector3`](Vector3.md) | `undefined` |
| `up` | [`Vector3`](Vector3.md) | `Vector3.UP` |

#### Returns

`void`

#### Defined in

components/Transform.ts:370

___

### lookAt

▸ **lookAt**(`pos`, `target`, `up?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `pos` | [`Vector3`](Vector3.md) | `undefined` |
| `target` | [`Vector3`](Vector3.md) | `undefined` |
| `up` | [`Vector3`](Vector3.md) | `Vector3.UP` |

#### Returns

`void`

#### Defined in

components/Transform.ts:374

___

### decomposeFromMatrix

▸ **decomposeFromMatrix**(`matrix`, `orientationStyle?`): `this`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `matrix` | [`Matrix4`](Matrix4.md) | `undefined` |
| `orientationStyle` | `string` | `"eulerAngles"` |

#### Returns

`this`

#### Defined in

components/Transform.ts:390

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

components/Transform.ts:405

___

### beforeDestroy

▸ **beforeDestroy**(`force?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `force?` | `boolean` |

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[beforeDestroy](ComponentBase.md#beforedestroy)

#### Defined in

components/Transform.ts:704

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[destroy](ComponentBase.md#destroy)

#### Defined in

components/Transform.ts:711
