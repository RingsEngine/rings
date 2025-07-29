[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / SkeletonAnimationCompute

# Class: SkeletonAnimationCompute

## Table of contents

### Constructors

- [constructor](SkeletonAnimationCompute.md#constructor)

### Methods

- [compute](SkeletonAnimationCompute.md#compute)

## Constructors

### constructor

• **new SkeletonAnimationCompute**(`computeShader`, `entries`): [`SkeletonAnimationCompute`](SkeletonAnimationCompute.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `computeShader` | `string` |
| `entries` | `GPUBindGroupEntry`[] |

#### Returns

[`SkeletonAnimationCompute`](SkeletonAnimationCompute.md)

#### Defined in

components/anim/skeletonAnim/SkeletonAnimationCompute.ts:7

## Methods

### compute

▸ **compute**(`command`, `workgroupCountX`, `workgroupCountY?`, `workgroupCountZ?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `GPUCommandEncoder` |
| `workgroupCountX` | `number` |
| `workgroupCountY?` | `number` |
| `workgroupCountZ?` | `number` |

#### Returns

`this`

#### Defined in

components/anim/skeletonAnim/SkeletonAnimationCompute.ts:25
