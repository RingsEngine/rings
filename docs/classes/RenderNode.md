[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / RenderNode

# Class: RenderNode

## Hierarchy

- [`ComponentBase`](ComponentBase.md)

  ↳ **`RenderNode`**

  ↳↳ [`InstanceDrawComponent`](InstanceDrawComponent.md)

  ↳↳ [`MeshRenderer`](MeshRenderer.md)

  ↳↳ [`Reflection`](Reflection.md)

## Table of contents

### Constructors

- [constructor](RenderNode.md#constructor)

### Properties

- [object3D](RenderNode.md#object3d)
- [\_eventDispatcher](RenderNode.md#_eventdispatcher)
- [\_enable](RenderNode.md#_enable)
- [isDestroyed](RenderNode.md#isdestroyed)
- [instanceCount](RenderNode.md#instancecount)
- [lodLevel](RenderNode.md#lodlevel)
- [alwaysRender](RenderNode.md#alwaysrender)
- [instanceID](RenderNode.md#instanceid)
- [drawType](RenderNode.md#drawtype)
- [\_geometry](RenderNode.md#_geometry)
- [\_materials](RenderNode.md#_materials)
- [\_castShadow](RenderNode.md#_castshadow)
- [\_castReflection](RenderNode.md#_castreflection)
- [\_castGI](RenderNode.md#_castgi)
- [\_rendererMask](RenderNode.md#_renderermask)
- [\_inRenderer](RenderNode.md#_inrenderer)
- [\_readyPipeline](RenderNode.md#_readypipeline)
- [\_combineShaderRefection](RenderNode.md#_combineshaderrefection)
- [\_ignoreEnvMap](RenderNode.md#_ignoreenvmap)
- [\_ignorePrefilterMap](RenderNode.md#_ignoreprefiltermap)
- [\_\_renderOrder](RenderNode.md#__renderorder)
- [\_renderOrder](RenderNode.md#_renderorder)
- [\_passInit](RenderNode.md#_passinit)
- [isRenderOrderChange](RenderNode.md#isrenderorderchange)
- [needSortOnCameraZ](RenderNode.md#needsortoncameraz)
- [isRecievePostEffectUI](RenderNode.md#isrecieveposteffectui)
- [\_octreeBinder](RenderNode.md#_octreebinder)
- [\_renderLayer](RenderNode.md#_renderlayer)
- [\_computes](RenderNode.md#_computes)

### Accessors

- [eventDispatcher](RenderNode.md#eventdispatcher)
- [isStart](RenderNode.md#isstart)
- [transform](RenderNode.md#transform)
- [enable](RenderNode.md#enable)
- [renderLayer](RenderNode.md#renderlayer)
- [geometry](RenderNode.md#geometry)
- [rendererMask](RenderNode.md#renderermask)
- [renderOrder](RenderNode.md#renderorder)
- [materials](RenderNode.md#materials)
- [castShadow](RenderNode.md#castshadow)
- [castGI](RenderNode.md#castgi)
- [castReflection](RenderNode.md#castreflection)

### Methods

- [start](RenderNode.md#start)
- [stop](RenderNode.md#stop)
- [onUpdate](RenderNode.md#onupdate)
- [onLateUpdate](RenderNode.md#onlateupdate)
- [onBeforeUpdate](RenderNode.md#onbeforeupdate)
- [onCompute](RenderNode.md#oncompute)
- [onGraphic](RenderNode.md#ongraphic)
- [onParentChange](RenderNode.md#onparentchange)
- [onAddChild](RenderNode.md#onaddchild)
- [onRemoveChild](RenderNode.md#onremovechild)
- [cloneTo](RenderNode.md#cloneto)
- [init](RenderNode.md#init)
- [attachSceneOctree](RenderNode.md#attachsceneoctree)
- [detachSceneOctree](RenderNode.md#detachsceneoctree)
- [updateOctreeEntity](RenderNode.md#updateoctreeentity)
- [copyComponent](RenderNode.md#copycomponent)
- [addMask](RenderNode.md#addmask)
- [removeMask](RenderNode.md#removemask)
- [hasMask](RenderNode.md#hasmask)
- [addRendererMask](RenderNode.md#addrenderermask)
- [removeRendererMask](RenderNode.md#removerenderermask)
- [onEnable](RenderNode.md#onenable)
- [onDisable](RenderNode.md#ondisable)
- [selfCloneMaterials](RenderNode.md#selfclonematerials)
- [initPipeline](RenderNode.md#initpipeline)
- [castNeedPass](RenderNode.md#castneedpass)
- [renderPass](RenderNode.md#renderpass)
- [renderPass2](RenderNode.md#renderpass2)
- [recordRenderPass2](RenderNode.md#recordrenderpass2)
- [preInit](RenderNode.md#preinit)
- [nodeUpdate](RenderNode.md#nodeupdate)
- [beforeDestroy](RenderNode.md#beforedestroy)
- [destroy](RenderNode.md#destroy)

## Constructors

### constructor

• **new RenderNode**(): [`RenderNode`](RenderNode.md)

#### Returns

[`RenderNode`](RenderNode.md)

#### Inherited from

[ComponentBase](ComponentBase.md).[constructor](ComponentBase.md#constructor)

## Properties

### object3D

• **object3D**: [`Object3D`](Object3D.md) = `null`

#### Inherited from

[ComponentBase](ComponentBase.md).[object3D](ComponentBase.md#object3d)

#### Defined in

components/ComponentBase.ts:9

___

### \_eventDispatcher

• `Protected` **\_eventDispatcher**: [`CEventDispatcher`](CEventDispatcher.md)

#### Inherited from

[ComponentBase](ComponentBase.md).[_eventDispatcher](ComponentBase.md#_eventdispatcher)

#### Defined in

components/ComponentBase.ts:10

___

### \_enable

• `Protected` **\_enable**: `boolean` = `true`

#### Inherited from

[ComponentBase](ComponentBase.md).[_enable](ComponentBase.md#_enable)

#### Defined in

components/ComponentBase.ts:18

___

### isDestroyed

• **isDestroyed**: `boolean` = `false`

#### Inherited from

[ComponentBase](ComponentBase.md).[isDestroyed](ComponentBase.md#isdestroyed)

#### Defined in

components/ComponentBase.ts:20

___

### instanceCount

• **instanceCount**: `number` = `0`

#### Defined in

components/renderer/RenderNode.ts:32

___

### lodLevel

• **lodLevel**: `number` = `0`

#### Defined in

components/renderer/RenderNode.ts:33

___

### alwaysRender

• **alwaysRender**: `boolean` = `false`

#### Defined in

components/renderer/RenderNode.ts:34

___

### instanceID

• **instanceID**: `string`

#### Defined in

components/renderer/RenderNode.ts:35

___

### drawType

• **drawType**: `number` = `0`

#### Defined in

components/renderer/RenderNode.ts:36

___

### \_geometry

• `Protected` **\_geometry**: [`GeometryBase`](GeometryBase.md)

#### Defined in

components/renderer/RenderNode.ts:37

___

### \_materials

• `Protected` **\_materials**: [`Material`](Material.md)[] = `[]`

#### Defined in

components/renderer/RenderNode.ts:38

___

### \_castShadow

• `Protected` **\_castShadow**: `boolean` = `true`

#### Defined in

components/renderer/RenderNode.ts:39

___

### \_castReflection

• `Protected` **\_castReflection**: `boolean` = `true`

#### Defined in

components/renderer/RenderNode.ts:40

___

### \_castGI

• `Protected` **\_castGI**: `boolean` = `false`

#### Defined in

components/renderer/RenderNode.ts:41

___

### \_rendererMask

• `Protected` **\_rendererMask**: `number` = `RendererMask.Default`

#### Defined in

components/renderer/RenderNode.ts:42

___

### \_inRenderer

• `Protected` **\_inRenderer**: `boolean` = `false`

#### Defined in

components/renderer/RenderNode.ts:43

___

### \_readyPipeline

• `Protected` **\_readyPipeline**: `boolean` = `false`

#### Defined in

components/renderer/RenderNode.ts:44

___

### \_combineShaderRefection

• `Protected` **\_combineShaderRefection**: [`ShaderReflection`](ShaderReflection.md)

#### Defined in

components/renderer/RenderNode.ts:45

___

### \_ignoreEnvMap

• `Protected` `Optional` **\_ignoreEnvMap**: `boolean`

#### Defined in

components/renderer/RenderNode.ts:46

___

### \_ignorePrefilterMap

• `Protected` `Optional` **\_ignorePrefilterMap**: `boolean`

#### Defined in

components/renderer/RenderNode.ts:47

___

### \_\_renderOrder

• `Protected` **\_\_renderOrder**: `number` = `0`

#### Defined in

components/renderer/RenderNode.ts:48

___

### \_renderOrder

• `Protected` **\_renderOrder**: `number` = `0`

#### Defined in

components/renderer/RenderNode.ts:49

___

### \_passInit

• `Protected` **\_passInit**: `Map`\<[`PassType`](../enums/PassType.md), `boolean`\>

#### Defined in

components/renderer/RenderNode.ts:50

___

### isRenderOrderChange

• `Optional` **isRenderOrderChange**: `boolean`

#### Defined in

components/renderer/RenderNode.ts:51

___

### needSortOnCameraZ

• `Optional` **needSortOnCameraZ**: `boolean`

#### Defined in

components/renderer/RenderNode.ts:52

___

### isRecievePostEffectUI

• `Optional` **isRecievePostEffectUI**: `boolean`

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

#### Defined in

components/renderer/RenderNode.ts:54

___

### \_renderLayer

• `Protected` **\_renderLayer**: [`RenderLayer`](../enums/RenderLayer.md) = `RenderLayer.None`

#### Defined in

components/renderer/RenderNode.ts:55

___

### \_computes

• `Protected` **\_computes**: [`RenderShaderCompute`](RenderShaderCompute.md)[]

#### Defined in

components/renderer/RenderNode.ts:56

## Accessors

### eventDispatcher

• `get` **eventDispatcher**(): [`CEventDispatcher`](CEventDispatcher.md)

#### Returns

[`CEventDispatcher`](CEventDispatcher.md)

#### Inherited from

ComponentBase.eventDispatcher

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

ComponentBase.eventDispatcher

#### Defined in

components/ComponentBase.ts:15

___

### isStart

• `get` **isStart**(): `boolean`

#### Returns

`boolean`

#### Inherited from

ComponentBase.isStart

#### Defined in

components/ComponentBase.ts:21

___

### transform

• `get` **transform**(): [`Transform`](Transform.md)

#### Returns

[`Transform`](Transform.md)

#### Inherited from

ComponentBase.transform

#### Defined in

components/ComponentBase.ts:24

___

### enable

• `get` **enable**(): `boolean`

#### Returns

`boolean`

#### Inherited from

ComponentBase.enable

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

ComponentBase.enable

#### Defined in

components/ComponentBase.ts:27

___

### renderLayer

• `get` **renderLayer**(): [`RenderLayer`](../enums/RenderLayer.md)

#### Returns

[`RenderLayer`](../enums/RenderLayer.md)

#### Defined in

components/renderer/RenderNode.ts:106

• `set` **renderLayer**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`RenderLayer`](../enums/RenderLayer.md) |

#### Returns

`void`

#### Defined in

components/renderer/RenderNode.ts:110

___

### geometry

• `get` **geometry**(): [`GeometryBase`](GeometryBase.md)

#### Returns

[`GeometryBase`](GeometryBase.md)

#### Defined in

components/renderer/RenderNode.ts:114

• `set` **geometry**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`GeometryBase`](GeometryBase.md) |

#### Returns

`void`

#### Defined in

components/renderer/RenderNode.ts:118

___

### rendererMask

• `get` **rendererMask**(): `number`

#### Returns

`number`

#### Defined in

components/renderer/RenderNode.ts:144

• `set` **rendererMask**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

components/renderer/RenderNode.ts:148

___

### renderOrder

• `get` **renderOrder**(): `number`

#### Returns

`number`

#### Defined in

components/renderer/RenderNode.ts:152

• `set` **renderOrder**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

components/renderer/RenderNode.ts:156

___

### materials

• `get` **materials**(): [`Material`](Material.md)[]

#### Returns

[`Material`](Material.md)[]

#### Defined in

components/renderer/RenderNode.ts:165

• `set` **materials**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Material`](Material.md)[] |

#### Returns

`void`

#### Defined in

components/renderer/RenderNode.ts:169

___

### castShadow

• `get` **castShadow**(): `boolean`

#### Returns

`boolean`

#### Defined in

components/renderer/RenderNode.ts:336

• `set` **castShadow**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

components/renderer/RenderNode.ts:340

___

### castGI

• `get` **castGI**(): `boolean`

#### Returns

`boolean`

#### Defined in

components/renderer/RenderNode.ts:345

• `set` **castGI**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

components/renderer/RenderNode.ts:349

___

### castReflection

• `get` **castReflection**(): `boolean`

#### Returns

`boolean`

#### Defined in

components/renderer/RenderNode.ts:353

• `set` **castReflection**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

components/renderer/RenderNode.ts:357

## Methods

### start

▸ **start**(): `void`

#### Returns

`void`

#### Inherited from

[ComponentBase](ComponentBase.md).[start](ComponentBase.md#start)

#### Defined in

components/ComponentBase.ts:78

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

[ComponentBase](ComponentBase.md).[stop](ComponentBase.md#stop)

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

[ComponentBase](ComponentBase.md).[onUpdate](ComponentBase.md#onupdate)

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

[ComponentBase](ComponentBase.md).[onLateUpdate](ComponentBase.md#onlateupdate)

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

[ComponentBase](ComponentBase.md).[onBeforeUpdate](ComponentBase.md#onbeforeupdate)

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

[ComponentBase](ComponentBase.md).[onCompute](ComponentBase.md#oncompute)

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

[ComponentBase](ComponentBase.md).[onGraphic](ComponentBase.md#ongraphic)

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

[ComponentBase](ComponentBase.md).[onParentChange](ComponentBase.md#onparentchange)

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

[ComponentBase](ComponentBase.md).[onAddChild](ComponentBase.md#onaddchild)

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

[ComponentBase](ComponentBase.md).[onRemoveChild](ComponentBase.md#onremovechild)

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

[ComponentBase](ComponentBase.md).[cloneTo](ComponentBase.md#cloneto)

#### Defined in

components/ComponentBase.ts:90

___

### init

▸ **init**(`param?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `param?` | `any` |

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[init](ComponentBase.md#init)

#### Defined in

components/renderer/RenderNode.ts:58

___

### attachSceneOctree

▸ **attachSceneOctree**(`octree`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `octree` | [`Octree`](Octree.md) |

#### Returns

`void`

#### Defined in

components/renderer/RenderNode.ts:66

___

### detachSceneOctree

▸ **detachSceneOctree**(): `void`

#### Returns

`void`

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

#### Overrides

[ComponentBase](ComponentBase.md).[copyComponent](ComponentBase.md#copycomponent)

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

#### Defined in

components/renderer/RenderNode.ts:223

___

### onEnable

▸ **onEnable**(): `void`

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[onEnable](ComponentBase.md#onenable)

#### Defined in

components/renderer/RenderNode.ts:227

___

### onDisable

▸ **onDisable**(): `void`

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[onDisable](ComponentBase.md#ondisable)

#### Defined in

components/renderer/RenderNode.ts:237

___

### selfCloneMaterials

▸ **selfCloneMaterials**(`key`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`this`

#### Defined in

components/renderer/RenderNode.ts:243

___

### initPipeline

▸ **initPipeline**(): `void`

#### Returns

`void`

#### Defined in

components/renderer/RenderNode.ts:256

___

### castNeedPass

▸ **castNeedPass**(): `void`

#### Returns

`void`

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

#### Defined in

components/renderer/RenderNode.ts:361

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

#### Defined in

components/renderer/RenderNode.ts:479

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

#### Overrides

[ComponentBase](ComponentBase.md).[beforeDestroy](ComponentBase.md#beforedestroy)

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

#### Overrides

[ComponentBase](ComponentBase.md).[destroy](ComponentBase.md#destroy)

#### Defined in

components/renderer/RenderNode.ts:732
