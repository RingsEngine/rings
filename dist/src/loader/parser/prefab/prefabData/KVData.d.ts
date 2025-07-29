import { BytesArray } from "../../../../util/BytesArray";
import { ValueEnumType } from "./ValueType";
export declare class KV {
    key: string;
    type: ValueEnumType;
    private _data;
    getValue<T>(): T;
    formBytes(matBytes: BytesArray): void;
}
