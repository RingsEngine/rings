[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / InputSystem

# Class: InputSystem

## Hierarchy

- [`CEventDispatcher`](CEventDispatcher.md)

  ↳ **`InputSystem`**

## Table of contents

### Constructors

- [constructor](InputSystem.md#constructor)

### Properties

- [listeners](InputSystem.md#listeners)
- [data](InputSystem.md#data)
- [canvasX](InputSystem.md#canvasx)
- [canvasY](InputSystem.md#canvasy)
- [isMouseDown](InputSystem.md#ismousedown)
- [isRightMouseDown](InputSystem.md#isrightmousedown)
- [canvas](InputSystem.md#canvas)
- [mouseX](InputSystem.md#mousex)
- [mouseY](InputSystem.md#mousey)
- [wheelDelta](InputSystem.md#wheeldelta)
- [mouseOffsetX](InputSystem.md#mouseoffsetx)
- [mouseOffsetY](InputSystem.md#mouseoffsety)
- [mouseLastX](InputSystem.md#mouselastx)
- [mouseLastY](InputSystem.md#mouselasty)
- [\_keyEvent3d](InputSystem.md#_keyevent3d)
- [\_pointerEvent3D](InputSystem.md#_pointerevent3d)
- [\_windowsEvent3d](InputSystem.md#_windowsevent3d)
- [mouseLock](InputSystem.md#mouselock)

### Methods

- [dispatchEvent](InputSystem.md#dispatchevent)
- [destroy](InputSystem.md#destroy)
- [addEventListener](InputSystem.md#addeventlistener)
- [removeEventListener](InputSystem.md#removeeventlistener)
- [removeEventListenerAt](InputSystem.md#removeeventlistenerat)
- [removeAllEventListener](InputSystem.md#removealleventlistener)
- [containEventListener](InputSystem.md#containeventlistener)
- [hasEventListener](InputSystem.md#haseventlistener)
- [initCanvas](InputSystem.md#initcanvas)
- [useMouseLock](InputSystem.md#usemouselock)
- [releaseMouseLock](InputSystem.md#releasemouselock)
- [onMouseLockMove](InputSystem.md#onmouselockmove)
- [GetSlideDirection](InputSystem.md#getslidedirection)

## Constructors

### constructor

• **new InputSystem**(): [`InputSystem`](InputSystem.md)

#### Returns

[`InputSystem`](InputSystem.md)

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

### canvasX

• **canvasX**: `number` = `0`

#### Defined in

io/InputSystem.ts:9

___

### canvasY

• **canvasY**: `number` = `0`

#### Defined in

io/InputSystem.ts:10

___

### isMouseDown

• **isMouseDown**: `boolean` = `false`

#### Defined in

io/InputSystem.ts:11

___

### isRightMouseDown

• **isRightMouseDown**: `boolean` = `false`

#### Defined in

io/InputSystem.ts:12

___

### canvas

• **canvas**: `HTMLCanvasElement`

#### Defined in

io/InputSystem.ts:13

___

### mouseX

• **mouseX**: `number` = `0`

#### Defined in

io/InputSystem.ts:14

___

### mouseY

• **mouseY**: `number` = `0`

#### Defined in

io/InputSystem.ts:15

___

### wheelDelta

• **wheelDelta**: `number` = `0`

#### Defined in

io/InputSystem.ts:16

___

### mouseOffsetX

• **mouseOffsetX**: `number` = `0`

#### Defined in

io/InputSystem.ts:17

___

### mouseOffsetY

• **mouseOffsetY**: `number` = `0`

#### Defined in

io/InputSystem.ts:18

___

### mouseLastX

• **mouseLastX**: `number` = `0`

#### Defined in

io/InputSystem.ts:19

___

### mouseLastY

• **mouseLastY**: `number` = `0`

#### Defined in

io/InputSystem.ts:20

___

### \_keyEvent3d

• `Protected` **\_keyEvent3d**: [`KeyEvent`](KeyEvent.md)

#### Defined in

io/InputSystem.ts:26

___

### \_pointerEvent3D

• `Protected` **\_pointerEvent3D**: [`PointerEvent3D`](PointerEvent3D.md)

#### Defined in

io/InputSystem.ts:27

___

### \_windowsEvent3d

• `Protected` **\_windowsEvent3d**: [`CEvent`](CEvent.md)

#### Defined in

io/InputSystem.ts:28

___

### mouseLock

• **mouseLock**: `boolean` = `false`

#### Defined in

io/InputSystem.ts:29

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

### initCanvas

▸ **initCanvas**(`canvas`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | `HTMLCanvasElement` |

#### Returns

`void`

#### Defined in

io/InputSystem.ts:31

___

### useMouseLock

▸ **useMouseLock**(): `void`

#### Returns

`void`

#### Defined in

io/InputSystem.ts:115

___

### releaseMouseLock

▸ **releaseMouseLock**(): `void`

#### Returns

`void`

#### Defined in

io/InputSystem.ts:126

___

### onMouseLockMove

▸ **onMouseLockMove**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `MouseEvent` |

#### Returns

`void`

#### Defined in

io/InputSystem.ts:136

___

### GetSlideDirection

▸ **GetSlideDirection**(`startX`, `startY`, `endX`, `endY`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `startX` | `number` |
| `startY` | `number` |
| `endX` | `number` |
| `endY` | `number` |

#### Returns

`number`

#### Defined in

io/InputSystem.ts:430
