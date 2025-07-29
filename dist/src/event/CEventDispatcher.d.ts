import { CEvent } from "./CEvent";
export declare class CEventDispatcher {
    protected listeners: any;
    data: any;
    dispatchEvent(event: CEvent): void;
    destroy(): void;
    addEventListener(type: string | number, callback: Function, thisObject: any, param?: any, priority?: number): number;
    removeEventListener(type: string | number, callback: Function, thisObject: any): void;
    removeEventListenerAt(id: number): boolean;
    removeAllEventListener(eventType?: string | number | null): void;
    containEventListener(type: string): boolean;
    hasEventListener(type: string | number, callback?: Function | null, thisObject?: any): boolean;
}
