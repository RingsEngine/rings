[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / AxisObject

# Class: AxisObject

包含xyz坐标的OBJECT3D

## Hierarchy

- [`Object3D`](Object3D.md)

  ↳ **`AxisObject`**

## Table of contents

### Constructors

- [constructor](AxisObject.md#constructor)

### Properties

- [name](AxisObject.md#name)
- [\_instanceID](AxisObject.md#_instanceid)
- [transform](AxisObject.md#transform)
- [renderNode](AxisObject.md#rendernode)
- [entityChildren](AxisObject.md#entitychildren)
- [components](AxisObject.md#components)
- [waitDisposeComponents](AxisObject.md#waitdisposecomponents)
- [\_bound](AxisObject.md#_bound)
- [\_boundWorld](AxisObject.md#_boundworld)
- [\_isBoundChange](AxisObject.md#_isboundchange)
- [\_isScene3D](AxisObject.md#_isscene3d)
- [prefabRef](AxisObject.md#prefabref)
- [serializeTag](AxisObject.md#serializetag)
- [listeners](AxisObject.md#listeners)
- [data](AxisObject.md#data)
- [length](AxisObject.md#length)
- [thickness](AxisObject.md#thickness)

### Accessors

- [instanceID](AxisObject.md#instanceid)
- [dispose](AxisObject.md#dispose)
- [numChildren](AxisObject.md#numchildren)
- [bound](AxisObject.md#bound)
- [isScene3D](AxisObject.md#isscene3d)
- [localPosition](AxisObject.md#localposition)
- [localRotation](AxisObject.md#localrotation)
- [localScale](AxisObject.md#localscale)
- [localQuaternion](AxisObject.md#localquaternion)
- [parent](AxisObject.md#parent)
- [parentObject](AxisObject.md#parentobject)
- [x](AxisObject.md#x)
- [y](AxisObject.md#y)
- [z](AxisObject.md#z)
- [scaleX](AxisObject.md#scalex)
- [scaleY](AxisObject.md#scaley)
- [scaleZ](AxisObject.md#scalez)
- [rotationX](AxisObject.md#rotationx)
- [rotationY](AxisObject.md#rotationy)
- [rotationZ](AxisObject.md#rotationz)

### Methods

- [getObjectByName](AxisObject.md#getobjectbyname)
- [addChild](AxisObject.md#addchild)
- [removeChild](AxisObject.md#removechild)
- [removeAllChild](AxisObject.md#removeallchild)
- [removeSelf](AxisObject.md#removeself)
- [removeChildByIndex](AxisObject.md#removechildbyindex)
- [hasChild](AxisObject.md#haschild)
- [removeFromParent](AxisObject.md#removefromparent)
- [getChildByIndex](AxisObject.md#getchildbyindex)
- [getChildByName](AxisObject.md#getchildbyname)
- [update](AxisObject.md#update)
- [onTransformLocalChange](AxisObject.md#ontransformlocalchange)
- [waitUpdate](AxisObject.md#waitupdate)
- [noticeComponents](AxisObject.md#noticecomponents)
- [forChild](AxisObject.md#forchild)
- [addComponent](AxisObject.md#addcomponent)
- [getOrAddComponent](AxisObject.md#getoraddcomponent)
- [removeComponent](AxisObject.md#removecomponent)
- [hasComponent](AxisObject.md#hascomponent)
- [getComponent](AxisObject.md#getcomponent)
- [getComponentFromParent](AxisObject.md#getcomponentfromparent)
- [getComponentsInChild](AxisObject.md#getcomponentsinchild)
- [getComponents](AxisObject.md#getcomponents)
- [getComponentsExt](AxisObject.md#getcomponentsext)
- [getComponentsByProperty](AxisObject.md#getcomponentsbyproperty)
- [clone](AxisObject.md#clone)
- [instantiate](AxisObject.md#instantiate)
- [notifyChange](AxisObject.md#notifychange)
- [fixedUpdate](AxisObject.md#fixedupdate)
- [lateUpdate](AxisObject.md#lateupdate)
- [traverse](AxisObject.md#traverse)
- [destroy](AxisObject.md#destroy)
- [dispatchEvent](AxisObject.md#dispatchevent)
- [addEventListener](AxisObject.md#addeventlistener)
- [removeEventListener](AxisObject.md#removeeventlistener)
- [removeEventListenerAt](AxisObject.md#removeeventlistenerat)
- [removeAllEventListener](AxisObject.md#removealleventlistener)
- [containEventListener](AxisObject.md#containeventlistener)
- [hasEventListener](AxisObject.md#haseventlistener)
- [init](AxisObject.md#init)

## Constructors

### constructor

• **new AxisObject**(`length`, `thickness?`): [`AxisObject`](AxisObject.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `length` | `number` | `undefined` |
| `thickness` | `number` | `0.1` |

#### Returns

[`AxisObject`](AxisObject.md)

#### Overrides

[Object3D](Object3D.md).[constructor](Object3D.md#constructor)

#### Defined in

util/AxisObject.ts:13

## Properties

### name

• **name**: `string` = `""`

#### Inherited from

[Object3D](Object3D.md).[name](Object3D.md#name)

#### Defined in

core/entities/Entity.ts:13

___

### \_instanceID

• `Protected` `Readonly` **\_instanceID**: `string` = `""`

#### Inherited from

[Object3D](Object3D.md).[_instanceID](Object3D.md#_instanceid)

#### Defined in

core/entities/Entity.ts:14

___

### transform

• **transform**: [`Transform`](Transform.md)

#### Inherited from

[Object3D](Object3D.md).[transform](Object3D.md#transform)

#### Defined in

core/entities/Entity.ts:19

___

### renderNode

• **renderNode**: [`RenderNode`](RenderNode.md)

#### Inherited from

[Object3D](Object3D.md).[renderNode](Object3D.md#rendernode)

#### Defined in

core/entities/Entity.ts:20

___

### entityChildren

• **entityChildren**: [`Entity`](Entity.md)[]

#### Inherited from

[Object3D](Object3D.md).[entityChildren](Object3D.md#entitychildren)

#### Defined in

core/entities/Entity.ts:21

___

### components

• **components**: `Map`\<`any`, [`IComponent`](../interfaces/IComponent.md)\>

#### Inherited from

[Object3D](Object3D.md).[components](Object3D.md#components)

#### Defined in

core/entities/Entity.ts:22

___

### waitDisposeComponents

• `Protected` **waitDisposeComponents**: [`IComponent`](../interfaces/IComponent.md)[]

#### Inherited from

[Object3D](Object3D.md).[waitDisposeComponents](Object3D.md#waitdisposecomponents)

#### Defined in

core/entities/Entity.ts:23

___

### \_bound

• `Protected` **\_bound**: [`IBound`](../interfaces/IBound.md)

#### Inherited from

[Object3D](Object3D.md).[_bound](Object3D.md#_bound)

#### Defined in

core/entities/Entity.ts:24

___

### \_boundWorld

• `Protected` **\_boundWorld**: [`IBound`](../interfaces/IBound.md)

#### Inherited from

[Object3D](Object3D.md).[_boundWorld](Object3D.md#_boundworld)

#### Defined in

core/entities/Entity.ts:25

___

### \_isBoundChange

• `Protected` **\_isBoundChange**: `boolean` = `true`

#### Inherited from

[Object3D](Object3D.md).[_isBoundChange](Object3D.md#_isboundchange)

#### Defined in

core/entities/Entity.ts:26

___

### \_isScene3D

• `Protected` **\_isScene3D**: `boolean`

#### Inherited from

[Object3D](Object3D.md).[_isScene3D](Object3D.md#_isscene3d)

#### Defined in

core/entities/Object3D.ts:14

___

### prefabRef

• `Optional` **prefabRef**: `string`

#### Inherited from

[Object3D](Object3D.md).[prefabRef](Object3D.md#prefabref)

#### Defined in

core/entities/Object3D.ts:15

___

### serializeTag

• `Optional` **serializeTag**: [`SerializeTag`](../modules.md#serializetag)

#### Inherited from

[Object3D](Object3D.md).[serializeTag](Object3D.md#serializetag)

#### Defined in

core/entities/Object3D.ts:16

___

### listeners

• `Protected` **listeners**: `any` = `{}`

#### Inherited from

[Object3D](Object3D.md).[listeners](Object3D.md#listeners)

#### Defined in

event/CEventDispatcher.ts:5

___

### data

• **data**: `any`

#### Inherited from

[Object3D](Object3D.md).[data](Object3D.md#data)

#### Defined in

event/CEventDispatcher.ts:6

___

### length

• **length**: `number` = `100`

#### Defined in

util/AxisObject.ts:10

___

### thickness

• **thickness**: `number` = `0.1`

#### Defined in

util/AxisObject.ts:12

## Accessors

### instanceID

• `get` **instanceID**(): `string`

#### Returns

`string`

#### Inherited from

Object3D.instanceID

#### Defined in

core/entities/Entity.ts:16

___

### dispose

• `get` **dispose**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Object3D.dispose

#### Defined in

core/entities/Entity.ts:29

___

### numChildren

• `get` **numChildren**(): `number`

#### Returns

`number`

#### Inherited from

Object3D.numChildren

#### Defined in

core/entities/Entity.ts:60

___

### bound

• `get` **bound**(): [`IBound`](../interfaces/IBound.md)

#### Returns

[`IBound`](../interfaces/IBound.md)

#### Inherited from

Object3D.bound

#### Defined in

core/entities/Entity.ts:161

• `set` **bound**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`IBound`](../interfaces/IBound.md) |

#### Returns

`void`

#### Inherited from

Object3D.bound

#### Defined in

core/entities/Entity.ts:166

___

### isScene3D

• `get` **isScene3D**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Object3D.isScene3D

#### Defined in

core/entities/Object3D.ts:28

___

### localPosition

• `get` **localPosition**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

Object3D.localPosition

#### Defined in

core/entities/Object3D.ts:197

• `set` **localPosition**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Inherited from

Object3D.localPosition

#### Defined in

core/entities/Object3D.ts:201

___

### localRotation

• `get` **localRotation**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

Object3D.localRotation

#### Defined in

core/entities/Object3D.ts:205

• `set` **localRotation**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Inherited from

Object3D.localRotation

#### Defined in

core/entities/Object3D.ts:209

___

### localScale

• `get` **localScale**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

Object3D.localScale

#### Defined in

core/entities/Object3D.ts:213

• `set` **localScale**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Inherited from

Object3D.localScale

#### Defined in

core/entities/Object3D.ts:217

___

### localQuaternion

• `get` **localQuaternion**(): [`Quaternion`](Quaternion.md)

#### Returns

[`Quaternion`](Quaternion.md)

#### Inherited from

Object3D.localQuaternion

#### Defined in

core/entities/Object3D.ts:221

• `set` **localQuaternion**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Quaternion`](Quaternion.md) |

#### Returns

`void`

#### Inherited from

Object3D.localQuaternion

#### Defined in

core/entities/Object3D.ts:225

___

### parent

• `get` **parent**(): [`Transform`](Transform.md)

#### Returns

[`Transform`](Transform.md)

#### Inherited from

Object3D.parent

#### Defined in

core/entities/Object3D.ts:233

___

### parentObject

• `get` **parentObject**(): [`Object3D`](Object3D.md)

#### Returns

[`Object3D`](Object3D.md)

#### Inherited from

Object3D.parentObject

#### Defined in

core/entities/Object3D.ts:237

___

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Inherited from

Object3D.x

#### Defined in

core/entities/Object3D.ts:245

• `set` **x**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

Object3D.x

#### Defined in

core/entities/Object3D.ts:241

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Inherited from

Object3D.y

#### Defined in

core/entities/Object3D.ts:253

• `set` **y**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

Object3D.y

#### Defined in

core/entities/Object3D.ts:249

___

### z

• `get` **z**(): `number`

#### Returns

`number`

#### Inherited from

Object3D.z

#### Defined in

core/entities/Object3D.ts:261

• `set` **z**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

Object3D.z

#### Defined in

core/entities/Object3D.ts:257

___

### scaleX

• `get` **scaleX**(): `number`

#### Returns

`number`

#### Inherited from

Object3D.scaleX

#### Defined in

core/entities/Object3D.ts:269

• `set` **scaleX**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

Object3D.scaleX

#### Defined in

core/entities/Object3D.ts:265

___

### scaleY

• `get` **scaleY**(): `number`

#### Returns

`number`

#### Inherited from

Object3D.scaleY

#### Defined in

core/entities/Object3D.ts:277

• `set` **scaleY**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

Object3D.scaleY

#### Defined in

core/entities/Object3D.ts:273

___

### scaleZ

• `get` **scaleZ**(): `number`

#### Returns

`number`

#### Inherited from

Object3D.scaleZ

#### Defined in

core/entities/Object3D.ts:285

• `set` **scaleZ**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

Object3D.scaleZ

#### Defined in

core/entities/Object3D.ts:281

___

### rotationX

• `get` **rotationX**(): `number`

#### Returns

`number`

#### Inherited from

Object3D.rotationX

#### Defined in

core/entities/Object3D.ts:293

• `set` **rotationX**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

Object3D.rotationX

#### Defined in

core/entities/Object3D.ts:289

___

### rotationY

• `get` **rotationY**(): `number`

#### Returns

`number`

#### Inherited from

Object3D.rotationY

#### Defined in

core/entities/Object3D.ts:301

• `set` **rotationY**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

Object3D.rotationY

#### Defined in

core/entities/Object3D.ts:297

___

### rotationZ

• `get` **rotationZ**(): `number`

#### Returns

`number`

#### Inherited from

Object3D.rotationZ

#### Defined in

core/entities/Object3D.ts:309

• `set` **rotationZ**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

Object3D.rotationZ

#### Defined in

core/entities/Object3D.ts:305

## Methods

### getObjectByName

▸ **getObjectByName**(`name`): [`Entity`](Entity.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`Entity`](Entity.md)

#### Inherited from

[Object3D](Object3D.md).[getObjectByName](Object3D.md#getobjectbyname)

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

#### Inherited from

[Object3D](Object3D.md).[addChild](Object3D.md#addchild)

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

#### Inherited from

[Object3D](Object3D.md).[removeChild](Object3D.md#removechild)

#### Defined in

core/entities/Entity.ts:84

___

### removeAllChild

▸ **removeAllChild**(): `void`

#### Returns

`void`

#### Inherited from

[Object3D](Object3D.md).[removeAllChild](Object3D.md#removeallchild)

#### Defined in

core/entities/Entity.ts:96

___

### removeSelf

▸ **removeSelf**(): `this`

#### Returns

`this`

#### Inherited from

[Object3D](Object3D.md).[removeSelf](Object3D.md#removeself)

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

#### Inherited from

[Object3D](Object3D.md).[removeChildByIndex](Object3D.md#removechildbyindex)

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

#### Inherited from

[Object3D](Object3D.md).[hasChild](Object3D.md#haschild)

#### Defined in

core/entities/Entity.ts:114

___

### removeFromParent

▸ **removeFromParent**(): `this`

#### Returns

`this`

#### Inherited from

[Object3D](Object3D.md).[removeFromParent](Object3D.md#removefromparent)

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

#### Inherited from

[Object3D](Object3D.md).[getChildByIndex](Object3D.md#getchildbyindex)

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

#### Inherited from

[Object3D](Object3D.md).[getChildByName](Object3D.md#getchildbyname)

#### Defined in

core/entities/Entity.ts:135

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Inherited from

[Object3D](Object3D.md).[update](Object3D.md#update)

#### Defined in

core/entities/Entity.ts:151

___

### onTransformLocalChange

▸ **onTransformLocalChange**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `any` |

#### Returns

`void`

#### Inherited from

[Object3D](Object3D.md).[onTransformLocalChange](Object3D.md#ontransformlocalchange)

#### Defined in

core/entities/Entity.ts:157

___

### waitUpdate

▸ **waitUpdate**(): `void`

#### Returns

`void`

#### Inherited from

[Object3D](Object3D.md).[waitUpdate](Object3D.md#waitupdate)

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

#### Inherited from

[Object3D](Object3D.md).[noticeComponents](Object3D.md#noticecomponents)

#### Defined in

core/entities/Entity.ts:211

___

### forChild

▸ **forChild**(`call`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `call` | `Function` |

#### Returns

`void`

#### Inherited from

[Object3D](Object3D.md).[forChild](Object3D.md#forchild)

#### Defined in

core/entities/Object3D.ts:32

___

### addComponent

▸ **addComponent**\<`T`\>(`c`, `param?`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IComponent`](../interfaces/IComponent.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`Ctor`](../modules.md#ctor)\<`T`\> |
| `param?` | `any` |

#### Returns

`T`

#### Inherited from

[Object3D](Object3D.md).[addComponent](Object3D.md#addcomponent)

#### Defined in

core/entities/Object3D.ts:39

___

### getOrAddComponent

▸ **getOrAddComponent**\<`T`\>(`c`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IComponent`](../interfaces/IComponent.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`Ctor`](../modules.md#ctor)\<`T`\> |

#### Returns

`T`

#### Inherited from

[Object3D](Object3D.md).[getOrAddComponent](Object3D.md#getoraddcomponent)

#### Defined in

core/entities/Object3D.ts:51

___

### removeComponent

▸ **removeComponent**\<`T`\>(`c`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IComponent`](../interfaces/IComponent.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`Ctor`](../modules.md#ctor)\<`T`\> |

#### Returns

`void`

#### Inherited from

[Object3D](Object3D.md).[removeComponent](Object3D.md#removecomponent)

#### Defined in

core/entities/Object3D.ts:59

___

### hasComponent

▸ **hasComponent**\<`T`\>(`c`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IComponent`](../interfaces/IComponent.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`Ctor`](../modules.md#ctor)\<`T`\> |

#### Returns

`boolean`

#### Inherited from

[Object3D](Object3D.md).[hasComponent](Object3D.md#hascomponent)

#### Defined in

core/entities/Object3D.ts:70

___

### getComponent

▸ **getComponent**\<`T`\>(`c`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IComponent`](../interfaces/IComponent.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`Ctor`](../modules.md#ctor)\<`T`\> |

#### Returns

`T`

#### Inherited from

[Object3D](Object3D.md).[getComponent](Object3D.md#getcomponent)

#### Defined in

core/entities/Object3D.ts:74

___

### getComponentFromParent

▸ **getComponentFromParent**\<`T`\>(`c`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IComponent`](../interfaces/IComponent.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`Ctor`](../modules.md#ctor)\<`T`\> |

#### Returns

`T`

#### Inherited from

[Object3D](Object3D.md).[getComponentFromParent](Object3D.md#getcomponentfromparent)

#### Defined in

core/entities/Object3D.ts:78

___

### getComponentsInChild

▸ **getComponentsInChild**\<`T`\>(`c`): `T`[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IComponent`](../interfaces/IComponent.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`Ctor`](../modules.md#ctor)\<`T`\> |

#### Returns

`T`[]

#### Inherited from

[Object3D](Object3D.md).[getComponentsInChild](Object3D.md#getcomponentsinchild)

#### Defined in

core/entities/Object3D.ts:91

___

### getComponents

▸ **getComponents**\<`T`\>(`c`, `outList?`, `includeInactive?`): `T`[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IComponent`](../interfaces/IComponent.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`Ctor`](../modules.md#ctor)\<`T`\> |
| `outList?` | `T`[] |
| `includeInactive?` | `boolean` |

#### Returns

`T`[]

#### Inherited from

[Object3D](Object3D.md).[getComponents](Object3D.md#getcomponents)

#### Defined in

core/entities/Object3D.ts:105

___

### getComponentsExt

▸ **getComponentsExt**\<`T`\>(`c`, `ret?`, `includeInactive?`): `T`[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IComponent`](../interfaces/IComponent.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | [`Ctor`](../modules.md#ctor)\<`T`\> |
| `ret?` | `T`[] |
| `includeInactive?` | `boolean` |

#### Returns

`T`[]

#### Inherited from

[Object3D](Object3D.md).[getComponentsExt](Object3D.md#getcomponentsext)

#### Defined in

core/entities/Object3D.ts:124

___

### getComponentsByProperty

▸ **getComponentsByProperty**\<`T`\>(`key`, `value`, `findedAndBreak?`, `ret?`, `includeInactive?`): `T`[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IComponent`](../interfaces/IComponent.md) |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `key` | `string` | `undefined` |
| `value` | `any` | `undefined` |
| `findedAndBreak` | `boolean` | `true` |
| `ret?` | `T`[] | `undefined` |
| `includeInactive?` | `boolean` | `undefined` |

#### Returns

`T`[]

#### Inherited from

[Object3D](Object3D.md).[getComponentsByProperty](Object3D.md#getcomponentsbyproperty)

#### Defined in

core/entities/Object3D.ts:143

___

### clone

▸ **clone**(): [`Object3D`](Object3D.md)

#### Returns

[`Object3D`](Object3D.md)

#### Inherited from

[Object3D](Object3D.md).[clone](Object3D.md#clone)

#### Defined in

core/entities/Object3D.ts:176

___

### instantiate

▸ **instantiate**(): [`Object3D`](Object3D.md)

#### Returns

[`Object3D`](Object3D.md)

#### Inherited from

[Object3D](Object3D.md).[instantiate](Object3D.md#instantiate)

#### Defined in

core/entities/Object3D.ts:180

___

### notifyChange

▸ **notifyChange**(): `void`

#### Returns

`void`

#### Inherited from

[Object3D](Object3D.md).[notifyChange](Object3D.md#notifychange)

#### Defined in

core/entities/Object3D.ts:229

___

### fixedUpdate

▸ **fixedUpdate**(): `void`

#### Returns

`void`

#### Inherited from

[Object3D](Object3D.md).[fixedUpdate](Object3D.md#fixedupdate)

#### Defined in

core/entities/Object3D.ts:313

___

### lateUpdate

▸ **lateUpdate**(): `void`

#### Returns

`void`

#### Inherited from

[Object3D](Object3D.md).[lateUpdate](Object3D.md#lateupdate)

#### Defined in

core/entities/Object3D.ts:315

___

### traverse

▸ **traverse**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`child`: `any`) => `void` |

#### Returns

`void`

#### Inherited from

[Object3D](Object3D.md).[traverse](Object3D.md#traverse)

#### Defined in

core/entities/Object3D.ts:317

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

[Object3D](Object3D.md).[destroy](Object3D.md#destroy)

#### Defined in

core/entities/Object3D.ts:327

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

[Object3D](Object3D.md).[dispatchEvent](Object3D.md#dispatchevent)

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

[Object3D](Object3D.md).[addEventListener](Object3D.md#addeventlistener)

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

[Object3D](Object3D.md).[removeEventListener](Object3D.md#removeeventlistener)

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

[Object3D](Object3D.md).[removeEventListenerAt](Object3D.md#removeeventlistenerat)

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

[Object3D](Object3D.md).[removeAllEventListener](Object3D.md#removealleventlistener)

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

[Object3D](Object3D.md).[containEventListener](Object3D.md#containeventlistener)

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

[Object3D](Object3D.md).[hasEventListener](Object3D.md#haseventlistener)

#### Defined in

event/CEventDispatcher.ts:155

___

### init

▸ **init**(): `void`

#### Returns

`void`

#### Defined in

util/AxisObject.ts:20
