[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / ShaderReflection

# Class: ShaderReflection

## Table of contents

### Constructors

- [constructor](ShaderReflection.md#constructor)

### Properties

- [attributes](ShaderReflection.md#attributes)
- [vs\_variables](ShaderReflection.md#vs_variables)
- [fs\_variables](ShaderReflection.md#fs_variables)
- [cs\_variables](ShaderReflection.md#cs_variables)
- [groups](ShaderReflection.md#groups)
- [variables](ShaderReflection.md#variables)
- [useSplit](ShaderReflection.md#usesplit)

### Methods

- [parser](ShaderReflection.md#parser)
- [parser2](ShaderReflection.md#parser2)
- [combineShaderReflectionVarInfo](ShaderReflection.md#combineshaderreflectionvarinfo)
- [final](ShaderReflection.md#final)
- [getShaderReflection2](ShaderReflection.md#getshaderreflection2)
- [poolGetReflection](ShaderReflection.md#poolgetreflection)
- [genShaderVar](ShaderReflection.md#genshadervar)
- [genShaderVariant](ShaderReflection.md#genshadervariant)
- [genRenderShaderVariant](ShaderReflection.md#genrendershadervariant)
- [genComputeShaderVariant](ShaderReflection.md#gencomputeshadervariant)
- [combine](ShaderReflection.md#combine)

## Constructors

### constructor

• **new ShaderReflection**(): [`ShaderReflection`](ShaderReflection.md)

#### Returns

[`ShaderReflection`](ShaderReflection.md)

## Properties

### attributes

• **attributes**: [`ShaderReflectionAttribute`](../modules.md#shaderreflectionattribute)[] = `[]`

#### Defined in

gfx/graphics/webGpu/shader/value/ShaderReflectionInfo.ts:41

___

### vs\_variables

• **vs\_variables**: [`ShaderReflectionVarInfo`](../modules.md#shaderreflectionvarinfo)[] = `[]`

#### Defined in

gfx/graphics/webGpu/shader/value/ShaderReflectionInfo.ts:43

___

### fs\_variables

• **fs\_variables**: [`ShaderReflectionVarInfo`](../modules.md#shaderreflectionvarinfo)[] = `[]`

#### Defined in

gfx/graphics/webGpu/shader/value/ShaderReflectionInfo.ts:45

___

### cs\_variables

• **cs\_variables**: [`ShaderReflectionVarInfo`](../modules.md#shaderreflectionvarinfo)[] = `[]`

#### Defined in

gfx/graphics/webGpu/shader/value/ShaderReflectionInfo.ts:47

___

### groups

• **groups**: [`ShaderReflectionVarInfo`](../modules.md#shaderreflectionvarinfo)[][] = `[]`

#### Defined in

gfx/graphics/webGpu/shader/value/ShaderReflectionInfo.ts:49

___

### variables

• **variables**: `Object` = `{}`

#### Index signature

▪ [name: `string`]: [`ShaderReflectionVarInfo`](../modules.md#shaderreflectionvarinfo)

#### Defined in

gfx/graphics/webGpu/shader/value/ShaderReflectionInfo.ts:51

___

### useSplit

• **useSplit**: `boolean` = `false`

#### Defined in

gfx/graphics/webGpu/shader/value/ShaderReflectionInfo.ts:53

## Methods

### parser

▸ **parser**(`wgsl`, `shaderValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `wgsl` | `string` |
| `shaderValue` | [`ShaderValue`](../modules.md#shadervalue) |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/shader/value/ShaderReflectionInfo.ts:55

___

### parser2

▸ **parser2**(`wgsl`, `shaderBase`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `wgsl` | `string` |
| `shaderBase` | [`ShaderPassBase`](ShaderPassBase.md) |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/shader/value/ShaderReflectionInfo.ts:68

___

### combineShaderReflectionVarInfo

▸ **combineShaderReflectionVarInfo**(`shaderReflection`, `shader_variables`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shaderReflection` | [`ShaderReflection`](ShaderReflection.md) |
| `shader_variables` | [`ShaderReflectionVarInfo`](../modules.md#shaderreflectionvarinfo)[] |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/shader/value/ShaderReflectionInfo.ts:89

___

### final

▸ **final**(`shaderBase`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shaderBase` | [`ShaderPassBase`](ShaderPassBase.md) |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/shader/value/ShaderReflectionInfo.ts:145

___

### getShaderReflection2

▸ **getShaderReflection2**(`code`, `shaderBase`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` |
| `shaderBase` | [`ShaderPassBase`](ShaderPassBase.md) |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/shader/value/ShaderReflectionInfo.ts:158

___

### poolGetReflection

▸ **poolGetReflection**(`shaderVariant`): [`ShaderReflection`](ShaderReflection.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `shaderVariant` | `string` |

#### Returns

[`ShaderReflection`](ShaderReflection.md)

#### Defined in

gfx/graphics/webGpu/shader/value/ShaderReflectionInfo.ts:163

___

### genShaderVar

▸ **genShaderVar**(`shaderValue`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shaderValue` | [`ShaderValue`](../modules.md#shadervalue) |

#### Returns

`string`

#### Defined in

gfx/graphics/webGpu/shader/value/ShaderReflectionInfo.ts:168

___

### genShaderVariant

▸ **genShaderVariant**(`shader`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shader` | [`ShaderPassBase`](ShaderPassBase.md) |

#### Returns

`string`

#### Defined in

gfx/graphics/webGpu/shader/value/ShaderReflectionInfo.ts:192

___

### genRenderShaderVariant

▸ **genRenderShaderVariant**(`renderShader`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderShader` | [`RenderShaderPass`](RenderShaderPass.md) |

#### Returns

`string`

#### Defined in

gfx/graphics/webGpu/shader/value/ShaderReflectionInfo.ts:213

___

### genComputeShaderVariant

▸ **genComputeShaderVariant**(`computeShader`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `computeShader` | [`ComputeShader`](ComputeShader.md) |

#### Returns

`string`

#### Defined in

gfx/graphics/webGpu/shader/value/ShaderReflectionInfo.ts:227

___

### combine

▸ **combine**(`shaderValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shaderValue` | [`ShaderValue`](../modules.md#shadervalue) |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/shader/value/ShaderReflectionInfo.ts:236
