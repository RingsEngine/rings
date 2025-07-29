[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / GlobalBindGroup

# Class: GlobalBindGroup

## Table of contents

### Constructors

- [constructor](GlobalBindGroup.md#constructor)

### Properties

- [modelMatrixBindGroup](GlobalBindGroup.md#modelmatrixbindgroup)

### Methods

- [init](GlobalBindGroup.md#init)
- [getAllCameraGroup](GlobalBindGroup.md#getallcameragroup)
- [getCameraGroup](GlobalBindGroup.md#getcameragroup)
- [updateCameraGroup](GlobalBindGroup.md#updatecameragroup)
- [getLightEntries](GlobalBindGroup.md#getlightentries)
- [getReflectionEntries](GlobalBindGroup.md#getreflectionentries)

## Constructors

### constructor

• **new GlobalBindGroup**(): [`GlobalBindGroup`](GlobalBindGroup.md)

#### Returns

[`GlobalBindGroup`](GlobalBindGroup.md)

## Properties

### modelMatrixBindGroup

▪ `Static` **modelMatrixBindGroup**: [`MatrixBindGroup`](MatrixBindGroup.md)

#### Defined in

gfx/graphics/webGpu/core/bindGroups/GlobalBindGroup.ts:12

## Methods

### init

▸ **init**(): `void`

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/core/bindGroups/GlobalBindGroup.ts:14

___

### getAllCameraGroup

▸ **getAllCameraGroup**(): `Map`\<[`Camera3D`](Camera3D.md), [`GlobalUniformGroup`](GlobalUniformGroup.md)\>

#### Returns

`Map`\<[`Camera3D`](Camera3D.md), [`GlobalUniformGroup`](GlobalUniformGroup.md)\>

#### Defined in

gfx/graphics/webGpu/core/bindGroups/GlobalBindGroup.ts:21

___

### getCameraGroup

▸ **getCameraGroup**(`camera`): [`GlobalUniformGroup`](GlobalUniformGroup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `camera` | [`Camera3D`](Camera3D.md) |

#### Returns

[`GlobalUniformGroup`](GlobalUniformGroup.md)

#### Defined in

gfx/graphics/webGpu/core/bindGroups/GlobalBindGroup.ts:25

___

### updateCameraGroup

▸ **updateCameraGroup**(`camera`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `camera` | [`Camera3D`](Camera3D.md) |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/core/bindGroups/GlobalBindGroup.ts:39

___

### getLightEntries

▸ **getLightEntries**(`scene`): [`LightEntries`](LightEntries.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scene` | [`Scene3D`](Scene3D.md) |

#### Returns

[`LightEntries`](LightEntries.md)

#### Defined in

gfx/graphics/webGpu/core/bindGroups/GlobalBindGroup.ts:52

___

### getReflectionEntries

▸ **getReflectionEntries**(`scene`): [`ReflectionEntries`](ReflectionEntries.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scene` | [`Scene3D`](Scene3D.md) |

#### Returns

[`ReflectionEntries`](ReflectionEntries.md)

#### Defined in

gfx/graphics/webGpu/core/bindGroups/GlobalBindGroup.ts:65
