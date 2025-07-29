export class Time {
  public static time: number = 0;
  public static frame: number = 0;
  public static delta: number = 0;
  private static _startTime: number = 0;
  private static _timeLabel: string = ``;
  public static start(label: string) {
    this._startTime = performance.now();
    this._timeLabel = label;
  }
  public static end() {
    console.log(this._timeLabel, performance.now() - this._startTime);
  }
}
