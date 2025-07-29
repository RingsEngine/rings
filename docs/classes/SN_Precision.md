[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / SN\_Precision

# Class: SN\_Precision

Statement node: precision

## Hierarchy

- [`StatementNode`](StatementNode.md)

  ↳ **`SN_Precision`**

## Table of contents

### Constructors

- [constructor](SN_Precision.md#constructor)

### Properties

- [nodes](SN_Precision.md#nodes)
- [type](SN_Precision.md#type)
- [qualifier](SN_Precision.md#qualifier)

### Methods

- [addNode](SN_Precision.md#addnode)
- [parse](SN_Precision.md#parse)
- [formatToWGSL](SN_Precision.md#formattowgsl)

## Constructors

### constructor

• **new SN_Precision**(`qualifier`, `type`): [`SN_Precision`](SN_Precision.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifier` | `string` |
| `type` | `string` |

#### Returns

[`SN_Precision`](SN_Precision.md)

#### Overrides

[StatementNode](StatementNode.md).[constructor](StatementNode.md#constructor)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:1830

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

gfx/graphics/webGpu/shader/converter/StatementNode.ts:1827

___

### qualifier

• **qualifier**: `string`

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:1828

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

▸ **parse**(`r`): [`SN_Precision`](SN_Precision.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | [`GLSLLexer`](GLSLLexer.md) |

#### Returns

[`SN_Precision`](SN_Precision.md)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:1836

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

gfx/graphics/webGpu/shader/converter/StatementNode.ts:1856
