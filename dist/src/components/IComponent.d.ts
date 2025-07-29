import { View3D } from "../core/View3D";
import { Object3D } from "../core/entities/Object3D";
import { CEventDispatcher } from "../event/CEventDispatcher";
import { Transform } from "./Transform";
export interface IComponent {
    object3D: Object3D;
    eventDispatcher: CEventDispatcher;
    transform: Transform;
    enable: boolean;
    isDestroyed?: boolean;
    init(param?: any): any;
    start(): any;
    stop(): any;
    onEnable?(view?: View3D): any;
    onDisable?(view?: View3D): any;
    onUpdate?(view?: View3D): any;
    onLateUpdate?(view?: View3D): any;
    onBeforeUpdate?(view?: View3D): any;
    onCompute?(view?: View3D, command?: GPUCommandEncoder): any;
    onGraphic?(view?: View3D): any;
    cloneTo(obj: Object3D): any;
    destroy(force?: boolean): any;
    beforeDestroy(force?: boolean): any;
    onParentChange?(lastParent?: Object3D, currentParent?: Object3D): any;
    onAddChild?(child: Object3D): any;
    onRemoveChild?(child: Object3D): any;
}
