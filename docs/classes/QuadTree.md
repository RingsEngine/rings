[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / QuadTree

# Class: QuadTree

## Table of contents

### Constructors

- [constructor](QuadTree.md#constructor)

### Methods

- [getQuadNode](QuadTree.md#getquadnode)
- [clear](QuadTree.md#clear)
- [initNodes](QuadTree.md#initnodes)
- [buildQuadTree](QuadTree.md#buildquadtree)
- [getNodesIntersectingtAABox](QuadTree.md#getnodesintersectingtaabox)

## Constructors

### constructor

• **new QuadTree**(): [`QuadTree`](QuadTree.md)

#### Returns

[`QuadTree`](QuadTree.md)

#### Defined in

core/tree/quad/QuadTree.ts:19

## Methods

### getQuadNode

▸ **getQuadNode**(`idx`): [`IQuadNode`](../interfaces/IQuadNode.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `idx` | `number` |

#### Returns

[`IQuadNode`](../interfaces/IQuadNode.md)

#### Defined in

core/tree/quad/QuadTree.ts:27

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

core/tree/quad/QuadTree.ts:31

___

### initNodes

▸ **initNodes**(`nodes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodes` | [`IQuadNode`](../interfaces/IQuadNode.md)[] |

#### Returns

`void`

#### Defined in

core/tree/quad/QuadTree.ts:36

___

### buildQuadTree

▸ **buildQuadTree**(`maxNodesPerCell`, `minCellSize`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxNodesPerCell` | `number` |
| `minCellSize` | `number` |

#### Returns

`void`

#### Defined in

core/tree/quad/QuadTree.ts:47

___

### getNodesIntersectingtAABox

▸ **getNodesIntersectingtAABox**(`result`, `aabb`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `result` | `number`[] |
| `aabb` | [`QuadAABB`](QuadAABB.md) |

#### Returns

`number`

#### Defined in

core/tree/quad/QuadTree.ts:205
