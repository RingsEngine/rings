[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / MemoryDO

# Class: MemoryDO

## Hierarchy

- **`MemoryDO`**

  ↳ [`SkeletonBlendComputeArgs`](SkeletonBlendComputeArgs.md)

  ↳ [`SkeletonTransformComputeArgs`](SkeletonTransformComputeArgs.md)

## Table of contents

### Constructors

- [constructor](MemoryDO.md#constructor)

### Properties

- [shareDataBuffer](MemoryDO.md#sharedatabuffer)

### Methods

- [allocation](MemoryDO.md#allocation)
- [allocation\_node](MemoryDO.md#allocation_node)
- [allocation\_memory](MemoryDO.md#allocation_memory)
- [reset](MemoryDO.md#reset)
- [destroy](MemoryDO.md#destroy)

## Constructors

### constructor

• **new MemoryDO**(): [`MemoryDO`](MemoryDO.md)

#### Returns

[`MemoryDO`](MemoryDO.md)

## Properties

### shareDataBuffer

• **shareDataBuffer**: `ArrayBuffer`

#### Defined in

core/pool/memory/MemoryDO.ts:4

## Methods

### allocation

▸ **allocation**(`byteSize`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `byteSize` | `number` |

#### Returns

`void`

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

#### Defined in

core/pool/memory/MemoryDO.ts:38

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

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

#### Defined in

core/pool/memory/MemoryDO.ts:66
