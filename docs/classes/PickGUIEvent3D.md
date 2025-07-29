[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / PickGUIEvent3D

# Class: PickGUIEvent3D

## Hierarchy

- [`CEvent`](CEvent.md)

  ↳ **`PickGUIEvent3D`**

## Table of contents

### Constructors

- [constructor](PickGUIEvent3D.md#constructor)

### Properties

- [target](PickGUIEvent3D.md#target)
- [currentTarget](PickGUIEvent3D.md#currenttarget)
- [type](PickGUIEvent3D.md#type)
- [param](PickGUIEvent3D.md#param)
- [time](PickGUIEvent3D.md#time)
- [delay](PickGUIEvent3D.md#delay)
- [mouseCode](PickGUIEvent3D.md#mousecode)
- [ctrlKey](PickGUIEvent3D.md#ctrlkey)
- [metaKey](PickGUIEvent3D.md#metakey)
- [altKey](PickGUIEvent3D.md#altkey)
- [shiftKey](PickGUIEvent3D.md#shiftkey)
- [targetTouches](PickGUIEvent3D.md#targettouches)
- [changedTouches](PickGUIEvent3D.md#changedtouches)
- [touches](PickGUIEvent3D.md#touches)
- [view](PickGUIEvent3D.md#view)
- [PICK\_OVER\_GUI](PickGUIEvent3D.md#pick_over_gui)
- [PICK\_CLICK\_GUI](PickGUIEvent3D.md#pick_click_gui)
- [PICK\_OUT\_GUI](PickGUIEvent3D.md#pick_out_gui)
- [PICK\_UP\_GUI](PickGUIEvent3D.md#pick_up_gui)
- [PICK\_DOWN\_GUI](PickGUIEvent3D.md#pick_down_gui)
- [pointerId](PickGUIEvent3D.md#pointerid)
- [pointerType](PickGUIEvent3D.md#pointertype)
- [isPrimary](PickGUIEvent3D.md#isprimary)
- [pressure](PickGUIEvent3D.md#pressure)
- [mouseX](PickGUIEvent3D.md#mousex)
- [mouseY](PickGUIEvent3D.md#mousey)
- [movementX](PickGUIEvent3D.md#movementx)
- [movementY](PickGUIEvent3D.md#movementy)
- [deltaX](PickGUIEvent3D.md#deltax)
- [deltaY](PickGUIEvent3D.md#deltay)
- [data](PickGUIEvent3D.md#data)
- [deltaZ](PickGUIEvent3D.md#deltaz)

### Accessors

- [isStopImmediatePropagation](PickGUIEvent3D.md#isstopimmediatepropagation)

### Methods

- [stopImmediatePropagation](PickGUIEvent3D.md#stopimmediatepropagation)
- [reset](PickGUIEvent3D.md#reset)

## Constructors

### constructor

• **new PickGUIEvent3D**(`eventType?`, `data?`): [`PickGUIEvent3D`](PickGUIEvent3D.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `eventType` | `string` | `null` |
| `data` | `any` | `null` |

#### Returns

[`PickGUIEvent3D`](PickGUIEvent3D.md)

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

### PICK\_OVER\_GUI

▪ `Static` **PICK\_OVER\_GUI**: `string` = `"onPickOverGUI"`

#### Defined in

event/eventConst/PointerEvent3D.ts:57

___

### PICK\_CLICK\_GUI

▪ `Static` **PICK\_CLICK\_GUI**: `string` = `"onPickClickGUI"`

#### Defined in

event/eventConst/PointerEvent3D.ts:58

___

### PICK\_OUT\_GUI

▪ `Static` **PICK\_OUT\_GUI**: `string` = `"onPickOutGUI"`

#### Defined in

event/eventConst/PointerEvent3D.ts:59

___

### PICK\_UP\_GUI

▪ `Static` **PICK\_UP\_GUI**: `string` = `"onPickUpGUI"`

#### Defined in

event/eventConst/PointerEvent3D.ts:60

___

### PICK\_DOWN\_GUI

▪ `Static` **PICK\_DOWN\_GUI**: `string` = `"onPickDownGUI"`

#### Defined in

event/eventConst/PointerEvent3D.ts:61

___

### pointerId

• **pointerId**: `number`

#### Defined in

event/eventConst/PointerEvent3D.ts:62

___

### pointerType

• **pointerType**: `string` = `"onPickGUI"`

#### Defined in

event/eventConst/PointerEvent3D.ts:63

___

### isPrimary

• **isPrimary**: `boolean`

#### Defined in

event/eventConst/PointerEvent3D.ts:64

___

### pressure

• **pressure**: `number`

#### Defined in

event/eventConst/PointerEvent3D.ts:65

___

### mouseX

• **mouseX**: `number`

#### Defined in

event/eventConst/PointerEvent3D.ts:66

___

### mouseY

• **mouseY**: `number`

#### Defined in

event/eventConst/PointerEvent3D.ts:67

___

### movementX

• **movementX**: `number`

#### Defined in

event/eventConst/PointerEvent3D.ts:68

___

### movementY

• **movementY**: `number`

#### Defined in

event/eventConst/PointerEvent3D.ts:69

___

### deltaX

• **deltaX**: `number`

#### Defined in

event/eventConst/PointerEvent3D.ts:70

___

### deltaY

• **deltaY**: `number`

#### Defined in

event/eventConst/PointerEvent3D.ts:71

___

### data

• **data**: [`GUIHitInfo`](../modules.md#guihitinfo)

#### Overrides

[CEvent](CEvent.md).[data](CEvent.md#data)

#### Defined in

event/eventConst/PointerEvent3D.ts:72

___

### deltaZ

• **deltaZ**: `number`

#### Defined in

event/eventConst/PointerEvent3D.ts:73

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

event/eventConst/PointerEvent3D.ts:75
