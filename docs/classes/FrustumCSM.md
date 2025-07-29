[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / FrustumCSM

# Class: FrustumCSM

## Table of contents

### Constructors

- [constructor](FrustumCSM.md#constructor)

### Properties

- [sections](FrustumCSM.md#sections)
- [children](FrustumCSM.md#children)
- [name](FrustumCSM.md#name)

### Methods

- [update](FrustumCSM.md#update)

## Constructors

### constructor

• **new FrustumCSM**(`blockCount`): [`FrustumCSM`](FrustumCSM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockCount` | `number` |

#### Returns

[`FrustumCSM`](FrustumCSM.md)

#### Defined in

core/csm/FrustumCSM.ts:78

## Properties

### sections

• **sections**: `FrustumSection`[]

#### Defined in

core/csm/FrustumCSM.ts:74

___

### children

• **children**: `FrustumChild`[]

#### Defined in

core/csm/FrustumCSM.ts:75

___

### name

• **name**: `string`

#### Defined in

core/csm/FrustumCSM.ts:76

## Methods

### update

▸ **update**(`p`, `pvInv`, `near`, `far`, `shadowSetting`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | [`Matrix4`](Matrix4.md) |
| `pvInv` | [`Matrix4`](Matrix4.md) |
| `near` | `number` |
| `far` | `number` |
| `shadowSetting` | [`ShadowSetting`](../modules.md#shadowsetting) |

#### Returns

`this`

#### Defined in

core/csm/FrustumCSM.ts:93
