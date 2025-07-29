[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / Vector2

# Class: Vector2

## Hierarchy

- **`Vector2`**

  ↳ [`UV`](UV.md)

## Table of contents

### Constructors

- [constructor](Vector2.md#constructor)

### Properties

- [HELP\_0](Vector2.md#help_0)
- [HELP\_1](Vector2.md#help_1)
- [HELP\_2](Vector2.md#help_2)
- [ZERO](Vector2.md#zero)
- [SAFE\_MAX](Vector2.md#safe_max)
- [SAFE\_MIN](Vector2.md#safe_min)
- [x](Vector2.md#x)
- [y](Vector2.md#y)

### Methods

- [getAngle](Vector2.md#getangle)
- [slerp](Vector2.md#slerp)
- [lerp](Vector2.md#lerp)
- [set](Vector2.md#set)
- [distance](Vector2.md#distance)
- [add](Vector2.md#add)
- [sub](Vector2.md#sub)
- [scale](Vector2.md#scale)
- [multiply](Vector2.md#multiply)
- [multiplyScaler](Vector2.md#multiplyscaler)
- [divide](Vector2.md#divide)
- [neg](Vector2.md#neg)
- [abs](Vector2.md#abs)
- [length](Vector2.md#length)
- [getAngle](Vector2.md#getangle-1)
- [unt](Vector2.md#unt)
- [angleTo](Vector2.md#angleto)
- [equals](Vector2.md#equals)
- [pal](Vector2.md#pal)
- [clone](Vector2.md#clone)
- [copyFrom](Vector2.md#copyfrom)
- [addScaledVector](Vector2.md#addscaledvector)
- [dot](Vector2.md#dot)
- [normalize](Vector2.md#normalize)
- [addInPlace](Vector2.md#addinplace)
- [addScalar](Vector2.md#addscalar)
- [clampScalar](Vector2.md#clampscalar)

## Constructors

### constructor

• **new Vector2**(`x?`, `y?`): [`Vector2`](Vector2.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x` | `number` | `0` |
| `y` | `number` | `0` |

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

math/Vector2.ts:17

## Properties

### HELP\_0

▪ `Static` **HELP\_0**: [`Vector2`](Vector2.md)

#### Defined in

math/Vector2.ts:2

___

### HELP\_1

▪ `Static` **HELP\_1**: [`Vector2`](Vector2.md)

#### Defined in

math/Vector2.ts:3

___

### HELP\_2

▪ `Static` **HELP\_2**: [`Vector2`](Vector2.md)

#### Defined in

math/Vector2.ts:4

___

### ZERO

▪ `Static` `Readonly` **ZERO**: [`Vector2`](Vector2.md)

#### Defined in

math/Vector2.ts:5

___

### SAFE\_MAX

▪ `Static` `Readonly` **SAFE\_MAX**: [`Vector2`](Vector2.md)

#### Defined in

math/Vector2.ts:6

___

### SAFE\_MIN

▪ `Static` `Readonly` **SAFE\_MIN**: [`Vector2`](Vector2.md)

#### Defined in

math/Vector2.ts:10

___

### x

• **x**: `number` = `0.0`

#### Defined in

math/Vector2.ts:14

___

### y

• **y**: `number` = `0.0`

#### Defined in

math/Vector2.ts:15

## Methods

### getAngle

▸ **getAngle**(`a`, `b`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Vector2`](Vector2.md) |
| `b` | [`Vector2`](Vector2.md) |

#### Returns

`number`

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

#### Defined in

math/Vector2.ts:98

___

### abs

▸ **abs**(): `number`

#### Returns

`number`

#### Defined in

math/Vector2.ts:104

___

### length

▸ **length**(): `number`

#### Returns

`number`

#### Defined in

math/Vector2.ts:107

___

### getAngle

▸ **getAngle**(`target`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`Vector2`](Vector2.md) |

#### Returns

`number`

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

#### Defined in

math/Vector2.ts:130

___

### clone

▸ **clone**(): [`Vector2`](Vector2.md)

#### Returns

[`Vector2`](Vector2.md)

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

#### Defined in

math/Vector2.ts:150

___

### normalize

▸ **normalize**(): `this`

#### Returns

`this`

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

#### Defined in

math/Vector2.ts:164

___

### clampScalar

▸ **clampScalar**(`minVal`, `maxVal`): [`Vector2`](Vector2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `minVal` | `number` |
| `maxVal` | `number` |

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

math/Vector2.ts:169
