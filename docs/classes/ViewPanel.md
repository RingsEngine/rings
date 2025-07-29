[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / ViewPanel

# Class: ViewPanel

The basic class of render able GUI component

## Hierarchy

- [`UIPanel`](UIPanel.md)

  ↳ **`ViewPanel`**

## Table of contents

### Constructors

- [constructor](ViewPanel.md#constructor)

### Properties

- [object3D](ViewPanel.md#object3d)
- [\_eventDispatcher](ViewPanel.md#_eventdispatcher)
- [\_enable](ViewPanel.md#_enable)
- [isDestroyed](ViewPanel.md#isdestroyed)
- [\_uiTransform](ViewPanel.md#_uitransform)
- [\_visible](ViewPanel.md#_visible)
- [needUpdateGeometry](ViewPanel.md#needupdategeometry)
- [panelOrder](ViewPanel.md#panelorder)
- [needSortOnCameraZ](ViewPanel.md#needsortoncameraz)
- [\_billboard](ViewPanel.md#_billboard)
- [scissorEnable](ViewPanel.md#scissorenable)
- [scissorCornerRadius](ViewPanel.md#scissorcornerradius)
- [scissorFadeOutSize](ViewPanel.md#scissorfadeoutsize)
- [\_uiRenderer](ViewPanel.md#_uirenderer)
- [\_geometry](ViewPanel.md#_geometry)
- [\_maxCount](ViewPanel.md#_maxcount)
- [panelRatio](ViewPanel.md#panelratio)
- [isUIPanel](ViewPanel.md#isuipanel)
- [\_mainQuads](ViewPanel.md#_mainquads)
- [\_shadowRender](ViewPanel.md#_shadowrender)
- [\_shadowSource](ViewPanel.md#_shadowsource)
- [isUIShadow](ViewPanel.md#isuishadow)
- [isShadowless](ViewPanel.md#isshadowless)
- [needUpdateShadow](ViewPanel.md#needupdateshadow)
- [isViewPanel](ViewPanel.md#isviewpanel)
- [space](ViewPanel.md#space)

### Accessors

- [eventDispatcher](ViewPanel.md#eventdispatcher)
- [isStart](ViewPanel.md#isstart)
- [transform](ViewPanel.md#transform)
- [enable](ViewPanel.md#enable)
- [uiTransform](ViewPanel.md#uitransform)
- [visible](ViewPanel.md#visible)
- [sprite](ViewPanel.md#sprite)
- [color](ViewPanel.md#color)
- [imageType](ViewPanel.md#imagetype)
- [quadMaxCount](ViewPanel.md#quadmaxcount)
- [renderer](ViewPanel.md#renderer)
- [billboard](ViewPanel.md#billboard)
- [cullMode](ViewPanel.md#cullmode)
- [mainQuads](ViewPanel.md#mainquads)

### Methods

- [stop](ViewPanel.md#stop)
- [onEnable](ViewPanel.md#onenable)
- [onDisable](ViewPanel.md#ondisable)
- [onLateUpdate](ViewPanel.md#onlateupdate)
- [onBeforeUpdate](ViewPanel.md#onbeforeupdate)
- [onCompute](ViewPanel.md#oncompute)
- [onGraphic](ViewPanel.md#ongraphic)
- [onParentChange](ViewPanel.md#onparentchange)
- [onAddChild](ViewPanel.md#onaddchild)
- [onRemoveChild](ViewPanel.md#onremovechild)
- [beforeDestroy](ViewPanel.md#beforedestroy)
- [onTransformResize](ViewPanel.md#ontransformresize)
- [onUIComponentVisible](ViewPanel.md#onuicomponentvisible)
- [onUITransformVisible](ViewPanel.md#onuitransformvisible)
- [copyComponent](ViewPanel.md#copycomponent)
- [init](ViewPanel.md#init)
- [updateDrawCallSegment](ViewPanel.md#updatedrawcallsegment)
- [onUpdate](ViewPanel.md#onupdate)
- [destroy](ViewPanel.md#destroy)
- [start](ViewPanel.md#start)
- [setShadowDirty](ViewPanel.md#setshadowdirty)
- [setShadowRenderer](ViewPanel.md#setshadowrenderer)
- [setShadowSource](ViewPanel.md#setshadowsource)
- [getShadowRender](ViewPanel.md#getshadowrender)
- [autoBindShadow](ViewPanel.md#autobindshadow)
- [recycleQuad](ViewPanel.md#recyclequad)
- [attachQuad](ViewPanel.md#attachquad)
- [detachQuads](ViewPanel.md#detachquads)
- [cloneTo](ViewPanel.md#cloneto)

## Constructors

### constructor

• **new ViewPanel**(): [`ViewPanel`](ViewPanel.md)

#### Returns

[`ViewPanel`](ViewPanel.md)

#### Overrides

[UIPanel](UIPanel.md).[constructor](UIPanel.md#constructor)

#### Defined in

components/gui/uiComponents/ViewPanel.ts:8

## Properties

### object3D

• **object3D**: [`Object3D`](Object3D.md) = `null`

#### Inherited from

[UIPanel](UIPanel.md).[object3D](UIPanel.md#object3d)

#### Defined in

components/ComponentBase.ts:9

___

### \_eventDispatcher

• `Protected` **\_eventDispatcher**: [`CEventDispatcher`](CEventDispatcher.md)

#### Inherited from

[UIPanel](UIPanel.md).[_eventDispatcher](UIPanel.md#_eventdispatcher)

#### Defined in

components/ComponentBase.ts:10

___

### \_enable

• `Protected` **\_enable**: `boolean` = `true`

#### Inherited from

[UIPanel](UIPanel.md).[_enable](UIPanel.md#_enable)

#### Defined in

components/ComponentBase.ts:18

___

### isDestroyed

• **isDestroyed**: `boolean` = `false`

#### Inherited from

[UIPanel](UIPanel.md).[isDestroyed](UIPanel.md#isdestroyed)

#### Defined in

components/ComponentBase.ts:20

___

### \_uiTransform

• `Protected` **\_uiTransform**: [`UITransform`](UITransform.md)

#### Inherited from

[UIPanel](UIPanel.md).[_uiTransform](UIPanel.md#_uitransform)

#### Defined in

components/gui/uiComponents/UIComponentBase.ts:5

___

### \_visible

• `Protected` **\_visible**: `boolean` = `true`

#### Inherited from

[UIPanel](UIPanel.md).[_visible](UIPanel.md#_visible)

#### Defined in

components/gui/uiComponents/UIComponentBase.ts:6

___

### needUpdateGeometry

• **needUpdateGeometry**: `boolean` = `true`

#### Inherited from

[UIPanel](UIPanel.md).[needUpdateGeometry](UIPanel.md#needupdategeometry)

#### Defined in

components/gui/uiComponents/UIPanel.ts:17

___

### panelOrder

• **panelOrder**: `number` = `0`

#### Inherited from

[UIPanel](UIPanel.md).[panelOrder](UIPanel.md#panelorder)

#### Defined in

components/gui/uiComponents/UIPanel.ts:18

___

### needSortOnCameraZ

• `Optional` **needSortOnCameraZ**: `boolean`

#### Inherited from

[UIPanel](UIPanel.md).[needSortOnCameraZ](UIPanel.md#needsortoncameraz)

#### Defined in

components/gui/uiComponents/UIPanel.ts:19

___

### \_billboard

• `Protected` **\_billboard**: [`BillboardComponent`](BillboardComponent.md)

#### Inherited from

[UIPanel](UIPanel.md).[_billboard](UIPanel.md#_billboard)

#### Defined in

components/gui/uiComponents/UIPanel.ts:20

___

### scissorEnable

• **scissorEnable**: `boolean` = `false`

#### Inherited from

[UIPanel](UIPanel.md).[scissorEnable](UIPanel.md#scissorenable)

#### Defined in

components/gui/uiComponents/UIPanel.ts:23

___

### scissorCornerRadius

• **scissorCornerRadius**: `number` = `0`

#### Inherited from

[UIPanel](UIPanel.md).[scissorCornerRadius](UIPanel.md#scissorcornerradius)

#### Defined in

components/gui/uiComponents/UIPanel.ts:24

___

### scissorFadeOutSize

• **scissorFadeOutSize**: `number` = `0`

#### Inherited from

[UIPanel](UIPanel.md).[scissorFadeOutSize](UIPanel.md#scissorfadeoutsize)

#### Defined in

components/gui/uiComponents/UIPanel.ts:25

___

### \_uiRenderer

• `Protected` **\_uiRenderer**: [`GUIRenderer`](GUIRenderer.md)

#### Inherited from

[UIPanel](UIPanel.md).[_uiRenderer](UIPanel.md#_uirenderer)

#### Defined in

components/gui/uiComponents/UIPanel.ts:27

___

### \_geometry

• `Protected` **\_geometry**: [`GUIGeometry`](GUIGeometry.md)

#### Inherited from

[UIPanel](UIPanel.md).[_geometry](UIPanel.md#_geometry)

#### Defined in

components/gui/uiComponents/UIPanel.ts:28

___

### \_maxCount

• `Protected` **\_maxCount**: `number` = `128`

#### Inherited from

[UIPanel](UIPanel.md).[_maxCount](UIPanel.md#_maxcount)

#### Defined in

components/gui/uiComponents/UIPanel.ts:29

___

### panelRatio

• **panelRatio**: `number` = `1`

#### Inherited from

[UIPanel](UIPanel.md).[panelRatio](UIPanel.md#panelratio)

#### Defined in

components/gui/uiComponents/UIPanel.ts:31

___

### isUIPanel

• `Readonly` **isUIPanel**: ``true``

#### Inherited from

[UIPanel](UIPanel.md).[isUIPanel](UIPanel.md#isuipanel)

#### Defined in

components/gui/uiComponents/UIPanel.ts:32

___

### \_mainQuads

• `Protected` **\_mainQuads**: [`GUIQuad`](GUIQuad.md)[]

#### Inherited from

[UIPanel](UIPanel.md).[_mainQuads](UIPanel.md#_mainquads)

#### Defined in

components/gui/uiComponents/UIRenderAble.ts:9

___

### \_shadowRender

• `Protected` **\_shadowRender**: [`UIRenderAble`](UIRenderAble.md)

#### Inherited from

[UIPanel](UIPanel.md).[_shadowRender](UIPanel.md#_shadowrender)

#### Defined in

components/gui/uiComponents/UIRenderAble.ts:10

___

### \_shadowSource

• `Protected` **\_shadowSource**: [`UIRenderAble`](UIRenderAble.md)

#### Inherited from

[UIPanel](UIPanel.md).[_shadowSource](UIPanel.md#_shadowsource)

#### Defined in

components/gui/uiComponents/UIRenderAble.ts:11

___

### isUIShadow

• `Optional` **isUIShadow**: `boolean`

#### Inherited from

[UIPanel](UIPanel.md).[isUIShadow](UIPanel.md#isuishadow)

#### Defined in

components/gui/uiComponents/UIRenderAble.ts:12

___

### isShadowless

• `Optional` **isShadowless**: `boolean`

#### Inherited from

[UIPanel](UIPanel.md).[isShadowless](UIPanel.md#isshadowless)

#### Defined in

components/gui/uiComponents/UIRenderAble.ts:13

___

### needUpdateShadow

• **needUpdateShadow**: `boolean`

#### Inherited from

[UIPanel](UIPanel.md).[needUpdateShadow](UIPanel.md#needupdateshadow)

#### Defined in

components/gui/uiComponents/UIRenderAble.ts:14

___

### isViewPanel

• `Readonly` **isViewPanel**: ``true``

#### Defined in

components/gui/uiComponents/ViewPanel.ts:6

___

### space

• `Readonly` **space**: [`GUISpace`](../enums/GUISpace.md) = `GUISpace.View`

#### Overrides

[UIPanel](UIPanel.md).[space](UIPanel.md#space)

#### Defined in

components/gui/uiComponents/ViewPanel.ts:7

## Accessors

### eventDispatcher

• `get` **eventDispatcher**(): [`CEventDispatcher`](CEventDispatcher.md)

#### Returns

[`CEventDispatcher`](CEventDispatcher.md)

#### Inherited from

UIPanel.eventDispatcher

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

UIPanel.eventDispatcher

#### Defined in

components/ComponentBase.ts:15

___

### isStart

• `get` **isStart**(): `boolean`

#### Returns

`boolean`

#### Inherited from

UIPanel.isStart

#### Defined in

components/ComponentBase.ts:21

___

### transform

• `get` **transform**(): [`Transform`](Transform.md)

#### Returns

[`Transform`](Transform.md)

#### Inherited from

UIPanel.transform

#### Defined in

components/ComponentBase.ts:24

___

### enable

• `get` **enable**(): `boolean`

#### Returns

`boolean`

#### Inherited from

UIPanel.enable

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

UIPanel.enable

#### Defined in

components/ComponentBase.ts:27

___

### uiTransform

• `get` **uiTransform**(): [`UITransform`](UITransform.md)

#### Returns

[`UITransform`](UITransform.md)

#### Inherited from

UIPanel.uiTransform

#### Defined in

components/gui/uiComponents/UIComponentBase.ts:12

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

UIPanel.visible

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

UIPanel.visible

#### Defined in

components/gui/uiComponents/UIComponentBase.ts:20

___

### sprite

• `get` **sprite**(): [`GUISprite`](GUISprite.md)

#### Returns

[`GUISprite`](GUISprite.md)

#### Inherited from

UIPanel.sprite

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

UIPanel.sprite

#### Defined in

components/gui/uiComponents/UIImage.ts:29

___

### color

• `get` **color**(): [`Color`](Color.md)

#### Returns

[`Color`](Color.md)

#### Inherited from

UIPanel.color

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

UIPanel.color

#### Defined in

components/gui/uiComponents/UIImage.ts:73

___

### imageType

• `get` **imageType**(): [`ImageType`](../enums/ImageType.md)

#### Returns

[`ImageType`](../enums/ImageType.md)

#### Inherited from

UIPanel.imageType

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

UIPanel.imageType

#### Defined in

components/gui/uiComponents/UIImage.ts:84

___

### quadMaxCount

• `get` **quadMaxCount**(): `number`

#### Returns

`number`

#### Inherited from

UIPanel.quadMaxCount

#### Defined in

components/gui/uiComponents/UIPanel.ts:102

___

### renderer

• `get` **renderer**(): [`GUIRenderer`](GUIRenderer.md)

#### Returns

[`GUIRenderer`](GUIRenderer.md)

#### Inherited from

UIPanel.renderer

#### Defined in

components/gui/uiComponents/UIPanel.ts:106

___

### billboard

• `get` **billboard**(): [`BillboardType`](../enums/BillboardType.md)

#### Returns

[`BillboardType`](../enums/BillboardType.md)

#### Inherited from

UIPanel.billboard

#### Defined in

components/gui/uiComponents/UIPanel.ts:127

• `set` **billboard**(`type`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`BillboardType`](../enums/BillboardType.md) |

#### Returns

`void`

#### Inherited from

UIPanel.billboard

#### Defined in

components/gui/uiComponents/UIPanel.ts:110

___

### cullMode

• `get` **cullMode**(): `GPUCullMode`

#### Returns

`GPUCullMode`

#### Inherited from

UIPanel.cullMode

#### Defined in

components/gui/uiComponents/UIPanel.ts:141

• `set` **cullMode**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUCullMode` |

#### Returns

`void`

#### Inherited from

UIPanel.cullMode

#### Defined in

components/gui/uiComponents/UIPanel.ts:131

___

### mainQuads

• `get` **mainQuads**(): [`GUIQuad`](GUIQuad.md)[]

#### Returns

[`GUIQuad`](GUIQuad.md)[]

#### Inherited from

UIPanel.mainQuads

#### Defined in

components/gui/uiComponents/UIRenderAble.ts:44

## Methods

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

[UIPanel](UIPanel.md).[stop](UIPanel.md#stop)

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

[UIPanel](UIPanel.md).[onEnable](UIPanel.md#onenable)

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

[UIPanel](UIPanel.md).[onDisable](UIPanel.md#ondisable)

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

[UIPanel](UIPanel.md).[onLateUpdate](UIPanel.md#onlateupdate)

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

[UIPanel](UIPanel.md).[onBeforeUpdate](UIPanel.md#onbeforeupdate)

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

[UIPanel](UIPanel.md).[onCompute](UIPanel.md#oncompute)

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

[UIPanel](UIPanel.md).[onGraphic](UIPanel.md#ongraphic)

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

[UIPanel](UIPanel.md).[onParentChange](UIPanel.md#onparentchange)

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

[UIPanel](UIPanel.md).[onAddChild](UIPanel.md#onaddchild)

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

[UIPanel](UIPanel.md).[onRemoveChild](UIPanel.md#onremovechild)

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

[UIPanel](UIPanel.md).[beforeDestroy](UIPanel.md#beforedestroy)

#### Defined in

components/ComponentBase.ts:135

___

### onTransformResize

▸ **onTransformResize**(): `void`

#### Returns

`void`

#### Inherited from

[UIPanel](UIPanel.md).[onTransformResize](UIPanel.md#ontransformresize)

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

[UIPanel](UIPanel.md).[onUIComponentVisible](UIPanel.md#onuicomponentvisible)

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

[UIPanel](UIPanel.md).[onUITransformVisible](UIPanel.md#onuitransformvisible)

#### Defined in

components/gui/uiComponents/UIImage.ts:57

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

[UIPanel](UIPanel.md).[copyComponent](UIPanel.md#copycomponent)

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

#### Inherited from

[UIPanel](UIPanel.md).[init](UIPanel.md#init)

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

#### Inherited from

[UIPanel](UIPanel.md).[updateDrawCallSegment](UIPanel.md#updatedrawcallsegment)

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

#### Inherited from

[UIPanel](UIPanel.md).[onUpdate](UIPanel.md#onupdate)

#### Defined in

components/gui/uiComponents/UIPanel.ts:145

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[UIPanel](UIPanel.md).[destroy](UIPanel.md#destroy)

#### Defined in

components/gui/uiComponents/UIRenderAble.ts:21

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Inherited from

[UIPanel](UIPanel.md).[start](UIPanel.md#start)

#### Defined in

components/gui/uiComponents/UIRenderAble.ts:30

___

### setShadowDirty

▸ **setShadowDirty**(): `void`

#### Returns

`void`

#### Inherited from

[UIPanel](UIPanel.md).[setShadowDirty](UIPanel.md#setshadowdirty)

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

[UIPanel](UIPanel.md).[setShadowRenderer](UIPanel.md#setshadowrenderer)

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

[UIPanel](UIPanel.md).[setShadowSource](UIPanel.md#setshadowsource)

#### Defined in

components/gui/uiComponents/UIRenderAble.ts:52

___

### getShadowRender

▸ **getShadowRender**(): [`UIRenderAble`](UIRenderAble.md)

#### Returns

[`UIRenderAble`](UIRenderAble.md)

#### Inherited from

[UIPanel](UIPanel.md).[getShadowRender](UIPanel.md#getshadowrender)

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

[UIPanel](UIPanel.md).[autoBindShadow](UIPanel.md#autobindshadow)

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

[UIPanel](UIPanel.md).[recycleQuad](UIPanel.md#recyclequad)

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

[UIPanel](UIPanel.md).[attachQuad](UIPanel.md#attachquad)

#### Defined in

components/gui/uiComponents/UIRenderAble.ts:107

___

### detachQuads

▸ **detachQuads**(): `this`

#### Returns

`this`

#### Inherited from

[UIPanel](UIPanel.md).[detachQuads](UIPanel.md#detachquads)

#### Defined in

components/gui/uiComponents/UIRenderAble.ts:112

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

[UIPanel](UIPanel.md).[cloneTo](UIPanel.md#cloneto)

#### Defined in

components/gui/uiComponents/ViewPanel.ts:12
