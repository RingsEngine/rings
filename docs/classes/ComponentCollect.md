[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / ComponentCollect

# Class: ComponentCollect

## Table of contents

### Constructors

- [constructor](ComponentCollect.md#constructor)

### Properties

- [componentsUpdateList](ComponentCollect.md#componentsupdatelist)
- [componentsLateUpdateList](ComponentCollect.md#componentslateupdatelist)
- [componentsBeforeUpdateList](ComponentCollect.md#componentsbeforeupdatelist)
- [componentsComputeList](ComponentCollect.md#componentscomputelist)
- [componentsEnablePickerList](ComponentCollect.md#componentsenablepickerlist)
- [graphicComponent](ComponentCollect.md#graphiccomponent)
- [waitStartComponent](ComponentCollect.md#waitstartcomponent)

### Methods

- [bindUpdate](ComponentCollect.md#bindupdate)
- [unBindUpdate](ComponentCollect.md#unbindupdate)
- [bindLateUpdate](ComponentCollect.md#bindlateupdate)
- [unBindLateUpdate](ComponentCollect.md#unbindlateupdate)
- [bindBeforeUpdate](ComponentCollect.md#bindbeforeupdate)
- [unBindBeforeUpdate](ComponentCollect.md#unbindbeforeupdate)
- [bindCompute](ComponentCollect.md#bindcompute)
- [unBindCompute](ComponentCollect.md#unbindcompute)
- [bindGraphic](ComponentCollect.md#bindgraphic)
- [unBindGraphic](ComponentCollect.md#unbindgraphic)
- [appendWaitStart](ComponentCollect.md#appendwaitstart)
- [removeWaitStart](ComponentCollect.md#removewaitstart)
- [bindEnablePick](ComponentCollect.md#bindenablepick)
- [unBindEnablePick](ComponentCollect.md#unbindenablepick)

## Constructors

### constructor

• **new ComponentCollect**(): [`ComponentCollect`](ComponentCollect.md)

#### Returns

[`ComponentCollect`](ComponentCollect.md)

## Properties

### componentsUpdateList

▪ `Static` **componentsUpdateList**: `Map`\<[`View3D`](View3D.md), `Map`\<[`IComponent`](../interfaces/IComponent.md), `Function`\>\>

#### Defined in

gfx/renderJob/collect/ComponentCollect.ts:7

___

### componentsLateUpdateList

▪ `Static` **componentsLateUpdateList**: `Map`\<[`View3D`](View3D.md), `Map`\<[`IComponent`](../interfaces/IComponent.md), `Function`\>\>

#### Defined in

gfx/renderJob/collect/ComponentCollect.ts:8

___

### componentsBeforeUpdateList

▪ `Static` **componentsBeforeUpdateList**: `Map`\<[`View3D`](View3D.md), `Map`\<[`IComponent`](../interfaces/IComponent.md), `Function`\>\>

#### Defined in

gfx/renderJob/collect/ComponentCollect.ts:12

___

### componentsComputeList

▪ `Static` **componentsComputeList**: `Map`\<[`View3D`](View3D.md), `Map`\<[`IComponent`](../interfaces/IComponent.md), `Function`\>\>

#### Defined in

gfx/renderJob/collect/ComponentCollect.ts:16

___

### componentsEnablePickerList

▪ `Static` **componentsEnablePickerList**: `Map`\<[`View3D`](View3D.md), `Map`\<[`ColliderComponent`](ColliderComponent.md), `Function`\>\>

#### Defined in

gfx/renderJob/collect/ComponentCollect.ts:17

___

### graphicComponent

▪ `Static` **graphicComponent**: `Map`\<[`View3D`](View3D.md), `Map`\<[`IComponent`](../interfaces/IComponent.md), `Function`\>\>

#### Defined in

gfx/renderJob/collect/ComponentCollect.ts:21

___

### waitStartComponent

▪ `Static` **waitStartComponent**: `Map`\<[`Object3D`](Object3D.md), [`IComponent`](../interfaces/IComponent.md)[]\>

#### Defined in

gfx/renderJob/collect/ComponentCollect.ts:22

## Methods

### bindUpdate

▸ **bindUpdate**(`view`, `component`, `call`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `component` | [`IComponent`](../interfaces/IComponent.md) |
| `call` | `Function` |

#### Returns

`void`

#### Defined in

gfx/renderJob/collect/ComponentCollect.ts:46

___

### unBindUpdate

▸ **unBindUpdate**(`view`, `component`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `component` | [`IComponent`](../interfaces/IComponent.md) |

#### Returns

`void`

#### Defined in

gfx/renderJob/collect/ComponentCollect.ts:60

___

### bindLateUpdate

▸ **bindLateUpdate**(`view`, `component`, `call`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `component` | [`IComponent`](../interfaces/IComponent.md) |
| `call` | `Function` |

#### Returns

`void`

#### Defined in

gfx/renderJob/collect/ComponentCollect.ts:68

___

### unBindLateUpdate

▸ **unBindLateUpdate**(`view`, `component`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `component` | [`IComponent`](../interfaces/IComponent.md) |

#### Returns

`void`

#### Defined in

gfx/renderJob/collect/ComponentCollect.ts:82

___

### bindBeforeUpdate

▸ **bindBeforeUpdate**(`view`, `component`, `call`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `component` | [`IComponent`](../interfaces/IComponent.md) |
| `call` | `Function` |

#### Returns

`void`

#### Defined in

gfx/renderJob/collect/ComponentCollect.ts:90

___

### unBindBeforeUpdate

▸ **unBindBeforeUpdate**(`view`, `component`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `component` | [`IComponent`](../interfaces/IComponent.md) |

#### Returns

`void`

#### Defined in

gfx/renderJob/collect/ComponentCollect.ts:104

___

### bindCompute

▸ **bindCompute**(`view`, `component`, `call`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `component` | [`IComponent`](../interfaces/IComponent.md) |
| `call` | `Function` |

#### Returns

`void`

#### Defined in

gfx/renderJob/collect/ComponentCollect.ts:112

___

### unBindCompute

▸ **unBindCompute**(`view`, `component`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `component` | [`IComponent`](../interfaces/IComponent.md) |

#### Returns

`void`

#### Defined in

gfx/renderJob/collect/ComponentCollect.ts:126

___

### bindGraphic

▸ **bindGraphic**(`view`, `component`, `call`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `component` | [`IComponent`](../interfaces/IComponent.md) |
| `call` | `Function` |

#### Returns

`void`

#### Defined in

gfx/renderJob/collect/ComponentCollect.ts:134

___

### unBindGraphic

▸ **unBindGraphic**(`view`, `component`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `component` | [`IComponent`](../interfaces/IComponent.md) |

#### Returns

`void`

#### Defined in

gfx/renderJob/collect/ComponentCollect.ts:148

___

### appendWaitStart

▸ **appendWaitStart**(`component`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `component` | [`IComponent`](../interfaces/IComponent.md) |

#### Returns

`void`

#### Defined in

gfx/renderJob/collect/ComponentCollect.ts:156

___

### removeWaitStart

▸ **removeWaitStart**(`obj`, `component`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`Object3D`](Object3D.md) |
| `component` | [`IComponent`](../interfaces/IComponent.md) |

#### Returns

`void`

#### Defined in

gfx/renderJob/collect/ComponentCollect.ts:169

___

### bindEnablePick

▸ **bindEnablePick**(`view`, `component`, `call`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `component` | [`ColliderComponent`](ColliderComponent.md) |
| `call` | `Function` |

#### Returns

`void`

#### Defined in

gfx/renderJob/collect/ComponentCollect.ts:180

___

### unBindEnablePick

▸ **unBindEnablePick**(`view`, `component`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `component` | [`ColliderComponent`](ColliderComponent.md) |

#### Returns

`void`

#### Defined in

gfx/renderJob/collect/ComponentCollect.ts:194
