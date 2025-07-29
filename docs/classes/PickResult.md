[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / PickResult

# Class: PickResult

拾取结果信息，包含目标Object3D、位置、UV等数据
   // 内部使用

## Table of contents

### Constructors

- [constructor](PickResult.md#constructor)

### Properties

- [localPosition](PickResult.md#localposition)
- [worldPosition](PickResult.md#worldposition)
- [uv](PickResult.md#uv)
- [faceIndex](PickResult.md#faceindex)
- [isIn](PickResult.md#isin)
- [t](PickResult.md#t)
- [u](PickResult.md#u)
- [v](PickResult.md#v)
- [triangle](PickResult.md#triangle)
- [v0](PickResult.md#v0)
- [v1](PickResult.md#v1)
- [v2](PickResult.md#v2)
- [pickList](PickResult.md#picklist)
- [color](PickResult.md#color)

## Constructors

### constructor

• **new PickResult**(): [`PickResult`](PickResult.md)

#### Returns

[`PickResult`](PickResult.md)

## Properties

### localPosition

• **localPosition**: [`Vector3`](Vector3.md)

模型上的相交点(局部坐标系)

#### Defined in

io/PickResult.ts:14

___

### worldPosition

• **worldPosition**: [`Vector3`](Vector3.md)

模型上的相交点(世界坐标系)

#### Defined in

io/PickResult.ts:19

___

### uv

• **uv**: [`Vector2`](Vector2.md)

模型上的UV坐标
只有当对象的PickType为UVPick且模型有UV时才有效

**`See`**

PickType

#### Defined in

io/PickResult.ts:26

___

### faceIndex

• **faceIndex**: `number`

网格相交位置的三角形索引

#### Defined in

io/PickResult.ts:31

___

### isIn

• **isIn**: `boolean` = `false`

#### Defined in

io/PickResult.ts:33

___

### t

• **t**: `number` = `0`

#### Defined in

io/PickResult.ts:34

___

### u

• **u**: `number` = `0`

#### Defined in

io/PickResult.ts:35

___

### v

• **v**: `number` = `0`

#### Defined in

io/PickResult.ts:36

___

### triangle

• **triangle**: [`Triangle`](Triangle.md)

网格相交位置的三角形数据

#### Defined in

io/PickResult.ts:41

___

### v0

• **v0**: `number`

网格相交位置的uv0坐标

#### Defined in

io/PickResult.ts:47

___

### v1

• **v1**: `number`

网格相交位置的uv1坐标

#### Defined in

io/PickResult.ts:53

___

### v2

• **v2**: `number`

#### Defined in

io/PickResult.ts:58

___

### pickList

• **pickList**: `any`

#### Defined in

io/PickResult.ts:63

___

### color

• **color**: [`Color`](Color.md)

#### Defined in

io/PickResult.ts:68
