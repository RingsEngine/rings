[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / Vector4

# Class: Vector4

## Table of contents

### Constructors

- [constructor](Vector4.md#constructor)

### Properties

- [X\_AXIS](Vector4.md#x_axis)
- [Y\_AXIS](Vector4.md#y_axis)
- [Z\_AXIS](Vector4.md#z_axis)
- [HELP\_0](Vector4.md#help_0)
- [HELP\_1](Vector4.md#help_1)
- [HELP\_2](Vector4.md#help_2)
- [EPSILON](Vector4.md#epsilon)
- [HELP\_3](Vector4.md#help_3)
- [HELP\_4](Vector4.md#help_4)
- [HELP\_5](Vector4.md#help_5)
- [HELP\_6](Vector4.md#help_6)
- [ZERO](Vector4.md#zero)
- [ONE](Vector4.md#one)
- [LEFT](Vector4.md#left)
- [RIGHT](Vector4.md#right)
- [UP](Vector4.md#up)
- [DOWN](Vector4.md#down)
- [BACK](Vector4.md#back)
- [FORWARD](Vector4.md#forward)
- [x](Vector4.md#x)
- [y](Vector4.md#y)
- [z](Vector4.md#z)
- [w](Vector4.md#w)

### Accessors

- [width](Vector4.md#width)
- [height](Vector4.md#height)

### Methods

- [crossVectors](Vector4.md#crossvectors)
- [distance](Vector4.md#distance)
- [set](Vector4.md#set)
- [multiplyScalar](Vector4.md#multiplyscalar)
- [copyFrom](Vector4.md#copyfrom)
- [clone](Vector4.md#clone)

## Constructors

### constructor

• **new Vector4**(`x?`, `y?`, `z?`, `w?`): [`Vector4`](Vector4.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x` | `number` | `0` |
| `y` | `number` | `0` |
| `z` | `number` | `0` |
| `w` | `number` | `0` |

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

math/Vector4.ts:26

## Properties

### X\_AXIS

▪ `Static` **X\_AXIS**: [`Vector4`](Vector4.md)

#### Defined in

math/Vector4.ts:2

___

### Y\_AXIS

▪ `Static` **Y\_AXIS**: [`Vector4`](Vector4.md)

#### Defined in

math/Vector4.ts:3

___

### Z\_AXIS

▪ `Static` **Z\_AXIS**: [`Vector4`](Vector4.md)

#### Defined in

math/Vector4.ts:4

___

### HELP\_0

▪ `Static` **HELP\_0**: [`Vector4`](Vector4.md)

#### Defined in

math/Vector4.ts:5

___

### HELP\_1

▪ `Static` **HELP\_1**: [`Vector4`](Vector4.md)

#### Defined in

math/Vector4.ts:6

___

### HELP\_2

▪ `Static` **HELP\_2**: [`Vector4`](Vector4.md)

#### Defined in

math/Vector4.ts:7

___

### EPSILON

▪ `Static` **EPSILON**: `number` = `0.00001`

#### Defined in

math/Vector4.ts:8

___

### HELP\_3

▪ `Static` **HELP\_3**: [`Vector4`](Vector4.md)

#### Defined in

math/Vector4.ts:9

___

### HELP\_4

▪ `Static` **HELP\_4**: [`Vector4`](Vector4.md)

#### Defined in

math/Vector4.ts:10

___

### HELP\_5

▪ `Static` **HELP\_5**: [`Vector4`](Vector4.md)

#### Defined in

math/Vector4.ts:11

___

### HELP\_6

▪ `Static` **HELP\_6**: [`Vector4`](Vector4.md)

#### Defined in

math/Vector4.ts:12

___

### ZERO

▪ `Static` **ZERO**: [`Vector4`](Vector4.md)

#### Defined in

math/Vector4.ts:13

___

### ONE

▪ `Static` **ONE**: [`Vector4`](Vector4.md)

#### Defined in

math/Vector4.ts:14

___

### LEFT

▪ `Static` **LEFT**: [`Vector4`](Vector4.md)

#### Defined in

math/Vector4.ts:15

___

### RIGHT

▪ `Static` **RIGHT**: [`Vector4`](Vector4.md)

#### Defined in

math/Vector4.ts:16

___

### UP

▪ `Static` **UP**: [`Vector4`](Vector4.md)

#### Defined in

math/Vector4.ts:17

___

### DOWN

▪ `Static` **DOWN**: [`Vector4`](Vector4.md)

#### Defined in

math/Vector4.ts:18

___

### BACK

▪ `Static` **BACK**: [`Vector4`](Vector4.md)

#### Defined in

math/Vector4.ts:19

___

### FORWARD

▪ `Static` **FORWARD**: [`Vector4`](Vector4.md)

#### Defined in

math/Vector4.ts:20

___

### x

• **x**: `number` = `0`

#### Defined in

math/Vector4.ts:22

___

### y

• **y**: `number` = `0`

#### Defined in

math/Vector4.ts:23

___

### z

• **z**: `number` = `0`

#### Defined in

math/Vector4.ts:24

___

### w

• **w**: `number` = `1`

#### Defined in

math/Vector4.ts:25

## Accessors

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Defined in

math/Vector4.ts:32

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Defined in

math/Vector4.ts:35

## Methods

### crossVectors

▸ **crossVectors**(`a`, `b`, `target?`): [`Vector4`](Vector4.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Vector4`](Vector4.md) |
| `b` | [`Vector4`](Vector4.md) |
| `target?` | [`Vector4`](Vector4.md) |

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

math/Vector4.ts:38

___

### distance

▸ **distance**(`pt1`, `pt2`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pt1` | [`Vector4`](Vector4.md) |
| `pt2` | [`Vector4`](Vector4.md) |

#### Returns

`number`

#### Defined in

math/Vector4.ts:53

___

### set

▸ **set**(`x`, `y`, `z`, `w`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |
| `w` | `number` |

#### Returns

`this`

#### Defined in

math/Vector4.ts:60

___

### multiplyScalar

▸ **multiplyScalar**(`scalar`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scalar` | `number` |

#### Returns

`this`

#### Defined in

math/Vector4.ts:67

___

### copyFrom

▸ **copyFrom**(`v`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector4`](Vector4.md) |

#### Returns

`this`

#### Defined in

math/Vector4.ts:74

___

### clone

▸ **clone**(): [`Vector4`](Vector4.md)

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

math/Vector4.ts:81
