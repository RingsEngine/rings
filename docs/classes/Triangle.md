[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / Triangle

# Class: Triangle

## Table of contents

### Constructors

- [constructor](Triangle.md#constructor)

### Properties

- [ID](Triangle.md#id)
- [v1](Triangle.md#v1)
- [v2](Triangle.md#v2)
- [v3](Triangle.md#v3)
- [u1](Triangle.md#u1)
- [u2](Triangle.md#u2)
- [u3](Triangle.md#u3)
- [n1](Triangle.md#n1)
- [n2](Triangle.md#n2)
- [n3](Triangle.md#n3)
- [t0](Triangle.md#t0)
- [t](Triangle.md#t)
- [u](Triangle.md#u)
- [v](Triangle.md#v)
- [min](Triangle.md#min)
- [max](Triangle.md#max)
- [id](Triangle.md#id-1)

### Methods

- [set](Triangle.md#set)
- [getNormal](Triangle.md#getnormal)
- [turnBack](Triangle.md#turnback)
- [getLines](Triangle.md#getlines)
- [equals](Triangle.md#equals)
- [getCenter](Triangle.md#getcenter)
- [intersects](Triangle.md#intersects)
- [sign2D](Triangle.md#sign2d)
- [pointInTriangle2D](Triangle.md#pointintriangle2d)
- [toArray](Triangle.md#toarray)

## Constructors

### constructor

• **new Triangle**(`v1?`, `v2?`, `v3?`): [`Triangle`](Triangle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v1?` | [`Vector3`](Vector3.md) |
| `v2?` | [`Vector3`](Vector3.md) |
| `v3?` | [`Vector3`](Vector3.md) |

#### Returns

[`Triangle`](Triangle.md)

#### Defined in

math/Triangle.ts:28

## Properties

### ID

▪ `Static` **ID**: `number` = `-1`

#### Defined in

math/Triangle.ts:6

___

### v1

• **v1**: [`Vector3`](Vector3.md)

#### Defined in

math/Triangle.ts:7

___

### v2

• **v2**: [`Vector3`](Vector3.md)

#### Defined in

math/Triangle.ts:8

___

### v3

• **v3**: [`Vector3`](Vector3.md)

#### Defined in

math/Triangle.ts:9

___

### u1

• **u1**: [`Vector2`](Vector2.md)

#### Defined in

math/Triangle.ts:11

___

### u2

• **u2**: [`Vector2`](Vector2.md)

#### Defined in

math/Triangle.ts:12

___

### u3

• **u3**: [`Vector2`](Vector2.md)

#### Defined in

math/Triangle.ts:13

___

### n1

• **n1**: [`Vector3`](Vector3.md)

#### Defined in

math/Triangle.ts:15

___

### n2

• **n2**: [`Vector3`](Vector3.md)

#### Defined in

math/Triangle.ts:16

___

### n3

• **n3**: [`Vector3`](Vector3.md)

#### Defined in

math/Triangle.ts:17

___

### t0

• **t0**: `number`

#### Defined in

math/Triangle.ts:19

___

### t

• **t**: `number`

#### Defined in

math/Triangle.ts:20

___

### u

• **u**: `number`

#### Defined in

math/Triangle.ts:21

___

### v

• **v**: `number`

#### Defined in

math/Triangle.ts:22

___

### min

• **min**: [`Vector3`](Vector3.md)

#### Defined in

math/Triangle.ts:24

___

### max

• **max**: [`Vector3`](Vector3.md)

#### Defined in

math/Triangle.ts:25

___

### id

• **id**: `number` = `0`

#### Defined in

math/Triangle.ts:26

## Methods

### set

▸ **set**(`v1`, `v2`, `v3`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v1` | [`Vector3`](Vector3.md) |
| `v2` | [`Vector3`](Vector3.md) |
| `v3` | [`Vector3`](Vector3.md) |

#### Returns

`this`

#### Defined in

math/Triangle.ts:33

___

### getNormal

▸ **getNormal**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

math/Triangle.ts:51

___

### turnBack

▸ **turnBack**(): `void`

#### Returns

`void`

#### Defined in

math/Triangle.ts:64

___

### getLines

▸ **getLines**(): [`Line`](Line.md)[]

#### Returns

[`Line`](Line.md)[]

#### Defined in

math/Triangle.ts:70

___

### equals

▸ **equals**(`t`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | [`Triangle`](Triangle.md) |

#### Returns

`boolean`

#### Defined in

math/Triangle.ts:78

___

### getCenter

▸ **getCenter**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

math/Triangle.ts:92

___

### intersects

▸ **intersects**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Triangle`](Triangle.md) |

#### Returns

`boolean`

#### Defined in

math/Triangle.ts:102

___

### sign2D

▸ **sign2D**(`p1`, `p2`, `p3`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1` | [`Vector3`](Vector3.md) |
| `p2` | [`Vector3`](Vector3.md) |
| `p3` | [`Vector3`](Vector3.md) |

#### Returns

`number`

#### Defined in

math/Triangle.ts:118

___

### pointInTriangle2D

▸ **pointInTriangle2D**(`pt`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pt` | [`Vector3`](Vector3.md) |

#### Returns

`boolean`

#### Defined in

math/Triangle.ts:122

___

### toArray

▸ **toArray**(): `number`[]

#### Returns

`number`[]

#### Defined in

math/Triangle.ts:139
