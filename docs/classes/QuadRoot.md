[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / QuadRoot

# Class: QuadRoot

## Table of contents

### Constructors

- [constructor](QuadRoot.md#constructor)

### Methods

- [createQuadTree](QuadRoot.md#createquadtree)
- [getNodesByAABB](QuadRoot.md#getnodesbyaabb)
- [getTriangleAtPoint](QuadRoot.md#gettriangleatpoint)

## Constructors

### constructor

• **new QuadRoot**(`maxNodesPerCell?`, `minCellSize?`): [`QuadRoot`](QuadRoot.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `maxNodesPerCell` | `number` | `10` |
| `minCellSize` | `number` | `500` |

#### Returns

[`QuadRoot`](QuadRoot.md)

#### Defined in

core/tree/quad/QuadRoot.ts:19

## Methods

### createQuadTree

▸ **createQuadTree**(`nodes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodes` | [`IQuadNode`](../interfaces/IQuadNode.md)[] |

#### Returns

`void`

#### Defined in

core/tree/quad/QuadRoot.ts:27

___

### getNodesByAABB

▸ **getNodesByAABB**(`minX`, `minY`, `maxX`, `maxY`): [`IQuadNode`](../interfaces/IQuadNode.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `minX` | `number` |
| `minY` | `number` |
| `maxX` | `number` |
| `maxY` | `number` |

#### Returns

[`IQuadNode`](../interfaces/IQuadNode.md)[]

#### Defined in

core/tree/quad/QuadRoot.ts:33

___

### getTriangleAtPoint

▸ **getTriangleAtPoint**(`point`, `threshold?`): [`IQuadNode`](../interfaces/IQuadNode.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `point` | [`Vector3`](Vector3.md) | `undefined` |
| `threshold` | `number` | `5` |

#### Returns

[`IQuadNode`](../interfaces/IQuadNode.md)

#### Defined in

core/tree/quad/QuadRoot.ts:61
