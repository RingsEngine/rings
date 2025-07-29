import { ColliderComponent } from "../../../components/ColliderComponent";
import { IComponent } from "../../../components/IComponent";
import { View3D } from "../../../core/View3D";
import { Object3D } from "../../../core/entities/Object3D";
export declare class ComponentCollect {
    static componentsUpdateList: Map<View3D, Map<IComponent, Function>>;
    static componentsLateUpdateList: Map<View3D, Map<IComponent, Function>>;
    static componentsBeforeUpdateList: Map<View3D, Map<IComponent, Function>>;
    static componentsComputeList: Map<View3D, Map<IComponent, Function>>;
    static componentsEnablePickerList: Map<View3D, Map<ColliderComponent, Function>>;
    static graphicComponent: Map<View3D, Map<IComponent, Function>>;
    static waitStartComponent: Map<Object3D, IComponent[]>;
    private static _init;
    private static init;
    static bindUpdate(view: View3D, component: IComponent, call: Function): void;
    static unBindUpdate(view: View3D, component: IComponent): void;
    static bindLateUpdate(view: View3D, component: IComponent, call: Function): void;
    static unBindLateUpdate(view: View3D, component: IComponent): void;
    static bindBeforeUpdate(view: View3D, component: IComponent, call: Function): void;
    static unBindBeforeUpdate(view: View3D, component: IComponent): void;
    static bindCompute(view: View3D, component: IComponent, call: Function): void;
    static unBindCompute(view: View3D, component: IComponent): void;
    static bindGraphic(view: View3D, component: IComponent, call: Function): void;
    static unBindGraphic(view: View3D, component: IComponent): void;
    static appendWaitStart(component: IComponent): void;
    static removeWaitStart(obj: Object3D, component: IComponent): void;
    static bindEnablePick(view: View3D, component: ColliderComponent, call: Function): void;
    static unBindEnablePick(view: View3D, component: ColliderComponent): void;
}
