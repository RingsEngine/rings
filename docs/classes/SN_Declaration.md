[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / SN\_Declaration

# Class: SN\_Declaration

Statement node: declaration

## Hierarchy

- [`StatementNode`](StatementNode.md)

  ↳ **`SN_Declaration`**

## Table of contents

### Constructors

- [constructor](SN_Declaration.md#constructor)

### Properties

- [nodes](SN_Declaration.md#nodes)
- [type](SN_Declaration.md#type)
- [name](SN_Declaration.md#name)
- [arraySize](SN_Declaration.md#arraysize)
- [hasIn](SN_Declaration.md#hasin)
- [hasOut](SN_Declaration.md#hasout)
- [hasConst](SN_Declaration.md#hasconst)

### Methods

- [addNode](SN_Declaration.md#addnode)
- [parse](SN_Declaration.md#parse)
- [formatToWGSL](SN_Declaration.md#formattowgsl)

## Constructors

### constructor

• **new SN_Declaration**(`type`, `name`, `arraySize?`): [`SN_Declaration`](SN_Declaration.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `name` | `string` |
| `arraySize` | [`SN_Expression`](SN_Expression.md) |

#### Returns

[`SN_Declaration`](SN_Declaration.md)

#### Overrides

[StatementNode](StatementNode.md).[constructor](StatementNode.md#constructor)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:445

## Properties

### nodes

• **nodes**: [`StatementNode`](StatementNode.md)[] = `[]`

#### Inherited from

[StatementNode](StatementNode.md).[nodes](StatementNode.md#nodes)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:11

___

### type

• **type**: `string`

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:438

___

### name

• **name**: `string`

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:439

___

### arraySize

• **arraySize**: [`SN_Expression`](SN_Expression.md)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:440

___

### hasIn

• **hasIn**: `boolean`

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:441

___

### hasOut

• **hasOut**: `boolean`

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:442

___

### hasConst

• **hasConst**: `boolean`

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:443

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

▸ **parse**(`r`): [`SN_Declaration`](SN_Declaration.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | [`GLSLLexer`](GLSLLexer.md) |

#### Returns

[`SN_Declaration`](SN_Declaration.md)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:459

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

gfx/graphics/webGpu/shader/converter/StatementNode.ts:587
