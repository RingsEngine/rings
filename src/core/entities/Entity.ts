import { ComponentCollect } from "../..";
import { IComponent } from "../../components/IComponent";
import { RenderNode } from "../../components/renderer/RenderNode";
import { Transform } from "../../components/Transform";
import { CEventDispatcher } from "../../event/CEventDispatcher";
import { BoundUtil } from "../../util/BoundUtil";
import { GetCountInstanceID } from "../../util/Global";
import { BoundingBox } from "../bound/BoundingBox";
import { IBound } from "../bound/IBound";
import { Object3D } from "./Object3D";

export class Entity extends CEventDispatcher {
  public name: string = "";
  protected readonly _instanceID: string = "";
  private _numChildren: number;
  public get instanceID(): string {
    return this._instanceID;
  }
  public transform: Transform;
  public renderNode: RenderNode;
  public entityChildren: Entity[];
  public components: Map<any, IComponent>;
  protected waitDisposeComponents: IComponent[];
  protected _bound: IBound;
  protected _boundWorld: IBound;
  protected _isBoundChange: boolean = true;
  private _dispose: boolean = false;

  public get dispose(): boolean {
    return this._dispose;
  }

  public getObjectByName(name: string): Entity {
    let isPath = name.indexOf("/") >= 0;
    if (!isPath) {
      return this.getChildByName(name, false);
    } else {
      let list = name.split("/");
      let currentEntity = this;

      while (list.length > 0 && currentEntity) {
        let shortName = list.shift();
        currentEntity = currentEntity.getChildByName(shortName, false);
        if (!currentEntity) {
          return null;
        }
      }
      return currentEntity;
    }
  }

  constructor() {
    super();
    this.entityChildren = [];
    this.components = new Map<any, IComponent>();
    this._instanceID = GetCountInstanceID().toString();
    this.waitDisposeComponents = [];
  }

  public get numChildren(): number {
    return this._numChildren;
  }

  public addChild(child: Entity): Entity {
    if (child == null) {
      throw new Error("child is null!");
    }
    if (child === this) {
      throw new Error("child is self!");
    }

    let index = this.entityChildren.indexOf(child);
    if (index == -1) {
      child.removeFromParent();
      child.transform.parent = this.transform;
      this.entityChildren.push(child);
      this._numChildren = this.entityChildren.length;
      this.noticeComponents(`onAddChild`, child);
      return child;
    }
    return null;
  }

  public removeChild(child: Entity) {
    if (child === null) return; // throw new Error('remove child is null!');
    if (child === this) throw new Error("add child is self!");
    let index = this.entityChildren.indexOf(child);
    if (index != -1) {
      this.entityChildren.splice(index, 1);
      child.transform.parent = null;
      this._numChildren = this.entityChildren.length;
      this.noticeComponents(`onRemoveChild`, child);
    }
  }

  public removeAllChild() {
    while (this.numChildren > 0) {
      this.removeChild(this.entityChildren[0]);
    }
  }

  public removeSelf(): this {
    return this.removeFromParent();
  }

  public removeChildByIndex(index: number) {
    if (index >= 0 && index < this.entityChildren.length) {
      this.removeChild(this.entityChildren[index]);
    } else {
      console.error("remove child by index , index out of range");
    }
  }

  public hasChild(child: Entity) {
    let index = this.entityChildren.indexOf(child);
    return index != -1;
  }

  public removeFromParent(): this {
    let parent = this.transform.parent;
    if (parent && parent.object3D) {
      parent.object3D.removeChild(this);
    }
    return this;
  }

  public getChildByIndex(index: number): Entity {
    let outObj = null;
    if (index < this.entityChildren.length) {
      outObj = this.entityChildren[index];
    }
    return outObj;
  }

  public getChildByName(name: string, loopChild: boolean = true) {
    let out = null;
    for (const iterator of this.entityChildren) {
      if (iterator.name == name) {
        out = iterator;
        return out;
      } else if (loopChild) {
        out = iterator.getChildByName(name, loopChild);
        if (out) {
          return out;
        }
      }
    }
    return out;
  }

  public update() {}

  public instantiate(): Object3D | null {
    return null;
  }

  protected onTransformLocalChange(e) {
    this._isBoundChange = true;
  }

  public get bound(): IBound {
    (this._isBoundChange || !this._bound) && this.updateBound();
    return this._boundWorld;
  }

  public set bound(value: IBound) {
    this._bound = value;
    this._boundWorld = this._bound.clone();
    this._isBoundChange = true;
  }

  private updateBound(): IBound {
    if (!this._bound) {
      this._bound = new BoundingBox();
      this._boundWorld = this._bound.clone();
      this._isBoundChange = true;
    }
    if (this._isBoundChange) {
      BoundUtil.transformBound(
        this.transform.worldMatrix,
        this._bound as BoundingBox,
        this._boundWorld as BoundingBox
      );
      this._isBoundChange = false;
    }
    return this._boundWorld;
  }

  public waitUpdate(): void {
    if (this._dispose) {
      if (this.transform.parent) {
        this.transform.parent.object3D.removeChild(this);
      }
      this.components.forEach((v, k) => {
        v.enable = false;
        v.beforeDestroy();
        v.destroy();
      });
      this.components.clear();
    } else {
      ComponentCollect.waitStartComponent.forEach((v, k) => {
        while (v.length > 0) {
          const element = v.shift();
          element[`__start`]();
          ComponentCollect.waitStartComponent.delete(element.object3D);
        }
      });
    }
  }

  public noticeComponents(key: keyof IComponent, data: any) {
    for (let item of this.components.values()) {
      let typeKey = key as string;
      item[typeKey]?.(data);
    }
  }

  public destroy(force?: boolean) {
    if (!this._dispose) {
      this.components.forEach((c) => {
        c.beforeDestroy(force);
      });
      this.components.forEach((c) => {
        c.destroy(force);
      });
      this.components.clear();
      this.entityChildren.forEach((c) => {
        c.destroy(force);
      });

      this.removeAllChild();

      this.transform.parent = null;
      this._dispose = true;
      super.destroy();
    }
  }
}
