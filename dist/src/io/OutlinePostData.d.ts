import { Color } from "../math/Color";
export declare class OutlinePostSlot {
    indexList: Float32Array;
    color: Color;
    count: number;
}
export declare class OutlinePostData {
    readonly SlotCount: number;
    readonly MaxEntities: number;
    readonly defaultColor: Color;
    private readonly slots;
    private dataDirty;
    constructor();
    clear(): void;
    clearAt(slotIndex: number): this;
    fillDataAt(slot: number, indexList: number[], color: Color): this;
    fetchData(target: {
        dirty: boolean;
        slots: OutlinePostSlot[];
    }): this;
}
export declare let outlinePostData: OutlinePostData;
