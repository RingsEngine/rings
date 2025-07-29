[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / GLTFSubParserMesh

# Class: GLTFSubParserMesh

## Table of contents

### Constructors

- [constructor](GLTFSubParserMesh.md#constructor)

### Properties

- [gltf](GLTFSubParserMesh.md#gltf)
- [subParser](GLTFSubParserMesh.md#subparser)

### Methods

- [parse](GLTFSubParserMesh.md#parse)

## Constructors

### constructor

• **new GLTFSubParserMesh**(`subParser`): [`GLTFSubParserMesh`](GLTFSubParserMesh.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `subParser` | [`GLTFSubParser`](GLTFSubParser.md) |

#### Returns

[`GLTFSubParserMesh`](GLTFSubParserMesh.md)

#### Defined in

loader/parser/gltf/GLTFSubParserMesh.ts:12

## Properties

### gltf

• `Protected` **gltf**: [`GLTF_Info`](GLTF_Info.md)

#### Defined in

loader/parser/gltf/GLTFSubParserMesh.ts:9

___

### subParser

• `Protected` **subParser**: [`GLTFSubParser`](GLTFSubParser.md)

#### Defined in

loader/parser/gltf/GLTFSubParserMesh.ts:10

## Methods

### parse

▸ **parse**(`meshId`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `meshId` | `any` |

#### Returns

`Promise`\<`any`\>

#### Defined in

loader/parser/gltf/GLTFSubParserMesh.ts:17
