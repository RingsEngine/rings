[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / I3DMLoader

# Class: I3DMLoader

## Hierarchy

- [`I3DMLoaderBase`](I3DMLoaderBase.md)

  ↳ **`I3DMLoader`**

## Table of contents

### Constructors

- [constructor](I3DMLoader.md#constructor)

### Properties

- [tempFwd](I3DMLoader.md#tempfwd)
- [tempUp](I3DMLoader.md#tempup)
- [tempRight](I3DMLoader.md#tempright)
- [tempPos](I3DMLoader.md#temppos)
- [tempQuat](I3DMLoader.md#tempquat)
- [tempSca](I3DMLoader.md#tempsca)
- [tempMat](I3DMLoader.md#tempmat)
- [adjustmentTransform](I3DMLoader.md#adjustmenttransform)

### Methods

- [parse](I3DMLoader.md#parse)

## Constructors

### constructor

• **new I3DMLoader**(): [`I3DMLoader`](I3DMLoader.md)

#### Returns

[`I3DMLoader`](I3DMLoader.md)

#### Overrides

[I3DMLoaderBase](I3DMLoaderBase.md).[constructor](I3DMLoaderBase.md#constructor)

#### Defined in

loader/parser/i3dm/I3DMLoader.ts:21

## Properties

### tempFwd

▪ `Static` **tempFwd**: [`Vector3`](Vector3.md)

#### Defined in

loader/parser/i3dm/I3DMLoader.ts:11

___

### tempUp

▪ `Static` **tempUp**: [`Vector3`](Vector3.md)

#### Defined in

loader/parser/i3dm/I3DMLoader.ts:12

___

### tempRight

▪ `Static` **tempRight**: [`Vector3`](Vector3.md)

#### Defined in

loader/parser/i3dm/I3DMLoader.ts:13

___

### tempPos

▪ `Static` **tempPos**: [`Vector3`](Vector3.md)

#### Defined in

loader/parser/i3dm/I3DMLoader.ts:14

___

### tempQuat

▪ `Static` **tempQuat**: [`Quaternion`](Quaternion.md)

#### Defined in

loader/parser/i3dm/I3DMLoader.ts:15

___

### tempSca

▪ `Static` **tempSca**: [`Vector3`](Vector3.md)

#### Defined in

loader/parser/i3dm/I3DMLoader.ts:16

___

### tempMat

▪ `Static` **tempMat**: [`Matrix4`](Matrix4.md)

#### Defined in

loader/parser/i3dm/I3DMLoader.ts:17

___

### adjustmentTransform

• **adjustmentTransform**: [`Matrix4`](Matrix4.md)

#### Defined in

loader/parser/i3dm/I3DMLoader.ts:18

## Methods

### parse

▸ **parse**(`buffer`): `Promise`\<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `ArrayBuffer` |

#### Returns

`Promise`\<`any`\>

#### Overrides

[I3DMLoaderBase](I3DMLoaderBase.md).[parse](I3DMLoaderBase.md#parse)

#### Defined in

loader/parser/i3dm/I3DMLoader.ts:35
