[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / Quaternion

# Class: Quaternion

## Table of contents

### Constructors

- [constructor](Quaternion.md#constructor)

### Properties

- [HELP\_0](Quaternion.md#help_0)
- [HELP\_1](Quaternion.md#help_1)
- [HELP\_2](Quaternion.md#help_2)
- [\_zero](Quaternion.md#_zero)
- [CALCULATION\_QUATERNION](Quaternion.md#calculation_quaternion)
- [x](Quaternion.md#x)
- [y](Quaternion.md#y)
- [z](Quaternion.md#z)
- [w](Quaternion.md#w)

### Accessors

- [magnitude](Quaternion.md#magnitude)

### Methods

- [identity](Quaternion.md#identity)
- [quaternionToMatrix](Quaternion.md#quaterniontomatrix)
- [set](Quaternion.md#set)
- [divide](Quaternion.md#divide)
- [setFromArray](Quaternion.md#setfromarray)
- [multiply](Quaternion.md#multiply)
- [multiplyVector](Quaternion.md#multiplyvector)
- [fromAxisAngle](Quaternion.md#fromaxisangle)
- [toAxisAngle](Quaternion.md#toaxisangle)
- [slerp](Quaternion.md#slerp)
- [lerp](Quaternion.md#lerp)
- [fromEulerAngles](Quaternion.md#fromeulerangles)
- [setFromRotationMatrix](Quaternion.md#setfromrotationmatrix)
- [getEulerAngles](Quaternion.md#geteulerangles)
- [normalize](Quaternion.md#normalize)
- [toString](Quaternion.md#tostring)
- [fromMatrix](Quaternion.md#frommatrix)
- [inverse](Quaternion.md#inverse)
- [clone](Quaternion.md#clone)
- [transformVector](Quaternion.md#transformvector)
- [copyFrom](Quaternion.md#copyfrom)
- [mul](Quaternion.md#mul)
- [serialize](Quaternion.md#serialize)

## Constructors

### constructor

• **new Quaternion**(`x?`, `y?`, `z?`, `w?`): [`Quaternion`](Quaternion.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x` | `number` | `0` |
| `y` | `number` | `0` |
| `z` | `number` | `0` |
| `w` | `number` | `1` |

#### Returns

[`Quaternion`](Quaternion.md)

#### Defined in

math/Quaternion.ts:18

## Properties

### HELP\_0

▪ `Static` **HELP\_0**: [`Quaternion`](Quaternion.md)

#### Defined in

math/Quaternion.ts:7

___

### HELP\_1

▪ `Static` **HELP\_1**: [`Quaternion`](Quaternion.md)

#### Defined in

math/Quaternion.ts:8

___

### HELP\_2

▪ `Static` **HELP\_2**: [`Quaternion`](Quaternion.md)

#### Defined in

math/Quaternion.ts:9

___

### \_zero

▪ `Static` **\_zero**: [`Quaternion`](Quaternion.md)

#### Defined in

math/Quaternion.ts:10

___

### CALCULATION\_QUATERNION

▪ `Static` **CALCULATION\_QUATERNION**: [`Quaternion`](Quaternion.md)

#### Defined in

math/Quaternion.ts:11

___

### x

• **x**: `number` = `0`

#### Defined in

math/Quaternion.ts:13

___

### y

• **y**: `number` = `0`

#### Defined in

math/Quaternion.ts:14

___

### z

• **z**: `number` = `0`

#### Defined in

math/Quaternion.ts:15

___

### w

• **w**: `number` = `1`

#### Defined in

math/Quaternion.ts:16

## Accessors

### magnitude

• `get` **magnitude**(): `number`

#### Returns

`number`

#### Defined in

math/Quaternion.ts:66

## Methods

### identity

▸ **identity**(): [`Quaternion`](Quaternion.md)

#### Returns

[`Quaternion`](Quaternion.md)

#### Defined in

math/Quaternion.ts:25

___

### quaternionToMatrix

▸ **quaternionToMatrix**(`q`, `m`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `q` | [`Quaternion`](Quaternion.md) |
| `m` | `any` |

#### Returns

`void`

#### Defined in

math/Quaternion.ts:29

___

### set

▸ **set**(`x?`, `y?`, `z?`, `w?`): [`Quaternion`](Quaternion.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x` | `number` | `0` |
| `y` | `number` | `0` |
| `z` | `number` | `0` |
| `w` | `number` | `1` |

#### Returns

[`Quaternion`](Quaternion.md)

#### Defined in

math/Quaternion.ts:72

___

### divide

▸ **divide**(`v`): [`Quaternion`](Quaternion.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `any` |

#### Returns

[`Quaternion`](Quaternion.md)

#### Defined in

math/Quaternion.ts:85

___

### setFromArray

▸ **setFromArray**(`d`): [`Quaternion`](Quaternion.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `d` | `number`[] \| `Float32Array`\<`ArrayBufferLike`\> |

#### Returns

[`Quaternion`](Quaternion.md)

#### Defined in

math/Quaternion.ts:96

___

### multiply

▸ **multiply**(`qa`, `qb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `qa` | [`Quaternion`](Quaternion.md) |
| `qb` | [`Quaternion`](Quaternion.md) |

#### Returns

`void`

#### Defined in

math/Quaternion.ts:104

___

### multiplyVector

▸ **multiplyVector**(`vector`, `target?`): [`Quaternion`](Quaternion.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `vector` | [`Vector3`](Vector3.md) | `undefined` |
| `target` | [`Quaternion`](Quaternion.md) | `null` |

#### Returns

[`Quaternion`](Quaternion.md)

#### Defined in

math/Quaternion.ts:120

___

### fromAxisAngle

▸ **fromAxisAngle**(`axis`, `angle`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `axis` | [`Vector3`](Vector3.md) |
| `angle` | `number` |

#### Returns

`void`

#### Defined in

math/Quaternion.ts:137

___

### toAxisAngle

▸ **toAxisAngle**(`axis`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `axis` | [`Vector3`](Vector3.md) |

#### Returns

`number`

#### Defined in

math/Quaternion.ts:150

___

### slerp

▸ **slerp**(`qa`, `qb`, `t`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `qa` | [`Quaternion`](Quaternion.md) |
| `qb` | [`Quaternion`](Quaternion.md) |
| `t` | `number` |

#### Returns

`void`

#### Defined in

math/Quaternion.ts:169

___

### lerp

▸ **lerp**(`qa`, `qb`, `t`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `qa` | [`Quaternion`](Quaternion.md) |
| `qb` | [`Quaternion`](Quaternion.md) |
| `t` | `number` |

#### Returns

`void`

#### Defined in

math/Quaternion.ts:217

___

### fromEulerAngles

▸ **fromEulerAngles**(`ax`, `ay`, `az`): [`Quaternion`](Quaternion.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ax` | `number` |
| `ay` | `number` |
| `az` | `number` |

#### Returns

[`Quaternion`](Quaternion.md)

#### Defined in

math/Quaternion.ts:252

___

### setFromRotationMatrix

▸ **setFromRotationMatrix**(`m`): [`Quaternion`](Quaternion.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | `Object` |
| `m.rawData` | `FloatArray` |

#### Returns

[`Quaternion`](Quaternion.md)

#### Defined in

math/Quaternion.ts:275

___

### getEulerAngles

▸ **getEulerAngles**(`eulers?`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eulers?` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

math/Quaternion.ts:321

___

### normalize

▸ **normalize**(`val?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `val` | `number` | `1` |

#### Returns

`void`

#### Defined in

math/Quaternion.ts:356

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

math/Quaternion.ts:369

___

### fromMatrix

▸ **fromMatrix**(`matrix`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `matrix` | `any` |

#### Returns

`void`

#### Defined in

math/Quaternion.ts:375

___

### inverse

▸ **inverse**(`target?`): [`Quaternion`](Quaternion.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `target` | [`Quaternion`](Quaternion.md) | `null` |

#### Returns

[`Quaternion`](Quaternion.md)

#### Defined in

math/Quaternion.ts:383

___

### clone

▸ **clone**(): [`Quaternion`](Quaternion.md)

#### Returns

[`Quaternion`](Quaternion.md)

#### Defined in

math/Quaternion.ts:400

___

### transformVector

▸ **transformVector**(`vector`, `target?`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `vector` | [`Vector3`](Vector3.md) | `undefined` |
| `target` | [`Vector3`](Vector3.md) | `null` |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

math/Quaternion.ts:404

___

### copyFrom

▸ **copyFrom**(`q`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `q` | [`Vector3`](Vector3.md) \| [`Quaternion`](Quaternion.md) |

#### Returns

`this`

#### Defined in

math/Quaternion.ts:427

___

### mul

▸ **mul**(`lhs`, `rhs`, `target?`): [`Quaternion`](Quaternion.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `lhs` | [`Quaternion`](Quaternion.md) |
| `rhs` | [`Quaternion`](Quaternion.md) |
| `target?` | [`Quaternion`](Quaternion.md) |

#### Returns

[`Quaternion`](Quaternion.md)

#### Defined in

math/Quaternion.ts:436

___

### serialize

▸ **serialize**(`value`): [`Quaternion`](Quaternion.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Quaternion`](Quaternion.md) |

#### Returns

[`Quaternion`](Quaternion.md)

#### Defined in

math/Quaternion.ts:462
