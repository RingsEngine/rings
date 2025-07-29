[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / PropertyAnimClip

# Class: PropertyAnimClip

## Table of contents

### Constructors

- [constructor](PropertyAnimClip.md#constructor)

### Properties

- [name](PropertyAnimClip.md#name)
- [objAnimClip](PropertyAnimClip.md#objanimclip)
- [totalTime](PropertyAnimClip.md#totaltime)
- [time](PropertyAnimClip.md#time)

### Accessors

- [wrapMode](PropertyAnimClip.md#wrapmode)

### Methods

- [parse](PropertyAnimClip.md#parse)

## Constructors

### constructor

• **new PropertyAnimClip**(): [`PropertyAnimClip`](PropertyAnimClip.md)

#### Returns

[`PropertyAnimClip`](PropertyAnimClip.md)

## Properties

### name

• **name**: `string`

#### Defined in

components/anim/curveAnim/PropertyAnimClip.ts:17

___

### objAnimClip

• **objAnimClip**: `Object`

#### Index signature

▪ [path: `string`]: [`ObjectAnimClip`](ObjectAnimClip.md)

#### Defined in

components/anim/curveAnim/PropertyAnimClip.ts:18

___

### totalTime

• **totalTime**: `number` = `0`

#### Defined in

components/anim/curveAnim/PropertyAnimClip.ts:20

___

### time

• **time**: `number` = `0`

#### Defined in

components/anim/curveAnim/PropertyAnimClip.ts:21

## Accessors

### wrapMode

• `get` **wrapMode**(): [`WrapMode`](../enums/WrapMode.md)

#### Returns

[`WrapMode`](../enums/WrapMode.md)

#### Defined in

components/anim/curveAnim/PropertyAnimClip.ts:27

• `set` **wrapMode**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`WrapMode`](../enums/WrapMode.md) |

#### Returns

`void`

#### Defined in

components/anim/curveAnim/PropertyAnimClip.ts:32

## Methods

### parse

▸ **parse**(`jsonData`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonData` | `any` |

#### Returns

`void`

#### Defined in

components/anim/curveAnim/PropertyAnimClip.ts:36
