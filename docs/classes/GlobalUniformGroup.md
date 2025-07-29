[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / GlobalUniformGroup

# Class: GlobalUniformGroup

## Table of contents

### Constructors

- [constructor](GlobalUniformGroup.md#constructor)

### Properties

- [uuid](GlobalUniformGroup.md#uuid)
- [usage](GlobalUniformGroup.md#usage)
- [globalBindGroup](GlobalUniformGroup.md#globalbindgroup)
- [uniformGPUBuffer](GlobalUniformGroup.md#uniformgpubuffer)
- [shadowLights](GlobalUniformGroup.md#shadowlights)
- [dirShadowStart](GlobalUniformGroup.md#dirshadowstart)
- [dirShadowEnd](GlobalUniformGroup.md#dirshadowend)
- [pointShadowStart](GlobalUniformGroup.md#pointshadowstart)
- [pointShadowEnd](GlobalUniformGroup.md#pointshadowend)

### Methods

- [createBindGroup](GlobalUniformGroup.md#createbindgroup)
- [setCamera](GlobalUniformGroup.md#setcamera)
- [setShadowCamera](GlobalUniformGroup.md#setshadowcamera)
- [setShadowLight](GlobalUniformGroup.md#setshadowlight)

## Constructors

### constructor

• **new GlobalUniformGroup**(`matrixBindGroup`): [`GlobalUniformGroup`](GlobalUniformGroup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `matrixBindGroup` | [`MatrixBindGroup`](MatrixBindGroup.md) |

#### Returns

[`GlobalUniformGroup`](GlobalUniformGroup.md)

#### Defined in

gfx/graphics/webGpu/core/bindGroups/GlobalUniformGroup.ts:32

## Properties

### uuid

• **uuid**: `string`

#### Defined in

gfx/graphics/webGpu/core/bindGroups/GlobalUniformGroup.ts:16

___

### usage

• **usage**: `number`

#### Defined in

gfx/graphics/webGpu/core/bindGroups/GlobalUniformGroup.ts:17

___

### globalBindGroup

• **globalBindGroup**: `GPUBindGroup`

#### Defined in

gfx/graphics/webGpu/core/bindGroups/GlobalUniformGroup.ts:18

___

### uniformGPUBuffer

• **uniformGPUBuffer**: [`UniformGPUBuffer`](UniformGPUBuffer.md)

#### Defined in

gfx/graphics/webGpu/core/bindGroups/GlobalUniformGroup.ts:19

___

### shadowLights

• **shadowLights**: `Float32Array`\<`ArrayBuffer`\>

#### Defined in

gfx/graphics/webGpu/core/bindGroups/GlobalUniformGroup.ts:26

___

### dirShadowStart

• **dirShadowStart**: `number` = `0`

#### Defined in

gfx/graphics/webGpu/core/bindGroups/GlobalUniformGroup.ts:27

___

### dirShadowEnd

• **dirShadowEnd**: `number` = `0`

#### Defined in

gfx/graphics/webGpu/core/bindGroups/GlobalUniformGroup.ts:28

___

### pointShadowStart

• **pointShadowStart**: `number` = `0`

#### Defined in

gfx/graphics/webGpu/core/bindGroups/GlobalUniformGroup.ts:29

___

### pointShadowEnd

• **pointShadowEnd**: `number` = `0`

#### Defined in

gfx/graphics/webGpu/core/bindGroups/GlobalUniformGroup.ts:30

## Methods

### createBindGroup

▸ **createBindGroup**(): `void`

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/core/bindGroups/GlobalUniformGroup.ts:45

___

### setCamera

▸ **setCamera**(`camera`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `camera` | [`Camera3D`](Camera3D.md) |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/core/bindGroups/GlobalUniformGroup.ts:74

___

### setShadowCamera

▸ **setShadowCamera**(`camera`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `camera` | [`Camera3D`](Camera3D.md) |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/core/bindGroups/GlobalUniformGroup.ts:215

___

### setShadowLight

▸ **setShadowLight**(): `void`

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/core/bindGroups/GlobalUniformGroup.ts:310
