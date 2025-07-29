[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / Texture

# Class: Texture

## Hierarchy

- **`Texture`**

  ↳ [`TextureCube`](TextureCube.md)

  ↳ [`BitmapTexture2D`](BitmapTexture2D.md)

  ↳ [`BitmapTexture2DArray`](BitmapTexture2DArray.md)

  ↳ [`Depth2DTextureArray`](Depth2DTextureArray.md)

  ↳ [`DepthCubeArrayTexture`](DepthCubeArrayTexture.md)

  ↳ [`Float16ArrayTexture`](Float16ArrayTexture.md)

  ↳ [`Float32ArrayTexture`](Float32ArrayTexture.md)

  ↳ [`HDRTexture`](HDRTexture.md)

  ↳ [`RenderTexture`](RenderTexture.md)

  ↳ [`Uint8ArrayTexture`](Uint8ArrayTexture.md)

  ↳ [`VirtualTexture`](VirtualTexture.md)

## Implements

- `GPUSamplerDescriptor`

## Table of contents

### Constructors

- [constructor](Texture.md#constructor)

### Properties

- [name](Texture.md#name)
- [url](Texture.md#url)
- [gpuTexture](Texture.md#gputexture)
- [pid](Texture.md#pid)
- [view](Texture.md#view)
- [gpuSampler](Texture.md#gpusampler)
- [gpuSampler\_comparison](Texture.md#gpusampler_comparison)
- [format](Texture.md#format)
- [usage](Texture.md#usage)
- [width](Texture.md#width)
- [height](Texture.md#height)
- [depthOrArrayLayers](Texture.md#depthorarraylayers)
- [numberLayer](Texture.md#numberlayer)
- [viewDescriptor](Texture.md#viewdescriptor)
- [textureDescriptor](Texture.md#texturedescriptor)
- [visibility](Texture.md#visibility)
- [textureBindingLayout](Texture.md#texturebindinglayout)
- [samplerBindingLayout](Texture.md#samplerbindinglayout)
- [sampler\_comparisonBindingLayout](Texture.md#sampler_comparisonbindinglayout)
- [flipY](Texture.md#flipy)
- [isVideoTexture](Texture.md#isvideotexture)
- [isHDRTexture](Texture.md#ishdrtexture)
- [mipmapCount](Texture.md#mipmapcount)
- [\_textureChange](Texture.md#_texturechange)
- [\_stateChangeRef](Texture.md#_statechangeref)

### Accessors

- [useMipmap](Texture.md#usemipmap)
- [sourceImageData](Texture.md#sourceimagedata)
- [addressModeU](Texture.md#addressmodeu)
- [addressModeV](Texture.md#addressmodev)
- [addressModeW](Texture.md#addressmodew)
- [magFilter](Texture.md#magfilter)
- [minFilter](Texture.md#minfilter)
- [mipmapFilter](Texture.md#mipmapfilter)
- [lodMinClamp](Texture.md#lodminclamp)
- [lodMaxClamp](Texture.md#lodmaxclamp)
- [compare](Texture.md#compare)
- [maxAnisotropy](Texture.md#maxanisotropy)

### Methods

- [init](Texture.md#init)
- [createTextureDescriptor](Texture.md#createtexturedescriptor)
- [generate](Texture.md#generate)
- [getMipmapCount](Texture.md#getmipmapcount)
- [updateTextureDescription](Texture.md#updatetexturedescription)
- [updateGPUTexture](Texture.md#updategputexture)
- [getGPUTexture](Texture.md#getgputexture)
- [getGPUView](Texture.md#getgpuview)
- [bindStateChange](Texture.md#bindstatechange)
- [unBindStateChange](Texture.md#unbindstatechange)
- [noticeChange](Texture.md#noticechange)
- [destroy](Texture.md#destroy)
- [delayDestroyTexture](Texture.md#delaydestroytexture)
- [destroyTexture](Texture.md#destroytexture)

## Constructors

### constructor

• **new Texture**(`width?`, `height?`, `numberLayer?`): [`Texture`](Texture.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `width` | `number` | `32` |
| `height` | `number` | `32` |
| `numberLayer` | `number` | `1` |

#### Returns

[`Texture`](Texture.md)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:51

## Properties

### name

• **name**: `string`

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:6

___

### url

• **url**: `string`

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:7

___

### gpuTexture

• `Protected` **gpuTexture**: `GPUTexture`

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:8

___

### pid

• **pid**: `number`

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:9

___

### view

• **view**: `GPUTextureView` \| `GPUExternalTexture`

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:10

___

### gpuSampler

• **gpuSampler**: `GPUSampler`

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:11

___

### gpuSampler\_comparison

• **gpuSampler\_comparison**: `GPUSampler`

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:12

___

### format

• **format**: `GPUTextureFormat`

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:13

___

### usage

• **usage**: `number`

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:14

___

### width

• **width**: `number` = `4`

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:15

___

### height

• **height**: `number` = `4`

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:16

___

### depthOrArrayLayers

• **depthOrArrayLayers**: `number` = `1`

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:17

___

### numberLayer

• **numberLayer**: `number` = `1`

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:18

___

### viewDescriptor

• **viewDescriptor**: `GPUTextureViewDescriptor`

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:19

___

### textureDescriptor

• **textureDescriptor**: `GPUTextureDescriptor`

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:20

___

### visibility

• **visibility**: `number`

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:21

___

### textureBindingLayout

• **textureBindingLayout**: `GPUTextureBindingLayout`

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:23

___

### samplerBindingLayout

• **samplerBindingLayout**: `GPUSamplerBindingLayout`

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:27

___

### sampler\_comparisonBindingLayout

• **sampler\_comparisonBindingLayout**: `GPUSamplerBindingLayout`

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:30

___

### flipY

• **flipY**: `boolean`

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:33

___

### isVideoTexture

• `Optional` **isVideoTexture**: `boolean`

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:34

___

### isHDRTexture

• `Optional` **isHDRTexture**: `boolean`

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:35

___

### mipmapCount

• **mipmapCount**: `number` = `1`

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:48

___

### \_textureChange

• `Protected` **\_textureChange**: `boolean` = `false`

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:49

___

### \_stateChangeRef

• `Protected` **\_stateChangeRef**: `Map`\<`any`, `Function`\>

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:267

## Accessors

### useMipmap

• `get` **useMipmap**(): `boolean`

#### Returns

`boolean`

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:173

• `set` **useMipmap**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:177

___

### sourceImageData

• `get` **sourceImageData**(): `HTMLCanvasElement` \| `ImageBitmap` \| `OffscreenCanvas`

#### Returns

`HTMLCanvasElement` \| `ImageBitmap` \| `OffscreenCanvas`

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:216

___

### addressModeU

• `get` **addressModeU**(): `GPUAddressMode`

#### Returns

`GPUAddressMode`

#### Implementation of

GPUSamplerDescriptor.addressModeU

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:296

• `set` **addressModeU**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUAddressMode` |

#### Returns

`void`

#### Implementation of

GPUSamplerDescriptor.addressModeU

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:300

___

### addressModeV

• `get` **addressModeV**(): `GPUAddressMode`

#### Returns

`GPUAddressMode`

#### Implementation of

GPUSamplerDescriptor.addressModeV

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:307

• `set` **addressModeV**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUAddressMode` |

#### Returns

`void`

#### Implementation of

GPUSamplerDescriptor.addressModeV

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:311

___

### addressModeW

• `get` **addressModeW**(): `GPUAddressMode`

#### Returns

`GPUAddressMode`

#### Implementation of

GPUSamplerDescriptor.addressModeW

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:318

• `set` **addressModeW**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUAddressMode` |

#### Returns

`void`

#### Implementation of

GPUSamplerDescriptor.addressModeW

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:322

___

### magFilter

• `get` **magFilter**(): `GPUFilterMode`

#### Returns

`GPUFilterMode`

#### Implementation of

GPUSamplerDescriptor.magFilter

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:329

• `set` **magFilter**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUFilterMode` |

#### Returns

`void`

#### Implementation of

GPUSamplerDescriptor.magFilter

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:333

___

### minFilter

• `get` **minFilter**(): `GPUFilterMode`

#### Returns

`GPUFilterMode`

#### Implementation of

GPUSamplerDescriptor.minFilter

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:340

• `set` **minFilter**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUFilterMode` |

#### Returns

`void`

#### Implementation of

GPUSamplerDescriptor.minFilter

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:344

___

### mipmapFilter

• `get` **mipmapFilter**(): `GPUMipmapFilterMode`

#### Returns

`GPUMipmapFilterMode`

#### Implementation of

GPUSamplerDescriptor.mipmapFilter

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:351

• `set` **mipmapFilter**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUMipmapFilterMode` |

#### Returns

`void`

#### Implementation of

GPUSamplerDescriptor.mipmapFilter

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:355

___

### lodMinClamp

• `get` **lodMinClamp**(): `number`

#### Returns

`number`

#### Implementation of

GPUSamplerDescriptor.lodMinClamp

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:362

• `set` **lodMinClamp**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Implementation of

GPUSamplerDescriptor.lodMinClamp

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:366

___

### lodMaxClamp

• `get` **lodMaxClamp**(): `number`

#### Returns

`number`

#### Implementation of

GPUSamplerDescriptor.lodMaxClamp

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:373

• `set` **lodMaxClamp**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Implementation of

GPUSamplerDescriptor.lodMaxClamp

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:377

___

### compare

• `get` **compare**(): `GPUCompareFunction`

#### Returns

`GPUCompareFunction`

#### Implementation of

GPUSamplerDescriptor.compare

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:384

• `set` **compare**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUCompareFunction` |

#### Returns

`void`

#### Implementation of

GPUSamplerDescriptor.compare

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:388

___

### maxAnisotropy

• `get` **maxAnisotropy**(): `number`

#### Returns

`number`

#### Implementation of

GPUSamplerDescriptor.maxAnisotropy

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:395

• `set` **maxAnisotropy**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Implementation of

GPUSamplerDescriptor.maxAnisotropy

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:399

## Methods

### init

▸ **init**(): `this`

#### Returns

`this`

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:67

___

### createTextureDescriptor

▸ **createTextureDescriptor**(`width`, `height`, `mipLevelCount`, `format`, `usage?`, `sizeCount?`, `sampleCount?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `width` | `number` | `undefined` |
| `height` | `number` | `undefined` |
| `mipLevelCount` | `number` | `undefined` |
| `format` | `GPUTextureFormat` | `undefined` |
| `usage` | `number` | `undefined` |
| `sizeCount` | `number` | `1` |
| `sampleCount` | `number` | `0` |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:84

___

### generate

▸ **generate**(`imageBitmap`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `imageBitmap` | `HTMLCanvasElement` \| `ImageBitmap` \| `OffscreenCanvas` |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:128

___

### getMipmapCount

▸ **getMipmapCount**(): `number`

#### Returns

`number`

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:220

___

### updateTextureDescription

▸ **updateTextureDescription**(): `void`

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:227

___

### updateGPUTexture

▸ **updateGPUTexture**(): `void`

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:238

___

### getGPUTexture

▸ **getGPUTexture**(): `GPUTexture`

#### Returns

`GPUTexture`

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:247

___

### getGPUView

▸ **getGPUView**(`index?`): `GPUTextureView` \| `GPUExternalTexture`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `index` | `number` | `0` |

#### Returns

`GPUTextureView` \| `GPUExternalTexture`

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:256

___

### bindStateChange

▸ **bindStateChange**(`fun`, `ref`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fun` | `Function` |
| `ref` | `any` |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:269

___

### unBindStateChange

▸ **unBindStateChange**(`ref`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | `any` |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:273

___

### noticeChange

▸ **noticeChange**(): `void`

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:277

___

### destroy

▸ **destroy**(`force?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `force?` | `boolean` |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:284

___

### delayDestroyTexture

▸ **delayDestroyTexture**(`tex`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tex` | `GPUTexture` |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:407

___

### destroyTexture

▸ **destroyTexture**(): `void`

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:413
