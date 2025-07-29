[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / Context3D

# Class: Context3D

## Hierarchy

- [`CEventDispatcher`](CEventDispatcher.md)

  ↳ **`Context3D`**

## Table of contents

### Constructors

- [constructor](Context3D.md#constructor)

### Properties

- [listeners](Context3D.md#listeners)
- [data](Context3D.md#data)
- [adapter](Context3D.md#adapter)
- [device](Context3D.md#device)
- [context](Context3D.md#context)
- [aspect](Context3D.md#aspect)
- [presentationSize](Context3D.md#presentationsize)
- [presentationFormat](Context3D.md#presentationformat)
- [canvas](Context3D.md#canvas)
- [windowWidth](Context3D.md#windowwidth)
- [windowHeight](Context3D.md#windowheight)
- [canvasConfig](Context3D.md#canvasconfig)

### Accessors

- [pixelRatio](Context3D.md#pixelratio)

### Methods

- [dispatchEvent](Context3D.md#dispatchevent)
- [destroy](Context3D.md#destroy)
- [addEventListener](Context3D.md#addeventlistener)
- [removeEventListener](Context3D.md#removeeventlistener)
- [removeEventListenerAt](Context3D.md#removeeventlistenerat)
- [removeAllEventListener](Context3D.md#removealleventlistener)
- [containEventListener](Context3D.md#containeventlistener)
- [hasEventListener](Context3D.md#haseventlistener)
- [init](Context3D.md#init)
- [updateSize](Context3D.md#updatesize)

## Constructors

### constructor

• **new Context3D**(): [`Context3D`](Context3D.md)

#### Returns

[`Context3D`](Context3D.md)

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

### adapter

• **adapter**: `GPUAdapter`

#### Defined in

gfx/graphics/webGpu/Context3D.ts:7

___

### device

• **device**: `GPUDevice`

#### Defined in

gfx/graphics/webGpu/Context3D.ts:8

___

### context

• **context**: `GPUCanvasContext`

#### Defined in

gfx/graphics/webGpu/Context3D.ts:9

___

### aspect

• **aspect**: `number`

#### Defined in

gfx/graphics/webGpu/Context3D.ts:10

___

### presentationSize

• **presentationSize**: `number`[]

#### Defined in

gfx/graphics/webGpu/Context3D.ts:11

___

### presentationFormat

• **presentationFormat**: `GPUTextureFormat`

#### Defined in

gfx/graphics/webGpu/Context3D.ts:12

___

### canvas

• **canvas**: `HTMLCanvasElement`

#### Defined in

gfx/graphics/webGpu/Context3D.ts:13

___

### windowWidth

• **windowWidth**: `number`

#### Defined in

gfx/graphics/webGpu/Context3D.ts:14

___

### windowHeight

• **windowHeight**: `number`

#### Defined in

gfx/graphics/webGpu/Context3D.ts:15

___

### canvasConfig

• **canvasConfig**: [`CanvasConfig`](../modules.md#canvasconfig)

#### Defined in

gfx/graphics/webGpu/Context3D.ts:16

## Accessors

### pixelRatio

• `get` **pixelRatio**(): `number`

#### Returns

`number`

#### Defined in

gfx/graphics/webGpu/Context3D.ts:20

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

### init

▸ **init**(`canvasConfig?`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvasConfig?` | [`CanvasConfig`](../modules.md#canvasconfig) |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

gfx/graphics/webGpu/Context3D.ts:24

___

### updateSize

▸ **updateSize**(): `void`

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/Context3D.ts:122
