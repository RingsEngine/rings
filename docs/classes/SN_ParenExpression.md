[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / SN\_ParenExpression

# Class: SN\_ParenExpression

Statement node: Paren expression

## Hierarchy

- [`StatementNode`](StatementNode.md)

  ↳ **`SN_ParenExpression`**

## Table of contents

### Constructors

- [constructor](SN_ParenExpression.md#constructor)

### Properties

- [nodes](SN_ParenExpression.md#nodes)

### Methods

- [addNode](SN_ParenExpression.md#addnode)
- [formatToWGSL](SN_ParenExpression.md#formattowgsl)

## Constructors

### constructor

• **new SN_ParenExpression**(): [`SN_ParenExpression`](SN_ParenExpression.md)

#### Returns

[`SN_ParenExpression`](SN_ParenExpression.md)

#### Overrides

[StatementNode](StatementNode.md).[constructor](StatementNode.md#constructor)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:1185

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

#### Overrides

[StatementNode](StatementNode.md).[formatToWGSL](StatementNode.md#formattowgsl)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:1189
