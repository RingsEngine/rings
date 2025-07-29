[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / KeyEvent

# Class: KeyEvent

## Hierarchy

- [`CEvent`](CEvent.md)

  ↳ **`KeyEvent`**

## Table of contents

### Constructors

- [constructor](KeyEvent.md#constructor)

### Properties

- [target](KeyEvent.md#target)
- [currentTarget](KeyEvent.md#currenttarget)
- [type](KeyEvent.md#type)
- [data](KeyEvent.md#data)
- [param](KeyEvent.md#param)
- [time](KeyEvent.md#time)
- [delay](KeyEvent.md#delay)
- [mouseCode](KeyEvent.md#mousecode)
- [ctrlKey](KeyEvent.md#ctrlkey)
- [metaKey](KeyEvent.md#metakey)
- [altKey](KeyEvent.md#altkey)
- [shiftKey](KeyEvent.md#shiftkey)
- [targetTouches](KeyEvent.md#targettouches)
- [changedTouches](KeyEvent.md#changedtouches)
- [touches](KeyEvent.md#touches)
- [view](KeyEvent.md#view)
- [KEY\_DOWN](KeyEvent.md#key_down)
- [KEY\_UP](KeyEvent.md#key_up)
- [keyCode](KeyEvent.md#keycode)

### Accessors

- [isStopImmediatePropagation](KeyEvent.md#isstopimmediatepropagation)

### Methods

- [stopImmediatePropagation](KeyEvent.md#stopimmediatepropagation)
- [reset](KeyEvent.md#reset)

## Constructors

### constructor

• **new KeyEvent**(`eventType?`, `data?`): [`KeyEvent`](KeyEvent.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `eventType` | `string` | `null` |
| `data` | `any` | `null` |

#### Returns

[`KeyEvent`](KeyEvent.md)

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

### KEY\_DOWN

▪ `Static` **KEY\_DOWN**: `string` = `"onKeyDown"`

#### Defined in

event/eventConst/KeyEvent.ts:4

___

### KEY\_UP

▪ `Static` **KEY\_UP**: `string` = `"onKeyUp"`

#### Defined in

event/eventConst/KeyEvent.ts:5

___

### keyCode

• **keyCode**: `number` = `0`

#### Defined in

event/eventConst/KeyEvent.ts:6

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
