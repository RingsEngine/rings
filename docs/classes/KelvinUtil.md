[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / KelvinUtil

# Class: KelvinUtil

色温颜色转换器

## Table of contents

### Constructors

- [constructor](KelvinUtil.md#constructor)

### Methods

- [color\_temperature\_to\_rgb](KelvinUtil.md#color_temperature_to_rgb)
- [get\_red](KelvinUtil.md#get_red)
- [get\_green](KelvinUtil.md#get_green)
- [get\_blue](KelvinUtil.md#get_blue)
- [bound](KelvinUtil.md#bound)

## Constructors

### constructor

• **new KelvinUtil**(): [`KelvinUtil`](KelvinUtil.md)

#### Returns

[`KelvinUtil`](KelvinUtil.md)

## Methods

### color\_temperature\_to\_rgb

▸ **color_temperature_to_rgb**(`color_temperature_Kelvin`): [`Color`](Color.md)

将色温值转换为颜色对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color_temperature_Kelvin` | `number` | 色温值(单位：开尔文) |

#### Returns

[`Color`](Color.md)

返回对应的Color对象

#### Defined in

util/KelvinUtil.ts:13

___

### get\_red

▸ **get_red**(`temperature`): `number`

获取红色分量[0-255]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `temperature` | `number` | 温度值(百分之一开尔文) |

#### Returns

`number`

红色分量值

#### Defined in

util/KelvinUtil.ts:31

___

### get\_green

▸ **get_green**(`temperature`): `number`

获取绿色分量[0-255]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `temperature` | `number` | 温度值(百分之一开尔文) |

#### Returns

`number`

绿色分量值

#### Defined in

util/KelvinUtil.ts:41

___

### get\_blue

▸ **get_blue**(`temperature`): `number`

获取蓝色分量[0-255]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `temperature` | `number` | 温度值(百分之一开尔文) |

#### Returns

`number`

蓝色分量值

#### Defined in

util/KelvinUtil.ts:55

___

### bound

▸ **bound**(`color_component`, `minimum?`, `maximum?`): `number`

限制颜色分量在指定范围内

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `color_component` | `number` | `undefined` | 颜色分量值 |
| `minimum` | `number` | `0` | 最小值(默认0) |
| `maximum` | `number` | `255` | 最大值(默认255) |

#### Returns

`number`

限制后的颜色分量值

#### Defined in

util/KelvinUtil.ts:75
