[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / UIImage

# Class: UIImage

The basic class of render able GUI component

## Hierarchy

- [`UIRenderAble`](UIRenderAble.md)

  ↳ **`UIImage`**

  ↳↳ [`UIPanel`](UIPanel.md)

## Table of contents

### Constructors

- [constructor](UIImage.md#constructor)

### Properties

- [object3D](UIImage.md#object3d)
- [\_eventDispatcher](UIImage.md#_eventdispatcher)
- [\_enable](UIImage.md#_enable)
- [isDestroyed](UIImage.md#isdestroyed)
- [\_uiTransform](UIImage.md#_uitransform)
- [\_visible](UIImage.md#_visible)
- [\_mainQuads](UIImage.md#_mainquads)
- [\_shadowRender](UIImage.md#_shadowrender)
- [\_shadowSource](UIImage.md#_shadowsource)
- [isUIShadow](UIImage.md#isuishadow)
- [isShadowless](UIImage.md#isshadowless)
- [needUpdateShadow](UIImage.md#needupdateshadow)

### Accessors

- [eventDispatcher](UIImage.md#eventdispatcher)
- [isStart](UIImage.md#isstart)
- [transform](UIImage.md#transform)
- [enable](UIImage.md#enable)
- [uiTransform](UIImage.md#uitransform)
- [visible](UIImage.md#visible)
- [sprite](UIImage.md#sprite)
- [color](UIImage.md#color)
- [imageType](UIImage.md#imagetype)
- [mainQuads](UIImage.md#mainquads)

### Methods

- [stop](UIImage.md#stop)
- [onEnable](UIImage.md#onenable)
- [onDisable](UIImage.md#ondisable)
- [onUpdate](UIImage.md#onupdate)
- [onLateUpdate](UIImage.md#onlateupdate)
- [onBeforeUpdate](UIImage.md#onbeforeupdate)
- [onCompute](UIImage.md#oncompute)
- [onGraphic](UIImage.md#ongraphic)
- [onParentChange](UIImage.md#onparentchange)
- [onAddChild](UIImage.md#onaddchild)
- [onRemoveChild](UIImage.md#onremovechild)
- [beforeDestroy](UIImage.md#beforedestroy)
- [init](UIImage.md#init)
- [cloneTo](UIImage.md#cloneto)
- [copyComponent](UIImage.md#copycomponent)
- [onTransformResize](UIImage.md#ontransformresize)
- [onUIComponentVisible](UIImage.md#onuicomponentvisible)
- [onUITransformVisible](UIImage.md#onuitransformvisible)
- [destroy](UIImage.md#destroy)
- [start](UIImage.md#start)
- [setShadowDirty](UIImage.md#setshadowdirty)
- [setShadowRenderer](UIImage.md#setshadowrenderer)
- [setShadowSource](UIImage.md#setshadowsource)
- [getShadowRender](UIImage.md#getshadowrender)
- [autoBindShadow](UIImage.md#autobindshadow)
- [recycleQuad](UIImage.md#recyclequad)
- [attachQuad](UIImage.md#attachquad)
- [detachQuads](UIImage.md#detachquads)

## Constructors

### constructor

• **new UIImage**(): [`UIImage`](UIImage.md)

#### Returns

[`UIImage`](UIImage.md)

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

• **needUpdateShadow**: `boolean`

#### Inherited from

[UIRenderAble](UIRenderAble.md).[needUpdateShadow](UIRenderAble.md#needupdateshadow)

#### Defined in

components/gui/uiComponents/UIRenderAble.ts:14

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

### sprite

• `get` **sprite**(): [`GUISprite`](GUISprite.md)

#### Returns

[`GUISprite`](GUISprite.md)

#### Defined in

components/gui/uiComponents/UIImage.ts:49

• `set` **sprite**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`GUISprite`](GUISprite.md) |

#### Returns

`void`

#### Defined in

components/gui/uiComponents/UIImage.ts:29

___

### color

• `get` **color**(): [`Color`](Color.md)

#### Returns

[`Color`](Color.md)

#### Defined in

components/gui/uiComponents/UIImage.ts:69

• `set` **color**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Color`](Color.md) |

#### Returns

`void`

#### Defined in

components/gui/uiComponents/UIImage.ts:73

___

### imageType

• `get` **imageType**(): [`ImageType`](../enums/ImageType.md)

#### Returns

[`ImageType`](../enums/ImageType.md)

#### Defined in

components/gui/uiComponents/UIImage.ts:80

• `set` **imageType**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`ImageType`](../enums/ImageType.md) |

#### Returns

`void`

#### Defined in

components/gui/uiComponents/UIImage.ts:84

___

### mainQuads

• `get` **mainQuads**(): [`GUIQuad`](GUIQuad.md)[]

#### Returns

[`GUIQuad`](GUIQuad.md)[]

#### Inherited from

UIRenderAble.mainQuads

#### Defined in

components/gui/uiComponents/UIRenderAble.ts:44

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

### onUpdate

▸ **onUpdate**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`any`

#### Inherited from

[UIRenderAble](UIRenderAble.md).[onUpdate](UIRenderAble.md#onupdate)

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

components/gui/uiComponents/UIImage.ts:10

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

components/gui/uiComponents/UIImage.ts:16

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

components/gui/uiComponents/UIImage.ts:21

___

### onTransformResize

▸ **onTransformResize**(): `void`

#### Returns

`void`

#### Overrides

[UIRenderAble](UIRenderAble.md).[onTransformResize](UIRenderAble.md#ontransformresize)

#### Defined in

components/gui/uiComponents/UIImage.ts:38

___

### onUIComponentVisible

▸ **onUIComponentVisible**(`visible`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `visible` | `boolean` |

#### Returns

`void`

#### Overrides

[UIRenderAble](UIRenderAble.md).[onUIComponentVisible](UIRenderAble.md#onuicomponentvisible)

#### Defined in

components/gui/uiComponents/UIImage.ts:53

___

### onUITransformVisible

▸ **onUITransformVisible**(`visible`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `visible` | `boolean` |

#### Returns

`void`

#### Overrides

[UIRenderAble](UIRenderAble.md).[onUITransformVisible](UIRenderAble.md#onuitransformvisible)

#### Defined in

components/gui/uiComponents/UIImage.ts:57

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
