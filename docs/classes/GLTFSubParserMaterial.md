[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / GLTFSubParserMaterial

# Class: GLTFSubParserMaterial

## Table of contents

### Constructors

- [constructor](GLTFSubParserMaterial.md#constructor)

### Properties

- [gltf](GLTFSubParserMaterial.md#gltf)
- [subParser](GLTFSubParserMaterial.md#subparser)

### Methods

- [parse](GLTFSubParserMaterial.md#parse)

## Constructors

### constructor

• **new GLTFSubParserMaterial**(`subParser`): [`GLTFSubParserMaterial`](GLTFSubParserMaterial.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `subParser` | [`GLTFSubParser`](GLTFSubParser.md) |

#### Returns

[`GLTFSubParserMaterial`](GLTFSubParserMaterial.md)

#### Defined in

loader/parser/gltf/GLTFSubParserMaterial.ts:12

## Properties

### gltf

• `Protected` **gltf**: [`GLTF_Info`](GLTF_Info.md)

#### Defined in

loader/parser/gltf/GLTFSubParserMaterial.ts:9

___

### subParser

• `Protected` **subParser**: [`GLTFSubParser`](GLTFSubParser.md)

#### Defined in

loader/parser/gltf/GLTFSubParserMaterial.ts:10

## Methods

### parse

▸ **parse**(`materialId`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `materialId` | `any` |

#### Returns

`Promise`\<`any`\>

#### Defined in

loader/parser/gltf/GLTFSubParserMaterial.ts:17
