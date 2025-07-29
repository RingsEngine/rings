[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / RenderContext

# Class: RenderContext

## Table of contents

### Constructors

- [constructor](RenderContext.md#constructor)

### Properties

- [command](RenderContext.md#command)
- [encoder](RenderContext.md#encoder)

### Accessors

- [rendererPassState](RenderContext.md#rendererpassstate)

### Methods

- [clean](RenderContext.md#clean)
- [beginContinueRendererPassState](RenderContext.md#begincontinuerendererpassstate)
- [beginOpaqueRenderPass](RenderContext.md#beginopaquerenderpass)
- [beginTransparentRenderPass](RenderContext.md#begintransparentrenderpass)
- [specialtRenderPass](RenderContext.md#specialtrenderpass)
- [endRenderPass](RenderContext.md#endrenderpass)
- [begineNewCommand](RenderContext.md#beginenewcommand)
- [endCommand](RenderContext.md#endcommand)
- [beginNewEncoder](RenderContext.md#beginnewencoder)
- [endEncoder](RenderContext.md#endencoder)

## Constructors

### constructor

• **new RenderContext**(`rtFrame`): [`RenderContext`](RenderContext.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rtFrame` | [`RTFrame`](RTFrame.md) |

#### Returns

[`RenderContext`](RenderContext.md)

#### Defined in

gfx/renderJob/passRenderer/RenderContext.ts:12

## Properties

### command

• **command**: `GPUCommandEncoder`

#### Defined in

gfx/renderJob/passRenderer/RenderContext.ts:7

___

### encoder

• **encoder**: `GPURenderPassEncoder`

#### Defined in

gfx/renderJob/passRenderer/RenderContext.ts:8

## Accessors

### rendererPassState

• `get` **rendererPassState**(): [`RendererPassState`](RendererPassState.md)

#### Returns

[`RendererPassState`](RendererPassState.md)

#### Defined in

gfx/renderJob/passRenderer/RenderContext.ts:51

## Methods

### clean

▸ **clean**(): `void`

#### Returns

`void`

#### Defined in

gfx/renderJob/passRenderer/RenderContext.ts:17

___

### beginContinueRendererPassState

▸ **beginContinueRendererPassState**(`color_loadOp?`, `depth_loadOp?`): [`RendererPassState`](RendererPassState.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `color_loadOp` | `GPULoadOp` | `"load"` |
| `depth_loadOp` | `GPULoadOp` | `"load"` |

#### Returns

[`RendererPassState`](RendererPassState.md)

#### Defined in

gfx/renderJob/passRenderer/RenderContext.ts:22

___

### beginOpaqueRenderPass

▸ **beginOpaqueRenderPass**(): `void`

#### Returns

`void`

#### Defined in

gfx/renderJob/passRenderer/RenderContext.ts:55

___

### beginTransparentRenderPass

▸ **beginTransparentRenderPass**(): `void`

#### Returns

`void`

#### Defined in

gfx/renderJob/passRenderer/RenderContext.ts:61

___

### specialtRenderPass

▸ **specialtRenderPass**(): `void`

#### Returns

`void`

#### Defined in

gfx/renderJob/passRenderer/RenderContext.ts:67

___

### endRenderPass

▸ **endRenderPass**(): `void`

#### Returns

`void`

#### Defined in

gfx/renderJob/passRenderer/RenderContext.ts:73

___

### begineNewCommand

▸ **begineNewCommand**(): `GPUCommandEncoder`

#### Returns

`GPUCommandEncoder`

#### Defined in

gfx/renderJob/passRenderer/RenderContext.ts:78

___

### endCommand

▸ **endCommand**(): `void`

#### Returns

`void`

#### Defined in

gfx/renderJob/passRenderer/RenderContext.ts:83

___

### beginNewEncoder

▸ **beginNewEncoder**(): `GPURenderPassEncoder`

#### Returns

`GPURenderPassEncoder`

#### Defined in

gfx/renderJob/passRenderer/RenderContext.ts:88

___

### endEncoder

▸ **endEncoder**(): `void`

#### Returns

`void`

#### Defined in

gfx/renderJob/passRenderer/RenderContext.ts:96
