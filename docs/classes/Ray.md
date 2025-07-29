[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / Ray

# Class: Ray

## Table of contents

### Constructors

- [constructor](Ray.md#constructor)

### Properties

- [origin](Ray.md#origin)
- [length](Ray.md#length)

### Accessors

- [direction](Ray.md#direction)

### Methods

- [clone](Ray.md#clone)
- [intersectBox](Ray.md#intersectbox)
- [pointAt](Ray.md#pointat)
- [copy](Ray.md#copy)
- [setApproxDirection](Ray.md#setapproxdirection)
- [setOrigin](Ray.md#setorigin)
- [getOrigin](Ray.md#getorigin)
- [getPoint](Ray.md#getpoint)
- [sqrDistToPoint](Ray.md#sqrdisttopoint)
- [applyMatrix](Ray.md#applymatrix)
- [pointInTriangle](Ray.md#pointintriangle)
- [intersectTriangle](Ray.md#intersecttriangle)
- [intersectSphere](Ray.md#intersectsphere)
- [intersectionSegment](Ray.md#intersectionsegment)

## Constructors

### constructor

• **new Ray**(`origin?`, `dir?`): [`Ray`](Ray.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `origin?` | [`Vector3`](Vector3.md) |
| `dir?` | [`Vector3`](Vector3.md) |

#### Returns

[`Ray`](Ray.md)

#### Defined in

math/Ray.ts:15

## Properties

### origin

• **origin**: [`Vector3`](Vector3.md)

#### Defined in

math/Ray.ts:8

___

### length

• **length**: `number` = `Number.MAX_VALUE`

#### Defined in

math/Ray.ts:9

## Accessors

### direction

• `get` **direction**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

math/Ray.ts:21

• `set` **direction**(`dir`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dir` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

math/Ray.ts:25

## Methods

### clone

▸ **clone**(): [`Ray`](Ray.md)

#### Returns

[`Ray`](Ray.md)

#### Defined in

math/Ray.ts:30

___

### intersectBox

▸ **intersectBox**(`box`, `target?`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `box` | [`IBound`](../interfaces/IBound.md) |
| `target?` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

math/Ray.ts:34

___

### pointAt

▸ **pointAt**(`t`, `target?`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `number` |
| `target?` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

math/Ray.ts:79

___

### copy

▸ **copy**(`src`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | [`Ray`](Ray.md) |

#### Returns

`this`

#### Defined in

math/Ray.ts:87

___

### setApproxDirection

▸ **setApproxDirection**(`dir`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dir` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

math/Ray.ts:95

___

### setOrigin

▸ **setOrigin**(`origin`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `origin` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

math/Ray.ts:99

___

### getOrigin

▸ **getOrigin**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

math/Ray.ts:103

___

### getPoint

▸ **getPoint**(`t`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `number` |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

math/Ray.ts:107

___

### sqrDistToPoint

▸ **sqrDistToPoint**(`P`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `P` | [`Vector3`](Vector3.md) |

#### Returns

`number`

#### Defined in

math/Ray.ts:112

___

### applyMatrix

▸ **applyMatrix**(`mat4`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mat4` | [`Matrix4`](Matrix4.md) |

#### Returns

`void`

#### Defined in

math/Ray.ts:124

___

### pointInTriangle

▸ **pointInTriangle**(`P`, `A`, `B`, `C`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `P` | [`Vector3`](Vector3.md) |
| `A` | [`Vector3`](Vector3.md) |
| `B` | [`Vector3`](Vector3.md) |
| `C` | [`Vector3`](Vector3.md) |

#### Returns

`boolean`

#### Defined in

math/Ray.ts:133

___

### intersectTriangle

▸ **intersectTriangle**(`orig`, `dir`, `face`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `orig` | [`Vector3`](Vector3.md) |
| `dir` | [`Vector3`](Vector3.md) |
| `face` | [`Triangle`](Triangle.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

math/Ray.ts:166

___

### intersectSphere

▸ **intersectSphere**(`o`, `dir`, `center`, `radius`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | [`Vector3`](Vector3.md) |
| `dir` | [`Vector3`](Vector3.md) |
| `center` | [`Vector3`](Vector3.md) |
| `radius` | `number` |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

math/Ray.ts:225

___

### intersectionSegment

▸ **intersectionSegment**(`sega`, `segb`, `threshold`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sega` | [`Vector3`](Vector3.md) |
| `segb` | [`Vector3`](Vector3.md) |
| `threshold` | `number` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `out` | [`Vector3`](Vector3.md) |
| `length` | `number` |

#### Defined in

math/Ray.ts:253
