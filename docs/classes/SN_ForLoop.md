[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / SN\_ForLoop

# Class: SN\_ForLoop

Statement node: for

## Hierarchy

- [`StatementNode`](StatementNode.md)

  ↳ **`SN_ForLoop`**

## Table of contents

### Constructors

- [constructor](SN_ForLoop.md#constructor)

### Properties

- [nodes](SN_ForLoop.md#nodes)
- [expression1](SN_ForLoop.md#expression1)
- [condition](SN_ForLoop.md#condition)
- [expression2](SN_ForLoop.md#expression2)
- [loopBody](SN_ForLoop.md#loopbody)

### Methods

- [addNode](SN_ForLoop.md#addnode)
- [parse](SN_ForLoop.md#parse)
- [formatToWGSL](SN_ForLoop.md#formattowgsl)

## Constructors

### constructor

• **new SN_ForLoop**(`expression1`, `condition`, `expression2`, `loopBody`): [`SN_ForLoop`](SN_ForLoop.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression1` | [`StatementNode`](StatementNode.md) |
| `condition` | [`SN_Expression`](SN_Expression.md) |
| `expression2` | [`SN_Expression`](SN_Expression.md) |
| `loopBody` | [`SN_CodeBlock`](SN_CodeBlock.md) |

#### Returns

[`SN_ForLoop`](SN_ForLoop.md)

#### Overrides

[StatementNode](StatementNode.md).[constructor](StatementNode.md#constructor)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:655

## Properties

### nodes

• **nodes**: [`StatementNode`](StatementNode.md)[] = `[]`

#### Inherited from

[StatementNode](StatementNode.md).[nodes](StatementNode.md#nodes)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:11

___

### expression1

• **expression1**: [`StatementNode`](StatementNode.md)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:650

___

### condition

• **condition**: [`SN_Expression`](SN_Expression.md)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:651

___

### expression2

• **expression2**: [`SN_Expression`](SN_Expression.md)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:652

___

### loopBody

• **loopBody**: [`SN_CodeBlock`](SN_CodeBlock.md)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:653

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

▸ **parse**(`r`): [`SN_ForLoop`](SN_ForLoop.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | [`GLSLLexer`](GLSLLexer.md) |

#### Returns

[`SN_ForLoop`](SN_ForLoop.md)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:668

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

gfx/graphics/webGpu/shader/converter/StatementNode.ts:739
