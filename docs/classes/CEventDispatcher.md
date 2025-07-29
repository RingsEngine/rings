[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / CEventDispatcher

# Class: CEventDispatcher

## Hierarchy

- **`CEventDispatcher`**

  ↳ [`Entity`](Entity.md)

  ↳ [`Context3D`](Context3D.md)

  ↳ [`RendererBase`](RendererBase.md)

  ↳ [`DDGIIrradianceGPUBufferReader`](DDGIIrradianceGPUBufferReader.md)

  ↳ [`InputSystem`](InputSystem.md)

  ↳ [`PickFire`](PickFire.md)

  ↳ [`LoaderManager`](LoaderManager.md)

## Table of contents

### Constructors

- [constructor](CEventDispatcher.md#constructor)

### Properties

- [listeners](CEventDispatcher.md#listeners)
- [data](CEventDispatcher.md#data)

### Methods

- [dispatchEvent](CEventDispatcher.md#dispatchevent)
- [destroy](CEventDispatcher.md#destroy)
- [addEventListener](CEventDispatcher.md#addeventlistener)
- [removeEventListener](CEventDispatcher.md#removeeventlistener)
- [removeEventListenerAt](CEventDispatcher.md#removeeventlistenerat)
- [removeAllEventListener](CEventDispatcher.md#removealleventlistener)
- [containEventListener](CEventDispatcher.md#containeventlistener)
- [hasEventListener](CEventDispatcher.md#haseventlistener)

## Constructors

### constructor

• **new CEventDispatcher**(): [`CEventDispatcher`](CEventDispatcher.md)

#### Returns

[`CEventDispatcher`](CEventDispatcher.md)

## Properties

### listeners

• `Protected` **listeners**: `any` = `{}`

#### Defined in

event/CEventDispatcher.ts:5

___

### data

• **data**: `any`

#### Defined in

event/CEventDispatcher.ts:6

## Methods

### dispatchEvent

▸ **dispatchEvent**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`CEvent`](CEvent.md) |

#### Returns

`void`

#### Defined in

event/CEventDispatcher.ts:7

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

event/CEventDispatcher.ts:28

___

### addEventListener

▸ **addEventListener**(`type`, `callback`, `thisObject`, `param?`, `priority?`): `number`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `type` | `string` \| `number` | `undefined` |
| `callback` | `Function` | `undefined` |
| `thisObject` | `any` | `undefined` |
| `param` | `any` | `null` |
| `priority` | `number` | `0` |

#### Returns

`number`

#### Defined in

event/CEventDispatcher.ts:40

___

### removeEventListener

▸ **removeEventListener**(`type`, `callback`, `thisObject`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `callback` | `Function` |
| `thisObject` | `any` |

#### Returns

`void`

#### Defined in

event/CEventDispatcher.ts:82

___

### removeEventListenerAt

▸ **removeEventListenerAt**(`id`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`boolean`

#### Defined in

event/CEventDispatcher.ts:107

___

### removeAllEventListener

▸ **removeAllEventListener**(`eventType?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `eventType` | `string` \| `number` | `null` |

#### Returns

`void`

#### Defined in

event/CEventDispatcher.ts:122

___

### containEventListener

▸ **containEventListener**(`type`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

`boolean`

#### Defined in

event/CEventDispatcher.ts:150

___

### hasEventListener

▸ **hasEventListener**(`type`, `callback?`, `thisObject?`): `boolean`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `type` | `string` \| `number` | `undefined` |
| `callback` | `Function` | `null` |
| `thisObject` | `any` | `null` |

#### Returns

`boolean`

#### Defined in

event/CEventDispatcher.ts:155
