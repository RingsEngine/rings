[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / UITransform

# Class: UITransform

监听 transform

## Hierarchy

- [`ComponentBase`](ComponentBase.md)

  ↳ **`UITransform`**

## Table of contents

### Constructors

- [constructor](UITransform.md#constructor)

### Properties

- [object3D](UITransform.md#object3d)
- [\_eventDispatcher](UITransform.md#_eventdispatcher)
- [\_enable](UITransform.md#_enable)
- [isDestroyed](UITransform.md#isdestroyed)
- [useParentPivot](UITransform.md#useparentpivot)
- [parent](UITransform.md#parent)
- [pivotX](UITransform.md#pivotx)
- [pivotY](UITransform.md#pivoty)
- [\_uiInteractiveList](UITransform.md#_uiinteractivelist)
- [needUpdateQuads](UITransform.md#needupdatequads)

### Accessors

- [eventDispatcher](UITransform.md#eventdispatcher)
- [isStart](UITransform.md#isstart)
- [transform](UITransform.md#transform)
- [enable](UITransform.md#enable)
- [uiInteractiveList](UITransform.md#uiinteractivelist)
- [globalVisible](UITransform.md#globalvisible)
- [visible](UITransform.md#visible)
- [width](UITransform.md#width)
- [height](UITransform.md#height)
- [x](UITransform.md#x)
- [y](UITransform.md#y)
- [z](UITransform.md#z)
- [scaleX](UITransform.md#scalex)
- [scaleY](UITransform.md#scaley)
- [scaleZ](UITransform.md#scalez)
- [onChange](UITransform.md#onchange)

### Methods

- [start](UITransform.md#start)
- [stop](UITransform.md#stop)
- [onUpdate](UITransform.md#onupdate)
- [onLateUpdate](UITransform.md#onlateupdate)
- [onBeforeUpdate](UITransform.md#onbeforeupdate)
- [onCompute](UITransform.md#oncompute)
- [onGraphic](UITransform.md#ongraphic)
- [onAddChild](UITransform.md#onaddchild)
- [onRemoveChild](UITransform.md#onremovechild)
- [copyComponent](UITransform.md#copycomponent)
- [destroy](UITransform.md#destroy)
- [init](UITransform.md#init)
- [addUIInteractive](UITransform.md#adduiinteractive)
- [removeUIInteractive](UITransform.md#removeuiinteractive)
- [onUITransformVisible](UITransform.md#onuitransformvisible)
- [onParentChange](UITransform.md#onparentchange)
- [resize](UITransform.md#resize)
- [setXY](UITransform.md#setxy)
- [onEnable](UITransform.md#onenable)
- [onDisable](UITransform.md#ondisable)
- [setNeedUpdateUIPanel](UITransform.md#setneedupdateuipanel)
- [cloneTo](UITransform.md#cloneto)
- [matrix](UITransform.md#matrix)
- [getWorldMatrix](UITransform.md#getworldmatrix)
- [beforeDestroy](UITransform.md#beforedestroy)

## Constructors

### constructor

• **new UITransform**(): [`UITransform`](UITransform.md)

#### Returns

[`UITransform`](UITransform.md)

#### Overrides

[ComponentBase](ComponentBase.md).[constructor](ComponentBase.md#constructor)

#### Defined in

components/gui/uiComponents/UITransform.ts:31

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

### useParentPivot

• **useParentPivot**: `boolean` = `false`

#### Defined in

components/gui/uiComponents/UITransform.ts:16

___

### parent

• **parent**: [`UITransform`](UITransform.md)

#### Defined in

components/gui/uiComponents/UITransform.ts:17

___

### pivotX

• **pivotX**: `number` = `0.5`

#### Defined in

components/gui/uiComponents/UITransform.ts:18

___

### pivotY

• **pivotY**: `number` = `0.5`

#### Defined in

components/gui/uiComponents/UITransform.ts:19

___

### \_uiInteractiveList

• `Protected` **\_uiInteractiveList**: [`IUIInteractive`](../interfaces/IUIInteractive.md)[]

#### Defined in

components/gui/uiComponents/UITransform.ts:25

___

### needUpdateQuads

• **needUpdateQuads**: `boolean` = `true`

#### Defined in

components/gui/uiComponents/UITransform.ts:203

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

### uiInteractiveList

• `get` **uiInteractiveList**(): [`IUIInteractive`](../interfaces/IUIInteractive.md)[]

#### Returns

[`IUIInteractive`](../interfaces/IUIInteractive.md)[]

#### Defined in

components/gui/uiComponents/UITransform.ts:27

___

### globalVisible

• `get` **globalVisible**(): `boolean`

#### Returns

`boolean`

#### Defined in

components/gui/uiComponents/UITransform.ts:68

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Defined in

components/gui/uiComponents/UITransform.ts:80

• `set` **visible**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

components/gui/uiComponents/UITransform.ts:72

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Defined in

components/gui/uiComponents/UITransform.ts:111

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Defined in

components/gui/uiComponents/UITransform.ts:115

___

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Defined in

components/gui/uiComponents/UITransform.ts:132

• `set` **x**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

components/gui/uiComponents/UITransform.ts:136

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Defined in

components/gui/uiComponents/UITransform.ts:143

• `set` **y**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

components/gui/uiComponents/UITransform.ts:147

___

### z

• `get` **z**(): `number`

#### Returns

`number`

#### Defined in

components/gui/uiComponents/UITransform.ts:161

• `set` **z**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

components/gui/uiComponents/UITransform.ts:165

___

### scaleX

• `get` **scaleX**(): `number`

#### Returns

`number`

#### Defined in

components/gui/uiComponents/UITransform.ts:172

• `set` **scaleX**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

components/gui/uiComponents/UITransform.ts:176

___

### scaleY

• `get` **scaleY**(): `number`

#### Returns

`number`

#### Defined in

components/gui/uiComponents/UITransform.ts:181

• `set` **scaleY**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

components/gui/uiComponents/UITransform.ts:185

___

### scaleZ

• `get` **scaleZ**(): `number`

#### Returns

`number`

#### Defined in

components/gui/uiComponents/UITransform.ts:190

• `set` **scaleZ**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

components/gui/uiComponents/UITransform.ts:194

___

### onChange

• `get` **onChange**(): `boolean`

#### Returns

`boolean`

#### Defined in

components/gui/uiComponents/UITransform.ts:205

• `set` **onChange**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

components/gui/uiComponents/UITransform.ts:211

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

components/gui/uiComponents/UITransform.ts:37

___

### addUIInteractive

▸ **addUIInteractive**(`item`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`IUIInteractive`](../interfaces/IUIInteractive.md) |

#### Returns

`this`

#### Defined in

components/gui/uiComponents/UITransform.ts:51

___

### removeUIInteractive

▸ **removeUIInteractive**(`item`): [`IUIInteractive`](../interfaces/IUIInteractive.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`IUIInteractive`](../interfaces/IUIInteractive.md) |

#### Returns

[`IUIInteractive`](../interfaces/IUIInteractive.md)

#### Defined in

components/gui/uiComponents/UITransform.ts:57

___

### onUITransformVisible

▸ **onUITransformVisible**(`global`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `global` | `boolean` |

#### Returns

`void`

#### Defined in

components/gui/uiComponents/UITransform.ts:84

___

### onParentChange

▸ **onParentChange**(`lastParent?`, `currentParent?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lastParent?` | [`Object3D`](Object3D.md) |
| `currentParent?` | [`Object3D`](Object3D.md) |

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[onParentChange](ComponentBase.md#onparentchange)

#### Defined in

components/gui/uiComponents/UITransform.ts:105

___

### resize

▸ **resize**(`width`, `height`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `height` | `number` |

#### Returns

`boolean`

#### Defined in

components/gui/uiComponents/UITransform.ts:119

___

### setXY

▸ **setXY**(`x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Defined in

components/gui/uiComponents/UITransform.ts:154

___

### onEnable

▸ **onEnable**(): `void`

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[onEnable](ComponentBase.md#onenable)

#### Defined in

components/gui/uiComponents/UITransform.ts:229

___

### onDisable

▸ **onDisable**(): `void`

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[onDisable](ComponentBase.md#ondisable)

#### Defined in

components/gui/uiComponents/UITransform.ts:234

___

### setNeedUpdateUIPanel

▸ **setNeedUpdateUIPanel**(): `void`

#### Returns

`void`

#### Defined in

components/gui/uiComponents/UITransform.ts:239

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

components/gui/uiComponents/UITransform.ts:250

___

### matrix

▸ **matrix**(): [`Matrix3`](Matrix3.md)

#### Returns

[`Matrix3`](Matrix3.md)

#### Defined in

components/gui/uiComponents/UITransform.ts:266

___

### getWorldMatrix

▸ **getWorldMatrix**(): [`Matrix3`](Matrix3.md)

#### Returns

[`Matrix3`](Matrix3.md)

#### Defined in

components/gui/uiComponents/UITransform.ts:298

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

components/gui/uiComponents/UITransform.ts:311
