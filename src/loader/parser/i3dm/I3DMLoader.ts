import { I3DMLoaderBase } from "./I3DMLoaderBase";
import { InstancedMesh } from "../../../core/entities/InstancedMesh";
import { B3DMParseUtil } from "../B3DMParser";
import { Matrix4 } from "../../../math/Matrix4";
import { MeshRenderer } from "../../../components/renderer/MeshRenderer";
import { Object3D } from "../../../core/entities/Object3D";
import { Quaternion } from "../../../math/Quaternion";
import { Vector3 } from "../../../math/Vector3";

export class I3DMLoader extends I3DMLoaderBase {
  public static tempFwd: Vector3;
  public static tempUp: Vector3;
  public static tempRight: Vector3;
  public static tempPos: Vector3;
  public static tempQuat: Quaternion;
  public static tempSca: Vector3;
  public static tempMat: Matrix4;
  public adjustmentTransform: Matrix4;
  private _gltfBuffer: ArrayBufferLike;

  constructor() {
    super();

    I3DMLoader.tempFwd ||= new Vector3();
    I3DMLoader.tempUp ||= new Vector3();
    I3DMLoader.tempRight ||= new Vector3();
    I3DMLoader.tempPos ||= new Vector3();
    I3DMLoader.tempQuat ||= new Quaternion();
    I3DMLoader.tempSca ||= new Vector3();
    I3DMLoader.tempMat ||= new Matrix4();

    this.adjustmentTransform = new Matrix4().identity();
  }

  public async parse(buffer: ArrayBuffer) {
    const i3dm = await super.parse(buffer);
    this._gltfBuffer = i3dm.glbBytes.slice().buffer;
    let glbLoader = new B3DMParseUtil();

    let model = await glbLoader.parseBinary(this._gltfBuffer);
    let { batchTable, featureTable } = i3dm;

    const adjustmentTransform = this.adjustmentTransform;

    const INSTANCES_LENGTH = featureTable.getData("INSTANCES_LENGTH");
    const POSITION = featureTable.getData(
      "POSITION",
      INSTANCES_LENGTH,
      "FLOAT",
      "VEC3"
    );
    const NORMAL_UP = featureTable.getData(
      "NORMAL_UP",
      INSTANCES_LENGTH,
      "FLOAT",
      "VEC3"
    );
    const NORMAL_RIGHT = featureTable.getData(
      "NORMAL_RIGHT",
      INSTANCES_LENGTH,
      "FLOAT",
      "VEC3"
    );
    const SCALE_NON_UNIFORM = featureTable.getData(
      "SCALE_NON_UNIFORM",
      INSTANCES_LENGTH,
      "FLOAT",
      "VEC3"
    );
    const SCALE = featureTable.getData(
      "SCALE",
      INSTANCES_LENGTH,
      "FLOAT",
      "SCALAR"
    );
    const instanceMap = new Map();
    const instances: InstancedMesh[] = [];

    model.traverse((child: Object3D) => {
      let renderer: MeshRenderer;
      renderer = child ? child.getComponent(MeshRenderer) : null;
      if (renderer) {
        const { geometry, material } = renderer;
        const instancedMesh = new InstancedMesh(
          geometry,
          material,
          INSTANCES_LENGTH
        );

        instancedMesh.localPosition = instancedMesh.localPosition.copy(
          child.localPosition
        );
        instancedMesh.localRotation = instancedMesh.localRotation.copy(
          child.localRotation
        );
        instancedMesh.localScale = instancedMesh.localScale.copy(
          child.localScale
        );

        instances.push(instancedMesh);
        instanceMap.set(child, instancedMesh);
      }
    });

    const averageVector = new Vector3();
    for (let i = 0; i < INSTANCES_LENGTH; i++) {
      averageVector.x += POSITION[i * 3 + 0] / INSTANCES_LENGTH;
      averageVector.y += POSITION[i * 3 + 1] / INSTANCES_LENGTH;
      averageVector.z += POSITION[i * 3 + 2] / INSTANCES_LENGTH;
    }

    instanceMap.forEach((instancedMesh: InstancedMesh, oldObject: Object3D) => {
      const parent = oldObject.parent ? oldObject.parentObject : null;
      if (parent) {
        parent.removeChild(oldObject);
        parent.addChild(instancedMesh);
        instancedMesh.transform.updateWorldMatrix();
        instancedMesh.transform.worldMatrix.transformVector4(
          averageVector,
          instancedMesh.localPosition
        );
      }
    });

    const temp = I3DMLoader;
    for (let i = 0; i < INSTANCES_LENGTH; i++) {
      temp.tempMat.identity();
      temp.tempPos.set(
        POSITION[i * 3 + 0] - averageVector.x,
        POSITION[i * 3 + 1] - averageVector.y,
        POSITION[i * 3 + 2] - averageVector.z
      );

      if (NORMAL_UP) {
        temp.tempUp.set(
          NORMAL_UP[i * 3 + 0],
          NORMAL_UP[i * 3 + 1],
          NORMAL_UP[i * 3 + 2]
        );
        temp.tempRight.set(
          NORMAL_RIGHT[i * 3 + 0],
          NORMAL_RIGHT[i * 3 + 1],
          NORMAL_RIGHT[i * 3 + 2]
        );
        temp.tempRight.crossProduct(temp.tempUp, temp.tempFwd).normalize();
        temp.tempMat.makeBasis(temp.tempRight, temp.tempUp, temp.tempFwd);
        temp.tempQuat.setFromRotationMatrix(temp.tempMat);
      } else {
        temp.tempQuat.set(0, 0, 0, 1);
      }

      if (SCALE) {
        temp.tempSca.setScalar(SCALE[i]);
      } else if (SCALE_NON_UNIFORM) {
        temp.tempSca.set(
          SCALE_NON_UNIFORM[i * 3 + 0],
          SCALE_NON_UNIFORM[i * 3 + 1],
          SCALE_NON_UNIFORM[i * 3 + 2]
        );
      } else {
        temp.tempSca.set(1, 1, 1);
      }
      temp.tempMat.compose(temp.tempPos, temp.tempQuat, temp.tempSca);
      temp.tempMat.multiplyMatrices(temp.tempMat, adjustmentTransform);

      for (let j = 0, l = instances.length; j < l; j++) {
        const instance = instances[j];
        instance.setMatrixAt(i, temp.tempMat);
      }
    }

    model["batchTable"] = batchTable;
    model["featureTable"] = featureTable;

    return model as any;
  }
}
