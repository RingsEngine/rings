 import {
  Engine3D,
  Object3D,
  FileLoader,
  GaussianSplatParser,
  GSplatRenderer,
  WorkerManager
} from '../../../index';

 /**
   * 渐进式加载 Gaussian Splat
   * @param {*} plyPath PLY 文件路径
   * @param {*} chunkSize 每次加载的 chunk 大小 默认 20000000 字节
   * @param {*} that 上下文对象，用于在回调中访问场景和渲染器，包括 that.scene, that.renderer, that.gsplatObj
   */
  export const loadGaussianSplatProgressive = async (plyPath, chunkSize = 20000000, that) => {
    // 加载 PLY 文件
    const loader = new FileLoader();
    // 开启新线程解析
    const workerManager = new WorkerManager();
    // 初始化 Worker
    workerManager.createWorker();

    that.onPartRender = (e) => {
        // 添加到场景
        that.scene.removeChild(that.gsplatObj);
        that.gsplatObj = null;
        that.renderer = null;
        const asset = e.data;
        // 创建 Object3D
        that.gsplatObj = new Object3D();
        that.gsplatObj.name = 'GaussianSplat';
        // 添加 GSplatRenderer 组件（新的 ECS 风格 API）
        const renderer = that.gsplatObj.addComponent(GSplatRenderer);
        // 切割数据
        let newAsset = {
            bbox: {},
            count: asset.count,
            opacity: asset.opacity,
            position: asset.position,
            rotation: asset.rotation,
            scale: asset.scale,
            sh: {
                order: asset.sh.order,
                coeffs: asset.sh.coeffs
            }
        }
        // 从 asset 初始化
        renderer.initAsset(newAsset);
        // 添加到场景
        that.scene.addChild(that.gsplatObj);
        that.renderer = renderer;
    }

    Engine3D.inputSystem.addEventListener('partPlyBuffer-result', that.onPartRender, that);

    const loaderFunctions = {
        // 添加属性用于累积数据块
        accumulatedBuffer: null, // 使用Uint8Array安全地累积二进制数据
        accumulatedLength: 0,
        chunkType: null,
        parser: new GaussianSplatParser(), // 保存解析器引用，使其在回调中可访问

        onProgress: async (loaded, total, url, chunk) => {
            // 累积数据块以便后续处理
            if (chunk) {
                // 安全地累积二进制数据，避免栈溢出
                const chunkUint8 = new Uint8Array(chunk);

                // 如果是第一次接收到数据，初始化累积数组
                if (!loaderFunctions.accumulatedBuffer) {
                    loaderFunctions.accumulatedBuffer = new Uint8Array(chunkUint8.length);
                    loaderFunctions.accumulatedBuffer.set(chunkUint8);
                } else {
                    // 创建一个更大的数组并复制现有数据
                    const newBuffer = new Uint8Array(loaderFunctions.accumulatedBuffer.length + chunkUint8.length);
                    newBuffer.set(loaderFunctions.accumulatedBuffer);
                    newBuffer.set(chunkUint8, loaderFunctions.accumulatedBuffer.length);
                    loaderFunctions.accumulatedBuffer = newBuffer;
                }

                loaderFunctions.accumulatedLength += chunk.length;

                // 示例：如何在下载过程中使用保存的解析器
                if (loaderFunctions.chunkType === null) {
                    try {
                        // 2. 对于二进制文件，可以检查文件头或特定标记
                        if (url.endsWith('.ply') && chunk.length >= 8) {
                            loaderFunctions.chunkType = 'PLY';
                        }
                    } catch (error) {
                        console.warn('Partial parsing error:', error.message);
                    }
                } else if (loaderFunctions.chunkType === 'PLY') {
                    // 3. 如果累积了足够的数据，可以尝试更复杂的解析
                    if (loaderFunctions.accumulatedLength > chunkSize) {
                        loaderFunctions.accumulatedLength = 0;
                        // 新的线程传递数据
                        workerManager.sendBuffer(loaderFunctions.accumulatedBuffer.buffer);
                    }
                }
            }
        },
        onComplete: async (url) => {
            workerManager.terminate();
            Engine3D.inputSystem.removeEventListener('partPlyBuffer-result', that.onPartRender, that);
            that.scene.removeChild(that.gsplatObj);
            that.gsplatObj = null;
            that.renderer = null;
            loaderFunctions.accumulatedLength = 0;
            await loaderFunctions.parser.parsePartBuffer(loaderFunctions.accumulatedBuffer.buffer);
            const asset = loaderFunctions.parser.data;
            // 创建 Object3D
            that.gsplatObj = new Object3D();
            that.gsplatObj.name = 'GaussianSplat';

            // 添加 GSplatRenderer 组件（新的 ECS 风格 API）
            const renderer = that.gsplatObj.addComponent(GSplatRenderer);

            // 切割数据
            let newAsset = {
                bbox: {},
                count: asset.count,
                opacity: asset.opacity,
                position: asset.position,
                rotation: asset.rotation,
                scale: asset.scale,
                sh: {
                    order: asset.sh.order,
                    coeffs: asset.sh.coeffs
                }
            }
            // 从 asset 初始化
            renderer.initAsset(newAsset);

            // 添加到场景
            that.scene.addChild(that.gsplatObj);
            that.renderer = renderer;
        },
        onError: (error) => {
            console.error('download is failed:', error);
        }
    };

    await loader.load(plyPath, GaussianSplatParser, loaderFunctions);
}