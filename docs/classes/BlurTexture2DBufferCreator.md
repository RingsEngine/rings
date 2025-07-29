[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / BlurTexture2DBufferCreator

# Class: BlurTexture2DBufferCreator

## Table of contents

### Constructors

- [constructor](BlurTexture2DBufferCreator.md#constructor)

### Methods

- [blurImageFromTexture](BlurTexture2DBufferCreator.md#blurimagefromtexture)

## Constructors

### constructor

• **new BlurTexture2DBufferCreator**(): [`BlurTexture2DBufferCreator`](BlurTexture2DBufferCreator.md)

#### Returns

[`BlurTexture2DBufferCreator`](BlurTexture2DBufferCreator.md)

## Methods

### blurImageFromTexture

▸ **blurImageFromTexture**(`image`, `dstWidth`, `dstHeight`, `blur`): `GPUTexture`

#### Parameters

| Name | Type |
| :------ | :------ |
| `image` | `Object` |
| `image.width` | `number` |
| `image.height` | `number` |
| `image.gpuTexture` | `GPUTexture` |
| `dstWidth` | `number` |
| `dstHeight` | `number` |
| `blur` | `boolean` |

#### Returns

`GPUTexture`

#### Defined in

gfx/generate/convert/BlurEffectCreator.ts:9
