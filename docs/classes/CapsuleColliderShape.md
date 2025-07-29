[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / CapsuleColliderShape

# Class: CapsuleColliderShape

## Hierarchy

- [`ColliderShape`](ColliderShape.md)

  ↳ **`CapsuleColliderShape`**

## Table of contents

### Constructors

- [constructor](CapsuleColliderShape.md#constructor)

### Properties

- [radius](CapsuleColliderShape.md#radius)
- [height](CapsuleColliderShape.md#height)
- [\_shapeType](CapsuleColliderShape.md#_shapetype)
- [v3\_help\_0](CapsuleColliderShape.md#v3_help_0)
- [helpMatrix](CapsuleColliderShape.md#helpmatrix)
- [helpRay](CapsuleColliderShape.md#helpray)

### Accessors

- [shapeType](CapsuleColliderShape.md#shapetype)
- [center](CapsuleColliderShape.md#center)
- [size](CapsuleColliderShape.md#size)
- [halfSize](CapsuleColliderShape.md#halfsize)

### Methods

- [setFromCenterAndSize](CapsuleColliderShape.md#setfromcenterandsize)
- [rayPick](CapsuleColliderShape.md#raypick)

## Constructors

### constructor

• **new CapsuleColliderShape**(): [`CapsuleColliderShape`](CapsuleColliderShape.md)

#### Returns

[`CapsuleColliderShape`](CapsuleColliderShape.md)

#### Overrides

[ColliderShape](ColliderShape.md).[constructor](ColliderShape.md#constructor)

#### Defined in

components/shape/CapsuleColliderShape.ts:7

## Properties

### radius

• **radius**: `number` = `2.5`

#### Defined in

components/shape/CapsuleColliderShape.ts:4

___

### height

• **height**: `number` = `10`

#### Defined in

components/shape/CapsuleColliderShape.ts:5

___

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

▸ **rayPick**(`ray`, `fromMatrix`): [`HitInfo`](../modules.md#hitinfo)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ray` | [`Ray`](Ray.md) |
| `fromMatrix` | [`Matrix4`](Matrix4.md) |

#### Returns

[`HitInfo`](../modules.md#hitinfo)

#### Inherited from

[ColliderShape](ColliderShape.md).[rayPick](ColliderShape.md#raypick)

#### Defined in

components/shape/ColliderShape.ts:70
