[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / ITexture

# Interface: ITexture

## Implemented by

- [`BitmapTexture2DArray`](../classes/BitmapTexture2DArray.md)
- [`Depth2DTextureArray`](../classes/Depth2DTextureArray.md)
- [`DepthCubeArrayTexture`](../classes/DepthCubeArrayTexture.md)

## Table of contents

### Methods

- [internalCreateBindingLayoutDesc](ITexture.md#internalcreatebindinglayoutdesc)
- [internalCreateTexture](ITexture.md#internalcreatetexture)
- [internalCreateView](ITexture.md#internalcreateview)
- [internalCreateSampler](ITexture.md#internalcreatesampler)

## Methods

### internalCreateBindingLayoutDesc

▸ **internalCreateBindingLayoutDesc**(): `any`

create binding layout description

#### Returns

`any`

#### Defined in

gfx/graphics/webGpu/core/texture/ITexture.ts:5

___

### internalCreateTexture

▸ **internalCreateTexture**(): `any`

create texture instance

#### Returns

`any`

#### Defined in

gfx/graphics/webGpu/core/texture/ITexture.ts:10

___

### internalCreateView

▸ **internalCreateView**(): `any`

create GPU View

#### Returns

`any`

#### Defined in

gfx/graphics/webGpu/core/texture/ITexture.ts:15

___

### internalCreateSampler

▸ **internalCreateSampler**(): `any`

create CPU Sample

#### Returns

`any`

#### Defined in

gfx/graphics/webGpu/core/texture/ITexture.ts:20
