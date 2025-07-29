[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / RendererPassState

# Class: RendererPassState

## Table of contents

### Constructors

- [constructor](RendererPassState.md#constructor)

### Properties

- [label](RendererPassState.md#label)
- [customSize](RendererPassState.md#customsize)
- [zPreTexture](RendererPassState.md#zpretexture)
- [depthTexture](RendererPassState.md#depthtexture)
- [renderTargetTextures](RendererPassState.md#rendertargettextures)
- [outColor](RendererPassState.md#outcolor)
- [renderTargets](RendererPassState.md#rendertargets)
- [rtTextureDescriptors](RendererPassState.md#rttexturedescriptors)
- [irradianceBuffer](RendererPassState.md#irradiancebuffer)
- [multisample](RendererPassState.md#multisample)
- [multiTexture](RendererPassState.md#multitexture)
- [depthViewIndex](RendererPassState.md#depthviewindex)
- [depthCleanValue](RendererPassState.md#depthcleanvalue)
- [isOutTarget](RendererPassState.md#isouttarget)
- [camera3D](RendererPassState.md#camera3d)
- [rtFrame](RendererPassState.md#rtframe)
- [renderPassDescriptor](RendererPassState.md#renderpassdescriptor)
- [renderBundleEncoderDescriptor](RendererPassState.md#renderbundleencoderdescriptor)
- [depthLoadOp](RendererPassState.md#depthloadop)

### Methods

- [getLastRenderTexture](RendererPassState.md#getlastrendertexture)

## Constructors

### constructor

• **new RendererPassState**(): [`RendererPassState`](RendererPassState.md)

#### Returns

[`RendererPassState`](RendererPassState.md)

## Properties

### label

• **label**: `string` = `""`

#### Defined in

gfx/renderJob/passRenderer/state/RendererPassState.ts:9

___

### customSize

• **customSize**: `boolean` = `false`

#### Defined in

gfx/renderJob/passRenderer/state/RendererPassState.ts:10

___

### zPreTexture

• **zPreTexture**: [`RenderTexture`](RenderTexture.md) = `null`

#### Defined in

gfx/renderJob/passRenderer/state/RendererPassState.ts:11

___

### depthTexture

• **depthTexture**: [`RenderTexture`](RenderTexture.md) = `null`

#### Defined in

gfx/renderJob/passRenderer/state/RendererPassState.ts:12

___

### renderTargetTextures

• **renderTargetTextures**: `GPUColorTargetState`[]

#### Defined in

gfx/renderJob/passRenderer/state/RendererPassState.ts:13

___

### outColor

• **outColor**: `number` = `-1`

#### Defined in

gfx/renderJob/passRenderer/state/RendererPassState.ts:14

___

### renderTargets

• **renderTargets**: [`Texture`](Texture.md)[]

#### Defined in

gfx/renderJob/passRenderer/state/RendererPassState.ts:15

___

### rtTextureDescriptors

• **rtTextureDescriptors**: [`RTDescriptor`](RTDescriptor.md)[]

#### Defined in

gfx/renderJob/passRenderer/state/RendererPassState.ts:16

___

### irradianceBuffer

• **irradianceBuffer**: [`Texture`](Texture.md)[]

#### Defined in

gfx/renderJob/passRenderer/state/RendererPassState.ts:17

___

### multisample

• **multisample**: `number` = `0`

#### Defined in

gfx/renderJob/passRenderer/state/RendererPassState.ts:18

___

### multiTexture

• **multiTexture**: `GPUTexture`

#### Defined in

gfx/renderJob/passRenderer/state/RendererPassState.ts:19

___

### depthViewIndex

• **depthViewIndex**: `number` = `0`

#### Defined in

gfx/renderJob/passRenderer/state/RendererPassState.ts:20

___

### depthCleanValue

• **depthCleanValue**: `number` = `0`

#### Defined in

gfx/renderJob/passRenderer/state/RendererPassState.ts:21

___

### isOutTarget

• **isOutTarget**: `boolean` = `true`

#### Defined in

gfx/renderJob/passRenderer/state/RendererPassState.ts:22

___

### camera3D

• **camera3D**: [`Camera3D`](Camera3D.md)

#### Defined in

gfx/renderJob/passRenderer/state/RendererPassState.ts:23

___

### rtFrame

• **rtFrame**: [`RTFrame`](RTFrame.md)

#### Defined in

gfx/renderJob/passRenderer/state/RendererPassState.ts:24

___

### renderPassDescriptor

• **renderPassDescriptor**: `GPURenderPassDescriptor`

#### Defined in

gfx/renderJob/passRenderer/state/RendererPassState.ts:25

___

### renderBundleEncoderDescriptor

• **renderBundleEncoderDescriptor**: `GPURenderBundleEncoderDescriptor`

#### Defined in

gfx/renderJob/passRenderer/state/RendererPassState.ts:26

___

### depthLoadOp

• **depthLoadOp**: `GPULoadOp`

#### Defined in

gfx/renderJob/passRenderer/state/RendererPassState.ts:27

## Methods

### getLastRenderTexture

▸ **getLastRenderTexture**(): [`Texture`](Texture.md)

#### Returns

[`Texture`](Texture.md)

#### Defined in

gfx/renderJob/passRenderer/state/RendererPassState.ts:29
