[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / Interpolator

# Class: Interpolator

## Table of contents

### Constructors

- [constructor](Interpolator.md#constructor)

### Properties

- [interpolators](Interpolator.md#interpolators)
- [complete](Interpolator.md#complete)
- [onComplete](Interpolator.md#oncomplete)
- [onProgress](Interpolator.md#onprogress)
- [target](Interpolator.md#target)
- [property](Interpolator.md#property)
- [targetProperty](Interpolator.md#targetproperty)
- [durtion](Interpolator.md#durtion)
- [interpolatorEnum](Interpolator.md#interpolatorenum)
- [delayTime](Interpolator.md#delaytime)

### Methods

- [to](Interpolator.md#to)
- [tick](Interpolator.md#tick)
- [remove](Interpolator.md#remove)
- [removeList](Interpolator.md#removelist)
- [start](Interpolator.md#start)
- [tick](Interpolator.md#tick-1)
- [dispose](Interpolator.md#dispose)

## Constructors

### constructor

• **new Interpolator**(): [`Interpolator`](Interpolator.md)

#### Returns

[`Interpolator`](Interpolator.md)

## Properties

### interpolators

▪ `Static` **interpolators**: [`Interpolator`](Interpolator.md)[] = `[]`

#### Defined in

math/TimeInterpolator.ts:241

___

### complete

• **complete**: `boolean` = `false`

#### Defined in

math/TimeInterpolator.ts:246

___

### onComplete

• **onComplete**: `Function`

#### Defined in

math/TimeInterpolator.ts:251

___

### onProgress

• **onProgress**: `Function`

#### Defined in

math/TimeInterpolator.ts:256

___

### target

• **target**: `any`

#### Defined in

math/TimeInterpolator.ts:261

___

### property

• **property**: `any`

#### Defined in

math/TimeInterpolator.ts:266

___

### targetProperty

• **targetProperty**: `any`

#### Defined in

math/TimeInterpolator.ts:271

___

### durtion

• **durtion**: `number`

#### Defined in

math/TimeInterpolator.ts:276

___

### interpolatorEnum

• **interpolatorEnum**: [`InterpolatorEnum`](../enums/InterpolatorEnum.md)

#### Defined in

math/TimeInterpolator.ts:281

___

### delayTime

• **delayTime**: `number` = `0`

#### Defined in

math/TimeInterpolator.ts:286

## Methods

### to

▸ **to**(`target`, `property`, `durtion`, `interpolatorEnum?`): [`Interpolator`](Interpolator.md)

Creates an animation from the current property to the specified target property.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `target` | `any` | `undefined` | Objects that need to be animated |
| `property` | `any` | `undefined` | Animation parameter |
| `durtion` | `number` | `undefined` | Animation duration, usually seconds |
| `interpolatorEnum` | [`InterpolatorEnum`](../enums/InterpolatorEnum.md) | `InterpolatorEnum.AccelerateInterpolator` | Interpolator type |

#### Returns

[`Interpolator`](Interpolator.md)

#### Defined in

math/TimeInterpolator.ts:300

___

### tick

▸ **tick**(`delta`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `delta` | `number` |

#### Returns

`void`

#### Defined in

math/TimeInterpolator.ts:326

___

### remove

▸ **remove**(`interpolator`, `dispose?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `interpolator` | [`Interpolator`](Interpolator.md) |
| `dispose?` | `boolean` |

#### Returns

`void`

#### Defined in

math/TimeInterpolator.ts:340

___

### removeList

▸ **removeList**(`interpolators`, `dispose?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `interpolators` | [`Interpolator`](Interpolator.md)[] |
| `dispose?` | `boolean` |

#### Returns

`void`

#### Defined in

math/TimeInterpolator.ts:347

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Defined in

math/TimeInterpolator.ts:356

___

### tick

▸ **tick**(`delta`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `delta` | `number` |

#### Returns

`void`

#### Defined in

math/TimeInterpolator.ts:379

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Defined in

math/TimeInterpolator.ts:413
