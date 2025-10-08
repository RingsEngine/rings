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
  private gsplatObj: Object3D;

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
    controller.setCamera(-90, 0, 2);

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
      this.gsplatObj = new Object3D();
      this.gsplatObj.name = 'GaussianSplat';

      // 添加 GSplatRenderer 组件（新的 ECS 风格 API）
      const renderer = this.gsplatObj.addComponent(GSplatRenderer);
      
      // 从 asset 初始化
      renderer.initAsset(asset);

      // 添加到场景
      this.scene.addChild(this.gsplatObj);

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
          width: 340px;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          z-index: 1000;
          user-select: none;
        }
        
        #gsplat-control-panel::-webkit-scrollbar {
          width: 8px;
        }
        
        #gsplat-control-panel::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
        }
        
        #gsplat-control-panel::-webkit-scrollbar-thumb {
          background: rgba(76, 175, 80, 0.5);
          border-radius: 4px;
        }
        
        #gsplat-control-panel::-webkit-scrollbar-thumb:hover {
          background: rgba(76, 175, 80, 0.7);
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
        
        .transform-section {
          margin-bottom: 20px;
          padding: 14px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 8px;
          border: 1px solid rgba(76, 175, 80, 0.2);
        }
        
        .transform-title {
          font-size: 12px;
          font-weight: 600;
          color: #4CAF50;
          margin-bottom: 10px;
          letter-spacing: 0.5px;
        }
        
        .transform-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
        }
        
        .transform-cell {
          display: flex;
          flex-direction: column;
          gap: 4px;
          min-width: 0;
        }
        
        .transform-cell label {
          font-size: 10px;
          color: #888;
          font-weight: 600;
          text-align: center;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .transform-input {
          width: 100%;
          padding: 6px 4px;
          background: rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(76, 175, 80, 0.3);
          border-radius: 4px;
          color: #4CAF50;
          font-size: 12px;
          font-weight: 600;
          font-family: 'Monaco', 'Menlo', monospace;
          text-align: center;
          outline: none;
          transition: all 0.2s ease;
          cursor: ns-resize;
          box-sizing: border-box;
        }
        
        .transform-input:hover {
          border-color: rgba(76, 175, 80, 0.6);
          background: rgba(0, 0, 0, 0.7);
        }
        
        .transform-input:focus {
          border-color: #4CAF50;
          background: rgba(0, 0, 0, 0.8);
          box-shadow: 0 0 0 2px rgba(76, 175, 80, 0.2);
          cursor: text;
        }
        
        .transform-input.dragging {
          border-color: #4CAF50;
          background: rgba(76, 175, 80, 0.2);
          cursor: ns-resize;
        }
        
        .transform-input::-webkit-outer-spin-button,
        .transform-input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        
        .transform-input[type=number] {
          -moz-appearance: textfield;
        }
      </style>
      
      <h3>🎛️ GSplat Controls</h3>
      
      <!-- Transform Grid -->
      <div class="transform-section">
        <div class="transform-title">📍 Position</div>
        <div class="transform-grid">
          <div class="transform-cell">
            <label>X</label>
            <input type="number" id="pos-x" value="0" step="0.1" class="transform-input">
          </div>
          <div class="transform-cell">
            <label>Y</label>
            <input type="number" id="pos-y" value="0" step="0.1" class="transform-input">
          </div>
          <div class="transform-cell">
            <label>Z</label>
            <input type="number" id="pos-z" value="0" step="0.1" class="transform-input">
          </div>
        </div>
      </div>
      
      <div class="transform-section">
        <div class="transform-title">🔄 Rotation</div>
        <div class="transform-grid">
          <div class="transform-cell">
            <label>X</label>
            <input type="number" id="rot-x" value="0" step="5" class="transform-input">
          </div>
          <div class="transform-cell">
            <label>Y</label>
            <input type="number" id="rot-y" value="0" step="5" class="transform-input">
          </div>
          <div class="transform-cell">
            <label>Z</label>
            <input type="number" id="rot-z" value="0" step="5" class="transform-input">
          </div>
        </div>
      </div>
      
      <div class="transform-section">
        <div class="transform-title">📏 Scale</div>
        <div class="transform-grid">
          <div class="transform-cell">
            <label>X</label>
            <input type="number" id="scale-x" value="1" step="0.1" class="transform-input">
          </div>
          <div class="transform-cell">
            <label>Y</label>
            <input type="number" id="scale-y" value="1" step="0.1" class="transform-input">
          </div>
          <div class="transform-cell">
            <label>Z</label>
            <input type="number" id="scale-z" value="1" step="0.1" class="transform-input">
          </div>
        </div>
      </div>
      
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
    
    // Get transform control elements
    const posX = document.getElementById('pos-x') as HTMLInputElement;
    const posY = document.getElementById('pos-y') as HTMLInputElement;
    const posZ = document.getElementById('pos-z') as HTMLInputElement;
    const rotX = document.getElementById('rot-x') as HTMLInputElement;
    const rotY = document.getElementById('rot-y') as HTMLInputElement;
    const rotZ = document.getElementById('rot-z') as HTMLInputElement;
    const scaleX = document.getElementById('scale-x') as HTMLInputElement;
    const scaleY = document.getElementById('scale-y') as HTMLInputElement;
    const scaleZ = document.getElementById('scale-z') as HTMLInputElement;
    
    // Get rendering control elements
    const visBoostSlider = document.getElementById('visboost-slider') as HTMLInputElement;
    const visBoostValue = document.getElementById('visboost-value');
    const throttleSlider = document.getElementById('throttle-slider') as HTMLInputElement;
    const throttleValue = document.getElementById('throttle-value');
    
    // Transform controls - Position (support real-time input)
    const updatePosition = () => {
      const x = parseFloat(posX.value) || 0;
      const y = parseFloat(posY.value) || 0;
      const z = parseFloat(posZ.value) || 0;
      this.gsplatObj.transform.x = x;
      this.gsplatObj.transform.y = y;
      this.gsplatObj.transform.z = z;
    };
    
    posX.addEventListener('input', updatePosition);
    posY.addEventListener('input', updatePosition);
    posZ.addEventListener('input', updatePosition);
    
    // Transform controls - Rotation (support real-time input)
    const updateRotation = () => {
      const x = parseFloat(rotX.value) || 0;
      const y = parseFloat(rotY.value) || 0;
      const z = parseFloat(rotZ.value) || 0;
      this.gsplatObj.transform.rotationX = x;
      this.gsplatObj.transform.rotationY = y;
      this.gsplatObj.transform.rotationZ = z;
    };
    
    rotX.addEventListener('input', updateRotation);
    rotY.addEventListener('input', updateRotation);
    rotZ.addEventListener('input', updateRotation);
    
    // Transform controls - Scale (support real-time input)
    const updateScale = () => {
      const x = parseFloat(scaleX.value) || 1;
      const y = parseFloat(scaleY.value) || 1;
      const z = parseFloat(scaleZ.value) || 1;
      this.gsplatObj.transform.scaleX = x;
      this.gsplatObj.transform.scaleY = y;
      this.gsplatObj.transform.scaleZ = z;
    };
    
    scaleX.addEventListener('input', updateScale);
    scaleY.addEventListener('input', updateScale);
    scaleZ.addEventListener('input', updateScale);
    
    // Add mouse wheel support for all transform inputs
    const addWheelSupport = (input: HTMLInputElement, step: number = 0.1) => {
      input.addEventListener('wheel', (e) => {
        e.preventDefault();
        const currentValue = parseFloat(input.value) || 0;
        const delta = e.deltaY > 0 ? -step : step;
        input.value = (currentValue + delta).toFixed(2);
        input.dispatchEvent(new Event('input'));
      });
    };
    
    // Add mouse drag support for all transform inputs (like Blender/Unity)
    const addDragSupport = (input: HTMLInputElement, step: number = 0.1) => {
      let isDragging = false;
      let startY = 0;
      let startValue = 0;
      
      input.addEventListener('mousedown', (e) => {
        // Only drag when not focused (focused = typing mode)
        if (document.activeElement !== input) {
          e.preventDefault();
          isDragging = true;
          startY = e.clientY;
          startValue = parseFloat(input.value) || 0;
          input.classList.add('dragging');
          document.body.style.cursor = 'ns-resize';
        }
      });
      
      document.addEventListener('mousemove', (e) => {
        if (isDragging) {
          e.preventDefault();
          const deltaY = startY - e.clientY; // Inverted: up = increase
          const change = deltaY * step;
          const newValue = startValue + change;
          input.value = newValue.toFixed(2);
          input.dispatchEvent(new Event('input'));
        }
      });
      
      document.addEventListener('mouseup', () => {
        if (isDragging) {
          isDragging = false;
          input.classList.remove('dragging');
          document.body.style.cursor = '';
        }
      });
    };
    
    // Add wheel support to all transform inputs
    [posX, posY, posZ].forEach(input => {
      addWheelSupport(input, 0.1);
      addDragSupport(input, 0.1);
    });
    [rotX, rotY, rotZ].forEach(input => {
      addWheelSupport(input, 1);
      addDragSupport(input, 1);
    });
    [scaleX, scaleY, scaleZ].forEach(input => {
      addWheelSupport(input, 0.05);
      addDragSupport(input, 0.05);
    });
    
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
    console.log('💡 Tips:');
    console.log('  - Press H to toggle panel visibility');
    console.log('  - Click & drag up/down on input boxes to adjust values');
    console.log('  - Use mouse wheel on input boxes for quick adjustments');
    console.log('  - Click to focus and type exact values');
    console.log('  - Use arrow keys ↑↓ to fine-tune values');
    
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

