[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / RenderShaderCollect

# Class: RenderShaderCollect

## Table of contents

### Constructors

- [constructor](RenderShaderCollect.md#constructor)

### Properties

- [renderShaderUpdateList](RenderShaderCollect.md#rendershaderupdatelist)
- [renderNodeList](RenderShaderCollect.md#rendernodelist)

### Methods

- [collect\_add](RenderShaderCollect.md#collect_add)
- [collect\_remove](RenderShaderCollect.md#collect_remove)

## Constructors

### constructor

• **new RenderShaderCollect**(): [`RenderShaderCollect`](RenderShaderCollect.md)

#### Returns

[`RenderShaderCollect`](RenderShaderCollect.md)

## Properties

### renderShaderUpdateList

• **renderShaderUpdateList**: `Map`\<[`View3D`](View3D.md), [`RenderShaderList`](../modules.md#rendershaderlist)\>

#### Defined in

gfx/renderJob/collect/RenderShaderCollect.ts:7

___

### renderNodeList

• **renderNodeList**: `Map`\<[`View3D`](View3D.md), `Map`\<`string`, [`RenderNode`](RenderNode.md)\>\>

#### Defined in

gfx/renderJob/collect/RenderShaderCollect.ts:11

## Methods

### collect\_add

▸ **collect_add**(`node`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`RenderNode`](RenderNode.md) |

#### Returns

`void`

#### Defined in

gfx/renderJob/collect/RenderShaderCollect.ts:16

___

### collect\_remove

▸ **collect_remove**(`node`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`RenderNode`](RenderNode.md) |

#### Returns

`void`

#### Defined in

gfx/renderJob/collect/RenderShaderCollect.ts:48
