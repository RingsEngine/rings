[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / ExtrudeGeometry

# Class: ExtrudeGeometry

## Hierarchy

- [`GeometryBase`](GeometryBase.md)

  ↳ **`ExtrudeGeometry`**

## Table of contents

### Constructors

- [constructor](ExtrudeGeometry.md#constructor)

### Properties

- [vScale](ExtrudeGeometry.md#vscale)
- [uNegate](ExtrudeGeometry.md#unegate)
- [sections](ExtrudeGeometry.md#sections)
- [instanceID](ExtrudeGeometry.md#instanceid)
- [name](ExtrudeGeometry.md#name)
- [subGeometries](ExtrudeGeometry.md#subgeometries)
- [morphTargetsRelative](ExtrudeGeometry.md#morphtargetsrelative)
- [morphTargetDictionary](ExtrudeGeometry.md#morphtargetdictionary)
- [skinNames](ExtrudeGeometry.md#skinnames)
- [bindPose](ExtrudeGeometry.md#bindpose)
- [blendShapeData](ExtrudeGeometry.md#blendshapedata)
- [vertexDim](ExtrudeGeometry.md#vertexdim)
- [vertexCount](ExtrudeGeometry.md#vertexcount)

### Accessors

- [indicesBuffer](ExtrudeGeometry.md#indicesbuffer)
- [vertexBuffer](ExtrudeGeometry.md#vertexbuffer)
- [vertexAttributes](ExtrudeGeometry.md#vertexattributes)
- [vertexAttributeMap](ExtrudeGeometry.md#vertexattributemap)
- [geometryType](ExtrudeGeometry.md#geometrytype)
- [bounds](ExtrudeGeometry.md#bounds)

### Methods

- [build](ExtrudeGeometry.md#build)
- [addSubGeometry](ExtrudeGeometry.md#addsubgeometry)
- [generate](ExtrudeGeometry.md#generate)
- [setIndices](ExtrudeGeometry.md#setindices)
- [setAttribute](ExtrudeGeometry.md#setattribute)
- [getAttribute](ExtrudeGeometry.md#getattribute)
- [hasAttribute](ExtrudeGeometry.md#hasattribute)
- [genWireframe](ExtrudeGeometry.md#genwireframe)
- [compute](ExtrudeGeometry.md#compute)
- [computeNormals](ExtrudeGeometry.md#computenormals)
- [isPrimitive](ExtrudeGeometry.md#isprimitive)
- [destroy](ExtrudeGeometry.md#destroy)

## Constructors

### constructor

• **new ExtrudeGeometry**(): [`ExtrudeGeometry`](ExtrudeGeometry.md)

#### Returns

[`ExtrudeGeometry`](ExtrudeGeometry.md)

#### Inherited from

[GeometryBase](GeometryBase.md).[constructor](GeometryBase.md#constructor)

#### Defined in

core/geometry/GeometryBase.ts:47

## Properties

### vScale

• **vScale**: `number`

#### Defined in

core/geometry/ExtrudeGeometry.ts:21

___

### uNegate

• **uNegate**: `boolean`

#### Defined in

core/geometry/ExtrudeGeometry.ts:22

___

### sections

• **sections**: `Section`[]

#### Defined in

core/geometry/ExtrudeGeometry.ts:23

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

### build

▸ **build**(`shape`, `isShapeClosed`, `path`, `vScale?`, `uNegate?`): `this`

挤压几何体生成器
用于将2D形状沿3D路径挤压形成3D几何体
关于起点和终点的处理说明：
请勿手动将起点克隆到形状数组末尾

closed参数说明：
true - 自动闭合形状（会克隆起点到末尾）
false - 保持开放形状

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `shape` | [`Vector3`](Vector3.md)[] | `undefined` |
| `isShapeClosed` | `boolean` | `undefined` |
| `path` | [`Vector3`](Vector3.md)[] | `undefined` |
| `vScale` | `number` | `1.0` |
| `uNegate` | `boolean` | `true` |

#### Returns

`this`

#### Defined in

core/geometry/ExtrudeGeometry.ts:36

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
