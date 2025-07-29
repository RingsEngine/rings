[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / KDTreeEntity

# Class: KDTreeEntity

## Hierarchy

- [`KDTreeUUID`](KDTreeUUID.md)

  ↳ **`KDTreeEntity`**

## Table of contents

### Constructors

- [constructor](KDTreeEntity.md#constructor)

### Properties

- [userData](KDTreeEntity.md#userdata)
- [node](KDTreeEntity.md#node)
- [uuid](KDTreeEntity.md#uuid)

### Methods

- [centerValue](KDTreeEntity.md#centervalue)
- [isInNode](KDTreeEntity.md#isinnode)
- [entityContainPoint](KDTreeEntity.md#entitycontainpoint)
- [squareDistanceTo](KDTreeEntity.md#squaredistanceto)
- [entityIntersectsBox](KDTreeEntity.md#entityintersectsbox)
- [entityIntersectsRay](KDTreeEntity.md#entityintersectsray)
- [attachTreeNode](KDTreeEntity.md#attachtreenode)
- [detachTreeNode](KDTreeEntity.md#detachtreenode)
- [updateNode](KDTreeEntity.md#updatenode)

## Constructors

### constructor

• **new KDTreeEntity**(`data`): [`KDTreeEntity`](KDTreeEntity.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IKDTreeUserData`](IKDTreeUserData.md) |

#### Returns

[`KDTreeEntity`](KDTreeEntity.md)

#### Overrides

[KDTreeUUID](KDTreeUUID.md).[constructor](KDTreeUUID.md#constructor)

#### Defined in

core/tree/kdTree/KDTreeEntity.ts:14

## Properties

### userData

• `Readonly` **userData**: [`IKDTreeUserData`](IKDTreeUserData.md)

#### Defined in

core/tree/kdTree/KDTreeEntity.ts:11

___

### node

• **node**: [`KDTreeNode`](KDTreeNode.md)

#### Defined in

core/tree/kdTree/KDTreeEntity.ts:12

___

### uuid

• `Readonly` **uuid**: `string` = `"0"`

#### Inherited from

[KDTreeUUID](KDTreeUUID.md).[uuid](KDTreeUUID.md#uuid)

#### Defined in

core/tree/kdTree/KDTreeNode.ts:22

## Methods

### centerValue

▸ **centerValue**(`dimension`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dimension` | `string` |

#### Returns

`number`

#### Defined in

core/tree/kdTree/KDTreeEntity.ts:19

___

### isInNode

▸ **isInNode**(`node`, `dimension`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`KDTreeNode`](KDTreeNode.md) |
| `dimension` | `string` |

#### Returns

`boolean`

#### Defined in

core/tree/kdTree/KDTreeEntity.ts:23

___

### entityContainPoint

▸ **entityContainPoint**(`point`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `Object` |

#### Returns

`boolean`

#### Defined in

core/tree/kdTree/KDTreeEntity.ts:27

___

### squareDistanceTo

▸ **squareDistanceTo**(`point`, `dimensions`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | `Object` |
| `dimensions` | `string`[] |

#### Returns

`number`

#### Defined in

core/tree/kdTree/KDTreeEntity.ts:31

___

### entityIntersectsBox

▸ **entityIntersectsBox**(`box`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `box` | [`BoundingBox`](BoundingBox.md) |

#### Returns

`boolean`

#### Defined in

core/tree/kdTree/KDTreeEntity.ts:38

___

### entityIntersectsRay

▸ **entityIntersectsRay**(`ray`, `target`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ray` | [`Ray`](Ray.md) |
| `target` | [`Vector3`](Vector3.md) |

#### Returns

`boolean`

#### Defined in

core/tree/kdTree/KDTreeEntity.ts:42

___

### attachTreeNode

▸ **attachTreeNode**(`node`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`KDTreeNode`](KDTreeNode.md) |

#### Returns

`boolean`

#### Defined in

core/tree/kdTree/KDTreeEntity.ts:46

___

### detachTreeNode

▸ **detachTreeNode**(): `boolean`

#### Returns

`boolean`

#### Defined in

core/tree/kdTree/KDTreeEntity.ts:52

___

### updateNode

▸ **updateNode**(`root`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `root` | [`KDTreeNode`](KDTreeNode.md) |

#### Returns

`void`

#### Defined in

core/tree/kdTree/KDTreeEntity.ts:58
