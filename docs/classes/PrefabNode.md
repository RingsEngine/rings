[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / PrefabNode

# Class: PrefabNode

## Table of contents

### Constructors

- [constructor](PrefabNode.md#constructor)

### Properties

- [name](PrefabNode.md#name)
- [parentName](PrefabNode.md#parentname)
- [position](PrefabNode.md#position)
- [rotation](PrefabNode.md#rotation)
- [scale](PrefabNode.md#scale)
- [comDatas](PrefabNode.md#comdatas)
- [child](PrefabNode.md#child)

### Methods

- [parser](PrefabNode.md#parser)

## Constructors

### constructor

• **new PrefabNode**(): [`PrefabNode`](PrefabNode.md)

#### Returns

[`PrefabNode`](PrefabNode.md)

## Properties

### name

• **name**: `string`

#### Defined in

loader/parser/prefab/prefabData/PrefabNode.ts:28

___

### parentName

• **parentName**: `string`

#### Defined in

loader/parser/prefab/prefabData/PrefabNode.ts:29

___

### position

• **position**: [`Vector3`](Vector3.md)

#### Defined in

loader/parser/prefab/prefabData/PrefabNode.ts:30

___

### rotation

• **rotation**: [`Quaternion`](Quaternion.md)

#### Defined in

loader/parser/prefab/prefabData/PrefabNode.ts:31

___

### scale

• **scale**: [`Vector3`](Vector3.md)

#### Defined in

loader/parser/prefab/prefabData/PrefabNode.ts:32

___

### comDatas

• **comDatas**: [`ComData`](ComData.md)[]

#### Defined in

loader/parser/prefab/prefabData/PrefabNode.ts:33

___

### child

• **child**: [`PrefabNode`](PrefabNode.md)[]

#### Defined in

loader/parser/prefab/prefabData/PrefabNode.ts:34

## Methods

### parser

▸ **parser**(`bytesArray`): [`PrefabNode`](PrefabNode.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytesArray` | [`BytesArray`](BytesArray.md) |

#### Returns

[`PrefabNode`](PrefabNode.md)

#### Defined in

loader/parser/prefab/prefabData/PrefabNode.ts:36
