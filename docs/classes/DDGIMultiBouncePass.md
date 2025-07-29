[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / DDGIMultiBouncePass

# Class: DDGIMultiBouncePass

## Table of contents

### Constructors

- [constructor](DDGIMultiBouncePass.md#constructor)

### Properties

- [blendTexture](DDGIMultiBouncePass.md#blendtexture)

### Methods

- [setInputs](DDGIMultiBouncePass.md#setinputs)
- [compute](DDGIMultiBouncePass.md#compute)

## Constructors

### constructor

• **new DDGIMultiBouncePass**(`volume`): [`DDGIMultiBouncePass`](DDGIMultiBouncePass.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `volume` | [`DDGIIrradianceVolume`](DDGIIrradianceVolume.md) |

#### Returns

[`DDGIMultiBouncePass`](DDGIMultiBouncePass.md)

#### Defined in

gfx/renderJob/passRenderer/ddgi/DDGIMultiBouncePass.ts:16

## Properties

### blendTexture

• **blendTexture**: [`RenderTexture`](RenderTexture.md)

#### Defined in

gfx/renderJob/passRenderer/ddgi/DDGIMultiBouncePass.ts:12

## Methods

### setInputs

▸ **setInputs**(`inputs`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputs` | [`RenderTexture`](RenderTexture.md)[] |

#### Returns

`void`

#### Defined in

gfx/renderJob/passRenderer/ddgi/DDGIMultiBouncePass.ts:39

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

gfx/renderJob/passRenderer/ddgi/DDGIMultiBouncePass.ts:51
