[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / SN\_Continue

# Class: SN\_Continue

Statement node: process control(continue)

## Hierarchy

- [`StatementNode`](StatementNode.md)

  ↳ **`SN_Continue`**

## Table of contents

### Constructors

- [constructor](SN_Continue.md#constructor)

### Properties

- [nodes](SN_Continue.md#nodes)

### Methods

- [addNode](SN_Continue.md#addnode)
- [parse](SN_Continue.md#parse)
- [formatToWGSL](SN_Continue.md#formattowgsl)

## Constructors

### constructor

• **new SN_Continue**(): [`SN_Continue`](SN_Continue.md)

#### Returns

[`SN_Continue`](SN_Continue.md)

#### Overrides

[StatementNode](StatementNode.md).[constructor](StatementNode.md#constructor)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:1358

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

### parse

▸ **parse**(`r`): [`SN_Continue`](SN_Continue.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | [`GLSLLexer`](GLSLLexer.md) |

#### Returns

[`SN_Continue`](SN_Continue.md)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:1362

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

gfx/graphics/webGpu/shader/converter/StatementNode.ts:1374
