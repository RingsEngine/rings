[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / SN\_Identifier

# Class: SN\_Identifier

Statement node: identifier

## Hierarchy

- [`StatementNode`](StatementNode.md)

  ↳ **`SN_Identifier`**

## Table of contents

### Constructors

- [constructor](SN_Identifier.md#constructor)

### Properties

- [nodes](SN_Identifier.md#nodes)
- [name](SN_Identifier.md#name)

### Methods

- [addNode](SN_Identifier.md#addnode)
- [formatToWGSL](SN_Identifier.md#formattowgsl)

## Constructors

### constructor

• **new SN_Identifier**(`name`): [`SN_Identifier`](SN_Identifier.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`SN_Identifier`](SN_Identifier.md)

#### Overrides

[StatementNode](StatementNode.md).[constructor](StatementNode.md#constructor)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:1205

## Properties

### nodes

• **nodes**: [`StatementNode`](StatementNode.md)[] = `[]`

#### Inherited from

[StatementNode](StatementNode.md).[nodes](StatementNode.md#nodes)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:11

___

### name

• **name**: `string`

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:1203

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

gfx/graphics/webGpu/shader/converter/StatementNode.ts:1210
