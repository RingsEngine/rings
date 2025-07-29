[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / CResizeEvent

# Class: CResizeEvent

## Hierarchy

- [`CEvent`](CEvent.md)

  ↳ **`CResizeEvent`**

## Table of contents

### Constructors

- [constructor](CResizeEvent.md#constructor)

### Properties

- [target](CResizeEvent.md#target)
- [currentTarget](CResizeEvent.md#currenttarget)
- [type](CResizeEvent.md#type)
- [data](CResizeEvent.md#data)
- [param](CResizeEvent.md#param)
- [time](CResizeEvent.md#time)
- [delay](CResizeEvent.md#delay)
- [mouseCode](CResizeEvent.md#mousecode)
- [ctrlKey](CResizeEvent.md#ctrlkey)
- [metaKey](CResizeEvent.md#metakey)
- [altKey](CResizeEvent.md#altkey)
- [shiftKey](CResizeEvent.md#shiftkey)
- [targetTouches](CResizeEvent.md#targettouches)
- [changedTouches](CResizeEvent.md#changedtouches)
- [touches](CResizeEvent.md#touches)
- [view](CResizeEvent.md#view)
- [RESIZE](CResizeEvent.md#resize)

### Accessors

- [isStopImmediatePropagation](CResizeEvent.md#isstopimmediatepropagation)

### Methods

- [stopImmediatePropagation](CResizeEvent.md#stopimmediatepropagation)
- [reset](CResizeEvent.md#reset)

## Constructors

### constructor

• **new CResizeEvent**(`eventType?`, `data?`): [`CResizeEvent`](CResizeEvent.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `eventType` | `string` | `null` |
| `data` | `any` | `null` |

#### Returns

[`CResizeEvent`](CResizeEvent.md)

#### Inherited from

[CEvent](CEvent.md).[constructor](CEvent.md#constructor)

#### Defined in

event/CEvent.ts:24

## Properties

### target

• **target**: [`Object3D`](Object3D.md)

#### Inherited from

[CEvent](CEvent.md).[target](CEvent.md#target)

#### Defined in

event/CEvent.ts:7

___

### currentTarget

• **currentTarget**: [`CEventListener`](CEventListener.md)

#### Inherited from

[CEvent](CEvent.md).[currentTarget](CEvent.md#currenttarget)

#### Defined in

event/CEvent.ts:8

___

### type

• **type**: `string`

#### Inherited from

[CEvent](CEvent.md).[type](CEvent.md#type)

#### Defined in

event/CEvent.ts:9

___

### data

• `Optional` **data**: `any`

#### Inherited from

[CEvent](CEvent.md).[data](CEvent.md#data)

#### Defined in

event/CEvent.ts:10

___

### param

• **param**: `any`

#### Inherited from

[CEvent](CEvent.md).[param](CEvent.md#param)

#### Defined in

event/CEvent.ts:11

___

### time

• **time**: `number` = `0`

#### Inherited from

[CEvent](CEvent.md).[time](CEvent.md#time)

#### Defined in

event/CEvent.ts:12

___

### delay

• **delay**: `number` = `0`

#### Inherited from

[CEvent](CEvent.md).[delay](CEvent.md#delay)

#### Defined in

event/CEvent.ts:13

___

### mouseCode

• **mouseCode**: `number` = `0`

#### Inherited from

[CEvent](CEvent.md).[mouseCode](CEvent.md#mousecode)

#### Defined in

event/CEvent.ts:14

___

### ctrlKey

• **ctrlKey**: `boolean`

#### Inherited from

[CEvent](CEvent.md).[ctrlKey](CEvent.md#ctrlkey)

#### Defined in

event/CEvent.ts:15

___

### metaKey

• **metaKey**: `boolean`

#### Inherited from

[CEvent](CEvent.md).[metaKey](CEvent.md#metakey)

#### Defined in

event/CEvent.ts:16

___

### altKey

• **altKey**: `boolean`

#### Inherited from

[CEvent](CEvent.md).[altKey](CEvent.md#altkey)

#### Defined in

event/CEvent.ts:17

___

### shiftKey

• **shiftKey**: `boolean`

#### Inherited from

[CEvent](CEvent.md).[shiftKey](CEvent.md#shiftkey)

#### Defined in

event/CEvent.ts:18

___

### targetTouches

• **targetTouches**: [`TouchData`](TouchData.md)[]

#### Inherited from

[CEvent](CEvent.md).[targetTouches](CEvent.md#targettouches)

#### Defined in

event/CEvent.ts:19

___

### changedTouches

• **changedTouches**: [`TouchData`](TouchData.md)[]

#### Inherited from

[CEvent](CEvent.md).[changedTouches](CEvent.md#changedtouches)

#### Defined in

event/CEvent.ts:20

___

### touches

• **touches**: [`TouchData`](TouchData.md)[]

#### Inherited from

[CEvent](CEvent.md).[touches](CEvent.md#touches)

#### Defined in

event/CEvent.ts:21

___

### view

• **view**: [`View3D`](View3D.md)

#### Inherited from

[CEvent](CEvent.md).[view](CEvent.md#view)

#### Defined in

event/CEvent.ts:23

___

### RESIZE

▪ `Static` **RESIZE**: `string` = `"resize"`

#### Defined in

event/CResizeEvent.ts:4

## Accessors

### isStopImmediatePropagation

• `get` **isStopImmediatePropagation**(): `boolean`

#### Returns

`boolean`

#### Inherited from

CEvent.isStopImmediatePropagation

#### Defined in

event/CEvent.ts:34

## Methods

### stopImmediatePropagation

▸ **stopImmediatePropagation**(): `void`

#### Returns

`void`

#### Inherited from

[CEvent](CEvent.md).[stopImmediatePropagation](CEvent.md#stopimmediatepropagation)

#### Defined in

event/CEvent.ts:28

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Inherited from

[CEvent](CEvent.md).[reset](CEvent.md#reset)

#### Defined in

event/CEvent.ts:31
