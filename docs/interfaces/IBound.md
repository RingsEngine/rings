[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / IBound

# Interface: IBound

## Implemented by

- [`BoundingBox`](../classes/BoundingBox.md)
- [`BoundingSphere`](../classes/BoundingSphere.md)

## Table of contents

### Properties

- [center](IBound.md#center)
- [extents](IBound.md#extents)
- [max](IBound.md#max)
- [min](IBound.md#min)
- [size](IBound.md#size)

### Methods

- [calculateTransform](IBound.md#calculatetransform)
- [clone](IBound.md#clone)
- [merge](IBound.md#merge)
- [intersectsRay](IBound.md#intersectsray)
- [containsPoint](IBound.md#containspoint)
- [setFromCenterAndSize](IBound.md#setfromcenterandsize)
- [inFrustum](IBound.md#infrustum)
- [updateBound](IBound.md#updatebound)

## Properties

### center

• **center**: [`Vector3`](../classes/Vector3.md)

#### Defined in

core/bound/IBound.ts:7

___

### extents

• **extents**: [`Vector3`](../classes/Vector3.md)

#### Defined in

core/bound/IBound.ts:8

___

### max

• **max**: [`Vector3`](../classes/Vector3.md)

#### Defined in

core/bound/IBound.ts:9

___

### min

• **min**: [`Vector3`](../classes/Vector3.md)

#### Defined in

core/bound/IBound.ts:10

___

### size

• **size**: [`Vector3`](../classes/Vector3.md)

#### Defined in

core/bound/IBound.ts:11

## Methods

### calculateTransform

▸ **calculateTransform**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`Object3D`](../classes/Object3D.md) |

#### Returns

`void`

#### Defined in

core/bound/IBound.ts:13

___

### clone

▸ **clone**(): [`IBound`](IBound.md)

#### Returns

[`IBound`](IBound.md)

#### Defined in

core/bound/IBound.ts:14

___

### merge

▸ **merge**(`bound`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bound` | [`IBound`](IBound.md) |

#### Returns

`any`

#### Defined in

core/bound/IBound.ts:15

___

### intersectsRay

▸ **intersectsRay**(`ray`, `point`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ray` | [`Ray`](../classes/Ray.md) |
| `point` | [`Vector3`](../classes/Vector3.md) |

#### Returns

`boolean`

#### Defined in

core/bound/IBound.ts:16

___

### containsPoint

▸ **containsPoint**(`point`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`Vector3`](../classes/Vector3.md) |

#### Returns

`boolean`

#### Defined in

core/bound/IBound.ts:17

___

### setFromCenterAndSize

▸ **setFromCenterAndSize**(`center`, `size`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `center` | [`Vector3`](../classes/Vector3.md) |
| `size` | `number` \| [`Vector3`](../classes/Vector3.md) |

#### Returns

`any`

#### Defined in

core/bound/IBound.ts:18

___

### inFrustum

▸ **inFrustum**(`object3D`, `frustum`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `object3D` | [`Object3D`](../classes/Object3D.md) |
| `frustum` | [`Frustum`](../classes/Frustum.md) |

#### Returns

`any`

#### Defined in

core/bound/IBound.ts:19

___

### updateBound

▸ **updateBound**(): `any`

#### Returns

`any`

#### Defined in

core/bound/IBound.ts:20
