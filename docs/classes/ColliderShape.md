[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / ColliderShape

# Class: ColliderShape

## Hierarchy

- **`ColliderShape`**

  ↳ [`BoxColliderShape`](BoxColliderShape.md)

  ↳ [`CapsuleColliderShape`](CapsuleColliderShape.md)

  ↳ [`MeshColliderShape`](MeshColliderShape.md)

  ↳ [`SphereColliderShape`](SphereColliderShape.md)

## Table of contents

### Constructors

- [constructor](ColliderShape.md#constructor)

### Properties

- [\_shapeType](ColliderShape.md#_shapetype)
- [v3\_help\_0](ColliderShape.md#v3_help_0)
- [helpMatrix](ColliderShape.md#helpmatrix)
- [helpRay](ColliderShape.md#helpray)

### Accessors

- [shapeType](ColliderShape.md#shapetype)
- [center](ColliderShape.md#center)
- [size](ColliderShape.md#size)
- [halfSize](ColliderShape.md#halfsize)

### Methods

- [setFromCenterAndSize](ColliderShape.md#setfromcenterandsize)
- [rayPick](ColliderShape.md#raypick)

## Constructors

### constructor

• **new ColliderShape**(): [`ColliderShape`](ColliderShape.md)

#### Returns

[`ColliderShape`](ColliderShape.md)

#### Defined in

components/shape/ColliderShape.ts:30

## Properties

### \_shapeType

• `Protected` **\_shapeType**: [`ColliderShapeType`](../enums/ColliderShapeType.md) = `ColliderShapeType.None`

#### Defined in

components/shape/ColliderShape.ts:25

___

### v3\_help\_0

▪ `Static` `Protected` **v3\_help\_0**: [`Vector3`](Vector3.md)

#### Defined in

components/shape/ColliderShape.ts:26

___

### helpMatrix

▪ `Static` `Protected` **helpMatrix**: [`Matrix4`](Matrix4.md)

#### Defined in

components/shape/ColliderShape.ts:27

___

### helpRay

▪ `Static` `Protected` **helpRay**: [`Ray`](Ray.md)

#### Defined in

components/shape/ColliderShape.ts:28

## Accessors

### shapeType

• `get` **shapeType**(): [`ColliderShapeType`](../enums/ColliderShapeType.md)

#### Returns

[`ColliderShapeType`](../enums/ColliderShapeType.md)

#### Defined in

components/shape/ColliderShape.ts:39

___

### center

• `get` **center**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

components/shape/ColliderShape.ts:49

• `set` **center**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

components/shape/ColliderShape.ts:53

___

### size

• `get` **size**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

components/shape/ColliderShape.ts:57

• `set` **size**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

components/shape/ColliderShape.ts:61

___

### halfSize

• `get` **halfSize**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

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

#### Defined in

components/shape/ColliderShape.ts:70
