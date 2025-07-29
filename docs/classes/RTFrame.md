[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / RTFrame

# Class: RTFrame

## Hierarchy

- **`RTFrame`**

  ↳ [`GBufferFrame`](GBufferFrame.md)

  ↳ [`ProbeGBufferFrame`](ProbeGBufferFrame.md)

## Table of contents

### Constructors

- [constructor](RTFrame.md#constructor)

### Properties

- [label](RTFrame.md#label)
- [customSize](RTFrame.md#customsize)
- [renderTargets](RTFrame.md#rendertargets)
- [rtDescriptors](RTFrame.md#rtdescriptors)
- [zPreTexture](RTFrame.md#zpretexture)
- [depthTexture](RTFrame.md#depthtexture)
- [depthViewIndex](RTFrame.md#depthviewindex)
- [depthCleanValue](RTFrame.md#depthcleanvalue)
- [depthLoadOp](RTFrame.md#depthloadop)
- [isOutTarget](RTFrame.md#isouttarget)

### Methods

- [clone2Frame](RTFrame.md#clone2frame)
- [clone](RTFrame.md#clone)

## Constructors

### constructor

• **new RTFrame**(`attachments`, `rtDescriptors`, `depthTexture?`, `zPreTexture?`, `isOutTarget?`): [`RTFrame`](RTFrame.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `attachments` | [`RenderTexture`](RenderTexture.md)[] | `undefined` |
| `rtDescriptors` | [`RTDescriptor`](RTDescriptor.md)[] | `undefined` |
| `depthTexture?` | [`RenderTexture`](RenderTexture.md) | `undefined` |
| `zPreTexture?` | [`RenderTexture`](RenderTexture.md) | `undefined` |
| `isOutTarget` | `boolean` | `true` |

#### Returns

[`RTFrame`](RTFrame.md)

#### Defined in

gfx/renderJob/frame/RTFrame.ts:16

## Properties

### label

• **label**: `string`

#### Defined in

gfx/renderJob/frame/RTFrame.ts:5

___

### customSize

• **customSize**: `boolean` = `false`

#### Defined in

gfx/renderJob/frame/RTFrame.ts:6

___

### renderTargets

• **renderTargets**: [`RenderTexture`](RenderTexture.md)[]

#### Defined in

gfx/renderJob/frame/RTFrame.ts:7

___

### rtDescriptors

• **rtDescriptors**: [`RTDescriptor`](RTDescriptor.md)[]

#### Defined in

gfx/renderJob/frame/RTFrame.ts:8

___

### zPreTexture

• **zPreTexture**: [`RenderTexture`](RenderTexture.md)

#### Defined in

gfx/renderJob/frame/RTFrame.ts:9

___

### depthTexture

• **depthTexture**: [`RenderTexture`](RenderTexture.md)

#### Defined in

gfx/renderJob/frame/RTFrame.ts:10

___

### depthViewIndex

• **depthViewIndex**: `number` = `0`

#### Defined in

gfx/renderJob/frame/RTFrame.ts:11

___

### depthCleanValue

• **depthCleanValue**: `number` = `1`

#### Defined in

gfx/renderJob/frame/RTFrame.ts:12

___

### depthLoadOp

• **depthLoadOp**: `GPULoadOp`

#### Defined in

gfx/renderJob/frame/RTFrame.ts:13

___

### isOutTarget

• **isOutTarget**: `boolean` = `true`

#### Defined in

gfx/renderJob/frame/RTFrame.ts:14

## Methods

### clone2Frame

▸ **clone2Frame**(`rtFrame`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rtFrame` | [`RTFrame`](RTFrame.md) |

#### Returns

`void`

#### Defined in

gfx/renderJob/frame/RTFrame.ts:30

___

### clone

▸ **clone**(): [`RTFrame`](RTFrame.md)

#### Returns

[`RTFrame`](RTFrame.md)

#### Defined in

gfx/renderJob/frame/RTFrame.ts:45
