[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / PipelinePool

# Class: PipelinePool

## Table of contents

### Constructors

- [constructor](PipelinePool.md#constructor)

### Methods

- [getSharePipeline](PipelinePool.md#getsharepipeline)
- [setSharePipeline](PipelinePool.md#setsharepipeline)

## Constructors

### constructor

• **new PipelinePool**(): [`PipelinePool`](PipelinePool.md)

#### Returns

[`PipelinePool`](PipelinePool.md)

## Methods

### getSharePipeline

▸ **getSharePipeline**(`shaderVariant`): `GPURenderPipeline`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shaderVariant` | `string` |

#### Returns

`GPURenderPipeline`

#### Defined in

gfx/graphics/webGpu/PipelinePool.ts:6

___

### setSharePipeline

▸ **setSharePipeline**(`shaderVariant`, `pipeline`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shaderVariant` | `string` |
| `pipeline` | `GPURenderPipeline` |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/PipelinePool.ts:14
