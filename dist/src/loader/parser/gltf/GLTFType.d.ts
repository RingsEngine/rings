export declare class GLTFType {
    static readonly GLTF_NODE_INDEX_PROPERTY: "GLTF_NODE_INDEX";
    static readonly BASE_COLOR_UNIFORM = "u_baseColorFactor";
    static readonly BASE_COLOR_TEXTURE_UNIFORM = "u_baseColorSampler";
    static readonly METALROUGHNESS_UNIFORM = "u_metallicRoughnessValues";
    static readonly METALROUGHNESS_TEXTURE_UNIFORM = "u_metallicRoughnessSampler";
    static readonly NORMAL_TEXTURE_UNIFORM = "u_normalSampler";
    static readonly NORMAL_SCALE_UNIFORM = "u_normalScale";
    static readonly EMISSIVE_TEXTURE_UNIFORM = "u_emissiveSampler";
    static readonly EMISSIVE_FACTOR_UNIFORM = "u_emissiveFactor";
    static readonly OCCLUSION_TEXTURE_UNIFORM = "u_occlusionSampler";
    static readonly OCCLUSION_FACTOR_UNIFORM = "u_occlusionFactor";
    static readonly MAX_MORPH_TARGETS = 8;
    static readonly MORPH_POSITION_PREFIX = "a_morphPositions_";
    static readonly MORPH_NORMAL_PREFIX = "a_morphNormals_";
    static readonly MORPH_TANGENT_PREFIX = "a_morphTangents_";
    static readonly MORPH_WEIGHT_UNIFORM = "u_morphWeights";
    static readonly SCENE_ROOT_SKELETON = "SCENE_ROOT";
    static readonly IDENTITY_INVERSE_BIND_MATRICES = "IDENTITY_IBM";
    static readonly JOINT_MATRICES_UNIFORM = "u_jointMatrix";
    static readonly ALPHA_CUTOFF_UNIFORM = "u_alphaCutoff";
}
