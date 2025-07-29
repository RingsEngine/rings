[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / Object3DEvent

# Class: Object3DEvent

## Hierarchy

- [`CEvent`](CEvent.md)

  ↳ **`Object3DEvent`**

## Table of contents

### Constructors

- [constructor](Object3DEvent.md#constructor)

### Properties

- [target](Object3DEvent.md#target)
- [currentTarget](Object3DEvent.md#currenttarget)
- [type](Object3DEvent.md#type)
- [data](Object3DEvent.md#data)
- [param](Object3DEvent.md#param)
- [time](Object3DEvent.md#time)
- [delay](Object3DEvent.md#delay)
- [mouseCode](Object3DEvent.md#mousecode)
- [ctrlKey](Object3DEvent.md#ctrlkey)
- [metaKey](Object3DEvent.md#metakey)
- [altKey](Object3DEvent.md#altkey)
- [shiftKey](Object3DEvent.md#shiftkey)
- [targetTouches](Object3DEvent.md#targettouches)
- [changedTouches](Object3DEvent.md#changedtouches)
- [touches](Object3DEvent.md#touches)
- [view](Object3DEvent.md#view)
- [ADDED](Object3DEvent.md#added)
- [REMOVED](Object3DEvent.md#removed)
- [CHILD\_ADD\_EVENT](Object3DEvent.md#child_add_event)
- [CHILD\_REMOVED](Object3DEvent.md#child_removed)

### Accessors

- [isStopImmediatePropagation](Object3DEvent.md#isstopimmediatepropagation)

### Methods

- [stopImmediatePropagation](Object3DEvent.md#stopimmediatepropagation)
- [reset](Object3DEvent.md#reset)

## Constructors

### constructor

• **new Object3DEvent**(`eventType?`, `data?`): [`Object3DEvent`](Object3DEvent.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `eventType` | `string` | `null` |
| `data` | `any` | `null` |

#### Returns

[`Object3DEvent`](Object3DEvent.md)

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

### ADDED

▪ `Static` **ADDED**: `string` = `"added"`

#### Defined in

event/eventConst/Object3DEvent.ts:4

___

### REMOVED

▪ `Static` **REMOVED**: `string` = `"removed"`

#### Defined in

event/eventConst/Object3DEvent.ts:5

___

### CHILD\_ADD\_EVENT

▪ `Static` **CHILD\_ADD\_EVENT**: `string` = `"childAddEvent"`

#### Defined in

event/eventConst/Object3DEvent.ts:6

___

### CHILD\_REMOVED

▪ `Static` **CHILD\_REMOVED**: `string` = `"childRemoved"`

#### Defined in

event/eventConst/Object3DEvent.ts:7

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
