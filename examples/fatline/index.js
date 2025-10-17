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
} from "../../index";

// Store objects that need animation
const animatedObjects = [];

// Store spiral for debug controls
let spiralObj = null;
let spiralGeometry = null;
let spiralMaterial = null;
let spiralRenderer = null;
let baseRotationSpeed = { speedX: 0.5, speedY: 0.8 };

// Initialize Rings Engine
await Engine3D.init({
  renderLoop: () => {
    // Animate registered objects
    // Note: FatLineRenderer automatically updates modelMatrix and resolution each frame
    animatedObjects.forEach(({ obj, speedX, speedY }) => {
      obj.transform.rotationX += speedX;
      obj.transform.rotationY += speedY;
    });
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

// Add hover camera controller
const controller = cameraObj.addComponent(HoverCameraController);
controller.setCamera(0, -10, 10);

scene.addChild(cameraObj);

// Add directional light
const lightObj = new Object3D();
const light = lightObj.addComponent(DirectLight);
light.lightColor = new Color(1, 1, 1, 1);
light.intensity = 1.0;
lightObj.transform.rotationX = 45;
lightObj.transform.rotationY = 45;
scene.addChild(lightObj);

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

// Create FatLine example 1: Simple line
{
  const lineObj = new Object3D();
  lineObj.name = "SimpleLine";
  lineObj.transform.y = 4; // Move up to avoid overlapping with axes

  const geometry = new FatLineGeometry();
  
  // Create a simple line path
  const positions = new Float32Array([
    -3, 0, 0,  // Start point
    -1, 2, 0,  // Point 2
    1, 1, 0,   // Point 3
    3, 0, 0,   // End point
  ]);
  
  geometry.setPositions(positions);
  
  const material = new FatLineMaterial();
  material.baseColor = new Color(1, 0.5, 0, 1); // Orange
  material.lineWidth = 5.0;
  material.opacity = 1.0;
  
  const renderer = lineObj.addComponent(FatLineRenderer);
  renderer.geometry = geometry;
  renderer.material = material;
  
  scene.addChild(lineObj);
}

// Port from three.js/examples/jsm/utils/GeometryUtils.js
function hilbert3D(center, size, iterations, v0, v1, v2, v3, v4, v5, v6, v7) {
  const half = size / 2;
  
  const vec_s = [
    { x: center.x - half, y: center.y + half, z: center.z - half },
    { x: center.x - half, y: center.y + half, z: center.z + half },
    { x: center.x - half, y: center.y - half, z: center.z + half },
    { x: center.x - half, y: center.y - half, z: center.z - half },
    { x: center.x + half, y: center.y - half, z: center.z - half },
    { x: center.x + half, y: center.y - half, z: center.z + half },
    { x: center.x + half, y: center.y + half, z: center.z + half },
    { x: center.x + half, y: center.y + half, z: center.z - half }
  ];
  
  const vec = [
    vec_s[v0], vec_s[v1], vec_s[v2], vec_s[v3],
    vec_s[v4], vec_s[v5], vec_s[v6], vec_s[v7]
  ];
  
  if (--iterations >= 0) {
    return [
      ...hilbert3D(vec[0], half, iterations, v0, v3, v4, v7, v6, v5, v2, v1),
      ...hilbert3D(vec[1], half, iterations, v0, v7, v6, v1, v2, v5, v4, v3),
      ...hilbert3D(vec[2], half, iterations, v0, v7, v6, v1, v2, v5, v4, v3),
      ...hilbert3D(vec[3], half, iterations, v2, v3, v0, v1, v6, v7, v4, v5),
      ...hilbert3D(vec[4], half, iterations, v2, v3, v0, v1, v6, v7, v4, v5),
      ...hilbert3D(vec[5], half, iterations, v4, v3, v2, v5, v6, v1, v0, v7),
      ...hilbert3D(vec[6], half, iterations, v4, v3, v2, v5, v6, v1, v0, v7),
      ...hilbert3D(vec[7], half, iterations, v6, v5, v2, v1, v0, v3, v4, v7)
    ];
  }
  
  return vec;
}

// Simple Catmull-Rom interpolation
function catmullRom(p0, p1, p2, p3, t) {
  const t2 = t * t;
  const t3 = t2 * t;
  
  return {
    x: 0.5 * ((2 * p1.x) + (-p0.x + p2.x) * t + (2*p0.x - 5*p1.x + 4*p2.x - p3.x) * t2 + (-p0.x + 3*p1.x - 3*p2.x + p3.x) * t3),
    y: 0.5 * ((2 * p1.y) + (-p0.y + p2.y) * t + (2*p0.y - 5*p1.y + 4*p2.y - p3.y) * t2 + (-p0.y + 3*p1.y - 3*p2.y + p3.y) * t3),
    z: 0.5 * ((2 * p1.z) + (-p0.z + p2.z) * t + (2*p0.z - 5*p1.z + 4*p2.z - p3.z) * t2 + (-p0.z + 3*p1.z - 3*p2.z + p3.z) * t3)
  };
}

// HSL to RGB conversion
function hslToRgb(h, s, l) {
  let r, g, b;
  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1/6) return p + (q - p) * 6 * t;
      if (t < 1/2) return q;
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }
  return { r, g, b };
}

// Function to create Hilbert curve
function createHilbertCurve(lineWidth) {
  // Remove old spiral if exists
  if (spiralObj) {
    scene.removeChild(spiralObj);
    const index = animatedObjects.findIndex(item => item.obj === spiralObj);
    if (index !== -1) animatedObjects.splice(index, 1);
  }
  
  const lineObj = new Object3D();
  lineObj.name = "HilbertCurve";
  lineObj.transform.y = 0;

  const geometry = new FatLineGeometry();
  
  // Generate Hilbert curve points
  const hilbertPoints = hilbert3D(
    { x: 0, y: 0, z: 0 },  // center
    20.0,                   // size
    1,                      // iterations
    0, 1, 2, 3, 4, 5, 6, 7  // vertex order
  );
  
  // Interpolate points using Catmull-Rom spline
  const divisions = Math.round(12 * hilbertPoints.length);
  const positions = [];
  const colors = [];
  
  for (let i = 0; i < divisions; i++) {
    const t = i / divisions;
    const segmentIndex = Math.floor(t * (hilbertPoints.length - 1));
    const localT = (t * (hilbertPoints.length - 1)) - segmentIndex;
    
    // Get 4 points for Catmull-Rom
    const p0 = hilbertPoints[Math.max(0, segmentIndex - 1)];
    const p1 = hilbertPoints[segmentIndex];
    const p2 = hilbertPoints[Math.min(hilbertPoints.length - 1, segmentIndex + 1)];
    const p3 = hilbertPoints[Math.min(hilbertPoints.length - 1, segmentIndex + 2)];
    
    const point = catmullRom(p0, p1, p2, p3, localT);
    positions.push(point.x, point.y, point.z);
    
    // HSL color
    const rgb = hslToRgb(t, 1.0, 0.5);
    colors.push(rgb.r, rgb.g, rgb.b);
  }
  
  geometry.setPositions(new Float32Array(positions));
  geometry.setColors(new Float32Array(colors));
  
  const material = new FatLineMaterial();
  material.baseColor = new Color(1, 1, 1, 1);
  material.lineWidth = lineWidth;
  material.opacity = 1.0;
  
  const renderer = lineObj.addComponent(FatLineRenderer);
  renderer.geometry = geometry;
  renderer.material = material;
  
  scene.addChild(lineObj);
  
  // Add to animated objects for rotation
  animatedObjects.push({
    obj: lineObj,
    speedX: baseRotationSpeed.speedX,
    speedY: baseRotationSpeed.speedY
  });
  
  // Store references
  spiralObj = lineObj;
  spiralGeometry = geometry;
  spiralMaterial = material;
  spiralRenderer = renderer;
  
  console.log(`✅ Created Hilbert curve with ${divisions} points (${hilbertPoints.length} control points)`);
}

// Create Hilbert curve
createHilbertCurve(5.0);

// Create FatLine example 3: Cube wireframe
{
  const lineObj = new Object3D();
  lineObj.name = "CubeWireframe";
  lineObj.transform.y = 3;

  const geometry = new FatLineGeometry();
  
  // Cube vertices
  const s = 1.5; // Half size
  const vertices = [
    [-s, -s, -s], [s, -s, -s], [s, s, -s], [-s, s, -s], // Back face
    [-s, -s, s], [s, -s, s], [s, s, s], [-s, s, s],     // Front face
  ];
  
  // Cube edges
  const edges = [
    // Back face
    [0, 1], [1, 2], [2, 3], [3, 0],
    // Front face
    [4, 5], [5, 6], [6, 7], [7, 4],
    // Connecting edges
    [0, 4], [1, 5], [2, 6], [3, 7],
  ];
  
  const positions = [];
  for (const [i, j] of edges) {
    positions.push(...vertices[i], ...vertices[j]);
  }
  
  geometry.setPositions(new Float32Array(positions));
  
  const material = new FatLineMaterial();
  material.baseColor = new Color(0, 1, 1, 1); // Cyan
  material.lineWidth = 3.0;
  material.opacity = 1.0;
  
  const renderer = lineObj.addComponent(FatLineRenderer);
  renderer.geometry = geometry;
  renderer.material = material;
  
  // Add to animated objects for rotation
  animatedObjects.push({ obj: lineObj, speedX: 0.8, speedY: 1.2 }); // 增加旋转速度
  
  scene.addChild(lineObj);
}

// Add reference cubes to visualize coordinate system
{
  const cubeSize = 0.3;
  
  // Origin cube (White/Gray) - at (0, 0, 0)
  {
    const cubeObj = new Object3D();
    cubeObj.name = "OriginCube";
    cubeObj.transform.x = 0;
    cubeObj.transform.y = 0;
    cubeObj.transform.z = 0;

    const geometry = new BoxGeometry(cubeSize, cubeSize, cubeSize);
    const material = new LitMaterial();
    material.baseColor = new Color(0.9, 0.9, 0.9, 1); // Light gray
    
    const renderer = cubeObj.addComponent(MeshRenderer);
    renderer.geometry = geometry;
    renderer.material = material;
    
    scene.addChild(cubeObj);
  }
  
  // X-axis cube (Red) - at (+5, 0, 0)
  {
    const cubeObj = new Object3D();
    cubeObj.name = "XAxisCube";
    cubeObj.transform.x = 5;
    cubeObj.transform.y = 0;
    cubeObj.transform.z = 0;

    const geometry = new BoxGeometry(cubeSize, cubeSize, cubeSize);
    const material = new LitMaterial();
    material.baseColor = new Color(1, 0, 0, 1); // Red - matches X axis
    
    const renderer = cubeObj.addComponent(MeshRenderer);
    renderer.geometry = geometry;
    renderer.material = material;
    
    scene.addChild(cubeObj);
  }
  
  // Y-axis cube (Green) - at (0, +5, 0)
  {
    const cubeObj = new Object3D();
    cubeObj.name = "YAxisCube";
    cubeObj.transform.x = 0;
    cubeObj.transform.y = 5;
    cubeObj.transform.z = 0;

    const geometry = new BoxGeometry(cubeSize, cubeSize, cubeSize);
    const material = new LitMaterial();
    material.baseColor = new Color(0, 1, 0, 1); // Green - matches Y axis
    
    const renderer = cubeObj.addComponent(MeshRenderer);
    renderer.geometry = geometry;
    renderer.material = material;
    
    scene.addChild(cubeObj);
  }
  
  // Z-axis cube (Blue) - at (0, 0, +5)
  {
    const cubeObj = new Object3D();
    cubeObj.name = "ZAxisCube";
    cubeObj.transform.x = 0;
    cubeObj.transform.y = 0;
    cubeObj.transform.z = 5;

    const geometry = new BoxGeometry(cubeSize, cubeSize, cubeSize);
    const material = new LitMaterial();
    material.baseColor = new Color(0, 0, 1, 1); // Blue - matches Z axis
    
    const renderer = cubeObj.addComponent(MeshRenderer);
    renderer.geometry = geometry;
    renderer.material = material;
    
    scene.addChild(cubeObj);
  }
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
});

