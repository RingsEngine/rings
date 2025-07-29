[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / Navi3DPoint

# Class: Navi3DPoint

## Hierarchy

- [`Vector3`](Vector3.md)

  ↳ **`Navi3DPoint`**

  ↳↳ [`Navi3DPointFat`](Navi3DPointFat.md)

## Table of contents

### Constructors

- [constructor](Navi3DPoint.md#constructor)

### Properties

- [MAX](Navi3DPoint.md#max)
- [MIN](Navi3DPoint.md#min)
- [SAFE\_MAX](Navi3DPoint.md#safe_max)
- [SAFE\_MIN](Navi3DPoint.md#safe_min)
- [X\_AXIS](Navi3DPoint.md#x_axis)
- [neg\_X\_AXIS](Navi3DPoint.md#neg_x_axis)
- [Y\_AXIS](Navi3DPoint.md#y_axis)
- [Z\_AXIS](Navi3DPoint.md#z_axis)
- [HELP\_0](Navi3DPoint.md#help_0)
- [HELP\_1](Navi3DPoint.md#help_1)
- [HELP\_2](Navi3DPoint.md#help_2)
- [EPSILON](Navi3DPoint.md#epsilon)
- [HELP\_3](Navi3DPoint.md#help_3)
- [HELP\_4](Navi3DPoint.md#help_4)
- [HELP\_5](Navi3DPoint.md#help_5)
- [HELP\_6](Navi3DPoint.md#help_6)
- [x](Navi3DPoint.md#x)
- [y](Navi3DPoint.md#y)
- [z](Navi3DPoint.md#z)
- [w](Navi3DPoint.md#w)
- [index](Navi3DPoint.md#index)
- [CALC\_VECTOR3D1](Navi3DPoint.md#calc_vector3d1)
- [CALC\_VECTOR3D2](Navi3DPoint.md#calc_vector3d2)
- [CALC\_VECTOR3D3](Navi3DPoint.md#calc_vector3d3)
- [CALC\_VECTOR3D4](Navi3DPoint.md#calc_vector3d4)
- [CALC\_VECTOR3D5](Navi3DPoint.md#calc_vector3d5)

### Accessors

- [ZERO](Navi3DPoint.md#zero)
- [ONE](Navi3DPoint.md#one)
- [LEFT](Navi3DPoint.md#left)
- [RIGHT](Navi3DPoint.md#right)
- [UP](Navi3DPoint.md#up)
- [DOWN](Navi3DPoint.md#down)
- [BACK](Navi3DPoint.md#back)
- [FORWARD](Navi3DPoint.md#forward)
- [a](Navi3DPoint.md#a)
- [r](Navi3DPoint.md#r)
- [g](Navi3DPoint.md#g)
- [b](Navi3DPoint.md#b)
- [length](Navi3DPoint.md#length)
- [lengthSquared](Navi3DPoint.md#lengthsquared)
- [position](Navi3DPoint.md#position)
- [id](Navi3DPoint.md#id)

### Methods

- [getTowPointbyDir](Navi3DPoint.md#gettowpointbydir)
- [pointToLine](Navi3DPoint.md#pointtoline)
- [dot](Navi3DPoint.md#dot)
- [getPoints](Navi3DPoint.md#getpoints)
- [getPointNumbers](Navi3DPoint.md#getpointnumbers)
- [getAngle](Navi3DPoint.md#getangle)
- [sqrMagnitude](Navi3DPoint.md#sqrmagnitude)
- [getZYAngle](Navi3DPoint.md#getzyangle)
- [sub](Navi3DPoint.md#sub)
- [add](Navi3DPoint.md#add)
- [smoothDamp](Navi3DPoint.md#smoothdamp)
- [distance](Navi3DPoint.md#distance)
- [squareDistance](Navi3DPoint.md#squaredistance)
- [distanceXZ](Navi3DPoint.md#distancexz)
- [set](Navi3DPoint.md#set)
- [add](Navi3DPoint.md#add-1)
- [subVectors](Navi3DPoint.md#subvectors)
- [addScalar](Navi3DPoint.md#addscalar)
- [subScalar](Navi3DPoint.md#subscalar)
- [min](Navi3DPoint.md#min-1)
- [max](Navi3DPoint.md#max-1)
- [distanceToSquared](Navi3DPoint.md#distancetosquared)
- [addXYZW](Navi3DPoint.md#addxyzw)
- [clone](Navi3DPoint.md#clone)
- [copyFrom](Navi3DPoint.md#copyfrom)
- [decrementBy](Navi3DPoint.md#decrementby)
- [dotProduct](Navi3DPoint.md#dotproduct)
- [equals](Navi3DPoint.md#equals)
- [incrementBy](Navi3DPoint.md#incrementby)
- [divide](Navi3DPoint.md#divide)
- [negate](Navi3DPoint.md#negate)
- [normalize](Navi3DPoint.md#normalize)
- [applyQuaternion](Navi3DPoint.md#applyquaternion)
- [applyMatrix4](Navi3DPoint.md#applymatrix4)
- [scaleBy](Navi3DPoint.md#scaleby)
- [mul](Navi3DPoint.md#mul)
- [scale](Navi3DPoint.md#scale)
- [scaleToRef](Navi3DPoint.md#scaletoref)
- [setTo](Navi3DPoint.md#setto)
- [copy](Navi3DPoint.md#copy)
- [subtract](Navi3DPoint.md#subtract)
- [multiply](Navi3DPoint.md#multiply)
- [divided](Navi3DPoint.md#divided)
- [div](Navi3DPoint.md#div)
- [lerp](Navi3DPoint.md#lerp)
- [clamp](Navi3DPoint.md#clamp)
- [toString](Navi3DPoint.md#tostring)
- [normalizeToWay2D\_XY](Navi3DPoint.md#normalizetoway2d_xy)
- [toArray](Navi3DPoint.md#toarray)
- [copyToBytes](Navi3DPoint.md#copytobytes)
- [crossProduct](Navi3DPoint.md#crossproduct)
- [crossVectors](Navi3DPoint.md#crossvectors)
- [multiplyScalar](Navi3DPoint.md#multiplyscalar)
- [setFromArray](Navi3DPoint.md#setfromarray)
- [divideScalar](Navi3DPoint.md#dividescalar)
- [clampLength](Navi3DPoint.md#clamplength)
- [setScalar](Navi3DPoint.md#setscalar)
- [addScaledVector](Navi3DPoint.md#addscaledvector)
- [pointInsideTriangle](Navi3DPoint.md#pointinsidetriangle)
- [serialize](Navi3DPoint.md#serialize)
- [equalPoint](Navi3DPoint.md#equalpoint)
- [calcDistance](Navi3DPoint.md#calcdistance)

## Constructors

### constructor

• **new Navi3DPoint**(`id`, `X`, `Y`, `Z`): [`Navi3DPoint`](Navi3DPoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `X` | `number` |
| `Y` | `number` |
| `Z` | `number` |

#### Returns

[`Navi3DPoint`](Navi3DPoint.md)

#### Overrides

[Vector3](Vector3.md).[constructor](Vector3.md#constructor)

#### Defined in

math/navigation/Navi3DPoint.ts:17

## Properties

### MAX

▪ `Static` `Readonly` **MAX**: [`Vector3`](Vector3.md)

#### Inherited from

[Vector3](Vector3.md).[MAX](Vector3.md#max)

#### Defined in

math/Vector3.ts:2

___

### MIN

▪ `Static` `Readonly` **MIN**: [`Vector3`](Vector3.md)

#### Inherited from

[Vector3](Vector3.md).[MIN](Vector3.md#min)

#### Defined in

math/Vector3.ts:7

___

### SAFE\_MAX

▪ `Static` `Readonly` **SAFE\_MAX**: [`Vector3`](Vector3.md)

#### Inherited from

[Vector3](Vector3.md).[SAFE_MAX](Vector3.md#safe_max)

#### Defined in

math/Vector3.ts:12

___

### SAFE\_MIN

▪ `Static` `Readonly` **SAFE\_MIN**: [`Vector3`](Vector3.md)

#### Inherited from

[Vector3](Vector3.md).[SAFE_MIN](Vector3.md#safe_min)

#### Defined in

math/Vector3.ts:18

___

### X\_AXIS

▪ `Static` `Readonly` **X\_AXIS**: [`Vector3`](Vector3.md)

#### Inherited from

[Vector3](Vector3.md).[X_AXIS](Vector3.md#x_axis)

#### Defined in

math/Vector3.ts:24

___

### neg\_X\_AXIS

▪ `Static` `Readonly` **neg\_X\_AXIS**: [`Vector3`](Vector3.md)

#### Inherited from

[Vector3](Vector3.md).[neg_X_AXIS](Vector3.md#neg_x_axis)

#### Defined in

math/Vector3.ts:25

___

### Y\_AXIS

▪ `Static` `Readonly` **Y\_AXIS**: [`Vector3`](Vector3.md)

#### Inherited from

[Vector3](Vector3.md).[Y_AXIS](Vector3.md#y_axis)

#### Defined in

math/Vector3.ts:26

___

### Z\_AXIS

▪ `Static` `Readonly` **Z\_AXIS**: [`Vector3`](Vector3.md)

#### Inherited from

[Vector3](Vector3.md).[Z_AXIS](Vector3.md#z_axis)

#### Defined in

math/Vector3.ts:27

___

### HELP\_0

▪ `Static` **HELP\_0**: [`Vector3`](Vector3.md)

#### Inherited from

[Vector3](Vector3.md).[HELP_0](Vector3.md#help_0)

#### Defined in

math/Vector3.ts:28

___

### HELP\_1

▪ `Static` **HELP\_1**: [`Vector3`](Vector3.md)

#### Inherited from

[Vector3](Vector3.md).[HELP_1](Vector3.md#help_1)

#### Defined in

math/Vector3.ts:29

___

### HELP\_2

▪ `Static` **HELP\_2**: [`Vector3`](Vector3.md)

#### Inherited from

[Vector3](Vector3.md).[HELP_2](Vector3.md#help_2)

#### Defined in

math/Vector3.ts:30

___

### EPSILON

▪ `Static` `Readonly` **EPSILON**: `number` = `0.00001`

#### Inherited from

[Vector3](Vector3.md).[EPSILON](Vector3.md#epsilon)

#### Defined in

math/Vector3.ts:31

___

### HELP\_3

▪ `Static` **HELP\_3**: [`Vector3`](Vector3.md)

#### Inherited from

[Vector3](Vector3.md).[HELP_3](Vector3.md#help_3)

#### Defined in

math/Vector3.ts:32

___

### HELP\_4

▪ `Static` **HELP\_4**: [`Vector3`](Vector3.md)

#### Inherited from

[Vector3](Vector3.md).[HELP_4](Vector3.md#help_4)

#### Defined in

math/Vector3.ts:33

___

### HELP\_5

▪ `Static` **HELP\_5**: [`Vector3`](Vector3.md)

#### Inherited from

[Vector3](Vector3.md).[HELP_5](Vector3.md#help_5)

#### Defined in

math/Vector3.ts:34

___

### HELP\_6

▪ `Static` **HELP\_6**: [`Vector3`](Vector3.md)

#### Inherited from

[Vector3](Vector3.md).[HELP_6](Vector3.md#help_6)

#### Defined in

math/Vector3.ts:35

___

### x

• **x**: `number` = `0`

#### Inherited from

[Vector3](Vector3.md).[x](Vector3.md#x)

#### Defined in

math/Vector3.ts:60

___

### y

• **y**: `number` = `0`

#### Inherited from

[Vector3](Vector3.md).[y](Vector3.md#y)

#### Defined in

math/Vector3.ts:61

___

### z

• **z**: `number` = `0`

#### Inherited from

[Vector3](Vector3.md).[z](Vector3.md#z)

#### Defined in

math/Vector3.ts:62

___

### w

• **w**: `number` = `1`

#### Inherited from

[Vector3](Vector3.md).[w](Vector3.md#w)

#### Defined in

math/Vector3.ts:63

___

### index

• **index**: `number` = `0`

#### Inherited from

[Vector3](Vector3.md).[index](Vector3.md#index)

#### Defined in

math/Vector3.ts:64

___

### CALC\_VECTOR3D1

▪ `Static` **CALC\_VECTOR3D1**: [`Vector3`](Vector3.md)

#### Defined in

math/navigation/Navi3DPoint.ts:5

___

### CALC\_VECTOR3D2

▪ `Static` **CALC\_VECTOR3D2**: [`Vector3`](Vector3.md)

#### Defined in

math/navigation/Navi3DPoint.ts:7

___

### CALC\_VECTOR3D3

▪ `Static` **CALC\_VECTOR3D3**: [`Vector3`](Vector3.md)

#### Defined in

math/navigation/Navi3DPoint.ts:9

___

### CALC\_VECTOR3D4

▪ `Static` **CALC\_VECTOR3D4**: [`Vector3`](Vector3.md)

#### Defined in

math/navigation/Navi3DPoint.ts:11

___

### CALC\_VECTOR3D5

▪ `Static` **CALC\_VECTOR3D5**: [`Vector3`](Vector3.md)

#### Defined in

math/navigation/Navi3DPoint.ts:13

## Accessors

### ZERO

• `get` **ZERO**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

Vector3.ZERO

#### Defined in

math/Vector3.ts:36

___

### ONE

• `get` **ONE**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

Vector3.ONE

#### Defined in

math/Vector3.ts:39

___

### LEFT

• `get` **LEFT**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

Vector3.LEFT

#### Defined in

math/Vector3.ts:42

___

### RIGHT

• `get` **RIGHT**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

Vector3.RIGHT

#### Defined in

math/Vector3.ts:45

___

### UP

• `get` **UP**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

Vector3.UP

#### Defined in

math/Vector3.ts:48

___

### DOWN

• `get` **DOWN**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

Vector3.DOWN

#### Defined in

math/Vector3.ts:51

___

### BACK

• `get` **BACK**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

Vector3.BACK

#### Defined in

math/Vector3.ts:54

___

### FORWARD

• `get` **FORWARD**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

Vector3.FORWARD

#### Defined in

math/Vector3.ts:57

___

### a

• `get` **a**(): `number`

#### Returns

`number`

#### Inherited from

Vector3.a

#### Defined in

math/Vector3.ts:84

• `set` **a**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

Vector3.a

#### Defined in

math/Vector3.ts:72

___

### r

• `get` **r**(): `number`

#### Returns

`number`

#### Inherited from

Vector3.r

#### Defined in

math/Vector3.ts:87

• `set` **r**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

Vector3.r

#### Defined in

math/Vector3.ts:75

___

### g

• `get` **g**(): `number`

#### Returns

`number`

#### Inherited from

Vector3.g

#### Defined in

math/Vector3.ts:90

• `set` **g**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

Vector3.g

#### Defined in

math/Vector3.ts:78

___

### b

• `get` **b**(): `number`

#### Returns

`number`

#### Inherited from

Vector3.b

#### Defined in

math/Vector3.ts:93

• `set` **b**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

Vector3.b

#### Defined in

math/Vector3.ts:81

___

### length

• `get` **length**(): `number`

#### Returns

`number`

#### Inherited from

Vector3.length

#### Defined in

math/Vector3.ts:96

___

### lengthSquared

• `get` **lengthSquared**(): `number`

#### Returns

`number`

#### Inherited from

Vector3.lengthSquared

#### Defined in

math/Vector3.ts:99

___

### position

• `get` **position**(): `this`

#### Returns

`this`

#### Inherited from

Vector3.position

#### Defined in

math/Vector3.ts:102

___

### id

• `get` **id**(): `number`

#### Returns

`number`

#### Defined in

math/navigation/Navi3DPoint.ts:22

## Methods

### getTowPointbyDir

▸ **getTowPointbyDir**(`dir`, `tp1`, `tp2`, `width`, `aix`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dir` | [`Vector3`](Vector3.md) |
| `tp1` | [`Vector3`](Vector3.md) |
| `tp2` | [`Vector3`](Vector3.md) |
| `width` | `number` |
| `aix` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Inherited from

[Vector3](Vector3.md).[getTowPointbyDir](Vector3.md#gettowpointbydir)

#### Defined in

math/Vector3.ts:105

___

### pointToLine

▸ **pointToLine**(`point1`, `point2`, `position`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point1` | [`Vector3`](Vector3.md) |
| `point2` | [`Vector3`](Vector3.md) |
| `position` | [`Vector3`](Vector3.md) |

#### Returns

`number`

#### Inherited from

[Vector3](Vector3.md).[pointToLine](Vector3.md#pointtoline)

#### Defined in

math/Vector3.ts:132

___

### dot

▸ **dot**(`a`, `b`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Vector3`](Vector3.md) |
| `b` | [`Vector3`](Vector3.md) |

#### Returns

`number`

#### Inherited from

[Vector3](Vector3.md).[dot](Vector3.md#dot)

#### Defined in

math/Vector3.ts:163

___

### getPoints

▸ **getPoints**(`total`, `randSeed`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `total` | `number` |
| `randSeed` | `number` |

#### Returns

`any`[]

#### Inherited from

[Vector3](Vector3.md).[getPoints](Vector3.md#getpoints)

#### Defined in

math/Vector3.ts:166

___

### getPointNumbers

▸ **getPointNumbers**(`total`, `randSeed`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `total` | `number` |
| `randSeed` | `number` |

#### Returns

`any`[]

#### Inherited from

[Vector3](Vector3.md).[getPointNumbers](Vector3.md#getpointnumbers)

#### Defined in

math/Vector3.ts:178

___

### getAngle

▸ **getAngle**(`from`, `to`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | [`Vector3`](Vector3.md) |
| `to` | [`Vector3`](Vector3.md) |

#### Returns

`number`

#### Inherited from

[Vector3](Vector3.md).[getAngle](Vector3.md#getangle)

#### Defined in

math/Vector3.ts:189

___

### sqrMagnitude

▸ **sqrMagnitude**(`arg0`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | [`Vector3`](Vector3.md) |

#### Returns

`number`

#### Inherited from

[Vector3](Vector3.md).[sqrMagnitude](Vector3.md#sqrmagnitude)

#### Defined in

math/Vector3.ts:193

___

### getZYAngle

▸ **getZYAngle**(`zd`, `yd`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `zd` | [`Vector3`](Vector3.md) |
| `yd` | [`Vector3`](Vector3.md) |

#### Returns

`number`

#### Inherited from

[Vector3](Vector3.md).[getZYAngle](Vector3.md#getzyangle)

#### Defined in

math/Vector3.ts:196

___

### sub

▸ **sub**(`a`, `b`, `target?`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `a` | [`Vector3`](Vector3.md) | `undefined` |
| `b` | [`Vector3`](Vector3.md) | `undefined` |
| `target` | [`Vector3`](Vector3.md) | `null` |

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[Vector3](Vector3.md).[sub](Vector3.md#sub)

#### Defined in

math/Vector3.ts:199

___

### add

▸ **add**(`a`, `b`, `target?`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `a` | [`Vector3`](Vector3.md) | `undefined` |
| `b` | [`Vector3`](Vector3.md) | `undefined` |
| `target` | [`Vector3`](Vector3.md) | `null` |

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[Vector3](Vector3.md).[add](Vector3.md#add)

#### Defined in

math/Vector3.ts:207

___

### smoothDamp

▸ **smoothDamp**(`current`, `target`, `currentVelocity`, `smoothTime`, `maxSpeed`, `deltaTime`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `current` | [`Vector3`](Vector3.md) |
| `target` | [`Vector3`](Vector3.md) |
| `currentVelocity` | [`Vector3`](Vector3.md) |
| `smoothTime` | `number` |
| `maxSpeed` | `number` |
| `deltaTime` | `number` |

#### Returns

`any`

#### Inherited from

[Vector3](Vector3.md).[smoothDamp](Vector3.md#smoothdamp)

#### Defined in

math/Vector3.ts:214

___

### distance

▸ **distance**(`pt1`, `pt2`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pt1` | [`Vector3`](Vector3.md) |
| `pt2` | [`Vector3`](Vector3.md) |

#### Returns

`number`

#### Inherited from

[Vector3](Vector3.md).[distance](Vector3.md#distance)

#### Defined in

math/Vector3.ts:224

___

### squareDistance

▸ **squareDistance**(`pt1`, `pt2`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pt1` | [`Vector3`](Vector3.md) |
| `pt2` | [`Vector3`](Vector3.md) |

#### Returns

`number`

#### Inherited from

[Vector3](Vector3.md).[squareDistance](Vector3.md#squaredistance)

#### Defined in

math/Vector3.ts:230

___

### distanceXZ

▸ **distanceXZ**(`pt1`, `pt2`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pt1` | [`Vector3`](Vector3.md) |
| `pt2` | [`Vector3`](Vector3.md) |

#### Returns

`number`

#### Inherited from

[Vector3](Vector3.md).[distanceXZ](Vector3.md#distancexz)

#### Defined in

math/Vector3.ts:236

___

### set

▸ **set**(`x`, `y`, `z`, `w?`): [`Navi3DPoint`](Navi3DPoint.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x` | `number` | `undefined` |
| `y` | `number` | `undefined` |
| `z` | `number` | `undefined` |
| `w` | `number` | `1` |

#### Returns

[`Navi3DPoint`](Navi3DPoint.md)

#### Inherited from

[Vector3](Vector3.md).[set](Vector3.md#set)

#### Defined in

math/Vector3.ts:242

___

### add

▸ **add**(`a`, `target?`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `a` | [`Vector3`](Vector3.md) | `undefined` |
| `target` | [`Vector3`](Vector3.md) | `null` |

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[Vector3](Vector3.md).[add](Vector3.md#add-1)

#### Defined in

math/Vector3.ts:249

___

### subVectors

▸ **subVectors**(`a`, `b`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Vector3`](Vector3.md) |
| `b` | [`Vector3`](Vector3.md) |

#### Returns

`this`

#### Inherited from

[Vector3](Vector3.md).[subVectors](Vector3.md#subvectors)

#### Defined in

math/Vector3.ts:263

___

### addScalar

▸ **addScalar**(`scalar`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scalar` | `number` |

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[Vector3](Vector3.md).[addScalar](Vector3.md#addscalar)

#### Defined in

math/Vector3.ts:269

___

### subScalar

▸ **subScalar**(`scalar`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scalar` | `number` |

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[Vector3](Vector3.md).[subScalar](Vector3.md#subscalar)

#### Defined in

math/Vector3.ts:275

___

### min

▸ **min**(`v`, `target?`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector3`](Vector3.md) |
| `target` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[Vector3](Vector3.md).[min](Vector3.md#min-1)

#### Defined in

math/Vector3.ts:281

___

### max

▸ **max**(`v`, `target?`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector3`](Vector3.md) |
| `target` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[Vector3](Vector3.md).[max](Vector3.md#max-1)

#### Defined in

math/Vector3.ts:287

___

### distanceToSquared

▸ **distanceToSquared**(`v`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector3`](Vector3.md) |

#### Returns

`number`

#### Inherited from

[Vector3](Vector3.md).[distanceToSquared](Vector3.md#distancetosquared)

#### Defined in

math/Vector3.ts:293

___

### addXYZW

▸ **addXYZW**(`x`, `y`, `z`, `w`, `target?`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x` | `number` | `undefined` |
| `y` | `number` | `undefined` |
| `z` | `number` | `undefined` |
| `w` | `number` | `undefined` |
| `target` | [`Vector3`](Vector3.md) | `null` |

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[Vector3](Vector3.md).[addXYZW](Vector3.md#addxyzw)

#### Defined in

math/Vector3.ts:299

___

### clone

▸ **clone**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[Vector3](Vector3.md).[clone](Vector3.md#clone)

#### Defined in

math/Vector3.ts:319

___

### copyFrom

▸ **copyFrom**(`src`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[Vector3](Vector3.md).[copyFrom](Vector3.md#copyfrom)

#### Defined in

math/Vector3.ts:322

___

### decrementBy

▸ **decrementBy**(`a`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Inherited from

[Vector3](Vector3.md).[decrementBy](Vector3.md#decrementby)

#### Defined in

math/Vector3.ts:330

___

### dotProduct

▸ **dotProduct**(`a`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Vector3`](Vector3.md) |

#### Returns

`number`

#### Inherited from

[Vector3](Vector3.md).[dotProduct](Vector3.md#dotproduct)

#### Defined in

math/Vector3.ts:335

___

### equals

▸ **equals**(`toCompare`, `allFour?`): `boolean`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `toCompare` | [`Vector3`](Vector3.md) | `undefined` |
| `allFour` | `boolean` | `false` |

#### Returns

`boolean`

#### Inherited from

[Vector3](Vector3.md).[equals](Vector3.md#equals)

#### Defined in

math/Vector3.ts:338

___

### incrementBy

▸ **incrementBy**(`a`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Inherited from

[Vector3](Vector3.md).[incrementBy](Vector3.md#incrementby)

#### Defined in

math/Vector3.ts:346

___

### divide

▸ **divide**(`v`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `any` |

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[Vector3](Vector3.md).[divide](Vector3.md#divide)

#### Defined in

math/Vector3.ts:351

___

### negate

▸ **negate**(): [`Navi3DPoint`](Navi3DPoint.md)

#### Returns

[`Navi3DPoint`](Navi3DPoint.md)

#### Inherited from

[Vector3](Vector3.md).[negate](Vector3.md#negate)

#### Defined in

math/Vector3.ts:361

___

### normalize

▸ **normalize**(`thickness?`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `thickness` | `number` | `1` |

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[Vector3](Vector3.md).[normalize](Vector3.md#normalize)

#### Defined in

math/Vector3.ts:367

___

### applyQuaternion

▸ **applyQuaternion**(`q`): [`Navi3DPoint`](Navi3DPoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `q` | `any` |

#### Returns

[`Navi3DPoint`](Navi3DPoint.md)

#### Inherited from

[Vector3](Vector3.md).[applyQuaternion](Vector3.md#applyquaternion)

#### Defined in

math/Vector3.ts:378

___

### applyMatrix4

▸ **applyMatrix4**(`m`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | `any` |

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[Vector3](Vector3.md).[applyMatrix4](Vector3.md#applymatrix4)

#### Defined in

math/Vector3.ts:402

___

### scaleBy

▸ **scaleBy**(`s`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `number` |

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[Vector3](Vector3.md).[scaleBy](Vector3.md#scaleby)

#### Defined in

math/Vector3.ts:405

___

### mul

▸ **mul**(`s`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `number` |

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[Vector3](Vector3.md).[mul](Vector3.md#mul)

#### Defined in

math/Vector3.ts:411

___

### scale

▸ **scale**(`s`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[Vector3](Vector3.md).[scale](Vector3.md#scale)

#### Defined in

math/Vector3.ts:418

___

### scaleToRef

▸ **scaleToRef**(`s`, `ref`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `number` |
| `ref` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[Vector3](Vector3.md).[scaleToRef](Vector3.md#scaletoref)

#### Defined in

math/Vector3.ts:424

___

### setTo

▸ **setTo**(`xa`, `ya`, `za`, `wa?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `xa` | `number` | `undefined` |
| `ya` | `number` | `undefined` |
| `za` | `number` | `undefined` |
| `wa` | `number` | `1` |

#### Returns

`void`

#### Inherited from

[Vector3](Vector3.md).[setTo](Vector3.md#setto)

#### Defined in

math/Vector3.ts:434

___

### copy

▸ **copy**(`src`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | [`Vector3`](Vector3.md) |

#### Returns

`this`

#### Inherited from

[Vector3](Vector3.md).[copy](Vector3.md#copy)

#### Defined in

math/Vector3.ts:440

___

### subtract

▸ **subtract**(`a`, `target?`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `a` | [`Vector3`](Vector3.md) | `undefined` |
| `target` | [`Vector3`](Vector3.md) | `null` |

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[Vector3](Vector3.md).[subtract](Vector3.md#subtract)

#### Defined in

math/Vector3.ts:447

___

### multiply

▸ **multiply**(`other`, `target?`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `other` | [`Vector3`](Vector3.md) | `undefined` |
| `target` | [`Vector3`](Vector3.md) | `null` |

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[Vector3](Vector3.md).[multiply](Vector3.md#multiply)

#### Defined in

math/Vector3.ts:454

___

### divided

▸ **divided**(`other`, `target?`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `other` | [`Vector3`](Vector3.md) | `undefined` |
| `target` | [`Vector3`](Vector3.md) | `null` |

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[Vector3](Vector3.md).[divided](Vector3.md#divided)

#### Defined in

math/Vector3.ts:470

___

### div

▸ **div**(`v`, `target?`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |
| `target?` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[Vector3](Vector3.md).[div](Vector3.md#div)

#### Defined in

math/Vector3.ts:486

___

### lerp

▸ **lerp**(`v0`, `v1`, `t`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v0` | [`Vector3`](Vector3.md) |
| `v1` | [`Vector3`](Vector3.md) |
| `t` | `number` |

#### Returns

`void`

#### Inherited from

[Vector3](Vector3.md).[lerp](Vector3.md#lerp)

#### Defined in

math/Vector3.ts:499

___

### clamp

▸ **clamp**(`min`, `max`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | [`Vector3`](Vector3.md) |
| `max` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[Vector3](Vector3.md).[clamp](Vector3.md#clamp)

#### Defined in

math/Vector3.ts:514

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Inherited from

[Vector3](Vector3.md).[toString](Vector3.md#tostring)

#### Defined in

math/Vector3.ts:521

___

### normalizeToWay2D\_XY

▸ **normalizeToWay2D_XY**(): `void`

#### Returns

`void`

#### Inherited from

[Vector3](Vector3.md).[normalizeToWay2D_XY](Vector3.md#normalizetoway2d_xy)

#### Defined in

math/Vector3.ts:524

___

### toArray

▸ **toArray**(): `number`[]

#### Returns

`number`[]

#### Inherited from

[Vector3](Vector3.md).[toArray](Vector3.md#toarray)

#### Defined in

math/Vector3.ts:541

___

### copyToBytes

▸ **copyToBytes**(`byte`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `byte` | `DataView`\<`ArrayBufferLike`\> |

#### Returns

`void`

#### Inherited from

[Vector3](Vector3.md).[copyToBytes](Vector3.md#copytobytes)

#### Defined in

math/Vector3.ts:544

___

### crossProduct

▸ **crossProduct**(`a`, `target?`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `a` | [`Vector3`](Vector3.md) | `undefined` |
| `target` | [`Vector3`](Vector3.md) | `null` |

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[Vector3](Vector3.md).[crossProduct](Vector3.md#crossproduct)

#### Defined in

math/Vector3.ts:549

___

### crossVectors

▸ **crossVectors**(`a`, `b`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Vector3`](Vector3.md) |
| `b` | [`Vector3`](Vector3.md) |

#### Returns

`this`

#### Inherited from

[Vector3](Vector3.md).[crossVectors](Vector3.md#crossvectors)

#### Defined in

math/Vector3.ts:557

___

### multiplyScalar

▸ **multiplyScalar**(`scalar`): [`Navi3DPoint`](Navi3DPoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scalar` | `number` |

#### Returns

[`Navi3DPoint`](Navi3DPoint.md)

#### Inherited from

[Vector3](Vector3.md).[multiplyScalar](Vector3.md#multiplyscalar)

#### Defined in

math/Vector3.ts:561

___

### setFromArray

▸ **setFromArray**(`array`, `firstElementPos?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `array` | `number`[] | `undefined` |
| `firstElementPos` | `number` | `0` |

#### Returns

`void`

#### Inherited from

[Vector3](Vector3.md).[setFromArray](Vector3.md#setfromarray)

#### Defined in

math/Vector3.ts:568

___

### divideScalar

▸ **divideScalar**(`scalar`): [`Navi3DPoint`](Navi3DPoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scalar` | `any` |

#### Returns

[`Navi3DPoint`](Navi3DPoint.md)

#### Inherited from

[Vector3](Vector3.md).[divideScalar](Vector3.md#dividescalar)

#### Defined in

math/Vector3.ts:573

___

### clampLength

▸ **clampLength**(`min`, `max`): [`Navi3DPoint`](Navi3DPoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `number` |
| `max` | `number` |

#### Returns

[`Navi3DPoint`](Navi3DPoint.md)

#### Inherited from

[Vector3](Vector3.md).[clampLength](Vector3.md#clamplength)

#### Defined in

math/Vector3.ts:576

___

### setScalar

▸ **setScalar**(`value`): [`Navi3DPoint`](Navi3DPoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

[`Navi3DPoint`](Navi3DPoint.md)

#### Inherited from

[Vector3](Vector3.md).[setScalar](Vector3.md#setscalar)

#### Defined in

math/Vector3.ts:582

___

### addScaledVector

▸ **addScaledVector**(`v`, `scale`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector3`](Vector3.md) |
| `scale` | `number` |

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[Vector3](Vector3.md).[addScaledVector](Vector3.md#addscaledvector)

#### Defined in

math/Vector3.ts:588

___

### pointInsideTriangle

▸ **pointInsideTriangle**(`pt`, `pt0`, `pt1`, `pt2`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pt` | [`Vector3`](Vector3.md) |
| `pt0` | [`Vector3`](Vector3.md) |
| `pt1` | [`Vector3`](Vector3.md) |
| `pt2` | [`Vector3`](Vector3.md) |

#### Returns

`boolean`

#### Inherited from

[Vector3](Vector3.md).[pointInsideTriangle](Vector3.md#pointinsidetriangle)

#### Defined in

math/Vector3.ts:616

___

### serialize

▸ **serialize**(`position`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[Vector3](Vector3.md).[serialize](Vector3.md#serialize)

#### Defined in

math/Vector3.ts:660

___

### equalPoint

▸ **equalPoint**(`p1`, `p2`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p1` | [`Vector3`](Vector3.md) |
| `p2` | [`Vector3`](Vector3.md) |

#### Returns

`boolean`

#### Defined in

math/navigation/Navi3DPoint.ts:26

___

### calcDistance

▸ **calcDistance**(`pt1`, `pt2`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pt1` | [`Vector3`](Vector3.md) |
| `pt2` | [`Vector3`](Vector3.md) |

#### Returns

`number`

#### Defined in

math/navigation/Navi3DPoint.ts:35
