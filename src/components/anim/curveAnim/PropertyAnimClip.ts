import { AttributeAnimCurve } from "./AttributeAnimCurve";

export class ObjectAnimClip {
  public curve: { [attribute: string]: AttributeAnimCurve } = {};
}

export enum WrapMode {
  Default = 0,
  Clamp = 1,
  Once = 1,
  Loop = 2,
  PingPong = 4,
  ClampForever = 8,
}

export class PropertyAnimClip {
  public name: string;
  public objAnimClip: { [path: string]: ObjectAnimClip };

  public totalTime: number = 0;
  public time: number = 0;
  private _stopTime: number = 0;
  private _loopTime: any;
  private _wrapMode: WrapMode;
  private _sampleRate: any;

  public get wrapMode(): WrapMode {
    if (!this._wrapMode) this._wrapMode = WrapMode.Default;
    return this._wrapMode;
  }

  public set wrapMode(value: WrapMode) {
    this._wrapMode = value;
  }

  public parse(jsonData: any) {
    this.objAnimClip = {};
    let clip = jsonData["AnimationClip"];
    let { m_Name, m_AnimationClipSettings, m_WrapMode, m_SampleRate } = clip;

    this.name = m_Name;
    this._wrapMode = m_WrapMode;
    this._sampleRate = m_SampleRate;
    this._loopTime = m_AnimationClipSettings.m_LoopTime;
    for (const key in clip.m_EditorCurves) {
      if (Object.prototype.hasOwnProperty.call(clip.m_EditorCurves, key)) {
        const curve = clip.m_EditorCurves[key];
        let attribute = curve.attribute;

        let attributeAnimCurve = new AttributeAnimCurve();
        attributeAnimCurve.unSerialized(curve);
        this.totalTime = Math.max(this.totalTime, attributeAnimCurve.totalTime);
        let objClip = this.objAnimClip[curve.path];
        if (!objClip) {
          objClip = new ObjectAnimClip();
          this.objAnimClip[curve.path] = objClip;
        }
        objClip.curve[attribute] = attributeAnimCurve;
      }
    }
  }
}
