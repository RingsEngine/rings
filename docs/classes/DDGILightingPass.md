[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / DDGILightingPass

# Class: DDGILightingPass

## Table of contents

### Constructors

- [constructor](DDGILightingPass.md#constructor)

### Properties

- [lightingTexture](DDGILightingPass.md#lightingtexture)

### Methods

- [setInputs](DDGILightingPass.md#setinputs)
- [compute](DDGILightingPass.md#compute)

## Constructors

### constructor

• **new DDGILightingPass**(): [`DDGILightingPass`](DDGILightingPass.md)

#### Returns

[`DDGILightingPass`](DDGILightingPass.md)

#### Defined in

gfx/renderJob/passRenderer/ddgi/DDGILightingPass.ts:21

## Properties

### lightingTexture

• **lightingTexture**: [`RenderTexture`](RenderTexture.md)

#### Defined in

gfx/renderJob/passRenderer/ddgi/DDGILightingPass.ts:20

## Methods

### setInputs

▸ **setInputs**(`inputs`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputs` | [`Texture`](Texture.md)[] |

#### Returns

`void`

#### Defined in

gfx/renderJob/passRenderer/ddgi/DDGILightingPass.ts:63

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

gfx/renderJob/passRenderer/ddgi/DDGILightingPass.ts:71
