[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / MorePassParser

# Class: MorePassParser

## Table of contents

### Constructors

- [constructor](MorePassParser.md#constructor)

### Properties

- [passKeyword](MorePassParser.md#passkeyword)
- [shaderKeyword](MorePassParser.md#shaderkeyword)
- [vertexKeyword](MorePassParser.md#vertexkeyword)
- [fragmentKeyword](MorePassParser.md#fragmentkeyword)
- [passTypeKeyword](MorePassParser.md#passtypekeyword)

### Methods

- [parser](MorePassParser.md#parser)
- [splitPassBlock](MorePassParser.md#splitpassblock)
- [parserPassBlock](MorePassParser.md#parserpassblock)
- [parserShaderState](MorePassParser.md#parsershaderstate)
- [convertValue](MorePassParser.md#convertvalue)

## Constructors

### constructor

• **new MorePassParser**(): [`MorePassParser`](MorePassParser.md)

#### Returns

[`MorePassParser`](MorePassParser.md)

## Properties

### passKeyword

▪ `Static` `Protected` **passKeyword**: `string` = `"pass"`

#### Defined in

gfx/graphics/webGpu/shader/util/MorePassParser.ts:16

___

### shaderKeyword

▪ `Static` `Protected` **shaderKeyword**: `string` = `"Shader"`

#### Defined in

gfx/graphics/webGpu/shader/util/MorePassParser.ts:17

___

### vertexKeyword

▪ `Static` `Protected` **vertexKeyword**: `string` = `"vertex"`

#### Defined in

gfx/graphics/webGpu/shader/util/MorePassParser.ts:18

___

### fragmentKeyword

▪ `Static` `Protected` **fragmentKeyword**: `string` = `"fragment"`

#### Defined in

gfx/graphics/webGpu/shader/util/MorePassParser.ts:19

___

### passTypeKeyword

▪ `Static` `Protected` **passTypeKeyword**: `string` = `"PassType"`

#### Defined in

gfx/graphics/webGpu/shader/util/MorePassParser.ts:20

## Methods

### parser

▸ **parser**(`code`, `defineValue`): [`MorePassShader`](MorePassShader.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` |
| `defineValue` | `Object` |

#### Returns

[`MorePassShader`](MorePassShader.md)

#### Defined in

gfx/graphics/webGpu/shader/util/MorePassParser.ts:22

___

### splitPassBlock

▸ **splitPassBlock**(`code`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` |

#### Returns

`string`[]

#### Defined in

gfx/graphics/webGpu/shader/util/MorePassParser.ts:63

___

### parserPassBlock

▸ **parserPassBlock**(`code`): [`PassShader`](PassShader.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` |

#### Returns

[`PassShader`](PassShader.md)

#### Defined in

gfx/graphics/webGpu/shader/util/MorePassParser.ts:80

___

### parserShaderState

▸ **parserShaderState**(`passShader`, `code`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `passShader` | [`PassShader`](PassShader.md) |
| `code` | `string` |

#### Returns

`boolean`

#### Defined in

gfx/graphics/webGpu/shader/util/MorePassParser.ts:109

___

### convertValue

▸ **convertValue**(`str`): `string` \| `number` \| `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string` \| `number` \| `boolean`

#### Defined in

gfx/graphics/webGpu/shader/util/MorePassParser.ts:128
