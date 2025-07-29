[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / SN\_FunctionArgs

# Class: SN\_FunctionArgs

Statement node: functionArg

## Hierarchy

- [`StatementNode`](StatementNode.md)

  ↳ **`SN_FunctionArgs`**

## Table of contents

### Constructors

- [constructor](SN_FunctionArgs.md#constructor)

### Properties

- [nodes](SN_FunctionArgs.md#nodes)
- [args](SN_FunctionArgs.md#args)

### Methods

- [addNode](SN_FunctionArgs.md#addnode)
- [formatToWGSL](SN_FunctionArgs.md#formattowgsl)
- [parse](SN_FunctionArgs.md#parse)

## Constructors

### constructor

• **new SN_FunctionArgs**(): [`SN_FunctionArgs`](SN_FunctionArgs.md)

#### Returns

[`SN_FunctionArgs`](SN_FunctionArgs.md)

#### Overrides

[StatementNode](StatementNode.md).[constructor](StatementNode.md#constructor)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:321

## Properties

### nodes

• **nodes**: [`StatementNode`](StatementNode.md)[] = `[]`

#### Inherited from

[StatementNode](StatementNode.md).[nodes](StatementNode.md#nodes)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:11

___

### args

• **args**: [`SN_Expression`](SN_Expression.md)[] = `[]`

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:319

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

### formatToWGSL

▸ **formatToWGSL**(`context`, `depth`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`TranslatorContext`](TranslatorContext.md) |
| `depth` | `number` |

#### Returns

`string`

#### Inherited from

[StatementNode](StatementNode.md).[formatToWGSL](StatementNode.md#formattowgsl)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:19

___

### parse

▸ **parse**(`r`): [`SN_FunctionArgs`](SN_FunctionArgs.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | [`GLSLLexer`](GLSLLexer.md) |

#### Returns

[`SN_FunctionArgs`](SN_FunctionArgs.md)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:325
