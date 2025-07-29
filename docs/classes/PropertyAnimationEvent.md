[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / PropertyAnimationEvent

# Class: PropertyAnimationEvent

## Hierarchy

- [`CEvent`](CEvent.md)

  ↳ **`PropertyAnimationEvent`**

## Table of contents

### Constructors

- [constructor](PropertyAnimationEvent.md#constructor)

### Properties

- [SEEK](PropertyAnimationEvent.md#seek)
- [COMPLETE](PropertyAnimationEvent.md#complete)
- [animation](PropertyAnimationEvent.md#animation)
- [frame](PropertyAnimationEvent.md#frame)
- [target](PropertyAnimationEvent.md#target)
- [currentTarget](PropertyAnimationEvent.md#currenttarget)
- [type](PropertyAnimationEvent.md#type)
- [data](PropertyAnimationEvent.md#data)
- [param](PropertyAnimationEvent.md#param)
- [time](PropertyAnimationEvent.md#time)
- [delay](PropertyAnimationEvent.md#delay)
- [mouseCode](PropertyAnimationEvent.md#mousecode)
- [ctrlKey](PropertyAnimationEvent.md#ctrlkey)
- [metaKey](PropertyAnimationEvent.md#metakey)
- [altKey](PropertyAnimationEvent.md#altkey)
- [shiftKey](PropertyAnimationEvent.md#shiftkey)
- [targetTouches](PropertyAnimationEvent.md#targettouches)
- [changedTouches](PropertyAnimationEvent.md#changedtouches)
- [touches](PropertyAnimationEvent.md#touches)
- [view](PropertyAnimationEvent.md#view)

### Accessors

- [isStopImmediatePropagation](PropertyAnimationEvent.md#isstopimmediatepropagation)

### Methods

- [stopImmediatePropagation](PropertyAnimationEvent.md#stopimmediatepropagation)
- [reset](PropertyAnimationEvent.md#reset)

## Constructors

### constructor

• **new PropertyAnimationEvent**(`animation`, `name`): [`PropertyAnimationEvent`](PropertyAnimationEvent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `animation` | [`PropertyAnimation`](PropertyAnimation.md) |
| `name` | `string` |

#### Returns

[`PropertyAnimationEvent`](PropertyAnimationEvent.md)

#### Overrides

[CEvent](CEvent.md).[constructor](CEvent.md#constructor)

#### Defined in

components/anim/curveAnim/PropertyAnimationEvent.ts:17

## Properties

### SEEK

▪ `Static` **SEEK**: `string` = `"SEEK"`

#### Defined in

components/anim/curveAnim/PropertyAnimationEvent.ts:11

___

### COMPLETE

▪ `Static` **COMPLETE**: `string` = `"COMPLETE"`

#### Defined in

components/anim/curveAnim/PropertyAnimationEvent.ts:12

___

### animation

• **animation**: [`PropertyAnimation`](PropertyAnimation.md)

#### Defined in

components/anim/curveAnim/PropertyAnimationEvent.ts:14

___

### frame

• **frame**: [`AnimatorEventKeyframe`](AnimatorEventKeyframe.md)

#### Defined in

components/anim/curveAnim/PropertyAnimationEvent.ts:15

___

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
