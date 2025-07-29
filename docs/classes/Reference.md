[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / Reference

# Class: Reference

引用计数

## Table of contents

### Constructors

- [constructor](Reference.md#constructor)

### Properties

- [reference](Reference.md#reference)

### Methods

- [getInstance](Reference.md#getinstance)
- [attached](Reference.md#attached)
- [detached](Reference.md#detached)
- [hasReference](Reference.md#hasreference)
- [getReferenceCount](Reference.md#getreferencecount)
- [getReference](Reference.md#getreference)

## Constructors

### constructor

• **new Reference**(): [`Reference`](Reference.md)

#### Returns

[`Reference`](Reference.md)

## Properties

### reference

• `Protected` **reference**: `Map`\<`any`, `Map`\<`any`, `any`\>\>

#### Defined in

util/Reference.ts:5

## Methods

### getInstance

▸ **getInstance**(): [`Reference`](Reference.md)

#### Returns

[`Reference`](Reference.md)

#### Defined in

util/Reference.ts:9

___

### attached

▸ **attached**(`ref`, `target`): `void`

current instance attached from parent instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ref` | `any` | reference current |
| `target` | `any` | reference parent |

#### Returns

`void`

#### Defined in

util/Reference.ts:19

___

### detached

▸ **detached**(`ref`, `target`): `void`

current instance detached from parent instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ref` | `any` | reference current |
| `target` | `any` | reference parent |

#### Returns

`void`

#### Defined in

util/Reference.ts:34

___

### hasReference

▸ **hasReference**(`ref`): `boolean`

current instance has reference

#### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | `any` |

#### Returns

`boolean`

#### Defined in

util/Reference.ts:44

___

### getReferenceCount

▸ **getReferenceCount**(`ref`): `number`

get current instance reference count

#### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | `any` |

#### Returns

`number`

#### Defined in

util/Reference.ts:57

___

### getReference

▸ **getReference**(`ref`): `Map`\<`any`, `any`\>

get current instance reference from where

#### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | `any` |

#### Returns

`Map`\<`any`, `any`\>

#### Defined in

util/Reference.ts:70
