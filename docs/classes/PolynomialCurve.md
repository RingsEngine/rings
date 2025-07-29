[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / PolynomialCurve

# Class: PolynomialCurve

## Table of contents

### Constructors

- [constructor](PolynomialCurve.md#constructor)

### Properties

- [segments](PolynomialCurve.md#segments)
- [integrationCache](PolynomialCurve.md#integrationcache)
- [doubleIntegrationCache](PolynomialCurve.md#doubleintegrationcache)
- [times](PolynomialCurve.md#times)
- [segmentCount](PolynomialCurve.md#segmentcount)

### Methods

- [calculateMinMax](PolynomialCurve.md#calculateminmax)
- [findMinMaxDoubleIntegrated](PolynomialCurve.md#findminmaxdoubleintegrated)
- [findMinMaxIntegrated](PolynomialCurve.md#findminmaxintegrated)
- [generateIntegrationCache](PolynomialCurve.md#generateintegrationcache)
- [generateDoubleIntegrationCache](PolynomialCurve.md#generatedoubleintegrationcache)
- [integrate](PolynomialCurve.md#integrate)
- [doubleIntegrate](PolynomialCurve.md#doubleintegrate)
- [isValidCurve](PolynomialCurve.md#isvalidcurve)
- [evaluateDoubleIntegrated](PolynomialCurve.md#evaluatedoubleintegrated)
- [evaluateIntegrated](PolynomialCurve.md#evaluateintegrated)
- [evaluate](PolynomialCurve.md#evaluate)
- [buildCurve](PolynomialCurve.md#buildcurve)

## Constructors

### constructor

• **new PolynomialCurve**(): [`PolynomialCurve`](PolynomialCurve.md)

#### Returns

[`PolynomialCurve`](PolynomialCurve.md)

#### Defined in

math/PolynomialCurve.ts:29

## Properties

### segments

• **segments**: [`Polynomial`](Polynomial.md)[] = `[]`

#### Defined in

math/PolynomialCurve.ts:23

___

### integrationCache

• **integrationCache**: `number`[] = `[]`

#### Defined in

math/PolynomialCurve.ts:24

___

### doubleIntegrationCache

• **doubleIntegrationCache**: `number`[] = `[]`

#### Defined in

math/PolynomialCurve.ts:25

___

### times

• **times**: `number`[] = `[]`

#### Defined in

math/PolynomialCurve.ts:26

___

### segmentCount

• **segmentCount**: `number`

#### Defined in

math/PolynomialCurve.ts:27

## Methods

### calculateMinMax

▸ **calculateMinMax**(`minmax`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `minmax` | [`Vector2`](Vector2.md) |
| `value` | `any` |

#### Returns

`void`

#### Defined in

math/PolynomialCurve.ts:36

___

### findMinMaxDoubleIntegrated

▸ **findMinMaxDoubleIntegrated**(): [`Vector2`](Vector2.md)

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

math/PolynomialCurve.ts:41

___

### findMinMaxIntegrated

▸ **findMinMaxIntegrated**(): [`Vector2`](Vector2.md)

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

math/PolynomialCurve.ts:54

___

### generateIntegrationCache

▸ **generateIntegrationCache**(`curve`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `curve` | [`PolynomialCurve`](PolynomialCurve.md) |

#### Returns

`void`

#### Defined in

math/PolynomialCurve.ts:83

___

### generateDoubleIntegrationCache

▸ **generateDoubleIntegrationCache**(`curve`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `curve` | [`PolynomialCurve`](PolynomialCurve.md) |

#### Returns

`void`

#### Defined in

math/PolynomialCurve.ts:99

___

### integrate

▸ **integrate**(): `void`

#### Returns

`void`

#### Defined in

math/PolynomialCurve.ts:115

___

### doubleIntegrate

▸ **doubleIntegrate**(): `void`

#### Returns

`void`

#### Defined in

math/PolynomialCurve.ts:124

___

### isValidCurve

▸ **isValidCurve**(`editorCurve`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `editorCurve` | [`AnimationCurve`](AnimationCurve.md) |

#### Returns

`boolean`

#### Defined in

math/PolynomialCurve.ts:133

___

### evaluateDoubleIntegrated

▸ **evaluateDoubleIntegrated**(`t`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `any` |

#### Returns

`number`

#### Defined in

math/PolynomialCurve.ts:145

___

### evaluateIntegrated

▸ **evaluateIntegrated**(`t`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `any` |

#### Returns

`number`

#### Defined in

math/PolynomialCurve.ts:165

___

### evaluate

▸ **evaluate**(`t`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `any` |

#### Returns

`number`

#### Defined in

math/PolynomialCurve.ts:182

___

### buildCurve

▸ **buildCurve**(`editorCurve`, `scale`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `editorCurve` | [`AnimationCurve`](AnimationCurve.md) |
| `scale` | `number` |

#### Returns

`boolean`

#### Defined in

math/PolynomialCurve.ts:196
