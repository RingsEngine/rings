[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / QuadTreeCell

# Class: QuadTreeCell

四叉树节点单元类
用于构建四叉树空间索引结构的基本单元

## Table of contents

### Constructors

- [constructor](QuadTreeCell.md#constructor)

### Properties

- [NUM\_CHILDREN](QuadTreeCell.md#num_children)
- [childCellIndices](QuadTreeCell.md#childcellindices)
- [nodeIndices](QuadTreeCell.md#nodeindices)
- [aabb](QuadTreeCell.md#aabb)
- [points](QuadTreeCell.md#points)

### Methods

- [isLeaf](QuadTreeCell.md#isleaf)
- [clear](QuadTreeCell.md#clear)

## Constructors

### constructor

• **new QuadTreeCell**(`aabox`): [`QuadTreeCell`](QuadTreeCell.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `aabox` | [`QuadAABB`](QuadAABB.md) |

#### Returns

[`QuadTreeCell`](QuadTreeCell.md)

#### Defined in

core/tree/quad/QuadTreeCell.ts:19

## Properties

### NUM\_CHILDREN

▪ `Static` **NUM\_CHILDREN**: `number` = `4`

#### Defined in

core/tree/quad/QuadTreeCell.ts:9

___

### childCellIndices

• **childCellIndices**: `number`[]

#### Defined in

core/tree/quad/QuadTreeCell.ts:11

___

### nodeIndices

• **nodeIndices**: `number`[]

#### Defined in

core/tree/quad/QuadTreeCell.ts:13

___

### aabb

• **aabb**: [`QuadAABB`](QuadAABB.md)

#### Defined in

core/tree/quad/QuadTreeCell.ts:15

___

### points

• **points**: [`Vector3`](Vector3.md)[]

#### Defined in

core/tree/quad/QuadTreeCell.ts:17

## Methods

### isLeaf

▸ **isLeaf**(): `boolean`

判断是否为叶节点

#### Returns

`boolean`

如果是叶节点（不包含子节点）返回true

@注 叶节点意味着当前节点包含实际对象数据，
而非叶节点则应该包含子节点（可能同时包含对象数据）

#### Defined in

core/tree/quad/QuadTreeCell.ts:38

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

core/tree/quad/QuadTreeCell.ts:42
