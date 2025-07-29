[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / GeometryUtil

# Class: GeometryUtil

## Table of contents

### Constructors

- [constructor](GeometryUtil.md#constructor)

### Methods

- [merge](GeometryUtil.md#merge)
- [mergeNumber](GeometryUtil.md#mergenumber)
- [generateNormal](GeometryUtil.md#generatenormal)
- [generateTangent](GeometryUtil.md#generatetangent)
- [packUV](GeometryUtil.md#packuv)

## Constructors

### constructor

• **new GeometryUtil**(): [`GeometryUtil`](GeometryUtil.md)

#### Returns

[`GeometryUtil`](GeometryUtil.md)

## Methods

### merge

▸ **merge**(`geometries`, `matrixes`, `target?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `geometries` | [`GeometryBase`](GeometryBase.md)[] |
| `matrixes` | [`Matrix4`](Matrix4.md)[] |
| `target?` | [`GeometryBase`](GeometryBase.md) |

#### Returns

`void`

#### Defined in

util/GeometryUtil.ts:7

___

### mergeNumber

▸ **mergeNumber**(`geometries`, `num`, `target?`): [`GeometryBase`](GeometryBase.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `geometries` | [`GeometryBase`](GeometryBase.md) |
| `num` | `number` |
| `target?` | [`GeometryBase`](GeometryBase.md) |

#### Returns

[`GeometryBase`](GeometryBase.md)

#### Defined in

util/GeometryUtil.ts:13

___

### generateNormal

▸ **generateNormal**(): `void`

#### Returns

`void`

#### Defined in

util/GeometryUtil.ts:66

___

### generateTangent

▸ **generateTangent**(): `void`

#### Returns

`void`

#### Defined in

util/GeometryUtil.ts:67

___

### packUV

▸ **packUV**(): `void`

#### Returns

`void`

#### Defined in

util/GeometryUtil.ts:68
