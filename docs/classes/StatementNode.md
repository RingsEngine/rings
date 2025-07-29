[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / StatementNode

# Class: StatementNode

Statement node

## Hierarchy

- **`StatementNode`**

  ↳ [`SN_Struct`](SN_Struct.md)

  ↳ [`SN_Function`](SN_Function.md)

  ↳ [`SN_FunctionArgs`](SN_FunctionArgs.md)

  ↳ [`SN_FunctionCall`](SN_FunctionCall.md)

  ↳ [`SN_Declaration`](SN_Declaration.md)

  ↳ [`SN_ForLoop`](SN_ForLoop.md)

  ↳ [`SN_WhileLoop`](SN_WhileLoop.md)

  ↳ [`SN_DoWhileLoop`](SN_DoWhileLoop.md)

  ↳ [`SN_IFBranch`](SN_IFBranch.md)

  ↳ [`SN_Expression`](SN_Expression.md)

  ↳ [`SN_ParenExpression`](SN_ParenExpression.md)

  ↳ [`SN_Identifier`](SN_Identifier.md)

  ↳ [`SN_Constant`](SN_Constant.md)

  ↳ [`SN_Break`](SN_Break.md)

  ↳ [`SN_Discard`](SN_Discard.md)

  ↳ [`SN_Continue`](SN_Continue.md)

  ↳ [`SN_Return`](SN_Return.md)

  ↳ [`SN_UnaryOperation`](SN_UnaryOperation.md)

  ↳ [`SN_BinaryOperation`](SN_BinaryOperation.md)

  ↳ [`SN_TernaryOperation`](SN_TernaryOperation.md)

  ↳ [`SN_SelectOperation`](SN_SelectOperation.md)

  ↳ [`SN_IndexOperation`](SN_IndexOperation.md)

  ↳ [`SN_CodeBlock`](SN_CodeBlock.md)

  ↳ [`SN_Precision`](SN_Precision.md)

  ↳ [`SN_Layout`](SN_Layout.md)

## Table of contents

### Constructors

- [constructor](StatementNode.md#constructor)

### Properties

- [nodes](StatementNode.md#nodes)

### Methods

- [addNode](StatementNode.md#addnode)
- [formatToWGSL](StatementNode.md#formattowgsl)

## Constructors

### constructor

• **new StatementNode**(): [`StatementNode`](StatementNode.md)

#### Returns

[`StatementNode`](StatementNode.md)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:13

## Properties

### nodes

• **nodes**: [`StatementNode`](StatementNode.md)[] = `[]`

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:11

## Methods

### addNode

▸ **addNode**(`node`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`StatementNode`](StatementNode.md) |

#### Returns

`void`

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

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:19
