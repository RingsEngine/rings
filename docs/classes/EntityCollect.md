[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / EntityCollect

# Class: EntityCollect

## Table of contents

### Constructors

- [constructor](EntityCollect.md#constructor)

### Properties

- [state](EntityCollect.md#state)
- [sky](EntityCollect.md#sky)

### Accessors

- [instance](EntityCollect.md#instance)

### Methods

- [addRenderNode](EntityCollect.md#addrendernode)
- [removeRenderNode](EntityCollect.md#removerendernode)
- [addLight](EntityCollect.md#addlight)
- [removeLight](EntityCollect.md#removelight)
- [getLights](EntityCollect.md#getlights)
- [addGIProbe](EntityCollect.md#addgiprobe)
- [removeGIProbe](EntityCollect.md#removegiprobe)
- [getProbes](EntityCollect.md#getprobes)
- [getReflections](EntityCollect.md#getreflections)
- [autoSortRenderNodes](EntityCollect.md#autosortrendernodes)
- [getRenderNodes](EntityCollect.md#getrendernodes)
- [getOpRenderGroup](EntityCollect.md#getoprendergroup)
- [getTrRenderGroup](EntityCollect.md#gettrrendergroup)
- [getGraphicList](EntityCollect.md#getgraphiclist)
- [getRenderShaderCollect](EntityCollect.md#getrendershadercollect)

## Constructors

### constructor

• **new EntityCollect**(): [`EntityCollect`](EntityCollect.md)

#### Returns

[`EntityCollect`](EntityCollect.md)

#### Defined in

gfx/renderJob/collect/EntityCollect.ts:50

## Properties

### state

• **state**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `giLightingChange` | `boolean` |

#### Defined in

gfx/renderJob/collect/EntityCollect.ts:32

___

### sky

• **sky**: [`RenderNode`](RenderNode.md)

#### Defined in

gfx/renderJob/collect/EntityCollect.ts:38

## Accessors

### instance

• `get` **instance**(): [`EntityCollect`](EntityCollect.md)

#### Returns

[`EntityCollect`](EntityCollect.md)

#### Defined in

gfx/renderJob/collect/EntityCollect.ts:43

## Methods

### addRenderNode

▸ **addRenderNode**(`root`, `renderNode`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `root` | [`Scene3D`](Scene3D.md) |
| `renderNode` | [`RenderNode`](RenderNode.md) |

#### Returns

`void`

#### Defined in

gfx/renderJob/collect/EntityCollect.ts:83

___

### removeRenderNode

▸ **removeRenderNode**(`root`, `renderNode`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `root` | [`Scene3D`](Scene3D.md) |
| `renderNode` | [`RenderNode`](RenderNode.md) |

#### Returns

`void`

#### Defined in

gfx/renderJob/collect/EntityCollect.ts:151

___

### addLight

▸ **addLight**(`root`, `light`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `root` | [`Scene3D`](Scene3D.md) |
| `light` | [`ILight`](../interfaces/ILight.md) |

#### Returns

`void`

#### Defined in

gfx/renderJob/collect/EntityCollect.ts:179

___

### removeLight

▸ **removeLight**(`root`, `light`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `root` | [`Scene3D`](Scene3D.md) |
| `light` | [`ILight`](../interfaces/ILight.md) |

#### Returns

`void`

#### Defined in

gfx/renderJob/collect/EntityCollect.ts:198

___

### getLights

▸ **getLights**(`root`): [`ILight`](../interfaces/ILight.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `root` | [`Scene3D`](Scene3D.md) |

#### Returns

[`ILight`](../interfaces/ILight.md)[]

#### Defined in

gfx/renderJob/collect/EntityCollect.ts:208

___

### addGIProbe

▸ **addGIProbe**(`root`, `probe`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `root` | [`Scene3D`](Scene3D.md) |
| `probe` | [`Probe`](Probe.md) |

#### Returns

`void`

#### Defined in

gfx/renderJob/collect/EntityCollect.ts:213

___

### removeGIProbe

▸ **removeGIProbe**(`root`, `probe`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `root` | [`Scene3D`](Scene3D.md) |
| `probe` | [`Probe`](Probe.md) |

#### Returns

`void`

#### Defined in

gfx/renderJob/collect/EntityCollect.ts:221

___

### getProbes

▸ **getProbes**(`root`): [`Probe`](Probe.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `root` | [`Scene3D`](Scene3D.md) |

#### Returns

[`Probe`](Probe.md)[]

#### Defined in

gfx/renderJob/collect/EntityCollect.ts:231

___

### getReflections

▸ **getReflections**(`root`): [`Reflection`](Reflection.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `root` | [`Scene3D`](Scene3D.md) |

#### Returns

[`Reflection`](Reflection.md)[]

#### Defined in

gfx/renderJob/collect/EntityCollect.ts:236

___

### autoSortRenderNodes

▸ **autoSortRenderNodes**(`scene`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scene` | [`Scene3D`](Scene3D.md) |

#### Returns

`this`

#### Defined in

gfx/renderJob/collect/EntityCollect.ts:241

___

### getRenderNodes

▸ **getRenderNodes**(`scene`, `camera`): [`CollectInfo`](CollectInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scene` | [`Scene3D`](Scene3D.md) |
| `camera` | [`Camera3D`](Camera3D.md) |

#### Returns

[`CollectInfo`](CollectInfo.md)

#### Defined in

gfx/renderJob/collect/EntityCollect.ts:271

___

### getOpRenderGroup

▸ **getOpRenderGroup**(`scene`): [`EntityBatchCollect`](EntityBatchCollect.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scene` | [`Scene3D`](Scene3D.md) |

#### Returns

[`EntityBatchCollect`](EntityBatchCollect.md)

#### Defined in

gfx/renderJob/collect/EntityCollect.ts:292

___

### getTrRenderGroup

▸ **getTrRenderGroup**(`scene`): [`EntityBatchCollect`](EntityBatchCollect.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scene` | [`Scene3D`](Scene3D.md) |

#### Returns

[`EntityBatchCollect`](EntityBatchCollect.md)

#### Defined in

gfx/renderJob/collect/EntityCollect.ts:296

___

### getGraphicList

▸ **getGraphicList**(): [`RenderNode`](RenderNode.md)[]

#### Returns

[`RenderNode`](RenderNode.md)[]

#### Defined in

gfx/renderJob/collect/EntityCollect.ts:300

___

### getRenderShaderCollect

▸ **getRenderShaderCollect**(`view`): [`RenderShaderList`](../modules.md#rendershaderlist)

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |

#### Returns

[`RenderShaderList`](../modules.md#rendershaderlist)

#### Defined in

gfx/renderJob/collect/EntityCollect.ts:304
