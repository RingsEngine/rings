[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / PointerEvent3D

# Class: PointerEvent3D

## Hierarchy

- [`CEvent`](CEvent.md)

  ↳ **`PointerEvent3D`**

## Table of contents

### Constructors

- [constructor](PointerEvent3D.md#constructor)

### Properties

- [target](PointerEvent3D.md#target)
- [currentTarget](PointerEvent3D.md#currenttarget)
- [type](PointerEvent3D.md#type)
- [param](PointerEvent3D.md#param)
- [time](PointerEvent3D.md#time)
- [delay](PointerEvent3D.md#delay)
- [mouseCode](PointerEvent3D.md#mousecode)
- [ctrlKey](PointerEvent3D.md#ctrlkey)
- [metaKey](PointerEvent3D.md#metakey)
- [altKey](PointerEvent3D.md#altkey)
- [shiftKey](PointerEvent3D.md#shiftkey)
- [targetTouches](PointerEvent3D.md#targettouches)
- [changedTouches](PointerEvent3D.md#changedtouches)
- [touches](PointerEvent3D.md#touches)
- [view](PointerEvent3D.md#view)
- [PICK\_OVER](PointerEvent3D.md#pick_over)
- [PICK\_CLICK](PointerEvent3D.md#pick_click)
- [PICK\_OUT](PointerEvent3D.md#pick_out)
- [PICK\_MOVE](PointerEvent3D.md#pick_move)
- [PICK\_UP](PointerEvent3D.md#pick_up)
- [PICK\_DOWN](PointerEvent3D.md#pick_down)
- [POINTER\_RIGHT\_CLICK](PointerEvent3D.md#pointer_right_click)
- [POINTER\_MID\_UP](PointerEvent3D.md#pointer_mid_up)
- [POINTER\_MID\_DOWN](PointerEvent3D.md#pointer_mid_down)
- [POINTER\_CLICK](PointerEvent3D.md#pointer_click)
- [POINTER\_MOVE](PointerEvent3D.md#pointer_move)
- [POINTER\_DOWN](PointerEvent3D.md#pointer_down)
- [POINTER\_UP](PointerEvent3D.md#pointer_up)
- [POINTER\_OUT](PointerEvent3D.md#pointer_out)
- [POINTER\_OVER](PointerEvent3D.md#pointer_over)
- [POINTER\_WHEEL](PointerEvent3D.md#pointer_wheel)
- [pointerId](PointerEvent3D.md#pointerid)
- [pointerType](PointerEvent3D.md#pointertype)
- [isPrimary](PointerEvent3D.md#isprimary)
- [pressure](PointerEvent3D.md#pressure)
- [mouseX](PointerEvent3D.md#mousex)
- [mouseY](PointerEvent3D.md#mousey)
- [movementX](PointerEvent3D.md#movementx)
- [movementY](PointerEvent3D.md#movementy)
- [deltaX](PointerEvent3D.md#deltax)
- [deltaY](PointerEvent3D.md#deltay)
- [data](PointerEvent3D.md#data)
- [deltaZ](PointerEvent3D.md#deltaz)

### Accessors

- [isStopImmediatePropagation](PointerEvent3D.md#isstopimmediatepropagation)

### Methods

- [stopImmediatePropagation](PointerEvent3D.md#stopimmediatepropagation)
- [reset](PointerEvent3D.md#reset)

## Constructors

### constructor

• **new PointerEvent3D**(`eventType?`, `data?`): [`PointerEvent3D`](PointerEvent3D.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `eventType` | `string` | `null` |
| `data` | `any` | `null` |

#### Returns

[`PointerEvent3D`](PointerEvent3D.md)

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

### PICK\_OVER

▪ `Static` **PICK\_OVER**: `string` = `"onPickOver"`

#### Defined in

event/eventConst/PointerEvent3D.ts:15

___

### PICK\_CLICK

▪ `Static` **PICK\_CLICK**: `string` = `"onPickClick"`

#### Defined in

event/eventConst/PointerEvent3D.ts:16

___

### PICK\_OUT

▪ `Static` **PICK\_OUT**: `string` = `"onPickOut"`

#### Defined in

event/eventConst/PointerEvent3D.ts:17

___

### PICK\_MOVE

▪ `Static` **PICK\_MOVE**: `string` = `"onPickMove"`

#### Defined in

event/eventConst/PointerEvent3D.ts:18

___

### PICK\_UP

▪ `Static` **PICK\_UP**: `string` = `"onPickUp"`

#### Defined in

event/eventConst/PointerEvent3D.ts:19

___

### PICK\_DOWN

▪ `Static` **PICK\_DOWN**: `string` = `"onPickDown"`

#### Defined in

event/eventConst/PointerEvent3D.ts:20

___

### POINTER\_RIGHT\_CLICK

▪ `Static` **POINTER\_RIGHT\_CLICK**: `string` = `"onPointerRightClick"`

#### Defined in

event/eventConst/PointerEvent3D.ts:21

___

### POINTER\_MID\_UP

▪ `Static` **POINTER\_MID\_UP**: `string` = `"onPointerMidUp"`

#### Defined in

event/eventConst/PointerEvent3D.ts:22

___

### POINTER\_MID\_DOWN

▪ `Static` **POINTER\_MID\_DOWN**: `string` = `"onPointerMidDown"`

#### Defined in

event/eventConst/PointerEvent3D.ts:23

___

### POINTER\_CLICK

▪ `Static` **POINTER\_CLICK**: `string` = `"onPointerClick"`

#### Defined in

event/eventConst/PointerEvent3D.ts:24

___

### POINTER\_MOVE

▪ `Static` **POINTER\_MOVE**: `string` = `"onPointerMove"`

#### Defined in

event/eventConst/PointerEvent3D.ts:25

___

### POINTER\_DOWN

▪ `Static` **POINTER\_DOWN**: `string` = `"onPointerDown"`

#### Defined in

event/eventConst/PointerEvent3D.ts:26

___

### POINTER\_UP

▪ `Static` **POINTER\_UP**: `string` = `"onPointerUp"`

#### Defined in

event/eventConst/PointerEvent3D.ts:27

___

### POINTER\_OUT

▪ `Static` **POINTER\_OUT**: `string` = `"onPointerOut"`

#### Defined in

event/eventConst/PointerEvent3D.ts:28

___

### POINTER\_OVER

▪ `Static` **POINTER\_OVER**: `string` = `"onPointerOver"`

#### Defined in

event/eventConst/PointerEvent3D.ts:29

___

### POINTER\_WHEEL

▪ `Static` **POINTER\_WHEEL**: `string` = `"onPointerWheel"`

#### Defined in

event/eventConst/PointerEvent3D.ts:30

___

### pointerId

• **pointerId**: `number`

#### Defined in

event/eventConst/PointerEvent3D.ts:31

___

### pointerType

• **pointerType**: `string` = `"onPointer"`

#### Defined in

event/eventConst/PointerEvent3D.ts:32

___

### isPrimary

• **isPrimary**: `boolean`

#### Defined in

event/eventConst/PointerEvent3D.ts:33

___

### pressure

• **pressure**: `number`

#### Defined in

event/eventConst/PointerEvent3D.ts:34

___

### mouseX

• **mouseX**: `number`

#### Defined in

event/eventConst/PointerEvent3D.ts:35

___

### mouseY

• **mouseY**: `number`

#### Defined in

event/eventConst/PointerEvent3D.ts:36

___

### movementX

• **movementX**: `number`

#### Defined in

event/eventConst/PointerEvent3D.ts:37

___

### movementY

• **movementY**: `number`

#### Defined in

event/eventConst/PointerEvent3D.ts:38

___

### deltaX

• **deltaX**: `number`

#### Defined in

event/eventConst/PointerEvent3D.ts:39

___

### deltaY

• **deltaY**: `number`

#### Defined in

event/eventConst/PointerEvent3D.ts:40

___

### data

• **data**: `pickResult`

#### Overrides

[CEvent](CEvent.md).[data](CEvent.md#data)

#### Defined in

event/eventConst/PointerEvent3D.ts:41

___

### deltaZ

• **deltaZ**: `number`

#### Defined in

event/eventConst/PointerEvent3D.ts:42

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

#### Overrides

[CEvent](CEvent.md).[reset](CEvent.md#reset)

#### Defined in

event/eventConst/PointerEvent3D.ts:44
