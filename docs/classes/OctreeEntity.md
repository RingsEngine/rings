[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / OctreeEntity

# Class: OctreeEntity

## Table of contents

### Constructors

- [constructor](OctreeEntity.md#constructor)

### Properties

- [renderer](OctreeEntity.md#renderer)
- [owner](OctreeEntity.md#owner)
- [uuid](OctreeEntity.md#uuid)

### Methods

- [leaveNode](OctreeEntity.md#leavenode)
- [enterNode](OctreeEntity.md#enternode)
- [update](OctreeEntity.md#update)

## Constructors

### constructor

• **new OctreeEntity**(`renderer`): [`OctreeEntity`](OctreeEntity.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | [`RenderNode`](RenderNode.md) |

#### Returns

[`OctreeEntity`](OctreeEntity.md)

#### Defined in

core/tree/octree/OctreeEntity.ts:8

## Properties

### renderer

• `Readonly` **renderer**: [`RenderNode`](RenderNode.md)

#### Defined in

core/tree/octree/OctreeEntity.ts:5

___

### owner

• **owner**: [`Octree`](Octree.md)

#### Defined in

core/tree/octree/OctreeEntity.ts:6

___

### uuid

• `Readonly` **uuid**: `string`

#### Defined in

core/tree/octree/OctreeEntity.ts:7

## Methods

### leaveNode

▸ **leaveNode**(): `void`

#### Returns

`void`

#### Defined in

core/tree/octree/OctreeEntity.ts:13

___

### enterNode

▸ **enterNode**(`node`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`Octree`](Octree.md) |

#### Returns

`void`

#### Defined in

core/tree/octree/OctreeEntity.ts:20

___

### update

▸ **update**(`root`): [`Octree`](Octree.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `root` | [`Octree`](Octree.md) |

#### Returns

[`Octree`](Octree.md)

#### Defined in

core/tree/octree/OctreeEntity.ts:26
