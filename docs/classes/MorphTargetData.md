[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / MorphTargetData

# Class: MorphTargetData

## Table of contents

### Constructors

- [constructor](MorphTargetData.md#constructor)

### Properties

- [enable](MorphTargetData.md#enable)
- [morphTargetsRelative](MorphTargetData.md#morphtargetsrelative)
- [MaxMorphTargetCount](MorphTargetData.md#maxmorphtargetcount)
- [\_computeConfigArray](MorphTargetData.md#_computeconfigarray)
- [\_computeConfigBuffer](MorphTargetData.md#_computeconfigbuffer)
- [\_morphInfluenceArray](MorphTargetData.md#_morphinfluencearray)
- [\_morphInfluenceBuffer](MorphTargetData.md#_morphinfluencebuffer)
- [\_positionAttrDataGroup](MorphTargetData.md#_positionattrdatagroup)
- [\_normalAttrDataGroup](MorphTargetData.md#_normalattrdatagroup)
- [\_morphTargetCount](MorphTargetData.md#_morphtargetcount)
- [\_totalVertexCount](MorphTargetData.md#_totalvertexcount)
- [\_computeShader](MorphTargetData.md#_computeshader)
- [\_computeShaders](MorphTargetData.md#_computeshaders)
- [\_computeWorkGroupXY](MorphTargetData.md#_computeworkgroupxy)
- [\_collectMorphTargetData](MorphTargetData.md#_collectmorphtargetdata)

### Accessors

- [blendShape](MorphTargetData.md#blendshape)

### Methods

- [initMorphTarget](MorphTargetData.md#initmorphtarget)
- [applyRenderShader](MorphTargetData.md#applyrendershader)
- [computeMorphTarget](MorphTargetData.md#computemorphtarget)
- [updateInfluence](MorphTargetData.md#updateinfluence)
- [uploadMorphTargetBuffer](MorphTargetData.md#uploadmorphtargetbuffer)
- [generateGPUBuffer](MorphTargetData.md#generategpubuffer)

## Constructors

### constructor

• **new MorphTargetData**(): [`MorphTargetData`](MorphTargetData.md)

#### Returns

[`MorphTargetData`](MorphTargetData.md)

#### Defined in

components/anim/morphAnim/MorphTargetData.ts:72

## Properties

### enable

• **enable**: `boolean`

#### Defined in

components/anim/morphAnim/MorphTargetData.ts:54

___

### morphTargetsRelative

• **morphTargetsRelative**: `boolean`

#### Defined in

components/anim/morphAnim/MorphTargetData.ts:55

___

### MaxMorphTargetCount

• `Readonly` **MaxMorphTargetCount**: `number` = `64`

#### Defined in

components/anim/morphAnim/MorphTargetData.ts:56

___

### \_computeConfigArray

• `Protected` **\_computeConfigArray**: `Float32Array`\<`ArrayBufferLike`\>

#### Defined in

components/anim/morphAnim/MorphTargetData.ts:57

___

### \_computeConfigBuffer

• `Protected` **\_computeConfigBuffer**: [`UniformGPUBuffer`](UniformGPUBuffer.md)

#### Defined in

components/anim/morphAnim/MorphTargetData.ts:58

___

### \_morphInfluenceArray

• `Protected` **\_morphInfluenceArray**: `Float32Array`\<`ArrayBufferLike`\>

#### Defined in

components/anim/morphAnim/MorphTargetData.ts:59

___

### \_morphInfluenceBuffer

• `Protected` **\_morphInfluenceBuffer**: [`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Defined in

components/anim/morphAnim/MorphTargetData.ts:60

___

### \_positionAttrDataGroup

• `Protected` **\_positionAttrDataGroup**: `MorphAttrDataGroup`

#### Defined in

components/anim/morphAnim/MorphTargetData.ts:61

___

### \_normalAttrDataGroup

• `Protected` **\_normalAttrDataGroup**: `MorphAttrDataGroup`

#### Defined in

components/anim/morphAnim/MorphTargetData.ts:62

___

### \_morphTargetCount

• `Protected` **\_morphTargetCount**: `number`

#### Defined in

components/anim/morphAnim/MorphTargetData.ts:64

___

### \_totalVertexCount

• `Protected` **\_totalVertexCount**: `number`

#### Defined in

components/anim/morphAnim/MorphTargetData.ts:65

___

### \_computeShader

• `Protected` **\_computeShader**: [`ComputeShader`](ComputeShader.md)

#### Defined in

components/anim/morphAnim/MorphTargetData.ts:66

___

### \_computeShaders

• `Protected` **\_computeShaders**: [`ComputeShader`](ComputeShader.md)[]

#### Defined in

components/anim/morphAnim/MorphTargetData.ts:67

___

### \_computeWorkGroupXY

• `Protected` **\_computeWorkGroupXY**: `number` = `1`

#### Defined in

components/anim/morphAnim/MorphTargetData.ts:68

___

### \_collectMorphTargetData

• `Protected` **\_collectMorphTargetData**: `MorphTargetCollectData`

#### Defined in

components/anim/morphAnim/MorphTargetData.ts:69

## Accessors

### blendShape

• `get` **blendShape**(): `Object`

#### Returns

`Object`

#### Defined in

components/anim/morphAnim/MorphTargetData.ts:159

## Methods

### initMorphTarget

▸ **initMorphTarget**(`geometry`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `geometry` | [`GeometryBase`](GeometryBase.md) |

#### Returns

`void`

#### Defined in

components/anim/morphAnim/MorphTargetData.ts:79

___

### applyRenderShader

▸ **applyRenderShader**(`renderShader`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderShader` | [`RenderShaderPass`](RenderShaderPass.md) |

#### Returns

`void`

#### Defined in

components/anim/morphAnim/MorphTargetData.ts:99

___

### computeMorphTarget

▸ **computeMorphTarget**(`command`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `GPUCommandEncoder` |

#### Returns

`void`

#### Defined in

components/anim/morphAnim/MorphTargetData.ts:119

___

### updateInfluence

▸ **updateInfluence**(`index`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `value` | `number` |

#### Returns

`void`

#### Defined in

components/anim/morphAnim/MorphTargetData.ts:154

___

### uploadMorphTargetBuffer

▸ **uploadMorphTargetBuffer**(): `void`

#### Returns

`void`

#### Defined in

components/anim/morphAnim/MorphTargetData.ts:260

___

### generateGPUBuffer

▸ **generateGPUBuffer**(): `void`

#### Returns

`void`

#### Defined in

components/anim/morphAnim/MorphTargetData.ts:269
