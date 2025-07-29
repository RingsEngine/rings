[Rings WebGPU Engine API - v0.0.1](../README.md) / [Exports](../modules.md) / TokenType

# Enumeration: TokenType

## Table of contents

### Enumeration Members

- [EOF](TokenType.md#eof)
- [IDENT](TokenType.md#ident)
- [VOID](TokenType.md#void)
- [CONST](TokenType.md#const)
- [LAYOUT](TokenType.md#layout)
- [PRECISION](TokenType.md#precision)
- [ATTRIBUTE](TokenType.md#attribute)
- [UNIFORM](TokenType.md#uniform)
- [VARYING](TokenType.md#varying)
- [INVARIANT](TokenType.md#invariant)
- [IN](TokenType.md#in)
- [OUT](TokenType.md#out)
- [INOUT](TokenType.md#inout)
- [IF](TokenType.md#if)
- [ELSE](TokenType.md#else)
- [FOR](TokenType.md#for)
- [WHILE](TokenType.md#while)
- [DO](TokenType.md#do)
- [BREAK](TokenType.md#break)
- [RETURN](TokenType.md#return)
- [CONTINUE](TokenType.md#continue)
- [STRUCT](TokenType.md#struct)
- [COMMA](TokenType.md#comma)
- [COLON](TokenType.md#colon)
- [QUEMARK](TokenType.md#quemark)
- [SEMICOLON](TokenType.md#semicolon)
- [LEFTSAMLL](TokenType.md#leftsamll)
- [RIGHTSAMLL](TokenType.md#rightsamll)
- [LEFTMEDI](TokenType.md#leftmedi)
- [RIGHTMEDI](TokenType.md#rightmedi)
- [LEFTBIG](TokenType.md#leftbig)
- [RIGHTBIG](TokenType.md#rightbig)
- [LITERAL](TokenType.md#literal)
- [BeginBuiltinType](TokenType.md#beginbuiltintype)
- [INT](TokenType.md#int)
- [INT\_ARRAY](TokenType.md#int_array)
- [UINT](TokenType.md#uint)
- [UINT\_ARRAY](TokenType.md#uint_array)
- [BOOL](TokenType.md#bool)
- [BOOL\_ARRAY](TokenType.md#bool_array)
- [FLOAT](TokenType.md#float)
- [FLOAT\_ARRAY](TokenType.md#float_array)
- [DOUBLE](TokenType.md#double)
- [DOUBLE\_ARRAY](TokenType.md#double_array)
- [VEC2](TokenType.md#vec2)
- [VEC2\_ARRAY](TokenType.md#vec2_array)
- [VEC3](TokenType.md#vec3)
- [VEC3\_ARRAY](TokenType.md#vec3_array)
- [VEC4](TokenType.md#vec4)
- [VEC4\_ARRAY](TokenType.md#vec4_array)
- [BVEC2](TokenType.md#bvec2)
- [BVEC2\_ARRAY](TokenType.md#bvec2_array)
- [BVEC3](TokenType.md#bvec3)
- [BVEC3\_ARRAY](TokenType.md#bvec3_array)
- [BVEC4](TokenType.md#bvec4)
- [BVEC4\_ARRAY](TokenType.md#bvec4_array)
- [IVEC2](TokenType.md#ivec2)
- [IVEC2\_ARRAY](TokenType.md#ivec2_array)
- [IVEC3](TokenType.md#ivec3)
- [IVEC3\_ARRAY](TokenType.md#ivec3_array)
- [IVEC4](TokenType.md#ivec4)
- [IVEC4\_ARRAY](TokenType.md#ivec4_array)
- [UVEC2](TokenType.md#uvec2)
- [UVEC2\_ARRAY](TokenType.md#uvec2_array)
- [UVEC3](TokenType.md#uvec3)
- [UVEC3\_ARRAY](TokenType.md#uvec3_array)
- [UVEC4](TokenType.md#uvec4)
- [UVEC4\_ARRAY](TokenType.md#uvec4_array)
- [MAT2x2](TokenType.md#mat2x2)
- [MAT2x2\_ARRAY](TokenType.md#mat2x2_array)
- [MAT2x3](TokenType.md#mat2x3)
- [MAT2x3\_ARRAY](TokenType.md#mat2x3_array)
- [MAT2x4](TokenType.md#mat2x4)
- [MAT2x4\_ARRAY](TokenType.md#mat2x4_array)
- [MAT3x2](TokenType.md#mat3x2)
- [MAT3x2\_ARRAY](TokenType.md#mat3x2_array)
- [MAT3x3](TokenType.md#mat3x3)
- [MAT3x3\_ARRAY](TokenType.md#mat3x3_array)
- [MAT3x4](TokenType.md#mat3x4)
- [MAT3x4\_ARRAY](TokenType.md#mat3x4_array)
- [MAT4x2](TokenType.md#mat4x2)
- [MAT4x2\_ARRAY](TokenType.md#mat4x2_array)
- [MAT4x3](TokenType.md#mat4x3)
- [MAT4x3\_ARRAY](TokenType.md#mat4x3_array)
- [MAT4x4](TokenType.md#mat4x4)
- [MAT4x4\_ARRAY](TokenType.md#mat4x4_array)
- [SAMPLER](TokenType.md#sampler)
- [SAMPLER\_1D](TokenType.md#sampler_1d)
- [SAMPLER\_2D](TokenType.md#sampler_2d)
- [SAMPLER\_3D](TokenType.md#sampler_3d)
- [SAMPLER\_CUBE](TokenType.md#sampler_cube)
- [SAMPLER\_SHADOW](TokenType.md#sampler_shadow)
- [SAMPLER\_1D\_SHADOW](TokenType.md#sampler_1d_shadow)
- [SAMPLER\_2D\_SHADOW](TokenType.md#sampler_2d_shadow)
- [TEXTURE\_1D](TokenType.md#texture_1d)
- [TEXTURE\_1D\_ARRAY](TokenType.md#texture_1d_array)
- [TEXTURE\_2D](TokenType.md#texture_2d)
- [TEXTURE\_2D\_ARRAY](TokenType.md#texture_2d_array)
- [TEXTURE\_3D](TokenType.md#texture_3d)
- [TEXTURE\_CUBE](TokenType.md#texture_cube)
- [TEXTURE\_CUBE\_ARRAY](TokenType.md#texture_cube_array)
- [EndBuiltinType](TokenType.md#endbuiltintype)
- [BeginOperation](TokenType.md#beginoperation)
- [ADD](TokenType.md#add)
- [SUB](TokenType.md#sub)
- [MUL](TokenType.md#mul)
- [DIV](TokenType.md#div)
- [AND](TokenType.md#and)
- [OR](TokenType.md#or)
- [XOR](TokenType.md#xor)
- [NOT](TokenType.md#not)
- [BITAND](TokenType.md#bitand)
- [BITOR](TokenType.md#bitor)
- [BITXOR](TokenType.md#bitxor)
- [BITNOT](TokenType.md#bitnot)
- [BITSHIFT\_L](TokenType.md#bitshift_l)
- [BITSHIFT\_R](TokenType.md#bitshift_r)
- [INC](TokenType.md#inc)
- [DEC](TokenType.md#dec)
- [GREATER](TokenType.md#greater)
- [GREATEREQUAL](TokenType.md#greaterequal)
- [EQUAL](TokenType.md#equal)
- [LESS](TokenType.md#less)
- [LESSEQUAL](TokenType.md#lessequal)
- [NOTEQUAL](TokenType.md#notequal)
- [DOT](TokenType.md#dot)
- [ASSIGN](TokenType.md#assign)
- [EndOperation](TokenType.md#endoperation)
- [BeginAssignOperation](TokenType.md#beginassignoperation)
- [ADDASSIGN](TokenType.md#addassign)
- [SUBASSIGN](TokenType.md#subassign)
- [MULASSIGN](TokenType.md#mulassign)
- [DIVASSIGN](TokenType.md#divassign)
- [EndAssignOperation](TokenType.md#endassignoperation)

## Enumeration Members

### EOF

• **EOF** = ``0``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:150

___

### IDENT

• **IDENT** = ``1``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:152

___

### VOID

• **VOID** = ``2``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:154

___

### CONST

• **CONST** = ``3``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:156

___

### LAYOUT

• **LAYOUT** = ``4``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:158

___

### PRECISION

• **PRECISION** = ``5``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:160

___

### ATTRIBUTE

• **ATTRIBUTE** = ``6``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:162

___

### UNIFORM

• **UNIFORM** = ``7``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:164

___

### VARYING

• **VARYING** = ``8``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:166

___

### INVARIANT

• **INVARIANT** = ``9``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:168

___

### IN

• **IN** = ``10``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:170

___

### OUT

• **OUT** = ``11``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:172

___

### INOUT

• **INOUT** = ``12``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:174

___

### IF

• **IF** = ``13``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:176

___

### ELSE

• **ELSE** = ``14``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:178

___

### FOR

• **FOR** = ``15``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:180

___

### WHILE

• **WHILE** = ``16``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:182

___

### DO

• **DO** = ``17``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:184

___

### BREAK

• **BREAK** = ``18``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:186

___

### RETURN

• **RETURN** = ``19``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:188

___

### CONTINUE

• **CONTINUE** = ``20``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:190

___

### STRUCT

• **STRUCT** = ``21``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:192

___

### COMMA

• **COMMA** = ``22``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:195

___

### COLON

• **COLON** = ``23``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:197

___

### QUEMARK

• **QUEMARK** = ``24``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:199

___

### SEMICOLON

• **SEMICOLON** = ``25``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:201

___

### LEFTSAMLL

• **LEFTSAMLL** = ``26``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:203

___

### RIGHTSAMLL

• **RIGHTSAMLL** = ``27``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:205

___

### LEFTMEDI

• **LEFTMEDI** = ``28``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:207

___

### RIGHTMEDI

• **RIGHTMEDI** = ``29``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:209

___

### LEFTBIG

• **LEFTBIG** = ``30``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:211

___

### RIGHTBIG

• **RIGHTBIG** = ``31``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:213

___

### LITERAL

• **LITERAL** = ``32``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:216

___

### BeginBuiltinType

• **BeginBuiltinType** = ``33``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:219

___

### INT

• **INT** = ``34``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:221

___

### INT\_ARRAY

• **INT\_ARRAY** = ``35``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:223

___

### UINT

• **UINT** = ``36``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:225

___

### UINT\_ARRAY

• **UINT\_ARRAY** = ``37``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:227

___

### BOOL

• **BOOL** = ``38``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:229

___

### BOOL\_ARRAY

• **BOOL\_ARRAY** = ``39``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:231

___

### FLOAT

• **FLOAT** = ``40``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:233

___

### FLOAT\_ARRAY

• **FLOAT\_ARRAY** = ``41``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:235

___

### DOUBLE

• **DOUBLE** = ``42``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:237

___

### DOUBLE\_ARRAY

• **DOUBLE\_ARRAY** = ``43``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:239

___

### VEC2

• **VEC2** = ``44``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:241

___

### VEC2\_ARRAY

• **VEC2\_ARRAY** = ``45``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:243

___

### VEC3

• **VEC3** = ``46``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:245

___

### VEC3\_ARRAY

• **VEC3\_ARRAY** = ``47``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:247

___

### VEC4

• **VEC4** = ``48``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:249

___

### VEC4\_ARRAY

• **VEC4\_ARRAY** = ``49``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:251

___

### BVEC2

• **BVEC2** = ``50``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:253

___

### BVEC2\_ARRAY

• **BVEC2\_ARRAY** = ``51``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:255

___

### BVEC3

• **BVEC3** = ``52``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:257

___

### BVEC3\_ARRAY

• **BVEC3\_ARRAY** = ``53``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:259

___

### BVEC4

• **BVEC4** = ``54``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:261

___

### BVEC4\_ARRAY

• **BVEC4\_ARRAY** = ``55``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:263

___

### IVEC2

• **IVEC2** = ``56``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:265

___

### IVEC2\_ARRAY

• **IVEC2\_ARRAY** = ``57``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:267

___

### IVEC3

• **IVEC3** = ``58``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:269

___

### IVEC3\_ARRAY

• **IVEC3\_ARRAY** = ``59``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:271

___

### IVEC4

• **IVEC4** = ``60``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:273

___

### IVEC4\_ARRAY

• **IVEC4\_ARRAY** = ``61``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:275

___

### UVEC2

• **UVEC2** = ``62``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:277

___

### UVEC2\_ARRAY

• **UVEC2\_ARRAY** = ``63``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:279

___

### UVEC3

• **UVEC3** = ``64``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:281

___

### UVEC3\_ARRAY

• **UVEC3\_ARRAY** = ``65``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:283

___

### UVEC4

• **UVEC4** = ``66``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:285

___

### UVEC4\_ARRAY

• **UVEC4\_ARRAY** = ``67``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:287

___

### MAT2x2

• **MAT2x2** = ``68``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:289

___

### MAT2x2\_ARRAY

• **MAT2x2\_ARRAY** = ``69``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:291

___

### MAT2x3

• **MAT2x3** = ``70``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:293

___

### MAT2x3\_ARRAY

• **MAT2x3\_ARRAY** = ``71``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:295

___

### MAT2x4

• **MAT2x4** = ``72``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:297

___

### MAT2x4\_ARRAY

• **MAT2x4\_ARRAY** = ``73``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:299

___

### MAT3x2

• **MAT3x2** = ``74``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:301

___

### MAT3x2\_ARRAY

• **MAT3x2\_ARRAY** = ``75``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:303

___

### MAT3x3

• **MAT3x3** = ``76``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:305

___

### MAT3x3\_ARRAY

• **MAT3x3\_ARRAY** = ``77``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:307

___

### MAT3x4

• **MAT3x4** = ``78``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:309

___

### MAT3x4\_ARRAY

• **MAT3x4\_ARRAY** = ``79``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:311

___

### MAT4x2

• **MAT4x2** = ``80``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:313

___

### MAT4x2\_ARRAY

• **MAT4x2\_ARRAY** = ``81``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:315

___

### MAT4x3

• **MAT4x3** = ``82``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:317

___

### MAT4x3\_ARRAY

• **MAT4x3\_ARRAY** = ``83``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:319

___

### MAT4x4

• **MAT4x4** = ``84``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:321

___

### MAT4x4\_ARRAY

• **MAT4x4\_ARRAY** = ``85``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:323

___

### SAMPLER

• **SAMPLER** = ``86``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:325

___

### SAMPLER\_1D

• **SAMPLER\_1D** = ``87``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:327

___

### SAMPLER\_2D

• **SAMPLER\_2D** = ``88``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:329

___

### SAMPLER\_3D

• **SAMPLER\_3D** = ``89``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:331

___

### SAMPLER\_CUBE

• **SAMPLER\_CUBE** = ``90``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:333

___

### SAMPLER\_SHADOW

• **SAMPLER\_SHADOW** = ``91``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:335

___

### SAMPLER\_1D\_SHADOW

• **SAMPLER\_1D\_SHADOW** = ``92``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:337

___

### SAMPLER\_2D\_SHADOW

• **SAMPLER\_2D\_SHADOW** = ``93``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:339

___

### TEXTURE\_1D

• **TEXTURE\_1D** = ``94``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:341

___

### TEXTURE\_1D\_ARRAY

• **TEXTURE\_1D\_ARRAY** = ``95``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:343

___

### TEXTURE\_2D

• **TEXTURE\_2D** = ``96``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:345

___

### TEXTURE\_2D\_ARRAY

• **TEXTURE\_2D\_ARRAY** = ``97``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:347

___

### TEXTURE\_3D

• **TEXTURE\_3D** = ``98``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:349

___

### TEXTURE\_CUBE

• **TEXTURE\_CUBE** = ``99``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:351

___

### TEXTURE\_CUBE\_ARRAY

• **TEXTURE\_CUBE\_ARRAY** = ``100``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:353

___

### EndBuiltinType

• **EndBuiltinType** = ``101``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:355

___

### BeginOperation

• **BeginOperation** = ``102``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:358

___

### ADD

• **ADD** = ``103``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:361

___

### SUB

• **SUB** = ``104``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:363

___

### MUL

• **MUL** = ``105``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:365

___

### DIV

• **DIV** = ``106``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:367

___

### AND

• **AND** = ``107``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:370

___

### OR

• **OR** = ``108``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:372

___

### XOR

• **XOR** = ``109``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:374

___

### NOT

• **NOT** = ``110``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:376

___

### BITAND

• **BITAND** = ``111``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:379

___

### BITOR

• **BITOR** = ``112``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:381

___

### BITXOR

• **BITXOR** = ``113``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:383

___

### BITNOT

• **BITNOT** = ``114``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:385

___

### BITSHIFT\_L

• **BITSHIFT\_L** = ``115``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:387

___

### BITSHIFT\_R

• **BITSHIFT\_R** = ``116``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:389

___

### INC

• **INC** = ``117``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:392

___

### DEC

• **DEC** = ``118``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:394

___

### GREATER

• **GREATER** = ``119``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:396

___

### GREATEREQUAL

• **GREATEREQUAL** = ``120``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:398

___

### EQUAL

• **EQUAL** = ``121``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:400

___

### LESS

• **LESS** = ``122``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:402

___

### LESSEQUAL

• **LESSEQUAL** = ``123``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:404

___

### NOTEQUAL

• **NOTEQUAL** = ``124``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:406

___

### DOT

• **DOT** = ``125``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:409

___

### ASSIGN

• **ASSIGN** = ``126``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:412

___

### EndOperation

• **EndOperation** = ``127``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:415

___

### BeginAssignOperation

• **BeginAssignOperation** = ``128``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:418

___

### ADDASSIGN

• **ADDASSIGN** = ``129``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:420

___

### SUBASSIGN

• **SUBASSIGN** = ``130``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:422

___

### MULASSIGN

• **MULASSIGN** = ``131``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:424

___

### DIVASSIGN

• **DIVASSIGN** = ``132``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:426

___

### EndAssignOperation

• **EndAssignOperation** = ``133``

#### Defined in

gfx/graphics/webGpu/shader/converter/GLSLLexerToken.ts:428
