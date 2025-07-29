[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / PropertyAnimationClip

# Class: PropertyAnimationClip

## Table of contents

### Constructors

- [constructor](PropertyAnimationClip.md#constructor)

### Properties

- [clipName](PropertyAnimationClip.md#clipname)
- [loopTime](PropertyAnimationClip.md#looptime)
- [startTime](PropertyAnimationClip.md#starttime)
- [stopTime](PropertyAnimationClip.md#stoptime)
- [sampleRate](PropertyAnimationClip.md#samplerate)
- [useSkeletonPos](PropertyAnimationClip.md#useskeletonpos)
- [useSkeletonScale](PropertyAnimationClip.md#useskeletonscale)
- [positionCurves](PropertyAnimationClip.md#positioncurves)
- [rotationCurves](PropertyAnimationClip.md#rotationcurves)
- [scaleCurves](PropertyAnimationClip.md#scalecurves)
- [floatCurves](PropertyAnimationClip.md#floatcurves)

### Methods

- [formBytes](PropertyAnimationClip.md#formbytes)

## Constructors

### constructor

• **new PropertyAnimationClip**(): [`PropertyAnimationClip`](PropertyAnimationClip.md)

#### Returns

[`PropertyAnimationClip`](PropertyAnimationClip.md)

## Properties

### clipName

• **clipName**: `string`

#### Defined in

math/AnimationCurveClip.ts:4

___

### loopTime

• **loopTime**: `boolean`

#### Defined in

math/AnimationCurveClip.ts:5

___

### startTime

• **startTime**: `number`

#### Defined in

math/AnimationCurveClip.ts:6

___

### stopTime

• **stopTime**: `number`

#### Defined in

math/AnimationCurveClip.ts:7

___

### sampleRate

• **sampleRate**: `number`

#### Defined in

math/AnimationCurveClip.ts:8

___

### useSkeletonPos

• **useSkeletonPos**: `boolean`

#### Defined in

math/AnimationCurveClip.ts:9

___

### useSkeletonScale

• **useSkeletonScale**: `boolean`

#### Defined in

math/AnimationCurveClip.ts:10

___

### positionCurves

• **positionCurves**: `Map`\<`string`, [`AnimationCurveT`](AnimationCurveT.md)\>

#### Defined in

math/AnimationCurveClip.ts:11

___

### rotationCurves

• **rotationCurves**: `Map`\<`string`, [`AnimationCurveT`](AnimationCurveT.md)\>

#### Defined in

math/AnimationCurveClip.ts:15

___

### scaleCurves

• **scaleCurves**: `Map`\<`string`, [`AnimationCurveT`](AnimationCurveT.md)\>

#### Defined in

math/AnimationCurveClip.ts:19

___

### floatCurves

• **floatCurves**: `Map`\<`string`, [`AnimationCurveT`](AnimationCurveT.md)\>

#### Defined in

math/AnimationCurveClip.ts:23

## Methods

### formBytes

▸ **formBytes**(`bytes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | [`BytesArray`](BytesArray.md) |

#### Returns

`void`

#### Defined in

math/AnimationCurveClip.ts:28
