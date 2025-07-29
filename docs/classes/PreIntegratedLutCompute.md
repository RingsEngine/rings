[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / PreIntegratedLutCompute

# Class: PreIntegratedLutCompute

## Hierarchy

- [`RenderShaderCompute`](RenderShaderCompute.md)

  ↳ **`PreIntegratedLutCompute`**

## Table of contents

### Constructors

- [constructor](PreIntegratedLutCompute.md#constructor)

### Properties

- [sourceShader](PreIntegratedLutCompute.md#sourceshader)
- [compute](PreIntegratedLutCompute.md#compute)
- [needUpdate](PreIntegratedLutCompute.md#needupdate)

### Methods

- [init](PreIntegratedLutCompute.md#init)
- [onFrame](PreIntegratedLutCompute.md#onframe)
- [onOnce](PreIntegratedLutCompute.md#ononce)
- [onUpdate](PreIntegratedLutCompute.md#onupdate)

## Constructors

### constructor

• **new PreIntegratedLutCompute**(`shader`): [`PreIntegratedLutCompute`](PreIntegratedLutCompute.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `shader` | [`Shader`](Shader.md) |

#### Returns

[`PreIntegratedLutCompute`](PreIntegratedLutCompute.md)

#### Overrides

[RenderShaderCompute](RenderShaderCompute.md).[constructor](RenderShaderCompute.md#constructor)

#### Defined in

gfx/graphics/webGpu/compute/PreIntegratedLutCompute.ts:9

## Properties

### sourceShader

• `Protected` **sourceShader**: [`Shader`](Shader.md)

#### Inherited from

[RenderShaderCompute](RenderShaderCompute.md).[sourceShader](RenderShaderCompute.md#sourceshader)

#### Defined in

gfx/graphics/webGpu/compute/RenderShaderCompute.ts:5

___

### compute

• `Protected` **compute**: [`ComputeShader`](ComputeShader.md)

#### Inherited from

[RenderShaderCompute](RenderShaderCompute.md).[compute](RenderShaderCompute.md#compute)

#### Defined in

gfx/graphics/webGpu/compute/RenderShaderCompute.ts:6

___

### needUpdate

• `Protected` **needUpdate**: `boolean` = `true`

#### Inherited from

[RenderShaderCompute](RenderShaderCompute.md).[needUpdate](RenderShaderCompute.md#needupdate)

#### Defined in

gfx/graphics/webGpu/compute/RenderShaderCompute.ts:8

## Methods

### init

▸ **init**(): [`VirtualTexture`](VirtualTexture.md)

#### Returns

[`VirtualTexture`](VirtualTexture.md)

#### Overrides

[RenderShaderCompute](RenderShaderCompute.md).[init](RenderShaderCompute.md#init)

#### Defined in

gfx/graphics/webGpu/compute/PreIntegratedLutCompute.ts:13

___

### onFrame

▸ **onFrame**(): `void`

#### Returns

`void`

#### Overrides

[RenderShaderCompute](RenderShaderCompute.md).[onFrame](RenderShaderCompute.md#onframe)

#### Defined in

gfx/graphics/webGpu/compute/PreIntegratedLutCompute.ts:26

___

### onOnce

▸ **onOnce**(): `any`

#### Returns

`any`

#### Inherited from

[RenderShaderCompute](RenderShaderCompute.md).[onOnce](RenderShaderCompute.md#ononce)

#### Defined in

gfx/graphics/webGpu/compute/RenderShaderCompute.ts:18

___

### onUpdate

▸ **onUpdate**(): `void`

#### Returns

`void`

#### Inherited from

[RenderShaderCompute](RenderShaderCompute.md).[onUpdate](RenderShaderCompute.md#onupdate)

#### Defined in

gfx/graphics/webGpu/compute/RenderShaderCompute.ts:22
