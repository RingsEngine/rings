[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / BloomPost

# Class: BloomPost

## Hierarchy

- [`PostBase`](PostBase.md)

  ↳ **`BloomPost`**

## Table of contents

### Constructors

- [constructor](BloomPost.md#constructor)

### Properties

- [RT\_BloomUp](BloomPost.md#rt_bloomup)
- [RT\_BloomDown](BloomPost.md#rt_bloomdown)
- [RT\_threshold](BloomPost.md#rt_threshold)
- [rendererPassState](BloomPost.md#rendererpassstate)
- [thresholdCompute](BloomPost.md#thresholdcompute)
- [downSampleComputes](BloomPost.md#downsamplecomputes)
- [upSampleComputes](BloomPost.md#upsamplecomputes)
- [postCompute](BloomPost.md#postcompute)
- [bloomSetting](BloomPost.md#bloomsetting)
- [rtFrame](BloomPost.md#rtframe)
- [enable](BloomPost.md#enable)
- [postRenderer](BloomPost.md#postrenderer)
- [rtViewQuad](BloomPost.md#rtviewquad)
- [virtualTexture](BloomPost.md#virtualtexture)

### Accessors

- [downSampleBlurSize](BloomPost.md#downsampleblursize)
- [downSampleBlurSigma](BloomPost.md#downsampleblursigma)
- [upSampleBlurSize](BloomPost.md#upsampleblursize)
- [upSampleBlurSigma](BloomPost.md#upsampleblursigma)
- [luminanceThreshole](BloomPost.md#luminancethreshole)
- [bloomIntensity](BloomPost.md#bloomintensity)
- [hdr](BloomPost.md#hdr)

### Methods

- [onAttach](BloomPost.md#onattach)
- [onDetach](BloomPost.md#ondetach)
- [render](BloomPost.md#render)
- [onResize](BloomPost.md#onresize)
- [createRTTexture](BloomPost.md#createrttexture)
- [createViewQuad](BloomPost.md#createviewquad)
- [getOutTexture](BloomPost.md#getouttexture)
- [autoSetColorTexture](BloomPost.md#autosetcolortexture)
- [compute](BloomPost.md#compute)
- [destroy](BloomPost.md#destroy)

## Constructors

### constructor

• **new BloomPost**(): [`BloomPost`](BloomPost.md)

#### Returns

[`BloomPost`](BloomPost.md)

#### Overrides

[PostBase](PostBase.md).[constructor](PostBase.md#constructor)

#### Defined in

gfx/renderJob/post/BloomPost.ts:33

## Properties

### RT\_BloomUp

• **RT\_BloomUp**: [`VirtualTexture`](VirtualTexture.md)[]

#### Defined in

gfx/renderJob/post/BloomPost.ts:22

___

### RT\_BloomDown

• **RT\_BloomDown**: [`VirtualTexture`](VirtualTexture.md)[]

#### Defined in

gfx/renderJob/post/BloomPost.ts:23

___

### RT\_threshold

• **RT\_threshold**: [`VirtualTexture`](VirtualTexture.md)

#### Defined in

gfx/renderJob/post/BloomPost.ts:24

___

### rendererPassState

• **rendererPassState**: [`RendererPassState`](RendererPassState.md)

#### Defined in

gfx/renderJob/post/BloomPost.ts:25

___

### thresholdCompute

• **thresholdCompute**: [`ComputeShader`](ComputeShader.md)

#### Defined in

gfx/renderJob/post/BloomPost.ts:26

___

### downSampleComputes

• **downSampleComputes**: [`ComputeShader`](ComputeShader.md)[]

#### Defined in

gfx/renderJob/post/BloomPost.ts:27

___

### upSampleComputes

• **upSampleComputes**: [`ComputeShader`](ComputeShader.md)[]

#### Defined in

gfx/renderJob/post/BloomPost.ts:28

___

### postCompute

• **postCompute**: [`ComputeShader`](ComputeShader.md)

#### Defined in

gfx/renderJob/post/BloomPost.ts:29

___

### bloomSetting

• **bloomSetting**: [`UniformGPUBuffer`](UniformGPUBuffer.md)

#### Defined in

gfx/renderJob/post/BloomPost.ts:30

___

### rtFrame

• **rtFrame**: [`RTFrame`](RTFrame.md)

#### Defined in

gfx/renderJob/post/BloomPost.ts:31

___

### enable

• **enable**: `boolean` = `true`

#### Inherited from

[PostBase](PostBase.md).[enable](PostBase.md#enable)

#### Defined in

gfx/renderJob/post/PostBase.ts:15

___

### postRenderer

• **postRenderer**: [`PostRenderer`](PostRenderer.md)

#### Inherited from

[PostBase](PostBase.md).[postRenderer](PostBase.md#postrenderer)

#### Defined in

gfx/renderJob/post/PostBase.ts:16

___

### rtViewQuad

• `Protected` **rtViewQuad**: `Map`\<`string`, [`ViewQuad`](ViewQuad.md)\>

#### Inherited from

[PostBase](PostBase.md).[rtViewQuad](PostBase.md#rtviewquad)

#### Defined in

gfx/renderJob/post/PostBase.ts:17

___

### virtualTexture

• `Protected` **virtualTexture**: `Map`\<`string`, [`VirtualTexture`](VirtualTexture.md)\>

#### Inherited from

[PostBase](PostBase.md).[virtualTexture](PostBase.md#virtualtexture)

#### Defined in

gfx/renderJob/post/PostBase.ts:18

## Accessors

### downSampleBlurSize

• `get` **downSampleBlurSize**(): `number`

#### Returns

`number`

#### Defined in

gfx/renderJob/post/BloomPost.ts:51

• `set` **downSampleBlurSize**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

gfx/renderJob/post/BloomPost.ts:54

___

### downSampleBlurSigma

• `get` **downSampleBlurSigma**(): `number`

#### Returns

`number`

#### Defined in

gfx/renderJob/post/BloomPost.ts:58

• `set` **downSampleBlurSigma**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

gfx/renderJob/post/BloomPost.ts:62

___

### upSampleBlurSize

• `get` **upSampleBlurSize**(): `number`

#### Returns

`number`

#### Defined in

gfx/renderJob/post/BloomPost.ts:66

• `set` **upSampleBlurSize**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

gfx/renderJob/post/BloomPost.ts:70

___

### upSampleBlurSigma

• `get` **upSampleBlurSigma**(): `number`

#### Returns

`number`

#### Defined in

gfx/renderJob/post/BloomPost.ts:74

• `set` **upSampleBlurSigma**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

gfx/renderJob/post/BloomPost.ts:78

___

### luminanceThreshole

• `get` **luminanceThreshole**(): `number`

#### Returns

`number`

#### Defined in

gfx/renderJob/post/BloomPost.ts:82

• `set` **luminanceThreshole**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

gfx/renderJob/post/BloomPost.ts:86

___

### bloomIntensity

• `get` **bloomIntensity**(): `number`

#### Returns

`number`

#### Defined in

gfx/renderJob/post/BloomPost.ts:90

• `set` **bloomIntensity**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

gfx/renderJob/post/BloomPost.ts:94

___

### hdr

• `get` **hdr**(): `number`

#### Returns

`number`

#### Defined in

gfx/renderJob/post/BloomPost.ts:98

• `set` **hdr**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

gfx/renderJob/post/BloomPost.ts:102

## Methods

### onAttach

▸ **onAttach**(`view`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |

#### Returns

`void`

#### Overrides

[PostBase](PostBase.md).[onAttach](PostBase.md#onattach)

#### Defined in

gfx/renderJob/post/BloomPost.ts:37

___

### onDetach

▸ **onDetach**(`view`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |

#### Returns

`void`

#### Overrides

[PostBase](PostBase.md).[onDetach](PostBase.md#ondetach)

#### Defined in

gfx/renderJob/post/BloomPost.ts:42

___

### render

▸ **render**(`view`, `command`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `command` | `GPUCommandEncoder` |

#### Returns

`void`

#### Overrides

[PostBase](PostBase.md).[render](PostBase.md#render)

#### Defined in

gfx/renderJob/post/BloomPost.ts:238

___

### onResize

▸ **onResize**(): `void`

#### Returns

`void`

#### Overrides

[PostBase](PostBase.md).[onResize](PostBase.md#onresize)

#### Defined in

gfx/renderJob/post/BloomPost.ts:272

___

### createRTTexture

▸ **createRTTexture**(`name`, `rtWidth`, `rtHeight`, `format`, `useMipmap?`, `sampleCount?`): [`RenderTexture`](RenderTexture.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `rtWidth` | `number` | `undefined` |
| `rtHeight` | `number` | `undefined` |
| `format` | `GPUTextureFormat` | `undefined` |
| `useMipmap` | `boolean` | `false` |
| `sampleCount` | `number` | `0` |

#### Returns

[`RenderTexture`](RenderTexture.md)

#### Inherited from

[PostBase](PostBase.md).[createRTTexture](PostBase.md#createrttexture)

#### Defined in

gfx/renderJob/post/PostBase.ts:27

___

### createViewQuad

▸ **createViewQuad**(`name`, `shaderName`, `outRtTexture`, `msaa?`): [`ViewQuad`](ViewQuad.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `shaderName` | `string` | `undefined` |
| `outRtTexture` | [`VirtualTexture`](VirtualTexture.md) | `undefined` |
| `msaa` | `number` | `0` |

#### Returns

[`ViewQuad`](ViewQuad.md)

#### Inherited from

[PostBase](PostBase.md).[createViewQuad](PostBase.md#createviewquad)

#### Defined in

gfx/renderJob/post/PostBase.ts:49

___

### getOutTexture

▸ **getOutTexture**(): [`Texture`](Texture.md)

#### Returns

[`Texture`](Texture.md)

#### Inherited from

[PostBase](PostBase.md).[getOutTexture](PostBase.md#getouttexture)

#### Defined in

gfx/renderJob/post/PostBase.ts:66

___

### autoSetColorTexture

▸ **autoSetColorTexture**(`name`, `compute`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `compute` | [`ComputeShader`](ComputeShader.md) |

#### Returns

`void`

#### Inherited from

[PostBase](PostBase.md).[autoSetColorTexture](PostBase.md#autosetcolortexture)

#### Defined in

gfx/renderJob/post/PostBase.ts:79

___

### compute

▸ **compute**(`view`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |

#### Returns

`void`

#### Inherited from

[PostBase](PostBase.md).[compute](PostBase.md#compute)

#### Defined in

gfx/renderJob/post/PostBase.ts:86

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

[PostBase](PostBase.md).[destroy](PostBase.md#destroy)

#### Defined in

gfx/renderJob/post/PostBase.ts:107
