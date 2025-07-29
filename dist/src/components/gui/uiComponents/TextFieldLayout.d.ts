import { GUIQuad } from "../core/GUIQuad";
import { UITextField } from "./UITextField";
export declare enum TextAnchor {
    UpperLeft = 0,
    UpperCenter = 1,
    UpperRight = 2,
    MiddleLeft = 3,
    MiddleCenter = 4,
    MiddleRight = 5,
    LowerLeft = 6,
    LowerCenter = 7,
    LowerRight = 8
}
export declare enum Vertical {
    Upper = 0,
    Middle = 1,
    Lower = 2
}
export declare enum Horizontal {
    Left = 0,
    Center = 1,
    Right = 2
}
export declare class TextFieldLine {
    charList: string[];
    quadList: GUIQuad[];
    width: number;
    index: number;
}
export declare class TextFieldLayout {
    layout(target: UITextField): TextFieldLine[];
    private makeTextLine;
    private getAlignment;
}
