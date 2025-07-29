[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / KeyframeT

# Class: KeyframeT

## Table of contents

### Constructors

- [constructor](KeyframeT.md#constructor)

### Properties

- [serializedVersion](KeyframeT.md#serializedversion)
- [time](KeyframeT.md#time)
- [tangentMode](KeyframeT.md#tangentmode)
- [weightedMode](KeyframeT.md#weightedmode)
- [propertyKeyFrame](KeyframeT.md#propertykeyframe)

### Methods

- [getK](KeyframeT.md#getk)
- [split](KeyframeT.md#split)
- [formBytes](KeyframeT.md#formbytes)

## Constructors

### constructor

• **new KeyframeT**(`time?`): [`KeyframeT`](KeyframeT.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `time` | `number` | `0` |

#### Returns

[`KeyframeT`](KeyframeT.md)

#### Defined in

math/enum/T/KeyframeT.ts:20

## Properties

### serializedVersion

• **serializedVersion**: `string` = `"2"`

#### Defined in

math/enum/T/KeyframeT.ts:14

___

### time

• **time**: `number`

#### Defined in

math/enum/T/KeyframeT.ts:15

___

### tangentMode

• **tangentMode**: `number` = `0`

#### Defined in

math/enum/T/KeyframeT.ts:16

___

### weightedMode

• **weightedMode**: `number` = `0`

#### Defined in

math/enum/T/KeyframeT.ts:17

___

### propertyKeyFrame

• **propertyKeyFrame**: `Object`

#### Index signature

▪ [k: `number`]: [`Keyframe`](Keyframe.md)

#### Defined in

math/enum/T/KeyframeT.ts:18

## Methods

### getK

▸ **getK**(`k`): [`Keyframe`](Keyframe.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `k` | `number` |

#### Returns

[`Keyframe`](Keyframe.md)

#### Defined in

math/enum/T/KeyframeT.ts:25

___

### split

▸ **split**(`type`, `value`, `property`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`ValueEnumType`](../enums/ValueEnumType.md) |
| `value` | [`CurveValueType`](../modules.md#curvevaluetype) |
| `property` | `string` |

#### Returns

`void`

#### Defined in

math/enum/T/KeyframeT.ts:29

___

### formBytes

▸ **formBytes**(`bytes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | [`BytesArray`](BytesArray.md) |

#### Returns

`void`

#### Defined in

math/enum/T/KeyframeT.ts:105
