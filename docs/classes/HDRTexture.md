[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / HDRTexture

# Class: HDRTexture

## Hierarchy

- [`Texture`](Texture.md)

  ↳ **`HDRTexture`**

## Table of contents

### Constructors

- [constructor](HDRTexture.md#constructor)

### Properties

- [name](HDRTexture.md#name)
- [url](HDRTexture.md#url)
- [gpuTexture](HDRTexture.md#gputexture)
- [pid](HDRTexture.md#pid)
- [view](HDRTexture.md#view)
- [gpuSampler](HDRTexture.md#gpusampler)
- [gpuSampler\_comparison](HDRTexture.md#gpusampler_comparison)
- [format](HDRTexture.md#format)
- [usage](HDRTexture.md#usage)
- [width](HDRTexture.md#width)
- [height](HDRTexture.md#height)
- [depthOrArrayLayers](HDRTexture.md#depthorarraylayers)
- [numberLayer](HDRTexture.md#numberlayer)
- [viewDescriptor](HDRTexture.md#viewdescriptor)
- [textureDescriptor](HDRTexture.md#texturedescriptor)
- [visibility](HDRTexture.md#visibility)
- [textureBindingLayout](HDRTexture.md#texturebindinglayout)
- [samplerBindingLayout](HDRTexture.md#samplerbindinglayout)
- [sampler\_comparisonBindingLayout](HDRTexture.md#sampler_comparisonbindinglayout)
- [flipY](HDRTexture.md#flipy)
- [isVideoTexture](HDRTexture.md#isvideotexture)
- [isHDRTexture](HDRTexture.md#ishdrtexture)
- [mipmapCount](HDRTexture.md#mipmapcount)
- [\_textureChange](HDRTexture.md#_texturechange)
- [\_stateChangeRef](HDRTexture.md#_statechangeref)

### Accessors

- [useMipmap](HDRTexture.md#usemipmap)
- [sourceImageData](HDRTexture.md#sourceimagedata)
- [addressModeU](HDRTexture.md#addressmodeu)
- [addressModeV](HDRTexture.md#addressmodev)
- [addressModeW](HDRTexture.md#addressmodew)
- [magFilter](HDRTexture.md#magfilter)
- [minFilter](HDRTexture.md#minfilter)
- [mipmapFilter](HDRTexture.md#mipmapfilter)
- [lodMinClamp](HDRTexture.md#lodminclamp)
- [lodMaxClamp](HDRTexture.md#lodmaxclamp)
- [compare](HDRTexture.md#compare)
- [maxAnisotropy](HDRTexture.md#maxanisotropy)

### Methods

- [init](HDRTexture.md#init)
- [createTextureDescriptor](HDRTexture.md#createtexturedescriptor)
- [generate](HDRTexture.md#generate)
- [getMipmapCount](HDRTexture.md#getmipmapcount)
- [updateTextureDescription](HDRTexture.md#updatetexturedescription)
- [updateGPUTexture](HDRTexture.md#updategputexture)
- [getGPUTexture](HDRTexture.md#getgputexture)
- [getGPUView](HDRTexture.md#getgpuview)
- [bindStateChange](HDRTexture.md#bindstatechange)
- [unBindStateChange](HDRTexture.md#unbindstatechange)
- [noticeChange](HDRTexture.md#noticechange)
- [destroy](HDRTexture.md#destroy)
- [delayDestroyTexture](HDRTexture.md#delaydestroytexture)
- [destroyTexture](HDRTexture.md#destroytexture)
- [create](HDRTexture.md#create)
- [load](HDRTexture.md#load)

## Constructors

### constructor

• **new HDRTexture**(): [`HDRTexture`](HDRTexture.md)

#### Returns

[`HDRTexture`](HDRTexture.md)

#### Overrides

[Texture](Texture.md).[constructor](Texture.md#constructor)

#### Defined in

textures/HDRTexture.ts:10

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

### create

▸ **create**(`width?`, `height?`, `data?`, `useMipmap?`): `this`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `width` | `number` | `32` |
| `height` | `number` | `32` |
| `data` | `ArrayBuffer` | `null` |
| `useMipmap` | `boolean` | `true` |

#### Returns

`this`

#### Defined in

textures/HDRTexture.ts:15

___

### load

▸ **load**(`url`, `loaderFunctions?`): `Promise`\<[`HDRTexture`](HDRTexture.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `loaderFunctions?` | [`LoaderFunctions`](../modules.md#loaderfunctions) |

#### Returns

`Promise`\<[`HDRTexture`](HDRTexture.md)\>

#### Defined in

textures/HDRTexture.ts:67
