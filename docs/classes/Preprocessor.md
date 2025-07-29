[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / Preprocessor

# Class: Preprocessor

## Table of contents

### Constructors

- [constructor](Preprocessor.md#constructor)

### Methods

- [parse](Preprocessor.md#parse)
- [parseComputeShader](Preprocessor.md#parsecomputeshader)
- [parsePreprocess](Preprocessor.md#parsepreprocess)
- [parseAutoBindingForAllGroup](Preprocessor.md#parseautobindingforallgroup)
- [parseAutoBindingForGroupX](Preprocessor.md#parseautobindingforgroupx)
- [parseAutoLocation](Preprocessor.md#parseautolocation)
- [parseAutoLocationBlock](Preprocessor.md#parseautolocationblock)
- [parsePreprocessCommand](Preprocessor.md#parsepreprocesscommand)
- [parseCondition](Preprocessor.md#parsecondition)
- [filterComment](Preprocessor.md#filtercomment)
- [extract](Preprocessor.md#extract)

## Constructors

### constructor

• **new Preprocessor**(): [`Preprocessor`](Preprocessor.md)

#### Returns

[`Preprocessor`](Preprocessor.md)

## Methods

### parse

▸ **parse**(`code`, `defineValue`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` |
| `defineValue` | `Object` |

#### Returns

`string`

#### Defined in

gfx/graphics/webGpu/shader/util/Preprocessor.ts:4

___

### parseComputeShader

▸ **parseComputeShader**(`code`, `defineValue`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` |
| `defineValue` | `Object` |

#### Returns

`string`

#### Defined in

gfx/graphics/webGpu/shader/util/Preprocessor.ts:15

___

### parsePreprocess

▸ **parsePreprocess**(`context`, `code`, `defineValue`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `PreprocessorContext` |
| `code` | `string` |
| `defineValue` | `Object` |

#### Returns

`string`

#### Defined in

gfx/graphics/webGpu/shader/util/Preprocessor.ts:25

___

### parseAutoBindingForAllGroup

▸ **parseAutoBindingForAllGroup**(`code`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` |

#### Returns

`string`

#### Defined in

gfx/graphics/webGpu/shader/util/Preprocessor.ts:45

___

### parseAutoBindingForGroupX

▸ **parseAutoBindingForGroupX**(`code`, `nGroup`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` |
| `nGroup` | `number` |

#### Returns

`string`

#### Defined in

gfx/graphics/webGpu/shader/util/Preprocessor.ts:87

___

### parseAutoLocation

▸ **parseAutoLocation**(`code`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` |

#### Returns

`string`

#### Defined in

gfx/graphics/webGpu/shader/util/Preprocessor.ts:128

___

### parseAutoLocationBlock

▸ **parseAutoLocationBlock**(`code`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` |

#### Returns

`string`

#### Defined in

gfx/graphics/webGpu/shader/util/Preprocessor.ts:152

___

### parsePreprocessCommand

▸ **parsePreprocessCommand**(`context`, `code`, `defineValue`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `PreprocessorContext` |
| `code` | `string` |
| `defineValue` | `Object` |

#### Returns

`string`

#### Defined in

gfx/graphics/webGpu/shader/util/Preprocessor.ts:177

___

### parseCondition

▸ **parseCondition**(`condition`, `defineValue`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | `string` |
| `defineValue` | `Object` |

#### Returns

`boolean`

#### Defined in

gfx/graphics/webGpu/shader/util/Preprocessor.ts:285

___

### filterComment

▸ **filterComment**(`code`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` |

#### Returns

`string`

#### Defined in

gfx/graphics/webGpu/shader/util/Preprocessor.ts:296

___

### extract

▸ **extract**(`str`, `leftStr`, `rightStr`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |
| `leftStr` | `string` |
| `rightStr` | `string` |

#### Returns

`string`

#### Defined in

gfx/graphics/webGpu/shader/util/Preprocessor.ts:334
