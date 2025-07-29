[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / ShaderConverter

# Class: ShaderConverter

## Table of contents

### Constructors

- [constructor](ShaderConverter.md#constructor)

### Properties

- [VertexShader](ShaderConverter.md#vertexshader)
- [FragmentShader](ShaderConverter.md#fragmentshader)

### Methods

- [convertGLSL](ShaderConverter.md#convertglsl)

## Constructors

### constructor

• **new ShaderConverter**(): [`ShaderConverter`](ShaderConverter.md)

#### Returns

[`ShaderConverter`](ShaderConverter.md)

## Properties

### VertexShader

▪ `Static` **VertexShader**: `string` = `"VertexShader"`

Shader type: Vertex stage

#### Defined in

gfx/graphics/webGpu/shader/converter/ShaderConverter.ts:10

___

### FragmentShader

▪ `Static` **FragmentShader**: `string` = `"FragmentShader"`

Shader type: Fragment stage

#### Defined in

gfx/graphics/webGpu/shader/converter/ShaderConverter.ts:15

## Methods

### convertGLSL

▸ **convertGLSL**(`source`): [`ShaderConverterResult`](ShaderConverterResult.md)

Convert GLSL code to WGSL

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `string` | GLSL |

#### Returns

[`ShaderConverterResult`](ShaderConverterResult.md)

WGSL

#### Defined in

gfx/graphics/webGpu/shader/converter/ShaderConverter.ts:22
