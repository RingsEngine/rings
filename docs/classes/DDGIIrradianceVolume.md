[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / DDGIIrradianceVolume

# Class: DDGIIrradianceVolume

## Table of contents

### Constructors

- [constructor](DDGIIrradianceVolume.md#constructor)

### Properties

- [setting](DDGIIrradianceVolume.md#setting)
- [probesBufferData](DDGIIrradianceVolume.md#probesbufferdata)
- [probesBuffer](DDGIIrradianceVolume.md#probesbuffer)
- [isVolumeFrameChange](DDGIIrradianceVolume.md#isvolumeframechange)
- [irradianceVolumeBuffer](DDGIIrradianceVolume.md#irradiancevolumebuffer)

### Methods

- [updateOrientation](DDGIIrradianceVolume.md#updateorientation)
- [init](DDGIIrradianceVolume.md#init)
- [setVolumeDataChange](DDGIIrradianceVolume.md#setvolumedatachange)
- [updateProbes](DDGIIrradianceVolume.md#updateprobes)
- [uploadBuffer](DDGIIrradianceVolume.md#uploadbuffer)
- [calcPosition](DDGIIrradianceVolume.md#calcposition)

## Constructors

### constructor

• **new DDGIIrradianceVolume**(): [`DDGIIrradianceVolume`](DDGIIrradianceVolume.md)

#### Returns

[`DDGIIrradianceVolume`](DDGIIrradianceVolume.md)

## Properties

### setting

• **setting**: [`GlobalIlluminationSetting`](../modules.md#globalilluminationsetting)

#### Defined in

gfx/renderJob/passRenderer/ddgi/DDGIIrradianceVolume.ts:9

___

### probesBufferData

• **probesBufferData**: `Float32Array`\<`ArrayBufferLike`\>

#### Defined in

gfx/renderJob/passRenderer/ddgi/DDGIIrradianceVolume.ts:10

___

### probesBuffer

• **probesBuffer**: [`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Defined in

gfx/renderJob/passRenderer/ddgi/DDGIIrradianceVolume.ts:11

___

### isVolumeFrameChange

• **isVolumeFrameChange**: `boolean` = `true`

#### Defined in

gfx/renderJob/passRenderer/ddgi/DDGIIrradianceVolume.ts:12

___

### irradianceVolumeBuffer

• **irradianceVolumeBuffer**: [`UniformGPUBuffer`](UniformGPUBuffer.md)

#### Defined in

gfx/renderJob/passRenderer/ddgi/DDGIIrradianceVolume.ts:16

## Methods

### updateOrientation

▸ **updateOrientation**(): [`Matrix4`](Matrix4.md)

#### Returns

[`Matrix4`](Matrix4.md)

#### Defined in

gfx/renderJob/passRenderer/ddgi/DDGIIrradianceVolume.ts:27

___

### init

▸ **init**(`setting`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `setting` | [`GlobalIlluminationSetting`](../modules.md#globalilluminationsetting) |

#### Returns

`void`

#### Defined in

gfx/renderJob/passRenderer/ddgi/DDGIIrradianceVolume.ts:39

___

### setVolumeDataChange

▸ **setVolumeDataChange**(): `void`

#### Returns

`void`

#### Defined in

gfx/renderJob/passRenderer/ddgi/DDGIIrradianceVolume.ts:59

___

### updateProbes

▸ **updateProbes**(`probes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `probes` | [`Probe`](Probe.md)[] |

#### Returns

`void`

#### Defined in

gfx/renderJob/passRenderer/ddgi/DDGIIrradianceVolume.ts:63

___

### uploadBuffer

▸ **uploadBuffer**(): `void`

#### Returns

`void`

#### Defined in

gfx/renderJob/passRenderer/ddgi/DDGIIrradianceVolume.ts:86

___

### calcPosition

▸ **calcPosition**(`x`, `y`, `z`, `result?`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |
| `result?` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

gfx/renderJob/passRenderer/ddgi/DDGIIrradianceVolume.ts:98
