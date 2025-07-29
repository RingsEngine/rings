import { View3D } from "../../../../../../core/View3D";
import { RenderTexture } from "../../../../../../textures/RenderTexture";
import { EntityCollect } from "../../../../../renderJob/collect/EntityCollect";
import { StorageGPUBuffer } from "../../buffer/StorageGPUBuffer";
import { Texture } from "../../texture/Texture";

export class ReflectionEntries {
  public storageGPUBuffer: StorageGPUBuffer;
  public reflectionMap: Texture;
  public sourceReflectionMap: RenderTexture;
  count: number;

  constructor() {
    this.storageGPUBuffer = new StorageGPUBuffer((3 + 3) * 128);
  }

  public update(view: View3D) {
    this.storageGPUBuffer.clean();
    let reflections = EntityCollect.instance.getReflections(view.scene);
    for (let i = 0; i < reflections.length; i++) {
      const reflection = reflections[i];
      reflection.gid = i;
      this.storageGPUBuffer.setFloat("gid", reflection.gid);
      this.storageGPUBuffer.setVector3(
        "worldPosition",
        reflection.transform.worldPosition
      );
      this.storageGPUBuffer.setFloat("radius", reflection.radius);
      this.storageGPUBuffer.setVector3(
        "bound",
        reflection.transform.worldPosition
      );
    }
    this.count = reflections.length;
    this.storageGPUBuffer.apply();
  }
}
