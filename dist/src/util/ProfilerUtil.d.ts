import { View3D } from "../core/View3D";
export type ProfilerLabel2 = {
    lable: string;
    start: number;
    end: number;
    total: number;
    count: number;
};
export type ProfilerLabel = {
    lable: string;
    start: number;
    end: number;
    total: number;
    count: number;
    child: Map<string, ProfilerLabel2>;
};
export type ProfilerDraw = {
    [key: string]: {
        vertexCount: number;
        indicesCount: number;
        triCount: number;
        instanceCount: number;
        drawCount: number;
        pipelineCount: number;
    };
};
export declare class ProfilerUtil {
    private static profilerLabelMap;
    static viewMap: Map<View3D, ProfilerDraw>;
    static testObj: {
        testValue1: number;
        testValue2: number;
        testValue3: number;
        testValue4: number;
    };
    static startView(view: View3D): void;
    static viewCount(view: View3D): ProfilerDraw;
    static viewCount_vertex(view: View3D, pass: string, v: number): void;
    static viewCount_indices(view: View3D, pass: string, v: number): void;
    static viewCount_tri(view: View3D, pass: string, v: number): void;
    static viewCount_instance(view: View3D, pass: string, v: number): void;
    static viewCount_draw(view: View3D, pass: string): void;
    static viewCount_pipeline(view: View3D, pass: string): void;
    static start(id: string): void;
    static end(id: string): void;
    static countStart(id: string, id2?: string): void;
    static countEnd(id: string, id2: string): void;
    static print(id: string): void;
}
