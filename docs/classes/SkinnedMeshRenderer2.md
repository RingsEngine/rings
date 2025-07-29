[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / SkinnedMeshRenderer2

# Class: SkinnedMeshRenderer2

## Hierarchy

- [`MeshRenderer`](MeshRenderer.md)

  ↳ **`SkinnedMeshRenderer2`**

## Table of contents

### Constructors

- [constructor](SkinnedMeshRenderer2.md#constructor)

### Properties

- [object3D](SkinnedMeshRenderer2.md#object3d)
- [\_eventDispatcher](SkinnedMeshRenderer2.md#_eventdispatcher)
- [\_enable](SkinnedMeshRenderer2.md#_enable)
- [isDestroyed](SkinnedMeshRenderer2.md#isdestroyed)
- [receiveShadow](SkinnedMeshRenderer2.md#receiveshadow)
- [morphData](SkinnedMeshRenderer2.md#morphdata)
- [instanceCount](SkinnedMeshRenderer2.md#instancecount)
- [lodLevel](SkinnedMeshRenderer2.md#lodlevel)
- [alwaysRender](SkinnedMeshRenderer2.md#alwaysrender)
- [instanceID](SkinnedMeshRenderer2.md#instanceid)
- [drawType](SkinnedMeshRenderer2.md#drawtype)
- [\_geometry](SkinnedMeshRenderer2.md#_geometry)
- [\_materials](SkinnedMeshRenderer2.md#_materials)
- [\_castShadow](SkinnedMeshRenderer2.md#_castshadow)
- [\_castReflection](SkinnedMeshRenderer2.md#_castreflection)
- [\_castGI](SkinnedMeshRenderer2.md#_castgi)
- [\_rendererMask](SkinnedMeshRenderer2.md#_renderermask)
- [\_inRenderer](SkinnedMeshRenderer2.md#_inrenderer)
- [\_readyPipeline](SkinnedMeshRenderer2.md#_readypipeline)
- [\_combineShaderRefection](SkinnedMeshRenderer2.md#_combineshaderrefection)
- [\_ignoreEnvMap](SkinnedMeshRenderer2.md#_ignoreenvmap)
- [\_ignorePrefilterMap](SkinnedMeshRenderer2.md#_ignoreprefiltermap)
- [\_\_renderOrder](SkinnedMeshRenderer2.md#__renderorder)
- [\_renderOrder](SkinnedMeshRenderer2.md#_renderorder)
- [\_passInit](SkinnedMeshRenderer2.md#_passinit)
- [isRenderOrderChange](SkinnedMeshRenderer2.md#isrenderorderchange)
- [needSortOnCameraZ](SkinnedMeshRenderer2.md#needsortoncameraz)
- [isRecievePostEffectUI](SkinnedMeshRenderer2.md#isrecieveposteffectui)
- [\_octreeBinder](SkinnedMeshRenderer2.md#_octreebinder)
- [\_renderLayer](SkinnedMeshRenderer2.md#_renderlayer)
- [\_computes](SkinnedMeshRenderer2.md#_computes)
- [skinJointsName](SkinnedMeshRenderer2.md#skinjointsname)
- [mInverseBindMatrixData](SkinnedMeshRenderer2.md#minversebindmatrixdata)
- [mInverseBindMatrixBuffer](SkinnedMeshRenderer2.md#minversebindmatrixbuffer)
- [mSkeletonAnimation](SkinnedMeshRenderer2.md#mskeletonanimation)
- [mJointIndexTableBuffer](SkinnedMeshRenderer2.md#mjointindextablebuffer)

### Accessors

- [eventDispatcher](SkinnedMeshRenderer2.md#eventdispatcher)
- [isStart](SkinnedMeshRenderer2.md#isstart)
- [transform](SkinnedMeshRenderer2.md#transform)
- [enable](SkinnedMeshRenderer2.md#enable)
- [material](SkinnedMeshRenderer2.md#material)
- [renderLayer](SkinnedMeshRenderer2.md#renderlayer)
- [rendererMask](SkinnedMeshRenderer2.md#renderermask)
- [renderOrder](SkinnedMeshRenderer2.md#renderorder)
- [materials](SkinnedMeshRenderer2.md#materials)
- [castShadow](SkinnedMeshRenderer2.md#castshadow)
- [castGI](SkinnedMeshRenderer2.md#castgi)
- [castReflection](SkinnedMeshRenderer2.md#castreflection)
- [geometry](SkinnedMeshRenderer2.md#geometry)
- [blendShape](SkinnedMeshRenderer2.md#blendshape)
- [skeletonAnimation](SkinnedMeshRenderer2.md#skeletonanimation)
- [skinInverseBindMatrices](SkinnedMeshRenderer2.md#skininversebindmatrices)
- [inverseBindMatrixBuffer](SkinnedMeshRenderer2.md#inversebindmatrixbuffer)
- [jointIndexTableBuffer](SkinnedMeshRenderer2.md#jointindextablebuffer)

### Methods

- [stop](SkinnedMeshRenderer2.md#stop)
- [onUpdate](SkinnedMeshRenderer2.md#onupdate)
- [onLateUpdate](SkinnedMeshRenderer2.md#onlateupdate)
- [onBeforeUpdate](SkinnedMeshRenderer2.md#onbeforeupdate)
- [onGraphic](SkinnedMeshRenderer2.md#ongraphic)
- [onParentChange](SkinnedMeshRenderer2.md#onparentchange)
- [onAddChild](SkinnedMeshRenderer2.md#onaddchild)
- [onRemoveChild](SkinnedMeshRenderer2.md#onremovechild)
- [onDisable](SkinnedMeshRenderer2.md#ondisable)
- [copyComponent](SkinnedMeshRenderer2.md#copycomponent)
- [setMorphInfluence](SkinnedMeshRenderer2.md#setmorphinfluence)
- [setMorphInfluenceIndex](SkinnedMeshRenderer2.md#setmorphinfluenceindex)
- [onCompute](SkinnedMeshRenderer2.md#oncompute)
- [destroy](SkinnedMeshRenderer2.md#destroy)
- [init](SkinnedMeshRenderer2.md#init)
- [attachSceneOctree](SkinnedMeshRenderer2.md#attachsceneoctree)
- [detachSceneOctree](SkinnedMeshRenderer2.md#detachsceneoctree)
- [updateOctreeEntity](SkinnedMeshRenderer2.md#updateoctreeentity)
- [addMask](SkinnedMeshRenderer2.md#addmask)
- [removeMask](SkinnedMeshRenderer2.md#removemask)
- [hasMask](SkinnedMeshRenderer2.md#hasmask)
- [addRendererMask](SkinnedMeshRenderer2.md#addrenderermask)
- [removeRendererMask](SkinnedMeshRenderer2.md#removerenderermask)
- [selfCloneMaterials](SkinnedMeshRenderer2.md#selfclonematerials)
- [initPipeline](SkinnedMeshRenderer2.md#initpipeline)
- [castNeedPass](SkinnedMeshRenderer2.md#castneedpass)
- [renderPass](SkinnedMeshRenderer2.md#renderpass)
- [renderPass2](SkinnedMeshRenderer2.md#renderpass2)
- [recordRenderPass2](SkinnedMeshRenderer2.md#recordrenderpass2)
- [preInit](SkinnedMeshRenderer2.md#preinit)
- [beforeDestroy](SkinnedMeshRenderer2.md#beforedestroy)
- [start](SkinnedMeshRenderer2.md#start)
- [onEnable](SkinnedMeshRenderer2.md#onenable)
- [cloneTo](SkinnedMeshRenderer2.md#cloneto)
- [nodeUpdate](SkinnedMeshRenderer2.md#nodeupdate)

## Constructors

### constructor

• **new SkinnedMeshRenderer2**(): [`SkinnedMeshRenderer2`](SkinnedMeshRenderer2.md)

#### Returns

[`SkinnedMeshRenderer2`](SkinnedMeshRenderer2.md)

#### Overrides

[MeshRenderer](MeshRenderer.md).[constructor](MeshRenderer.md#constructor)

#### Defined in

components/renderer/SkinnedMeshRenderer2.ts:19

## Properties

### object3D

• **object3D**: [`Object3D`](Object3D.md) = `null`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[object3D](MeshRenderer.md#object3d)

#### Defined in

components/ComponentBase.ts:9

___

### \_eventDispatcher

• `Protected` **\_eventDispatcher**: [`CEventDispatcher`](CEventDispatcher.md)

#### Inherited from

[MeshRenderer](MeshRenderer.md).[_eventDispatcher](MeshRenderer.md#_eventdispatcher)

#### Defined in

components/ComponentBase.ts:10

___

### \_enable

• `Protected` **\_enable**: `boolean` = `true`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[_enable](MeshRenderer.md#_enable)

#### Defined in

components/ComponentBase.ts:18

___

### isDestroyed

• **isDestroyed**: `boolean` = `false`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[isDestroyed](MeshRenderer.md#isdestroyed)

#### Defined in

components/ComponentBase.ts:20

___

### receiveShadow

• **receiveShadow**: `boolean`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[receiveShadow](MeshRenderer.md#receiveshadow)

#### Defined in

components/renderer/MeshRenderer.ts:19

___

### morphData

• **morphData**: [`MorphTargetData`](MorphTargetData.md)

#### Inherited from

[MeshRenderer](MeshRenderer.md).[morphData](MeshRenderer.md#morphdata)

#### Defined in

components/renderer/MeshRenderer.ts:20

___

### instanceCount

• **instanceCount**: `number` = `0`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[instanceCount](MeshRenderer.md#instancecount)

#### Defined in

components/renderer/RenderNode.ts:32

___

### lodLevel

• **lodLevel**: `number` = `0`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[lodLevel](MeshRenderer.md#lodlevel)

#### Defined in

components/renderer/RenderNode.ts:33

___

### alwaysRender

• **alwaysRender**: `boolean` = `false`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[alwaysRender](MeshRenderer.md#alwaysrender)

#### Defined in

components/renderer/RenderNode.ts:34

___

### instanceID

• **instanceID**: `string`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[instanceID](MeshRenderer.md#instanceid)

#### Defined in

components/renderer/RenderNode.ts:35

___

### drawType

• **drawType**: `number` = `0`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[drawType](MeshRenderer.md#drawtype)

#### Defined in

components/renderer/RenderNode.ts:36

___

### \_geometry

• `Protected` **\_geometry**: [`GeometryBase`](GeometryBase.md)

#### Inherited from

[MeshRenderer](MeshRenderer.md).[_geometry](MeshRenderer.md#_geometry)

#### Defined in

components/renderer/RenderNode.ts:37

___

### \_materials

• `Protected` **\_materials**: [`Material`](Material.md)[] = `[]`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[_materials](MeshRenderer.md#_materials)

#### Defined in

components/renderer/RenderNode.ts:38

___

### \_castShadow

• `Protected` **\_castShadow**: `boolean` = `true`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[_castShadow](MeshRenderer.md#_castshadow)

#### Defined in

components/renderer/RenderNode.ts:39

___

### \_castReflection

• `Protected` **\_castReflection**: `boolean` = `true`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[_castReflection](MeshRenderer.md#_castreflection)

#### Defined in

components/renderer/RenderNode.ts:40

___

### \_castGI

• `Protected` **\_castGI**: `boolean` = `false`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[_castGI](MeshRenderer.md#_castgi)

#### Defined in

components/renderer/RenderNode.ts:41

___

### \_rendererMask

• `Protected` **\_rendererMask**: `number` = `RendererMask.Default`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[_rendererMask](MeshRenderer.md#_renderermask)

#### Defined in

components/renderer/RenderNode.ts:42

___

### \_inRenderer

• `Protected` **\_inRenderer**: `boolean` = `false`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[_inRenderer](MeshRenderer.md#_inrenderer)

#### Defined in

components/renderer/RenderNode.ts:43

___

### \_readyPipeline

• `Protected` **\_readyPipeline**: `boolean` = `false`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[_readyPipeline](MeshRenderer.md#_readypipeline)

#### Defined in

components/renderer/RenderNode.ts:44

___

### \_combineShaderRefection

• `Protected` **\_combineShaderRefection**: [`ShaderReflection`](ShaderReflection.md)

#### Inherited from

[MeshRenderer](MeshRenderer.md).[_combineShaderRefection](MeshRenderer.md#_combineshaderrefection)

#### Defined in

components/renderer/RenderNode.ts:45

___

### \_ignoreEnvMap

• `Protected` `Optional` **\_ignoreEnvMap**: `boolean`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[_ignoreEnvMap](MeshRenderer.md#_ignoreenvmap)

#### Defined in

components/renderer/RenderNode.ts:46

___

### \_ignorePrefilterMap

• `Protected` `Optional` **\_ignorePrefilterMap**: `boolean`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[_ignorePrefilterMap](MeshRenderer.md#_ignoreprefiltermap)

#### Defined in

components/renderer/RenderNode.ts:47

___

### \_\_renderOrder

• `Protected` **\_\_renderOrder**: `number` = `0`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[__renderOrder](MeshRenderer.md#__renderorder)

#### Defined in

components/renderer/RenderNode.ts:48

___

### \_renderOrder

• `Protected` **\_renderOrder**: `number` = `0`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[_renderOrder](MeshRenderer.md#_renderorder)

#### Defined in

components/renderer/RenderNode.ts:49

___

### \_passInit

• `Protected` **\_passInit**: `Map`\<[`PassType`](../enums/PassType.md), `boolean`\>

#### Inherited from

[MeshRenderer](MeshRenderer.md).[_passInit](MeshRenderer.md#_passinit)

#### Defined in

components/renderer/RenderNode.ts:50

___

### isRenderOrderChange

• `Optional` **isRenderOrderChange**: `boolean`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[isRenderOrderChange](MeshRenderer.md#isrenderorderchange)

#### Defined in

components/renderer/RenderNode.ts:51

___

### needSortOnCameraZ

• `Optional` **needSortOnCameraZ**: `boolean`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[needSortOnCameraZ](MeshRenderer.md#needsortoncameraz)

#### Defined in

components/renderer/RenderNode.ts:52

___

### isRecievePostEffectUI

• `Optional` **isRecievePostEffectUI**: `boolean`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[isRecievePostEffectUI](MeshRenderer.md#isrecieveposteffectui)

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

[MeshRenderer](MeshRenderer.md).[_octreeBinder](MeshRenderer.md#_octreebinder)

#### Defined in

components/renderer/RenderNode.ts:54

___

### \_renderLayer

• `Protected` **\_renderLayer**: [`RenderLayer`](../enums/RenderLayer.md) = `RenderLayer.None`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[_renderLayer](MeshRenderer.md#_renderlayer)

#### Defined in

components/renderer/RenderNode.ts:55

___

### \_computes

• `Protected` **\_computes**: [`RenderShaderCompute`](RenderShaderCompute.md)[]

#### Inherited from

[MeshRenderer](MeshRenderer.md).[_computes](MeshRenderer.md#_computes)

#### Defined in

components/renderer/RenderNode.ts:56

___

### skinJointsName

• **skinJointsName**: `string`[]

#### Defined in

components/renderer/SkinnedMeshRenderer2.ts:13

___

### mInverseBindMatrixData

• `Protected` **mInverseBindMatrixData**: `Float32Array`\<`ArrayBufferLike`\>[]

#### Defined in

components/renderer/SkinnedMeshRenderer2.ts:14

___

### mInverseBindMatrixBuffer

• `Protected` **mInverseBindMatrixBuffer**: [`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Defined in

components/renderer/SkinnedMeshRenderer2.ts:15

___

### mSkeletonAnimation

• `Protected` **mSkeletonAnimation**: [`AnimatorComponent`](AnimatorComponent.md)

#### Defined in

components/renderer/SkinnedMeshRenderer2.ts:16

___

### mJointIndexTableBuffer

• `Protected` **mJointIndexTableBuffer**: [`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Defined in

components/renderer/SkinnedMeshRenderer2.ts:17

## Accessors

### eventDispatcher

• `get` **eventDispatcher**(): [`CEventDispatcher`](CEventDispatcher.md)

#### Returns

[`CEventDispatcher`](CEventDispatcher.md)

#### Inherited from

MeshRenderer.eventDispatcher

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

MeshRenderer.eventDispatcher

#### Defined in

components/ComponentBase.ts:15

___

### isStart

• `get` **isStart**(): `boolean`

#### Returns

`boolean`

#### Inherited from

MeshRenderer.isStart

#### Defined in

components/ComponentBase.ts:21

___

### transform

• `get` **transform**(): [`Transform`](Transform.md)

#### Returns

[`Transform`](Transform.md)

#### Inherited from

MeshRenderer.transform

#### Defined in

components/ComponentBase.ts:24

___

### enable

• `get` **enable**(): `boolean`

#### Returns

`boolean`

#### Inherited from

MeshRenderer.enable

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

MeshRenderer.enable

#### Defined in

components/ComponentBase.ts:27

___

### material

• `get` **material**(): [`Material`](Material.md)

#### Returns

[`Material`](Material.md)

#### Inherited from

MeshRenderer.material

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

MeshRenderer.material

#### Defined in

components/renderer/MeshRenderer.ts:87

___

### renderLayer

• `get` **renderLayer**(): [`RenderLayer`](../enums/RenderLayer.md)

#### Returns

[`RenderLayer`](../enums/RenderLayer.md)

#### Inherited from

MeshRenderer.renderLayer

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

MeshRenderer.renderLayer

#### Defined in

components/renderer/RenderNode.ts:110

___

### rendererMask

• `get` **rendererMask**(): `number`

#### Returns

`number`

#### Inherited from

MeshRenderer.rendererMask

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

MeshRenderer.rendererMask

#### Defined in

components/renderer/RenderNode.ts:148

___

### renderOrder

• `get` **renderOrder**(): `number`

#### Returns

`number`

#### Inherited from

MeshRenderer.renderOrder

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

MeshRenderer.renderOrder

#### Defined in

components/renderer/RenderNode.ts:156

___

### materials

• `get` **materials**(): [`Material`](Material.md)[]

#### Returns

[`Material`](Material.md)[]

#### Inherited from

MeshRenderer.materials

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

MeshRenderer.materials

#### Defined in

components/renderer/RenderNode.ts:169

___

### castShadow

• `get` **castShadow**(): `boolean`

#### Returns

`boolean`

#### Inherited from

MeshRenderer.castShadow

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

MeshRenderer.castShadow

#### Defined in

components/renderer/RenderNode.ts:340

___

### castGI

• `get` **castGI**(): `boolean`

#### Returns

`boolean`

#### Inherited from

MeshRenderer.castGI

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

MeshRenderer.castGI

#### Defined in

components/renderer/RenderNode.ts:349

___

### castReflection

• `get` **castReflection**(): `boolean`

#### Returns

`boolean`

#### Inherited from

MeshRenderer.castReflection

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

MeshRenderer.castReflection

#### Defined in

components/renderer/RenderNode.ts:357

___

### geometry

• `get` **geometry**(): [`GeometryBase`](GeometryBase.md)

#### Returns

[`GeometryBase`](GeometryBase.md)

#### Overrides

MeshRenderer.geometry

#### Defined in

components/renderer/SkinnedMeshRenderer2.ts:24

• `set` **geometry**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`GeometryBase`](GeometryBase.md) |

#### Returns

`void`

#### Overrides

MeshRenderer.geometry

#### Defined in

components/renderer/SkinnedMeshRenderer2.ts:28

___

### blendShape

• `get` **blendShape**(): [`MorphTargetData`](MorphTargetData.md)

#### Returns

[`MorphTargetData`](MorphTargetData.md)

#### Defined in

components/renderer/SkinnedMeshRenderer2.ts:60

___

### skeletonAnimation

• `get` **skeletonAnimation**(): [`AnimatorComponent`](AnimatorComponent.md)

#### Returns

[`AnimatorComponent`](AnimatorComponent.md)

#### Defined in

components/renderer/SkinnedMeshRenderer2.ts:68

• `set` **skeletonAnimation**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`AnimatorComponent`](AnimatorComponent.md) |

#### Returns

`void`

#### Defined in

components/renderer/SkinnedMeshRenderer2.ts:72

___

### skinInverseBindMatrices

• `get` **skinInverseBindMatrices**(): `Float32Array`\<`ArrayBufferLike`\>[]

#### Returns

`Float32Array`\<`ArrayBufferLike`\>[]

#### Defined in

components/renderer/SkinnedMeshRenderer2.ts:92

• `set` **skinInverseBindMatrices**(`inverseBindMatrices`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inverseBindMatrices` | `Float32Array`\<`ArrayBufferLike`\>[] |

#### Returns

`void`

#### Defined in

components/renderer/SkinnedMeshRenderer2.ts:96

___

### inverseBindMatrixBuffer

• `get` **inverseBindMatrixBuffer**(): [`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Returns

[`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Defined in

components/renderer/SkinnedMeshRenderer2.ts:115

___

### jointIndexTableBuffer

• `get` **jointIndexTableBuffer**(): `GPUBuffer`

#### Returns

`GPUBuffer`

#### Defined in

components/renderer/SkinnedMeshRenderer2.ts:119

## Methods

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[stop](MeshRenderer.md#stop)

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

[MeshRenderer](MeshRenderer.md).[onUpdate](MeshRenderer.md#onupdate)

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

[MeshRenderer](MeshRenderer.md).[onLateUpdate](MeshRenderer.md#onlateupdate)

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

[MeshRenderer](MeshRenderer.md).[onBeforeUpdate](MeshRenderer.md#onbeforeupdate)

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

[MeshRenderer](MeshRenderer.md).[onGraphic](MeshRenderer.md#ongraphic)

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

[MeshRenderer](MeshRenderer.md).[onParentChange](MeshRenderer.md#onparentchange)

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

[MeshRenderer](MeshRenderer.md).[onAddChild](MeshRenderer.md#onaddchild)

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

[MeshRenderer](MeshRenderer.md).[onRemoveChild](MeshRenderer.md#onremovechild)

#### Defined in

components/ComponentBase.ts:89

___

### onDisable

▸ **onDisable**(): `void`

#### Returns

`void`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[onDisable](MeshRenderer.md#ondisable)

#### Defined in

components/renderer/MeshRenderer.ts:27

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

[MeshRenderer](MeshRenderer.md).[copyComponent](MeshRenderer.md#copycomponent)

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

[MeshRenderer](MeshRenderer.md).[setMorphInfluence](MeshRenderer.md#setmorphinfluence)

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

[MeshRenderer](MeshRenderer.md).[setMorphInfluenceIndex](MeshRenderer.md#setmorphinfluenceindex)

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

[MeshRenderer](MeshRenderer.md).[onCompute](MeshRenderer.md#oncompute)

#### Defined in

components/renderer/MeshRenderer.ts:108

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

[MeshRenderer](MeshRenderer.md).[destroy](MeshRenderer.md#destroy)

#### Defined in

components/renderer/MeshRenderer.ts:134

___

### init

▸ **init**(`param?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `param?` | `any` |

#### Returns

`void`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[init](MeshRenderer.md#init)

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

#### Inherited from

[MeshRenderer](MeshRenderer.md).[attachSceneOctree](MeshRenderer.md#attachsceneoctree)

#### Defined in

components/renderer/RenderNode.ts:66

___

### detachSceneOctree

▸ **detachSceneOctree**(): `void`

#### Returns

`void`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[detachSceneOctree](MeshRenderer.md#detachsceneoctree)

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

[MeshRenderer](MeshRenderer.md).[updateOctreeEntity](MeshRenderer.md#updateoctreeentity)

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

[MeshRenderer](MeshRenderer.md).[addMask](MeshRenderer.md#addmask)

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

[MeshRenderer](MeshRenderer.md).[removeMask](MeshRenderer.md#removemask)

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

[MeshRenderer](MeshRenderer.md).[hasMask](MeshRenderer.md#hasmask)

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

[MeshRenderer](MeshRenderer.md).[addRendererMask](MeshRenderer.md#addrenderermask)

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

[MeshRenderer](MeshRenderer.md).[removeRendererMask](MeshRenderer.md#removerenderermask)

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

[MeshRenderer](MeshRenderer.md).[selfCloneMaterials](MeshRenderer.md#selfclonematerials)

#### Defined in

components/renderer/RenderNode.ts:243

___

### initPipeline

▸ **initPipeline**(): `void`

#### Returns

`void`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[initPipeline](MeshRenderer.md#initpipeline)

#### Defined in

components/renderer/RenderNode.ts:256

___

### castNeedPass

▸ **castNeedPass**(): `void`

#### Returns

`void`

#### Inherited from

[MeshRenderer](MeshRenderer.md).[castNeedPass](MeshRenderer.md#castneedpass)

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

[MeshRenderer](MeshRenderer.md).[renderPass](MeshRenderer.md#renderpass)

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

#### Inherited from

[MeshRenderer](MeshRenderer.md).[renderPass2](MeshRenderer.md#renderpass2)

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

#### Inherited from

[MeshRenderer](MeshRenderer.md).[recordRenderPass2](MeshRenderer.md#recordrenderpass2)

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

[MeshRenderer](MeshRenderer.md).[preInit](MeshRenderer.md#preinit)

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

[MeshRenderer](MeshRenderer.md).[beforeDestroy](MeshRenderer.md#beforedestroy)

#### Defined in

components/renderer/RenderNode.ts:716

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Overrides

[MeshRenderer](MeshRenderer.md).[start](MeshRenderer.md#start)

#### Defined in

components/renderer/SkinnedMeshRenderer2.ts:38

___

### onEnable

▸ **onEnable**(): `void`

#### Returns

`void`

#### Overrides

[MeshRenderer](MeshRenderer.md).[onEnable](MeshRenderer.md#onenable)

#### Defined in

components/renderer/SkinnedMeshRenderer2.ts:64

___

### cloneTo

▸ **cloneTo**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`Object3D`](Object3D.md) |

#### Returns

`void`

#### Overrides

[MeshRenderer](MeshRenderer.md).[cloneTo](MeshRenderer.md#cloneto)

#### Defined in

components/renderer/SkinnedMeshRenderer2.ts:123

___

### nodeUpdate

▸ **nodeUpdate**(`view`, `passType`, `renderPassState`, `clusterLightingBuffer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `passType` | [`PassType`](../enums/PassType.md) |
| `renderPassState` | [`RendererPassState`](RendererPassState.md) |
| `clusterLightingBuffer` | [`ClusterLightingBuffer`](ClusterLightingBuffer.md) |

#### Returns

`void`

#### Overrides

[MeshRenderer](MeshRenderer.md).[nodeUpdate](MeshRenderer.md#nodeupdate)

#### Defined in

components/renderer/SkinnedMeshRenderer2.ts:148
