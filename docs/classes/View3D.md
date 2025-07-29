[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / View3D

# Class: View3D

View3D类表示3D视图，负责管理场景、相机和视口。
它是渲染管线的重要组成部分，处理场景渲染、拾取操作和UI画布。
每个View3D实例代表一个独立的渲染视图，可以有自己的场景、相机和视口设置。

## Hierarchy

- [`CEventListener`](CEventListener.md)

  ↳ **`View3D`**

## Table of contents

### Constructors

- [constructor](View3D.md#constructor)

### Properties

- [pickFire](View3D.md#pickfire)
- [guiPick](View3D.md#guipick)
- [canvasList](View3D.md#canvaslist)
- [event\_id\_count](View3D.md#event_id_count)
- [id](View3D.md#id)
- [current](View3D.md#current)
- [type](View3D.md#type)
- [thisObject](View3D.md#thisobject)
- [handler](View3D.md#handler)
- [param](View3D.md#param)
- [priority](View3D.md#priority)

### Accessors

- [enable](View3D.md#enable)
- [enablePick](View3D.md#enablepick)
- [scene](View3D.md#scene)
- [camera](View3D.md#camera)
- [viewPort](View3D.md#viewport)

### Methods

- [enableUICanvas](View3D.md#enableuicanvas)
- [disableUICanvas](View3D.md#disableuicanvas)
- [equalCurrentListener](View3D.md#equalcurrentlistener)
- [dispose](View3D.md#dispose)

## Constructors

### constructor

• **new View3D**(`x?`, `y?`, `width?`, `height?`): [`View3D`](View3D.md)

创建一个新的3D视图

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `x` | `number` | `0` | 视口的X坐标，默认为0 |
| `y` | `number` | `0` | 视口的Y坐标，默认为0 |
| `width` | `number` | `0` | 视口的宽度，默认为0 |
| `height` | `number` | `0` | 视口的高度，默认为0 |

#### Returns

[`View3D`](View3D.md)

#### Overrides

[CEventListener](CEventListener.md).[constructor](CEventListener.md#constructor)

#### Defined in

core/View3D.ts:69

## Properties

### pickFire

• **pickFire**: [`PickFire`](PickFire.md)

拾取事件处理器

#### Defined in

core/View3D.ts:50

___

### guiPick

• **guiPick**: [`GUIPick`](GUIPick.md)

GUI拾取处理器

#### Defined in

core/View3D.ts:55

___

### canvasList

• `Readonly` **canvasList**: [`GUICanvas`](GUICanvas.md)[]

视图中的UI画布列表

#### Defined in

core/View3D.ts:60

___

### event\_id\_count

▪ `Static` **event\_id\_count**: `number` = `0`

#### Inherited from

[CEventListener](CEventListener.md).[event_id_count](CEventListener.md#event_id_count)

#### Defined in

event/CEventListener.ts:2

___

### id

• **id**: `number` = `0`

#### Inherited from

[CEventListener](CEventListener.md).[id](CEventListener.md#id)

#### Defined in

event/CEventListener.ts:3

___

### current

• **current**: `any`

#### Inherited from

[CEventListener](CEventListener.md).[current](CEventListener.md#current)

#### Defined in

event/CEventListener.ts:4

___

### type

• **type**: `string` \| `number` = `null`

#### Inherited from

[CEventListener](CEventListener.md).[type](CEventListener.md#type)

#### Defined in

event/CEventListener.ts:7

___

### thisObject

• **thisObject**: `any` = `null`

#### Inherited from

[CEventListener](CEventListener.md).[thisObject](CEventListener.md#thisobject)

#### Defined in

event/CEventListener.ts:8

___

### handler

• **handler**: `Function` = `null`

#### Inherited from

[CEventListener](CEventListener.md).[handler](CEventListener.md#handler)

#### Defined in

event/CEventListener.ts:9

___

### param

• **param**: `any` = `null`

#### Inherited from

[CEventListener](CEventListener.md).[param](CEventListener.md#param)

#### Defined in

event/CEventListener.ts:10

___

### priority

• **priority**: `number` = `0`

#### Inherited from

[CEventListener](CEventListener.md).[priority](CEventListener.md#priority)

#### Defined in

event/CEventListener.ts:11

## Accessors

### enable

• `get` **enable**(): `boolean`

#### Returns

`boolean`

#### Defined in

core/View3D.ts:80

• `set` **enable**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

core/View3D.ts:84

___

### enablePick

• `get` **enablePick**(): `boolean`

#### Returns

`boolean`

#### Defined in

core/View3D.ts:88

• `set` **enablePick**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

core/View3D.ts:92

___

### scene

• `get` **scene**(): [`Scene3D`](Scene3D.md)

#### Returns

[`Scene3D`](Scene3D.md)

#### Defined in

core/View3D.ts:100

• `set` **scene**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Scene3D`](Scene3D.md) |

#### Returns

`void`

#### Defined in

core/View3D.ts:104

___

### camera

• `get` **camera**(): [`Camera3D`](Camera3D.md)

#### Returns

[`Camera3D`](Camera3D.md)

#### Defined in

core/View3D.ts:117

• `set` **camera**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Camera3D`](Camera3D.md) |

#### Returns

`void`

#### Defined in

core/View3D.ts:121

___

### viewPort

• `get` **viewPort**(): [`Vector4`](Vector4.md)

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

core/View3D.ts:125

• `set` **viewPort**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector4`](Vector4.md) |

#### Returns

`void`

#### Defined in

core/View3D.ts:129

## Methods

### enableUICanvas

▸ **enableUICanvas**(`index?`): [`GUICanvas`](GUICanvas.md)

启用指定索引的UI画布
如果画布不存在，会创建一个新的画布并添加到场景中
同时确保GUI拾取功能已初始化

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `index` | `number` | `0` | 画布索引，默认为0 |

#### Returns

[`GUICanvas`](GUICanvas.md)

启用的GUI画布实例

#### Defined in

core/View3D.ts:141

___

### disableUICanvas

▸ **disableUICanvas**(`index?`): `void`

禁用指定索引的UI画布
将画布从场景中移除，但不会销毁画布对象

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `index` | `number` | `0` | 要禁用的画布索引，默认为0 |

#### Returns

`void`

#### Defined in

core/View3D.ts:167

___

### equalCurrentListener

▸ **equalCurrentListener**(`type`, `handler`, `thisObject`, `param`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `handler` | `Function` |
| `thisObject` | `any` |
| `param` | `any` |

#### Returns

`boolean`

#### Inherited from

[CEventListener](CEventListener.md).[equalCurrentListener](CEventListener.md#equalcurrentlistener)

#### Defined in

event/CEventListener.ts:14

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[CEventListener](CEventListener.md).[dispose](CEventListener.md#dispose)

#### Defined in

event/CEventListener.ts:31
