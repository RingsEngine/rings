import { Transform } from "../../components/Transform";
import { Quaternion } from "../../math/Quaternion";
import { Vector3 } from "../../math/Vector3";
import { Entity } from "./Entity";
import { Ctor } from "../../util/Global";
import { IComponent } from "../../components/IComponent";
import { ComponentCollect } from "../../gfx/renderJob/collect/ComponentCollect";
import { SerializeTag } from "../../util/SerializeDecoration";
import { Color } from "../../math/Color";
import { MeshRenderer } from "../../components/renderer/MeshRenderer";

@DecorateObject3D
export class Object3D extends Entity {
  protected _isScene3D: boolean;
  public prefabRef?: string;
  public serializeTag?: SerializeTag;

  constructor() {
    super();
    this.transform = this.addComponent(Transform);
    this.transform.eventDispatcher.addEventListener(
      Transform.LOCAL_ONCHANGE,
      this.onTransformLocalChange,
      this
    );
  }

  public get isScene3D(): boolean {
    return this._isScene3D;
  }

  public forChild(call: Function) {
    this.entityChildren.forEach((element) => {
      call(element);
      (element as Object3D).forChild(call);
    });
  }

  public addComponent<T extends IComponent>(c: Ctor<T>, param?: any): T {
    if (!this.components.has(c)) {
      let instance: T = new c() as T;
      instance.object3D = this;
      this.components.set(c, instance);
      instance[`__init`](param);
      ComponentCollect.appendWaitStart(instance);
      return instance;
    }
    return this.components.get(c) as T;
  }

  public getOrAddComponent<T extends IComponent>(c: Ctor<T>): T {
    let component = this.components.get(c);
    if (!component) {
      component = this.addComponent(c);
    }
    return component as T;
  }

  public removeComponent<T extends IComponent>(c: Ctor<T>) {
    if (this.components.has(c)) {
      let component = this.components.get(c);
      ComponentCollect.removeWaitStart(this, component);
      this.components.delete(c);
      component[`__stop`]();
      component.beforeDestroy();
      component.destroy();
    }
  }

  public hasComponent<T extends IComponent>(c: Ctor<T>): boolean {
    return this.components.has(c);
  }

  public getComponent<T extends IComponent>(c: Ctor<T>): T {
    return this.components.get(c) as T;
  }

  public getComponentFromParent<T extends IComponent>(c: Ctor<T>): T {
    if (!this.parent) {
      return null;
    }

    let component = this.parent.object3D.getComponent(c);
    if (component) {
      return component;
    }

    return this.parent.object3D.getComponentFromParent<T>(c);
  }

  public getComponentsInChild<T extends IComponent>(c: Ctor<T>): T[] {
    let list: T[] = [];
    let component = this.components.get(c);
    if (component) {
      list.push(component as T);
    }
    for (let i = 0; i < this.entityChildren.length; i++) {
      let child = this.entityChildren[i] as Object3D;
      let coms = child.getComponentsInChild(c);
      list.push(...coms);
    }
    return list;
  }

  public getComponents<T extends IComponent>(
    c: Ctor<T>,
    outList?: Array<T>,
    includeInactive?: boolean
  ): T[] {
    outList ||= [];
    let component = this.getComponent(c);
    if (component && (component.enable || includeInactive)) {
      outList.push(component);
    }
    for (let i = 0, count = this.entityChildren.length; i < count; i++) {
      let child = this.entityChildren[i];
      if (child && child instanceof Object3D) {
        child.getComponents(c, outList, includeInactive);
      }
    }
    return outList;
  }

  public getComponentsExt<T extends IComponent>(
    c: Ctor<T>,
    ret?: T[],
    includeInactive?: boolean
  ): T[] {
    ret ||= [];
    let component = this.components.get(c);
    if (component && (component.enable || includeInactive)) {
      ret.push(component as T);
    } else {
      for (const node of this.entityChildren) {
        if (node instanceof Object3D) {
          node.getComponentsExt(c, ret, includeInactive);
        }
      }
    }
    return ret;
  }

  public getComponentsByProperty<T extends IComponent>(
    key: string,
    value: any,
    findedAndBreak: boolean = true,
    ret?: T[],
    includeInactive?: boolean
  ): T[] {
    ret ||= [];
    let findComponent;
    for (const component of this.components.values()) {
      if (component && (component.enable || includeInactive)) {
        if (component[key] === value) {
          ret.push(component as T);
          findComponent = true;
        }
      }
    }
    if (!(findComponent && findedAndBreak)) {
      for (const node of this.entityChildren) {
        if (node instanceof Object3D) {
          node.getComponentsByProperty(
            key,
            value,
            findedAndBreak,
            ret,
            includeInactive
          );
        }
      }
    }
    return ret;
  }

