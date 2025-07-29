[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / SN\_ArrayConstant

# Class: SN\_ArrayConstant

Statement node: array constant

## Hierarchy

- [`SN_Constant`](SN_Constant.md)

  ↳ **`SN_ArrayConstant`**

## Table of contents

### Constructors

- [constructor](SN_ArrayConstant.md#constructor)

### Properties

- [nodes](SN_ArrayConstant.md#nodes)
- [value](SN_ArrayConstant.md#value)
- [arrayValue](SN_ArrayConstant.md#arrayvalue)

### Methods

- [addNode](SN_ArrayConstant.md#addnode)
- [parse](SN_ArrayConstant.md#parse)
- [formatToWGSL](SN_ArrayConstant.md#formattowgsl)

## Constructors

### constructor

• **new SN_ArrayConstant**(`value`): [`SN_ArrayConstant`](SN_ArrayConstant.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`SN_Constant`](SN_Constant.md)[] |

#### Returns

[`SN_ArrayConstant`](SN_ArrayConstant.md)

#### Overrides

[SN_Constant](SN_Constant.md).[constructor](SN_Constant.md#constructor)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:1269

## Properties

### nodes

• **nodes**: [`StatementNode`](StatementNode.md)[] = `[]`

#### Inherited from

[SN_Constant](SN_Constant.md).[nodes](SN_Constant.md#nodes)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:11

___

### value

• **value**: `string`

#### Inherited from

[SN_Constant](SN_Constant.md).[value](SN_Constant.md#value)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:1222

___

### arrayValue

• **arrayValue**: [`SN_Constant`](SN_Constant.md)[]

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:1267

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

[SN_Constant](SN_Constant.md).[addNode](SN_Constant.md#addnode)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:15

___

### parse

▸ **parse**(`r`): [`SN_ArrayConstant`](SN_ArrayConstant.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | [`GLSLLexer`](GLSLLexer.md) |

#### Returns

[`SN_ArrayConstant`](SN_ArrayConstant.md)

#### Overrides

[SN_Constant](SN_Constant.md).[parse](SN_Constant.md#parse)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:1274

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

[SN_Constant](SN_Constant.md).[formatToWGSL](SN_Constant.md#formattowgsl)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:1309
