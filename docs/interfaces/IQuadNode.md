[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / IQuadNode

# Interface: IQuadNode

## Implemented by

- [`Navi3DTriangle`](../classes/Navi3DTriangle.md)

## Table of contents

### Properties

- [isTriangle](IQuadNode.md#istriangle)
- [aabb](IQuadNode.md#aabb)
- [plane](IQuadNode.md#plane)

### Methods

- [initAABB](IQuadNode.md#initaabb)
- [calcGlobalQuadAABB](IQuadNode.md#calcglobalquadaabb)

## Properties

### isTriangle

• **isTriangle**: `boolean`

#### Defined in

core/tree/quad/IQuadNode.ts:6

___

### aabb

• **aabb**: [`QuadAABB`](../classes/QuadAABB.md)

#### Defined in

core/tree/quad/IQuadNode.ts:7

___

### plane

• `Optional` **plane**: [`Plane3D`](../classes/Plane3D.md)

#### Defined in

core/tree/quad/IQuadNode.ts:9

## Methods

### initAABB

▸ **initAABB**(): `void`

#### Returns

`void`

#### Defined in

core/tree/quad/IQuadNode.ts:5

___

### calcGlobalQuadAABB

▸ **calcGlobalQuadAABB**(): `void`

#### Returns

`void`

#### Defined in

core/tree/quad/IQuadNode.ts:8
