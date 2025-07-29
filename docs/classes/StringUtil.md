[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / StringUtil

# Class: StringUtil

## Table of contents

### Constructors

- [constructor](StringUtil.md#constructor)

### Methods

- [hasString](StringUtil.md#hasstring)
- [getEllipsis](StringUtil.md#getellipsis)
- [getURLName](StringUtil.md#geturlname)
- [getFileFormat](StringUtil.md#getfileformat)
- [readLineProperty](StringUtil.md#readlineproperty)
- [getPath](StringUtil.md#getpath)
- [normalizePath](StringUtil.md#normalizepath)
- [getStringList](StringUtil.md#getstringlist)
- [formatTime](StringUtil.md#formattime)
- [trim](StringUtil.md#trim)
- [isEmpty](StringUtil.md#isempty)
- [strCut](StringUtil.md#strcut)
- [toQueryPair](StringUtil.md#toquerypair)
- [stringFormat](StringUtil.md#stringformat)
- [parseJson2String](StringUtil.md#parsejson2string)
- [compareVersion](StringUtil.md#compareversion)
- [buildRandomCode](StringUtil.md#buildrandomcode)
- [UUID](StringUtil.md#uuid)
- [stringToHash](StringUtil.md#stringtohash)
- [parseUrl](StringUtil.md#parseurl)

## Constructors

### constructor

• **new StringUtil**(): [`StringUtil`](StringUtil.md)

#### Returns

[`StringUtil`](StringUtil.md)

## Methods

### hasString

▸ **hasString**(`fields`, `str`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fields` | `string`[] |
| `str` | `string` |

#### Returns

`number`

#### Defined in

util/StringUtil.ts:14

___

### getEllipsis

▸ **getEllipsis**(`str`, `len?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `str` | `any` | `undefined` |
| `len` | `number` | `4` |

#### Returns

`string`

#### Defined in

util/StringUtil.ts:24

___

### getURLName

▸ **getURLName**(`url`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`string`

#### Defined in

util/StringUtil.ts:31

___

### getFileFormat

▸ **getFileFormat**(`url`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`string`

#### Defined in

util/StringUtil.ts:39

___

### readLineProperty

▸ **readLineProperty**(`line`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `line` | `string` |
| `data` | `any` |

#### Returns

`void`

#### Defined in

util/StringUtil.ts:51

___

### getPath

▸ **getPath**(`url`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`string`

#### Defined in

util/StringUtil.ts:71

___

### normalizePath

▸ **normalizePath**(`url`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`string`

#### Defined in

util/StringUtil.ts:77

___

### getStringList

▸ **getStringList**(`str`, `char?`): `string`[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `str` | `string` | `undefined` |
| `char` | `string` | `";"` |

#### Returns

`string`[]

#### Defined in

util/StringUtil.ts:83

___

### formatTime

▸ **formatTime**(`time`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `time` | `number` |

#### Returns

`string`[]

#### Defined in

util/StringUtil.ts:87

___

### trim

▸ **trim**(`str`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `any` |

#### Returns

`any`

#### Defined in

util/StringUtil.ts:96

___

### isEmpty

▸ **isEmpty**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

#### Defined in

util/StringUtil.ts:100

___

### strCut

▸ **strCut**(`str`, `len`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `any` |
| `len` | `any` |

#### Returns

`string`

#### Defined in

util/StringUtil.ts:110

___

### toQueryPair

▸ **toQueryPair**(`key`, `value`, `isEncodeURI?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `key` | `any` | `undefined` |
| `value` | `any` | `undefined` |
| `isEncodeURI` | `boolean` | `false` |

#### Returns

`string`

#### Defined in

util/StringUtil.ts:133

___

### stringFormat

▸ **stringFormat**(`str`, `...params`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |
| `...params` | `any`[] |

#### Returns

`string`

#### Defined in

util/StringUtil.ts:137

___

### parseJson2String

▸ **parseJson2String**(`json`, `options?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |
| `options?` | `any` |

#### Returns

`string`

#### Defined in

util/StringUtil.ts:159

___

### compareVersion

▸ **compareVersion**(`v1`, `v2`): ``-1`` \| ``0`` \| ``1``

#### Parameters

| Name | Type |
| :------ | :------ |
| `v1` | `any` |
| `v2` | `any` |

#### Returns

``-1`` \| ``0`` \| ``1``

#### Defined in

util/StringUtil.ts:220

___

### buildRandomCode

▸ **buildRandomCode**(): `string`

#### Returns

`string`

#### Defined in

util/StringUtil.ts:246

___

### UUID

▸ **UUID**(): `string`

#### Returns

`string`

#### Defined in

util/StringUtil.ts:259

___

### stringToHash

▸ **stringToHash**(`str`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `any` |

#### Returns

`number`

#### Defined in

util/StringUtil.ts:270

___

### parseUrl

▸ **parseUrl**(`base`, `url`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `base` | `string` |
| `url` | `string` |

#### Returns

`string`

#### Defined in

util/StringUtil.ts:281
