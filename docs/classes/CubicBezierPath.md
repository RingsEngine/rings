[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / CubicBezierPath

# Class: CubicBezierPath

## Table of contents

### Constructors

- [constructor](CubicBezierPath.md#constructor)

### Methods

- [getPathType](CubicBezierPath.md#getpathtype)
- [isClosed](CubicBezierPath.md#isclosed)
- [isValid](CubicBezierPath.md#isvalid)
- [clear](CubicBezierPath.md#clear)
- [computeApproxLength](CubicBezierPath.md#computeapproxlength)
- [computeApproxParamPerUnitLength](CubicBezierPath.md#computeapproxparamperunitlength)
- [computeApproxNormParamPerUnitLength](CubicBezierPath.md#computeapproxnormparamperunitlength)
- [interpolatePoints](CubicBezierPath.md#interpolatepoints)
- [setControlVertices](CubicBezierPath.md#setcontrolvertices)
- [getPoint](CubicBezierPath.md#getpoint)
- [getPointNorm](CubicBezierPath.md#getpointnorm)
- [getTangent](CubicBezierPath.md#gettangent)
- [getTangentNorm](CubicBezierPath.md#gettangentnorm)
- [computeClosestParam](CubicBezierPath.md#computeclosestparam)
- [computeClosestNormParam](CubicBezierPath.md#computeclosestnormparam)

## Constructors

### constructor

• **new CubicBezierPath**(`controlVertices`, `t?`): [`CubicBezierPath`](CubicBezierPath.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `controlVertices` | [`Vector3`](Vector3.md)[] | `undefined` |
| `t` | [`CubicBezierType`](../enums/CubicBezierType.md) | `CubicBezierType.Open` |

#### Returns

[`CubicBezierPath`](CubicBezierPath.md)

#### Defined in

math/CubicBezierPath.ts:23

## Methods

### getPathType

▸ **getPathType**(): [`CubicBezierType`](../enums/CubicBezierType.md)

#### Returns

[`CubicBezierType`](../enums/CubicBezierType.md)

#### Defined in

math/CubicBezierPath.ts:30

___

### isClosed

▸ **isClosed**(): `boolean`

#### Returns

`boolean`

#### Defined in

math/CubicBezierPath.ts:34

___

### isValid

▸ **isValid**(): `boolean`

#### Returns

`boolean`

#### Defined in

math/CubicBezierPath.ts:41

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

math/CubicBezierPath.ts:45

___

### computeApproxLength

▸ **computeApproxLength**(): `number`

#### Returns

`number`

#### Defined in

math/CubicBezierPath.ts:52

___

### computeApproxParamPerUnitLength

▸ **computeApproxParamPerUnitLength**(): `number`

#### Returns

`number`

#### Defined in

math/CubicBezierPath.ts:71

___

### computeApproxNormParamPerUnitLength

▸ **computeApproxNormParamPerUnitLength**(): `number`

#### Returns

`number`

#### Defined in

math/CubicBezierPath.ts:76

___

### interpolatePoints

▸ **interpolatePoints**(`knots`, `t`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `knots` | [`Vector3`](Vector3.md)[] |
| `t` | [`CubicBezierType`](../enums/CubicBezierType.md) |

#### Returns

`void`

#### Defined in

math/CubicBezierPath.ts:81

___

### setControlVertices

▸ **setControlVertices**(`cvs`, `t`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cvs` | [`Vector3`](Vector3.md)[] |
| `t` | [`CubicBezierType`](../enums/CubicBezierType.md) |

#### Returns

`void`

#### Defined in

math/CubicBezierPath.ts:168

___

### getPoint

▸ **getPoint**(`t`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `number` |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

math/CubicBezierPath.ts:182

___

### getPointNorm

▸ **getPointNorm**(`t`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `number` |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

math/CubicBezierPath.ts:207

___

### getTangent

▸ **getTangent**(`t`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `number` |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

math/CubicBezierPath.ts:211

___

### getTangentNorm

▸ **getTangentNorm**(`t`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `number` |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

math/CubicBezierPath.ts:236

___

### computeClosestParam

▸ **computeClosestParam**(`pos`, `paramThreshold`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pos` | [`Vector3`](Vector3.md) |
| `paramThreshold` | `number` |

#### Returns

`number`

#### Defined in

math/CubicBezierPath.ts:240

___

### computeClosestNormParam

▸ **computeClosestNormParam**(`pos`, `paramThreshold`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pos` | [`Vector3`](Vector3.md) |
| `paramThreshold` | `number` |

#### Returns

`number`

#### Defined in

math/CubicBezierPath.ts:268
