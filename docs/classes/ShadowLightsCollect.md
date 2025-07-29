[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / ShadowLightsCollect

# Class: ShadowLightsCollect

## Table of contents

### Constructors

- [constructor](ShadowLightsCollect.md#constructor)

### Properties

- [maxNumDirectionShadow](ShadowLightsCollect.md#maxnumdirectionshadow)
- [maxNumPointShadow](ShadowLightsCollect.md#maxnumpointshadow)
- [directionLightList](ShadowLightsCollect.md#directionlightlist)
- [pointLightList](ShadowLightsCollect.md#pointlightlist)
- [shadowLights](ShadowLightsCollect.md#shadowlights)

### Methods

- [init](ShadowLightsCollect.md#init)
- [createBuffer](ShadowLightsCollect.md#createbuffer)
- [getShadowLightList](ShadowLightsCollect.md#getshadowlightlist)
- [getShadowLightWhichScene](ShadowLightsCollect.md#getshadowlightwhichscene)
- [getDirectShadowLightWhichScene](ShadowLightsCollect.md#getdirectshadowlightwhichscene)
- [getPointShadowLightWhichScene](ShadowLightsCollect.md#getpointshadowlightwhichscene)
- [addShadowLight](ShadowLightsCollect.md#addshadowlight)
- [removeShadowLight](ShadowLightsCollect.md#removeshadowlight)
- [update](ShadowLightsCollect.md#update)

## Constructors

### constructor

• **new ShadowLightsCollect**(): [`ShadowLightsCollect`](ShadowLightsCollect.md)

#### Returns

[`ShadowLightsCollect`](ShadowLightsCollect.md)

## Properties

### maxNumDirectionShadow

▪ `Static` **maxNumDirectionShadow**: `number` = `8`

#### Defined in

gfx/renderJob/collect/ShadowLightsCollect.ts:10

___

### maxNumPointShadow

▪ `Static` **maxNumPointShadow**: `number` = `8`

#### Defined in

gfx/renderJob/collect/ShadowLightsCollect.ts:11

___

### directionLightList

▪ `Static` **directionLightList**: `Map`\<[`Scene3D`](Scene3D.md), [`ILight`](../interfaces/ILight.md)[]\>

#### Defined in

gfx/renderJob/collect/ShadowLightsCollect.ts:12

___

### pointLightList

▪ `Static` **pointLightList**: `Map`\<[`Scene3D`](Scene3D.md), [`ILight`](../interfaces/ILight.md)[]\>

#### Defined in

gfx/renderJob/collect/ShadowLightsCollect.ts:13

___

### shadowLights

▪ `Static` **shadowLights**: `Map`\<[`Scene3D`](Scene3D.md), `Float32Array`\<`ArrayBufferLike`\>\>

#### Defined in

gfx/renderJob/collect/ShadowLightsCollect.ts:14

## Methods

### init

▸ **init**(): `void`

#### Returns

`void`

#### Defined in

gfx/renderJob/collect/ShadowLightsCollect.ts:16

___

### createBuffer

▸ **createBuffer**(`view`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |

#### Returns

`void`

#### Defined in

gfx/renderJob/collect/ShadowLightsCollect.ts:22

___

### getShadowLightList

▸ **getShadowLightList**(`light`): [`ILight`](../interfaces/ILight.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `light` | [`ILight`](../interfaces/ILight.md) |

#### Returns

[`ILight`](../interfaces/ILight.md)[]

#### Defined in

gfx/renderJob/collect/ShadowLightsCollect.ts:29

___

### getShadowLightWhichScene

▸ **getShadowLightWhichScene**(`scene`, `type`): [`ILight`](../interfaces/ILight.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `scene` | [`Scene3D`](Scene3D.md) |
| `type` | [`LightType`](../enums/LightType.md) |

#### Returns

[`ILight`](../interfaces/ILight.md)[]

#### Defined in

gfx/renderJob/collect/ShadowLightsCollect.ts:55

___

### getDirectShadowLightWhichScene

▸ **getDirectShadowLightWhichScene**(`scene`): [`ILight`](../interfaces/ILight.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `scene` | [`Scene3D`](Scene3D.md) |

#### Returns

[`ILight`](../interfaces/ILight.md)[]

#### Defined in

gfx/renderJob/collect/ShadowLightsCollect.ts:73

___

### getPointShadowLightWhichScene

▸ **getPointShadowLightWhichScene**(`scene`): [`ILight`](../interfaces/ILight.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `scene` | [`Scene3D`](Scene3D.md) |

#### Returns

[`ILight`](../interfaces/ILight.md)[]

#### Defined in

gfx/renderJob/collect/ShadowLightsCollect.ts:82

___

### addShadowLight

▸ **addShadowLight**(`light`): [`ILight`](../interfaces/ILight.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `light` | [`ILight`](../interfaces/ILight.md) |

#### Returns

[`ILight`](../interfaces/ILight.md)[]

#### Defined in

gfx/renderJob/collect/ShadowLightsCollect.ts:91

___

### removeShadowLight

▸ **removeShadowLight**(`light`): [`ILight`](../interfaces/ILight.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `light` | [`ILight`](../interfaces/ILight.md) |

#### Returns

[`ILight`](../interfaces/ILight.md)[]

#### Defined in

gfx/renderJob/collect/ShadowLightsCollect.ts:141

___

### update

▸ **update**(`view`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |

#### Returns

`void`

#### Defined in

gfx/renderJob/collect/ShadowLightsCollect.ts:170
