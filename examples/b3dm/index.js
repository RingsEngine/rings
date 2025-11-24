import {
  Engine3D,
  Scene3D,
  Object3D,
  Camera3D,
  View3D,
  DirectLight,
  HoverCameraController,
  FatLineGeometry,
  FatLineMaterial,
  FatLineRenderer,
  Color,
  MeshRenderer,
  BoxGeometry,
  LitMaterial,
  Vector3,
  Vector2,
  webGPUContext,
  TilesRenderer,
  FileLoader,
  GLBParser,
  AtmosphericComponent
} from "../../index";

// Initialize Rings Engine
let tilesRenderer = null;
await Engine3D.init({
  renderLoop: () => {
    if (tilesRenderer) {
      tilesRenderer.update();
    }
  },
});

window['webgpuContext'] = webGPUContext;

// Create scene
const scene = new Scene3D();

// Create camera
const cameraObj = new Object3D();
const camera = cameraObj.addComponent(Camera3D);
camera.perspective(60, window.innerWidth / window.innerHeight, 0.1, 1000);
cameraObj.transform.z = 10;
cameraObj.transform.y = 3;
camera.far = 1000000;

// Add hover camera controller
const controller = cameraObj.addComponent(HoverCameraController);
controller.setCamera(0, -10, 10);

scene.addChild(cameraObj);

// Add directional light
// const lightObj = new Object3D();
// const light = lightObj.addComponent(DirectLight);
// light.lightColor = new Color(1, 1, 1, 1);
// light.intensity = 1000000.0;
// lightObj.transform.rotationX = 45;
// lightObj.transform.rotationY = -135;
// scene.addChild(lightObj);

// Create FatLine example 0: Coordinate System (X=Red, Y=Green, Z=Blue)
{
  const axisLength = 5;
  const axisWidth = 6;
  
  // X Axis (Red)
  {
    const xAxisObj = new Object3D();
    xAxisObj.name = "XAxis";
    
    const geometry = new FatLineGeometry();
    geometry.setPositions(new Float32Array([
      0, 0, 0,           // Origin
      axisLength, 0, 0,  // X direction
    ]));
    
    const material = new FatLineMaterial();
    material.baseColor = new Color(1, 0, 0, 1); // Red
    material.lineWidth = axisWidth;
    material.opacity = 1.0;
    
    const renderer = xAxisObj.addComponent(FatLineRenderer);
    renderer.geometry = geometry;
    renderer.material = material;
    
    scene.addChild(xAxisObj);
  }
  
  // Y Axis (Green)
  {
    const yAxisObj = new Object3D();
    yAxisObj.name = "YAxis";
    
    const geometry = new FatLineGeometry();
    geometry.setPositions(new Float32Array([
      0, 0, 0,           // Origin
      0, axisLength, 0,  // Y direction
    ]));
    
    const material = new FatLineMaterial();
    material.baseColor = new Color(0, 1, 0, 1); // Green
    material.lineWidth = axisWidth;
    material.opacity = 1.0;
    
    const renderer = yAxisObj.addComponent(FatLineRenderer);
    renderer.geometry = geometry;
    renderer.material = material;
    
    scene.addChild(yAxisObj);
  }
  
  // Z Axis (Blue)
  {
    const zAxisObj = new Object3D();
    zAxisObj.name = "ZAxis";
    
    const geometry = new FatLineGeometry();
    geometry.setPositions(new Float32Array([
      0, 0, 0,           // Origin
      0, 0, axisLength,  // Z direction
    ]));
    
    const material = new FatLineMaterial();
    material.baseColor = new Color(0, 0, 1, 1); // Blue
    material.lineWidth = axisWidth;
    material.opacity = 1.0;
    
    const renderer = zAxisObj.addComponent(FatLineRenderer);
    renderer.geometry = geometry;
    renderer.material = material;
    
    scene.addChild(zAxisObj);
  }
}

{
  let sky = scene.addComponent(AtmosphericComponent);
  sky.sunY = 0.54  // 太阳垂直位置，可以调节环境光亮度
  sky.exposure = 1.5; //调整环境光曝光度, 默认值1
  sky.roughness = 0.5; // 设置天空盒背景模糊强度, 范围[0, 1], 默认值0
}

// 创建一个受光的立方体
// {
//   const cubeObj = new Object3D();
//   cubeObj.name = "Cube";
//   cubeObj.transform.scale = new Vector3(1, 1, 1);
//   cubeObj.transform.position = new Vector3(0, 0, 0);
//   cubeObj.transform.rotation = new Vector3(0, 0, 0);
//   const meshRenderer = cubeObj.addComponent(MeshRenderer);
//   const geometry = new BoxGeometry();
//   const material = new LitMaterial();
//   material.baseColor = new Color(1, 1, 1, 1);
//   material.opacity = 1.0;
//   meshRenderer.geometry = geometry;
//   meshRenderer.material = material;
//   scene.addChild(cubeObj);
// }

// 加载一个glb
// {
//   const glbPath = './assets/DamagedHelmet3D.glb';
//   const loader = new FileLoader();
//   const parser = await loader.load(glbPath, GLBParser);
//   const asset = parser.data;
//   scene.addChild(asset);
// }

{
  tilesRenderer = new TilesRenderer();
  
  // 设置根节点加载完成回调：在包围盒半径范围内看向包围盒中心
  tilesRenderer.onRootTileLoaded = (params) => {
    const { center, radius, rtcOffset } = params;
    
    // 计算相机距离：在包围盒半径范围内，使用半径的某个倍数（例如 1.5 倍）
    const distance = radius * 1.5;
    
    // 更新 HoverCameraController，让相机看向包围盒中心
    // setCamera(roll, pitch, distance, target)
    // roll: 水平旋转角度（度）
    // pitch: 垂直俯仰角度（度）
    // distance: 相机到目标点的距离
    // target: 目标点（包围盒中心）
    const target = new Vector3(center.x + rtcOffset.x, center.y + rtcOffset.y, center.z + rtcOffset.z);
    controller.setCamera(0, -30, distance, target);
    
    // 更新相机的 far 平面，确保能看到整个场景
    camera.far = Math.max(1000000, radius * 10);
    
    console.log('Root tile loaded:', {
      center: { x: center.x, y: center.y, z: center.z },
      radius: radius,
      distance: distance,
      target: center
    });
  };
  
  await tilesRenderer.loadTileSet('https://autel-cc-media.obs.cn-south-1.myhuaweicloud.com/20251016/29a9f12a-4e27-4a77-81e7-ed83d404be0e/huizhou_base_b3dm', 'tileset.json');
  tilesRenderer.setCamera(camera, webGPUContext.presentationSize[0], webGPUContext.presentationSize[1]);
  scene.addChild(tilesRenderer.group);
}


// Create view and start rendering
const view = new View3D();
view.scene = scene;
view.camera = camera;

Engine3D.startRenderView(view);

// Handle window resize
window.addEventListener("resize", () => {
  Engine3D.setting.render.width = window.innerWidth;
  Engine3D.setting.render.height = window.innerHeight;
  camera.perspective(60, window.innerWidth / window.innerHeight, 0.1, 1000);

  if (tilesRenderer) {
    tilesRenderer.setResolution(camera, window.innerWidth, window.innerHeight);
  }
});

window['resetCamera'] = () => {
  controller.setCamera(0, -30, 10, new Vector3(0, 0, 0));
  camera.far = 1000000;
}



