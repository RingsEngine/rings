export declare class GLTF_Info {
    asset: {
        generator: string;
        version: string;
        minVersion: string;
    };
    accessors: GLTF_Accessors[];
    buffers: {
        isParsed: boolean;
        dbuffer: any;
        byteLength: number;
        uri: string;
    }[];
    bufferViews: {
        isParsed: boolean;
        buffer: number;
        byteOffset: number;
        dbufferView: any;
        byteStride: number;
        byteLength: number;
    }[];
    materials: {
        name: string;
        alphaModel: string;
        alphaCutoff: number;
    }[];
    meshes: GLTF_Mesh[];
    nodes: GLTF_Node[];
    scene: number;
    scenes: GLTF_Scene;
    textures: {
        isParsed: boolean;
        sampler: number;
        source: number;
        name: string;
        dtexture: any;
    }[];
    cameras: any;
    skins: any;
    resources: {
        [uri: string]: any;
    };
    images: {
        uri: string;
        name: string;
        isParsed: any;
        dsampler: any;
        dimage: any;
        mimeType: string;
        bufferView: number;
    }[];
    samplers: {
        minFilter: number;
        magFilter: number;
        wrapS: number;
        wrapT: number;
    }[];
    animations: any;
    extensions: {
        KHR_lights_punctual: {
            lights: GLTF_Light[];
        };
    };
}
export declare class GLTF_Scene {
    nodes: number[];
}
export declare class GLTF_Light {
    name: string;
    type: string;
    color: number[];
    intensity: number;
    range: number;
    spot: {
        outerConeAngle: number;
    };
    isParsed: boolean;
}
export declare class GLTF_Node {
    name: string;
    rotation: number[];
    scale: number[];
    translation: number[];
    children: number[];
    matrix: number[];
    mesh: number;
    isParsed: any;
    dnode: any;
    camera: any;
    skin: any;
    nodeId: any;
    primitives: any;
    extensions: any;
    light: GLTF_Light;
}
export declare class GLTF_Primitives {
    attributes: {
        POSITION: number;
        NORMAL: number;
        TANGENT: number;
        TEXCOORD_0: number;
        TEXCOORD_1: number;
    };
    indices: number;
    material: number;
    mode: any;
    name: any;
    targets: any;
    extensions: any;
    morphTargetsRelative: boolean;
}
export declare class GLTF_Mesh {
    name: string;
    primitives: GLTF_Primitives[];
    isParsed: any;
    dprimitives: any;
    weights: any;
    extras: any;
}
export declare class GLTF_Accessors {
    bufferView: number;
    componentType: number;
    count: number;
    type: string;
    max: number[];
    min: number[];
    isParsed: any;
    daccessor: any;
    normalized: any;
    sparse: any;
    byteOffset: number;
    computeResult: {
        typedArray: any;
        arrayType: any;
        numComponents: number;
    };
}
