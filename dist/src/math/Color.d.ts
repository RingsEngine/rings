export declare class Color {
    /**
     * red color
     */
    static COLOR_RED: Color;
    /**
     * green color
     */
    static COLOR_GREEN: Color;
    /**
     * blue color
     */
    static COLOR_BLUE: Color;
    /**
     * white color
     */
    static COLOR_WHITE: Color;
    /**
     * cache
     * @internal
     */
    static COLOR_0: Color;
    /**
     * cache
     * @internal
     */
    static COLOR_1: Color;
    /**
     * cache
     * @internal
     */
    static COLOR_2: Color;
    /**
     * @internal
     */
    private static HEX_CHARACTERS;
    /**
     * @internal
     */
    private static MATCH_3OR4_HEX;
    /**
     * @internal
     */
    private static MATCH_6OR8_HEX;
    /**
     * @internal
     */
    private static NON_HEX_CHARS;
    /**
     * @internal
     */
    private static VALID_HEX_SIZE;
    /**
     * red channel
     */
    r: number;
    /**
     * green channel
     */
    g: number;
    /**
     * blue channel
     */
    b: number;
    /**
     * alpha channel
     */
    a: number;
    constructor(r?: number, g?: number, b?: number, a?: number);
    convertToHDRRGB(): Color;
    unSerialized(data: any): this;
    hexToRGB(value: number): Color;
    hexToRGBA(value: number): Color;
    static random(base?: number): Color;
    static randomRGB(seedR?: number, seedG?: number, seedB?: number, baseR?: number, baseG?: number, baseB?: number): Color;
    static randomGray(base?: number, random?: number): Color;
    setTo(r: number, g: number, b: number, a: number): void;
    setHex(hex: string): void;
    getHex(): string;
    /**
     * get rgb to array
     */
    get rgb(): number[];
    /**
     * set rgb by array
     */
    set rgb(c: number[]);
    /**
     * get rgba to array
     */
    get rgba(): number[];
    /**
     * set rgb by array
     */
    set rgba(c: number[]);
    clone(): Color;
    copyFrom(src: Color): this;
    copyFromArray(arr: number[], scalar?: number): this;
    copyFromVector(value: {
        x: number;
        y: number;
        z: number;
        w?: number;
    }): this;
    static hexRGBColor(hexColor: number, dst?: Color): Color;
    static lerp(v: number, c1: Color, c2: Color, target?: Color): Color;
    static PRIMARY: number;
    static PRIMARYDARK: number;
    static ACCENT: number;
    static WHITE: number;
    static IVORY: number;
    static LIGHTYELLOW: number;
    static YELLOW: number;
    static SNOW: number;
    static FLORALWHITE: number;
    static LEMONCHIFFON: number;
    static CORNSILK: number;
    static SEASHELL: number;
    static LAVENDERBLUSH: number;
    static PAPAYAWHIP: number;
    static BLANCHEDALMOND: number;
    static MISTYROSE: number;
    static BISQUE: number;
    static MOCCASIN: number;
    static NAVAJOWHITE: number;
    static PEACHPUFF: number;
    static GOLD: number;
    static PINK: number;
    static LIGHTPINK: number;
    static ORANGE: number;
    static LIGHTSALMON: number;
    static DARKORANGE: number;
    static CORAL: number;
    static HOTPINK: number;
    static TOMATO: number;
    static ORANGERED: number;
    static DEEPPINK: number;
    static FUCHSIA: number;
    static MAGENTA: number;
    static RED: number;
    static OLDLACE: number;
    static LIGHTGOLDENRODYELLOW: number;
    static LINEN: number;
    static ANTIQUEWHITE: number;
    static SALMON: number;
    static GHOSTWHITE: number;
    static MINTCREAM: number;
    static WHITESMOKE: number;
    static BEIGE: number;
    static WHEAT: number;
    static SANDYBROWN: number;
    static AZURE: number;
    static HONEYDEW: number;
    static ALICEBLUE: number;
    static KHAKI: number;
    static LIGHTCORAL: number;
    static PALEGOLDENROD: number;
    static VIOLET: number;
    static DARKSALMON: number;
    static LAVENDER: number;
    static LIGHTCYAN: number;
    static BURLYWOOD: number;
    static PLUM: number;
    static GAINSBORO: number;
    static CRIMSON: number;
    static PALEVIOLETRED: number;
    static GOLDENROD: number;
    static ORCHID: number;
    static THISTLE: number;
    static LIGHTGREY: number;
    static TAN: number;
    static CHOCOLATE: number;
    static PERU: number;
    static INDIANRED: number;
    static MEDIUMVIOLETRED: number;
    static SILVER: number;
    static DARKKHAKI: number;
    static ROSYBROWN: number;
    static MEDIUMORCHID: number;
    static DARKGOLDENROD: number;
    static FIREBRICK: number;
    static POWDERBLUE: number;
    static LIGHTSTEELBLUE: number;
    static PALETURQUOISE: number;
    static GREENYELLOW: number;
    static LIGHTBLUE: number;
    static DARKGRAY: number;
    static BROWN: number;
    static SIENNA: number;
    static DARKORCHID: number;
    static PALEGREEN: number;
    static DARKVIOLET: number;
    static MEDIUMPURPLE: number;
    static LIGHTGREEN: number;
    static DARKSEAGREEN: number;
    static SADDLEBROWN: number;
    static DARKMAGENTA: number;
    static DARKRED: number;
    static BLUEVIOLET: number;
    static LIGHTSKYBLUE: number;
    static SKYBLUE: number;
    static GRAY: number;
    static OLIVE: number;
    static PURPLE: number;
    static MAROON: number;
    static AQUAMARINE: number;
    static CHARTREUSE: number;
    static LAWNGREEN: number;
    static MEDIUMSLATEBLUE: number;
    static LIGHTSLATEGRAY: number;
    static SLATEGRAY: number;
    static OLIVEDRAB: number;
    static SLATEBLUE: number;
    static DIMGRAY: number;
    static MEDIUMAQUAMARINE: number;
    static CORNFLOWERBLUE: number;
    static CADETBLUE: number;
    static DARKOLIVEGREEN: number;
    static INDIGO: number;
    static MEDIUMTURQUOISE: number;
    static DARKSLATEBLUE: number;
    static STEELBLUE: number;
    static ROYALBLUE: number;
    static TURQUOISE: number;
    static MEDIUMSEAGREEN: number;
    static LIMEGREEN: number;
    static DARKSLATEGRAY: number;
    static SEAGREEN: number;
    static FORESTGREEN: number;
    static LIGHTSEAGREEN: number;
    static DODGERBLUE: number;
    static MIDNIGHTBLUE: number;
    static AQUA: number;
    static CYAN: number;
    static SPRINGGREEN: number;
    static LIME: number;
    static MEDIUMSPRINGGREEN: number;
    static DARKTURQUOISE: number;
    static DEEPSKYBLUE: number;
    static DARKCYAN: number;
    static TEAL: number;
    static GREEN: number;
    static DARKGREEN: number;
    static BLUE: number;
    static MEDIUMBLUE: number;
    static DARKBLUE: number;
    static NAVY: number;
    static BLACK: number;
}
