[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / GUIAtlasTexture

# Class: GUIAtlasTexture

## Table of contents

### Constructors

- [constructor](GUIAtlasTexture.md#constructor)

### Properties

- [textureSize](GUIAtlasTexture.md#texturesize)
- [name](GUIAtlasTexture.md#name)

### Accessors

- [spriteList](GUIAtlasTexture.md#spritelist)

### Methods

- [setTexture](GUIAtlasTexture.md#settexture)
- [getSprite](GUIAtlasTexture.md#getsprite)

## Constructors

### constructor

• **new GUIAtlasTexture**(`size`): [`GUIAtlasTexture`](GUIAtlasTexture.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `Object` |
| `size.x` | `number` |
| `size.y` | `number` |

#### Returns

[`GUIAtlasTexture`](GUIAtlasTexture.md)

#### Defined in

components/gui/core/GUIAtlasTexture.ts:12

## Properties

### textureSize

• `Readonly` **textureSize**: [`Vector2`](Vector2.md)

#### Defined in

components/gui/core/GUIAtlasTexture.ts:9

___

### name

• **name**: `string`

#### Defined in

components/gui/core/GUIAtlasTexture.ts:10

## Accessors

### spriteList

• `get` **spriteList**(): [`GUISprite`](GUISprite.md)[]

#### Returns

[`GUISprite`](GUISprite.md)[]

#### Defined in

components/gui/core/GUIAtlasTexture.ts:31

## Methods

### setTexture

▸ **setTexture**(`srcTexture`, `id`, `detail`): [`GUISprite`](GUISprite.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `srcTexture` | [`GUITexture`](GUITexture.md) |
| `id` | `string` |
| `detail` | `any` |

#### Returns

[`GUISprite`](GUISprite.md)

#### Defined in

components/gui/core/GUIAtlasTexture.ts:16

___

### getSprite

▸ **getSprite**(`id`): [`GUISprite`](GUISprite.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

[`GUISprite`](GUISprite.md)

#### Defined in

components/gui/core/GUIAtlasTexture.ts:27
