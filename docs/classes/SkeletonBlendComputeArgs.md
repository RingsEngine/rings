[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / SkeletonBlendComputeArgs

# Class: SkeletonBlendComputeArgs

## Hierarchy

- [`MemoryDO`](MemoryDO.md)

  ↳ **`SkeletonBlendComputeArgs`**

## Table of contents

### Constructors

- [constructor](SkeletonBlendComputeArgs.md#constructor)

### Properties

- [numJoint](SkeletonBlendComputeArgs.md#numjoint)
- [numState](SkeletonBlendComputeArgs.md#numstate)
- [time](SkeletonBlendComputeArgs.md#time)
- [weight](SkeletonBlendComputeArgs.md#weight)
- [argumentsData](SkeletonBlendComputeArgs.md#argumentsdata)
- [\_isDirty](SkeletonBlendComputeArgs.md#_isdirty)
- [\_argumentsBuffer](SkeletonBlendComputeArgs.md#_argumentsbuffer)
- [\_argumentsBufferEntries](SkeletonBlendComputeArgs.md#_argumentsbufferentries)
- [shareDataBuffer](SkeletonBlendComputeArgs.md#sharedatabuffer)

### Methods

- [getGPUBuffer](SkeletonBlendComputeArgs.md#getgpubuffer)
- [getGPUBindGroupEntry](SkeletonBlendComputeArgs.md#getgpubindgroupentry)
- [updateGPUBuffer](SkeletonBlendComputeArgs.md#updategpubuffer)
- [allocationMemorySet](SkeletonBlendComputeArgs.md#allocationmemoryset)
- [generateGPUBuffer](SkeletonBlendComputeArgs.md#generategpubuffer)
- [allocation](SkeletonBlendComputeArgs.md#allocation)
- [allocation\_node](SkeletonBlendComputeArgs.md#allocation_node)
- [allocation\_memory](SkeletonBlendComputeArgs.md#allocation_memory)
- [reset](SkeletonBlendComputeArgs.md#reset)
- [destroy](SkeletonBlendComputeArgs.md#destroy)

## Constructors

### constructor

• **new SkeletonBlendComputeArgs**(): [`SkeletonBlendComputeArgs`](SkeletonBlendComputeArgs.md)

#### Returns

[`SkeletonBlendComputeArgs`](SkeletonBlendComputeArgs.md)

#### Overrides

[MemoryDO](MemoryDO.md).[constructor](MemoryDO.md#constructor)

#### Defined in

components/anim/skeletonAnim/buffer/SkeletonBlendComputeArgs.ts:15

## Properties

### numJoint

• **numJoint**: [`MemoryInfo`](MemoryInfo.md)

#### Defined in

components/anim/skeletonAnim/buffer/SkeletonBlendComputeArgs.ts:6

___

### numState

• **numState**: [`MemoryInfo`](MemoryInfo.md)

#### Defined in

components/anim/skeletonAnim/buffer/SkeletonBlendComputeArgs.ts:7

___

### time

• **time**: [`MemoryInfo`](MemoryInfo.md)

#### Defined in

components/anim/skeletonAnim/buffer/SkeletonBlendComputeArgs.ts:8

___

### weight

• **weight**: [`MemoryInfo`](MemoryInfo.md)

#### Defined in

components/anim/skeletonAnim/buffer/SkeletonBlendComputeArgs.ts:9

___

### argumentsData

• **argumentsData**: `Object`

#### Index signature

▪ [name: `string`]: [`MemoryInfo`](MemoryInfo.md)

#### Defined in

components/anim/skeletonAnim/buffer/SkeletonBlendComputeArgs.ts:10

___

### \_isDirty

• `Protected` **\_isDirty**: `boolean` = `false`

#### Defined in

components/anim/skeletonAnim/buffer/SkeletonBlendComputeArgs.ts:11

___

### \_argumentsBuffer

• `Protected` **\_argumentsBuffer**: `GPUBuffer`

#### Defined in

components/anim/skeletonAnim/buffer/SkeletonBlendComputeArgs.ts:12

___

### \_argumentsBufferEntries

• `Protected` **\_argumentsBufferEntries**: `GPUBindGroupEntry`

#### Defined in

components/anim/skeletonAnim/buffer/SkeletonBlendComputeArgs.ts:13

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

components/anim/skeletonAnim/buffer/SkeletonBlendComputeArgs.ts:28

___

### getGPUBindGroupEntry

▸ **getGPUBindGroupEntry**(): `GPUBindGroupEntry`

#### Returns

`GPUBindGroupEntry`

#### Defined in

components/anim/skeletonAnim/buffer/SkeletonBlendComputeArgs.ts:32

___

### updateGPUBuffer

▸ **updateGPUBuffer**(): `this`

#### Returns

`this`

#### Defined in

components/anim/skeletonAnim/buffer/SkeletonBlendComputeArgs.ts:36

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

components/anim/skeletonAnim/buffer/SkeletonBlendComputeArgs.ts:48

___

### generateGPUBuffer

▸ **generateGPUBuffer**(): `void`

#### Returns

`void`

#### Defined in

components/anim/skeletonAnim/buffer/SkeletonBlendComputeArgs.ts:69

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
