[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / SSRPost

# Class: SSRPost

## Hierarchy

- [`PostBase`](PostBase.md)

  ↳ **`SSRPost`**

## Table of contents

### Constructors

- [constructor](SSRPost.md#constructor)

### Properties

- [enable](SSRPost.md#enable)
- [postRenderer](SSRPost.md#postrenderer)
- [rtViewQuad](SSRPost.md#rtviewquad)
- [virtualTexture](SSRPost.md#virtualtexture)
- [isRetTexture](SSRPost.md#isrettexture)
- [finalTexture](SSRPost.md#finaltexture)
- [rendererPassState](SSRPost.md#rendererpassstate)
- [ssrUniformBuffer](SSRPost.md#ssruniformbuffer)
- [rayTraceData](SSRPost.md#raytracedata)
- [ssrColorData](SSRPost.md#ssrcolordata)
- [rtFrame](SSRPost.md#rtframe)
- [historyPosition](SSRPost.md#historyposition)
- [view](SSRPost.md#view)

### Accessors

- [fadeEdgeRatio](SSRPost.md#fadeedgeratio)
- [rayMarchRatio](SSRPost.md#raymarchratio)
- [roughnessThreshold](SSRPost.md#roughnessthreshold)
- [fadeDistanceMin](SSRPost.md#fadedistancemin)
- [fadeDistanceMax](SSRPost.md#fadedistancemax)
- [powDotRN](SSRPost.md#powdotrn)

### Methods

- [createRTTexture](SSRPost.md#createrttexture)
- [createViewQuad](SSRPost.md#createviewquad)
- [getOutTexture](SSRPost.md#getouttexture)
- [autoSetColorTexture](SSRPost.md#autosetcolortexture)
- [compute](SSRPost.md#compute)
- [destroy](SSRPost.md#destroy)
- [onAttach](SSRPost.md#onattach)
- [onDetach](SSRPost.md#ondetach)
- [render](SSRPost.md#render)
- [onResize](SSRPost.md#onresize)

## Constructors

### constructor

• **new SSRPost**(): [`SSRPost`](SSRPost.md)

#### Returns

[`SSRPost`](SSRPost.md)

#### Inherited from

[PostBase](PostBase.md).[constructor](PostBase.md#constructor)

#### Defined in

gfx/renderJob/post/PostBase.ts:20

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

### isRetTexture

• **isRetTexture**: [`VirtualTexture`](VirtualTexture.md)

#### Defined in

gfx/renderJob/post/SSRPost.ts:33

___

### finalTexture

• **finalTexture**: [`VirtualTexture`](VirtualTexture.md)

#### Defined in

gfx/renderJob/post/SSRPost.ts:37

___

### rendererPassState

• **rendererPassState**: [`RendererPassState`](RendererPassState.md)

#### Defined in

gfx/renderJob/post/SSRPost.ts:41

___

### ssrUniformBuffer

• **ssrUniformBuffer**: [`UniformGPUBuffer`](UniformGPUBuffer.md)

#### Defined in

gfx/renderJob/post/SSRPost.ts:45

___

### rayTraceData

• **rayTraceData**: [`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Defined in

gfx/renderJob/post/SSRPost.ts:49

___

### ssrColorData

• **ssrColorData**: [`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Defined in

gfx/renderJob/post/SSRPost.ts:53

___

### rtFrame

• **rtFrame**: [`RTFrame`](RTFrame.md)

#### Defined in

gfx/renderJob/post/SSRPost.ts:57

___

### historyPosition

• **historyPosition**: [`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Defined in

gfx/renderJob/post/SSRPost.ts:58

___

### view

• **view**: [`View3D`](View3D.md)

#### Defined in

gfx/renderJob/post/SSRPost.ts:59

## Accessors

### fadeEdgeRatio

• `get` **fadeEdgeRatio**(): `number`

#### Returns

`number`

#### Defined in

gfx/renderJob/post/SSRPost.ts:77

• `set` **fadeEdgeRatio**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

gfx/renderJob/post/SSRPost.ts:82

___

### rayMarchRatio

• `get` **rayMarchRatio**(): `number`

#### Returns

`number`

#### Defined in

gfx/renderJob/post/SSRPost.ts:88

• `set` **rayMarchRatio**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

gfx/renderJob/post/SSRPost.ts:93

___

### roughnessThreshold

• `get` **roughnessThreshold**(): `number`

#### Returns

`number`

#### Defined in

gfx/renderJob/post/SSRPost.ts:99

• `set` **roughnessThreshold**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

gfx/renderJob/post/SSRPost.ts:104

___

### fadeDistanceMin

• `get` **fadeDistanceMin**(): `number`

#### Returns

`number`

#### Defined in

gfx/renderJob/post/SSRPost.ts:110

• `set` **fadeDistanceMin**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

gfx/renderJob/post/SSRPost.ts:115

___

### fadeDistanceMax

• `get` **fadeDistanceMax**(): `number`

#### Returns

`number`

#### Defined in

gfx/renderJob/post/SSRPost.ts:121

• `set` **fadeDistanceMax**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

gfx/renderJob/post/SSRPost.ts:126

___

### powDotRN

• `get` **powDotRN**(): `number`

#### Returns

`number`

#### Defined in

gfx/renderJob/post/SSRPost.ts:132

• `set` **powDotRN**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

gfx/renderJob/post/SSRPost.ts:137

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

gfx/renderJob/post/SSRPost.ts:64

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

gfx/renderJob/post/SSRPost.ts:71

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

gfx/renderJob/post/SSRPost.ts:297

___

### onResize

▸ **onResize**(): `void`

#### Returns

`void`

#### Overrides

[PostBase](PostBase.md).[onResize](PostBase.md#onresize)

#### Defined in

gfx/renderJob/post/SSRPost.ts:343
