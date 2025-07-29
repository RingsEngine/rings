[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / CEvent

# Class: CEvent

## Hierarchy

- **`CEvent`**

  ↳ [`OAnimationEvent`](OAnimationEvent.md)

  ↳ [`PropertyAnimationEvent`](PropertyAnimationEvent.md)

  ↳ [`CResizeEvent`](CResizeEvent.md)

  ↳ [`KeyEvent`](KeyEvent.md)

  ↳ [`LoaderEvent`](LoaderEvent.md)

  ↳ [`Object3DEvent`](Object3DEvent.md)

  ↳ [`PointerEvent3D`](PointerEvent3D.md)

  ↳ [`PickGUIEvent3D`](PickGUIEvent3D.md)

  ↳ [`UIEvent`](UIEvent.md)

## Table of contents

### Constructors

- [constructor](CEvent.md#constructor)

### Properties

- [target](CEvent.md#target)
- [currentTarget](CEvent.md#currenttarget)
- [type](CEvent.md#type)
- [data](CEvent.md#data)
- [param](CEvent.md#param)
- [time](CEvent.md#time)
- [delay](CEvent.md#delay)
- [mouseCode](CEvent.md#mousecode)
- [ctrlKey](CEvent.md#ctrlkey)
- [metaKey](CEvent.md#metakey)
- [altKey](CEvent.md#altkey)
- [shiftKey](CEvent.md#shiftkey)
- [targetTouches](CEvent.md#targettouches)
- [changedTouches](CEvent.md#changedtouches)
- [touches](CEvent.md#touches)
- [view](CEvent.md#view)

### Accessors

- [isStopImmediatePropagation](CEvent.md#isstopimmediatepropagation)

### Methods

- [stopImmediatePropagation](CEvent.md#stopimmediatepropagation)
- [reset](CEvent.md#reset)

## Constructors

### constructor

• **new CEvent**(`eventType?`, `data?`): [`CEvent`](CEvent.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `eventType` | `string` | `null` |
| `data` | `any` | `null` |

#### Returns

[`CEvent`](CEvent.md)

#### Defined in

event/CEvent.ts:24

## Properties

### target

• **target**: [`Object3D`](Object3D.md)

#### Defined in

event/CEvent.ts:7

___

### currentTarget

• **currentTarget**: [`CEventListener`](CEventListener.md)

#### Defined in

event/CEvent.ts:8

___

### type

• **type**: `string`

#### Defined in

event/CEvent.ts:9

___

### data

• `Optional` **data**: `any`

#### Defined in

event/CEvent.ts:10

___

### param

• **param**: `any`

#### Defined in

event/CEvent.ts:11

___

### time

• **time**: `number` = `0`

#### Defined in

event/CEvent.ts:12

___

### delay

• **delay**: `number` = `0`

#### Defined in

event/CEvent.ts:13

___

### mouseCode

• **mouseCode**: `number` = `0`

#### Defined in

event/CEvent.ts:14

___

### ctrlKey

• **ctrlKey**: `boolean`

#### Defined in

event/CEvent.ts:15

___

### metaKey

• **metaKey**: `boolean`

#### Defined in

event/CEvent.ts:16

___

### altKey

• **altKey**: `boolean`

#### Defined in

event/CEvent.ts:17

___

### shiftKey

• **shiftKey**: `boolean`

#### Defined in

event/CEvent.ts:18

___

### targetTouches

• **targetTouches**: [`TouchData`](TouchData.md)[]

#### Defined in

event/CEvent.ts:19

___

### changedTouches

• **changedTouches**: [`TouchData`](TouchData.md)[]

#### Defined in

event/CEvent.ts:20

___

### touches

• **touches**: [`TouchData`](TouchData.md)[]

#### Defined in

event/CEvent.ts:21

___

### view

• **view**: [`View3D`](View3D.md)

#### Defined in

event/CEvent.ts:23

## Accessors

### isStopImmediatePropagation

• `get` **isStopImmediatePropagation**(): `boolean`

#### Returns

`boolean`

#### Defined in

event/CEvent.ts:34

## Methods

### stopImmediatePropagation

▸ **stopImmediatePropagation**(): `void`

#### Returns

`void`

#### Defined in

event/CEvent.ts:28

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

event/CEvent.ts:31
