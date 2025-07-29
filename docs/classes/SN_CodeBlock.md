[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / SN\_CodeBlock

# Class: SN\_CodeBlock

Statement node: code block

## Hierarchy

- [`StatementNode`](StatementNode.md)

  ↳ **`SN_CodeBlock`**

## Table of contents

### Constructors

- [constructor](SN_CodeBlock.md#constructor)

### Properties

- [nodes](SN_CodeBlock.md#nodes)

### Methods

- [addNode](SN_CodeBlock.md#addnode)
- [formatToWGSL](SN_CodeBlock.md#formattowgsl)
- [parse](SN_CodeBlock.md#parse)

## Constructors

### constructor

• **new SN_CodeBlock**(): [`SN_CodeBlock`](SN_CodeBlock.md)

#### Returns

[`SN_CodeBlock`](SN_CodeBlock.md)

#### Overrides

[StatementNode](StatementNode.md).[constructor](StatementNode.md#constructor)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:1632

## Properties

### nodes

• **nodes**: [`StatementNode`](StatementNode.md)[] = `[]`

#### Inherited from

[StatementNode](StatementNode.md).[nodes](StatementNode.md#nodes)

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

▸ **parse**(`r`): [`SN_CodeBlock`](SN_CodeBlock.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | [`GLSLLexer`](GLSLLexer.md) |

#### Returns

[`SN_CodeBlock`](SN_CodeBlock.md)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:1636
