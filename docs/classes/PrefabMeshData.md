[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / PrefabMeshData

# Class: PrefabMeshData

## Table of contents

### Constructors

- [constructor](PrefabMeshData.md#constructor)

### Properties

- [name](PrefabMeshData.md#name)
- [meshName](PrefabMeshData.md#meshname)
- [meshID](PrefabMeshData.md#meshid)
- [vertexCount](PrefabMeshData.md#vertexcount)
- [vertexStrip](PrefabMeshData.md#vertexstrip)
- [vertexBuffer](PrefabMeshData.md#vertexbuffer)
- [indices](PrefabMeshData.md#indices)
- [attributes](PrefabMeshData.md#attributes)
- [bones](PrefabMeshData.md#bones)
- [bindPose](PrefabMeshData.md#bindpose)
- [blendShapeData](PrefabMeshData.md#blendshapedata)

## Constructors

### constructor

• **new PrefabMeshData**(): [`PrefabMeshData`](PrefabMeshData.md)

#### Returns

[`PrefabMeshData`](PrefabMeshData.md)

## Properties

### name

• **name**: `string`

#### Defined in

loader/parser/prefab/prefabData/PrefabMeshData.ts:5

___

### meshName

• **meshName**: `string`

#### Defined in

loader/parser/prefab/prefabData/PrefabMeshData.ts:6

___

### meshID

• **meshID**: `string`

#### Defined in

loader/parser/prefab/prefabData/PrefabMeshData.ts:7

___

### vertexCount

• **vertexCount**: `number`

#### Defined in

loader/parser/prefab/prefabData/PrefabMeshData.ts:8

___

### vertexStrip

• **vertexStrip**: `number`

#### Defined in

loader/parser/prefab/prefabData/PrefabMeshData.ts:9

___

### vertexBuffer

• **vertexBuffer**: `Float32Array`\<`ArrayBufferLike`\>

#### Defined in

loader/parser/prefab/prefabData/PrefabMeshData.ts:10

___

### indices

• **indices**: `Uint32Array`\<`ArrayBufferLike`\> \| `Uint16Array`\<`ArrayBufferLike`\>

#### Defined in

loader/parser/prefab/prefabData/PrefabMeshData.ts:11

___

### attributes

• **attributes**: \{ `attribute`: `string` ; `dim`: `number` ; `pos`: `number`  }[]

#### Defined in

loader/parser/prefab/prefabData/PrefabMeshData.ts:12

___

### bones

• **bones**: `string`[]

#### Defined in

loader/parser/prefab/prefabData/PrefabMeshData.ts:13

___

### bindPose

• **bindPose**: [`Matrix4`](Matrix4.md)[]

#### Defined in

loader/parser/prefab/prefabData/PrefabMeshData.ts:14

___

### blendShapeData

• **blendShapeData**: [`BlendShapeData`](BlendShapeData.md)

#### Defined in

loader/parser/prefab/prefabData/PrefabMeshData.ts:15
