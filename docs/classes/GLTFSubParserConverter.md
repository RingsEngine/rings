[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / GLTFSubParserConverter

# Class: GLTFSubParserConverter

## Table of contents

### Constructors

- [constructor](GLTFSubParserConverter.md#constructor)

### Properties

- [gltf](GLTFSubParserConverter.md#gltf)
- [subParser](GLTFSubParserConverter.md#subparser)

### Methods

- [convertNodeToObject3D](GLTFSubParserConverter.md#convertnodetoobject3d)

## Constructors

### constructor

• **new GLTFSubParserConverter**(`subParser`): [`GLTFSubParserConverter`](GLTFSubParserConverter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `subParser` | [`GLTFSubParser`](GLTFSubParser.md) |

#### Returns

[`GLTFSubParserConverter`](GLTFSubParserConverter.md)

#### Defined in

loader/parser/gltf/GLTFSubParserConverter.ts:38

## Properties

### gltf

• `Protected` **gltf**: [`GLTF_Info`](GLTF_Info.md)

#### Defined in

loader/parser/gltf/GLTFSubParserConverter.ts:33

___

### subParser

• `Protected` **subParser**: [`GLTFSubParser`](GLTFSubParser.md)

#### Defined in

loader/parser/gltf/GLTFSubParserConverter.ts:34

## Methods

### convertNodeToObject3D

▸ **convertNodeToObject3D**(`nodeInfo`, `parentNode`): `Promise`\<[`Object3D`](Object3D.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeInfo` | [`GLTF_Node`](GLTF_Node.md) |
| `parentNode` | `any` |

#### Returns

`Promise`\<[`Object3D`](Object3D.md)\>

#### Defined in

loader/parser/gltf/GLTFSubParserConverter.ts:43
