[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / LightBase

# Class: LightBase

## Hierarchy

- [`ComponentBase`](ComponentBase.md)

  ↳ **`LightBase`**

  ↳↳ [`DirectLight`](DirectLight.md)

  ↳↳ [`Light`](Light.md)

  ↳↳ [`PointLight`](PointLight.md)

  ↳↳ [`SpotLight`](SpotLight.md)

## Implements

- [`ILight`](../interfaces/ILight.md)

## Table of contents

### Constructors

- [constructor](LightBase.md#constructor)

### Properties

- [object3D](LightBase.md#object3d)
- [\_eventDispatcher](LightBase.md#_eventdispatcher)
- [\_enable](LightBase.md#_enable)
- [isDestroyed](LightBase.md#isdestroyed)
- [name](LightBase.md#name)
- [size](LightBase.md#size)
- [lightData](LightBase.md#lightdata)
- [dirFix](LightBase.md#dirfix)
- [bindOnChange](LightBase.md#bindonchange)
- [needUpdateShadow](LightBase.md#needupdateshadow)
- [realTimeShadow](LightBase.md#realtimeshadow)
- [\_castGI](LightBase.md#_castgi)
- [\_castShadow](LightBase.md#_castshadow)

### Accessors

- [eventDispatcher](LightBase.md#eventdispatcher)
- [isStart](LightBase.md#isstart)
- [transform](LightBase.md#transform)
- [enable](LightBase.md#enable)
- [iesProfiles](LightBase.md#iesprofiles)
- [iesProfile](LightBase.md#iesprofile)
- [r](LightBase.md#r)
- [g](LightBase.md#g)
- [b](LightBase.md#b)
- [lightColor](LightBase.md#lightcolor)
- [color](LightBase.md#color)
- [intensity](LightBase.md#intensity)
- [castShadow](LightBase.md#castshadow)
- [shadowIndex](LightBase.md#shadowindex)
- [castGI](LightBase.md#castgi)
- [direction](LightBase.md#direction)

### Methods

- [stop](LightBase.md#stop)
- [onUpdate](LightBase.md#onupdate)
- [onLateUpdate](LightBase.md#onlateupdate)
- [onBeforeUpdate](LightBase.md#onbeforeupdate)
- [onCompute](LightBase.md#oncompute)
- [onGraphic](LightBase.md#ongraphic)
- [onParentChange](LightBase.md#onparentchange)
- [onAddChild](LightBase.md#onaddchild)
- [onRemoveChild](LightBase.md#onremovechild)
- [cloneTo](LightBase.md#cloneto)
- [copyComponent](LightBase.md#copycomponent)
- [beforeDestroy](LightBase.md#beforedestroy)
- [init](LightBase.md#init)
- [onChange](LightBase.md#onchange)
- [start](LightBase.md#start)
- [onPositionChange](LightBase.md#onpositionchange)
- [onRotChange](LightBase.md#onrotchange)
- [onScaleChange](LightBase.md#onscalechange)
- [onEnable](LightBase.md#onenable)
- [onDisable](LightBase.md#ondisable)
- [destroy](LightBase.md#destroy)

## Constructors

### constructor

• **new LightBase**(): [`LightBase`](LightBase.md)

#### Returns

[`LightBase`](LightBase.md)

#### Overrides

[ComponentBase](ComponentBase.md).[constructor](ComponentBase.md#constructor)

#### Defined in

components/lights/LightBase.ts:50

## Properties

### object3D

• **object3D**: [`Object3D`](Object3D.md) = `null`

#### Inherited from

[ComponentBase](ComponentBase.md).[object3D](ComponentBase.md#object3d)

#### Defined in

components/ComponentBase.ts:9

___

### \_eventDispatcher

• `Protected` **\_eventDispatcher**: [`CEventDispatcher`](CEventDispatcher.md)

#### Inherited from

[ComponentBase](ComponentBase.md).[_eventDispatcher](ComponentBase.md#_eventdispatcher)

#### Defined in

components/ComponentBase.ts:10

___

### \_enable

• `Protected` **\_enable**: `boolean` = `true`

#### Inherited from

[ComponentBase](ComponentBase.md).[_enable](ComponentBase.md#_enable)

#### Defined in

components/ComponentBase.ts:18

___

### isDestroyed

• **isDestroyed**: `boolean` = `false`

#### Inherited from

[ComponentBase](ComponentBase.md).[isDestroyed](ComponentBase.md#isdestroyed)

#### Defined in

components/ComponentBase.ts:20

___

### name

• **name**: `string`

light name

#### Implementation of

[ILight](../interfaces/ILight.md).[name](../interfaces/ILight.md#name)

#### Defined in

components/lights/LightBase.ts:18

___

### size

• **size**: `number` = `1`

light size

#### Defined in

components/lights/LightBase.ts:22

___

### lightData

• **lightData**: [`LightData`](LightData.md)

light source data

#### Implementation of

[ILight](../interfaces/ILight.md).[lightData](../interfaces/ILight.md#lightdata)

#### Defined in

components/lights/LightBase.ts:27

___

### dirFix

• **dirFix**: `number` = `1`

fix light direction

#### Defined in

components/lights/LightBase.ts:32

___

### bindOnChange

• **bindOnChange**: () => `void`

Callback function when binding changes

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

components/lights/LightBase.ts:37

___

### needUpdateShadow

• **needUpdateShadow**: `boolean` = `true`

#### Implementation of

[ILight](../interfaces/ILight.md).[needUpdateShadow](../interfaces/ILight.md#needupdateshadow)

#### Defined in

components/lights/LightBase.ts:39

___

### realTimeShadow

• **realTimeShadow**: `boolean` = `true`

Whether to enable real-time rendering of shadows

#### Implementation of

[ILight](../interfaces/ILight.md).[realTimeShadow](../interfaces/ILight.md#realtimeshadow)

#### Defined in

components/lights/LightBase.ts:44

___

### \_castGI

• `Protected` **\_castGI**: `boolean` = `false`

#### Defined in

components/lights/LightBase.ts:46

___

### \_castShadow

• `Protected` **\_castShadow**: `boolean` = `false`

#### Defined in

components/lights/LightBase.ts:47

## Accessors

### eventDispatcher

• `get` **eventDispatcher**(): [`CEventDispatcher`](CEventDispatcher.md)

#### Returns

[`CEventDispatcher`](CEventDispatcher.md)

#### Inherited from

ComponentBase.eventDispatcher

#### Defined in

components/ComponentBase.ts:11

• `set` **eventDispatcher**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`CEventDispatcher`](CEventDispatcher.md) |

#### Returns

`void`

#### Inherited from

ComponentBase.eventDispatcher

#### Defined in

components/ComponentBase.ts:15

___

### isStart

• `get` **isStart**(): `boolean`

#### Returns

`boolean`

#### Inherited from

ComponentBase.isStart

#### Defined in

components/ComponentBase.ts:21

___

### transform

• `get` **transform**(): [`Transform`](Transform.md)

#### Returns

[`Transform`](Transform.md)

#### Implementation of

[ILight](../interfaces/ILight.md).[transform](../interfaces/ILight.md#transform)

#### Inherited from

ComponentBase.transform

#### Defined in

components/ComponentBase.ts:24

___

### enable

• `get` **enable**(): `boolean`

#### Returns

`boolean`

#### Inherited from

ComponentBase.enable

#### Defined in

components/ComponentBase.ts:37

• `set` **enable**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Inherited from

ComponentBase.enable

#### Defined in

components/ComponentBase.ts:27

___

### iesProfiles

• `set` **iesProfiles**(`iesProfiles`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `iesProfiles` | [`IESProfiles`](IESProfiles.md) |

#### Returns

`void`

#### Defined in

components/lights/LightBase.ts:129

___

### iesProfile

• `get` **iesProfile**(): [`IESProfiles`](IESProfiles.md)

#### Returns

[`IESProfiles`](IESProfiles.md)

#### Defined in

components/lights/LightBase.ts:136

___

### r

• `get` **r**(): `number`

Get the red component of the lighting color

#### Returns

`number`

#### Defined in

components/lights/LightBase.ts:143

• `set` **r**(`value`): `void`

Set the red component of the lighting color

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

components/lights/LightBase.ts:150

___

### g

• `get` **g**(): `number`

Get the green component of the lighting color

#### Returns

`number`

#### Defined in

components/lights/LightBase.ts:158

• `set` **g**(`value`): `void`

Set the green component of the lighting color

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

components/lights/LightBase.ts:165

___

### b

• `get` **b**(): `number`

Get the blue component of the lighting color

#### Returns

`number`

#### Defined in

components/lights/LightBase.ts:173

• `set` **b**(`value`): `void`

Set the blue component of the lighting color

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

components/lights/LightBase.ts:179

___

### lightColor

• `get` **lightColor**(): [`Color`](Color.md)

Get light source color

#### Returns

[`Color`](Color.md)

Color

#### Defined in

components/lights/LightBase.ts:187

• `set` **lightColor**(`value`): `void`

Set light source color

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Color`](Color.md) |

#### Returns

`void`

#### Defined in

components/lights/LightBase.ts:194

___

### color

• `get` **color**(): [`Color`](Color.md)

Get light source color

#### Returns

[`Color`](Color.md)

Color

#### Defined in

components/lights/LightBase.ts:203

• `set` **color**(`value`): `void`

Set light source color

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Color`](Color.md) |

#### Returns

`void`

#### Defined in

components/lights/LightBase.ts:211

___

### intensity

• `get` **intensity**(): `number`

Get Illumination intensity of light source

#### Returns

`number`

number

#### Defined in

components/lights/LightBase.ts:220

• `set` **intensity**(`value`): `void`

Set Illumination intensity of light source

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

components/lights/LightBase.ts:228

___

### castShadow

• `get` **castShadow**(): `boolean`

#### Returns

`boolean`

#### Defined in

components/lights/LightBase.ts:244

• `set` **castShadow**(`value`): `void`

Cast Light Shadow

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

components/lights/LightBase.ts:237

___

### shadowIndex

• `get` **shadowIndex**(): `number`

get shadow index at shadow map list

#### Returns

`number`

#### Implementation of

[ILight](../interfaces/ILight.md).[shadowIndex](../interfaces/ILight.md#shadowindex)

#### Defined in

components/lights/LightBase.ts:251

___

### castGI

• `get` **castGI**(): `boolean`

get gi is enable

#### Returns

`boolean`

boolean

#### Defined in

components/lights/LightBase.ts:259

• `set` **castGI**(`value`): `void`

set gi is enable

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

components/lights/LightBase.ts:266

___

### direction

• `get` **direction**(): [`Vector3`](Vector3.md)

light source direction

#### Returns

[`Vector3`](Vector3.md)

Vector3

#### Defined in

components/lights/LightBase.ts:280

## Methods

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

[ComponentBase](ComponentBase.md).[stop](ComponentBase.md#stop)

#### Defined in

components/ComponentBase.ts:79

___

### onUpdate

▸ **onUpdate**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`any`

#### Inherited from

[ComponentBase](ComponentBase.md).[onUpdate](ComponentBase.md#onupdate)

#### Defined in

components/ComponentBase.ts:82

___

### onLateUpdate

▸ **onLateUpdate**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`any`

#### Inherited from

[ComponentBase](ComponentBase.md).[onLateUpdate](ComponentBase.md#onlateupdate)

#### Defined in

components/ComponentBase.ts:83

___

### onBeforeUpdate

▸ **onBeforeUpdate**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`any`

#### Inherited from

[ComponentBase](ComponentBase.md).[onBeforeUpdate](ComponentBase.md#onbeforeupdate)

#### Defined in

components/ComponentBase.ts:84

___

### onCompute

▸ **onCompute**(`view?`, `command?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |
| `command?` | `GPUCommandEncoder` |

#### Returns

`any`

#### Inherited from

[ComponentBase](ComponentBase.md).[onCompute](ComponentBase.md#oncompute)

#### Defined in

components/ComponentBase.ts:85

___

### onGraphic

▸ **onGraphic**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`any`

#### Inherited from

[ComponentBase](ComponentBase.md).[onGraphic](ComponentBase.md#ongraphic)

#### Defined in

components/ComponentBase.ts:86

___

### onParentChange

▸ **onParentChange**(`lastParent?`, `currentParent?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lastParent?` | [`Object3D`](Object3D.md) |
| `currentParent?` | [`Object3D`](Object3D.md) |

#### Returns

`any`

#### Inherited from

[ComponentBase](ComponentBase.md).[onParentChange](ComponentBase.md#onparentchange)

#### Defined in

components/ComponentBase.ts:87

___

### onAddChild

▸ **onAddChild**(`child`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Object3D`](Object3D.md) |

#### Returns

`any`

#### Inherited from

[ComponentBase](ComponentBase.md).[onAddChild](ComponentBase.md#onaddchild)

#### Defined in

components/ComponentBase.ts:88

___

### onRemoveChild

▸ **onRemoveChild**(`child`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Object3D`](Object3D.md) |

#### Returns

`any`

#### Inherited from

[ComponentBase](ComponentBase.md).[onRemoveChild](ComponentBase.md#onremovechild)

#### Defined in

components/ComponentBase.ts:89

___

### cloneTo

▸ **cloneTo**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`Object3D`](Object3D.md) |

#### Returns

`void`

#### Inherited from

[ComponentBase](ComponentBase.md).[cloneTo](ComponentBase.md#cloneto)

#### Defined in

components/ComponentBase.ts:90

___

### copyComponent

▸ **copyComponent**(`from`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `this` |

#### Returns

`this`

#### Inherited from

[ComponentBase](ComponentBase.md).[copyComponent](ComponentBase.md#copycomponent)

#### Defined in

components/ComponentBase.ts:91

___

### beforeDestroy

▸ **beforeDestroy**(`force?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `force?` | `boolean` |

#### Returns

`void`

#### Inherited from

[ComponentBase](ComponentBase.md).[beforeDestroy](ComponentBase.md#beforedestroy)

#### Defined in

components/ComponentBase.ts:135

___

### init

▸ **init**(): `void`

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[init](ComponentBase.md#init)

#### Defined in

components/lights/LightBase.ts:54

___

### onChange

▸ **onChange**(): `void`

#### Returns

`void`

#### Defined in

components/lights/LightBase.ts:64

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[start](ComponentBase.md#start)

#### Defined in

components/lights/LightBase.ts:92

___

### onPositionChange

▸ **onPositionChange**(): `void`

#### Returns

`void`

#### Defined in

components/lights/LightBase.ts:99

___

### onRotChange

▸ **onRotChange**(): `void`

#### Returns

`void`

#### Defined in

components/lights/LightBase.ts:104

___

### onScaleChange

▸ **onScaleChange**(): `void`

#### Returns

`void`

#### Defined in

components/lights/LightBase.ts:114

___

### onEnable

▸ **onEnable**(): `void`

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[onEnable](ComponentBase.md#onenable)

#### Defined in

components/lights/LightBase.ts:118

___

### onDisable

▸ **onDisable**(): `void`

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[onDisable](ComponentBase.md#ondisable)

#### Defined in

components/lights/LightBase.ts:123

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

[ComponentBase](ComponentBase.md).[destroy](ComponentBase.md#destroy)

#### Defined in

components/lights/LightBase.ts:284
