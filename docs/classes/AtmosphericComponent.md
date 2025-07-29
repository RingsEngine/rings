[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / AtmosphericComponent

# Class: AtmosphericComponent

## Hierarchy

- [`SkyRenderer`](SkyRenderer.md)

  ↳ **`AtmosphericComponent`**

## Table of contents

### Constructors

- [constructor](AtmosphericComponent.md#constructor)

### Properties

- [object3D](AtmosphericComponent.md#object3d)
- [\_eventDispatcher](AtmosphericComponent.md#_eventdispatcher)
- [\_enable](AtmosphericComponent.md#_enable)
- [isDestroyed](AtmosphericComponent.md#isdestroyed)
- [receiveShadow](AtmosphericComponent.md#receiveshadow)
- [morphData](AtmosphericComponent.md#morphdata)
- [instanceCount](AtmosphericComponent.md#instancecount)
- [lodLevel](AtmosphericComponent.md#lodlevel)
- [alwaysRender](AtmosphericComponent.md#alwaysrender)
- [instanceID](AtmosphericComponent.md#instanceid)
- [drawType](AtmosphericComponent.md#drawtype)
- [\_geometry](AtmosphericComponent.md#_geometry)
- [\_materials](AtmosphericComponent.md#_materials)
- [\_castShadow](AtmosphericComponent.md#_castshadow)
- [\_castReflection](AtmosphericComponent.md#_castreflection)
- [\_castGI](AtmosphericComponent.md#_castgi)
- [\_rendererMask](AtmosphericComponent.md#_renderermask)
- [\_inRenderer](AtmosphericComponent.md#_inrenderer)
- [\_readyPipeline](AtmosphericComponent.md#_readypipeline)
- [\_combineShaderRefection](AtmosphericComponent.md#_combineshaderrefection)
- [\_ignoreEnvMap](AtmosphericComponent.md#_ignoreenvmap)
- [\_ignorePrefilterMap](AtmosphericComponent.md#_ignoreprefiltermap)
- [\_\_renderOrder](AtmosphericComponent.md#__renderorder)
- [\_renderOrder](AtmosphericComponent.md#_renderorder)
- [\_passInit](AtmosphericComponent.md#_passinit)
- [isRenderOrderChange](AtmosphericComponent.md#isrenderorderchange)
- [needSortOnCameraZ](AtmosphericComponent.md#needsortoncameraz)
- [isRecievePostEffectUI](AtmosphericComponent.md#isrecieveposteffectui)
- [\_octreeBinder](AtmosphericComponent.md#_octreebinder)
- [\_renderLayer](AtmosphericComponent.md#_renderlayer)
- [\_computes](AtmosphericComponent.md#_computes)
- [skyMaterial](AtmosphericComponent.md#skymaterial)

### Accessors

- [sunX](AtmosphericComponent.md#sunx)
- [sunY](AtmosphericComponent.md#suny)
- [eyePos](AtmosphericComponent.md#eyepos)
- [sunRadius](AtmosphericComponent.md#sunradius)
- [sunRadiance](AtmosphericComponent.md#sunradiance)
- [sunBrightness](AtmosphericComponent.md#sunbrightness)
- [displaySun](AtmosphericComponent.md#displaysun)
- [relativeTransform](AtmosphericComponent.md#relativetransform)
- [eventDispatcher](AtmosphericComponent.md#eventdispatcher)
- [isStart](AtmosphericComponent.md#isstart)
- [transform](AtmosphericComponent.md#transform)
- [enable](AtmosphericComponent.md#enable)
- [geometry](AtmosphericComponent.md#geometry)
- [material](AtmosphericComponent.md#material)
- [renderLayer](AtmosphericComponent.md#renderlayer)
- [rendererMask](AtmosphericComponent.md#renderermask)
- [renderOrder](AtmosphericComponent.md#renderorder)
- [materials](AtmosphericComponent.md#materials)
- [castShadow](AtmosphericComponent.md#castshadow)
- [castGI](AtmosphericComponent.md#castgi)
- [castReflection](AtmosphericComponent.md#castreflection)
- [map](AtmosphericComponent.md#map)
- [exposure](AtmosphericComponent.md#exposure)
- [roughness](AtmosphericComponent.md#roughness)

### Methods

- [init](AtmosphericComponent.md#init)
- [start](AtmosphericComponent.md#start)
- [onUpdate](AtmosphericComponent.md#onupdate)
- [destroy](AtmosphericComponent.md#destroy)
- [stop](AtmosphericComponent.md#stop)
- [onLateUpdate](AtmosphericComponent.md#onlateupdate)
- [onBeforeUpdate](AtmosphericComponent.md#onbeforeupdate)
- [onGraphic](AtmosphericComponent.md#ongraphic)
- [onParentChange](AtmosphericComponent.md#onparentchange)
- [onAddChild](AtmosphericComponent.md#onaddchild)
- [onRemoveChild](AtmosphericComponent.md#onremovechild)
- [cloneTo](AtmosphericComponent.md#cloneto)
- [copyComponent](AtmosphericComponent.md#copycomponent)
- [setMorphInfluence](AtmosphericComponent.md#setmorphinfluence)
- [setMorphInfluenceIndex](AtmosphericComponent.md#setmorphinfluenceindex)
- [onCompute](AtmosphericComponent.md#oncompute)
- [attachSceneOctree](AtmosphericComponent.md#attachsceneoctree)
- [detachSceneOctree](AtmosphericComponent.md#detachsceneoctree)
- [updateOctreeEntity](AtmosphericComponent.md#updateoctreeentity)
- [addMask](AtmosphericComponent.md#addmask)
- [removeMask](AtmosphericComponent.md#removemask)
- [hasMask](AtmosphericComponent.md#hasmask)
- [addRendererMask](AtmosphericComponent.md#addrenderermask)
- [removeRendererMask](AtmosphericComponent.md#removerenderermask)
- [selfCloneMaterials](AtmosphericComponent.md#selfclonematerials)
- [initPipeline](AtmosphericComponent.md#initpipeline)
- [castNeedPass](AtmosphericComponent.md#castneedpass)
- [renderPass](AtmosphericComponent.md#renderpass)
- [recordRenderPass2](AtmosphericComponent.md#recordrenderpass2)
- [preInit](AtmosphericComponent.md#preinit)
- [beforeDestroy](AtmosphericComponent.md#beforedestroy)
- [onEnable](AtmosphericComponent.md#onenable)
- [onDisable](AtmosphericComponent.md#ondisable)
- [nodeUpdate](AtmosphericComponent.md#nodeupdate)
- [renderPass2](AtmosphericComponent.md#renderpass2)
- [useSkyReflection](AtmosphericComponent.md#useskyreflection)

## Constructors

### constructor

• **new AtmosphericComponent**(): [`AtmosphericComponent`](AtmosphericComponent.md)

#### Returns

[`AtmosphericComponent`](AtmosphericComponent.md)

#### Inherited from

[SkyRenderer](SkyRenderer.md).[constructor](SkyRenderer.md#constructor)

#### Defined in

components/renderer/MeshRenderer.ts:21

## Properties

### object3D

• **object3D**: [`Object3D`](Object3D.md) = `null`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[object3D](SkyRenderer.md#object3d)

#### Defined in

components/ComponentBase.ts:9

___

### \_eventDispatcher

• `Protected` **\_eventDispatcher**: [`CEventDispatcher`](CEventDispatcher.md)

#### Inherited from

[SkyRenderer](SkyRenderer.md).[_eventDispatcher](SkyRenderer.md#_eventdispatcher)

#### Defined in

components/ComponentBase.ts:10

___

### \_enable

• `Protected` **\_enable**: `boolean` = `true`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[_enable](SkyRenderer.md#_enable)

#### Defined in

components/ComponentBase.ts:18

___

### isDestroyed

• **isDestroyed**: `boolean` = `false`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[isDestroyed](SkyRenderer.md#isdestroyed)

#### Defined in

components/ComponentBase.ts:20

___

### receiveShadow

• **receiveShadow**: `boolean`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[receiveShadow](SkyRenderer.md#receiveshadow)

#### Defined in

components/renderer/MeshRenderer.ts:19

___

### morphData

• **morphData**: [`MorphTargetData`](MorphTargetData.md)

#### Inherited from

[SkyRenderer](SkyRenderer.md).[morphData](SkyRenderer.md#morphdata)

#### Defined in

components/renderer/MeshRenderer.ts:20

___

### instanceCount

• **instanceCount**: `number` = `0`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[instanceCount](SkyRenderer.md#instancecount)

#### Defined in

components/renderer/RenderNode.ts:32

___

### lodLevel

• **lodLevel**: `number` = `0`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[lodLevel](SkyRenderer.md#lodlevel)

#### Defined in

components/renderer/RenderNode.ts:33

___

### alwaysRender

• **alwaysRender**: `boolean` = `false`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[alwaysRender](SkyRenderer.md#alwaysrender)

#### Defined in

components/renderer/RenderNode.ts:34

___

### instanceID

• **instanceID**: `string`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[instanceID](SkyRenderer.md#instanceid)

#### Defined in

components/renderer/RenderNode.ts:35

___

### drawType

• **drawType**: `number` = `0`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[drawType](SkyRenderer.md#drawtype)

#### Defined in

components/renderer/RenderNode.ts:36

___

### \_geometry

• `Protected` **\_geometry**: [`GeometryBase`](GeometryBase.md)

#### Inherited from

[SkyRenderer](SkyRenderer.md).[_geometry](SkyRenderer.md#_geometry)

#### Defined in

components/renderer/RenderNode.ts:37

___

### \_materials

• `Protected` **\_materials**: [`Material`](Material.md)[] = `[]`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[_materials](SkyRenderer.md#_materials)

#### Defined in

components/renderer/RenderNode.ts:38

___

### \_castShadow

• `Protected` **\_castShadow**: `boolean` = `true`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[_castShadow](SkyRenderer.md#_castshadow)

#### Defined in

components/renderer/RenderNode.ts:39

___

### \_castReflection

• `Protected` **\_castReflection**: `boolean` = `true`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[_castReflection](SkyRenderer.md#_castreflection)

#### Defined in

components/renderer/RenderNode.ts:40

___

### \_castGI

• `Protected` **\_castGI**: `boolean` = `false`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[_castGI](SkyRenderer.md#_castgi)

#### Defined in

components/renderer/RenderNode.ts:41

___

### \_rendererMask

• `Protected` **\_rendererMask**: `number` = `RendererMask.Default`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[_rendererMask](SkyRenderer.md#_renderermask)

#### Defined in

components/renderer/RenderNode.ts:42

___

### \_inRenderer

• `Protected` **\_inRenderer**: `boolean` = `false`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[_inRenderer](SkyRenderer.md#_inrenderer)

#### Defined in

components/renderer/RenderNode.ts:43

___

### \_readyPipeline

• `Protected` **\_readyPipeline**: `boolean` = `false`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[_readyPipeline](SkyRenderer.md#_readypipeline)

#### Defined in

components/renderer/RenderNode.ts:44

___

### \_combineShaderRefection

• `Protected` **\_combineShaderRefection**: [`ShaderReflection`](ShaderReflection.md)

#### Inherited from

[SkyRenderer](SkyRenderer.md).[_combineShaderRefection](SkyRenderer.md#_combineshaderrefection)

#### Defined in

components/renderer/RenderNode.ts:45

___

### \_ignoreEnvMap

• `Protected` `Optional` **\_ignoreEnvMap**: `boolean`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[_ignoreEnvMap](SkyRenderer.md#_ignoreenvmap)

#### Defined in

components/renderer/RenderNode.ts:46

___

### \_ignorePrefilterMap

• `Protected` `Optional` **\_ignorePrefilterMap**: `boolean`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[_ignorePrefilterMap](SkyRenderer.md#_ignoreprefiltermap)

#### Defined in

components/renderer/RenderNode.ts:47

___

### \_\_renderOrder

• `Protected` **\_\_renderOrder**: `number` = `0`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[__renderOrder](SkyRenderer.md#__renderorder)

#### Defined in

components/renderer/RenderNode.ts:48

___

### \_renderOrder

• `Protected` **\_renderOrder**: `number` = `0`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[_renderOrder](SkyRenderer.md#_renderorder)

#### Defined in

components/renderer/RenderNode.ts:49

___

### \_passInit

• `Protected` **\_passInit**: `Map`\<[`PassType`](../enums/PassType.md), `boolean`\>

#### Inherited from

[SkyRenderer](SkyRenderer.md).[_passInit](SkyRenderer.md#_passinit)

#### Defined in

components/renderer/RenderNode.ts:50

___

### isRenderOrderChange

• `Optional` **isRenderOrderChange**: `boolean`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[isRenderOrderChange](SkyRenderer.md#isrenderorderchange)

#### Defined in

components/renderer/RenderNode.ts:51

___

### needSortOnCameraZ

• `Optional` **needSortOnCameraZ**: `boolean`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[needSortOnCameraZ](SkyRenderer.md#needsortoncameraz)

#### Defined in

components/renderer/RenderNode.ts:52

___

### isRecievePostEffectUI

• `Optional` **isRecievePostEffectUI**: `boolean`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[isRecievePostEffectUI](SkyRenderer.md#isrecieveposteffectui)

#### Defined in

components/renderer/RenderNode.ts:53

___

### \_octreeBinder

• `Protected` **\_octreeBinder**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `octree` | [`Octree`](Octree.md) |
| `entity` | [`OctreeEntity`](OctreeEntity.md) |

#### Inherited from

[SkyRenderer](SkyRenderer.md).[_octreeBinder](SkyRenderer.md#_octreebinder)

#### Defined in

components/renderer/RenderNode.ts:54

___

### \_renderLayer

• `Protected` **\_renderLayer**: [`RenderLayer`](../enums/RenderLayer.md) = `RenderLayer.None`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[_renderLayer](SkyRenderer.md#_renderlayer)

#### Defined in

components/renderer/RenderNode.ts:55

___

### \_computes

• `Protected` **\_computes**: [`RenderShaderCompute`](RenderShaderCompute.md)[]

#### Inherited from

[SkyRenderer](SkyRenderer.md).[_computes](SkyRenderer.md#_computes)

#### Defined in

components/renderer/RenderNode.ts:56

___

### skyMaterial

• **skyMaterial**: [`SkyMaterial`](SkyMaterial.md)

#### Inherited from

[SkyRenderer](SkyRenderer.md).[skyMaterial](SkyRenderer.md#skymaterial)

#### Defined in

components/renderer/SkyRenderer.ts:18

## Accessors

### sunX

• `get` **sunX**(): `number`

#### Returns

`number`

#### Defined in

components/AtmosphericComponent.ts:50

• `set` **sunX**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

components/AtmosphericComponent.ts:54

___

### sunY

• `get` **sunY**(): `number`

#### Returns

`number`

#### Defined in

components/AtmosphericComponent.ts:61

• `set` **sunY**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

components/AtmosphericComponent.ts:65

___

### eyePos

• `get` **eyePos**(): `number`

#### Returns

`number`

#### Defined in

components/AtmosphericComponent.ts:72

• `set` **eyePos**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

components/AtmosphericComponent.ts:76

___

### sunRadius

• `get` **sunRadius**(): `number`

#### Returns

`number`

#### Defined in

components/AtmosphericComponent.ts:83

• `set` **sunRadius**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

components/AtmosphericComponent.ts:87

___

### sunRadiance

• `get` **sunRadiance**(): `number`

#### Returns

`number`

#### Defined in

components/AtmosphericComponent.ts:94

• `set` **sunRadiance**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

components/AtmosphericComponent.ts:98

___

### sunBrightness

• `get` **sunBrightness**(): `number`

#### Returns

`number`

#### Defined in

components/AtmosphericComponent.ts:105

• `set` **sunBrightness**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

components/AtmosphericComponent.ts:109

___

### displaySun

• `get` **displaySun**(): `boolean`

#### Returns

`boolean`

#### Defined in

components/AtmosphericComponent.ts:116

• `set` **displaySun**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

components/AtmosphericComponent.ts:120

___

### relativeTransform

• `get` **relativeTransform**(): [`Transform`](Transform.md)

#### Returns

[`Transform`](Transform.md)

#### Defined in

components/AtmosphericComponent.ts:148

• `set` **relativeTransform**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Transform`](Transform.md) |

#### Returns

`void`

#### Defined in

components/AtmosphericComponent.ts:152

___

### eventDispatcher

• `get` **eventDispatcher**(): [`CEventDispatcher`](CEventDispatcher.md)

#### Returns

[`CEventDispatcher`](CEventDispatcher.md)

#### Inherited from

SkyRenderer.eventDispatcher

#### Defined in

components/ComponentBase.ts:11

• `set` **eventDispatcher**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`CEventDispatcher`](CEventDispatcher.md) |

#### Returns

`void`

#### Inherited from

SkyRenderer.eventDispatcher

#### Defined in

components/ComponentBase.ts:15

___

### isStart

• `get` **isStart**(): `boolean`

#### Returns

`boolean`

#### Inherited from

SkyRenderer.isStart

#### Defined in

components/ComponentBase.ts:21

___

### transform

• `get` **transform**(): [`Transform`](Transform.md)

#### Returns

[`Transform`](Transform.md)

#### Inherited from

SkyRenderer.transform

#### Defined in

components/ComponentBase.ts:24

___

### enable

• `get` **enable**(): `boolean`

#### Returns

`boolean`

#### Inherited from

SkyRenderer.enable

#### Defined in

components/ComponentBase.ts:37

• `set` **enable**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

SkyRenderer.enable

#### Defined in

components/ComponentBase.ts:27

___

### geometry

• `get` **geometry**(): [`GeometryBase`](GeometryBase.md)

#### Returns

[`GeometryBase`](GeometryBase.md)

#### Inherited from

SkyRenderer.geometry

#### Defined in

components/renderer/MeshRenderer.ts:41

• `set` **geometry**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`GeometryBase`](GeometryBase.md) |

#### Returns

`void`

#### Inherited from

SkyRenderer.geometry

#### Defined in

components/renderer/MeshRenderer.ts:45

___

### material

• `get` **material**(): [`Material`](Material.md)

#### Returns

[`Material`](Material.md)

#### Inherited from

SkyRenderer.material

#### Defined in

components/renderer/MeshRenderer.ts:83

• `set` **material**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Material`](Material.md) |

#### Returns

`void`

#### Inherited from

SkyRenderer.material

#### Defined in

components/renderer/MeshRenderer.ts:87

___

### renderLayer

• `get` **renderLayer**(): [`RenderLayer`](../enums/RenderLayer.md)

#### Returns

[`RenderLayer`](../enums/RenderLayer.md)

#### Inherited from

SkyRenderer.renderLayer

#### Defined in

components/renderer/RenderNode.ts:106

• `set` **renderLayer**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`RenderLayer`](../enums/RenderLayer.md) |

#### Returns

`void`

#### Inherited from

SkyRenderer.renderLayer

#### Defined in

components/renderer/RenderNode.ts:110

___

### rendererMask

• `get` **rendererMask**(): `number`

#### Returns

`number`

#### Inherited from

SkyRenderer.rendererMask

#### Defined in

components/renderer/RenderNode.ts:144

• `set` **rendererMask**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

SkyRenderer.rendererMask

#### Defined in

components/renderer/RenderNode.ts:148

___

### renderOrder

• `get` **renderOrder**(): `number`

#### Returns

`number`

#### Inherited from

SkyRenderer.renderOrder

#### Defined in

components/renderer/RenderNode.ts:152

• `set` **renderOrder**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

SkyRenderer.renderOrder

#### Defined in

components/renderer/RenderNode.ts:156

___

### materials

• `get` **materials**(): [`Material`](Material.md)[]

#### Returns

[`Material`](Material.md)[]

#### Inherited from

SkyRenderer.materials

#### Defined in

components/renderer/RenderNode.ts:165

• `set` **materials**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Material`](Material.md)[] |

#### Returns

`void`

#### Inherited from

SkyRenderer.materials

#### Defined in

components/renderer/RenderNode.ts:169

___

### castShadow

• `get` **castShadow**(): `boolean`

#### Returns

`boolean`

#### Inherited from

SkyRenderer.castShadow

#### Defined in

components/renderer/RenderNode.ts:336

• `set` **castShadow**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

SkyRenderer.castShadow

#### Defined in

components/renderer/RenderNode.ts:340

___

### castGI

• `get` **castGI**(): `boolean`

#### Returns

`boolean`

#### Inherited from

SkyRenderer.castGI

#### Defined in

components/renderer/RenderNode.ts:345

• `set` **castGI**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

SkyRenderer.castGI

#### Defined in

components/renderer/RenderNode.ts:349

___

### castReflection

• `get` **castReflection**(): `boolean`

#### Returns

`boolean`

#### Inherited from

SkyRenderer.castReflection

#### Defined in

components/renderer/RenderNode.ts:353

• `set` **castReflection**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

SkyRenderer.castReflection

#### Defined in

components/renderer/RenderNode.ts:357

___

### map

• `get` **map**(): [`Texture`](Texture.md)

#### Returns

[`Texture`](Texture.md)

#### Inherited from

SkyRenderer.map

#### Defined in

components/renderer/SkyRenderer.ts:88

• `set` **map**(`texture`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Inherited from

SkyRenderer.map

#### Defined in

components/renderer/SkyRenderer.ts:80

___

### exposure

• `get` **exposure**(): `number`

#### Returns

`number`

#### Inherited from

SkyRenderer.exposure

#### Defined in

components/renderer/SkyRenderer.ts:92

• `set` **exposure**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

SkyRenderer.exposure

#### Defined in

components/renderer/SkyRenderer.ts:96

___

### roughness

• `get` **roughness**(): `number`

#### Returns

`number`

#### Inherited from

SkyRenderer.roughness

#### Defined in

components/renderer/SkyRenderer.ts:100

• `set` **roughness**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

SkyRenderer.roughness

#### Defined in

components/renderer/SkyRenderer.ts:104

## Methods

### init

▸ **init**(): `void`

#### Returns

`void`

#### Overrides

[SkyRenderer](SkyRenderer.md).[init](SkyRenderer.md#init)

#### Defined in

components/AtmosphericComponent.ts:127

___

### start

▸ **start**(`view?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | `any` |

#### Returns

`void`

#### Overrides

[SkyRenderer](SkyRenderer.md).[start](SkyRenderer.md#start)

#### Defined in

components/AtmosphericComponent.ts:141

___

### onUpdate

▸ **onUpdate**(`view?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | `any` |

#### Returns

`void`

#### Overrides

[SkyRenderer](SkyRenderer.md).[onUpdate](SkyRenderer.md#onupdate)

#### Defined in

components/AtmosphericComponent.ts:157

___

### destroy

▸ **destroy**(`force?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `force?` | `boolean` |

#### Returns

`void`

#### Overrides

[SkyRenderer](SkyRenderer.md).[destroy](SkyRenderer.md#destroy)

#### Defined in

components/AtmosphericComponent.ts:186

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[stop](SkyRenderer.md#stop)

#### Defined in

components/ComponentBase.ts:79

___

### onLateUpdate

▸ **onLateUpdate**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`any`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[onLateUpdate](SkyRenderer.md#onlateupdate)

#### Defined in

components/ComponentBase.ts:83

___

### onBeforeUpdate

▸ **onBeforeUpdate**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`any`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[onBeforeUpdate](SkyRenderer.md#onbeforeupdate)

#### Defined in

components/ComponentBase.ts:84

___

### onGraphic

▸ **onGraphic**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`any`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[onGraphic](SkyRenderer.md#ongraphic)

#### Defined in

components/ComponentBase.ts:86

___

### onParentChange

▸ **onParentChange**(`lastParent?`, `currentParent?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lastParent?` | [`Object3D`](Object3D.md) |
| `currentParent?` | [`Object3D`](Object3D.md) |

#### Returns

`any`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[onParentChange](SkyRenderer.md#onparentchange)

#### Defined in

components/ComponentBase.ts:87

___

### onAddChild

▸ **onAddChild**(`child`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Object3D`](Object3D.md) |

#### Returns

`any`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[onAddChild](SkyRenderer.md#onaddchild)

#### Defined in

components/ComponentBase.ts:88

___

### onRemoveChild

▸ **onRemoveChild**(`child`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Object3D`](Object3D.md) |

#### Returns

`any`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[onRemoveChild](SkyRenderer.md#onremovechild)

#### Defined in

components/ComponentBase.ts:89

___

### cloneTo

▸ **cloneTo**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`Object3D`](Object3D.md) |

#### Returns

`void`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[cloneTo](SkyRenderer.md#cloneto)

#### Defined in

components/renderer/MeshRenderer.ts:30

___

### copyComponent

▸ **copyComponent**(`from`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `this` |

#### Returns

`this`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[copyComponent](SkyRenderer.md#copycomponent)

#### Defined in

components/renderer/MeshRenderer.ts:34

___

### setMorphInfluence

▸ **setMorphInfluence**(`key`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[setMorphInfluence](SkyRenderer.md#setmorphinfluence)

#### Defined in

components/renderer/MeshRenderer.ts:91

___

### setMorphInfluenceIndex

▸ **setMorphInfluenceIndex**(`index`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[setMorphInfluenceIndex](SkyRenderer.md#setmorphinfluenceindex)

#### Defined in

components/renderer/MeshRenderer.ts:100

___

### onCompute

▸ **onCompute**(`view`, `command`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `command` | `GPUCommandEncoder` |

#### Returns

`void`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[onCompute](SkyRenderer.md#oncompute)

#### Defined in

components/renderer/MeshRenderer.ts:108

___

### attachSceneOctree

▸ **attachSceneOctree**(`octree`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `octree` | [`Octree`](Octree.md) |

#### Returns

`void`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[attachSceneOctree](SkyRenderer.md#attachsceneoctree)

#### Defined in

components/renderer/RenderNode.ts:66

___

### detachSceneOctree

▸ **detachSceneOctree**(): `void`

#### Returns

`void`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[detachSceneOctree](SkyRenderer.md#detachsceneoctree)

#### Defined in

components/renderer/RenderNode.ts:75

___

### updateOctreeEntity

▸ **updateOctreeEntity**(`e?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |

#### Returns

`void`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[updateOctreeEntity](SkyRenderer.md#updateoctreeentity)

#### Defined in

components/renderer/RenderNode.ts:87

___

### addMask

▸ **addMask**(`mask`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mask` | [`RendererMask`](../enums/RendererMask.md) |

#### Returns

`void`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[addMask](SkyRenderer.md#addmask)

#### Defined in

components/renderer/RenderNode.ts:132

___

### removeMask

▸ **removeMask**(`mask`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mask` | [`RendererMask`](../enums/RendererMask.md) |

#### Returns

`void`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[removeMask](SkyRenderer.md#removemask)

#### Defined in

components/renderer/RenderNode.ts:136

___

### hasMask

▸ **hasMask**(`mask`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mask` | [`RendererMask`](../enums/RendererMask.md) |

#### Returns

`boolean`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[hasMask](SkyRenderer.md#hasmask)

#### Defined in

components/renderer/RenderNode.ts:140

___

### addRendererMask

▸ **addRendererMask**(`tag`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | [`RendererMask`](../enums/RendererMask.md) |

#### Returns

`void`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[addRendererMask](SkyRenderer.md#addrenderermask)

#### Defined in

components/renderer/RenderNode.ts:219

___

### removeRendererMask

▸ **removeRendererMask**(`tag`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | [`RendererMask`](../enums/RendererMask.md) |

#### Returns

`void`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[removeRendererMask](SkyRenderer.md#removerenderermask)

#### Defined in

components/renderer/RenderNode.ts:223

___

### selfCloneMaterials

▸ **selfCloneMaterials**(`key`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`this`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[selfCloneMaterials](SkyRenderer.md#selfclonematerials)

#### Defined in

components/renderer/RenderNode.ts:243

___

### initPipeline

▸ **initPipeline**(): `void`

#### Returns

`void`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[initPipeline](SkyRenderer.md#initpipeline)

#### Defined in

components/renderer/RenderNode.ts:256

___

### castNeedPass

▸ **castNeedPass**(): `void`

#### Returns

`void`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[castNeedPass](SkyRenderer.md#castneedpass)

#### Defined in

components/renderer/RenderNode.ts:293

___

### renderPass

▸ **renderPass**(`view`, `passType`, `renderContext`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `passType` | [`PassType`](../enums/PassType.md) |
| `renderContext` | [`RenderContext`](RenderContext.md) |

#### Returns

`void`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[renderPass](SkyRenderer.md#renderpass)

#### Defined in

components/renderer/RenderNode.ts:361

___

### recordRenderPass2

▸ **recordRenderPass2**(`view`, `passType`, `rendererPassState`, `clusterLightingBuffer`, `encoder`, `useBundle?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `view` | [`View3D`](View3D.md) | `undefined` |
| `passType` | [`PassType`](../enums/PassType.md) | `undefined` |
| `rendererPassState` | [`RendererPassState`](RendererPassState.md) | `undefined` |
| `clusterLightingBuffer` | [`ClusterLightingBuffer`](ClusterLightingBuffer.md) | `undefined` |
| `encoder` | `GPURenderPassEncoder` | `undefined` |
| `useBundle` | `boolean` | `false` |

#### Returns

`void`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[recordRenderPass2](SkyRenderer.md#recordrenderpass2)

#### Defined in

components/renderer/RenderNode.ts:528

___

### preInit

▸ **preInit**(`_rendererType`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_rendererType` | [`PassType`](../enums/PassType.md) |

#### Returns

`boolean`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[preInit](SkyRenderer.md#preinit)

#### Defined in

components/renderer/RenderNode.ts:574

___

### beforeDestroy

▸ **beforeDestroy**(`force?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `force?` | `boolean` |

#### Returns

`void`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[beforeDestroy](SkyRenderer.md#beforedestroy)

#### Defined in

components/renderer/RenderNode.ts:716

___

### onEnable

▸ **onEnable**(): `void`

#### Returns

`void`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[onEnable](SkyRenderer.md#onenable)

#### Defined in

components/renderer/SkyRenderer.ts:32

___

### onDisable

▸ **onDisable**(): `void`

#### Returns

`void`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[onDisable](SkyRenderer.md#ondisable)

#### Defined in

components/renderer/SkyRenderer.ts:45

___

### nodeUpdate

▸ **nodeUpdate**(`view`, `passType`, `renderPassState`, `clusterLightingBuffer?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `passType` | [`PassType`](../enums/PassType.md) |
| `renderPassState` | [`RendererPassState`](RendererPassState.md) |
| `clusterLightingBuffer?` | [`ClusterLightingBuffer`](ClusterLightingBuffer.md) |

#### Returns

`void`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[nodeUpdate](SkyRenderer.md#nodeupdate)

#### Defined in

components/renderer/SkyRenderer.ts:53

___

### renderPass2

▸ **renderPass2**(`view`, `passType`, `rendererPassState`, `clusterLightingBuffer`, `encoder`, `useBundle?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `view` | [`View3D`](View3D.md) | `undefined` |
| `passType` | [`PassType`](../enums/PassType.md) | `undefined` |
| `rendererPassState` | [`RendererPassState`](RendererPassState.md) | `undefined` |
| `clusterLightingBuffer` | [`ClusterLightingBuffer`](ClusterLightingBuffer.md) | `undefined` |
| `encoder` | `GPURenderPassEncoder` | `undefined` |
| `useBundle` | `boolean` | `false` |

#### Returns

`void`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[renderPass2](SkyRenderer.md#renderpass2)

#### Defined in

components/renderer/SkyRenderer.ts:62

___

### useSkyReflection

▸ **useSkyReflection**(): `void`

#### Returns

`void`

#### Inherited from

[SkyRenderer](SkyRenderer.md).[useSkyReflection](SkyRenderer.md#useskyreflection)

#### Defined in

components/renderer/SkyRenderer.ts:108
