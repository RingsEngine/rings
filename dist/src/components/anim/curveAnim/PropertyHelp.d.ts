export declare class PropertyAnimTag {
    transform?: boolean;
    quaternion?: boolean;
    materialColor?: boolean;
}
export declare class PropertyHelp {
    static Property: any;
    static Scale: any;
    static updatePropertyTag(tag: PropertyAnimTag, attribute: string): void;
    private static tag_quaternion;
    private static tag_materialColor;
    private static tag_transform;
}
