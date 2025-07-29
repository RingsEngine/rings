[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / GLTFSubParserCamera

# Class: GLTFSubParserCamera

## Table of contents

### Constructors

- [constructor](GLTFSubParserCamera.md#constructor)

### Properties

- [gltf](GLTFSubParserCamera.md#gltf)

### Methods

- [parse](GLTFSubParserCamera.md#parse)
- [errorMiss](GLTFSubParserCamera.md#errormiss)

## Constructors

### constructor

• **new GLTFSubParserCamera**(`gltf`): [`GLTFSubParserCamera`](GLTFSubParserCamera.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `gltf` | [`GLTF_Info`](GLTF_Info.md) |

#### Returns

[`GLTFSubParserCamera`](GLTFSubParserCamera.md)

#### Defined in

loader/parser/gltf/GLTFSubParserCamera.ts:6

## Properties

### gltf

• `Protected` **gltf**: [`GLTF_Info`](GLTF_Info.md)

#### Defined in

loader/parser/gltf/GLTFSubParserCamera.ts:4

## Methods

### parse

▸ **parse**(`cameraId`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cameraId` | `any` |

#### Returns

`any`

#### Defined in

loader/parser/gltf/GLTFSubParserCamera.ts:10

___

### errorMiss

▸ **errorMiss**(`e`, `info?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `any` |
| `info?` | `any` |

#### Returns

`void`

#### Defined in

loader/parser/gltf/GLTFSubParserCamera.ts:53
