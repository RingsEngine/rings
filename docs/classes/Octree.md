[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / Octree

# Class: Octree

## Table of contents

### Constructors

- [constructor](Octree.md#constructor)

### Properties

- [entities](Octree.md#entities)
- [box](Octree.md#box)
- [subTrees](Octree.md#subtrees)
- [parent](Octree.md#parent)
- [level](Octree.md#level)
- [maxSplitLevel](Octree.md#maxsplitlevel)
- [index](Octree.md#index)
- [uuid](Octree.md#uuid)
- [\_\_rayCastTempVector](Octree.md#__raycasttempvector)

### Methods

- [tryInsertEntity](Octree.md#tryinsertentity)
- [rayCasts](Octree.md#raycasts)
- [frustumCasts](Octree.md#frustumcasts)
- [getRenderNode](Octree.md#getrendernode)
- [boxCasts](Octree.md#boxcasts)
- [clean](Octree.md#clean)

## Constructors

### constructor

• **new Octree**(`size`, `index?`, `parent?`, `level?`): [`Octree`](Octree.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `size` | [`BoundingBox`](BoundingBox.md) | `undefined` |
| `index` | `number` | `0` |
| `parent` | [`Octree`](Octree.md) | `null` |
| `level` | `number` | `0` |

#### Returns

[`Octree`](Octree.md)

#### Defined in

core/tree/octree/Octree.ts:21

## Properties

### entities

• `Readonly` **entities**: `Map`\<`string`, [`OctreeEntity`](OctreeEntity.md)\>

#### Defined in

core/tree/octree/Octree.ts:11

___

### box

• `Readonly` **box**: [`BoundingBox`](BoundingBox.md)

#### Defined in

core/tree/octree/Octree.ts:12

___

### subTrees

• `Readonly` **subTrees**: [`Octree`](Octree.md)[] = `[]`

#### Defined in

core/tree/octree/Octree.ts:13

___

### parent

• `Readonly` **parent**: [`Octree`](Octree.md)

#### Defined in

core/tree/octree/Octree.ts:14

___

### level

• `Readonly` **level**: `number`

#### Defined in

core/tree/octree/Octree.ts:15

___

### maxSplitLevel

▪ `Static` `Readonly` **maxSplitLevel**: ``6``

#### Defined in

core/tree/octree/Octree.ts:16

___

### index

• `Readonly` **index**: `number`

#### Defined in

core/tree/octree/Octree.ts:18

___

### uuid

• `Readonly` **uuid**: `string`

#### Defined in

core/tree/octree/Octree.ts:19

___

### \_\_rayCastTempVector

• **\_\_rayCastTempVector**: [`Vector3`](Vector3.md)

#### Defined in

core/tree/octree/Octree.ts:83

## Methods

### tryInsertEntity

▸ **tryInsertEntity**(`entity`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | [`OctreeEntity`](OctreeEntity.md) |

#### Returns

`boolean`

#### Defined in

core/tree/octree/Octree.ts:35

___

### rayCasts

▸ **rayCasts**(`ray`, `ret`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ray` | [`Ray`](Ray.md) |
| `ret` | [`OctreeEntity`](OctreeEntity.md)[] |

#### Returns

`boolean`

#### Defined in

core/tree/octree/Octree.ts:84

___

### frustumCasts

▸ **frustumCasts**(`frustum`, `ret`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `frustum` | [`Frustum`](Frustum.md) |
| `ret` | [`OctreeEntity`](OctreeEntity.md)[] |

#### Returns

`boolean`

#### Defined in

core/tree/octree/Octree.ts:100

___

### getRenderNode

▸ **getRenderNode**(`frustum`, `ret`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `frustum` | [`Frustum`](Frustum.md) |
| `ret` | [`CollectInfo`](CollectInfo.md) |

#### Returns

`boolean`

#### Defined in

core/tree/octree/Octree.ts:120

___

### boxCasts

▸ **boxCasts**(`box`, `ret`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `box` | [`BoundingBox`](BoundingBox.md) |
| `ret` | [`OctreeEntity`](OctreeEntity.md)[] |

#### Returns

`boolean`

#### Defined in

core/tree/octree/Octree.ts:144

___

### clean

▸ **clean**(): `this`

#### Returns

`this`

#### Defined in

core/tree/octree/Octree.ts:157
