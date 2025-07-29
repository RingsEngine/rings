import { Camera3D } from "../core/Camera3D";
import { Object3D } from "../core/entities/Object3D";
import { webGPUContext } from "../gfx/graphics/webGpu/Context3D";
import { Matrix4 } from "../math/Matrix4";
import { Vector3 } from "../math/Vector3";

export class CameraUtil {
  public static createCamera3DObject(
    parent?: Object3D,
    name?: string
  ): Camera3D {
    return this.createCamera3D(null, parent, name);
  }

  public static createCamera3D(
    object3D?: Object3D,
    parent?: Object3D,
    name?: string
  ): Camera3D {
    object3D ||= new Object3D();
    parent && parent.addChild(object3D);
    name && (object3D.name = name);
    return object3D.getOrAddComponent(Camera3D);
  }

  public static UnProjection(
    sX: number,
    sY: number,
    sZ: number = 1,
    camera?: Camera3D
  ) {
    let mouse = new Vector3(sX, sY, 0);
    let sc = 1;
    let ina: Vector3 = Vector3.HELP_0;

    let ox = webGPUContext.canvas.offsetLeft;
    let oy = webGPUContext.canvas.offsetTop;
    let w = webGPUContext.canvas.clientWidth;
    let h = webGPUContext.canvas.clientHeight;
    ina.x = (((mouse.x - ox) * sc) / w - 0.5) * 2;
    ina.y = -(((mouse.y - oy) * sc) / h - 0.5) * 2;
    ina.z = sZ;

    let outP = new Vector3(0, 0, 0);
    let projectWorld = Matrix4.helpMatrix2;
    projectWorld.copyFrom(camera.projectionMatrix);
    projectWorld.invert();
    let cameraToWorld = Matrix4.helpMatrix;
    cameraToWorld.identity();
    cameraToWorld.multiply(projectWorld);
    cameraToWorld.multiply(camera.transform.worldMatrix);
    cameraToWorld.perspectiveMultiplyPoint3(ina, outP);
    return outP;
  }

  public static Projection(point: Vector3, camera: Camera3D, target?: Vector3) {
    let outP = target ? target : new Vector3(0, 0, 0);
    let cameraToWorld = Matrix4.helpMatrix;
    cameraToWorld.copyFrom(camera.viewMatrix);
    cameraToWorld.multiply(camera.projectionMatrix);
    cameraToWorld.perspectiveMultiplyPoint3(point, outP);
    let w = webGPUContext.canvas.clientWidth / 2;
    let h = webGPUContext.canvas.clientHeight / 2;
    outP.x = outP.x * w + w;
    outP.y = h - outP.y * h;
    return outP;
  }

  public static UnProjection2(
    sceneX: number,
    sceneY: number,
    z: number,
    camera: Camera3D,
    target: Vector3
  ) {
    let outP = target ? target : new Vector3(0, 0, 0);
    let cameraToWorld = Matrix4.helpMatrix;
    cameraToWorld.copyFrom(camera.pvMatrixInv);
    let w = webGPUContext.canvas.clientWidth / 2;
    let h = webGPUContext.canvas.clientHeight / 2;
    outP.x = (sceneX - w) / w;
    outP.y = (h - sceneY) / h;
    outP.z = z;

    cameraToWorld.perspectiveMultiplyPoint3(outP, outP);

    return outP;
  }
}
