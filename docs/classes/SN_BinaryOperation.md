[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / SN\_BinaryOperation

# Class: SN\_BinaryOperation

Statement node: binary operation

## Hierarchy

- [`StatementNode`](StatementNode.md)

  ↳ **`SN_BinaryOperation`**

## Table of contents

### Constructors

- [constructor](SN_BinaryOperation.md#constructor)

### Properties

- [nodes](SN_BinaryOperation.md#nodes)
- [op](SN_BinaryOperation.md#op)
- [leftValue](SN_BinaryOperation.md#leftvalue)
- [rightValue](SN_BinaryOperation.md#rightvalue)

### Methods

- [addNode](SN_BinaryOperation.md#addnode)
- [formatToWGSL](SN_BinaryOperation.md#formattowgsl)

## Constructors

### constructor

• **new SN_BinaryOperation**(`op`, `lValue`, `rValue`): [`SN_BinaryOperation`](SN_BinaryOperation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | [`GLSLLexerToken`](GLSLLexerToken.md) |
| `lValue` | [`StatementNode`](StatementNode.md) |
| `rValue` | [`StatementNode`](StatementNode.md) |

#### Returns

[`SN_BinaryOperation`](SN_BinaryOperation.md)

#### Overrides

[StatementNode](StatementNode.md).[constructor](StatementNode.md#constructor)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:1475

## Properties

### nodes

• **nodes**: [`StatementNode`](StatementNode.md)[] = `[]`

#### Inherited from

[StatementNode](StatementNode.md).[nodes](StatementNode.md#nodes)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:11

___

### op

• **op**: [`GLSLLexerToken`](GLSLLexerToken.md)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:1471

___

### leftValue

• **leftValue**: [`StatementNode`](StatementNode.md)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:1472

___

### rightValue

• **rightValue**: [`StatementNode`](StatementNode.md)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:1473

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

gfx/graphics/webGpu/shader/converter/StatementNode.ts:1486
