[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / GeometryIndicesBuffer

# Class: GeometryIndicesBuffer

## Table of contents

### Constructors

- [constructor](GeometryIndicesBuffer.md#constructor)

### Properties

- [uuid](GeometryIndicesBuffer.md#uuid)
- [name](GeometryIndicesBuffer.md#name)
- [indicesGPUBuffer](GeometryIndicesBuffer.md#indicesgpubuffer)
- [indicesFormat](GeometryIndicesBuffer.md#indicesformat)
- [indicesCount](GeometryIndicesBuffer.md#indicescount)

### Methods

- [createIndicesBuffer](GeometryIndicesBuffer.md#createindicesbuffer)
- [upload](GeometryIndicesBuffer.md#upload)
- [compute](GeometryIndicesBuffer.md#compute)
- [destroy](GeometryIndicesBuffer.md#destroy)

## Constructors

### constructor

• **new GeometryIndicesBuffer**(): [`GeometryIndicesBuffer`](GeometryIndicesBuffer.md)

#### Returns

[`GeometryIndicesBuffer`](GeometryIndicesBuffer.md)

#### Defined in

core/geometry/GeometryIndicesBuffer.ts:11

## Properties

### uuid

• **uuid**: `string` = `""`

#### Defined in

core/geometry/GeometryIndicesBuffer.ts:6

___

### name

• **name**: `string`

#### Defined in

core/geometry/GeometryIndicesBuffer.ts:7

___

### indicesGPUBuffer

• **indicesGPUBuffer**: [`IndicesGPUBuffer`](IndicesGPUBuffer.md)

#### Defined in

core/geometry/GeometryIndicesBuffer.ts:8

___

### indicesFormat

• **indicesFormat**: `GPUIndexFormat`

#### Defined in

core/geometry/GeometryIndicesBuffer.ts:9

___

### indicesCount

• **indicesCount**: `number` = `0`

#### Defined in

core/geometry/GeometryIndicesBuffer.ts:10

## Methods

### createIndicesBuffer

▸ **createIndicesBuffer**(`indicesData`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `indicesData` | [`VertexAttributeData`](../modules.md#vertexattributedata) |

#### Returns

`void`

#### Defined in

core/geometry/GeometryIndicesBuffer.ts:13

___

### upload

▸ **upload**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`ArrayBufferData`](../modules.md#arraybufferdata) |

#### Returns

`void`

#### Defined in

core/geometry/GeometryIndicesBuffer.ts:23

___

### compute

▸ **compute**(): `void`

#### Returns

`void`

#### Defined in

core/geometry/GeometryIndicesBuffer.ts:28

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

core/geometry/GeometryIndicesBuffer.ts:30
