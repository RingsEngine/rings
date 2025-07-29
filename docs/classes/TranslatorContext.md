[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / TranslatorContext

# Class: TranslatorContext

The translator context

## Table of contents

### Constructors

- [constructor](TranslatorContext.md#constructor)

### Properties

- [\_stage](TranslatorContext.md#_stage)
- [\_builtinIn](TranslatorContext.md#_builtinin)
- [\_builtinOut](TranslatorContext.md#_builtinout)
- [\_layoutsIn](TranslatorContext.md#_layoutsin)
- [\_layoutsOut](TranslatorContext.md#_layoutsout)
- [\_layoutUniformCount](TranslatorContext.md#_layoutuniformcount)
- [\_workGroupSize](TranslatorContext.md#_workgroupsize)
- [\_parentContext](TranslatorContext.md#_parentcontext)
- [\_identifierEnv](TranslatorContext.md#_identifierenv)

### Accessors

- [stage](TranslatorContext.md#stage)
- [builtinIn](TranslatorContext.md#builtinin)
- [builtinOut](TranslatorContext.md#builtinout)
- [layoutsIn](TranslatorContext.md#layoutsin)
- [layoutsOut](TranslatorContext.md#layoutsout)
- [layoutUniformCount](TranslatorContext.md#layoutuniformcount)
- [workGroupSize](TranslatorContext.md#workgroupsize)
- [parentContext](TranslatorContext.md#parentcontext)

### Methods

- [findIdentifier](TranslatorContext.md#findidentifier)
- [addIdentifier](TranslatorContext.md#addidentifier)
- [hasIdentifier](TranslatorContext.md#hasidentifier)

## Constructors

### constructor

• **new TranslatorContext**(`context?`): [`TranslatorContext`](TranslatorContext.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context?` | [`TranslatorContext`](TranslatorContext.md) |

#### Returns

[`TranslatorContext`](TranslatorContext.md)

#### Defined in

gfx/graphics/webGpu/shader/converter/WGSLTranslator.ts:215

## Properties

### \_stage

• `Protected` **\_stage**: `string` = `"fragment"`

#### Defined in

gfx/graphics/webGpu/shader/converter/WGSLTranslator.ts:204

___

### \_builtinIn

• `Protected` **\_builtinIn**: `string`[] = `[]`

#### Defined in

gfx/graphics/webGpu/shader/converter/WGSLTranslator.ts:205

___

### \_builtinOut

• `Protected` **\_builtinOut**: `string`[] = `[]`

#### Defined in

gfx/graphics/webGpu/shader/converter/WGSLTranslator.ts:206

___

### \_layoutsIn

• `Protected` **\_layoutsIn**: [`SN_Layout`](SN_Layout.md)[] = `[]`

#### Defined in

gfx/graphics/webGpu/shader/converter/WGSLTranslator.ts:207

___

### \_layoutsOut

• `Protected` **\_layoutsOut**: [`SN_Layout`](SN_Layout.md)[] = `[]`

#### Defined in

gfx/graphics/webGpu/shader/converter/WGSLTranslator.ts:208

___

### \_layoutUniformCount

• `Protected` **\_layoutUniformCount**: `number` = `0`

#### Defined in

gfx/graphics/webGpu/shader/converter/WGSLTranslator.ts:209

___

### \_workGroupSize

• `Protected` **\_workGroupSize**: [`SN_Layout`](SN_Layout.md) = `undefined`

#### Defined in

gfx/graphics/webGpu/shader/converter/WGSLTranslator.ts:210

___

### \_parentContext

• `Protected` `Optional` **\_parentContext**: [`TranslatorContext`](TranslatorContext.md)

#### Defined in

gfx/graphics/webGpu/shader/converter/WGSLTranslator.ts:212

___

### \_identifierEnv

• `Protected` **\_identifierEnv**: `Map`\<`string`, `string`\>

#### Defined in

gfx/graphics/webGpu/shader/converter/WGSLTranslator.ts:213

## Accessors

### stage

• `get` **stage**(): `string`

#### Returns

`string`

#### Defined in

gfx/graphics/webGpu/shader/converter/WGSLTranslator.ts:219

• `set` **stage**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/shader/converter/WGSLTranslator.ts:226

___

### builtinIn

• `get` **builtinIn**(): `string`[]

#### Returns

`string`[]

#### Defined in

gfx/graphics/webGpu/shader/converter/WGSLTranslator.ts:233

___

### builtinOut

• `get` **builtinOut**(): `string`[]

#### Returns

`string`[]

#### Defined in

gfx/graphics/webGpu/shader/converter/WGSLTranslator.ts:240

___

### layoutsIn

• `get` **layoutsIn**(): [`SN_Layout`](SN_Layout.md)[]

#### Returns

[`SN_Layout`](SN_Layout.md)[]

#### Defined in

gfx/graphics/webGpu/shader/converter/WGSLTranslator.ts:247

___

### layoutsOut

• `get` **layoutsOut**(): [`SN_Layout`](SN_Layout.md)[]

#### Returns

[`SN_Layout`](SN_Layout.md)[]

#### Defined in

gfx/graphics/webGpu/shader/converter/WGSLTranslator.ts:254

___

### layoutUniformCount

• `get` **layoutUniformCount**(): `number`

#### Returns

`number`

#### Defined in

gfx/graphics/webGpu/shader/converter/WGSLTranslator.ts:261

• `set` **layoutUniformCount**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/shader/converter/WGSLTranslator.ts:268

___

### workGroupSize

• `get` **workGroupSize**(): [`SN_Layout`](SN_Layout.md)

#### Returns

[`SN_Layout`](SN_Layout.md)

#### Defined in

gfx/graphics/webGpu/shader/converter/WGSLTranslator.ts:276

• `set` **workGroupSize**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`SN_Layout`](SN_Layout.md) |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/shader/converter/WGSLTranslator.ts:283

___

### parentContext

• `get` **parentContext**(): [`TranslatorContext`](TranslatorContext.md)

#### Returns

[`TranslatorContext`](TranslatorContext.md)

#### Defined in

gfx/graphics/webGpu/shader/converter/WGSLTranslator.ts:290

## Methods

### findIdentifier

▸ **findIdentifier**(`name`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string`

#### Defined in

gfx/graphics/webGpu/shader/converter/WGSLTranslator.ts:294

___

### addIdentifier

▸ **addIdentifier**(`name`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `string` |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/shader/converter/WGSLTranslator.ts:305

___

### hasIdentifier

▸ **hasIdentifier**(`name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Defined in

gfx/graphics/webGpu/shader/converter/WGSLTranslator.ts:309
