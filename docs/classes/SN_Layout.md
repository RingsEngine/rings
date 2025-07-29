[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / SN\_Layout

# Class: SN\_Layout

Statement node: layout

## Hierarchy

- [`StatementNode`](StatementNode.md)

  ↳ **`SN_Layout`**

## Table of contents

### Constructors

- [constructor](SN_Layout.md#constructor)

### Properties

- [nodes](SN_Layout.md#nodes)
- [scope](SN_Layout.md#scope)
- [qualifier](SN_Layout.md#qualifier)

### Methods

- [addNode](SN_Layout.md#addnode)
- [addQualifier](SN_Layout.md#addqualifier)
- [parse](SN_Layout.md#parse)
- [formatToWGSL](SN_Layout.md#formattowgsl)

## Constructors

### constructor

• **new SN_Layout**(): [`SN_Layout`](SN_Layout.md)

#### Returns

[`SN_Layout`](SN_Layout.md)

#### Overrides

[StatementNode](StatementNode.md).[constructor](StatementNode.md#constructor)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:1870

## Properties

### nodes

• **nodes**: [`StatementNode`](StatementNode.md)[] = `[]`

#### Inherited from

[StatementNode](StatementNode.md).[nodes](StatementNode.md#nodes)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:11

___

### scope

• **scope**: `string` = `""`

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:1867

___

### qualifier

• **qualifier**: `Map`\<`string`, `string`\>

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:1868

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

### addQualifier

▸ **addQualifier**(`name`, `value?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `value` | `string` | `""` |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:1874

___

### parse

▸ **parse**(`r`): [`SN_Layout`](SN_Layout.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | [`GLSLLexer`](GLSLLexer.md) |

#### Returns

[`SN_Layout`](SN_Layout.md)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:1878

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

gfx/graphics/webGpu/shader/converter/StatementNode.ts:1976
