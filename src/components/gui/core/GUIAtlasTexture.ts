import { GUISprite } from "./GUISprite";
import { GUITexture } from "./GUITexture";
import { Vector2 } from "../../../math/Vector2";
import { makeGUISprite } from "../GUIExtension";

export class GUIAtlasTexture {
  private _spriteMap: Map<string, GUISprite> = new Map<string, GUISprite>();
  private _spriteList: GUISprite[] = [];
  public readonly textureSize: Vector2 = new Vector2();
  public name: string;

  constructor(size: { x: number; y: number }) {
    this.textureSize.set(size.x, size.y);
  }

  public setTexture(
    srcTexture: GUITexture,
    id: string,
    detail: any
  ): GUISprite {
    let sprite = makeGUISprite(srcTexture, id, detail);
    this._spriteMap.set(sprite.id, sprite);
    this._spriteList.push(sprite);
    return sprite;
  }

  public getSprite(id: string): GUISprite {
    return this._spriteMap.get(id);
  }

  public get spriteList() {
    return this._spriteList;
  }
}
