[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / Line

# Class: Line

## Table of contents

### Constructors

- [constructor](Line.md#constructor)

### Properties

- [cacluteLine0](Line.md#cacluteline0)
- [cacluteLine1](Line.md#cacluteline1)
- [start](Line.md#start)
- [end](Line.md#end)
- [color](Line.md#color)

### Methods

- [set](Line.md#set)
- [getCenter](Line.md#getcenter)
- [inverse](Line.md#inverse)
- [equals](Line.md#equals)
- [toArray](Line.md#toarray)
- [getLines](Line.md#getlines)
- [intersection](Line.md#intersection)
- [getDirection](Line.md#getdirection)
- [copyFrom](Line.md#copyfrom)
- [IsEqual](Line.md#isequal)
- [squreDistanceSegmentToSegment](Line.md#squredistancesegmenttosegment)
- [isNear](Line.md#isnear)

## Constructors

### constructor

• **new Line**(`start?`, `end?`): [`Line`](Line.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `start?` | [`Vector3`](Vector3.md) |
| `end?` | [`Vector3`](Vector3.md) |

#### Returns

[`Line`](Line.md)

#### Defined in

math/Line.ts:31

## Properties

### cacluteLine0

▪ `Static` **cacluteLine0**: [`Line`](Line.md)

#### Defined in

math/Line.ts:23

___

### cacluteLine1

▪ `Static` **cacluteLine1**: [`Line`](Line.md)

#### Defined in

math/Line.ts:24

___

### start

• **start**: [`Vector3`](Vector3.md)

#### Defined in

math/Line.ts:25

___

### end

• **end**: [`Vector3`](Vector3.md)

#### Defined in

math/Line.ts:26

___

### color

• **color**: [`Color`](Color.md)

#### Defined in

math/Line.ts:27

## Methods

### set

▸ **set**(`start`, `end`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `start` | [`Vector3`](Vector3.md) |
| `end` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

math/Line.ts:36

___

### getCenter

▸ **getCenter**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

math/Line.ts:41

___

### inverse

▸ **inverse**(): `void`

#### Returns

`void`

#### Defined in

math/Line.ts:49

___

### equals

▸ **equals**(`l`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `l` | [`Line`](Line.md) |

#### Returns

`boolean`

#### Defined in

math/Line.ts:55

___

### toArray

▸ **toArray**(): `number`[]

#### Returns

`number`[]

#### Defined in

math/Line.ts:64

___

### getLines

▸ **getLines**(`ps`): [`Line`](Line.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `ps` | [`Vector3`](Vector3.md)[] |

#### Returns

[`Line`](Line.md)[]

#### Defined in

math/Line.ts:75

___

### intersection

▸ **intersection**(`other`, `pIntersectPoint?`): [`LineClassification`](../enums/LineClassification.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `other` | [`Line`](Line.md) | `undefined` |
| `pIntersectPoint` | [`Vector3`](Vector3.md) | `null` |

#### Returns

[`LineClassification`](../enums/LineClassification.md)

#### Defined in

math/Line.ts:87

___

### getDirection

▸ **getDirection**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

math/Line.ts:132

___

### copyFrom

▸ **copyFrom**(`line`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `line` | [`Line`](Line.md) |

#### Returns

`void`

#### Defined in

math/Line.ts:138

___

### IsEqual

▸ **IsEqual**(`d1`, `d2`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `d1` | `any` |
| `d2` | `any` |

#### Returns

`boolean`

#### Defined in

math/Line.ts:145

___

### squreDistanceSegmentToSegment

▸ **squreDistanceSegmentToSegment**(`lineA`, `lineB`, `mat?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lineA` | [`Line`](Line.md) |
| `lineB` | [`Line`](Line.md) |
| `mat?` | [`Matrix4`](Matrix4.md) |

#### Returns

`number`

#### Defined in

math/Line.ts:150

___

### isNear

▸ **isNear**(`ray`, `maxDistance?`, `mat?`): `boolean`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `ray` | [`Ray`](Ray.md) | `undefined` |
| `maxDistance` | `number` | `0` |
| `mat?` | [`Matrix4`](Matrix4.md) | `undefined` |

#### Returns

`boolean`

#### Defined in

math/Line.ts:254
