[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / GLTF\_Info

# Class: GLTF\_Info

## Table of contents

### Constructors

- [constructor](GLTF_Info.md#constructor)

### Properties

- [asset](GLTF_Info.md#asset)
- [accessors](GLTF_Info.md#accessors)
- [buffers](GLTF_Info.md#buffers)
- [bufferViews](GLTF_Info.md#bufferviews)
- [materials](GLTF_Info.md#materials)
- [meshes](GLTF_Info.md#meshes)
- [nodes](GLTF_Info.md#nodes)
- [scene](GLTF_Info.md#scene)
- [scenes](GLTF_Info.md#scenes)
- [textures](GLTF_Info.md#textures)
- [cameras](GLTF_Info.md#cameras)
- [skins](GLTF_Info.md#skins)
- [resources](GLTF_Info.md#resources)
- [images](GLTF_Info.md#images)
- [samplers](GLTF_Info.md#samplers)
- [animations](GLTF_Info.md#animations)
- [extensions](GLTF_Info.md#extensions)

## Constructors

### constructor

• **new GLTF_Info**(): [`GLTF_Info`](GLTF_Info.md)

#### Returns

[`GLTF_Info`](GLTF_Info.md)

## Properties

### asset

• **asset**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `generator` | `string` |
| `version` | `string` |
| `minVersion` | `string` |

#### Defined in

loader/parser/gltf/GLTFInfo.ts:2

___

### accessors

• **accessors**: [`GLTF_Accessors`](GLTF_Accessors.md)[]

#### Defined in

loader/parser/gltf/GLTFInfo.ts:8

___

### buffers

• **buffers**: \{ `isParsed`: `boolean` ; `dbuffer`: `any` ; `byteLength`: `number` ; `uri`: `string`  }[]

#### Defined in

loader/parser/gltf/GLTFInfo.ts:10

___

### bufferViews

• **bufferViews**: \{ `isParsed`: `boolean` ; `buffer`: `number` ; `byteOffset`: `number` ; `dbufferView`: `any` ; `byteStride`: `number` ; `byteLength`: `number`  }[]

#### Defined in

loader/parser/gltf/GLTFInfo.ts:17

___

### materials

• **materials**: \{ `name`: `string` ; `alphaModel`: `string` ; `alphaCutoff`: `number`  }[]

#### Defined in

loader/parser/gltf/GLTFInfo.ts:26

___

### meshes

• **meshes**: [`GLTF_Mesh`](GLTF_Mesh.md)[]

#### Defined in

loader/parser/gltf/GLTFInfo.ts:32

___

### nodes

• **nodes**: [`GLTF_Node`](GLTF_Node.md)[]

#### Defined in

loader/parser/gltf/GLTFInfo.ts:34

___

### scene

• **scene**: `number` = `0`

#### Defined in

loader/parser/gltf/GLTFInfo.ts:36

___

### scenes

• **scenes**: [`GLTF_Scene`](GLTF_Scene.md)

#### Defined in

loader/parser/gltf/GLTFInfo.ts:38

___

### textures

• **textures**: \{ `isParsed`: `boolean` ; `sampler`: `number` ; `source`: `number` ; `name`: `string` ; `dtexture`: `any`  }[]

#### Defined in

loader/parser/gltf/GLTFInfo.ts:40

___

### cameras

• **cameras**: `any`

#### Defined in

loader/parser/gltf/GLTFInfo.ts:48

___

### skins

• **skins**: `any`

#### Defined in

loader/parser/gltf/GLTFInfo.ts:49

___

### resources

• **resources**: `Object`

#### Index signature

▪ [uri: `string`]: `any`

#### Defined in

loader/parser/gltf/GLTFInfo.ts:50

___

### images

• **images**: \{ `uri`: `string` ; `name`: `string` ; `isParsed`: `any` ; `dsampler`: `any` ; `dimage`: `any` ; `mimeType`: `string` ; `bufferView`: `number`  }[]

#### Defined in

loader/parser/gltf/GLTFInfo.ts:51

___

### samplers

• **samplers**: \{ `minFilter`: `number` ; `magFilter`: `number` ; `wrapS`: `number` ; `wrapT`: `number`  }[]

#### Defined in

loader/parser/gltf/GLTFInfo.ts:60

___

### animations

• **animations**: `any`

#### Defined in

loader/parser/gltf/GLTFInfo.ts:66

___

### extensions

• **extensions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `KHR_lights_punctual` | \{ `lights`: [`GLTF_Light`](GLTF_Light.md)[]  } |
| `KHR_lights_punctual.lights` | [`GLTF_Light`](GLTF_Light.md)[] |

#### Defined in

loader/parser/gltf/GLTFInfo.ts:68
