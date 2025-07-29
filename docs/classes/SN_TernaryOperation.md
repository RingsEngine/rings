[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / SN\_TernaryOperation

# Class: SN\_TernaryOperation

Statement node: ternary operation

## Hierarchy

- [`StatementNode`](StatementNode.md)

  ↳ **`SN_TernaryOperation`**

## Table of contents

### Constructors

- [constructor](SN_TernaryOperation.md#constructor)

### Properties

- [nodes](SN_TernaryOperation.md#nodes)
- [condition](SN_TernaryOperation.md#condition)
- [expression1](SN_TernaryOperation.md#expression1)
- [expression2](SN_TernaryOperation.md#expression2)

### Methods

- [addNode](SN_TernaryOperation.md#addnode)
- [parse](SN_TernaryOperation.md#parse)
- [formatToWGSL](SN_TernaryOperation.md#formattowgsl)

## Constructors

### constructor

• **new SN_TernaryOperation**(`condition`, `expression1`, `expression2`): [`SN_TernaryOperation`](SN_TernaryOperation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | [`SN_Expression`](SN_Expression.md) |
| `expression1` | [`SN_Expression`](SN_Expression.md) |
| `expression2` | [`SN_Expression`](SN_Expression.md) |

#### Returns

[`SN_TernaryOperation`](SN_TernaryOperation.md)

#### Overrides

[StatementNode](StatementNode.md).[constructor](StatementNode.md#constructor)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:1510

## Properties

### nodes

• **nodes**: [`StatementNode`](StatementNode.md)[] = `[]`

#### Inherited from

[StatementNode](StatementNode.md).[nodes](StatementNode.md#nodes)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:11

___

### condition

• **condition**: [`SN_Expression`](SN_Expression.md)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:1506

___

### expression1

• **expression1**: [`SN_Expression`](SN_Expression.md)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:1507

___

### expression2

• **expression2**: [`SN_Expression`](SN_Expression.md)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:1508

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

▸ **parse**(`r`): [`SN_TernaryOperation`](SN_TernaryOperation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | [`GLSLLexer`](GLSLLexer.md) |

#### Returns

[`SN_TernaryOperation`](SN_TernaryOperation.md)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:1521

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

gfx/graphics/webGpu/shader/converter/StatementNode.ts:1525
