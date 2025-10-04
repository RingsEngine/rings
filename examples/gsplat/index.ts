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
  private renderer: GSplatRenderer;

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

      // 添加到场景
      this.scene.addChild(gsplatObj);

      console.log('✅ GSplatRenderer initialized:', {
        count: renderer.count,
        textureSize: renderer.size
      });

      // Save renderer reference and create control panel
      this.renderer = renderer;
      this.createControlPanel();

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
   * 创建控制面板
   */
  private createControlPanel() {
    // Create panel container
    const panel = document.createElement('div');
    panel.id = 'gsplat-control-panel';
    panel.innerHTML = `
      <style>
        #gsplat-control-panel {
          position: fixed;
          top: 20px;
          right: 20px;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(10px);
          color: #fff;
          padding: 20px;
          border-radius: 12px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-size: 14px;
          min-width: 280px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          z-index: 1000;
          user-select: none;
        }
        
        #gsplat-control-panel h3 {
          margin: 0 0 16px 0;
          font-size: 16px;
          font-weight: 600;
          color: #4CAF50;
          border-bottom: 2px solid #4CAF50;
          padding-bottom: 8px;
        }
        
        .control-group {
          margin-bottom: 20px;
        }
        
        .control-group:last-child {
          margin-bottom: 0;
        }
        
        .control-label {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
          font-size: 13px;
        }
        
        .control-label-name {
          color: #aaa;
        }
        
        .control-label-value {
          color: #4CAF50;
          font-weight: 600;
          font-family: 'Monaco', 'Menlo', monospace;
        }
        
        .control-slider {
          width: 100%;
          height: 6px;
          border-radius: 3px;
          background: rgba(255, 255, 255, 0.1);
          outline: none;
          -webkit-appearance: none;
          appearance: none;
        }
        
        .control-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #4CAF50;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .control-slider::-webkit-slider-thumb:hover {
          background: #66BB6A;
          transform: scale(1.2);
        }
        
        .control-slider::-moz-range-thumb {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #4CAF50;
          cursor: pointer;
          border: none;
          transition: all 0.2s ease;
        }
        
        .control-slider::-moz-range-thumb:hover {
          background: #66BB6A;
          transform: scale(1.2);
        }
        
        .control-hint {
          font-size: 11px;
          color: #666;
          margin-top: 6px;
          line-height: 1.4;
        }
        
        .toggle-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(0, 0, 0, 0.85);
          color: #4CAF50;
          border: 2px solid #4CAF50;
          border-radius: 8px;
          padding: 10px 16px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 600;
          transition: all 0.3s ease;
          z-index: 999;
        }
        
        .toggle-btn:hover {
          background: #4CAF50;
          color: white;
        }
        
        .panel-hidden {
          display: none;
        }
      </style>
      
      <h3>🎛️ GSplat Controls</h3>
      
      <div class="control-group">
        <div class="control-label">
          <span class="control-label-name">Splat Size (visBoost)</span>
          <span class="control-label-value" id="visboost-value">1.00</span>
        </div>
        <input 
          type="range" 
          class="control-slider" 
          id="visboost-slider"
          min="0.5" 
          max="1.5" 
          step="0.05" 
          value="1.0"
        />
        <div class="control-hint">
          ↓ Smaller: Sharper, less gaps<br>
          ↑ Larger: Fill gaps, more overlap
        </div>
      </div>
      
      <div class="control-group">
        <div class="control-label">
          <span class="control-label-name">Sort Throttle (ms)</span>
          <span class="control-label-value" id="throttle-value">16 (60fps)</span>
        </div>
        <input 
          type="range" 
          class="control-slider" 
          id="throttle-slider"
          min="0" 
          max="100" 
          step="1" 
          value="16"
        />
        <div class="control-hint">
          0: No throttle (best quality)<br>
          16: ~60fps | 33: ~30fps | 100: ~10fps
        </div>
      </div>
    `;
    
    // Add toggle button
    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'toggle-btn';
    toggleBtn.textContent = 'Hide Panel';
    toggleBtn.onclick = () => {
      const isHidden = panel.classList.toggle('panel-hidden');
      toggleBtn.textContent = isHidden ? 'Show Panel' : 'Hide Panel';
    };
    
    document.body.appendChild(toggleBtn);
    document.body.appendChild(panel);
    
    // Get elements
    const visBoostSlider = document.getElementById('visboost-slider') as HTMLInputElement;
    const visBoostValue = document.getElementById('visboost-value');
    const throttleSlider = document.getElementById('throttle-slider') as HTMLInputElement;
    const throttleValue = document.getElementById('throttle-value');
    
    // Update visBoost
    visBoostSlider.addEventListener('input', (e) => {
      const value = parseFloat((e.target as HTMLInputElement).value);
      this.renderer.setVisBoost(value);
      if (visBoostValue) {
        visBoostValue.textContent = value.toFixed(2);
      }
      console.log('💡 visBoost:', value);
    });
    
    // Update sortThrottle
    throttleSlider.addEventListener('input', (e) => {
      const value = parseInt((e.target as HTMLInputElement).value);
      this.renderer.setSortThrottle(value);
      
      let label = value.toString();
      if (value === 0) label = '0 (∞fps)';
      else if (value === 16) label = '16 (60fps)';
      else if (value === 33) label = '33 (30fps)';
      else if (value === 100) label = '100 (10fps)';
      else label = `${value}ms`;
      
      if (throttleValue) {
        throttleValue.textContent = label;
      }
      console.log('💡 sortThrottle:', value);
    });
    
    console.log('✅ Control panel created');
    console.log('💡 Tip: Press H to toggle panel visibility');
    
    // Keyboard shortcut to toggle panel
    window.addEventListener('keydown', (e) => {
      if (e.key === 'h' || e.key === 'H') {
        const isHidden = panel.classList.toggle('panel-hidden');
        toggleBtn.textContent = isHidden ? 'Show Panel' : 'Hide Panel';
      }
    });
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
}

