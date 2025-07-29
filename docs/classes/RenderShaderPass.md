[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / RenderShaderPass

# Class: RenderShaderPass

## Hierarchy

- [`ShaderPassBase`](ShaderPassBase.md)

  ↳ **`RenderShaderPass`**

  ↳↳ [`CastPointShadowMaterialPass`](CastPointShadowMaterialPass.md)

  ↳↳ [`CastShadowMaterialPass`](CastShadowMaterialPass.md)

  ↳↳ [`DepthMaterialPass`](DepthMaterialPass.md)

  ↳↳ [`GBufferPass`](GBufferPass.md)

  ↳↳ [`SkyGBufferPass`](SkyGBufferPass.md)

## Table of contents

### Constructors

- [constructor](RenderShaderPass.md#constructor)

### Properties

- [passType](RenderShaderPass.md#passtype)
- [useRz](RenderShaderPass.md#userz)
- [vsName](RenderShaderPass.md#vsname)
- [fsName](RenderShaderPass.md#fsname)
- [shaderState](RenderShaderPass.md#shaderstate)
- [textures](RenderShaderPass.md#textures)
- [pipeline](RenderShaderPass.md#pipeline)
- [bindGroupLayouts](RenderShaderPass.md#bindgrouplayouts)
- [envMap](RenderShaderPass.md#envmap)
- [prefilterMap](RenderShaderPass.md#prefiltermap)
- [reflectionMap](RenderShaderPass.md#reflectionmap)
- [\_sourceVS](RenderShaderPass.md#_sourcevs)
- [\_sourceFS](RenderShaderPass.md#_sourcefs)
- [\_destVS](RenderShaderPass.md#_destvs)
- [\_destFS](RenderShaderPass.md#_destfs)
- [\_vsShaderModule](RenderShaderPass.md#_vsshadermodule)
- [\_fsShaderModule](RenderShaderPass.md#_fsshadermodule)
- [\_textureGroup](RenderShaderPass.md#_texturegroup)
- [\_textureChange](RenderShaderPass.md#_texturechange)
- [\_groupsShaderReflectionVarInfos](RenderShaderPass.md#_groupsshaderreflectionvarinfos)
- [outBufferMask](RenderShaderPass.md#outbuffermask)
- [instanceID](RenderShaderPass.md#instanceid)
- [shaderVariant](RenderShaderPass.md#shadervariant)
- [vsEntryPoint](RenderShaderPass.md#vsentrypoint)
- [fsEntryPoint](RenderShaderPass.md#fsentrypoint)
- [bindGroups](RenderShaderPass.md#bindgroups)
- [shaderReflection](RenderShaderPass.md#shaderreflection)
- [defineValue](RenderShaderPass.md#definevalue)
- [constValues](RenderShaderPass.md#constvalues)
- [uniforms](RenderShaderPass.md#uniforms)
- [materialDataUniformBuffer](RenderShaderPass.md#materialdatauniformbuffer)
- [\_bufferDic](RenderShaderPass.md#_bufferdic)
- [\_shaderChange](RenderShaderPass.md#_shaderchange)
- [\_valueChange](RenderShaderPass.md#_valuechange)

### Accessors

- [renderOrder](RenderShaderPass.md#renderorder)
- [doubleSide](RenderShaderPass.md#doubleside)
- [depthWriteEnabled](RenderShaderPass.md#depthwriteenabled)
- [cullMode](RenderShaderPass.md#cullmode)
- [frontFace](RenderShaderPass.md#frontface)
- [depthBias](RenderShaderPass.md#depthbias)
- [topology](RenderShaderPass.md#topology)
- [blendMode](RenderShaderPass.md#blendmode)
- [depthCompare](RenderShaderPass.md#depthcompare)
- [baseColor](RenderShaderPass.md#basecolor)

### Methods

- [setShaderEntry](RenderShaderPass.md#setshaderentry)
- [setUniform](RenderShaderPass.md#setuniform)
- [setTexture](RenderShaderPass.md#settexture)
- [getTexture](RenderShaderPass.md#gettexture)
- [genRenderPipeline](RenderShaderPass.md#genrenderpipeline)
- [reBuild](RenderShaderPass.md#rebuild)
- [apply](RenderShaderPass.md#apply)
- [preCompile](RenderShaderPass.md#precompile)
- [applyPostDefine](RenderShaderPass.md#applypostdefine)
- [setBindGroup](RenderShaderPass.md#setbindgroup)
- [checkBuffer](RenderShaderPass.md#checkbuffer)
- [preCompileShader](RenderShaderPass.md#precompileshader)
- [compileShader](RenderShaderPass.md#compileshader)
- [getGroupLayout](RenderShaderPass.md#getgrouplayout)
- [genGroups](RenderShaderPass.md#gengroups)
- [destroy](RenderShaderPass.md#destroy)
- [destroyShader](RenderShaderPass.md#destroyshader)
- [getShader](RenderShaderPass.md#getshader)
- [createShader](RenderShaderPass.md#createshader)
- [noticeShaderChange](RenderShaderPass.md#noticeshaderchange)
- [noticeValueChange](RenderShaderPass.md#noticevaluechange)
- [setStorageBuffer](RenderShaderPass.md#setstoragebuffer)
- [setStructStorageBuffer](RenderShaderPass.md#setstructstoragebuffer)
- [setUniformBuffer](RenderShaderPass.md#setuniformbuffer)
- [setDefine](RenderShaderPass.md#setdefine)
- [hasDefine](RenderShaderPass.md#hasdefine)
- [deleteDefine](RenderShaderPass.md#deletedefine)
- [setUniformFloat](RenderShaderPass.md#setuniformfloat)
- [setUniformVector2](RenderShaderPass.md#setuniformvector2)
- [setUniformVector3](RenderShaderPass.md#setuniformvector3)
- [setUniformVector4](RenderShaderPass.md#setuniformvector4)
- [setUniformColor](RenderShaderPass.md#setuniformcolor)
- [setUniformArray](RenderShaderPass.md#setuniformarray)
- [getUniform](RenderShaderPass.md#getuniform)
- [getUniformFloat](RenderShaderPass.md#getuniformfloat)
- [getUniformVector2](RenderShaderPass.md#getuniformvector2)
- [getUniformVector3](RenderShaderPass.md#getuniformvector3)
- [getUniformVector4](RenderShaderPass.md#getuniformvector4)
- [getUniformColor](RenderShaderPass.md#getuniformcolor)
- [getBuffer](RenderShaderPass.md#getbuffer)
- [noticeBufferChange](RenderShaderPass.md#noticebufferchange)
- [applyUniform](RenderShaderPass.md#applyuniform)

## Constructors

### constructor

• **new RenderShaderPass**(`vs`, `fs`): [`RenderShaderPass`](RenderShaderPass.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `vs` | `string` |
| `fs` | `string` |

#### Returns

[`RenderShaderPass`](RenderShaderPass.md)

#### Overrides

[ShaderPassBase](ShaderPassBase.md).[constructor](ShaderPassBase.md#constructor)

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:58

## Properties

### passType

• **passType**: [`PassType`](../enums/PassType.md) = `PassType.COLOR`

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:36

___

### useRz

• **useRz**: `boolean` = `false`

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:37

___

### vsName

• **vsName**: `string`

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:38

___

### fsName

• **fsName**: `string`

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:39

___

### shaderState

• **shaderState**: [`ShaderState`](ShaderState.md)

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:40

___

### textures

• **textures**: `Object`

#### Index signature

▪ [name: `string`]: [`Texture`](Texture.md)

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:41

___

### pipeline

• **pipeline**: `GPURenderPipeline`

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:42

___

### bindGroupLayouts

• **bindGroupLayouts**: `GPUBindGroupLayout`[]

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:43

___

### envMap

• **envMap**: [`Texture`](Texture.md)

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:44

___

### prefilterMap

• **prefilterMap**: [`Texture`](Texture.md)

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:45

___

### reflectionMap

• **reflectionMap**: [`Texture`](Texture.md)

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:46

___

### \_sourceVS

• `Protected` **\_sourceVS**: `string`

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:47

___

### \_sourceFS

• `Protected` **\_sourceFS**: `string`

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:48

___

### \_destVS

• `Protected` **\_destVS**: `string`

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:49

___

### \_destFS

• `Protected` **\_destFS**: `string`

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:50

___

### \_vsShaderModule

• `Protected` **\_vsShaderModule**: `GPUShaderModule`

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:51

___

### \_fsShaderModule

• `Protected` **\_fsShaderModule**: `GPUShaderModule`

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:52

___

### \_textureGroup

• `Protected` **\_textureGroup**: `number` = `-1`

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:53

___

### \_textureChange

• `Protected` **\_textureChange**: `boolean` = `false`

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:54

___

### \_groupsShaderReflectionVarInfos

• `Protected` **\_groupsShaderReflectionVarInfos**: [`ShaderReflectionVarInfo`](../modules.md#shaderreflectionvarinfo)[][]

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:55

___

### outBufferMask

• **outBufferMask**: [`Vector4`](Vector4.md)

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:56

___

### instanceID

• `Readonly` **instanceID**: `string`

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[instanceID](ShaderPassBase.md#instanceid)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:17

___

### shaderVariant

• **shaderVariant**: `string`

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[shaderVariant](ShaderPassBase.md#shadervariant)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:18

___

### vsEntryPoint

• **vsEntryPoint**: `string`

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[vsEntryPoint](ShaderPassBase.md#vsentrypoint)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:19

___

### fsEntryPoint

• **fsEntryPoint**: `string`

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[fsEntryPoint](ShaderPassBase.md#fsentrypoint)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:20

___

### bindGroups

• **bindGroups**: `GPUBindGroup`[]

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[bindGroups](ShaderPassBase.md#bindgroups)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:21

___

### shaderReflection

• **shaderReflection**: [`ShaderReflection`](ShaderReflection.md)

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[shaderReflection](ShaderPassBase.md#shaderreflection)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:22

___

### defineValue

• **defineValue**: `Object`

#### Index signature

▪ [name: `string`]: `any`

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[defineValue](ShaderPassBase.md#definevalue)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:23

___

### constValues

• **constValues**: `Object`

#### Index signature

▪ [name: `string`]: `any`

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[constValues](ShaderPassBase.md#constvalues)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:24

___

### uniforms

• **uniforms**: `Object`

#### Index signature

▪ [name: `string`]: [`UniformNode`](UniformNode.md)

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[uniforms](ShaderPassBase.md#uniforms)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:25

___

### materialDataUniformBuffer

• **materialDataUniformBuffer**: [`MaterialDataUniformGPUBuffer`](MaterialDataUniformGPUBuffer.md)

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[materialDataUniformBuffer](ShaderPassBase.md#materialdatauniformbuffer)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:26

___

### \_bufferDic

• `Protected` **\_bufferDic**: `Map`\<`string`, [`GPUBufferBase`](GPUBufferBase.md)\>

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[_bufferDic](ShaderPassBase.md#_bufferdic)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:27

___

### \_shaderChange

• `Protected` **\_shaderChange**: `boolean` = `true`

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[_shaderChange](ShaderPassBase.md#_shaderchange)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:28

___

### \_valueChange

• `Protected` **\_valueChange**: `boolean` = `false`

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[_valueChange](ShaderPassBase.md#_valuechange)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:29

## Accessors

### renderOrder

• `get` **renderOrder**(): `number`

#### Returns

`number`

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:97

• `set` **renderOrder**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:101

___

### doubleSide

• `get` **doubleSide**(): `boolean`

#### Returns

`boolean`

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:108

• `set` **doubleSide**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:112

___

### depthWriteEnabled

• `get` **depthWriteEnabled**(): `boolean`

#### Returns

`boolean`

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:120

• `set` **depthWriteEnabled**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:124

___

### cullMode

• `get` **cullMode**(): `GPUCullMode`

#### Returns

`GPUCullMode`

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:131

• `set` **cullMode**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUCullMode` |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:135

___

### frontFace

• `get` **frontFace**(): `GPUFrontFace`

#### Returns

`GPUFrontFace`

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:142

• `set` **frontFace**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUFrontFace` |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:146

___

### depthBias

• `get` **depthBias**(): `number`

#### Returns

`number`

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:153

• `set` **depthBias**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:157

___

### topology

• `get` **topology**(): `GPUPrimitiveTopology`

#### Returns

`GPUPrimitiveTopology`

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:164

• `set` **topology**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUPrimitiveTopology` |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:168

___

### blendMode

• `get` **blendMode**(): [`BlendMode`](../enums/BlendMode.md)

#### Returns

[`BlendMode`](../enums/BlendMode.md)

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:175

• `set` **blendMode**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`BlendMode`](../enums/BlendMode.md) |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:179

___

### depthCompare

• `get` **depthCompare**(): `GPUCompareFunction`

#### Returns

`GPUCompareFunction`

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:189

• `set` **depthCompare**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `GPUCompareFunction` |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:193

___

### baseColor

• `get` **baseColor**(): [`Color`](Color.md)

#### Returns

[`Color`](Color.md)

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:230

• `set` **baseColor**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Color`](Color.md) |

#### Returns

`void`

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

#### Overrides

[ShaderPassBase](ShaderPassBase.md).[setUniform](ShaderPassBase.md#setuniform)

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

#### Overrides

[ShaderPassBase](ShaderPassBase.md).[destroy](ShaderPassBase.md#destroy)

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

#### Defined in

gfx/graphics/webGpu/shader/RenderShaderPass.ts:931

___

### noticeShaderChange

▸ **noticeShaderChange**(): `void`

#### Returns

`void`

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[noticeShaderChange](ShaderPassBase.md#noticeshaderchange)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:39

___

### noticeValueChange

▸ **noticeValueChange**(): `void`

#### Returns

`void`

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[noticeValueChange](ShaderPassBase.md#noticevaluechange)

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

[ShaderPassBase](ShaderPassBase.md).[setStorageBuffer](ShaderPassBase.md#setstoragebuffer)

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

[ShaderPassBase](ShaderPassBase.md).[setStructStorageBuffer](ShaderPassBase.md#setstructstoragebuffer)

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

[ShaderPassBase](ShaderPassBase.md).[setUniformBuffer](ShaderPassBase.md#setuniformbuffer)

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

[ShaderPassBase](ShaderPassBase.md).[setDefine](ShaderPassBase.md#setdefine)

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

[ShaderPassBase](ShaderPassBase.md).[hasDefine](ShaderPassBase.md#hasdefine)

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

[ShaderPassBase](ShaderPassBase.md).[deleteDefine](ShaderPassBase.md#deletedefine)

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

[ShaderPassBase](ShaderPassBase.md).[setUniformFloat](ShaderPassBase.md#setuniformfloat)

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

[ShaderPassBase](ShaderPassBase.md).[setUniformVector2](ShaderPassBase.md#setuniformvector2)

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

[ShaderPassBase](ShaderPassBase.md).[setUniformVector3](ShaderPassBase.md#setuniformvector3)

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

[ShaderPassBase](ShaderPassBase.md).[setUniformVector4](ShaderPassBase.md#setuniformvector4)

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

[ShaderPassBase](ShaderPassBase.md).[setUniformColor](ShaderPassBase.md#setuniformcolor)

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

[ShaderPassBase](ShaderPassBase.md).[setUniformArray](ShaderPassBase.md#setuniformarray)

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

[ShaderPassBase](ShaderPassBase.md).[getUniform](ShaderPassBase.md#getuniform)

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

[ShaderPassBase](ShaderPassBase.md).[getUniformFloat](ShaderPassBase.md#getuniformfloat)

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

[ShaderPassBase](ShaderPassBase.md).[getUniformVector2](ShaderPassBase.md#getuniformvector2)

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

[ShaderPassBase](ShaderPassBase.md).[getUniformVector3](ShaderPassBase.md#getuniformvector3)

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

[ShaderPassBase](ShaderPassBase.md).[getUniformVector4](ShaderPassBase.md#getuniformvector4)

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

[ShaderPassBase](ShaderPassBase.md).[getUniformColor](ShaderPassBase.md#getuniformcolor)

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

[ShaderPassBase](ShaderPassBase.md).[getBuffer](ShaderPassBase.md#getbuffer)

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

[ShaderPassBase](ShaderPassBase.md).[noticeBufferChange](ShaderPassBase.md#noticebufferchange)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:184

___

### applyUniform

▸ **applyUniform**(): `void`

#### Returns

`void`

#### Inherited from

[ShaderPassBase](ShaderPassBase.md).[applyUniform](ShaderPassBase.md#applyuniform)

#### Defined in

gfx/graphics/webGpu/shader/ShaderPassBase.ts:186
