[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / GLSLSyntax

# Class: GLSLSyntax

## Table of contents

### Constructors

- [constructor](GLSLSyntax.md#constructor)

### Accessors

- [lexer](GLSLSyntax.md#lexer)
- [ASTRoot](GLSLSyntax.md#astroot)

## Constructors

### constructor

• **new GLSLSyntax**(`input`): [`GLSLSyntax`](GLSLSyntax.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`GLSLLexer`](GLSLLexer.md) |

#### Returns

[`GLSLSyntax`](GLSLSyntax.md)

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLSyntax.ts:16

## Accessors

### lexer

• `get` **lexer**(): [`GLSLLexer`](GLSLLexer.md)

#### Returns

[`GLSLLexer`](GLSLLexer.md)

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLSyntax.ts:22

___

### ASTRoot

• `get` **ASTRoot**(): [`StatementNode`](StatementNode.md)

#### Returns

[`StatementNode`](StatementNode.md)

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLSyntax.ts:125
