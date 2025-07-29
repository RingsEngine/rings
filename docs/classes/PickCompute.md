[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / PickCompute

# Class: PickCompute

## Table of contents

### Constructors

- [constructor](PickCompute.md#constructor)

### Methods

- [init](PickCompute.md#init)
- [compute](PickCompute.md#compute)
- [getPickMeshID](PickCompute.md#getpickmeshid)
- [getPickWorldPosition](PickCompute.md#getpickworldposition)
- [getPickWorldNormal](PickCompute.md#getpickworldnormal)
- [getPickScreenUV](PickCompute.md#getpickscreenuv)

## Constructors

### constructor

• **new PickCompute**(): [`PickCompute`](PickCompute.md)

#### Returns

[`PickCompute`](PickCompute.md)

#### Defined in

io/picker/PickCompute.ts:14

## Methods

### init

▸ **init**(): `void`

#### Returns

`void`

#### Defined in

io/picker/PickCompute.ts:16

___

### compute

▸ **compute**(`view`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |

#### Returns

`void`

#### Defined in

io/picker/PickCompute.ts:28

___

### getPickMeshID

▸ **getPickMeshID**(): `number`

#### Returns

`number`

#### Defined in

io/picker/PickCompute.ts:41

___

### getPickWorldPosition

▸ **getPickWorldPosition**(`target?`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target?` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

io/picker/PickCompute.ts:46

___

### getPickWorldNormal

▸ **getPickWorldNormal**(`target?`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target?` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

io/picker/PickCompute.ts:55

___

### getPickScreenUV

▸ **getPickScreenUV**(`target?`): [`Vector2`](Vector2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target?` | [`Vector2`](Vector2.md) |

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

io/picker/PickCompute.ts:64
