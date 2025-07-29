[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / MathUtil

# Class: MathUtil

## Table of contents

### Constructors

- [constructor](MathUtil.md#constructor)

### Methods

- [clampf](MathUtil.md#clampf)
- [normalizeAngle](MathUtil.md#normalizeangle)
- [fract](MathUtil.md#fract)
- [getRandDirXZ](MathUtil.md#getranddirxz)
- [getRandDirXYZ](MathUtil.md#getranddirxyz)
- [getCycleXYZ](MathUtil.md#getcyclexyz)
- [angle](MathUtil.md#angle)
- [angle\_360](MathUtil.md#angle_360)
- [fromToRotation](MathUtil.md#fromtorotation)
- [getEularDir\_yUp](MathUtil.md#geteulardir_yup)
- [transformVector](MathUtil.md#transformvector)
- [getRotationY](MathUtil.md#getrotationy)

## Constructors

### constructor

• **new MathUtil**(): [`MathUtil`](MathUtil.md)

#### Returns

[`MathUtil`](MathUtil.md)

## Methods

### clampf

▸ **clampf**(`value`, `min_inclusive`, `max_inclusive`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `min_inclusive` | `number` |
| `max_inclusive` | `number` |

#### Returns

`number`

#### Defined in

math/MathUtil.ts:65

___

### normalizeAngle

▸ **normalizeAngle**(`a`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |

#### Returns

`number`

#### Defined in

math/MathUtil.ts:82

___

### fract

▸ **fract**(`v`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`number`

#### Defined in

math/MathUtil.ts:92

___

### getRandDirXZ

▸ **getRandDirXZ**(`r`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | `number` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `z` | `number` |

#### Defined in

math/MathUtil.ts:96

___

### getRandDirXYZ

▸ **getRandDirXYZ**(`r`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | `number` |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

math/MathUtil.ts:104

___

### getCycleXYZ

▸ **getCycleXYZ**(`r`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | `number` |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

math/MathUtil.ts:113

___

### angle

▸ **angle**(`p1`, `p2`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1` | [`Vector3`](Vector3.md) |
| `p2` | [`Vector3`](Vector3.md) |

#### Returns

`number`

#### Defined in

math/MathUtil.ts:122

___

### angle\_360

▸ **angle_360**(`from`, `to`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | [`Vector3`](Vector3.md) |
| `to` | [`Vector3`](Vector3.md) |

#### Returns

`number`

#### Defined in

math/MathUtil.ts:132

___

### fromToRotation

▸ **fromToRotation**(`fromDirection`, `toDirection`, `target?`): [`Quaternion`](Quaternion.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `fromDirection` | [`Vector3`](Vector3.md) | `undefined` |
| `toDirection` | [`Vector3`](Vector3.md) | `undefined` |
| `target` | [`Quaternion`](Quaternion.md) | `null` |

#### Returns

[`Quaternion`](Quaternion.md)

#### Defined in

math/MathUtil.ts:149

___

### getEularDir\_yUp

▸ **getEularDir_yUp**(`v`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

math/MathUtil.ts:161

___

### transformVector

▸ **transformVector**(`matrix`, `vector`, `result?`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `matrix` | [`Matrix4`](Matrix4.md) | `undefined` |
| `vector` | [`Vector3`](Vector3.md) | `undefined` |
| `result` | [`Vector3`](Vector3.md) | `null` |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

math/MathUtil.ts:168

___

### getRotationY

▸ **getRotationY**(`v`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector3`](Vector3.md) |

#### Returns

`number`

#### Defined in

math/MathUtil.ts:142
