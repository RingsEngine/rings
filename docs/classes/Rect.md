[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / Rect

# Class: Rect

## Table of contents

### Constructors

- [constructor](Rect.md#constructor)

### Properties

- [x](Rect.md#x)
- [y](Rect.md#y)
- [w](Rect.md#w)
- [h](Rect.md#h)

### Accessors

- [width](Rect.md#width)
- [height](Rect.md#height)

### Methods

- [pointInRect](Rect.md#pointinrect)
- [clone](Rect.md#clone)
- [copyFrom](Rect.md#copyfrom)
- [copyTo](Rect.md#copyto)
- [inner](Rect.md#inner)
- [equal](Rect.md#equal)
- [equalArea](Rect.md#equalarea)
- [equalInnerArea](Rect.md#equalinnerarea)
- [innerArea](Rect.md#innerarea)
- [setTo](Rect.md#setto)

## Constructors

### constructor

• **new Rect**(`x?`, `y?`, `width?`, `height?`): [`Rect`](Rect.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x` | `number` | `0` |
| `y` | `number` | `0` |
| `width` | `number` | `0` |
| `height` | `number` | `0` |

#### Returns

[`Rect`](Rect.md)

#### Defined in

math/Rect.ts:6

## Properties

### x

• **x**: `number`

#### Defined in

math/Rect.ts:2

___

### y

• **y**: `number`

#### Defined in

math/Rect.ts:3

___

### w

• **w**: `number`

#### Defined in

math/Rect.ts:4

___

### h

• **h**: `number`

#### Defined in

math/Rect.ts:5

## Accessors

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Defined in

math/Rect.ts:17

• `set` **width**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

math/Rect.ts:20

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Defined in

math/Rect.ts:23

• `set` **height**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

math/Rect.ts:26

## Methods

### pointInRect

▸ **pointInRect**(`x`, `y`, `lt_x`, `lt_y`, `rb_x`, `rb_y`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `lt_x` | `number` |
| `lt_y` | `number` |
| `rb_x` | `number` |
| `rb_y` | `number` |

#### Returns

`boolean`

#### Defined in

math/Rect.ts:29

___

### clone

▸ **clone**(): [`Rect`](Rect.md)

#### Returns

[`Rect`](Rect.md)

#### Defined in

math/Rect.ts:43

___

### copyFrom

▸ **copyFrom**(`rect`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rect` | [`Rect`](Rect.md) |

#### Returns

`void`

#### Defined in

math/Rect.ts:46

___

### copyTo

▸ **copyTo**(`rect`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rect` | [`Rect`](Rect.md) |

#### Returns

`void`

#### Defined in

math/Rect.ts:52

___

### inner

▸ **inner**(`x`, `y`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`boolean`

#### Defined in

math/Rect.ts:55

___

### equal

▸ **equal**(`rectangle`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rectangle` | [`Rect`](Rect.md) |

#### Returns

`boolean`

#### Defined in

math/Rect.ts:66

___

### equalArea

▸ **equalArea**(`x`, `y`, `width`, `height`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `width` | `number` |
| `height` | `number` |

#### Returns

`boolean`

#### Defined in

math/Rect.ts:74

___

### equalInnerArea

▸ **equalInnerArea**(`source`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`Rect`](Rect.md) |

#### Returns

`boolean`

#### Defined in

math/Rect.ts:87

___

### innerArea

▸ **innerArea**(`source`, `target`): [`Rect`](Rect.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`Rect`](Rect.md) |
| `target` | [`Rect`](Rect.md) |

#### Returns

[`Rect`](Rect.md)

#### Defined in

math/Rect.ts:108

___

### setTo

▸ **setTo**(`x`, `y`, `width`, `height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `width` | `number` |
| `height` | `number` |

#### Returns

`void`

#### Defined in

math/Rect.ts:139
