[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / SN\_Constant

# Class: SN\_Constant

Statement node: constant

## Hierarchy

- [`StatementNode`](StatementNode.md)

  ↳ **`SN_Constant`**

  ↳↳ [`SN_ArrayConstant`](SN_ArrayConstant.md)

## Table of contents

### Constructors

- [constructor](SN_Constant.md#constructor)

### Properties

- [nodes](SN_Constant.md#nodes)
- [value](SN_Constant.md#value)

### Methods

- [addNode](SN_Constant.md#addnode)
- [parse](SN_Constant.md#parse)
- [formatToWGSL](SN_Constant.md#formattowgsl)

## Constructors

### constructor

• **new SN_Constant**(`value`): [`SN_Constant`](SN_Constant.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

[`SN_Constant`](SN_Constant.md)

#### Overrides

[StatementNode](StatementNode.md).[constructor](StatementNode.md#constructor)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:1224

## Properties

### nodes

• **nodes**: [`StatementNode`](StatementNode.md)[] = `[]`

#### Inherited from

[StatementNode](StatementNode.md).[nodes](StatementNode.md#nodes)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:11

___

### value

• **value**: `string`

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:1222

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

▸ **parse**(`r`): [`SN_Constant`](SN_Constant.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | [`GLSLLexer`](GLSLLexer.md) |

#### Returns

[`SN_Constant`](SN_Constant.md)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:1229

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

gfx/graphics/webGpu/shader/converter/StatementNode.ts:1255
