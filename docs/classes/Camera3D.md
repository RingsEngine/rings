[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / Camera3D

# Class: Camera3D

Camera3D类表示3D场景中的相机组件。
它支持透视投影和正交投影，并提供视锥体裁剪、阴影计算、坐标转换等功能。
相机是渲染3D场景的视角，决定了场景中哪些部分会被渲染到屏幕上。

## Hierarchy

- [`ComponentBase`](ComponentBase.md)

  ↳ **`Camera3D`**

## Table of contents

### Constructors

- [constructor](Camera3D.md#constructor)

### Properties

- [object3D](Camera3D.md#object3d)
- [\_eventDispatcher](Camera3D.md#_eventdispatcher)
- [\_enable](Camera3D.md#_enable)
- [isDestroyed](Camera3D.md#isdestroyed)
- [fov](Camera3D.md#fov)
- [name](Camera3D.md#name)
- [aspect](Camera3D.md#aspect)
- [near](Camera3D.md#near)
- [far](Camera3D.md#far)
- [left](Camera3D.md#left)
- [right](Camera3D.md#right)
- [top](Camera3D.md#top)
- [bottom](Camera3D.md#bottom)
- [frustumSize](Camera3D.md#frustumsize)
- [viewPort](Camera3D.md#viewport)
- [frustum](Camera3D.md#frustum)
- [sh](Camera3D.md#sh)
- [isShadowCamera](Camera3D.md#isshadowcamera)
- [mainCamera](Camera3D.md#maincamera)
- [lookTarget](Camera3D.md#looktarget)
- [type](Camera3D.md#type)
- [csm](Camera3D.md#csm)
- [cubeShadowCameras](Camera3D.md#cubeshadowcameras)

### Accessors

- [eventDispatcher](Camera3D.md#eventdispatcher)
- [isStart](Camera3D.md#isstart)
- [transform](Camera3D.md#transform)
- [enable](Camera3D.md#enable)
- [projectionMatrix](Camera3D.md#projectionmatrix)
- [enableCSM](Camera3D.md#enablecsm)
- [viewMatrix](Camera3D.md#viewmatrix)
- [shadowViewMatrix](Camera3D.md#shadowviewmatrix)
- [pvMatrix](Camera3D.md#pvmatrix)
- [pvMatrix2](Camera3D.md#pvmatrix2)
- [pvMatrixInv](Camera3D.md#pvmatrixinv)
- [vMatrixInv](Camera3D.md#vmatrixinv)
- [cameraToWorld](Camera3D.md#cameratoworld)
- [ndcToView](Camera3D.md#ndctoview)
- [projectionMatrixInv](Camera3D.md#projectionmatrixinv)
- [jitterFrameIndex](Camera3D.md#jitterframeindex)
- [jitterX](Camera3D.md#jitterx)
- [jitterY](Camera3D.md#jittery)

### Methods

- [start](Camera3D.md#start)
- [stop](Camera3D.md#stop)
- [onEnable](Camera3D.md#onenable)
- [onDisable](Camera3D.md#ondisable)
- [onLateUpdate](Camera3D.md#onlateupdate)
- [onBeforeUpdate](Camera3D.md#onbeforeupdate)
- [onCompute](Camera3D.md#oncompute)
- [onGraphic](Camera3D.md#ongraphic)
- [onParentChange](Camera3D.md#onparentchange)
- [onAddChild](Camera3D.md#onaddchild)
- [onRemoveChild](Camera3D.md#onremovechild)
- [cloneTo](Camera3D.md#cloneto)
- [copyComponent](Camera3D.md#copycomponent)
- [beforeDestroy](Camera3D.md#beforedestroy)
- [destroy](Camera3D.md#destroy)
- [init](Camera3D.md#init)
- [updateProjection](Camera3D.md#updateprojection)
- [getShadowBias](Camera3D.md#getshadowbias)
- [getShadowWorldExtents](Camera3D.md#getshadowworldextents)
- [getCSMShadowBiasScale](Camera3D.md#getcsmshadowbiasscale)
- [getCSMShadowWorldExtents](Camera3D.md#getcsmshadowworldextents)
- [perspective](Camera3D.md#perspective)
- [ortho](Camera3D.md#ortho)
- [orthoOffCenter](Camera3D.md#orthooffcenter)
- [object3DToScreenRay](Camera3D.md#object3dtoscreenray)
- [screenRayToObject3D](Camera3D.md#screenraytoobject3d)
- [unProject](Camera3D.md#unproject)
- [screenPointToRay](Camera3D.md#screenpointtoray)
- [screenPointToWorld](Camera3D.md#screenpointtoworld)
- [worldToScreenPoint](Camera3D.md#worldtoscreenpoint)
- [lookAt](Camera3D.md#lookat)
- [onUpdate](Camera3D.md#onupdate)
- [enableJitterProjection](Camera3D.md#enablejitterprojection)
- [getWorldDirection](Camera3D.md#getworlddirection)

## Constructors

### constructor

• **new Camera3D**(): [`Camera3D`](Camera3D.md)

创建一个新的Camera3D实例

#### Returns

[`Camera3D`](Camera3D.md)

#### Overrides

[ComponentBase](ComponentBase.md).[constructor](ComponentBase.md#constructor)

#### Defined in

core/Camera3D.ts:133

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

### fov

• **fov**: `number` = `60`

相机视野角度（度），用于透视投影

#### Defined in

core/Camera3D.ts:28

___

### name

• **name**: `string`

相机名称

#### Defined in

core/Camera3D.ts:33

___

### aspect

• **aspect**: `number` = `1`

视口宽高比（宽度/高度）

#### Defined in

core/Camera3D.ts:38

___

### near

• **near**: `number` = `1`

近裁剪面距离

#### Defined in

core/Camera3D.ts:43

___

### far

• **far**: `number` = `5000`

远裁剪面距离

#### Defined in

core/Camera3D.ts:48

___

### left

• **left**: `number` = `-100`

正交投影左边界

#### Defined in

core/Camera3D.ts:53

___

### right

• **right**: `number` = `100`

正交投影右边界

#### Defined in

core/Camera3D.ts:58

___

### top

• **top**: `number` = `100`

正交投影上边界

#### Defined in

core/Camera3D.ts:63

___

### bottom

• **bottom**: `number` = `-100`

正交投影下边界

#### Defined in

core/Camera3D.ts:68

___

### frustumSize

• **frustumSize**: `number` = `100`

正交投影视锥体大小

#### Defined in

core/Camera3D.ts:73

___

### viewPort

• **viewPort**: [`Rect`](Rect.md)

相机视口矩形

#### Defined in

core/Camera3D.ts:78

___

### frustum

• **frustum**: [`Frustum`](Frustum.md)

视锥体，用于视锥体裁剪

#### Defined in

core/Camera3D.ts:83

___

### sh

• **sh**: `Float32Array`\<`ArrayBufferLike`\>

球谐光照系数数组

#### Defined in

core/Camera3D.ts:88

___

### isShadowCamera

• **isShadowCamera**: `boolean` = `false`

标记此相机是否为阴影相机

#### Defined in

core/Camera3D.ts:93

___

### mainCamera

• **mainCamera**: [`Camera3D`](Camera3D.md)

#### Defined in

core/Camera3D.ts:105

___

### lookTarget

• **lookTarget**: [`Vector3`](Vector3.md)

#### Defined in

core/Camera3D.ts:111

___

### type

• **type**: [`CameraType`](../enums/CameraType.md) = `CameraType.perspective`

#### Defined in

core/Camera3D.ts:113

___

### csm

• **csm**: [`FrustumCSM`](FrustumCSM.md)

#### Defined in

core/Camera3D.ts:115

___

### cubeShadowCameras

• **cubeShadowCameras**: [`CubeCamera`](CubeCamera.md)[] = `[]`

#### Defined in

core/Camera3D.ts:117

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

### projectionMatrix

• `get` **projectionMatrix**(): [`Matrix4`](Matrix4.md)

#### Returns

[`Matrix4`](Matrix4.md)

#### Defined in

core/Camera3D.ts:107

___

### enableCSM

• `get` **enableCSM**(): `boolean`

#### Returns

`boolean`

#### Defined in

core/Camera3D.ts:119

• `set` **enableCSM**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

core/Camera3D.ts:123

___

### viewMatrix

• `get` **viewMatrix**(): [`Matrix4`](Matrix4.md)

获取视图矩阵
视图矩阵是相机世界矩阵的逆矩阵，用于将世界坐标转换为相机坐标

#### Returns

[`Matrix4`](Matrix4.md)

视图矩阵

#### Defined in

core/Camera3D.ts:311

___

### shadowViewMatrix

• `get` **shadowViewMatrix**(): [`Matrix4`](Matrix4.md)

获取阴影视图矩阵
用于阴影贴图渲染的特殊视图矩阵

#### Returns

[`Matrix4`](Matrix4.md)

阴影视图矩阵

#### Defined in

core/Camera3D.ts:322

___

### pvMatrix

• `get` **pvMatrix**(): [`Matrix4`](Matrix4.md)

获取投影-视图组合矩阵
用于将世界坐标直接转换为裁剪空间坐标

#### Returns

[`Matrix4`](Matrix4.md)

投影-视图矩阵

#### Defined in

core/Camera3D.ts:377

___

### pvMatrix2

• `get` **pvMatrix2**(): [`Matrix4`](Matrix4.md)

获取投影-世界组合矩阵的逆矩阵

#### Returns

[`Matrix4`](Matrix4.md)

投影-世界矩阵的逆矩阵

#### Defined in

core/Camera3D.ts:386

___

### pvMatrixInv

• `get` **pvMatrixInv**(): [`Matrix4`](Matrix4.md)

获取投影-视图矩阵的逆矩阵
用于从裁剪空间坐标转换回世界坐标

#### Returns

[`Matrix4`](Matrix4.md)

投影-视图矩阵的逆矩阵

#### Defined in

core/Camera3D.ts:402

___

### vMatrixInv

• `get` **vMatrixInv**(): [`Matrix4`](Matrix4.md)

获取视图矩阵的逆矩阵
用于从相机空间坐标转换回世界坐标

#### Returns

[`Matrix4`](Matrix4.md)

视图矩阵的逆矩阵

#### Defined in

core/Camera3D.ts:413

___

### cameraToWorld

• `get` **cameraToWorld**(): [`Matrix4`](Matrix4.md)

获取从相机空间到世界空间的变换矩阵

#### Returns

[`Matrix4`](Matrix4.md)

相机到世界的变换矩阵

#### Defined in

core/Camera3D.ts:423

___

### ndcToView

• `get` **ndcToView**(): [`Matrix4`](Matrix4.md)

获取从标准化设备坐标(NDC)到视图空间的变换矩阵

#### Returns

[`Matrix4`](Matrix4.md)

NDC到视图空间的变换矩阵

#### Defined in

core/Camera3D.ts:435

___

### projectionMatrixInv

• `get` **projectionMatrixInv**(): [`Matrix4`](Matrix4.md)

获取投影矩阵的逆矩阵
用于从裁剪空间坐标转换回相机空间坐标

#### Returns

[`Matrix4`](Matrix4.md)

投影矩阵的逆矩阵

#### Defined in

core/Camera3D.ts:447

___

### jitterFrameIndex

• `get` **jitterFrameIndex**(): `number`

#### Returns

`number`

#### Defined in

core/Camera3D.ts:588

___

### jitterX

• `get` **jitterX**(): `number`

#### Returns

`number`

#### Defined in

core/Camera3D.ts:592

___

### jitterY

• `get` **jitterY**(): `number`

#### Returns

`number`

#### Defined in

core/Camera3D.ts:596

## Methods

### start

▸ **start**(): `void`

#### Returns

`void`

#### Inherited from

[ComponentBase](ComponentBase.md).[start](ComponentBase.md#start)

#### Defined in

components/ComponentBase.ts:78

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

[ComponentBase](ComponentBase.md).[stop](ComponentBase.md#stop)

#### Defined in

components/ComponentBase.ts:79

___

### onEnable

▸ **onEnable**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`any`

#### Inherited from

[ComponentBase](ComponentBase.md).[onEnable](ComponentBase.md#onenable)

#### Defined in

components/ComponentBase.ts:80

___

### onDisable

▸ **onDisable**(`view?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view?` | [`View3D`](View3D.md) |

#### Returns

`any`

#### Inherited from

[ComponentBase](ComponentBase.md).[onDisable](ComponentBase.md#ondisable)

#### Defined in

components/ComponentBase.ts:81

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

### destroy

▸ **destroy**(`force?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `force?` | `boolean` |

#### Returns

`void`

#### Inherited from

[ComponentBase](ComponentBase.md).[destroy](ComponentBase.md#destroy)

#### Defined in

components/ComponentBase.ts:139

___

### init

▸ **init**(): `void`

初始化相机
创建射线、视锥体和观察目标
设置视口并更新投影矩阵
监听窗口大小变化事件

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[init](ComponentBase.md#init)

#### Defined in

core/Camera3D.ts:143

___

### updateProjection

▸ **updateProjection**(): `void`

根据当前相机类型更新投影矩阵
透视投影或正交投影

#### Returns

`void`

#### Defined in

core/Camera3D.ts:167

___

### getShadowBias

▸ **getShadowBias**(`depthTexSize`): `number`

计算阴影偏移值，用于阴影贴图采样

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `depthTexSize` | `number` | 深度纹理大小 |

#### Returns

`number`

阴影偏移值

#### Defined in

core/Camera3D.ts:190

___

### getShadowWorldExtents

▸ **getShadowWorldExtents**(): `number`

获取阴影世界空间范围

#### Returns

`number`

阴影世界空间范围值

#### Defined in

core/Camera3D.ts:200

___

### getCSMShadowBiasScale

▸ **getCSMShadowBiasScale**(`shadowCamera`): `number`

获取级联阴影映射(CSM)的阴影偏移缩放因子
根据当前相机和基础相机的深度范围计算缩放因子

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shadowCamera` | [`Camera3D`](Camera3D.md) | 阴影相机 |

#### Returns

`number`

阴影偏移缩放因子

#### Defined in

core/Camera3D.ts:216

___

### getCSMShadowWorldExtents

▸ **getCSMShadowWorldExtents**(`index`): `number`

获取级联阴影映射(CSM)指定级联的世界空间范围

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 级联索引 |

#### Returns

`number`

指定级联的世界空间范围值

#### Defined in

core/Camera3D.ts:230

___

### perspective

▸ **perspective**(`fov`, `aspect`, `near`, `far`): `void`

设置透视投影参数

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fov` | `number` | 视野角度（度） |
| `aspect` | `number` | 宽高比 |
| `near` | `number` | 近裁剪面距离 |
| `far` | `number` | 远裁剪面距离 |

#### Returns

`void`

#### Defined in

core/Camera3D.ts:241

___

### ortho

▸ **ortho**(`frustumSize`, `near`, `far`): `void`

设置正交投影参数（基于尺寸）

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `frustumSize` | `number` | 视锥体大小 |
| `near` | `number` | 近裁剪面距离 |
| `far` | `number` | 远裁剪面距离 |

#### Returns

`void`

#### Defined in

core/Camera3D.ts:261

___

### orthoOffCenter

▸ **orthoOffCenter**(`left`, `right`, `bottom`, `top`, `near`, `far`): `void`

设置正交投影参数（基于边界）

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `left` | `number` | 左边界 |
| `right` | `number` | 右边界 |
| `bottom` | `number` | 下边界 |
| `top` | `number` | 上边界 |
| `near` | `number` | 近裁剪面距离 |
| `far` | `number` | 远裁剪面距离 |

#### Returns

`void`

#### Defined in

core/Camera3D.ts:281

___

### object3DToScreenRay

▸ **object3DToScreenRay**(`n`, `target?`): [`Vector3`](Vector3.md)

将3D对象坐标转换为屏幕坐标

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `n` | [`Vector3`](Vector3.md) | `undefined` | 3D对象坐标 |
| `target` | [`Vector3`](Vector3.md) | `null` | 目标向量，如果为null则创建新向量 |

#### Returns

[`Vector3`](Vector3.md)

屏幕坐标

#### Defined in

core/Camera3D.ts:335

___

### screenRayToObject3D

▸ **screenRayToObject3D**(`n`, `target?`): [`Vector3`](Vector3.md)

将屏幕坐标转换为3D对象坐标

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `n` | [`Vector3`](Vector3.md) | `undefined` | 屏幕坐标 |
| `target` | [`Vector3`](Vector3.md) | `null` | 目标向量，如果为null则创建新向量 |

#### Returns

[`Vector3`](Vector3.md)

3D对象坐标

#### Defined in

core/Camera3D.ts:356

___

### unProject

▸ **unProject**(`nX`, `nY`, `sZ`, `target?`): [`Vector3`](Vector3.md)

将屏幕坐标反投影到世界空间

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nX` | `number` | 屏幕X坐标 |
| `nY` | `number` | 屏幕Y坐标 |
| `sZ` | `number` | 深度值 |
| `target?` | [`Vector3`](Vector3.md) | 目标向量，如果为null则创建新向量 |

#### Returns

[`Vector3`](Vector3.md)

世界空间中的向量

#### Defined in

core/Camera3D.ts:461

___

### screenPointToRay

▸ **screenPointToRay**(`viewPortPosX`, `viewPortPosY`): [`Ray`](Ray.md)

从屏幕坐标创建射线
用于拾取和碰撞检测

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `viewPortPosX` | `number` | 视口X坐标 |
| `viewPortPosY` | `number` | 视口Y坐标 |

#### Returns

[`Ray`](Ray.md)

从相机位置指向屏幕点的射线

#### Defined in

core/Camera3D.ts:507

___

### screenPointToWorld

▸ **screenPointToWorld**(`viewPortPosX`, `viewPortPosY`, `z`): [`Vector3`](Vector3.md)

将屏幕坐标转换为世界坐标

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `viewPortPosX` | `number` | 视口X坐标 |
| `viewPortPosY` | `number` | 视口Y坐标 |
| `z` | `number` | 深度值 |

#### Returns

[`Vector3`](Vector3.md)

世界空间中的坐标

#### Defined in

core/Camera3D.ts:528

___

### worldToScreenPoint

▸ **worldToScreenPoint**(`point`, `target?`): [`Vector3`](Vector3.md)

将世界坐标转换为屏幕坐标

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | [`Vector3`](Vector3.md) | 世界空间中的点 |
| `target?` | [`Vector3`](Vector3.md) | 目标向量，如果为null则创建新向量 |

#### Returns

[`Vector3`](Vector3.md)

屏幕空间中的坐标

#### Defined in

core/Camera3D.ts:543

___

### lookAt

▸ **lookAt**(`pos`, `target`, `up?`): `void`

使相机朝向指定目标点

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `pos` | [`Vector3`](Vector3.md) | `undefined` | 相机位置 |
| `target` | [`Vector3`](Vector3.md) | `undefined` | 目标点位置 |
| `up` | [`Vector3`](Vector3.md) | `Vector3.Y_AXIS` | 上方向向量，默认为Y轴正方向 |

#### Returns

`void`

#### Defined in

core/Camera3D.ts:554

___

### onUpdate

▸ **onUpdate**(): `void`

相机更新方法，每帧调用
更新抖动投影矩阵、视锥体和级联阴影映射

#### Returns

`void`

#### Overrides

[ComponentBase](ComponentBase.md).[onUpdate](ComponentBase.md#onupdate)

#### Defined in

core/Camera3D.ts:563

___

### enableJitterProjection

▸ **enableJitterProjection**(`value`): `void`

启用或禁用投影抖动
用于实现时间性抗锯齿(TAA)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `boolean` | 是否启用投影抖动 |

#### Returns

`void`

#### Defined in

core/Camera3D.ts:605

___

### getWorldDirection

▸ **getWorldDirection**(`target?`): [`Vector3`](Vector3.md)

获取相机在世界空间中的朝向向量

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target?` | [`Vector3`](Vector3.md) | 目标向量，如果为null则创建新向量 |

#### Returns

[`Vector3`](Vector3.md)

相机的朝向向量（已归一化）

#### Defined in

core/Camera3D.ts:665
