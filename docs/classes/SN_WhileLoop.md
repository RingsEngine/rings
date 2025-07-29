[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / SN\_WhileLoop

# Class: SN\_WhileLoop

Statement node: while

## Hierarchy

- [`StatementNode`](StatementNode.md)

  ↳ **`SN_WhileLoop`**

## Table of contents

### Constructors

- [constructor](SN_WhileLoop.md#constructor)

### Properties

- [nodes](SN_WhileLoop.md#nodes)
- [conditionExpr](SN_WhileLoop.md#conditionexpr)
- [loopBody](SN_WhileLoop.md#loopbody)

### Methods

- [addNode](SN_WhileLoop.md#addnode)
- [parse](SN_WhileLoop.md#parse)
- [formatToWGSL](SN_WhileLoop.md#formattowgsl)

## Constructors

### constructor

• **new SN_WhileLoop**(`condition`, `loopBody`): [`SN_WhileLoop`](SN_WhileLoop.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | [`SN_Expression`](SN_Expression.md) |
| `loopBody` | [`SN_CodeBlock`](SN_CodeBlock.md) |

#### Returns

[`SN_WhileLoop`](SN_WhileLoop.md)

#### Overrides

[StatementNode](StatementNode.md).[constructor](StatementNode.md#constructor)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:773

## Properties

### nodes

• **nodes**: [`StatementNode`](StatementNode.md)[] = `[]`

#### Inherited from

[StatementNode](StatementNode.md).[nodes](StatementNode.md#nodes)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:11

___

### conditionExpr

• **conditionExpr**: [`SN_Expression`](SN_Expression.md)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:770

___

### loopBody

• **loopBody**: [`SN_CodeBlock`](SN_CodeBlock.md)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:771

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

▸ **parse**(`r`): [`SN_WhileLoop`](SN_WhileLoop.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | [`GLSLLexer`](GLSLLexer.md) |

#### Returns

[`SN_WhileLoop`](SN_WhileLoop.md)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:779

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

gfx/graphics/webGpu/shader/converter/StatementNode.ts:801
