[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / QuadAABB

# Class: QuadAABB

## Table of contents

### Constructors

- [constructor](QuadAABB.md#constructor)

### Properties

- [minPosX](QuadAABB.md#minposx)
- [minPosY](QuadAABB.md#minposy)
- [maxPosX](QuadAABB.md#maxposx)
- [maxPosY](QuadAABB.md#maxposy)
- [testID](QuadAABB.md#testid)
- [points](QuadAABB.md#points)

### Accessors

- [radius](QuadAABB.md#radius)
- [sideX](QuadAABB.md#sidex)
- [sideY](QuadAABB.md#sidey)
- [centreX](QuadAABB.md#centrex)
- [centreY](QuadAABB.md#centrey)

### Methods

- [setAABox](QuadAABB.md#setaabox)
- [setOffset](QuadAABB.md#setoffset)
- [setContainRect](QuadAABB.md#setcontainrect)
- [clear](QuadAABB.md#clear)
- [addPoint](QuadAABB.md#addpoint)
- [clone](QuadAABB.md#clone)
- [overlapTest](QuadAABB.md#overlaptest)
- [isPointInside](QuadAABB.md#ispointinside)
- [isIntersectLineSegment](QuadAABB.md#isintersectlinesegment)

## Constructors

### constructor

• **new QuadAABB**(): [`QuadAABB`](QuadAABB.md)

#### Returns

[`QuadAABB`](QuadAABB.md)

#### Defined in

core/tree/quad/QuadAABB.ts:20

## Properties

### minPosX

• **minPosX**: `number` = `0`

#### Defined in

core/tree/quad/QuadAABB.ts:4

___

### minPosY

• **minPosY**: `number` = `0`

#### Defined in

core/tree/quad/QuadAABB.ts:6

___

### maxPosX

• **maxPosX**: `number` = `0`

#### Defined in

core/tree/quad/QuadAABB.ts:8

___

### maxPosY

• **maxPosY**: `number` = `0`

#### Defined in

core/tree/quad/QuadAABB.ts:10

___

### testID

• **testID**: `number` = `0`

#### Defined in

core/tree/quad/QuadAABB.ts:12

___

### points

• **points**: [`Vector3`](Vector3.md)[]

#### Defined in

core/tree/quad/QuadAABB.ts:14

## Accessors

### radius

• `get` **radius**(): `number`

#### Returns

`number`

#### Defined in

core/tree/quad/QuadAABB.ts:85

___

### sideX

• `get` **sideX**(): `number`

#### Returns

`number`

#### Defined in

core/tree/quad/QuadAABB.ts:92

___

### sideY

• `get` **sideY**(): `number`

#### Returns

`number`

#### Defined in

core/tree/quad/QuadAABB.ts:96

___

### centreX

• `get` **centreX**(): `number`

#### Returns

`number`

#### Defined in

core/tree/quad/QuadAABB.ts:100

___

### centreY

• `get` **centreY**(): `number`

#### Returns

`number`

#### Defined in

core/tree/quad/QuadAABB.ts:104

## Methods

### setAABox

▸ **setAABox**(`cx`, `cy`, `sideX`, `sideY`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cx` | `number` |
| `cy` | `number` |
| `sideX` | `number` |
| `sideY` | `number` |

#### Returns

`void`

#### Defined in

core/tree/quad/QuadAABB.ts:26

___

### setOffset

▸ **setOffset**(`vec`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vec` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

core/tree/quad/QuadAABB.ts:35

___

### setContainRect

▸ **setContainRect**(`minX`, `minY`, `maxX`, `maxY`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `minX` | `number` |
| `minY` | `number` |
| `maxX` | `number` |
| `maxY` | `number` |

#### Returns

`void`

#### Defined in

core/tree/quad/QuadAABB.ts:45

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

core/tree/quad/QuadAABB.ts:57

___

### addPoint

▸ **addPoint**(`pos`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pos` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

core/tree/quad/QuadAABB.ts:66

___

### clone

▸ **clone**(): [`QuadAABB`](QuadAABB.md)

#### Returns

[`QuadAABB`](QuadAABB.md)

#### Defined in

core/tree/quad/QuadAABB.ts:77

___

### overlapTest

▸ **overlapTest**(`box`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `box` | [`QuadAABB`](QuadAABB.md) |

#### Returns

`boolean`

#### Defined in

core/tree/quad/QuadAABB.ts:108

___

### isPointInside

▸ **isPointInside**(`pos`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pos` | [`Vector3`](Vector3.md) |

#### Returns

`boolean`

#### Defined in

core/tree/quad/QuadAABB.ts:117

___

### isIntersectLineSegment

▸ **isIntersectLineSegment**(`p1x`, `p1y`, `p2x`, `p2y`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1x` | `number` |
| `p1y` | `number` |
| `p2x` | `number` |
| `p2y` | `number` |

#### Returns

`boolean`

#### Defined in

core/tree/quad/QuadAABB.ts:126
