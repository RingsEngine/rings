[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / Navi3DFunnel

# Class: Navi3DFunnel

## Table of contents

### Constructors

- [constructor](Navi3DFunnel.md#constructor)

### Accessors

- [path](Navi3DFunnel.md#path)

### Methods

- [searchPath](Navi3DFunnel.md#searchpath)

## Constructors

### constructor

• **new Navi3DFunnel**(): [`Navi3DFunnel`](Navi3DFunnel.md)

#### Returns

[`Navi3DFunnel`](Navi3DFunnel.md)

#### Defined in

math/navigation/Navi3DFunnel.ts:24

## Accessors

### path

• `get` **path**(): [`Vector3`](Vector3.md)[]

#### Returns

[`Vector3`](Vector3.md)[]

#### Defined in

math/navigation/Navi3DFunnel.ts:44

## Methods

### searchPath

▸ **searchPath**(`startPt`, `endPt`, `triangleList`, `radius?`): `boolean`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `startPt` | [`Vector3`](Vector3.md) | `undefined` |
| `endPt` | [`Vector3`](Vector3.md) | `undefined` |
| `triangleList` | [`Navi3DTriangle`](Navi3DTriangle.md)[] | `undefined` |
| `radius` | `number` | `0` |

#### Returns

`boolean`

#### Defined in

math/navigation/Navi3DFunnel.ts:28
