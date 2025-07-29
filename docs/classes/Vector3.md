[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / Vector3

# Class: Vector3

## Hierarchy

- **`Vector3`**

  ↳ [`Navi3DPoint`](Navi3DPoint.md)

  ↳ [`Navi3DTriangle`](Navi3DTriangle.md)

## Table of contents

### Constructors

- [constructor](Vector3.md#constructor)

### Properties

- [MAX](Vector3.md#max)
- [MIN](Vector3.md#min)
- [SAFE\_MAX](Vector3.md#safe_max)
- [SAFE\_MIN](Vector3.md#safe_min)
- [X\_AXIS](Vector3.md#x_axis)
- [neg\_X\_AXIS](Vector3.md#neg_x_axis)
- [Y\_AXIS](Vector3.md#y_axis)
- [Z\_AXIS](Vector3.md#z_axis)
- [HELP\_0](Vector3.md#help_0)
- [HELP\_1](Vector3.md#help_1)
- [HELP\_2](Vector3.md#help_2)
- [EPSILON](Vector3.md#epsilon)
- [HELP\_3](Vector3.md#help_3)
- [HELP\_4](Vector3.md#help_4)
- [HELP\_5](Vector3.md#help_5)
- [HELP\_6](Vector3.md#help_6)
- [x](Vector3.md#x)
- [y](Vector3.md#y)
- [z](Vector3.md#z)
- [w](Vector3.md#w)
- [index](Vector3.md#index)

### Accessors

- [ZERO](Vector3.md#zero)
- [ONE](Vector3.md#one)
- [LEFT](Vector3.md#left)
- [RIGHT](Vector3.md#right)
- [UP](Vector3.md#up)
- [DOWN](Vector3.md#down)
- [BACK](Vector3.md#back)
- [FORWARD](Vector3.md#forward)
- [a](Vector3.md#a)
- [r](Vector3.md#r)
- [g](Vector3.md#g)
- [b](Vector3.md#b)
- [length](Vector3.md#length)
- [lengthSquared](Vector3.md#lengthsquared)
- [position](Vector3.md#position)

### Methods

- [getTowPointbyDir](Vector3.md#gettowpointbydir)
- [pointToLine](Vector3.md#pointtoline)
- [dot](Vector3.md#dot)
- [getPoints](Vector3.md#getpoints)
- [getPointNumbers](Vector3.md#getpointnumbers)
- [getAngle](Vector3.md#getangle)
- [sqrMagnitude](Vector3.md#sqrmagnitude)
- [getZYAngle](Vector3.md#getzyangle)
- [sub](Vector3.md#sub)
- [add](Vector3.md#add)
- [smoothDamp](Vector3.md#smoothdamp)
- [distance](Vector3.md#distance)
- [squareDistance](Vector3.md#squaredistance)
- [distanceXZ](Vector3.md#distancexz)
- [set](Vector3.md#set)
- [add](Vector3.md#add-1)
- [subVectors](Vector3.md#subvectors)
- [addScalar](Vector3.md#addscalar)
- [subScalar](Vector3.md#subscalar)
- [min](Vector3.md#min-1)
- [max](Vector3.md#max-1)
- [distanceToSquared](Vector3.md#distancetosquared)
- [addXYZW](Vector3.md#addxyzw)
- [clone](Vector3.md#clone)
- [copyFrom](Vector3.md#copyfrom)
- [decrementBy](Vector3.md#decrementby)
- [dotProduct](Vector3.md#dotproduct)
- [equals](Vector3.md#equals)
- [incrementBy](Vector3.md#incrementby)
- [divide](Vector3.md#divide)
- [negate](Vector3.md#negate)
- [normalize](Vector3.md#normalize)
- [applyQuaternion](Vector3.md#applyquaternion)
- [applyMatrix4](Vector3.md#applymatrix4)
- [scaleBy](Vector3.md#scaleby)
- [mul](Vector3.md#mul)
- [scale](Vector3.md#scale)
- [scaleToRef](Vector3.md#scaletoref)
- [setTo](Vector3.md#setto)
- [copy](Vector3.md#copy)
- [subtract](Vector3.md#subtract)
- [multiply](Vector3.md#multiply)
- [divided](Vector3.md#divided)
- [div](Vector3.md#div)
- [lerp](Vector3.md#lerp)
- [clamp](Vector3.md#clamp)
- [toString](Vector3.md#tostring)
- [normalizeToWay2D\_XY](Vector3.md#normalizetoway2d_xy)
- [toArray](Vector3.md#toarray)
- [copyToBytes](Vector3.md#copytobytes)
- [crossProduct](Vector3.md#crossproduct)
- [crossVectors](Vector3.md#crossvectors)
- [multiplyScalar](Vector3.md#multiplyscalar)
- [setFromArray](Vector3.md#setfromarray)
- [divideScalar](Vector3.md#dividescalar)
- [clampLength](Vector3.md#clamplength)
- [setScalar](Vector3.md#setscalar)
- [addScaledVector](Vector3.md#addscaledvector)
- [pointInsideTriangle](Vector3.md#pointinsidetriangle)
- [serialize](Vector3.md#serialize)

## Constructors

### constructor

• **new Vector3**(`x?`, `y?`, `z?`, `w?`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x` | `number` | `0` |
| `y` | `number` | `0` |
| `z` | `number` | `0` |
| `w` | `number` | `0` |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

math/Vector3.ts:67

## Properties

### MAX

▪ `Static` `Readonly` **MAX**: [`Vector3`](Vector3.md)

#### Defined in

math/Vector3.ts:2

___

### MIN

▪ `Static` `Readonly` **MIN**: [`Vector3`](Vector3.md)

#### Defined in

math/Vector3.ts:7

___

### SAFE\_MAX

▪ `Static` `Readonly` **SAFE\_MAX**: [`Vector3`](Vector3.md)

#### Defined in

math/Vector3.ts:12

___

### SAFE\_MIN

▪ `Static` `Readonly` **SAFE\_MIN**: [`Vector3`](Vector3.md)

#### Defined in

math/Vector3.ts:18

___

### X\_AXIS

▪ `Static` `Readonly` **X\_AXIS**: [`Vector3`](Vector3.md)

#### Defined in

math/Vector3.ts:24

___

### neg\_X\_AXIS

▪ `Static` `Readonly` **neg\_X\_AXIS**: [`Vector3`](Vector3.md)

#### Defined in

math/Vector3.ts:25

___

### Y\_AXIS

▪ `Static` `Readonly` **Y\_AXIS**: [`Vector3`](Vector3.md)

#### Defined in

math/Vector3.ts:26

___

### Z\_AXIS

▪ `Static` `Readonly` **Z\_AXIS**: [`Vector3`](Vector3.md)

#### Defined in

math/Vector3.ts:27

___

### HELP\_0

▪ `Static` **HELP\_0**: [`Vector3`](Vector3.md)

#### Defined in

math/Vector3.ts:28

___

### HELP\_1

▪ `Static` **HELP\_1**: [`Vector3`](Vector3.md)

#### Defined in

math/Vector3.ts:29

___

### HELP\_2

▪ `Static` **HELP\_2**: [`Vector3`](Vector3.md)

#### Defined in

math/Vector3.ts:30

___

### EPSILON

▪ `Static` `Readonly` **EPSILON**: `number` = `0.00001`

#### Defined in

math/Vector3.ts:31

___

### HELP\_3

▪ `Static` **HELP\_3**: [`Vector3`](Vector3.md)

#### Defined in

math/Vector3.ts:32

___

### HELP\_4

▪ `Static` **HELP\_4**: [`Vector3`](Vector3.md)

#### Defined in

math/Vector3.ts:33

___

### HELP\_5

▪ `Static` **HELP\_5**: [`Vector3`](Vector3.md)

#### Defined in

math/Vector3.ts:34

___

### HELP\_6

▪ `Static` **HELP\_6**: [`Vector3`](Vector3.md)

#### Defined in

math/Vector3.ts:35

___

### x

• **x**: `number` = `0`

#### Defined in

math/Vector3.ts:60

___

### y

• **y**: `number` = `0`

#### Defined in

math/Vector3.ts:61

___

### z

• **z**: `number` = `0`

#### Defined in

math/Vector3.ts:62

___

### w

• **w**: `number` = `1`

#### Defined in

math/Vector3.ts:63

___

### index

• **index**: `number` = `0`

#### Defined in

math/Vector3.ts:64

## Accessors

### ZERO

• `get` **ZERO**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

math/Vector3.ts:36

___

### ONE

• `get` **ONE**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

math/Vector3.ts:39

___

### LEFT

• `get` **LEFT**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

math/Vector3.ts:42

___

### RIGHT

• `get` **RIGHT**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

math/Vector3.ts:45

___

### UP

• `get` **UP**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

math/Vector3.ts:48

___

### DOWN

• `get` **DOWN**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

math/Vector3.ts:51

___

### BACK

• `get` **BACK**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

math/Vector3.ts:54

___

### FORWARD

• `get` **FORWARD**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

math/Vector3.ts:57

___

### a

• `get` **a**(): `number`

#### Returns

`number`

#### Defined in

math/Vector3.ts:84

• `set` **a**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

math/Vector3.ts:72

___

### r

• `get` **r**(): `number`

#### Returns

`number`

#### Defined in

math/Vector3.ts:87

• `set` **r**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

math/Vector3.ts:75

___

### g

• `get` **g**(): `number`

#### Returns

`number`

#### Defined in

math/Vector3.ts:90

• `set` **g**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

math/Vector3.ts:78

___

### b

• `get` **b**(): `number`

#### Returns

`number`

#### Defined in

math/Vector3.ts:93

• `set` **b**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

math/Vector3.ts:81

___

### length

• `get` **length**(): `number`

#### Returns

`number`

#### Defined in

math/Vector3.ts:96

___

### lengthSquared

• `get` **lengthSquared**(): `number`

#### Returns

`number`

#### Defined in

math/Vector3.ts:99

___

### position

• `get` **position**(): `this`

#### Returns

`this`

#### Defined in

math/Vector3.ts:102

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

#### Defined in

math/Vector3.ts:236

___

### set

▸ **set**(`x`, `y`, `z`, `w?`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x` | `number` | `undefined` |
| `y` | `number` | `undefined` |
| `z` | `number` | `undefined` |
| `w` | `number` | `1` |

#### Returns

[`Vector3`](Vector3.md)

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

#### Defined in

math/Vector3.ts:299

___

### clone

▸ **clone**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

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

#### Defined in

math/Vector3.ts:351

___

### negate

▸ **negate**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

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

#### Defined in

math/Vector3.ts:367

___

### applyQuaternion

▸ **applyQuaternion**(`q`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `q` | `any` |

#### Returns

[`Vector3`](Vector3.md)

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

#### Defined in

math/Vector3.ts:514

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

math/Vector3.ts:521

___

### normalizeToWay2D\_XY

▸ **normalizeToWay2D_XY**(): `void`

#### Returns

`void`

#### Defined in

math/Vector3.ts:524

___

### toArray

▸ **toArray**(): `number`[]

#### Returns

`number`[]

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

#### Defined in

math/Vector3.ts:557

___

### multiplyScalar

▸ **multiplyScalar**(`scalar`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scalar` | `number` |

#### Returns

[`Vector3`](Vector3.md)

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

#### Defined in

math/Vector3.ts:568

___

### divideScalar

▸ **divideScalar**(`scalar`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scalar` | `any` |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

math/Vector3.ts:573

___

### clampLength

▸ **clampLength**(`min`, `max`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `number` |
| `max` | `number` |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

math/Vector3.ts:576

___

### setScalar

▸ **setScalar**(`value`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

[`Vector3`](Vector3.md)

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

#### Defined in

math/Vector3.ts:660
