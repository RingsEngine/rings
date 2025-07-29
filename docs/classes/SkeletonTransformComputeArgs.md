[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / SkeletonTransformComputeArgs

# Class: SkeletonTransformComputeArgs

## Hierarchy

- [`MemoryDO`](MemoryDO.md)

  ↳ **`SkeletonTransformComputeArgs`**

## Table of contents

### Constructors

- [constructor](SkeletonTransformComputeArgs.md#constructor)

### Properties

- [numJoint](SkeletonTransformComputeArgs.md#numjoint)
- [numFrame](SkeletonTransformComputeArgs.md#numframe)
- [retain0](SkeletonTransformComputeArgs.md#retain0)
- [retain1](SkeletonTransformComputeArgs.md#retain1)
- [argumentsData](SkeletonTransformComputeArgs.md#argumentsdata)
- [\_isDirty](SkeletonTransformComputeArgs.md#_isdirty)
- [\_argumentsBuffer](SkeletonTransformComputeArgs.md#_argumentsbuffer)
- [\_argumentsBufferEntries](SkeletonTransformComputeArgs.md#_argumentsbufferentries)
- [shareDataBuffer](SkeletonTransformComputeArgs.md#sharedatabuffer)

### Methods

- [getGPUBuffer](SkeletonTransformComputeArgs.md#getgpubuffer)
- [getGPUBindGroupEntry](SkeletonTransformComputeArgs.md#getgpubindgroupentry)
- [updateGPUBuffer](SkeletonTransformComputeArgs.md#updategpubuffer)
- [allocationMemorySet](SkeletonTransformComputeArgs.md#allocationmemoryset)
- [generateGPUBuffer](SkeletonTransformComputeArgs.md#generategpubuffer)
- [allocation](SkeletonTransformComputeArgs.md#allocation)
- [allocation\_node](SkeletonTransformComputeArgs.md#allocation_node)
- [allocation\_memory](SkeletonTransformComputeArgs.md#allocation_memory)
- [reset](SkeletonTransformComputeArgs.md#reset)
- [destroy](SkeletonTransformComputeArgs.md#destroy)

## Constructors

### constructor

• **new SkeletonTransformComputeArgs**(): [`SkeletonTransformComputeArgs`](SkeletonTransformComputeArgs.md)

#### Returns

[`SkeletonTransformComputeArgs`](SkeletonTransformComputeArgs.md)

#### Overrides

[MemoryDO](MemoryDO.md).[constructor](MemoryDO.md#constructor)

#### Defined in

components/anim/skeletonAnim/buffer/SkeletonTransformComputeArgs.ts:15

## Properties

### numJoint

• **numJoint**: [`MemoryInfo`](MemoryInfo.md)

#### Defined in

components/anim/skeletonAnim/buffer/SkeletonTransformComputeArgs.ts:6

___

### numFrame

• **numFrame**: [`MemoryInfo`](MemoryInfo.md)

#### Defined in

components/anim/skeletonAnim/buffer/SkeletonTransformComputeArgs.ts:7

___

### retain0

• **retain0**: [`MemoryInfo`](MemoryInfo.md)

#### Defined in

components/anim/skeletonAnim/buffer/SkeletonTransformComputeArgs.ts:8

___

### retain1

• **retain1**: [`MemoryInfo`](MemoryInfo.md)

#### Defined in

components/anim/skeletonAnim/buffer/SkeletonTransformComputeArgs.ts:9

___

### argumentsData

• **argumentsData**: `Object`

#### Index signature

▪ [name: `string`]: [`MemoryInfo`](MemoryInfo.md)

#### Defined in

components/anim/skeletonAnim/buffer/SkeletonTransformComputeArgs.ts:10

___

### \_isDirty

• `Protected` **\_isDirty**: `boolean` = `false`

#### Defined in

components/anim/skeletonAnim/buffer/SkeletonTransformComputeArgs.ts:11

___

### \_argumentsBuffer

• `Protected` **\_argumentsBuffer**: `GPUBuffer`

#### Defined in

components/anim/skeletonAnim/buffer/SkeletonTransformComputeArgs.ts:12

___

### \_argumentsBufferEntries

• `Protected` **\_argumentsBufferEntries**: `GPUBindGroupEntry`

#### Defined in

components/anim/skeletonAnim/buffer/SkeletonTransformComputeArgs.ts:13

___

### shareDataBuffer

• **shareDataBuffer**: `ArrayBuffer`

#### Inherited from

[MemoryDO](MemoryDO.md).[shareDataBuffer](MemoryDO.md#sharedatabuffer)

#### Defined in

core/pool/memory/MemoryDO.ts:4

## Methods

### getGPUBuffer

▸ **getGPUBuffer**(): `GPUBuffer`

#### Returns

`GPUBuffer`

#### Defined in

components/anim/skeletonAnim/buffer/SkeletonTransformComputeArgs.ts:26

___

### getGPUBindGroupEntry

▸ **getGPUBindGroupEntry**(): `GPUBindGroupEntry`

#### Returns

`GPUBindGroupEntry`

#### Defined in

components/anim/skeletonAnim/buffer/SkeletonTransformComputeArgs.ts:30

___

### updateGPUBuffer

▸ **updateGPUBuffer**(): `void`

#### Returns

`void`

#### Defined in

components/anim/skeletonAnim/buffer/SkeletonTransformComputeArgs.ts:34

___

### allocationMemorySet

▸ **allocationMemorySet**(`dataDic`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataDic` | \{ `name`: `string` ; `data`: `number`[]  }[] |

#### Returns

`void`

#### Defined in

components/anim/skeletonAnim/buffer/SkeletonTransformComputeArgs.ts:45

___

### generateGPUBuffer

▸ **generateGPUBuffer**(): `void`

#### Returns

`void`

#### Defined in

components/anim/skeletonAnim/buffer/SkeletonTransformComputeArgs.ts:67

___

### allocation

▸ **allocation**(`byteSize`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `byteSize` | `number` |

#### Returns

`void`

#### Inherited from

[MemoryDO](MemoryDO.md).[allocation](MemoryDO.md#allocation)

#### Defined in

core/pool/memory/MemoryDO.ts:7

___

### allocation\_node

▸ **allocation_node**(`byteSize`): [`MemoryInfo`](MemoryInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `byteSize` | `number` |

#### Returns

[`MemoryInfo`](MemoryInfo.md)

#### Inherited from

[MemoryDO](MemoryDO.md).[allocation_node](MemoryDO.md#allocation_node)

#### Defined in

core/pool/memory/MemoryDO.ts:15

___

### allocation\_memory

▸ **allocation_memory**(`memoryInfo`): [`MemoryInfo`](MemoryInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `memoryInfo` | [`MemoryInfo`](MemoryInfo.md) |

#### Returns

[`MemoryInfo`](MemoryInfo.md)

#### Inherited from

[MemoryDO](MemoryDO.md).[allocation_memory](MemoryDO.md#allocation_memory)

#### Defined in

core/pool/memory/MemoryDO.ts:38

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Inherited from

[MemoryDO](MemoryDO.md).[reset](MemoryDO.md#reset)

#### Defined in

core/pool/memory/MemoryDO.ts:62

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

[MemoryDO](MemoryDO.md).[destroy](MemoryDO.md#destroy)

#### Defined in

core/pool/memory/MemoryDO.ts:66
