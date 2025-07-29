[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / PostBase

# Class: PostBase

## Hierarchy

- **`PostBase`**

  ↳ [`BloomPost`](BloomPost.md)

  ↳ [`DepthOfFieldPost`](DepthOfFieldPost.md)

  ↳ [`FXAAPost`](FXAAPost.md)

  ↳ [`GBufferPost`](GBufferPost.md)

  ↳ [`GTAOPost`](GTAOPost.md)

  ↳ [`GlobalFog`](GlobalFog.md)

  ↳ [`GodRayPost`](GodRayPost.md)

  ↳ [`OutlinePost`](OutlinePost.md)

  ↳ [`SSGIPost`](SSGIPost.md)

  ↳ [`SSRPost`](SSRPost.md)

  ↳ [`TAAPost`](TAAPost.md)

## Table of contents

### Constructors

- [constructor](PostBase.md#constructor)

### Properties

- [enable](PostBase.md#enable)
- [postRenderer](PostBase.md#postrenderer)
- [rtViewQuad](PostBase.md#rtviewquad)
- [virtualTexture](PostBase.md#virtualtexture)

### Methods

- [createRTTexture](PostBase.md#createrttexture)
- [createViewQuad](PostBase.md#createviewquad)
- [getOutTexture](PostBase.md#getouttexture)
- [autoSetColorTexture](PostBase.md#autosetcolortexture)
- [compute](PostBase.md#compute)
- [onAttach](PostBase.md#onattach)
- [onDetach](PostBase.md#ondetach)
- [onResize](PostBase.md#onresize)
- [render](PostBase.md#render)
- [destroy](PostBase.md#destroy)

## Constructors

### constructor

• **new PostBase**(): [`PostBase`](PostBase.md)

#### Returns

[`PostBase`](PostBase.md)

#### Defined in

gfx/renderJob/post/PostBase.ts:20

## Properties

### enable

• **enable**: `boolean` = `true`

#### Defined in

gfx/renderJob/post/PostBase.ts:15

___

### postRenderer

• **postRenderer**: [`PostRenderer`](PostRenderer.md)

#### Defined in

gfx/renderJob/post/PostBase.ts:16

___

### rtViewQuad

• `Protected` **rtViewQuad**: `Map`\<`string`, [`ViewQuad`](ViewQuad.md)\>

#### Defined in

gfx/renderJob/post/PostBase.ts:17

___

### virtualTexture

• `Protected` **virtualTexture**: `Map`\<`string`, [`VirtualTexture`](VirtualTexture.md)\>

#### Defined in

gfx/renderJob/post/PostBase.ts:18

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

#### Defined in

gfx/renderJob/post/PostBase.ts:49

___

### getOutTexture

▸ **getOutTexture**(): [`Texture`](Texture.md)

#### Returns

[`Texture`](Texture.md)

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

#### Defined in

gfx/renderJob/post/PostBase.ts:86

___

### onAttach

▸ **onAttach**(`view`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |

#### Returns

`void`

#### Defined in

gfx/renderJob/post/PostBase.ts:90

___

### onDetach

▸ **onDetach**(`view`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |

#### Returns

`void`

#### Defined in

gfx/renderJob/post/PostBase.ts:94

___

### onResize

▸ **onResize**(): `void`

#### Returns

`void`

#### Defined in

gfx/renderJob/post/PostBase.ts:95

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

#### Defined in

gfx/renderJob/post/PostBase.ts:99

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

gfx/renderJob/post/PostBase.ts:107
