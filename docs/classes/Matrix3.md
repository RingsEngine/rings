[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / Matrix3

# Class: Matrix3

## Table of contents

### Constructors

- [constructor](Matrix3.md#constructor)

### Properties

- [a](Matrix3.md#a)
- [b](Matrix3.md#b)
- [c](Matrix3.md#c)
- [d](Matrix3.md#d)
- [tx](Matrix3.md#tx)
- [ty](Matrix3.md#ty)

### Methods

- [clone](Matrix3.md#clone)
- [concat](Matrix3.md#concat)
- [copyFrom](Matrix3.md#copyfrom)
- [identity](Matrix3.md#identity)
- [invert](Matrix3.md#invert)
- [rotate](Matrix3.md#rotate)
- [scale](Matrix3.md#scale)
- [setTo](Matrix3.md#setto)
- [transformPoint](Matrix3.md#transformpoint)
- [setTranslate](Matrix3.md#settranslate)
- [translate](Matrix3.md#translate)
- [mul](Matrix3.md#mul)
- [equals](Matrix3.md#equals)
- [prepend](Matrix3.md#prepend)
- [append](Matrix3.md#append)
- [deltaTransformPoint](Matrix3.md#deltatransformpoint)
- [toString](Matrix3.md#tostring)
- [createBox](Matrix3.md#createbox)
- [createGradientBox](Matrix3.md#creategradientbox)

## Constructors

### constructor

• **new Matrix3**(`a?`, `b?`, `c?`, `d?`, `tx?`, `ty?`): [`Matrix3`](Matrix3.md)

Create a Matrix3

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `a` | `number` | `1` | The width of x |
| `b` | `number` | `0` | The slope of y |
| `c` | `number` | `0` | The slope of x |
| `d` | `number` | `1` | The height of y |
| `tx` | `number` | `0` | The position of the x coordinate |
| `ty` | `number` | `0` | The position of the y coordinate |

#### Returns

[`Matrix3`](Matrix3.md)

#### Defined in

math/Matrix3.ts:25

## Properties

### a

• **a**: `number`

#### Defined in

math/Matrix3.ts:9

___

### b

• **b**: `number`

#### Defined in

math/Matrix3.ts:10

___

### c

• **c**: `number`

#### Defined in

math/Matrix3.ts:11

___

### d

• **d**: `number`

#### Defined in

math/Matrix3.ts:12

___

### tx

• **tx**: `number`

#### Defined in

math/Matrix3.ts:13

___

### ty

• **ty**: `number`

#### Defined in

math/Matrix3.ts:14

## Methods

### clone

▸ **clone**(): [`Matrix3`](Matrix3.md)

克隆当前矩阵 - 返回一个新矩阵对象

#### Returns

[`Matrix3`](Matrix3.md)

New Matrix3 object

#### Defined in

math/Matrix3.ts:45

___

### concat

▸ **concat**(`matrix`): `void`

合并矩阵 - 将当前矩阵与目标矩阵相乘(后乘)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `matrix` | [`Matrix3`](Matrix3.md) | target matrix |

#### Returns

`void`

#### Defined in

math/Matrix3.ts:53

___

### copyFrom

▸ **copyFrom**(`other`): [`Matrix3`](Matrix3.md)

复制矩阵值 - 从另一个矩阵复制值到当前矩阵

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`Matrix3`](Matrix3.md) | target matrix value |

#### Returns

[`Matrix3`](Matrix3.md)

current matrix

#### Defined in

math/Matrix3.ts:70

___

### identity

▸ **identity**(): `this`

重置为单位矩阵 - 将矩阵重置为无变换状态

#### Returns

`this`

#### Defined in

math/Matrix3.ts:83

___

### invert

▸ **invert**(): `void`

矩阵求逆 - 将当前矩阵变为它的逆矩阵

#### Returns

`void`

#### Defined in

math/Matrix3.ts:92

___

### rotate

▸ **rotate**(`angle`): `void`

旋转矩阵 - 按指定角度旋转(角度制)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `angle` | `number` | rotation angle |

#### Returns

`void`

#### Defined in

math/Matrix3.ts:100

___

### scale

▸ **scale**(`sx`, `sy`): `void`

缩放矩阵 - 按指定比例缩放

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sx` | `number` | x axis scaling |
| `sy` | `number` | y axis scaling |

#### Returns

`void`

#### Defined in

math/Matrix3.ts:126

___

### setTo

▸ **setTo**(`a`, `b`, `c`, `d`, `tx`, `ty`): [`Matrix3`](Matrix3.md)

设置矩阵值 - 直接设置矩阵各元素值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | Matrix element a |
| `b` | `number` | Matrix element b |
| `c` | `number` | Matrix element c |
| `d` | `number` | Matrix element d |
| `tx` | `number` | Matrix element tx |
| `ty` | `number` | Matrix element ty |

#### Returns

[`Matrix3`](Matrix3.md)

The modified matrix

#### Defined in

math/Matrix3.ts:149

___

### transformPoint

▸ **transformPoint**(`pointX`, `pointY`, `resultPoint?`): [`Vector3`](Vector3.md)

坐标变换 - 将点坐标应用当前矩阵变换

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pointX` | `number` | x coordinate |
| `pointY` | `number` | y coordinate |
| `resultPoint?` | [`Vector3`](Vector3.md) | Vector of results |

#### Returns

[`Vector3`](Vector3.md)

Vector of results

#### Defined in

math/Matrix3.ts:173

___

### setTranslate

▸ **setTranslate**(`x`, `y`): `void`

设置平移量 - 直接设置tx/ty值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | x coordinate |
| `y` | `number` | y coordinate |

#### Returns

`void`

#### Defined in

math/Matrix3.ts:192

___

### translate

▸ **translate**(`dx`, `dy`): `void`

平移矩阵 - 增加平移偏移量

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dx` | `number` | The x-coordinate offset |
| `dy` | `number` | The y-coordinate offset |

#### Returns

`void`

#### Defined in

math/Matrix3.ts:202

___

### mul

▸ **mul**(`t`): `void`

矩阵乘法 - 当前矩阵乘以目标矩阵(后乘)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | [`Matrix3`](Matrix3.md) | target matrix |

#### Returns

`void`

#### Defined in

math/Matrix3.ts:211

___

### equals

▸ **equals**(`other`): `boolean`

矩阵相等判断 - 判断与另一矩阵是否相等

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`Matrix3`](Matrix3.md) | matrix |

#### Returns

`boolean`

#### Defined in

math/Matrix3.ts:249

___

### prepend

▸ **prepend**(`a`, `b`, `c`, `d`, `tx`, `ty`): [`Matrix3`](Matrix3.md)

前乘矩阵 - 用指定参数创建一个矩阵并前乘当前矩阵

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | Multiply by a |
| `b` | `number` | Multiply by b |
| `c` | `number` | Multiply by c |
| `d` | `number` | Multiply by d |
| `tx` | `number` | Multiply by tx |
| `ty` | `number` | Multiply by ty |

#### Returns

[`Matrix3`](Matrix3.md)

prematrix

#### Defined in

math/Matrix3.ts:270

___

### append

▸ **append**(`mat`): [`Matrix3`](Matrix3.md)

后乘矩阵 - 用目标矩阵后乘当前矩阵

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mat` | [`Matrix3`](Matrix3.md) | Matrix |

#### Returns

[`Matrix3`](Matrix3.md)

result

#### Defined in

math/Matrix3.ts:297

___

### deltaTransformPoint

▸ **deltaTransformPoint**(`point`): [`Vector3`](Vector3.md)

忽略平移的坐标变换 - 只应用缩放/旋转变换

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | [`Vector3`](Vector3.md) | A given point |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

math/Matrix3.ts:319

___

### toString

▸ **toString**(): `string`

转换为字符串 - 返回矩阵的字符串表示

#### Returns

`string`

#### Defined in

math/Matrix3.ts:330

___

### createBox

▸ **createBox**(`scaleX`, `scaleY`, `rotation?`, `tx?`, `ty?`): `void`

创建变换矩阵 - 设置缩放、旋转和平移参数

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `scaleX` | `number` | `undefined` | x axis scaling |
| `scaleY` | `number` | `undefined` | y axis scaling |
| `rotation` | `number` | `0` | rotation |
| `tx` | `number` | `0` | x-coordinate |
| `ty` | `number` | `0` | y-coordinate |

#### Returns

`void`

#### Defined in

math/Matrix3.ts:356

___

### createGradientBox

▸ **createGradientBox**(`width`, `height`, `rotation?`, `tx?`, `ty?`): `void`

创建渐变框矩阵 - 特殊用途的矩阵创建方法

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `width` | `number` | `undefined` | width |
| `height` | `number` | `undefined` | height |
| `rotation` | `number` | `0` | rotation |
| `tx` | `number` | `0` | x-coordinate |
| `ty` | `number` | `0` | y-coordinate |

#### Returns

`void`

#### Defined in

math/Matrix3.ts:390
