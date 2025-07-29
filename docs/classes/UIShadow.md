[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / UIShadow

# Class: UIShadow

阴影

## Hierarchy

- [`UIRenderAble`](UIRenderAble.md)

  ↳ **`UIShadow`**

## Table of contents

### Constructors

- [constructor](UIShadow.md#constructor)

### Properties

- [object3D](UIShadow.md#object3d)
- [\_eventDispatcher](UIShadow.md#_eventdispatcher)
- [\_enable](UIShadow.md#_enable)
- [isDestroyed](UIShadow.md#isdestroyed)
- [\_uiTransform](UIShadow.md#_uitransform)
- [\_visible](UIShadow.md#_visible)
- [\_mainQuads](UIShadow.md#_mainquads)
- [\_shadowRender](UIShadow.md#_shadowrender)
- [\_shadowSource](UIShadow.md#_shadowsource)
- [isUIShadow](UIShadow.md#isuishadow)
- [isShadowless](UIShadow.md#isshadowless)
- [needUpdateShadow](UIShadow.md#needupdateshadow)

### Accessors

- [eventDispatcher](UIShadow.md#eventdispatcher)
- [isStart](UIShadow.md#isstart)
- [transform](UIShadow.md#transform)
- [enable](UIShadow.md#enable)
- [uiTransform](UIShadow.md#uitransform)
- [visible](UIShadow.md#visible)
- [mainQuads](UIShadow.md#mainquads)
- [shadowColor](UIShadow.md#shadowcolor)
- [shadowQuality](UIShadow.md#shadowquality)
- [shadowOffset](UIShadow.md#shadowoffset)
- [shadowRadius](UIShadow.md#shadowradius)

### Methods

- [stop](UIShadow.md#stop)
- [onEnable](UIShadow.md#onenable)
- [onDisable](UIShadow.md#ondisable)
- [onLateUpdate](UIShadow.md#onlateupdate)
- [onBeforeUpdate](UIShadow.md#onbeforeupdate)
- [onCompute](UIShadow.md#oncompute)
- [onGraphic](UIShadow.md#ongraphic)
- [onParentChange](UIShadow.md#onparentchange)
- [onAddChild](UIShadow.md#onaddchild)
- [onRemoveChild](UIShadow.md#onremovechild)
- [beforeDestroy](UIShadow.md#beforedestroy)
- [onUITransformVisible](UIShadow.md#onuitransformvisible)
- [onUIComponentVisible](UIShadow.md#onuicomponentvisible)
- [onTransformResize](UIShadow.md#ontransformresize)
- [destroy](UIShadow.md#destroy)
- [start](UIShadow.md#start)
- [setShadowDirty](UIShadow.md#setshadowdirty)
- [setShadowRenderer](UIShadow.md#setshadowrenderer)
- [setShadowSource](UIShadow.md#setshadowsource)
- [getShadowRender](UIShadow.md#getshadowrender)
- [autoBindShadow](UIShadow.md#autobindshadow)
- [recycleQuad](UIShadow.md#recyclequad)
- [attachQuad](UIShadow.md#attachquad)
- [detachQuads](UIShadow.md#detachquads)
- [init](UIShadow.md#init)
- [cloneTo](UIShadow.md#cloneto)
- [copyComponent](UIShadow.md#copycomponent)
- [onUpdate](UIShadow.md#onupdate)

## Constructors

### constructor

• **new UIShadow**(): [`UIShadow`](UIShadow.md)

#### Returns

[`UIShadow`](UIShadow.md)

#### Inherited from

[UIRenderAble](UIRenderAble.md).[constructor](UIRenderAble.md#constructor)

## Properties

### object3D

• **object3D**: [`Object3D`](Object3D.md) = `null`

#### Inherited from

[UIRenderAble](UIRenderAble.md).[object3D](UIRenderAble.md#object3d)

#### Defined in

components/ComponentBase.ts:9

___

### \_eventDispatcher

• `Protected` **\_eventDispatcher**: [`CEventDispatcher`](CEventDispatcher.md)

#### Inherited from

[UIRenderAble](UIRenderAble.md).[_eventDispatcher](UIRenderAble.md#_eventdispatcher)

#### Defined in

components/ComponentBase.ts:10

___

### \_enable

• `Protected` **\_enable**: `boolean` = `true`

#### Inherited from

[UIRenderAble](UIRenderAble.md).[_enable](UIRenderAble.md#_enable)

#### Defined in

components/ComponentBase.ts:18

___

### isDestroyed

• **isDestroyed**: `boolean` = `false`

#### Inherited from

[UIRenderAble](UIRenderAble.md).[isDestroyed](UIRenderAble.md#isdestroyed)

#### Defined in

components/ComponentBase.ts:20

___

### \_uiTransform

• `Protected` **\_uiTransform**: [`UITransform`](UITransform.md)

#### Inherited from

[UIRenderAble](UIRenderAble.md).[_uiTransform](UIRenderAble.md#_uitransform)

#### Defined in

components/gui/uiComponents/UIComponentBase.ts:5

___

### \_visible

• `Protected` **\_visible**: `boolean` = `true`

#### Inherited from

[UIRenderAble](UIRenderAble.md).[_visible](UIRenderAble.md#_visible)

#### Defined in

components/gui/uiComponents/UIComponentBase.ts:6

___

### \_mainQuads

• `Protected` **\_mainQuads**: [`GUIQuad`](GUIQuad.md)[]

#### Inherited from

[UIRenderAble](UIRenderAble.md).[_mainQuads](UIRenderAble.md#_mainquads)

#### Defined in

components/gui/uiComponents/UIRenderAble.ts:9

___

### \_shadowRender

• `Protected` **\_shadowRender**: [`UIRenderAble`](UIRenderAble.md)

#### Inherited from

[UIRenderAble](UIRenderAble.md).[_shadowRender](UIRenderAble.md#_shadowrender)

#### Defined in

components/gui/uiComponents/UIRenderAble.ts:10

___

### \_shadowSource

• `Protected` **\_shadowSource**: [`UIRenderAble`](UIRenderAble.md)

#### Inherited from

[UIRenderAble](UIRenderAble.md).[_shadowSource](UIRenderAble.md#_shadowsource)

#### Defined in

components/gui/uiComponents/UIRenderAble.ts:11

___

### isUIShadow

• `Optional` **isUIShadow**: `boolean`

#### Inherited from

[UIRenderAble](UIRenderAble.md).[isUIShadow](UIRenderAble.md#isuishadow)

#### Defined in

components/gui/uiComponents/UIRenderAble.ts:12

___

### isShadowless

• `Optional` **isShadowless**: `boolean`

#### Inherited from

[UIRenderAble](UIRenderAble.md).[isShadowless](UIRenderAble.md#isshadowless)

#### Defined in

components/gui/uiComponents/UIRenderAble.ts:13

___

### needUpdateShadow

• **needUpdateShadow**: `boolean` = `false`

#### Overrides

[UIRenderAble](UIRenderAble.md).[needUpdateShadow](UIRenderAble.md#needupdateshadow)

#### Defined in

components/gui/uiComponents/UIShadow.ts:20

## Accessors

### eventDispatcher

• `get` **eventDispatcher**(): [`CEventDispatcher`](CEventDispatcher.md)

#### Returns

[`CEventDispatcher`](CEventDispatcher.md)

#### Inherited from

UIRenderAble.eventDispatcher

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

UIRenderAble.eventDispatcher

#### Defined in

components/ComponentBase.ts:15

___

### isStart

• `get` **isStart**(): `boolean`

#### Returns

`boolean`

#### Inherited from

UIRenderAble.isStart

#### Defined in

components/ComponentBase.ts:21

___

### transform

• `get` **transform**(): [`Transform`](Transform.md)

#### Returns

[`Transform`](Transform.md)

#### Inherited from

UIRenderAble.transform

#### Defined in

components/ComponentBase.ts:24

___

### enable

• `get` **enable**(): `boolean`

#### Returns

`boolean`

#### Inherited from

UIRenderAble.enable

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

UIRenderAble.enable

#### Defined in

components/ComponentBase.ts:27

___

### uiTransform

• `get` **uiTransform**(): [`UITransform`](UITransform.md)

#### Returns

[`UITransform`](UITransform.md)

#### Inherited from

UIRenderAble.uiTransform

#### Defined in

components/gui/uiComponents/UIComponentBase.ts:12

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

UIRenderAble.visible

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

UIRenderAble.visible

#### Defined in

components/gui/uiComponents/UIComponentBase.ts:20

___

### mainQuads

• `get` **mainQuads**(): [`GUIQuad`](GUIQuad.md)[]

#### Returns

[`GUIQuad`](GUIQuad.md)[]

#### Inherited from

UIRenderAble.mainQuads

#### Defined in

components/gui/uiComponents/UIRenderAble.ts:44

___

### shadowColor

• `get` **shadowColor**(): [`Color`](Color.md)

#### Returns

[`Color`](Color.md)

#### Defined in

components/gui/uiComponents/UIShadow.ts:46

• `set` **shadowColor**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Color`](Color.md) |

#### Returns

`void`

#### Defined in

components/gui/uiComponents/UIShadow.ts:50

___

### shadowQuality

• `get` **shadowQuality**(): `number`

#### Returns

`number`

#### Defined in

components/gui/uiComponents/UIShadow.ts:62

• `set` **shadowQuality**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

components/gui/uiComponents/UIShadow.ts:55

___

### shadowOffset

• `get` **shadowOffset**(): [`Vector2`](Vector2.md)

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

components/gui/uiComponents/UIShadow.ts:71

• `set` **shadowOffset**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector2`](Vector2.md) |

#### Returns

`void`

#### Defined in

components/gui/uiComponents/UIShadow.ts:66

___

### shadowRadius

• `get` **shadowRadius**(): `number`

#### Returns

`number`

#### Defined in

components/gui/uiComponents/UIShadow.ts:83

• `set` **shadowRadius**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

components/gui/uiComponents/UIShadow.ts:76

## Methods

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

[UIRenderAble](UIRenderAble.md).[stop](UIRenderAble.md#stop)

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

[UIRenderAble](UIRenderAble.md).[onEnable](UIRenderAble.md#onenable)

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

[UIRenderAble](UIRenderAble.md).[onDisable](UIRenderAble.md#ondisable)

#### Defined in

components/ComponentBase.ts:81

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

[UIRenderAble](UIRenderAble.md).[onLateUpdate](UIRenderAble.md#onlateupdate)

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

[UIRenderAble](UIRenderAble.md).[onBeforeUpdate](UIRenderAble.md#onbeforeupdate)

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

[UIRenderAble](UIRenderAble.md).[onCompute](UIRenderAble.md#oncompute)

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

[UIRenderAble](UIRenderAble.md).[onGraphic](UIRenderAble.md#ongraphic)

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

[UIRenderAble](UIRenderAble.md).[onParentChange](UIRenderAble.md#onparentchange)

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

[UIRenderAble](UIRenderAble.md).[onAddChild](UIRenderAble.md#onaddchild)

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

[UIRenderAble](UIRenderAble.md).[onRemoveChild](UIRenderAble.md#onremovechild)

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

[UIRenderAble](UIRenderAble.md).[beforeDestroy](UIRenderAble.md#beforedestroy)

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

[UIRenderAble](UIRenderAble.md).[onUITransformVisible](UIRenderAble.md#onuitransformvisible)

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

[UIRenderAble](UIRenderAble.md).[onUIComponentVisible](UIRenderAble.md#onuicomponentvisible)

#### Defined in

components/gui/uiComponents/UIComponentBase.ts:34

___

### onTransformResize

▸ **onTransformResize**(): `void`

#### Returns

`void`

#### Inherited from

[UIRenderAble](UIRenderAble.md).[onTransformResize](UIRenderAble.md#ontransformresize)

#### Defined in

components/gui/uiComponents/UIComponentBase.ts:35

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[UIRenderAble](UIRenderAble.md).[destroy](UIRenderAble.md#destroy)

#### Defined in

components/gui/uiComponents/UIRenderAble.ts:21

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Inherited from

[UIRenderAble](UIRenderAble.md).[start](UIRenderAble.md#start)

#### Defined in

components/gui/uiComponents/UIRenderAble.ts:30

___

### setShadowDirty

▸ **setShadowDirty**(): `void`

#### Returns

`void`

#### Inherited from

[UIRenderAble](UIRenderAble.md).[setShadowDirty](UIRenderAble.md#setshadowdirty)

#### Defined in

components/gui/uiComponents/UIRenderAble.ts:40

___

### setShadowRenderer

▸ **setShadowRenderer**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`UIRenderAble`](UIRenderAble.md) |

#### Returns

`void`

#### Inherited from

[UIRenderAble](UIRenderAble.md).[setShadowRenderer](UIRenderAble.md#setshadowrenderer)

#### Defined in

components/gui/uiComponents/UIRenderAble.ts:48

___

### setShadowSource

▸ **setShadowSource**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`UIRenderAble`](UIRenderAble.md) |

#### Returns

`void`

#### Inherited from

[UIRenderAble](UIRenderAble.md).[setShadowSource](UIRenderAble.md#setshadowsource)

#### Defined in

components/gui/uiComponents/UIRenderAble.ts:52

___

### getShadowRender

▸ **getShadowRender**(): [`UIRenderAble`](UIRenderAble.md)

#### Returns

[`UIRenderAble`](UIRenderAble.md)

#### Inherited from

[UIRenderAble](UIRenderAble.md).[getShadowRender](UIRenderAble.md#getshadowrender)

#### Defined in

components/gui/uiComponents/UIRenderAble.ts:56

___

### autoBindShadow

▸ **autoBindShadow**(`source`, `shadow`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`UIRenderAble`](UIRenderAble.md) |
| `shadow` | [`UIRenderAble`](UIRenderAble.md) |

#### Returns

`boolean`

#### Inherited from

[UIRenderAble](UIRenderAble.md).[autoBindShadow](UIRenderAble.md#autobindshadow)

#### Defined in

components/gui/uiComponents/UIRenderAble.ts:60

___

### recycleQuad

▸ **recycleQuad**(`quad?`): [`GUIQuad`](GUIQuad.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `quad?` | [`GUIQuad`](GUIQuad.md) |

#### Returns

[`GUIQuad`](GUIQuad.md)

#### Inherited from

[UIRenderAble](UIRenderAble.md).[recycleQuad](UIRenderAble.md#recyclequad)

#### Defined in

components/gui/uiComponents/UIRenderAble.ts:94

___

### attachQuad

▸ **attachQuad**(`quad`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `quad` | [`GUIQuad`](GUIQuad.md) |

#### Returns

`this`

#### Inherited from

[UIRenderAble](UIRenderAble.md).[attachQuad](UIRenderAble.md#attachquad)

#### Defined in

components/gui/uiComponents/UIRenderAble.ts:107

___

### detachQuads

▸ **detachQuads**(): `this`

#### Returns

`this`

#### Inherited from

[UIRenderAble](UIRenderAble.md).[detachQuads](UIRenderAble.md#detachquads)

#### Defined in

components/gui/uiComponents/UIRenderAble.ts:112

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

[UIRenderAble](UIRenderAble.md).[init](UIRenderAble.md#init)

#### Defined in

components/gui/uiComponents/UIShadow.ts:22

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

[UIRenderAble](UIRenderAble.md).[cloneTo](UIRenderAble.md#cloneto)

#### Defined in

components/gui/uiComponents/UIShadow.ts:32

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

[UIRenderAble](UIRenderAble.md).[copyComponent](UIRenderAble.md#copycomponent)

#### Defined in

components/gui/uiComponents/UIShadow.ts:37

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

[UIRenderAble](UIRenderAble.md).[onUpdate](UIRenderAble.md#onupdate)

#### Defined in

components/gui/uiComponents/UIShadow.ts:87
