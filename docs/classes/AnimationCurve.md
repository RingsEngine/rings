[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / AnimationCurve

# Class: AnimationCurve

## Hierarchy

- **`AnimationCurve`**

  ↳ [`AttributeAnimCurve`](AttributeAnimCurve.md)

## Table of contents

### Constructors

- [constructor](AnimationCurve.md#constructor)

### Properties

- [curve](AnimationCurve.md#curve)
- [serializedVersion](AnimationCurve.md#serializedversion)
- [preWarpMode](AnimationCurve.md#prewarpmode)
- [postWarpMode](AnimationCurve.md#postwarpmode)
- [rotationOrder](AnimationCurve.md#rotationorder)

### Accessors

- [cacheOut](AnimationCurve.md#cacheout)
- [totalTime](AnimationCurve.md#totaltime)
- [first](AnimationCurve.md#first)
- [last](AnimationCurve.md#last)

### Methods

- [addKeyFrame](AnimationCurve.md#addkeyframe)
- [removeKeyFrame](AnimationCurve.md#removekeyframe)
- [calculateCacheData](AnimationCurve.md#calculatecachedata)
- [getValue](AnimationCurve.md#getvalue)
- [getCurveFramesExtent](AnimationCurve.md#getcurveframesextent)
- [getKeyCount](AnimationCurve.md#getkeycount)
- [getKey](AnimationCurve.md#getkey)
- [unSerialized](AnimationCurve.md#unserialized)
- [unSerialized2](AnimationCurve.md#unserialized2)
- [wrapTime](AnimationCurve.md#wraptime)
- [scaleCurveValue](AnimationCurve.md#scalecurvevalue)

## Constructors

### constructor

• **new AnimationCurve**(`frames?`, `preWarpMode?`, `postWarpMode?`): [`AnimationCurve`](AnimationCurve.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `frames?` | [`Keyframe`](Keyframe.md)[] | `undefined` |
| `preWarpMode` | [`WrapTimeMode`](../enums/WrapTimeMode.md) | `WrapTimeMode.Repeat` |
| `postWarpMode` | [`WrapTimeMode`](../enums/WrapTimeMode.md) | `WrapTimeMode.Repeat` |

#### Returns

[`AnimationCurve`](AnimationCurve.md)

#### Defined in

math/AnimationCurve.ts:25

## Properties

### curve

• **curve**: [`Keyframe`](Keyframe.md)[] = `[]`

#### Defined in

math/AnimationCurve.ts:15

___

### serializedVersion

• **serializedVersion**: `number`

#### Defined in

math/AnimationCurve.ts:16

___

### preWarpMode

• **preWarpMode**: `number`

#### Defined in

math/AnimationCurve.ts:17

___

### postWarpMode

• **postWarpMode**: `number`

#### Defined in

math/AnimationCurve.ts:18

___

### rotationOrder

• **rotationOrder**: `number`

#### Defined in

math/AnimationCurve.ts:19

## Accessors

### cacheOut

• `get` **cacheOut**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `lhsIndex` | `number` |
| `rhsIndex` | `number` |

#### Defined in

math/AnimationCurve.ts:21

___

### totalTime

• `get` **totalTime**(): `number`

#### Returns

`number`

#### Defined in

math/AnimationCurve.ts:39

___

### first

• `get` **first**(): [`Keyframe`](Keyframe.md)

#### Returns

[`Keyframe`](Keyframe.md)

#### Defined in

math/AnimationCurve.ts:43

___

### last

• `get` **last**(): [`Keyframe`](Keyframe.md)

#### Returns

[`Keyframe`](Keyframe.md)

#### Defined in

math/AnimationCurve.ts:47

## Methods

### addKeyFrame

▸ **addKeyFrame**(`keyFrame`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyFrame` | [`Keyframe`](Keyframe.md) |

#### Returns

`void`

#### Defined in

math/AnimationCurve.ts:51

___

### removeKeyFrame

▸ **removeKeyFrame**(`keyFrame`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyFrame` | [`Keyframe`](Keyframe.md) |

#### Returns

`void`

#### Defined in

math/AnimationCurve.ts:58

___

### calculateCacheData

▸ **calculateCacheData**(`cache`, `lhsIndex`, `rhsIndex`, `timeOffset?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `cache` | [`FrameCache`](FrameCache.md) | `undefined` |
| `lhsIndex` | `number` | `undefined` |
| `rhsIndex` | `number` | `undefined` |
| `timeOffset` | `number` | `0` |

#### Returns

`void`

#### Defined in

math/AnimationCurve.ts:67

___

### getValue

▸ **getValue**(`time`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `time` | `number` |

#### Returns

`number`

#### Defined in

math/AnimationCurve.ts:102

___

### getCurveFramesExtent

▸ **getCurveFramesExtent**(`time`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `time` | `number` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `lhsIndex` | `number` |
| `rhsIndex` | `number` |
| `time` | `number` |

#### Defined in

math/AnimationCurve.ts:114

___

### getKeyCount

▸ **getKeyCount**(): `number`

#### Returns

`number`

#### Defined in

math/AnimationCurve.ts:128

___

### getKey

▸ **getKey**(`index`): [`Keyframe`](Keyframe.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`Keyframe`](Keyframe.md)

#### Defined in

math/AnimationCurve.ts:132

___

### unSerialized

▸ **unSerialized**(`data`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`this`

#### Defined in

math/AnimationCurve.ts:136

___

### unSerialized2

▸ **unSerialized2**(`data`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |

#### Returns

`this`

#### Defined in

math/AnimationCurve.ts:149

___

### wrapTime

▸ **wrapTime**(`curveT`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `curveT` | `number` |

#### Returns

`number`

#### Defined in

math/AnimationCurve.ts:163

___

### scaleCurveValue

▸ **scaleCurveValue**(`curve`, `scale`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `curve` | [`AnimationCurve`](AnimationCurve.md) |
| `scale` | `number` |

#### Returns

`void`

#### Defined in

math/AnimationCurve.ts:227
