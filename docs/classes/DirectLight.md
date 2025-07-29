[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / DirectLight

# Class: DirectLight

## Hierarchy

- [`LightBase`](LightBase.md)

  ↳ **`DirectLight`**

## Table of contents

### Constructors

- [constructor](DirectLight.md#constructor)

### Properties

- [object3D](DirectLight.md#object3d)
- [\_eventDispatcher](DirectLight.md#_eventdispatcher)
- [\_enable](DirectLight.md#_enable)
- [isDestroyed](DirectLight.md#isdestroyed)
- [shadowCamera](DirectLight.md#shadowcamera)
- [name](DirectLight.md#name)
- [size](DirectLight.md#size)
- [lightData](DirectLight.md#lightdata)
- [dirFix](DirectLight.md#dirfix)
- [bindOnChange](DirectLight.md#bindonchange)
- [needUpdateShadow](DirectLight.md#needupdateshadow)
- [realTimeShadow](DirectLight.md#realtimeshadow)
- [\_castGI](DirectLight.md#_castgi)
- [\_castShadow](DirectLight.md#_castshadow)

### Accessors

- [eventDispatcher](DirectLight.md#eventdispatcher)
- [isStart](DirectLight.md#isstart)
- [transform](DirectLight.md#transform)
- [enable](DirectLight.md#enable)
- [radius](DirectLight.md#radius)
- [indirect](DirectLight.md#indirect)
- [iesProfiles](DirectLight.md#iesprofiles)
- [iesProfile](DirectLight.md#iesprofile)
- [r](DirectLight.md#r)
- [g](DirectLight.md#g)
- [b](DirectLight.md#b)
- [lightColor](DirectLight.md#lightcolor)
- [color](DirectLight.md#color)
- [intensity](DirectLight.md#intensity)
- [castShadow](DirectLight.md#castshadow)
- [shadowIndex](DirectLight.md#shadowindex)
- [castGI](DirectLight.md#castgi)
- [direction](DirectLight.md#direction)

### Methods

- [stop](DirectLight.md#stop)
- [onUpdate](DirectLight.md#onupdate)
- [onLateUpdate](DirectLight.md#onlateupdate)
- [onBeforeUpdate](DirectLight.md#onbeforeupdate)
- [onCompute](DirectLight.md#oncompute)
- [onGraphic](DirectLight.md#ongraphic)
- [onParentChange](DirectLight.md#onparentchange)
- [onAddChild](DirectLight.md#onaddchild)
- [onRemoveChild](DirectLight.md#onremovechild)
- [cloneTo](DirectLight.md#cloneto)
- [copyComponent](DirectLight.md#copycomponent)
- [beforeDestroy](DirectLight.md#beforedestroy)
- [init](DirectLight.md#init)
- [start](DirectLight.md#start)
- [debug](DirectLight.md#debug)
- [onChange](DirectLight.md#onchange)
- [onPositionChange](DirectLight.md#onpositionchange)
- [onRotChange](DirectLight.md#onrotchange)
- [onScaleChange](DirectLight.md#onscalechange)
- [onEnable](DirectLight.md#onenable)
- [onDisable](DirectLight.md#ondisable)
- [destroy](DirectLight.md#destroy)

## Constructors

### constructor

• **new DirectLight**(): [`DirectLight`](DirectLight.md)

#### Returns

[`DirectLight`](DirectLight.md)

#### Overrides

[LightBase](LightBase.md).[constructor](LightBase.md#constructor)

#### Defined in

components/lights/DirectLight.ts:11

## Properties

### object3D

• **object3D**: [`Object3D`](Object3D.md) = `null`

#### Inherited from

[LightBase](LightBase.md).[object3D](LightBase.md#object3d)

#### Defined in

components/ComponentBase.ts:9

___

### \_eventDispatcher

• `Protected` **\_eventDispatcher**: [`CEventDispatcher`](CEventDispatcher.md)

#### Inherited from

[LightBase](LightBase.md).[_eventDispatcher](LightBase.md#_eventdispatcher)

#### Defined in

components/ComponentBase.ts:10

___

### \_enable

• `Protected` **\_enable**: `boolean` = `true`

#### Inherited from

[LightBase](LightBase.md).[_enable](LightBase.md#_enable)

#### Defined in

components/ComponentBase.ts:18

___

### isDestroyed

• **isDestroyed**: `boolean` = `false`

#### Inherited from

[LightBase](LightBase.md).[isDestroyed](LightBase.md#isdestroyed)

#### Defined in

components/ComponentBase.ts:20

___

### shadowCamera

• **shadowCamera**: [`Camera3D`](Camera3D.md)

#### Defined in

components/lights/DirectLight.ts:9

___

### name

• **name**: `string`

light name

#### Inherited from

[LightBase](LightBase.md).[name](LightBase.md#name)

#### Defined in

components/lights/LightBase.ts:18

___

### size

• **size**: `number` = `1`

light size

#### Inherited from

[LightBase](LightBase.md).[size](LightBase.md#size)

#### Defined in

components/lights/LightBase.ts:22

___

### lightData

• **lightData**: [`LightData`](LightData.md)

light source data

#### Inherited from

[LightBase](LightBase.md).[lightData](LightBase.md#lightdata)

#### Defined in

components/lights/LightBase.ts:27

___

### dirFix

• **dirFix**: `number` = `1`

fix light direction

#### Inherited from

[LightBase](LightBase.md).[dirFix](LightBase.md#dirfix)

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

#### Inherited from

[LightBase](LightBase.md).[bindOnChange](LightBase.md#bindonchange)

#### Defined in

components/lights/LightBase.ts:37

___

### needUpdateShadow

• **needUpdateShadow**: `boolean` = `true`

#### Inherited from

[LightBase](LightBase.md).[needUpdateShadow](LightBase.md#needupdateshadow)

#### Defined in

components/lights/LightBase.ts:39

___

### realTimeShadow

• **realTimeShadow**: `boolean` = `true`

Whether to enable real-time rendering of shadows

#### Inherited from

[LightBase](LightBase.md).[realTimeShadow](LightBase.md#realtimeshadow)

#### Defined in

components/lights/LightBase.ts:44

___

### \_castGI

• `Protected` **\_castGI**: `boolean` = `false`

#### Inherited from

[LightBase](LightBase.md).[_castGI](LightBase.md#_castgi)

#### Defined in

components/lights/LightBase.ts:46

___

### \_castShadow

• `Protected` **\_castShadow**: `boolean` = `false`

#### Inherited from

[LightBase](LightBase.md).[_castShadow](LightBase.md#_castshadow)

#### Defined in

components/lights/LightBase.ts:47

## Accessors

### eventDispatcher

• `get` **eventDispatcher**(): [`CEventDispatcher`](CEventDispatcher.md)

#### Returns

[`CEventDispatcher`](CEventDispatcher.md)

#### Inherited from

LightBase.eventDispatcher

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

LightBase.eventDispatcher

#### Defined in

components/ComponentBase.ts:15

___

### isStart

• `get` **isStart**(): `boolean`

#### Returns

`boolean`

#### Inherited from

LightBase.isStart

#### Defined in

components/ComponentBase.ts:21

___

### transform

• `get` **transform**(): [`Transform`](Transform.md)

#### Returns

[`Transform`](Transform.md)

#### Inherited from

LightBase.transform

#### Defined in

components/ComponentBase.ts:24

___

### enable

• `get` **enable**(): `boolean`

#### Returns

`boolean`

#### Inherited from

LightBase.enable

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

LightBase.enable

#### Defined in

components/ComponentBase.ts:27

___

### radius

• `get` **radius**(): `number`

#### Returns

`number`

#### Defined in

components/lights/DirectLight.ts:31

• `set` **radius**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

components/lights/DirectLight.ts:35

___

### indirect

• `get` **indirect**(): `number`

#### Returns

`number`

#### Defined in

components/lights/DirectLight.ts:40

• `set` **indirect**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

components/lights/DirectLight.ts:44

___

### iesProfiles

• `set` **iesProfiles**(`iesProfiles`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `iesProfiles` | [`IESProfiles`](IESProfiles.md) |

#### Returns

`void`

#### Inherited from

LightBase.iesProfiles

#### Defined in

components/lights/LightBase.ts:129

___

### iesProfile

• `get` **iesProfile**(): [`IESProfiles`](IESProfiles.md)

#### Returns

[`IESProfiles`](IESProfiles.md)

#### Inherited from

LightBase.iesProfile

#### Defined in

components/lights/LightBase.ts:136

___

### r

• `get` **r**(): `number`

Get the red component of the lighting color

#### Returns

`number`

#### Inherited from

LightBase.r

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

#### Inherited from

LightBase.r

#### Defined in

components/lights/LightBase.ts:150

___

### g

• `get` **g**(): `number`

Get the green component of the lighting color

#### Returns

`number`

#### Inherited from

LightBase.g

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

#### Inherited from

LightBase.g

#### Defined in

components/lights/LightBase.ts:165

___

### b

• `get` **b**(): `number`

Get the blue component of the lighting color

#### Returns

`number`

#### Inherited from

LightBase.b

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

#### Inherited from

LightBase.b

#### Defined in

components/lights/LightBase.ts:179

___

### lightColor

• `get` **lightColor**(): [`Color`](Color.md)

Get light source color

#### Returns

[`Color`](Color.md)

Color

#### Inherited from

LightBase.lightColor

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

#### Inherited from

LightBase.lightColor

#### Defined in

components/lights/LightBase.ts:194

___

### color

• `get` **color**(): [`Color`](Color.md)

Get light source color

#### Returns

[`Color`](Color.md)

Color

#### Inherited from

LightBase.color

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

#### Inherited from

LightBase.color

#### Defined in

components/lights/LightBase.ts:211

___

### intensity

• `get` **intensity**(): `number`

Get Illumination intensity of light source

#### Returns

`number`

number

#### Inherited from

LightBase.intensity

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

#### Inherited from

LightBase.intensity

#### Defined in

components/lights/LightBase.ts:228

___

### castShadow

• `get` **castShadow**(): `boolean`

#### Returns

`boolean`

#### Inherited from

LightBase.castShadow

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

#### Inherited from

LightBase.castShadow

#### Defined in

components/lights/LightBase.ts:237

___

### shadowIndex

• `get` **shadowIndex**(): `number`

get shadow index at shadow map list

#### Returns

`number`

#### Inherited from

LightBase.shadowIndex

#### Defined in

components/lights/LightBase.ts:251

___

### castGI

• `get` **castGI**(): `boolean`

get gi is enable

#### Returns

`boolean`

boolean

#### Inherited from

LightBase.castGI

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

#### Inherited from

LightBase.castGI

#### Defined in

components/lights/LightBase.ts:266

___

### direction

• `get` **direction**(): [`Vector3`](Vector3.md)

light source direction

#### Returns

[`Vector3`](Vector3.md)

Vector3

#### Inherited from

LightBase.direction

#### Defined in

components/lights/LightBase.ts:280

## Methods

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

[LightBase](LightBase.md).[stop](LightBase.md#stop)

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

[LightBase](LightBase.md).[onUpdate](LightBase.md#onupdate)

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

[LightBase](LightBase.md).[onLateUpdate](LightBase.md#onlateupdate)

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

[LightBase](LightBase.md).[onBeforeUpdate](LightBase.md#onbeforeupdate)

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

[LightBase](LightBase.md).[onCompute](LightBase.md#oncompute)

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

[LightBase](LightBase.md).[onGraphic](LightBase.md#ongraphic)

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

[LightBase](LightBase.md).[onParentChange](LightBase.md#onparentchange)

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

[LightBase](LightBase.md).[onAddChild](LightBase.md#onaddchild)

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

[LightBase](LightBase.md).[onRemoveChild](LightBase.md#onremovechild)

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

[LightBase](LightBase.md).[cloneTo](LightBase.md#cloneto)

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

[LightBase](LightBase.md).[copyComponent](LightBase.md#copycomponent)

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

[LightBase](LightBase.md).[beforeDestroy](LightBase.md#beforedestroy)

#### Defined in

components/ComponentBase.ts:135

___

### init

▸ **init**(): `void`

#### Returns

`void`

#### Overrides

[LightBase](LightBase.md).[init](LightBase.md#init)

#### Defined in

components/lights/DirectLight.ts:15

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Overrides

[LightBase](LightBase.md).[start](LightBase.md#start)

#### Defined in

components/lights/DirectLight.ts:26

___

### debug

▸ **debug**(): `void`

#### Returns

`void`

#### Defined in

components/lights/DirectLight.ts:49

___

### onChange

▸ **onChange**(): `void`

#### Returns

`void`

#### Inherited from

[LightBase](LightBase.md).[onChange](LightBase.md#onchange)

#### Defined in

components/lights/LightBase.ts:64

___

### onPositionChange

▸ **onPositionChange**(): `void`

#### Returns

`void`

#### Inherited from

[LightBase](LightBase.md).[onPositionChange](LightBase.md#onpositionchange)

#### Defined in

components/lights/LightBase.ts:99

___

### onRotChange

▸ **onRotChange**(): `void`

#### Returns

`void`

#### Inherited from

[LightBase](LightBase.md).[onRotChange](LightBase.md#onrotchange)

#### Defined in

components/lights/LightBase.ts:104

___

### onScaleChange

▸ **onScaleChange**(): `void`

#### Returns

`void`

#### Inherited from

[LightBase](LightBase.md).[onScaleChange](LightBase.md#onscalechange)

#### Defined in

components/lights/LightBase.ts:114

___

### onEnable

▸ **onEnable**(): `void`

#### Returns

`void`

#### Inherited from

[LightBase](LightBase.md).[onEnable](LightBase.md#onenable)

#### Defined in

components/lights/LightBase.ts:118

___

### onDisable

▸ **onDisable**(): `void`

#### Returns

`void`

#### Inherited from

[LightBase](LightBase.md).[onDisable](LightBase.md#ondisable)

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

#### Inherited from

[LightBase](LightBase.md).[destroy](LightBase.md#destroy)

#### Defined in

components/lights/LightBase.ts:284
