export interface TimeInterpolator {
  getInterpolation(input: number): number;
}

export class AccelerateInterpolator implements TimeInterpolator {
  private _factor: number;
  private _doubleFactor: number;

  public constructor() {
    this._factor = 1.0;
    this._doubleFactor = 2.0;
  }

  public get accelerateInterpolator(): number {
    return this._factor;
  }

  public set accelerateInterpolator(factor: number) {
    this._factor = factor;
    this._doubleFactor = 2 * this._factor;
  }

  public getInterpolation(input: number): number {
    if (this._factor == 1.0) {
      return input * input;
    } else {
      return Math.pow(input, this._doubleFactor);
    }
  }
}

export class DecelerateInterpolator implements TimeInterpolator {
  private _factor: number = 1.0;

  constructor() {}

  public get decelerateInterpolator(): number {
    return this._factor;
  }

  public set decelerateInterpolator(factor: number) {
    this._factor = factor;
  }

  public getInterpolation(input: number): number {
    let result;
    if (this._factor == 1.0) {
      result = 1.0 - (1.0 - input) * (1.0 - input);
    } else {
      result = 1.0 - Math.pow(1.0 - input, 2 * this._factor);
    }
    return result;
  }
}

export class AccelerateDecelerateInterpolator implements TimeInterpolator {
  private _factor: number = 1.0;

  constructor() {}

  public getInterpolation(input: number): number {
    return Math.cos((input + 1) * Math.PI) / 2.0 + 0.5;
  }
}

export class LinearInterpolator implements TimeInterpolator {
  public getInterpolation(input: number): number {
    return input;
  }
}

export class JumperInterpolator implements TimeInterpolator {
  public getInterpolation(t: number): number {
    return 4.9 * t + 4.9 * t;
  }
}

export class BounceInterpolator implements TimeInterpolator {
  constructor() {}

  private static bounce(t): number {
    return t * t * 9.8;
  }

  public getInterpolation(t: number): number {
    t *= 1.1226;
    if (t < 0.3535) return BounceInterpolator.bounce(t);
    else if (t < 0.7408) return BounceInterpolator.bounce(t - 0.54719) + 0.7;
    else if (t < 0.9644) return BounceInterpolator.bounce(t - 0.8526) + 0.9;
    else return BounceInterpolator.bounce(t - 1.0435) + 0.95;
  }

  public getBounceInterpolation(t: number): number {
    if (t < 0.5) return BounceInterpolator.bounce(t);
    else return BounceInterpolator.bounce(t - 1.0);
  }

  public geJumpUp(v0: number, t: number): number {
    if (t < 0.5) {
      t = t / 0.5;
      return v0 * t - BounceInterpolator.bounce(t);
    } else if (t < 0.8) {
      t = (t - 0.5) / (0.8 - 0.5);
      return (v0 * t - BounceInterpolator.bounce(t)) * 0.3;
    } else if (t < 1) {
      t = (t - 0.8) / (1 - 0.8);
      return (v0 * t - BounceInterpolator.bounce(t)) * 0.15;
    } else return v0 * t - BounceInterpolator.bounce(t);
  }
}

export class AnticipateInterpolator implements TimeInterpolator {
  private _tension: number;

  constructor() {
    this._tension = 2.0;
  }

  public get anticipateInterpolator(): number {
    return this._tension;
  }

  public set anticipateInterpolator(tension: number) {
    this._tension = tension;
  }

  public getInterpolation(t: number): number {
    return t * t * ((this._tension + 1) * t - this._tension);
  }
}

export class AnticipateOvershootInterpolator implements TimeInterpolator {
  private _tension: number;

  constructor() {
    this._tension = 1.0 * 1.5;
  }

  public anticipateOvershootInterpolator(tension: number) {
    this._tension = tension * 1.5;
  }

  public anticipateOvershootInterpolator2(
    tension: number,
    extraTension: number
  ) {
    this._tension = tension * extraTension;
  }

  public getInterpolation(t) {
    if (t < 0.5)
      return 0.5 * AnticipateOvershootInterpolator.a(t * 2.0, this._tension);
    else
      return (
        0.5 *
        (AnticipateOvershootInterpolator.o(t * 2.0 - 2.0, this._tension) + 2.0)
      );
  }

  private static a(t, s) {
    return t * t * ((s + 1) * t - s);
  }

  private static o(t, s) {
    return t * t * ((s + 1) * t + s);
  }
}

export class CycleInterpolator implements TimeInterpolator {
  private _cycles;

  constructor(cycles) {
    this._cycles = cycles;
  }

  public getInterpolation(t) {
    return Math.sin(2 * this._cycles * Math.PI * t);
  }
}

export class OvershootInterpolator implements TimeInterpolator {
  private _tension;

  constructor() {
    this._tension = 2.0;
  }

  public getInterpolation(t) {
    t -= 1.0;
    return t * t * ((this._tension + 1) * t + this._tension) + 1.0;
  }
}

