[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / ErpImage2CubeMap

# Class: ErpImage2CubeMap

## Table of contents

### Constructors

- [constructor](ErpImage2CubeMap.md#constructor)

### Methods

- [convertRGBE2RGBA](ErpImage2CubeMap.md#convertrgbe2rgba)
- [makeTextureCube](ErpImage2CubeMap.md#maketexturecube)

## Constructors

### constructor

• **new ErpImage2CubeMap**(): [`ErpImage2CubeMap`](ErpImage2CubeMap.md)

#### Returns

[`ErpImage2CubeMap`](ErpImage2CubeMap.md)

## Methods

### convertRGBE2RGBA

▸ **convertRGBE2RGBA**(`image`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `image` | [`VirtualTexture`](VirtualTexture.md) |
| `data` | `Float32Array`\<`ArrayBufferLike`\> |

#### Returns

`void`

#### Defined in

gfx/generate/convert/ErpImage2CubeMap.ts:10

___

### makeTextureCube

▸ **makeTextureCube**(`image`, `dstSize`, `dstView`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `image` | [`Texture`](Texture.md) |
| `dstSize` | `number` |
| `dstView` | `GPUTextureView` |

#### Returns

`void`

#### Defined in

gfx/generate/convert/ErpImage2CubeMap.ts:90
