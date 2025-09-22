# Rings WebGPU 框架文档

欢迎使用 Rings WebGPU 框架文档。Rings 是一个基于 WebGPU 的高性能 3D 渲染框架，专为现代浏览器设计。

## 文档分类

- [快速入门](/quick-start)
- [核心概念](/core)
- [组件系统](/components)
- [扩展功能](/extensions)
- [工具集](/tools)
- [Shader 开发](/shaders)
- [后处理效果](/post-processing)

## API

- 核心 Core
  - [Engine3D](api/core/Engine3D.md)
  - [Scene3D](api/core/Scene3D.md)
  - [View3D](api/core/View3D.md)
  - [Camera3D](api/core/Camera3D.md)
  - [Object3D](api/core/Object3D.md)

- 组件 Components
  - 渲染 Renderer
    - [RenderNode](api/components/renderer/RenderNode.md)
    - [MeshRenderer](api/components/renderer/MeshRenderer.md)
  - 材质 Materials
    - [Material](api/materials/Material.md)
    - [LitMaterial](api/materials/LitMaterial.md)
    - [UnLitMaterial](api/materials/UnLitMaterial.md)
  - 纹理 Textures
    - [BitmapTexture2D](api/textures/BitmapTexture2D.md)
    - [BitmapTexture2DArray](api/textures/BitmapTexture2DArray.md)
    - [BitmapTextureCube](api/textures/BitmapTextureCube.md)
    - [Depth2DTextureArray](api/textures/Depth2DTextureArray.md)
    - [DepthCubeArrayTexture](api/textures/DepthCubeArrayTexture.md)
    - [Float16ArrayTexture](api/textures/Float16ArrayTexture.md)
    - [Float32ArrayTexture](api/textures/Float32ArrayTexture.md)
    - [HDRTexture](api/textures/HDRTexture.md)
    - [HDRTextureCube](api/textures/HDRTextureCube.md)
    - [LDRTextureCube](api/textures/LDRTextureCube.md)
    - [RenderTexture](api/textures/RenderTexture.md)
    - [SolidColorSky](api/textures/SolidColorSky.md)
    - [TextureCubeFaceData](api/textures/TextureCubeFaceData.md)
    - [Uint8ArrayTexture](api/textures/Uint8ArrayTexture.md)
    - [VirtualTexture](api/textures/VirtualTexture.md)
  - GFX / Generate
    - [BRDFLUTGenerate](api/gfx/BRDFLUTGenerate.md)
    - [PassGenerate](api/gfx/PassGenerate.md)
    - [ErpImage2CubeMap](api/gfx/ErpImage2CubeMap.md)
    - [TextureCubeUtils](api/gfx/TextureCubeUtils.md)
    - [BlurTexture2DBufferCreator](api/gfx/BlurTexture2DBufferCreator.md)
    - [IBLEnvMapCreator](api/gfx/IBLEnvMapCreator.md)
    - [MergeRGBACreator](api/gfx/MergeRGBACreator.md)
    - [TextureCubeStdCreator](api/gfx/TextureCubeStdCreator.md)
    - [TextureScaleCompute](api/gfx/TextureScaleCompute.md)

## 特性

- 基于 WebGPU 的高性能渲染
- 组件化系统设计
- 可扩展的渲染管线
- 丰富的后处理效果
- 友好的 Shader 开发体验
