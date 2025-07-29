[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / LoaderManager

# Class: LoaderManager

加载管理

## Hierarchy

- [`CEventDispatcher`](CEventDispatcher.md)

  ↳ **`LoaderManager`**

## Table of contents

### Constructors

- [constructor](LoaderManager.md#constructor)

### Properties

- [listeners](LoaderManager.md#listeners)
- [data](LoaderManager.md#data)

### Accessors

- [maxRetry](LoaderManager.md#maxretry)

### Methods

- [dispatchEvent](LoaderManager.md#dispatchevent)
- [destroy](LoaderManager.md#destroy)
- [addEventListener](LoaderManager.md#addeventlistener)
- [removeEventListener](LoaderManager.md#removeeventlistener)
- [removeEventListenerAt](LoaderManager.md#removeeventlistenerat)
- [removeAllEventListener](LoaderManager.md#removealleventlistener)
- [containEventListener](LoaderManager.md#containeventlistener)
- [hasEventListener](LoaderManager.md#haseventlistener)
- [loadAll](LoaderManager.md#loadall)
- [getInstance](LoaderManager.md#getinstance)
- [loadUrls](LoaderManager.md#loadurls)
- [load](LoaderManager.md#load)

## Constructors

### constructor

• **new LoaderManager**(): [`LoaderManager`](LoaderManager.md)

#### Returns

[`LoaderManager`](LoaderManager.md)

#### Overrides

[CEventDispatcher](CEventDispatcher.md).[constructor](CEventDispatcher.md#constructor)

#### Defined in

loader/LoaderManager.ts:40

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

## Accessors

### maxRetry

• `get` **maxRetry**(): `number`

#### Returns

`number`

#### Defined in

loader/LoaderManager.ts:79

• `set` **maxRetry**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

loader/LoaderManager.ts:83

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

### loadAll

▸ **loadAll**\<`T`\>(`urls`, `c`): `Promise`\<`T`[]\>

同时加载多个同类型资源

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ParserBase`](ParserBase.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `urls` | `string`[] | 资源URL列表 |
| `c` | () => `T` | 资源解析器类型 |

#### Returns

`Promise`\<`T`[]\>

返回解析器数组的Promise

#### Defined in

loader/LoaderManager.ts:19

___

### getInstance

▸ **getInstance**(): [`LoaderManager`](LoaderManager.md)

#### Returns

[`LoaderManager`](LoaderManager.md)

#### Defined in

loader/LoaderManager.ts:47

___

### loadUrls

▸ **loadUrls**(`urls`, `c`): `Promise`\<[`ParserBase`](ParserBase.md)[]\>

加载多个URL资源

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `urls` | `string`[] | 资源URL列表 |
| `c` | () => [`ParserBase`](ParserBase.md) | 资源解析器类型 |

#### Returns

`Promise`\<[`ParserBase`](ParserBase.md)[]\>

返回解析器数组的Promise

#### Defined in

loader/LoaderManager.ts:57

___

### load

▸ **load**\<`T`\>(`url`, `c`): `Promise`\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ParserBase`](ParserBase.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `c` | () => `T` |

#### Returns

`Promise`\<`T`\>

#### Defined in

loader/LoaderManager.ts:87
