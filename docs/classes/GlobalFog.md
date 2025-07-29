[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / GlobalFog

# Class: GlobalFog

## Hierarchy

- [`PostBase`](PostBase.md)

  ↳ **`GlobalFog`**

## Table of contents

### Constructors

- [constructor](GlobalFog.md#constructor)

### Properties

- [fogOpTexture](GlobalFog.md#fogoptexture)
- [rtFrame](GlobalFog.md#rtframe)
- [enable](GlobalFog.md#enable)
- [postRenderer](GlobalFog.md#postrenderer)
- [rtViewQuad](GlobalFog.md#rtviewquad)
- [virtualTexture](GlobalFog.md#virtualtexture)

### Accessors

- [fogType](GlobalFog.md#fogtype)
- [fogHeightScale](GlobalFog.md#fogheightscale)
- [start](GlobalFog.md#start)
- [end](GlobalFog.md#end)
- [ins](GlobalFog.md#ins)
- [density](GlobalFog.md#density)
- [skyRoughness](GlobalFog.md#skyroughness)
- [skyFactor](GlobalFog.md#skyfactor)
- [overrideSkyFactor](GlobalFog.md#overrideskyfactor)
- [fogColor](GlobalFog.md#fogcolor)
- [falloff](GlobalFog.md#falloff)
- [rayLength](GlobalFog.md#raylength)
- [scatteringExponent](GlobalFog.md#scatteringexponent)
- [dirHeightLine](GlobalFog.md#dirheightline)

### Methods

- [onAttach](GlobalFog.md#onattach)
- [onDetach](GlobalFog.md#ondetach)
- [render](GlobalFog.md#render)
- [onResize](GlobalFog.md#onresize)
- [createRTTexture](GlobalFog.md#createrttexture)
- [createViewQuad](GlobalFog.md#createviewquad)
- [getOutTexture](GlobalFog.md#getouttexture)
- [autoSetColorTexture](GlobalFog.md#autosetcolortexture)
- [compute](GlobalFog.md#compute)
- [destroy](GlobalFog.md#destroy)

## Constructors

### constructor

• **new GlobalFog**(): [`GlobalFog`](GlobalFog.md)

#### Returns

[`GlobalFog`](GlobalFog.md)

#### Overrides

[PostBase](PostBase.md).[constructor](PostBase.md#constructor)

#### Defined in

gfx/renderJob/post/GlobalFog.ts:34

## Properties

### fogOpTexture

• **fogOpTexture**: [`VirtualTexture`](VirtualTexture.md)

#### Defined in

gfx/renderJob/post/GlobalFog.ts:29

___

### rtFrame

• **rtFrame**: [`RTFrame`](RTFrame.md)

#### Defined in

gfx/renderJob/post/GlobalFog.ts:92

___

### enable

• **enable**: `boolean` = `true`

#### Inherited from

[PostBase](PostBase.md).[enable](PostBase.md#enable)

#### Defined in

gfx/renderJob/post/PostBase.ts:15

___

### postRenderer

• **postRenderer**: [`PostRenderer`](PostRenderer.md)

#### Inherited from

[PostBase](PostBase.md).[postRenderer](PostBase.md#postrenderer)

#### Defined in

gfx/renderJob/post/PostBase.ts:16

___

### rtViewQuad

• `Protected` **rtViewQuad**: `Map`\<`string`, [`ViewQuad`](ViewQuad.md)\>

#### Inherited from

[PostBase](PostBase.md).[rtViewQuad](PostBase.md#rtviewquad)

#### Defined in

gfx/renderJob/post/PostBase.ts:17

___

### virtualTexture

• `Protected` **virtualTexture**: `Map`\<`string`, [`VirtualTexture`](VirtualTexture.md)\>

#### Inherited from

[PostBase](PostBase.md).[virtualTexture](PostBase.md#virtualtexture)

#### Defined in

gfx/renderJob/post/PostBase.ts:18

## Accessors

### fogType

• `get` **fogType**(): `number`

#### Returns

`number`

#### Defined in

gfx/renderJob/post/GlobalFog.ts:128

• `set` **fogType**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

gfx/renderJob/post/GlobalFog.ts:125

___

### fogHeightScale

• `get` **fogHeightScale**(): `number`

#### Returns

`number`

#### Defined in

gfx/renderJob/post/GlobalFog.ts:134

• `set` **fogHeightScale**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

gfx/renderJob/post/GlobalFog.ts:131

___

### start

• `get` **start**(): `number`

#### Returns

`number`

#### Defined in

gfx/renderJob/post/GlobalFog.ts:140

• `set` **start**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

gfx/renderJob/post/GlobalFog.ts:137

___

### end

• `get` **end**(): `number`

#### Returns

`number`

#### Defined in

gfx/renderJob/post/GlobalFog.ts:146

• `set` **end**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

gfx/renderJob/post/GlobalFog.ts:143

___

### ins

• `get` **ins**(): `number`

#### Returns

`number`

#### Defined in

gfx/renderJob/post/GlobalFog.ts:152

• `set` **ins**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

gfx/renderJob/post/GlobalFog.ts:149

___

### density

• `get` **density**(): `number`

#### Returns

`number`

#### Defined in

gfx/renderJob/post/GlobalFog.ts:158

• `set` **density**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

gfx/renderJob/post/GlobalFog.ts:155

___

### skyRoughness

• `get` **skyRoughness**(): `number`

#### Returns

`number`

#### Defined in

gfx/renderJob/post/GlobalFog.ts:164

• `set` **skyRoughness**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

gfx/renderJob/post/GlobalFog.ts:161

___

### skyFactor

• `get` **skyFactor**(): `number`

#### Returns

`number`

#### Defined in

gfx/renderJob/post/GlobalFog.ts:170

• `set` **skyFactor**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

gfx/renderJob/post/GlobalFog.ts:167

___

### overrideSkyFactor

• `get` **overrideSkyFactor**(): `number`

#### Returns

`number`

#### Defined in

gfx/renderJob/post/GlobalFog.ts:177

• `set` **overrideSkyFactor**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

gfx/renderJob/post/GlobalFog.ts:174

___

### fogColor

• `get` **fogColor**(): [`Color`](Color.md)

#### Returns

[`Color`](Color.md)

#### Defined in

gfx/renderJob/post/GlobalFog.ts:184

• `set` **fogColor**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Color`](Color.md) |

#### Returns

`void`

#### Defined in

gfx/renderJob/post/GlobalFog.ts:191

___

### falloff

• `get` **falloff**(): `number`

#### Returns

`number`

#### Defined in

gfx/renderJob/post/GlobalFog.ts:199

• `set` **falloff**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

gfx/renderJob/post/GlobalFog.ts:195

___

### rayLength

• `get` **rayLength**(): `number`

#### Returns

`number`

#### Defined in

gfx/renderJob/post/GlobalFog.ts:207

• `set` **rayLength**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

gfx/renderJob/post/GlobalFog.ts:203

___

### scatteringExponent

• `get` **scatteringExponent**(): `number`

#### Returns

`number`

#### Defined in

gfx/renderJob/post/GlobalFog.ts:215

• `set` **scatteringExponent**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

gfx/renderJob/post/GlobalFog.ts:211

___

### dirHeightLine

• `get` **dirHeightLine**(): `number`

#### Returns

`number`

#### Defined in

gfx/renderJob/post/GlobalFog.ts:223

• `set` **dirHeightLine**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

gfx/renderJob/post/GlobalFog.ts:219

## Methods

### onAttach

▸ **onAttach**(`view`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |

#### Returns

`void`

#### Overrides

[PostBase](PostBase.md).[onAttach](PostBase.md#onattach)

#### Defined in

gfx/renderJob/post/GlobalFog.ts:115

___

### onDetach

▸ **onDetach**(`view`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |

#### Returns

`void`

#### Overrides

[PostBase](PostBase.md).[onDetach](PostBase.md#ondetach)

#### Defined in

gfx/renderJob/post/GlobalFog.ts:121

___

### render

▸ **render**(`view`, `command`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `command` | `GPUCommandEncoder` |

#### Returns

`void`

#### Overrides

[PostBase](PostBase.md).[render](PostBase.md#render)

#### Defined in

gfx/renderJob/post/GlobalFog.ts:239

___

### onResize

▸ **onResize**(): `void`

#### Returns

`void`

#### Overrides

[PostBase](PostBase.md).[onResize](PostBase.md#onresize)

#### Defined in

gfx/renderJob/post/GlobalFog.ts:267

___

### createRTTexture

▸ **createRTTexture**(`name`, `rtWidth`, `rtHeight`, `format`, `useMipmap?`, `sampleCount?`): [`RenderTexture`](RenderTexture.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `rtWidth` | `number` | `undefined` |
| `rtHeight` | `number` | `undefined` |
| `format` | `GPUTextureFormat` | `undefined` |
| `useMipmap` | `boolean` | `false` |
| `sampleCount` | `number` | `0` |

#### Returns

[`RenderTexture`](RenderTexture.md)

#### Inherited from

[PostBase](PostBase.md).[createRTTexture](PostBase.md#createrttexture)

#### Defined in

gfx/renderJob/post/PostBase.ts:27

___

### createViewQuad

▸ **createViewQuad**(`name`, `shaderName`, `outRtTexture`, `msaa?`): [`ViewQuad`](ViewQuad.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `shaderName` | `string` | `undefined` |
| `outRtTexture` | [`VirtualTexture`](VirtualTexture.md) | `undefined` |
| `msaa` | `number` | `0` |

#### Returns

[`ViewQuad`](ViewQuad.md)

#### Inherited from

[PostBase](PostBase.md).[createViewQuad](PostBase.md#createviewquad)

#### Defined in

gfx/renderJob/post/PostBase.ts:49

___

### getOutTexture

▸ **getOutTexture**(): [`Texture`](Texture.md)

#### Returns

[`Texture`](Texture.md)

#### Inherited from

[PostBase](PostBase.md).[getOutTexture](PostBase.md#getouttexture)

#### Defined in

gfx/renderJob/post/PostBase.ts:66

___

### autoSetColorTexture

▸ **autoSetColorTexture**(`name`, `compute`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `compute` | [`ComputeShader`](ComputeShader.md) |

#### Returns

`void`

#### Inherited from

[PostBase](PostBase.md).[autoSetColorTexture](PostBase.md#autosetcolortexture)

#### Defined in

gfx/renderJob/post/PostBase.ts:79

___

### compute

▸ **compute**(`view`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |

#### Returns

`void`

#### Inherited from

[PostBase](PostBase.md).[compute](PostBase.md#compute)

#### Defined in

gfx/renderJob/post/PostBase.ts:86

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

[PostBase](PostBase.md).[destroy](PostBase.md#destroy)

#### Defined in

gfx/renderJob/post/PostBase.ts:107