  public clone(): Object3D {
    return this.instantiate();
  }

  public instantiate(): Object3D {
    let tmp = new Object3D();
    tmp.name = this.name;
    tmp.serializeTag = this.serializeTag;
    tmp.prefabRef = this.prefabRef;

    this.entityChildren.forEach((v, k) => {
      let tmpChild = v.instantiate();
      tmp.addChild(tmpChild);
    });

    this.components.forEach((v, k) => {
      v.cloneTo(tmp);
    });
    return tmp;
  }

  public get localPosition(): Vector3 {
    return this.transform.localPosition;
  }

  public set localPosition(value: Vector3) {
    this.transform.localPosition = value;
  }

  public get localRotation(): Vector3 {
    return this.transform.localRotation;
  }

  public set localRotation(value: Vector3) {
    this.transform.localRotation = value;
  }

  public get localScale(): Vector3 {
    return this.transform.localScale;
  }

  public set localScale(value: Vector3) {
    this.transform.localScale = value;
  }

  public get localQuaternion(): Quaternion {
    return this.transform.localRotQuat;
  }

  public set localQuaternion(value: Quaternion) {
    this.transform.localRotQuat = value;
  }

  public notifyChange(): void {
    this.transform.notifyChange();
  }

  public get parent(): Transform {
    return this.transform.parent;
  }

  public get parentObject(): Object3D {
    return this.transform.parent.object3D;
  }

  public set x(value: number) {
    this.transform.x = value;
  }

  public get x(): number {
    return this.transform.x;
  }

  public set y(value: number) {
    this.transform.y = value;
  }

  public get y(): number {
    return this.transform.y;
  }

  public set z(value: number) {
    this.transform.z = value;
  }

  public get z(): number {
    return this.transform.z;
  }

  public set scaleX(value: number) {
    this.transform.scaleX = value;
  }

  public get scaleX(): number {
    return this.transform.scaleX;
  }

  public set scaleY(value: number) {
    this.transform.scaleY = value;
  }

  public get scaleY(): number {
    return this.transform.scaleY;
  }

  public set scaleZ(value: number) {
    this.transform.scaleZ = value;
  }

  public get scaleZ(): number {
    return this.transform.scaleZ;
  }

  public set rotationX(value: number) {
    this.transform.rotationX = value;
  }

  public get rotationX(): number {
    return this.transform.rotationX;
  }

  public set rotationY(value: number) {
    this.transform.rotationY = value;
  }

  public get rotationY(): number {
    return this.transform.rotationY;
  }

  public set rotationZ(value: number) {
    this.transform.rotationZ = value;
  }

  public get rotationZ(): number {
    return this.transform.rotationZ;
  }

  protected fixedUpdate(): void {}

  protected lateUpdate(): void {}

  public traverse(callback: (child) => void) {
    callback(this);
    for (let i = 0, l = this.entityChildren.length; i < l; i++) {
      let item = this.entityChildren[i];
      if (item instanceof Object3D) {
        item.traverse(callback);
      }
    }
  }

  public destroy(force?: boolean): void {
    this.transform.eventDispatcher.removeEventListener(
      Transform.LOCAL_ONCHANGE,
      this.onTransformLocalChange,
      this
    );
    super.destroy(force);
  }
}

export interface IObject3DForPropertyAnim {
  materialColor: Color;
  notifyMaterialColorChange(materialIndex: number, key: string);
  active: number;
}

function DecorateObject3D(ctor: any, _?: any) {
  return class extends Object3D implements IObject3DForPropertyAnim {
    set active(value) {
      this.transform.enable = value > 0;
    }

    get active(): number {
      return this.transform.enable ? 1 : 0;
    }

    public get materialColor(): Color {
      let component = this.getComponent(MeshRenderer);
      return component?.material?.shader.getDefaultColorShader().baseColor;
    }

    public set materialColor(color: Color) {
      let material = this.getComponent(MeshRenderer)?.material;
      material && (material.shader.getDefaultColorShader().baseColor = color);
    }

    public notifyMaterialColorChange(materialIndex: number, key: string) {
      let materials = this.getComponent(MeshRenderer).materials;
      materials?.[materialIndex]?.shader
        .getDefaultColorShader()
        .uniforms[key].onChange();
    }
  };
}
