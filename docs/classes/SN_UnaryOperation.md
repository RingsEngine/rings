[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / SN\_UnaryOperation

# Class: SN\_UnaryOperation

Statement node: unary operation

## Hierarchy

- [`StatementNode`](StatementNode.md)

  ↳ **`SN_UnaryOperation`**

## Table of contents

### Constructors

- [constructor](SN_UnaryOperation.md#constructor)

### Properties

- [nodes](SN_UnaryOperation.md#nodes)
- [op](SN_UnaryOperation.md#op)
- [leftValue](SN_UnaryOperation.md#leftvalue)
- [rightValue](SN_UnaryOperation.md#rightvalue)

### Methods

- [addNode](SN_UnaryOperation.md#addnode)
- [formatToWGSL](SN_UnaryOperation.md#formattowgsl)

## Constructors

### constructor

• **new SN_UnaryOperation**(`op`, `lValue`, `rValue`): [`SN_UnaryOperation`](SN_UnaryOperation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | [`GLSLLexerToken`](GLSLLexerToken.md) |
| `lValue` | [`StatementNode`](StatementNode.md) |
| `rValue` | [`StatementNode`](StatementNode.md) |

#### Returns

[`SN_UnaryOperation`](SN_UnaryOperation.md)

#### Overrides

[StatementNode](StatementNode.md).[constructor](StatementNode.md#constructor)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:1426

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

gfx/graphics/webGpu/shader/converter/StatementNode.ts:1422

___

### leftValue

• **leftValue**: [`StatementNode`](StatementNode.md)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:1423

___

### rightValue

• **rightValue**: [`StatementNode`](StatementNode.md)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:1424

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

gfx/graphics/webGpu/shader/converter/StatementNode.ts:1437