export enum InterpolatorEnum {
  /**
   * Acceleration interpolator, animation acceleration runs to the end.
   */
  AccelerateInterpolator,
  /**
   * Slow down interpolator, animation slow down run to end.
   */
  DecelerateInterpolator,
  /**
   * Acceleration and deceleration interpolator, animation first speed up and then decelerate.
   */
  AccelerateDecelerateInterpolator,
  /**
   * Linear interpolator, animation uniform motion.
   */
  LinearInterpolator,
  /**
   * Elastic interpolator, before the end of the animation will have an elastic animation effect.
   */
  BounceInterpolator,
  /**
   * Step back and then speed up to the end.
   */
  AnticipateInterpolator,
  /**
   * Take a small step back, then speed up, then go a little beyond the finish line and then come back.
   */
  AnticipateOvershootInterpolator,
  /**
   * Cyclic motion
   */
  CycleInterpolator,
  /**
   * Finish the animation quickly, go a little beyond the end point and then go back to the end point.
   */
  OvershootInterpolator,
  /**
   * @internal
   */
  JumperInterpolator,
}

export class Interpolator {
  /**
   * @internal
   */
  public static interpolators: Interpolator[] = [];

  /**
   * @internal
   */
  public complete: boolean = false;

  /**
   * @internal
   */
  public onComplete: Function;

  /**
   * @internal
   */
  public onProgress: Function;

  /**
   * @internal
   */
  public target: any;

  /**
   * @internal
   */
  public property: any;

  /**
   * @internal
   */
  public targetProperty: any;

  /**
   * @internal
   */
  public durtion: number;

  /**
   * @internal
   */
  public interpolatorEnum: InterpolatorEnum;

  /**
   * @internal
   */
  public delayTime: number = 0;

  private _interpolator: TimeInterpolator;
  private _ct: number = 0;
  private _p: number = 0;

  /**
   * Creates an animation from the current property to the specified target property.
   * @param target Objects that need to be animated
   * @param property Animation parameter
   * @param durtion Animation duration, usually seconds
   * @param interpolatorEnum Interpolator type
   * @returns
   */
  public static to(
    target: any,
    property: any,
    durtion: number,
    interpolatorEnum: InterpolatorEnum = InterpolatorEnum.AccelerateInterpolator
  ): Interpolator {
    let pro: any;
    var interpolator: Interpolator = new Interpolator();
    interpolator.target = target;
    interpolator.property = property;
    interpolator.durtion = durtion;
    interpolator.interpolatorEnum = interpolatorEnum;
    interpolator.start();
    interpolator.delayTime = property["delayTime"] ? property["delayTime"] : 0;
    if (property["onComplete"])
      interpolator.onComplete = property["onComplete"];
    if (property["onProgress"])
      interpolator.onProgress = property["onProgress"];

    this.interpolators.push(interpolator);
    return interpolator;
  }

  /**
   * @internal
   */
  public static tick(delta: number) {
    let interpolators = Interpolator.interpolators;
    for (let inter of interpolators) {
      if (inter.complete) {
        Interpolator.remove(inter, true);
      } else {
        inter.tick(delta);
      }
    }
  }

  /**
   * @internal
   */
  public static remove(interpolator: Interpolator, dispose?: boolean) {
    let interpolators = Interpolator.interpolators;
    let index = interpolators.indexOf(interpolator);
    if (index != -1) interpolators.splice(index, 1);
    if (dispose) interpolator.dispose();
  }

  public static removeList(interpolators: Interpolator[], dispose?: boolean) {
    interpolators.forEach((v) => {
      this.remove(v, dispose);
    });
  }

  /**
   * @internal
   */
  public start() {
    window["AccelerateInterpolator"] = AccelerateInterpolator;
    window["DecelerateInterpolator"] = DecelerateInterpolator;
    window["AccelerateDecelerateInterpolator"] =
      AccelerateDecelerateInterpolator;
    window["LinearInterpolator"] = LinearInterpolator;
    window["BounceInterpolator"] = BounceInterpolator;
    window["AnticipateInterpolator"] = AnticipateInterpolator;
    window["AnticipateOvershootInterpolator"] = AnticipateOvershootInterpolator;
    window["CycleInterpolator"] = CycleInterpolator;
    window["OvershootInterpolator"] = OvershootInterpolator;
    window["JumperInterpolator"] = JumperInterpolator;
    this._interpolator = new window[InterpolatorEnum[this.interpolatorEnum]]();

    this.targetProperty = {};
    for (let p in this.property) {
      this.targetProperty[p] = this.target[p];
    }
  }

  /**
   * @internal
   */
  public tick(delta: number) {
    if (this.delayTime <= 0) {
      this._p = Math.min(this._ct / this.durtion, 1.0);
      let v = this._interpolator.getInterpolation(this._p);

      let property = this.property;
      let target = this.target;
      let targetProperty = this.targetProperty;

      let ct: number;
      let tt: number;
      for (let p in property) {
        tt = property[p];
        ct = targetProperty[p];
        target[p] = ct + (tt - ct) * v;
      }

      if (this.onProgress != null) this.onProgress(this._p);

      if (this._ct >= this.durtion) {
        this.complete = true;
        if (this.onComplete != null) {
          this.onComplete(this.target);
        }
      }
      this._ct += delta;
    } else {
      this.delayTime -= delta;
    }
  }

  /**
   * @internal
   */
  public dispose() {
    this.onComplete = null;
    this.onProgress = null;
    this.target = null;
    this.property = null;
    this.targetProperty = null;
    this.interpolatorEnum = null;
    this._interpolator = null;
    Interpolator.remove(this);
  }
}
