[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / SolidColorSky

# Class: SolidColorSky

## Hierarchy

- [`LDRTextureCube`](LDRTextureCube.md)

  ↳ **`SolidColorSky`**

## Table of contents

### Constructors

- [constructor](SolidColorSky.md#constructor)

### Properties

- [name](SolidColorSky.md#name)
- [url](SolidColorSky.md#url)
- [gpuTexture](SolidColorSky.md#gputexture)
- [pid](SolidColorSky.md#pid)
- [view](SolidColorSky.md#view)
- [gpuSampler](SolidColorSky.md#gpusampler)
- [gpuSampler\_comparison](SolidColorSky.md#gpusampler_comparison)
- [format](SolidColorSky.md#format)
- [usage](SolidColorSky.md#usage)
- [numberLayer](SolidColorSky.md#numberlayer)
- [viewDescriptor](SolidColorSky.md#viewdescriptor)
- [textureDescriptor](SolidColorSky.md#texturedescriptor)
- [sampler\_comparisonBindingLayout](SolidColorSky.md#sampler_comparisonbindinglayout)
- [flipY](SolidColorSky.md#flipy)
- [isVideoTexture](SolidColorSky.md#isvideotexture)
- [isHDRTexture](SolidColorSky.md#ishdrtexture)
- [mipmapCount](SolidColorSky.md#mipmapcount)
- [\_textureChange](SolidColorSky.md#_texturechange)
- [\_stateChangeRef](SolidColorSky.md#_statechangeref)
- [width](SolidColorSky.md#width)
- [height](SolidColorSky.md#height)
- [depthOrArrayLayers](SolidColorSky.md#depthorarraylayers)
- [visibility](SolidColorSky.md#visibility)
- [textureBindingLayout](SolidColorSky.md#texturebindinglayout)
- [samplerBindingLayout](SolidColorSky.md#samplerbindinglayout)
- [\_faceData](SolidColorSky.md#_facedata)

### Accessors

- [useMipmap](SolidColorSky.md#usemipmap)
- [sourceImageData](SolidColorSky.md#sourceimagedata)
- [addressModeU](SolidColorSky.md#addressmodeu)
- [addressModeV](SolidColorSky.md#addressmodev)
- [addressModeW](SolidColorSky.md#addressmodew)
- [magFilter](SolidColorSky.md#magfilter)
- [minFilter](SolidColorSky.md#minfilter)
- [mipmapFilter](SolidColorSky.md#mipmapfilter)
- [lodMinClamp](SolidColorSky.md#lodminclamp)
- [lodMaxClamp](SolidColorSky.md#lodmaxclamp)
- [compare](SolidColorSky.md#compare)
- [maxAnisotropy](SolidColorSky.md#maxanisotropy)
- [ldrImageUrl](SolidColorSky.md#ldrimageurl)
- [color](SolidColorSky.md#color)

### Methods

- [init](SolidColorSky.md#init)
- [generate](SolidColorSky.md#generate)
- [getMipmapCount](SolidColorSky.md#getmipmapcount)
- [updateTextureDescription](SolidColorSky.md#updatetexturedescription)
- [updateGPUTexture](SolidColorSky.md#updategputexture)
- [getGPUTexture](SolidColorSky.md#getgputexture)
- [getGPUView](SolidColorSky.md#getgpuview)
- [bindStateChange](SolidColorSky.md#bindstatechange)
- [unBindStateChange](SolidColorSky.md#unbindstatechange)
- [noticeChange](SolidColorSky.md#noticechange)
- [destroy](SolidColorSky.md#destroy)
- [delayDestroyTexture](SolidColorSky.md#delaydestroytexture)
- [destroyTexture](SolidColorSky.md#destroytexture)
- [createTextureDescriptor](SolidColorSky.md#createtexturedescriptor)
- [load](SolidColorSky.md#load)
- [createFromTexture](SolidColorSky.md#createfromtexture)

## Constructors

### constructor

• **new SolidColorSky**(`color`): [`SolidColorSky`](SolidColorSky.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | [`Color`](Color.md) |

#### Returns

[`SolidColorSky`](SolidColorSky.md)

#### Overrides

[LDRTextureCube](LDRTextureCube.md).[constructor](LDRTextureCube.md#constructor)

#### Defined in

textures/SolidColorSky.ts:11

## Properties

### name

• **name**: `string`

#### Inherited from

[LDRTextureCube](LDRTextureCube.md).[name](LDRTextureCube.md#name)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:6

___

### url

• **url**: `string`

#### Inherited from

[LDRTextureCube](LDRTextureCube.md).[url](LDRTextureCube.md#url)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:7

___

### gpuTexture

• `Protected` **gpuTexture**: `GPUTexture`

#### Inherited from

[LDRTextureCube](LDRTextureCube.md).[gpuTexture](LDRTextureCube.md#gputexture)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:8

___

### pid

• **pid**: `number`

#### Inherited from

[LDRTextureCube](LDRTextureCube.md).[pid](LDRTextureCube.md#pid)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:9

___

### view

• **view**: `GPUTextureView` \| `GPUExternalTexture`

#### Inherited from

[LDRTextureCube](LDRTextureCube.md).[view](LDRTextureCube.md#view)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:10

___

### gpuSampler

• **gpuSampler**: `GPUSampler`

#### Inherited from

[LDRTextureCube](LDRTextureCube.md).[gpuSampler](LDRTextureCube.md#gpusampler)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:11

___

### gpuSampler\_comparison

• **gpuSampler\_comparison**: `GPUSampler`

#### Inherited from

[LDRTextureCube](LDRTextureCube.md).[gpuSampler_comparison](LDRTextureCube.md#gpusampler_comparison)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:12

___

### format

• **format**: `GPUTextureFormat`

#### Inherited from

[LDRTextureCube](LDRTextureCube.md).[format](LDRTextureCube.md#format)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:13

___

### usage

• **usage**: `number`

#### Inherited from

[LDRTextureCube](LDRTextureCube.md).[usage](LDRTextureCube.md#usage)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:14

___

### numberLayer

• **numberLayer**: `number` = `1`

#### Inherited from

[LDRTextureCube](LDRTextureCube.md).[numberLayer](LDRTextureCube.md#numberlayer)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:18

___

### viewDescriptor

• **viewDescriptor**: `GPUTextureViewDescriptor`

#### Inherited from

[LDRTextureCube](LDRTextureCube.md).[viewDescriptor](LDRTextureCube.md#viewdescriptor)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:19

___

### textureDescriptor

• **textureDescriptor**: `GPUTextureDescriptor`

#### Inherited from

[LDRTextureCube](LDRTextureCube.md).[textureDescriptor](LDRTextureCube.md#texturedescriptor)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:20

___

### sampler\_comparisonBindingLayout

• **sampler\_comparisonBindingLayout**: `GPUSamplerBindingLayout`

#### Inherited from

[LDRTextureCube](LDRTextureCube.md).[sampler_comparisonBindingLayout](LDRTextureCube.md#sampler_comparisonbindinglayout)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:30

___

### flipY

• **flipY**: `boolean`

#### Inherited from

[LDRTextureCube](LDRTextureCube.md).[flipY](LDRTextureCube.md#flipy)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:33

___

### isVideoTexture

• `Optional` **isVideoTexture**: `boolean`

#### Inherited from

[LDRTextureCube](LDRTextureCube.md).[isVideoTexture](LDRTextureCube.md#isvideotexture)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:34

___

### isHDRTexture

• `Optional` **isHDRTexture**: `boolean`

#### Inherited from

[LDRTextureCube](LDRTextureCube.md).[isHDRTexture](LDRTextureCube.md#ishdrtexture)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:35

___

### mipmapCount

• **mipmapCount**: `number` = `1`

#### Inherited from

[LDRTextureCube](LDRTextureCube.md).[mipmapCount](LDRTextureCube.md#mipmapcount)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:48

___

### \_textureChange

• `Protected` **\_textureChange**: `boolean` = `false`

#### Inherited from

[LDRTextureCube](LDRTextureCube.md).[_textureChange](LDRTextureCube.md#_texturechange)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:49

___

### \_stateChangeRef

• `Protected` **\_stateChangeRef**: `Map`\<`any`, `Function`\>

#### Inherited from

[LDRTextureCube](LDRTextureCube.md).[_stateChangeRef](LDRTextureCube.md#_statechangeref)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:267

___

### width

• **width**: `number` = `4`

#### Inherited from

[LDRTextureCube](LDRTextureCube.md).[width](LDRTextureCube.md#width)

#### Defined in

gfx/graphics/webGpu/core/texture/TextureCube.ts:5

___

### height

• **height**: `number` = `4`

#### Inherited from

[LDRTextureCube](LDRTextureCube.md).[height](LDRTextureCube.md#height)

#### Defined in

gfx/graphics/webGpu/core/texture/TextureCube.ts:6

___

### depthOrArrayLayers

• **depthOrArrayLayers**: `number` = `6`

#### Inherited from

[LDRTextureCube](LDRTextureCube.md).[depthOrArrayLayers](LDRTextureCube.md#depthorarraylayers)

#### Defined in

gfx/graphics/webGpu/core/texture/TextureCube.ts:7

___

### visibility

• **visibility**: `number` = `GPUShaderStage.FRAGMENT`

#### Inherited from

[LDRTextureCube](LDRTextureCube.md).[visibility](LDRTextureCube.md#visibility)

#### Defined in

gfx/graphics/webGpu/core/texture/TextureCube.ts:8

___

### textureBindingLayout

• **textureBindingLayout**: `GPUTextureBindingLayout`

#### Inherited from

[LDRTextureCube](LDRTextureCube.md).[textureBindingLayout](LDRTextureCube.md#texturebindinglayout)

#### Defined in

gfx/graphics/webGpu/core/texture/TextureCube.ts:9

___

### samplerBindingLayout

• **samplerBindingLayout**: `GPUSamplerBindingLayout`

#### Inherited from

[LDRTextureCube](LDRTextureCube.md).[samplerBindingLayout](LDRTextureCube.md#samplerbindinglayout)

#### Defined in

gfx/graphics/webGpu/core/texture/TextureCube.ts:13

___

### \_faceData

• `Protected` **\_faceData**: [`TextureCubeFaceData`](TextureCubeFaceData.md)

#### Inherited from

[LDRTextureCube](LDRTextureCube.md).[_faceData](LDRTextureCube.md#_facedata)

#### Defined in

textures/LDRTextureCube.ts:10

## Accessors

### useMipmap

• `get` **useMipmap**(): `boolean`

#### Returns

`boolean`

#### Inherited from

LDRTextureCube.useMipmap

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

LDRTextureCube.useMipmap

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:177

___

### sourceImageData

• `get` **sourceImageData**(): `HTMLCanvasElement` \| `ImageBitmap` \| `OffscreenCanvas`

#### Returns

`HTMLCanvasElement` \| `ImageBitmap` \| `OffscreenCanvas`

#### Inherited from

LDRTextureCube.sourceImageData

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:216

___

### addressModeU

• `get` **addressModeU**(): `GPUAddressMode`

#### Returns

`GPUAddressMode`

#### Inherited from

LDRTextureCube.addressModeU

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

LDRTextureCube.addressModeU

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:300

___

### addressModeV

• `get` **addressModeV**(): `GPUAddressMode`

#### Returns

`GPUAddressMode`

#### Inherited from

LDRTextureCube.addressModeV

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

LDRTextureCube.addressModeV

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:311

___

### addressModeW

• `get` **addressModeW**(): `GPUAddressMode`

#### Returns

`GPUAddressMode`

#### Inherited from

LDRTextureCube.addressModeW

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

LDRTextureCube.addressModeW

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:322

___

### magFilter

• `get` **magFilter**(): `GPUFilterMode`

#### Returns

`GPUFilterMode`

#### Inherited from

LDRTextureCube.magFilter

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

LDRTextureCube.magFilter

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:333

___

### minFilter

• `get` **minFilter**(): `GPUFilterMode`

#### Returns

`GPUFilterMode`

#### Inherited from

LDRTextureCube.minFilter

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

LDRTextureCube.minFilter

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:344

___

### mipmapFilter

• `get` **mipmapFilter**(): `GPUMipmapFilterMode`

#### Returns

`GPUMipmapFilterMode`

#### Inherited from

LDRTextureCube.mipmapFilter

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

LDRTextureCube.mipmapFilter

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:355

___

### lodMinClamp

• `get` **lodMinClamp**(): `number`

#### Returns

`number`

#### Inherited from

LDRTextureCube.lodMinClamp

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

LDRTextureCube.lodMinClamp

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:366

___

### lodMaxClamp

• `get` **lodMaxClamp**(): `number`

#### Returns

`number`

#### Inherited from

LDRTextureCube.lodMaxClamp

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

LDRTextureCube.lodMaxClamp

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:377

___

### compare

• `get` **compare**(): `GPUCompareFunction`

#### Returns

`GPUCompareFunction`

#### Inherited from

LDRTextureCube.compare

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

LDRTextureCube.compare

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:388

___

### maxAnisotropy

• `get` **maxAnisotropy**(): `number`

#### Returns

`number`

#### Inherited from

LDRTextureCube.maxAnisotropy

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

LDRTextureCube.maxAnisotropy

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:399

___

### ldrImageUrl

• `get` **ldrImageUrl**(): `string`

#### Returns

`string`

#### Inherited from

LDRTextureCube.ldrImageUrl

#### Defined in

textures/LDRTextureCube.ts:12

___

### color

• `get` **color**(): [`Color`](Color.md)

#### Returns

[`Color`](Color.md)

#### Defined in

textures/SolidColorSky.ts:51

• `set` **color**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Color`](Color.md) |

#### Returns

`void`

#### Defined in

textures/SolidColorSky.ts:55

## Methods

### init

▸ **init**(): `this`

#### Returns

`this`

#### Inherited from

[LDRTextureCube](LDRTextureCube.md).[init](LDRTextureCube.md#init)

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

[LDRTextureCube](LDRTextureCube.md).[generate](LDRTextureCube.md#generate)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:128

___

### getMipmapCount

▸ **getMipmapCount**(): `number`

#### Returns

`number`

#### Inherited from

[LDRTextureCube](LDRTextureCube.md).[getMipmapCount](LDRTextureCube.md#getmipmapcount)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:220

___

### updateTextureDescription

▸ **updateTextureDescription**(): `void`

#### Returns

`void`

#### Inherited from

[LDRTextureCube](LDRTextureCube.md).[updateTextureDescription](LDRTextureCube.md#updatetexturedescription)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:227

___

### updateGPUTexture

▸ **updateGPUTexture**(): `void`

#### Returns

`void`

#### Inherited from

[LDRTextureCube](LDRTextureCube.md).[updateGPUTexture](LDRTextureCube.md#updategputexture)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:238

___

### getGPUTexture

▸ **getGPUTexture**(): `GPUTexture`

#### Returns

`GPUTexture`

#### Inherited from

[LDRTextureCube](LDRTextureCube.md).[getGPUTexture](LDRTextureCube.md#getgputexture)

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

[LDRTextureCube](LDRTextureCube.md).[getGPUView](LDRTextureCube.md#getgpuview)

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

[LDRTextureCube](LDRTextureCube.md).[bindStateChange](LDRTextureCube.md#bindstatechange)

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

[LDRTextureCube](LDRTextureCube.md).[unBindStateChange](LDRTextureCube.md#unbindstatechange)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:273

___

### noticeChange

▸ **noticeChange**(): `void`

#### Returns

`void`

#### Inherited from

[LDRTextureCube](LDRTextureCube.md).[noticeChange](LDRTextureCube.md#noticechange)

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

[LDRTextureCube](LDRTextureCube.md).[destroy](LDRTextureCube.md#destroy)

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

[LDRTextureCube](LDRTextureCube.md).[delayDestroyTexture](LDRTextureCube.md#delaydestroytexture)

#### Defined in

gfx/graphics/webGpu/core/texture/Texture.ts:407

___

### destroyTexture

▸ **destroyTexture**(): `void`

#### Returns

`void`

#### Inherited from

[LDRTextureCube](LDRTextureCube.md).[destroyTexture](LDRTextureCube.md#destroytexture)

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

[LDRTextureCube](LDRTextureCube.md).[createTextureDescriptor](LDRTextureCube.md#createtexturedescriptor)

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

#### Inherited from

[LDRTextureCube](LDRTextureCube.md).[load](LDRTextureCube.md#load)

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

#### Inherited from

[LDRTextureCube](LDRTextureCube.md).[createFromTexture](LDRTextureCube.md#createfromtexture)

#### Defined in

textures/LDRTextureCube.ts:40
