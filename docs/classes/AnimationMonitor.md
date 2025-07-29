[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / AnimationMonitor

# Class: AnimationMonitor

## Table of contents

### Constructors

- [constructor](AnimationMonitor.md#constructor)

### Properties

- [Complete](AnimationMonitor.md#complete)
- [Seek](AnimationMonitor.md#seek)
- [speed](AnimationMonitor.md#speed)

### Accessors

- [time](AnimationMonitor.md#time)
- [currentClip](AnimationMonitor.md#currentclip)
- [isPlaying](AnimationMonitor.md#isplaying)

### Methods

- [play](AnimationMonitor.md#play)
- [stop](AnimationMonitor.md#stop)
- [toggle](AnimationMonitor.md#toggle)
- [update](AnimationMonitor.md#update)
- [seek](AnimationMonitor.md#seek-1)

## Constructors

### constructor

• **new AnimationMonitor**(`animation`): [`AnimationMonitor`](AnimationMonitor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `animation` | [`PropertyAnimation`](PropertyAnimation.md) |

#### Returns

[`AnimationMonitor`](AnimationMonitor.md)

#### Defined in

components/anim/curveAnim/AnimationMonitor.ts:27

## Properties

### Complete

▪ `Static` `Readonly` **Complete**: `number` = `0`

#### Defined in

components/anim/curveAnim/AnimationMonitor.ts:12

___

### Seek

▪ `Static` `Readonly` **Seek**: `number` = `1`

#### Defined in

components/anim/curveAnim/AnimationMonitor.ts:13

___

### speed

• **speed**: `number` = `1`

#### Defined in

components/anim/curveAnim/AnimationMonitor.ts:24

## Accessors

### time

• `get` **time**(): `number`

#### Returns

`number`

#### Defined in

components/anim/curveAnim/AnimationMonitor.ts:39

___

### currentClip

• `get` **currentClip**(): [`PropertyAnimClip`](PropertyAnimClip.md)

#### Returns

[`PropertyAnimClip`](PropertyAnimClip.md)

#### Defined in

components/anim/curveAnim/AnimationMonitor.ts:43

___

### isPlaying

• `get` **isPlaying**(): `boolean`

#### Returns

`boolean`

#### Defined in

components/anim/curveAnim/AnimationMonitor.ts:109

## Methods

### play

▸ **play**(`clip`, `reset?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `clip` | [`PropertyAnimClip`](PropertyAnimClip.md) | `undefined` |
| `reset` | `boolean` | `true` |

#### Returns

`void`

#### Defined in

components/anim/curveAnim/AnimationMonitor.ts:47

___

### stop

▸ **stop**(): `this`

#### Returns

`this`

#### Defined in

components/anim/curveAnim/AnimationMonitor.ts:99

___

### toggle

▸ **toggle**(): `this`

#### Returns

`this`

#### Defined in

components/anim/curveAnim/AnimationMonitor.ts:104

___

### update

▸ **update**(`time`, `delta`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `time` | `number` |
| `delta` | `number` |

#### Returns

`void`

#### Defined in

components/anim/curveAnim/AnimationMonitor.ts:113

___

### seek

▸ **seek**(`time`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `time` | `number` |

#### Returns

`this`

#### Defined in

components/anim/curveAnim/AnimationMonitor.ts:143
