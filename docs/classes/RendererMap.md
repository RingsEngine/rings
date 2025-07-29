[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / RendererMap

# Class: RendererMap

## Table of contents

### Constructors

- [constructor](RendererMap.md#constructor)

### Methods

- [addRenderer](RendererMap.md#addrenderer)
- [getRenderer](RendererMap.md#getrenderer)
- [getAllRenderer](RendererMap.md#getallrenderer)
- [getAllPassRenderer](RendererMap.md#getallpassrenderer)

## Constructors

### constructor

• **new RendererMap**(): [`RendererMap`](RendererMap.md)

#### Returns

[`RendererMap`](RendererMap.md)

#### Defined in

gfx/renderJob/jobs/RenderMap.ts:8

## Methods

### addRenderer

▸ **addRenderer**(`renderer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderer` | [`RendererBase`](RendererBase.md) |

#### Returns

`void`

#### Defined in

gfx/renderJob/jobs/RenderMap.ts:13

___

### getRenderer

▸ **getRenderer**(`passType`): [`RendererBase`](RendererBase.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `passType` | [`PassType`](../enums/PassType.md) |

#### Returns

[`RendererBase`](RendererBase.md)

#### Defined in

gfx/renderJob/jobs/RenderMap.ts:24

___

### getAllRenderer

▸ **getAllRenderer**(): `Map`\<[`PassType`](../enums/PassType.md), [`RendererBase`](RendererBase.md)\>

#### Returns

`Map`\<[`PassType`](../enums/PassType.md), [`RendererBase`](RendererBase.md)\>

#### Defined in

gfx/renderJob/jobs/RenderMap.ts:32

___

### getAllPassRenderer

▸ **getAllPassRenderer**(): [`RendererBase`](RendererBase.md)[]

#### Returns

[`RendererBase`](RendererBase.md)[]

#### Defined in

gfx/renderJob/jobs/RenderMap.ts:36
