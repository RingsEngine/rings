[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / PickFire

# Class: PickFire

## Hierarchy

- [`CEventDispatcher`](CEventDispatcher.md)

  ↳ **`PickFire`**

## Table of contents

### Constructors

- [constructor](PickFire.md#constructor)

### Properties

- [listeners](PickFire.md#listeners)
- [data](PickFire.md#data)
- [ray](PickFire.md#ray)
- [isTouching](PickFire.md#istouching)
- [mouseEnableMap](PickFire.md#mouseenablemap)

### Methods

- [dispatchEvent](PickFire.md#dispatchevent)
- [destroy](PickFire.md#destroy)
- [addEventListener](PickFire.md#addeventlistener)
- [removeEventListener](PickFire.md#removeeventlistener)
- [removeEventListenerAt](PickFire.md#removeeventlistenerat)
- [removeAllEventListener](PickFire.md#removealleventlistener)
- [containEventListener](PickFire.md#containeventlistener)
- [hasEventListener](PickFire.md#haseventlistener)
- [start](PickFire.md#start)
- [stop](PickFire.md#stop)

## Constructors

### constructor

• **new PickFire**(`view`): [`PickFire`](PickFire.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |

#### Returns

[`PickFire`](PickFire.md)

#### Overrides

[CEventDispatcher](CEventDispatcher.md).[constructor](CEventDispatcher.md#constructor)

#### Defined in

io/PickFire.ts:28

## Properties

### listeners

• `Protected` **listeners**: `any` = `{}`

#### Inherited from

[CEventDispatcher](CEventDispatcher.md).[listeners](CEventDispatcher.md#listeners)

#### Defined in

event/CEventDispatcher.ts:5

___

### data

• **data**: `any`

#### Inherited from

[CEventDispatcher](CEventDispatcher.md).[data](CEventDispatcher.md#data)

#### Defined in

event/CEventDispatcher.ts:6

___

### ray

• **ray**: [`Ray`](Ray.md)

#### Defined in

io/PickFire.ts:15

___

### isTouching

• **isTouching**: `boolean` = `false`

#### Defined in

io/PickFire.ts:16

___

### mouseEnableMap

• **mouseEnableMap**: `Map`\<`number`, [`ColliderComponent`](ColliderComponent.md)\>

#### Defined in

io/PickFire.ts:26

## Methods

### dispatchEvent

▸ **dispatchEvent**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`CEvent`](CEvent.md) |

#### Returns

`void`

#### Inherited from

[CEventDispatcher](CEventDispatcher.md).[dispatchEvent](CEventDispatcher.md#dispatchevent)

#### Defined in

event/CEventDispatcher.ts:7

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[CEventDispatcher](CEventDispatcher.md).[destroy](CEventDispatcher.md#destroy)

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

#### Inherited from

[CEventDispatcher](CEventDispatcher.md).[addEventListener](CEventDispatcher.md#addeventlistener)

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

#### Inherited from

[CEventDispatcher](CEventDispatcher.md).[removeEventListener](CEventDispatcher.md#removeeventlistener)

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

#### Inherited from

[CEventDispatcher](CEventDispatcher.md).[removeEventListenerAt](CEventDispatcher.md#removeeventlistenerat)

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

#### Inherited from

[CEventDispatcher](CEventDispatcher.md).[removeAllEventListener](CEventDispatcher.md#removealleventlistener)

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

#### Inherited from

[CEventDispatcher](CEventDispatcher.md).[containEventListener](CEventDispatcher.md#containeventlistener)

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

#### Inherited from

[CEventDispatcher](CEventDispatcher.md).[hasEventListener](CEventDispatcher.md#haseventlistener)

#### Defined in

event/CEventDispatcher.ts:155

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Defined in

io/PickFire.ts:43

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Defined in

io/PickFire.ts:77
