[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / GeometryVertexBuffer

# Class: GeometryVertexBuffer

## Table of contents

### Constructors

- [constructor](GeometryVertexBuffer.md#constructor)

### Properties

- [vertexCount](GeometryVertexBuffer.md#vertexcount)
- [vertexGPUBuffer](GeometryVertexBuffer.md#vertexgpubuffer)
- [geometryType](GeometryVertexBuffer.md#geometrytype)

### Accessors

- [vertexBufferLayouts](GeometryVertexBuffer.md#vertexbufferlayouts)

### Methods

- [createVertexBuffer](GeometryVertexBuffer.md#createvertexbuffer)
- [upload](GeometryVertexBuffer.md#upload)
- [updateAttributes](GeometryVertexBuffer.md#updateattributes)
- [compute](GeometryVertexBuffer.md#compute)
- [destroy](GeometryVertexBuffer.md#destroy)

## Constructors

### constructor

• **new GeometryVertexBuffer**(): [`GeometryVertexBuffer`](GeometryVertexBuffer.md)

#### Returns

[`GeometryVertexBuffer`](GeometryVertexBuffer.md)

#### Defined in

core/geometry/GeometryVertexBuffer.ts:17

## Properties

### vertexCount

• **vertexCount**: `number` = `0`

#### Defined in

core/geometry/GeometryVertexBuffer.ts:10

___

### vertexGPUBuffer

• **vertexGPUBuffer**: [`VertexGPUBuffer`](VertexGPUBuffer.md)

#### Defined in

core/geometry/GeometryVertexBuffer.ts:11

___

### geometryType

• **geometryType**: [`GeometryVertexType`](../enums/GeometryVertexType.md) = `GeometryVertexType.compose`

#### Defined in

core/geometry/GeometryVertexBuffer.ts:12

## Accessors

### vertexBufferLayouts

• `get` **vertexBufferLayouts**(): [`VertexBufferLayout`](VertexBufferLayout.md)[]

#### Returns

[`VertexBufferLayout`](VertexBufferLayout.md)[]

#### Defined in

core/geometry/GeometryVertexBuffer.ts:23

## Methods

### createVertexBuffer

▸ **createVertexBuffer**(`vertexDataInfos`, `shaderReflection`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vertexDataInfos` | `Map`\<`string`, [`VertexAttributeData`](../modules.md#vertexattributedata)\> |
| `shaderReflection` | [`ShaderReflection`](ShaderReflection.md) |

#### Returns

`void`

#### Defined in

core/geometry/GeometryVertexBuffer.ts:27

___

### upload

▸ **upload**(`attribute`, `vertexDataInfo`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attribute` | `string` |
| `vertexDataInfo` | [`VertexAttributeData`](../modules.md#vertexattributedata) |

#### Returns

`void`

#### Defined in

core/geometry/GeometryVertexBuffer.ts:207

___

### updateAttributes

▸ **updateAttributes**(`vertexDataInfos`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vertexDataInfos` | `Map`\<`string`, [`VertexAttributeData`](../modules.md#vertexattributedata)\> |

#### Returns

`void`

#### Defined in

core/geometry/GeometryVertexBuffer.ts:246

___

### compute

▸ **compute**(): `void`

#### Returns

`void`

#### Defined in

core/geometry/GeometryVertexBuffer.ts:295

___

### destroy

▸ **destroy**(`force?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `force?` | `boolean` |

#### Returns

`void`

#### Defined in

core/geometry/GeometryVertexBuffer.ts:297
