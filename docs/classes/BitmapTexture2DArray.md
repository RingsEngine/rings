[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / BitmapTexture2DArray

# Class: BitmapTexture2DArray

## Hierarchy

- [`Texture`](Texture.md)

  ↳ **`BitmapTexture2DArray`**

## Implements

- [`ITexture`](../interfaces/ITexture.md)

## Table of contents

### Constructors

- [constructor](BitmapTexture2DArray.md#constructor)

### Properties

- [name](BitmapTexture2DArray.md#name)
- [url](BitmapTexture2DArray.md#url)
- [gpuTexture](BitmapTexture2DArray.md#gputexture)
- [pid](BitmapTexture2DArray.md#pid)
- [view](BitmapTexture2DArray.md#view)
- [gpuSampler](BitmapTexture2DArray.md#gpusampler)
- [gpuSampler\_comparison](BitmapTexture2DArray.md#gpusampler_comparison)
- [format](BitmapTexture2DArray.md#format)
- [usage](BitmapTexture2DArray.md#usage)
- [width](BitmapTexture2DArray.md#width)
- [height](BitmapTexture2DArray.md#height)
- [depthOrArrayLayers](BitmapTexture2DArray.md#depthorarraylayers)
- [numberLayer](BitmapTexture2DArray.md#numberlayer)
- [viewDescriptor](BitmapTexture2DArray.md#viewdescriptor)
- [textureDescriptor](BitmapTexture2DArray.md#texturedescriptor)
- [visibility](BitmapTexture2DArray.md#visibility)
- [textureBindingLayout](BitmapTexture2DArray.md#texturebindinglayout)
- [samplerBindingLayout](BitmapTexture2DArray.md#samplerbindinglayout)
- [sampler\_comparisonBindingLayout](BitmapTexture2DArray.md#sampler_comparisonbindinglayout)
- [flipY](BitmapTexture2DArray.md#flipy)
- [isVideoTexture](BitmapTexture2DArray.md#isvideotexture)
- [isHDRTexture](BitmapTexture2DArray.md#ishdrtexture)
- [mipmapCount](BitmapTexture2DArray.md#mipmapcount)
- [\_textureChange](BitmapTexture2DArray.md#_texturechange)
- [\_stateChangeRef](BitmapTexture2DArray.md#_statechangeref)

### Accessors

- [useMipmap](BitmapTexture2DArray.md#usemipmap)
- [sourceImageData](BitmapTexture2DArray.md#sourceimagedata)
- [addressModeU](BitmapTexture2DArray.md#addressmodeu)
- [addressModeV](BitmapTexture2DArray.md#addressmodev)
- [addressModeW](BitmapTexture2DArray.md#addressmodew)
- [magFilter](BitmapTexture2DArray.md#magfilter)
- [minFilter](BitmapTexture2DArray.md#minfilter)
- [mipmapFilter](BitmapTexture2DArray.md#mipmapfilter)
- [lodMinClamp](BitmapTexture2DArray.md#lodminclamp)
- [lodMaxClamp](BitmapTexture2DArray.md#lodmaxclamp)
- [compare](BitmapTexture2DArray.md#compare)
- [maxAnisotropy](BitmapTexture2DArray.md#maxanisotropy)

### Methods

- [init](BitmapTexture2DArray.md#init)
- [createTextureDescriptor](BitmapTexture2DArray.md#createtexturedescriptor)
- [generate](BitmapTexture2DArray.md#generate)
- [getMipmapCount](BitmapTexture2DArray.md#getmipmapcount)
- [updateTextureDescription](BitmapTexture2DArray.md#updatetexturedescription)
- [updateGPUTexture](BitmapTexture2DArray.md#updategputexture)
- [getGPUTexture](BitmapTexture2DArray.md#getgputexture)
- [getGPUView](BitmapTexture2DArray.md#getgpuview)
- [bindStateChange](BitmapTexture2DArray.md#bindstatechange)
- [unBindStateChange](BitmapTexture2DArray.md#unbindstatechange)
- [noticeChange](BitmapTexture2DArray.md#noticechange)
- [destroy](BitmapTexture2DArray.md#destroy)
- [delayDestroyTexture](BitmapTexture2DArray.md#delaydestroytexture)
- [destroyTexture](BitmapTexture2DArray.md#destroytexture)
- [setTextures](BitmapTexture2DArray.md#settextures)
- [addTexture](BitmapTexture2DArray.md#addtexture)
- [removeTexture](BitmapTexture2DArray.md#removetexture)
- [internalCreateBindingLayoutDesc](BitmapTexture2DArray.md#internalcreatebindinglayoutdesc)
- [internalCreateTexture](BitmapTexture2DArray.md#internalcreatetexture)
- [internalCreateView](BitmapTexture2DArray.md#internalcreateview)
- [internalCreateSampler](BitmapTexture2DArray.md#internalcreatesampler)

## Constructors

### constructor

• **new BitmapTexture2DArray**(`width`, `height`, `numberLayer`): [`BitmapTexture2DArray`](BitmapTexture2DArray.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `height` | `number` |
| `numberLayer` | `number` |

#### Returns

[`BitmapTexture2DArray`](BitmapTexture2DArray.md)

#### Overrides

[Texture](Texture.md).[constructor](Texture.md#constructor)

#### Defined in

textures/BitmapTexture2DArray.ts:13

## Properties

### name

• **name**: `string`

#### Inherited from

[Texture](Texture.md).[name](Texture.md#name)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:6

___

### url

• **url**: `string`

#### Inherited from

[Texture](Texture.md).[url](Texture.md#url)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:7

___

### gpuTexture

• `Protected` **gpuTexture**: `GPUTexture`

#### Inherited from

[Texture](Texture.md).[gpuTexture](Texture.md#gputexture)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:8

___

### pid

• **pid**: `number`

#### Inherited from

[Texture](Texture.md).[pid](Texture.md#pid)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:9

___

### view

• **view**: `GPUTextureView` \| `GPUExternalTexture`

#### Inherited from

[Texture](Texture.md).[view](Texture.md#view)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:10

___

### gpuSampler

• **gpuSampler**: `GPUSampler`

#### Inherited from

[Texture](Texture.md).[gpuSampler](Texture.md#gpusampler)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:11

___

### gpuSampler\_comparison

• **gpuSampler\_comparison**: `GPUSampler`

#### Inherited from

[Texture](Texture.md).[gpuSampler_comparison](Texture.md#gpusampler_comparison)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:12

___

### format

• **format**: `GPUTextureFormat`

#### Inherited from

[Texture](Texture.md).[format](Texture.md#format)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:13

___

### usage

• **usage**: `number`

#### Inherited from

[Texture](Texture.md).[usage](Texture.md#usage)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:14

___

### width

• **width**: `number` = `4`

#### Inherited from

[Texture](Texture.md).[width](Texture.md#width)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:15

___

### height

• **height**: `number` = `4`

#### Inherited from

[Texture](Texture.md).[height](Texture.md#height)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:16

___

### depthOrArrayLayers

• **depthOrArrayLayers**: `number` = `1`

#### Inherited from

[Texture](Texture.md).[depthOrArrayLayers](Texture.md#depthorarraylayers)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:17

___

### numberLayer

• **numberLayer**: `number` = `1`

#### Inherited from

[Texture](Texture.md).[numberLayer](Texture.md#numberlayer)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:18

___

### viewDescriptor

• **viewDescriptor**: `GPUTextureViewDescriptor`

#### Inherited from

[Texture](Texture.md).[viewDescriptor](Texture.md#viewdescriptor)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:19

___

### textureDescriptor

• **textureDescriptor**: `GPUTextureDescriptor`

#### Inherited from

[Texture](Texture.md).[textureDescriptor](Texture.md#texturedescriptor)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:20

___

### visibility

• **visibility**: `number`

#### Inherited from

[Texture](Texture.md).[visibility](Texture.md#visibility)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:21

___

### textureBindingLayout

• **textureBindingLayout**: `GPUTextureBindingLayout`

#### Inherited from

[Texture](Texture.md).[textureBindingLayout](Texture.md#texturebindinglayout)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:23

___

### samplerBindingLayout

• **samplerBindingLayout**: `GPUSamplerBindingLayout`

#### Inherited from

[Texture](Texture.md).[samplerBindingLayout](Texture.md#samplerbindinglayout)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:27

___

### sampler\_comparisonBindingLayout

• **sampler\_comparisonBindingLayout**: `GPUSamplerBindingLayout`

#### Inherited from

[Texture](Texture.md).[sampler_comparisonBindingLayout](Texture.md#sampler_comparisonbindinglayout)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:30

___

### flipY

• **flipY**: `boolean`

#### Inherited from

[Texture](Texture.md).[flipY](Texture.md#flipy)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:33

___

### isVideoTexture

• `Optional` **isVideoTexture**: `boolean`

#### Inherited from

[Texture](Texture.md).[isVideoTexture](Texture.md#isvideotexture)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:34

___

### isHDRTexture

• `Optional` **isHDRTexture**: `boolean`

#### Inherited from

[Texture](Texture.md).[isHDRTexture](Texture.md#ishdrtexture)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:35

___

### mipmapCount

• **mipmapCount**: `number` = `1`

#### Inherited from

[Texture](Texture.md).[mipmapCount](Texture.md#mipmapcount)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:48

___

### \_textureChange

• `Protected` **\_textureChange**: `boolean` = `false`

#### Inherited from

[Texture](Texture.md).[_textureChange](Texture.md#_texturechange)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:49

___

### \_stateChangeRef

• `Protected` **\_stateChangeRef**: `Map`\<`any`, `Function`\>

#### Inherited from

[Texture](Texture.md).[_stateChangeRef](Texture.md#_statechangeref)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:267

## Accessors

### useMipmap

• `get` **useMipmap**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Texture.useMipmap

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:173

• `set` **useMipmap**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

Texture.useMipmap

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:177

___

### sourceImageData

• `get` **sourceImageData**(): `HTMLCanvasElement` \| `ImageBitmap` \| `OffscreenCanvas`

#### Returns

`HTMLCanvasElement` \| `ImageBitmap` \| `OffscreenCanvas`

#### Inherited from

Texture.sourceImageData

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:216

___

### addressModeU

• `get` **addressModeU**(): `GPUAddressMode`

#### Returns

`GPUAddressMode`

#### Inherited from

Texture.addressModeU

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:296

• `set` **addressModeU**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUAddressMode` |

#### Returns

`void`

#### Inherited from

Texture.addressModeU

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:300

___

### addressModeV

• `get` **addressModeV**(): `GPUAddressMode`

#### Returns

`GPUAddressMode`

#### Inherited from

Texture.addressModeV

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:307

• `set` **addressModeV**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUAddressMode` |

#### Returns

`void`

#### Inherited from

Texture.addressModeV

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:311

___

### addressModeW

• `get` **addressModeW**(): `GPUAddressMode`

#### Returns

`GPUAddressMode`

#### Inherited from

Texture.addressModeW

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:318

• `set` **addressModeW**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUAddressMode` |

#### Returns

`void`

#### Inherited from

Texture.addressModeW

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:322

___

### magFilter

• `get` **magFilter**(): `GPUFilterMode`

#### Returns

`GPUFilterMode`

#### Inherited from

Texture.magFilter

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:329

• `set` **magFilter**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUFilterMode` |

#### Returns

`void`

#### Inherited from

Texture.magFilter

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:333

___

### minFilter

• `get` **minFilter**(): `GPUFilterMode`

#### Returns

`GPUFilterMode`

#### Inherited from

Texture.minFilter

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:340

• `set` **minFilter**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUFilterMode` |

#### Returns

`void`

#### Inherited from

Texture.minFilter

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:344

___

### mipmapFilter

• `get` **mipmapFilter**(): `GPUMipmapFilterMode`

#### Returns

`GPUMipmapFilterMode`

#### Inherited from

Texture.mipmapFilter

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:351

• `set` **mipmapFilter**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUMipmapFilterMode` |

#### Returns

`void`

#### Inherited from

Texture.mipmapFilter

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:355

___

### lodMinClamp

• `get` **lodMinClamp**(): `number`

#### Returns

`number`

#### Inherited from

Texture.lodMinClamp

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:362

• `set` **lodMinClamp**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

Texture.lodMinClamp

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:366

___

### lodMaxClamp

• `get` **lodMaxClamp**(): `number`

#### Returns

`number`

#### Inherited from

Texture.lodMaxClamp

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:373

• `set` **lodMaxClamp**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

Texture.lodMaxClamp

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:377

___

### compare

• `get` **compare**(): `GPUCompareFunction`

#### Returns

`GPUCompareFunction`

#### Inherited from

Texture.compare

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:384

• `set` **compare**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUCompareFunction` |

#### Returns

`void`

#### Inherited from

Texture.compare

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:388

___

### maxAnisotropy

• `get` **maxAnisotropy**(): `number`

#### Returns

`number`

#### Inherited from

Texture.maxAnisotropy

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:395

• `set` **maxAnisotropy**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

Texture.maxAnisotropy

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:399

## Methods

### init

▸ **init**(): `this`

#### Returns

`this`

#### Inherited from

[Texture](Texture.md).[init](Texture.md#init)

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

#### Inherited from

[Texture](Texture.md).[createTextureDescriptor](Texture.md#createtexturedescriptor)

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

#### Inherited from

[Texture](Texture.md).[generate](Texture.md#generate)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:128

___

### getMipmapCount

▸ **getMipmapCount**(): `number`

#### Returns

`number`

#### Inherited from

[Texture](Texture.md).[getMipmapCount](Texture.md#getmipmapcount)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:220

___

### updateTextureDescription

▸ **updateTextureDescription**(): `void`

#### Returns

`void`

#### Inherited from

[Texture](Texture.md).[updateTextureDescription](Texture.md#updatetexturedescription)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:227

___

### updateGPUTexture

▸ **updateGPUTexture**(): `void`

#### Returns

`void`

#### Inherited from

[Texture](Texture.md).[updateGPUTexture](Texture.md#updategputexture)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:238

___

### getGPUTexture

▸ **getGPUTexture**(): `GPUTexture`

#### Returns

`GPUTexture`

#### Inherited from

[Texture](Texture.md).[getGPUTexture](Texture.md#getgputexture)

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

#### Inherited from

[Texture](Texture.md).[getGPUView](Texture.md#getgpuview)

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

#### Inherited from

[Texture](Texture.md).[bindStateChange](Texture.md#bindstatechange)

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

#### Inherited from

[Texture](Texture.md).[unBindStateChange](Texture.md#unbindstatechange)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:273

___

### noticeChange

▸ **noticeChange**(): `void`

#### Returns

`void`

#### Inherited from

[Texture](Texture.md).[noticeChange](Texture.md#noticechange)

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

#### Inherited from

[Texture](Texture.md).[destroy](Texture.md#destroy)

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

#### Inherited from

[Texture](Texture.md).[delayDestroyTexture](Texture.md#delaydestroytexture)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:407

___

### destroyTexture

▸ **destroyTexture**(): `void`

#### Returns

`void`

#### Inherited from

[Texture](Texture.md).[destroyTexture](Texture.md#destroytexture)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:413

___

### setTextures

▸ **setTextures**(`texs`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `texs` | [`BitmapTexture2D`](BitmapTexture2D.md)[] |

#### Returns

`void`

#### Defined in

textures/BitmapTexture2DArray.ts:21

___

### addTexture

▸ **addTexture**(`bitmapTexture`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bitmapTexture` | [`BitmapTexture2D`](BitmapTexture2D.md) |

#### Returns

`void`

#### Defined in

textures/BitmapTexture2DArray.ts:29

___

### removeTexture

▸ **removeTexture**(`bitmapTexture`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bitmapTexture` | [`BitmapTexture2D`](BitmapTexture2D.md) |

#### Returns

`void`

#### Defined in

textures/BitmapTexture2DArray.ts:41

___

### internalCreateBindingLayoutDesc

▸ **internalCreateBindingLayoutDesc**(): `void`

create binding layout description

#### Returns

`void`

#### Implementation of

[ITexture](../interfaces/ITexture.md).[internalCreateBindingLayoutDesc](../interfaces/ITexture.md#internalcreatebindinglayoutdesc)

#### Defined in

textures/BitmapTexture2DArray.ts:77

___

### internalCreateTexture

▸ **internalCreateTexture**(): `void`

create texture instance

#### Returns

`void`

#### Implementation of

[ITexture](../interfaces/ITexture.md).[internalCreateTexture](../interfaces/ITexture.md#internalcreatetexture)

#### Defined in

textures/BitmapTexture2DArray.ts:85

___

### internalCreateView

▸ **internalCreateView**(): `void`

create GPU View

#### Returns

`void`

#### Implementation of

[ITexture](../interfaces/ITexture.md).[internalCreateView](../interfaces/ITexture.md#internalcreateview)

#### Defined in

textures/BitmapTexture2DArray.ts:99

___

### internalCreateSampler

▸ **internalCreateSampler**(): `void`

create CPU Sample

#### Returns

`void`

#### Implementation of

[ITexture](../interfaces/ITexture.md).[internalCreateSampler](../interfaces/ITexture.md#internalcreatesampler)

#### Defined in

textures/BitmapTexture2DArray.ts:106
