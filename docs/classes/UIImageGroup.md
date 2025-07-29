[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / UIImageGroup

# Class: UIImageGroup

images/sprites/videos

## Hierarchy

- [`UIRenderAble`](UIRenderAble.md)

  ↳ **`UIImageGroup`**

## Table of contents

### Constructors

- [constructor](UIImageGroup.md#constructor)

### Properties

- [object3D](UIImageGroup.md#object3d)
- [\_eventDispatcher](UIImageGroup.md#_eventdispatcher)
- [\_enable](UIImageGroup.md#_enable)
- [isDestroyed](UIImageGroup.md#isdestroyed)
- [\_uiTransform](UIImageGroup.md#_uitransform)
- [\_visible](UIImageGroup.md#_visible)
- [\_mainQuads](UIImageGroup.md#_mainquads)
- [\_shadowRender](UIImageGroup.md#_shadowrender)
- [\_shadowSource](UIImageGroup.md#_shadowsource)
- [isUIShadow](UIImageGroup.md#isuishadow)
- [isShadowless](UIImageGroup.md#isshadowless)
- [needUpdateShadow](UIImageGroup.md#needupdateshadow)

### Accessors

- [eventDispatcher](UIImageGroup.md#eventdispatcher)
- [isStart](UIImageGroup.md#isstart)
- [transform](UIImageGroup.md#transform)
- [enable](UIImageGroup.md#enable)
- [uiTransform](UIImageGroup.md#uitransform)
- [visible](UIImageGroup.md#visible)
- [mainQuads](UIImageGroup.md#mainquads)

### Methods

- [stop](UIImageGroup.md#stop)
- [onEnable](UIImageGroup.md#onenable)
- [onDisable](UIImageGroup.md#ondisable)
- [onUpdate](UIImageGroup.md#onupdate)
- [onLateUpdate](UIImageGroup.md#onlateupdate)
- [onBeforeUpdate](UIImageGroup.md#onbeforeupdate)
- [onCompute](UIImageGroup.md#oncompute)
- [onGraphic](UIImageGroup.md#ongraphic)
- [onParentChange](UIImageGroup.md#onparentchange)
- [onAddChild](UIImageGroup.md#onaddchild)
- [onRemoveChild](UIImageGroup.md#onremovechild)
- [beforeDestroy](UIImageGroup.md#beforedestroy)
- [onTransformResize](UIImageGroup.md#ontransformresize)
- [init](UIImageGroup.md#init)
- [getQuad](UIImageGroup.md#getquad)
- [cloneTo](UIImageGroup.md#cloneto)
- [copyComponent](UIImageGroup.md#copycomponent)
- [setSprite](UIImageGroup.md#setsprite)
- [getSprite](UIImageGroup.md#getsprite)
- [onUIComponentVisible](UIImageGroup.md#onuicomponentvisible)
- [onUITransformVisible](UIImageGroup.md#onuitransformvisible)
- [getColor](UIImageGroup.md#getcolor)
- [setColor](UIImageGroup.md#setcolor)
- [getImageType](UIImageGroup.md#getimagetype)
- [setImageType](UIImageGroup.md#setimagetype)
- [setSize](UIImageGroup.md#setsize)
- [setXY](UIImageGroup.md#setxy)
- [getXY](UIImageGroup.md#getxy)
- [destroy](UIImageGroup.md#destroy)
- [start](UIImageGroup.md#start)
- [setShadowDirty](UIImageGroup.md#setshadowdirty)
- [setShadowRenderer](UIImageGroup.md#setshadowrenderer)
- [setShadowSource](UIImageGroup.md#setshadowsource)
- [getShadowRender](UIImageGroup.md#getshadowrender)
- [autoBindShadow](UIImageGroup.md#autobindshadow)
- [recycleQuad](UIImageGroup.md#recyclequad)
- [attachQuad](UIImageGroup.md#attachquad)
- [detachQuads](UIImageGroup.md#detachquads)

## Constructors

### constructor

• **new UIImageGroup**(): [`UIImageGroup`](UIImageGroup.md)

#### Returns

[`UIImageGroup`](UIImageGroup.md)

#### Overrides

[UIRenderAble](UIRenderAble.md).[constructor](UIRenderAble.md#constructor)

#### Defined in

components/gui/uiComponents/UIImageGroup.ts:16

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

### onTransformResize

▸ **onTransformResize**(): `void`

#### Returns

`void`

#### Inherited from

[UIRenderAble](UIRenderAble.md).[onTransformResize](UIRenderAble.md#ontransformresize)

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

[UIRenderAble](UIRenderAble.md).[init](UIRenderAble.md#init)

#### Defined in

components/gui/uiComponents/UIImageGroup.ts:20

___

### getQuad

▸ **getQuad**(`index`): [`GUIQuad`](GUIQuad.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`GUIQuad`](GUIQuad.md)

#### Defined in

components/gui/uiComponents/UIImageGroup.ts:29

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

components/gui/uiComponents/UIImageGroup.ts:33

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

components/gui/uiComponents/UIImageGroup.ts:38

___

### setSprite

▸ **setSprite**(`index`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `value` | [`GUISprite`](GUISprite.md) |

#### Returns

`void`

#### Defined in

components/gui/uiComponents/UIImageGroup.ts:48

___

### getSprite

▸ **getSprite**(`index`): [`GUISprite`](GUISprite.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`GUISprite`](GUISprite.md)

#### Defined in

components/gui/uiComponents/UIImageGroup.ts:53

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

components/gui/uiComponents/UIImageGroup.ts:57

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

components/gui/uiComponents/UIImageGroup.ts:61

___

### getColor

▸ **getColor**(`index`): [`Color`](Color.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`Color`](Color.md)

#### Defined in

components/gui/uiComponents/UIImageGroup.ts:73

___

### setColor

▸ **setColor**(`index`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `value` | [`Color`](Color.md) |

#### Returns

`void`

#### Defined in

components/gui/uiComponents/UIImageGroup.ts:77

___

### getImageType

▸ **getImageType**(`index`): [`ImageType`](../enums/ImageType.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`ImageType`](../enums/ImageType.md)

#### Defined in

components/gui/uiComponents/UIImageGroup.ts:82

___

### setImageType

▸ **setImageType**(`index`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `value` | [`ImageType`](../enums/ImageType.md) |

#### Returns

`void`

#### Defined in

components/gui/uiComponents/UIImageGroup.ts:86

___

### setSize

▸ **setSize**(`index`, `width`, `height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `width` | `number` |
| `height` | `number` |

#### Returns

`void`

#### Defined in

components/gui/uiComponents/UIImageGroup.ts:91

___

### setXY

▸ **setXY**(`index`, `x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Defined in

components/gui/uiComponents/UIImageGroup.ts:96

___

### getXY

▸ **getXY**(`index`, `ret?`): [`Vector2`](Vector2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `ret?` | [`Vector2`](Vector2.md) |

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

components/gui/uiComponents/UIImageGroup.ts:101

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
