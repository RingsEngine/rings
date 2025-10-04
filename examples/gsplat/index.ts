/**
 * Gaussian Splat 基础示例
 * 展示如何使用新的 GSplatRenderer 组件渲染 3D Gaussian Splats
 */

import {
  Engine3D,
  Scene3D,
  Object3D,
  Camera3D,
  View3D,
  HoverCameraController,
  AtmosphericComponent,
  DirectLight,
  Color,
  FileLoader,
  GaussianSplatParser,
  GaussianSplatAsset,
  GSplatRenderer
} from '../../index';

export class GSplatBasicExample {
  private scene: Scene3D;
  private camera: Camera3D;

  async init() {
    // 初始化引擎
    await Engine3D.init();

    // 创建场景
    this.scene = new Scene3D();

    // 添加天空
    const sky = this.scene.addComponent(AtmosphericComponent);
    sky.sunY = 0.6;

    // 创建相机
    const cameraObj = new Object3D();
    this.camera = cameraObj.addComponent(Camera3D);
    this.camera.perspective(60, Engine3D.aspect, 0.1, 1000);

    // 添加相机控制器
    const controller = cameraObj.addComponent(HoverCameraController);
    controller.setCamera(45, -30, 10);

    this.scene.addChild(cameraObj);

    // 添加光源
    const light = new Object3D();
    light.rotationX = 45;
    light.rotationY = 45;
    const directLight = light.addComponent(DirectLight);
    directLight.lightColor = new Color(1, 1, 1, 1);
    directLight.intensity = 1.0;
    this.scene.addChild(light);

    // 创建视图
    const view = new View3D();
    view.scene = this.scene;
    view.camera = this.camera;
    
    // 开始渲染
    Engine3D.startRenderView(view);

    console.log('✅ Engine initialized');
  }

  /**
   * 加载并渲染 Gaussian Splat
   */
  async loadGaussianSplat(plyPath: string) {
    console.log('📦 Loading Gaussian Splat:', plyPath);

    try {
      // 加载 PLY 文件
      const loader = new FileLoader();
      const parser = await loader.load(plyPath, GaussianSplatParser);
      const asset = parser.data as GaussianSplatAsset;

      console.log('✅ Loaded asset:', {
        count: asset.count,
        bbox: asset.bbox,
        hasScale: !!asset.scale,
        hasRotation: !!asset.rotation,
        hasOpacity: !!asset.opacity,
        shOrder: asset.sh?.order
      });

      // 创建 Object3D
      const gsplatObj = new Object3D();
      gsplatObj.name = 'GaussianSplat';

      // 添加 GSplatRenderer 组件（新的 ECS 风格 API）
      const renderer = gsplatObj.addComponent(GSplatRenderer);
      
      // 从 asset 初始化
      renderer.initAsset(asset);

      // 可选：配置参数
      // renderer.setVisBoost(1.0);        // 调整 splat 大小
      // renderer.setSortThrottle(16);     // 排序节流 (60 FPS)

      // 添加到场景
      this.scene.addChild(gsplatObj);

      console.log('✅ GSplatRenderer initialized:', {
        count: renderer.count,
        textureSize: renderer.size
      });

      return renderer;
    } catch (error) {
      console.error('❌ Failed to load Gaussian Splat:', error);
      throw error;
    }
  }

  /**
   * 示例：使用映射渲染部分 splats
   */
  async loadWithMapping(plyPath: string, splatCount: number) {
    const renderer = await this.loadGaussianSplat(plyPath);

    // 创建映射（只渲染前 N 个 splats）
    const count = Math.min(splatCount, renderer.count);
    const mapping = new Uint32Array(count);
    for (let i = 0; i < count; i++) {
      mapping[i] = i;
    }

    renderer.setMapping(mapping);
    console.log('✅ Applied mapping, rendering', count, 'splats');

    return renderer;
  }

  /**
   * 示例：动态调整参数
   */
  async loadWithDynamicConfig(plyPath: string) {
    const renderer = await this.loadGaussianSplat(plyPath);

    // 增大 splat 显示
    renderer.setVisBoost(1.5);

    // 设置排序节流 (30 FPS)
    renderer.setSortThrottle(33);

    console.log('✅ Applied dynamic configuration');

    return renderer;
  }
}

// 使用示例
export const main = async () => {
  const example = new GSplatBasicExample();
  await example.init();

  // 基础使用
  await example.loadGaussianSplat('./assets/ply/biker.ply');

  // 或者使用映射（只渲染前 10000 个 splats）
  // await example.loadWithMapping('./assets/ply/biker.ply', 10000);

  // 或者使用动态配置
  // await example.loadWithDynamicConfig('./assets/ply/biker.ply');
}

