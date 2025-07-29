[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / CameraUtil

# Class: CameraUtil

## Table of contents

### Constructors

- [constructor](CameraUtil.md#constructor)

### Methods

- [createCamera3DObject](CameraUtil.md#createcamera3dobject)
- [createCamera3D](CameraUtil.md#createcamera3d)
- [UnProjection](CameraUtil.md#unprojection)
- [Projection](CameraUtil.md#projection)
- [UnProjection2](CameraUtil.md#unprojection2)

## Constructors

### constructor

• **new CameraUtil**(): [`CameraUtil`](CameraUtil.md)

#### Returns

[`CameraUtil`](CameraUtil.md)

## Methods

### createCamera3DObject

▸ **createCamera3DObject**(`parent?`, `name?`): [`Camera3D`](Camera3D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent?` | [`Object3D`](Object3D.md) |
| `name?` | `string` |

#### Returns

[`Camera3D`](Camera3D.md)

#### Defined in

util/CameraUtil.ts:8

___

### createCamera3D

▸ **createCamera3D**(`object3D?`, `parent?`, `name?`): [`Camera3D`](Camera3D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `object3D?` | [`Object3D`](Object3D.md) |
| `parent?` | [`Object3D`](Object3D.md) |
| `name?` | `string` |

#### Returns

[`Camera3D`](Camera3D.md)

#### Defined in

util/CameraUtil.ts:15

___

### UnProjection

▸ **UnProjection**(`sX`, `sY`, `sZ?`, `camera?`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `sX` | `number` | `undefined` |
| `sY` | `number` | `undefined` |
| `sZ` | `number` | `1` |
| `camera?` | [`Camera3D`](Camera3D.md) | `undefined` |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

util/CameraUtil.ts:26

___

### Projection

▸ **Projection**(`point`, `camera`, `target?`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`Vector3`](Vector3.md) |
| `camera` | [`Camera3D`](Camera3D.md) |
| `target?` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

util/CameraUtil.ts:56

___

### UnProjection2

▸ **UnProjection2**(`sceneX`, `sceneY`, `z`, `camera`, `target`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sceneX` | `number` |
| `sceneY` | `number` |
| `z` | `number` |
| `camera` | [`Camera3D`](Camera3D.md) |
| `target` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

util/CameraUtil.ts:69
