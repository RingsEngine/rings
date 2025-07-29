[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / SphereReflection

# Class: SphereReflection

## Hierarchy

- [`Reflection`](Reflection.md)

  ↳ **`SphereReflection`**

## Table of contents

### Constructors

- [constructor](SphereReflection.md#constructor)

### Properties

- [object3D](SphereReflection.md#object3d)
- [\_eventDispatcher](SphereReflection.md#_eventdispatcher)
- [\_enable](SphereReflection.md#_enable)
- [isDestroyed](SphereReflection.md#isdestroyed)
- [gid](SphereReflection.md#gid)
- [needUpdate](SphereReflection.md#needupdate)
- [autoUpdate](SphereReflection.md#autoupdate)
- [radius](SphereReflection.md#radius)
- [instanceCount](SphereReflection.md#instancecount)
- [lodLevel](SphereReflection.md#lodlevel)
- [alwaysRender](SphereReflection.md#alwaysrender)
- [instanceID](SphereReflection.md#instanceid)
- [drawType](SphereReflection.md#drawtype)
- [\_geometry](SphereReflection.md#_geometry)
- [\_materials](SphereReflection.md#_materials)
- [\_castShadow](SphereReflection.md#_castshadow)
- [\_castReflection](SphereReflection.md#_castreflection)
- [\_castGI](SphereReflection.md#_castgi)
- [\_rendererMask](SphereReflection.md#_renderermask)
- [\_inRenderer](SphereReflection.md#_inrenderer)
- [\_readyPipeline](SphereReflection.md#_readypipeline)
- [\_combineShaderRefection](SphereReflection.md#_combineshaderrefection)
- [\_ignoreEnvMap](SphereReflection.md#_ignoreenvmap)
- [\_ignorePrefilterMap](SphereReflection.md#_ignoreprefiltermap)
- [\_\_renderOrder](SphereReflection.md#__renderorder)
- [\_renderOrder](SphereReflection.md#_renderorder)
- [\_passInit](SphereReflection.md#_passinit)
- [isRenderOrderChange](SphereReflection.md#isrenderorderchange)
- [needSortOnCameraZ](SphereReflection.md#needsortoncameraz)
- [isRecievePostEffectUI](SphereReflection.md#isrecieveposteffectui)
- [\_octreeBinder](SphereReflection.md#_octreebinder)
- [\_renderLayer](SphereReflection.md#_renderlayer)
- [\_computes](SphereReflection.md#_computes)

### Accessors

- [eventDispatcher](SphereReflection.md#eventdispatcher)
- [isStart](SphereReflection.md#isstart)
- [transform](SphereReflection.md#transform)
- [enable](SphereReflection.md#enable)
- [renderLayer](SphereReflection.md#renderlayer)
- [geometry](SphereReflection.md#geometry)
- [rendererMask](SphereReflection.md#renderermask)
- [renderOrder](SphereReflection.md#renderorder)
- [materials](SphereReflection.md#materials)
- [castShadow](SphereReflection.md#castshadow)
- [castGI](SphereReflection.md#castgi)
- [castReflection](SphereReflection.md#castreflection)

### Methods

- [start](SphereReflection.md#start)
- [stop](SphereReflection.md#stop)
- [onUpdate](SphereReflection.md#onupdate)
- [onLateUpdate](SphereReflection.md#onlateupdate)
- [onBeforeUpdate](SphereReflection.md#onbeforeupdate)
- [onCompute](SphereReflection.md#oncompute)
- [onGraphic](SphereReflection.md#ongraphic)
- [onParentChange](SphereReflection.md#onparentchange)
- [onAddChild](SphereReflection.md#onaddchild)
- [onRemoveChild](SphereReflection.md#onremovechild)
- [cloneTo](SphereReflection.md#cloneto)
- [attachSceneOctree](SphereReflection.md#attachsceneoctree)
- [detachSceneOctree](SphereReflection.md#detachsceneoctree)
- [updateOctreeEntity](SphereReflection.md#updateoctreeentity)
- [copyComponent](SphereReflection.md#copycomponent)
- [addMask](SphereReflection.md#addmask)
- [removeMask](SphereReflection.md#removemask)
- [hasMask](SphereReflection.md#hasmask)
- [addRendererMask](SphereReflection.md#addrenderermask)
- [removeRendererMask](SphereReflection.md#removerenderermask)
- [selfCloneMaterials](SphereReflection.md#selfclonematerials)
- [initPipeline](SphereReflection.md#initpipeline)
- [castNeedPass](SphereReflection.md#castneedpass)
- [renderPass](SphereReflection.md#renderpass)
- [recordRenderPass2](SphereReflection.md#recordrenderpass2)
- [preInit](SphereReflection.md#preinit)
- [nodeUpdate](SphereReflection.md#nodeupdate)
- [beforeDestroy](SphereReflection.md#beforedestroy)
- [destroy](SphereReflection.md#destroy)
- [init](SphereReflection.md#init)
- [debug](SphereReflection.md#debug)
- [onEnable](SphereReflection.md#onenable)
- [onDisable](SphereReflection.md#ondisable)
- [renderPass2](SphereReflection.md#renderpass2)

## Constructors

### constructor

• **new SphereReflection**(): [`SphereReflection`](SphereReflection.md)

#### Returns

[`SphereReflection`](SphereReflection.md)

#### Inherited from

[Reflection](Reflection.md).[constructor](Reflection.md#constructor)

## Properties

### object3D

• **object3D**: [`Object3D`](Object3D.md) = `null`

#### Inherited from

[Reflection](Reflection.md).[object3D](Reflection.md#object3d)

#### Defined in

components/ComponentBase.ts:9

___

### \_eventDispatcher

• `Protected` **\_eventDispatcher**: [`CEventDispatcher`](CEventDispatcher.md)

#### Inherited from

[Reflection](Reflection.md).[_eventDispatcher](Reflection.md#_eventdispatcher)

#### Defined in

components/ComponentBase.ts:10

___

### \_enable

• `Protected` **\_enable**: `boolean` = `true`

#### Inherited from

[Reflection](Reflection.md).[_enable](Reflection.md#_enable)

#### Defined in

components/ComponentBase.ts:18

___

### isDestroyed

• **isDestroyed**: `boolean` = `false`

#### Inherited from

[Reflection](Reflection.md).[isDestroyed](Reflection.md#isdestroyed)

#### Defined in

components/ComponentBase.ts:20

___

### gid

• **gid**: `number` = `0`

#### Inherited from

[Reflection](Reflection.md).[gid](Reflection.md#gid)

#### Defined in

components/renderer/Reflection.ts:13

___

### needUpdate

• **needUpdate**: `boolean` = `true`

#### Inherited from

[Reflection](Reflection.md).[needUpdate](Reflection.md#needupdate)

#### Defined in

components/renderer/Reflection.ts:14

___

### autoUpdate

• **autoUpdate**: `boolean` = `false`

#### Inherited from

[Reflection](Reflection.md).[autoUpdate](Reflection.md#autoupdate)

#### Defined in

components/renderer/Reflection.ts:15

___

### radius

• **radius**: `number` = `500`

#### Inherited from

[Reflection](Reflection.md).[radius](Reflection.md#radius)

#### Defined in

components/renderer/Reflection.ts:16

___

### instanceCount

• **instanceCount**: `number` = `0`

#### Inherited from

[Reflection](Reflection.md).[instanceCount](Reflection.md#instancecount)

#### Defined in

components/renderer/RenderNode.ts:32

___

### lodLevel

• **lodLevel**: `number` = `0`

#### Inherited from

[Reflection](Reflection.md).[lodLevel](Reflection.md#lodlevel)

#### Defined in

components/renderer/RenderNode.ts:33

___

### alwaysRender

• **alwaysRender**: `boolean` = `false`

#### Inherited from

[Reflection](Reflection.md).[alwaysRender](Reflection.md#alwaysrender)

#### Defined in

components/renderer/RenderNode.ts:34

___

### instanceID

• **instanceID**: `string`

#### Inherited from

[Reflection](Reflection.md).[instanceID](Reflection.md#instanceid)

#### Defined in

components/renderer/RenderNode.ts:35

___

### drawType

• **drawType**: `number` = `0`

#### Inherited from

[Reflection](Reflection.md).[drawType](Reflection.md#drawtype)

#### Defined in

components/renderer/RenderNode.ts:36

___

### \_geometry

• `Protected` **\_geometry**: [`GeometryBase`](GeometryBase.md)

#### Inherited from

[Reflection](Reflection.md).[_geometry](Reflection.md#_geometry)

#### Defined in

components/renderer/RenderNode.ts:37

___

### \_materials

• `Protected` **\_materials**: [`Material`](Material.md)[] = `[]`

#### Inherited from

[Reflection](Reflection.md).[_materials](Reflection.md#_materials)

#### Defined in

components/renderer/RenderNode.ts:38

___

### \_castShadow

• `Protected` **\_castShadow**: `boolean` = `true`

#### Inherited from

[Reflection](Reflection.md).[_castShadow](Reflection.md#_castshadow)

#### Defined in

components/renderer/RenderNode.ts:39

___

### \_castReflection

• `Protected` **\_castReflection**: `boolean` = `true`

#### Inherited from

[Reflection](Reflection.md).[_castReflection](Reflection.md#_castreflection)

#### Defined in

components/renderer/RenderNode.ts:40

___

### \_castGI

• `Protected` **\_castGI**: `boolean` = `false`

#### Inherited from

[Reflection](Reflection.md).[_castGI](Reflection.md#_castgi)

#### Defined in

components/renderer/RenderNode.ts:41

___

### \_rendererMask

• `Protected` **\_rendererMask**: `number` = `RendererMask.Default`

#### Inherited from

[Reflection](Reflection.md).[_rendererMask](Reflection.md#_renderermask)

#### Defined in

components/renderer/RenderNode.ts:42

___

### \_inRenderer

• `Protected` **\_inRenderer**: `boolean` = `false`

#### Inherited from

[Reflection](Reflection.md).[_inRenderer](Reflection.md#_inrenderer)

#### Defined in

components/renderer/RenderNode.ts:43

___

### \_readyPipeline

• `Protected` **\_readyPipeline**: `boolean` = `false`

#### Inherited from

[Reflection](Reflection.md).[_readyPipeline](Reflection.md#_readypipeline)

#### Defined in

components/renderer/RenderNode.ts:44

___

### \_combineShaderRefection

• `Protected` **\_combineShaderRefection**: [`ShaderReflection`](ShaderReflection.md)

#### Inherited from

[Reflection](Reflection.md).[_combineShaderRefection](Reflection.md#_combineshaderrefection)

#### Defined in

components/renderer/RenderNode.ts:45

___

### \_ignoreEnvMap

• `Protected` `Optional` **\_ignoreEnvMap**: `boolean`

#### Inherited from

[Reflection](Reflection.md).[_ignoreEnvMap](Reflection.md#_ignoreenvmap)

#### Defined in

components/renderer/RenderNode.ts:46

___

### \_ignorePrefilterMap

• `Protected` `Optional` **\_ignorePrefilterMap**: `boolean`

#### Inherited from

[Reflection](Reflection.md).[_ignorePrefilterMap](Reflection.md#_ignoreprefiltermap)

#### Defined in

components/renderer/RenderNode.ts:47

___

### \_\_renderOrder

• `Protected` **\_\_renderOrder**: `number` = `0`

#### Inherited from

[Reflection](Reflection.md).[__renderOrder](Reflection.md#__renderorder)

#### Defined in

components/renderer/RenderNode.ts:48

___

### \_renderOrder

• `Protected` **\_renderOrder**: `number` = `0`

#### Inherited from

[Reflection](Reflection.md).[_renderOrder](Reflection.md#_renderorder)

#### Defined in

components/renderer/RenderNode.ts:49

___

### \_passInit

• `Protected` **\_passInit**: `Map`\<[`PassType`](../enums/PassType.md), `boolean`\>

#### Inherited from

[Reflection](Reflection.md).[_passInit](Reflection.md#_passinit)

#### Defined in

components/renderer/RenderNode.ts:50

___

### isRenderOrderChange

• `Optional` **isRenderOrderChange**: `boolean`

#### Inherited from

[Reflection](Reflection.md).[isRenderOrderChange](Reflection.md#isrenderorderchange)

#### Defined in

components/renderer/RenderNode.ts:51

___

### needSortOnCameraZ

• `Optional` **needSortOnCameraZ**: `boolean`

#### Inherited from

[Reflection](Reflection.md).[needSortOnCameraZ](Reflection.md#needsortoncameraz)

#### Defined in

components/renderer/RenderNode.ts:52

___

### isRecievePostEffectUI

• `Optional` **isRecievePostEffectUI**: `boolean`

#### Inherited from

[Reflection](Reflection.md).[isRecievePostEffectUI](Reflection.md#isrecieveposteffectui)

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

[Reflection](Reflection.md).[_octreeBinder](Reflection.md#_octreebinder)

#### Defined in

components/renderer/RenderNode.ts:54

___

### \_renderLayer

• `Protected` **\_renderLayer**: [`RenderLayer`](../enums/RenderLayer.md) = `RenderLayer.None`

#### Inherited from

[Reflection](Reflection.md).[_renderLayer](Reflection.md#_renderlayer)

#### Defined in

components/renderer/RenderNode.ts:55

___

### \_computes

• `Protected` **\_computes**: [`RenderShaderCompute`](RenderShaderCompute.md)[]

#### Inherited from

[Reflection](Reflection.md).[_computes](Reflection.md#_computes)

#### Defined in

components/renderer/RenderNode.ts:56

## Accessors

### eventDispatcher

• `get` **eventDispatcher**(): [`CEventDispatcher`](CEventDispatcher.md)

#### Returns

[`CEventDispatcher`](CEventDispatcher.md)

#### Inherited from

Reflection.eventDispatcher

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

Reflection.eventDispatcher

#### Defined in

components/ComponentBase.ts:15

___

### isStart

• `get` **isStart**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Reflection.isStart

#### Defined in

components/ComponentBase.ts:21

___

### transform

• `get` **transform**(): [`Transform`](Transform.md)

#### Returns

[`Transform`](Transform.md)

#### Inherited from

Reflection.transform

#### Defined in

components/ComponentBase.ts:24

___

### enable

• `get` **enable**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Reflection.enable

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

Reflection.enable

#### Defined in

components/ComponentBase.ts:27

___

### renderLayer

• `get` **renderLayer**(): [`RenderLayer`](../enums/RenderLayer.md)

#### Returns

[`RenderLayer`](../enums/RenderLayer.md)

#### Inherited from

Reflection.renderLayer

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

Reflection.renderLayer

#### Defined in

components/renderer/RenderNode.ts:110

___

### geometry

• `get` **geometry**(): [`GeometryBase`](GeometryBase.md)

#### Returns

[`GeometryBase`](GeometryBase.md)

#### Inherited from

Reflection.geometry

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

Reflection.geometry

#### Defined in

components/renderer/RenderNode.ts:118

___

### rendererMask

• `get` **rendererMask**(): `number`

#### Returns

`number`

#### Inherited from

Reflection.rendererMask

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

Reflection.rendererMask

#### Defined in

components/renderer/RenderNode.ts:148

___

### renderOrder

• `get` **renderOrder**(): `number`

#### Returns

`number`

#### Inherited from

Reflection.renderOrder

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

Reflection.renderOrder

#### Defined in

components/renderer/RenderNode.ts:156

___

### materials

• `get` **materials**(): [`Material`](Material.md)[]

#### Returns

[`Material`](Material.md)[]

#### Inherited from

Reflection.materials

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

Reflection.materials

#### Defined in

components/renderer/RenderNode.ts:169

___

### castShadow

• `get` **castShadow**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Reflection.castShadow

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

Reflection.castShadow

#### Defined in

components/renderer/RenderNode.ts:340

___

### castGI

• `get` **castGI**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Reflection.castGI

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

Reflection.castGI

#### Defined in

components/renderer/RenderNode.ts:349

___

### castReflection

• `get` **castReflection**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Reflection.castReflection

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

Reflection.castReflection

#### Defined in

components/renderer/RenderNode.ts:357

## Methods

### start

▸ **start**(): `void`

#### Returns

`void`

#### Inherited from

[Reflection](Reflection.md).[start](Reflection.md#start)

#### Defined in

components/ComponentBase.ts:78

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

[Reflection](Reflection.md).[stop](Reflection.md#stop)

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

[Reflection](Reflection.md).[onUpdate](Reflection.md#onupdate)

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

[Reflection](Reflection.md).[onLateUpdate](Reflection.md#onlateupdate)

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

[Reflection](Reflection.md).[onBeforeUpdate](Reflection.md#onbeforeupdate)

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

[Reflection](Reflection.md).[onCompute](Reflection.md#oncompute)

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

[Reflection](Reflection.md).[onGraphic](Reflection.md#ongraphic)

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

[Reflection](Reflection.md).[onParentChange](Reflection.md#onparentchange)

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

[Reflection](Reflection.md).[onAddChild](Reflection.md#onaddchild)

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

[Reflection](Reflection.md).[onRemoveChild](Reflection.md#onremovechild)

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

[Reflection](Reflection.md).[cloneTo](Reflection.md#cloneto)

#### Defined in

components/ComponentBase.ts:90

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

[Reflection](Reflection.md).[attachSceneOctree](Reflection.md#attachsceneoctree)

#### Defined in

components/renderer/RenderNode.ts:66

___

### detachSceneOctree

▸ **detachSceneOctree**(): `void`

#### Returns

`void`

#### Inherited from

[Reflection](Reflection.md).[detachSceneOctree](Reflection.md#detachsceneoctree)

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

[Reflection](Reflection.md).[updateOctreeEntity](Reflection.md#updateoctreeentity)

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

[Reflection](Reflection.md).[copyComponent](Reflection.md#copycomponent)

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

[Reflection](Reflection.md).[addMask](Reflection.md#addmask)

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

[Reflection](Reflection.md).[removeMask](Reflection.md#removemask)

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

[Reflection](Reflection.md).[hasMask](Reflection.md#hasmask)

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

[Reflection](Reflection.md).[addRendererMask](Reflection.md#addrenderermask)

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

[Reflection](Reflection.md).[removeRendererMask](Reflection.md#removerenderermask)

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

[Reflection](Reflection.md).[selfCloneMaterials](Reflection.md#selfclonematerials)

#### Defined in

components/renderer/RenderNode.ts:243

___

### initPipeline

▸ **initPipeline**(): `void`

#### Returns

`void`

#### Inherited from

[Reflection](Reflection.md).[initPipeline](Reflection.md#initpipeline)

#### Defined in

components/renderer/RenderNode.ts:256

___

### castNeedPass

▸ **castNeedPass**(): `void`

#### Returns

`void`

#### Inherited from

[Reflection](Reflection.md).[castNeedPass](Reflection.md#castneedpass)

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

[Reflection](Reflection.md).[renderPass](Reflection.md#renderpass)

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

[Reflection](Reflection.md).[recordRenderPass2](Reflection.md#recordrenderpass2)

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

[Reflection](Reflection.md).[preInit](Reflection.md#preinit)

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

[Reflection](Reflection.md).[nodeUpdate](Reflection.md#nodeupdate)

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

[Reflection](Reflection.md).[beforeDestroy](Reflection.md#beforedestroy)

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

[Reflection](Reflection.md).[destroy](Reflection.md#destroy)

#### Defined in

components/renderer/RenderNode.ts:732

___

### init

▸ **init**(): `void`

#### Returns

`void`

#### Overrides

[Reflection](Reflection.md).[init](Reflection.md#init)

#### Defined in

components/renderer/SphereReflection.ts:17

___

### debug

▸ **debug**(`index`, `scale?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `index` | `number` | `undefined` |
| `scale` | `number` | `1` |

#### Returns

`void`

#### Defined in

components/renderer/SphereReflection.ts:27

___

### onEnable

▸ **onEnable**(): `void`

#### Returns

`void`

#### Overrides

[Reflection](Reflection.md).[onEnable](Reflection.md#onenable)

#### Defined in

components/renderer/SphereReflection.ts:50

___

### onDisable

▸ **onDisable**(): `void`

#### Returns

`void`

#### Overrides

[Reflection](Reflection.md).[onDisable](Reflection.md#ondisable)

#### Defined in

components/renderer/SphereReflection.ts:54

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

[Reflection](Reflection.md).[renderPass2](Reflection.md#renderpass2)

#### Defined in

components/renderer/SphereReflection.ts:58
