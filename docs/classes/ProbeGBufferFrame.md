[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / ProbeGBufferFrame

# Class: ProbeGBufferFrame

## Hierarchy

- [`RTFrame`](RTFrame.md)

  ↳ **`ProbeGBufferFrame`**

## Table of contents

### Constructors

- [constructor](ProbeGBufferFrame.md#constructor)

### Properties

- [label](ProbeGBufferFrame.md#label)
- [customSize](ProbeGBufferFrame.md#customsize)
- [renderTargets](ProbeGBufferFrame.md#rendertargets)
- [rtDescriptors](ProbeGBufferFrame.md#rtdescriptors)
- [zPreTexture](ProbeGBufferFrame.md#zpretexture)
- [depthTexture](ProbeGBufferFrame.md#depthtexture)
- [depthViewIndex](ProbeGBufferFrame.md#depthviewindex)
- [depthCleanValue](ProbeGBufferFrame.md#depthcleanvalue)
- [depthLoadOp](ProbeGBufferFrame.md#depthloadop)
- [isOutTarget](ProbeGBufferFrame.md#isouttarget)

### Methods

- [crateGBuffer](ProbeGBufferFrame.md#crategbuffer)
- [clone2Frame](ProbeGBufferFrame.md#clone2frame)
- [clone](ProbeGBufferFrame.md#clone)

## Constructors

### constructor

• **new ProbeGBufferFrame**(`rtWidth`, `rtHeight`, `autoResize?`): [`ProbeGBufferFrame`](ProbeGBufferFrame.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `rtWidth` | `number` | `undefined` |
| `rtHeight` | `number` | `undefined` |
| `autoResize` | `boolean` | `true` |

#### Returns

[`ProbeGBufferFrame`](ProbeGBufferFrame.md)

#### Overrides

[RTFrame](RTFrame.md).[constructor](RTFrame.md#constructor)

#### Defined in

gfx/renderJob/frame/ProbeGBufferFrame.ts:7

## Properties

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

### crateGBuffer

▸ **crateGBuffer**(`rtWidth`, `rtHeight`, `autoResize`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rtWidth` | `number` |
| `rtHeight` | `number` |
| `autoResize` | `boolean` |

#### Returns

`void`

#### Defined in

gfx/renderJob/frame/ProbeGBufferFrame.ts:12

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

___

### clone

▸ **clone**(): [`RTFrame`](RTFrame.md)

#### Returns

[`RTFrame`](RTFrame.md)

#### Inherited from

[RTFrame](RTFrame.md).[clone](RTFrame.md#clone)

#### Defined in

gfx/renderJob/frame/RTFrame.ts:45
