[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / SN\_Expression

# Class: SN\_Expression

Statement node: expression

## Hierarchy

- [`StatementNode`](StatementNode.md)

  ↳ **`SN_Expression`**

## Table of contents

### Constructors

- [constructor](SN_Expression.md#constructor)

### Properties

- [nodes](SN_Expression.md#nodes)

### Methods

- [addNode](SN_Expression.md#addnode)
- [parse](SN_Expression.md#parse)
- [formatToWGSL](SN_Expression.md#formattowgsl)
- [unionOperation](SN_Expression.md#unionoperation)

## Constructors

### constructor

• **new SN_Expression**(): [`SN_Expression`](SN_Expression.md)

#### Returns

[`SN_Expression`](SN_Expression.md)

#### Overrides

[StatementNode](StatementNode.md).[constructor](StatementNode.md#constructor)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:931

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

▸ **parse**(`r`): [`SN_Expression`](SN_Expression.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | [`GLSLLexer`](GLSLLexer.md) |

#### Returns

[`SN_Expression`](SN_Expression.md)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:935

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

gfx/graphics/webGpu/shader/converter/StatementNode.ts:1145

___

### unionOperation

▸ **unionOperation**(`opStack`, `valueStack`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `opStack` | [`GLSLLexerToken`](GLSLLexerToken.md)[] |
| `valueStack` | `any`[] |

#### Returns

`boolean`

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:1149
