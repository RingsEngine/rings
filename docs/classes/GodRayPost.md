[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / GodRayPost

# Class: GodRayPost

## Hierarchy

- [`PostBase`](PostBase.md)

  ↳ **`GodRayPost`**

## Table of contents

### Constructors

- [constructor](GodRayPost.md#constructor)

### Properties

- [godRayTexture](GodRayPost.md#godraytexture)
- [rendererPassState](GodRayPost.md#rendererpassstate)
- [godRayCompute](GodRayPost.md#godraycompute)
- [historyGodRayData](GodRayPost.md#historygodraydata)
- [godRaySetting](GodRayPost.md#godraysetting)
- [rtFrame](GodRayPost.md#rtframe)
- [Render](GodRayPost.md#render)
- [enable](GodRayPost.md#enable)
- [postRenderer](GodRayPost.md#postrenderer)
- [rtViewQuad](GodRayPost.md#rtviewquad)
- [virtualTexture](GodRayPost.md#virtualtexture)

### Accessors

- [blendColor](GodRayPost.md#blendcolor)
- [rayMarchCount](GodRayPost.md#raymarchcount)
- [scatteringExponent](GodRayPost.md#scatteringexponent)
- [intensity](GodRayPost.md#intensity)

### Methods

- [onAttach](GodRayPost.md#onattach)
- [onDetach](GodRayPost.md#ondetach)
- [onResize](GodRayPost.md#onresize)
- [render](GodRayPost.md#render-1)
- [createRTTexture](GodRayPost.md#createrttexture)
- [createViewQuad](GodRayPost.md#createviewquad)
- [getOutTexture](GodRayPost.md#getouttexture)
- [autoSetColorTexture](GodRayPost.md#autosetcolortexture)
- [compute](GodRayPost.md#compute)
- [destroy](GodRayPost.md#destroy)

## Constructors

### constructor

• **new GodRayPost**(): [`GodRayPost`](GodRayPost.md)

#### Returns

[`GodRayPost`](GodRayPost.md)

#### Overrides

[PostBase](PostBase.md).[constructor](PostBase.md#constructor)

#### Defined in

gfx/renderJob/post/GodRayPost.ts:44

## Properties

### godRayTexture

• **godRayTexture**: [`VirtualTexture`](VirtualTexture.md)

#### Defined in

gfx/renderJob/post/GodRayPost.ts:24

___

### rendererPassState

• **rendererPassState**: [`RendererPassState`](RendererPassState.md)

#### Defined in

gfx/renderJob/post/GodRayPost.ts:28

___

### godRayCompute

• **godRayCompute**: [`ComputeShader`](ComputeShader.md)

#### Defined in

gfx/renderJob/post/GodRayPost.ts:32

___

### historyGodRayData

• **historyGodRayData**: [`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Defined in

gfx/renderJob/post/GodRayPost.ts:36

___

### godRaySetting

• **godRaySetting**: [`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Defined in

gfx/renderJob/post/GodRayPost.ts:40

___

### rtFrame

• **rtFrame**: [`RTFrame`](RTFrame.md)

#### Defined in

gfx/renderJob/post/GodRayPost.ts:42

___

### Render

• **Render**: `any`

#### Defined in

gfx/renderJob/post/GodRayPost.ts:57

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

### blendColor

• `get` **blendColor**(): `boolean`

#### Returns

`boolean`

#### Defined in

gfx/renderJob/post/GodRayPost.ts:63

• `set` **blendColor**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

gfx/renderJob/post/GodRayPost.ts:66

___

### rayMarchCount

• `get` **rayMarchCount**(): `number`

#### Returns

`number`

#### Defined in

gfx/renderJob/post/GodRayPost.ts:69

• `set` **rayMarchCount**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

gfx/renderJob/post/GodRayPost.ts:72

___

### scatteringExponent

• `get` **scatteringExponent**(): `number`

#### Returns

`number`

#### Defined in

gfx/renderJob/post/GodRayPost.ts:76

• `set` **scatteringExponent**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

gfx/renderJob/post/GodRayPost.ts:79

___

### intensity

• `get` **intensity**(): `number`

#### Returns

`number`

#### Defined in

gfx/renderJob/post/GodRayPost.ts:83

• `set` **intensity**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

gfx/renderJob/post/GodRayPost.ts:86

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

gfx/renderJob/post/GodRayPost.ts:51

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

gfx/renderJob/post/GodRayPost.ts:58

___

### onResize

▸ **onResize**(): `void`

#### Returns

`void`

#### Overrides

[PostBase](PostBase.md).[onResize](PostBase.md#onresize)

#### Defined in

gfx/renderJob/post/GodRayPost.ts:147

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

gfx/renderJob/post/GodRayPost.ts:167

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
