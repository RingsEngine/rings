[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / BoundUtil

# Class: BoundUtil

## Table of contents

### Constructors

- [constructor](BoundUtil.md#constructor)

### Methods

- [genMeshBounds](BoundUtil.md#genmeshbounds)
- [transformBound](BoundUtil.md#transformbound)

## Constructors

### constructor

• **new BoundUtil**(): [`BoundUtil`](BoundUtil.md)

#### Returns

[`BoundUtil`](BoundUtil.md)

## Methods

### genMeshBounds

▸ **genMeshBounds**(`obj`, `bound?`): [`BoundingBox`](BoundingBox.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`Object3D`](Object3D.md) |
| `bound?` | [`BoundingBox`](BoundingBox.md) |

#### Returns

[`BoundingBox`](BoundingBox.md)

#### Defined in

util/BoundUtil.ts:27

___

### transformBound

▸ **transformBound**(`matrix`, `source`, `bound?`): [`BoundingBox`](BoundingBox.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `matrix` | [`Matrix4`](Matrix4.md) |
| `source` | [`BoundingBox`](BoundingBox.md) |
| `bound?` | [`BoundingBox`](BoundingBox.md) |

#### Returns

[`BoundingBox`](BoundingBox.md)

#### Defined in

util/BoundUtil.ts:65
