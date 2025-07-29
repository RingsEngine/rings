[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / DepthOfFieldPost

# Class: DepthOfFieldPost

## Hierarchy

- [`PostBase`](PostBase.md)

  ↳ **`DepthOfFieldPost`**

## Table of contents

### Constructors

- [constructor](DepthOfFieldPost.md#constructor)

### Properties

- [blurTexture1](DepthOfFieldPost.md#blurtexture1)
- [blurTexture2](DepthOfFieldPost.md#blurtexture2)
- [rendererPassState](DepthOfFieldPost.md#rendererpassstate)
- [blurComputes](DepthOfFieldPost.md#blurcomputes)
- [blurSettings](DepthOfFieldPost.md#blursettings)
- [outTexture](DepthOfFieldPost.md#outtexture)
- [rtFrame](DepthOfFieldPost.md#rtframe)
- [enable](DepthOfFieldPost.md#enable)
- [postRenderer](DepthOfFieldPost.md#postrenderer)
- [rtViewQuad](DepthOfFieldPost.md#rtviewquad)
- [virtualTexture](DepthOfFieldPost.md#virtualtexture)

### Accessors

- [pixelOffset](DepthOfFieldPost.md#pixeloffset)
- [near](DepthOfFieldPost.md#near)
- [far](DepthOfFieldPost.md#far)

### Methods

- [onAttach](DepthOfFieldPost.md#onattach)
- [onDetach](DepthOfFieldPost.md#ondetach)
- [render](DepthOfFieldPost.md#render)
- [onResize](DepthOfFieldPost.md#onresize)
- [createRTTexture](DepthOfFieldPost.md#createrttexture)
- [createViewQuad](DepthOfFieldPost.md#createviewquad)
- [getOutTexture](DepthOfFieldPost.md#getouttexture)
- [autoSetColorTexture](DepthOfFieldPost.md#autosetcolortexture)
- [compute](DepthOfFieldPost.md#compute)
- [destroy](DepthOfFieldPost.md#destroy)

## Constructors

### constructor

• **new DepthOfFieldPost**(): [`DepthOfFieldPost`](DepthOfFieldPost.md)

#### Returns

[`DepthOfFieldPost`](DepthOfFieldPost.md)

#### Overrides

[PostBase](PostBase.md).[constructor](PostBase.md#constructor)

#### Defined in

gfx/renderJob/post/DepthOfFieldPost.ts:46

## Properties

### blurTexture1

• **blurTexture1**: [`VirtualTexture`](VirtualTexture.md)

#### Defined in

gfx/renderJob/post/DepthOfFieldPost.ts:23

___

### blurTexture2

• **blurTexture2**: [`VirtualTexture`](VirtualTexture.md)

#### Defined in

gfx/renderJob/post/DepthOfFieldPost.ts:27

___

### rendererPassState

• **rendererPassState**: [`RendererPassState`](RendererPassState.md)

#### Defined in

gfx/renderJob/post/DepthOfFieldPost.ts:31

___

### blurComputes

• **blurComputes**: [`ComputeShader`](ComputeShader.md)[]

#### Defined in

gfx/renderJob/post/DepthOfFieldPost.ts:35

___

### blurSettings

• **blurSettings**: [`StorageGPUBuffer`](StorageGPUBuffer.md)[]

#### Defined in

gfx/renderJob/post/DepthOfFieldPost.ts:39

___

### outTexture

• **outTexture**: [`VirtualTexture`](VirtualTexture.md)

#### Defined in

gfx/renderJob/post/DepthOfFieldPost.ts:43

___

### rtFrame

• **rtFrame**: [`RTFrame`](RTFrame.md)

#### Defined in

gfx/renderJob/post/DepthOfFieldPost.ts:44

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

### pixelOffset

• `get` **pixelOffset**(): `number`

#### Returns

`number`

#### Defined in

gfx/renderJob/post/DepthOfFieldPost.ts:62

• `set` **pixelOffset**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

gfx/renderJob/post/DepthOfFieldPost.ts:67

___

### near

• `get` **near**(): `number`

#### Returns

`number`

#### Defined in

gfx/renderJob/post/DepthOfFieldPost.ts:73

• `set` **near**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

gfx/renderJob/post/DepthOfFieldPost.ts:78

___

### far

• `get` **far**(): `number`

#### Returns

`number`

#### Defined in

gfx/renderJob/post/DepthOfFieldPost.ts:84

• `set` **far**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

gfx/renderJob/post/DepthOfFieldPost.ts:89

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

gfx/renderJob/post/DepthOfFieldPost.ts:52

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

gfx/renderJob/post/DepthOfFieldPost.ts:58

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

gfx/renderJob/post/DepthOfFieldPost.ts:172

___

### onResize

▸ **onResize**(): `void`

#### Returns

`void`

#### Overrides

[PostBase](PostBase.md).[onResize](PostBase.md#onresize)

#### Defined in

gfx/renderJob/post/DepthOfFieldPost.ts:206

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
