import { GPUBufferType } from "./GPUBufferType";
import { UniformNode } from "../uniforms/UniformNode";
import { GPUBufferBase } from "./GPUBufferBase";

export class MaterialDataUniformGPUBuffer extends GPUBufferBase {
  public uniformNodes: UniformNode[] = [];
  private _onChange: boolean = true;

  constructor() {
    super();
    this.bufferType = GPUBufferType.MaterialDataUniformGPUBuffer;
  }

  initDataUniform(uniformNodes: UniformNode[]) {
    this.uniformNodes = uniformNodes;
    let len = 0;
    for (const key in uniformNodes) {
      const node = uniformNodes[key];
      if (!node) {
        console.error(key, "is empty");
      }
      len += node.size * 4;
    }
    len = Math.floor(len / 256 + 1) * 256;

    this.createBuffer(
      GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
      len / 4,
      null,
      "MaterialDataUniformGPUBuffer"
    );
    for (const key in uniformNodes) {
      const node = uniformNodes[key];
      if (!node) console.error(key, "is empty");

      let memoryInfo = this.memory.allocation_node(node.size * 4);
      node.memoryInfo = memoryInfo;
      node.bindOnChange = () => this.onChange();
    }
  }

  public onChange() {
    this._onChange = true;
  }

  public apply() {
    if (this.uniformNodes.length == 0) return;
    if (!this._onChange) return;

    for (const key in this.uniformNodes) {
      const node = this.uniformNodes[key];
      node.update();
    }

    super.apply();
    this._onChange = false;
  }
}
