[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / RayCastMeshDetail

# Class: RayCastMeshDetail

## Table of contents

### Constructors

- [constructor](RayCastMeshDetail.md#constructor)

### Properties

- [EPS](RayCastMeshDetail.md#eps)
- [FLT\_MAX](RayCastMeshDetail.md#flt_max)

### Methods

- [distPtTri](RayCastMeshDetail.md#distpttri)
- [IntersectTriangle](RayCastMeshDetail.md#intersecttriangle)

## Constructors

### constructor

• **new RayCastMeshDetail**(): [`RayCastMeshDetail`](RayCastMeshDetail.md)

#### Returns

[`RayCastMeshDetail`](RayCastMeshDetail.md)

## Properties

### EPS

▪ `Static` **EPS**: `number` = `1e-4`

取一个最小值

#### Defined in

io/RayCastMeshDetail.ts:15

___

### FLT\_MAX

▪ `Static` **FLT\_MAX**: `number` = `3.402823466e38`

定义一个极大值

#### Defined in

io/RayCastMeshDetail.ts:20

## Methods

### distPtTri

▸ **distPtTri**(`p`, `a`, `b`, `c`): `number`

计算点与平面(由三点a、b、c定义)之间的距离

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `p` | [`Vector3`](Vector3.md) | 测试点 |
| `a` | [`Vector3`](Vector3.md) | 三角形顶点A |
| `b` | [`Vector3`](Vector3.md) | 三角形顶点B |
| `c` | [`Vector3`](Vector3.md) | 三角形顶点C |

#### Returns

`number`

点到平面的距离

#### Defined in

io/RayCastMeshDetail.ts:30

___

### IntersectTriangle

▸ **IntersectTriangle**(`ray`, `face`, `backfaceCulling`): [`PickResult`](PickResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ray` | [`Ray`](Ray.md) |
| `face` | [`Triangle`](Triangle.md) |
| `backfaceCulling` | `boolean` |

#### Returns

[`PickResult`](PickResult.md)

#### Defined in

io/RayCastMeshDetail.ts:65
