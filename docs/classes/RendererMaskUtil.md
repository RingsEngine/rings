[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / RendererMaskUtil

# Class: RendererMaskUtil

## Table of contents

### Constructors

- [constructor](RendererMaskUtil.md#constructor)

### Methods

- [addMask](RendererMaskUtil.md#addmask)
- [removeMask](RendererMaskUtil.md#removemask)
- [hasMask](RendererMaskUtil.md#hasmask)

## Constructors

### constructor

• **new RendererMaskUtil**(): [`RendererMaskUtil`](RendererMaskUtil.md)

#### Returns

[`RendererMaskUtil`](RendererMaskUtil.md)

## Methods

### addMask

▸ **addMask**(`src`, `tag`): [`RendererMask`](../enums/RendererMask.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | [`RendererMask`](../enums/RendererMask.md) |
| `tag` | [`RendererMask`](../enums/RendererMask.md) |

#### Returns

[`RendererMask`](../enums/RendererMask.md)

#### Defined in

gfx/renderJob/passRenderer/state/RendererMask.ts:16

___

### removeMask

▸ **removeMask**(`src`, `tag`): [`RendererMask`](../enums/RendererMask.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | [`RendererMask`](../enums/RendererMask.md) |
| `tag` | [`RendererMask`](../enums/RendererMask.md) |

#### Returns

[`RendererMask`](../enums/RendererMask.md)

#### Defined in

gfx/renderJob/passRenderer/state/RendererMask.ts:21

___

### hasMask

▸ **hasMask**(`m1`, `m2`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `m1` | [`RendererMask`](../enums/RendererMask.md) |
| `m2` | [`RendererMask`](../enums/RendererMask.md) |

#### Returns

`boolean`

#### Defined in

gfx/renderJob/passRenderer/state/RendererMask.ts:26
