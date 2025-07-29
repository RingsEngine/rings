[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / GLTFSubParserSkeleton

# Class: GLTFSubParserSkeleton

## Table of contents

### Constructors

- [constructor](GLTFSubParserSkeleton.md#constructor)

### Properties

- [gltf](GLTFSubParserSkeleton.md#gltf)
- [subParser](GLTFSubParserSkeleton.md#subparser)

### Methods

- [parse](GLTFSubParserSkeleton.md#parse)
- [parseSkeletonAnimation](GLTFSubParserSkeleton.md#parseskeletonanimation)
- [parseSkeletonAnimationOld](GLTFSubParserSkeleton.md#parseskeletonanimationold)

## Constructors

### constructor

• **new GLTFSubParserSkeleton**(`subParser`): [`GLTFSubParserSkeleton`](GLTFSubParserSkeleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `subParser` | [`GLTFSubParser`](GLTFSubParser.md) |

#### Returns

[`GLTFSubParserSkeleton`](GLTFSubParserSkeleton.md)

#### Defined in

loader/parser/gltf/GLTFSubParserSkeleton.ts:21

## Properties

### gltf

• `Protected` **gltf**: [`GLTF_Info`](GLTF_Info.md)

#### Defined in

loader/parser/gltf/GLTFSubParserSkeleton.ts:18

___

### subParser

• `Protected` **subParser**: [`GLTFSubParser`](GLTFSubParser.md)

#### Defined in

loader/parser/gltf/GLTFSubParserSkeleton.ts:19

## Methods

### parse

▸ **parse**(`skeletonID`): [`PrefabAvatarData`](PrefabAvatarData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `skeletonID` | `number` |

#### Returns

[`PrefabAvatarData`](PrefabAvatarData.md)

#### Defined in

loader/parser/gltf/GLTFSubParserSkeleton.ts:26

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

loader/parser/gltf/GLTFSubParserSkeleton.ts:36

___

### parseSkeletonAnimationOld

▸ **parseSkeletonAnimationOld**(`skeleton`, `animation`): [`SkeletonAnimationClip`](SkeletonAnimationClip.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `skeleton` | [`Skeleton`](Skeleton.md) |
| `animation` | `any` |

#### Returns

[`SkeletonAnimationClip`](SkeletonAnimationClip.md)

#### Defined in

loader/parser/gltf/GLTFSubParserSkeleton.ts:162