console.log("✅ FatLine example loaded!");
console.log("📦 Scene objects:", scene.numChildren);
console.log("🔄 Animated objects:", animatedObjects.length);
console.log("📍 Camera position:", {
  x: cameraObj.transform.x,
  y: cameraObj.transform.y,
  z: cameraObj.transform.z
});

// Log animated objects info
if (animatedObjects.length > 0) {
  console.log("🎭 Animation info:");
  animatedObjects.forEach(({ obj, speedX, speedY }, index) => {
    console.log(`  ${index}: ${obj.name} - Speed(${speedX.toFixed(3)}, ${speedY.toFixed(3)})`);
  });
}

// ===== Debug Control Panel =====
const lineWidthSlider = document.getElementById('lineWidth');
const spiralPointsSlider = document.getElementById('spiralPoints');
const rotationSpeedSlider = document.getElementById('rotationSpeed');

const lineWidthValue = document.getElementById('lineWidthValue');
const spiralPointsValue = document.getElementById('spiralPointsValue');
const rotationSpeedValue = document.getElementById('rotationSpeedValue');

// Line Width slider
lineWidthSlider.addEventListener('input', (e) => {
  const value = parseFloat(e.target.value);
  lineWidthValue.textContent = value.toFixed(1);
  if (spiralMaterial) {
    spiralMaterial.lineWidth = value;
  }
});

// Spiral Points slider - now controls Hilbert curve detail
spiralPointsSlider.addEventListener('change', (e) => {
  const lineWidth = parseFloat(lineWidthSlider.value);
  createHilbertCurve(lineWidth);
  console.log(`Hilbert curve regenerated`);
});

spiralPointsSlider.addEventListener('input', (e) => {
  spiralPointsValue.textContent = e.target.value;
});

// Rotation Speed slider
rotationSpeedSlider.addEventListener('input', (e) => {
  const value = parseFloat(e.target.value);
  rotationSpeedValue.textContent = value.toFixed(1) + 'x';
  baseRotationSpeed.speedX = 0.5 * value;
  baseRotationSpeed.speedY = 0.8 * value;
  // Update all animated objects
  animatedObjects.forEach(item => {
    if (item.obj === spiralObj) {
      item.speedX = baseRotationSpeed.speedX;
      item.speedY = baseRotationSpeed.speedY;
    }
  });
});

console.log('🎮 Debug controls initialized');
console.log('📈 Adjust "Line Width" and "Spiral Points" to test!');

