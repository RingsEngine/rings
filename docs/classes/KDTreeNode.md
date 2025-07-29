[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / KDTreeNode

# Class: KDTreeNode

## Hierarchy

- [`KDTreeUUID`](KDTreeUUID.md)

  ↳ **`KDTreeNode`**

## Table of contents

### Constructors

- [constructor](KDTreeNode.md#constructor)

### Properties

- [uuid](KDTreeNode.md#uuid)
- [\_dimensionIndex](KDTreeNode.md#_dimensionindex)
- [\_dimensions](KDTreeNode.md#_dimensions)
- [\_dimension](KDTreeNode.md#_dimension)
- [\_left](KDTreeNode.md#_left)
- [\_right](KDTreeNode.md#_right)
- [\_space](KDTreeNode.md#_space)
- [\_parent](KDTreeNode.md#_parent)
- [\_entities](KDTreeNode.md#_entities)
- [layer](KDTreeNode.md#layer)
- [nodeCount](KDTreeNode.md#nodecount)

### Accessors

- [dimension](KDTreeNode.md#dimension)

### Methods

- [initNode](KDTreeNode.md#initnode)
- [updateEntity](KDTreeNode.md#updateentity)
- [buildRoot](KDTreeNode.md#buildroot)
- [autoSplit](KDTreeNode.md#autosplit)
- [setSpace](KDTreeNode.md#setspace)
- [isEmpty](KDTreeNode.md#isempty)
- [pushEntity](KDTreeNode.md#pushentity)
- [removeEntity](KDTreeNode.md#removeentity)
- [autoClear](KDTreeNode.md#autoclear)
- [clearLeaf](KDTreeNode.md#clearleaf)
- [isContain](KDTreeNode.md#iscontain)
- [nodeIntersectsBox](KDTreeNode.md#nodeintersectsbox)
- [nodeIntersectsRay](KDTreeNode.md#nodeintersectsray)
- [pointCast](KDTreeNode.md#pointcast)
- [boxCast](KDTreeNode.md#boxcast)
- [rayCast](KDTreeNode.md#raycast)

## Constructors

### constructor

• **new KDTreeNode**(`layer?`): [`KDTreeNode`](KDTreeNode.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `layer` | `number` | `0` |

#### Returns

[`KDTreeNode`](KDTreeNode.md)

#### Overrides

[KDTreeUUID](KDTreeUUID.md).[constructor](KDTreeUUID.md#constructor)

#### Defined in

core/tree/kdTree/KDTreeNode.ts:79

## Properties

### uuid

• `Readonly` **uuid**: `string` = `"0"`

#### Inherited from

[KDTreeUUID](KDTreeUUID.md).[uuid](KDTreeUUID.md#uuid)

#### Defined in

core/tree/kdTree/KDTreeNode.ts:22

___

### \_dimensionIndex

• `Protected` **\_dimensionIndex**: `number` = `0`

#### Defined in

core/tree/kdTree/KDTreeNode.ts:63

___

### \_dimensions

• `Protected` **\_dimensions**: `string`[]

#### Defined in

core/tree/kdTree/KDTreeNode.ts:64

___

### \_dimension

• `Protected` **\_dimension**: `string`

#### Defined in

core/tree/kdTree/KDTreeNode.ts:65

___

### \_left

• `Protected` **\_left**: [`KDTreeNode`](KDTreeNode.md)

#### Defined in

core/tree/kdTree/KDTreeNode.ts:67

___

### \_right

• `Protected` **\_right**: [`KDTreeNode`](KDTreeNode.md)

#### Defined in

core/tree/kdTree/KDTreeNode.ts:68

___

### \_space

• `Protected` **\_space**: [`KDTreeSpace`](KDTreeSpace.md)

#### Defined in

core/tree/kdTree/KDTreeNode.ts:70

___

### \_parent

• `Protected` **\_parent**: [`KDTreeNode`](KDTreeNode.md)

#### Defined in

core/tree/kdTree/KDTreeNode.ts:71

___

### \_entities

• `Protected` **\_entities**: `KDTreeNodeMap`

#### Defined in

core/tree/kdTree/KDTreeNode.ts:72

___

### layer

• `Protected` `Readonly` **layer**: `any`

#### Defined in

core/tree/kdTree/KDTreeNode.ts:73

___

### nodeCount

▪ `Static` **nodeCount**: `number` = `0`

#### Defined in

core/tree/kdTree/KDTreeNode.ts:185

## Accessors

### dimension

• `get` **dimension**(): `string`

#### Returns

`string`

#### Defined in

core/tree/kdTree/KDTreeNode.ts:75

## Methods

### initNode

▸ **initNode**(`parent`, `dimensions`, `index`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`KDTreeNode`](KDTreeNode.md) |
| `dimensions` | `string`[] |
| `index` | `number` |

#### Returns

`this`

#### Defined in

core/tree/kdTree/KDTreeNode.ts:86

___

### updateEntity

▸ **updateEntity**(`entity`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | [`KDTreeEntity`](KDTreeEntity.md) |

#### Returns

`void`

#### Defined in

core/tree/kdTree/KDTreeNode.ts:101

___

### buildRoot

▸ **buildRoot**(`list`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `list` | [`IKDTreeUserData`](IKDTreeUserData.md)[] |

#### Returns

`void`

#### Defined in

core/tree/kdTree/KDTreeNode.ts:117

___

### autoSplit

▸ **autoSplit**(): `void`

#### Returns

`void`

#### Defined in

core/tree/kdTree/KDTreeNode.ts:125

___

### setSpace

▸ **setSpace**(`less`, `value`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `less` | `boolean` |
| `value` | `number` |

#### Returns

`this`

#### Defined in

core/tree/kdTree/KDTreeNode.ts:164

___

### isEmpty

▸ **isEmpty**(): `boolean`

#### Returns

`boolean`

#### Defined in

core/tree/kdTree/KDTreeNode.ts:171

___

### pushEntity

▸ **pushEntity**(`entity`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | [`KDTreeEntity`](KDTreeEntity.md) |

#### Returns

`boolean`

#### Defined in

core/tree/kdTree/KDTreeNode.ts:177

___

### removeEntity

▸ **removeEntity**(`entity`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `entity` | [`KDTreeEntity`](KDTreeEntity.md) |

#### Returns

`boolean`

#### Defined in

core/tree/kdTree/KDTreeNode.ts:181

___

### autoClear

▸ **autoClear**(): `void`

#### Returns

`void`

#### Defined in

core/tree/kdTree/KDTreeNode.ts:186

___

### clearLeaf

▸ **clearLeaf**(): `boolean`

#### Returns

`boolean`

#### Defined in

core/tree/kdTree/KDTreeNode.ts:197

___

### isContain

▸ **isContain**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`boolean`

#### Defined in

core/tree/kdTree/KDTreeNode.ts:208

___

### nodeIntersectsBox

▸ **nodeIntersectsBox**(`box`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `box` | [`BoundingBox`](BoundingBox.md) |

#### Returns

`boolean`

#### Defined in

core/tree/kdTree/KDTreeNode.ts:216

___

### nodeIntersectsRay

▸ **nodeIntersectsRay**(`ray`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ray` | [`Ray`](Ray.md) |

#### Returns

`boolean`

#### Defined in

core/tree/kdTree/KDTreeNode.ts:226

___

### pointCast

▸ **pointCast**(`point`, `squareDistance?`, `ret?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `point` | `Object` | `undefined` |
| `squareDistance` | `number` | `0` |
| `ret?` | [`KDTreeEntity`](KDTreeEntity.md)[] | `undefined` |

#### Returns

`void`

#### Defined in

core/tree/kdTree/KDTreeNode.ts:237

___

### boxCast

▸ **boxCast**(`box`, `ret?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `box` | [`BoundingBox`](BoundingBox.md) |
| `ret?` | [`KDTreeEntity`](KDTreeEntity.md)[] |

#### Returns

`void`

#### Defined in

core/tree/kdTree/KDTreeNode.ts:266

___

### rayCast

▸ **rayCast**(`ray`, `ret?`, `pts?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ray` | [`Ray`](Ray.md) |
| `ret?` | [`KDTreeEntity`](KDTreeEntity.md)[] |
| `pts?` | [`Vector3`](Vector3.md)[] |

#### Returns

`void`

#### Defined in

core/tree/kdTree/KDTreeNode.ts:288
