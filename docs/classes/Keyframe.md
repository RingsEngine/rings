[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / Keyframe

# Class: Keyframe

## Table of contents

### Constructors

- [constructor](Keyframe.md#constructor)

### Properties

- [serializedVersion](Keyframe.md#serializedversion)
- [time](Keyframe.md#time)
- [value](Keyframe.md#value)
- [inSlope](Keyframe.md#inslope)
- [outSlope](Keyframe.md#outslope)
- [tangentMode](Keyframe.md#tangentmode)
- [weightedMode](Keyframe.md#weightedmode)
- [inWeight](Keyframe.md#inweight)
- [outWeight](Keyframe.md#outweight)

### Methods

- [unSerialized](Keyframe.md#unserialized)
- [unSerialized2](Keyframe.md#unserialized2)

## Constructors

### constructor

• **new Keyframe**(`time?`, `value?`): [`Keyframe`](Keyframe.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `time` | `number` | `0` |
| `value` | `number` | `0` |

#### Returns

[`Keyframe`](Keyframe.md)

#### Defined in

math/enum/Keyframe.ts:12

## Properties

### serializedVersion

• **serializedVersion**: `string` = `"2"`

#### Defined in

math/enum/Keyframe.ts:2

___

### time

• **time**: `number`

#### Defined in

math/enum/Keyframe.ts:3

___

### value

• **value**: `number`

#### Defined in

math/enum/Keyframe.ts:4

___

### inSlope

• **inSlope**: `number` = `0`

#### Defined in

math/enum/Keyframe.ts:5

___

### outSlope

• **outSlope**: `number` = `0`

#### Defined in

math/enum/Keyframe.ts:6

___

### tangentMode

• **tangentMode**: `number` = `0`

#### Defined in

math/enum/Keyframe.ts:7

___

### weightedMode

• **weightedMode**: `number` = `0`

#### Defined in

math/enum/Keyframe.ts:8

___

### inWeight

• **inWeight**: `number`

#### Defined in

math/enum/Keyframe.ts:9

___

### outWeight

• **outWeight**: `number`

#### Defined in

math/enum/Keyframe.ts:10

## Methods

### unSerialized

▸ **unSerialized**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`void`

#### Defined in

math/enum/Keyframe.ts:17

___

### unSerialized2

▸ **unSerialized2**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`void`

#### Defined in

math/enum/Keyframe.ts:26
