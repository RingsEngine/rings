[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / LDRTextureCube

# Class: LDRTextureCube

## Hierarchy

- [`TextureCube`](TextureCube.md)

  ↳ **`LDRTextureCube`**

  ↳↳ [`AtmosphericScatteringSky`](AtmosphericScatteringSky.md)

  ↳↳ [`SolidColorSky`](SolidColorSky.md)

## Table of contents

### Constructors

- [constructor](LDRTextureCube.md#constructor)

### Properties

- [name](LDRTextureCube.md#name)
- [url](LDRTextureCube.md#url)
- [gpuTexture](LDRTextureCube.md#gputexture)
- [pid](LDRTextureCube.md#pid)
- [view](LDRTextureCube.md#view)
- [gpuSampler](LDRTextureCube.md#gpusampler)
- [gpuSampler\_comparison](LDRTextureCube.md#gpusampler_comparison)
- [format](LDRTextureCube.md#format)
- [usage](LDRTextureCube.md#usage)
- [numberLayer](LDRTextureCube.md#numberlayer)
- [viewDescriptor](LDRTextureCube.md#viewdescriptor)
- [textureDescriptor](LDRTextureCube.md#texturedescriptor)
- [sampler\_comparisonBindingLayout](LDRTextureCube.md#sampler_comparisonbindinglayout)
- [flipY](LDRTextureCube.md#flipy)
- [isVideoTexture](LDRTextureCube.md#isvideotexture)
- [isHDRTexture](LDRTextureCube.md#ishdrtexture)
- [mipmapCount](LDRTextureCube.md#mipmapcount)
- [\_textureChange](LDRTextureCube.md#_texturechange)
- [\_stateChangeRef](LDRTextureCube.md#_statechangeref)
- [width](LDRTextureCube.md#width)
- [height](LDRTextureCube.md#height)
- [depthOrArrayLayers](LDRTextureCube.md#depthorarraylayers)
- [visibility](LDRTextureCube.md#visibility)
- [textureBindingLayout](LDRTextureCube.md#texturebindinglayout)
- [samplerBindingLayout](LDRTextureCube.md#samplerbindinglayout)
- [\_faceData](LDRTextureCube.md#_facedata)

### Accessors

- [useMipmap](LDRTextureCube.md#usemipmap)
- [sourceImageData](LDRTextureCube.md#sourceimagedata)
- [addressModeU](LDRTextureCube.md#addressmodeu)
- [addressModeV](LDRTextureCube.md#addressmodev)
- [addressModeW](LDRTextureCube.md#addressmodew)
- [magFilter](LDRTextureCube.md#magfilter)
- [minFilter](LDRTextureCube.md#minfilter)
- [mipmapFilter](LDRTextureCube.md#mipmapfilter)
- [lodMinClamp](LDRTextureCube.md#lodminclamp)
- [lodMaxClamp](LDRTextureCube.md#lodmaxclamp)
- [compare](LDRTextureCube.md#compare)
- [maxAnisotropy](LDRTextureCube.md#maxanisotropy)
- [ldrImageUrl](LDRTextureCube.md#ldrimageurl)

### Methods

- [init](LDRTextureCube.md#init)
- [generate](LDRTextureCube.md#generate)
- [getMipmapCount](LDRTextureCube.md#getmipmapcount)
- [updateTextureDescription](LDRTextureCube.md#updatetexturedescription)
- [updateGPUTexture](LDRTextureCube.md#updategputexture)
- [getGPUTexture](LDRTextureCube.md#getgputexture)
- [getGPUView](LDRTextureCube.md#getgpuview)
- [bindStateChange](LDRTextureCube.md#bindstatechange)
- [unBindStateChange](LDRTextureCube.md#unbindstatechange)
- [noticeChange](LDRTextureCube.md#noticechange)
- [destroy](LDRTextureCube.md#destroy)
- [delayDestroyTexture](LDRTextureCube.md#delaydestroytexture)
- [destroyTexture](LDRTextureCube.md#destroytexture)
- [createTextureDescriptor](LDRTextureCube.md#createtexturedescriptor)
- [load](LDRTextureCube.md#load)
- [createFromTexture](LDRTextureCube.md#createfromtexture)

## Constructors

### constructor

• **new LDRTextureCube**(): [`LDRTextureCube`](LDRTextureCube.md)

#### Returns

[`LDRTextureCube`](LDRTextureCube.md)

#### Overrides

[TextureCube](TextureCube.md).[constructor](TextureCube.md#constructor)

#### Defined in

textures/LDRTextureCube.ts:15

## Properties

### name

• **name**: `string`

#### Inherited from

[TextureCube](TextureCube.md).[name](TextureCube.md#name)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:6

___

### url

• **url**: `string`

#### Inherited from

[TextureCube](TextureCube.md).[url](TextureCube.md#url)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:7

___

### gpuTexture

• `Protected` **gpuTexture**: `GPUTexture`

#### Inherited from

[TextureCube](TextureCube.md).[gpuTexture](TextureCube.md#gputexture)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:8

___

### pid

• **pid**: `number`

#### Inherited from

[TextureCube](TextureCube.md).[pid](TextureCube.md#pid)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:9

___

### view

• **view**: `GPUTextureView` \| `GPUExternalTexture`

#### Inherited from

[TextureCube](TextureCube.md).[view](TextureCube.md#view)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:10

___

### gpuSampler

• **gpuSampler**: `GPUSampler`

#### Inherited from

[TextureCube](TextureCube.md).[gpuSampler](TextureCube.md#gpusampler)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:11

___

### gpuSampler\_comparison

• **gpuSampler\_comparison**: `GPUSampler`

#### Inherited from

[TextureCube](TextureCube.md).[gpuSampler_comparison](TextureCube.md#gpusampler_comparison)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:12

___

### format

• **format**: `GPUTextureFormat`

#### Inherited from

[TextureCube](TextureCube.md).[format](TextureCube.md#format)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:13

___

### usage

• **usage**: `number`

#### Inherited from

[TextureCube](TextureCube.md).[usage](TextureCube.md#usage)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:14

___

### numberLayer

• **numberLayer**: `number` = `1`

#### Inherited from

[TextureCube](TextureCube.md).[numberLayer](TextureCube.md#numberlayer)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:18

___

### viewDescriptor

• **viewDescriptor**: `GPUTextureViewDescriptor`

#### Inherited from

[TextureCube](TextureCube.md).[viewDescriptor](TextureCube.md#viewdescriptor)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:19

___

### textureDescriptor

• **textureDescriptor**: `GPUTextureDescriptor`

#### Inherited from

[TextureCube](TextureCube.md).[textureDescriptor](TextureCube.md#texturedescriptor)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:20

___

### sampler\_comparisonBindingLayout

• **sampler\_comparisonBindingLayout**: `GPUSamplerBindingLayout`

#### Inherited from

[TextureCube](TextureCube.md).[sampler_comparisonBindingLayout](TextureCube.md#sampler_comparisonbindinglayout)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:30

___

### flipY

• **flipY**: `boolean`

#### Inherited from

[TextureCube](TextureCube.md).[flipY](TextureCube.md#flipy)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:33

___

### isVideoTexture

• `Optional` **isVideoTexture**: `boolean`

#### Inherited from

[TextureCube](TextureCube.md).[isVideoTexture](TextureCube.md#isvideotexture)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:34

___

### isHDRTexture

• `Optional` **isHDRTexture**: `boolean`

#### Inherited from

[TextureCube](TextureCube.md).[isHDRTexture](TextureCube.md#ishdrtexture)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:35

___

### mipmapCount

• **mipmapCount**: `number` = `1`

#### Inherited from

[TextureCube](TextureCube.md).[mipmapCount](TextureCube.md#mipmapcount)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:48

___

### \_textureChange

• `Protected` **\_textureChange**: `boolean` = `false`

#### Inherited from

[TextureCube](TextureCube.md).[_textureChange](TextureCube.md#_texturechange)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:49

___

### \_stateChangeRef

• `Protected` **\_stateChangeRef**: `Map`\<`any`, `Function`\>

#### Inherited from

[TextureCube](TextureCube.md).[_stateChangeRef](TextureCube.md#_statechangeref)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:267

___

### width

• **width**: `number` = `4`

#### Inherited from

[TextureCube](TextureCube.md).[width](TextureCube.md#width)

#### Defined in

gfx/graphics/webGpu/core/texture/TextureCube.ts:5

___

### height

• **height**: `number` = `4`

#### Inherited from

[TextureCube](TextureCube.md).[height](TextureCube.md#height)

#### Defined in

gfx/graphics/webGpu/core/texture/TextureCube.ts:6

___

### depthOrArrayLayers

• **depthOrArrayLayers**: `number` = `6`

#### Inherited from

[TextureCube](TextureCube.md).[depthOrArrayLayers](TextureCube.md#depthorarraylayers)

#### Defined in

gfx/graphics/webGpu/core/texture/TextureCube.ts:7

___

### visibility

• **visibility**: `number` = `GPUShaderStage.FRAGMENT`

#### Inherited from

[TextureCube](TextureCube.md).[visibility](TextureCube.md#visibility)

#### Defined in

gfx/graphics/webGpu/core/texture/TextureCube.ts:8

___

### textureBindingLayout

• **textureBindingLayout**: `GPUTextureBindingLayout`

#### Inherited from

[TextureCube](TextureCube.md).[textureBindingLayout](TextureCube.md#texturebindinglayout)

#### Defined in

gfx/graphics/webGpu/core/texture/TextureCube.ts:9

___

### samplerBindingLayout

• **samplerBindingLayout**: `GPUSamplerBindingLayout`

#### Inherited from

[TextureCube](TextureCube.md).[samplerBindingLayout](TextureCube.md#samplerbindinglayout)

#### Defined in

gfx/graphics/webGpu/core/texture/TextureCube.ts:13

___

### \_faceData

• `Protected` **\_faceData**: [`TextureCubeFaceData`](TextureCubeFaceData.md)

#### Defined in

textures/LDRTextureCube.ts:10

## Accessors

### useMipmap

• `get` **useMipmap**(): `boolean`

#### Returns

`boolean`

#### Inherited from

TextureCube.useMipmap

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

TextureCube.useMipmap

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:177

___

### sourceImageData

• `get` **sourceImageData**(): `HTMLCanvasElement` \| `ImageBitmap` \| `OffscreenCanvas`

#### Returns

`HTMLCanvasElement` \| `ImageBitmap` \| `OffscreenCanvas`

#### Inherited from

TextureCube.sourceImageData

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:216

___

### addressModeU

• `get` **addressModeU**(): `GPUAddressMode`

#### Returns

`GPUAddressMode`

#### Inherited from

TextureCube.addressModeU

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

TextureCube.addressModeU

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:300

___

### addressModeV

• `get` **addressModeV**(): `GPUAddressMode`

#### Returns

`GPUAddressMode`

#### Inherited from

TextureCube.addressModeV

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

TextureCube.addressModeV

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:311

___

### addressModeW

• `get` **addressModeW**(): `GPUAddressMode`

#### Returns

`GPUAddressMode`

#### Inherited from

TextureCube.addressModeW

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

TextureCube.addressModeW

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:322

___

### magFilter

• `get` **magFilter**(): `GPUFilterMode`

#### Returns

`GPUFilterMode`

#### Inherited from

TextureCube.magFilter

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

TextureCube.magFilter

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:333

___

### minFilter

• `get` **minFilter**(): `GPUFilterMode`

#### Returns

`GPUFilterMode`

#### Inherited from

TextureCube.minFilter

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

TextureCube.minFilter

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:344

___

### mipmapFilter

• `get` **mipmapFilter**(): `GPUMipmapFilterMode`

#### Returns

`GPUMipmapFilterMode`

#### Inherited from

TextureCube.mipmapFilter

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

TextureCube.mipmapFilter

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:355

___

### lodMinClamp

• `get` **lodMinClamp**(): `number`

#### Returns

`number`

#### Inherited from

TextureCube.lodMinClamp

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

TextureCube.lodMinClamp

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:366

___

### lodMaxClamp

• `get` **lodMaxClamp**(): `number`

#### Returns

`number`

#### Inherited from

TextureCube.lodMaxClamp

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

TextureCube.lodMaxClamp

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:377

___

### compare

• `get` **compare**(): `GPUCompareFunction`

#### Returns

`GPUCompareFunction`

#### Inherited from

TextureCube.compare

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

TextureCube.compare

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:388

___

### maxAnisotropy

• `get` **maxAnisotropy**(): `number`

#### Returns

`number`

#### Inherited from

TextureCube.maxAnisotropy

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

TextureCube.maxAnisotropy

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:399

___

### ldrImageUrl

• `get` **ldrImageUrl**(): `string`

#### Returns

`string`

#### Defined in

textures/LDRTextureCube.ts:12

## Methods

### init

▸ **init**(): `this`

#### Returns

`this`

#### Inherited from

[TextureCube](TextureCube.md).[init](TextureCube.md#init)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:67

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

[TextureCube](TextureCube.md).[generate](TextureCube.md#generate)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:128

___

### getMipmapCount

▸ **getMipmapCount**(): `number`

#### Returns

`number`

#### Inherited from

[TextureCube](TextureCube.md).[getMipmapCount](TextureCube.md#getmipmapcount)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:220

___

### updateTextureDescription

▸ **updateTextureDescription**(): `void`

#### Returns

`void`

#### Inherited from

[TextureCube](TextureCube.md).[updateTextureDescription](TextureCube.md#updatetexturedescription)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:227

___

### updateGPUTexture

▸ **updateGPUTexture**(): `void`

#### Returns

`void`

#### Inherited from

[TextureCube](TextureCube.md).[updateGPUTexture](TextureCube.md#updategputexture)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:238

___

### getGPUTexture

▸ **getGPUTexture**(): `GPUTexture`

#### Returns

`GPUTexture`

#### Inherited from

[TextureCube](TextureCube.md).[getGPUTexture](TextureCube.md#getgputexture)

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

[TextureCube](TextureCube.md).[getGPUView](TextureCube.md#getgpuview)

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

[TextureCube](TextureCube.md).[bindStateChange](TextureCube.md#bindstatechange)

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

[TextureCube](TextureCube.md).[unBindStateChange](TextureCube.md#unbindstatechange)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:273

___

### noticeChange

▸ **noticeChange**(): `void`

#### Returns

`void`

#### Inherited from

[TextureCube](TextureCube.md).[noticeChange](TextureCube.md#noticechange)

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

[TextureCube](TextureCube.md).[destroy](TextureCube.md#destroy)

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

[TextureCube](TextureCube.md).[delayDestroyTexture](TextureCube.md#delaydestroytexture)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:407

___

### destroyTexture

▸ **destroyTexture**(): `void`

#### Returns

`void`

#### Inherited from

[TextureCube](TextureCube.md).[destroyTexture](TextureCube.md#destroytexture)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:413

___

### createTextureDescriptor

▸ **createTextureDescriptor**(`width`, `height`, `mipLevelCount`, `format`, `usage?`, `sizeCount?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `width` | `number` | `undefined` |
| `height` | `number` | `undefined` |
| `mipLevelCount` | `number` | `undefined` |
| `format` | `GPUTextureFormat` | `undefined` |
| `usage` | `number` | `undefined` |
| `sizeCount` | `number` | `1` |

#### Returns

`void`

#### Inherited from

[TextureCube](TextureCube.md).[createTextureDescriptor](TextureCube.md#createtexturedescriptor)

#### Defined in

gfx/graphics/webGpu/core/texture/TextureCube.ts:25

___

### load

▸ **load**(`url`, `loaderFunctions?`): `Promise`\<[`LDRTextureCube`](LDRTextureCube.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `loaderFunctions?` | [`LoaderFunctions`](../modules.md#loaderfunctions) |

#### Returns

`Promise`\<[`LDRTextureCube`](LDRTextureCube.md)\>

#### Defined in

textures/LDRTextureCube.ts:22

___

### createFromTexture

▸ **createFromTexture**(`size`, `texture`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |
| `texture` | [`Texture`](Texture.md) |

#### Returns

`this`

#### Defined in

textures/LDRTextureCube.ts:40
