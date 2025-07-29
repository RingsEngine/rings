[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / ClusterLightingBuffer

# Class: ClusterLightingBuffer

## Table of contents

### Constructors

- [constructor](ClusterLightingBuffer.md#constructor)

### Properties

- [clusterBuffer](ClusterLightingBuffer.md#clusterbuffer)
- [lightAssignBuffer](ClusterLightingBuffer.md#lightassignbuffer)
- [assignTableBuffer](ClusterLightingBuffer.md#assigntablebuffer)
- [clustersUniformBuffer](ClusterLightingBuffer.md#clustersuniformbuffer)

### Methods

- [update](ClusterLightingBuffer.md#update)

## Constructors

### constructor

• **new ClusterLightingBuffer**(`numClusters`, `maxNumLightsPerCluster`): [`ClusterLightingBuffer`](ClusterLightingBuffer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `numClusters` | `number` |
| `maxNumLightsPerCluster` | `number` |

#### Returns

[`ClusterLightingBuffer`](ClusterLightingBuffer.md)

#### Defined in

gfx/renderJob/passRenderer/cluster/ClusterLightingBuffer.ts:10

## Properties

### clusterBuffer

• **clusterBuffer**: [`ComputeGPUBuffer`](ComputeGPUBuffer.md)

#### Defined in

gfx/renderJob/passRenderer/cluster/ClusterLightingBuffer.ts:5

___

### lightAssignBuffer

• **lightAssignBuffer**: [`ComputeGPUBuffer`](ComputeGPUBuffer.md)

#### Defined in

gfx/renderJob/passRenderer/cluster/ClusterLightingBuffer.ts:6

___

### assignTableBuffer

• **assignTableBuffer**: [`ComputeGPUBuffer`](ComputeGPUBuffer.md)

#### Defined in

gfx/renderJob/passRenderer/cluster/ClusterLightingBuffer.ts:7

___

### clustersUniformBuffer

• **clustersUniformBuffer**: [`UniformGPUBuffer`](UniformGPUBuffer.md)

#### Defined in

gfx/renderJob/passRenderer/cluster/ClusterLightingBuffer.ts:8

## Methods

### update

▸ **update**(`width`, `height`, `clusterPix`, `clusterTileX`, `clusterTileY`, `clusterTileZ`, `numLights`, `maxNumLightsPerCluster`, `near`, `far`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `height` | `number` |
| `clusterPix` | `number` |
| `clusterTileX` | `number` |
| `clusterTileY` | `number` |
| `clusterTileZ` | `number` |
| `numLights` | `number` |
| `maxNumLightsPerCluster` | `number` |
| `near` | `number` |
| `far` | `number` |

#### Returns

`void`

#### Defined in

gfx/renderJob/passRenderer/cluster/ClusterLightingBuffer.ts:28
