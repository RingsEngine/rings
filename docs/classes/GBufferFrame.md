[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / GBufferFrame

# Class: GBufferFrame

## Hierarchy

- [`RTFrame`](RTFrame.md)

  ↳ **`GBufferFrame`**

## Table of contents

### Constructors

- [constructor](GBufferFrame.md#constructor)

### Properties

- [colorPass\_GBuffer](GBufferFrame.md#colorpass_gbuffer)
- [reflections\_GBuffer](GBufferFrame.md#reflections_gbuffer)
- [gui\_GBuffer](GBufferFrame.md#gui_gbuffer)
- [gBufferMap](GBufferFrame.md#gbuffermap)
- [label](GBufferFrame.md#label)
- [customSize](GBufferFrame.md#customsize)
- [renderTargets](GBufferFrame.md#rendertargets)
- [rtDescriptors](GBufferFrame.md#rtdescriptors)
- [zPreTexture](GBufferFrame.md#zpretexture)
- [depthTexture](GBufferFrame.md#depthtexture)
- [depthViewIndex](GBufferFrame.md#depthviewindex)
- [depthCleanValue](GBufferFrame.md#depthcleanvalue)
- [depthLoadOp](GBufferFrame.md#depthloadop)
- [isOutTarget](GBufferFrame.md#isouttarget)

### Methods

- [createGBuffer](GBufferFrame.md#creategbuffer)
- [getPositionMap](GBufferFrame.md#getpositionmap)
- [getNormalMap](GBufferFrame.md#getnormalmap)
- [getColorTexture](GBufferFrame.md#getcolortexture)
- [getCompressGBufferTexture](GBufferFrame.md#getcompressgbuffertexture)
- [getGBufferFrame](GBufferFrame.md#getgbufferframe)
- [getGUIBufferFrame](GBufferFrame.md#getguibufferframe)
- [clone](GBufferFrame.md#clone)
- [clone2Frame](GBufferFrame.md#clone2frame)

## Constructors

### constructor

• **new GBufferFrame**(): [`GBufferFrame`](GBufferFrame.md)

#### Returns

[`GBufferFrame`](GBufferFrame.md)

#### Overrides

[RTFrame](RTFrame.md).[constructor](RTFrame.md#constructor)

#### Defined in

gfx/renderJob/frame/GBufferFrame.ts:20

## Properties

### colorPass\_GBuffer

▪ `Static` **colorPass\_GBuffer**: `string` = `"ColorPassGBuffer"`

#### Defined in

gfx/renderJob/frame/GBufferFrame.ts:10

___

### reflections\_GBuffer

▪ `Static` **reflections\_GBuffer**: `string` = `"reflections_GBuffer"`

#### Defined in

gfx/renderJob/frame/GBufferFrame.ts:11

___

### gui\_GBuffer

▪ `Static` **gui\_GBuffer**: `string` = `"gui_GBuffer"`

#### Defined in

gfx/renderJob/frame/GBufferFrame.ts:12

___

### gBufferMap

▪ `Static` **gBufferMap**: `Map`\<`string`, [`GBufferFrame`](GBufferFrame.md)\>

#### Defined in

gfx/renderJob/frame/GBufferFrame.ts:13

___

### label

• **label**: `string`

#### Inherited from

[RTFrame](RTFrame.md).[label](RTFrame.md#label)

#### Defined in

gfx/renderJob/frame/RTFrame.ts:5

___

### customSize

• **customSize**: `boolean` = `false`

#### Inherited from

[RTFrame](RTFrame.md).[customSize](RTFrame.md#customsize)

#### Defined in

gfx/renderJob/frame/RTFrame.ts:6

___

### renderTargets

• **renderTargets**: [`RenderTexture`](RenderTexture.md)[]

#### Inherited from

[RTFrame](RTFrame.md).[renderTargets](RTFrame.md#rendertargets)

#### Defined in

gfx/renderJob/frame/RTFrame.ts:7

___

### rtDescriptors

• **rtDescriptors**: [`RTDescriptor`](RTDescriptor.md)[]

#### Inherited from

[RTFrame](RTFrame.md).[rtDescriptors](RTFrame.md#rtdescriptors)

#### Defined in

gfx/renderJob/frame/RTFrame.ts:8

___

### zPreTexture

• **zPreTexture**: [`RenderTexture`](RenderTexture.md)

#### Inherited from

[RTFrame](RTFrame.md).[zPreTexture](RTFrame.md#zpretexture)

#### Defined in

gfx/renderJob/frame/RTFrame.ts:9

___

### depthTexture

• **depthTexture**: [`RenderTexture`](RenderTexture.md)

#### Inherited from

[RTFrame](RTFrame.md).[depthTexture](RTFrame.md#depthtexture)

#### Defined in

gfx/renderJob/frame/RTFrame.ts:10

___

### depthViewIndex

• **depthViewIndex**: `number` = `0`

#### Inherited from

[RTFrame](RTFrame.md).[depthViewIndex](RTFrame.md#depthviewindex)

#### Defined in

gfx/renderJob/frame/RTFrame.ts:11

___

### depthCleanValue

• **depthCleanValue**: `number` = `1`

#### Inherited from

[RTFrame](RTFrame.md).[depthCleanValue](RTFrame.md#depthcleanvalue)

#### Defined in

gfx/renderJob/frame/RTFrame.ts:12

___

### depthLoadOp

• **depthLoadOp**: `GPULoadOp`

#### Inherited from

[RTFrame](RTFrame.md).[depthLoadOp](RTFrame.md#depthloadop)

#### Defined in

gfx/renderJob/frame/RTFrame.ts:13

___

### isOutTarget

• **isOutTarget**: `boolean` = `true`

#### Inherited from

[RTFrame](RTFrame.md).[isOutTarget](RTFrame.md#isouttarget)

#### Defined in

gfx/renderJob/frame/RTFrame.ts:14

## Methods

### createGBuffer

▸ **createGBuffer**(`key`, `rtWidth`, `rtHeight`, `autoResize?`, `outColor?`, `depthTexture?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `key` | `string` | `undefined` |
| `rtWidth` | `number` | `undefined` |
| `rtHeight` | `number` | `undefined` |
| `autoResize` | `boolean` | `true` |
| `outColor` | `boolean` | `true` |
| `depthTexture?` | [`RenderTexture`](RenderTexture.md) | `undefined` |

#### Returns

`void`

#### Defined in

gfx/renderJob/frame/GBufferFrame.ts:24

___

### getPositionMap

▸ **getPositionMap**(): [`RenderTexture`](RenderTexture.md)

#### Returns

[`RenderTexture`](RenderTexture.md)

#### Defined in

gfx/renderJob/frame/GBufferFrame.ts:84

___

### getNormalMap

▸ **getNormalMap**(): [`RenderTexture`](RenderTexture.md)

#### Returns

[`RenderTexture`](RenderTexture.md)

#### Defined in

gfx/renderJob/frame/GBufferFrame.ts:88

___

### getColorTexture

▸ **getColorTexture**(): [`RenderTexture`](RenderTexture.md)

#### Returns

[`RenderTexture`](RenderTexture.md)

#### Defined in

gfx/renderJob/frame/GBufferFrame.ts:92

___

### getCompressGBufferTexture

▸ **getCompressGBufferTexture**(): [`RenderTexture`](RenderTexture.md)

#### Returns

[`RenderTexture`](RenderTexture.md)

#### Defined in

gfx/renderJob/frame/GBufferFrame.ts:96

___

### getGBufferFrame

▸ **getGBufferFrame**(`key`, `fixedWidth?`, `fixedHeight?`, `outColor?`, `depthTexture?`): [`GBufferFrame`](GBufferFrame.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `key` | `string` | `undefined` |
| `fixedWidth` | `number` | `0` |
| `fixedHeight` | `number` | `0` |
| `outColor` | `boolean` | `true` |
| `depthTexture?` | [`RenderTexture`](RenderTexture.md) | `undefined` |

#### Returns

[`GBufferFrame`](GBufferFrame.md)

#### Defined in

gfx/renderJob/frame/GBufferFrame.ts:100

___

### getGUIBufferFrame

▸ **getGUIBufferFrame**(): [`GBufferFrame`](GBufferFrame.md)

#### Returns

[`GBufferFrame`](GBufferFrame.md)

#### Defined in

gfx/renderJob/frame/GBufferFrame.ts:126

___

### clone

▸ **clone**(): [`GBufferFrame`](GBufferFrame.md)

#### Returns

[`GBufferFrame`](GBufferFrame.md)

#### Overrides

[RTFrame](RTFrame.md).[clone](RTFrame.md#clone)

#### Defined in

gfx/renderJob/frame/GBufferFrame.ts:138

___

### clone2Frame

▸ **clone2Frame**(`rtFrame`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rtFrame` | [`RTFrame`](RTFrame.md) |

#### Returns

`void`

#### Inherited from

[RTFrame](RTFrame.md).[clone2Frame](RTFrame.md#clone2frame)

#### Defined in

gfx/renderJob/frame/RTFrame.ts:30
