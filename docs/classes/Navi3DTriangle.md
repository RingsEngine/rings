[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / Navi3DTriangle

# Class: Navi3DTriangle

## Hierarchy

- [`Vector3`](Vector3.md)

  ↳ **`Navi3DTriangle`**

## Implements

- [`IQuadNode`](../interfaces/IQuadNode.md)

## Table of contents

### Constructors

- [constructor](Navi3DTriangle.md#constructor)

### Properties

- [MAX](Navi3DTriangle.md#max)
- [MIN](Navi3DTriangle.md#min)
- [SAFE\_MAX](Navi3DTriangle.md#safe_max)
- [SAFE\_MIN](Navi3DTriangle.md#safe_min)
- [X\_AXIS](Navi3DTriangle.md#x_axis)
- [neg\_X\_AXIS](Navi3DTriangle.md#neg_x_axis)
- [Y\_AXIS](Navi3DTriangle.md#y_axis)
- [Z\_AXIS](Navi3DTriangle.md#z_axis)
- [HELP\_0](Navi3DTriangle.md#help_0)
- [HELP\_1](Navi3DTriangle.md#help_1)
- [HELP\_2](Navi3DTriangle.md#help_2)
- [EPSILON](Navi3DTriangle.md#epsilon)
- [HELP\_3](Navi3DTriangle.md#help_3)
- [HELP\_4](Navi3DTriangle.md#help_4)
- [HELP\_5](Navi3DTriangle.md#help_5)
- [HELP\_6](Navi3DTriangle.md#help_6)
- [x](Navi3DTriangle.md#x)
- [y](Navi3DTriangle.md#y)
- [z](Navi3DTriangle.md#z)
- [w](Navi3DTriangle.md#w)
- [index](Navi3DTriangle.md#index)
- [f](Navi3DTriangle.md#f)
- [gg](Navi3DTriangle.md#gg)
- [h](Navi3DTriangle.md#h)
- [parent](Navi3DTriangle.md#parent)
- [costMultiplier](Navi3DTriangle.md#costmultiplier)
- [openId](Navi3DTriangle.md#openid)
- [closeId](Navi3DTriangle.md#closeid)

### Accessors

- [ZERO](Navi3DTriangle.md#zero)
- [ONE](Navi3DTriangle.md#one)
- [LEFT](Navi3DTriangle.md#left)
- [RIGHT](Navi3DTriangle.md#right)
- [UP](Navi3DTriangle.md#up)
- [DOWN](Navi3DTriangle.md#down)
- [BACK](Navi3DTriangle.md#back)
- [FORWARD](Navi3DTriangle.md#forward)
- [a](Navi3DTriangle.md#a)
- [r](Navi3DTriangle.md#r)
- [g](Navi3DTriangle.md#g)
- [b](Navi3DTriangle.md#b)
- [length](Navi3DTriangle.md#length)
- [lengthSquared](Navi3DTriangle.md#lengthsquared)
- [position](Navi3DTriangle.md#position)
- [aabb](Navi3DTriangle.md#aabb)
- [isTriangle](Navi3DTriangle.md#istriangle)
- [id](Navi3DTriangle.md#id)
- [plane](Navi3DTriangle.md#plane)
- [points](Navi3DTriangle.md#points)
- [walkAble](Navi3DTriangle.md#walkable)
- [edges](Navi3DTriangle.md#edges)

### Methods

- [getTowPointbyDir](Navi3DTriangle.md#gettowpointbydir)
- [pointToLine](Navi3DTriangle.md#pointtoline)
- [dot](Navi3DTriangle.md#dot)
- [getPoints](Navi3DTriangle.md#getpoints)
- [getPointNumbers](Navi3DTriangle.md#getpointnumbers)
- [getAngle](Navi3DTriangle.md#getangle)
- [sqrMagnitude](Navi3DTriangle.md#sqrmagnitude)
- [getZYAngle](Navi3DTriangle.md#getzyangle)
- [sub](Navi3DTriangle.md#sub)
- [add](Navi3DTriangle.md#add)
- [smoothDamp](Navi3DTriangle.md#smoothdamp)
- [distance](Navi3DTriangle.md#distance)
- [squareDistance](Navi3DTriangle.md#squaredistance)
- [distanceXZ](Navi3DTriangle.md#distancexz)
- [set](Navi3DTriangle.md#set)
- [add](Navi3DTriangle.md#add-1)
- [subVectors](Navi3DTriangle.md#subvectors)
- [addScalar](Navi3DTriangle.md#addscalar)
- [subScalar](Navi3DTriangle.md#subscalar)
- [min](Navi3DTriangle.md#min-1)
- [max](Navi3DTriangle.md#max-1)
- [distanceToSquared](Navi3DTriangle.md#distancetosquared)
- [addXYZW](Navi3DTriangle.md#addxyzw)
- [clone](Navi3DTriangle.md#clone)
- [copyFrom](Navi3DTriangle.md#copyfrom)
- [decrementBy](Navi3DTriangle.md#decrementby)
- [dotProduct](Navi3DTriangle.md#dotproduct)
- [equals](Navi3DTriangle.md#equals)
- [incrementBy](Navi3DTriangle.md#incrementby)
- [divide](Navi3DTriangle.md#divide)
- [negate](Navi3DTriangle.md#negate)
- [normalize](Navi3DTriangle.md#normalize)
- [applyQuaternion](Navi3DTriangle.md#applyquaternion)
- [applyMatrix4](Navi3DTriangle.md#applymatrix4)
- [scaleBy](Navi3DTriangle.md#scaleby)
- [mul](Navi3DTriangle.md#mul)
- [scale](Navi3DTriangle.md#scale)
- [scaleToRef](Navi3DTriangle.md#scaletoref)
- [setTo](Navi3DTriangle.md#setto)
- [copy](Navi3DTriangle.md#copy)
- [subtract](Navi3DTriangle.md#subtract)
- [multiply](Navi3DTriangle.md#multiply)
- [divided](Navi3DTriangle.md#divided)
- [div](Navi3DTriangle.md#div)
- [lerp](Navi3DTriangle.md#lerp)
- [clamp](Navi3DTriangle.md#clamp)
- [toString](Navi3DTriangle.md#tostring)
- [normalizeToWay2D\_XY](Navi3DTriangle.md#normalizetoway2d_xy)
- [toArray](Navi3DTriangle.md#toarray)
- [copyToBytes](Navi3DTriangle.md#copytobytes)
- [crossProduct](Navi3DTriangle.md#crossproduct)
- [crossVectors](Navi3DTriangle.md#crossvectors)
- [multiplyScalar](Navi3DTriangle.md#multiplyscalar)
- [setFromArray](Navi3DTriangle.md#setfromarray)
- [divideScalar](Navi3DTriangle.md#dividescalar)
- [clampLength](Navi3DTriangle.md#clamplength)
- [setScalar](Navi3DTriangle.md#setscalar)
- [addScaledVector](Navi3DTriangle.md#addscaledvector)
- [pointInsideTriangle](Navi3DTriangle.md#pointinsidetriangle)
- [serialize](Navi3DTriangle.md#serialize)
- [initAABB](Navi3DTriangle.md#initaabb)
- [calcGlobalQuadAABB](Navi3DTriangle.md#calcglobalquadaabb)
- [addNeibour](Navi3DTriangle.md#addneibour)
- [getNeibourTriangles](Navi3DTriangle.md#getneibourtriangles)
- [getEdges](Navi3DTriangle.md#getedges)
- [testMask](Navi3DTriangle.md#testmask)
- [getEdgeAgainstPoint](Navi3DTriangle.md#getedgeagainstpoint)
- [getPointAgainstEdge](Navi3DTriangle.md#getpointagainstedge)
- [getPublicEdge](Navi3DTriangle.md#getpublicedge)
- [loopPublicEdge](Navi3DTriangle.md#looppublicedge)
- [randomPoint](Navi3DTriangle.md#randompoint)

## Constructors

### constructor

• **new Navi3DTriangle**(`Id`, `edgeA`, `edgeB`, `edgeC`): [`Navi3DTriangle`](Navi3DTriangle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `Id` | `number` |
| `edgeA` | [`Navi3DEdge`](Navi3DEdge.md) |
| `edgeB` | [`Navi3DEdge`](Navi3DEdge.md) |
| `edgeC` | [`Navi3DEdge`](Navi3DEdge.md) |

#### Returns

[`Navi3DTriangle`](Navi3DTriangle.md)

#### Overrides

[Vector3](Vector3.md).[constructor](Vector3.md#constructor)

#### Defined in

math/navigation/Navi3DTriangle.ts:59

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

### f

• **f**: `number` = `0`

#### Defined in

math/navigation/Navi3DTriangle.ts:27

___

### gg

• **gg**: `number` = `0`

#### Defined in

math/navigation/Navi3DTriangle.ts:29

___

### h

• **h**: `number` = `0`

#### Defined in

math/navigation/Navi3DTriangle.ts:31

___

### parent

• **parent**: [`Navi3DTriangle`](Navi3DTriangle.md)

#### Defined in

math/navigation/Navi3DTriangle.ts:33

___

### costMultiplier

• **costMultiplier**: `number` = `1.0`

#### Defined in

math/navigation/Navi3DTriangle.ts:35

___

### openId

• **openId**: `number` = `0`

#### Defined in

math/navigation/Navi3DTriangle.ts:37

___

### closeId

• **closeId**: `number` = `0`

#### Defined in

math/navigation/Navi3DTriangle.ts:39

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

### aabb

• `get` **aabb**(): [`QuadAABB`](QuadAABB.md)

#### Returns

[`QuadAABB`](QuadAABB.md)

#### Implementation of

[IQuadNode](../interfaces/IQuadNode.md).[aabb](../interfaces/IQuadNode.md#aabb)

#### Defined in

math/navigation/Navi3DTriangle.ts:41

___

### isTriangle

• `get` **isTriangle**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IQuadNode](../interfaces/IQuadNode.md).[isTriangle](../interfaces/IQuadNode.md#istriangle)

#### Defined in

math/navigation/Navi3DTriangle.ts:55

___

### id

• `get` **id**(): `number`

#### Returns

`number`

#### Defined in

math/navigation/Navi3DTriangle.ts:106

___

### plane

• `get` **plane**(): [`Plane3D`](Plane3D.md)

#### Returns

[`Plane3D`](Plane3D.md)

#### Implementation of

[IQuadNode](../interfaces/IQuadNode.md).[plane](../interfaces/IQuadNode.md#plane)

#### Defined in

math/navigation/Navi3DTriangle.ts:110

___

### points

• `get` **points**(): [`Navi3DPoint`](Navi3DPoint.md)[]

#### Returns

[`Navi3DPoint`](Navi3DPoint.md)[]

#### Defined in

math/navigation/Navi3DTriangle.ts:114

___

### walkAble

• `get` **walkAble**(): `boolean`

#### Returns

`boolean`

#### Defined in

math/navigation/Navi3DTriangle.ts:164

___

### edges

• `get` **edges**(): [`Navi3DEdge`](Navi3DEdge.md)[]

#### Returns

[`Navi3DEdge`](Navi3DEdge.md)[]

#### Defined in

math/navigation/Navi3DTriangle.ts:168

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

▸ **set**(`x`, `y`, `z`, `w?`): [`Navi3DTriangle`](Navi3DTriangle.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x` | `number` | `undefined` |
| `y` | `number` | `undefined` |
| `z` | `number` | `undefined` |
| `w` | `number` | `1` |

#### Returns

[`Navi3DTriangle`](Navi3DTriangle.md)

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

▸ **negate**(): [`Navi3DTriangle`](Navi3DTriangle.md)

#### Returns

[`Navi3DTriangle`](Navi3DTriangle.md)

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

▸ **applyQuaternion**(`q`): [`Navi3DTriangle`](Navi3DTriangle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `q` | `any` |

#### Returns

[`Navi3DTriangle`](Navi3DTriangle.md)

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

▸ **multiplyScalar**(`scalar`): [`Navi3DTriangle`](Navi3DTriangle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scalar` | `number` |

#### Returns

[`Navi3DTriangle`](Navi3DTriangle.md)

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

▸ **divideScalar**(`scalar`): [`Navi3DTriangle`](Navi3DTriangle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `scalar` | `any` |

#### Returns

[`Navi3DTriangle`](Navi3DTriangle.md)

#### Inherited from

[Vector3](Vector3.md).[divideScalar](Vector3.md#dividescalar)

#### Defined in

math/Vector3.ts:573

___

### clampLength

▸ **clampLength**(`min`, `max`): [`Navi3DTriangle`](Navi3DTriangle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `number` |
| `max` | `number` |

#### Returns

[`Navi3DTriangle`](Navi3DTriangle.md)

#### Inherited from

[Vector3](Vector3.md).[clampLength](Vector3.md#clamplength)

#### Defined in

math/Vector3.ts:576

___

### setScalar

▸ **setScalar**(`value`): [`Navi3DTriangle`](Navi3DTriangle.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

[`Navi3DTriangle`](Navi3DTriangle.md)

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

### initAABB

▸ **initAABB**(): `void`

#### Returns

`void`

#### Implementation of

[IQuadNode](../interfaces/IQuadNode.md).[initAABB](../interfaces/IQuadNode.md#initaabb)

#### Defined in

math/navigation/Navi3DTriangle.ts:45

___

### calcGlobalQuadAABB

▸ **calcGlobalQuadAABB**(): `void`

#### Returns

`void`

#### Implementation of

[IQuadNode](../interfaces/IQuadNode.md).[calcGlobalQuadAABB](../interfaces/IQuadNode.md#calcglobalquadaabb)

#### Defined in

math/navigation/Navi3DTriangle.ts:53

___

### addNeibour

▸ **addNeibour**(`edge`, `triangle`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `edge` | [`Navi3DEdge`](Navi3DEdge.md) |
| `triangle` | [`Navi3DTriangle`](Navi3DTriangle.md) |

#### Returns

`void`

#### Defined in

math/navigation/Navi3DTriangle.ts:118

___

### getNeibourTriangles

▸ **getNeibourTriangles**(`list?`, `edgeMask?`, `triangleMask?`): [`Navi3DTriangle`](Navi3DTriangle.md)[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `list` | [`Navi3DTriangle`](Navi3DTriangle.md)[] | `null` |
| `edgeMask` | `number` | `1` |
| `triangleMask` | `number` | `1` |

#### Returns

[`Navi3DTriangle`](Navi3DTriangle.md)[]

#### Defined in

math/navigation/Navi3DTriangle.ts:126

___

### getEdges

▸ **getEdges**(`list?`, `edgeMask?`): [`Navi3DEdge`](Navi3DEdge.md)[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `list` | [`Navi3DEdge`](Navi3DEdge.md)[] | `null` |
| `edgeMask` | `number` | `1` |

#### Returns

[`Navi3DEdge`](Navi3DEdge.md)[]

#### Defined in

math/navigation/Navi3DTriangle.ts:149

___

### testMask

▸ **testMask**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`boolean`

#### Defined in

math/navigation/Navi3DTriangle.ts:172

___

### getEdgeAgainstPoint

▸ **getEdgeAgainstPoint**(`edge`): [`Navi3DPoint`](Navi3DPoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `edge` | [`Navi3DEdge`](Navi3DEdge.md) |

#### Returns

[`Navi3DPoint`](Navi3DPoint.md)

#### Defined in

math/navigation/Navi3DTriangle.ts:176

___

### getPointAgainstEdge

▸ **getPointAgainstEdge**(`point`): [`Navi3DEdge`](Navi3DEdge.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`Navi3DPoint`](Navi3DPoint.md) |

#### Returns

[`Navi3DEdge`](Navi3DEdge.md)

#### Defined in

math/navigation/Navi3DTriangle.ts:180

___

### getPublicEdge

▸ **getPublicEdge**(`triangle`): [`Navi3DEdge`](Navi3DEdge.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `triangle` | [`Navi3DTriangle`](Navi3DTriangle.md) |

#### Returns

[`Navi3DEdge`](Navi3DEdge.md)

#### Defined in

math/navigation/Navi3DTriangle.ts:184

___

### loopPublicEdge

▸ **loopPublicEdge**(`triangle`): [`Navi3DEdge`](Navi3DEdge.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `triangle` | [`Navi3DTriangle`](Navi3DTriangle.md) |

#### Returns

[`Navi3DEdge`](Navi3DEdge.md)

#### Defined in

math/navigation/Navi3DTriangle.ts:196

___

### randomPoint

▸ **randomPoint**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

math/navigation/Navi3DTriangle.ts:209
