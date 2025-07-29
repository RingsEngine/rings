[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / RTResourceMap

# Class: RTResourceMap

## Table of contents

### Constructors

- [constructor](RTResourceMap.md#constructor)

### Properties

- [rtTextureMap](RTResourceMap.md#rttexturemap)
- [rtViewQuad](RTResourceMap.md#rtviewquad)

### Methods

- [init](RTResourceMap.md#init)
- [createRTTexture](RTResourceMap.md#createrttexture)
- [createRTTextureArray](RTResourceMap.md#createrttexturearray)
- [createViewQuad](RTResourceMap.md#createviewquad)
- [getTexture](RTResourceMap.md#gettexture)
- [CreateSplitTexture](RTResourceMap.md#createsplittexture)
- [WriteSplitColorTexture](RTResourceMap.md#writesplitcolortexture)

## Constructors

### constructor

• **new RTResourceMap**(): [`RTResourceMap`](RTResourceMap.md)

#### Returns

[`RTResourceMap`](RTResourceMap.md)

## Properties

### rtTextureMap

▪ `Static` **rtTextureMap**: `Map`\<`string`, [`RenderTexture`](RenderTexture.md)\>

#### Defined in

gfx/renderJob/frame/RTResourceMap.ts:9

___

### rtViewQuad

▪ `Static` **rtViewQuad**: `Map`\<`string`, [`ViewQuad`](ViewQuad.md)\>

#### Defined in

gfx/renderJob/frame/RTResourceMap.ts:10

## Methods

### init

▸ **init**(): `void`

#### Returns

`void`

#### Defined in

gfx/renderJob/frame/RTResourceMap.ts:12

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

#### Defined in

gfx/renderJob/frame/RTResourceMap.ts:17

___

### createRTTextureArray

▸ **createRTTextureArray**(`name`, `rtWidth`, `rtHeight`, `format`, `length?`, `useMipmap?`, `sampleCount?`): [`RenderTexture`](RenderTexture.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `rtWidth` | `number` | `undefined` |
| `rtHeight` | `number` | `undefined` |
| `format` | `GPUTextureFormat` | `undefined` |
| `length` | `number` | `1` |
| `useMipmap` | `boolean` | `false` |
| `sampleCount` | `number` | `0` |

#### Returns

[`RenderTexture`](RenderTexture.md)

#### Defined in

gfx/renderJob/frame/RTResourceMap.ts:56

___

### createViewQuad

▸ **createViewQuad**(`name`, `shaderVS`, `shaderFS`, `outRtTexture`, `multisample?`): [`ViewQuad`](ViewQuad.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `shaderVS` | `string` | `undefined` |
| `shaderFS` | `string` | `undefined` |
| `outRtTexture` | [`RenderTexture`](RenderTexture.md) | `undefined` |
| `multisample` | `number` | `0` |

#### Returns

[`ViewQuad`](ViewQuad.md)

#### Defined in

gfx/renderJob/frame/RTResourceMap.ts:82

___

### getTexture

▸ **getTexture**(`name`): [`RenderTexture`](RenderTexture.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`RenderTexture`](RenderTexture.md)

#### Defined in

gfx/renderJob/frame/RTResourceMap.ts:95

___

### CreateSplitTexture

▸ **CreateSplitTexture**(`id`): [`RenderTexture`](RenderTexture.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

[`RenderTexture`](RenderTexture.md)

#### Defined in

gfx/renderJob/frame/RTResourceMap.ts:99

___

### WriteSplitColorTexture

▸ **WriteSplitColorTexture**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`void`

#### Defined in

gfx/renderJob/frame/RTResourceMap.ts:114
