[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / VirtualTexture

# Class: VirtualTexture

虚拟纹理 类似于 Three.js 的 WebGLRenderTarget

## Hierarchy

- [`Texture`](Texture.md)

  ↳ **`VirtualTexture`**

## Table of contents

### Constructors

- [constructor](VirtualTexture.md#constructor)

### Properties

- [name](VirtualTexture.md#name)
- [url](VirtualTexture.md#url)
- [gpuTexture](VirtualTexture.md#gputexture)
- [pid](VirtualTexture.md#pid)
- [view](VirtualTexture.md#view)
- [gpuSampler](VirtualTexture.md#gpusampler)
- [gpuSampler\_comparison](VirtualTexture.md#gpusampler_comparison)
- [format](VirtualTexture.md#format)
- [usage](VirtualTexture.md#usage)
- [width](VirtualTexture.md#width)
- [height](VirtualTexture.md#height)
- [depthOrArrayLayers](VirtualTexture.md#depthorarraylayers)
- [numberLayer](VirtualTexture.md#numberlayer)
- [viewDescriptor](VirtualTexture.md#viewdescriptor)
- [textureDescriptor](VirtualTexture.md#texturedescriptor)
- [visibility](VirtualTexture.md#visibility)
- [textureBindingLayout](VirtualTexture.md#texturebindinglayout)
- [samplerBindingLayout](VirtualTexture.md#samplerbindinglayout)
- [sampler\_comparisonBindingLayout](VirtualTexture.md#sampler_comparisonbindinglayout)
- [flipY](VirtualTexture.md#flipy)
- [isVideoTexture](VirtualTexture.md#isvideotexture)
- [isHDRTexture](VirtualTexture.md#ishdrtexture)
- [mipmapCount](VirtualTexture.md#mipmapcount)
- [\_textureChange](VirtualTexture.md#_texturechange)
- [\_stateChangeRef](VirtualTexture.md#_statechangeref)
- [resolveTarget](VirtualTexture.md#resolvetarget)
- [sampleCount](VirtualTexture.md#samplecount)

### Accessors

- [useMipmap](VirtualTexture.md#usemipmap)
- [sourceImageData](VirtualTexture.md#sourceimagedata)
- [addressModeU](VirtualTexture.md#addressmodeu)
- [addressModeV](VirtualTexture.md#addressmodev)
- [addressModeW](VirtualTexture.md#addressmodew)
- [magFilter](VirtualTexture.md#magfilter)
- [minFilter](VirtualTexture.md#minfilter)
- [mipmapFilter](VirtualTexture.md#mipmapfilter)
- [lodMinClamp](VirtualTexture.md#lodminclamp)
- [lodMaxClamp](VirtualTexture.md#lodmaxclamp)
- [compare](VirtualTexture.md#compare)
- [maxAnisotropy](VirtualTexture.md#maxanisotropy)

### Methods

- [init](VirtualTexture.md#init)
- [createTextureDescriptor](VirtualTexture.md#createtexturedescriptor)
- [generate](VirtualTexture.md#generate)
- [getMipmapCount](VirtualTexture.md#getmipmapcount)
- [updateTextureDescription](VirtualTexture.md#updatetexturedescription)
- [updateGPUTexture](VirtualTexture.md#updategputexture)
- [getGPUTexture](VirtualTexture.md#getgputexture)
- [getGPUView](VirtualTexture.md#getgpuview)
- [bindStateChange](VirtualTexture.md#bindstatechange)
- [unBindStateChange](VirtualTexture.md#unbindstatechange)
- [noticeChange](VirtualTexture.md#noticechange)
- [destroy](VirtualTexture.md#destroy)
- [delayDestroyTexture](VirtualTexture.md#delaydestroytexture)
- [destroyTexture](VirtualTexture.md#destroytexture)
- [clone](VirtualTexture.md#clone)
- [resize](VirtualTexture.md#resize)
- [create](VirtualTexture.md#create)
- [readTextureToImage](VirtualTexture.md#readtexturetoimage)

## Constructors

### constructor

• **new VirtualTexture**(`width`, `height`, `format?`, `useMipMap?`, `usage?`, `numberLayer?`, `sampleCount?`, `mipmapCount?`): [`VirtualTexture`](VirtualTexture.md)

create virtual texture

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `width` | `number` | `undefined` | width of texture |
| `height` | `number` | `undefined` | height of texture |
| `format` | `GPUTextureFormat` | `GPUTextureFormat.rgba8unorm` | GPUTextureFormat, default value is rgba8unorm |
| `useMipMap` | `boolean` | `false` | - |
| `usage?` | `number` | `undefined` | - |
| `numberLayer` | `number` | `1` | - |
| `sampleCount` | `number` | `0` | - |
| `mipmapCount` | `number` | `1` | - |

#### Returns

[`VirtualTexture`](VirtualTexture.md)

#### Overrides

[Texture](Texture.md).[constructor](Texture.md#constructor)

#### Defined in

textures/VirtualTexture.ts:39

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

___

### resolveTarget

• **resolveTarget**: `GPUTextureView`

#### Defined in

textures/VirtualTexture.ts:14

___

### sampleCount

• **sampleCount**: `number`

#### Defined in

textures/VirtualTexture.ts:15

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

### clone

▸ **clone**(): [`VirtualTexture`](VirtualTexture.md)

#### Returns

[`VirtualTexture`](VirtualTexture.md)

#### Defined in

textures/VirtualTexture.ts:17

___

### resize

▸ **resize**(`width`, `height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `any` |
| `height` | `any` |

#### Returns

`void`

#### Defined in

textures/VirtualTexture.ts:73

___

### create

▸ **create**(`width`, `height`, `useMiamp?`): `void`

create rt texture

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `width` | `number` | `undefined` | texture width |
| `height` | `number` | `undefined` | texture height |
| `useMiamp` | `boolean` | `true` | - |

#### Returns

`void`

#### Defined in

textures/VirtualTexture.ts:151

___

### readTextureToImage

▸ **readTextureToImage**(): `ArrayBuffer`

#### Returns

`ArrayBuffer`

#### Defined in

textures/VirtualTexture.ts:181
