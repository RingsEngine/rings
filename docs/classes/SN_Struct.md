[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / SN\_Struct

# Class: SN\_Struct

Statement node: struct

## Hierarchy

- [`StatementNode`](StatementNode.md)

  ↳ **`SN_Struct`**

## Table of contents

### Constructors

- [constructor](SN_Struct.md#constructor)

### Properties

- [nodes](SN_Struct.md#nodes)
- [name](SN_Struct.md#name)
- [fields](SN_Struct.md#fields)

### Methods

- [addNode](SN_Struct.md#addnode)
- [parse](SN_Struct.md#parse)
- [formatToWGSL](SN_Struct.md#formattowgsl)

## Constructors

### constructor

• **new SN_Struct**(`name`): [`SN_Struct`](SN_Struct.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`SN_Struct`](SN_Struct.md)

#### Overrides

[StatementNode](StatementNode.md).[constructor](StatementNode.md#constructor)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:34

## Properties

### nodes

• **nodes**: [`StatementNode`](StatementNode.md)[] = `[]`

#### Inherited from

[StatementNode](StatementNode.md).[nodes](StatementNode.md#nodes)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:11

___

### name

• **name**: `string` = `""`

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:31

___

### fields

• **fields**: [`SN_Declaration`](SN_Declaration.md)[] = `[]`

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:32

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

▸ **parse**(`r`): [`SN_Struct`](SN_Struct.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | [`GLSLLexer`](GLSLLexer.md) |

#### Returns

[`SN_Struct`](SN_Struct.md)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:39

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

gfx/graphics/webGpu/shader/converter/StatementNode.ts:66
