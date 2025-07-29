[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / BoundingSphere

# Class: BoundingSphere

## Implements

- [`IBound`](../interfaces/IBound.md)

## Table of contents

### Constructors

- [constructor](BoundingSphere.md#constructor)

### Properties

- [center](BoundingSphere.md#center)
- [extents](BoundingSphere.md#extents)
- [max](BoundingSphere.md#max)
- [min](BoundingSphere.md#min)
- [size](BoundingSphere.md#size)
- [tmpVecA](BoundingSphere.md#tmpveca)
- [tmpVecB](BoundingSphere.md#tmpvecb)
- [tmpVecC](BoundingSphere.md#tmpvecc)
- [tmpVecD](BoundingSphere.md#tmpvecd)
- [radius](BoundingSphere.md#radius)
- [diffBetweenPoints](BoundingSphere.md#diffbetweenpoints)
- [owner](BoundingSphere.md#owner)
- [forward](BoundingSphere.md#forward)
- [worldCenter](BoundingSphere.md#worldcenter)
- [worldSize](BoundingSphere.md#worldsize)

### Methods

- [updateBound](BoundingSphere.md#updatebound)
- [containsPoint](BoundingSphere.md#containspoint)
- [intersectsRay](BoundingSphere.md#intersectsray)
- [intersectsBoundingSphere](BoundingSphere.md#intersectsboundingsphere)
- [calculateTransform](BoundingSphere.md#calculatetransform)
- [inFrustum](BoundingSphere.md#infrustum)
- [clone](BoundingSphere.md#clone)
- [update](BoundingSphere.md#update)
- [merge](BoundingSphere.md#merge)
- [setFromCenterAndSize](BoundingSphere.md#setfromcenterandsize)

## Constructors

### constructor

• **new BoundingSphere**(`center?`, `radius?`): [`BoundingSphere`](BoundingSphere.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `center?` | [`Vector3`](Vector3.md) |
| `radius?` | `number` |

#### Returns

[`BoundingSphere`](BoundingSphere.md)

#### Defined in

core/bound/BoundingSphere.ts:25

## Properties

### center

• **center**: [`Vector3`](Vector3.md)

#### Implementation of

[IBound](../interfaces/IBound.md).[center](../interfaces/IBound.md#center)

#### Defined in

core/bound/BoundingSphere.ts:8

___

### extents

• **extents**: [`Vector3`](Vector3.md)

#### Implementation of

[IBound](../interfaces/IBound.md).[extents](../interfaces/IBound.md#extents)

#### Defined in

core/bound/BoundingSphere.ts:9

___

### max

• **max**: [`Vector3`](Vector3.md)

#### Implementation of

[IBound](../interfaces/IBound.md).[max](../interfaces/IBound.md#max)

#### Defined in

core/bound/BoundingSphere.ts:10

___

### min

• **min**: [`Vector3`](Vector3.md)

#### Implementation of

[IBound](../interfaces/IBound.md).[min](../interfaces/IBound.md#min)

#### Defined in

core/bound/BoundingSphere.ts:11

___

### size

• **size**: [`Vector3`](Vector3.md)

#### Implementation of

[IBound](../interfaces/IBound.md).[size](../interfaces/IBound.md#size)

#### Defined in

core/bound/BoundingSphere.ts:12

___

### tmpVecA

• **tmpVecA**: [`Vector3`](Vector3.md)

#### Defined in

core/bound/BoundingSphere.ts:13

___

### tmpVecB

• **tmpVecB**: [`Vector3`](Vector3.md)

#### Defined in

core/bound/BoundingSphere.ts:14

___

### tmpVecC

• **tmpVecC**: [`Vector3`](Vector3.md)

#### Defined in

core/bound/BoundingSphere.ts:15

___

### tmpVecD

• **tmpVecD**: [`Vector3`](Vector3.md)

#### Defined in

core/bound/BoundingSphere.ts:16

___

### radius

• **radius**: `number` = `0`

#### Defined in

core/bound/BoundingSphere.ts:17

___

### diffBetweenPoints

• **diffBetweenPoints**: [`Vector3`](Vector3.md)

#### Defined in

core/bound/BoundingSphere.ts:18

___

### owner

• **owner**: `any`

#### Defined in

core/bound/BoundingSphere.ts:19

___

### forward

• **forward**: [`Vector3`](Vector3.md)

#### Defined in

core/bound/BoundingSphere.ts:20

___

### worldCenter

• **worldCenter**: [`Vector3`](Vector3.md)

#### Defined in

core/bound/BoundingSphere.ts:21

___

### worldSize

• **worldSize**: [`Vector3`](Vector3.md)

#### Defined in

core/bound/BoundingSphere.ts:22

## Methods

### updateBound

▸ **updateBound**(): `void`

#### Returns

`void`

#### Implementation of

[IBound](../interfaces/IBound.md).[updateBound](../interfaces/IBound.md#updatebound)

#### Defined in

core/bound/BoundingSphere.ts:30

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

core/bound/BoundingSphere.ts:34

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

core/bound/BoundingSphere.ts:40

___

### intersectsBoundingSphere

▸ **intersectsBoundingSphere**(`sphere`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sphere` | [`BoundingSphere`](BoundingSphere.md) |

#### Returns

`boolean`

#### Defined in

core/bound/BoundingSphere.ts:61

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

core/bound/BoundingSphere.ts:70

___

### inFrustum

▸ **inFrustum**(`obj`, `frustum`): ``0`` \| ``1`` \| ``2``

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`Object3D`](Object3D.md) |
| `frustum` | [`Frustum`](Frustum.md) |

#### Returns

``0`` \| ``1`` \| ``2``

#### Implementation of

[IBound](../interfaces/IBound.md).[inFrustum](../interfaces/IBound.md#infrustum)

#### Defined in

core/bound/BoundingSphere.ts:74

___

### clone

▸ **clone**(): [`IBound`](../interfaces/IBound.md)

#### Returns

[`IBound`](../interfaces/IBound.md)

#### Implementation of

[IBound](../interfaces/IBound.md).[clone](../interfaces/IBound.md#clone)

#### Defined in

core/bound/BoundingSphere.ts:78

___

### update

▸ **update**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`Object3D`](Object3D.md) |

#### Returns

`void`

#### Defined in

core/bound/BoundingSphere.ts:82

___

### merge

▸ **merge**(`bound`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bound` | [`IBound`](../interfaces/IBound.md) |

#### Returns

`void`

#### Implementation of

[IBound](../interfaces/IBound.md).[merge](../interfaces/IBound.md#merge)

#### Defined in

core/bound/BoundingSphere.ts:88

___

### setFromCenterAndSize

▸ **setFromCenterAndSize**(`center`, `size`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `center` | [`Vector3`](Vector3.md) |
| `size` | `number` |

#### Returns

`void`

#### Implementation of

[IBound](../interfaces/IBound.md).[setFromCenterAndSize](../interfaces/IBound.md#setfromcenterandsize)

#### Defined in

core/bound/BoundingSphere.ts:92
