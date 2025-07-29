[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / UIInteractive

# Class: UIInteractive

基本交互能力

## Hierarchy

- [`UIComponentBase`](UIComponentBase.md)

  ↳ **`UIInteractive`**

  ↳↳ [`UIButton`](UIButton.md)

## Implements

- [`IUIInteractive`](../interfaces/IUIInteractive.md)

## Table of contents

### Constructors

- [constructor](UIInteractive.md#constructor)

### Properties

- [object3D](UIInteractive.md#object3d)
- [\_eventDispatcher](UIInteractive.md#_eventdispatcher)
- [\_enable](UIInteractive.md#_enable)
- [isDestroyed](UIInteractive.md#isdestroyed)
- [\_uiTransform](UIInteractive.md#_uitransform)
- [\_visible](UIInteractive.md#_visible)
- [\_style](UIInteractive.md#_style)
- [\_interactive](UIInteractive.md#_interactive)

### Accessors

- [eventDispatcher](UIInteractive.md#eventdispatcher)
- [isStart](UIInteractive.md#isstart)
- [transform](UIInteractive.md#transform)
- [enable](UIInteractive.md#enable)
- [uiTransform](UIInteractive.md#uitransform)
- [visible](UIInteractive.md#visible)
- [interactive](UIInteractive.md#interactive)
- [mouseStyle](UIInteractive.md#mousestyle)
- [interactiveVisible](UIInteractive.md#interactivevisible)

### Methods

- [start](UIInteractive.md#start)
- [stop](UIInteractive.md#stop)
- [onEnable](UIInteractive.md#onenable)
- [onDisable](UIInteractive.md#ondisable)
- [onUpdate](UIInteractive.md#onupdate)
- [onLateUpdate](UIInteractive.md#onlateupdate)
- [onBeforeUpdate](UIInteractive.md#onbeforeupdate)
- [onCompute](UIInteractive.md#oncompute)
- [onGraphic](UIInteractive.md#ongraphic)
- [onParentChange](UIInteractive.md#onparentchange)
- [onAddChild](UIInteractive.md#onaddchild)
- [onRemoveChild](UIInteractive.md#onremovechild)
- [beforeDestroy](UIInteractive.md#beforedestroy)
- [onUITransformVisible](UIInteractive.md#onuitransformvisible)
- [onUIComponentVisible](UIInteractive.md#onuicomponentvisible)
- [onTransformResize](UIInteractive.md#ontransformresize)
- [init](UIInteractive.md#init)
- [destroy](UIInteractive.md#destroy)
- [rayPick](UIInteractive.md#raypick)
- [cloneTo](UIInteractive.md#cloneto)
- [copyComponent](UIInteractive.md#copycomponent)

## Constructors

### constructor

• **new UIInteractive**(): [`UIInteractive`](UIInteractive.md)

#### Returns

[`UIInteractive`](UIInteractive.md)

#### Inherited from

[UIComponentBase](UIComponentBase.md).[constructor](UIComponentBase.md#constructor)

## Properties

### object3D

• **object3D**: [`Object3D`](Object3D.md) = `null`

#### Implementation of

[IUIInteractive](../interfaces/IUIInteractive.md).[object3D](../interfaces/IUIInteractive.md#object3d)

#### Inherited from

[UIComponentBase](UIComponentBase.md).[object3D](UIComponentBase.md#object3d)

#### Defined in

components/ComponentBase.ts:9

___

### \_eventDispatcher

• `Protected` **\_eventDispatcher**: [`CEventDispatcher`](CEventDispatcher.md)

#### Inherited from

[UIComponentBase](UIComponentBase.md).[_eventDispatcher](UIComponentBase.md#_eventdispatcher)

#### Defined in

components/ComponentBase.ts:10

___

### \_enable

• `Protected` **\_enable**: `boolean` = `true`

#### Inherited from

[UIComponentBase](UIComponentBase.md).[_enable](UIComponentBase.md#_enable)

#### Defined in

components/ComponentBase.ts:18

___

### isDestroyed

• **isDestroyed**: `boolean` = `false`

#### Inherited from

[UIComponentBase](UIComponentBase.md).[isDestroyed](UIComponentBase.md#isdestroyed)

#### Defined in

components/ComponentBase.ts:20

___

### \_uiTransform

• `Protected` **\_uiTransform**: [`UITransform`](UITransform.md)

#### Inherited from

[UIComponentBase](UIComponentBase.md).[_uiTransform](UIComponentBase.md#_uitransform)

#### Defined in

components/gui/uiComponents/UIComponentBase.ts:5

___

### \_visible

• `Protected` **\_visible**: `boolean` = `true`

#### Inherited from

[UIComponentBase](UIComponentBase.md).[_visible](UIComponentBase.md#_visible)

#### Defined in

components/gui/uiComponents/UIComponentBase.ts:6

___

### \_style

• `Protected` **\_style**: [`UIInteractiveStyle`](../enums/UIInteractiveStyle.md) = `UIInteractiveStyle.NORMAL`

#### Defined in

components/gui/uiComponents/UIInteractive.ts:18

___

### \_interactive

• `Protected` **\_interactive**: `boolean` = `false`

#### Defined in

components/gui/uiComponents/UIInteractive.ts:19

## Accessors

### eventDispatcher

• `get` **eventDispatcher**(): [`CEventDispatcher`](CEventDispatcher.md)

#### Returns

[`CEventDispatcher`](CEventDispatcher.md)

#### Inherited from

UIComponentBase.eventDispatcher

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

UIComponentBase.eventDispatcher

#### Defined in

components/ComponentBase.ts:15

___

### isStart

• `get` **isStart**(): `boolean`

#### Returns

`boolean`

#### Inherited from

UIComponentBase.isStart

#### Defined in

components/ComponentBase.ts:21

___

### transform

• `get` **transform**(): [`Transform`](Transform.md)

#### Returns

[`Transform`](Transform.md)

#### Inherited from

UIComponentBase.transform

#### Defined in

components/ComponentBase.ts:24

___

### enable

• `get` **enable**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IUIInteractive](../interfaces/IUIInteractive.md).[enable](../interfaces/IUIInteractive.md#enable)

#### Inherited from

UIComponentBase.enable

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

[IUIInteractive](../interfaces/IUIInteractive.md).[enable](../interfaces/IUIInteractive.md#enable)

#### Inherited from

UIComponentBase.enable

#### Defined in

components/ComponentBase.ts:27

___

### uiTransform

• `get` **uiTransform**(): [`UITransform`](UITransform.md)

#### Returns

[`UITransform`](UITransform.md)

#### Inherited from

UIComponentBase.uiTransform

#### Defined in

components/gui/uiComponents/UIComponentBase.ts:12

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IUIInteractive](../interfaces/IUIInteractive.md).[visible](../interfaces/IUIInteractive.md#visible)

#### Inherited from

UIComponentBase.visible

#### Defined in

components/gui/uiComponents/UIComponentBase.ts:16

• `set` **visible**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Implementation of

[IUIInteractive](../interfaces/IUIInteractive.md).[visible](../interfaces/IUIInteractive.md#visible)

#### Inherited from

UIComponentBase.visible

#### Defined in

components/gui/uiComponents/UIComponentBase.ts:20

___

### interactive

• `get` **interactive**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IUIInteractive](../interfaces/IUIInteractive.md).[interactive](../interfaces/IUIInteractive.md#interactive)

#### Defined in

components/gui/uiComponents/UIInteractive.ts:25

• `set` **interactive**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Implementation of

[IUIInteractive](../interfaces/IUIInteractive.md).[interactive](../interfaces/IUIInteractive.md#interactive)

#### Defined in

components/gui/uiComponents/UIInteractive.ts:21

___

### mouseStyle

• `set` **mouseStyle**(`value`): `void`

设置鼠标悬停时的样式

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`UIInteractiveStyle`](../enums/UIInteractiveStyle.md) |

#### Returns

`void`

#### Implementation of

IUIInteractive.mouseStyle

#### Defined in

components/gui/uiComponents/UIInteractive.ts:30

___

### interactiveVisible

• `get` **interactiveVisible**(): `boolean`

判断组件是否可见且可交互

#### Returns

`boolean`

#### Implementation of

IUIInteractive.interactiveVisible

#### Defined in

components/gui/uiComponents/UIInteractive.ts:35

## Methods

### start

▸ **start**(): `void`

#### Returns

`void`

#### Inherited from

[UIComponentBase](UIComponentBase.md).[start](UIComponentBase.md#start)

#### Defined in

components/ComponentBase.ts:78

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

[UIComponentBase](UIComponentBase.md).[stop](UIComponentBase.md#stop)

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

[UIComponentBase](UIComponentBase.md).[onEnable](UIComponentBase.md#onenable)

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

[UIComponentBase](UIComponentBase.md).[onDisable](UIComponentBase.md#ondisable)

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

[UIComponentBase](UIComponentBase.md).[onUpdate](UIComponentBase.md#onupdate)

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

[UIComponentBase](UIComponentBase.md).[onLateUpdate](UIComponentBase.md#onlateupdate)

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

[UIComponentBase](UIComponentBase.md).[onBeforeUpdate](UIComponentBase.md#onbeforeupdate)

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

[UIComponentBase](UIComponentBase.md).[onCompute](UIComponentBase.md#oncompute)

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

[UIComponentBase](UIComponentBase.md).[onGraphic](UIComponentBase.md#ongraphic)

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

[UIComponentBase](UIComponentBase.md).[onParentChange](UIComponentBase.md#onparentchange)

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

[UIComponentBase](UIComponentBase.md).[onAddChild](UIComponentBase.md#onaddchild)

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

[UIComponentBase](UIComponentBase.md).[onRemoveChild](UIComponentBase.md#onremovechild)

#### Defined in

components/ComponentBase.ts:89

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

[UIComponentBase](UIComponentBase.md).[beforeDestroy](UIComponentBase.md#beforedestroy)

#### Defined in

components/ComponentBase.ts:135

___

### onUITransformVisible

▸ **onUITransformVisible**(`visible`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `visible` | `boolean` |

#### Returns

`void`

#### Inherited from

[UIComponentBase](UIComponentBase.md).[onUITransformVisible](UIComponentBase.md#onuitransformvisible)

#### Defined in

components/gui/uiComponents/UIComponentBase.ts:33

___

### onUIComponentVisible

▸ **onUIComponentVisible**(`visible`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `visible` | `boolean` |

#### Returns

`void`

#### Inherited from

[UIComponentBase](UIComponentBase.md).[onUIComponentVisible](UIComponentBase.md#onuicomponentvisible)

#### Defined in

components/gui/uiComponents/UIComponentBase.ts:34

___

### onTransformResize

▸ **onTransformResize**(): `void`

#### Returns

`void`

#### Inherited from

[UIComponentBase](UIComponentBase.md).[onTransformResize](UIComponentBase.md#ontransformresize)

#### Defined in

components/gui/uiComponents/UIComponentBase.ts:35

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

[UIComponentBase](UIComponentBase.md).[init](UIComponentBase.md#init)

#### Defined in

components/gui/uiComponents/UIInteractive.ts:39

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[IUIInteractive](../interfaces/IUIInteractive.md).[destroy](../interfaces/IUIInteractive.md#destroy)

#### Overrides

[UIComponentBase](UIComponentBase.md).[destroy](UIComponentBase.md#destroy)

#### Defined in

components/gui/uiComponents/UIInteractive.ts:44

___

### rayPick

▸ **rayPick**(`ray`, `panel`, `screenPos`, `screenSize`): [`GUIHitInfo`](../modules.md#guihitinfo)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ray` | [`Ray`](Ray.md) |
| `panel` | [`UIPanel`](UIPanel.md) |
| `screenPos` | [`Vector2`](Vector2.md) |
| `screenSize` | [`Vector2`](Vector2.md) |

#### Returns

[`GUIHitInfo`](../modules.md#guihitinfo)

#### Implementation of

[IUIInteractive](../interfaces/IUIInteractive.md).[rayPick](../interfaces/IUIInteractive.md#raypick)

#### Defined in

components/gui/uiComponents/UIInteractive.ts:49

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

[UIComponentBase](UIComponentBase.md).[cloneTo](UIComponentBase.md#cloneto)

#### Defined in

components/gui/uiComponents/UIInteractive.ts:66

___

### copyComponent

▸ **copyComponent**(`from`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `this` |

#### Returns

`this`

#### Overrides

[UIComponentBase](UIComponentBase.md).[copyComponent](UIComponentBase.md#copycomponent)

#### Defined in

components/gui/uiComponents/UIInteractive.ts:71
