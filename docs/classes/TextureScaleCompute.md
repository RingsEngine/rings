[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / TextureScaleCompute

# Class: TextureScaleCompute

## Table of contents

### Constructors

- [constructor](TextureScaleCompute.md#constructor)

### Properties

- [computeShader](TextureScaleCompute.md#computeshader)

### Methods

- [setInputes](TextureScaleCompute.md#setinputes)

## Constructors

### constructor

• **new TextureScaleCompute**(): [`TextureScaleCompute`](TextureScaleCompute.md)

#### Returns

[`TextureScaleCompute`](TextureScaleCompute.md)

## Properties

### computeShader

• **computeShader**: [`ComputeShader`](ComputeShader.md)

#### Defined in

gfx/generate/convert/TextureScaleCompute.ts:5

## Methods

### setInputes

▸ **setInputes**(`colorMap`, `inputs`, `outputs`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `colorMap` | [`Texture`](Texture.md) |
| `inputs` | [`Texture`](Texture.md)[] |
| `outputs` | [`Texture`](Texture.md)[] |

#### Returns

`void`

#### Defined in

gfx/generate/convert/TextureScaleCompute.ts:7
