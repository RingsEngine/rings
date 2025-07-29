[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / OcclusionSystem

# Class: OcclusionSystem

## Table of contents

### Constructors

- [constructor](OcclusionSystem.md#constructor)

### Properties

- [frustumCullingList](OcclusionSystem.md#frustumcullinglist)
- [zVisibleList](OcclusionSystem.md#zvisiblelist)
- [enable](OcclusionSystem.md#enable)

### Methods

- [occlusionRenderNodeTest](OcclusionSystem.md#occlusionrendernodetest)
- [zDepthRenderNodeTest](OcclusionSystem.md#zdepthrendernodetest)
- [update](OcclusionSystem.md#update)
- [collect](OcclusionSystem.md#collect)
- [renderCommitTesting](OcclusionSystem.md#rendercommittesting)

## Constructors

### constructor

• **new OcclusionSystem**(): [`OcclusionSystem`](OcclusionSystem.md)

#### Returns

[`OcclusionSystem`](OcclusionSystem.md)

#### Defined in

gfx/renderJob/occlusion/OcclusionSystem.ts:13

## Properties

### frustumCullingList

• **frustumCullingList**: `Float32Array`\<`ArrayBufferLike`\>

#### Defined in

gfx/renderJob/occlusion/OcclusionSystem.ts:8

___

### zVisibleList

• **zVisibleList**: `Float32Array`\<`ArrayBufferLike`\>

#### Defined in

gfx/renderJob/occlusion/OcclusionSystem.ts:9

___

### enable

▪ `Static` **enable**: `boolean` = `true`

#### Defined in

gfx/renderJob/occlusion/OcclusionSystem.ts:11

## Methods

### occlusionRenderNodeTest

▸ **occlusionRenderNodeTest**(`index`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`number`

#### Defined in

gfx/renderJob/occlusion/OcclusionSystem.ts:17

___

### zDepthRenderNodeTest

▸ **zDepthRenderNodeTest**(`index`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`number`

#### Defined in

gfx/renderJob/occlusion/OcclusionSystem.ts:26

___

### update

▸ **update**(`camera`, `scene`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `camera` | [`Camera3D`](Camera3D.md) |
| `scene` | [`Scene3D`](Scene3D.md) |

#### Returns

`void`

#### Defined in

gfx/renderJob/occlusion/OcclusionSystem.ts:34

___

### collect

▸ **collect**(`nodes`, `camera`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodes` | [`CollectInfo`](CollectInfo.md) |
| `camera` | [`Camera3D`](Camera3D.md) |

#### Returns

`void`

#### Defined in

gfx/renderJob/occlusion/OcclusionSystem.ts:36

___

### renderCommitTesting

▸ **renderCommitTesting**(`camera`, `renderNode`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `camera` | [`Camera3D`](Camera3D.md) |
| `renderNode` | [`RenderNode`](RenderNode.md) |

#### Returns

`boolean`

#### Defined in

gfx/renderJob/occlusion/OcclusionSystem.ts:38
