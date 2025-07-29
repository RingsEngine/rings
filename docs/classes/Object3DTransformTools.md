[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / Object3DTransformTools

# Class: Object3DTransformTools

Object3D 转换控制器

## Hierarchy

- [`Object3D`](Object3D.md)

  ↳ **`Object3DTransformTools`**

## Table of contents

### Constructors

- [constructor](Object3DTransformTools.md#constructor)

### Properties

- [name](Object3DTransformTools.md#name)
- [\_instanceID](Object3DTransformTools.md#_instanceid)
- [transform](Object3DTransformTools.md#transform)
- [renderNode](Object3DTransformTools.md#rendernode)
- [entityChildren](Object3DTransformTools.md#entitychildren)
- [components](Object3DTransformTools.md#components)
- [waitDisposeComponents](Object3DTransformTools.md#waitdisposecomponents)
- [\_bound](Object3DTransformTools.md#_bound)
- [\_boundWorld](Object3DTransformTools.md#_boundworld)
- [\_isBoundChange](Object3DTransformTools.md#_isboundchange)
- [\_isScene3D](Object3DTransformTools.md#_isscene3d)
- [prefabRef](Object3DTransformTools.md#prefabref)
- [serializeTag](Object3DTransformTools.md#serializetag)
- [listeners](Object3DTransformTools.md#listeners)
- [data](Object3DTransformTools.md#data)
- [mTarget](Object3DTransformTools.md#mtarget)
- [mTransformMode](Object3DTransformTools.md#mtransformmode)
- [mTransformSpaceType](Object3DTransformTools.md#mtransformspacetype)
- [mControllers](Object3DTransformTools.md#mcontrollers)
- [mXObj](Object3DTransformTools.md#mxobj)
- [mYObj](Object3DTransformTools.md#myobj)
- [mZObj](Object3DTransformTools.md#mzobj)

### Accessors

- [instanceID](Object3DTransformTools.md#instanceid)
- [dispose](Object3DTransformTools.md#dispose)
- [numChildren](Object3DTransformTools.md#numchildren)
- [bound](Object3DTransformTools.md#bound)
- [isScene3D](Object3DTransformTools.md#isscene3d)
- [localPosition](Object3DTransformTools.md#localposition)
- [localRotation](Object3DTransformTools.md#localrotation)
- [localScale](Object3DTransformTools.md#localscale)
- [localQuaternion](Object3DTransformTools.md#localquaternion)
- [parent](Object3DTransformTools.md#parent)
- [parentObject](Object3DTransformTools.md#parentobject)
- [x](Object3DTransformTools.md#x)
- [y](Object3DTransformTools.md#y)
- [z](Object3DTransformTools.md#z)
- [scaleX](Object3DTransformTools.md#scalex)
- [scaleY](Object3DTransformTools.md#scaley)
- [scaleZ](Object3DTransformTools.md#scalez)
- [rotationX](Object3DTransformTools.md#rotationx)
- [rotationY](Object3DTransformTools.md#rotationy)
- [rotationZ](Object3DTransformTools.md#rotationz)
- [instance](Object3DTransformTools.md#instance)
- [transformMode](Object3DTransformTools.md#transformmode)
- [transformSpaceMode](Object3DTransformTools.md#transformspacemode)
- [target](Object3DTransformTools.md#target)

### Methods

- [getObjectByName](Object3DTransformTools.md#getobjectbyname)
- [addChild](Object3DTransformTools.md#addchild)
- [removeChild](Object3DTransformTools.md#removechild)
- [removeAllChild](Object3DTransformTools.md#removeallchild)
- [removeSelf](Object3DTransformTools.md#removeself)
- [removeChildByIndex](Object3DTransformTools.md#removechildbyindex)
- [hasChild](Object3DTransformTools.md#haschild)
- [removeFromParent](Object3DTransformTools.md#removefromparent)
- [getChildByIndex](Object3DTransformTools.md#getchildbyindex)
- [getChildByName](Object3DTransformTools.md#getchildbyname)
- [update](Object3DTransformTools.md#update)
- [onTransformLocalChange](Object3DTransformTools.md#ontransformlocalchange)
- [waitUpdate](Object3DTransformTools.md#waitupdate)
- [noticeComponents](Object3DTransformTools.md#noticecomponents)
- [forChild](Object3DTransformTools.md#forchild)
- [addComponent](Object3DTransformTools.md#addcomponent)
- [getOrAddComponent](Object3DTransformTools.md#getoraddcomponent)
- [removeComponent](Object3DTransformTools.md#removecomponent)
- [hasComponent](Object3DTransformTools.md#hascomponent)
- [getComponent](Object3DTransformTools.md#getcomponent)
- [getComponentFromParent](Object3DTransformTools.md#getcomponentfromparent)
- [getComponentsInChild](Object3DTransformTools.md#getcomponentsinchild)
- [getComponents](Object3DTransformTools.md#getcomponents)
- [getComponentsExt](Object3DTransformTools.md#getcomponentsext)
- [getComponentsByProperty](Object3DTransformTools.md#getcomponentsbyproperty)
- [clone](Object3DTransformTools.md#clone)
- [instantiate](Object3DTransformTools.md#instantiate)
- [notifyChange](Object3DTransformTools.md#notifychange)
- [fixedUpdate](Object3DTransformTools.md#fixedupdate)
- [lateUpdate](Object3DTransformTools.md#lateupdate)
- [traverse](Object3DTransformTools.md#traverse)
- [destroy](Object3DTransformTools.md#destroy)
- [dispatchEvent](Object3DTransformTools.md#dispatchevent)
- [addEventListener](Object3DTransformTools.md#addeventlistener)
- [removeEventListener](Object3DTransformTools.md#removeeventlistener)
- [removeEventListenerAt](Object3DTransformTools.md#removeeventlistenerat)
- [removeAllEventListener](Object3DTransformTools.md#removealleventlistener)
- [containEventListener](Object3DTransformTools.md#containeventlistener)
- [hasEventListener](Object3DTransformTools.md#haseventlistener)
- [active](Object3DTransformTools.md#active)
- [unActive](Object3DTransformTools.md#unactive)
- [selectObject](Object3DTransformTools.md#selectobject)
- [selectTransformMode](Object3DTransformTools.md#selecttransformmode)
- [selectTransformSpaceMode](Object3DTransformTools.md#selecttransformspacemode)
- [activate](Object3DTransformTools.md#activate)
- [unactivate](Object3DTransformTools.md#unactivate)
- [onKeyDown](Object3DTransformTools.md#onkeydown)
- [onMouseDown](Object3DTransformTools.md#onmousedown)
- [onMouseMove](Object3DTransformTools.md#onmousemove)
- [onMouseUp](Object3DTransformTools.md#onmouseup)

## Constructors

### constructor

• **new Object3DTransformTools**(): [`Object3DTransformTools`](Object3DTransformTools.md)

#### Returns

[`Object3DTransformTools`](Object3DTransformTools.md)

#### Overrides

[Object3D](Object3D.md).[constructor](Object3D.md#constructor)

#### Defined in

util/transformUtil/Object3DTransformTools.ts:34

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

### mTarget

• `Protected` **mTarget**: [`Object3D`](Object3D.md)

#### Defined in

util/transformUtil/Object3DTransformTools.ts:27

___

### mTransformMode

• `Protected` **mTransformMode**: [`TransformMode`](../enums/TransformMode.md) = `TransformMode.NONE`

#### Defined in

util/transformUtil/Object3DTransformTools.ts:28

___

### mTransformSpaceType

• `Protected` **mTransformSpaceType**: [`TransformSpaceMode`](../enums/TransformSpaceMode.md) = `TransformSpaceMode.Global`

#### Defined in

util/transformUtil/Object3DTransformTools.ts:29

___

### mControllers

• `Protected` **mControllers**: [`TransformControllerBaseComponent`](TransformControllerBaseComponent.md)[]

#### Defined in

util/transformUtil/Object3DTransformTools.ts:30

___

### mXObj

• **mXObj**: [`Object3D`](Object3D.md)

#### Defined in

util/transformUtil/Object3DTransformTools.ts:31

___

### mYObj

• **mYObj**: [`Object3D`](Object3D.md)

#### Defined in

util/transformUtil/Object3DTransformTools.ts:32

___

### mZObj

• **mZObj**: [`Object3D`](Object3D.md)

#### Defined in

util/transformUtil/Object3DTransformTools.ts:33

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

___

### instance

• `get` **instance**(): [`Object3DTransformTools`](Object3DTransformTools.md)

#### Returns

[`Object3DTransformTools`](Object3DTransformTools.md)

#### Defined in

util/transformUtil/Object3DTransformTools.ts:20

___

### transformMode

• `get` **transformMode**(): [`TransformMode`](../enums/TransformMode.md)

#### Returns

[`TransformMode`](../enums/TransformMode.md)

#### Defined in

util/transformUtil/Object3DTransformTools.ts:58

___

### transformSpaceMode

• `get` **transformSpaceMode**(): [`TransformSpaceMode`](../enums/TransformSpaceMode.md)

#### Returns

[`TransformSpaceMode`](../enums/TransformSpaceMode.md)

#### Defined in

util/transformUtil/Object3DTransformTools.ts:62

___

### target

• `get` **target**(): [`Object3D`](Object3D.md)

#### Returns

[`Object3D`](Object3D.md)

#### Defined in

util/transformUtil/Object3DTransformTools.ts:75

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

### active

▸ **active**(`scene`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scene` | [`Scene3D`](Scene3D.md) |

#### Returns

`void`

#### Defined in

util/transformUtil/Object3DTransformTools.ts:66

___

### unActive

▸ **unActive**(`scene`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scene` | [`Scene3D`](Scene3D.md) |

#### Returns

`void`

#### Defined in

util/transformUtil/Object3DTransformTools.ts:71

___

### selectObject

▸ **selectObject**(`obj`, `transformMode?`, `spaceMode?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`Object3D`](Object3D.md) |
| `transformMode?` | [`TransformMode`](../enums/TransformMode.md) |
| `spaceMode?` | [`TransformSpaceMode`](../enums/TransformSpaceMode.md) |

#### Returns

`void`

#### Defined in

util/transformUtil/Object3DTransformTools.ts:79

___

### selectTransformMode

▸ **selectTransformMode**(`transformMode`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transformMode` | [`TransformMode`](../enums/TransformMode.md) |

#### Returns

`void`

#### Defined in

util/transformUtil/Object3DTransformTools.ts:101

___

### selectTransformSpaceMode

▸ **selectTransformSpaceMode**(`spaceMode`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `spaceMode` | [`TransformSpaceMode`](../enums/TransformSpaceMode.md) |

#### Returns

`void`

#### Defined in

util/transformUtil/Object3DTransformTools.ts:112

___

### activate

▸ **activate**(): `void`

#### Returns

`void`

#### Defined in

util/transformUtil/Object3DTransformTools.ts:120

___

### unactivate

▸ **unactivate**(): `void`

#### Returns

`void`

#### Defined in

util/transformUtil/Object3DTransformTools.ts:149

___

### onKeyDown

▸ **onKeyDown**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`KeyEvent`](KeyEvent.md) |

#### Returns

`void`

#### Defined in

util/transformUtil/Object3DTransformTools.ts:172

___

### onMouseDown

▸ **onMouseDown**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`PointerEvent3D`](PointerEvent3D.md) |

#### Returns

`void`

#### Defined in

util/transformUtil/Object3DTransformTools.ts:195

___

### onMouseMove

▸ **onMouseMove**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`PointerEvent3D`](PointerEvent3D.md) |

#### Returns

`void`

#### Defined in

util/transformUtil/Object3DTransformTools.ts:200

___

### onMouseUp

▸ **onMouseUp**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`PointerEvent3D`](PointerEvent3D.md) |

#### Returns

`void`

#### Defined in

util/transformUtil/Object3DTransformTools.ts:206
