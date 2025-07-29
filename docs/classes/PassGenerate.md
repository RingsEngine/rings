[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / PassGenerate

# Class: PassGenerate

## Table of contents

### Constructors

- [constructor](PassGenerate.md#constructor)

### Methods

- [createGIPass](PassGenerate.md#creategipass)
- [castGBufferPass](PassGenerate.md#castgbufferpass)
- [createShadowPass](PassGenerate.md#createshadowpass)
- [createDepthPass](PassGenerate.md#createdepthpass)
- [createReflectionPass](PassGenerate.md#createreflectionpass)

## Constructors

### constructor

• **new PassGenerate**(): [`PassGenerate`](PassGenerate.md)

#### Returns

[`PassGenerate`](PassGenerate.md)

## Methods

### createGIPass

▸ **createGIPass**(`renderNode`, `shader`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderNode` | [`RenderNode`](RenderNode.md) |
| `shader` | [`Shader`](Shader.md) |

#### Returns

`void`

#### Defined in

gfx/generate/PassGenerate.ts:18

___

### castGBufferPass

▸ **castGBufferPass**(`renderNode`, `shader`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderNode` | [`RenderNode`](RenderNode.md) |
| `shader` | [`Shader`](Shader.md) |

#### Returns

`void`

#### Defined in

gfx/generate/PassGenerate.ts:35

___

### createShadowPass

▸ **createShadowPass**(`renderNode`, `shader`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderNode` | [`RenderNode`](RenderNode.md) |
| `shader` | [`Shader`](Shader.md) |

#### Returns

`void`

#### Defined in

gfx/generate/PassGenerate.ts:64

___

### createDepthPass

▸ **createDepthPass**(`renderNode`, `shader`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderNode` | [`RenderNode`](RenderNode.md) |
| `shader` | [`Shader`](Shader.md) |

#### Returns

`void`

#### Defined in

gfx/generate/PassGenerate.ts:146

___

### createReflectionPass

▸ **createReflectionPass**(`renderNode`, `shader`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderNode` | [`RenderNode`](RenderNode.md) |
| `shader` | [`Shader`](Shader.md) |

#### Returns

`void`

#### Defined in

gfx/generate/PassGenerate.ts:188
