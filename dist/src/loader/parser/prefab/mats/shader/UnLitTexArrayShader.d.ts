import { Texture } from "../../../../../gfx/graphics/webGpu/core/texture/Texture";
import { Color } from "../../../../../math/Color";
import { Vector4 } from "../../../../../math/Vector4";
import { Shader } from "../../../../../gfx/graphics/webGpu/shader/Shader";
export declare class UnLitTexArrayShader extends Shader {
    constructor();
    setDefault(): void;
    set _MainTex(value: Texture);
    set _BumpMap(value: Texture);
    set _MaskTex(value: Texture);
    set _UVTransform(value: Vector4);
    set _Metallic(value: number);
    set _Roughness(value: number);
    set _MainColor(value: Color);
    set _AlphaCutoff(value: number);
    set _DoubleSidedEnable(value: number);
    set _SurfaceType(value: number);
    set _AlphaCutoffEnable(value: number);
}
