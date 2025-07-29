[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / OutlinePostData

# Class: OutlinePostData

## Table of contents

### Constructors

- [constructor](OutlinePostData.md#constructor)

### Properties

- [SlotCount](OutlinePostData.md#slotcount)
- [MaxEntities](OutlinePostData.md#maxentities)
- [defaultColor](OutlinePostData.md#defaultcolor)

### Methods

- [clear](OutlinePostData.md#clear)
- [clearAt](OutlinePostData.md#clearat)
- [fillDataAt](OutlinePostData.md#filldataat)
- [fetchData](OutlinePostData.md#fetchdata)

## Constructors

### constructor

• **new OutlinePostData**(): [`OutlinePostData`](OutlinePostData.md)

#### Returns

[`OutlinePostData`](OutlinePostData.md)

#### Defined in

io/OutlinePostData.ts:18

## Properties

### SlotCount

• `Readonly` **SlotCount**: `number` = `8`

#### Defined in

io/OutlinePostData.ts:11

___

### MaxEntities

• `Readonly` **MaxEntities**: `number` = `16`

#### Defined in

io/OutlinePostData.ts:12

___

### defaultColor

• `Readonly` **defaultColor**: [`Color`](Color.md)

#### Defined in

io/OutlinePostData.ts:13

## Methods

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

io/OutlinePostData.ts:29

___

### clearAt

▸ **clearAt**(`slotIndex`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `slotIndex` | `number` |

#### Returns

`this`

#### Defined in

io/OutlinePostData.ts:35

___

### fillDataAt

▸ **fillDataAt**(`slot`, `indexList`, `color`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `slot` | `number` |
| `indexList` | `number`[] |
| `color` | [`Color`](Color.md) |

#### Returns

`this`

#### Defined in

io/OutlinePostData.ts:44

___

### fetchData

▸ **fetchData**(`target`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Object` |
| `target.dirty` | `boolean` |
| `target.slots` | [`OutlinePostSlot`](OutlinePostSlot.md)[] |

#### Returns

`this`

#### Defined in

io/OutlinePostData.ts:58
