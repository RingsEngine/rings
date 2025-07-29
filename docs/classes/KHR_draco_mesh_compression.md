[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / KHR\_draco\_mesh\_compression

# Class: KHR\_draco\_mesh\_compression

## Table of contents

### Constructors

- [constructor](KHR_draco_mesh_compression.md#constructor)

### Methods

- [apply](KHR_draco_mesh_compression.md#apply)
- [unload](KHR_draco_mesh_compression.md#unload)
- [initDecoder](KHR_draco_mesh_compression.md#initdecoder)

## Constructors

### constructor

• **new KHR_draco_mesh_compression**(): [`KHR_draco_mesh_compression`](KHR_draco_mesh_compression.md)

#### Returns

[`KHR_draco_mesh_compression`](KHR_draco_mesh_compression.md)

## Methods

### apply

▸ **apply**(`parser`, `primitive`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `parser` | [`GLTFSubParser`](GLTFSubParser.md) |
| `primitive` | [`GLTF_Primitives`](GLTF_Primitives.md) |

#### Returns

`Promise`\<`any`\>

#### Defined in

loader/parser/gltf/extends/KHR_draco_mesh_compression.ts:9

___

### unload

▸ **unload**(`gltf`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gltf` | `any` |

#### Returns

`void`

#### Defined in

loader/parser/gltf/extends/KHR_draco_mesh_compression.ts:57

___

### initDecoder

▸ **initDecoder**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Defined in

loader/parser/gltf/extends/KHR_draco_mesh_compression.ts:66
