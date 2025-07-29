[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / Object3D

# Class: Object3D

## Hierarchy

- [`Entity`](Entity.md)

  ↳ **`Object3D`**

  ↳↳ [`CubeCamera`](CubeCamera.md)

  ↳↳ [`PointShadowCubeCamera`](PointShadowCubeCamera.md)

  ↳↳ [`Scene3D`](Scene3D.md)

  ↳↳ [`ViewQuad`](ViewQuad.md)

  ↳↳ [`InstancedMesh`](InstancedMesh.md)

  ↳↳ [`Probe`](Probe.md)

  ↳↳ [`AxisObject`](AxisObject.md)

  ↳↳ [`GridObject`](GridObject.md)

  ↳↳ [`Object3DTransformTools`](Object3DTransformTools.md)

## Table of contents

### Constructors

- [constructor](Object3D.md#constructor)

### Properties

- [name](Object3D.md#name)
- [\_instanceID](Object3D.md#_instanceid)
- [transform](Object3D.md#transform)
- [renderNode](Object3D.md#rendernode)
- [entityChildren](Object3D.md#entitychildren)
- [components](Object3D.md#components)
- [waitDisposeComponents](Object3D.md#waitdisposecomponents)
- [\_bound](Object3D.md#_bound)
- [\_boundWorld](Object3D.md#_boundworld)
- [\_isBoundChange](Object3D.md#_isboundchange)
- [\_isScene3D](Object3D.md#_isscene3d)
- [prefabRef](Object3D.md#prefabref)
- [serializeTag](Object3D.md#serializetag)
- [listeners](Object3D.md#listeners)
- [data](Object3D.md#data)

### Accessors

- [instanceID](Object3D.md#instanceid)
- [dispose](Object3D.md#dispose)
- [numChildren](Object3D.md#numchildren)
- [bound](Object3D.md#bound)
- [isScene3D](Object3D.md#isscene3d)
- [localPosition](Object3D.md#localposition)
- [localRotation](Object3D.md#localrotation)
- [localScale](Object3D.md#localscale)
- [localQuaternion](Object3D.md#localquaternion)
- [parent](Object3D.md#parent)
- [parentObject](Object3D.md#parentobject)
- [x](Object3D.md#x)
- [y](Object3D.md#y)
- [z](Object3D.md#z)
- [scaleX](Object3D.md#scalex)
- [scaleY](Object3D.md#scaley)
- [scaleZ](Object3D.md#scalez)
- [rotationX](Object3D.md#rotationx)
- [rotationY](Object3D.md#rotationy)
- [rotationZ](Object3D.md#rotationz)

### Methods

- [getObjectByName](Object3D.md#getobjectbyname)
- [addChild](Object3D.md#addchild)
- [removeChild](Object3D.md#removechild)
- [removeAllChild](Object3D.md#removeallchild)
- [removeSelf](Object3D.md#removeself)
- [removeChildByIndex](Object3D.md#removechildbyindex)
- [hasChild](Object3D.md#haschild)
- [removeFromParent](Object3D.md#removefromparent)
- [getChildByIndex](Object3D.md#getchildbyindex)
- [getChildByName](Object3D.md#getchildbyname)
- [update](Object3D.md#update)
- [onTransformLocalChange](Object3D.md#ontransformlocalchange)
- [waitUpdate](Object3D.md#waitupdate)
- [noticeComponents](Object3D.md#noticecomponents)
- [forChild](Object3D.md#forchild)
- [addComponent](Object3D.md#addcomponent)
- [getOrAddComponent](Object3D.md#getoraddcomponent)
- [removeComponent](Object3D.md#removecomponent)
- [hasComponent](Object3D.md#hascomponent)
- [getComponent](Object3D.md#getcomponent)
- [getComponentFromParent](Object3D.md#getcomponentfromparent)
- [getComponentsInChild](Object3D.md#getcomponentsinchild)
- [getComponents](Object3D.md#getcomponents)
- [getComponentsExt](Object3D.md#getcomponentsext)
- [getComponentsByProperty](Object3D.md#getcomponentsbyproperty)
- [clone](Object3D.md#clone)
- [instantiate](Object3D.md#instantiate)
- [notifyChange](Object3D.md#notifychange)
- [fixedUpdate](Object3D.md#fixedupdate)
- [lateUpdate](Object3D.md#lateupdate)
- [traverse](Object3D.md#traverse)
- [destroy](Object3D.md#destroy)
- [dispatchEvent](Object3D.md#dispatchevent)
- [addEventListener](Object3D.md#addeventlistener)
- [removeEventListener](Object3D.md#removeeventlistener)
- [removeEventListenerAt](Object3D.md#removeeventlistenerat)
- [removeAllEventListener](Object3D.md#removealleventlistener)
- [containEventListener](Object3D.md#containeventlistener)
- [hasEventListener](Object3D.md#haseventlistener)

## Constructors

### constructor

• **new Object3D**(): [`Object3D`](Object3D.md)

#### Returns

[`Object3D`](Object3D.md)

#### Overrides

[Entity](Entity.md).[constructor](Entity.md#constructor)

#### Defined in

core/entities/Object3D.ts:18

## Properties

### name

• **name**: `string` = `""`

#### Inherited from

[Entity](Entity.md).[name](Entity.md#name)

#### Defined in

core/entities/Entity.ts:13

___

### \_instanceID

• `Protected` `Readonly` **\_instanceID**: `string` = `""`

#### Inherited from

[Entity](Entity.md).[_instanceID](Entity.md#_instanceid)

#### Defined in

core/entities/Entity.ts:14

___

### transform

• **transform**: [`Transform`](Transform.md)

#### Inherited from

[Entity](Entity.md).[transform](Entity.md#transform)

#### Defined in

core/entities/Entity.ts:19

___

### renderNode

• **renderNode**: [`RenderNode`](RenderNode.md)

#### Inherited from

[Entity](Entity.md).[renderNode](Entity.md#rendernode)

#### Defined in

core/entities/Entity.ts:20

___

### entityChildren

• **entityChildren**: [`Entity`](Entity.md)[]

#### Inherited from

[Entity](Entity.md).[entityChildren](Entity.md#entitychildren)

#### Defined in

core/entities/Entity.ts:21

___

### components

• **components**: `Map`\<`any`, [`IComponent`](../interfaces/IComponent.md)\>

#### Inherited from

[Entity](Entity.md).[components](Entity.md#components)

#### Defined in

core/entities/Entity.ts:22

___

### waitDisposeComponents

• `Protected` **waitDisposeComponents**: [`IComponent`](../interfaces/IComponent.md)[]

#### Inherited from

[Entity](Entity.md).[waitDisposeComponents](Entity.md#waitdisposecomponents)

#### Defined in

core/entities/Entity.ts:23

___

### \_bound

• `Protected` **\_bound**: [`IBound`](../interfaces/IBound.md)

#### Inherited from

[Entity](Entity.md).[_bound](Entity.md#_bound)

#### Defined in

core/entities/Entity.ts:24

___

### \_boundWorld

• `Protected` **\_boundWorld**: [`IBound`](../interfaces/IBound.md)

#### Inherited from

[Entity](Entity.md).[_boundWorld](Entity.md#_boundworld)

#### Defined in

core/entities/Entity.ts:25

___

### \_isBoundChange

• `Protected` **\_isBoundChange**: `boolean` = `true`

#### Inherited from

[Entity](Entity.md).[_isBoundChange](Entity.md#_isboundchange)

#### Defined in

core/entities/Entity.ts:26

___

### \_isScene3D

• `Protected` **\_isScene3D**: `boolean`

#### Defined in

core/entities/Object3D.ts:14

___

### prefabRef

• `Optional` **prefabRef**: `string`

#### Defined in

core/entities/Object3D.ts:15

___

### serializeTag

• `Optional` **serializeTag**: [`SerializeTag`](../modules.md#serializetag)

#### Defined in

core/entities/Object3D.ts:16

___

### listeners

• `Protected` **listeners**: `any` = `{}`

#### Inherited from

[Entity](Entity.md).[listeners](Entity.md#listeners)

#### Defined in

event/CEventDispatcher.ts:5

___

### data

• **data**: `any`

#### Inherited from

[Entity](Entity.md).[data](Entity.md#data)

#### Defined in

event/CEventDispatcher.ts:6

## Accessors

### instanceID

• `get` **instanceID**(): `string`

#### Returns

`string`

#### Inherited from

Entity.instanceID

#### Defined in

core/entities/Entity.ts:16

___

### dispose

• `get` **dispose**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Entity.dispose

#### Defined in

core/entities/Entity.ts:29

___

### numChildren

• `get` **numChildren**(): `number`

#### Returns

`number`

#### Inherited from

Entity.numChildren

#### Defined in

core/entities/Entity.ts:60

___

### bound

• `get` **bound**(): [`IBound`](../interfaces/IBound.md)

#### Returns

[`IBound`](../interfaces/IBound.md)

#### Inherited from

Entity.bound

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

Entity.bound

#### Defined in

core/entities/Entity.ts:166

___

### isScene3D

• `get` **isScene3D**(): `boolean`

#### Returns

`boolean`

#### Defined in

core/entities/Object3D.ts:28

___

### localPosition

• `get` **localPosition**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

core/entities/Object3D.ts:197

• `set` **localPosition**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

core/entities/Object3D.ts:201

___

### localRotation

• `get` **localRotation**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

core/entities/Object3D.ts:205

• `set` **localRotation**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

core/entities/Object3D.ts:209

___

### localScale

• `get` **localScale**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

core/entities/Object3D.ts:213

• `set` **localScale**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

core/entities/Object3D.ts:217

___

### localQuaternion

• `get` **localQuaternion**(): [`Quaternion`](Quaternion.md)

#### Returns

[`Quaternion`](Quaternion.md)

#### Defined in

core/entities/Object3D.ts:221

• `set` **localQuaternion**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Quaternion`](Quaternion.md) |

#### Returns

`void`

#### Defined in

core/entities/Object3D.ts:225

___

### parent

• `get` **parent**(): [`Transform`](Transform.md)

#### Returns

[`Transform`](Transform.md)

#### Defined in

core/entities/Object3D.ts:233

___

### parentObject

• `get` **parentObject**(): [`Object3D`](Object3D.md)

#### Returns

[`Object3D`](Object3D.md)

#### Defined in

core/entities/Object3D.ts:237

___

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Defined in

core/entities/Object3D.ts:245

• `set` **x**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

core/entities/Object3D.ts:241

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Defined in

core/entities/Object3D.ts:253

• `set` **y**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

core/entities/Object3D.ts:249

___

### z

• `get` **z**(): `number`

#### Returns

`number`

#### Defined in

core/entities/Object3D.ts:261

• `set` **z**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

core/entities/Object3D.ts:257

___

### scaleX

• `get` **scaleX**(): `number`

#### Returns

`number`

#### Defined in

core/entities/Object3D.ts:269

• `set` **scaleX**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

core/entities/Object3D.ts:265

___

### scaleY

• `get` **scaleY**(): `number`

#### Returns

`number`

#### Defined in

core/entities/Object3D.ts:277

• `set` **scaleY**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

core/entities/Object3D.ts:273

___

### scaleZ

• `get` **scaleZ**(): `number`

#### Returns

`number`

#### Defined in

core/entities/Object3D.ts:285

• `set` **scaleZ**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

core/entities/Object3D.ts:281

___

### rotationX

• `get` **rotationX**(): `number`

#### Returns

`number`

#### Defined in

core/entities/Object3D.ts:293

• `set` **rotationX**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

core/entities/Object3D.ts:289

___

### rotationY

• `get` **rotationY**(): `number`

#### Returns

`number`

#### Defined in

core/entities/Object3D.ts:301

• `set` **rotationY**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

core/entities/Object3D.ts:297

___

### rotationZ

• `get` **rotationZ**(): `number`

#### Returns

`number`

#### Defined in

core/entities/Object3D.ts:309

• `set` **rotationZ**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

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

[Entity](Entity.md).[getObjectByName](Entity.md#getobjectbyname)

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

[Entity](Entity.md).[addChild](Entity.md#addchild)

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

[Entity](Entity.md).[removeChild](Entity.md#removechild)

#### Defined in

core/entities/Entity.ts:84

___

### removeAllChild

▸ **removeAllChild**(): `void`

#### Returns

`void`

#### Inherited from

[Entity](Entity.md).[removeAllChild](Entity.md#removeallchild)

#### Defined in

core/entities/Entity.ts:96

___

### removeSelf

▸ **removeSelf**(): `this`

#### Returns

`this`

#### Inherited from

[Entity](Entity.md).[removeSelf](Entity.md#removeself)

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

[Entity](Entity.md).[removeChildByIndex](Entity.md#removechildbyindex)

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

[Entity](Entity.md).[hasChild](Entity.md#haschild)

#### Defined in

core/entities/Entity.ts:114

___

### removeFromParent

▸ **removeFromParent**(): `this`

#### Returns

`this`

#### Inherited from

[Entity](Entity.md).[removeFromParent](Entity.md#removefromparent)

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

[Entity](Entity.md).[getChildByIndex](Entity.md#getchildbyindex)

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

[Entity](Entity.md).[getChildByName](Entity.md#getchildbyname)

#### Defined in

core/entities/Entity.ts:135

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Inherited from

[Entity](Entity.md).[update](Entity.md#update)

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

[Entity](Entity.md).[onTransformLocalChange](Entity.md#ontransformlocalchange)

#### Defined in

core/entities/Entity.ts:157

___

### waitUpdate

▸ **waitUpdate**(): `void`

#### Returns

`void`

#### Inherited from

[Entity](Entity.md).[waitUpdate](Entity.md#waitupdate)

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

[Entity](Entity.md).[noticeComponents](Entity.md#noticecomponents)

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

#### Defined in

core/entities/Object3D.ts:143

___

### clone

▸ **clone**(): [`Object3D`](Object3D.md)

#### Returns

[`Object3D`](Object3D.md)

#### Defined in

core/entities/Object3D.ts:176

___

### instantiate

▸ **instantiate**(): [`Object3D`](Object3D.md)

#### Returns

[`Object3D`](Object3D.md)

#### Overrides

[Entity](Entity.md).[instantiate](Entity.md#instantiate)

#### Defined in

core/entities/Object3D.ts:180

___

### notifyChange

▸ **notifyChange**(): `void`

#### Returns

`void`

#### Defined in

core/entities/Object3D.ts:229

___

### fixedUpdate

▸ **fixedUpdate**(): `void`

#### Returns

`void`

#### Defined in

core/entities/Object3D.ts:313

___

### lateUpdate

▸ **lateUpdate**(): `void`

#### Returns

`void`

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

#### Overrides

[Entity](Entity.md).[destroy](Entity.md#destroy)

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

[Entity](Entity.md).[dispatchEvent](Entity.md#dispatchevent)

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

[Entity](Entity.md).[addEventListener](Entity.md#addeventlistener)

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

[Entity](Entity.md).[removeEventListener](Entity.md#removeeventlistener)

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

[Entity](Entity.md).[removeEventListenerAt](Entity.md#removeeventlistenerat)

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

[Entity](Entity.md).[removeAllEventListener](Entity.md#removealleventlistener)

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

[Entity](Entity.md).[containEventListener](Entity.md#containeventlistener)

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

[Entity](Entity.md).[hasEventListener](Entity.md#haseventlistener)

#### Defined in

event/CEventDispatcher.ts:155
