export type SerializeTag = null | "self" | "non";
export declare function NonSerialize(cls: any, key: any): any;
export declare function IsNonSerialize<T extends object>(instance: T, key: string): boolean;
export declare function EditorInspector(cls: any, key: any, p1?: any, p2?: any, p3?: any): any;
export declare function IsEditorInspector<T extends object>(instance: T): Map<string, any>;
export declare function RegisterComponent(cls: any, key: any, p1?: any, p2?: any, p3?: any): any;
export declare function GetComponentClass(name: string): any;
export declare function RegisterShader(cls: any, key: any, p1?: any, p2?: any, p3?: any): any;
export declare function GetShader(name: string): any;
