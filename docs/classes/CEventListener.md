[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / CEventListener

# Class: CEventListener

## Hierarchy

- **`CEventListener`**

  ↳ [`View3D`](View3D.md)

## Table of contents

### Constructors

- [constructor](CEventListener.md#constructor)

### Properties

- [event\_id\_count](CEventListener.md#event_id_count)
- [id](CEventListener.md#id)
- [current](CEventListener.md#current)
- [type](CEventListener.md#type)
- [thisObject](CEventListener.md#thisobject)
- [handler](CEventListener.md#handler)
- [param](CEventListener.md#param)
- [priority](CEventListener.md#priority)

### Methods

- [equalCurrentListener](CEventListener.md#equalcurrentlistener)
- [dispose](CEventListener.md#dispose)

## Constructors

### constructor

• **new CEventListener**(`type?`, `thisObject?`, `handler?`, `param?`, `priority?`): [`CEventListener`](CEventListener.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `type` | `string` \| `number` | `null` |
| `thisObject` | `any` | `null` |
| `handler` | `Function` | `null` |
| `param` | `any` | `null` |
| `priority` | `number` | `0` |

#### Returns

[`CEventListener`](CEventListener.md)

#### Defined in

event/CEventListener.ts:6

## Properties

### event\_id\_count

▪ `Static` **event\_id\_count**: `number` = `0`

#### Defined in

event/CEventListener.ts:2

___

### id

• **id**: `number` = `0`

#### Defined in

event/CEventListener.ts:3

___

### current

• **current**: `any`

#### Defined in

event/CEventListener.ts:4

___

### type

• **type**: `string` \| `number` = `null`

#### Defined in

event/CEventListener.ts:7

___

### thisObject

• **thisObject**: `any` = `null`

#### Defined in

event/CEventListener.ts:8

___

### handler

• **handler**: `Function` = `null`

#### Defined in

event/CEventListener.ts:9

___

### param

• **param**: `any` = `null`

#### Defined in

event/CEventListener.ts:10

___

### priority

• **priority**: `number` = `0`

#### Defined in

event/CEventListener.ts:11

## Methods

### equalCurrentListener

▸ **equalCurrentListener**(`type`, `handler`, `thisObject`, `param`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `number` |
| `handler` | `Function` |
| `thisObject` | `any` |
| `param` | `any` |

#### Returns

`boolean`

#### Defined in

event/CEventListener.ts:14

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Defined in

event/CEventListener.ts:31
