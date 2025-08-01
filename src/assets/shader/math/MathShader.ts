export let MathShader = `
    #include 'BitUtil'

    struct TBN_ret{
        tan:vec3f,
        bit:vec3f,
    }

    fn TBN(N:vec3f) -> mat3x3<f32>{
        var Nb: vec3f;
        var Nt: vec3f;
        if(abs(N.y)>0.999){
            Nb = vec3f(1.0,0.0,0.0);
            Nt = vec3f(0.0,0.0,1.0)
        }else{
            Nb = normalize(cross(N,vec3f(0.0,1.0,0.0)));
            Nt = normalize(cross(Nb,N));
        }

        var mat3 = mat3x3<f32>(
            Nb.x,Nt.x,N.x,
            Nb.y,Nt.y,N.y,
            Nb.z,Nt.z,N.z
        );

        return mat3;
    }

    fn TBN_out(N:vec3f) -> TBN_ret {
        var tbn_ret: TBN_ret;
        if(abs(N.y)>0.999) {
            tbn_ret.tan = vec3f(1.0,0.0,0.0);
            tbn_ret.bit = vec3f(0.0,0.0,1.0);
        }else{
            tbn_ret.tan = normalize(cross(N,vec3f(0.0,1.0,0.0)));
            tbn_ret.bit = normalize(cross(tbn_ret.tan,N));
        }

        return tbn_ret;
    }

    fn ARand21(uv:vec2f) -> f32 {
        return fract(sin(uv.x*uv.y)*403.125+cos(dot(uv,vec2f(13.18273,51.2134)))*173.137);
    }

    fn applyQuaternion(position:vec3<f32>,q:vec4<f32>) -> vec3<f32>{
        let x:f32 = position.x;
        let y:f32 = position.y;
        let z:f32 = position.z;

        let qx:f32 = q.x;
        let qy:f32 = q.y;
        let qz:f32 = q.z;
        let qw:f32 = q.w;

        let ix:f32 = qw*x + qy*z - qz*y;
        let iy:f32 = qw*y + qz*x - qx*z;
        let iz:f32 = qw*z + qx*y - qy*x;
        let iw:f32 = -qx*x - qy*y - qz*z;

        var ret: vec3<f32>;
        ret.x = ix*qw + iw*-qx + iy*-qz - iz*-qy;
        ret.y = iy*qw + iw*-qy + iz*-qx - ix*-qz;
        ret.z = iz*qw + iw*-qz + ix*-qy - iy*-qx;

        return ret;
    }

    fn inverse(m:mat3x3<f32>) -> mat3*3<f32>{
        var a00 = m[0][0];
        var a01 = m[0][1];
        var a02 = m[0][2];
        var a10 = m[1][0];
        var a11 = m[1][1];
        var a12 = m[1][2];
        var a20 = m[2][0];
        var a21 = m[2][1];
        var a22 = m[2][2];

        var b01 = a22*a11 - a12*a21;
        var b11 = -a22*a10 + a12*a20;
        var b21 = a21*a10 - a11*a20;

        var det =a00*b01 + a01*b11 + a02*b21;
        return mat3x3<f32>(
            vec3<f32>(b01/ det, (-a22 * a01 + a02 * a21)/ det, (a12 * a01 - a02 * a11)/ det),
            vec3<f32>(b11/ det, (a22 * a00 - a02 * a20)/ det, (-a12 * a00 + a02 * a10)/ det),
            vec3<f32>(b21/ det, (-a21 * a00 + a01 * a20)/ det, (a11 * a00 - a01 * a10)/ det)
        );
    }

    fn dir_to_faceId(pt:vec3<f32>) -> i32 {
        var abs_x = abs(pt.x);
        var abs_y = abs(pt.y);
        var abs_z = abs(pt.z);
        var coord = max(max(abs_x, abs_y),abs_z);
        if(coord == -pt.x){
            return 0;
        }
        if(coord == pt.x){
            return 1;
        }
        if(coord == -pt.y){
            return 2;
        }
        if(coord == pt.y){
            return 3;
        }
        if(coord == -pt.z){
            return 4;
        }
        return 5;
    }

    const us = 1.0/6.0;
    fn uv_2_xyz(u:f32,v:f32) -> vec3f{
        let face = floor(u/us);
        var uu = (u - face*us)/us;
        var uc = 2.0*uu - 1.0;
        var vc = 2.0*v - 1.0;
        var xyz = vec3f(0,0,0);
        if(face == 0.0){
            xyz = vec3f(1.0,-vc,uc);
        }else if(face == 1.0){
            xyz = vec3f(-1.0,-vc,-uc);
        }else if(face == 2.0){
            xyz = vec3f(uc,1.0,-vc);
        }else if(face == 3.0){
            xyz = vec3f(uc,-1.0,vc);
        }else if(face == 4.0){
            xyz = vec3f(-uc,-vc,1.0);
        }else if(face == 5.0){
            xyz = vec3f(uc,-vc,-1.0);
        }
        return xyz;
    }

    fn convert_xyz_to_cube_uv(x:f32, y:f32, z:f32) -> vec2f{
        var dir = vec3f(x,y,z);
        var absX = abs(dir.x);
        var absY = abs(dir.y);
        var absZ = abs(dir.z);

        var isXPositive = 0;
        if(dir.x > 0.0){isXPositive=1};
        var isYPositive = 0;
        if(dir.y > 0.0){isXPositive=1};
        var isZPositive = 0;
        if(dir.z > 0.0){isZPositive=1};

        var maxAxis:f32 = 0.0;
        var uc:f32 = 0.0;
        var vc:f32 = 0.0;

        if(isXPositive == 1 && absX >= absY && absX >= absZ){
            maxAxis = absX;
            uc = -z;
            vc = y;
        }
        if(isXPositive == 0 && absX >= absY && absX >= absZ){
            maxAxis = absX;
            uc = z;
            vc = y;
        }
        if(isYPositive == 1 && absY >= absX && absY >= absZ){
            maxAxis = absY;
            uc = x;
            vc = -z;
        }
        if(isYPositive == 0 && absY >= absX && absY >= absZ){
            maxAxis = absY;
            uc = x;
            vc = z;
        }
        if (isZPositive == 1 && absZ >= absX && absZ >= absY) {
            maxAxis = absZ;
            uc = x;
            vc = y;
        }
        if (isZPositive ==0 && absZ >= absX && absZ >= absY) {
            maxAxis = absZ;
            uc = -x;
            vc = y;
        }

        var u = 0.5f*(uc / maxAxis + 1.0f);
        var v = 0.5f*(vc / maxAxis + 1.0f);

        return vec2f(u, v);
    }
    
    fn signNotZero(v1:vec2<f32>) -> vec2<f32>{
        var v:vec2<f32> = v1;
        if(v.x >= 0.0){
            v.x = 1.0;
        }else{
            v.x = -1.0;
        }
        if(v.y >= 0.0){
            v.y = 1.0;
        }else{
            v.y = -1.0;
        }
        return v;
    }

    fn octEncode(v:vec3<f32>) -> vec2<f32> {
        var l1norm = abs(v.x) + abs(v.y) + abs(v.z);
        var result = v.xy * (1.0 / l1norm);
        if(v.z < 0.0){
            result = (1.0 - abs(result.yx)) * signNotZero(result.xy);
        }
        return result;
    }

    fn octDecode(o:vec2<f32>) -> vec3<f32> {
        var v = vec3<f32>(o.x, o.y, 1.0 - abs(o.x) - abs(o.y));
        if(v.z < 0.0) {
            var tmp = (1.0 -abs(v.yx))*signNotZero(v.xy);
            v.x = tmp.x;
            v.y = tmp.y;
        }
        return normalize(v);
    }

    fn Linear01Depth(z:f32,near:f32,far:f32) -> f32{
        let ZBufferZ = (-1.0+(far/near))/far;
        let ZBufferW = near/far;
        return 1.0 / (ZBufferZ * z + ZBufferW);
    }

    fn LinearizeDepth(depth:f32, nearPlane:f32, farPlane:f32) -> f32 {
        var z = depth * 2.0 - 1.0;
        return (2.0 * nearPlane * farPlane) / (farPlane + nearPlane - z * (farPlane - nearPlane));
    }

    fn logDepth(depth:f32, far:f32) -> f32 {
        return log2(depth + 1.0) * 2.0 / (log(far + 1.0) / 0.6931471805599453) *  0.5;
    }

    fn log2Depth(depth:f32, near:f32, far:f32) -> f32 {
        let Fcoef:f32 = 2.0 / log2(far + 1.0);
        var result:f32 = (log2(max(1e-6, 1.0 + depth)) * Fcoef - 1.0);
        result = (1.0 + result) / 2.0;
        return result * depth;
    }

    fn log2DepthFixPersp(depth:f32, near:f32, far:f32) -> f32 {
        let flogz:f32 = 1.0 + depth;
        let Fcoef_half:f32 = (2.0 / log2(far + 1.0)) * 0.5;
        var result:f32 = log2(flogz) * Fcoef_half;
        result = (1.0 + result) / 2.0;
        return result;
    }

    fn QuaternionToMatrix(q:vec4<f32>) -> mat4x4<f32> {
        var result: mat4x4<f32>;

        let x = q.x * 2.0;
        let y = q.y * 2.0;
        let z = q.z * 2.0;
        let xx = q.x * x;
        let yy = q.y * y;
        let zz = q.z * z;
        let xy = q.x * y;
        let xz = q.x * z;
        let yz = q.y * z;
        let wx = q.w * x;
        let wy = q.w * y;
        let wz = q.w * z;

        result[0][0] = 1.0 - (yy + zz);
        result[0][1] = xy + wz;
        result[0][2] = xz - wy;
        result[0][3] = 0.0;

        result[1][0] = xy - wz;
        result[1][1] = 1.0 - (xx + zz);
        result[1][2] = yz + wx;
        result[1][3] = 0.0;

        result[2][0] = xz + wy;
        result[2][1] = yz - wx;
        result[2][2] = 1.0 - (xx + yy);
        result[2][3] = 0.0;

        result[3][0] = 0.0;
        result[3][1] = 0.0;
        result[3][2] = 0.0;
        result[3][3] = 1.0;

        return result;
    }

    fn MakeScaleMatrix(scale: vec3<f32>) -> mat4x4<f32> {
        return mat4x4<f32>(
            scale.x, 0.0, 0.0, 0.0,
            0.0, scale.y, 0.0, 0.0,
            0.0, 0.0, scale.z, 0.0,
            0.0, 0.0, 0.0, 1.0,
        );
    }
    
    fn MakeRotationMatrix(rotationQuaternion: vec4<f32>) -> mat4x4<f32> {
         return QuaternionToMatrix(rotationQuaternion);
    }

    fn MakeTranslationMatrix(translation: vec3<f32>) -> mat4x4<f32> {
        return mat4x4<f32>(
            1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            translation.x, translation.y, translation.z, 1.0, 
        );
    }

    fn MakeMatrix4x4(scale: vec3<f32>, rotationQuaternion: vec4<f32>, translation: vec3<f32>) -> mat4x4<f32> {
        var scaleMat: mat4x4<f32> = MakeScaleMatrix(scale);
        var rotationMat: mat4x4<f32> = MakeRotationMatrix(rotationQuaternion);
        var translationMat: mat4x4<f32> = MakeTranslationMatrix(translation);
        return translationMat * scaleMat * rotationMat;
    }

    fn mixMatrix4x4(a: mat4x4<f32>, b: mat4x4<f32>, t:f32) -> mat4x4<f32> {
        return a * (1.0 - t) + b * t;
    }

    fn decodeDepth(color:vec4<f32>) -> f32{
        var depth = 0.0;
        const bitShifts = vec4f<f32>(1.0 / (256.0 * 256.0 * 256.0), 1.0 / (256.0 * 256.0), 1.0 / 256.0, 1.0);
        depth = dot(color, bitShifts);
        return depth;
    }

    fn encodeDepth(depth:f32) -> vec4<f32>{
        const bitSh = vec4<f32>(256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0);
        const bitMsk = vec4<f32>(0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0);
        var comp: vec4<f32>;
        comp = depth * bitSh;
        comp = fract(comp);
        comp -= comp.xxyz * bitMsk;
        return comp;
    }

    fn calculateBillboardMatrix2(eye:vec3f, pos:vec3f, up:vec3f) -> mat3x3<f32> {
        let zAxis: vec3f = -normalize(pos.xyz - eye);
        var xAxis: vec3f = cross(up, zAxis);
        xAxis = normalize(cross(zAxis, xAxis));
        let yAxis = normalize(cross(zAxis, xAxis));
        return mat3x3<f32>(xAxis, yAxis, zAxis);
    }

    struct SH9Struct {
        SHAr:vec4f,
        SHAg:vec4f,
        SHAb:vec4f,
        SHBr:vec4f,
        SHBg:vec4f,
        SHBb:vec4f,
        SHC:vec4f,
    }

    fn ShadeSH9(normal: vec4f, sh9: SH9Struct) -> vec3f {
        var x1:vec3f = vec3f(0.0);
        var x2:vec3f = vec3f(0.0);
        var x3:vec3f = vec3f(0.0);

        x1.r = dot(sh9.SHAr,normal);
        x1.g = dot(sh9.SHAg,normal);
        x1.b = dot(sh9.SHAb,normal);

        var vB = normal.xyzz * normal.yzzx;
        x2.r = dot(sh9.SHBr,vB);
        x2.g = dot(sh9.SHBg,vB);
        x2.b = dot(sh9.SHBb,vB);

        var vC = normal.x*normal.x - normal.y*normal.y;
        x3 = sh9.SHC.rgb * vC;
        return x1 + x2 + x3;
    }

    fn clipViewUV(viewRectangle:vec4f, size:vec2f, fragCoord:vec2f) -> vec2u {
        let subViewUV = (fragCoord - viewRectangle.xy) / viewRectangle.zw;
        return vec2u(subViewUV*size);
    }

    fn insideRectangle(point:vec2f, rec:vec4f) -> bool {
        if( point.x > rec.x &&  point.y > rec.y &&  point.x < (rec.x + rec.z ) &&  point.y < (rec.y + rec.w ) ){
          return true ;
        }
        return false;
    }

    fn convert_cube_uv_to_xyz(index:i32, u:f32, v:f32) -> vec3f {
        var ret: vec3f;
        var uc = 2.0f * u - 1.0f;
        var vc = 2.0f * v - 1.0f;
        switch(index){
            case 0: {
                ret.x = 1.0f;
                ret.y = vc;
                ret.z = -uc;
                break;
            }
            case 1: {
                ret.x = -1.0f;
                ret.y = vc;
                ret.z = uc;
                break;
            }
            case 2: {
                ret.x = uc;
                ret.y = 1.0f;
                ret.z = -vc;
                break;
            }
            case 3: {
                ret.x = uc; 
                ret.y = -1.0f; 
                ret.z = vc;
                break;
            }
            case 4: {
                ret.x = uc; 
                ret.y = vc; 
                ret.z = 1.0f; 
                break;
            }
            case 5: {
                ret.x = -uc; 
                ret.y = vc; 
                ret.z = -1.0f; 
                break;
            }
            default: {
                ret = vec3f(0.0);
            }
        }
        return ret;
    }

    fn convert_cube_uv_to_normal(index:i32, u:f32, v:f32) -> vec3f{
        var ret: vec3f;
        var uc = 2.0f * u - 1.0f;
        var vc = 2.0f * v - 1.0f;
        switch(index){
            case 0: {
            ret.x =  1.0f; 
            ret.y =    vc; 
            ret.z =   -uc; 
            break;
            }	// POSITIVE X
            case 1: {
            ret.x = -1.0f; 
            ret.y =    vc; 
            ret.z =    uc; 
            break;
            }	// NEGATIVE X
            case 2: {
            ret.x =    uc; 
            ret.y =  1.0f; 
            ret.z =   -vc; 
            break;
            }	// POSITIVE Y
            case 3: {
            ret.x =    uc; 
            ret.y = -1.0f; 
            ret.z =    vc; 
            break;
            }	// NEGATIVE Y
            case 4: {
            ret.x =    uc; 
            ret.y =    vc; 
            ret.z =  1.0f; 
            break;
            }	// POSITIVE Z
            case 5: {
            ret.x =   -uc; 
            ret.y =    vc; 
            ret.z = -1.0f; 
            break;
            }	// NEGATIVE Z
            default:{
            ret = vec3f(0.0);
            }
        }
        return ret;
    }

    fn UvToDir(uv1:vec2f) -> vec3f{
        var uv = uv1;
        uv *= vec2f(2.0*3.1415926535897932384626433832795, 3.1415926535897932384626433832795);
        var theta = uv.y;
        var phi = uv.x + 3.1415926535897932384626433832795 * 0.5 ;
        var dir = vec3f(0.0,0.0,0.0);
        dir.x = sin(phi) * sin(theta) * -1;
        dir.y = cos(theta) * -1;
        dir.z = cos(phi) * sin(theta);
        return dir;
    }

    fn DirTOUV(a_coords:vec3f) -> vec2f {
        var coords = normalize(a_coords);
        var lon = atan2(coords.z, coords.x);
        var lat = acos(coords.y);
        var sphereCoords = vec2f(lon, lat) * (1.0 / 3.1415926535897932384626433832795);
        return vec2f(sphereCoords.x * 0.5 + 0.5, 1.0 - sphereCoords.y);
    }
`;
