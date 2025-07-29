[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / WGSLTranslator

# Class: WGSLTranslator

WGSLCode Translator

## Table of contents

### Constructors

- [constructor](WGSLTranslator.md#constructor)

### Properties

- [result](WGSLTranslator.md#result)
- [ASTRoot](WGSLTranslator.md#astroot)
- [\_syntax](WGSLTranslator.md#_syntax)

### Methods

- [generateWGSL](WGSLTranslator.md#generatewgsl)

## Constructors

### constructor

• **new WGSLTranslator**(`syntax`): [`WGSLTranslator`](WGSLTranslator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `syntax` | [`GLSLSyntax`](GLSLSyntax.md) |

#### Returns

[`WGSLTranslator`](WGSLTranslator.md)

#### Defined in

gfx/graphics/webGpu/shader/converter/WGSLTranslator.ts:25

## Properties

### result

• **result**: `string`

#### Defined in

gfx/graphics/webGpu/shader/converter/WGSLTranslator.ts:21

___

### ASTRoot

• **ASTRoot**: [`StatementNode`](StatementNode.md)

#### Defined in

gfx/graphics/webGpu/shader/converter/WGSLTranslator.ts:22

___

### \_syntax

• `Protected` **\_syntax**: [`GLSLSyntax`](GLSLSyntax.md)

#### Defined in

gfx/graphics/webGpu/shader/converter/WGSLTranslator.ts:23

## Methods

### generateWGSL

▸ **generateWGSL**(): [`ShaderConverterResult`](ShaderConverterResult.md)

Generate WGSL code

#### Returns

[`ShaderConverterResult`](ShaderConverterResult.md)

WGSL code

#### Defined in

gfx/graphics/webGpu/shader/converter/WGSLTranslator.ts:35
