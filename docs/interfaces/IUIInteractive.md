[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / IUIInteractive

# Interface: IUIInteractive

## Implemented by

- [`UIInteractive`](../classes/UIInteractive.md)

## Table of contents

### Properties

- [interactive](IUIInteractive.md#interactive)
- [enable](IUIInteractive.md#enable)
- [visible](IUIInteractive.md#visible)
- [object3D](IUIInteractive.md#object3d)

### Accessors

- [interactiveVisible](IUIInteractive.md#interactivevisible)
- [mouseStyle](IUIInteractive.md#mousestyle)

### Methods

- [rayPick](IUIInteractive.md#raypick)
- [destroy](IUIInteractive.md#destroy)

## Properties

### interactive

• **interactive**: `boolean`

#### Defined in

components/gui/uiComponents/IUIInteractive.ts:20

___

### enable

• **enable**: `boolean`

#### Defined in

components/gui/uiComponents/IUIInteractive.ts:21

___

### visible

• **visible**: `boolean`

#### Defined in

components/gui/uiComponents/IUIInteractive.ts:22

___

### object3D

• `Optional` **object3D**: [`Object3D`](../classes/Object3D.md)

#### Defined in

components/gui/uiComponents/IUIInteractive.ts:23

## Accessors

### interactiveVisible

• `get` **interactiveVisible**(): `boolean`

#### Returns

`boolean`

#### Defined in

components/gui/uiComponents/IUIInteractive.ts:24

___

### mouseStyle

• `set` **mouseStyle**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`UIInteractiveStyle`](../enums/UIInteractiveStyle.md) |

#### Returns

`void`

#### Defined in

components/gui/uiComponents/IUIInteractive.ts:32

## Methods

### rayPick

▸ **rayPick**(`ray`, `panel`, `screenPos`, `screenSize`): [`GUIHitInfo`](../modules.md#guihitinfo)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ray` | [`Ray`](../classes/Ray.md) |
| `panel` | `any` |
| `screenPos` | [`Vector2`](../classes/Vector2.md) |
| `screenSize` | [`Vector2`](../classes/Vector2.md) |

#### Returns

[`GUIHitInfo`](../modules.md#guihitinfo)

#### Defined in

components/gui/uiComponents/IUIInteractive.ts:25

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

components/gui/uiComponents/IUIInteractive.ts:31
