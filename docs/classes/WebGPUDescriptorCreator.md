[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / WebGPUDescriptorCreator

# Class: WebGPUDescriptorCreator

## Table of contents

### Constructors

- [constructor](WebGPUDescriptorCreator.md#constructor)

### Methods

- [createRendererPassState](WebGPUDescriptorCreator.md#createrendererpassstate)
- [getRenderPassDescriptor](WebGPUDescriptorCreator.md#getrenderpassdescriptor)
- [getRenderBundleDescriptor](WebGPUDescriptorCreator.md#getrenderbundledescriptor)

## Constructors

### constructor

• **new WebGPUDescriptorCreator**(): [`WebGPUDescriptorCreator`](WebGPUDescriptorCreator.md)

#### Returns

[`WebGPUDescriptorCreator`](WebGPUDescriptorCreator.md)

## Methods

### createRendererPassState

▸ **createRendererPassState**(`rtFrame`, `loadOp?`): [`RendererPassState`](RendererPassState.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `rtFrame` | [`RTFrame`](RTFrame.md) | `undefined` |
| `loadOp` | `GPULoadOp` | `null` |

#### Returns

[`RendererPassState`](RendererPassState.md)

#### Defined in

gfx/graphics/webGpu/descriptor/WebGPUDescriptorCreator.ts:12

___

### getRenderPassDescriptor

▸ **getRenderPassDescriptor**(`renderPassState`, `loadOp?`): `any`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `renderPassState` | [`RendererPassState`](RendererPassState.md) | `undefined` |
| `loadOp` | `GPULoadOp` | `null` |

#### Returns

`any`

#### Defined in

gfx/graphics/webGpu/descriptor/WebGPUDescriptorCreator.ts:76

___

### getRenderBundleDescriptor

▸ **getRenderBundleDescriptor**(`renderPassState`): `GPURenderBundleEncoderDescriptor`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderPassState` | [`RendererPassState`](RendererPassState.md) |

#### Returns

`GPURenderBundleEncoderDescriptor`

#### Defined in

gfx/graphics/webGpu/descriptor/WebGPUDescriptorCreator.ts:162
