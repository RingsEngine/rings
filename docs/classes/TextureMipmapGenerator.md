[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / TextureMipmapGenerator

# Class: TextureMipmapGenerator

## Table of contents

### Constructors

- [constructor](TextureMipmapGenerator.md#constructor)

### Methods

- [getMipmapPipeline](TextureMipmapGenerator.md#getmipmappipeline)
- [webGPUGenerateMipmap](TextureMipmapGenerator.md#webgpugeneratemipmap)
- [getMipmapCount](TextureMipmapGenerator.md#getmipmapcount)

## Constructors

### constructor

• **new TextureMipmapGenerator**(): [`TextureMipmapGenerator`](TextureMipmapGenerator.md)

#### Returns

[`TextureMipmapGenerator`](TextureMipmapGenerator.md)

## Methods

### getMipmapPipeline

▸ **getMipmapPipeline**(`texture`): `GPURenderPipeline`

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | [`Texture`](Texture.md) |

#### Returns

`GPURenderPipeline`

#### Defined in

gfx/graphics/webGpu/core/texture/TextureMipmapGenerator.ts:36

___

### webGPUGenerateMipmap

▸ **webGPUGenerateMipmap**(`texture`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/core/texture/TextureMipmapGenerator.ts:96

___

### getMipmapCount

▸ **getMipmapCount**(`width`, `height`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `height` | `number` |

#### Returns

`number`

#### Defined in

gfx/graphics/webGpu/core/texture/TextureMipmapGenerator.ts:174
