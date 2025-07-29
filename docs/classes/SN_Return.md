[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / SN\_Return

# Class: SN\_Return

Statement node: process control(return)

## Hierarchy

- [`StatementNode`](StatementNode.md)

  ↳ **`SN_Return`**

## Table of contents

### Constructors

- [constructor](SN_Return.md#constructor)

### Properties

- [nodes](SN_Return.md#nodes)
- [value](SN_Return.md#value)

### Methods

- [addNode](SN_Return.md#addnode)
- [parse](SN_Return.md#parse)
- [formatToWGSL](SN_Return.md#formattowgsl)

## Constructors

### constructor

• **new SN_Return**(`value`): [`SN_Return`](SN_Return.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`SN_Expression`](SN_Expression.md) |

#### Returns

[`SN_Return`](SN_Return.md)

#### Overrides

[StatementNode](StatementNode.md).[constructor](StatementNode.md#constructor)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:1390

## Properties

### nodes

• **nodes**: [`StatementNode`](StatementNode.md)[] = `[]`

#### Inherited from

[StatementNode](StatementNode.md).[nodes](StatementNode.md#nodes)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:11

___

### value

• **value**: [`SN_Expression`](SN_Expression.md)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:1388

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

▸ **parse**(`r`): [`SN_Return`](SN_Return.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | [`GLSLLexer`](GLSLLexer.md) |

#### Returns

[`SN_Return`](SN_Return.md)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:1395

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

gfx/graphics/webGpu/shader/converter/StatementNode.ts:1408
