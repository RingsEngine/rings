[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / DDGIIrradianceGPUBufferReader

# Class: DDGIIrradianceGPUBufferReader

动态漫反射全局光照,探头渲染结果的GPU缓冲区读取器

## Hierarchy

- [`CEventDispatcher`](CEventDispatcher.md)

  ↳ **`DDGIIrradianceGPUBufferReader`**

## Table of contents

### Constructors

- [constructor](DDGIIrradianceGPUBufferReader.md#constructor)

### Properties

- [listeners](DDGIIrradianceGPUBufferReader.md#listeners)
- [data](DDGIIrradianceGPUBufferReader.md#data)
- [opDepthArray](DDGIIrradianceGPUBufferReader.md#opdeptharray)
- [opColorArray](DDGIIrradianceGPUBufferReader.md#opcolorarray)

### Methods

- [dispatchEvent](DDGIIrradianceGPUBufferReader.md#dispatchevent)
- [destroy](DDGIIrradianceGPUBufferReader.md#destroy)
- [addEventListener](DDGIIrradianceGPUBufferReader.md#addeventlistener)
- [removeEventListener](DDGIIrradianceGPUBufferReader.md#removeeventlistener)
- [removeEventListenerAt](DDGIIrradianceGPUBufferReader.md#removeeventlistenerat)
- [removeAllEventListener](DDGIIrradianceGPUBufferReader.md#removealleventlistener)
- [containEventListener](DDGIIrradianceGPUBufferReader.md#containeventlistener)
- [hasEventListener](DDGIIrradianceGPUBufferReader.md#haseventlistener)
- [initReader](DDGIIrradianceGPUBufferReader.md#initreader)

## Constructors

### constructor

• **new DDGIIrradianceGPUBufferReader**(): [`DDGIIrradianceGPUBufferReader`](DDGIIrradianceGPUBufferReader.md)

#### Returns

[`DDGIIrradianceGPUBufferReader`](DDGIIrradianceGPUBufferReader.md)

#### Inherited from

[CEventDispatcher](CEventDispatcher.md).[constructor](CEventDispatcher.md#constructor)

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

### opDepthArray

• **opDepthArray**: `Float32Array`\<`ArrayBufferLike`\>

#### Defined in

gfx/renderJob/passRenderer/ddgi/DDGIIrradianceGPUBufferReader.ts:27

___

### opColorArray

• **opColorArray**: `Float32Array`\<`ArrayBufferLike`\>

#### Defined in

gfx/renderJob/passRenderer/ddgi/DDGIIrradianceGPUBufferReader.ts:28

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

### initReader

▸ **initReader**(`probeRender`, `colorMap`, `depthMap`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `probeRender` | [`DDGIProbeRenderer`](DDGIProbeRenderer.md) |
| `colorMap` | [`RenderTexture`](RenderTexture.md) |
| `depthMap` | [`RenderTexture`](RenderTexture.md) |

#### Returns

`void`

#### Defined in

gfx/renderJob/passRenderer/ddgi/DDGIIrradianceGPUBufferReader.ts:30
