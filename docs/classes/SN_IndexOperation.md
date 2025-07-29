[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / SN\_IndexOperation

# Class: SN\_IndexOperation

Statement node: Expression of index(a[b])

## Hierarchy

- [`StatementNode`](StatementNode.md)

  ↳ **`SN_IndexOperation`**

## Table of contents

### Constructors

- [constructor](SN_IndexOperation.md#constructor)

### Properties

- [nodes](SN_IndexOperation.md#nodes)
- [leftValue](SN_IndexOperation.md#leftvalue)
- [indexValue](SN_IndexOperation.md#indexvalue)

### Methods

- [addNode](SN_IndexOperation.md#addnode)
- [parse](SN_IndexOperation.md#parse)
- [formatToWGSL](SN_IndexOperation.md#formattowgsl)

## Constructors

### constructor

• **new SN_IndexOperation**(`lValue`, `indexValue`): [`SN_IndexOperation`](SN_IndexOperation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `lValue` | [`StatementNode`](StatementNode.md) |
| `indexValue` | [`StatementNode`](StatementNode.md) |

#### Returns

[`SN_IndexOperation`](SN_IndexOperation.md)

#### Overrides

[StatementNode](StatementNode.md).[constructor](StatementNode.md#constructor)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:1580

## Properties

### nodes

• **nodes**: [`StatementNode`](StatementNode.md)[] = `[]`

#### Inherited from

[StatementNode](StatementNode.md).[nodes](StatementNode.md#nodes)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:11

___

### leftValue

• **leftValue**: [`StatementNode`](StatementNode.md)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:1577

___

### indexValue

• **indexValue**: [`StatementNode`](StatementNode.md)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:1578

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

▸ **parse**(`r`): [`SN_IndexOperation`](SN_IndexOperation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | [`GLSLLexer`](GLSLLexer.md) |

#### Returns

[`SN_IndexOperation`](SN_IndexOperation.md)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:1586

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

gfx/graphics/webGpu/shader/converter/StatementNode.ts:1614
