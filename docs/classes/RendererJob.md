[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / RendererJob

# Class: RendererJob

## Hierarchy

- **`RendererJob`**

  ↳ [`ForwardRenderJob`](ForwardRenderJob.md)

## Table of contents

### Constructors

- [constructor](RendererJob.md#constructor)

### Properties

- [rendererMap](RendererJob.md#renderermap)
- [shadowMapPassRenderer](RendererJob.md#shadowmappassrenderer)
- [pointLightShadowRenderer](RendererJob.md#pointlightshadowrenderer)
- [ddgiProbeRenderer](RendererJob.md#ddgiproberenderer)
- [postRenderer](RendererJob.md#postrenderer)
- [clusterLightingRender](RendererJob.md#clusterlightingrender)
- [reflectionRenderer](RendererJob.md#reflectionrenderer)
- [occlusionSystem](RendererJob.md#occlusionsystem)
- [depthPassRenderer](RendererJob.md#depthpassrenderer)
- [pauseRender](RendererJob.md#pauserender)
- [pickFire](RendererJob.md#pickfire)
- [renderState](RendererJob.md#renderstate)
- [\_view](RendererJob.md#_view)

### Accessors

- [colorPassRenderer](RendererJob.md#colorpassrenderer)
- [view](RendererJob.md#view)

### Methods

- [addRenderer](RendererJob.md#addrenderer)
- [start](RendererJob.md#start)
- [stop](RendererJob.md#stop)
- [pause](RendererJob.md#pause)
- [resume](RendererJob.md#resume)
- [addPost](RendererJob.md#addpost)
- [removePost](RendererJob.md#removepost)
- [renderFrame](RendererJob.md#renderframe)
- [debug](RendererJob.md#debug)

## Constructors

### constructor

• **new RendererJob**(`view`): [`RendererJob`](RendererJob.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |

#### Returns

[`RendererJob`](RendererJob.md)

#### Defined in

gfx/renderJob/jobs/RendererJob.ts:42

## Properties

### rendererMap

• **rendererMap**: [`RendererMap`](RendererMap.md)

#### Defined in

gfx/renderJob/jobs/RendererJob.ts:25

___

### shadowMapPassRenderer

• **shadowMapPassRenderer**: [`ShadowMapPassRenderer`](ShadowMapPassRenderer.md)

#### Defined in

gfx/renderJob/jobs/RendererJob.ts:26

___

### pointLightShadowRenderer

• **pointLightShadowRenderer**: [`PointLightShadowRenderer`](PointLightShadowRenderer.md)

#### Defined in

gfx/renderJob/jobs/RendererJob.ts:27

___

### ddgiProbeRenderer

• **ddgiProbeRenderer**: [`DDGIProbeRenderer`](DDGIProbeRenderer.md)

#### Defined in

gfx/renderJob/jobs/RendererJob.ts:28

___

### postRenderer

• **postRenderer**: [`PostRenderer`](PostRenderer.md)

#### Defined in

gfx/renderJob/jobs/RendererJob.ts:29

___

### clusterLightingRender

• **clusterLightingRender**: [`ClusterLightingRender`](ClusterLightingRender.md)

#### Defined in

gfx/renderJob/jobs/RendererJob.ts:30

___

### reflectionRenderer

• **reflectionRenderer**: [`ReflectionRenderer`](ReflectionRenderer.md)

#### Defined in

gfx/renderJob/jobs/RendererJob.ts:31

___

### occlusionSystem

• **occlusionSystem**: [`OcclusionSystem`](OcclusionSystem.md)

#### Defined in

gfx/renderJob/jobs/RendererJob.ts:32

___

### depthPassRenderer

• **depthPassRenderer**: [`PreDepthPassRenderer`](PreDepthPassRenderer.md)

#### Defined in

gfx/renderJob/jobs/RendererJob.ts:33

___

### pauseRender

• **pauseRender**: `boolean` = `false`

#### Defined in

gfx/renderJob/jobs/RendererJob.ts:38

___

### pickFire

• **pickFire**: [`PickFire`](PickFire.md)

#### Defined in

gfx/renderJob/jobs/RendererJob.ts:39

___

### renderState

• **renderState**: `boolean` = `false`

#### Defined in

gfx/renderJob/jobs/RendererJob.ts:40

___

### \_view

• `Protected` **\_view**: [`View3D`](View3D.md)

#### Defined in

gfx/renderJob/jobs/RendererJob.ts:41

## Accessors

### colorPassRenderer

• `get` **colorPassRenderer**(): [`ColorPassRenderer`](ColorPassRenderer.md)

#### Returns

[`ColorPassRenderer`](ColorPassRenderer.md)

#### Defined in

gfx/renderJob/jobs/RendererJob.ts:34

___

### view

• `get` **view**(): [`View3D`](View3D.md)

#### Returns

[`View3D`](View3D.md)

#### Defined in

gfx/renderJob/jobs/RendererJob.ts:65

• `set` **view**(`view`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |

#### Returns

`void`

#### Defined in

gfx/renderJob/jobs/RendererJob.ts:68

## Methods

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

#### Defined in

gfx/renderJob/jobs/RendererJob.ts:55

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Defined in

gfx/renderJob/jobs/RendererJob.ts:71

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Defined in

gfx/renderJob/jobs/RendererJob.ts:74

___

### pause

▸ **pause**(): `void`

#### Returns

`void`

#### Defined in

gfx/renderJob/jobs/RendererJob.ts:75

___

### resume

▸ **resume**(): `void`

#### Returns

`void`

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

#### Defined in

gfx/renderJob/jobs/RendererJob.ts:93

___

### renderFrame

▸ **renderFrame**(): `void`

#### Returns

`void`

#### Defined in

gfx/renderJob/jobs/RendererJob.ts:102

___

### debug

▸ **debug**(): `void`

#### Returns

`void`

#### Defined in

gfx/renderJob/jobs/RendererJob.ts:160
