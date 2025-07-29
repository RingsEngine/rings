[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / InterpolatorEnum

# Enumeration: InterpolatorEnum

## Table of contents

### Enumeration Members

- [AccelerateInterpolator](InterpolatorEnum.md#accelerateinterpolator)
- [DecelerateInterpolator](InterpolatorEnum.md#decelerateinterpolator)
- [AccelerateDecelerateInterpolator](InterpolatorEnum.md#acceleratedecelerateinterpolator)
- [LinearInterpolator](InterpolatorEnum.md#linearinterpolator)
- [BounceInterpolator](InterpolatorEnum.md#bounceinterpolator)
- [AnticipateInterpolator](InterpolatorEnum.md#anticipateinterpolator)
- [AnticipateOvershootInterpolator](InterpolatorEnum.md#anticipateovershootinterpolator)
- [CycleInterpolator](InterpolatorEnum.md#cycleinterpolator)
- [OvershootInterpolator](InterpolatorEnum.md#overshootinterpolator)
- [JumperInterpolator](InterpolatorEnum.md#jumperinterpolator)

## Enumeration Members

### AccelerateInterpolator

• **AccelerateInterpolator** = ``0``

Acceleration interpolator, animation acceleration runs to the end.

#### Defined in

math/TimeInterpolator.ts:198

___

### DecelerateInterpolator

• **DecelerateInterpolator** = ``1``

Slow down interpolator, animation slow down run to end.

#### Defined in

math/TimeInterpolator.ts:202

___

### AccelerateDecelerateInterpolator

• **AccelerateDecelerateInterpolator** = ``2``

Acceleration and deceleration interpolator, animation first speed up and then decelerate.

#### Defined in

math/TimeInterpolator.ts:206

___

### LinearInterpolator

• **LinearInterpolator** = ``3``

Linear interpolator, animation uniform motion.

#### Defined in

math/TimeInterpolator.ts:210

___

### BounceInterpolator

• **BounceInterpolator** = ``4``

Elastic interpolator, before the end of the animation will have an elastic animation effect.

#### Defined in

math/TimeInterpolator.ts:214

___

### AnticipateInterpolator

• **AnticipateInterpolator** = ``5``

Step back and then speed up to the end.

#### Defined in

math/TimeInterpolator.ts:218

___

### AnticipateOvershootInterpolator

• **AnticipateOvershootInterpolator** = ``6``

Take a small step back, then speed up, then go a little beyond the finish line and then come back.

#### Defined in

math/TimeInterpolator.ts:222

___

### CycleInterpolator

• **CycleInterpolator** = ``7``

Cyclic motion

#### Defined in

math/TimeInterpolator.ts:226

___

### OvershootInterpolator

• **OvershootInterpolator** = ``8``

Finish the animation quickly, go a little beyond the end point and then go back to the end point.

#### Defined in

math/TimeInterpolator.ts:230

___

### JumperInterpolator

• **JumperInterpolator** = ``9``

#### Defined in

math/TimeInterpolator.ts:234
