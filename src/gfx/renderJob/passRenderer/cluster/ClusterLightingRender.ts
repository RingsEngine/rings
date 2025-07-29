import { View3D } from "../../../../core/View3D";
import { GlobalBindGroup } from "../../../graphics/webGpu/core/bindGroups/GlobalBindGroup";
import { ComputeShader } from "../../../graphics/webGpu/shader/ComputeShader";
import { webGPUContext } from "../../../graphics/webGpu/Context3D";
import { EntityCollect } from "../../collect/EntityCollect";
import { GPUContext } from "../../GPUContext";
import { OcclusionSystem } from "../../occlusion/OcclusionSystem";
import { RendererBase } from "../RendererBase";
import { PassType } from "../state/PassType";
import { ILight } from "../../../../components/lights/ILight";
import { ClusterLightingBuffer } from "./ClusterLightingBuffer";
import { ClusterBoundsSource_cs } from "../../../../assets/shader/cluster/ClusterBoundsSource_cs";
import { ClusterLighting_cs } from "../../../../assets/shader/cluster/ClusterLighting_cs";
import { Camera3D, ClusterConfig } from "../../../..";

/**
 * 集群光照
 */
export class ClusterLightingRender extends RendererBase {
  public maxNumLightsPerCluster = 64;
  public clusterPix = 1;
  public clusterLightingBuffer: ClusterLightingBuffer;
  private _currentLightCount = 0;
  private _clusterGenerateCompute: ComputeShader;
  private _clusterLightingCompute: ComputeShader;
  private _useCamera: Camera3D;
  private resize: boolean = false;
  constructor(view: View3D) {
    super();
    this.passType = PassType.Cluster;
    this.initCompute(view);
  }

  private initCompute(view: View3D) {
    this._clusterGenerateCompute = new ComputeShader(ClusterBoundsSource_cs);
    this._clusterLightingCompute = new ComputeShader(ClusterLighting_cs);

    let size = webGPUContext.presentationSize;
    let numClusters =
      ClusterConfig.clusterTileX *
      ClusterConfig.clusterTileY *
      ClusterConfig.clusterTileZ;

    let camera = view.camera;
    let near = camera.near;
    let far = camera.far;

    this.clusterLightingBuffer = new ClusterLightingBuffer(
      numClusters,
      this.maxNumLightsPerCluster
    );
    this.clusterLightingBuffer.update(
      size[0],
      size[1],
      this.clusterPix,
      ClusterConfig.clusterTileX,
      ClusterConfig.clusterTileY,
      ClusterConfig.clusterTileZ,
      0,
      this.maxNumLightsPerCluster,
      near,
      far
    );
    this._clusterGenerateCompute.setUniformBuffer(
      `clustersUniform`,
      this.clusterLightingBuffer.clustersUniformBuffer
    );
    this._clusterGenerateCompute.setStorageBuffer(
      `clusterBuffer`,
      this.clusterLightingBuffer.clusterBuffer
    );
    let lightBuffer = GlobalBindGroup.getLightEntries(view.scene);
    this._clusterLightingCompute.setStorageBuffer(
      `models`,
      GlobalBindGroup.modelMatrixBindGroup.matrixBufferDst
    );
    this._clusterLightingCompute.setUniformBuffer(
      `clustersUniform`,
      this.clusterLightingBuffer.clustersUniformBuffer
    );
    this._clusterLightingCompute.setStorageBuffer(
      `clusterBuffer`,
      this.clusterLightingBuffer.clusterBuffer
    );
    this._clusterLightingCompute.setStorageBuffer(
      `lightBuffer`,
      lightBuffer.storageGPUBuffer
    );
    this._clusterLightingCompute.setStorageBuffer(
      `lightAssignBuffer`,
      this.clusterLightingBuffer.lightAssignBuffer
    );
    this._clusterLightingCompute.setStorageBuffer(
      `assignTable`,
      this.clusterLightingBuffer.assignTableBuffer
    );
    this.resize = true;
  }

  render(view: View3D, occlusionSystem: OcclusionSystem) {
    let scene = view.scene;
    let lights: ILight[] = EntityCollect.instance.getLights(scene);

    if (this._useCamera != view.camera) {
      this._useCamera = view.camera;
      let standBindGroup = GlobalBindGroup.getCameraGroup(this._useCamera);
      this._clusterGenerateCompute.setUniformBuffer(
        `globalUniform`,
        standBindGroup.uniformGPUBuffer
      );
      this._clusterLightingCompute.setUniformBuffer(
        `globalUniform`,
        standBindGroup.uniformGPUBuffer
      );
    }

    if (this._currentLightCount != lights.length) {
      this._currentLightCount = lights.length;

      this.clusterLightingBuffer.clustersUniformBuffer.setFloat(
        "numLights",
        lights.length
      );
      this.clusterLightingBuffer.clustersUniformBuffer.apply();

      this._clusterGenerateCompute.workerSizeX = ClusterConfig.clusterTileZ;
      this._clusterLightingCompute.workerSizeX = ClusterConfig.clusterTileZ;
    }

    let size = webGPUContext.presentationSize;
    this.clusterLightingBuffer.update(
      size[0],
      size[1],
      this.clusterPix,
      ClusterConfig.clusterTileX,
      ClusterConfig.clusterTileY,
      ClusterConfig.clusterTileZ,
      lights.length,
      this.maxNumLightsPerCluster,
      view.camera.near,
      view.camera.far
    );

    this.resize = false;
    let command = GPUContext.beginCommandEncoder();
    GPUContext.computeCommand(command, [
      this._clusterGenerateCompute,
      this._clusterLightingCompute,
    ]);
    GPUContext.endCommandEncoder(command);
  }
}
