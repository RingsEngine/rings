[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / BoundingBox

# Class: BoundingBox

## Implements

- [`IBound`](../interfaces/IBound.md)

## Table of contents

### Constructors

- [constructor](BoundingBox.md#constructor)

### Properties

- [center](BoundingBox.md#center)
- [extents](BoundingBox.md#extents)
- [max](BoundingBox.md#max)
- [min](BoundingBox.md#min)
- [size](BoundingBox.md#size)

### Methods

- [makeEmpty](BoundingBox.md#makeempty)
- [setFromMinMax](BoundingBox.md#setfromminmax)
- [setFromCenterAndSize](BoundingBox.md#setfromcenterandsize)
- [inFrustum](BoundingBox.md#infrustum)
- [merge](BoundingBox.md#merge)
- [intersects](BoundingBox.md#intersects)
- [intersectsSphere](BoundingBox.md#intersectssphere)
- [intersectsBox](BoundingBox.md#intersectsbox)
- [equals](BoundingBox.md#equals)
- [expandByPoint](BoundingBox.md#expandbypoint)
- [fromPoints](BoundingBox.md#frompoints)
- [calculateTransform](BoundingBox.md#calculatetransform)
- [clone](BoundingBox.md#clone)
- [intersectsRay](BoundingBox.md#intersectsray)
- [containsPoint](BoundingBox.md#containspoint)
- [containsBox](BoundingBox.md#containsbox)
- [updateBound](BoundingBox.md#updatebound)
- [destroy](BoundingBox.md#destroy)

## Constructors

### constructor

• **new BoundingBox**(`center?`, `size?`): [`BoundingBox`](BoundingBox.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `center?` | [`Vector3`](Vector3.md) |
| `size?` | [`Vector3`](Vector3.md) |

#### Returns

[`BoundingBox`](BoundingBox.md)

#### Defined in

core/bound/BoundingBox.ts:19

## Properties

### center

• **center**: [`Vector3`](Vector3.md)

#### Implementation of

[IBound](../interfaces/IBound.md).[center](../interfaces/IBound.md#center)

#### Defined in

core/bound/BoundingBox.ts:8

___

### extents

• **extents**: [`Vector3`](Vector3.md)

#### Implementation of

[IBound](../interfaces/IBound.md).[extents](../interfaces/IBound.md#extents)

#### Defined in

core/bound/BoundingBox.ts:9

___

### max

• **max**: [`Vector3`](Vector3.md)

#### Implementation of

[IBound](../interfaces/IBound.md).[max](../interfaces/IBound.md#max)

#### Defined in

core/bound/BoundingBox.ts:10

___

### min

• **min**: [`Vector3`](Vector3.md)

#### Implementation of

[IBound](../interfaces/IBound.md).[min](../interfaces/IBound.md#min)

#### Defined in

core/bound/BoundingBox.ts:11

___

### size

• **size**: [`Vector3`](Vector3.md)

#### Implementation of

[IBound](../interfaces/IBound.md).[size](../interfaces/IBound.md#size)

#### Defined in

core/bound/BoundingBox.ts:12

## Methods

### makeEmpty

▸ **makeEmpty**(): `this`

#### Returns

`this`

#### Defined in

core/bound/BoundingBox.ts:24

___

### setFromMinMax

▸ **setFromMinMax**(`min`, `max`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | [`Vector3`](Vector3.md) |
| `max` | [`Vector3`](Vector3.md) |

#### Returns

`this`

#### Defined in

core/bound/BoundingBox.ts:28

___

### setFromCenterAndSize

▸ **setFromCenterAndSize**(`center`, `size`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `center` | [`Vector3`](Vector3.md) |
| `size` | [`Vector3`](Vector3.md) |

#### Returns

`this`

#### Implementation of

[IBound](../interfaces/IBound.md).[setFromCenterAndSize](../interfaces/IBound.md#setfromcenterandsize)

#### Defined in

core/bound/BoundingBox.ts:45

___

### inFrustum

▸ **inFrustum**(`obj`, `frustum`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`Object3D`](Object3D.md) |
| `frustum` | [`Frustum`](Frustum.md) |

#### Returns

`number`

#### Implementation of

[IBound](../interfaces/IBound.md).[inFrustum](../interfaces/IBound.md#infrustum)

#### Defined in

core/bound/BoundingBox.ts:54

___

### merge

▸ **merge**(`bound`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bound` | [`BoundingBox`](BoundingBox.md) |

#### Returns

`void`

#### Implementation of

[IBound](../interfaces/IBound.md).[merge](../interfaces/IBound.md#merge)

#### Defined in

core/bound/BoundingBox.ts:57

___

### intersects

▸ **intersects**(`bounds`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | [`IBound`](../interfaces/IBound.md) |

#### Returns

`boolean`

#### Defined in

core/bound/BoundingBox.ts:78

___

### intersectsSphere

▸ **intersectsSphere**(`sphere`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sphere` | [`IBound`](../interfaces/IBound.md) |

#### Returns

`boolean`

#### Defined in

core/bound/BoundingBox.ts:88

___

### intersectsBox

▸ **intersectsBox**(`box`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `box` | [`IBound`](../interfaces/IBound.md) |

#### Returns

`boolean`

#### Defined in

core/bound/BoundingBox.ts:98

___

### equals

▸ **equals**(`bounds`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | [`IBound`](../interfaces/IBound.md) |

#### Returns

`boolean`

#### Defined in

core/bound/BoundingBox.ts:108

___

### expandByPoint

▸ **expandByPoint**(`point`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

core/bound/BoundingBox.ts:113

___

### fromPoints

▸ **fromPoints**(`points`): [`BoundingBox`](BoundingBox.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `points` | [`Vector3`](Vector3.md)[] |

#### Returns

[`BoundingBox`](BoundingBox.md)

#### Defined in

core/bound/BoundingBox.ts:133

___

### calculateTransform

▸ **calculateTransform**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`Object3D`](Object3D.md) |

#### Returns

`void`

#### Implementation of

[IBound](../interfaces/IBound.md).[calculateTransform](../interfaces/IBound.md#calculatetransform)

#### Defined in

core/bound/BoundingBox.ts:140

___

### clone

▸ **clone**(): [`IBound`](../interfaces/IBound.md)

#### Returns

[`IBound`](../interfaces/IBound.md)

#### Implementation of

[IBound](../interfaces/IBound.md).[clone](../interfaces/IBound.md#clone)

#### Defined in

core/bound/BoundingBox.ts:141

___

### intersectsRay

▸ **intersectsRay**(`ray`, `point`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ray` | [`Ray`](Ray.md) |
| `point` | [`Vector3`](Vector3.md) |

#### Returns

`boolean`

#### Implementation of

[IBound](../interfaces/IBound.md).[intersectsRay](../interfaces/IBound.md#intersectsray)

#### Defined in

core/bound/BoundingBox.ts:148

___

### containsPoint

▸ **containsPoint**(`point`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`Vector3`](Vector3.md) |

#### Returns

`boolean`

#### Implementation of

[IBound](../interfaces/IBound.md).[containsPoint](../interfaces/IBound.md#containspoint)

#### Defined in

core/bound/BoundingBox.ts:151

___

### containsBox

▸ **containsBox**(`box`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `box` | [`BoundingBox`](BoundingBox.md) |

#### Returns

`boolean`

#### Defined in

core/bound/BoundingBox.ts:161

___

### updateBound

▸ **updateBound**(): `void`

#### Returns

`void`

#### Implementation of

[IBound](../interfaces/IBound.md).[updateBound](../interfaces/IBound.md#updatebound)

#### Defined in

core/bound/BoundingBox.ts:173

___

### destroy

▸ **destroy**(`force?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `force?` | `boolean` |

#### Returns

`void`

#### Defined in

core/bound/BoundingBox.ts:174
