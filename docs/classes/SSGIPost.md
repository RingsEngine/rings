[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / SSGIPost

# Class: SSGIPost

## Hierarchy

- [`PostBase`](PostBase.md)

  ↳ **`SSGIPost`**

## Table of contents

### Constructors

- [constructor](SSGIPost.md#constructor)

### Properties

- [enable](SSGIPost.md#enable)
- [postRenderer](SSGIPost.md#postrenderer)
- [rtViewQuad](SSGIPost.md#rtviewquad)
- [virtualTexture](SSGIPost.md#virtualtexture)
- [outTexture](SSGIPost.md#outtexture)
- [newTexture](SSGIPost.md#newtexture)
- [oldTexture](SSGIPost.md#oldtexture)
- [combineTexture](SSGIPost.md#combinetexture)
- [rendererPassState](SSGIPost.md#rendererpassstate)
- [ssgiCompute](SSGIPost.md#ssgicompute)
- [delayCompute](SSGIPost.md#delaycompute)
- [combineCompute](SSGIPost.md#combinecompute)
- [rtFrame](SSGIPost.md#rtframe)
- [textureScaleSmallCompute](SSGIPost.md#texturescalesmallcompute)
- [textureScaleBigCompute](SSGIPost.md#texturescalebigcompute)
- [view](SSGIPost.md#view)
- [colorTexture](SSGIPost.md#colortexture)
- [posTexture](SSGIPost.md#postexture)
- [normalTexture](SSGIPost.md#normaltexture)
- [gBufferTexture](SSGIPost.md#gbuffertexture)
- [lastPosTexture](SSGIPost.md#lastpostexture)
- [downSampleCofe](SSGIPost.md#downsamplecofe)
- [debugChanal](SSGIPost.md#debugchanal)
- [updateBuffer](SSGIPost.md#updatebuffer)
- [Render](SSGIPost.md#render)

### Accessors

- [ins](SSGIPost.md#ins)
- [delay](SSGIPost.md#delay)
- [colorIns](SSGIPost.md#colorins)
- [frameCount](SSGIPost.md#framecount)
- [d1](SSGIPost.md#d1)

### Methods

- [createRTTexture](SSGIPost.md#createrttexture)
- [createViewQuad](SSGIPost.md#createviewquad)
- [getOutTexture](SSGIPost.md#getouttexture)
- [autoSetColorTexture](SSGIPost.md#autosetcolortexture)
- [destroy](SSGIPost.md#destroy)
- [onAttach](SSGIPost.md#onattach)
- [onCameraChange](SSGIPost.md#oncamerachange)
- [onDetach](SSGIPost.md#ondetach)
- [render](SSGIPost.md#render-1)
- [compute](SSGIPost.md#compute)
- [onResize](SSGIPost.md#onresize)

## Constructors

### constructor

• **new SSGIPost**(): [`SSGIPost`](SSGIPost.md)

#### Returns

[`SSGIPost`](SSGIPost.md)

#### Overrides

[PostBase](PostBase.md).[constructor](PostBase.md#constructor)

#### Defined in

gfx/renderJob/post/SSGIPost.ts:54

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

### outTexture

• **outTexture**: [`VirtualTexture`](VirtualTexture.md)

#### Defined in

gfx/renderJob/post/SSGIPost.ts:25

___

### newTexture

• **newTexture**: [`VirtualTexture`](VirtualTexture.md)

#### Defined in

gfx/renderJob/post/SSGIPost.ts:26

___

### oldTexture

• **oldTexture**: [`VirtualTexture`](VirtualTexture.md)

#### Defined in

gfx/renderJob/post/SSGIPost.ts:27

___

### combineTexture

• **combineTexture**: [`VirtualTexture`](VirtualTexture.md)

#### Defined in

gfx/renderJob/post/SSGIPost.ts:28

___

### rendererPassState

• **rendererPassState**: [`RendererPassState`](RendererPassState.md)

#### Defined in

gfx/renderJob/post/SSGIPost.ts:33

___

### ssgiCompute

• **ssgiCompute**: [`ComputeShader`](ComputeShader.md)

#### Defined in

gfx/renderJob/post/SSGIPost.ts:37

___

### delayCompute

• **delayCompute**: [`ComputeShader`](ComputeShader.md)

#### Defined in

gfx/renderJob/post/SSGIPost.ts:38

___

### combineCompute

• **combineCompute**: [`ComputeShader`](ComputeShader.md)

#### Defined in

gfx/renderJob/post/SSGIPost.ts:39

___

### rtFrame

• **rtFrame**: [`RTFrame`](RTFrame.md)

#### Defined in

gfx/renderJob/post/SSGIPost.ts:41

___

### textureScaleSmallCompute

• **textureScaleSmallCompute**: [`TextureScaleCompute`](TextureScaleCompute.md)

#### Defined in

gfx/renderJob/post/SSGIPost.ts:42

___

### textureScaleBigCompute

• **textureScaleBigCompute**: [`TextureScaleCompute`](TextureScaleCompute.md)

#### Defined in

gfx/renderJob/post/SSGIPost.ts:43

___

### view

• **view**: [`View3D`](View3D.md)

#### Defined in

gfx/renderJob/post/SSGIPost.ts:44

___

### colorTexture

• **colorTexture**: [`RenderTexture`](RenderTexture.md)

#### Defined in

gfx/renderJob/post/SSGIPost.ts:45

___

### posTexture

• **posTexture**: [`RenderTexture`](RenderTexture.md)

#### Defined in

gfx/renderJob/post/SSGIPost.ts:46

___

### normalTexture

• **normalTexture**: [`RenderTexture`](RenderTexture.md)

#### Defined in

gfx/renderJob/post/SSGIPost.ts:47

___

### gBufferTexture

• **gBufferTexture**: [`RenderTexture`](RenderTexture.md)

#### Defined in

gfx/renderJob/post/SSGIPost.ts:48

___

### lastPosTexture

• **lastPosTexture**: [`RenderTexture`](RenderTexture.md)

#### Defined in

gfx/renderJob/post/SSGIPost.ts:49

___

### downSampleCofe

• **downSampleCofe**: `number` = `1.0`

#### Defined in

gfx/renderJob/post/SSGIPost.ts:50

___

### debugChanal

• **debugChanal**: `string` = `"0"`

#### Defined in

gfx/renderJob/post/SSGIPost.ts:51

___

### updateBuffer

• **updateBuffer**: [`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Defined in

gfx/renderJob/post/SSGIPost.ts:53

___

### Render

• **Render**: `any`

#### Defined in

gfx/renderJob/post/SSGIPost.ts:87

## Accessors

### ins

• `get` **ins**(): `number`

#### Returns

`number`

#### Defined in

gfx/renderJob/post/SSGIPost.ts:95

• `set` **ins**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

gfx/renderJob/post/SSGIPost.ts:90

___

### delay

• `get` **delay**(): `number`

#### Returns

`number`

#### Defined in

gfx/renderJob/post/SSGIPost.ts:104

• `set` **delay**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

gfx/renderJob/post/SSGIPost.ts:99

___

### colorIns

• `get` **colorIns**(): `number`

#### Returns

`number`

#### Defined in

gfx/renderJob/post/SSGIPost.ts:113

• `set` **colorIns**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

gfx/renderJob/post/SSGIPost.ts:108

___

### frameCount

• `get` **frameCount**(): `number`

#### Returns

`number`

#### Defined in

gfx/renderJob/post/SSGIPost.ts:122

• `set` **frameCount**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

gfx/renderJob/post/SSGIPost.ts:117

___

### d1

• `get` **d1**(): `number`

#### Returns

`number`

#### Defined in

gfx/renderJob/post/SSGIPost.ts:131

• `set` **d1**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

gfx/renderJob/post/SSGIPost.ts:126

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

gfx/renderJob/post/SSGIPost.ts:69

___

### onCameraChange

▸ **onCameraChange**(`oldPos`, `newPos`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldPos` | [`Vector3`](Vector3.md) |
| `newPos` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

gfx/renderJob/post/SSGIPost.ts:79

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

gfx/renderJob/post/SSGIPost.ts:88

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

gfx/renderJob/post/SSGIPost.ts:267

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

gfx/renderJob/post/SSGIPost.ts:271

___

### onResize

▸ **onResize**(): `void`

#### Returns

`void`

#### Overrides

[PostBase](PostBase.md).[onResize](PostBase.md#onresize)

#### Defined in

gfx/renderJob/post/SSGIPost.ts:322
