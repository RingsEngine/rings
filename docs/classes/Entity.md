[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / Entity

# Class: Entity

## Hierarchy

- [`CEventDispatcher`](CEventDispatcher.md)

  ↳ **`Entity`**

  ↳↳ [`Object3D`](Object3D.md)

## Table of contents

### Constructors

- [constructor](Entity.md#constructor)

### Properties

- [name](Entity.md#name)
- [\_instanceID](Entity.md#_instanceid)
- [transform](Entity.md#transform)
- [renderNode](Entity.md#rendernode)
- [entityChildren](Entity.md#entitychildren)
- [components](Entity.md#components)
- [waitDisposeComponents](Entity.md#waitdisposecomponents)
- [\_bound](Entity.md#_bound)
- [\_boundWorld](Entity.md#_boundworld)
- [\_isBoundChange](Entity.md#_isboundchange)
- [listeners](Entity.md#listeners)
- [data](Entity.md#data)

### Accessors

- [instanceID](Entity.md#instanceid)
- [dispose](Entity.md#dispose)
- [numChildren](Entity.md#numchildren)
- [bound](Entity.md#bound)

### Methods

- [getObjectByName](Entity.md#getobjectbyname)
- [addChild](Entity.md#addchild)
- [removeChild](Entity.md#removechild)
- [removeAllChild](Entity.md#removeallchild)
- [removeSelf](Entity.md#removeself)
- [removeChildByIndex](Entity.md#removechildbyindex)
- [hasChild](Entity.md#haschild)
- [removeFromParent](Entity.md#removefromparent)
- [getChildByIndex](Entity.md#getchildbyindex)
- [getChildByName](Entity.md#getchildbyname)
- [update](Entity.md#update)
- [instantiate](Entity.md#instantiate)
- [onTransformLocalChange](Entity.md#ontransformlocalchange)
- [waitUpdate](Entity.md#waitupdate)
- [noticeComponents](Entity.md#noticecomponents)
- [destroy](Entity.md#destroy)
- [dispatchEvent](Entity.md#dispatchevent)
- [addEventListener](Entity.md#addeventlistener)
- [removeEventListener](Entity.md#removeeventlistener)
- [removeEventListenerAt](Entity.md#removeeventlistenerat)
- [removeAllEventListener](Entity.md#removealleventlistener)
- [containEventListener](Entity.md#containeventlistener)
- [hasEventListener](Entity.md#haseventlistener)

## Constructors

### constructor

• **new Entity**(): [`Entity`](Entity.md)

#### Returns

[`Entity`](Entity.md)

#### Overrides

[CEventDispatcher](CEventDispatcher.md).[constructor](CEventDispatcher.md#constructor)

#### Defined in

core/entities/Entity.ts:52

## Properties

### name

• **name**: `string` = `""`

#### Defined in

core/entities/Entity.ts:13

___

### \_instanceID

• `Protected` `Readonly` **\_instanceID**: `string` = `""`

#### Defined in

core/entities/Entity.ts:14

___

### transform

• **transform**: [`Transform`](Transform.md)

#### Defined in

core/entities/Entity.ts:19

___

### renderNode

• **renderNode**: [`RenderNode`](RenderNode.md)

#### Defined in

core/entities/Entity.ts:20

___

### entityChildren

• **entityChildren**: [`Entity`](Entity.md)[]

#### Defined in

core/entities/Entity.ts:21

___

### components

• **components**: `Map`\<`any`, [`IComponent`](../interfaces/IComponent.md)\>

#### Defined in

core/entities/Entity.ts:22

___

### waitDisposeComponents

• `Protected` **waitDisposeComponents**: [`IComponent`](../interfaces/IComponent.md)[]

#### Defined in

core/entities/Entity.ts:23

___

### \_bound

• `Protected` **\_bound**: [`IBound`](../interfaces/IBound.md)

#### Defined in

core/entities/Entity.ts:24

___

### \_boundWorld

• `Protected` **\_boundWorld**: [`IBound`](../interfaces/IBound.md)

#### Defined in

core/entities/Entity.ts:25

___

### \_isBoundChange

• `Protected` **\_isBoundChange**: `boolean` = `true`

#### Defined in

core/entities/Entity.ts:26

___

### listeners

• `Protected` **listeners**: `any` = `{}`

#### Inherited from

[CEventDispatcher](CEventDispatcher.md).[listeners](CEventDispatcher.md#listeners)

#### Defined in

event/CEventDispatcher.ts:5

___

### data

• **data**: `any`

#### Inherited from

[CEventDispatcher](CEventDispatcher.md).[data](CEventDispatcher.md#data)

#### Defined in

event/CEventDispatcher.ts:6

## Accessors

### instanceID

• `get` **instanceID**(): `string`

#### Returns

`string`

#### Defined in

core/entities/Entity.ts:16

___

### dispose

• `get` **dispose**(): `boolean`

#### Returns

`boolean`

#### Defined in

core/entities/Entity.ts:29

___

### numChildren

• `get` **numChildren**(): `number`

#### Returns

`number`

#### Defined in

core/entities/Entity.ts:60

___

### bound

• `get` **bound**(): [`IBound`](../interfaces/IBound.md)

#### Returns

[`IBound`](../interfaces/IBound.md)

#### Defined in

core/entities/Entity.ts:161

• `set` **bound**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`IBound`](../interfaces/IBound.md) |

#### Returns

`void`

#### Defined in

core/entities/Entity.ts:166

## Methods

### getObjectByName

▸ **getObjectByName**(`name`): [`Entity`](Entity.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`Entity`](Entity.md)

#### Defined in

core/entities/Entity.ts:33

___

### addChild

▸ **addChild**(`child`): [`Entity`](Entity.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Entity`](Entity.md) |

#### Returns

[`Entity`](Entity.md)

#### Defined in

core/entities/Entity.ts:64

___

### removeChild

▸ **removeChild**(`child`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Entity`](Entity.md) |

#### Returns

`void`

#### Defined in

core/entities/Entity.ts:84

___

### removeAllChild

▸ **removeAllChild**(): `void`

#### Returns

`void`

#### Defined in

core/entities/Entity.ts:96

___

### removeSelf

▸ **removeSelf**(): `this`

#### Returns

`this`

#### Defined in

core/entities/Entity.ts:102

___

### removeChildByIndex

▸ **removeChildByIndex**(`index`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`void`

#### Defined in

core/entities/Entity.ts:106

___

### hasChild

▸ **hasChild**(`child`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`Entity`](Entity.md) |

#### Returns

`boolean`

#### Defined in

core/entities/Entity.ts:114

___

### removeFromParent

▸ **removeFromParent**(): `this`

#### Returns

`this`

#### Defined in

core/entities/Entity.ts:119

___

### getChildByIndex

▸ **getChildByIndex**(`index`): [`Entity`](Entity.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`Entity`](Entity.md)

#### Defined in

core/entities/Entity.ts:127

___

### getChildByName

▸ **getChildByName**(`name`, `loopChild?`): `any`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `loopChild` | `boolean` | `true` |

#### Returns

`any`

#### Defined in

core/entities/Entity.ts:135

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Defined in

core/entities/Entity.ts:151

___

### instantiate

▸ **instantiate**(): [`Object3D`](Object3D.md)

#### Returns

[`Object3D`](Object3D.md)

#### Defined in

core/entities/Entity.ts:153

___

### onTransformLocalChange

▸ **onTransformLocalChange**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `any` |

#### Returns

`void`

#### Defined in

core/entities/Entity.ts:157

___

### waitUpdate

▸ **waitUpdate**(): `void`

#### Returns

`void`

#### Defined in

core/entities/Entity.ts:189

___

### noticeComponents

▸ **noticeComponents**(`key`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | keyof [`IComponent`](../interfaces/IComponent.md) |
| `data` | `any` |

#### Returns

`void`

#### Defined in

core/entities/Entity.ts:211

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

[CEventDispatcher](CEventDispatcher.md).[destroy](CEventDispatcher.md#destroy)

#### Defined in

core/entities/Entity.ts:218

___

### dispatchEvent

▸ **dispatchEvent**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`CEvent`](CEvent.md) |

#### Returns

`void`

#### Inherited from

[CEventDispatcher](CEventDispatcher.md).[dispatchEvent](CEventDispatcher.md#dispatchevent)

#### Defined in

event/CEventDispatcher.ts:7

___

### addEventListener

▸ **addEventListener**(`type`, `callback`, `thisObject`, `param?`, `priority?`): `number`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `type` | `string` \| `number` | `undefined` |
| `callback` | `Function` | `undefined` |
| `thisObject` | `any` | `undefined` |
| `param` | `any` | `null` |
| `priority` | `number` | `0` |

#### Returns

`number`

#### Inherited from

[CEventDispatcher](CEventDispatcher.md).[addEventListener](CEventDispatcher.md#addeventlistener)

#### Defined in

event/CEventDispatcher.ts:40

___

### removeEventListener

▸ **removeEventListener**(`type`, `callback`, `thisObject`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `callback` | `Function` |
| `thisObject` | `any` |

#### Returns

`void`

#### Inherited from

[CEventDispatcher](CEventDispatcher.md).[removeEventListener](CEventDispatcher.md#removeeventlistener)

#### Defined in

event/CEventDispatcher.ts:82

___

### removeEventListenerAt

▸ **removeEventListenerAt**(`id`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`boolean`

#### Inherited from

[CEventDispatcher](CEventDispatcher.md).[removeEventListenerAt](CEventDispatcher.md#removeeventlistenerat)

#### Defined in

event/CEventDispatcher.ts:107

___

### removeAllEventListener

▸ **removeAllEventListener**(`eventType?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `eventType` | `string` \| `number` | `null` |

#### Returns

`void`

#### Inherited from

[CEventDispatcher](CEventDispatcher.md).[removeAllEventListener](CEventDispatcher.md#removealleventlistener)

#### Defined in

event/CEventDispatcher.ts:122

___

### containEventListener

▸ **containEventListener**(`type`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

`boolean`

#### Inherited from

[CEventDispatcher](CEventDispatcher.md).[containEventListener](CEventDispatcher.md#containeventlistener)

#### Defined in

event/CEventDispatcher.ts:150

___

### hasEventListener

▸ **hasEventListener**(`type`, `callback?`, `thisObject?`): `boolean`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `type` | `string` \| `number` | `undefined` |
| `callback` | `Function` | `null` |
| `thisObject` | `any` | `null` |

#### Returns

`boolean`

#### Inherited from

[CEventDispatcher](CEventDispatcher.md).[hasEventListener](CEventDispatcher.md#haseventlistener)

#### Defined in

event/CEventDispatcher.ts:155
