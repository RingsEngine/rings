[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / LoaderEvent

# Class: LoaderEvent

## Hierarchy

- [`CEvent`](CEvent.md)

  ↳ **`LoaderEvent`**

## Table of contents

### Constructors

- [constructor](LoaderEvent.md#constructor)

### Properties

- [target](LoaderEvent.md#target)
- [currentTarget](LoaderEvent.md#currenttarget)
- [type](LoaderEvent.md#type)
- [data](LoaderEvent.md#data)
- [param](LoaderEvent.md#param)
- [time](LoaderEvent.md#time)
- [delay](LoaderEvent.md#delay)
- [mouseCode](LoaderEvent.md#mousecode)
- [ctrlKey](LoaderEvent.md#ctrlkey)
- [metaKey](LoaderEvent.md#metakey)
- [altKey](LoaderEvent.md#altkey)
- [shiftKey](LoaderEvent.md#shiftkey)
- [targetTouches](LoaderEvent.md#targettouches)
- [changedTouches](LoaderEvent.md#changedtouches)
- [touches](LoaderEvent.md#touches)
- [view](LoaderEvent.md#view)
- [LOADER\_PROGRESS](LoaderEvent.md#loader_progress)
- [LOADER\_COMPLETE](LoaderEvent.md#loader_complete)

### Accessors

- [isStopImmediatePropagation](LoaderEvent.md#isstopimmediatepropagation)

### Methods

- [stopImmediatePropagation](LoaderEvent.md#stopimmediatepropagation)
- [reset](LoaderEvent.md#reset)

## Constructors

### constructor

• **new LoaderEvent**(`eventType?`, `data?`): [`LoaderEvent`](LoaderEvent.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `eventType` | `string` | `null` |
| `data` | `any` | `null` |

#### Returns

[`LoaderEvent`](LoaderEvent.md)

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

### LOADER\_PROGRESS

▪ `Static` **LOADER\_PROGRESS**: `string` = `"loaderProgress"`

#### Defined in

event/eventConst/LoaderEvent.ts:4

___

### LOADER\_COMPLETE

▪ `Static` **LOADER\_COMPLETE**: `string` = `"loaderComplete"`

#### Defined in

event/eventConst/LoaderEvent.ts:5

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
