[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / UV

# Class: UV

## Hierarchy

- [`Vector2`](Vector2.md)

  ↳ **`UV`**

## Table of contents

### Constructors

- [constructor](UV.md#constructor)

### Properties

- [uv\_0](UV.md#uv_0)
- [u](UV.md#u)
- [v](UV.md#v)
- [HELP\_0](UV.md#help_0)
- [HELP\_1](UV.md#help_1)
- [HELP\_2](UV.md#help_2)
- [ZERO](UV.md#zero)
- [SAFE\_MAX](UV.md#safe_max)
- [SAFE\_MIN](UV.md#safe_min)
- [x](UV.md#x)
- [y](UV.md#y)

### Methods

- [length](UV.md#length)
- [getUVSheet](UV.md#getuvsheet)
- [getAngle](UV.md#getangle)
- [slerp](UV.md#slerp)
- [lerp](UV.md#lerp)
- [set](UV.md#set)
- [distance](UV.md#distance)
- [add](UV.md#add)
- [sub](UV.md#sub)
- [scale](UV.md#scale)
- [multiply](UV.md#multiply)
- [multiplyScaler](UV.md#multiplyscaler)
- [divide](UV.md#divide)
- [neg](UV.md#neg)
- [abs](UV.md#abs)
- [getAngle](UV.md#getangle-1)
- [unt](UV.md#unt)
- [angleTo](UV.md#angleto)
- [equals](UV.md#equals)
- [pal](UV.md#pal)
- [clone](UV.md#clone)
- [copyFrom](UV.md#copyfrom)
- [addScaledVector](UV.md#addscaledvector)
- [dot](UV.md#dot)
- [normalize](UV.md#normalize)
- [addInPlace](UV.md#addinplace)
- [addScalar](UV.md#addscalar)
- [clampScalar](UV.md#clampscalar)

## Constructors

### constructor

• **new UV**(`x?`, `y?`): [`UV`](UV.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x` | `number` | `0` |
| `y` | `number` | `0` |

#### Returns

[`UV`](UV.md)

#### Overrides

[Vector2](Vector2.md).[constructor](Vector2.md#constructor)

#### Defined in

math/UV.ts:11

## Properties

### uv\_0

▪ `Static` **uv\_0**: [`UV`](UV.md)

#### Defined in

math/UV.ts:5

___

### u

• **u**: `number` = `0.0`

#### Defined in

math/UV.ts:7

___

### v

• **v**: `number` = `0.0`

#### Defined in

math/UV.ts:9

___

### HELP\_0

▪ `Static` **HELP\_0**: [`Vector2`](Vector2.md)

#### Inherited from

[Vector2](Vector2.md).[HELP_0](Vector2.md#help_0)

#### Defined in

math/Vector2.ts:2

___

### HELP\_1

▪ `Static` **HELP\_1**: [`Vector2`](Vector2.md)

#### Inherited from

[Vector2](Vector2.md).[HELP_1](Vector2.md#help_1)

#### Defined in

math/Vector2.ts:3

___

### HELP\_2

▪ `Static` **HELP\_2**: [`Vector2`](Vector2.md)

#### Inherited from

[Vector2](Vector2.md).[HELP_2](Vector2.md#help_2)

#### Defined in

math/Vector2.ts:4

___

### ZERO

▪ `Static` `Readonly` **ZERO**: [`Vector2`](Vector2.md)

#### Inherited from

[Vector2](Vector2.md).[ZERO](Vector2.md#zero)

#### Defined in

math/Vector2.ts:5

___

### SAFE\_MAX

▪ `Static` `Readonly` **SAFE\_MAX**: [`Vector2`](Vector2.md)

#### Inherited from

[Vector2](Vector2.md).[SAFE_MAX](Vector2.md#safe_max)

#### Defined in

math/Vector2.ts:6

___

### SAFE\_MIN

▪ `Static` `Readonly` **SAFE\_MIN**: [`Vector2`](Vector2.md)

#### Inherited from

[Vector2](Vector2.md).[SAFE_MIN](Vector2.md#safe_min)

#### Defined in

math/Vector2.ts:10

___

### x

• **x**: `number` = `0.0`

#### Inherited from

[Vector2](Vector2.md).[x](Vector2.md#x)

#### Defined in

math/Vector2.ts:14

___

### y

• **y**: `number` = `0.0`

#### Inherited from

[Vector2](Vector2.md).[y](Vector2.md#y)

#### Defined in

math/Vector2.ts:15

## Methods

### length

▸ **length**(): `number`

#### Returns

`number`

#### Overrides

[Vector2](Vector2.md).[length](Vector2.md#length)

#### Defined in

math/UV.ts:17

___

### getUVSheet

▸ **getUVSheet**(`frame`, `countX`, `countY`): [`Vector4`](Vector4.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `frame` | `number` |
| `countX` | `number` |
| `countY` | `number` |

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

math/UV.ts:21

___

### getAngle

▸ **getAngle**(`a`, `b`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Vector2`](Vector2.md) |
| `b` | [`Vector2`](Vector2.md) |

#### Returns

`number`

#### Inherited from

[Vector2](Vector2.md).[getAngle](Vector2.md#getangle)

#### Defined in

math/Vector2.ts:22

___

### slerp

▸ **slerp**(`from`, `to`, `t`): [`Vector2`](Vector2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | [`Vector2`](Vector2.md) |
| `to` | [`Vector2`](Vector2.md) |
| `t` | `number` |

#### Returns

[`Vector2`](Vector2.md)

#### Inherited from

[Vector2](Vector2.md).[slerp](Vector2.md#slerp)

#### Defined in

math/Vector2.ts:25

___

### lerp

▸ **lerp**(`from`, `to`, `t`): [`Vector2`](Vector2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | [`Vector2`](Vector2.md) |
| `to` | [`Vector2`](Vector2.md) |
| `t` | `number` |

#### Returns

[`Vector2`](Vector2.md)

#### Inherited from

[Vector2](Vector2.md).[lerp](Vector2.md#lerp)

#### Defined in

math/Vector2.ts:46

___

### set

▸ **set**(`x?`, `y?`): `this`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x` | `number` | `0` |
| `y` | `number` | `0` |

#### Returns

`this`

#### Inherited from

[Vector2](Vector2.md).[set](Vector2.md#set)

#### Defined in

math/Vector2.ts:56

___

### distance

▸ **distance**(`a`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Vector2`](Vector2.md) |

#### Returns

`number`

#### Inherited from

[Vector2](Vector2.md).[distance](Vector2.md#distance)

#### Defined in

math/Vector2.ts:61

___

### add

▸ **add**(`a`, `target?`): [`Vector2`](Vector2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Vector2`](Vector2.md) |
| `target?` | [`Vector2`](Vector2.md) |

#### Returns

[`Vector2`](Vector2.md)

#### Inherited from

[Vector2](Vector2.md).[add](Vector2.md#add)

#### Defined in

math/Vector2.ts:64

___

### sub

▸ **sub**(`a`, `target?`): [`Vector2`](Vector2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Vector2`](Vector2.md) |
| `target?` | [`Vector2`](Vector2.md) |

#### Returns

[`Vector2`](Vector2.md)

#### Inherited from

[Vector2](Vector2.md).[sub](Vector2.md#sub)

#### Defined in

math/Vector2.ts:70

___

### scale

▸ **scale**(`v`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`this`

#### Inherited from

[Vector2](Vector2.md).[scale](Vector2.md#scale)

#### Defined in

math/Vector2.ts:76

___

### multiply

▸ **multiply**(`a`, `target?`): [`Vector2`](Vector2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |
| `target?` | [`Vector2`](Vector2.md) |

#### Returns

[`Vector2`](Vector2.md)

#### Inherited from

[Vector2](Vector2.md).[multiply](Vector2.md#multiply)

#### Defined in

math/Vector2.ts:81

___

### multiplyScaler

▸ **multiplyScaler**(`a`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |

#### Returns

`this`

#### Inherited from

[Vector2](Vector2.md).[multiplyScaler](Vector2.md#multiplyscaler)

#### Defined in

math/Vector2.ts:87

___

### divide

▸ **divide**(`v`, `target?`): [`Vector2`](Vector2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |
| `target?` | [`Vector2`](Vector2.md) |

#### Returns

[`Vector2`](Vector2.md)

#### Inherited from

[Vector2](Vector2.md).[divide](Vector2.md#divide)

#### Defined in

math/Vector2.ts:92

___

### neg

▸ **neg**(`target?`): [`Vector2`](Vector2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target?` | [`Vector2`](Vector2.md) |

#### Returns

[`Vector2`](Vector2.md)

#### Inherited from

[Vector2](Vector2.md).[neg](Vector2.md#neg)

#### Defined in

math/Vector2.ts:98

___

### abs

▸ **abs**(): `number`

#### Returns

`number`

#### Inherited from

[Vector2](Vector2.md).[abs](Vector2.md#abs)

#### Defined in

math/Vector2.ts:104

___

### getAngle

▸ **getAngle**(`target`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`Vector2`](Vector2.md) |

#### Returns

`number`

#### Inherited from

[Vector2](Vector2.md).[getAngle](Vector2.md#getangle-1)

#### Defined in

math/Vector2.ts:110

___

### unt

▸ **unt**(`target?`): [`Vector2`](Vector2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target?` | [`Vector2`](Vector2.md) |

#### Returns

[`Vector2`](Vector2.md)

#### Inherited from

[Vector2](Vector2.md).[unt](Vector2.md#unt)

#### Defined in

math/Vector2.ts:113

___

### angleTo

▸ **angleTo**(`v`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector2`](Vector2.md) |

#### Returns

`number`

#### Inherited from

[Vector2](Vector2.md).[angleTo](Vector2.md#angleto)

#### Defined in

math/Vector2.ts:120

___

### equals

▸ **equals**(`a`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Vector2`](Vector2.md) |

#### Returns

`boolean`

#### Inherited from

[Vector2](Vector2.md).[equals](Vector2.md#equals)

#### Defined in

math/Vector2.ts:125

___

### pal

▸ **pal**(`a`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Vector2`](Vector2.md) |

#### Returns

`number`

#### Inherited from

[Vector2](Vector2.md).[pal](Vector2.md#pal)

#### Defined in

math/Vector2.ts:130

___

### clone

▸ **clone**(): [`Vector2`](Vector2.md)

#### Returns

[`Vector2`](Vector2.md)

#### Inherited from

[Vector2](Vector2.md).[clone](Vector2.md#clone)

#### Defined in

math/Vector2.ts:137

___

### copyFrom

▸ **copyFrom**(`v`): [`Vector2`](Vector2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector2`](Vector2.md) |

#### Returns

[`Vector2`](Vector2.md)

#### Inherited from

[Vector2](Vector2.md).[copyFrom](Vector2.md#copyfrom)

#### Defined in

math/Vector2.ts:140

___

### addScaledVector

▸ **addScaledVector**(`v`, `size`): [`Vector2`](Vector2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector2`](Vector2.md) |
| `size` | `number` |

#### Returns

[`Vector2`](Vector2.md)

#### Inherited from

[Vector2](Vector2.md).[addScaledVector](Vector2.md#addscaledvector)

#### Defined in

math/Vector2.ts:145

___

### dot

▸ **dot**(`value`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector2`](Vector2.md) |

#### Returns

`number`

#### Inherited from

[Vector2](Vector2.md).[dot](Vector2.md#dot)

#### Defined in

math/Vector2.ts:150

___

### normalize

▸ **normalize**(): `this`

#### Returns

`this`

#### Inherited from

[Vector2](Vector2.md).[normalize](Vector2.md#normalize)

#### Defined in

math/Vector2.ts:153

___

### addInPlace

▸ **addInPlace**(`otherVector`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `otherVector` | [`Vector2`](Vector2.md) |

#### Returns

`this`

#### Inherited from

[Vector2](Vector2.md).[addInPlace](Vector2.md#addinplace)

#### Defined in

math/Vector2.ts:159

___

### addScalar

▸ **addScalar**(`s`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `number` |

#### Returns

`this`

#### Inherited from

[Vector2](Vector2.md).[addScalar](Vector2.md#addscalar)

#### Defined in

math/Vector2.ts:164

___

### clampScalar

▸ **clampScalar**(`minVal`, `maxVal`): [`UV`](UV.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `minVal` | `number` |
| `maxVal` | `number` |

#### Returns

[`UV`](UV.md)

#### Inherited from

[Vector2](Vector2.md).[clampScalar](Vector2.md#clampscalar)

#### Defined in

math/Vector2.ts:169
