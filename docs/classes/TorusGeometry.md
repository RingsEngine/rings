[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / TorusGeometry

# Class: TorusGeometry

Torus Geometry

## Hierarchy

- [`GeometryBase`](GeometryBase.md)

  ↳ **`TorusGeometry`**

## Table of contents

### Constructors

- [constructor](TorusGeometry.md#constructor)

### Properties

- [instanceID](TorusGeometry.md#instanceid)
- [name](TorusGeometry.md#name)
- [subGeometries](TorusGeometry.md#subgeometries)
- [morphTargetsRelative](TorusGeometry.md#morphtargetsrelative)
- [morphTargetDictionary](TorusGeometry.md#morphtargetdictionary)
- [skinNames](TorusGeometry.md#skinnames)
- [bindPose](TorusGeometry.md#bindpose)
- [blendShapeData](TorusGeometry.md#blendshapedata)
- [vertexDim](TorusGeometry.md#vertexdim)
- [vertexCount](TorusGeometry.md#vertexcount)
- [radius](TorusGeometry.md#radius)
- [tube](TorusGeometry.md#tube)
- [radialSegments](TorusGeometry.md#radialsegments)
- [tubularSegments](TorusGeometry.md#tubularsegments)

### Accessors

- [indicesBuffer](TorusGeometry.md#indicesbuffer)
- [vertexBuffer](TorusGeometry.md#vertexbuffer)
- [vertexAttributes](TorusGeometry.md#vertexattributes)
- [vertexAttributeMap](TorusGeometry.md#vertexattributemap)
- [geometryType](TorusGeometry.md#geometrytype)
- [bounds](TorusGeometry.md#bounds)

### Methods

- [addSubGeometry](TorusGeometry.md#addsubgeometry)
- [generate](TorusGeometry.md#generate)
- [setIndices](TorusGeometry.md#setindices)
- [setAttribute](TorusGeometry.md#setattribute)
- [getAttribute](TorusGeometry.md#getattribute)
- [hasAttribute](TorusGeometry.md#hasattribute)
- [genWireframe](TorusGeometry.md#genwireframe)
- [compute](TorusGeometry.md#compute)
- [computeNormals](TorusGeometry.md#computenormals)
- [isPrimitive](TorusGeometry.md#isprimitive)
- [destroy](TorusGeometry.md#destroy)

## Constructors

### constructor

• **new TorusGeometry**(`radius?`, `tube?`, `radialSegments?`, `tubularSegments?`): [`TorusGeometry`](TorusGeometry.md)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `radius` | `number` | `0.4` | {number} Radius of torus, default value is 0.4 |
| `tube` | `number` | `0.1` | {number} Pipe radius, default value is 0.1. |
| `radialSegments` | `number` | `32` | {number}Number of torus segments, default value is 32. |
| `tubularSegments` | `number` | `32` | {number} Number of pipeline segments, defualt value is 32. |

#### Returns

[`TorusGeometry`](TorusGeometry.md)

#### Overrides

[GeometryBase](GeometryBase.md).[constructor](GeometryBase.md#constructor)

#### Defined in

shape/TorusGeometry.ts:39

## Properties

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

___

### radius

• **radius**: `number`

Radius of torus

#### Defined in

shape/TorusGeometry.ts:14

___

### tube

• **tube**: `number`

Pipe radius

#### Defined in

shape/TorusGeometry.ts:19

___

### radialSegments

• **radialSegments**: `number`

Number of torus segments.

#### Defined in

shape/TorusGeometry.ts:24

___

### tubularSegments

• **tubularSegments**: `number`

Number of pipeline segments.

#### Defined in

shape/TorusGeometry.ts:29

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
