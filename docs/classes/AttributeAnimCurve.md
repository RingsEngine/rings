[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / AttributeAnimCurve

# Class: AttributeAnimCurve

## Hierarchy

- [`AnimationCurve`](AnimationCurve.md)

  ↳ **`AttributeAnimCurve`**

## Table of contents

### Constructors

- [constructor](AttributeAnimCurve.md#constructor)

### Properties

- [attribute](AttributeAnimCurve.md#attribute)
- [propertyList](AttributeAnimCurve.md#propertylist)
- [path](AttributeAnimCurve.md#path)
- [curve](AttributeAnimCurve.md#curve)
- [serializedVersion](AttributeAnimCurve.md#serializedversion)
- [preWarpMode](AttributeAnimCurve.md#prewarpmode)
- [postWarpMode](AttributeAnimCurve.md#postwarpmode)
- [rotationOrder](AttributeAnimCurve.md#rotationorder)

### Accessors

- [cacheOut](AttributeAnimCurve.md#cacheout)
- [totalTime](AttributeAnimCurve.md#totaltime)
- [first](AttributeAnimCurve.md#first)
- [last](AttributeAnimCurve.md#last)

### Methods

- [unSerialized](AttributeAnimCurve.md#unserialized)
- [addKeyFrame](AttributeAnimCurve.md#addkeyframe)
- [removeKeyFrame](AttributeAnimCurve.md#removekeyframe)
- [calculateCacheData](AttributeAnimCurve.md#calculatecachedata)
- [getValue](AttributeAnimCurve.md#getvalue)
- [getCurveFramesExtent](AttributeAnimCurve.md#getcurveframesextent)
- [getKeyCount](AttributeAnimCurve.md#getkeycount)
- [getKey](AttributeAnimCurve.md#getkey)
- [unSerialized2](AttributeAnimCurve.md#unserialized2)
- [wrapTime](AttributeAnimCurve.md#wraptime)
- [scaleCurveValue](AttributeAnimCurve.md#scalecurvevalue)

## Constructors

### constructor

• **new AttributeAnimCurve**(): [`AttributeAnimCurve`](AttributeAnimCurve.md)

#### Returns

[`AttributeAnimCurve`](AttributeAnimCurve.md)

#### Overrides

[AnimationCurve](AnimationCurve.md).[constructor](AnimationCurve.md#constructor)

#### Defined in

components/anim/curveAnim/AttributeAnimCurve.ts:8

## Properties

### attribute

• **attribute**: `string` = `""`

#### Defined in

components/anim/curveAnim/AttributeAnimCurve.ts:4

___

### propertyList

• **propertyList**: `string`[]

#### Defined in

components/anim/curveAnim/AttributeAnimCurve.ts:5

___

### path

• **path**: `string`

#### Defined in

components/anim/curveAnim/AttributeAnimCurve.ts:6

___

### curve

• **curve**: [`Keyframe`](Keyframe.md)[] = `[]`

#### Inherited from

[AnimationCurve](AnimationCurve.md).[curve](AnimationCurve.md#curve)

#### Defined in

math/AnimationCurve.ts:15

___

### serializedVersion

• **serializedVersion**: `number`

#### Inherited from

[AnimationCurve](AnimationCurve.md).[serializedVersion](AnimationCurve.md#serializedversion)

#### Defined in

math/AnimationCurve.ts:16

___

### preWarpMode

• **preWarpMode**: `number`

#### Inherited from

[AnimationCurve](AnimationCurve.md).[preWarpMode](AnimationCurve.md#prewarpmode)

#### Defined in

math/AnimationCurve.ts:17

___

### postWarpMode

• **postWarpMode**: `number`

#### Inherited from

[AnimationCurve](AnimationCurve.md).[postWarpMode](AnimationCurve.md#postwarpmode)

#### Defined in

math/AnimationCurve.ts:18

___

### rotationOrder

• **rotationOrder**: `number`

#### Inherited from

[AnimationCurve](AnimationCurve.md).[rotationOrder](AnimationCurve.md#rotationorder)

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

#### Inherited from

AnimationCurve.cacheOut

#### Defined in

math/AnimationCurve.ts:21

___

### totalTime

• `get` **totalTime**(): `number`

#### Returns

`number`

#### Inherited from

AnimationCurve.totalTime

#### Defined in

math/AnimationCurve.ts:39

___

### first

• `get` **first**(): [`Keyframe`](Keyframe.md)

#### Returns

[`Keyframe`](Keyframe.md)

#### Inherited from

AnimationCurve.first

#### Defined in

math/AnimationCurve.ts:43

___

### last

• `get` **last**(): [`Keyframe`](Keyframe.md)

#### Returns

[`Keyframe`](Keyframe.md)

#### Inherited from

AnimationCurve.last

#### Defined in

math/AnimationCurve.ts:47

## Methods

### unSerialized

▸ **unSerialized**(`data`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`this`

#### Overrides

[AnimationCurve](AnimationCurve.md).[unSerialized](AnimationCurve.md#unserialized)

#### Defined in

components/anim/curveAnim/AttributeAnimCurve.ts:12

___

### addKeyFrame

▸ **addKeyFrame**(`keyFrame`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyFrame` | [`Keyframe`](Keyframe.md) |

#### Returns

`void`

#### Inherited from

[AnimationCurve](AnimationCurve.md).[addKeyFrame](AnimationCurve.md#addkeyframe)

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

#### Inherited from

[AnimationCurve](AnimationCurve.md).[removeKeyFrame](AnimationCurve.md#removekeyframe)

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

#### Inherited from

[AnimationCurve](AnimationCurve.md).[calculateCacheData](AnimationCurve.md#calculatecachedata)

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

#### Inherited from

[AnimationCurve](AnimationCurve.md).[getValue](AnimationCurve.md#getvalue)

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

#### Inherited from

[AnimationCurve](AnimationCurve.md).[getCurveFramesExtent](AnimationCurve.md#getcurveframesextent)

#### Defined in

math/AnimationCurve.ts:114

___

### getKeyCount

▸ **getKeyCount**(): `number`

#### Returns

`number`

#### Inherited from

[AnimationCurve](AnimationCurve.md).[getKeyCount](AnimationCurve.md#getkeycount)

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

#### Inherited from

[AnimationCurve](AnimationCurve.md).[getKey](AnimationCurve.md#getkey)

#### Defined in

math/AnimationCurve.ts:132

___

### unSerialized2

▸ **unSerialized2**(`data`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |

#### Returns

`this`

#### Inherited from

[AnimationCurve](AnimationCurve.md).[unSerialized2](AnimationCurve.md#unserialized2)

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

#### Inherited from

[AnimationCurve](AnimationCurve.md).[wrapTime](AnimationCurve.md#wraptime)

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

#### Inherited from

[AnimationCurve](AnimationCurve.md).[scaleCurveValue](AnimationCurve.md#scalecurvevalue)

#### Defined in

math/AnimationCurve.ts:227
