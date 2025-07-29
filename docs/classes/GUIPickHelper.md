[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / GUIPickHelper

# Class: GUIPickHelper

## Table of contents

### Constructors

- [constructor](GUIPickHelper.md#constructor)

### Methods

- [rayPick](GUIPickHelper.md#raypick)

## Constructors

### constructor

• **new GUIPickHelper**(): [`GUIPickHelper`](GUIPickHelper.md)

#### Returns

[`GUIPickHelper`](GUIPickHelper.md)

## Methods

### rayPick

▸ **rayPick**(`ray`, `screenPos`, `screenSize`, `space`, `panelRatio`, `uiTransform`, `worldMatrix`): [`GUIHitInfo`](../modules.md#guihitinfo)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ray` | [`Ray`](Ray.md) |
| `screenPos` | [`Vector2`](Vector2.md) |
| `screenSize` | [`Vector2`](Vector2.md) |
| `space` | [`GUISpace`](../enums/GUISpace.md) |
| `panelRatio` | `number` |
| `uiTransform` | [`UITransform`](UITransform.md) |
| `worldMatrix` | [`Matrix4`](Matrix4.md) |

#### Returns

[`GUIHitInfo`](../modules.md#guihitinfo)

#### Defined in

components/gui/GUIPickHelper.ts:35
