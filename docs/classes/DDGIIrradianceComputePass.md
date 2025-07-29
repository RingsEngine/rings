[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / DDGIIrradianceComputePass

# Class: DDGIIrradianceComputePass

## Table of contents

### Constructors

- [constructor](DDGIIrradianceComputePass.md#constructor)

### Methods

- [setTextures](DDGIIrradianceComputePass.md#settextures)
- [readBuffer](DDGIIrradianceComputePass.md#readbuffer)
- [compute](DDGIIrradianceComputePass.md#compute)

## Constructors

### constructor

• **new DDGIIrradianceComputePass**(`volume`): [`DDGIIrradianceComputePass`](DDGIIrradianceComputePass.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `volume` | [`DDGIIrradianceVolume`](DDGIIrradianceVolume.md) |

#### Returns

[`DDGIIrradianceComputePass`](DDGIIrradianceComputePass.md)

#### Defined in

gfx/renderJob/passRenderer/ddgi/DDGIIrradianceComputePass.ts:21

## Methods

### setTextures

▸ **setTextures**(`inputs`, `probeIrradianceMap`, `probeDepthMap`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputs` | [`RenderTexture`](RenderTexture.md)[] |
| `probeIrradianceMap` | [`RenderTexture`](RenderTexture.md) |
| `probeDepthMap` | [`RenderTexture`](RenderTexture.md) |

#### Returns

`void`

#### Defined in

gfx/renderJob/passRenderer/ddgi/DDGIIrradianceComputePass.ts:68

___

### readBuffer

▸ **readBuffer**(): `Float32Array`\<`ArrayBufferLike`\>

#### Returns

`Float32Array`\<`ArrayBufferLike`\>

#### Defined in

gfx/renderJob/passRenderer/ddgi/DDGIIrradianceComputePass.ts:90

___

### compute

▸ **compute**(`view`, `renderPassState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `renderPassState` | [`RendererPassState`](RendererPassState.md) |

#### Returns

`void`

#### Defined in

gfx/renderJob/passRenderer/ddgi/DDGIIrradianceComputePass.ts:94
