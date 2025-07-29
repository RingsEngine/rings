[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / BytesArray

# Class: BytesArray

## Hierarchy

- `DataView`

  ↳ **`BytesArray`**

## Table of contents

### Constructors

- [constructor](BytesArray.md#constructor)

### Properties

- [position](BytesArray.md#position)
- [littleEndian](BytesArray.md#littleendian)

### Methods

- [readUTF](BytesArray.md#readutf)
- [readStringArray](BytesArray.md#readstringarray)
- [readByte](BytesArray.md#readbyte)
- [readBoolean](BytesArray.md#readboolean)
- [readBytes](BytesArray.md#readbytes)
- [readBytesArray](BytesArray.md#readbytesarray)
- [readUnit8](BytesArray.md#readunit8)
- [readUnit16](BytesArray.md#readunit16)
- [readUnit32](BytesArray.md#readunit32)
- [readInt8](BytesArray.md#readint8)
- [readInt16](BytesArray.md#readint16)
- [readInt32](BytesArray.md#readint32)
- [readFloat32](BytesArray.md#readfloat32)
- [readFloat64](BytesArray.md#readfloat64)
- [readInt32Array](BytesArray.md#readint32array)
- [readInt32List](BytesArray.md#readint32list)
- [readFloatArray](BytesArray.md#readfloatarray)
- [readIntArray](BytesArray.md#readintarray)
- [readVector2int](BytesArray.md#readvector2int)
- [readVector2](BytesArray.md#readvector2)
- [readVector3](BytesArray.md#readvector3)
- [readVector3Array](BytesArray.md#readvector3array)
- [readVector4](BytesArray.md#readvector4)
- [readVector4Array](BytesArray.md#readvector4array)
- [readColor](BytesArray.md#readcolor)
- [readColorArray](BytesArray.md#readcolorarray)
- [readQuaternion](BytesArray.md#readquaternion)
- [readQuaternionArray](BytesArray.md#readquaternionarray)
- [readMatrix44](BytesArray.md#readmatrix44)
- [readMatrix44Array](BytesArray.md#readmatrix44array)
- [readFloat32Array](BytesArray.md#readfloat32array)
- [getFloat32Array](BytesArray.md#getfloat32array)

## Constructors

### constructor

• **new BytesArray**(`buffer`, `byteOffset?`, `byteLength?`): [`BytesArray`](BytesArray.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `ArrayBufferLike` |
| `byteOffset?` | `number` |
| `byteLength?` | `number` |

#### Returns

[`BytesArray`](BytesArray.md)

#### Overrides

DataView.constructor

#### Defined in

util/BytesArray.ts:6

## Properties

### position

• **position**: `number` = `0`

#### Defined in

util/BytesArray.ts:4

___

### littleEndian

• `Optional` **littleEndian**: `boolean` = `true`

#### Defined in

util/BytesArray.ts:5

## Methods

### readUTF

▸ **readUTF**(): `string`

#### Returns

`string`

#### Defined in

util/BytesArray.ts:15

___

### readStringArray

▸ **readStringArray**(): `string`[]

#### Returns

`string`[]

#### Defined in

util/BytesArray.ts:30

___

### readByte

▸ **readByte**(): `number`

#### Returns

`number`

#### Defined in

util/BytesArray.ts:38

___

### readBoolean

▸ **readBoolean**(): `boolean`

#### Returns

`boolean`

#### Defined in

util/BytesArray.ts:43

___

### readBytes

▸ **readBytes**(`byteLen`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `byteLen` | `number` |

#### Returns

`any`

#### Defined in

util/BytesArray.ts:48

___

### readBytesArray

▸ **readBytesArray**(): [`BytesArray`](BytesArray.md)

#### Returns

[`BytesArray`](BytesArray.md)

#### Defined in

util/BytesArray.ts:53

___

### readUnit8

▸ **readUnit8**(): `number`

#### Returns

`number`

#### Defined in

util/BytesArray.ts:61

___

### readUnit16

▸ **readUnit16**(): `number`

#### Returns

`number`

#### Defined in

util/BytesArray.ts:66

___

### readUnit32

▸ **readUnit32**(): `number`

#### Returns

`number`

#### Defined in

util/BytesArray.ts:71

___

### readInt8

▸ **readInt8**(): `number`

#### Returns

`number`

#### Defined in

util/BytesArray.ts:76

___

### readInt16

▸ **readInt16**(): `number`

#### Returns

`number`

#### Defined in

util/BytesArray.ts:81

___

### readInt32

▸ **readInt32**(): `number`

#### Returns

`number`

#### Defined in

util/BytesArray.ts:86

___

### readFloat32

▸ **readFloat32**(): `number`

#### Returns

`number`

#### Defined in

util/BytesArray.ts:91

___

### readFloat64

▸ **readFloat64**(): `number`

#### Returns

`number`

#### Defined in

util/BytesArray.ts:96

___

### readInt32Array

▸ **readInt32Array**(): `Int32Array`\<`ArrayBufferLike`\>

#### Returns

`Int32Array`\<`ArrayBufferLike`\>

#### Defined in

util/BytesArray.ts:101

___

### readInt32List

▸ **readInt32List**(): `number`[]

#### Returns

`number`[]

#### Defined in

util/BytesArray.ts:108

___

### readFloatArray

▸ **readFloatArray**(): `number`[]

#### Returns

`number`[]

#### Defined in

util/BytesArray.ts:116

___

### readIntArray

▸ **readIntArray**(): `number`[]

#### Returns

`number`[]

#### Defined in

util/BytesArray.ts:125

___

### readVector2int

▸ **readVector2int**(): [`Vector2`](Vector2.md)

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

util/BytesArray.ts:134

___

### readVector2

▸ **readVector2**(): [`Vector2`](Vector2.md)

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

util/BytesArray.ts:140

___

### readVector3

▸ **readVector3**(): [`Vector3`](Vector3.md)

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

util/BytesArray.ts:146

___

### readVector3Array

▸ **readVector3Array**(): `any`[]

#### Returns

`any`[]

#### Defined in

util/BytesArray.ts:153

___

### readVector4

▸ **readVector4**(): [`Vector4`](Vector4.md)

#### Returns

[`Vector4`](Vector4.md)

#### Defined in

util/BytesArray.ts:161

___

### readVector4Array

▸ **readVector4Array**(): `any`[]

#### Returns

`any`[]

#### Defined in

util/BytesArray.ts:169

___

### readColor

▸ **readColor**(): [`Color`](Color.md)

#### Returns

[`Color`](Color.md)

#### Defined in

util/BytesArray.ts:177

___

### readColorArray

▸ **readColorArray**(): `any`[]

#### Returns

`any`[]

#### Defined in

util/BytesArray.ts:185

___

### readQuaternion

▸ **readQuaternion**(): [`Quaternion`](Quaternion.md)

#### Returns

[`Quaternion`](Quaternion.md)

#### Defined in

util/BytesArray.ts:193

___

### readQuaternionArray

▸ **readQuaternionArray**(): `any`[]

#### Returns

`any`[]

#### Defined in

util/BytesArray.ts:201

___

### readMatrix44

▸ **readMatrix44**(): [`Matrix4`](Matrix4.md)

#### Returns

[`Matrix4`](Matrix4.md)

#### Defined in

util/BytesArray.ts:209

___

### readMatrix44Array

▸ **readMatrix44Array**(): [`Matrix4`](Matrix4.md)[]

#### Returns

[`Matrix4`](Matrix4.md)[]

#### Defined in

util/BytesArray.ts:230

___

### readFloat32Array

▸ **readFloat32Array**(`len`): `Float32Array`\<`ArrayBufferLike`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `len` | `number` |

#### Returns

`Float32Array`\<`ArrayBufferLike`\>

#### Defined in

util/BytesArray.ts:239

___

### getFloat32Array

▸ **getFloat32Array**(): `Float32Array`\<`ArrayBufferLike`\>

#### Returns

`Float32Array`\<`ArrayBufferLike`\>

#### Defined in

util/BytesArray.ts:245
