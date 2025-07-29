[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / ZSorterUtil

# Class: ZSorterUtil

## Table of contents

### Constructors

- [constructor](ZSorterUtil.md#constructor)

### Methods

- [sort](ZSorterUtil.md#sort)
- [worldToCameraDepth](ZSorterUtil.md#worldtocameradepth)

## Constructors

### constructor

• **new ZSorterUtil**(): [`ZSorterUtil`](ZSorterUtil.md)

#### Returns

[`ZSorterUtil`](ZSorterUtil.md)

## Methods

### sort

▸ **sort**(`camera3D`, `userDataList`, `getObject3D`, `result?`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `camera3D` | [`Camera3D`](Camera3D.md) |
| `userDataList` | `any`[] |
| `getObject3D` | (`userData`: `any`) => [`Object3D`](Object3D.md) |
| `result?` | `any`[] |

#### Returns

`any`[]

#### Defined in

util/ZSorterUtil.ts:27

___

### worldToCameraDepth

▸ **worldToCameraDepth**(`obj3d`, `camera?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj3d` | [`Object3D`](Object3D.md) |
| `camera?` | [`Camera3D`](Camera3D.md) |

#### Returns

`number`

#### Defined in

util/ZSorterUtil.ts:57
