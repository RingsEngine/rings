[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / ProfilerUtil

# Class: ProfilerUtil

## Table of contents

### Constructors

- [constructor](ProfilerUtil.md#constructor)

### Properties

- [viewMap](ProfilerUtil.md#viewmap)
- [testObj](ProfilerUtil.md#testobj)

### Methods

- [startView](ProfilerUtil.md#startview)
- [viewCount](ProfilerUtil.md#viewcount)
- [viewCount\_vertex](ProfilerUtil.md#viewcount_vertex)
- [viewCount\_indices](ProfilerUtil.md#viewcount_indices)
- [viewCount\_tri](ProfilerUtil.md#viewcount_tri)
- [viewCount\_instance](ProfilerUtil.md#viewcount_instance)
- [viewCount\_draw](ProfilerUtil.md#viewcount_draw)
- [viewCount\_pipeline](ProfilerUtil.md#viewcount_pipeline)
- [start](ProfilerUtil.md#start)
- [end](ProfilerUtil.md#end)
- [countStart](ProfilerUtil.md#countstart)
- [countEnd](ProfilerUtil.md#countend)
- [print](ProfilerUtil.md#print)

## Constructors

### constructor

• **new ProfilerUtil**(): [`ProfilerUtil`](ProfilerUtil.md)

#### Returns

[`ProfilerUtil`](ProfilerUtil.md)

## Properties

### viewMap

▪ `Static` **viewMap**: `Map`\<[`View3D`](View3D.md), [`ProfilerDraw`](../modules.md#profilerdraw)\>

#### Defined in

util/ProfilerUtil.ts:37

___

### testObj

▪ `Static` **testObj**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `testValue1` | `number` |
| `testValue2` | `number` |
| `testValue3` | `number` |
| `testValue4` | `number` |

#### Defined in

util/ProfilerUtil.ts:42

## Methods

### startView

▸ **startView**(`view`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |

#### Returns

`void`

#### Defined in

util/ProfilerUtil.ts:49

___

### viewCount

▸ **viewCount**(`view`): [`ProfilerDraw`](../modules.md#profilerdraw)

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |

#### Returns

[`ProfilerDraw`](../modules.md#profilerdraw)

#### Defined in

util/ProfilerUtil.ts:84

___

### viewCount\_vertex

▸ **viewCount_vertex**(`view`, `pass`, `v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `pass` | `string` |
| `v` | `number` |

#### Returns

`void`

#### Defined in

util/ProfilerUtil.ts:89

___

### viewCount\_indices

▸ **viewCount_indices**(`view`, `pass`, `v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `pass` | `string` |
| `v` | `number` |

#### Returns

`void`

#### Defined in

util/ProfilerUtil.ts:93

___

### viewCount\_tri

▸ **viewCount_tri**(`view`, `pass`, `v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `pass` | `string` |
| `v` | `number` |

#### Returns

`void`

#### Defined in

util/ProfilerUtil.ts:97

___

### viewCount\_instance

▸ **viewCount_instance**(`view`, `pass`, `v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `pass` | `string` |
| `v` | `number` |

#### Returns

`void`

#### Defined in

util/ProfilerUtil.ts:101

___

### viewCount\_draw

▸ **viewCount_draw**(`view`, `pass`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `pass` | `string` |

#### Returns

`void`

#### Defined in

util/ProfilerUtil.ts:105

___

### viewCount\_pipeline

▸ **viewCount_pipeline**(`view`, `pass`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`View3D`](View3D.md) |
| `pass` | `string` |

#### Returns

`void`

#### Defined in

util/ProfilerUtil.ts:109

___

### start

▸ **start**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`void`

#### Defined in

util/ProfilerUtil.ts:113

___

### end

▸ **end**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`void`

#### Defined in

util/ProfilerUtil.ts:132

___

### countStart

▸ **countStart**(`id`, `id2?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `id` | `string` | `undefined` |
| `id2` | `string` | `""` |

#### Returns

`void`

#### Defined in

util/ProfilerUtil.ts:140

___

### countEnd

▸ **countEnd**(`id`, `id2`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `id2` | `string` |

#### Returns

`void`

#### Defined in

util/ProfilerUtil.ts:163

___

### print

▸ **print**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`void`

#### Defined in

util/ProfilerUtil.ts:184
