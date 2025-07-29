[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / AnimationCurveT

# Class: AnimationCurveT

## Table of contents

### Constructors

- [constructor](AnimationCurveT.md#constructor)

### Properties

- [path](AnimationCurveT.md#path)
- [attribute](AnimationCurveT.md#attribute)
- [propertys](AnimationCurveT.md#propertys)
- [preInfinity](AnimationCurveT.md#preinfinity)
- [postInfinity](AnimationCurveT.md#postinfinity)
- [rotationOrder](AnimationCurveT.md#rotationorder)
- [m\_curves](AnimationCurveT.md#m_curves)

### Accessors

- [totalTime](AnimationCurveT.md#totaltime)

### Methods

- [addKeyFrame](AnimationCurveT.md#addkeyframe)
- [removeKeyFrame](AnimationCurveT.md#removekeyframe)
- [getValue](AnimationCurveT.md#getvalue)
- [getKeyCount](AnimationCurveT.md#getkeycount)
- [getKey](AnimationCurveT.md#getkey)
- [formBytes](AnimationCurveT.md#formbytes)

## Constructors

### constructor

• **new AnimationCurveT**(`k?`): [`AnimationCurveT`](AnimationCurveT.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `k` | `number` | `1` |

#### Returns

[`AnimationCurveT`](AnimationCurveT.md)

#### Defined in

math/AnimationCurveT.ts:27

## Properties

### path

• **path**: `string`

#### Defined in

math/AnimationCurveT.ts:15

___

### attribute

• **attribute**: `string`

#### Defined in

math/AnimationCurveT.ts:16

___

### propertys

• **propertys**: `string`[]

#### Defined in

math/AnimationCurveT.ts:17

___

### preInfinity

• **preInfinity**: `number`

#### Defined in

math/AnimationCurveT.ts:18

___

### postInfinity

• **postInfinity**: `number`

#### Defined in

math/AnimationCurveT.ts:19

___

### rotationOrder

• **rotationOrder**: `number`

#### Defined in

math/AnimationCurveT.ts:20

___

### m\_curves

• **m\_curves**: [`AnimationCurve`](AnimationCurve.md)[]

#### Defined in

math/AnimationCurveT.ts:21

## Accessors

### totalTime

• `get` **totalTime**(): `number`

#### Returns

`number`

#### Defined in

math/AnimationCurveT.ts:55

## Methods

### addKeyFrame

▸ **addKeyFrame**(`keyFrame`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyFrame` | [`KeyframeT`](KeyframeT.md) |

#### Returns

`void`

#### Defined in

math/AnimationCurveT.ts:59

___

### removeKeyFrame

▸ **removeKeyFrame**(`keyFrame`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyFrame` | [`KeyframeT`](KeyframeT.md) |

#### Returns

`void`

#### Defined in

math/AnimationCurveT.ts:65

___

### getValue

▸ **getValue**(`time`): [`CurveValueT`](../modules.md#curvevaluet)

#### Parameters

| Name | Type |
| :------ | :------ |
| `time` | `number` |

#### Returns

[`CurveValueT`](../modules.md#curvevaluet)

#### Defined in

math/AnimationCurveT.ts:71

___

### getKeyCount

▸ **getKeyCount**(): `number`

#### Returns

`number`

#### Defined in

math/AnimationCurveT.ts:121

___

### getKey

▸ **getKey**(`index`): [`Keyframe`](Keyframe.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`Keyframe`](Keyframe.md)[]

#### Defined in

math/AnimationCurveT.ts:125

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

math/AnimationCurveT.ts:133
