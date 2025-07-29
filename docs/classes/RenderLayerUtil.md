[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / RenderLayerUtil

# Class: RenderLayerUtil

## Table of contents

### Constructors

- [constructor](RenderLayerUtil.md#constructor)

### Methods

- [addMask](RenderLayerUtil.md#addmask)
- [removeMask](RenderLayerUtil.md#removemask)
- [hasMask](RenderLayerUtil.md#hasmask)

## Constructors

### constructor

• **new RenderLayerUtil**(): [`RenderLayerUtil`](RenderLayerUtil.md)

#### Returns

[`RenderLayerUtil`](RenderLayerUtil.md)

## Methods

### addMask

▸ **addMask**(`src`, `tag`): [`RenderLayer`](../enums/RenderLayer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | [`RenderLayer`](../enums/RenderLayer.md) |
| `tag` | [`RenderLayer`](../enums/RenderLayer.md) |

#### Returns

[`RenderLayer`](../enums/RenderLayer.md)

#### Defined in

gfx/renderJob/config/RenderLayer.ts:9

___

### removeMask

▸ **removeMask**(`src`, `tag`): [`RenderLayer`](../enums/RenderLayer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | [`RenderLayer`](../enums/RenderLayer.md) |
| `tag` | [`RenderLayer`](../enums/RenderLayer.md) |

#### Returns

[`RenderLayer`](../enums/RenderLayer.md)

#### Defined in

gfx/renderJob/config/RenderLayer.ts:14

___

### hasMask

▸ **hasMask**(`m1`, `m2`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `m1` | [`RenderLayer`](../enums/RenderLayer.md) |
| `m2` | [`RenderLayer`](../enums/RenderLayer.md) |

#### Returns

`boolean`

#### Defined in

gfx/renderJob/config/RenderLayer.ts:19
