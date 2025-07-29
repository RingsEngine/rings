[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / IESProfiles

# Class: IESProfiles

## Table of contents

### Constructors

- [constructor](IESProfiles.md#constructor)

### Properties

- [use](IESProfiles.md#use)
- [iesTexture](IESProfiles.md#iestexture)
- [ies\_list](IESProfiles.md#ies_list)
- [index](IESProfiles.md#index)

### Accessors

- [IESTexture](IESProfiles.md#iestexture-1)

### Methods

- [create](IESProfiles.md#create)

## Constructors

### constructor

• **new IESProfiles**(): [`IESProfiles`](IESProfiles.md)

#### Returns

[`IESProfiles`](IESProfiles.md)

#### Defined in

components/lights/IESProfiles.ts:12

## Properties

### use

▪ `Static` **use**: `boolean` = `false`

#### Defined in

components/lights/IESProfiles.ts:7

___

### iesTexture

▪ `Static` **iesTexture**: [`BitmapTexture2DArray`](BitmapTexture2DArray.md)

#### Defined in

components/lights/IESProfiles.ts:8

___

### ies\_list

▪ `Static` **ies\_list**: [`IESProfiles`](IESProfiles.md)[] = `[]`

#### Defined in

components/lights/IESProfiles.ts:9

___

### index

• **index**: `number` = `0`

#### Defined in

components/lights/IESProfiles.ts:11

## Accessors

### IESTexture

• `get` **IESTexture**(): [`Texture`](Texture.md)

#### Returns

[`Texture`](Texture.md)

#### Defined in

components/lights/IESProfiles.ts:33

• `set` **IESTexture**(`texture`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `texture` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Defined in

components/lights/IESProfiles.ts:18

## Methods

### create

▸ **create**(`width`, `height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `height` | `number` |

#### Returns

`void`

#### Defined in

components/lights/IESProfiles.ts:37
