export declare class CEventListener {
    type: string | number | null;
    thisObject: any;
    handler: Function | null;
    param: any;
    priority: number;
    static event_id_count: number;
    id: number;
    current: any;
    constructor(type?: string | number | null, thisObject?: any, handler?: Function | null, param?: any, priority?: number);
    equalCurrentListener(type: string | number, handler: Function, thisObject: any, param: any): boolean;
    dispose(): void;
}
