[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / Res

# Class: Res

## Table of contents

### Constructors

- [constructor](Res.md#constructor)

### Properties

- [normalTexture](Res.md#normaltexture)
- [maskTexture](Res.md#masktexture)
- [whiteTexture](Res.md#whitetexture)
- [blackTexture](Res.md#blacktexture)
- [redTexture](Res.md#redtexture)
- [blueTexture](Res.md#bluetexture)
- [greenTexture](Res.md#greentexture)
- [yellowTexture](Res.md#yellowtexture)
- [grayTexture](Res.md#graytexture)
- [defaultSky](Res.md#defaultsky)
- [defaultGUITexture](Res.md#defaultguitexture)
- [defaultGUISprite](Res.md#defaultguisprite)
- [defaultMaterial](Res.md#defaultmaterial)

### Methods

- [getGltf](Res.md#getgltf)
- [addObj](Res.md#addobj)
- [getObj](Res.md#getobj)
- [addTexture](Res.md#addtexture)
- [getTexture](Res.md#gettexture)
- [addGeometry](Res.md#addgeometry)
- [getGeometry](Res.md#getgeometry)
- [addMat](Res.md#addmat)
- [getMat](Res.md#getmat)
- [addPrefab](Res.md#addprefab)
- [getPrefab](Res.md#getprefab)
- [addAtlas](Res.md#addatlas)
- [getAtlas](Res.md#getatlas)
- [getGUISprite](Res.md#getguisprite)
- [load](Res.md#load)
- [loadGltf](Res.md#loadgltf)
- [loadObj](Res.md#loadobj)
- [loadB3DM](Res.md#loadb3dm)
- [loadI3DM](Res.md#loadi3dm)
- [loadTexture](Res.md#loadtexture)
- [loadBitmapTextures](Res.md#loadbitmaptextures)
- [loadHDRTexture](Res.md#loadhdrtexture)
- [loadHDRTextureCube](Res.md#loadhdrtexturecube)
- [loadLDRTextureCube](Res.md#loadldrtexturecube)
- [loadTextureCubeMaps](Res.md#loadtexturecubemaps)
- [loadTextureCubeStd](Res.md#loadtexturecubestd)
- [loadJSON](Res.md#loadjson)
- [loadFont](Res.md#loadfont)
- [loadAtlas](Res.md#loadatlas)
- [createTexture](Res.md#createtexture)
- [fillColor](Res.md#fillcolor)
- [initDefault](Res.md#initdefault)

## Constructors

### constructor

• **new Res**(): [`Res`](Res.md)

#### Returns

[`Res`](Res.md)

#### Defined in

assets/Res.ts:40

## Properties

### normalTexture

• **normalTexture**: [`Uint8ArrayTexture`](Uint8ArrayTexture.md)

#### Defined in

assets/Res.ts:346

___

### maskTexture

• **maskTexture**: [`Uint8ArrayTexture`](Uint8ArrayTexture.md)

#### Defined in

assets/Res.ts:347

___

### whiteTexture

• **whiteTexture**: [`Uint8ArrayTexture`](Uint8ArrayTexture.md)

#### Defined in

assets/Res.ts:348

___

### blackTexture

• **blackTexture**: [`Uint8ArrayTexture`](Uint8ArrayTexture.md)

#### Defined in

assets/Res.ts:349

___

### redTexture

• **redTexture**: [`Uint8ArrayTexture`](Uint8ArrayTexture.md)

#### Defined in

assets/Res.ts:350

___

### blueTexture

• **blueTexture**: [`Uint8ArrayTexture`](Uint8ArrayTexture.md)

#### Defined in

assets/Res.ts:351

___

### greenTexture

• **greenTexture**: [`Uint8ArrayTexture`](Uint8ArrayTexture.md)

#### Defined in

assets/Res.ts:352

___

### yellowTexture

• **yellowTexture**: [`Uint8ArrayTexture`](Uint8ArrayTexture.md)

#### Defined in

assets/Res.ts:353

___

### grayTexture

• **grayTexture**: [`Uint8ArrayTexture`](Uint8ArrayTexture.md)

#### Defined in

assets/Res.ts:354

___

### defaultSky

• **defaultSky**: [`HDRTextureCube`](HDRTextureCube.md)

#### Defined in

assets/Res.ts:355

___

### defaultGUITexture

• **defaultGUITexture**: [`GUITexture`](GUITexture.md)

#### Defined in

assets/Res.ts:356

___

### defaultGUISprite

• **defaultGUISprite**: [`GUISprite`](GUISprite.md)

#### Defined in

assets/Res.ts:357

___

### defaultMaterial

• **defaultMaterial**: [`LitMaterial`](LitMaterial.md)

#### Defined in

assets/Res.ts:358

## Methods

### getGltf

▸ **getGltf**(`url`): [`GLTF_Info`](GLTF_Info.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

[`GLTF_Info`](GLTF_Info.md)

#### Defined in

assets/Res.ts:50

___

### addObj

▸ **addObj**(`url`, `obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `obj` | `any` |

#### Returns

`void`

#### Defined in

assets/Res.ts:54

___

### getObj

▸ **getObj**(`url`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`any`

#### Defined in

assets/Res.ts:58

___

### addTexture

▸ **addTexture**(`url`, `texture`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `texture` | [`Texture`](Texture.md) |

#### Returns

`void`

#### Defined in

assets/Res.ts:62

___

### getTexture

▸ **getTexture**(`url`): [`Texture`](Texture.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

[`Texture`](Texture.md)

#### Defined in

assets/Res.ts:66

___

### addGeometry

▸ **addGeometry**(`url`, `geo`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `geo` | [`GeometryBase`](GeometryBase.md) |

#### Returns

`void`

#### Defined in

assets/Res.ts:70

___

### getGeometry

▸ **getGeometry**(`url`): [`GeometryBase`](GeometryBase.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

[`GeometryBase`](GeometryBase.md)

#### Defined in

assets/Res.ts:74

___

### addMat

▸ **addMat**(`name`, `mat`): `Map`\<`string`, [`Material`](Material.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `mat` | [`Material`](Material.md) |

#### Returns

`Map`\<`string`, [`Material`](Material.md)\>

#### Defined in

assets/Res.ts:78

___

### getMat

▸ **getMat**(`name`): [`Material`](Material.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`Material`](Material.md)

#### Defined in

assets/Res.ts:82

___

### addPrefab

▸ **addPrefab**(`name`, `rootScene`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `rootScene` | [`Object3D`](Object3D.md) |

#### Returns

`void`

#### Defined in

assets/Res.ts:86

___

### getPrefab

▸ **getPrefab**(`name`): [`Object3D`](Object3D.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`Object3D`](Object3D.md)

#### Defined in

assets/Res.ts:90

___

### addAtlas

▸ **addAtlas**(`name`, `atlas`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `atlas` | [`GUIAtlasTexture`](GUIAtlasTexture.md) |

#### Returns

`void`

#### Defined in

assets/Res.ts:94

___

### getAtlas

▸ **getAtlas**(`name`): [`GUIAtlasTexture`](GUIAtlasTexture.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`GUIAtlasTexture`](GUIAtlasTexture.md)

#### Defined in

assets/Res.ts:99

___

### getGUISprite

▸ **getGUISprite**(`id`): [`GUISprite`](GUISprite.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

[`GUISprite`](GUISprite.md)

#### Defined in

assets/Res.ts:103

___

### load

▸ **load**\<`T`\>(`url`, `c`, `loaderFunctions?`): `Promise`\<`T`[``"data"``]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ParserBase`](ParserBase.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `c` | [`Parser`](../modules.md#parser)\<`T`\> |
| `loaderFunctions?` | [`LoaderFunctions`](../modules.md#loaderfunctions) |

#### Returns

`Promise`\<`T`[``"data"``]\>

#### Defined in

assets/Res.ts:111

___

### loadGltf

▸ **loadGltf**(`url`, `loaderFunctions?`): `Promise`\<[`Object3D`](Object3D.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `loaderFunctions?` | [`LoaderFunctions`](../modules.md#loaderfunctions) |

#### Returns

`Promise`\<[`Object3D`](Object3D.md)\>

#### Defined in

assets/Res.ts:122

___

### loadObj

▸ **loadObj**(`url`, `loaderFunctions?`): `Promise`\<[`Object3D`](Object3D.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `loaderFunctions?` | [`LoaderFunctions`](../modules.md#loaderfunctions) |

#### Returns

`Promise`\<[`Object3D`](Object3D.md)\>

#### Defined in

assets/Res.ts:144

___

### loadB3DM

▸ **loadB3DM**(`url`, `loaderFunctions?`, `userData?`): `Promise`\<[`Object3D`](Object3D.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `loaderFunctions?` | [`LoaderFunctions`](../modules.md#loaderfunctions) |
| `userData?` | `any` |

#### Returns

`Promise`\<[`Object3D`](Object3D.md)\>

#### Defined in

assets/Res.ts:163

___

### loadI3DM

▸ **loadI3DM**(`url`, `loaderFunctions?`, `userData?`): `Promise`\<[`Object3D`](Object3D.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `loaderFunctions?` | [`LoaderFunctions`](../modules.md#loaderfunctions) |
| `userData?` | `any` |

#### Returns

`Promise`\<[`Object3D`](Object3D.md)\>

#### Defined in

assets/Res.ts:178

___

### loadTexture

▸ **loadTexture**(`url`, `loaderFunctions?`, `flipY?`): `Promise`\<[`Texture`](Texture.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `loaderFunctions?` | [`LoaderFunctions`](../modules.md#loaderfunctions) |
| `flipY?` | `boolean` |

#### Returns

`Promise`\<[`Texture`](Texture.md)\>

#### Defined in

assets/Res.ts:193

___

### loadBitmapTextures

▸ **loadBitmapTextures**(`urls`, `count?`, `loaderFunctions?`, `flipY?`): `Promise`\<[`BitmapTexture2D`](BitmapTexture2D.md)[]\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `urls` | `string`[] | `undefined` |
| `count` | `number` | `5` |
| `loaderFunctions?` | [`LoaderFunctions`](../modules.md#loaderfunctions) | `undefined` |
| `flipY?` | `boolean` | `undefined` |

#### Returns

`Promise`\<[`BitmapTexture2D`](BitmapTexture2D.md)[]\>

#### Defined in

assets/Res.ts:233

___

### loadHDRTexture

▸ **loadHDRTexture**(`url`, `loaderFunctions?`): `Promise`\<[`Texture`](Texture.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `loaderFunctions?` | [`LoaderFunctions`](../modules.md#loaderfunctions) |

#### Returns

`Promise`\<[`Texture`](Texture.md)\>

#### Defined in

assets/Res.ts:254

___

### loadHDRTextureCube

▸ **loadHDRTextureCube**(`url`, `loaderFunctions?`): `Promise`\<[`Texture`](Texture.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `loaderFunctions?` | [`LoaderFunctions`](../modules.md#loaderfunctions) |

#### Returns

`Promise`\<[`Texture`](Texture.md)\>

#### Defined in

assets/Res.ts:265

___

### loadLDRTextureCube

▸ **loadLDRTextureCube**(`url`, `loaderFunctions?`): `Promise`\<[`Texture`](Texture.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `loaderFunctions?` | [`LoaderFunctions`](../modules.md#loaderfunctions) |

#### Returns

`Promise`\<[`Texture`](Texture.md)\>

#### Defined in

assets/Res.ts:278

___

### loadTextureCubeMaps

▸ **loadTextureCubeMaps**(`urls`): `Promise`\<[`Texture`](Texture.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `urls` | `string`[] |

#### Returns

`Promise`\<[`Texture`](Texture.md)\>

#### Defined in

assets/Res.ts:291

___

### loadTextureCubeStd

▸ **loadTextureCubeStd**(`url`, `loaderFunctions?`): `Promise`\<[`Texture`](Texture.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `loaderFunctions?` | [`LoaderFunctions`](../modules.md#loaderfunctions) |

#### Returns

`Promise`\<[`Texture`](Texture.md)\>

#### Defined in

assets/Res.ts:302

___

### loadJSON

▸ **loadJSON**(`url`, `loaderFunctions?`): `Promise`\<`void` \| `object`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `loaderFunctions?` | [`LoaderFunctions`](../modules.md#loaderfunctions) |

#### Returns

`Promise`\<`void` \| `object`\>

#### Defined in

assets/Res.ts:314

___

### loadFont

▸ **loadFont**(`url`, `loaderFunctions?`, `userData?`): `Promise`\<[`FontInfo`](FontInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `loaderFunctions?` | [`LoaderFunctions`](../modules.md#loaderfunctions) |
| `userData?` | `any` |

#### Returns

`Promise`\<[`FontInfo`](FontInfo.md)\>

#### Defined in

assets/Res.ts:325

___

### loadAtlas

▸ **loadAtlas**(`url`, `loaderFunctions?`): `Promise`\<[`FontInfo`](FontInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `loaderFunctions?` | [`LoaderFunctions`](../modules.md#loaderfunctions) |

#### Returns

`Promise`\<[`FontInfo`](FontInfo.md)\>

#### Defined in

assets/Res.ts:337

___

### createTexture

▸ **createTexture**(`width`, `height`, `r`, `g`, `b`, `a`, `name?`): [`Uint8ArrayTexture`](Uint8ArrayTexture.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `height` | `number` |
| `r` | `number` |
| `g` | `number` |
| `b` | `number` |
| `a` | `number` |
| `name?` | `string` |

#### Returns

[`Uint8ArrayTexture`](Uint8ArrayTexture.md)

#### Defined in

assets/Res.ts:360

___

### fillColor

▸ **fillColor**(`array`, `w`, `h`, `r`, `g`, `b`, `a`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `any` |
| `w` | `number` |
| `h` | `number` |
| `r` | `number` |
| `g` | `number` |
| `b` | `number` |
| `a` | `number` |

#### Returns

`void`

#### Defined in

assets/Res.ts:382

___

### initDefault

▸ **initDefault**(): `void`

#### Returns

`void`

#### Defined in

assets/Res.ts:402
