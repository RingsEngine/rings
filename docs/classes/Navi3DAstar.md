[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / Navi3DAstar

# Class: Navi3DAstar

## Table of contents

### Constructors

- [constructor](Navi3DAstar.md#constructor)

### Accessors

- [channel](Navi3DAstar.md#channel)

### Methods

- [findPath](Navi3DAstar.md#findpath)

## Constructors

### constructor

• **new Navi3DAstar**(): [`Navi3DAstar`](Navi3DAstar.md)

#### Returns

[`Navi3DAstar`](Navi3DAstar.md)

#### Defined in

math/navigation/Navi3DAstar.ts:15

## Accessors

### channel

• `get` **channel**(): [`Navi3DTriangle`](Navi3DTriangle.md)[]

#### Returns

[`Navi3DTriangle`](Navi3DTriangle.md)[]

#### Defined in

math/navigation/Navi3DAstar.ts:103

## Methods

### findPath

▸ **findPath**(`navMesh`, `startTriangle`, `endTriangle`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `navMesh` | [`Navi3DMesh`](Navi3DMesh.md) |
| `startTriangle` | [`Navi3DTriangle`](Navi3DTriangle.md) |
| `endTriangle` | [`Navi3DTriangle`](Navi3DTriangle.md) |

#### Returns

`boolean`

#### Defined in

math/navigation/Navi3DAstar.ts:20
