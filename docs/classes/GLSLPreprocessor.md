[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / GLSLPreprocessor

# Class: GLSLPreprocessor

## Hierarchy

- [`Reader`](Reader.md)

  ↳ **`GLSLPreprocessor`**

## Table of contents

### Constructors

- [constructor](GLSLPreprocessor.md#constructor)

### Properties

- [\_char](GLSLPreprocessor.md#_char)
- [\_line](GLSLPreprocessor.md#_line)
- [\_column](GLSLPreprocessor.md#_column)
- [\_source](GLSLPreprocessor.md#_source)
- [\_currPosition](GLSLPreprocessor.md#_currposition)
- [\_nextPosition](GLSLPreprocessor.md#_nextposition)

### Accessors

- [source](GLSLPreprocessor.md#source)
- [currPosition](GLSLPreprocessor.md#currposition)

### Methods

- [reset](GLSLPreprocessor.md#reset)
- [getChar](GLSLPreprocessor.md#getchar)
- [peekChar](GLSLPreprocessor.md#peekchar)
- [readChar](GLSLPreprocessor.md#readchar)
- [readCharAndSkipWhitespace](GLSLPreprocessor.md#readcharandskipwhitespace)
- [readIdentifier](GLSLPreprocessor.md#readidentifier)
- [isIdentifier](GLSLPreprocessor.md#isidentifier)
- [skipWhitespace](GLSLPreprocessor.md#skipwhitespace)
- [IsWhitespace](GLSLPreprocessor.md#iswhitespace)
- [skipComment](GLSLPreprocessor.md#skipcomment)
- [skipMultilineComment](GLSLPreprocessor.md#skipmultilinecomment)
- [isDigit](GLSLPreprocessor.md#isdigit)
- [readNumber](GLSLPreprocessor.md#readnumber)
- [readValue](GLSLPreprocessor.md#readvalue)
- [readLine](GLSLPreprocessor.md#readline)

## Constructors

### constructor

• **new GLSLPreprocessor**(`source`): [`GLSLPreprocessor`](GLSLPreprocessor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |

#### Returns

[`GLSLPreprocessor`](GLSLPreprocessor.md)

#### Overrides

[Reader](Reader.md).[constructor](Reader.md#constructor)

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLPreprocessor.ts:14

## Properties

### \_char

• `Protected` **\_char**: `string`

#### Inherited from

[Reader](Reader.md).[_char](Reader.md#_char)

#### Defined in

gfx/graphics/webGpu/shader/converter/Reader.ts:6

___

### \_line

• `Protected` **\_line**: `number`

#### Inherited from

[Reader](Reader.md).[_line](Reader.md#_line)

#### Defined in

gfx/graphics/webGpu/shader/converter/Reader.ts:7

___

### \_column

• `Protected` **\_column**: `number`

#### Inherited from

[Reader](Reader.md).[_column](Reader.md#_column)

#### Defined in

gfx/graphics/webGpu/shader/converter/Reader.ts:8

___

### \_source

• `Protected` **\_source**: `string`

#### Inherited from

[Reader](Reader.md).[_source](Reader.md#_source)

#### Defined in

gfx/graphics/webGpu/shader/converter/Reader.ts:9

___

### \_currPosition

• `Protected` **\_currPosition**: `number`

#### Inherited from

[Reader](Reader.md).[_currPosition](Reader.md#_currposition)

#### Defined in

gfx/graphics/webGpu/shader/converter/Reader.ts:10

___

### \_nextPosition

• `Protected` **\_nextPosition**: `number`

#### Inherited from

[Reader](Reader.md).[_nextPosition](Reader.md#_nextposition)

#### Defined in

gfx/graphics/webGpu/shader/converter/Reader.ts:11

## Accessors

### source

• `get` **source**(): `string`

#### Returns

`string`

#### Overrides

Reader.source

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLPreprocessor.ts:176

___

### currPosition

• `get` **currPosition**(): `number`

#### Returns

`number`

#### Inherited from

Reader.currPosition

#### Defined in

gfx/graphics/webGpu/shader/converter/Reader.ts:34

## Methods

### reset

▸ **reset**(`source`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |

#### Returns

`void`

#### Inherited from

[Reader](Reader.md).[reset](Reader.md#reset)

#### Defined in

gfx/graphics/webGpu/shader/converter/Reader.ts:17

___

### getChar

▸ **getChar**(): `string`

#### Returns

`string`

#### Inherited from

[Reader](Reader.md).[getChar](Reader.md#getchar)

#### Defined in

gfx/graphics/webGpu/shader/converter/Reader.ts:30

___

### peekChar

▸ **peekChar**(): `string`

#### Returns

`string`

#### Inherited from

[Reader](Reader.md).[peekChar](Reader.md#peekchar)

#### Defined in

gfx/graphics/webGpu/shader/converter/Reader.ts:38

___

### readChar

▸ **readChar**(): `void`

#### Returns

`void`

#### Inherited from

[Reader](Reader.md).[readChar](Reader.md#readchar)

#### Defined in

gfx/graphics/webGpu/shader/converter/Reader.ts:44

___

### readCharAndSkipWhitespace

▸ **readCharAndSkipWhitespace**(): `void`

#### Returns

`void`

#### Inherited from

[Reader](Reader.md).[readCharAndSkipWhitespace](Reader.md#readcharandskipwhitespace)

#### Defined in

gfx/graphics/webGpu/shader/converter/Reader.ts:59

___

### readIdentifier

▸ **readIdentifier**(): `string`

#### Returns

`string`

#### Inherited from

[Reader](Reader.md).[readIdentifier](Reader.md#readidentifier)

#### Defined in

gfx/graphics/webGpu/shader/converter/Reader.ts:64

___

### isIdentifier

▸ **isIdentifier**(`char`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `char` | `string` |

#### Returns

`boolean`

#### Inherited from

[Reader](Reader.md).[isIdentifier](Reader.md#isidentifier)

#### Defined in

gfx/graphics/webGpu/shader/converter/Reader.ts:72

___

### skipWhitespace

▸ **skipWhitespace**(): `void`

#### Returns

`void`

#### Inherited from

[Reader](Reader.md).[skipWhitespace](Reader.md#skipwhitespace)

#### Defined in

gfx/graphics/webGpu/shader/converter/Reader.ts:82

___

### IsWhitespace

▸ **IsWhitespace**(`char`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `char` | `string` |

#### Returns

`boolean`

#### Inherited from

[Reader](Reader.md).[IsWhitespace](Reader.md#iswhitespace)

#### Defined in

gfx/graphics/webGpu/shader/converter/Reader.ts:88

___

### skipComment

▸ **skipComment**(): `void`

#### Returns

`void`

#### Inherited from

[Reader](Reader.md).[skipComment](Reader.md#skipcomment)

#### Defined in

gfx/graphics/webGpu/shader/converter/Reader.ts:92

___

### skipMultilineComment

▸ **skipMultilineComment**(): `void`

#### Returns

`void`

#### Inherited from

[Reader](Reader.md).[skipMultilineComment](Reader.md#skipmultilinecomment)

#### Defined in

gfx/graphics/webGpu/shader/converter/Reader.ts:99

___

### isDigit

▸ **isDigit**(`char`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `char` | `string` |

#### Returns

`boolean`

#### Inherited from

[Reader](Reader.md).[isDigit](Reader.md#isdigit)

#### Defined in

gfx/graphics/webGpu/shader/converter/Reader.ts:124

___

### readNumber

▸ **readNumber**(): `string`

#### Returns

`string`

#### Inherited from

[Reader](Reader.md).[readNumber](Reader.md#readnumber)

#### Defined in

gfx/graphics/webGpu/shader/converter/Reader.ts:129

___

### readValue

▸ **readValue**(): `string`

#### Returns

`string`

#### Inherited from

[Reader](Reader.md).[readValue](Reader.md#readvalue)

#### Defined in

gfx/graphics/webGpu/shader/converter/Reader.ts:143

___

### readLine

▸ **readLine**(): `string`

#### Returns

`string`

#### Inherited from

[Reader](Reader.md).[readLine](Reader.md#readline)

#### Defined in

gfx/graphics/webGpu/shader/converter/Reader.ts:150
