[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / LightData

# Class: LightData

## Hierarchy

- [`Struct`](Struct.md)

  ↳ **`LightData`**

## Table of contents

### Constructors

- [constructor](LightData.md#constructor)

### Properties

- [lightSize](LightData.md#lightsize)
- [index](LightData.md#index)
- [lightType](LightData.md#lighttype)
- [radius](LightData.md#radius)
- [linear](LightData.md#linear)
- [lightPosition](LightData.md#lightposition)
- [lightMatrixIndex](LightData.md#lightmatrixindex)
- [direction](LightData.md#direction)
- [quadratic](LightData.md#quadratic)
- [lightColor](LightData.md#lightcolor)
- [intensity](LightData.md#intensity)
- [innerAngle](LightData.md#innerangle)
- [outerAngle](LightData.md#outerangle)
- [range](LightData.md#range)
- [castShadowIndex](LightData.md#castshadowindex)
- [lightTangent](LightData.md#lighttangent)
- [iesIndex](LightData.md#iesindex)

### Methods

- [getValueSize](LightData.md#getvaluesize)
- [Ref](LightData.md#ref)
- [Get](LightData.md#get)
- [GetSize](LightData.md#getsize)
- [getValueType](LightData.md#getvaluetype)

## Constructors

### constructor

• **new LightData**(): [`LightData`](LightData.md)

#### Returns

[`LightData`](LightData.md)

#### Inherited from

[Struct](Struct.md).[constructor](Struct.md#constructor)

## Properties

### lightSize

▪ `Static` **lightSize**: `number` = `24`

#### Defined in

components/lights/LightData.ts:14

___

### index

• **index**: `number` = `-1`

#### Defined in

components/lights/LightData.ts:15

___

### lightType

• **lightType**: `number` = `-1`

#### Defined in

components/lights/LightData.ts:16

___

### radius

• **radius**: `number` = `0.001`

#### Defined in

components/lights/LightData.ts:17

___

### linear

• **linear**: `number` = `8.0`

#### Defined in

components/lights/LightData.ts:18

___

### lightPosition

• **lightPosition**: [`Vector3`](Vector3.md)

#### Defined in

components/lights/LightData.ts:19

___

### lightMatrixIndex

• **lightMatrixIndex**: `number` = `-1`

#### Defined in

components/lights/LightData.ts:20

___

### direction

• **direction**: [`Vector3`](Vector3.md)

#### Defined in

components/lights/LightData.ts:21

___

### quadratic

• **quadratic**: `number` = `0.032`

#### Defined in

components/lights/LightData.ts:22

___

### lightColor

• **lightColor**: [`Color`](Color.md)

#### Defined in

components/lights/LightData.ts:23

___

### intensity

• **intensity**: `number` = `1`

#### Defined in

components/lights/LightData.ts:24

___

### innerAngle

• **innerAngle**: `number` = `0`

#### Defined in

components/lights/LightData.ts:25

___

### outerAngle

• **outerAngle**: `number` = `1`

#### Defined in

components/lights/LightData.ts:26

___

### range

• **range**: `number` = `100`

#### Defined in

components/lights/LightData.ts:27

___

### castShadowIndex

• **castShadowIndex**: `number` = `-1`

#### Defined in

components/lights/LightData.ts:28

___

### lightTangent

• **lightTangent**: [`Vector3`](Vector3.md) = `Vector3.FORWARD`

#### Defined in

components/lights/LightData.ts:29

___

### iesIndex

• **iesIndex**: `number` = `-1`

#### Defined in

components/lights/LightData.ts:30

## Methods

### getValueSize

▸ **getValueSize**(`value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`any`

#### Inherited from

[Struct](Struct.md).[getValueSize](Struct.md#getvaluesize)

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

#### Inherited from

[Struct](Struct.md).[Ref](Struct.md#ref)

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

#### Inherited from

[Struct](Struct.md).[Get](Struct.md#get)

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

#### Inherited from

[Struct](Struct.md).[GetSize](Struct.md#getsize)

#### Defined in

util/struct/Struct.ts:92

___

### getValueType

▸ **getValueType**(): \{ `name`: `string` ; `type`: `string`  }[]

#### Returns

\{ `name`: `string` ; `type`: `string`  }[]

#### Inherited from

[Struct](Struct.md).[getValueType](Struct.md#getvaluetype)

#### Defined in

util/struct/Struct.ts:14
