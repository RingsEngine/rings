[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / ZCullingCompute

# Class: ZCullingCompute

## Table of contents

### Constructors

- [constructor](ZCullingCompute.md#constructor)

### Properties

- [computeShader](ZCullingCompute.md#computeshader)
- [visibleBuffer](ZCullingCompute.md#visiblebuffer)
- [texture](ZCullingCompute.md#texture)

### Methods

- [compute](ZCullingCompute.md#compute)

## Constructors

### constructor

• **new ZCullingCompute**(): [`ZCullingCompute`](ZCullingCompute.md)

#### Returns

[`ZCullingCompute`](ZCullingCompute.md)

#### Defined in

gfx/renderJob/passRenderer/preDepth/ZCullingCompute.ts:15

## Properties

### computeShader

• **computeShader**: [`ComputeShader`](ComputeShader.md)

#### Defined in

gfx/renderJob/passRenderer/preDepth/ZCullingCompute.ts:12

___

### visibleBuffer

• **visibleBuffer**: [`ComputeGPUBuffer`](ComputeGPUBuffer.md)

#### Defined in

gfx/renderJob/passRenderer/preDepth/ZCullingCompute.ts:13

___

### texture

• **texture**: [`Texture`](Texture.md)

#### Defined in

gfx/renderJob/passRenderer/preDepth/ZCullingCompute.ts:14

## Methods

### compute

▸ **compute**(`scene`, `occlusionSystem`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scene` | [`Scene3D`](Scene3D.md) |
| `occlusionSystem` | [`OcclusionSystem`](OcclusionSystem.md) |

#### Returns

`void`

#### Defined in

gfx/renderJob/passRenderer/preDepth/ZCullingCompute.ts:27
