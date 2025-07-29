[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / UIRenderAble

# Class: UIRenderAble

The basic class of render able GUI component

## Hierarchy

- [`UIComponentBase`](UIComponentBase.md)

  ↳ **`UIRenderAble`**

  ↳↳ [`UIImage`](UIImage.md)

  ↳↳ [`UIImageGroup`](UIImageGroup.md)

  ↳↳ [`UIShadow`](UIShadow.md)

  ↳↳ [`UITextField`](UITextField.md)

## Table of contents

### Constructors

- [constructor](UIRenderAble.md#constructor)

### Properties

- [object3D](UIRenderAble.md#object3d)
- [\_eventDispatcher](UIRenderAble.md#_eventdispatcher)
- [\_enable](UIRenderAble.md#_enable)
- [isDestroyed](UIRenderAble.md#isdestroyed)
- [\_uiTransform](UIRenderAble.md#_uitransform)
- [\_visible](UIRenderAble.md#_visible)
- [\_mainQuads](UIRenderAble.md#_mainquads)
- [\_shadowRender](UIRenderAble.md#_shadowrender)
- [\_shadowSource](UIRenderAble.md#_shadowsource)
- [isUIShadow](UIRenderAble.md#isuishadow)
- [isShadowless](UIRenderAble.md#isshadowless)
- [needUpdateShadow](UIRenderAble.md#needupdateshadow)

### Accessors

- [eventDispatcher](UIRenderAble.md#eventdispatcher)
- [isStart](UIRenderAble.md#isstart)
- [transform](UIRenderAble.md#transform)
- [enable](UIRenderAble.md#enable)
- [uiTransform](UIRenderAble.md#uitransform)
- [visible](UIRenderAble.md#visible)
- [mainQuads](UIRenderAble.md#mainquads)

### Methods

- [stop](UIRenderAble.md#stop)
- [onEnable](UIRenderAble.md#onenable)
- [onDisable](UIRenderAble.md#ondisable)
- [onUpdate](UIRenderAble.md#onupdate)
- [onLateUpdate](UIRenderAble.md#onlateupdate)
- [onBeforeUpdate](UIRenderAble.md#onbeforeupdate)
- [onCompute](UIRenderAble.md#oncompute)
- [onGraphic](UIRenderAble.md#ongraphic)
- [onParentChange](UIRenderAble.md#onparentchange)
- [onAddChild](UIRenderAble.md#onaddchild)
- [onRemoveChild](UIRenderAble.md#onremovechild)
- [cloneTo](UIRenderAble.md#cloneto)
- [beforeDestroy](UIRenderAble.md#beforedestroy)
- [onUITransformVisible](UIRenderAble.md#onuitransformvisible)
- [onUIComponentVisible](UIRenderAble.md#onuicomponentvisible)
- [onTransformResize](UIRenderAble.md#ontransformresize)
- [init](UIRenderAble.md#init)
- [destroy](UIRenderAble.md#destroy)
- [start](UIRenderAble.md#start)
- [setShadowDirty](UIRenderAble.md#setshadowdirty)
- [setShadowRenderer](UIRenderAble.md#setshadowrenderer)
- [setShadowSource](UIRenderAble.md#setshadowsource)
- [getShadowRender](UIRenderAble.md#getshadowrender)
- [autoBindShadow](UIRenderAble.md#autobindshadow)
- [recycleQuad](UIRenderAble.md#recyclequad)
- [attachQuad](UIRenderAble.md#attachquad)
- [detachQuads](UIRenderAble.md#detachquads)
- [copyComponent](UIRenderAble.md#copycomponent)

## Constructors

### constructor

• **new UIRenderAble**(): [`UIRenderAble`](UIRenderAble.md)

#### Returns

[`UIRenderAble`](UIRenderAble.md)

#### Inherited from

[UIComponentBase](UIComponentBase.md).[constructor](UIComponentBase.md#constructor)

## Properties

### object3D

• **object3D**: [`Object3D`](Object3D.md) = `null`

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

### \_mainQuads

• `Protected` **\_mainQuads**: [`GUIQuad`](GUIQuad.md)[]

#### Defined in

components/gui/uiComponents/UIRenderAble.ts:9

___

### \_shadowRender

• `Protected` **\_shadowRender**: [`UIRenderAble`](UIRenderAble.md)

#### Defined in

components/gui/uiComponents/UIRenderAble.ts:10

___

### \_shadowSource

• `Protected` **\_shadowSource**: [`UIRenderAble`](UIRenderAble.md)

#### Defined in

components/gui/uiComponents/UIRenderAble.ts:11

___

### isUIShadow

• `Optional` **isUIShadow**: `boolean`

#### Defined in

components/gui/uiComponents/UIRenderAble.ts:12

___

### isShadowless

• `Optional` **isShadowless**: `boolean`

#### Defined in

components/gui/uiComponents/UIRenderAble.ts:13

___

### needUpdateShadow

• **needUpdateShadow**: `boolean`

#### Defined in

components/gui/uiComponents/UIRenderAble.ts:14

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

#### Inherited from

UIComponentBase.visible

#### Defined in

components/gui/uiComponents/UIComponentBase.ts:20

___

### mainQuads

• `get` **mainQuads**(): [`GUIQuad`](GUIQuad.md)[]

#### Returns

[`GUIQuad`](GUIQuad.md)[]

#### Defined in

components/gui/uiComponents/UIRenderAble.ts:44

## Methods

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

### cloneTo

▸ **cloneTo**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`Object3D`](Object3D.md) |

#### Returns

`void`

#### Inherited from

[UIComponentBase](UIComponentBase.md).[cloneTo](UIComponentBase.md#cloneto)

#### Defined in

components/ComponentBase.ts:90

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

components/gui/uiComponents/UIRenderAble.ts:16

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Overrides

[UIComponentBase](UIComponentBase.md).[destroy](UIComponentBase.md#destroy)

#### Defined in

components/gui/uiComponents/UIRenderAble.ts:21

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Overrides

[UIComponentBase](UIComponentBase.md).[start](UIComponentBase.md#start)

#### Defined in

components/gui/uiComponents/UIRenderAble.ts:30

___

### setShadowDirty

▸ **setShadowDirty**(): `void`

#### Returns

`void`

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

#### Defined in

components/gui/uiComponents/UIRenderAble.ts:52

___

### getShadowRender

▸ **getShadowRender**(): [`UIRenderAble`](UIRenderAble.md)

#### Returns

[`UIRenderAble`](UIRenderAble.md)

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

#### Defined in

components/gui/uiComponents/UIRenderAble.ts:107

___

### detachQuads

▸ **detachQuads**(): `this`

#### Returns

`this`

#### Defined in

components/gui/uiComponents/UIRenderAble.ts:112

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

components/gui/uiComponents/UIRenderAble.ts:123
