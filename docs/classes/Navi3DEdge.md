[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / Navi3DEdge

# Class: Navi3DEdge

## Table of contents

### Constructors

- [constructor](Navi3DEdge.md#constructor)

### Properties

- [crossPoint](Navi3DEdge.md#crosspoint)
- [fatPointA](Navi3DEdge.md#fatpointa)
- [fatPointB](Navi3DEdge.md#fatpointb)

### Accessors

- [size](Navi3DEdge.md#size)
- [triangleOwners](Navi3DEdge.md#triangleowners)
- [centerPoint](Navi3DEdge.md#centerpoint)
- [pointA](Navi3DEdge.md#pointa)
- [pointB](Navi3DEdge.md#pointb)
- [walkAble](Navi3DEdge.md#walkable)

### Methods

- [initFatPoints](Navi3DEdge.md#initfatpoints)
- [getFatPoint](Navi3DEdge.md#getfatpoint)
- [getAnotherFatPoint](Navi3DEdge.md#getanotherfatpoint)
- [getAnotherPoint](Navi3DEdge.md#getanotherpoint)
- [containsPoint](Navi3DEdge.md#containspoint)
- [addTriangleOwners](Navi3DEdge.md#addtriangleowners)
- [getPublicPoint](Navi3DEdge.md#getpublicpoint)
- [getEqualPoint](Navi3DEdge.md#getequalpoint)
- [testMask](Navi3DEdge.md#testmask)

## Constructors

### constructor

• **new Navi3DEdge**(`point0`, `point1`): [`Navi3DEdge`](Navi3DEdge.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `point0` | [`Navi3DPoint`](Navi3DPoint.md) |
| `point1` | [`Navi3DPoint`](Navi3DPoint.md) |

#### Returns

[`Navi3DEdge`](Navi3DEdge.md)

#### Defined in

math/navigation/Navi3DEdge.ts:25

## Properties

### crossPoint

• **crossPoint**: [`Vector3`](Vector3.md)

#### Defined in

math/navigation/Navi3DEdge.ts:17

___

### fatPointA

• **fatPointA**: [`Navi3DPointFat`](Navi3DPointFat.md)

#### Defined in

math/navigation/Navi3DEdge.ts:19

___

### fatPointB

• **fatPointB**: [`Navi3DPointFat`](Navi3DPointFat.md)

#### Defined in

math/navigation/Navi3DEdge.ts:21

## Accessors

### size

• `get` **size**(): `Number`

#### Returns

`Number`

#### Defined in

math/navigation/Navi3DEdge.ts:48

___

### triangleOwners

• `get` **triangleOwners**(): [`Navi3DTriangle`](Navi3DTriangle.md)[]

#### Returns

[`Navi3DTriangle`](Navi3DTriangle.md)[]

#### Defined in

math/navigation/Navi3DEdge.ts:52

___

### centerPoint

• `get` **centerPoint**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

math/navigation/Navi3DEdge.ts:56

___

### pointA

• `get` **pointA**(): [`Navi3DPoint`](Navi3DPoint.md)

#### Returns

[`Navi3DPoint`](Navi3DPoint.md)

#### Defined in

math/navigation/Navi3DEdge.ts:129

___

### pointB

• `get` **pointB**(): [`Navi3DPoint`](Navi3DPoint.md)

#### Returns

[`Navi3DPoint`](Navi3DPoint.md)

#### Defined in

math/navigation/Navi3DEdge.ts:133

___

### walkAble

• `get` **walkAble**(): `boolean`

#### Returns

`boolean`

#### Defined in

math/navigation/Navi3DEdge.ts:137

## Methods

### initFatPoints

▸ **initFatPoints**(`radius`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `radius` | `number` |

#### Returns

`void`

#### Defined in

math/navigation/Navi3DEdge.ts:60

___

### getFatPoint

▸ **getFatPoint**(`pt`): [`Navi3DPointFat`](Navi3DPointFat.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pt` | [`Navi3DPoint`](Navi3DPoint.md) |

#### Returns

[`Navi3DPointFat`](Navi3DPointFat.md)

#### Defined in

math/navigation/Navi3DEdge.ts:84

___

### getAnotherFatPoint

▸ **getAnotherFatPoint**(`pt`): [`Navi3DPointFat`](Navi3DPointFat.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pt` | [`Navi3DPoint`](Navi3DPoint.md) |

#### Returns

[`Navi3DPointFat`](Navi3DPointFat.md)

#### Defined in

math/navigation/Navi3DEdge.ts:89

___

### getAnotherPoint

▸ **getAnotherPoint**(`pt`): [`Navi3DPoint`](Navi3DPoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pt` | [`Navi3DPoint`](Navi3DPoint.md) |

#### Returns

[`Navi3DPoint`](Navi3DPoint.md)

#### Defined in

math/navigation/Navi3DEdge.ts:94

___

### containsPoint

▸ **containsPoint**(`pt`): [`Navi3DPoint`](Navi3DPoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pt` | [`Vector3`](Vector3.md) |

#### Returns

[`Navi3DPoint`](Navi3DPoint.md)

#### Defined in

math/navigation/Navi3DEdge.ts:99

___

### addTriangleOwners

▸ **addTriangleOwners**(`triangle`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `triangle` | [`Navi3DTriangle`](Navi3DTriangle.md) |

#### Returns

`void`

#### Defined in

math/navigation/Navi3DEdge.ts:105

___

### getPublicPoint

▸ **getPublicPoint**(`edge`): [`Navi3DPoint`](Navi3DPoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `edge` | [`Navi3DEdge`](Navi3DEdge.md) |

#### Returns

[`Navi3DPoint`](Navi3DPoint.md)

#### Defined in

math/navigation/Navi3DEdge.ts:114

___

### getEqualPoint

▸ **getEqualPoint**(`p`): [`Navi3DPoint`](Navi3DPoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | [`Vector3`](Vector3.md) |

#### Returns

[`Navi3DPoint`](Navi3DPoint.md)

#### Defined in

math/navigation/Navi3DEdge.ts:123

___

### testMask

▸ **testMask**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`boolean`

#### Defined in

math/navigation/Navi3DEdge.ts:143
