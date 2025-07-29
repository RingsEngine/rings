[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / UIButton

# Class: UIButton

The basic components used in the GUI to respond to user interaction behavior and have an image component

## Hierarchy

- [`UIInteractive`](UIInteractive.md)

  ↳ **`UIButton`**

## Table of contents

### Constructors

- [constructor](UIButton.md#constructor)

### Properties

- [object3D](UIButton.md#object3d)
- [\_eventDispatcher](UIButton.md#_eventdispatcher)
- [\_enable](UIButton.md#_enable)
- [isDestroyed](UIButton.md#isdestroyed)
- [\_spriteMap](UIButton.md#_spritemap)
- [\_colorMap](UIButton.md#_colormap)
- [\_image](UIButton.md#_image)
- [\_uiTransform](UIButton.md#_uitransform)
- [\_visible](UIButton.md#_visible)
- [\_style](UIButton.md#_style)
- [\_interactive](UIButton.md#_interactive)

### Accessors

- [eventDispatcher](UIButton.md#eventdispatcher)
- [isStart](UIButton.md#isstart)
- [transform](UIButton.md#transform)
- [enable](UIButton.md#enable)
- [transition](UIButton.md#transition)
- [imageType](UIButton.md#imagetype)
- [mouseStyle](UIButton.md#mousestyle)
- [normalSprite](UIButton.md#normalsprite)
- [overSprite](UIButton.md#oversprite)
- [downSprite](UIButton.md#downsprite)
- [disableSprite](UIButton.md#disablesprite)
- [uiTransform](UIButton.md#uitransform)
- [visible](UIButton.md#visible)
- [interactive](UIButton.md#interactive)
- [interactiveVisible](UIButton.md#interactivevisible)

### Methods

- [start](UIButton.md#start)
- [stop](UIButton.md#stop)
- [onUpdate](UIButton.md#onupdate)
- [onLateUpdate](UIButton.md#onlateupdate)
- [onBeforeUpdate](UIButton.md#onbeforeupdate)
- [onCompute](UIButton.md#oncompute)
- [onGraphic](UIButton.md#ongraphic)
- [onParentChange](UIButton.md#onparentchange)
- [onAddChild](UIButton.md#onaddchild)
- [onRemoveChild](UIButton.md#onremovechild)
- [beforeDestroy](UIButton.md#beforedestroy)
- [init](UIButton.md#init)
- [onEnable](UIButton.md#onenable)
- [onDisable](UIButton.md#ondisable)
- [setStyleColor](UIButton.md#setstylecolor)
- [getStyleColor](UIButton.md#getstylecolor)
- [validateStyle](UIButton.md#validatestyle)
- [cloneTo](UIButton.md#cloneto)
- [copyComponent](UIButton.md#copycomponent)
- [destroy](UIButton.md#destroy)
- [onUITransformVisible](UIButton.md#onuitransformvisible)
- [onUIComponentVisible](UIButton.md#onuicomponentvisible)
- [onTransformResize](UIButton.md#ontransformresize)
- [rayPick](UIButton.md#raypick)

## Constructors

### constructor

• **new UIButton**(): [`UIButton`](UIButton.md)

#### Returns

[`UIButton`](UIButton.md)

#### Inherited from

[UIInteractive](UIInteractive.md).[constructor](UIInteractive.md#constructor)

## Properties

### object3D

• **object3D**: [`Object3D`](Object3D.md) = `null`

#### Inherited from

[UIInteractive](UIInteractive.md).[object3D](UIInteractive.md#object3d)

#### Defined in

components/ComponentBase.ts:9

___

### \_eventDispatcher

• `Protected` **\_eventDispatcher**: [`CEventDispatcher`](CEventDispatcher.md)

#### Inherited from

[UIInteractive](UIInteractive.md).[_eventDispatcher](UIInteractive.md#_eventdispatcher)

#### Defined in

components/ComponentBase.ts:10

___

### \_enable

• `Protected` **\_enable**: `boolean` = `true`

#### Inherited from

[UIInteractive](UIInteractive.md).[_enable](UIInteractive.md#_enable)

#### Defined in

components/ComponentBase.ts:18

___

### isDestroyed

• **isDestroyed**: `boolean` = `false`

#### Inherited from

[UIInteractive](UIInteractive.md).[isDestroyed](UIInteractive.md#isdestroyed)

#### Defined in

components/ComponentBase.ts:20

___

### \_spriteMap

• `Protected` **\_spriteMap**: `Map`\<[`UIInteractiveStyle`](../enums/UIInteractiveStyle.md), [`GUISprite`](GUISprite.md)\>

#### Defined in

components/gui/uiComponents/UIButton.ts:20

___

### \_colorMap

• `Protected` **\_colorMap**: `Map`\<[`UIInteractiveStyle`](../enums/UIInteractiveStyle.md), [`Color`](Color.md)\>

#### Defined in

components/gui/uiComponents/UIButton.ts:21

___

### \_image

• `Protected` **\_image**: [`UIImage`](UIImage.md)

#### Defined in

components/gui/uiComponents/UIButton.ts:22

___

### \_uiTransform

• `Protected` **\_uiTransform**: [`UITransform`](UITransform.md)

#### Inherited from

[UIInteractive](UIInteractive.md).[_uiTransform](UIInteractive.md#_uitransform)

#### Defined in

components/gui/uiComponents/UIComponentBase.ts:5

___

### \_visible

• `Protected` **\_visible**: `boolean` = `true`

#### Inherited from

[UIInteractive](UIInteractive.md).[_visible](UIInteractive.md#_visible)

#### Defined in

components/gui/uiComponents/UIComponentBase.ts:6

___

### \_style

• `Protected` **\_style**: [`UIInteractiveStyle`](../enums/UIInteractiveStyle.md) = `UIInteractiveStyle.NORMAL`

#### Inherited from

[UIInteractive](UIInteractive.md).[_style](UIInteractive.md#_style)

#### Defined in

components/gui/uiComponents/UIInteractive.ts:18

___

### \_interactive

• `Protected` **\_interactive**: `boolean` = `false`

#### Inherited from

[UIInteractive](UIInteractive.md).[_interactive](UIInteractive.md#_interactive)

#### Defined in

components/gui/uiComponents/UIInteractive.ts:19

## Accessors

### eventDispatcher

• `get` **eventDispatcher**(): [`CEventDispatcher`](CEventDispatcher.md)

#### Returns

[`CEventDispatcher`](CEventDispatcher.md)

#### Inherited from

UIInteractive.eventDispatcher

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

UIInteractive.eventDispatcher

#### Defined in

components/ComponentBase.ts:15

___

### isStart

• `get` **isStart**(): `boolean`

#### Returns

`boolean`

#### Inherited from

UIInteractive.isStart

#### Defined in

components/ComponentBase.ts:21

___

### transform

• `get` **transform**(): [`Transform`](Transform.md)

#### Returns

[`Transform`](Transform.md)

#### Inherited from

UIInteractive.transform

#### Defined in

components/ComponentBase.ts:24

___

### enable

• `get` **enable**(): `boolean`

#### Returns

`boolean`

#### Inherited from

UIInteractive.enable

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

UIInteractive.enable

#### Defined in

components/ComponentBase.ts:27

___

### transition

• `get` **transition**(): [`UIButtonTransition`](../enums/UIButtonTransition.md)

#### Returns

[`UIButtonTransition`](../enums/UIButtonTransition.md)

#### Defined in

components/gui/uiComponents/UIButton.ts:54

• `set` **transition**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`UIButtonTransition`](../enums/UIButtonTransition.md) |

#### Returns

`void`

#### Defined in

components/gui/uiComponents/UIButton.ts:47

___

### imageType

• `get` **imageType**(): [`ImageType`](../enums/ImageType.md)

#### Returns

[`ImageType`](../enums/ImageType.md)

#### Defined in

components/gui/uiComponents/UIButton.ts:58

• `set` **imageType**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`ImageType`](../enums/ImageType.md) |

#### Returns

`void`

#### Defined in

components/gui/uiComponents/UIButton.ts:62

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

#### Overrides

UIInteractive.mouseStyle

#### Defined in

components/gui/uiComponents/UIButton.ts:78

___

### normalSprite

• `get` **normalSprite**(): [`GUISprite`](GUISprite.md)

#### Returns

[`GUISprite`](GUISprite.md)

#### Defined in

components/gui/uiComponents/UIButton.ts:83

• `set` **normalSprite**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`GUISprite`](GUISprite.md) |

#### Returns

`void`

#### Defined in

components/gui/uiComponents/UIButton.ts:87

___

### overSprite

• `get` **overSprite**(): [`GUISprite`](GUISprite.md)

#### Returns

[`GUISprite`](GUISprite.md)

#### Defined in

components/gui/uiComponents/UIButton.ts:94

• `set` **overSprite**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`GUISprite`](GUISprite.md) |

#### Returns

`void`

#### Defined in

components/gui/uiComponents/UIButton.ts:98

___

### downSprite

• `get` **downSprite**(): [`GUISprite`](GUISprite.md)

#### Returns

[`GUISprite`](GUISprite.md)

#### Defined in

components/gui/uiComponents/UIButton.ts:112

• `set` **downSprite**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`GUISprite`](GUISprite.md) |

#### Returns

`void`

#### Defined in

components/gui/uiComponents/UIButton.ts:105

___

### disableSprite

• `get` **disableSprite**(): [`GUISprite`](GUISprite.md)

#### Returns

[`GUISprite`](GUISprite.md)

#### Defined in

components/gui/uiComponents/UIButton.ts:123

• `set` **disableSprite**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`GUISprite`](GUISprite.md) |

#### Returns

`void`

#### Defined in

components/gui/uiComponents/UIButton.ts:116

___

### uiTransform

• `get` **uiTransform**(): [`UITransform`](UITransform.md)

#### Returns

[`UITransform`](UITransform.md)

#### Inherited from

UIInteractive.uiTransform

#### Defined in

components/gui/uiComponents/UIComponentBase.ts:12

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

UIInteractive.visible

#### Defined in

components/gui/uiComponents/UIComponentBase.ts:16

• `set` **visible**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

UIInteractive.visible

#### Defined in

components/gui/uiComponents/UIComponentBase.ts:20

___

### interactive

• `get` **interactive**(): `boolean`

#### Returns

`boolean`

#### Inherited from

UIInteractive.interactive

#### Defined in

components/gui/uiComponents/UIInteractive.ts:25

• `set` **interactive**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

UIInteractive.interactive

#### Defined in

components/gui/uiComponents/UIInteractive.ts:21

___

### interactiveVisible

• `get` **interactiveVisible**(): `boolean`

判断组件是否可见且可交互

#### Returns

`boolean`

#### Inherited from

UIInteractive.interactiveVisible

#### Defined in

components/gui/uiComponents/UIInteractive.ts:35

## Methods

### start

▸ **start**(): `void`

#### Returns

`void`

#### Inherited from

[UIInteractive](UIInteractive.md).[start](UIInteractive.md#start)

#### Defined in

components/ComponentBase.ts:78

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

[UIInteractive](UIInteractive.md).[stop](UIInteractive.md#stop)

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

[UIInteractive](UIInteractive.md).[onUpdate](UIInteractive.md#onupdate)

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

[UIInteractive](UIInteractive.md).[onLateUpdate](UIInteractive.md#onlateupdate)

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

[UIInteractive](UIInteractive.md).[onBeforeUpdate](UIInteractive.md#onbeforeupdate)

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

[UIInteractive](UIInteractive.md).[onCompute](UIInteractive.md#oncompute)

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

[UIInteractive](UIInteractive.md).[onGraphic](UIInteractive.md#ongraphic)

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

[UIInteractive](UIInteractive.md).[onParentChange](UIInteractive.md#onparentchange)

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

[UIInteractive](UIInteractive.md).[onAddChild](UIInteractive.md#onaddchild)

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

[UIInteractive](UIInteractive.md).[onRemoveChild](UIInteractive.md#onremovechild)

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

[UIInteractive](UIInteractive.md).[beforeDestroy](UIInteractive.md#beforedestroy)

#### Defined in

components/ComponentBase.ts:135

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

[UIInteractive](UIInteractive.md).[init](UIInteractive.md#init)

#### Defined in

components/gui/uiComponents/UIButton.ts:26

___

### onEnable

▸ **onEnable**(): `void`

#### Returns

`void`

#### Overrides

[UIInteractive](UIInteractive.md).[onEnable](UIInteractive.md#onenable)

#### Defined in

components/gui/uiComponents/UIButton.ts:39

___

### onDisable

▸ **onDisable**(): `void`

#### Returns

`void`

#### Overrides

[UIInteractive](UIInteractive.md).[onDisable](UIInteractive.md#ondisable)

#### Defined in

components/gui/uiComponents/UIButton.ts:43

___

### setStyleColor

▸ **setStyleColor**(`style`, `color`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `style` | [`UIInteractiveStyle`](../enums/UIInteractiveStyle.md) |
| `color` | [`Color`](Color.md) |

#### Returns

`this`

#### Defined in

components/gui/uiComponents/UIButton.ts:66

___

### getStyleColor

▸ **getStyleColor**(`style`): [`Color`](Color.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `style` | [`UIInteractiveStyle`](../enums/UIInteractiveStyle.md) |

#### Returns

[`Color`](Color.md)

#### Defined in

components/gui/uiComponents/UIButton.ts:74

___

### validateStyle

▸ **validateStyle**(`style`, `force?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `style` | [`UIInteractiveStyle`](../enums/UIInteractiveStyle.md) |
| `force?` | `boolean` |

#### Returns

`void`

#### Defined in

components/gui/uiComponents/UIButton.ts:127

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

[UIInteractive](UIInteractive.md).[cloneTo](UIInteractive.md#cloneto)

#### Defined in

components/gui/uiComponents/UIButton.ts:139

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

[UIInteractive](UIInteractive.md).[copyComponent](UIInteractive.md#copycomponent)

#### Defined in

components/gui/uiComponents/UIButton.ts:144

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Overrides

[UIInteractive](UIInteractive.md).[destroy](UIInteractive.md#destroy)

#### Defined in

components/gui/uiComponents/UIButton.ts:162

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

[UIInteractive](UIInteractive.md).[onUITransformVisible](UIInteractive.md#onuitransformvisible)

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

[UIInteractive](UIInteractive.md).[onUIComponentVisible](UIInteractive.md#onuicomponentvisible)

#### Defined in

components/gui/uiComponents/UIComponentBase.ts:34

___

### onTransformResize

▸ **onTransformResize**(): `void`

#### Returns

`void`

#### Inherited from

[UIInteractive](UIInteractive.md).[onTransformResize](UIInteractive.md#ontransformresize)

#### Defined in

components/gui/uiComponents/UIComponentBase.ts:35

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

#### Inherited from

[UIInteractive](UIInteractive.md).[rayPick](UIInteractive.md#raypick)

#### Defined in

components/gui/uiComponents/UIInteractive.ts:49
