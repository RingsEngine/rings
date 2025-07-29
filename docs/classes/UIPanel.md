[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / UIPanel

# Class: UIPanel

The basic class of render able GUI component

## Hierarchy

- [`UIImage`](UIImage.md)

  ↳ **`UIPanel`**

  ↳↳ [`ViewPanel`](ViewPanel.md)

  ↳↳ [`WorldPanel`](WorldPanel.md)

## Table of contents

### Constructors

- [constructor](UIPanel.md#constructor)

### Properties

- [object3D](UIPanel.md#object3d)
- [\_eventDispatcher](UIPanel.md#_eventdispatcher)
- [\_enable](UIPanel.md#_enable)
- [isDestroyed](UIPanel.md#isdestroyed)
- [\_uiTransform](UIPanel.md#_uitransform)
- [\_visible](UIPanel.md#_visible)
- [space](UIPanel.md#space)
- [needUpdateGeometry](UIPanel.md#needupdategeometry)
- [panelOrder](UIPanel.md#panelorder)
- [needSortOnCameraZ](UIPanel.md#needsortoncameraz)
- [\_billboard](UIPanel.md#_billboard)
- [scissorEnable](UIPanel.md#scissorenable)
- [scissorCornerRadius](UIPanel.md#scissorcornerradius)
- [scissorFadeOutSize](UIPanel.md#scissorfadeoutsize)
- [\_uiRenderer](UIPanel.md#_uirenderer)
- [\_geometry](UIPanel.md#_geometry)
- [\_maxCount](UIPanel.md#_maxcount)
- [panelRatio](UIPanel.md#panelratio)
- [isUIPanel](UIPanel.md#isuipanel)
- [\_mainQuads](UIPanel.md#_mainquads)
- [\_shadowRender](UIPanel.md#_shadowrender)
- [\_shadowSource](UIPanel.md#_shadowsource)
- [isUIShadow](UIPanel.md#isuishadow)
- [isShadowless](UIPanel.md#isshadowless)
- [needUpdateShadow](UIPanel.md#needupdateshadow)

### Accessors

- [eventDispatcher](UIPanel.md#eventdispatcher)
- [isStart](UIPanel.md#isstart)
- [transform](UIPanel.md#transform)
- [enable](UIPanel.md#enable)
- [uiTransform](UIPanel.md#uitransform)
- [visible](UIPanel.md#visible)
- [sprite](UIPanel.md#sprite)
- [color](UIPanel.md#color)
- [imageType](UIPanel.md#imagetype)
- [quadMaxCount](UIPanel.md#quadmaxcount)
- [renderer](UIPanel.md#renderer)
- [billboard](UIPanel.md#billboard)
- [cullMode](UIPanel.md#cullmode)
- [mainQuads](UIPanel.md#mainquads)

### Methods

- [stop](UIPanel.md#stop)
- [onEnable](UIPanel.md#onenable)
- [onDisable](UIPanel.md#ondisable)
- [onLateUpdate](UIPanel.md#onlateupdate)
- [onBeforeUpdate](UIPanel.md#onbeforeupdate)
- [onCompute](UIPanel.md#oncompute)
- [onGraphic](UIPanel.md#ongraphic)
- [onParentChange](UIPanel.md#onparentchange)
- [onAddChild](UIPanel.md#onaddchild)
- [onRemoveChild](UIPanel.md#onremovechild)
- [beforeDestroy](UIPanel.md#beforedestroy)
- [onTransformResize](UIPanel.md#ontransformresize)
- [onUIComponentVisible](UIPanel.md#onuicomponentvisible)
- [onUITransformVisible](UIPanel.md#onuitransformvisible)
- [cloneTo](UIPanel.md#cloneto)
- [copyComponent](UIPanel.md#copycomponent)
- [init](UIPanel.md#init)
- [updateDrawCallSegment](UIPanel.md#updatedrawcallsegment)
- [onUpdate](UIPanel.md#onupdate)
- [destroy](UIPanel.md#destroy)
- [start](UIPanel.md#start)
- [setShadowDirty](UIPanel.md#setshadowdirty)
- [setShadowRenderer](UIPanel.md#setshadowrenderer)
- [setShadowSource](UIPanel.md#setshadowsource)
- [getShadowRender](UIPanel.md#getshadowrender)
- [autoBindShadow](UIPanel.md#autobindshadow)
- [recycleQuad](UIPanel.md#recyclequad)
- [attachQuad](UIPanel.md#attachquad)
- [detachQuads](UIPanel.md#detachquads)

## Constructors

### constructor

• **new UIPanel**(): [`UIPanel`](UIPanel.md)

#### Returns

[`UIPanel`](UIPanel.md)

#### Inherited from

[UIImage](UIImage.md).[constructor](UIImage.md#constructor)

## Properties

### object3D

• **object3D**: [`Object3D`](Object3D.md) = `null`

#### Inherited from

[UIImage](UIImage.md).[object3D](UIImage.md#object3d)

#### Defined in

components/ComponentBase.ts:9

___

### \_eventDispatcher

• `Protected` **\_eventDispatcher**: [`CEventDispatcher`](CEventDispatcher.md)

#### Inherited from

[UIImage](UIImage.md).[_eventDispatcher](UIImage.md#_eventdispatcher)

#### Defined in

components/ComponentBase.ts:10

___

### \_enable

• `Protected` **\_enable**: `boolean` = `true`

#### Inherited from

[UIImage](UIImage.md).[_enable](UIImage.md#_enable)

#### Defined in

components/ComponentBase.ts:18

___

### isDestroyed

• **isDestroyed**: `boolean` = `false`

#### Inherited from

[UIImage](UIImage.md).[isDestroyed](UIImage.md#isdestroyed)

#### Defined in

components/ComponentBase.ts:20

___

### \_uiTransform

• `Protected` **\_uiTransform**: [`UITransform`](UITransform.md)

#### Inherited from

[UIImage](UIImage.md).[_uiTransform](UIImage.md#_uitransform)

#### Defined in

components/gui/uiComponents/UIComponentBase.ts:5

___

### \_visible

• `Protected` **\_visible**: `boolean` = `true`

#### Inherited from

[UIImage](UIImage.md).[_visible](UIImage.md#_visible)

#### Defined in

components/gui/uiComponents/UIComponentBase.ts:6

___

### space

• `Readonly` **space**: `number` = `GUISpace.World`

#### Defined in

components/gui/uiComponents/UIPanel.ts:16

___

### needUpdateGeometry

• **needUpdateGeometry**: `boolean` = `true`

#### Defined in

components/gui/uiComponents/UIPanel.ts:17

___

### panelOrder

• **panelOrder**: `number` = `0`

#### Defined in

components/gui/uiComponents/UIPanel.ts:18

___

### needSortOnCameraZ

• `Optional` **needSortOnCameraZ**: `boolean`

#### Defined in

components/gui/uiComponents/UIPanel.ts:19

___

### \_billboard

• `Protected` **\_billboard**: [`BillboardComponent`](BillboardComponent.md)

#### Defined in

components/gui/uiComponents/UIPanel.ts:20

___

### scissorEnable

• **scissorEnable**: `boolean` = `false`

#### Defined in

components/gui/uiComponents/UIPanel.ts:23

___

### scissorCornerRadius

• **scissorCornerRadius**: `number` = `0`

#### Defined in

components/gui/uiComponents/UIPanel.ts:24

___

### scissorFadeOutSize

• **scissorFadeOutSize**: `number` = `0`

#### Defined in

components/gui/uiComponents/UIPanel.ts:25

___

### \_uiRenderer

• `Protected` **\_uiRenderer**: [`GUIRenderer`](GUIRenderer.md)

#### Defined in

components/gui/uiComponents/UIPanel.ts:27

___

### \_geometry

• `Protected` **\_geometry**: [`GUIGeometry`](GUIGeometry.md)

#### Defined in

components/gui/uiComponents/UIPanel.ts:28

___

### \_maxCount

• `Protected` **\_maxCount**: `number` = `128`

#### Defined in

components/gui/uiComponents/UIPanel.ts:29

___

### panelRatio

• **panelRatio**: `number` = `1`

#### Defined in

components/gui/uiComponents/UIPanel.ts:31

___

### isUIPanel

• `Readonly` **isUIPanel**: ``true``

#### Defined in

components/gui/uiComponents/UIPanel.ts:32

___

### \_mainQuads

• `Protected` **\_mainQuads**: [`GUIQuad`](GUIQuad.md)[]

#### Inherited from

[UIImage](UIImage.md).[_mainQuads](UIImage.md#_mainquads)

#### Defined in

components/gui/uiComponents/UIRenderAble.ts:9

___

### \_shadowRender

• `Protected` **\_shadowRender**: [`UIRenderAble`](UIRenderAble.md)

#### Inherited from

[UIImage](UIImage.md).[_shadowRender](UIImage.md#_shadowrender)

#### Defined in

components/gui/uiComponents/UIRenderAble.ts:10

___

### \_shadowSource

• `Protected` **\_shadowSource**: [`UIRenderAble`](UIRenderAble.md)

#### Inherited from

[UIImage](UIImage.md).[_shadowSource](UIImage.md#_shadowsource)

#### Defined in

components/gui/uiComponents/UIRenderAble.ts:11

___

### isUIShadow

• `Optional` **isUIShadow**: `boolean`

#### Inherited from

[UIImage](UIImage.md).[isUIShadow](UIImage.md#isuishadow)

#### Defined in

components/gui/uiComponents/UIRenderAble.ts:12

___

### isShadowless

• `Optional` **isShadowless**: `boolean`

#### Inherited from

[UIImage](UIImage.md).[isShadowless](UIImage.md#isshadowless)

#### Defined in

components/gui/uiComponents/UIRenderAble.ts:13

___

### needUpdateShadow

• **needUpdateShadow**: `boolean`

#### Inherited from

[UIImage](UIImage.md).[needUpdateShadow](UIImage.md#needupdateshadow)

#### Defined in

components/gui/uiComponents/UIRenderAble.ts:14

## Accessors

### eventDispatcher

• `get` **eventDispatcher**(): [`CEventDispatcher`](CEventDispatcher.md)

#### Returns

[`CEventDispatcher`](CEventDispatcher.md)

#### Inherited from

UIImage.eventDispatcher

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

UIImage.eventDispatcher

#### Defined in

components/ComponentBase.ts:15

___

### isStart

• `get` **isStart**(): `boolean`

#### Returns

`boolean`

#### Inherited from

UIImage.isStart

#### Defined in

components/ComponentBase.ts:21

___

### transform

• `get` **transform**(): [`Transform`](Transform.md)

#### Returns

[`Transform`](Transform.md)

#### Inherited from

UIImage.transform

#### Defined in

components/ComponentBase.ts:24

___

### enable

• `get` **enable**(): `boolean`

#### Returns

`boolean`

#### Inherited from

UIImage.enable

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

UIImage.enable

#### Defined in

components/ComponentBase.ts:27

___

### uiTransform

• `get` **uiTransform**(): [`UITransform`](UITransform.md)

#### Returns

[`UITransform`](UITransform.md)

#### Inherited from

UIImage.uiTransform

#### Defined in

components/gui/uiComponents/UIComponentBase.ts:12

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

UIImage.visible

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

UIImage.visible

#### Defined in

components/gui/uiComponents/UIComponentBase.ts:20

___

### sprite

• `get` **sprite**(): [`GUISprite`](GUISprite.md)

#### Returns

[`GUISprite`](GUISprite.md)

#### Inherited from

UIImage.sprite

#### Defined in

components/gui/uiComponents/UIImage.ts:49

• `set` **sprite**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`GUISprite`](GUISprite.md) |

#### Returns

`void`

#### Inherited from

UIImage.sprite

#### Defined in

components/gui/uiComponents/UIImage.ts:29

___

### color

• `get` **color**(): [`Color`](Color.md)

#### Returns

[`Color`](Color.md)

#### Inherited from

UIImage.color

#### Defined in

components/gui/uiComponents/UIImage.ts:69

• `set` **color**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Color`](Color.md) |

#### Returns

`void`

#### Inherited from

UIImage.color

#### Defined in

components/gui/uiComponents/UIImage.ts:73

___

### imageType

• `get` **imageType**(): [`ImageType`](../enums/ImageType.md)

#### Returns

[`ImageType`](../enums/ImageType.md)

#### Inherited from

UIImage.imageType

#### Defined in

components/gui/uiComponents/UIImage.ts:80

• `set` **imageType**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`ImageType`](../enums/ImageType.md) |

#### Returns

`void`

#### Inherited from

UIImage.imageType

#### Defined in

components/gui/uiComponents/UIImage.ts:84

___

### quadMaxCount

• `get` **quadMaxCount**(): `number`

#### Returns

`number`

#### Defined in

components/gui/uiComponents/UIPanel.ts:102

___

### renderer

• `get` **renderer**(): [`GUIRenderer`](GUIRenderer.md)

#### Returns

[`GUIRenderer`](GUIRenderer.md)

#### Defined in

components/gui/uiComponents/UIPanel.ts:106

___

### billboard

• `get` **billboard**(): [`BillboardType`](../enums/BillboardType.md)

#### Returns

[`BillboardType`](../enums/BillboardType.md)

#### Defined in

components/gui/uiComponents/UIPanel.ts:127

• `set` **billboard**(`type`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`BillboardType`](../enums/BillboardType.md) |

#### Returns

`void`

#### Defined in

components/gui/uiComponents/UIPanel.ts:110

___

### cullMode

• `get` **cullMode**(): `GPUCullMode`

#### Returns

`GPUCullMode`

#### Defined in

components/gui/uiComponents/UIPanel.ts:141

• `set` **cullMode**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUCullMode` |

#### Returns

`void`

#### Defined in

components/gui/uiComponents/UIPanel.ts:131

___

### mainQuads

• `get` **mainQuads**(): [`GUIQuad`](GUIQuad.md)[]

#### Returns

[`GUIQuad`](GUIQuad.md)[]

#### Inherited from

UIImage.mainQuads

#### Defined in

components/gui/uiComponents/UIRenderAble.ts:44

## Methods

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

[UIImage](UIImage.md).[stop](UIImage.md#stop)

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

[UIImage](UIImage.md).[onEnable](UIImage.md#onenable)

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

[UIImage](UIImage.md).[onDisable](UIImage.md#ondisable)

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

[UIImage](UIImage.md).[onLateUpdate](UIImage.md#onlateupdate)

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

[UIImage](UIImage.md).[onBeforeUpdate](UIImage.md#onbeforeupdate)

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

[UIImage](UIImage.md).[onCompute](UIImage.md#oncompute)

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

[UIImage](UIImage.md).[onGraphic](UIImage.md#ongraphic)

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

[UIImage](UIImage.md).[onParentChange](UIImage.md#onparentchange)

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

[UIImage](UIImage.md).[onAddChild](UIImage.md#onaddchild)

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

[UIImage](UIImage.md).[onRemoveChild](UIImage.md#onremovechild)

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

[UIImage](UIImage.md).[beforeDestroy](UIImage.md#beforedestroy)

#### Defined in

components/ComponentBase.ts:135

___

### onTransformResize

▸ **onTransformResize**(): `void`

#### Returns

`void`

#### Inherited from

[UIImage](UIImage.md).[onTransformResize](UIImage.md#ontransformresize)

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

#### Inherited from

[UIImage](UIImage.md).[onUIComponentVisible](UIImage.md#onuicomponentvisible)

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

#### Inherited from

[UIImage](UIImage.md).[onUITransformVisible](UIImage.md#onuitransformvisible)

#### Defined in

components/gui/uiComponents/UIImage.ts:57

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

[UIImage](UIImage.md).[cloneTo](UIImage.md#cloneto)

#### Defined in

components/gui/uiComponents/UIPanel.ts:34

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

[UIImage](UIImage.md).[copyComponent](UIImage.md#copycomponent)

#### Defined in

components/gui/uiComponents/UIPanel.ts:39

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

[UIImage](UIImage.md).[init](UIImage.md#init)

#### Defined in

components/gui/uiComponents/UIPanel.ts:53

___

### updateDrawCallSegment

▸ **updateDrawCallSegment**(`index`, `indexStart`, `indexCount`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `indexStart` | `number` |
| `indexCount` | `number` |

#### Returns

`void`

#### Defined in

components/gui/uiComponents/UIPanel.ts:63

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

[UIImage](UIImage.md).[onUpdate](UIImage.md#onupdate)

#### Defined in

components/gui/uiComponents/UIPanel.ts:145

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[UIImage](UIImage.md).[destroy](UIImage.md#destroy)

#### Defined in

components/gui/uiComponents/UIRenderAble.ts:21

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Inherited from

[UIImage](UIImage.md).[start](UIImage.md#start)

#### Defined in

components/gui/uiComponents/UIRenderAble.ts:30

___

### setShadowDirty

▸ **setShadowDirty**(): `void`

#### Returns

`void`

#### Inherited from

[UIImage](UIImage.md).[setShadowDirty](UIImage.md#setshadowdirty)

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

[UIImage](UIImage.md).[setShadowRenderer](UIImage.md#setshadowrenderer)

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

[UIImage](UIImage.md).[setShadowSource](UIImage.md#setshadowsource)

#### Defined in

components/gui/uiComponents/UIRenderAble.ts:52

___

### getShadowRender

▸ **getShadowRender**(): [`UIRenderAble`](UIRenderAble.md)

#### Returns

[`UIRenderAble`](UIRenderAble.md)

#### Inherited from

[UIImage](UIImage.md).[getShadowRender](UIImage.md#getshadowrender)

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

[UIImage](UIImage.md).[autoBindShadow](UIImage.md#autobindshadow)

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

[UIImage](UIImage.md).[recycleQuad](UIImage.md#recyclequad)

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

[UIImage](UIImage.md).[attachQuad](UIImage.md#attachquad)

#### Defined in

components/gui/uiComponents/UIRenderAble.ts:107

___

### detachQuads

▸ **detachQuads**(): `this`

#### Returns

`this`

#### Inherited from

[UIImage](UIImage.md).[detachQuads](UIImage.md#detachquads)

#### Defined in

components/gui/uiComponents/UIRenderAble.ts:112
