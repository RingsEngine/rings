[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / IndicesGPUBuffer

# Class: IndicesGPUBuffer

用于几何体索引的缓冲区
可在计算着色器或CPU代码中写入
使用标志: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST | GPUBufferUsage.INDEX | GPUBufferUsage.INDIRECT

## Hierarchy

- [`GPUBufferBase`](GPUBufferBase.md)

  ↳ **`IndicesGPUBuffer`**

## Table of contents

### Constructors

- [constructor](IndicesGPUBuffer.md#constructor)

### Properties

- [bufferType](IndicesGPUBuffer.md#buffertype)
- [buffer](IndicesGPUBuffer.md#buffer)
- [memory](IndicesGPUBuffer.md#memory)
- [memoryNodes](IndicesGPUBuffer.md#memorynodes)
- [seek](IndicesGPUBuffer.md#seek)
- [outFloat32Array](IndicesGPUBuffer.md#outfloat32array)
- [byteSize](IndicesGPUBuffer.md#bytesize)
- [usage](IndicesGPUBuffer.md#usage)
- [visibility](IndicesGPUBuffer.md#visibility)
- [mapAsyncBuffersOutstanding](IndicesGPUBuffer.md#mapasyncbuffersoutstanding)
- [mapAsyncReady](IndicesGPUBuffer.md#mapasyncready)
- [indicesNode](IndicesGPUBuffer.md#indicesnode)

### Methods

- [debug](IndicesGPUBuffer.md#debug)
- [reset](IndicesGPUBuffer.md#reset)
- [setBoolean](IndicesGPUBuffer.md#setboolean)
- [readBoole](IndicesGPUBuffer.md#readboole)
- [setFloat](IndicesGPUBuffer.md#setfloat)
- [getFloat](IndicesGPUBuffer.md#getfloat)
- [setInt8](IndicesGPUBuffer.md#setint8)
- [getInt8](IndicesGPUBuffer.md#getint8)
- [setInt16](IndicesGPUBuffer.md#setint16)
- [getInt16](IndicesGPUBuffer.md#getint16)
- [setInt32](IndicesGPUBuffer.md#setint32)
- [getInt32](IndicesGPUBuffer.md#getint32)
- [setUint8](IndicesGPUBuffer.md#setuint8)
- [getUint8](IndicesGPUBuffer.md#getuint8)
- [setUint16](IndicesGPUBuffer.md#setuint16)
- [getUint16](IndicesGPUBuffer.md#getuint16)
- [setUint32](IndicesGPUBuffer.md#setuint32)
- [getUint32](IndicesGPUBuffer.md#getuint32)
- [setVector2](IndicesGPUBuffer.md#setvector2)
- [getVector2](IndicesGPUBuffer.md#getvector2)
- [setVector3](IndicesGPUBuffer.md#setvector3)
- [getVector3](IndicesGPUBuffer.md#getvector3)
- [setVector4](IndicesGPUBuffer.md#setvector4)
- [getVector4](IndicesGPUBuffer.md#getvector4)
- [setVector4Array](IndicesGPUBuffer.md#setvector4array)
- [setColor](IndicesGPUBuffer.md#setcolor)
- [getColor](IndicesGPUBuffer.md#getcolor)
- [setColorArray](IndicesGPUBuffer.md#setcolorarray)
- [setMatrix](IndicesGPUBuffer.md#setmatrix)
- [setMatrixArray](IndicesGPUBuffer.md#setmatrixarray)
- [setArray](IndicesGPUBuffer.md#setarray)
- [setFloat32Array](IndicesGPUBuffer.md#setfloat32array)
- [setInt32Array](IndicesGPUBuffer.md#setint32array)
- [setUint32Array](IndicesGPUBuffer.md#setuint32array)
- [setStruct](IndicesGPUBuffer.md#setstruct)
- [setStructArray](IndicesGPUBuffer.md#setstructarray)
- [clean](IndicesGPUBuffer.md#clean)
- [apply](IndicesGPUBuffer.md#apply)
- [mapAsyncWrite](IndicesGPUBuffer.md#mapasyncwrite)
- [destroy](IndicesGPUBuffer.md#destroy)
- [createBuffer](IndicesGPUBuffer.md#createbuffer)
- [resizeBuffer](IndicesGPUBuffer.md#resizebuffer)
- [createNewBuffer](IndicesGPUBuffer.md#createnewbuffer)
- [createBufferByStruct](IndicesGPUBuffer.md#createbufferbystruct)
- [readBuffer](IndicesGPUBuffer.md#readbuffer)
- [createIndicesBuffer](IndicesGPUBuffer.md#createindicesbuffer)

## Constructors

### constructor

• **new IndicesGPUBuffer**(`data?`): [`IndicesGPUBuffer`](IndicesGPUBuffer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ArrayBufferData`](../modules.md#arraybufferdata) |

#### Returns

[`IndicesGPUBuffer`](IndicesGPUBuffer.md)

#### Overrides

[GPUBufferBase](GPUBufferBase.md).[constructor](GPUBufferBase.md#constructor)

#### Defined in

gfx/graphics/webGpu/core/buffer/IndicesGPUBuffer.ts:16

## Properties

### bufferType

• **bufferType**: [`GPUBufferType`](../enums/GPUBufferType.md)

#### Inherited from

[GPUBufferBase](GPUBufferBase.md).[bufferType](GPUBufferBase.md#buffertype)

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:16

___

### buffer

• **buffer**: `GPUBuffer`

#### Inherited from

[GPUBufferBase](GPUBufferBase.md).[buffer](GPUBufferBase.md#buffer)

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:17

___

### memory

• **memory**: [`MemoryDO`](MemoryDO.md)

#### Inherited from

[GPUBufferBase](GPUBufferBase.md).[memory](GPUBufferBase.md#memory)

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:18

___

### memoryNodes

• **memoryNodes**: `Map`\<`string` \| `number`, [`MemoryInfo`](MemoryInfo.md)\>

#### Inherited from

[GPUBufferBase](GPUBufferBase.md).[memoryNodes](GPUBufferBase.md#memorynodes)

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:19

___

### seek

• **seek**: `number`

#### Inherited from

[GPUBufferBase](GPUBufferBase.md).[seek](GPUBufferBase.md#seek)

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:20

___

### outFloat32Array

• **outFloat32Array**: `Float32Array`\<`ArrayBufferLike`\>

#### Inherited from

[GPUBufferBase](GPUBufferBase.md).[outFloat32Array](GPUBufferBase.md#outfloat32array)

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:21

___

### byteSize

• **byteSize**: `number`

#### Inherited from

[GPUBufferBase](GPUBufferBase.md).[byteSize](GPUBufferBase.md#bytesize)

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:22

___

### usage

• **usage**: `number`

#### Inherited from

[GPUBufferBase](GPUBufferBase.md).[usage](GPUBufferBase.md#usage)

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:23

___

### visibility

• **visibility**: `number`

#### Inherited from

[GPUBufferBase](GPUBufferBase.md).[visibility](GPUBufferBase.md#visibility)

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:24

___

### mapAsyncBuffersOutstanding

• `Protected` **mapAsyncBuffersOutstanding**: `number` = `0`

#### Inherited from

[GPUBufferBase](GPUBufferBase.md).[mapAsyncBuffersOutstanding](GPUBufferBase.md#mapasyncbuffersoutstanding)

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:26

___

### mapAsyncReady

• `Protected` **mapAsyncReady**: `GPUBuffer`[]

#### Inherited from

[GPUBufferBase](GPUBufferBase.md).[mapAsyncReady](GPUBufferBase.md#mapasyncready)

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:27

___

### indicesNode

• **indicesNode**: [`MemoryInfo`](MemoryInfo.md)

#### Defined in

gfx/graphics/webGpu/core/buffer/IndicesGPUBuffer.ts:15

## Methods

### debug

▸ **debug**(): `void`

#### Returns

`void`

#### Inherited from

[GPUBufferBase](GPUBufferBase.md).[debug](GPUBufferBase.md#debug)

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

#### Inherited from

[GPUBufferBase](GPUBufferBase.md).[reset](GPUBufferBase.md#reset)

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

#### Inherited from

[GPUBufferBase](GPUBufferBase.md).[setBoolean](GPUBufferBase.md#setboolean)

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

#### Inherited from

[GPUBufferBase](GPUBufferBase.md).[readBoole](GPUBufferBase.md#readboole)

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

#### Inherited from

[GPUBufferBase](GPUBufferBase.md).[setFloat](GPUBufferBase.md#setfloat)

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

#### Inherited from

[GPUBufferBase](GPUBufferBase.md).[getFloat](GPUBufferBase.md#getfloat)

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

#### Inherited from

[GPUBufferBase](GPUBufferBase.md).[setInt8](GPUBufferBase.md#setint8)

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

#### Inherited from

[GPUBufferBase](GPUBufferBase.md).[getInt8](GPUBufferBase.md#getint8)

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

#### Inherited from

[GPUBufferBase](GPUBufferBase.md).[setInt16](GPUBufferBase.md#setint16)

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

#### Inherited from

[GPUBufferBase](GPUBufferBase.md).[getInt16](GPUBufferBase.md#getint16)

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

#### Inherited from

[GPUBufferBase](GPUBufferBase.md).[setInt32](GPUBufferBase.md#setint32)

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

#### Inherited from

[GPUBufferBase](GPUBufferBase.md).[getInt32](GPUBufferBase.md#getint32)

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

#### Inherited from

[GPUBufferBase](GPUBufferBase.md).[setUint8](GPUBufferBase.md#setuint8)

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

#### Inherited from

[GPUBufferBase](GPUBufferBase.md).[getUint8](GPUBufferBase.md#getuint8)

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

#### Inherited from

[GPUBufferBase](GPUBufferBase.md).[setUint16](GPUBufferBase.md#setuint16)

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

#### Inherited from

[GPUBufferBase](GPUBufferBase.md).[getUint16](GPUBufferBase.md#getuint16)

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

#### Inherited from

[GPUBufferBase](GPUBufferBase.md).[setUint32](GPUBufferBase.md#setuint32)

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

#### Inherited from

[GPUBufferBase](GPUBufferBase.md).[getUint32](GPUBufferBase.md#getuint32)

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

#### Inherited from

[GPUBufferBase](GPUBufferBase.md).[setVector2](GPUBufferBase.md#setvector2)

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

#### Inherited from

[GPUBufferBase](GPUBufferBase.md).[getVector2](GPUBufferBase.md#getvector2)

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

#### Inherited from

[GPUBufferBase](GPUBufferBase.md).[setVector3](GPUBufferBase.md#setvector3)

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

#### Inherited from

[GPUBufferBase](GPUBufferBase.md).[getVector3](GPUBufferBase.md#getvector3)

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

#### Inherited from

[GPUBufferBase](GPUBufferBase.md).[setVector4](GPUBufferBase.md#setvector4)

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

#### Inherited from

[GPUBufferBase](GPUBufferBase.md).[getVector4](GPUBufferBase.md#getvector4)

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

#### Inherited from

[GPUBufferBase](GPUBufferBase.md).[setVector4Array](GPUBufferBase.md#setvector4array)

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

#### Inherited from

[GPUBufferBase](GPUBufferBase.md).[setColor](GPUBufferBase.md#setcolor)

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

#### Inherited from

[GPUBufferBase](GPUBufferBase.md).[getColor](GPUBufferBase.md#getcolor)

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

#### Inherited from

[GPUBufferBase](GPUBufferBase.md).[setColorArray](GPUBufferBase.md#setcolorarray)

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

#### Inherited from

[GPUBufferBase](GPUBufferBase.md).[setMatrix](GPUBufferBase.md#setmatrix)

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

#### Inherited from

[GPUBufferBase](GPUBufferBase.md).[setMatrixArray](GPUBufferBase.md#setmatrixarray)

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

#### Inherited from

[GPUBufferBase](GPUBufferBase.md).[setArray](GPUBufferBase.md#setarray)

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

#### Inherited from

[GPUBufferBase](GPUBufferBase.md).[setFloat32Array](GPUBufferBase.md#setfloat32array)

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

#### Inherited from

[GPUBufferBase](GPUBufferBase.md).[setInt32Array](GPUBufferBase.md#setint32array)

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

#### Inherited from

[GPUBufferBase](GPUBufferBase.md).[setUint32Array](GPUBufferBase.md#setuint32array)

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

#### Inherited from

[GPUBufferBase](GPUBufferBase.md).[setStruct](GPUBufferBase.md#setstruct)

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

#### Inherited from

[GPUBufferBase](GPUBufferBase.md).[setStructArray](GPUBufferBase.md#setstructarray)

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:397

___

### clean

▸ **clean**(): `void`

#### Returns

`void`

#### Inherited from

[GPUBufferBase](GPUBufferBase.md).[clean](GPUBufferBase.md#clean)

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:409

___

### apply

▸ **apply**(): `void`

#### Returns

`void`

#### Inherited from

[GPUBufferBase](GPUBufferBase.md).[apply](GPUBufferBase.md#apply)

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

#### Inherited from

[GPUBufferBase](GPUBufferBase.md).[mapAsyncWrite](GPUBufferBase.md#mapasyncwrite)

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

#### Inherited from

[GPUBufferBase](GPUBufferBase.md).[destroy](GPUBufferBase.md#destroy)

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

#### Inherited from

[GPUBufferBase](GPUBufferBase.md).[createBuffer](GPUBufferBase.md#createbuffer)

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

#### Inherited from

[GPUBufferBase](GPUBufferBase.md).[resizeBuffer](GPUBufferBase.md#resizebuffer)

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

#### Inherited from

[GPUBufferBase](GPUBufferBase.md).[createNewBuffer](GPUBufferBase.md#createnewbuffer)

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

#### Inherited from

[GPUBufferBase](GPUBufferBase.md).[createBufferByStruct](GPUBufferBase.md#createbufferbystruct)

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:558

___

### readBuffer

▸ **readBuffer**(): `Float32Array`\<`ArrayBufferLike`\>

#### Returns

`Float32Array`\<`ArrayBufferLike`\>

#### Inherited from

[GPUBufferBase](GPUBufferBase.md).[readBuffer](GPUBufferBase.md#readbuffer)

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:590

▸ **readBuffer**(`promise`): `Float32Array`\<`ArrayBufferLike`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `promise` | ``false`` |

#### Returns

`Float32Array`\<`ArrayBufferLike`\>

#### Inherited from

[GPUBufferBase](GPUBufferBase.md).[readBuffer](GPUBufferBase.md#readbuffer)

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:591

▸ **readBuffer**(`promise`): `Promise`\<`Float32Array`\<`ArrayBufferLike`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `promise` | ``true`` |

#### Returns

`Promise`\<`Float32Array`\<`ArrayBufferLike`\>\>

#### Inherited from

[GPUBufferBase](GPUBufferBase.md).[readBuffer](GPUBufferBase.md#readbuffer)

#### Defined in

gfx/graphics/webGpu/core/buffer/GPUBufferBase.ts:592

___

### createIndicesBuffer

▸ **createIndicesBuffer**(`usage`, `data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `usage` | `number` |
| `data?` | [`ArrayBufferData`](../modules.md#arraybufferdata) |

#### Returns

`void`

#### Defined in

gfx/graphics/webGpu/core/buffer/IndicesGPUBuffer.ts:28
