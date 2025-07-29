[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / MaterialUtilities

# Class: MaterialUtilities

## Table of contents

### Constructors

- [constructor](MaterialUtilities.md#constructor)

### Methods

- [GetMaterial](MaterialUtilities.md#getmaterial)
- [applyMaterialTexture](MaterialUtilities.md#applymaterialtexture)
- [applyMaterialProperties](MaterialUtilities.md#applymaterialproperties)

## Constructors

### constructor

• **new MaterialUtilities**(): [`MaterialUtilities`](MaterialUtilities.md)

#### Returns

[`MaterialUtilities`](MaterialUtilities.md)

## Methods

### GetMaterial

▸ **GetMaterial**(`shaderName`): [`Material`](Material.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `shaderName` | `string` |

#### Returns

[`Material`](Material.md)

#### Defined in

loader/parser/prefab/mats/MaterialUtilities.ts:9

___

### applyMaterialTexture

▸ **applyMaterialTexture**(`mat`, `textures`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mat` | [`Material`](Material.md) |
| `textures` | [`PrefabTextureData`](PrefabTextureData.md)[] |

#### Returns

`void`

#### Defined in

loader/parser/prefab/mats/MaterialUtilities.ts:26

___

### applyMaterialProperties

▸ **applyMaterialProperties**(`mat`, `properties`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mat` | [`Material`](Material.md) |
| `properties` | [`KV`](KV.md)[] |

#### Returns

`void`

#### Defined in

loader/parser/prefab/mats/MaterialUtilities.ts:42
