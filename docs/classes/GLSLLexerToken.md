[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / GLSLLexerToken

# Class: GLSLLexerToken

## Table of contents

### Constructors

- [constructor](GLSLLexerToken.md#constructor)

### Properties

- [Type](GLSLLexerToken.md#type)
- [Line](GLSLLexerToken.md#line)
- [Colume](GLSLLexerToken.md#colume)
- [Literal](GLSLLexerToken.md#literal)

### Accessors

- [nOperationPriorityLevel](GLSLLexerToken.md#noperationprioritylevel)

### Methods

- [isTypeEqual](GLSLLexerToken.md#istypeequal)
- [isLiteralEqual](GLSLLexerToken.md#isliteralequal)
- [isBuiltinType](GLSLLexerToken.md#isbuiltintype)
- [isDataType](GLSLLexerToken.md#isdatatype)
- [isOperation](GLSLLexerToken.md#isoperation)
- [isAssignOperation](GLSLLexerToken.md#isassignoperation)

## Constructors

### constructor

• **new GLSLLexerToken**(`type?`, `literal?`): [`GLSLLexerToken`](GLSLLexerToken.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `type` | [`TokenType`](../enums/TokenType.md) | `TokenType.EOF` |
| `literal` | `string` | `"\0"` |

#### Returns

[`GLSLLexerToken`](GLSLLexerToken.md)

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:6

## Properties

### Type

• **Type**: [`TokenType`](../enums/TokenType.md) = `0`

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:2

___

### Line

• **Line**: `number` = `0`

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:3

___

### Colume

• **Colume**: `number` = `0`

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:4

___

### Literal

• **Literal**: `string` = `""`

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:5

## Accessors

### nOperationPriorityLevel

• `get` **nOperationPriorityLevel**(): `number`

The priority of the current operator

#### Returns

`number`

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:64

## Methods

### isTypeEqual

▸ **isTypeEqual**(`type`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`TokenType`](../enums/TokenType.md) |

#### Returns

`boolean`

determin the type is same to token

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:14

___

### isLiteralEqual

▸ **isLiteralEqual**(`literal`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `literal` | `string` |

#### Returns

`boolean`

determin the value is same

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:21

___

### isBuiltinType

▸ **isBuiltinType**(): `boolean`

#### Returns

`boolean`

determin it's builtin type

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:28

___

### isDataType

▸ **isDataType**(): `boolean`

#### Returns

`boolean`

determin it's a data type

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:38

___

### isOperation

▸ **isOperation**(): `boolean`

#### Returns

`boolean`

determin it's a operation

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:45

___

### isAssignOperation

▸ **isAssignOperation**(): `boolean`

#### Returns

`boolean`

determin it's a assign operation

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:54
