[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / Frustum

# Class: Frustum

## Table of contents

### Constructors

- [constructor](Frustum.md#constructor)

### Properties

- [planes](Frustum.md#planes)
- [corners](Frustum.md#corners)
- [boundingBox](Frustum.md#boundingbox)

### Methods

- [updateBoundBox](Frustum.md#updateboundbox)
- [setFrustumCorners](Frustum.md#setfrustumcorners)
- [update](Frustum.md#update)
- [containsPoint](Frustum.md#containspoint)
- [containsSphere](Frustum.md#containssphere)
- [containsBox](Frustum.md#containsbox)
- [containsBox2](Frustum.md#containsbox2)

## Constructors

### constructor

• **new Frustum**(): [`Frustum`](Frustum.md)

#### Returns

[`Frustum`](Frustum.md)

#### Defined in

core/bound/Frustum.ts:12

## Properties

### planes

• **planes**: [`Vector3`](Vector3.md)[]

#### Defined in

core/bound/Frustum.ts:8

___

### corners

• **corners**: [`Vector3`](Vector3.md)[]

#### Defined in

core/bound/Frustum.ts:9

___

### boundingBox

• **boundingBox**: [`BoundingBox`](BoundingBox.md)

#### Defined in

core/bound/Frustum.ts:10

## Methods

### updateBoundBox

▸ **updateBoundBox**(`pvInv`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pvInv` | [`Matrix4`](Matrix4.md) |

#### Returns

`this`

#### Defined in

core/bound/Frustum.ts:19

___

### setFrustumCorners

▸ **setFrustumCorners**(`pvInv`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pvInv` | [`Matrix4`](Matrix4.md) |

#### Returns

`void`

#### Defined in

core/bound/Frustum.ts:46

___

### update

▸ **update**(`vpMatrix`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vpMatrix` | [`Matrix4`](Matrix4.md) |

#### Returns

`void`

#### Defined in

core/bound/Frustum.ts:61

___

### containsPoint

▸ **containsPoint**(`point`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`Vector3`](Vector3.md) |

#### Returns

`boolean`

#### Defined in

core/bound/Frustum.ts:149

___

### containsSphere

▸ **containsSphere**(`object3D`): ``0`` \| ``1`` \| ``2``

#### Parameters

| Name | Type |
| :------ | :------ |
| `object3D` | [`Object3D`](Object3D.md) |

#### Returns

``0`` \| ``1`` \| ``2``

#### Defined in

core/bound/Frustum.ts:163

___

### containsBox

▸ **containsBox**(`box`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `box` | `any` |

#### Returns

`number`

#### Defined in

core/bound/Frustum.ts:184

___

### containsBox2

▸ **containsBox2**(`box`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `box` | `any` |

#### Returns

`number`

#### Defined in

core/bound/Frustum.ts:203
