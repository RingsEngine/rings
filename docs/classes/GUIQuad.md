[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / GUIQuad

# Class: GUIQuad

图形界面最小单位

## Table of contents

### Constructors

- [constructor](GUIQuad.md#constructor)

### Properties

- [x](GUIQuad.md#x)
- [y](GUIQuad.md#y)
- [z](GUIQuad.md#z)
- [width](GUIQuad.md#width)
- [height](GUIQuad.md#height)
- [\_sprite](GUIQuad.md#_sprite)
- [dirtyAttributes](GUIQuad.md#dirtyattributes)
- [cacheTextureId](GUIQuad.md#cachetextureid)

### Accessors

- [quadPool](GUIQuad.md#quadpool)
- [imageType](GUIQuad.md#imagetype)
- [color](GUIQuad.md#color)
- [visible](GUIQuad.md#visible)
- [sprite](GUIQuad.md#sprite)
- [left](GUIQuad.md#left)
- [right](GUIQuad.md#right)
- [top](GUIQuad.md#top)
- [bottom](GUIQuad.md#bottom)

### Methods

- [recycleQuad](GUIQuad.md#recyclequad)
- [spawnQuad](GUIQuad.md#spawnquad)
- [setSize](GUIQuad.md#setsize)
- [setXY](GUIQuad.md#setxy)
- [setAttrChange](GUIQuad.md#setattrchange)
- [applyTransform](GUIQuad.md#applytransform)
- [writeToGeometry](GUIQuad.md#writetogeometry)

## Constructors

### constructor

• **new GUIQuad**(): [`GUIQuad`](GUIQuad.md)

#### Returns

[`GUIQuad`](GUIQuad.md)

## Properties

### x

• **x**: `number` = `0`

#### Defined in

components/gui/core/GUIQuad.ts:18

___

### y

• **y**: `number` = `0`

#### Defined in

components/gui/core/GUIQuad.ts:19

___

### z

• **z**: `number` = `0`

#### Defined in

components/gui/core/GUIQuad.ts:20

___

### width

• **width**: `number` = `1`

#### Defined in

components/gui/core/GUIQuad.ts:21

___

### height

• **height**: `number` = `1`

#### Defined in

components/gui/core/GUIQuad.ts:22

___

### \_sprite

• `Protected` **\_sprite**: [`GUISprite`](GUISprite.md) = `Engine3D.res.defaultGUISprite`

#### Defined in

components/gui/core/GUIQuad.ts:32

___

### dirtyAttributes

• **dirtyAttributes**: [`GUIQuadAttrEnum`](../enums/GUIQuadAttrEnum.md) = `GUIQuadAttrEnum.MAX`

#### Defined in

components/gui/core/GUIQuad.ts:35

___

### cacheTextureId

• **cacheTextureId**: `number` = `-1`

#### Defined in

components/gui/core/GUIQuad.ts:37

## Accessors

### quadPool

• `get` **quadPool**(): [`PoolNode`](PoolNode.md)\<[`GUIQuad`](GUIQuad.md)\>

#### Returns

[`PoolNode`](PoolNode.md)\<[`GUIQuad`](GUIQuad.md)\>

#### Defined in

components/gui/core/GUIQuad.ts:40

___

### imageType

• `get` **imageType**(): [`ImageType`](../enums/ImageType.md)

#### Returns

[`ImageType`](../enums/ImageType.md)

#### Defined in

components/gui/core/GUIQuad.ts:60

• `set` **imageType**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`ImageType`](../enums/ImageType.md) |

#### Returns

`void`

#### Defined in

components/gui/core/GUIQuad.ts:64

___

### color

• `get` **color**(): [`Color`](Color.md)

#### Returns

[`Color`](Color.md)

#### Defined in

components/gui/core/GUIQuad.ts:69

• `set` **color**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Color`](Color.md) |

#### Returns

`void`

#### Defined in

components/gui/core/GUIQuad.ts:73

___

### visible

• `get` **visible**(): `boolean`

#### Returns

`boolean`

#### Defined in

components/gui/core/GUIQuad.ts:78

• `set` **visible**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

components/gui/core/GUIQuad.ts:82

___

### sprite

• `get` **sprite**(): [`GUISprite`](GUISprite.md)

#### Returns

[`GUISprite`](GUISprite.md)

#### Defined in

components/gui/core/GUIQuad.ts:89

• `set` **sprite**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`GUISprite`](GUISprite.md) |

#### Returns

`void`

#### Defined in

components/gui/core/GUIQuad.ts:93

___

### left

• `get` **left**(): `number`

#### Returns

`number`

#### Defined in

components/gui/core/GUIQuad.ts:100

___

### right

• `get` **right**(): `number`

#### Returns

`number`

#### Defined in

components/gui/core/GUIQuad.ts:104

___

### top

• `get` **top**(): `number`

#### Returns

`number`

#### Defined in

components/gui/core/GUIQuad.ts:108

___

### bottom

• `get` **bottom**(): `number`

#### Returns

`number`

#### Defined in

components/gui/core/GUIQuad.ts:112

## Methods

### recycleQuad

▸ **recycleQuad**(`quad`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `quad` | [`GUIQuad`](GUIQuad.md) |

#### Returns

`void`

#### Defined in

components/gui/core/GUIQuad.ts:45

___

### spawnQuad

▸ **spawnQuad**(): [`GUIQuad`](GUIQuad.md)

#### Returns

[`GUIQuad`](GUIQuad.md)

#### Defined in

components/gui/core/GUIQuad.ts:55

___

### setSize

▸ **setSize**(`width`, `height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `height` | `number` |

#### Returns

`void`

#### Defined in

components/gui/core/GUIQuad.ts:116

___

### setXY

▸ **setXY**(`x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Defined in

components/gui/core/GUIQuad.ts:122

___

### setAttrChange

▸ **setAttrChange**(`attr`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attr` | [`GUIQuadAttrEnum`](../enums/GUIQuadAttrEnum.md) |

#### Returns

`void`

#### Defined in

components/gui/core/GUIQuad.ts:128

___

### applyTransform

▸ **applyTransform**(`transform`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | [`UITransform`](UITransform.md) |

#### Returns

`this`

#### Defined in

components/gui/core/GUIQuad.ts:131

___

### writeToGeometry

▸ **writeToGeometry**(`guiGeometry`, `transform`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `guiGeometry` | [`GUIGeometry`](GUIGeometry.md) |
| `transform` | [`UITransform`](UITransform.md) |

#### Returns

`this`

#### Defined in

components/gui/core/GUIQuad.ts:182
