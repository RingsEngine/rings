[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / SN\_SelectOperation

# Class: SN\_SelectOperation

Statement node: Expression of select(a.b)

## Hierarchy

- [`StatementNode`](StatementNode.md)

  ↳ **`SN_SelectOperation`**

## Table of contents

### Constructors

- [constructor](SN_SelectOperation.md#constructor)

### Properties

- [nodes](SN_SelectOperation.md#nodes)
- [leftValue](SN_SelectOperation.md#leftvalue)
- [rightValue](SN_SelectOperation.md#rightvalue)

### Methods

- [addNode](SN_SelectOperation.md#addnode)
- [parse](SN_SelectOperation.md#parse)
- [formatToWGSL](SN_SelectOperation.md#formattowgsl)

## Constructors

### constructor

• **new SN_SelectOperation**(`lValue`, `rValue`): [`SN_SelectOperation`](SN_SelectOperation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `lValue` | [`StatementNode`](StatementNode.md) |
| `rValue` | [`StatementNode`](StatementNode.md) |

#### Returns

[`SN_SelectOperation`](SN_SelectOperation.md)

#### Overrides

[StatementNode](StatementNode.md).[constructor](StatementNode.md#constructor)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:1539

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

gfx/graphics/webGpu/shader/converter/StatementNode.ts:1536

___

### rightValue

• **rightValue**: [`StatementNode`](StatementNode.md)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:1537

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

▸ **parse**(`r`): [`SN_SelectOperation`](SN_SelectOperation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | [`GLSLLexer`](GLSLLexer.md) |

#### Returns

[`SN_SelectOperation`](SN_SelectOperation.md)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:1545

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

gfx/graphics/webGpu/shader/converter/StatementNode.ts:1560
