[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / TextureCubeFaceData

# Class: TextureCubeFaceData

## Table of contents

### Constructors

- [constructor](TextureCubeFaceData.md#constructor)

### Properties

- [faceTextureRef](TextureCubeFaceData.md#facetextureref)

### Methods

- [uploadTexture](TextureCubeFaceData.md#uploadtexture)
- [uploadErpTexture](TextureCubeFaceData.md#uploaderptexture)
- [getGpuSource](TextureCubeFaceData.md#getgpusource)

## Constructors

### constructor

• **new TextureCubeFaceData**(`texture`): [`TextureCubeFaceData`](TextureCubeFaceData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | [`Texture`](Texture.md) |

#### Returns

[`TextureCubeFaceData`](TextureCubeFaceData.md)

#### Defined in

textures/TextureCubeFaceData.ts:11

## Properties

### faceTextureRef

• **faceTextureRef**: `Object`

#### Index signature

▪ [key: `string`]: \{ `t`: `GPUTexture` ; `v`: `GPUTextureView`  }

#### Defined in

textures/TextureCubeFaceData.ts:6

## Methods

### uploadTexture

▸ **uploadTexture**(`mip`, `texture`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mip` | `number` |
| `texture` | [`Texture`](Texture.md) |

#### Returns

`this`

#### Defined in

textures/TextureCubeFaceData.ts:16

___

### uploadErpTexture

▸ **uploadErpTexture**(`texture`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | [`Texture`](Texture.md) |

#### Returns

`this`

#### Defined in

textures/TextureCubeFaceData.ts:22

___

### getGpuSource

▸ **getGpuSource**(`mip`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mip` | `number` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `t` | `GPUTexture` |
| `v` | `GPUTextureView` |

#### Defined in

textures/TextureCubeFaceData.ts:29
