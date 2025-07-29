export declare class GUIConfig {
    static panelRatio: number;
    static quadMaxCountForWorld: number;
    static quadMaxCountForView: number;
    static readonly SortOrderStartWorld: number;
    static readonly SortOrderStartView: number;
    static readonly SortOrderCanvasSpan: number;
}
export declare enum GUISpace {
    View = 0,
    World = 2
}
export declare enum ImageType {
    Simple = 0,
    Sliced = 1,
    Tiled = 2,
    Filled = 3
}
export declare enum BillboardType {
    None = 0,
    BillboardY = 9,
    BillboardXYZ = 10
}
