[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / UniformNode

# Class: UniformNode

## Table of contents

### Constructors

- [constructor](UniformNode.md#constructor)

### Properties

- [size](UniformNode.md#size)
- [memoryInfo](UniformNode.md#memoryinfo)
- [bindOnChange](UniformNode.md#bindonchange)

### Accessors

- [data](UniformNode.md#data)
- [color](UniformNode.md#color)
- [value](UniformNode.md#value)
- [vector2](UniformNode.md#vector2)
- [vector3](UniformNode.md#vector3)
- [vector4](UniformNode.md#vector4)

### Methods

- [getColor](UniformNode.md#getcolor)
- [onChange](UniformNode.md#onchange)
- [float32Array](UniformNode.md#float32array)
- [update](UniformNode.md#update)

## Constructors

### constructor

• **new UniformNode**(`value`): [`UniformNode`](UniformNode.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

[`UniformNode`](UniformNode.md)

#### Defined in

gfx/graphics/webGpu/core/uniforms/UniformNode.ts:19

## Properties

### size

• **size**: `number`

#### Defined in

gfx/graphics/webGpu/core/uniforms/UniformNode.ts:9

___

### memoryInfo

• **memoryInfo**: [`MemoryInfo`](MemoryInfo.md)

#### Defined in

gfx/graphics/webGpu/core/uniforms/UniformNode.ts:10

___

### bindOnChange

• **bindOnChange**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

gfx/graphics/webGpu/core/uniforms/UniformNode.ts:11

## Accessors

### data

• `get` **data**(): `any`

#### Returns

`any`

#### Defined in

gfx/graphics/webGpu/core/uniforms/UniformNode.ts:23

• `set` **data**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/core/uniforms/UniformNode.ts:27

___

### color

• `get` **color**(): [`Color`](Color.md)

#### Returns

[`Color`](Color.md)

#### Defined in

gfx/graphics/webGpu/core/uniforms/UniformNode.ts:75

• `set` **color**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Color`](Color.md) |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/core/uniforms/UniformNode.ts:80

___

### value

• `get` **value**(): `number`

#### Returns

`number`

#### Defined in

gfx/graphics/webGpu/core/uniforms/UniformNode.ts:101

• `set` **value**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/core/uniforms/UniformNode.ts:105

___

### vector2

• `get` **vector2**(): [`Vector2`](Vector2.md)

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

gfx/graphics/webGpu/core/uniforms/UniformNode.ts:113

• `set` **vector2**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector2`](Vector2.md) |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/core/uniforms/UniformNode.ts:117

___

### vector3

• `get` **vector3**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

gfx/graphics/webGpu/core/uniforms/UniformNode.ts:128

• `set` **vector3**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/core/uniforms/UniformNode.ts:132

___

### vector4

• `get` **vector4**(): [`Vector4`](Vector4.md)

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

gfx/graphics/webGpu/core/uniforms/UniformNode.ts:145

• `set` **vector4**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Vector4`](Vector4.md) |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/core/uniforms/UniformNode.ts:149

## Methods

### getColor

▸ **getColor**(`ret`): [`Color`](Color.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ret` | [`Color`](Color.md) |

#### Returns

[`Color`](Color.md)

#### Defined in

gfx/graphics/webGpu/core/uniforms/UniformNode.ts:66

___

### onChange

▸ **onChange**(): `void`

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/core/uniforms/UniformNode.ts:170

___

### float32Array

▸ **float32Array**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Float32Array`\<`ArrayBufferLike`\> |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/core/uniforms/UniformNode.ts:176

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/core/uniforms/UniformNode.ts:181
