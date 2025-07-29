[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / CameraControllerBase

# Class: CameraControllerBase

## Table of contents

### Constructors

- [constructor](CameraControllerBase.md#constructor)

### Properties

- [\_autoUpdate](CameraControllerBase.md#_autoupdate)
- [\_target](CameraControllerBase.md#_target)
- [\_lookAtObject](CameraControllerBase.md#_lookatobject)
- [\_origin](CameraControllerBase.md#_origin)
- [\_speed](CameraControllerBase.md#_speed)

### Accessors

- [target](CameraControllerBase.md#target)
- [lookAtObject](CameraControllerBase.md#lookatobject)
- [speed](CameraControllerBase.md#speed)

### Methods

- [update](CameraControllerBase.md#update)

## Constructors

### constructor

• **new CameraControllerBase**(`targetObject?`, `lookAtObject?`): [`CameraControllerBase`](CameraControllerBase.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `targetObject` | [`Object3D`](Object3D.md) | `null` |
| `lookAtObject` | [`Object3D`](Object3D.md) | `null` |

#### Returns

[`CameraControllerBase`](CameraControllerBase.md)

#### Defined in

components/controller/CameraControllerBase.ts:11

## Properties

### \_autoUpdate

• `Protected` **\_autoUpdate**: `boolean` = `true`

#### Defined in

components/controller/CameraControllerBase.ts:5

___

### \_target

• `Protected` **\_target**: [`Object3D`](Object3D.md)

#### Defined in

components/controller/CameraControllerBase.ts:6

___

### \_lookAtObject

• `Protected` **\_lookAtObject**: [`Object3D`](Object3D.md)

#### Defined in

components/controller/CameraControllerBase.ts:7

___

### \_origin

• `Protected` **\_origin**: [`Vector3`](Vector3.md)

#### Defined in

components/controller/CameraControllerBase.ts:8

___

### \_speed

• `Protected` **\_speed**: `number` = `300`

#### Defined in

components/controller/CameraControllerBase.ts:9

## Accessors

### target

• `get` **target**(): [`Object3D`](Object3D.md)

#### Returns

[`Object3D`](Object3D.md)

#### Defined in

components/controller/CameraControllerBase.ts:19

• `set` **target**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | [`Object3D`](Object3D.md) |

#### Returns

`void`

#### Defined in

components/controller/CameraControllerBase.ts:23

___

### lookAtObject

• `get` **lookAtObject**(): [`Object3D`](Object3D.md)

#### Returns

[`Object3D`](Object3D.md)

#### Defined in

components/controller/CameraControllerBase.ts:28

• `set` **lookAtObject**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | [`Object3D`](Object3D.md) |

#### Returns

`void`

#### Defined in

components/controller/CameraControllerBase.ts:32

___

### speed

• `get` **speed**(): `number`

#### Returns

`number`

#### Defined in

components/controller/CameraControllerBase.ts:37

• `set` **speed**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `number` |

#### Returns

`void`

#### Defined in

components/controller/CameraControllerBase.ts:41

## Methods

### update

▸ **update**(): `void`

#### Returns

`void`

#### Defined in

components/controller/CameraControllerBase.ts:45
