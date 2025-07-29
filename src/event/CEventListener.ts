export class CEventListener {
  public static event_id_count = 0;
  public id: number = 0;
  public current: any;

  constructor(
    public type: string | number | null = null,
    public thisObject: any = null,
    public handler: Function | null = null,
    public param: any = null,
    public priority: number = 0
  ) {}

  public equalCurrentListener(
    type: string | number,
    handler: Function,
    thisObject: any,
    param: any
  ): boolean {
    if (
      this.type == type &&
      this.thisObject == thisObject &&
      this.handler == handler &&
      this.param == param
    ) {
      return true;
    }
    return false;
  }

  public dispose() {
    this.handler = null;
    this.thisObject = null;
    this.param = null;
    this.priority = 0;
  }
}
