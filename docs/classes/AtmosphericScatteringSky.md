[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / AtmosphericScatteringSky

# Class: AtmosphericScatteringSky

## Hierarchy

- [`LDRTextureCube`](LDRTextureCube.md)

  ↳ **`AtmosphericScatteringSky`**

## Table of contents

### Constructors

- [constructor](AtmosphericScatteringSky.md#constructor)

### Properties

- [name](AtmosphericScatteringSky.md#name)
- [url](AtmosphericScatteringSky.md#url)
- [gpuTexture](AtmosphericScatteringSky.md#gputexture)
- [pid](AtmosphericScatteringSky.md#pid)
- [view](AtmosphericScatteringSky.md#view)
- [gpuSampler](AtmosphericScatteringSky.md#gpusampler)
- [gpuSampler\_comparison](AtmosphericScatteringSky.md#gpusampler_comparison)
- [format](AtmosphericScatteringSky.md#format)
- [usage](AtmosphericScatteringSky.md#usage)
- [numberLayer](AtmosphericScatteringSky.md#numberlayer)
- [viewDescriptor](AtmosphericScatteringSky.md#viewdescriptor)
- [textureDescriptor](AtmosphericScatteringSky.md#texturedescriptor)
- [sampler\_comparisonBindingLayout](AtmosphericScatteringSky.md#sampler_comparisonbindinglayout)
- [flipY](AtmosphericScatteringSky.md#flipy)
- [isVideoTexture](AtmosphericScatteringSky.md#isvideotexture)
- [isHDRTexture](AtmosphericScatteringSky.md#ishdrtexture)
- [mipmapCount](AtmosphericScatteringSky.md#mipmapcount)
- [\_textureChange](AtmosphericScatteringSky.md#_texturechange)
- [\_stateChangeRef](AtmosphericScatteringSky.md#_statechangeref)
- [width](AtmosphericScatteringSky.md#width)
- [height](AtmosphericScatteringSky.md#height)
- [depthOrArrayLayers](AtmosphericScatteringSky.md#depthorarraylayers)
- [visibility](AtmosphericScatteringSky.md#visibility)
- [textureBindingLayout](AtmosphericScatteringSky.md#texturebindinglayout)
- [samplerBindingLayout](AtmosphericScatteringSky.md#samplerbindinglayout)
- [setting](AtmosphericScatteringSky.md#setting)
- [\_faceData](AtmosphericScatteringSky.md#_facedata)

### Accessors

- [useMipmap](AtmosphericScatteringSky.md#usemipmap)
- [sourceImageData](AtmosphericScatteringSky.md#sourceimagedata)
- [addressModeU](AtmosphericScatteringSky.md#addressmodeu)
- [addressModeV](AtmosphericScatteringSky.md#addressmodev)
- [addressModeW](AtmosphericScatteringSky.md#addressmodew)
- [magFilter](AtmosphericScatteringSky.md#magfilter)
- [minFilter](AtmosphericScatteringSky.md#minfilter)
- [mipmapFilter](AtmosphericScatteringSky.md#mipmapfilter)
- [lodMinClamp](AtmosphericScatteringSky.md#lodminclamp)
- [lodMaxClamp](AtmosphericScatteringSky.md#lodmaxclamp)
- [compare](AtmosphericScatteringSky.md#compare)
- [maxAnisotropy](AtmosphericScatteringSky.md#maxanisotropy)
- [texture2D](AtmosphericScatteringSky.md#texture2d)
- [ldrImageUrl](AtmosphericScatteringSky.md#ldrimageurl)

### Methods

- [init](AtmosphericScatteringSky.md#init)
- [generate](AtmosphericScatteringSky.md#generate)
- [getMipmapCount](AtmosphericScatteringSky.md#getmipmapcount)
- [updateTextureDescription](AtmosphericScatteringSky.md#updatetexturedescription)
- [updateGPUTexture](AtmosphericScatteringSky.md#updategputexture)
- [getGPUTexture](AtmosphericScatteringSky.md#getgputexture)
- [getGPUView](AtmosphericScatteringSky.md#getgpuview)
- [bindStateChange](AtmosphericScatteringSky.md#bindstatechange)
- [unBindStateChange](AtmosphericScatteringSky.md#unbindstatechange)
- [noticeChange](AtmosphericScatteringSky.md#noticechange)
- [destroy](AtmosphericScatteringSky.md#destroy)
- [delayDestroyTexture](AtmosphericScatteringSky.md#delaydestroytexture)
- [destroyTexture](AtmosphericScatteringSky.md#destroytexture)
- [createTextureDescriptor](AtmosphericScatteringSky.md#createtexturedescriptor)
- [apply](AtmosphericScatteringSky.md#apply)
- [load](AtmosphericScatteringSky.md#load)
- [createFromTexture](AtmosphericScatteringSky.md#createfromtexture)

## Constructors

### constructor

• **new AtmosphericScatteringSky**(`setting`): [`AtmosphericScatteringSky`](AtmosphericScatteringSky.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `setting` | [`AtmosphericScatteringSkySetting`](AtmosphericScatteringSkySetting.md) |

#### Returns

[`AtmosphericScatteringSky`](AtmosphericScatteringSky.md)

#### Overrides

[LDRTextureCube](LDRTextureCube.md).[constructor](LDRTextureCube.md#constructor)

#### Defined in

textures/AtmosphericScatteringSky.ts:31

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

### setting

• `Readonly` **setting**: [`AtmosphericScatteringSkySetting`](AtmosphericScatteringSkySetting.md)

#### Defined in

textures/AtmosphericScatteringSky.ts:29

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

### texture2D

• `get` **texture2D**(): [`Texture`](Texture.md)

#### Returns

[`Texture`](Texture.md)

#### Defined in

textures/AtmosphericScatteringSky.ts:45

___

### ldrImageUrl

• `get` **ldrImageUrl**(): `string`

#### Returns

`string`

#### Inherited from

LDRTextureCube.ldrImageUrl

#### Defined in

textures/LDRTextureCube.ts:12

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

### apply

▸ **apply**(): `this`

#### Returns

`this`

#### Defined in

textures/AtmosphericScatteringSky.ts:49

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
