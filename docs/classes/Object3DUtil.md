[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / Object3DUtil

# Class: Object3DUtil

## Table of contents

### Constructors

- [constructor](Object3DUtil.md#constructor)

### Accessors

- [CubeMesh](Object3DUtil.md#cubemesh)
- [SphereMesh](Object3DUtil.md#spheremesh)
- [Sphere](Object3DUtil.md#sphere)

### Methods

- [GetCube](Object3DUtil.md#getcube)
- [GetMaterial](Object3DUtil.md#getmaterial)
- [GetPlane](Object3DUtil.md#getplane)
- [GetSingleCube](Object3DUtil.md#getsinglecube)
- [GetSingleSphere](Object3DUtil.md#getsinglesphere)
- [GetSingleCube2](Object3DUtil.md#getsinglecube2)
- [GetPointLight](Object3DUtil.md#getpointlight)

## Constructors

### constructor

• **new Object3DUtil**(): [`Object3DUtil`](Object3DUtil.md)

#### Returns

[`Object3DUtil`](Object3DUtil.md)

## Accessors

### CubeMesh

• `get` **CubeMesh**(): [`BoxGeometry`](BoxGeometry.md)

#### Returns

[`BoxGeometry`](BoxGeometry.md)

#### Defined in

util/Object3DUtil.ts:35

___

### SphereMesh

• `get` **SphereMesh**(): [`SphereGeometry`](SphereGeometry.md)

#### Returns

[`SphereGeometry`](SphereGeometry.md)

#### Defined in

util/Object3DUtil.ts:40

___

### Sphere

• `get` **Sphere**(): [`Object3D`](Object3D.md)

#### Returns

[`Object3D`](Object3D.md)

#### Defined in

util/Object3DUtil.ts:121

## Methods

### GetCube

▸ **GetCube**(): [`Object3D`](Object3D.md)

#### Returns

[`Object3D`](Object3D.md)

#### Defined in

util/Object3DUtil.ts:45

___

### GetMaterial

▸ **GetMaterial**(`tex`): [`Material`](Material.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tex` | [`Texture`](Texture.md) |

#### Returns

[`Material`](Material.md)

#### Defined in

util/Object3DUtil.ts:55

___

### GetPlane

▸ **GetPlane**(`tex`): [`Object3D`](Object3D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tex` | [`Texture`](Texture.md) |

#### Returns

[`Object3D`](Object3D.md)

#### Defined in

util/Object3DUtil.ts:65

___

### GetSingleCube

▸ **GetSingleCube**(`sizeX`, `sizeY`, `sizeZ`, `r`, `g`, `b`): [`Object3D`](Object3D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sizeX` | `number` |
| `sizeY` | `number` |
| `sizeZ` | `number` |
| `r` | `number` |
| `g` | `number` |
| `b` | `number` |

#### Returns

[`Object3D`](Object3D.md)

#### Defined in

util/Object3DUtil.ts:79

___

### GetSingleSphere

▸ **GetSingleSphere**(`radius`, `r`, `g`, `b`): [`Object3D`](Object3D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `radius` | `number` |
| `r` | `number` |
| `g` | `number` |
| `b` | `number` |

#### Returns

[`Object3D`](Object3D.md)

#### Defined in

util/Object3DUtil.ts:102

___

### GetSingleCube2

▸ **GetSingleCube2**(`mat`, `size?`): [`Object3D`](Object3D.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `mat` | [`Material`](Material.md) | `undefined` |
| `size` | `number` | `10` |

#### Returns

[`Object3D`](Object3D.md)

#### Defined in

util/Object3DUtil.ts:131

___

### GetPointLight

▸ **GetPointLight**(`pos`, `rotation`, `radius`, `r`, `g`, `b`, `intensity?`, `castShadow?`): [`PointLight`](PointLight.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `pos` | [`Vector3`](Vector3.md) | `undefined` |
| `rotation` | [`Vector3`](Vector3.md) | `undefined` |
| `radius` | `number` | `undefined` |
| `r` | `number` | `undefined` |
| `g` | `number` | `undefined` |
| `b` | `number` | `undefined` |
| `intensity` | `number` | `1` |
| `castShadow` | `boolean` | `true` |

#### Returns

[`PointLight`](PointLight.md)

#### Defined in

util/Object3DUtil.ts:142
