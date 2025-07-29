[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / GBufferPost

# Class: GBufferPost

## Hierarchy

- [`PostBase`](PostBase.md)

  ↳ **`GBufferPost`**

## Table of contents

### Constructors

- [constructor](GBufferPost.md#constructor)

### Properties

- [outTexture](GBufferPost.md#outtexture)
- [rendererPassState](GBufferPost.md#rendererpassstate)
- [rtFrame](GBufferPost.md#rtframe)
- [view](GBufferPost.md#view)
- [gBufferTexture](GBufferPost.md#gbuffertexture)
- [testCompute](GBufferPost.md#testcompute)
- [uniformBuffer](GBufferPost.md#uniformbuffer)
- [currentRenderTexture](GBufferPost.md#currentrendertexture)
- [enable](GBufferPost.md#enable)
- [postRenderer](GBufferPost.md#postrenderer)
- [rtViewQuad](GBufferPost.md#rtviewquad)
- [virtualTexture](GBufferPost.md#virtualtexture)

### Accessors

- [state](GBufferPost.md#state)
- [size1](GBufferPost.md#size1)
- [size2](GBufferPost.md#size2)

### Methods

- [onAttach](GBufferPost.md#onattach)
- [onDetach](GBufferPost.md#ondetach)
- [render](GBufferPost.md#render)
- [compute](GBufferPost.md#compute)
- [onResize](GBufferPost.md#onresize)
- [createRTTexture](GBufferPost.md#createrttexture)
- [createViewQuad](GBufferPost.md#createviewquad)
- [getOutTexture](GBufferPost.md#getouttexture)
- [autoSetColorTexture](GBufferPost.md#autosetcolortexture)
- [destroy](GBufferPost.md#destroy)

## Constructors

### constructor

• **new GBufferPost**(): [`GBufferPost`](GBufferPost.md)

#### Returns

[`GBufferPost`](GBufferPost.md)

#### Overrides

[PostBase](PostBase.md).[constructor](PostBase.md#constructor)

#### Defined in

gfx/renderJob/post/GBufferPost.ts:31

## Properties

### outTexture

• **outTexture**: [`VirtualTexture`](VirtualTexture.md)

#### Defined in

gfx/renderJob/post/GBufferPost.ts:20

___

### rendererPassState

• **rendererPassState**: [`RendererPassState`](RendererPassState.md)

#### Defined in

gfx/renderJob/post/GBufferPost.ts:21

___

### rtFrame

• **rtFrame**: [`RTFrame`](RTFrame.md)

#### Defined in

gfx/renderJob/post/GBufferPost.ts:22

___

### view

• **view**: [`View3D`](View3D.md)

#### Defined in

gfx/renderJob/post/GBufferPost.ts:23

___

### gBufferTexture

• **gBufferTexture**: [`RenderTexture`](RenderTexture.md)

#### Defined in

gfx/renderJob/post/GBufferPost.ts:24

___

### testCompute

• **testCompute**: [`ComputeShader`](ComputeShader.md)

#### Defined in

gfx/renderJob/post/GBufferPost.ts:25

___

### uniformBuffer

• **uniformBuffer**: [`UniformGPUBuffer`](UniformGPUBuffer.md)

#### Defined in

gfx/renderJob/post/GBufferPost.ts:29

___

### currentRenderTexture

• **currentRenderTexture**: [`RenderTexture`](RenderTexture.md)

#### Defined in

gfx/renderJob/post/GBufferPost.ts:30

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

### state

• `get` **state**(): `number`

#### Returns

`number`

#### Defined in

gfx/renderJob/post/GBufferPost.ts:47

• `set` **state**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

gfx/renderJob/post/GBufferPost.ts:41

___

### size1

• `get` **size1**(): `number`

#### Returns

`number`

#### Defined in

gfx/renderJob/post/GBufferPost.ts:57

• `set` **size1**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

gfx/renderJob/post/GBufferPost.ts:51

___

### size2

• `get` **size2**(): `number`

#### Returns

`number`

#### Defined in

gfx/renderJob/post/GBufferPost.ts:67

• `set` **size2**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

gfx/renderJob/post/GBufferPost.ts:61

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

gfx/renderJob/post/GBufferPost.ts:35

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

gfx/renderJob/post/GBufferPost.ts:39

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

gfx/renderJob/post/GBufferPost.ts:134

___

### compute

▸ **compute**(`view`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |

#### Returns

`void`

#### Overrides

[PostBase](PostBase.md).[compute](PostBase.md#compute)

#### Defined in

gfx/renderJob/post/GBufferPost.ts:136

___

### onResize

▸ **onResize**(): `void`

#### Returns

`void`

#### Overrides

[PostBase](PostBase.md).[onResize](PostBase.md#onresize)

#### Defined in

gfx/renderJob/post/GBufferPost.ts:154

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
