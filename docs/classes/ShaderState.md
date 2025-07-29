[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / ShaderState

# Class: ShaderState

## Table of contents

### Constructors

- [constructor](ShaderState.md#constructor)

### Properties

- [blendMode](ShaderState.md#blendmode)
- [depthCompare](ShaderState.md#depthcompare)
- [depthWriteEnabled](ShaderState.md#depthwriteenabled)
- [frontFace](ShaderState.md#frontface)
- [cullMode](ShaderState.md#cullmode)
- [topology](ShaderState.md#topology)
- [depthBias](ShaderState.md#depthbias)
- [useLight](ShaderState.md#uselight)
- [useProbe](ShaderState.md#useprobe)
- [acceptGI](ShaderState.md#acceptgi)
- [acceptShadow](ShaderState.md#acceptshadow)
- [castShadow](ShaderState.md#castshadow)
- [castReflection](ShaderState.md#castreflection)
- [receiveEnv](ShaderState.md#receiveenv)
- [renderLayer](ShaderState.md#renderlayer)
- [renderOrder](ShaderState.md#renderorder)
- [unclippedDepth](ShaderState.md#unclippeddepth)
- [transparent](ShaderState.md#transparent)
- [multisample](ShaderState.md#multisample)
- [label](ShaderState.md#label)
- [useZ](ShaderState.md#usez)
- [splitTexture](ShaderState.md#splittexture)
- [alphaCutoff](ShaderState.md#alphacutoff)
- [useFragDepth](ShaderState.md#usefragdepth)
- [writeMasks](ShaderState.md#writemasks)

### Methods

- [setFromMapValues](ShaderState.md#setfrommapvalues)
- [convertBlendMode](ShaderState.md#convertblendmode)

## Constructors

### constructor

• **new ShaderState**(): [`ShaderState`](ShaderState.md)

#### Returns

[`ShaderState`](ShaderState.md)

## Properties

### blendMode

• `Optional` **blendMode**: [`BlendMode`](../enums/BlendMode.md) = `BlendMode.NONE`

#### Defined in

gfx/graphics/webGpu/shader/value/ShaderState.ts:9

___

### depthCompare

• `Optional` **depthCompare**: `GPUCompareFunction` = `GPUCompareFunction.less_equal`

#### Defined in

gfx/graphics/webGpu/shader/value/ShaderState.ts:10

___

### depthWriteEnabled

• `Optional` **depthWriteEnabled**: `boolean` = `true`

#### Defined in

gfx/graphics/webGpu/shader/value/ShaderState.ts:11

___

### frontFace

• `Optional` **frontFace**: `GPUFrontFace`

#### Defined in

gfx/graphics/webGpu/shader/value/ShaderState.ts:12

___

### cullMode

• `Optional` **cullMode**: `GPUCullMode` = `GPUCullMode.back`

#### Defined in

gfx/graphics/webGpu/shader/value/ShaderState.ts:13

___

### topology

• `Optional` **topology**: `GPUPrimitiveTopology` = `GPUPrimitiveTopology.triangle_list`

#### Defined in

gfx/graphics/webGpu/shader/value/ShaderState.ts:14

___

### depthBias

• `Optional` **depthBias**: `number` = `10`

#### Defined in

gfx/graphics/webGpu/shader/value/ShaderState.ts:15

___

### useLight

• **useLight**: `boolean` = `false`

#### Defined in

gfx/graphics/webGpu/shader/value/ShaderState.ts:16

___

### useProbe

• **useProbe**: `boolean` = `false`

#### Defined in

gfx/graphics/webGpu/shader/value/ShaderState.ts:17

___

### acceptGI

• **acceptGI**: `boolean` = `false`

#### Defined in

gfx/graphics/webGpu/shader/value/ShaderState.ts:18

___

### acceptShadow

• **acceptShadow**: `boolean` = `false`

#### Defined in

gfx/graphics/webGpu/shader/value/ShaderState.ts:19

___

### castShadow

• **castShadow**: `boolean` = `false`

#### Defined in

gfx/graphics/webGpu/shader/value/ShaderState.ts:20

___

### castReflection

• **castReflection**: `boolean` = `true`

#### Defined in

gfx/graphics/webGpu/shader/value/ShaderState.ts:21

___

### receiveEnv

• **receiveEnv**: `boolean` = `false`

#### Defined in

gfx/graphics/webGpu/shader/value/ShaderState.ts:22

___

### renderLayer

• **renderLayer**: `number` = `1000`

#### Defined in

gfx/graphics/webGpu/shader/value/ShaderState.ts:23

___

### renderOrder

• **renderOrder**: `number` = `2000`

#### Defined in

gfx/graphics/webGpu/shader/value/ShaderState.ts:24

___

### unclippedDepth

• **unclippedDepth**: `boolean` = `false`

#### Defined in

gfx/graphics/webGpu/shader/value/ShaderState.ts:25

___

### transparent

• **transparent**: `boolean` = `false`

#### Defined in

gfx/graphics/webGpu/shader/value/ShaderState.ts:26

___

### multisample

• **multisample**: `number` = `0`

#### Defined in

gfx/graphics/webGpu/shader/value/ShaderState.ts:27

___

### label

• **label**: `string`

#### Defined in

gfx/graphics/webGpu/shader/value/ShaderState.ts:28

___

### useZ

• **useZ**: `boolean` = `true`

#### Defined in

gfx/graphics/webGpu/shader/value/ShaderState.ts:29

___

### splitTexture

• **splitTexture**: `boolean` = `false`

#### Defined in

gfx/graphics/webGpu/shader/value/ShaderState.ts:30

___

### alphaCutoff

• **alphaCutoff**: `number`

#### Defined in

gfx/graphics/webGpu/shader/value/ShaderState.ts:31

___

### useFragDepth

• **useFragDepth**: `boolean` = `false`

#### Defined in

gfx/graphics/webGpu/shader/value/ShaderState.ts:32

___

### writeMasks

• **writeMasks**: `number`[] = `[]`

#### Defined in

gfx/graphics/webGpu/shader/value/ShaderState.ts:33

## Methods

### setFromMapValues

▸ **setFromMapValues**(`values`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `Map`\<`string`, `any`\> |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/shader/value/ShaderState.ts:35

___

### convertBlendMode

▸ **convertBlendMode**(`value`): [`BlendMode`](../enums/BlendMode.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

[`BlendMode`](../enums/BlendMode.md)

#### Defined in

gfx/graphics/webGpu/shader/value/ShaderState.ts:98
