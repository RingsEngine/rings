[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / Struct

# Class: Struct

## Hierarchy

- **`Struct`**

  ↳ [`LightData`](LightData.md)

## Table of contents

### Constructors

- [constructor](Struct.md#constructor)

### Methods

- [getValueSize](Struct.md#getvaluesize)
- [Ref](Struct.md#ref)
- [Get](Struct.md#get)
- [GetSize](Struct.md#getsize)
- [getValueType](Struct.md#getvaluetype)

## Constructors

### constructor

• **new Struct**(): [`Struct`](Struct.md)

#### Returns

[`Struct`](Struct.md)

## Methods

### getValueSize

▸ **getValueSize**(`value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`any`

#### Defined in

util/struct/Struct.ts:32

___

### Ref

▸ **Ref**\<`T`\>(`c`): \{ `name`: `string` ; `type`: `string`  }[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Struct`](Struct.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`Ctor`](../modules.md#ctor)\<`T`\> |

#### Returns

\{ `name`: `string` ; `type`: `string`  }[]

#### Defined in

util/struct/Struct.ts:77

___

### Get

▸ **Get**\<`T`\>(`c`): [`Struct`](Struct.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Struct`](Struct.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`Ctor`](../modules.md#ctor)\<`T`\> |

#### Returns

[`Struct`](Struct.md)

#### Defined in

util/struct/Struct.ts:83

___

### GetSize

▸ **GetSize**\<`T`\>(`c`): `number`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Struct`](Struct.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`Ctor`](../modules.md#ctor)\<`T`\> |

#### Returns

`number`

#### Defined in

util/struct/Struct.ts:92

___

### getValueType

▸ **getValueType**(): \{ `name`: `string` ; `type`: `string`  }[]

#### Returns

\{ `name`: `string` ; `type`: `string`  }[]

#### Defined in

util/struct/Struct.ts:14
