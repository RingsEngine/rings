[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / MemoryInfo

# Class: MemoryInfo

## Table of contents

### Constructors

- [constructor](MemoryInfo.md#constructor)

### Properties

- [byteOffset](MemoryInfo.md#byteoffset)
- [byteSize](MemoryInfo.md#bytesize)
- [offset](MemoryInfo.md#offset)
- [dataBytes](MemoryInfo.md#databytes)

### Accessors

- [x](MemoryInfo.md#x)
- [y](MemoryInfo.md#y)
- [z](MemoryInfo.md#z)
- [w](MemoryInfo.md#w)

### Methods

- [setX](MemoryInfo.md#setx)
- [setXY](MemoryInfo.md#setxy)
- [setXYZ](MemoryInfo.md#setxyz)
- [setXYZW](MemoryInfo.md#setxyzw)
- [setVector2Array](MemoryInfo.md#setvector2array)
- [setVector3Array](MemoryInfo.md#setvector3array)
- [setVector4Array](MemoryInfo.md#setvector4array)
- [setColorArray](MemoryInfo.md#setcolorarray)
- [setInt8](MemoryInfo.md#setint8)
- [getInt8](MemoryInfo.md#getint8)
- [setInt16](MemoryInfo.md#setint16)
- [getInt16](MemoryInfo.md#getint16)
- [setInt32](MemoryInfo.md#setint32)
- [getInt32](MemoryInfo.md#getint32)
- [setFloat](MemoryInfo.md#setfloat)
- [getFloat](MemoryInfo.md#getfloat)
- [setUint8](MemoryInfo.md#setuint8)
- [getUint8](MemoryInfo.md#getuint8)
- [setUint16](MemoryInfo.md#setuint16)
- [getUint16](MemoryInfo.md#getuint16)
- [setUint32](MemoryInfo.md#setuint32)
- [getUint32](MemoryInfo.md#getuint32)
- [setArray](MemoryInfo.md#setarray)
- [setFloat32Array](MemoryInfo.md#setfloat32array)
- [setFloatArray](MemoryInfo.md#setfloatarray)
- [setArrayBuffer](MemoryInfo.md#setarraybuffer)
- [setInt8Array](MemoryInfo.md#setint8array)
- [setInt16Array](MemoryInfo.md#setint16array)
- [setInt32Array](MemoryInfo.md#setint32array)
- [setUint8Array](MemoryInfo.md#setuint8array)
- [setUint16Array](MemoryInfo.md#setuint16array)
- [setUint32Array](MemoryInfo.md#setuint32array)
- [setData](MemoryInfo.md#setdata)
- [setVector2](MemoryInfo.md#setvector2)
- [setVector3](MemoryInfo.md#setvector3)
- [setVector4](MemoryInfo.md#setvector4)
- [setColor](MemoryInfo.md#setcolor)
- [getData](MemoryInfo.md#getdata)
- [writeFloat](MemoryInfo.md#writefloat)
- [writeInt8](MemoryInfo.md#writeint8)
- [writeInt16](MemoryInfo.md#writeint16)
- [writeInt32](MemoryInfo.md#writeint32)
- [writeUint8](MemoryInfo.md#writeuint8)
- [writeUint16](MemoryInfo.md#writeuint16)
- [writeUint32](MemoryInfo.md#writeuint32)
- [writeVector2](MemoryInfo.md#writevector2)
- [writeVector3](MemoryInfo.md#writevector3)
- [writeVector4](MemoryInfo.md#writevector4)
- [writeRGBColor](MemoryInfo.md#writergbcolor)
- [writeArray](MemoryInfo.md#writearray)
- [writeFloat32Array](MemoryInfo.md#writefloat32array)
- [writeInt8Array](MemoryInfo.md#writeint8array)
- [writeInt16Array](MemoryInfo.md#writeint16array)
- [writeInt32Array](MemoryInfo.md#writeint32array)
- [writeUint8Array](MemoryInfo.md#writeuint8array)
- [writeUint16Array](MemoryInfo.md#writeuint16array)
- [writeUint32Array](MemoryInfo.md#writeuint32array)
- [reset](MemoryInfo.md#reset)
- [destroy](MemoryInfo.md#destroy)

## Constructors

### constructor

• **new MemoryInfo**(): [`MemoryInfo`](MemoryInfo.md)

#### Returns

[`MemoryInfo`](MemoryInfo.md)

## Properties

### byteOffset

• **byteOffset**: `number`

#### Defined in

core/pool/memory/MemoryInfo.ts:9

___

### byteSize

• **byteSize**: `number`

#### Defined in

core/pool/memory/MemoryInfo.ts:10

___

### offset

• **offset**: `number` = `0`

#### Defined in

core/pool/memory/MemoryInfo.ts:11

___

### dataBytes

• **dataBytes**: `DataView`\<`ArrayBufferLike`\>

#### Defined in

core/pool/memory/MemoryInfo.ts:12

## Accessors

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Defined in

core/pool/memory/MemoryInfo.ts:14

• `set` **x**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

core/pool/memory/MemoryInfo.ts:18

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Defined in

core/pool/memory/MemoryInfo.ts:22

• `set` **y**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

core/pool/memory/MemoryInfo.ts:26

___

### z

• `get` **z**(): `number`

#### Returns

`number`

#### Defined in

core/pool/memory/MemoryInfo.ts:30

• `set` **z**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

core/pool/memory/MemoryInfo.ts:34

___

### w

• `get` **w**(): `number`

#### Returns

`number`

#### Defined in

core/pool/memory/MemoryInfo.ts:38

• `set` **w**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

core/pool/memory/MemoryInfo.ts:42

## Methods

### setX

▸ **setX**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

#### Returns

`void`

#### Defined in

core/pool/memory/MemoryInfo.ts:46

___

### setXY

▸ **setXY**(`x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Defined in

core/pool/memory/MemoryInfo.ts:50

___

### setXYZ

▸ **setXYZ**(`x`, `y`, `z`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |

#### Returns

`void`

#### Defined in

core/pool/memory/MemoryInfo.ts:55

___

### setXYZW

▸ **setXYZW**(`x`, `y`, `z`, `w`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |
| `w` | `number` |

#### Returns

`void`

#### Defined in

core/pool/memory/MemoryInfo.ts:61

___

### setVector2Array

▸ **setVector2Array**(`vs`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vs` | [`Vector2`](Vector2.md)[] |

#### Returns

`void`

#### Defined in

core/pool/memory/MemoryInfo.ts:68

___

### setVector3Array

▸ **setVector3Array**(`vs`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vs` | [`Vector3`](Vector3.md)[] |

#### Returns

`void`

#### Defined in

core/pool/memory/MemoryInfo.ts:84

___

### setVector4Array

▸ **setVector4Array**(`vs`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vs` | [`Vector3`](Vector3.md)[] \| [`Vector4`](Vector4.md)[] \| [`Quaternion`](Quaternion.md)[] |

#### Returns

`void`

#### Defined in

core/pool/memory/MemoryInfo.ts:105

___

### setColorArray

▸ **setColorArray**(`colorArray`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `colorArray` | [`Color`](Color.md)[] |

#### Returns

`void`

#### Defined in

core/pool/memory/MemoryInfo.ts:131

___

### setInt8

▸ **setInt8**(`v`, `index?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `v` | `number` | `undefined` |
| `index` | `number` | `0` |

#### Returns

`void`

#### Defined in

core/pool/memory/MemoryInfo.ts:157

___

### getInt8

▸ **getInt8**(`index?`): `number`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `index` | `number` | `0` |

#### Returns

`number`

#### Defined in

core/pool/memory/MemoryInfo.ts:161

___

### setInt16

▸ **setInt16**(`v`, `index?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `v` | `number` | `undefined` |
| `index` | `number` | `0` |

#### Returns

`void`

#### Defined in

core/pool/memory/MemoryInfo.ts:165

___

### getInt16

▸ **getInt16**(`index?`): `number`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `index` | `number` | `0` |

#### Returns

`number`

#### Defined in

core/pool/memory/MemoryInfo.ts:169

___

### setInt32

▸ **setInt32**(`v`, `index?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `v` | `number` | `undefined` |
| `index` | `number` | `0` |

#### Returns

`void`

#### Defined in

core/pool/memory/MemoryInfo.ts:173

___

### getInt32

▸ **getInt32**(`index?`): `number`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `index` | `number` | `0` |

#### Returns

`number`

#### Defined in

core/pool/memory/MemoryInfo.ts:177

___

### setFloat

▸ **setFloat**(`v`, `index?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `v` | `number` | `undefined` |
| `index` | `number` | `0` |

#### Returns

`void`

#### Defined in

core/pool/memory/MemoryInfo.ts:181

___

### getFloat

▸ **getFloat**(`index?`): `number`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `index` | `number` | `0` |

#### Returns

`number`

#### Defined in

core/pool/memory/MemoryInfo.ts:185

___

### setUint8

▸ **setUint8**(`v`, `index?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `v` | `number` | `undefined` |
| `index` | `number` | `0` |

#### Returns

`void`

#### Defined in

core/pool/memory/MemoryInfo.ts:192

___

### getUint8

▸ **getUint8**(`index?`): `number`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `index` | `number` | `0` |

#### Returns

`number`

#### Defined in

core/pool/memory/MemoryInfo.ts:196

___

### setUint16

▸ **setUint16**(`v`, `index?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `v` | `number` | `undefined` |
| `index` | `number` | `0` |

#### Returns

`void`

#### Defined in

core/pool/memory/MemoryInfo.ts:200

___

### getUint16

▸ **getUint16**(`index?`): `number`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `index` | `number` | `0` |

#### Returns

`number`

#### Defined in

core/pool/memory/MemoryInfo.ts:204

___

### setUint32

▸ **setUint32**(`v`, `index?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `v` | `number` | `undefined` |
| `index` | `number` | `0` |

#### Returns

`void`

#### Defined in

core/pool/memory/MemoryInfo.ts:211

___

### getUint32

▸ **getUint32**(`index?`): `number`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `index` | `number` | `0` |

#### Returns

`number`

#### Defined in

core/pool/memory/MemoryInfo.ts:215

___

### setArray

▸ **setArray**(`index`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `data` | `number`[] |

#### Returns

`void`

#### Defined in

core/pool/memory/MemoryInfo.ts:222

___

### setFloat32Array

▸ **setFloat32Array**(`index`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `data` | `Float32Array`\<`ArrayBufferLike`\> |

#### Returns

`void`

#### Defined in

core/pool/memory/MemoryInfo.ts:233

___

### setFloatArray

▸ **setFloatArray**(`index`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `value` | `FloatArray` |

#### Returns

`void`

#### Defined in

core/pool/memory/MemoryInfo.ts:242

___

### setArrayBuffer

▸ **setArrayBuffer**(`index`, `arrayBuffer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `arrayBuffer` | `ArrayBuffer` |

#### Returns

`void`

#### Defined in

core/pool/memory/MemoryInfo.ts:259

___

### setInt8Array

▸ **setInt8Array**(`index`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `data` | `Int8Array`\<`ArrayBufferLike`\> |

#### Returns

`void`

#### Defined in

core/pool/memory/MemoryInfo.ts:278

___

### setInt16Array

▸ **setInt16Array**(`index`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `data` | `Int16Array`\<`ArrayBufferLike`\> |

#### Returns

`void`

#### Defined in

core/pool/memory/MemoryInfo.ts:286

___

### setInt32Array

▸ **setInt32Array**(`index`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `data` | `Int32Array`\<`ArrayBufferLike`\> |

#### Returns

`void`

#### Defined in

core/pool/memory/MemoryInfo.ts:294

___

### setUint8Array

▸ **setUint8Array**(`index`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `data` | `Uint8Array`\<`ArrayBufferLike`\> |

#### Returns

`void`

#### Defined in

core/pool/memory/MemoryInfo.ts:302

___

### setUint16Array

▸ **setUint16Array**(`index`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `data` | `Uint16Array`\<`ArrayBufferLike`\> |

#### Returns

`void`

#### Defined in

core/pool/memory/MemoryInfo.ts:310

___

### setUint32Array

▸ **setUint32Array**(`index`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `data` | `Uint32Array`\<`ArrayBufferLike`\> |

#### Returns

`void`

#### Defined in

core/pool/memory/MemoryInfo.ts:318

___

### setData

▸ **setData**(`index`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `data` | `number` |

#### Returns

`void`

#### Defined in

core/pool/memory/MemoryInfo.ts:326

___

### setVector2

▸ **setVector2**(`index`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `data` | [`Vector2`](Vector2.md) |

#### Returns

`void`

#### Defined in

core/pool/memory/MemoryInfo.ts:334

___

### setVector3

▸ **setVector3**(`index`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `data` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

core/pool/memory/MemoryInfo.ts:347

___

### setVector4

▸ **setVector4**(`index`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `data` | [`Vector4`](Vector4.md) |

#### Returns

`void`

#### Defined in

core/pool/memory/MemoryInfo.ts:365

___

### setColor

▸ **setColor**(`index`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `data` | [`Color`](Color.md) |

#### Returns

`void`

#### Defined in

core/pool/memory/MemoryInfo.ts:388

___

### getData

▸ **getData**(`index`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`number`

#### Defined in

core/pool/memory/MemoryInfo.ts:411

___

### writeFloat

▸ **writeFloat**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

core/pool/memory/MemoryInfo.ts:418

___

### writeInt8

▸ **writeInt8**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

core/pool/memory/MemoryInfo.ts:423

___

### writeInt16

▸ **writeInt16**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

core/pool/memory/MemoryInfo.ts:428

___

### writeInt32

▸ **writeInt32**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

core/pool/memory/MemoryInfo.ts:433

___

### writeUint8

▸ **writeUint8**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

core/pool/memory/MemoryInfo.ts:438

___

### writeUint16

▸ **writeUint16**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

core/pool/memory/MemoryInfo.ts:443

___

### writeUint32

▸ **writeUint32**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

core/pool/memory/MemoryInfo.ts:448

___

### writeVector2

▸ **writeVector2**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector2`](Vector2.md) |

#### Returns

`void`

#### Defined in

core/pool/memory/MemoryInfo.ts:453

___

### writeVector3

▸ **writeVector3**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

core/pool/memory/MemoryInfo.ts:458

___

### writeVector4

▸ **writeVector4**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector4`](Vector4.md) |

#### Returns

`void`

#### Defined in

core/pool/memory/MemoryInfo.ts:464

___

### writeRGBColor

▸ **writeRGBColor**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Color`](Color.md) |

#### Returns

`void`

#### Defined in

core/pool/memory/MemoryInfo.ts:471

___

### writeArray

▸ **writeArray**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number`[] |

#### Returns

`void`

#### Defined in

core/pool/memory/MemoryInfo.ts:478

___

### writeFloat32Array

▸ **writeFloat32Array**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `Float32Array`\<`ArrayBufferLike`\> |

#### Returns

`void`

#### Defined in

core/pool/memory/MemoryInfo.ts:485

___

### writeInt8Array

▸ **writeInt8Array**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `Int8Array`\<`ArrayBufferLike`\> |

#### Returns

`void`

#### Defined in

core/pool/memory/MemoryInfo.ts:493

___

### writeInt16Array

▸ **writeInt16Array**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `Int16Array`\<`ArrayBufferLike`\> |

#### Returns

`void`

#### Defined in

core/pool/memory/MemoryInfo.ts:501

___

### writeInt32Array

▸ **writeInt32Array**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `Int32Array`\<`ArrayBufferLike`\> |

#### Returns

`void`

#### Defined in

core/pool/memory/MemoryInfo.ts:509

___

### writeUint8Array

▸ **writeUint8Array**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `Uint8Array`\<`ArrayBufferLike`\> |

#### Returns

`void`

#### Defined in

core/pool/memory/MemoryInfo.ts:517

___

### writeUint16Array

▸ **writeUint16Array**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `Uint16Array`\<`ArrayBufferLike`\> |

#### Returns

`void`

#### Defined in

core/pool/memory/MemoryInfo.ts:525

___

### writeUint32Array

▸ **writeUint32Array**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `Uint32Array`\<`ArrayBufferLike`\> |

#### Returns

`void`

#### Defined in

core/pool/memory/MemoryInfo.ts:533

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

core/pool/memory/MemoryInfo.ts:541

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

core/pool/memory/MemoryInfo.ts:545
