[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / GPUContext

# Class: GPUContext

## Table of contents

### Constructors

- [constructor](GPUContext.md#constructor)

### Properties

- [lastGeometry](GPUContext.md#lastgeometry)
- [lastPipeline](GPUContext.md#lastpipeline)
- [lastShader](GPUContext.md#lastshader)
- [drawCount](GPUContext.md#drawcount)
- [renderPassCount](GPUContext.md#renderpasscount)
- [geometryCount](GPUContext.md#geometrycount)
- [pipelineCount](GPUContext.md#pipelinecount)
- [matrixCount](GPUContext.md#matrixcount)
- [lastRenderPassState](GPUContext.md#lastrenderpassstate)
- [LastCommand](GPUContext.md#lastcommand)

### Methods

- [bindPipeline](GPUContext.md#bindpipeline)
- [bindCamera](GPUContext.md#bindcamera)
- [bindGeometryBuffer](GPUContext.md#bindgeometrybuffer)
- [cleanCache](GPUContext.md#cleancache)
- [createPipeline](GPUContext.md#createpipeline)
- [beginCommandEncoder](GPUContext.md#begincommandencoder)
- [endCommandEncoder](GPUContext.md#endcommandencoder)
- [recordBundleEncoder](GPUContext.md#recordbundleencoder)
- [beginRenderPass](GPUContext.md#beginrenderpass)
- [drawIndexed](GPUContext.md#drawindexed)
- [draw](GPUContext.md#draw)
- [endPass](GPUContext.md#endpass)
- [computeCommand](GPUContext.md#computecommand)
- [copyTexture](GPUContext.md#copytexture)

## Constructors

### constructor

• **new GPUContext**(): [`GPUContext`](GPUContext.md)

#### Returns

[`GPUContext`](GPUContext.md)

## Properties

### lastGeometry

▪ `Static` **lastGeometry**: [`GeometryBase`](GeometryBase.md)

#### Defined in

gfx/renderJob/GPUContext.ts:12

___

### lastPipeline

▪ `Static` **lastPipeline**: `GPURenderPipeline`

#### Defined in

gfx/renderJob/GPUContext.ts:13

___

### lastShader

▪ `Static` **lastShader**: [`RenderShaderPass`](RenderShaderPass.md)

#### Defined in

gfx/renderJob/GPUContext.ts:14

___

### drawCount

▪ `Static` **drawCount**: `number` = `0`

#### Defined in

gfx/renderJob/GPUContext.ts:15

___

### renderPassCount

▪ `Static` **renderPassCount**: `number` = `0`

#### Defined in

gfx/renderJob/GPUContext.ts:16

___

### geometryCount

▪ `Static` **geometryCount**: `number` = `0`

#### Defined in

gfx/renderJob/GPUContext.ts:17

___

### pipelineCount

▪ `Static` **pipelineCount**: `number` = `0`

#### Defined in

gfx/renderJob/GPUContext.ts:18

___

### matrixCount

▪ `Static` **matrixCount**: `number` = `0`

#### Defined in

gfx/renderJob/GPUContext.ts:19

___

### lastRenderPassState

▪ `Static` **lastRenderPassState**: [`RendererPassState`](RendererPassState.md)

#### Defined in

gfx/renderJob/GPUContext.ts:20

___

### LastCommand

▪ `Static` **LastCommand**: `GPUCommandEncoder`

#### Defined in

gfx/renderJob/GPUContext.ts:21

## Methods

### bindPipeline

▸ **bindPipeline**(`encoder`, `renderShader`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoder` | `GPURenderPassEncoder` \| `GPURenderBundleEncoder` |
| `renderShader` | [`RenderShaderPass`](RenderShaderPass.md) |

#### Returns

`boolean`

#### Defined in

gfx/renderJob/GPUContext.ts:23

___

### bindCamera

▸ **bindCamera**(`encoder`, `camera`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoder` | `GPURenderPassEncoder` \| `GPURenderBundleEncoder` |
| `camera` | [`Camera3D`](Camera3D.md) |

#### Returns

`void`

#### Defined in

gfx/renderJob/GPUContext.ts:47

___

### bindGeometryBuffer

▸ **bindGeometryBuffer**(`encoder`, `geometry`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoder` | `GPURenderPassEncoder` \| `GPURenderBundleEncoder` |
| `geometry` | [`GeometryBase`](GeometryBase.md) |

#### Returns

`void`

#### Defined in

gfx/renderJob/GPUContext.ts:55

___

### cleanCache

▸ **cleanCache**(): `void`

#### Returns

`void`

#### Defined in

gfx/renderJob/GPUContext.ts:82

___

### createPipeline

▸ **createPipeline**(`gpuRenderPipeline`): `GPURenderPipeline`

#### Parameters

| Name | Type |
| :------ | :------ |
| `gpuRenderPipeline` | `GPURenderPipelineDescriptor` |

#### Returns

`GPURenderPipeline`

#### Defined in

gfx/renderJob/GPUContext.ts:88

___

### beginCommandEncoder

▸ **beginCommandEncoder**(): `GPUCommandEncoder`

#### Returns

`GPUCommandEncoder`

#### Defined in

gfx/renderJob/GPUContext.ts:95

___

### endCommandEncoder

▸ **endCommandEncoder**(`command`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `GPUCommandEncoder` |

#### Returns

`void`

#### Defined in

gfx/renderJob/GPUContext.ts:104

___

### recordBundleEncoder

▸ **recordBundleEncoder**(`des`): `GPURenderBundleEncoder`

#### Parameters

| Name | Type |
| :------ | :------ |
| `des` | `GPURenderBundleEncoderDescriptor` |

#### Returns

`GPURenderBundleEncoder`

#### Defined in

gfx/renderJob/GPUContext.ts:113

___

### beginRenderPass

▸ **beginRenderPass**(`command`, `renderPassState`): `GPURenderPassEncoder`

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `GPUCommandEncoder` |
| `renderPassState` | [`RendererPassState`](RendererPassState.md) |

#### Returns

`GPURenderPassEncoder`

#### Defined in

gfx/renderJob/GPUContext.ts:121

___

### drawIndexed

▸ **drawIndexed**(`encoder`, `indexCount`, `instanceCount?`, `firstIndex?`, `baseVertex?`, `firstInstance?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoder` | `GPURenderPassEncoder` |
| `indexCount` | `number` |
| `instanceCount?` | `number` |
| `firstIndex?` | `number` |
| `baseVertex?` | `number` |
| `firstInstance?` | `number` |

#### Returns

`void`

#### Defined in

gfx/renderJob/GPUContext.ts:166

___

### draw

▸ **draw**(`encoder`, `vertexCount`, `instanceCount?`, `firstVertex?`, `firstInstance?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoder` | `GPURenderPassEncoder` |
| `vertexCount` | `number` |
| `instanceCount?` | `number` |
| `firstVertex?` | `number` |
| `firstInstance?` | `number` |

#### Returns

`void`

#### Defined in

gfx/renderJob/GPUContext.ts:184

___

### endPass

▸ **endPass**(`encoder`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoder` | `GPURenderPassEncoder` |

#### Returns

`void`

#### Defined in

gfx/renderJob/GPUContext.ts:195

___

### computeCommand

▸ **computeCommand**(`command`, `computes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `GPUCommandEncoder` |
| `computes` | [`ComputeShader`](ComputeShader.md)[] |

#### Returns

`void`

#### Defined in

gfx/renderJob/GPUContext.ts:200

___

### copyTexture

▸ **copyTexture**(`command`, `source`, `dest`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `GPUCommandEncoder` |
| `source` | [`Texture`](Texture.md) |
| `dest` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Defined in

gfx/renderJob/GPUContext.ts:212
