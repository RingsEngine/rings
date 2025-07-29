[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / SN\_IFBranch

# Class: SN\_IFBranch

Statement node: if

## Hierarchy

- [`StatementNode`](StatementNode.md)

  ↳ **`SN_IFBranch`**

## Table of contents

### Constructors

- [constructor](SN_IFBranch.md#constructor)

### Properties

- [nodes](SN_IFBranch.md#nodes)
- [conditionExpr](SN_IFBranch.md#conditionexpr)
- [trueBranch](SN_IFBranch.md#truebranch)
- [falseBranch](SN_IFBranch.md#falsebranch)

### Methods

- [addNode](SN_IFBranch.md#addnode)
- [parse](SN_IFBranch.md#parse)
- [formatToWGSL](SN_IFBranch.md#formattowgsl)

## Constructors

### constructor

• **new SN_IFBranch**(`condition`, `trueBranch`, `falseBranch`): [`SN_IFBranch`](SN_IFBranch.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | [`SN_Expression`](SN_Expression.md) |
| `trueBranch` | [`SN_CodeBlock`](SN_CodeBlock.md) |
| `falseBranch` | [`SN_CodeBlock`](SN_CodeBlock.md) |

#### Returns

[`SN_IFBranch`](SN_IFBranch.md)

#### Overrides

[StatementNode](StatementNode.md).[constructor](StatementNode.md#constructor)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:850

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

gfx/graphics/webGpu/shader/converter/StatementNode.ts:846

___

### trueBranch

• **trueBranch**: [`SN_CodeBlock`](SN_CodeBlock.md)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:847

___

### falseBranch

• **falseBranch**: [`SN_CodeBlock`](SN_CodeBlock.md)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:848

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

▸ **parse**(`r`): [`SN_IFBranch`](SN_IFBranch.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | [`GLSLLexer`](GLSLLexer.md) |

#### Returns

[`SN_IFBranch`](SN_IFBranch.md)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:861

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

gfx/graphics/webGpu/shader/converter/StatementNode.ts:902
