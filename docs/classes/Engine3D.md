[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / Engine3D

# Class: Engine3D

Engine3D是Rings WebGPU引擎的主类，负责初始化WebGPU上下文、管理渲染循环和处理输入。
它提供了一系列静态方法和属性，用于控制引擎的行为和访问引擎的各个组件。

## Table of contents

### Constructors

- [constructor](Engine3D.md#constructor)

### Properties

- [res](Engine3D.md#res)
- [inputSystem](Engine3D.md#inputsystem)
- [views](Engine3D.md#views)
- [setting](Engine3D.md#setting)
- [renderJobs](Engine3D.md#renderjobs)

### Accessors

- [frameRate](Engine3D.md#framerate)
- [size](Engine3D.md#size)
- [aspect](Engine3D.md#aspect)
- [width](Engine3D.md#width)
- [height](Engine3D.md#height)

### Methods

- [init](Engine3D.md#init)
- [startRenderView](Engine3D.md#startrenderview)
- [startRenderViews](Engine3D.md#startrenderviews)
- [getRenderJob](Engine3D.md#getrenderjob)
- [pause](Engine3D.md#pause)
- [resume](Engine3D.md#resume)

## Constructors

### constructor

• **new Engine3D**(): [`Engine3D`](Engine3D.md)

#### Returns

[`Engine3D`](Engine3D.md)

## Properties

### res

▪ `Static` **res**: [`Res`](Res.md)

资源管理器实例，用于加载和管理引擎所需的各种资源

#### Defined in

Engine3D.ts:33

___

### inputSystem

▪ `Static` **inputSystem**: [`InputSystem`](InputSystem.md)

输入系统实例，用于处理用户输入（如键盘、鼠标、触摸等）

#### Defined in

Engine3D.ts:38

___

### views

▪ `Static` **views**: [`View3D`](View3D.md)[]

当前活跃的视图列表

#### Defined in

Engine3D.ts:43

___

### setting

▪ `Static` **setting**: [`EngineSetting`](../modules.md#enginesetting)

#### Defined in

Engine3D.ts:139

___

### renderJobs

▪ `Static` **renderJobs**: `Map`\<[`View3D`](View3D.md), [`RendererJob`](RendererJob.md)\>

#### Defined in

Engine3D.ts:340

## Accessors

### frameRate

• `get` **frameRate**(): `number`

获取当前设置的帧率

#### Returns

`number`

当前帧率值

#### Defined in

Engine3D.ts:91

• `set` **frameRate**(`value`): `void`

设置引擎的目标帧率

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 目标帧率，设置为360或更高表示不限制帧率 |

#### Returns

`void`

#### Defined in

Engine3D.ts:99

___

### size

• `get` **size**(): `number`[]

获取当前渲染上下文的尺寸

#### Returns

`number`[]

包含宽度和高度的数组 [width, height]

#### Defined in

Engine3D.ts:111

___

### aspect

• `get` **aspect**(): `number`

获取当前渲染上下文的宽高比

#### Returns

`number`

宽高比值

#### Defined in

Engine3D.ts:119

___

### width

• `get` **width**(): `number`

获取当前渲染上下文的宽度

#### Returns

`number`

宽度值（像素）

#### Defined in

Engine3D.ts:127

___

### height

• `get` **height**(): `number`

获取当前渲染上下文的高度

#### Returns

`number`

高度值（像素）

#### Defined in

Engine3D.ts:135

## Methods

### init

▸ **init**(`descriptor?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `descriptor` | `Object` |
| `descriptor.canvasConfig?` | [`CanvasConfig`](../modules.md#canvasconfig) |
| `descriptor.beforeRender?` | `Function` |
| `descriptor.renderLoop?` | `Function` |
| `descriptor.lateRender?` | `Function` |
| `descriptor.engineSetting?` | [`EngineSetting`](../modules.md#enginesetting) |

#### Returns

`Promise`\<`void`\>

#### Defined in

Engine3D.ts:342

___

### startRenderView

▸ **startRenderView**(`view`): [`ForwardRenderJob`](ForwardRenderJob.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |

#### Returns

[`ForwardRenderJob`](ForwardRenderJob.md)

#### Defined in

Engine3D.ts:418

___

### startRenderViews

▸ **startRenderViews**(`views`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `views` | [`View3D`](View3D.md)[] |

#### Returns

`void`

#### Defined in

Engine3D.ts:426

___

### getRenderJob

▸ **getRenderJob**(`view`): [`RendererJob`](RendererJob.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |

#### Returns

[`RendererJob`](RendererJob.md)

#### Defined in

Engine3D.ts:435

___

### pause

▸ **pause**(): `void`

#### Returns

`void`

#### Defined in

Engine3D.ts:439

___

### resume

▸ **resume**(): `void`

#### Returns

`void`

#### Defined in

Engine3D.ts:446
