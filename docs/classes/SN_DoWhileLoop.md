[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / SN\_DoWhileLoop

# Class: SN\_DoWhileLoop

Statement node: do-while

## Hierarchy

- [`StatementNode`](StatementNode.md)

  ↳ **`SN_DoWhileLoop`**

## Table of contents

### Constructors

- [constructor](SN_DoWhileLoop.md#constructor)

### Properties

- [nodes](SN_DoWhileLoop.md#nodes)

### Methods

- [addNode](SN_DoWhileLoop.md#addnode)
- [formatToWGSL](SN_DoWhileLoop.md#formattowgsl)

## Constructors

### constructor

• **new SN_DoWhileLoop**(): [`SN_DoWhileLoop`](SN_DoWhileLoop.md)

#### Returns

[`SN_DoWhileLoop`](SN_DoWhileLoop.md)

#### Overrides

[StatementNode](StatementNode.md).[constructor](StatementNode.md#constructor)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:835

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

### formatToWGSL

▸ **formatToWGSL**(`context`, `depth`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`TranslatorContext`](TranslatorContext.md) |
| `depth` | `number` |

#### Returns

`string`

#### Inherited from

[StatementNode](StatementNode.md).[formatToWGSL](StatementNode.md#formattowgsl)

#### Defined in

gfx/graphics/webGpu/shader/converter/StatementNode.ts:19
