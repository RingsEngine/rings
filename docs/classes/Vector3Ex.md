[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / Vector3Ex

# Class: Vector3Ex

## Table of contents

### Constructors

- [constructor](Vector3Ex.md#constructor)

### Methods

- [add](Vector3Ex.md#add)
- [sub](Vector3Ex.md#sub)
- [mul](Vector3Ex.md#mul)
- [mulScale](Vector3Ex.md#mulscale)
- [div](Vector3Ex.md#div)
- [normalize](Vector3Ex.md#normalize)
- [dot](Vector3Ex.md#dot)
- [calculateVectorAngle\_xz](Vector3Ex.md#calculatevectorangle_xz)
- [distance](Vector3Ex.md#distance)
- [getRandomXYZ](Vector3Ex.md#getrandomxyz)
- [getRandomV3](Vector3Ex.md#getrandomv3)
- [sphere](Vector3Ex.md#sphere)
- [sphereXYZ](Vector3Ex.md#spherexyz)

## Constructors

### constructor

• **new Vector3Ex**(): [`Vector3Ex`](Vector3Ex.md)

#### Returns

[`Vector3Ex`](Vector3Ex.md)

## Methods

### add

▸ **add**(`v1`, `v2`, `target?`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v1` | [`Vector3`](Vector3.md) |
| `v2` | [`Vector3`](Vector3.md) |
| `target?` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

util/Vector3Ex.ts:4

___

### sub

▸ **sub**(`v1`, `v2`, `target?`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v1` | [`Vector3`](Vector3.md) |
| `v2` | [`Vector3`](Vector3.md) |
| `target?` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

util/Vector3Ex.ts:14

___

### mul

▸ **mul**(`v1`, `v2`, `target?`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v1` | [`Vector3`](Vector3.md) |
| `v2` | [`Vector3`](Vector3.md) |
| `target?` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

util/Vector3Ex.ts:24

___

### mulScale

▸ **mulScale**(`v1`, `v`, `target?`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v1` | [`Vector3`](Vector3.md) |
| `v` | `number` |
| `target?` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

util/Vector3Ex.ts:34

___

### div

▸ **div**(`v1`, `v2`, `target?`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v1` | [`Vector3`](Vector3.md) |
| `v2` | [`Vector3`](Vector3.md) |
| `target?` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

util/Vector3Ex.ts:44

___

### normalize

▸ **normalize**(`v1`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v1` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

util/Vector3Ex.ts:54

___

### dot

▸ **dot**(`v1`, `v2`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v1` | [`Vector3`](Vector3.md) |
| `v2` | [`Vector3`](Vector3.md) |

#### Returns

`number`

#### Defined in

util/Vector3Ex.ts:59

___

### calculateVectorAngle\_xz

▸ **calculateVectorAngle_xz**(`v1`, `v2`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v1` | [`Vector3`](Vector3.md) |
| `v2` | [`Vector3`](Vector3.md) |

#### Returns

`number`

#### Defined in

util/Vector3Ex.ts:65

___

### distance

▸ **distance**(`v1`, `v2`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v1` | [`Vector3`](Vector3.md) |
| `v2` | [`Vector3`](Vector3.md) |

#### Returns

`number`

#### Defined in

util/Vector3Ex.ts:72

___

### getRandomXYZ

▸ **getRandomXYZ**(`min?`, `max?`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `min` | `number` | `-100` |
| `max` | `number` | `100` |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

util/Vector3Ex.ts:76

___

### getRandomV3

▸ **getRandomV3**(`min?`, `max?`, `yMin`, `yMax`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `min` | `number` | `-100` |
| `max` | `number` | `100` |
| `yMin` | `number` | `undefined` |
| `yMax` | `number` | `undefined` |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

util/Vector3Ex.ts:84

___

### sphere

▸ **sphere**(`radius`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `radius` | `number` |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

util/Vector3Ex.ts:97

___

### sphereXYZ

▸ **sphereXYZ**(`radiusMin`, `radiusMax`, `x?`, `y?`, `z?`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `radiusMin` | `number` | `undefined` |
| `radiusMax` | `number` | `undefined` |
| `x` | `number` | `1` |
| `y` | `number` | `1` |
| `z` | `number` | `1` |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

util/Vector3Ex.ts:109
