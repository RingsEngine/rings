[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / GeometryBase

# Class: GeometryBase

## Hierarchy

- **`GeometryBase`**

  ↳ [`GUIGeometry`](GUIGeometry.md)

  ↳ [`ExtrudeGeometry`](ExtrudeGeometry.md)

  ↳ [`BoxGeometry`](BoxGeometry.md)

  ↳ [`CylinderGeometry`](CylinderGeometry.md)

  ↳ [`PlaneGeometry`](PlaneGeometry.md)

  ↳ [`SphereGeometry`](SphereGeometry.md)

  ↳ [`TorusGeometry`](TorusGeometry.md)

  ↳ [`TrailGeometry`](TrailGeometry.md)

  ↳ [`TriGeometry`](TriGeometry.md)

## Table of contents

### Constructors

- [constructor](GeometryBase.md#constructor)

### Properties

- [instanceID](GeometryBase.md#instanceid)
- [name](GeometryBase.md#name)
- [subGeometries](GeometryBase.md#subgeometries)
- [morphTargetsRelative](GeometryBase.md#morphtargetsrelative)
- [morphTargetDictionary](GeometryBase.md#morphtargetdictionary)
- [skinNames](GeometryBase.md#skinnames)
- [bindPose](GeometryBase.md#bindpose)
- [blendShapeData](GeometryBase.md#blendshapedata)
- [vertexDim](GeometryBase.md#vertexdim)
- [vertexCount](GeometryBase.md#vertexcount)

### Accessors

- [indicesBuffer](GeometryBase.md#indicesbuffer)
- [vertexBuffer](GeometryBase.md#vertexbuffer)
- [vertexAttributes](GeometryBase.md#vertexattributes)
- [vertexAttributeMap](GeometryBase.md#vertexattributemap)
- [geometryType](GeometryBase.md#geometrytype)
- [bounds](GeometryBase.md#bounds)

### Methods

- [addSubGeometry](GeometryBase.md#addsubgeometry)
- [generate](GeometryBase.md#generate)
- [setIndices](GeometryBase.md#setindices)
- [setAttribute](GeometryBase.md#setattribute)
- [getAttribute](GeometryBase.md#getattribute)
- [hasAttribute](GeometryBase.md#hasattribute)
- [genWireframe](GeometryBase.md#genwireframe)
- [compute](GeometryBase.md#compute)
- [computeNormals](GeometryBase.md#computenormals)
- [isPrimitive](GeometryBase.md#isprimitive)
- [destroy](GeometryBase.md#destroy)

## Constructors

### constructor

• **new GeometryBase**(): [`GeometryBase`](GeometryBase.md)

#### Returns

[`GeometryBase`](GeometryBase.md)

#### Defined in

core/geometry/GeometryBase.ts:47

## Properties

### instanceID

• **instanceID**: `string`

#### Defined in

core/geometry/GeometryBase.ts:29

___

### name

• **name**: `string`

#### Defined in

core/geometry/GeometryBase.ts:30

___

### subGeometries

• **subGeometries**: [`SubGeometry`](SubGeometry.md)[] = `[]`

#### Defined in

core/geometry/GeometryBase.ts:31

___

### morphTargetsRelative

• **morphTargetsRelative**: `boolean`

#### Defined in

core/geometry/GeometryBase.ts:32

___

### morphTargetDictionary

• **morphTargetDictionary**: `Object`

#### Index signature

▪ [blenderName: `string`]: `number`

#### Defined in

core/geometry/GeometryBase.ts:33

___

### skinNames

• **skinNames**: `string`[]

#### Defined in

core/geometry/GeometryBase.ts:34

___

### bindPose

• **bindPose**: [`Matrix4`](Matrix4.md)[]

#### Defined in

core/geometry/GeometryBase.ts:35

___

### blendShapeData

• **blendShapeData**: [`BlendShapeData`](BlendShapeData.md)

#### Defined in

core/geometry/GeometryBase.ts:36

___

### vertexDim

• **vertexDim**: `number`

#### Defined in

core/geometry/GeometryBase.ts:37

___

### vertexCount

• **vertexCount**: `number` = `0`

#### Defined in

core/geometry/GeometryBase.ts:38

## Accessors

### indicesBuffer

• `get` **indicesBuffer**(): [`GeometryIndicesBuffer`](GeometryIndicesBuffer.md)

#### Returns

[`GeometryIndicesBuffer`](GeometryIndicesBuffer.md)

#### Defined in

core/geometry/GeometryBase.ts:54

___

### vertexBuffer

• `get` **vertexBuffer**(): [`GeometryVertexBuffer`](GeometryVertexBuffer.md)

#### Returns

[`GeometryVertexBuffer`](GeometryVertexBuffer.md)

#### Defined in

core/geometry/GeometryBase.ts:58

___

### vertexAttributes

• `get` **vertexAttributes**(): `string`[]

#### Returns

`string`[]

#### Defined in

core/geometry/GeometryBase.ts:62

___

### vertexAttributeMap

• `get` **vertexAttributeMap**(): `Map`\<`string`, [`VertexAttributeData`](../modules.md#vertexattributedata)\>

#### Returns

`Map`\<`string`, [`VertexAttributeData`](../modules.md#vertexattributedata)\>

#### Defined in

core/geometry/GeometryBase.ts:66

___

### geometryType

• `get` **geometryType**(): [`GeometryVertexType`](../enums/GeometryVertexType.md)

#### Returns

[`GeometryVertexType`](../enums/GeometryVertexType.md)

#### Defined in

core/geometry/GeometryBase.ts:70

• `set` **geometryType**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`GeometryVertexType`](../enums/GeometryVertexType.md) |

#### Returns

`void`

#### Defined in

core/geometry/GeometryBase.ts:73

___

### bounds

• `get` **bounds**(): [`BoundingBox`](BoundingBox.md)

#### Returns

[`BoundingBox`](BoundingBox.md)

#### Defined in

core/geometry/GeometryBase.ts:77

• `set` **bounds**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`BoundingBox`](BoundingBox.md) |

#### Returns

`void`

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

#### Defined in

core/geometry/GeometryBase.ts:180

___

### genWireframe

▸ **genWireframe**(): [`Vector3`](Vector3.md)[]

#### Returns

[`Vector3`](Vector3.md)[]

#### Defined in

core/geometry/GeometryBase.ts:184

___

### compute

▸ **compute**(): `void`

#### Returns

`void`

#### Defined in

core/geometry/GeometryBase.ts:268

___

### computeNormals

▸ **computeNormals**(): `this`

#### Returns

`this`

#### Defined in

core/geometry/GeometryBase.ts:286

___

### isPrimitive

▸ **isPrimitive**(): `boolean`

#### Returns

`boolean`

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

#### Defined in

core/geometry/GeometryBase.ts:352
