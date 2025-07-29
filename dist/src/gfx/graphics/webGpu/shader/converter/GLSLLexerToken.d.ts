export declare class GLSLLexerToken {
    Type: TokenType;
    Line: number;
    Colume: number;
    Literal: string;
    constructor(type?: TokenType, literal?: string);
    /**
     * @returns determin the type is same to token
     */
    isTypeEqual(type: TokenType): boolean;
    /**
     * @returns determin the value is same
     */
    isLiteralEqual(literal: string): boolean;
    /**
     * @returns determin it's builtin type
     */
    isBuiltinType(): boolean;
    /**
     * @returns determin it's a data type
     */
    isDataType(): boolean;
    /**
     * @returns determin it's a operation
     */
    isOperation(): boolean;
    /**
     * @returns determin it's a assign operation
     */
    isAssignOperation(): boolean;
    /**
     * The priority of the current operator
     */
    get nOperationPriorityLevel(): number;
}
/**
 * @internal
 */
export declare enum TokenType {
    EOF = 0,
    IDENT = 1,
    VOID = 2,
    CONST = 3,
    LAYOUT = 4,
    PRECISION = 5,
    ATTRIBUTE = 6,
    UNIFORM = 7,
    VARYING = 8,
    INVARIANT = 9,
    IN = 10,
    OUT = 11,
    INOUT = 12,
    IF = 13,
    ELSE = 14,
    FOR = 15,
    WHILE = 16,
    DO = 17,
    BREAK = 18,
    RETURN = 19,
    CONTINUE = 20,
    STRUCT = 21,
    COMMA = 22,
    COLON = 23,
    QUEMARK = 24,
    SEMICOLON = 25,
    LEFTSAMLL = 26,
    RIGHTSAMLL = 27,
    LEFTMEDI = 28,
    RIGHTMEDI = 29,
    LEFTBIG = 30,
    RIGHTBIG = 31,
    LITERAL = 32,
    BeginBuiltinType = 33,
    INT = 34,
    INT_ARRAY = 35,
    UINT = 36,
    UINT_ARRAY = 37,
    BOOL = 38,
    BOOL_ARRAY = 39,
    FLOAT = 40,
    FLOAT_ARRAY = 41,
    DOUBLE = 42,
    DOUBLE_ARRAY = 43,
    VEC2 = 44,
    VEC2_ARRAY = 45,
    VEC3 = 46,
    VEC3_ARRAY = 47,
    VEC4 = 48,
    VEC4_ARRAY = 49,
    BVEC2 = 50,
    BVEC2_ARRAY = 51,
    BVEC3 = 52,
    BVEC3_ARRAY = 53,
    BVEC4 = 54,
    BVEC4_ARRAY = 55,
    IVEC2 = 56,
    IVEC2_ARRAY = 57,
    IVEC3 = 58,
    IVEC3_ARRAY = 59,
    IVEC4 = 60,
    IVEC4_ARRAY = 61,
    UVEC2 = 62,
    UVEC2_ARRAY = 63,
    UVEC3 = 64,
    UVEC3_ARRAY = 65,
    UVEC4 = 66,
    UVEC4_ARRAY = 67,
    MAT2x2 = 68,
    MAT2x2_ARRAY = 69,
    MAT2x3 = 70,
    MAT2x3_ARRAY = 71,
    MAT2x4 = 72,
    MAT2x4_ARRAY = 73,
    MAT3x2 = 74,
    MAT3x2_ARRAY = 75,
    MAT3x3 = 76,
    MAT3x3_ARRAY = 77,
    MAT3x4 = 78,
    MAT3x4_ARRAY = 79,
    MAT4x2 = 80,
    MAT4x2_ARRAY = 81,
    MAT4x3 = 82,
    MAT4x3_ARRAY = 83,
    MAT4x4 = 84,
    MAT4x4_ARRAY = 85,
    SAMPLER = 86,
    SAMPLER_1D = 87,
    SAMPLER_2D = 88,
    SAMPLER_3D = 89,
    SAMPLER_CUBE = 90,
    SAMPLER_SHADOW = 91,
    SAMPLER_1D_SHADOW = 92,
    SAMPLER_2D_SHADOW = 93,
    TEXTURE_1D = 94,
    TEXTURE_1D_ARRAY = 95,
    TEXTURE_2D = 96,
    TEXTURE_2D_ARRAY = 97,
    TEXTURE_3D = 98,
    TEXTURE_CUBE = 99,
    TEXTURE_CUBE_ARRAY = 100,
    EndBuiltinType = 101,
    BeginOperation = 102,
    ADD = 103,
    SUB = 104,
    MUL = 105,
    DIV = 106,
    AND = 107,
    OR = 108,
    XOR = 109,
    NOT = 110,
    BITAND = 111,
    BITOR = 112,
    BITXOR = 113,
    BITNOT = 114,
    BITSHIFT_L = 115,
    BITSHIFT_R = 116,
    INC = 117,
    DEC = 118,
    GREATER = 119,
    GREATEREQUAL = 120,
    EQUAL = 121,
    LESS = 122,
    LESSEQUAL = 123,
    NOTEQUAL = 124,
    DOT = 125,
    ASSIGN = 126,
    EndOperation = 127,
    BeginAssignOperation = 128,
    ADDASSIGN = 129,
    SUBASSIGN = 130,
    MULASSIGN = 131,
    DIVASSIGN = 132,
    EndAssignOperation = 133
}
