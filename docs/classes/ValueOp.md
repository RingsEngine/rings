[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / ValueOp

# Class: ValueOp\<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`CurveValueType`](../modules.md#curvevaluetype) |

## Table of contents

### Constructors

- [constructor](ValueOp.md#constructor)

### Methods

- [sub](ValueOp.md#sub)

## Constructors

### constructor

• **new ValueOp**\<`T`\>(): [`ValueOp`](ValueOp.md)\<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`CurveValueType`](../modules.md#curvevaluetype) |

#### Returns

[`ValueOp`](ValueOp.md)\<`T`\>

## Methods

### sub

▸ **sub**\<`T`\>(`v1`, `v2`): `number` \| [`Vector2`](Vector2.md) \| [`Vector3`](Vector3.md) \| [`Quaternion`](Quaternion.md) \| [`Vector4`](Vector4.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`CurveValueType`](../modules.md#curvevaluetype) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `v1` | `T` |
| `v2` | `T` |

#### Returns

`number` \| [`Vector2`](Vector2.md) \| [`Vector3`](Vector3.md) \| [`Quaternion`](Quaternion.md) \| [`Vector4`](Vector4.md)

#### Defined in

math/enum/T/ValueOp.ts:10
