export declare class TileSet {
    asset: {
        generatetool: string;
        version: string;
        gltfUpAxis?: any;
    };
    extras: {
        scenetree: string;
    };
    geometricError: number;
    properties: any;
    refine: any;
    root: TileSetRoot;
}
export declare class TileSetRoot {
    boundingVolume: {
        box: number[];
    };
    children: TileSetChild[];
    geometricError: number;
    transform: number[];
}
export declare class TileSetChild {
    boundingVolume: {
        box: number[];
    };
    geometricError: number;
    refine: string;
    content: {
        uri: string;
    };
    contents: TileSetChildContent[];
}
export declare class TileSetChildContent {
    uri: string;
    group: number;
    metadata: TileSetChildContentMetaData;
}
export declare class TileSetChildContentMetaData {
    class: string;
    properties: {
        vertices: number;
        materials: number;
    };
}
