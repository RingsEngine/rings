[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / Navi3DRouter

# Class: Navi3DRouter

## Table of contents

### Constructors

- [constructor](Navi3DRouter.md#constructor)

### Properties

- [RAY\_1](Navi3DRouter.md#ray_1)
- [RAY\_2](Navi3DRouter.md#ray_2)
- [TEST\_RAY](Navi3DRouter.md#test_ray)
- [TEST\_RAY\_1](Navi3DRouter.md#test_ray_1)
- [TEST\_RAY\_2](Navi3DRouter.md#test_ray_2)
- [endPoint](Navi3DRouter.md#endpoint)
- [curPoint](Navi3DRouter.md#curpoint)
- [rayA](Navi3DRouter.md#raya)
- [rayB](Navi3DRouter.md#rayb)
- [rayAPoint](Navi3DRouter.md#rayapoint)
- [rayBPoint](Navi3DRouter.md#raybpoint)
- [cornerPoint](Navi3DRouter.md#cornerpoint)
- [cornerEdge](Navi3DRouter.md#corneredge)

### Methods

- [continuePass](Navi3DRouter.md#continuepass)
- [passEdge](Navi3DRouter.md#passedge)
- [calcCrossEdge](Navi3DRouter.md#calccrossedge)
- [calcCrossPoint](Navi3DRouter.md#calccrosspoint)
- [calcCrossPointOut](Navi3DRouter.md#calccrosspointout)
- [hasCrossPoint](Navi3DRouter.md#hascrosspoint)
- [resetData](Navi3DRouter.md#resetdata)

## Constructors

### constructor

• **new Navi3DRouter**(): [`Navi3DRouter`](Navi3DRouter.md)

#### Returns

[`Navi3DRouter`](Navi3DRouter.md)

## Properties

### RAY\_1

▪ `Static` **RAY\_1**: [`Vector3`](Vector3.md)

#### Defined in

math/navigation/Navi3DRouter.ts:18

___

### RAY\_2

▪ `Static` **RAY\_2**: [`Vector3`](Vector3.md)

#### Defined in

math/navigation/Navi3DRouter.ts:20

___

### TEST\_RAY

▪ `Static` **TEST\_RAY**: [`Vector3`](Vector3.md)

#### Defined in

math/navigation/Navi3DRouter.ts:22

___

### TEST\_RAY\_1

▪ `Static` **TEST\_RAY\_1**: [`Vector3`](Vector3.md)

#### Defined in

math/navigation/Navi3DRouter.ts:24

___

### TEST\_RAY\_2

▪ `Static` **TEST\_RAY\_2**: [`Vector3`](Vector3.md)

#### Defined in

math/navigation/Navi3DRouter.ts:26

___

### endPoint

• **endPoint**: [`Vector3`](Vector3.md)

#### Defined in

math/navigation/Navi3DRouter.ts:6

___

### curPoint

• **curPoint**: [`Vector3`](Vector3.md)

#### Defined in

math/navigation/Navi3DRouter.ts:8

___

### rayA

• **rayA**: [`Vector3`](Vector3.md)

#### Defined in

math/navigation/Navi3DRouter.ts:10

___

### rayB

• **rayB**: [`Vector3`](Vector3.md)

#### Defined in

math/navigation/Navi3DRouter.ts:12

___

### rayAPoint

• **rayAPoint**: [`Navi3DPoint`](Navi3DPoint.md)

#### Defined in

math/navigation/Navi3DRouter.ts:14

___

### rayBPoint

• **rayBPoint**: [`Navi3DPoint`](Navi3DPoint.md)

#### Defined in

math/navigation/Navi3DRouter.ts:16

___

### cornerPoint

• **cornerPoint**: [`Navi3DPoint`](Navi3DPoint.md)

#### Defined in

math/navigation/Navi3DRouter.ts:32

___

### cornerEdge

• **cornerEdge**: [`Navi3DEdge`](Navi3DEdge.md)

#### Defined in

math/navigation/Navi3DRouter.ts:34

## Methods

### continuePass

▸ **continuePass**(`fromPt`, `endPt`, `fromEdge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fromPt` | [`Vector3`](Vector3.md) |
| `endPt` | [`Vector3`](Vector3.md) |
| `fromEdge` | [`Navi3DEdge`](Navi3DEdge.md) |

#### Returns

`void`

#### Defined in

math/navigation/Navi3DRouter.ts:36

___

### passEdge

▸ **passEdge**(`commonEdge`, `nextCommonEdge`, `targetPoint`, `lastEdge`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `commonEdge` | [`Navi3DEdge`](Navi3DEdge.md) |
| `nextCommonEdge` | [`Navi3DEdge`](Navi3DEdge.md) |
| `targetPoint` | [`Vector3`](Vector3.md) |
| `lastEdge` | `boolean` |

#### Returns

`boolean`

#### Defined in

math/navigation/Navi3DRouter.ts:47

___

### calcCrossEdge

▸ **calcCrossEdge**(`_edge`, `linePoint`, `lineDirection`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_edge` | [`Navi3DEdge`](Navi3DEdge.md) |
| `linePoint` | [`Vector3`](Vector3.md) |
| `lineDirection` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

math/navigation/Navi3DRouter.ts:179

___

### calcCrossPoint

▸ **calcCrossPoint**(`segmentPt1`, `segmentPt2`, `linePoint`, `lineDirection`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `segmentPt1` | [`Vector3`](Vector3.md) |
| `segmentPt2` | [`Vector3`](Vector3.md) |
| `linePoint` | [`Vector3`](Vector3.md) |
| `lineDirection` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

math/navigation/Navi3DRouter.ts:192

___

### calcCrossPointOut

▸ **calcCrossPointOut**(`segmentPt1`, `segmentPt2`, `linePoint`, `lineDirection`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `segmentPt1` | [`Vector3`](Vector3.md) |
| `segmentPt2` | [`Vector3`](Vector3.md) |
| `linePoint` | [`Vector3`](Vector3.md) |
| `lineDirection` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

math/navigation/Navi3DRouter.ts:222

___

### hasCrossPoint

▸ **hasCrossPoint**(`segmentPt1`, `segmentPt2`, `linePoint`, `lineDirection`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `segmentPt1` | [`Vector3`](Vector3.md) |
| `segmentPt2` | [`Vector3`](Vector3.md) |
| `linePoint` | [`Vector3`](Vector3.md) |
| `lineDirection` | [`Vector3`](Vector3.md) |

#### Returns

`boolean`

#### Defined in

math/navigation/Navi3DRouter.ts:245

___

### resetData

▸ **resetData**(): `void`

#### Returns

`void`

#### Defined in

math/navigation/Navi3DRouter.ts:284
