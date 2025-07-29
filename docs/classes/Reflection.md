[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / Reflection

# Class: Reflection

## Hierarchy

- [`RenderNode`](RenderNode.md)

  ↳ **`Reflection`**

  ↳↳ [`SphereReflection`](SphereReflection.md)

## Table of contents

### Constructors

- [constructor](Reflection.md#constructor)

### Properties

- [object3D](Reflection.md#object3d)
- [\_eventDispatcher](Reflection.md#_eventdispatcher)
- [\_enable](Reflection.md#_enable)
- [isDestroyed](Reflection.md#isdestroyed)
- [gid](Reflection.md#gid)
- [needUpdate](Reflection.md#needupdate)
- [autoUpdate](Reflection.md#autoupdate)
- [radius](Reflection.md#radius)
- [instanceCount](Reflection.md#instancecount)
- [lodLevel](Reflection.md#lodlevel)
- [alwaysRender](Reflection.md#alwaysrender)
- [instanceID](Reflection.md#instanceid)
- [drawType](Reflection.md#drawtype)
- [\_geometry](Reflection.md#_geometry)
- [\_materials](Reflection.md#_materials)
- [\_castShadow](Reflection.md#_castshadow)
- [\_castReflection](Reflection.md#_castreflection)
- [\_castGI](Reflection.md#_castgi)
- [\_rendererMask](Reflection.md#_renderermask)
- [\_inRenderer](Reflection.md#_inrenderer)
- [\_readyPipeline](Reflection.md#_readypipeline)
- [\_combineShaderRefection](Reflection.md#_combineshaderrefection)
- [\_ignoreEnvMap](Reflection.md#_ignoreenvmap)
- [\_ignorePrefilterMap](Reflection.md#_ignoreprefiltermap)
- [\_\_renderOrder](Reflection.md#__renderorder)
- [\_renderOrder](Reflection.md#_renderorder)
- [\_passInit](Reflection.md#_passinit)
- [isRenderOrderChange](Reflection.md#isrenderorderchange)
- [needSortOnCameraZ](Reflection.md#needsortoncameraz)
- [isRecievePostEffectUI](Reflection.md#isrecieveposteffectui)
- [\_octreeBinder](Reflection.md#_octreebinder)
- [\_renderLayer](Reflection.md#_renderlayer)
- [\_computes](Reflection.md#_computes)

### Accessors

- [eventDispatcher](Reflection.md#eventdispatcher)
- [isStart](Reflection.md#isstart)
- [transform](Reflection.md#transform)
- [enable](Reflection.md#enable)
- [renderLayer](Reflection.md#renderlayer)
- [geometry](Reflection.md#geometry)
- [rendererMask](Reflection.md#renderermask)
- [renderOrder](Reflection.md#renderorder)
- [materials](Reflection.md#materials)
- [castShadow](Reflection.md#castshadow)
- [castGI](Reflection.md#castgi)
- [castReflection](Reflection.md#castreflection)

### Methods

- [start](Reflection.md#start)
- [stop](Reflection.md#stop)
- [onUpdate](Reflection.md#onupdate)
- [onLateUpdate](Reflection.md#onlateupdate)
- [onBeforeUpdate](Reflection.md#onbeforeupdate)
- [onCompute](Reflection.md#oncompute)
- [onGraphic](Reflection.md#ongraphic)
- [onParentChange](Reflection.md#onparentchange)
- [onAddChild](Reflection.md#onaddchild)
- [onRemoveChild](Reflection.md#onremovechild)
- [cloneTo](Reflection.md#cloneto)
- [init](Reflection.md#init)
- [onEnable](Reflection.md#onenable)
- [onDisable](Reflection.md#ondisable)
- [renderPass2](Reflection.md#renderpass2)
- [attachSceneOctree](Reflection.md#attachsceneoctree)
- [detachSceneOctree](Reflection.md#detachsceneoctree)
- [updateOctreeEntity](Reflection.md#updateoctreeentity)
- [copyComponent](Reflection.md#copycomponent)
- [addMask](Reflection.md#addmask)
- [removeMask](Reflection.md#removemask)
- [hasMask](Reflection.md#hasmask)
- [addRendererMask](Reflection.md#addrenderermask)
- [removeRendererMask](Reflection.md#removerenderermask)
- [selfCloneMaterials](Reflection.md#selfclonematerials)
- [initPipeline](Reflection.md#initpipeline)
- [castNeedPass](Reflection.md#castneedpass)
- [renderPass](Reflection.md#renderpass)
- [recordRenderPass2](Reflection.md#recordrenderpass2)
- [preInit](Reflection.md#preinit)
- [nodeUpdate](Reflection.md#nodeupdate)
- [beforeDestroy](Reflection.md#beforedestroy)
- [destroy](Reflection.md#destroy)

## Constructors

### constructor

• **new Reflection**(): [`Reflection`](Reflection.md)

#### Returns

[`Reflection`](Reflection.md)

#### Inherited from

[RenderNode](RenderNode.md).[constructor](RenderNode.md#constructor)

## Properties

### object3D

• **object3D**: [`Object3D`](Object3D.md) = `null`

#### Inherited from

[RenderNode](RenderNode.md).[object3D](RenderNode.md#object3d)

#### Defined in

components/ComponentBase.ts:9

___

### \_eventDispatcher

• `Protected` **\_eventDispatcher**: [`CEventDispatcher`](CEventDispatcher.md)

#### Inherited from

[RenderNode](RenderNode.md).[_eventDispatcher](RenderNode.md#_eventdispatcher)

#### Defined in

components/ComponentBase.ts:10

___

### \_enable

• `Protected` **\_enable**: `boolean` = `true`

#### Inherited from

[RenderNode](RenderNode.md).[_enable](RenderNode.md#_enable)

#### Defined in

components/ComponentBase.ts:18

___

### isDestroyed

• **isDestroyed**: `boolean` = `false`

#### Inherited from

[RenderNode](RenderNode.md).[isDestroyed](RenderNode.md#isdestroyed)

#### Defined in

components/ComponentBase.ts:20

___

### gid

• **gid**: `number` = `0`

#### Defined in

components/renderer/Reflection.ts:13

___

### needUpdate

• **needUpdate**: `boolean` = `true`

#### Defined in

components/renderer/Reflection.ts:14

___

### autoUpdate

• **autoUpdate**: `boolean` = `false`

#### Defined in

components/renderer/Reflection.ts:15

___

### radius

• **radius**: `number` = `500`

#### Defined in

components/renderer/Reflection.ts:16

___

### instanceCount

• **instanceCount**: `number` = `0`

#### Inherited from

[RenderNode](RenderNode.md).[instanceCount](RenderNode.md#instancecount)

#### Defined in

components/renderer/RenderNode.ts:32

___

### lodLevel

• **lodLevel**: `number` = `0`

#### Inherited from

[RenderNode](RenderNode.md).[lodLevel](RenderNode.md#lodlevel)

#### Defined in

components/renderer/RenderNode.ts:33

___

### alwaysRender

• **alwaysRender**: `boolean` = `false`

#### Inherited from

[RenderNode](RenderNode.md).[alwaysRender](RenderNode.md#alwaysrender)

#### Defined in

components/renderer/RenderNode.ts:34

___

### instanceID

• **instanceID**: `string`

#### Inherited from

[RenderNode](RenderNode.md).[instanceID](RenderNode.md#instanceid)

#### Defined in

components/renderer/RenderNode.ts:35

___

### drawType

• **drawType**: `number` = `0`

#### Inherited from

[RenderNode](RenderNode.md).[drawType](RenderNode.md#drawtype)

#### Defined in

components/renderer/RenderNode.ts:36

___

### \_geometry

• `Protected` **\_geometry**: [`GeometryBase`](GeometryBase.md)

#### Inherited from

[RenderNode](RenderNode.md).[_geometry](RenderNode.md#_geometry)

#### Defined in

components/renderer/RenderNode.ts:37

___

### \_materials

• `Protected` **\_materials**: [`Material`](Material.md)[] = `[]`

#### Inherited from

[RenderNode](RenderNode.md).[_materials](RenderNode.md#_materials)

#### Defined in

components/renderer/RenderNode.ts:38

___

### \_castShadow

• `Protected` **\_castShadow**: `boolean` = `true`

#### Inherited from

[RenderNode](RenderNode.md).[_castShadow](RenderNode.md#_castshadow)

#### Defined in

components/renderer/RenderNode.ts:39

___

### \_castReflection

• `Protected` **\_castReflection**: `boolean` = `true`

#### Inherited from

[RenderNode](RenderNode.md).[_castReflection](RenderNode.md#_castreflection)

#### Defined in

components/renderer/RenderNode.ts:40

___

### \_castGI

• `Protected` **\_castGI**: `boolean` = `false`

#### Inherited from

[RenderNode](RenderNode.md).[_castGI](RenderNode.md#_castgi)

#### Defined in

components/renderer/RenderNode.ts:41

___

### \_rendererMask

• `Protected` **\_rendererMask**: `number` = `RendererMask.Default`

#### Inherited from

[RenderNode](RenderNode.md).[_rendererMask](RenderNode.md#_renderermask)

#### Defined in

components/renderer/RenderNode.ts:42

___

### \_inRenderer

• `Protected` **\_inRenderer**: `boolean` = `false`

#### Inherited from

[RenderNode](RenderNode.md).[_inRenderer](RenderNode.md#_inrenderer)

#### Defined in

components/renderer/RenderNode.ts:43

___

### \_readyPipeline

• `Protected` **\_readyPipeline**: `boolean` = `false`

#### Inherited from

[RenderNode](RenderNode.md).[_readyPipeline](RenderNode.md#_readypipeline)

#### Defined in

components/renderer/RenderNode.ts:44

___

### \_combineShaderRefection

• `Protected` **\_combineShaderRefection**: [`ShaderReflection`](ShaderReflection.md)

#### Inherited from

[RenderNode](RenderNode.md).[_combineShaderRefection](RenderNode.md#_combineshaderrefection)

#### Defined in

components/renderer/RenderNode.ts:45

___

### \_ignoreEnvMap

• `Protected` `Optional` **\_ignoreEnvMap**: `boolean`

#### Inherited from

[RenderNode](RenderNode.md).[_ignoreEnvMap](RenderNode.md#_ignoreenvmap)

#### Defined in

components/renderer/RenderNode.ts:46

___

### \_ignorePrefilterMap

• `Protected` `Optional` **\_ignorePrefilterMap**: `boolean`

#### Inherited from

[RenderNode](RenderNode.md).[_ignorePrefilterMap](RenderNode.md#_ignoreprefiltermap)

#### Defined in

components/renderer/RenderNode.ts:47

___

### \_\_renderOrder

• `Protected` **\_\_renderOrder**: `number` = `0`

#### Inherited from

[RenderNode](RenderNode.md).[__renderOrder](RenderNode.md#__renderorder)

#### Defined in

components/renderer/RenderNode.ts:48

___

### \_renderOrder

• `Protected` **\_renderOrder**: `number` = `0`

#### Inherited from

[RenderNode](RenderNode.md).[_renderOrder](RenderNode.md#_renderorder)

#### Defined in

components/renderer/RenderNode.ts:49

___

### \_passInit

• `Protected` **\_passInit**: `Map`\<[`PassType`](../enums/PassType.md), `boolean`\>

#### Inherited from

[RenderNode](RenderNode.md).[_passInit](RenderNode.md#_passinit)

#### Defined in

components/renderer/RenderNode.ts:50

___

### isRenderOrderChange

• `Optional` **isRenderOrderChange**: `boolean`

#### Inherited from

[RenderNode](RenderNode.md).[isRenderOrderChange](RenderNode.md#isrenderorderchange)

#### Defined in

components/renderer/RenderNode.ts:51

___

### needSortOnCameraZ

• `Optional` **needSortOnCameraZ**: `boolean`

#### Inherited from

[RenderNode](RenderNode.md).[needSortOnCameraZ](RenderNode.md#needsortoncameraz)

#### Defined in

components/renderer/RenderNode.ts:52

___

### isRecievePostEffectUI

• `Optional` **isRecievePostEffectUI**: `boolean`

#### Inherited from

[RenderNode](RenderNode.md).[isRecievePostEffectUI](RenderNode.md#isrecieveposteffectui)

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

[RenderNode](RenderNode.md).[_octreeBinder](RenderNode.md#_octreebinder)

#### Defined in

components/renderer/RenderNode.ts:54

___

### \_renderLayer

• `Protected` **\_renderLayer**: [`RenderLayer`](../enums/RenderLayer.md) = `RenderLayer.None`

#### Inherited from

[RenderNode](RenderNode.md).[_renderLayer](RenderNode.md#_renderlayer)

#### Defined in

components/renderer/RenderNode.ts:55

___

### \_computes

• `Protected` **\_computes**: [`RenderShaderCompute`](RenderShaderCompute.md)[]

#### Inherited from

[RenderNode](RenderNode.md).[_computes](RenderNode.md#_computes)

#### Defined in

components/renderer/RenderNode.ts:56

## Accessors

### eventDispatcher

• `get` **eventDispatcher**(): [`CEventDispatcher`](CEventDispatcher.md)

#### Returns

[`CEventDispatcher`](CEventDispatcher.md)

#### Inherited from

RenderNode.eventDispatcher

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

RenderNode.eventDispatcher

#### Defined in

components/ComponentBase.ts:15

___

### isStart

• `get` **isStart**(): `boolean`

#### Returns

`boolean`

#### Inherited from

RenderNode.isStart

#### Defined in

components/ComponentBase.ts:21

___

### transform

• `get` **transform**(): [`Transform`](Transform.md)

#### Returns

[`Transform`](Transform.md)

#### Inherited from

RenderNode.transform

#### Defined in

components/ComponentBase.ts:24

___

### enable

• `get` **enable**(): `boolean`

#### Returns

`boolean`

#### Inherited from

RenderNode.enable

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

RenderNode.enable

#### Defined in

components/ComponentBase.ts:27

___

### renderLayer

• `get` **renderLayer**(): [`RenderLayer`](../enums/RenderLayer.md)

#### Returns

[`RenderLayer`](../enums/RenderLayer.md)

#### Inherited from

RenderNode.renderLayer

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

RenderNode.renderLayer

#### Defined in

components/renderer/RenderNode.ts:110

___

### geometry

• `get` **geometry**(): [`GeometryBase`](GeometryBase.md)

#### Returns

[`GeometryBase`](GeometryBase.md)

#### Inherited from

RenderNode.geometry

#### Defined in

components/renderer/RenderNode.ts:114

• `set` **geometry**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`GeometryBase`](GeometryBase.md) |

#### Returns

`void`

#### Inherited from

RenderNode.geometry

#### Defined in

components/renderer/RenderNode.ts:118

___

### rendererMask

• `get` **rendererMask**(): `number`

#### Returns

`number`

#### Inherited from

RenderNode.rendererMask

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

RenderNode.rendererMask

#### Defined in

components/renderer/RenderNode.ts:148

___

### renderOrder

• `get` **renderOrder**(): `number`

#### Returns

`number`

#### Inherited from

RenderNode.renderOrder

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

RenderNode.renderOrder

#### Defined in

components/renderer/RenderNode.ts:156

___

### materials

• `get` **materials**(): [`Material`](Material.md)[]

#### Returns

[`Material`](Material.md)[]

#### Inherited from

RenderNode.materials

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

RenderNode.materials

#### Defined in

components/renderer/RenderNode.ts:169

___

### castShadow

• `get` **castShadow**(): `boolean`

#### Returns

`boolean`

#### Inherited from

RenderNode.castShadow

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

RenderNode.castShadow

#### Defined in

components/renderer/RenderNode.ts:340

___

### castGI

• `get` **castGI**(): `boolean`

#### Returns

`boolean`

#### Inherited from

RenderNode.castGI

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

RenderNode.castGI

#### Defined in

components/renderer/RenderNode.ts:349

___

### castReflection

• `get` **castReflection**(): `boolean`

#### Returns

`boolean`

#### Inherited from

RenderNode.castReflection

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

RenderNode.castReflection

#### Defined in

components/renderer/RenderNode.ts:357

## Methods

### start

▸ **start**(): `void`

#### Returns

`void`

#### Inherited from

[RenderNode](RenderNode.md).[start](RenderNode.md#start)

#### Defined in

components/ComponentBase.ts:78

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

[RenderNode](RenderNode.md).[stop](RenderNode.md#stop)

#### Defined in

components/ComponentBase.ts:79

___

### onUpdate

▸ **onUpdate**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`any`

#### Inherited from

[RenderNode](RenderNode.md).[onUpdate](RenderNode.md#onupdate)

#### Defined in

components/ComponentBase.ts:82

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

[RenderNode](RenderNode.md).[onLateUpdate](RenderNode.md#onlateupdate)

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

[RenderNode](RenderNode.md).[onBeforeUpdate](RenderNode.md#onbeforeupdate)

#### Defined in

components/ComponentBase.ts:84

___

### onCompute

▸ **onCompute**(`view?`, `command?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |
| `command?` | `GPUCommandEncoder` |

#### Returns

`any`

#### Inherited from

[RenderNode](RenderNode.md).[onCompute](RenderNode.md#oncompute)

#### Defined in

components/ComponentBase.ts:85

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

[RenderNode](RenderNode.md).[onGraphic](RenderNode.md#ongraphic)

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

[RenderNode](RenderNode.md).[onParentChange](RenderNode.md#onparentchange)

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

[RenderNode](RenderNode.md).[onAddChild](RenderNode.md#onaddchild)

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

[RenderNode](RenderNode.md).[onRemoveChild](RenderNode.md#onremovechild)

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

[RenderNode](RenderNode.md).[cloneTo](RenderNode.md#cloneto)

#### Defined in

components/ComponentBase.ts:90

___

### init

▸ **init**(): `void`

#### Returns

`void`

#### Overrides

[RenderNode](RenderNode.md).[init](RenderNode.md#init)

#### Defined in

components/renderer/Reflection.ts:17

___

### onEnable

▸ **onEnable**(): `void`

#### Returns

`void`

#### Overrides

[RenderNode](RenderNode.md).[onEnable](RenderNode.md#onenable)

#### Defined in

components/renderer/Reflection.ts:28

___

### onDisable

▸ **onDisable**(): `void`

#### Returns

`void`

#### Overrides

[RenderNode](RenderNode.md).[onDisable](RenderNode.md#ondisable)

#### Defined in

components/renderer/Reflection.ts:32

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

#### Overrides

[RenderNode](RenderNode.md).[renderPass2](RenderNode.md#renderpass2)

#### Defined in

components/renderer/Reflection.ts:36

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

[RenderNode](RenderNode.md).[attachSceneOctree](RenderNode.md#attachsceneoctree)

#### Defined in

components/renderer/RenderNode.ts:66

___

### detachSceneOctree

▸ **detachSceneOctree**(): `void`

#### Returns

`void`

#### Inherited from

[RenderNode](RenderNode.md).[detachSceneOctree](RenderNode.md#detachsceneoctree)

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

[RenderNode](RenderNode.md).[updateOctreeEntity](RenderNode.md#updateoctreeentity)

#### Defined in

components/renderer/RenderNode.ts:87

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

[RenderNode](RenderNode.md).[copyComponent](RenderNode.md#copycomponent)

#### Defined in

components/renderer/RenderNode.ts:91

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

[RenderNode](RenderNode.md).[addMask](RenderNode.md#addmask)

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

[RenderNode](RenderNode.md).[removeMask](RenderNode.md#removemask)

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

[RenderNode](RenderNode.md).[hasMask](RenderNode.md#hasmask)

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

[RenderNode](RenderNode.md).[addRendererMask](RenderNode.md#addrenderermask)

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

[RenderNode](RenderNode.md).[removeRendererMask](RenderNode.md#removerenderermask)

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

[RenderNode](RenderNode.md).[selfCloneMaterials](RenderNode.md#selfclonematerials)

#### Defined in

components/renderer/RenderNode.ts:243

___

### initPipeline

▸ **initPipeline**(): `void`

#### Returns

`void`

#### Inherited from

[RenderNode](RenderNode.md).[initPipeline](RenderNode.md#initpipeline)

#### Defined in

components/renderer/RenderNode.ts:256

___

### castNeedPass

▸ **castNeedPass**(): `void`

#### Returns

`void`

#### Inherited from

[RenderNode](RenderNode.md).[castNeedPass](RenderNode.md#castneedpass)

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

[RenderNode](RenderNode.md).[renderPass](RenderNode.md#renderpass)

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

[RenderNode](RenderNode.md).[recordRenderPass2](RenderNode.md#recordrenderpass2)

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

[RenderNode](RenderNode.md).[preInit](RenderNode.md#preinit)

#### Defined in

components/renderer/RenderNode.ts:574

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

[RenderNode](RenderNode.md).[nodeUpdate](RenderNode.md#nodeupdate)

#### Defined in

components/renderer/RenderNode.ts:578

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

[RenderNode](RenderNode.md).[beforeDestroy](RenderNode.md#beforedestroy)

#### Defined in

components/renderer/RenderNode.ts:716

___

### destroy

▸ **destroy**(`force?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `force?` | `boolean` |

#### Returns

`void`

#### Inherited from

[RenderNode](RenderNode.md).[destroy](RenderNode.md#destroy)

#### Defined in

components/renderer/RenderNode.ts:732
