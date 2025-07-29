[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / SN\_FunctionCall

# Class: SN\_FunctionCall

Statement node: functionCall

## Hierarchy

- [`StatementNode`](StatementNode.md)

  ↳ **`SN_FunctionCall`**

## Table of contents

### Constructors

- [constructor](SN_FunctionCall.md#constructor)

### Properties

- [nodes](SN_FunctionCall.md#nodes)
- [name](SN_FunctionCall.md#name)
- [args](SN_FunctionCall.md#args)

### Methods

- [addNode](SN_FunctionCall.md#addnode)
- [parse](SN_FunctionCall.md#parse)
- [formatToWGSL](SN_FunctionCall.md#formattowgsl)

## Constructors

### constructor

• **new SN_FunctionCall**(`name`, `args`): [`SN_FunctionCall`](SN_FunctionCall.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `args` | [`SN_FunctionArgs`](SN_FunctionArgs.md) |

#### Returns

[`SN_FunctionCall`](SN_FunctionCall.md)

#### Overrides

[StatementNode](StatementNode.md).[constructor](StatementNode.md#constructor)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:361

## Properties

### nodes

• **nodes**: [`StatementNode`](StatementNode.md)[] = `[]`

#### Inherited from

[StatementNode](StatementNode.md).[nodes](StatementNode.md#nodes)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:11

___

### name

• **name**: `string`

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:358

___

### args

• **args**: [`SN_FunctionArgs`](SN_FunctionArgs.md)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:359

## Methods

### addNode

▸ **addNode**(`node`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`StatementNode`](StatementNode.md) |

#### Returns

`void`

#### Inherited from

[StatementNode](StatementNode.md).[addNode](StatementNode.md#addnode)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:15

___

### parse

▸ **parse**(`r`): [`SN_FunctionCall`](SN_FunctionCall.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | [`GLSLLexer`](GLSLLexer.md) |

#### Returns

[`SN_FunctionCall`](SN_FunctionCall.md)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:367

___

### formatToWGSL

▸ **formatToWGSL**(`context`, `depth`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`TranslatorContext`](TranslatorContext.md) |
| `depth` | `number` |

#### Returns

`string`

#### Overrides

[StatementNode](StatementNode.md).[formatToWGSL](StatementNode.md#formattowgsl)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:386
