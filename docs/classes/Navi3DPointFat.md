[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / Navi3DPointFat

# Class: Navi3DPointFat

## Hierarchy

- [`Navi3DPoint`](Navi3DPoint.md)

  ↳ **`Navi3DPointFat`**

## Table of contents

### Constructors

- [constructor](Navi3DPointFat.md#constructor)

### Properties

- [MAX](Navi3DPointFat.md#max)
- [MIN](Navi3DPointFat.md#min)
- [SAFE\_MAX](Navi3DPointFat.md#safe_max)
- [SAFE\_MIN](Navi3DPointFat.md#safe_min)
- [X\_AXIS](Navi3DPointFat.md#x_axis)
- [neg\_X\_AXIS](Navi3DPointFat.md#neg_x_axis)
- [Y\_AXIS](Navi3DPointFat.md#y_axis)
- [Z\_AXIS](Navi3DPointFat.md#z_axis)
- [HELP\_0](Navi3DPointFat.md#help_0)
- [HELP\_1](Navi3DPointFat.md#help_1)
- [HELP\_2](Navi3DPointFat.md#help_2)
- [EPSILON](Navi3DPointFat.md#epsilon)
- [HELP\_3](Navi3DPointFat.md#help_3)
- [HELP\_4](Navi3DPointFat.md#help_4)
- [HELP\_5](Navi3DPointFat.md#help_5)
- [HELP\_6](Navi3DPointFat.md#help_6)
- [x](Navi3DPointFat.md#x)
- [y](Navi3DPointFat.md#y)
- [z](Navi3DPointFat.md#z)
- [w](Navi3DPointFat.md#w)
- [index](Navi3DPointFat.md#index)
- [CALC\_VECTOR3D1](Navi3DPointFat.md#calc_vector3d1)
- [CALC\_VECTOR3D2](Navi3DPointFat.md#calc_vector3d2)
- [CALC\_VECTOR3D3](Navi3DPointFat.md#calc_vector3d3)
- [CALC\_VECTOR3D4](Navi3DPointFat.md#calc_vector3d4)
- [CALC\_VECTOR3D5](Navi3DPointFat.md#calc_vector3d5)
- [radius](Navi3DPointFat.md#radius)

### Accessors

- [ZERO](Navi3DPointFat.md#zero)
- [ONE](Navi3DPointFat.md#one)
- [LEFT](Navi3DPointFat.md#left)
- [RIGHT](Navi3DPointFat.md#right)
- [UP](Navi3DPointFat.md#up)
- [DOWN](Navi3DPointFat.md#down)
- [BACK](Navi3DPointFat.md#back)
- [FORWARD](Navi3DPointFat.md#forward)
- [a](Navi3DPointFat.md#a)
- [r](Navi3DPointFat.md#r)
- [g](Navi3DPointFat.md#g)
- [b](Navi3DPointFat.md#b)
- [length](Navi3DPointFat.md#length)
- [lengthSquared](Navi3DPointFat.md#lengthsquared)
- [position](Navi3DPointFat.md#position)
- [id](Navi3DPointFat.md#id)
- [ownerPoint](Navi3DPointFat.md#ownerpoint)
- [ownerEdge](Navi3DPointFat.md#owneredge)

### Methods

- [getTowPointbyDir](Navi3DPointFat.md#gettowpointbydir)
- [pointToLine](Navi3DPointFat.md#pointtoline)
- [dot](Navi3DPointFat.md#dot)
- [getPoints](Navi3DPointFat.md#getpoints)
- [getPointNumbers](Navi3DPointFat.md#getpointnumbers)
- [getAngle](Navi3DPointFat.md#getangle)
- [sqrMagnitude](Navi3DPointFat.md#sqrmagnitude)
- [getZYAngle](Navi3DPointFat.md#getzyangle)
- [sub](Navi3DPointFat.md#sub)
- [add](Navi3DPointFat.md#add)
- [smoothDamp](Navi3DPointFat.md#smoothdamp)
- [distance](Navi3DPointFat.md#distance)
- [squareDistance](Navi3DPointFat.md#squaredistance)
- [distanceXZ](Navi3DPointFat.md#distancexz)
- [set](Navi3DPointFat.md#set)
- [add](Navi3DPointFat.md#add-1)
- [subVectors](Navi3DPointFat.md#subvectors)
- [addScalar](Navi3DPointFat.md#addscalar)
- [subScalar](Navi3DPointFat.md#subscalar)
- [min](Navi3DPointFat.md#min-1)
- [max](Navi3DPointFat.md#max-1)
- [distanceToSquared](Navi3DPointFat.md#distancetosquared)
- [addXYZW](Navi3DPointFat.md#addxyzw)
- [clone](Navi3DPointFat.md#clone)
- [copyFrom](Navi3DPointFat.md#copyfrom)
- [decrementBy](Navi3DPointFat.md#decrementby)
- [dotProduct](Navi3DPointFat.md#dotproduct)
- [equals](Navi3DPointFat.md#equals)
- [incrementBy](Navi3DPointFat.md#incrementby)
- [divide](Navi3DPointFat.md#divide)
- [negate](Navi3DPointFat.md#negate)
- [normalize](Navi3DPointFat.md#normalize)
- [applyQuaternion](Navi3DPointFat.md#applyquaternion)
- [applyMatrix4](Navi3DPointFat.md#applymatrix4)
- [scaleBy](Navi3DPointFat.md#scaleby)
- [mul](Navi3DPointFat.md#mul)
- [scale](Navi3DPointFat.md#scale)
- [scaleToRef](Navi3DPointFat.md#scaletoref)
- [setTo](Navi3DPointFat.md#setto)
- [copy](Navi3DPointFat.md#copy)
- [subtract](Navi3DPointFat.md#subtract)
- [multiply](Navi3DPointFat.md#multiply)
- [divided](Navi3DPointFat.md#divided)
- [div](Navi3DPointFat.md#div)
- [lerp](Navi3DPointFat.md#lerp)
- [clamp](Navi3DPointFat.md#clamp)
- [toString](Navi3DPointFat.md#tostring)
- [normalizeToWay2D\_XY](Navi3DPointFat.md#normalizetoway2d_xy)
- [toArray](Navi3DPointFat.md#toarray)
- [copyToBytes](Navi3DPointFat.md#copytobytes)
- [crossProduct](Navi3DPointFat.md#crossproduct)
- [crossVectors](Navi3DPointFat.md#crossvectors)
- [multiplyScalar](Navi3DPointFat.md#multiplyscalar)
- [setFromArray](Navi3DPointFat.md#setfromarray)
- [divideScalar](Navi3DPointFat.md#dividescalar)
- [clampLength](Navi3DPointFat.md#clamplength)
- [setScalar](Navi3DPointFat.md#setscalar)
- [addScaledVector](Navi3DPointFat.md#addscaledvector)
- [pointInsideTriangle](Navi3DPointFat.md#pointinsidetriangle)
- [serialize](Navi3DPointFat.md#serialize)
- [equalPoint](Navi3DPointFat.md#equalpoint)
- [calcDistance](Navi3DPointFat.md#calcdistance)
- [scalePoint](Navi3DPointFat.md#scalepoint)

## Constructors

### constructor

• **new Navi3DPointFat**(`_point`, `_edge`): [`Navi3DPointFat`](Navi3DPointFat.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_point` | [`Navi3DPoint`](Navi3DPoint.md) |
| `_edge` | [`Navi3DEdge`](Navi3DEdge.md) |

#### Returns

[`Navi3DPointFat`](Navi3DPointFat.md)

#### Overrides

[Navi3DPoint](Navi3DPoint.md).[constructor](Navi3DPoint.md#constructor)

#### Defined in

math/navigation/Navi3DPointFat.ts:10

## Properties

### MAX

▪ `Static` `Readonly` **MAX**: [`Vector3`](Vector3.md)

#### Inherited from

[Navi3DPoint](Navi3DPoint.md).[MAX](Navi3DPoint.md#max)

#### Defined in

math/Vector3.ts:2

___

### MIN

▪ `Static` `Readonly` **MIN**: [`Vector3`](Vector3.md)

#### Inherited from

[Navi3DPoint](Navi3DPoint.md).[MIN](Navi3DPoint.md#min)

#### Defined in

math/Vector3.ts:7

___

### SAFE\_MAX

▪ `Static` `Readonly` **SAFE\_MAX**: [`Vector3`](Vector3.md)

#### Inherited from

[Navi3DPoint](Navi3DPoint.md).[SAFE_MAX](Navi3DPoint.md#safe_max)

#### Defined in

math/Vector3.ts:12

___

### SAFE\_MIN

▪ `Static` `Readonly` **SAFE\_MIN**: [`Vector3`](Vector3.md)

#### Inherited from

[Navi3DPoint](Navi3DPoint.md).[SAFE_MIN](Navi3DPoint.md#safe_min)

#### Defined in

math/Vector3.ts:18

___

### X\_AXIS

▪ `Static` `Readonly` **X\_AXIS**: [`Vector3`](Vector3.md)

#### Inherited from

[Navi3DPoint](Navi3DPoint.md).[X_AXIS](Navi3DPoint.md#x_axis)

#### Defined in

math/Vector3.ts:24

___

### neg\_X\_AXIS

▪ `Static` `Readonly` **neg\_X\_AXIS**: [`Vector3`](Vector3.md)

#### Inherited from

[Navi3DPoint](Navi3DPoint.md).[neg_X_AXIS](Navi3DPoint.md#neg_x_axis)

#### Defined in

math/Vector3.ts:25

___

### Y\_AXIS

▪ `Static` `Readonly` **Y\_AXIS**: [`Vector3`](Vector3.md)

#### Inherited from

[Navi3DPoint](Navi3DPoint.md).[Y_AXIS](Navi3DPoint.md#y_axis)

#### Defined in

math/Vector3.ts:26

___

### Z\_AXIS

▪ `Static` `Readonly` **Z\_AXIS**: [`Vector3`](Vector3.md)

#### Inherited from

[Navi3DPoint](Navi3DPoint.md).[Z_AXIS](Navi3DPoint.md#z_axis)

#### Defined in

math/Vector3.ts:27

___

### HELP\_0

▪ `Static` **HELP\_0**: [`Vector3`](Vector3.md)

#### Inherited from

[Navi3DPoint](Navi3DPoint.md).[HELP_0](Navi3DPoint.md#help_0)

#### Defined in

math/Vector3.ts:28

___

### HELP\_1

▪ `Static` **HELP\_1**: [`Vector3`](Vector3.md)

#### Inherited from

[Navi3DPoint](Navi3DPoint.md).[HELP_1](Navi3DPoint.md#help_1)

#### Defined in

math/Vector3.ts:29

___

### HELP\_2

▪ `Static` **HELP\_2**: [`Vector3`](Vector3.md)

#### Inherited from

[Navi3DPoint](Navi3DPoint.md).[HELP_2](Navi3DPoint.md#help_2)

#### Defined in

math/Vector3.ts:30

___

### EPSILON

▪ `Static` `Readonly` **EPSILON**: `number` = `0.00001`

#### Inherited from

[Navi3DPoint](Navi3DPoint.md).[EPSILON](Navi3DPoint.md#epsilon)

#### Defined in

math/Vector3.ts:31

___

### HELP\_3

▪ `Static` **HELP\_3**: [`Vector3`](Vector3.md)

#### Inherited from

[Navi3DPoint](Navi3DPoint.md).[HELP_3](Navi3DPoint.md#help_3)

#### Defined in

math/Vector3.ts:32

___

### HELP\_4

▪ `Static` **HELP\_4**: [`Vector3`](Vector3.md)

#### Inherited from

[Navi3DPoint](Navi3DPoint.md).[HELP_4](Navi3DPoint.md#help_4)

#### Defined in

math/Vector3.ts:33

___

### HELP\_5

▪ `Static` **HELP\_5**: [`Vector3`](Vector3.md)

#### Inherited from

[Navi3DPoint](Navi3DPoint.md).[HELP_5](Navi3DPoint.md#help_5)

#### Defined in

math/Vector3.ts:34

___

### HELP\_6

▪ `Static` **HELP\_6**: [`Vector3`](Vector3.md)

#### Inherited from

[Navi3DPoint](Navi3DPoint.md).[HELP_6](Navi3DPoint.md#help_6)

#### Defined in

math/Vector3.ts:35

___

### x

• **x**: `number` = `0`

#### Inherited from

[Navi3DPoint](Navi3DPoint.md).[x](Navi3DPoint.md#x)

#### Defined in

math/Vector3.ts:60

___

### y

• **y**: `number` = `0`

#### Inherited from

[Navi3DPoint](Navi3DPoint.md).[y](Navi3DPoint.md#y)

#### Defined in

math/Vector3.ts:61

___

### z

• **z**: `number` = `0`

#### Inherited from

[Navi3DPoint](Navi3DPoint.md).[z](Navi3DPoint.md#z)

#### Defined in

math/Vector3.ts:62

___

### w

• **w**: `number` = `1`

#### Inherited from

[Navi3DPoint](Navi3DPoint.md).[w](Navi3DPoint.md#w)

#### Defined in

math/Vector3.ts:63

___

### index

• **index**: `number` = `0`

#### Inherited from

[Navi3DPoint](Navi3DPoint.md).[index](Navi3DPoint.md#index)

#### Defined in

math/Vector3.ts:64

___

### CALC\_VECTOR3D1

▪ `Static` **CALC\_VECTOR3D1**: [`Vector3`](Vector3.md)

#### Inherited from

[Navi3DPoint](Navi3DPoint.md).[CALC_VECTOR3D1](Navi3DPoint.md#calc_vector3d1)

#### Defined in

math/navigation/Navi3DPoint.ts:5

___

### CALC\_VECTOR3D2

▪ `Static` **CALC\_VECTOR3D2**: [`Vector3`](Vector3.md)

#### Inherited from

[Navi3DPoint](Navi3DPoint.md).[CALC_VECTOR3D2](Navi3DPoint.md#calc_vector3d2)

#### Defined in

math/navigation/Navi3DPoint.ts:7

___

### CALC\_VECTOR3D3

▪ `Static` **CALC\_VECTOR3D3**: [`Vector3`](Vector3.md)

#### Inherited from

[Navi3DPoint](Navi3DPoint.md).[CALC_VECTOR3D3](Navi3DPoint.md#calc_vector3d3)

#### Defined in

math/navigation/Navi3DPoint.ts:9

___

### CALC\_VECTOR3D4

▪ `Static` **CALC\_VECTOR3D4**: [`Vector3`](Vector3.md)

#### Inherited from

[Navi3DPoint](Navi3DPoint.md).[CALC_VECTOR3D4](Navi3DPoint.md#calc_vector3d4)

#### Defined in

math/navigation/Navi3DPoint.ts:11

___

### CALC\_VECTOR3D5

▪ `Static` **CALC\_VECTOR3D5**: [`Vector3`](Vector3.md)

#### Inherited from

[Navi3DPoint](Navi3DPoint.md).[CALC_VECTOR3D5](Navi3DPoint.md#calc_vector3d5)

#### Defined in

math/navigation/Navi3DPoint.ts:13

___

### radius

• **radius**: `number` = `0`

#### Defined in

math/navigation/Navi3DPointFat.ts:8

## Accessors

### ZERO

• `get` **ZERO**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

Navi3DPoint.ZERO

#### Defined in

math/Vector3.ts:36

___

### ONE

• `get` **ONE**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

Navi3DPoint.ONE

#### Defined in

math/Vector3.ts:39

___

### LEFT

• `get` **LEFT**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

Navi3DPoint.LEFT

#### Defined in

math/Vector3.ts:42

___

### RIGHT

• `get` **RIGHT**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

Navi3DPoint.RIGHT

#### Defined in

math/Vector3.ts:45

___

### UP

• `get` **UP**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

Navi3DPoint.UP

#### Defined in

math/Vector3.ts:48

___

### DOWN

• `get` **DOWN**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

Navi3DPoint.DOWN

#### Defined in

math/Vector3.ts:51

___

### BACK

• `get` **BACK**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

Navi3DPoint.BACK

#### Defined in

math/Vector3.ts:54

___

### FORWARD

• `get` **FORWARD**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

Navi3DPoint.FORWARD

#### Defined in

math/Vector3.ts:57

___

### a

• `get` **a**(): `number`

#### Returns

`number`

#### Inherited from

Navi3DPoint.a

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

Navi3DPoint.a

#### Defined in

math/Vector3.ts:72

___

### r

• `get` **r**(): `number`

#### Returns

`number`

#### Inherited from

Navi3DPoint.r

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

Navi3DPoint.r

#### Defined in

math/Vector3.ts:75

___

### g

• `get` **g**(): `number`

#### Returns

`number`

#### Inherited from

Navi3DPoint.g

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

Navi3DPoint.g

#### Defined in

math/Vector3.ts:78

___

### b

• `get` **b**(): `number`

#### Returns

`number`

#### Inherited from

Navi3DPoint.b

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

Navi3DPoint.b

#### Defined in

math/Vector3.ts:81

___

### length

• `get` **length**(): `number`

#### Returns

`number`

#### Inherited from

Navi3DPoint.length

#### Defined in

math/Vector3.ts:96

___

### lengthSquared

• `get` **lengthSquared**(): `number`

#### Returns

`number`

#### Inherited from

Navi3DPoint.lengthSquared

#### Defined in

math/Vector3.ts:99

___

### position

• `get` **position**(): `this`

#### Returns

`this`

#### Inherited from

Navi3DPoint.position

#### Defined in

math/Vector3.ts:102

___

### id

• `get` **id**(): `number`

#### Returns

`number`

#### Inherited from

Navi3DPoint.id

#### Defined in

math/navigation/Navi3DPoint.ts:22

___

### ownerPoint

• `get` **ownerPoint**(): [`Navi3DPoint`](Navi3DPoint.md)

#### Returns

[`Navi3DPoint`](Navi3DPoint.md)

#### Defined in

math/navigation/Navi3DPointFat.ts:16

___

### ownerEdge

• `get` **ownerEdge**(): [`Navi3DEdge`](Navi3DEdge.md)

#### Returns

[`Navi3DEdge`](Navi3DEdge.md)

#### Defined in

math/navigation/Navi3DPointFat.ts:20

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

[Navi3DPoint](Navi3DPoint.md).[getTowPointbyDir](Navi3DPoint.md#gettowpointbydir)

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

[Navi3DPoint](Navi3DPoint.md).[pointToLine](Navi3DPoint.md#pointtoline)

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

[Navi3DPoint](Navi3DPoint.md).[dot](Navi3DPoint.md#dot)

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

[Navi3DPoint](Navi3DPoint.md).[getPoints](Navi3DPoint.md#getpoints)

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

[Navi3DPoint](Navi3DPoint.md).[getPointNumbers](Navi3DPoint.md#getpointnumbers)

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

[Navi3DPoint](Navi3DPoint.md).[getAngle](Navi3DPoint.md#getangle)

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

[Navi3DPoint](Navi3DPoint.md).[sqrMagnitude](Navi3DPoint.md#sqrmagnitude)

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

[Navi3DPoint](Navi3DPoint.md).[getZYAngle](Navi3DPoint.md#getzyangle)

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

[Navi3DPoint](Navi3DPoint.md).[sub](Navi3DPoint.md#sub)

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

[Navi3DPoint](Navi3DPoint.md).[add](Navi3DPoint.md#add)

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

[Navi3DPoint](Navi3DPoint.md).[smoothDamp](Navi3DPoint.md#smoothdamp)

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

[Navi3DPoint](Navi3DPoint.md).[distance](Navi3DPoint.md#distance)

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

[Navi3DPoint](Navi3DPoint.md).[squareDistance](Navi3DPoint.md#squaredistance)

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

[Navi3DPoint](Navi3DPoint.md).[distanceXZ](Navi3DPoint.md#distancexz)

#### Defined in

math/Vector3.ts:236

___

### set

▸ **set**(`x`, `y`, `z`, `w?`): [`Navi3DPointFat`](Navi3DPointFat.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x` | `number` | `undefined` |
| `y` | `number` | `undefined` |
| `z` | `number` | `undefined` |
| `w` | `number` | `1` |

#### Returns

[`Navi3DPointFat`](Navi3DPointFat.md)

#### Inherited from

[Navi3DPoint](Navi3DPoint.md).[set](Navi3DPoint.md#set)

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

[Navi3DPoint](Navi3DPoint.md).[add](Navi3DPoint.md#add-1)

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

[Navi3DPoint](Navi3DPoint.md).[subVectors](Navi3DPoint.md#subvectors)

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

[Navi3DPoint](Navi3DPoint.md).[addScalar](Navi3DPoint.md#addscalar)

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

[Navi3DPoint](Navi3DPoint.md).[subScalar](Navi3DPoint.md#subscalar)

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

[Navi3DPoint](Navi3DPoint.md).[min](Navi3DPoint.md#min-1)

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

[Navi3DPoint](Navi3DPoint.md).[max](Navi3DPoint.md#max-1)

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

[Navi3DPoint](Navi3DPoint.md).[distanceToSquared](Navi3DPoint.md#distancetosquared)

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

[Navi3DPoint](Navi3DPoint.md).[addXYZW](Navi3DPoint.md#addxyzw)

#### Defined in

math/Vector3.ts:299

___

### clone

▸ **clone**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[Navi3DPoint](Navi3DPoint.md).[clone](Navi3DPoint.md#clone)

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

[Navi3DPoint](Navi3DPoint.md).[copyFrom](Navi3DPoint.md#copyfrom)

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

[Navi3DPoint](Navi3DPoint.md).[decrementBy](Navi3DPoint.md#decrementby)

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

[Navi3DPoint](Navi3DPoint.md).[dotProduct](Navi3DPoint.md#dotproduct)

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

[Navi3DPoint](Navi3DPoint.md).[equals](Navi3DPoint.md#equals)

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

[Navi3DPoint](Navi3DPoint.md).[incrementBy](Navi3DPoint.md#incrementby)

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

[Navi3DPoint](Navi3DPoint.md).[divide](Navi3DPoint.md#divide)

#### Defined in

math/Vector3.ts:351

___

### negate

▸ **negate**(): [`Navi3DPointFat`](Navi3DPointFat.md)

#### Returns

[`Navi3DPointFat`](Navi3DPointFat.md)

#### Inherited from

[Navi3DPoint](Navi3DPoint.md).[negate](Navi3DPoint.md#negate)

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

[Navi3DPoint](Navi3DPoint.md).[normalize](Navi3DPoint.md#normalize)

#### Defined in

math/Vector3.ts:367

___

### applyQuaternion

▸ **applyQuaternion**(`q`): [`Navi3DPointFat`](Navi3DPointFat.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `q` | `any` |

#### Returns

[`Navi3DPointFat`](Navi3DPointFat.md)

#### Inherited from

[Navi3DPoint](Navi3DPoint.md).[applyQuaternion](Navi3DPoint.md#applyquaternion)

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

[Navi3DPoint](Navi3DPoint.md).[applyMatrix4](Navi3DPoint.md#applymatrix4)

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

[Navi3DPoint](Navi3DPoint.md).[scaleBy](Navi3DPoint.md#scaleby)

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

[Navi3DPoint](Navi3DPoint.md).[mul](Navi3DPoint.md#mul)

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

[Navi3DPoint](Navi3DPoint.md).[scale](Navi3DPoint.md#scale)

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

[Navi3DPoint](Navi3DPoint.md).[scaleToRef](Navi3DPoint.md#scaletoref)

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

[Navi3DPoint](Navi3DPoint.md).[setTo](Navi3DPoint.md#setto)

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

[Navi3DPoint](Navi3DPoint.md).[copy](Navi3DPoint.md#copy)

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

[Navi3DPoint](Navi3DPoint.md).[subtract](Navi3DPoint.md#subtract)

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

[Navi3DPoint](Navi3DPoint.md).[multiply](Navi3DPoint.md#multiply)

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

[Navi3DPoint](Navi3DPoint.md).[divided](Navi3DPoint.md#divided)

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

[Navi3DPoint](Navi3DPoint.md).[div](Navi3DPoint.md#div)

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

[Navi3DPoint](Navi3DPoint.md).[lerp](Navi3DPoint.md#lerp)

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

[Navi3DPoint](Navi3DPoint.md).[clamp](Navi3DPoint.md#clamp)

#### Defined in

math/Vector3.ts:514

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Inherited from

[Navi3DPoint](Navi3DPoint.md).[toString](Navi3DPoint.md#tostring)

#### Defined in

math/Vector3.ts:521

___

### normalizeToWay2D\_XY

▸ **normalizeToWay2D_XY**(): `void`

#### Returns

`void`

#### Inherited from

[Navi3DPoint](Navi3DPoint.md).[normalizeToWay2D_XY](Navi3DPoint.md#normalizetoway2d_xy)

#### Defined in

math/Vector3.ts:524

___

### toArray

▸ **toArray**(): `number`[]

#### Returns

`number`[]

#### Inherited from

[Navi3DPoint](Navi3DPoint.md).[toArray](Navi3DPoint.md#toarray)

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

[Navi3DPoint](Navi3DPoint.md).[copyToBytes](Navi3DPoint.md#copytobytes)

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

[Navi3DPoint](Navi3DPoint.md).[crossProduct](Navi3DPoint.md#crossproduct)

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

[Navi3DPoint](Navi3DPoint.md).[crossVectors](Navi3DPoint.md#crossvectors)

#### Defined in

math/Vector3.ts:557

___

### multiplyScalar

▸ **multiplyScalar**(`scalar`): [`Navi3DPointFat`](Navi3DPointFat.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scalar` | `number` |

#### Returns

[`Navi3DPointFat`](Navi3DPointFat.md)

#### Inherited from

[Navi3DPoint](Navi3DPoint.md).[multiplyScalar](Navi3DPoint.md#multiplyscalar)

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

[Navi3DPoint](Navi3DPoint.md).[setFromArray](Navi3DPoint.md#setfromarray)

#### Defined in

math/Vector3.ts:568

___

### divideScalar

▸ **divideScalar**(`scalar`): [`Navi3DPointFat`](Navi3DPointFat.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scalar` | `any` |

#### Returns

[`Navi3DPointFat`](Navi3DPointFat.md)

#### Inherited from

[Navi3DPoint](Navi3DPoint.md).[divideScalar](Navi3DPoint.md#dividescalar)

#### Defined in

math/Vector3.ts:573

___

### clampLength

▸ **clampLength**(`min`, `max`): [`Navi3DPointFat`](Navi3DPointFat.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `number` |
| `max` | `number` |

#### Returns

[`Navi3DPointFat`](Navi3DPointFat.md)

#### Inherited from

[Navi3DPoint](Navi3DPoint.md).[clampLength](Navi3DPoint.md#clamplength)

#### Defined in

math/Vector3.ts:576

___

### setScalar

▸ **setScalar**(`value`): [`Navi3DPointFat`](Navi3DPointFat.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

[`Navi3DPointFat`](Navi3DPointFat.md)

#### Inherited from

[Navi3DPoint](Navi3DPoint.md).[setScalar](Navi3DPoint.md#setscalar)

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

[Navi3DPoint](Navi3DPoint.md).[addScaledVector](Navi3DPoint.md#addscaledvector)

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

[Navi3DPoint](Navi3DPoint.md).[pointInsideTriangle](Navi3DPoint.md#pointinsidetriangle)

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

[Navi3DPoint](Navi3DPoint.md).[serialize](Navi3DPoint.md#serialize)

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

#### Inherited from

[Navi3DPoint](Navi3DPoint.md).[equalPoint](Navi3DPoint.md#equalpoint)

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

#### Inherited from

[Navi3DPoint](Navi3DPoint.md).[calcDistance](Navi3DPoint.md#calcdistance)

#### Defined in

math/navigation/Navi3DPoint.ts:35

___

### scalePoint

▸ **scalePoint**(`value?`): [`Navi3DPointFat`](Navi3DPointFat.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `number` | `0.7` |

#### Returns

[`Navi3DPointFat`](Navi3DPointFat.md)

#### Defined in

math/navigation/Navi3DPointFat.ts:24
