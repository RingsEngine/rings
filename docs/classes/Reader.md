[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / Reader

# Class: Reader

## Hierarchy

- **`Reader`**

  ↳ [`GLSLLexer`](GLSLLexer.md)

  ↳ [`GLSLPreprocessor`](GLSLPreprocessor.md)

## Table of contents

### Constructors

- [constructor](Reader.md#constructor)

### Properties

- [\_char](Reader.md#_char)
- [\_line](Reader.md#_line)
- [\_column](Reader.md#_column)
- [\_source](Reader.md#_source)
- [\_currPosition](Reader.md#_currposition)
- [\_nextPosition](Reader.md#_nextposition)

### Accessors

- [source](Reader.md#source)
- [currPosition](Reader.md#currposition)

### Methods

- [reset](Reader.md#reset)
- [getChar](Reader.md#getchar)
- [peekChar](Reader.md#peekchar)
- [readChar](Reader.md#readchar)
- [readCharAndSkipWhitespace](Reader.md#readcharandskipwhitespace)
- [readIdentifier](Reader.md#readidentifier)
- [isIdentifier](Reader.md#isidentifier)
- [skipWhitespace](Reader.md#skipwhitespace)
- [IsWhitespace](Reader.md#iswhitespace)
- [skipComment](Reader.md#skipcomment)
- [skipMultilineComment](Reader.md#skipmultilinecomment)
- [isDigit](Reader.md#isdigit)
- [readNumber](Reader.md#readnumber)
- [readValue](Reader.md#readvalue)
- [readLine](Reader.md#readline)

## Constructors

### constructor

• **new Reader**(`source`): [`Reader`](Reader.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |

#### Returns

[`Reader`](Reader.md)

#### Defined in

gfx/graphics/webGpu/shader/converter/Reader.ts:13

## Properties

### \_char

• `Protected` **\_char**: `string`

#### Defined in

gfx/graphics/webGpu/shader/converter/Reader.ts:6

___

### \_line

• `Protected` **\_line**: `number`

#### Defined in

gfx/graphics/webGpu/shader/converter/Reader.ts:7

___

### \_column

• `Protected` **\_column**: `number`

#### Defined in

gfx/graphics/webGpu/shader/converter/Reader.ts:8

___

### \_source

• `Protected` **\_source**: `string`

#### Defined in

gfx/graphics/webGpu/shader/converter/Reader.ts:9

___

### \_currPosition

• `Protected` **\_currPosition**: `number`

#### Defined in

gfx/graphics/webGpu/shader/converter/Reader.ts:10

___

### \_nextPosition

• `Protected` **\_nextPosition**: `number`

#### Defined in

gfx/graphics/webGpu/shader/converter/Reader.ts:11

## Accessors

### source

• `get` **source**(): `string`

#### Returns

`string`

#### Defined in

gfx/graphics/webGpu/shader/converter/Reader.ts:26

___

### currPosition

• `get` **currPosition**(): `number`

#### Returns

`number`

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

#### Defined in

gfx/graphics/webGpu/shader/converter/Reader.ts:17

___

### getChar

▸ **getChar**(): `string`

#### Returns

`string`

#### Defined in

gfx/graphics/webGpu/shader/converter/Reader.ts:30

___

### peekChar

▸ **peekChar**(): `string`

#### Returns

`string`

#### Defined in

gfx/graphics/webGpu/shader/converter/Reader.ts:38

___

### readChar

▸ **readChar**(): `void`

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/shader/converter/Reader.ts:44

___

### readCharAndSkipWhitespace

▸ **readCharAndSkipWhitespace**(): `void`

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/shader/converter/Reader.ts:59

___

### readIdentifier

▸ **readIdentifier**(): `string`

#### Returns

`string`

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

#### Defined in

gfx/graphics/webGpu/shader/converter/Reader.ts:72

___

### skipWhitespace

▸ **skipWhitespace**(): `void`

#### Returns

`void`

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

#### Defined in

gfx/graphics/webGpu/shader/converter/Reader.ts:88

___

### skipComment

▸ **skipComment**(): `void`

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/shader/converter/Reader.ts:92

___

### skipMultilineComment

▸ **skipMultilineComment**(): `void`

#### Returns

`void`

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

#### Defined in

gfx/graphics/webGpu/shader/converter/Reader.ts:124

___

### readNumber

▸ **readNumber**(): `string`

#### Returns

`string`

#### Defined in

gfx/graphics/webGpu/shader/converter/Reader.ts:129

___

### readValue

▸ **readValue**(): `string`

#### Returns

`string`

#### Defined in

gfx/graphics/webGpu/shader/converter/Reader.ts:143

___

### readLine

▸ **readLine**(): `string`

#### Returns

`string`

#### Defined in

gfx/graphics/webGpu/shader/converter/Reader.ts:150
