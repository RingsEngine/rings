[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / GUIPassRenderer

# Class: GUIPassRenderer

## Hierarchy

- [`RendererBase`](RendererBase.md)

  ↳ **`GUIPassRenderer`**

## Table of contents

### Constructors

- [constructor](GUIPassRenderer.md#constructor)

### Properties

- [listeners](GUIPassRenderer.md#listeners)
- [data](GUIPassRenderer.md#data)
- [rendererPassState](GUIPassRenderer.md#rendererpassstate)
- [splitRendererPassState](GUIPassRenderer.md#splitrendererpassstate)
- [useRenderBundle](GUIPassRenderer.md#userenderbundle)
- [debugViewQuads](GUIPassRenderer.md#debugviewquads)
- [debugTextures](GUIPassRenderer.md#debugtextures)
- [renderContext](GUIPassRenderer.md#rendercontext)
- [\_rendererType](GUIPassRenderer.md#_renderertype)
- [\_rtFrame](GUIPassRenderer.md#_rtframe)

### Accessors

- [passType](GUIPassRenderer.md#passtype)

### Methods

- [dispatchEvent](GUIPassRenderer.md#dispatchevent)
- [destroy](GUIPassRenderer.md#destroy)
- [addEventListener](GUIPassRenderer.md#addeventlistener)
- [removeEventListener](GUIPassRenderer.md#removeeventlistener)
- [removeEventListenerAt](GUIPassRenderer.md#removeeventlistenerat)
- [removeAllEventListener](GUIPassRenderer.md#removealleventlistener)
- [containEventListener](GUIPassRenderer.md#containeventlistener)
- [hasEventListener](GUIPassRenderer.md#haseventlistener)
- [setRenderStates](GUIPassRenderer.md#setrenderstates)
- [getRenderContext](GUIPassRenderer.md#getrendercontext)
- [setIrradiance](GUIPassRenderer.md#setirradiance)
- [nodeUpload](GUIPassRenderer.md#nodeupload)
- [renderOp](GUIPassRenderer.md#renderop)
- [renderTr](GUIPassRenderer.md#rendertr)
- [renderBundleOp](GUIPassRenderer.md#renderbundleop)
- [renderBundleTr](GUIPassRenderer.md#renderbundletr)
- [recordRenderBundleNode](GUIPassRenderer.md#recordrenderbundlenode)
- [drawRenderNodes](GUIPassRenderer.md#drawrendernodes)
- [compute](GUIPassRenderer.md#compute)
- [render](GUIPassRenderer.md#render)
- [drawNodes](GUIPassRenderer.md#drawnodes)
- [occlusionRenderNodeTest](GUIPassRenderer.md#occlusionrendernodetest)

## Constructors

### constructor

• **new GUIPassRenderer**(): [`GUIPassRenderer`](GUIPassRenderer.md)

#### Returns

[`GUIPassRenderer`](GUIPassRenderer.md)

#### Overrides

[RendererBase](RendererBase.md).[constructor](RendererBase.md#constructor)

#### Defined in

gfx/renderJob/passRenderer/color/GUIPassRenderer.ts:16

## Properties

### listeners

• `Protected` **listeners**: `any` = `{}`

#### Inherited from

[RendererBase](RendererBase.md).[listeners](RendererBase.md#listeners)

#### Defined in

event/CEventDispatcher.ts:5

___

### data

• **data**: `any`

#### Inherited from

[RendererBase](RendererBase.md).[data](RendererBase.md#data)

#### Defined in

event/CEventDispatcher.ts:6

___

### rendererPassState

• **rendererPassState**: [`RendererPassState`](RendererPassState.md)

#### Inherited from

[RendererBase](RendererBase.md).[rendererPassState](RendererBase.md#rendererpassstate)

#### Defined in

gfx/renderJob/passRenderer/RendererBase.ts:21

___

### splitRendererPassState

• **splitRendererPassState**: [`RendererPassState`](RendererPassState.md)

#### Inherited from

[RendererBase](RendererBase.md).[splitRendererPassState](RendererBase.md#splitrendererpassstate)

#### Defined in

gfx/renderJob/passRenderer/RendererBase.ts:22

___

### useRenderBundle

• **useRenderBundle**: `boolean` = `false`

#### Inherited from

[RendererBase](RendererBase.md).[useRenderBundle](RendererBase.md#userenderbundle)

#### Defined in

gfx/renderJob/passRenderer/RendererBase.ts:23

___

### debugViewQuads

• **debugViewQuads**: [`ViewQuad`](ViewQuad.md)[]

#### Inherited from

[RendererBase](RendererBase.md).[debugViewQuads](RendererBase.md#debugviewquads)

#### Defined in

gfx/renderJob/passRenderer/RendererBase.ts:24

___

### debugTextures

• **debugTextures**: [`Texture`](Texture.md)[]

#### Inherited from

[RendererBase](RendererBase.md).[debugTextures](RendererBase.md#debugtextures)

#### Defined in

gfx/renderJob/passRenderer/RendererBase.ts:25

___

### renderContext

• `Protected` **renderContext**: [`RenderContext`](RenderContext.md)

#### Inherited from

[RendererBase](RendererBase.md).[renderContext](RendererBase.md#rendercontext)

#### Defined in

gfx/renderJob/passRenderer/RendererBase.ts:26

___

### \_rendererType

• `Protected` **\_rendererType**: [`PassType`](../enums/PassType.md)

#### Inherited from

[RendererBase](RendererBase.md).[_rendererType](RendererBase.md#_renderertype)

#### Defined in

gfx/renderJob/passRenderer/RendererBase.ts:27

___

### \_rtFrame

• `Protected` **\_rtFrame**: [`RTFrame`](RTFrame.md)

#### Inherited from

[RendererBase](RendererBase.md).[_rtFrame](RendererBase.md#_rtframe)

#### Defined in

gfx/renderJob/passRenderer/RendererBase.ts:28

## Accessors

### passType

• `get` **passType**(): [`PassType`](../enums/PassType.md)

#### Returns

[`PassType`](../enums/PassType.md)

#### Inherited from

RendererBase.passType

#### Defined in

gfx/renderJob/passRenderer/RendererBase.ts:30

• `set` **passType**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`PassType`](../enums/PassType.md) |

#### Returns

`void`

#### Inherited from

RendererBase.passType

#### Defined in

gfx/renderJob/passRenderer/RendererBase.ts:34

## Methods

### dispatchEvent

▸ **dispatchEvent**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`CEvent`](CEvent.md) |

#### Returns

`void`

#### Inherited from

[RendererBase](RendererBase.md).[dispatchEvent](RendererBase.md#dispatchevent)

#### Defined in

event/CEventDispatcher.ts:7

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[RendererBase](RendererBase.md).[destroy](RendererBase.md#destroy)

#### Defined in

event/CEventDispatcher.ts:28

___

### addEventListener

▸ **addEventListener**(`type`, `callback`, `thisObject`, `param?`, `priority?`): `number`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `type` | `string` \| `number` | `undefined` |
| `callback` | `Function` | `undefined` |
| `thisObject` | `any` | `undefined` |
| `param` | `any` | `null` |
| `priority` | `number` | `0` |

#### Returns

`number`

#### Inherited from

[RendererBase](RendererBase.md).[addEventListener](RendererBase.md#addeventlistener)

#### Defined in

event/CEventDispatcher.ts:40

___

### removeEventListener

▸ **removeEventListener**(`type`, `callback`, `thisObject`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `callback` | `Function` |
| `thisObject` | `any` |

#### Returns

`void`

#### Inherited from

[RendererBase](RendererBase.md).[removeEventListener](RendererBase.md#removeeventlistener)

#### Defined in

event/CEventDispatcher.ts:82

___

### removeEventListenerAt

▸ **removeEventListenerAt**(`id`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`boolean`

#### Inherited from

[RendererBase](RendererBase.md).[removeEventListenerAt](RendererBase.md#removeeventlistenerat)

#### Defined in

event/CEventDispatcher.ts:107

___

### removeAllEventListener

▸ **removeAllEventListener**(`eventType?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `eventType` | `string` \| `number` | `null` |

#### Returns

`void`

#### Inherited from

[RendererBase](RendererBase.md).[removeAllEventListener](RendererBase.md#removealleventlistener)

#### Defined in

event/CEventDispatcher.ts:122

___

### containEventListener

▸ **containEventListener**(`type`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

`boolean`

#### Inherited from

[RendererBase](RendererBase.md).[containEventListener](RendererBase.md#containeventlistener)

#### Defined in

event/CEventDispatcher.ts:150

___

### hasEventListener

▸ **hasEventListener**(`type`, `callback?`, `thisObject?`): `boolean`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `type` | `string` \| `number` | `undefined` |
| `callback` | `Function` | `null` |
| `thisObject` | `any` | `null` |

#### Returns

`boolean`

#### Inherited from

[RendererBase](RendererBase.md).[hasEventListener](RendererBase.md#haseventlistener)

#### Defined in

event/CEventDispatcher.ts:155

___

### setRenderStates

▸ **setRenderStates**(`rtFrame`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rtFrame` | [`RTFrame`](RTFrame.md) |

#### Returns

`void`

#### Inherited from

[RendererBase](RendererBase.md).[setRenderStates](RendererBase.md#setrenderstates)

#### Defined in

gfx/renderJob/passRenderer/RendererBase.ts:44

___

### getRenderContext

▸ **getRenderContext**(`rtFrame`): [`RenderContext`](RenderContext.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rtFrame` | [`RTFrame`](RTFrame.md) |

#### Returns

[`RenderContext`](RenderContext.md)

#### Inherited from

[RendererBase](RendererBase.md).[getRenderContext](RendererBase.md#getrendercontext)

#### Defined in

gfx/renderJob/passRenderer/RendererBase.ts:60

___

### setIrradiance

▸ **setIrradiance**(`probeIrradianceMap`, `probeDepthMap`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `probeIrradianceMap` | [`RenderTexture`](RenderTexture.md) |
| `probeDepthMap` | [`RenderTexture`](RenderTexture.md) |

#### Returns

`void`

#### Inherited from

[RendererBase](RendererBase.md).[setIrradiance](RendererBase.md#setirradiance)

#### Defined in

gfx/renderJob/passRenderer/RendererBase.ts:66

___

### nodeUpload

▸ **nodeUpload**(`collectInfo`, `scene`, `occlusionSystem?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `collectInfo` | [`CollectInfo`](CollectInfo.md) |
| `scene` | [`Scene3D`](Scene3D.md) |
| `occlusionSystem?` | [`OcclusionSystem`](OcclusionSystem.md) |

#### Returns

`void`

#### Inherited from

[RendererBase](RendererBase.md).[nodeUpload](RendererBase.md#nodeupload)

#### Defined in

gfx/renderJob/passRenderer/RendererBase.ts:169

___

### renderOp

▸ **renderOp**(`encoder`, `command`, `collectInfo`, `scene`, `occlusionSystem`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoder` | `GPURenderPassEncoder` |
| `command` | `GPUCommandEncoder` |
| `collectInfo` | [`CollectInfo`](CollectInfo.md) |
| `scene` | [`Scene3D`](Scene3D.md) |
| `occlusionSystem` | [`OcclusionSystem`](OcclusionSystem.md) |

#### Returns

`void`

#### Inherited from

[RendererBase](RendererBase.md).[renderOp](RendererBase.md#renderop)

#### Defined in

gfx/renderJob/passRenderer/RendererBase.ts:185

___

### renderTr

▸ **renderTr**(`encoder`, `command`, `collectInfo`, `scene`, `occlusionSystem`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoder` | `GPURenderPassEncoder` |
| `command` | `GPUCommandEncoder` |
| `collectInfo` | [`CollectInfo`](CollectInfo.md) |
| `scene` | [`Scene3D`](Scene3D.md) |
| `occlusionSystem` | [`OcclusionSystem`](OcclusionSystem.md) |

#### Returns

`void`

#### Inherited from

[RendererBase](RendererBase.md).[renderTr](RendererBase.md#rendertr)

#### Defined in

gfx/renderJob/passRenderer/RendererBase.ts:193

___

### renderBundleOp

▸ **renderBundleOp**(`view`, `collectInfo`, `occlusionSystem`, `clusterLightingBuffer?`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `collectInfo` | [`CollectInfo`](CollectInfo.md) |
| `occlusionSystem` | [`OcclusionSystem`](OcclusionSystem.md) |
| `clusterLightingBuffer?` | [`ClusterLightingBuffer`](ClusterLightingBuffer.md) |

#### Returns

`any`[]

#### Inherited from

[RendererBase](RendererBase.md).[renderBundleOp](RendererBase.md#renderbundleop)

#### Defined in

gfx/renderJob/passRenderer/RendererBase.ts:201

___

### renderBundleTr

▸ **renderBundleTr**(`view`, `collectInfo`, `occlusionSystem`, `clusterLightingBuffer?`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `collectInfo` | [`CollectInfo`](CollectInfo.md) |
| `occlusionSystem` | [`OcclusionSystem`](OcclusionSystem.md) |
| `clusterLightingBuffer?` | [`ClusterLightingBuffer`](ClusterLightingBuffer.md) |

#### Returns

`any`[]

#### Inherited from

[RendererBase](RendererBase.md).[renderBundleTr](RendererBase.md#renderbundletr)

#### Defined in

gfx/renderJob/passRenderer/RendererBase.ts:235

___

### recordRenderBundleNode

▸ **recordRenderBundleNode**(`view`, `encoder`, `nodes`, `clusterLightingBuffer?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `encoder` | `any` |
| `nodes` | [`RenderNode`](RenderNode.md)[] |
| `clusterLightingBuffer?` | [`ClusterLightingBuffer`](ClusterLightingBuffer.md) |

#### Returns

`void`

#### Inherited from

[RendererBase](RendererBase.md).[recordRenderBundleNode](RendererBase.md#recordrenderbundlenode)

#### Defined in

gfx/renderJob/passRenderer/RendererBase.ts:269

___

### drawRenderNodes

▸ **drawRenderNodes**(`view`, `encoder`, `command`, `nodes`, `occlusionSystem`, `clusterLightingBuffer?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `encoder` | `GPURenderPassEncoder` |
| `command` | `GPUCommandEncoder` |
| `nodes` | [`RenderNode`](RenderNode.md)[] |
| `occlusionSystem` | [`OcclusionSystem`](OcclusionSystem.md) |
| `clusterLightingBuffer?` | [`ClusterLightingBuffer`](ClusterLightingBuffer.md) |

#### Returns

`void`

#### Inherited from

[RendererBase](RendererBase.md).[drawRenderNodes](RendererBase.md#drawrendernodes)

#### Defined in

gfx/renderJob/passRenderer/RendererBase.ts:291

___

### compute

▸ **compute**(`view`, `occlusionSystem`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `occlusionSystem` | [`OcclusionSystem`](OcclusionSystem.md) |

#### Returns

`void`

#### Overrides

[RendererBase](RendererBase.md).[compute](RendererBase.md#compute)

#### Defined in

gfx/renderJob/passRenderer/color/GUIPassRenderer.ts:21

___

### render

▸ **render**(`view`, `occlusionSystem`, `clusterLightingBuffer?`, `maskTr?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `view` | [`View3D`](View3D.md) | `undefined` |
| `occlusionSystem` | [`OcclusionSystem`](OcclusionSystem.md) | `undefined` |
| `clusterLightingBuffer?` | [`ClusterLightingBuffer`](ClusterLightingBuffer.md) | `undefined` |
| `maskTr` | `boolean` | `false` |

#### Returns

`void`

#### Overrides

[RendererBase](RendererBase.md).[render](RendererBase.md#render)

#### Defined in

gfx/renderJob/passRenderer/color/GUIPassRenderer.ts:29

___

### drawNodes

▸ **drawNodes**(`view`, `renderContext`, `nodes`, `occlusionSystem`, `clusterLightingBuffer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `renderContext` | [`RenderContext`](RenderContext.md) |
| `nodes` | [`RenderNode`](RenderNode.md)[] |
| `occlusionSystem` | [`OcclusionSystem`](OcclusionSystem.md) |
| `clusterLightingBuffer` | [`ClusterLightingBuffer`](ClusterLightingBuffer.md) |

#### Returns

`void`

#### Defined in

gfx/renderJob/passRenderer/color/GUIPassRenderer.ts:71

___

### occlusionRenderNodeTest

▸ **occlusionRenderNodeTest**(`i`, `id`, `occlusionSystem`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `i` | `number` |
| `id` | `number` |
| `occlusionSystem` | [`OcclusionSystem`](OcclusionSystem.md) |

#### Returns

`boolean`

#### Overrides

[RendererBase](RendererBase.md).[occlusionRenderNodeTest](RendererBase.md#occlusionrendernodetest)

#### Defined in

gfx/renderJob/passRenderer/color/GUIPassRenderer.ts:123
