[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / GUIGeometry

# Class: GUIGeometry

composite geometry of gui, holding and updating attribute data

## Hierarchy

- [`GeometryBase`](GeometryBase.md)

  ↳ **`GUIGeometry`**

## Table of contents

### Constructors

- [constructor](GUIGeometry.md#constructor)

### Properties

- [maxQuadCount](GUIGeometry.md#maxquadcount)
- [instanceID](GUIGeometry.md#instanceid)
- [name](GUIGeometry.md#name)
- [subGeometries](GUIGeometry.md#subgeometries)
- [morphTargetsRelative](GUIGeometry.md#morphtargetsrelative)
- [morphTargetDictionary](GUIGeometry.md#morphtargetdictionary)
- [skinNames](GUIGeometry.md#skinnames)
- [bindPose](GUIGeometry.md#bindpose)
- [blendShapeData](GUIGeometry.md#blendshapedata)
- [vertexDim](GUIGeometry.md#vertexdim)
- [vertexCount](GUIGeometry.md#vertexcount)

### Accessors

- [indicesBuffer](GUIGeometry.md#indicesbuffer)
- [vertexBuffer](GUIGeometry.md#vertexbuffer)
- [vertexAttributes](GUIGeometry.md#vertexattributes)
- [vertexAttributeMap](GUIGeometry.md#vertexattributemap)
- [geometryType](GUIGeometry.md#geometrytype)
- [bounds](GUIGeometry.md#bounds)

### Methods

- [updateSubGeometry](GUIGeometry.md#updatesubgeometry)
- [resetSubGeometries](GUIGeometry.md#resetsubgeometries)
- [updateBounds](GUIGeometry.md#updatebounds)
- [getPositionBuffer](GUIGeometry.md#getpositionbuffer)
- [getSpriteBuffer](GUIGeometry.md#getspritebuffer)
- [getColorBuffer](GUIGeometry.md#getcolorbuffer)
- [create](GUIGeometry.md#create)
- [fillQuad](GUIGeometry.md#fillquad)
- [addSubGeometry](GUIGeometry.md#addsubgeometry)
- [generate](GUIGeometry.md#generate)
- [setIndices](GUIGeometry.md#setindices)
- [setAttribute](GUIGeometry.md#setattribute)
- [getAttribute](GUIGeometry.md#getattribute)
- [hasAttribute](GUIGeometry.md#hasattribute)
- [genWireframe](GUIGeometry.md#genwireframe)
- [compute](GUIGeometry.md#compute)
- [computeNormals](GUIGeometry.md#computenormals)
- [isPrimitive](GUIGeometry.md#isprimitive)
- [destroy](GUIGeometry.md#destroy)

## Constructors

### constructor

• **new GUIGeometry**(`max`): [`GUIGeometry`](GUIGeometry.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `max` | `number` |

#### Returns

[`GUIGeometry`](GUIGeometry.md)

#### Overrides

[GeometryBase](GeometryBase.md).[constructor](GeometryBase.md#constructor)

#### Defined in

components/gui/core/GUIGeometry.ts:40

## Properties

### maxQuadCount

• `Readonly` **maxQuadCount**: `number`

#### Defined in

components/gui/core/GUIGeometry.ts:38

___

### instanceID

• **instanceID**: `string`

#### Inherited from

[GeometryBase](GeometryBase.md).[instanceID](GeometryBase.md#instanceid)

#### Defined in

core/geometry/GeometryBase.ts:29

___

### name

• **name**: `string`

#### Inherited from

[GeometryBase](GeometryBase.md).[name](GeometryBase.md#name)

#### Defined in

core/geometry/GeometryBase.ts:30

___

### subGeometries

• **subGeometries**: [`SubGeometry`](SubGeometry.md)[] = `[]`

#### Inherited from

[GeometryBase](GeometryBase.md).[subGeometries](GeometryBase.md#subgeometries)

#### Defined in

core/geometry/GeometryBase.ts:31

___

### morphTargetsRelative

• **morphTargetsRelative**: `boolean`

#### Inherited from

[GeometryBase](GeometryBase.md).[morphTargetsRelative](GeometryBase.md#morphtargetsrelative)

#### Defined in

core/geometry/GeometryBase.ts:32

___

### morphTargetDictionary

• **morphTargetDictionary**: `Object`

#### Index signature

▪ [blenderName: `string`]: `number`

#### Inherited from

[GeometryBase](GeometryBase.md).[morphTargetDictionary](GeometryBase.md#morphtargetdictionary)

#### Defined in

core/geometry/GeometryBase.ts:33

___

### skinNames

• **skinNames**: `string`[]

#### Inherited from

[GeometryBase](GeometryBase.md).[skinNames](GeometryBase.md#skinnames)

#### Defined in

core/geometry/GeometryBase.ts:34

___

### bindPose

• **bindPose**: [`Matrix4`](Matrix4.md)[]

#### Inherited from

[GeometryBase](GeometryBase.md).[bindPose](GeometryBase.md#bindpose)

#### Defined in

core/geometry/GeometryBase.ts:35

___

### blendShapeData

• **blendShapeData**: [`BlendShapeData`](BlendShapeData.md)

#### Inherited from

[GeometryBase](GeometryBase.md).[blendShapeData](GeometryBase.md#blendshapedata)

#### Defined in

core/geometry/GeometryBase.ts:36

___

### vertexDim

• **vertexDim**: `number`

#### Inherited from

[GeometryBase](GeometryBase.md).[vertexDim](GeometryBase.md#vertexdim)

#### Defined in

core/geometry/GeometryBase.ts:37

___

### vertexCount

• **vertexCount**: `number` = `0`

#### Inherited from

[GeometryBase](GeometryBase.md).[vertexCount](GeometryBase.md#vertexcount)

#### Defined in

core/geometry/GeometryBase.ts:38

## Accessors

### indicesBuffer

• `get` **indicesBuffer**(): [`GeometryIndicesBuffer`](GeometryIndicesBuffer.md)

#### Returns

[`GeometryIndicesBuffer`](GeometryIndicesBuffer.md)

#### Inherited from

GeometryBase.indicesBuffer

#### Defined in

core/geometry/GeometryBase.ts:54

___

### vertexBuffer

• `get` **vertexBuffer**(): [`GeometryVertexBuffer`](GeometryVertexBuffer.md)

#### Returns

[`GeometryVertexBuffer`](GeometryVertexBuffer.md)

#### Inherited from

GeometryBase.vertexBuffer

#### Defined in

core/geometry/GeometryBase.ts:58

___

### vertexAttributes

• `get` **vertexAttributes**(): `string`[]

#### Returns

`string`[]

#### Inherited from

GeometryBase.vertexAttributes

#### Defined in

core/geometry/GeometryBase.ts:62

___

### vertexAttributeMap

• `get` **vertexAttributeMap**(): `Map`\<`string`, [`VertexAttributeData`](../modules.md#vertexattributedata)\>

#### Returns

`Map`\<`string`, [`VertexAttributeData`](../modules.md#vertexattributedata)\>

#### Inherited from

GeometryBase.vertexAttributeMap

#### Defined in

core/geometry/GeometryBase.ts:66

___

### geometryType

• `get` **geometryType**(): [`GeometryVertexType`](../enums/GeometryVertexType.md)

#### Returns

[`GeometryVertexType`](../enums/GeometryVertexType.md)

#### Inherited from

GeometryBase.geometryType

#### Defined in

core/geometry/GeometryBase.ts:70

• `set` **geometryType**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`GeometryVertexType`](../enums/GeometryVertexType.md) |

#### Returns

`void`

#### Inherited from

GeometryBase.geometryType

#### Defined in

core/geometry/GeometryBase.ts:73

___

### bounds

• `get` **bounds**(): [`BoundingBox`](BoundingBox.md)

#### Returns

[`BoundingBox`](BoundingBox.md)

#### Inherited from

GeometryBase.bounds

#### Defined in

core/geometry/GeometryBase.ts:77

• `set` **bounds**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`BoundingBox`](BoundingBox.md) |

#### Returns

`void`

#### Inherited from

GeometryBase.bounds

#### Defined in

core/geometry/GeometryBase.ts:120

## Methods

### updateSubGeometry

▸ **updateSubGeometry**(`index`, `start`, `count`): [`SubGeometry`](SubGeometry.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `start` | `number` |
| `count` | `number` |

#### Returns

[`SubGeometry`](SubGeometry.md)

#### Defined in

components/gui/core/GUIGeometry.ts:45

___

### resetSubGeometries

▸ **resetSubGeometries**(): `void`

#### Returns

`void`

#### Defined in

components/gui/core/GUIGeometry.ts:66

___

### updateBounds

▸ **updateBounds**(`min?`, `max?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `min?` | [`Vector3`](Vector3.md) |
| `max?` | [`Vector3`](Vector3.md) |

#### Returns

`this`

#### Defined in

components/gui/core/GUIGeometry.ts:75

___

### getPositionBuffer

▸ **getPositionBuffer**(): [`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Returns

[`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Defined in

components/gui/core/GUIGeometry.ts:83

___

### getSpriteBuffer

▸ **getSpriteBuffer**(): [`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Returns

[`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Defined in

components/gui/core/GUIGeometry.ts:91

___

### getColorBuffer

▸ **getColorBuffer**(): [`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Returns

[`StorageGPUBuffer`](StorageGPUBuffer.md)

#### Defined in

components/gui/core/GUIGeometry.ts:99

___

### create

▸ **create**(): `this`

#### Returns

`this`

#### Defined in

components/gui/core/GUIGeometry.ts:107

___

### fillQuad

▸ **fillQuad**(`quad`, `transform`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `quad` | [`GUIQuad`](GUIQuad.md) |
| `transform` | [`UITransform`](UITransform.md) |

#### Returns

`void`

#### Defined in

components/gui/core/GUIGeometry.ts:163

___

### addSubGeometry

▸ **addSubGeometry**(`...lodLevels`): [`SubGeometry`](SubGeometry.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...lodLevels` | [`LODDescriptor`](../modules.md#loddescriptor)[] |

#### Returns

[`SubGeometry`](SubGeometry.md)

#### Inherited from

[GeometryBase](GeometryBase.md).[addSubGeometry](GeometryBase.md#addsubgeometry)

#### Defined in

core/geometry/GeometryBase.ts:124

___

### generate

▸ **generate**(`shaderReflection`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shaderReflection` | [`ShaderReflection`](ShaderReflection.md) |

#### Returns

`void`

#### Inherited from

[GeometryBase](GeometryBase.md).[generate](GeometryBase.md#generate)

#### Defined in

core/geometry/GeometryBase.ts:131

___

### setIndices

▸ **setIndices**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`ArrayBufferData`](../modules.md#arraybufferdata) |

#### Returns

`void`

#### Inherited from

[GeometryBase](GeometryBase.md).[setIndices](GeometryBase.md#setindices)

#### Defined in

core/geometry/GeometryBase.ts:146

___

### setAttribute

▸ **setAttribute**(`attribute`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attribute` | `string` |
| `data` | [`ArrayBufferData`](../modules.md#arraybufferdata) |

#### Returns

`void`

#### Inherited from

[GeometryBase](GeometryBase.md).[setAttribute](GeometryBase.md#setattribute)

#### Defined in

core/geometry/GeometryBase.ts:158

___

### getAttribute

▸ **getAttribute**(`attribute`): [`VertexAttributeData`](../modules.md#vertexattributedata)

#### Parameters

| Name | Type |
| :------ | :------ |
| `attribute` | `string` |

#### Returns

[`VertexAttributeData`](../modules.md#vertexattributedata)

#### Inherited from

[GeometryBase](GeometryBase.md).[getAttribute](GeometryBase.md#getattribute)

#### Defined in

core/geometry/GeometryBase.ts:174

___

### hasAttribute

▸ **hasAttribute**(`attribute`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attribute` | `string` |

#### Returns

`boolean`

#### Inherited from

[GeometryBase](GeometryBase.md).[hasAttribute](GeometryBase.md#hasattribute)

#### Defined in

core/geometry/GeometryBase.ts:180

___

### genWireframe

▸ **genWireframe**(): [`Vector3`](Vector3.md)[]

#### Returns

[`Vector3`](Vector3.md)[]

#### Inherited from

[GeometryBase](GeometryBase.md).[genWireframe](GeometryBase.md#genwireframe)

#### Defined in

core/geometry/GeometryBase.ts:184

___

### compute

▸ **compute**(): `void`

#### Returns

`void`

#### Inherited from

[GeometryBase](GeometryBase.md).[compute](GeometryBase.md#compute)

#### Defined in

core/geometry/GeometryBase.ts:268

___

### computeNormals

▸ **computeNormals**(): `this`

#### Returns

`this`

#### Inherited from

[GeometryBase](GeometryBase.md).[computeNormals](GeometryBase.md#computenormals)

#### Defined in

core/geometry/GeometryBase.ts:286

___

### isPrimitive

▸ **isPrimitive**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[GeometryBase](GeometryBase.md).[isPrimitive](GeometryBase.md#isprimitive)

#### Defined in

core/geometry/GeometryBase.ts:348

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

[GeometryBase](GeometryBase.md).[destroy](GeometryBase.md#destroy)

#### Defined in

core/geometry/GeometryBase.ts:352
