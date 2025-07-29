[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / TAAPost

# Class: TAAPost

## Hierarchy

- [`PostBase`](PostBase.md)

  ↳ **`TAAPost`**

## Table of contents

### Constructors

- [constructor](TAAPost.md#constructor)

### Properties

- [enable](TAAPost.md#enable)
- [postRenderer](TAAPost.md#postrenderer)
- [rtViewQuad](TAAPost.md#rtviewquad)
- [virtualTexture](TAAPost.md#virtualtexture)
- [taaTexture](TAAPost.md#taatexture)
- [outTexture](TAAPost.md#outtexture)
- [rendererPassState](TAAPost.md#rendererpassstate)
- [taaCompute](TAAPost.md#taacompute)
- [copyTexCompute](TAAPost.md#copytexcompute)
- [sharpCompute](TAAPost.md#sharpcompute)
- [taaSetting](TAAPost.md#taasetting)
- [preColorBuffer](TAAPost.md#precolorbuffer)
- [preColorTex](TAAPost.md#precolortex)
- [preProjMatrix](TAAPost.md#preprojmatrix)
- [preViewMatrix](TAAPost.md#previewmatrix)
- [rtFrame](TAAPost.md#rtframe)

### Accessors

- [jitterSeedCount](TAAPost.md#jitterseedcount)
- [blendFactor](TAAPost.md#blendfactor)
- [sharpFactor](TAAPost.md#sharpfactor)
- [sharpPreBlurFactor](TAAPost.md#sharppreblurfactor)
- [temporalJitterScale](TAAPost.md#temporaljitterscale)

### Methods

- [createRTTexture](TAAPost.md#createrttexture)
- [createViewQuad](TAAPost.md#createviewquad)
- [getOutTexture](TAAPost.md#getouttexture)
- [autoSetColorTexture](TAAPost.md#autosetcolortexture)
- [compute](TAAPost.md#compute)
- [destroy](TAAPost.md#destroy)
- [onAttach](TAAPost.md#onattach)
- [onDetach](TAAPost.md#ondetach)
- [render](TAAPost.md#render)
- [onResize](TAAPost.md#onresize)

## Constructors

### constructor

• **new TAAPost**(): [`TAAPost`](TAAPost.md)

#### Returns

[`TAAPost`](TAAPost.md)

#### Overrides

[PostBase](PostBase.md).[constructor](PostBase.md#constructor)

#### Defined in

gfx/renderJob/post/TAAPost.ts:37

## Properties

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

___

### taaTexture

• **taaTexture**: [`VirtualTexture`](VirtualTexture.md)

#### Defined in

gfx/renderJob/post/TAAPost.ts:24

___

### outTexture

• **outTexture**: [`VirtualTexture`](VirtualTexture.md)

#### Defined in

gfx/renderJob/post/TAAPost.ts:25

___

### rendererPassState

• **rendererPassState**: [`RendererPassState`](RendererPassState.md)

#### Defined in

gfx/renderJob/post/TAAPost.ts:26

___

### taaCompute

• **taaCompute**: [`ComputeShader`](ComputeShader.md)

#### Defined in

gfx/renderJob/post/TAAPost.ts:27

___

### copyTexCompute

• **copyTexCompute**: [`ComputeShader`](ComputeShader.md)

#### Defined in

gfx/renderJob/post/TAAPost.ts:28

___

### sharpCompute

• **sharpCompute**: [`ComputeShader`](ComputeShader.md)

#### Defined in

gfx/renderJob/post/TAAPost.ts:29

___

### taaSetting

• **taaSetting**: [`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Defined in

gfx/renderJob/post/TAAPost.ts:30

___

### preColorBuffer

• **preColorBuffer**: [`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Defined in

gfx/renderJob/post/TAAPost.ts:31

___

### preColorTex

• **preColorTex**: [`VirtualTexture`](VirtualTexture.md)

#### Defined in

gfx/renderJob/post/TAAPost.ts:32

___

### preProjMatrix

• **preProjMatrix**: [`Matrix4`](Matrix4.md)

#### Defined in

gfx/renderJob/post/TAAPost.ts:33

___

### preViewMatrix

• **preViewMatrix**: [`Matrix4`](Matrix4.md)

#### Defined in

gfx/renderJob/post/TAAPost.ts:34

___

### rtFrame

• **rtFrame**: [`RTFrame`](RTFrame.md)

#### Defined in

gfx/renderJob/post/TAAPost.ts:35

## Accessors

### jitterSeedCount

• `get` **jitterSeedCount**(): `number`

#### Returns

`number`

#### Defined in

gfx/renderJob/post/TAAPost.ts:53

• `set` **jitterSeedCount**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

gfx/renderJob/post/TAAPost.ts:58

___

### blendFactor

• `get` **blendFactor**(): `number`

#### Returns

`number`

#### Defined in

gfx/renderJob/post/TAAPost.ts:65

• `set` **blendFactor**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

gfx/renderJob/post/TAAPost.ts:70

___

### sharpFactor

• `get` **sharpFactor**(): `number`

#### Returns

`number`

#### Defined in

gfx/renderJob/post/TAAPost.ts:76

• `set` **sharpFactor**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

gfx/renderJob/post/TAAPost.ts:81

___

### sharpPreBlurFactor

• `get` **sharpPreBlurFactor**(): `number`

#### Returns

`number`

#### Defined in

gfx/renderJob/post/TAAPost.ts:87

• `set` **sharpPreBlurFactor**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

gfx/renderJob/post/TAAPost.ts:92

___

### temporalJitterScale

• `get` **temporalJitterScale**(): `number`

#### Returns

`number`

#### Defined in

gfx/renderJob/post/TAAPost.ts:98

• `set` **temporalJitterScale**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

gfx/renderJob/post/TAAPost.ts:103

## Methods

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

___

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

gfx/renderJob/post/TAAPost.ts:41

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

gfx/renderJob/post/TAAPost.ts:48

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

gfx/renderJob/post/TAAPost.ts:218

___

### onResize

▸ **onResize**(): `void`

#### Returns

`void`

#### Overrides

[PostBase](PostBase.md).[onResize](PostBase.md#onresize)

#### Defined in

gfx/renderJob/post/TAAPost.ts:249
