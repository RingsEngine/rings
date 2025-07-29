[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / RenderShaderCompute

# Class: RenderShaderCompute

## Hierarchy

- **`RenderShaderCompute`**

  ↳ [`PreIntegratedLutCompute`](PreIntegratedLutCompute.md)

## Table of contents

### Constructors

- [constructor](RenderShaderCompute.md#constructor)

### Properties

- [sourceShader](RenderShaderCompute.md#sourceshader)
- [compute](RenderShaderCompute.md#compute)
- [needUpdate](RenderShaderCompute.md#needupdate)

### Methods

- [init](RenderShaderCompute.md#init)
- [onOnce](RenderShaderCompute.md#ononce)
- [onFrame](RenderShaderCompute.md#onframe)
- [onUpdate](RenderShaderCompute.md#onupdate)

## Constructors

### constructor

• **new RenderShaderCompute**(`shaderStr`, `sourceShader`): [`RenderShaderCompute`](RenderShaderCompute.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `shaderStr` | `string` |
| `sourceShader` | [`Shader`](Shader.md) |

#### Returns

[`RenderShaderCompute`](RenderShaderCompute.md)

#### Defined in

gfx/graphics/webGpu/compute/RenderShaderCompute.ts:10

## Properties

### sourceShader

• `Protected` **sourceShader**: [`Shader`](Shader.md)

#### Defined in

gfx/graphics/webGpu/compute/RenderShaderCompute.ts:5

___

### compute

• `Protected` **compute**: [`ComputeShader`](ComputeShader.md)

#### Defined in

gfx/graphics/webGpu/compute/RenderShaderCompute.ts:6

___

### needUpdate

• `Protected` **needUpdate**: `boolean` = `true`

#### Defined in

gfx/graphics/webGpu/compute/RenderShaderCompute.ts:8

## Methods

### init

▸ **init**(): `void`

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/compute/RenderShaderCompute.ts:16

___

### onOnce

▸ **onOnce**(): `any`

#### Returns

`any`

#### Defined in

gfx/graphics/webGpu/compute/RenderShaderCompute.ts:18

___

### onFrame

▸ **onFrame**(): `any`

#### Returns

`any`

#### Defined in

gfx/graphics/webGpu/compute/RenderShaderCompute.ts:20

___

### onUpdate

▸ **onUpdate**(): `void`

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/compute/RenderShaderCompute.ts:22
