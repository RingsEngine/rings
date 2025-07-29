[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / BlendMode

# Enumeration: BlendMode

## Table of contents

### Enumeration Members

- [NONE](BlendMode.md#none)
- [ABOVE](BlendMode.md#above)
- [ALPHA](BlendMode.md#alpha)
- [NORMAL](BlendMode.md#normal)
- [ADD](BlendMode.md#add)
- [BELOW](BlendMode.md#below)
- [ERASE](BlendMode.md#erase)
- [MUL](BlendMode.md#mul)
- [SCREEN](BlendMode.md#screen)
- [DIVD](BlendMode.md#divd)
- [SOFT\_ADD](BlendMode.md#soft_add)

## Enumeration Members

### NONE

• **NONE** = ``0``

Working only in WebGPU may improve the performance of large background images without alpha.
The source pixel is not mixed with the target pixel, so the GPU will not read colors from the target pixel.

#### Defined in

materials/BlendMode.ts:6

___

### ABOVE

• **ABOVE** = ``1``

Display objects above the background. When the background is transparent,
the pixel values of the displayed object are not visible.

#### Defined in

materials/BlendMode.ts:11

___

### ALPHA

• **ALPHA** = ``2``

Transparent mode

#### Defined in

materials/BlendMode.ts:16

___

### NORMAL

• **NORMAL** = ``3``

Normal blend mode

#### Defined in

materials/BlendMode.ts:21

___

### ADD

• **ADD** = ``4``

Add the values of the component colors of the displayed object to its background color

#### Defined in

materials/BlendMode.ts:26

___

### BELOW

• **BELOW** = ``5``

Add the values of the component colors of the displayed object to its background color

#### Defined in

materials/BlendMode.ts:31

___

### ERASE

• **ERASE** = ``6``

Erase the background based on the alpha value of the displayed object.

#### Defined in

materials/BlendMode.ts:35

___

### MUL

• **MUL** = ``7``

Multiply the values of the displayed object's constituent colors by the background color,
and then divide by 0xFF for normalization to obtain a darker color.

#### Defined in

materials/BlendMode.ts:40

___

### SCREEN

• **SCREEN** = ``8``

Multiply the inverse of the components of the source and target images, and then calculate the inverse result.

#### Defined in

materials/BlendMode.ts:44

___

### DIVD

• **DIVD** = ``9``

#### Defined in

materials/BlendMode.ts:45

___

### SOFT\_ADD

• **SOFT\_ADD** = ``10``

#### Defined in

materials/BlendMode.ts:46
