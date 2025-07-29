[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / IBLEnvMapCreator

# Class: IBLEnvMapCreator

## Table of contents

### Constructors

- [constructor](IBLEnvMapCreator.md#constructor)

### Methods

- [importantSample](IBLEnvMapCreator.md#importantsample)

## Constructors

### constructor

• **new IBLEnvMapCreator**(): [`IBLEnvMapCreator`](IBLEnvMapCreator.md)

#### Returns

[`IBLEnvMapCreator`](IBLEnvMapCreator.md)

## Methods

### importantSample

▸ **importantSample**(`image`, `dstSize`, `roughness`, `dstView`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `image` | `Object` |
| `image.width` | `number` |
| `image.height` | `number` |
| `image.erpTexture` | [`Texture`](Texture.md) |
| `dstSize` | `number` |
| `roughness` | `number` |
| `dstView` | `GPUTextureView` |

#### Returns

`void`

#### Defined in

gfx/generate/convert/IBLEnvMapCreator.ts:13
