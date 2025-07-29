[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / CylinderGeometry

# Class: CylinderGeometry

Cylinder geometry

## Hierarchy

- [`GeometryBase`](GeometryBase.md)

  ↳ **`CylinderGeometry`**

## Table of contents

### Constructors

- [constructor](CylinderGeometry.md#constructor)

### Properties

- [instanceID](CylinderGeometry.md#instanceid)
- [name](CylinderGeometry.md#name)
- [subGeometries](CylinderGeometry.md#subgeometries)
- [morphTargetsRelative](CylinderGeometry.md#morphtargetsrelative)
- [morphTargetDictionary](CylinderGeometry.md#morphtargetdictionary)
- [skinNames](CylinderGeometry.md#skinnames)
- [bindPose](CylinderGeometry.md#bindpose)
- [blendShapeData](CylinderGeometry.md#blendshapedata)
- [vertexDim](CylinderGeometry.md#vertexdim)
- [vertexCount](CylinderGeometry.md#vertexcount)
- [radiusTop](CylinderGeometry.md#radiustop)
- [radiusBottom](CylinderGeometry.md#radiusbottom)
- [height](CylinderGeometry.md#height)
- [radialSegments](CylinderGeometry.md#radialsegments)
- [heightSegments](CylinderGeometry.md#heightsegments)
- [openEnded](CylinderGeometry.md#openended)
- [thetaStart](CylinderGeometry.md#thetastart)
- [thetaLength](CylinderGeometry.md#thetalength)

### Accessors

- [indicesBuffer](CylinderGeometry.md#indicesbuffer)
- [vertexBuffer](CylinderGeometry.md#vertexbuffer)
- [vertexAttributes](CylinderGeometry.md#vertexattributes)
- [vertexAttributeMap](CylinderGeometry.md#vertexattributemap)
- [geometryType](CylinderGeometry.md#geometrytype)
- [bounds](CylinderGeometry.md#bounds)

### Methods

- [addSubGeometry](CylinderGeometry.md#addsubgeometry)
- [generate](CylinderGeometry.md#generate)
- [setIndices](CylinderGeometry.md#setindices)
- [setAttribute](CylinderGeometry.md#setattribute)
- [getAttribute](CylinderGeometry.md#getattribute)
- [hasAttribute](CylinderGeometry.md#hasattribute)
- [genWireframe](CylinderGeometry.md#genwireframe)
- [compute](CylinderGeometry.md#compute)
- [computeNormals](CylinderGeometry.md#computenormals)
- [isPrimitive](CylinderGeometry.md#isprimitive)
- [destroy](CylinderGeometry.md#destroy)
- [buildGeometry](CylinderGeometry.md#buildgeometry)

## Constructors

### constructor

• **new CylinderGeometry**(`radiusTop?`, `radiusBottom?`, `height?`, `radialSegments?`, `heightSegments?`, `openEnded?`, `thetaStart?`, `thetaLength?`): [`CylinderGeometry`](CylinderGeometry.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `radiusTop` | `number` | `1` |
| `radiusBottom` | `number` | `1` |
| `height` | `number` | `1` |
| `radialSegments` | `number` | `8` |
| `heightSegments` | `number` | `8` |
| `openEnded` | `boolean` | `false` |
| `thetaStart` | `number` | `0` |
| `thetaLength` | `number` | `undefined` |

#### Returns

[`CylinderGeometry`](CylinderGeometry.md)

#### Overrides

[GeometryBase](GeometryBase.md).[constructor](GeometryBase.md#constructor)

#### Defined in

shape/CylinderGeometry.ts:57

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

### radiusTop

• **radiusTop**: `number`

The radius of the top of the cylinder

#### Defined in

shape/CylinderGeometry.ts:15

___

### radiusBottom

• **radiusBottom**: `number`

The radius of the bottom of the cylinder

#### Defined in

shape/CylinderGeometry.ts:19

___

### height

• **height**: `number`

The height of the cylinder

#### Defined in

shape/CylinderGeometry.ts:23

___

### radialSegments

• **radialSegments**: `number`

Number of segments around the side of the cylinder

#### Defined in

shape/CylinderGeometry.ts:27

___

### heightSegments

• **heightSegments**: `number`

The number of segments along the height of the cylindrical side

#### Defined in

shape/CylinderGeometry.ts:31

___

### openEnded

• **openEnded**: `boolean`

Indicate whether the bottom surface of the cone is open or capped. The default value is false, which means that the bottom surface is capped by default.

#### Defined in

shape/CylinderGeometry.ts:35

___

### thetaStart

• **thetaStart**: `number`

Starting angle of the first segment

#### Defined in

shape/CylinderGeometry.ts:39

___

### thetaLength

• **thetaLength**: `number`

The center angle of the circular sector on the bottom of the cylinder, with a default value of 2 * PI, makes it a complete cylinder.

#### Defined in

shape/CylinderGeometry.ts:43

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

___

### buildGeometry

▸ **buildGeometry**(): `void`

#### Returns

`void`

#### Defined in

shape/CylinderGeometry.ts:98
