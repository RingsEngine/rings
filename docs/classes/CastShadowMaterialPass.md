[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / CastShadowMaterialPass

# Class: CastShadowMaterialPass

## Hierarchy

- [`RenderShaderPass`](RenderShaderPass.md)

  ↳ **`CastShadowMaterialPass`**

## Table of contents

### Constructors

- [constructor](CastShadowMaterialPass.md#constructor)

### Properties

- [passType](CastShadowMaterialPass.md#passtype)
- [useRz](CastShadowMaterialPass.md#userz)
- [vsName](CastShadowMaterialPass.md#vsname)
- [fsName](CastShadowMaterialPass.md#fsname)
- [shaderState](CastShadowMaterialPass.md#shaderstate)
- [textures](CastShadowMaterialPass.md#textures)
- [pipeline](CastShadowMaterialPass.md#pipeline)
- [bindGroupLayouts](CastShadowMaterialPass.md#bindgrouplayouts)
- [envMap](CastShadowMaterialPass.md#envmap)
- [prefilterMap](CastShadowMaterialPass.md#prefiltermap)
- [reflectionMap](CastShadowMaterialPass.md#reflectionmap)
- [\_sourceVS](CastShadowMaterialPass.md#_sourcevs)
- [\_sourceFS](CastShadowMaterialPass.md#_sourcefs)
- [\_destVS](CastShadowMaterialPass.md#_destvs)
- [\_destFS](CastShadowMaterialPass.md#_destfs)
- [\_vsShaderModule](CastShadowMaterialPass.md#_vsshadermodule)
- [\_fsShaderModule](CastShadowMaterialPass.md#_fsshadermodule)
- [\_textureGroup](CastShadowMaterialPass.md#_texturegroup)
- [\_textureChange](CastShadowMaterialPass.md#_texturechange)
- [\_groupsShaderReflectionVarInfos](CastShadowMaterialPass.md#_groupsshaderreflectionvarinfos)
- [outBufferMask](CastShadowMaterialPass.md#outbuffermask)
- [instanceID](CastShadowMaterialPass.md#instanceid)
- [shaderVariant](CastShadowMaterialPass.md#shadervariant)
- [vsEntryPoint](CastShadowMaterialPass.md#vsentrypoint)
- [fsEntryPoint](CastShadowMaterialPass.md#fsentrypoint)
- [bindGroups](CastShadowMaterialPass.md#bindgroups)
- [shaderReflection](CastShadowMaterialPass.md#shaderreflection)
- [defineValue](CastShadowMaterialPass.md#definevalue)
- [constValues](CastShadowMaterialPass.md#constvalues)
- [uniforms](CastShadowMaterialPass.md#uniforms)
- [materialDataUniformBuffer](CastShadowMaterialPass.md#materialdatauniformbuffer)
- [\_bufferDic](CastShadowMaterialPass.md#_bufferdic)
- [\_shaderChange](CastShadowMaterialPass.md#_shaderchange)
- [\_valueChange](CastShadowMaterialPass.md#_valuechange)

### Accessors

- [renderOrder](CastShadowMaterialPass.md#renderorder)
- [doubleSide](CastShadowMaterialPass.md#doubleside)
- [depthWriteEnabled](CastShadowMaterialPass.md#depthwriteenabled)
- [cullMode](CastShadowMaterialPass.md#cullmode)
- [frontFace](CastShadowMaterialPass.md#frontface)
- [depthBias](CastShadowMaterialPass.md#depthbias)
- [topology](CastShadowMaterialPass.md#topology)
- [blendMode](CastShadowMaterialPass.md#blendmode)
- [depthCompare](CastShadowMaterialPass.md#depthcompare)
- [baseColor](CastShadowMaterialPass.md#basecolor)

### Methods

- [setShaderEntry](CastShadowMaterialPass.md#setshaderentry)
- [setUniform](CastShadowMaterialPass.md#setuniform)
- [setTexture](CastShadowMaterialPass.md#settexture)
- [getTexture](CastShadowMaterialPass.md#gettexture)
- [genRenderPipeline](CastShadowMaterialPass.md#genrenderpipeline)
- [reBuild](CastShadowMaterialPass.md#rebuild)
- [apply](CastShadowMaterialPass.md#apply)
- [preCompile](CastShadowMaterialPass.md#precompile)
- [applyPostDefine](CastShadowMaterialPass.md#applypostdefine)
- [setBindGroup](CastShadowMaterialPass.md#setbindgroup)
- [checkBuffer](CastShadowMaterialPass.md#checkbuffer)
- [preCompileShader](CastShadowMaterialPass.md#precompileshader)
- [compileShader](CastShadowMaterialPass.md#compileshader)
- [getGroupLayout](CastShadowMaterialPass.md#getgrouplayout)
- [genGroups](CastShadowMaterialPass.md#gengroups)
- [destroy](CastShadowMaterialPass.md#destroy)
- [destroyShader](CastShadowMaterialPass.md#destroyshader)
- [getShader](CastShadowMaterialPass.md#getshader)
- [createShader](CastShadowMaterialPass.md#createshader)
- [noticeShaderChange](CastShadowMaterialPass.md#noticeshaderchange)
- [noticeValueChange](CastShadowMaterialPass.md#noticevaluechange)
- [setStorageBuffer](CastShadowMaterialPass.md#setstoragebuffer)
- [setStructStorageBuffer](CastShadowMaterialPass.md#setstructstoragebuffer)
- [setUniformBuffer](CastShadowMaterialPass.md#setuniformbuffer)
- [setDefine](CastShadowMaterialPass.md#setdefine)
- [hasDefine](CastShadowMaterialPass.md#hasdefine)
- [deleteDefine](CastShadowMaterialPass.md#deletedefine)
- [setUniformFloat](CastShadowMaterialPass.md#setuniformfloat)
- [setUniformVector2](CastShadowMaterialPass.md#setuniformvector2)
- [setUniformVector3](CastShadowMaterialPass.md#setuniformvector3)
- [setUniformVector4](CastShadowMaterialPass.md#setuniformvector4)
- [setUniformColor](CastShadowMaterialPass.md#setuniformcolor)
- [setUniformArray](CastShadowMaterialPass.md#setuniformarray)
- [getUniform](CastShadowMaterialPass.md#getuniform)
- [getUniformFloat](CastShadowMaterialPass.md#getuniformfloat)
- [getUniformVector2](CastShadowMaterialPass.md#getuniformvector2)
- [getUniformVector3](CastShadowMaterialPass.md#getuniformvector3)
- [getUniformVector4](CastShadowMaterialPass.md#getuniformvector4)
- [getUniformColor](CastShadowMaterialPass.md#getuniformcolor)
- [getBuffer](CastShadowMaterialPass.md#getbuffer)
- [noticeBufferChange](CastShadowMaterialPass.md#noticebufferchange)
- [applyUniform](CastShadowMaterialPass.md#applyuniform)

## Constructors

### constructor

• **new CastShadowMaterialPass**(): [`CastShadowMaterialPass`](CastShadowMaterialPass.md)

#### Returns

[`CastShadowMaterialPass`](CastShadowMaterialPass.md)

#### Overrides

[RenderShaderPass](RenderShaderPass.md).[constructor](RenderShaderPass.md#constructor)

#### Defined in

materials/multiPass/CastShadowMaterialPass.ts:6

## Properties

### passType

• **passType**: [`PassType`](../enums/PassType.md) = `PassType.COLOR`

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[passType](RenderShaderPass.md#passtype)

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:36

___

### useRz

• **useRz**: `boolean` = `false`

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[useRz](RenderShaderPass.md#userz)

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:37

___

### vsName

• **vsName**: `string`

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[vsName](RenderShaderPass.md#vsname)

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:38

___

### fsName

• **fsName**: `string`

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[fsName](RenderShaderPass.md#fsname)

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:39

___

### shaderState

• **shaderState**: [`ShaderState`](ShaderState.md)

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[shaderState](RenderShaderPass.md#shaderstate)

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:40

___

### textures

• **textures**: `Object`

#### Index signature

▪ [name: `string`]: [`Texture`](Texture.md)

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[textures](RenderShaderPass.md#textures)

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:41

___

### pipeline

• **pipeline**: `GPURenderPipeline`

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[pipeline](RenderShaderPass.md#pipeline)

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:42

___

### bindGroupLayouts

• **bindGroupLayouts**: `GPUBindGroupLayout`[]

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[bindGroupLayouts](RenderShaderPass.md#bindgrouplayouts)

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:43

___

### envMap

• **envMap**: [`Texture`](Texture.md)

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[envMap](RenderShaderPass.md#envmap)

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:44

___

### prefilterMap

• **prefilterMap**: [`Texture`](Texture.md)

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[prefilterMap](RenderShaderPass.md#prefiltermap)

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:45

___

### reflectionMap

• **reflectionMap**: [`Texture`](Texture.md)

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[reflectionMap](RenderShaderPass.md#reflectionmap)

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:46

___

### \_sourceVS

• `Protected` **\_sourceVS**: `string`

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[_sourceVS](RenderShaderPass.md#_sourcevs)

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:47

___

### \_sourceFS

• `Protected` **\_sourceFS**: `string`

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[_sourceFS](RenderShaderPass.md#_sourcefs)

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:48

___

### \_destVS

• `Protected` **\_destVS**: `string`

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[_destVS](RenderShaderPass.md#_destvs)

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:49

___

### \_destFS

• `Protected` **\_destFS**: `string`

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[_destFS](RenderShaderPass.md#_destfs)

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:50

___

### \_vsShaderModule

• `Protected` **\_vsShaderModule**: `GPUShaderModule`

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[_vsShaderModule](RenderShaderPass.md#_vsshadermodule)

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:51

___

### \_fsShaderModule

• `Protected` **\_fsShaderModule**: `GPUShaderModule`

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[_fsShaderModule](RenderShaderPass.md#_fsshadermodule)

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:52

___

### \_textureGroup

• `Protected` **\_textureGroup**: `number` = `-1`

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[_textureGroup](RenderShaderPass.md#_texturegroup)

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:53

___

### \_textureChange

• `Protected` **\_textureChange**: `boolean` = `false`

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[_textureChange](RenderShaderPass.md#_texturechange)

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:54

___

### \_groupsShaderReflectionVarInfos

• `Protected` **\_groupsShaderReflectionVarInfos**: [`ShaderReflectionVarInfo`](../modules.md#shaderreflectionvarinfo)[][]

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[_groupsShaderReflectionVarInfos](RenderShaderPass.md#_groupsshaderreflectionvarinfos)

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:55

___

### outBufferMask

• **outBufferMask**: [`Vector4`](Vector4.md)

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[outBufferMask](RenderShaderPass.md#outbuffermask)

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:56

___

### instanceID

• `Readonly` **instanceID**: `string`

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[instanceID](RenderShaderPass.md#instanceid)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:17

___

### shaderVariant

• **shaderVariant**: `string`

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[shaderVariant](RenderShaderPass.md#shadervariant)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:18

___

### vsEntryPoint

• **vsEntryPoint**: `string`

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[vsEntryPoint](RenderShaderPass.md#vsentrypoint)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:19

___

### fsEntryPoint

• **fsEntryPoint**: `string`

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[fsEntryPoint](RenderShaderPass.md#fsentrypoint)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:20

___

### bindGroups

• **bindGroups**: `GPUBindGroup`[]

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[bindGroups](RenderShaderPass.md#bindgroups)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:21

___

### shaderReflection

• **shaderReflection**: [`ShaderReflection`](ShaderReflection.md)

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[shaderReflection](RenderShaderPass.md#shaderreflection)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:22

___

### defineValue

• **defineValue**: `Object`

#### Index signature

▪ [name: `string`]: `any`

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[defineValue](RenderShaderPass.md#definevalue)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:23

___

### constValues

• **constValues**: `Object`

#### Index signature

▪ [name: `string`]: `any`

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[constValues](RenderShaderPass.md#constvalues)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:24

___

### uniforms

• **uniforms**: `Object`

#### Index signature

▪ [name: `string`]: [`UniformNode`](UniformNode.md)

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[uniforms](RenderShaderPass.md#uniforms)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:25

___

### materialDataUniformBuffer

• **materialDataUniformBuffer**: [`MaterialDataUniformGPUBuffer`](MaterialDataUniformGPUBuffer.md)

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[materialDataUniformBuffer](RenderShaderPass.md#materialdatauniformbuffer)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:26

___

### \_bufferDic

• `Protected` **\_bufferDic**: `Map`\<`string`, [`GPUBufferBase`](GPUBufferBase.md)\>

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[_bufferDic](RenderShaderPass.md#_bufferdic)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:27

___

### \_shaderChange

• `Protected` **\_shaderChange**: `boolean` = `true`

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[_shaderChange](RenderShaderPass.md#_shaderchange)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:28

___

### \_valueChange

• `Protected` **\_valueChange**: `boolean` = `false`

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[_valueChange](RenderShaderPass.md#_valuechange)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:29

## Accessors

### renderOrder

• `get` **renderOrder**(): `number`

#### Returns

`number`

#### Inherited from

RenderShaderPass.renderOrder

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:97

• `set` **renderOrder**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

RenderShaderPass.renderOrder

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:101

___

### doubleSide

• `get` **doubleSide**(): `boolean`

#### Returns

`boolean`

#### Inherited from

RenderShaderPass.doubleSide

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:108

• `set` **doubleSide**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

RenderShaderPass.doubleSide

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:112

___

### depthWriteEnabled

• `get` **depthWriteEnabled**(): `boolean`

#### Returns

`boolean`

#### Inherited from

RenderShaderPass.depthWriteEnabled

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:120

• `set` **depthWriteEnabled**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

RenderShaderPass.depthWriteEnabled

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:124

___

### cullMode

• `get` **cullMode**(): `GPUCullMode`

#### Returns

`GPUCullMode`

#### Inherited from

RenderShaderPass.cullMode

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:131

• `set` **cullMode**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUCullMode` |

#### Returns

`void`

#### Inherited from

RenderShaderPass.cullMode

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:135

___

### frontFace

• `get` **frontFace**(): `GPUFrontFace`

#### Returns

`GPUFrontFace`

#### Inherited from

RenderShaderPass.frontFace

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:142

• `set` **frontFace**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUFrontFace` |

#### Returns

`void`

#### Inherited from

RenderShaderPass.frontFace

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:146

___

### depthBias

• `get` **depthBias**(): `number`

#### Returns

`number`

#### Inherited from

RenderShaderPass.depthBias

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:153

• `set` **depthBias**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

RenderShaderPass.depthBias

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:157

___

### topology

• `get` **topology**(): `GPUPrimitiveTopology`

#### Returns

`GPUPrimitiveTopology`

#### Inherited from

RenderShaderPass.topology

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:164

• `set` **topology**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUPrimitiveTopology` |

#### Returns

`void`

#### Inherited from

RenderShaderPass.topology

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:168

___

### blendMode

• `get` **blendMode**(): [`BlendMode`](../enums/BlendMode.md)

#### Returns

[`BlendMode`](../enums/BlendMode.md)

#### Inherited from

RenderShaderPass.blendMode

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:175

• `set` **blendMode**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`BlendMode`](../enums/BlendMode.md) |

#### Returns

`void`

#### Inherited from

RenderShaderPass.blendMode

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:179

___

### depthCompare

• `get` **depthCompare**(): `GPUCompareFunction`

#### Returns

`GPUCompareFunction`

#### Inherited from

RenderShaderPass.depthCompare

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:189

• `set` **depthCompare**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUCompareFunction` |

#### Returns

`void`

#### Inherited from

RenderShaderPass.depthCompare

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:193

___

### baseColor

• `get` **baseColor**(): [`Color`](Color.md)

#### Returns

[`Color`](Color.md)

#### Inherited from

RenderShaderPass.baseColor

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:230

• `set` **baseColor**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Color`](Color.md) |

#### Returns

`void`

#### Inherited from

RenderShaderPass.baseColor

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:234

## Methods

### setShaderEntry

▸ **setShaderEntry**(`vsEntryPoint?`, `fsEntryPoint?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `vsEntryPoint` | `string` | `""` |
| `fsEntryPoint` | `string` | `""` |

#### Returns

`void`

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[setShaderEntry](RenderShaderPass.md#setshaderentry)

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:200

___

### setUniform

▸ **setUniform**(`name`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `any` |

#### Returns

`void`

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[setUniform](RenderShaderPass.md#setuniform)

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:205

___

### setTexture

▸ **setTexture**(`name`, `texture`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `texture` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[setTexture](RenderShaderPass.md#settexture)

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:210

___

### getTexture

▸ **getTexture**(`name`): [`Texture`](Texture.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`Texture`](Texture.md)

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[getTexture](RenderShaderPass.md#gettexture)

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:238

___

### genRenderPipeline

▸ **genRenderPipeline**(`geometry`, `renderPassState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `geometry` | [`GeometryBase`](GeometryBase.md) |
| `renderPassState` | [`RendererPassState`](RendererPassState.md) |

#### Returns

`void`

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[genRenderPipeline](RenderShaderPass.md#genrenderpipeline)

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:242

___

### reBuild

▸ **reBuild**(`geometry`, `rendererPassState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `geometry` | [`GeometryBase`](GeometryBase.md) |
| `rendererPassState` | [`RendererPassState`](RendererPassState.md) |

#### Returns

`void`

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[reBuild](RenderShaderPass.md#rebuild)

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:250

___

### apply

▸ **apply**(`geometry`, `rendererPassState`, `noticeFun?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `geometry` | [`GeometryBase`](GeometryBase.md) |
| `rendererPassState` | [`RendererPassState`](RendererPassState.md) |
| `noticeFun?` | `Function` |

#### Returns

`void`

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[apply](RenderShaderPass.md#apply)

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:256

___

### preCompile

▸ **preCompile**(`geometry`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `geometry` | [`GeometryBase`](GeometryBase.md) |

#### Returns

`void`

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[preCompile](RenderShaderPass.md#precompile)

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:282

___

### applyPostDefine

▸ **applyPostDefine**(`shader`, `renderPassState`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shader` | `string` |
| `renderPassState` | [`RendererPassState`](RendererPassState.md) |

#### Returns

`string`

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[applyPostDefine](RenderShaderPass.md#applypostdefine)

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:289

___

### setBindGroup

▸ **setBindGroup**(`groupIndex`, `group`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupIndex` | `number` |
| `group` | `GPUBindGroup` |

#### Returns

`void`

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[setBindGroup](RenderShaderPass.md#setbindgroup)

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:306

___

### checkBuffer

▸ **checkBuffer**(`bufferName`, `buffer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bufferName` | `string` |
| `buffer` | [`GPUBufferBase`](GPUBufferBase.md) |

#### Returns

`void`

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[checkBuffer](RenderShaderPass.md#checkbuffer)

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:310

___

### preCompileShader

▸ **preCompileShader**(`stage`, `code`, `format?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `stage` | [`ShaderStage`](../enums/ShaderStage.md) |
| `code` | `string` |
| `format?` | `string` |

#### Returns

`void`

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[preCompileShader](RenderShaderPass.md#precompileshader)

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:314

___

### compileShader

▸ **compileShader**(`stage`, `code`, `renderPassState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `stage` | [`ShaderStage`](../enums/ShaderStage.md) |
| `code` | `string` |
| `renderPassState` | [`RendererPassState`](RendererPassState.md) |

#### Returns

`void`

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[compileShader](RenderShaderPass.md#compileshader)

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:342

___

### getGroupLayout

▸ **getGroupLayout**(`index`, `infos`): `GPUBindGroupLayoutEntry`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `infos` | [`ShaderReflectionVarInfo`](../modules.md#shaderreflectionvarinfo)[] |

#### Returns

`GPUBindGroupLayoutEntry`[]

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[getGroupLayout](RenderShaderPass.md#getgrouplayout)

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:385

___

### genGroups

▸ **genGroups**(`groupIndex`, `infos`, `force?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `groupIndex` | `number` | `undefined` |
| `infos` | [`ShaderReflectionVarInfo`](../modules.md#shaderreflectionvarinfo)[][] | `undefined` |
| `force` | `boolean` | `false` |

#### Returns

`void`

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[genGroups](RenderShaderPass.md#gengroups)

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:514

___

### destroy

▸ **destroy**(`force?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `force?` | `boolean` |

#### Returns

`void`

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[destroy](RenderShaderPass.md#destroy)

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:880

___

### destroyShader

▸ **destroyShader**(`instanceID`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `instanceID` | `string` |

#### Returns

`void`

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[destroyShader](RenderShaderPass.md#destroyshader)

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:919

___

### getShader

▸ **getShader**(`instanceID`): [`RenderShaderPass`](RenderShaderPass.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `instanceID` | `string` |

#### Returns

[`RenderShaderPass`](RenderShaderPass.md)

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[getShader](RenderShaderPass.md#getshader)

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:927

___

### createShader

▸ **createShader**(`vs`, `fs`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vs` | `string` |
| `fs` | `string` |

#### Returns

`string`

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[createShader](RenderShaderPass.md#createshader)

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:931

___

### noticeShaderChange

▸ **noticeShaderChange**(): `void`

#### Returns

`void`

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[noticeShaderChange](RenderShaderPass.md#noticeshaderchange)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:39

___

### noticeValueChange

▸ **noticeValueChange**(): `void`

#### Returns

`void`

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[noticeValueChange](RenderShaderPass.md#noticevaluechange)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:43

___

### setStorageBuffer

▸ **setStorageBuffer**(`name`, `buffer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `buffer` | [`StorageGPUBuffer`](StorageGPUBuffer.md) |

#### Returns

`void`

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[setStorageBuffer](RenderShaderPass.md#setstoragebuffer)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:47

___

### setStructStorageBuffer

▸ **setStructStorageBuffer**\<`T`\>(`name`, `buffer`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Struct`](Struct.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `buffer` | [`StructStorageGPUBuffer`](StructStorageGPUBuffer.md)\<`T`\> |

#### Returns

`void`

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[setStructStorageBuffer](RenderShaderPass.md#setstructstoragebuffer)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:56

___

### setUniformBuffer

▸ **setUniformBuffer**(`name`, `buffer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `buffer` | [`UniformGPUBuffer`](UniformGPUBuffer.md) |

#### Returns

`void`

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[setUniformBuffer](RenderShaderPass.md#setuniformbuffer)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:68

___

### setDefine

▸ **setDefine**(`defineName`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `defineName` | `string` |
| `value` | `any` |

#### Returns

`void`

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[setDefine](RenderShaderPass.md#setdefine)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:77

___

### hasDefine

▸ **hasDefine**(`defineName`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `defineName` | `string` |

#### Returns

`boolean`

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[hasDefine](RenderShaderPass.md#hasdefine)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:89

___

### deleteDefine

▸ **deleteDefine**(`defineName`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `defineName` | `string` |

#### Returns

`void`

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[deleteDefine](RenderShaderPass.md#deletedefine)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:93

___

### setUniformFloat

▸ **setUniformFloat**(`name`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[setUniformFloat](RenderShaderPass.md#setuniformfloat)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:98

___

### setUniformVector2

▸ **setUniformVector2**(`name`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | [`Vector2`](Vector2.md) |

#### Returns

`void`

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[setUniformVector2](RenderShaderPass.md#setuniformvector2)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:107

___

### setUniformVector3

▸ **setUniformVector3**(`name`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[setUniformVector3](RenderShaderPass.md#setuniformvector3)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:116

___

### setUniformVector4

▸ **setUniformVector4**(`name`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | [`Vector4`](Vector4.md) |

#### Returns

`void`

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[setUniformVector4](RenderShaderPass.md#setuniformvector4)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:124

___

### setUniformColor

▸ **setUniformColor**(`name`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | [`Color`](Color.md) |

#### Returns

`void`

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[setUniformColor](RenderShaderPass.md#setuniformcolor)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:132

___

### setUniformArray

▸ **setUniformArray**(`name`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `Float32Array`\<`ArrayBufferLike`\> |

#### Returns

`void`

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[setUniformArray](RenderShaderPass.md#setuniformarray)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:140

___

### getUniform

▸ **getUniform**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[getUniform](RenderShaderPass.md#getuniform)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:156

___

### getUniformFloat

▸ **getUniformFloat**(`name`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`number`

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[getUniformFloat](RenderShaderPass.md#getuniformfloat)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:160

___

### getUniformVector2

▸ **getUniformVector2**(`name`): [`Vector2`](Vector2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`Vector2`](Vector2.md)

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[getUniformVector2](RenderShaderPass.md#getuniformvector2)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:164

___

### getUniformVector3

▸ **getUniformVector3**(`name`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[getUniformVector3](RenderShaderPass.md#getuniformvector3)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:168

___

### getUniformVector4

▸ **getUniformVector4**(`name`): [`Vector4`](Vector4.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`Vector4`](Vector4.md)

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[getUniformVector4](RenderShaderPass.md#getuniformvector4)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:172

___

### getUniformColor

▸ **getUniformColor**(`name`): [`Color`](Color.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`Color`](Color.md)

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[getUniformColor](RenderShaderPass.md#getuniformcolor)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:176

___

### getBuffer

▸ **getBuffer**(`name`): [`GPUBufferBase`](GPUBufferBase.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`GPUBufferBase`](GPUBufferBase.md)

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[getBuffer](RenderShaderPass.md#getbuffer)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:180

___

### noticeBufferChange

▸ **noticeBufferChange**(`name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[noticeBufferChange](RenderShaderPass.md#noticebufferchange)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:184

___

### applyUniform

▸ **applyUniform**(): `void`

#### Returns

`void`

#### Inherited from

[RenderShaderPass](RenderShaderPass.md).[applyUniform](RenderShaderPass.md#applyuniform)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:186
