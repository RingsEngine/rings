[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / GLTFSubParser

# Class: GLTFSubParser

## Table of contents

### Constructors

- [constructor](GLTFSubParser.md#constructor)

### Properties

- [currentSceneName](GLTFSubParser.md#currentscenename)
- [gltf](GLTFSubParser.md#gltf)
- [initUrl](GLTFSubParser.md#initurl)

### Accessors

- [version](GLTFSubParser.md#version)

### Methods

- [parse](GLTFSubParser.md#parse)
- [destroy](GLTFSubParser.md#destroy)
- [parseTexture](GLTFSubParser.md#parsetexture)
- [parseMaterial](GLTFSubParser.md#parsematerial)
- [parseSkeleton](GLTFSubParser.md#parseskeleton)
- [parseSkeletonAnimation](GLTFSubParser.md#parseskeletonanimation)
- [parseAccessor](GLTFSubParser.md#parseaccessor)
- [parseBufferView](GLTFSubParser.md#parsebufferview)

## Constructors

### constructor

• **new GLTFSubParser**(): [`GLTFSubParser`](GLTFSubParser.md)

#### Returns

[`GLTFSubParser`](GLTFSubParser.md)

#### Defined in

loader/parser/gltf/GLTFSubParser.ts:30

## Properties

### currentSceneName

• **currentSceneName**: `any`

#### Defined in

loader/parser/gltf/GLTFSubParser.ts:17

___

### gltf

• **gltf**: [`GLTF_Info`](GLTF_Info.md)

#### Defined in

loader/parser/gltf/GLTFSubParser.ts:18

___

### initUrl

• **initUrl**: `string`

#### Defined in

loader/parser/gltf/GLTFSubParser.ts:19

## Accessors

### version

• `get` **version**(): `any`

#### Returns

`any`

#### Defined in

loader/parser/gltf/GLTFSubParser.ts:32

## Methods

### parse

▸ **parse**(`initUrl`, `gltf`, `sceneId`): `Promise`\<``false`` \| \{ `rootNode`: [`Object3D`](Object3D.md) ; `textures`: `any`[] ; `animations`: `any` = animas; `cameras`: `any`[]  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `initUrl` | `string` |
| `gltf` | `any` |
| `sceneId` | `any` |

#### Returns

`Promise`\<``false`` \| \{ `rootNode`: [`Object3D`](Object3D.md) ; `textures`: `any`[] ; `animations`: `any` = animas; `cameras`: `any`[]  }\>

#### Defined in

loader/parser/gltf/GLTFSubParser.ts:48

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

loader/parser/gltf/GLTFSubParser.ts:69

___

### parseTexture

▸ **parseTexture**(`index`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`Promise`\<`any`\>

#### Defined in

loader/parser/gltf/GLTFSubParser.ts:156

___

### parseMaterial

▸ **parseMaterial**(`materialId`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `materialId` | `any` |

#### Returns

`Promise`\<`any`\>

#### Defined in

loader/parser/gltf/GLTFSubParser.ts:185

___

### parseSkeleton

▸ **parseSkeleton**(`skeletonID`): [`PrefabAvatarData`](PrefabAvatarData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `skeletonID` | `number` |

#### Returns

[`PrefabAvatarData`](PrefabAvatarData.md)

#### Defined in

loader/parser/gltf/GLTFSubParser.ts:204

___

### parseSkeletonAnimation

▸ **parseSkeletonAnimation**(`avatarData`, `animation`): [`PropertyAnimationClip`](PropertyAnimationClip.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `avatarData` | [`PrefabAvatarData`](PrefabAvatarData.md) |
| `animation` | `any` |

#### Returns

[`PropertyAnimationClip`](PropertyAnimationClip.md)

#### Defined in

loader/parser/gltf/GLTFSubParser.ts:211

___

### parseAccessor

▸ **parseAccessor**(`accessorId`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessorId` | `any` |

#### Returns

`any`

#### Defined in

loader/parser/gltf/GLTFSubParser.ts:255

___

### parseBufferView

▸ **parseBufferView**(`bufferViewId`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bufferViewId` | `any` |

#### Returns

`any`

#### Defined in

loader/parser/gltf/GLTFSubParser.ts:398
