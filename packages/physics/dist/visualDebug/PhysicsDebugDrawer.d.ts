import { Object3D } from "@rings-webgpu/core";
import { Ammo } from "../Physics";
import { DebugDrawMode, DebugDrawerOptions } from "./DebugDrawModeEnum";
export declare class PhysicsDebugDrawer {
    private debugDrawer;
    private _enable;
    private frameCount;
    /**
     * A graphic object used to draw lines
     *
     * Type: `Graphic3D`
     */
    private graphic3D;
    private lineCount;
    private lineNameList;
    private readonly _tmpCor;
    private readonly _tmpVecA;
    private readonly _tmpVecB;
    world: Ammo.btDiscreteDynamicsWorld | Ammo.btSoftRigidDynamicsWorld;
    debugMode: number;
    updateFreq: number;
    maxLineCount: number;
    readonly debugModeList: {
        NoDebug: DebugDrawMode;
        DrawWireframe: DebugDrawMode;
        DrawAabb: DebugDrawMode;
        DrawFeaturesText: DebugDrawMode;
        DrawContactPoints: DebugDrawMode;
        NoDeactivation: DebugDrawMode;
        NoHelpText: DebugDrawMode;
        DrawText: DebugDrawMode;
        ProfileTimings: DebugDrawMode;
        EnableSatComparison: DebugDrawMode;
        DisableBulletLCP: DebugDrawMode;
        EnableCCD: DebugDrawMode;
        DrawConstraints: DebugDrawMode;
        DrawConstraintLimits: DebugDrawMode;
        FastWireframe: DebugDrawMode;
        DrawAabbDynamic: DebugDrawMode;
        DrawSoftBodies: DebugDrawMode;
    };
    constructor(world: Ammo.btDiscreteDynamicsWorld | Ammo.btSoftRigidDynamicsWorld, graphic3D: Object3D, options?: DebugDrawerOptions);
    /**
     * 启用/禁用物理调试绘制
     */
    set enable(value: boolean);
    get enable(): boolean;
    setDebugMode(debugMode: DebugDrawMode): void;
    getDebugMode(): DebugDrawMode;
    update(): void;
    private drawLine;
    private drawContactPoint;
    private reportErrorWarning;
    private draw3dText;
    private clearLines;
}
