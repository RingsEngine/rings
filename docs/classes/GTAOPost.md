[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / GTAOPost

# Class: GTAOPost

## Hierarchy

- [`PostBase`](PostBase.md)

  ↳ **`GTAOPost`**

## Table of contents

### Constructors

- [constructor](GTAOPost.md#constructor)

### Properties

- [gtaoTexture](GTAOPost.md#gtaotexture)
- [rendererPassState](GTAOPost.md#rendererpassstate)
- [gtaoCompute](GTAOPost.md#gtaocompute)
- [gtaoSetting](GTAOPost.md#gtaosetting)
- [aoBuffer](GTAOPost.md#aobuffer)
- [directionsBuffer](GTAOPost.md#directionsbuffer)
- [directionsArray](GTAOPost.md#directionsarray)
- [rtFrame](GTAOPost.md#rtframe)
- [Render](GTAOPost.md#render)
- [enable](GTAOPost.md#enable)
- [postRenderer](GTAOPost.md#postrenderer)
- [rtViewQuad](GTAOPost.md#rtviewquad)
- [virtualTexture](GTAOPost.md#virtualtexture)

### Accessors

- [maxDistance](GTAOPost.md#maxdistance)
- [maxPixel](GTAOPost.md#maxpixel)
- [darkFactor](GTAOPost.md#darkfactor)
- [rayMarchSegment](GTAOPost.md#raymarchsegment)
- [multiBounce](GTAOPost.md#multibounce)
- [blendColor](GTAOPost.md#blendcolor)
- [usePosFloat32](GTAOPost.md#useposfloat32)

### Methods

- [onAttach](GTAOPost.md#onattach)
- [onDetach](GTAOPost.md#ondetach)
- [render](GTAOPost.md#render-1)
- [onResize](GTAOPost.md#onresize)
- [createRTTexture](GTAOPost.md#createrttexture)
- [createViewQuad](GTAOPost.md#createviewquad)
- [getOutTexture](GTAOPost.md#getouttexture)
- [autoSetColorTexture](GTAOPost.md#autosetcolortexture)
- [compute](GTAOPost.md#compute)
- [destroy](GTAOPost.md#destroy)

## Constructors

### constructor

• **new GTAOPost**(): [`GTAOPost`](GTAOPost.md)

#### Returns

[`GTAOPost`](GTAOPost.md)

#### Overrides

[PostBase](PostBase.md).[constructor](PostBase.md#constructor)

#### Defined in

gfx/renderJob/post/GTAOPost.ts:53

## Properties

### gtaoTexture

• **gtaoTexture**: [`VirtualTexture`](VirtualTexture.md)

#### Defined in

gfx/renderJob/post/GTAOPost.ts:25

___

### rendererPassState

• **rendererPassState**: [`RendererPassState`](RendererPassState.md)

#### Defined in

gfx/renderJob/post/GTAOPost.ts:29

___

### gtaoCompute

• **gtaoCompute**: [`ComputeShader`](ComputeShader.md)

#### Defined in

gfx/renderJob/post/GTAOPost.ts:33

___

### gtaoSetting

• **gtaoSetting**: [`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Defined in

gfx/renderJob/post/GTAOPost.ts:37

___

### aoBuffer

• **aoBuffer**: [`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Defined in

gfx/renderJob/post/GTAOPost.ts:41

___

### directionsBuffer

• **directionsBuffer**: [`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Defined in

gfx/renderJob/post/GTAOPost.ts:46

___

### directionsArray

• **directionsArray**: `Float32Array`\<`ArrayBufferLike`\>

#### Defined in

gfx/renderJob/post/GTAOPost.ts:50

___

### rtFrame

• **rtFrame**: [`RTFrame`](RTFrame.md)

#### Defined in

gfx/renderJob/post/GTAOPost.ts:51

___

### Render

• **Render**: `any`

#### Defined in

gfx/renderJob/post/GTAOPost.ts:65

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

### maxDistance

• `get` **maxDistance**(): `number`

#### Returns

`number`

#### Defined in

gfx/renderJob/post/GTAOPost.ts:70

• `set` **maxDistance**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

gfx/renderJob/post/GTAOPost.ts:75

___

### maxPixel

• `get` **maxPixel**(): `number`

#### Returns

`number`

#### Defined in

gfx/renderJob/post/GTAOPost.ts:81

• `set` **maxPixel**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

gfx/renderJob/post/GTAOPost.ts:86

___

### darkFactor

• `get` **darkFactor**(): `number`

#### Returns

`number`

#### Defined in

gfx/renderJob/post/GTAOPost.ts:92

• `set` **darkFactor**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

gfx/renderJob/post/GTAOPost.ts:97

___

### rayMarchSegment

• `get` **rayMarchSegment**(): `number`

#### Returns

`number`

#### Defined in

gfx/renderJob/post/GTAOPost.ts:103

• `set` **rayMarchSegment**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

gfx/renderJob/post/GTAOPost.ts:108

___

### multiBounce

• `get` **multiBounce**(): `boolean`

#### Returns

`boolean`

#### Defined in

gfx/renderJob/post/GTAOPost.ts:114

• `set` **multiBounce**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

gfx/renderJob/post/GTAOPost.ts:119

___

### blendColor

• `get` **blendColor**(): `boolean`

#### Returns

`boolean`

#### Defined in

gfx/renderJob/post/GTAOPost.ts:124

• `set` **blendColor**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

gfx/renderJob/post/GTAOPost.ts:129

___

### usePosFloat32

• `get` **usePosFloat32**(): `boolean`

#### Returns

`boolean`

#### Defined in

gfx/renderJob/post/GTAOPost.ts:134

• `set` **usePosFloat32**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

gfx/renderJob/post/GTAOPost.ts:139

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

gfx/renderJob/post/GTAOPost.ts:60

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

gfx/renderJob/post/GTAOPost.ts:66

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

gfx/renderJob/post/GTAOPost.ts:203

___

### onResize

▸ **onResize**(): `void`

#### Returns

`void`

#### Overrides

[PostBase](PostBase.md).[onResize](PostBase.md#onresize)

#### Defined in

gfx/renderJob/post/GTAOPost.ts:245

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
