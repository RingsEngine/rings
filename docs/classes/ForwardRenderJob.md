[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / ForwardRenderJob

# Class: ForwardRenderJob

## Hierarchy

- [`RendererJob`](RendererJob.md)

  ↳ **`ForwardRenderJob`**

## Table of contents

### Constructors

- [constructor](ForwardRenderJob.md#constructor)

### Properties

- [rendererMap](ForwardRenderJob.md#renderermap)
- [shadowMapPassRenderer](ForwardRenderJob.md#shadowmappassrenderer)
- [pointLightShadowRenderer](ForwardRenderJob.md#pointlightshadowrenderer)
- [ddgiProbeRenderer](ForwardRenderJob.md#ddgiproberenderer)
- [postRenderer](ForwardRenderJob.md#postrenderer)
- [clusterLightingRender](ForwardRenderJob.md#clusterlightingrender)
- [reflectionRenderer](ForwardRenderJob.md#reflectionrenderer)
- [occlusionSystem](ForwardRenderJob.md#occlusionsystem)
- [depthPassRenderer](ForwardRenderJob.md#depthpassrenderer)
- [pauseRender](ForwardRenderJob.md#pauserender)
- [pickFire](ForwardRenderJob.md#pickfire)
- [renderState](ForwardRenderJob.md#renderstate)
- [\_view](ForwardRenderJob.md#_view)

### Accessors

- [colorPassRenderer](ForwardRenderJob.md#colorpassrenderer)
- [view](ForwardRenderJob.md#view)

### Methods

- [start](ForwardRenderJob.md#start)
- [debug](ForwardRenderJob.md#debug)
- [addRenderer](ForwardRenderJob.md#addrenderer)
- [stop](ForwardRenderJob.md#stop)
- [pause](ForwardRenderJob.md#pause)
- [resume](ForwardRenderJob.md#resume)
- [addPost](ForwardRenderJob.md#addpost)
- [removePost](ForwardRenderJob.md#removepost)
- [renderFrame](ForwardRenderJob.md#renderframe)

## Constructors

### constructor

• **new ForwardRenderJob**(`view`): [`ForwardRenderJob`](ForwardRenderJob.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |

#### Returns

[`ForwardRenderJob`](ForwardRenderJob.md)

#### Overrides

[RendererJob](RendererJob.md).[constructor](RendererJob.md#constructor)

#### Defined in

gfx/renderJob/jobs/ForwardRenderJob.ts:11

## Properties

### rendererMap

• **rendererMap**: [`RendererMap`](RendererMap.md)

#### Inherited from

[RendererJob](RendererJob.md).[rendererMap](RendererJob.md#renderermap)

#### Defined in

gfx/renderJob/jobs/RendererJob.ts:25

___

### shadowMapPassRenderer

• **shadowMapPassRenderer**: [`ShadowMapPassRenderer`](ShadowMapPassRenderer.md)

#### Inherited from

[RendererJob](RendererJob.md).[shadowMapPassRenderer](RendererJob.md#shadowmappassrenderer)

#### Defined in

gfx/renderJob/jobs/RendererJob.ts:26

___

### pointLightShadowRenderer

• **pointLightShadowRenderer**: [`PointLightShadowRenderer`](PointLightShadowRenderer.md)

#### Inherited from

[RendererJob](RendererJob.md).[pointLightShadowRenderer](RendererJob.md#pointlightshadowrenderer)

#### Defined in

gfx/renderJob/jobs/RendererJob.ts:27

___

### ddgiProbeRenderer

• **ddgiProbeRenderer**: [`DDGIProbeRenderer`](DDGIProbeRenderer.md)

#### Inherited from

[RendererJob](RendererJob.md).[ddgiProbeRenderer](RendererJob.md#ddgiproberenderer)

#### Defined in

gfx/renderJob/jobs/RendererJob.ts:28

___

### postRenderer

• **postRenderer**: [`PostRenderer`](PostRenderer.md)

#### Inherited from

[RendererJob](RendererJob.md).[postRenderer](RendererJob.md#postrenderer)

#### Defined in

gfx/renderJob/jobs/RendererJob.ts:29

___

### clusterLightingRender

• **clusterLightingRender**: [`ClusterLightingRender`](ClusterLightingRender.md)

#### Inherited from

[RendererJob](RendererJob.md).[clusterLightingRender](RendererJob.md#clusterlightingrender)

#### Defined in

gfx/renderJob/jobs/RendererJob.ts:30

___

### reflectionRenderer

• **reflectionRenderer**: [`ReflectionRenderer`](ReflectionRenderer.md)

#### Inherited from

[RendererJob](RendererJob.md).[reflectionRenderer](RendererJob.md#reflectionrenderer)

#### Defined in

gfx/renderJob/jobs/RendererJob.ts:31

___

### occlusionSystem

• **occlusionSystem**: [`OcclusionSystem`](OcclusionSystem.md)

#### Inherited from

[RendererJob](RendererJob.md).[occlusionSystem](RendererJob.md#occlusionsystem)

#### Defined in

gfx/renderJob/jobs/RendererJob.ts:32

___

### depthPassRenderer

• **depthPassRenderer**: [`PreDepthPassRenderer`](PreDepthPassRenderer.md)

#### Inherited from

[RendererJob](RendererJob.md).[depthPassRenderer](RendererJob.md#depthpassrenderer)

#### Defined in

gfx/renderJob/jobs/RendererJob.ts:33

___

### pauseRender

• **pauseRender**: `boolean` = `false`

#### Inherited from

[RendererJob](RendererJob.md).[pauseRender](RendererJob.md#pauserender)

#### Defined in

gfx/renderJob/jobs/RendererJob.ts:38

___

### pickFire

• **pickFire**: [`PickFire`](PickFire.md)

#### Inherited from

[RendererJob](RendererJob.md).[pickFire](RendererJob.md#pickfire)

#### Defined in

gfx/renderJob/jobs/RendererJob.ts:39

___

### renderState

• **renderState**: `boolean` = `false`

#### Inherited from

[RendererJob](RendererJob.md).[renderState](RendererJob.md#renderstate)

#### Defined in

gfx/renderJob/jobs/RendererJob.ts:40

___

### \_view

• `Protected` **\_view**: [`View3D`](View3D.md)

#### Inherited from

[RendererJob](RendererJob.md).[_view](RendererJob.md#_view)

#### Defined in

gfx/renderJob/jobs/RendererJob.ts:41

## Accessors

### colorPassRenderer

• `get` **colorPassRenderer**(): [`ColorPassRenderer`](ColorPassRenderer.md)

#### Returns

[`ColorPassRenderer`](ColorPassRenderer.md)

#### Inherited from

RendererJob.colorPassRenderer

#### Defined in

gfx/renderJob/jobs/RendererJob.ts:34

___

### view

• `get` **view**(): [`View3D`](View3D.md)

#### Returns

[`View3D`](View3D.md)

#### Inherited from

RendererJob.view

#### Defined in

gfx/renderJob/jobs/RendererJob.ts:65

• `set` **view**(`view`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |

#### Returns

`void`

#### Inherited from

RendererJob.view

#### Defined in

gfx/renderJob/jobs/RendererJob.ts:68

## Methods

### start

▸ **start**(): `void`

#### Returns

`void`

#### Overrides

[RendererJob](RendererJob.md).[start](RendererJob.md#start)

#### Defined in

gfx/renderJob/jobs/ForwardRenderJob.ts:15

___

### debug

▸ **debug**(): `void`

#### Returns

`void`

#### Overrides

[RendererJob](RendererJob.md).[debug](RendererJob.md#debug)

#### Defined in

gfx/renderJob/jobs/ForwardRenderJob.ts:61

___

### addRenderer

▸ **addRenderer**\<`T`\>(`c`, `param?`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`RendererBase`](RendererBase.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`Ctor`](../modules.md#ctor)\<`T`\> |
| `param?` | `any` |

#### Returns

`T`

#### Inherited from

[RendererJob](RendererJob.md).[addRenderer](RendererJob.md#addrenderer)

#### Defined in

gfx/renderJob/jobs/RendererJob.ts:55

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

[RendererJob](RendererJob.md).[stop](RendererJob.md#stop)

#### Defined in

gfx/renderJob/jobs/RendererJob.ts:74

___

### pause

▸ **pause**(): `void`

#### Returns

`void`

#### Inherited from

[RendererJob](RendererJob.md).[pause](RendererJob.md#pause)

#### Defined in

gfx/renderJob/jobs/RendererJob.ts:75

___

### resume

▸ **resume**(): `void`

#### Returns

`void`

#### Inherited from

[RendererJob](RendererJob.md).[resume](RendererJob.md#resume)

#### Defined in

gfx/renderJob/jobs/RendererJob.ts:78

___

### addPost

▸ **addPost**(`post`): [`PostBase`](PostBase.md) \| [`PostBase`](PostBase.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `post` | [`PostBase`](PostBase.md) |

#### Returns

[`PostBase`](PostBase.md) \| [`PostBase`](PostBase.md)[]

#### Inherited from

[RendererJob](RendererJob.md).[addPost](RendererJob.md#addpost)

#### Defined in

gfx/renderJob/jobs/RendererJob.ts:81

___

### removePost

▸ **removePost**(`post`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `post` | [`PostBase`](PostBase.md) \| [`PostBase`](PostBase.md)[] |

#### Returns

`void`

#### Inherited from

[RendererJob](RendererJob.md).[removePost](RendererJob.md#removepost)

#### Defined in

gfx/renderJob/jobs/RendererJob.ts:93

___

### renderFrame

▸ **renderFrame**(): `void`

#### Returns

`void`

#### Inherited from

[RendererJob](RendererJob.md).[renderFrame](RendererJob.md#renderframe)

#### Defined in

gfx/renderJob/jobs/RendererJob.ts:102
