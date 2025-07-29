[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / Plane3D

# Class: Plane3D

**`Language`**

zh_CN
 Plane3D

**`Classdesc`**

Plane3D 类 3D空间中的平面表示数据
由a,b,c,d4个分量组成 在三维空间中定义了一个平面 Ax + By + Cz + D = 0

**`Include Example`**

geom/Plane3D.ts

**`Platform`**

Web,Native

## Table of contents

### Constructors

- [constructor](Plane3D.md#constructor)

### Properties

- [a](Plane3D.md#a)
- [b](Plane3D.md#b)
- [c](Plane3D.md#c)
- [d](Plane3D.md#d)

### Methods

- [setTo](Plane3D.md#setto)
- [fromPoints](Plane3D.md#frompoints)
- [fromNormalAndPoint](Plane3D.md#fromnormalandpoint)
- [normalize](Plane3D.md#normalize)
- [distance](Plane3D.md#distance)
- [classifyPoint](Plane3D.md#classifypoint)
- [toString](Plane3D.md#tostring)

## Constructors

### constructor

• **new Plane3D**(`a?`, `b?`, `c?`, `d?`): [`Plane3D`](Plane3D.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `a` | `number` | `0` |
| `b` | `number` | `0` |
| `c` | `number` | `0` |
| `d` | `number` | `0` |

#### Returns

[`Plane3D`](Plane3D.md)

**`Language`**

zh_CN
创建一个平面实例

**`Platform`**

Web,Native

#### Defined in

math/Plane3D.ts:92

## Properties

### a

• **a**: `number`

**`Language`**

zh_CN
平面中的a分量

**`Platform`**

Web,Native

#### Defined in

math/Plane3D.ts:23

___

### b

• **b**: `number`

**`Language`**

zh_CN
平面中的b分量

**`Platform`**

Web,Native

#### Defined in

math/Plane3D.ts:34

___

### c

• **c**: `number`

**`Language`**

zh_CN
平面中的c分量

**`Platform`**

Web,Native

#### Defined in

math/Plane3D.ts:45

___

### d

• **d**: `number`

**`Language`**

zh_CN
平面中的d分量

**`Platform`**

Web,Native

#### Defined in

math/Plane3D.ts:56

## Methods

### setTo

▸ **setTo**(`a?`, `b?`, `c?`, `d?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `a` | `number` | `0` |
| `b` | `number` | `0` |
| `c` | `number` | `0` |
| `d` | `number` | `0` |

#### Returns

`void`

**`Language`**

zh_CN
填充平面的各分量的值

**`Platform`**

Web,Native

#### Defined in

math/Plane3D.ts:108

___

### fromPoints

▸ **fromPoints**(`p0`, `p1`, `p2`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `p0` | [`Vector3`](Vector3.md) | Vector3 |
| `p1` | [`Vector3`](Vector3.md) | Vector3 |
| `p2` | [`Vector3`](Vector3.md) | Vector3 |

#### Returns

`void`

**`Language`**

zh_CN
由3个坐标来创建一个3d平面

**`Platform`**

Web,Native

#### Defined in

math/Plane3D.ts:131

___

### fromNormalAndPoint

▸ **fromNormalAndPoint**(`normal`, `point`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `normal` | [`Vector3`](Vector3.md) | Vector3 |
| `point` | [`Vector3`](Vector3.md) | Vector3 |

#### Returns

`void`

**`Language`**

zh_CN
由一条normal向量和一个坐标创建一个3d平面

**`Platform`**

Web,Native

#### Defined in

math/Plane3D.ts:159

___

### normalize

▸ **normalize**(): `number`

#### Returns

`number`

number 返回平面长度

**`Language`**

zh_CN
单位化3d平面

**`Platform`**

Web,Native

#### Defined in

math/Plane3D.ts:177

___

### distance

▸ **distance**(`p`): `number`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `p` | [`Vector3`](Vector3.md) | Vector3 |

#### Returns

`number`

number 返回计算后的距离

**`Language`**

zh_CN
计算3d平面到点p的距离

**`Platform`**

Web,Native

#### Defined in

math/Plane3D.ts:205

___

### classifyPoint

▸ **classifyPoint**(`p`, `epsilon?`): `number`

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `p` | [`Vector3`](Vector3.md) | `undefined` | Vector3 |
| `epsilon` | `number` | `0.01` | 相对偏移值 |

#### Returns

`number`

number int Plane3.FRONT or Plane3D.BACK or Plane3D.INTERSECT

**`Language`**

zh_CN
计算3d平面和点p的空间关系

**`Platform`**

Web,Native

#### Defined in

math/Plane3D.ts:226

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

string

**`Language`**

zh_CN
当前Plane3D以字符串形式返回

**`Platform`**

Web,Native

#### Defined in

math/Plane3D.ts:244
