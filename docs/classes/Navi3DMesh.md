[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / Navi3DMesh

# Class: Navi3DMesh

## Table of contents

### Constructors

- [constructor](Navi3DMesh.md#constructor)

### Accessors

- [edges](Navi3DMesh.md#edges)
- [points](Navi3DMesh.md#points)
- [path](Navi3DMesh.md#path)
- [triangles](Navi3DMesh.md#triangles)

### Methods

- [getTriangleAtPoint](Navi3DMesh.md#gettriangleatpoint)
- [findPath](Navi3DMesh.md#findpath)

## Constructors

### constructor

• **new Navi3DMesh**(`pointList`, `triangleIndexList`): [`Navi3DMesh`](Navi3DMesh.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pointList` | [`Vector3`](Vector3.md)[] |
| `triangleIndexList` | `number`[][] |

#### Returns

[`Navi3DMesh`](Navi3DMesh.md)

#### Defined in

math/navigation/Navi3DMesh.ts:38

## Accessors

### edges

• `get` **edges**(): [`Navi3DEdge`](Navi3DEdge.md)[]

#### Returns

[`Navi3DEdge`](Navi3DEdge.md)[]

#### Defined in

math/navigation/Navi3DMesh.ts:22

___

### points

• `get` **points**(): [`Navi3DPoint`](Navi3DPoint.md)[]

#### Returns

[`Navi3DPoint`](Navi3DPoint.md)[]

#### Defined in

math/navigation/Navi3DMesh.ts:26

___

### path

• `get` **path**(): [`Vector3`](Vector3.md)[]

#### Returns

[`Vector3`](Vector3.md)[]

#### Defined in

math/navigation/Navi3DMesh.ts:30

___

### triangles

• `get` **triangles**(): [`Navi3DTriangle`](Navi3DTriangle.md)[]

#### Returns

[`Navi3DTriangle`](Navi3DTriangle.md)[]

#### Defined in

math/navigation/Navi3DMesh.ts:34

## Methods

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

math/navigation/Navi3DMesh.ts:57

___

### findPath

▸ **findPath**(`startPt`, `endPt`, `aiRadius?`): `boolean`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `startPt` | [`Vector3`](Vector3.md) | `undefined` |
| `endPt` | [`Vector3`](Vector3.md) | `undefined` |
| `aiRadius` | `number` | `5` |

#### Returns

`boolean`

#### Defined in

math/navigation/Navi3DMesh.ts:61
