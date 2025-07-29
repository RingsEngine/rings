export class TouchData {
  constructor(touch: Touch) {
    this.canvasX = touch.clientX; //- Input.canvas.x + Input.canvas.offsetX;
    this.canvasY = touch.clientY; // Input.canvas.y + Input.canvas.offsetY;
    this.identifier = touch.identifier;
    this.clientX = touch.clientX;
    this.clientY = touch.clientY;
    this.pageX = touch.pageX;
    this.pageY = touch.pageY;
    this.screenX = touch.screenX;
    this.screenY = touch.screenY;
  }
  public canvasX: number;
  public canvasY: number;
  public identifier: number;
  public clientX: number;
  public clientY: number;
  public pageX: number;
  public pageY: number;
  public screenX: number;
  public screenY: number;
}
