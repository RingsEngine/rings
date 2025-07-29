[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / SphereColliderShape

# Class: SphereColliderShape

球形碰撞检测

## Hierarchy

- [`ColliderShape`](ColliderShape.md)

  ↳ **`SphereColliderShape`**

## Table of contents

### Constructors

- [constructor](SphereColliderShape.md#constructor)

### Properties

- [\_shapeType](SphereColliderShape.md#_shapetype)
- [v3\_help\_0](SphereColliderShape.md#v3_help_0)
- [helpMatrix](SphereColliderShape.md#helpmatrix)
- [helpRay](SphereColliderShape.md#helpray)
- [radius](SphereColliderShape.md#radius)

### Accessors

- [shapeType](SphereColliderShape.md#shapetype)
- [center](SphereColliderShape.md#center)
- [size](SphereColliderShape.md#size)
- [halfSize](SphereColliderShape.md#halfsize)

### Methods

- [setFromCenterAndSize](SphereColliderShape.md#setfromcenterandsize)
- [rayPick](SphereColliderShape.md#raypick)

## Constructors

### constructor

• **new SphereColliderShape**(`radius`): [`SphereColliderShape`](SphereColliderShape.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `radius` | `number` | radius of this collider |

#### Returns

[`SphereColliderShape`](SphereColliderShape.md)

#### Overrides

[ColliderShape](ColliderShape.md).[constructor](ColliderShape.md#constructor)

#### Defined in

components/shape/SphereColliderShape.ts:28

## Properties

### \_shapeType

• `Protected` **\_shapeType**: [`ColliderShapeType`](../enums/ColliderShapeType.md) = `ColliderShapeType.None`

#### Inherited from

[ColliderShape](ColliderShape.md).[_shapeType](ColliderShape.md#_shapetype)

#### Defined in

components/shape/ColliderShape.ts:25

___

### v3\_help\_0

▪ `Static` `Protected` **v3\_help\_0**: [`Vector3`](Vector3.md)

#### Inherited from

[ColliderShape](ColliderShape.md).[v3_help_0](ColliderShape.md#v3_help_0)

#### Defined in

components/shape/ColliderShape.ts:26

___

### helpMatrix

▪ `Static` `Protected` **helpMatrix**: [`Matrix4`](Matrix4.md)

#### Inherited from

[ColliderShape](ColliderShape.md).[helpMatrix](ColliderShape.md#helpmatrix)

#### Defined in

components/shape/ColliderShape.ts:27

___

### helpRay

▪ `Static` `Protected` **helpRay**: [`Ray`](Ray.md)

#### Inherited from

[ColliderShape](ColliderShape.md).[helpRay](ColliderShape.md#helpray)

#### Defined in

components/shape/ColliderShape.ts:28

___

### radius

• **radius**: `number` = `0.5`

碰撞半径

#### Defined in

components/shape/SphereColliderShape.ts:22

## Accessors

### shapeType

• `get` **shapeType**(): [`ColliderShapeType`](../enums/ColliderShapeType.md)

#### Returns

[`ColliderShapeType`](../enums/ColliderShapeType.md)

#### Inherited from

ColliderShape.shapeType

#### Defined in

components/shape/ColliderShape.ts:39

___

### center

• `get` **center**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

ColliderShape.center

#### Defined in

components/shape/ColliderShape.ts:49

• `set` **center**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Inherited from

ColliderShape.center

#### Defined in

components/shape/ColliderShape.ts:53

___

### size

• `get` **size**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

ColliderShape.size

#### Defined in

components/shape/ColliderShape.ts:57

• `set` **size**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Inherited from

ColliderShape.size

#### Defined in

components/shape/ColliderShape.ts:61

___

### halfSize

• `get` **halfSize**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

ColliderShape.halfSize

#### Defined in

components/shape/ColliderShape.ts:66

## Methods

### setFromCenterAndSize

▸ **setFromCenterAndSize**(`ct?`, `sz?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ct?` | [`Vector3`](Vector3.md) |
| `sz?` | [`Vector3`](Vector3.md) |

#### Returns

`this`

#### Inherited from

[ColliderShape](ColliderShape.md).[setFromCenterAndSize](ColliderShape.md#setfromcenterandsize)

#### Defined in

components/shape/ColliderShape.ts:43

___

### rayPick

▸ **rayPick**(`ray`, `fromMatrix`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ray` | [`Ray`](Ray.md) |
| `fromMatrix` | [`Matrix4`](Matrix4.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `intersect` | `boolean` |
| `intersectPoint?` | [`Vector3`](Vector3.md) |
| `distance` | `number` |

#### Overrides

[ColliderShape](ColliderShape.md).[rayPick](ColliderShape.md#raypick)

#### Defined in

components/shape/SphereColliderShape.ts:35
