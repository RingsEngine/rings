[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / GPUBufferBase

# Class: GPUBufferBase

## Hierarchy

- **`GPUBufferBase`**

  ↳ [`ComputeGPUBuffer`](ComputeGPUBuffer.md)

  ↳ [`IndicesGPUBuffer`](IndicesGPUBuffer.md)

  ↳ [`MaterialDataUniformGPUBuffer`](MaterialDataUniformGPUBuffer.md)

  ↳ [`MatrixGPUBuffer`](MatrixGPUBuffer.md)

  ↳ [`StorageGPUBuffer`](StorageGPUBuffer.md)

  ↳ [`StructStorageGPUBuffer`](StructStorageGPUBuffer.md)

  ↳ [`UniformGPUBuffer`](UniformGPUBuffer.md)

  ↳ [`VertexGPUBuffer`](VertexGPUBuffer.md)

## Table of contents

### Constructors

- [constructor](GPUBufferBase.md#constructor)

### Properties

- [bufferType](GPUBufferBase.md#buffertype)
- [buffer](GPUBufferBase.md#buffer)
- [memory](GPUBufferBase.md#memory)
- [memoryNodes](GPUBufferBase.md#memorynodes)
- [seek](GPUBufferBase.md#seek)
- [outFloat32Array](GPUBufferBase.md#outfloat32array)
- [byteSize](GPUBufferBase.md#bytesize)
- [usage](GPUBufferBase.md#usage)
- [visibility](GPUBufferBase.md#visibility)
- [mapAsyncBuffersOutstanding](GPUBufferBase.md#mapasyncbuffersoutstanding)
- [mapAsyncReady](GPUBufferBase.md#mapasyncready)

### Methods

- [debug](GPUBufferBase.md#debug)
- [reset](GPUBufferBase.md#reset)
- [setBoolean](GPUBufferBase.md#setboolean)
- [readBoole](GPUBufferBase.md#readboole)
- [setFloat](GPUBufferBase.md#setfloat)
- [getFloat](GPUBufferBase.md#getfloat)
- [setInt8](GPUBufferBase.md#setint8)
- [getInt8](GPUBufferBase.md#getint8)
- [setInt16](GPUBufferBase.md#setint16)
- [getInt16](GPUBufferBase.md#getint16)
- [setInt32](GPUBufferBase.md#setint32)
- [getInt32](GPUBufferBase.md#getint32)
- [setUint8](GPUBufferBase.md#setuint8)
- [getUint8](GPUBufferBase.md#getuint8)
- [setUint16](GPUBufferBase.md#setuint16)
- [getUint16](GPUBufferBase.md#getuint16)
- [setUint32](GPUBufferBase.md#setuint32)
- [getUint32](GPUBufferBase.md#getuint32)
- [setVector2](GPUBufferBase.md#setvector2)
- [getVector2](GPUBufferBase.md#getvector2)
- [setVector3](GPUBufferBase.md#setvector3)
- [getVector3](GPUBufferBase.md#getvector3)
- [setVector4](GPUBufferBase.md#setvector4)
- [getVector4](GPUBufferBase.md#getvector4)
- [setVector4Array](GPUBufferBase.md#setvector4array)
- [setColor](GPUBufferBase.md#setcolor)
- [getColor](GPUBufferBase.md#getcolor)
- [setColorArray](GPUBufferBase.md#setcolorarray)
- [setMatrix](GPUBufferBase.md#setmatrix)
- [setMatrixArray](GPUBufferBase.md#setmatrixarray)
- [setArray](GPUBufferBase.md#setarray)
- [setFloat32Array](GPUBufferBase.md#setfloat32array)
- [setInt32Array](GPUBufferBase.md#setint32array)
- [setUint32Array](GPUBufferBase.md#setuint32array)
- [setStruct](GPUBufferBase.md#setstruct)
- [setStructArray](GPUBufferBase.md#setstructarray)
- [clean](GPUBufferBase.md#clean)
- [apply](GPUBufferBase.md#apply)
- [mapAsyncWrite](GPUBufferBase.md#mapasyncwrite)
- [destroy](GPUBufferBase.md#destroy)
- [createBuffer](GPUBufferBase.md#createbuffer)
- [resizeBuffer](GPUBufferBase.md#resizebuffer)
- [createNewBuffer](GPUBufferBase.md#createnewbuffer)
- [createBufferByStruct](GPUBufferBase.md#createbufferbystruct)
- [readBuffer](GPUBufferBase.md#readbuffer)

## Constructors

### constructor

• **new GPUBufferBase**(): [`GPUBufferBase`](GPUBufferBase.md)

#### Returns

[`GPUBufferBase`](GPUBufferBase.md)

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:31

## Properties

### bufferType

• **bufferType**: [`GPUBufferType`](../enums/GPUBufferType.md)

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:16

___

### buffer

• **buffer**: `GPUBuffer`

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:17

___

### memory

• **memory**: [`MemoryDO`](MemoryDO.md)

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:18

___

### memoryNodes

• **memoryNodes**: `Map`\<`string` \| `number`, [`MemoryInfo`](MemoryInfo.md)\>

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:19

___

### seek

• **seek**: `number`

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:20

___

### outFloat32Array

• **outFloat32Array**: `Float32Array`\<`ArrayBufferLike`\>

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:21

___

### byteSize

• **byteSize**: `number`

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:22

___

### usage

• **usage**: `number`

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:23

___

### visibility

• **visibility**: `number`

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:24

___

### mapAsyncBuffersOutstanding

• `Protected` **mapAsyncBuffersOutstanding**: `number` = `0`

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:26

___

### mapAsyncReady

• `Protected` **mapAsyncReady**: `GPUBuffer`[]

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:27

## Methods

### debug

▸ **debug**(): `void`

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:35

___

### reset

▸ **reset**(`clean?`, `size?`, `data?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `clean` | `boolean` | `false` |
| `size` | `number` | `0` |
| `data?` | `Float32Array`\<`ArrayBufferLike`\> | `undefined` |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:37

___

### setBoolean

▸ **setBoolean**(`name`, `v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `v` | `boolean` |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:45

___

### readBoole

▸ **readBoole**(`name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:54

___

### setFloat

▸ **setFloat**(`name`, `v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `v` | `number` |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:62

___

### getFloat

▸ **getFloat**(`name`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`number`

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:71

___

### setInt8

▸ **setInt8**(`name`, `v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `v` | `number` |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:79

___

### getInt8

▸ **getInt8**(`name`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`number`

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:88

___

### setInt16

▸ **setInt16**(`name`, `v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `v` | `number` |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:96

___

### getInt16

▸ **getInt16**(`name`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`number`

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:105

___

### setInt32

▸ **setInt32**(`name`, `v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `v` | `number` |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:113

___

### getInt32

▸ **getInt32**(`name`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`number`

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:122

___

### setUint8

▸ **setUint8**(`name`, `v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `v` | `number` |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:130

___

### getUint8

▸ **getUint8**(`name`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`number`

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:139

___

### setUint16

▸ **setUint16**(`name`, `v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `v` | `number` |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:147

___

### getUint16

▸ **getUint16**(`name`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`number`

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:156

___

### setUint32

▸ **setUint32**(`name`, `v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `v` | `number` |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:164

___

### getUint32

▸ **getUint32**(`name`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`number`

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:173

___

### setVector2

▸ **setVector2**(`name`, `v2`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `v2` | [`Vector2`](Vector2.md) |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:181

___

### getVector2

▸ **getVector2**(`name`): [`Vector2`](Vector2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:190

___

### setVector3

▸ **setVector3**(`name`, `v3`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `v3` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:198

___

### getVector3

▸ **getVector3**(`name`): [`Vector3`](Vector3.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:207

___

### setVector4

▸ **setVector4**(`name`, `v4`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `v4` | [`Quaternion`](Quaternion.md) \| [`Vector4`](Vector4.md) |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:215

___

### getVector4

▸ **getVector4**(`name`): [`Vector4`](Vector4.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:224

___

### setVector4Array

▸ **setVector4Array**(`name`, `v4Array`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `v4Array` | [`Vector3`](Vector3.md)[] \| [`Vector4`](Vector4.md)[] \| [`Quaternion`](Quaternion.md)[] |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:232

___

### setColor

▸ **setColor**(`name`, `color`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `color` | [`Color`](Color.md) |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:244

___

### getColor

▸ **getColor**(`name`): [`Color`](Color.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`Color`](Color.md)

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:253

___

### setColorArray

▸ **setColorArray**(`name`, `colorArray`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `colorArray` | [`Color`](Color.md)[] |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:261

___

### setMatrix

▸ **setMatrix**(`name`, `mat`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `mat` | [`Matrix4`](Matrix4.md) |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:270

___

### setMatrixArray

▸ **setMatrixArray**(`name`, `mats`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `mats` | [`Matrix4`](Matrix4.md)[] |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:280

___

### setArray

▸ **setArray**(`name`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `data` | `number`[] |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:292

___

### setFloat32Array

▸ **setFloat32Array**(`name`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `data` | `Float32Array`\<`ArrayBufferLike`\> |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:301

___

### setInt32Array

▸ **setInt32Array**(`name`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `data` | `Int32Array`\<`ArrayBufferLike`\> |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:310

___

### setUint32Array

▸ **setUint32Array**(`name`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `data` | `Uint32Array`\<`ArrayBufferLike`\> |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:319

___

### setStruct

▸ **setStruct**\<`T`\>(`c`, `index`, `data`, `property?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Struct`](Struct.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | () => `T` |
| `index` | `number` |
| `data` | `any` |
| `property?` | `string` |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:328

___

### setStructArray

▸ **setStructArray**\<`T`\>(`c`, `dataList`, `property?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Struct`](Struct.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | () => `T` |
| `dataList` | `any`[] |
| `property?` | `string` |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:397

___

### clean

▸ **clean**(): `void`

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:409

___

### apply

▸ **apply**(): `void`

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:413

___

### mapAsyncWrite

▸ **mapAsyncWrite**(`floatArray`, `len`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `floatArray` | `FloatArray` |
| `len` | `number` |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:421

___

### destroy

▸ **destroy**(`force?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `force?` | `boolean` |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:474

___

### createBuffer

▸ **createBuffer**(`usage`, `size`, `data?`, `debugLabel?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `usage` | `number` |
| `size` | `number` |
| `data?` | [`ArrayBufferData`](../modules.md#arraybufferdata) |
| `debugLabel?` | `string` |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:503

___

### resizeBuffer

▸ **resizeBuffer**(`size`, `data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |
| `data?` | [`ArrayBufferData`](../modules.md#arraybufferdata) |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:536

___

### createNewBuffer

▸ **createNewBuffer**(`usage`, `size`): `GPUBuffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `usage` | `number` |
| `size` | `number` |

#### Returns

`GPUBuffer`

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:540

___

### createBufferByStruct

▸ **createBufferByStruct**\<`T`\>(`usage`, `struct`, `count`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Struct`](Struct.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `usage` | `number` |
| `struct` | () => `T` |
| `count` | `number` |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:558

___

### readBuffer

▸ **readBuffer**(): `Float32Array`\<`ArrayBufferLike`\>

#### Returns

`Float32Array`\<`ArrayBufferLike`\>

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:590

▸ **readBuffer**(`promise`): `Float32Array`\<`ArrayBufferLike`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `promise` | ``false`` |

#### Returns

`Float32Array`\<`ArrayBufferLike`\>

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:591

▸ **readBuffer**(`promise`): `Promise`\<`Float32Array`\<`ArrayBufferLike`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `promise` | ``true`` |

#### Returns

`Promise`\<`Float32Array`\<`ArrayBufferLike`\>\>

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:592
