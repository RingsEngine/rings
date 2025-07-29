[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / CubicBezierCurve

# Class: CubicBezierCurve

三次贝塞尔曲线

## Table of contents

### Constructors

- [constructor](CubicBezierCurve.md#constructor)

### Methods

- [setControlVertices](CubicBezierCurve.md#setcontrolvertices)
- [getPoint](CubicBezierCurve.md#getpoint)
- [getTangent](CubicBezierCurve.md#gettangent)
- [getClosestParam](CubicBezierCurve.md#getclosestparam)
- [getClosestParamRec](CubicBezierCurve.md#getclosestparamrec)

## Constructors

### constructor

• **new CubicBezierCurve**(`cvs`): [`CubicBezierCurve`](CubicBezierCurve.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cvs` | [`Vector3`](Vector3.md)[] | 更新控制点 |

#### Returns

[`CubicBezierCurve`](CubicBezierCurve.md)

#### Defined in

math/CubicBezierCurve.ts:14

## Methods

### setControlVertices

▸ **setControlVertices**(`cvs`): `void`

根据参数t计算曲线上点的位置

#### Parameters

| Name | Type |
| :------ | :------ |
| `cvs` | [`Vector3`](Vector3.md)[] |

#### Returns

`void`

曲线上的点坐标(Vector3)

#### Defined in

math/CubicBezierCurve.ts:23

___

### getPoint

▸ **getPoint**(`t`): [`Vector3`](Vector3.md)

根据参数t计算曲线上点的位置

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | `number` | 参数值，范围[0-1] |

#### Returns

[`Vector3`](Vector3.md)

曲线上的点坐标(Vector3)

#### Defined in

math/CubicBezierCurve.ts:35

___

### getTangent

▸ **getTangent**(`t`): [`Vector3`](Vector3.md)

计算曲线上参数t处的切线方向

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | `number` | 参数值，范围[0-1] |

#### Returns

[`Vector3`](Vector3.md)

切线方向向量

#### Defined in

math/CubicBezierCurve.ts:60

___

### getClosestParam

▸ **getClosestParam**(`pos`, `paramThreshold?`): `number`

获取曲线上最接近给定点的参数t值

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `pos` | [`Vector3`](Vector3.md) | `undefined` | 给定的点位置 |
| `paramThreshold` | `number` | `0.000001` | 阈值 |

#### Returns

`number`

参数t值，范围[0-1]

#### Defined in

math/CubicBezierCurve.ts:81

___

### getClosestParamRec

▸ **getClosestParamRec**(`pos`, `beginT`, `endT`, `thresholdT`): `number`

递归计算给定范围内最接近点的参数t值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pos` | [`Vector3`](Vector3.md) | 给定的点位置 |
| `beginT` | `number` | 起始参数 |
| `endT` | `number` | 结束参数 |
| `thresholdT` | `number` | 阈值 |

#### Returns

`number`

参数t值

#### Defined in

math/CubicBezierCurve.ts:96
