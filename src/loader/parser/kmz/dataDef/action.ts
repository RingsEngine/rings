interface ActionBaseType {
  /**
   * Action ID
   * - [0, 65535]
   * - Note: This ID must be unique within an action group. It is recommended to start from 0 and increment monotonically.
   */
  actionId: string
}

/**
 * Action - Take Photo
 * @memberof wpml:action
 */
export interface TakePhoto extends ActionBaseType {
  actionActuatorFunc: 'takePhoto'
  actionActuatorFuncParam: {
    /**
     * Payload mounting position, default main gimbal
     */
    payloadPositionIndex: '0'
    /**
     * Photo file suffix. This suffix will be added when naming generated media files.
     */
    fileSuffix: string
    /**
     * Photo storage type
     * - `zoom`: Store zoom lens photos
     * - `wide`: Store wide-angle lens photos
     * - `ir`: Store infrared lens photos
     * - `narrow_band`: Store narrow-band lens photos
     * - `visable`: Visible light photos
     * - Note: To store multiple lens photos, format like `<wpml:payloadLensIndex>wide,ir,narrow_band</wpml:payloadLensIndex>` means using wide-angle, infrared and narrow-band lenses simultaneously
     */
    payloadLensIndex: string
    /**
     * Whether to use global storage type
     * - `0`: Do not use global settings
     * - `1`: Use global settings
     */
    useGlobalPayloadLensIndex: '0' | '1'
  }
}

/**
 * Action - Start Recording
 * @memberof wpml:action
 */
export interface StartRecord extends ActionBaseType {
  actionActuatorFunc: 'startRecord'
  actionActuatorFuncParam: {
    /**
     * Payload mounting position, default main gimbal
     */
    payloadPositionIndex: '0'
    /**
     * Photo file suffix. This suffix will be added when naming generated media files.
     */
    fileSuffix: string
    /**
     * Photo storage type
     * - `zoom`: Store zoom lens photos
     * - `wide`: Store wide-angle lens photos
     * - `ir`: Store infrared lens photos
     * - `narrow_band`: Store narrow-band lens photos
     * - `visable`: Visible light photos
     * - Note: To store multiple lens photos, format like `<wpml:payloadLensIndex>wide,ir,narrow_band</wpml:payloadLensIndex>` means using wide-angle, infrared and narrow-band lenses simultaneously
     */
    payloadLensIndex: string
    /**
     * Whether to use global storage type
     * - `0`: Do not use global settings
     * - `1`: Use global settings
     */
    useGlobalPayloadLensIndex: '0' | '1'
  }
}

/**
 * Action - Stop Recording
 * @memberof wpml:action
 */
export interface StopRecord extends ActionBaseType {
  actionActuatorFunc: 'stopRecord'
  actionActuatorFuncParam: {
    /**
     * Payload mounting position, default main gimbal
     */
    payloadPositionIndex: '0'
    /**
     * Photo storage type
     * - `zoom`: Store zoom lens photos
     * - `wide`: Store wide-angle lens photos
     * - `ir`: Store infrared lens photos
     * - `narrow_band`: Store narrow-band lens photos
     * - `visable`: Visible light photos
     * - Note: To store multiple lens photos, format like `<wpml:payloadLensIndex>wide,ir,narrow_band</wpml:payloadLensIndex>` means using wide-angle, infrared and narrow-band lenses simultaneously
     */
    payloadLensIndex: string
  }
}

/**
 * Action - Focus
 * @memberof wpml:action
 */
export interface Focus extends ActionBaseType {
  actionActuatorFunc: 'focus'
  actionActuatorFuncParam: {
    /**
     * Payload mounting position, default main gimbal
     */
    payloadPositionIndex: '0'
    /**
     * Whether to use point focus
     * - `0`: Area focus
     * - `1`: Point focus
     */
    isPointFocus: '0' | '1'
    /**
     * Focus point position
     * - [0, 1]
     * - Note: X-axis (width) coordinate of focus point or focus area top-left corner in the frame. 0 is leftmost, 1 is rightmost.
     */
    focusX: string
    /**
     * Focus point position
     * - [0, 1]
     * - Note: Y-axis (height) coordinate of focus point or focus area top-left corner in the frame. 0 is topmost, 1 is bottommost.
     */
    focusY: string
    /**
     * Focus area width ratio
     * - [0, 1]
     * - Note: Ratio of focus area size to entire frame, this is width ratio
     * - Note: Required only when `isPointFocus` is `0` (i.e., area focus).
     */
    focusRegionWidth: string
    /**
     * Focus area height ratio
     * - [0, 1]
     * - Note: Ratio of focus area size to entire frame, this is height ratio
     * - Note: Required only when `isPointFocus` is `0` (i.e., area focus).
     */
    focusRegionHeight: string
  }
}

/**
 * Action - Zoom
 * @memberof wpml:action
 */
export interface Zoom extends ActionBaseType {
  actionActuatorFunc: 'zoom'
  actionActuatorFuncParam: {
    /**
     * Payload mounting position, default main gimbal
     */
    payloadPositionIndex: '0'
    /**
     * Zoom focal length
     * - mm
     * - Greater than 0
     */
    focalLength: string
  }
}

/**
 * Action - Create New Folder
 * @memberof wpml:action
 */
export interface CustomDirName extends ActionBaseType {
  actionActuatorFunc: 'customDirName'
  actionActuatorFuncParam: {
    /**
     * Payload mounting position, default main gimbal
     */
    payloadPositionIndex: '0'
    /**
     * New folder name
     */
    directoryName: string
  }
}

/**
 * Action - Rotate Gimbal
 * @memberof wpml:action
 */
export interface GimbalRotate extends ActionBaseType {
  actionActuatorFunc: 'gimbalRotate'
  actionActuatorFuncParam: {
    /**
     * Payload mounting position, default main gimbal
     */
    payloadPositionIndex: '0'
    /**
     * Gimbal yaw angle rotation coordinate system
     * - `north`: Relative to geographic north
     */
    gimbalHeadingYawBase: 'north'
    /**
     * Gimbal rotation mode
     * - `absoluteAngle`: Absolute angle, relative to true north
     */
    gimbalRotateMode: 'absoluteAngle'
    /**
     * Whether to enable gimbal Pitch rotation
     * - `0`: Disabled
     * - `1`: Enabled
     */
    gimbalPitchRotateEnable: '0' | '1'
    /**
     * Gimbal Pitch rotation angle
     * - Note: Different gimbals have different rotation ranges
     */
    gimbalPitchRotateAngle: string
    /**
     * Whether to enable gimbal Roll rotation
     * - `0`: Disabled
     * - `1`: Enabled
     */
    gimbalRollRotateEnable: '0' | '1'
    /**
     * Gimbal Roll rotation angle
     * - Note: Different gimbals have different rotation ranges
     */
    gimbalRollRotateAngle: string
    /**
     * Whether to enable gimbal Yaw rotation
     * - `0`: Disabled
     * - `1`: Enabled
     */
    gimbalYawRotateEnable: '0' | '1'
    /**
     * Gimbal Yaw rotation angle
     * - Note: Different gimbals have different rotation ranges
     */
    gimbalYawRotateAngle: string
    /**
     * Whether to enable gimbal rotation time
     * - `0`: Disabled
     * - `1`: Enabled
     */
    gimbalRotateTimeEnable: '0' | '1'
    /**
     * Time for gimbal to complete rotation
     * - s
     */
    gimbalRotateTime: string
  }
}

/**
 * Action - Aircraft Yaw
 * @memberof wpml:action
 */
export interface RotateYaw extends ActionBaseType {
  actionActuatorFunc: 'rotateYaw'
  actionActuatorFuncParam: {
    /**
     * Aircraft target yaw angle (relative to geographic north)
     * - °
     * - [-180, 180]
     * - Note: Aircraft rotates to this target yaw angle. 0° is true north, 90° is true east, -90° is true west, -180°/180° is true south.
     */
    aircraftHeading: string
    /**
     * Aircraft yaw angle rotation mode
     * - `clockwise`: Clockwise rotation
     * - `counterClockwise`: Counter-clockwise rotation
     */
    aircraftPathMode: 'clockwise' | 'counterClockwise'
  }
}

/**
 * Action - Hover
 * @memberof wpml:action
 */
export interface Hover extends ActionBaseType {
  actionActuatorFunc: 'hover'
  actionActuatorFuncParam: {
    /**
     * Aircraft hover wait time
     * - s
     * - Greater than 0
     */
    hoverTime: string
  }
}

/**
 * Action - Evenly Rotate Gimbal Pitch Angle Between Segments
 * @memberof wpml:action
 * - Note: `gimbalEvenlyRotate` action evenly rotates gimbal pitch angle between segments, its trigger type must be `betweenAdjacentPoints`.
 */
export interface GimbalEvenlyRotate extends ActionBaseType {
  actionActuatorFunc: 'gimbalEvenlyRotate'
  actionActuatorFuncParam: {
    /**
     * Payload mounting position, default main gimbal
     */
    payloadPositionIndex: '0'
    /**
     * Gimbal Pitch rotation angle
     * - Note: Different gimbals have different rotation ranges
     */
    gimbalPitchRotateAngle: string
  }
}

/**
 * Action - Oriented Shoot/Precise Re-shoot
 * @memberof wpml:action
 */
export interface OrientedShoot extends ActionBaseType {
  actionActuatorFunc: 'orientedShoot'
  actionActuatorFuncParam: {
    /**
     * Payload mounting position, default main gimbal
     */
    payloadPositionIndex: '0'
    /**
     * Gimbal Pitch rotation angle
     * - °
     * - M30/M30T: [-120, 45]
     * - M3E/M3T: [-90, 35]
     * - M3D/M3TD: [-90, 30]
     */
    gimbalPitchRotateAngle: string
    /**
     * Gimbal Yaw rotation angle
     * - °
     * - [-180, 180]
     * - Note: For M3E/M3T, M3D/M3TD models, `wpml:gimbalYawRotateAngle` must be consistent with `wpml:aircraftHeading`
     */
    gimbalYawRotateAngle: string
    /**
     * Target selection box center horizontal coordinate
     * - px
     * - [0, 960]
     * - Note: Photo top-left corner is coordinate origin, horizontal direction is X-axis, vertical direction is Y-axis
     */
    focusX: '0'
    /**
     * Target selection box center vertical coordinate
     * - px
     * - [0, 720]
     */
    focusY: '0'
    /**
     * Target selection box width
     * - px
     * - [0, 960]
     */
    focusRegionWidth: '0'
    /**
     * Target selection box height
     * - px
     * - [0, 720]
     */
    focusRegionHeight: '0'
    /**
     * Zoom focal length
     * - mm
     * - Greater than 0
     */
    focalLength: string
    /**
     * Aircraft target yaw angle (relative to geographic north)
     * - [-180, 180]
     * - Note: Aircraft rotates to this target yaw angle. 0° is true north, 90° is true east, -90° is true west, -180°/180° is true south.
     */
    aircraftHeading: string
    /**
     * Whether to frame precise re-shoot target
     * - `1`: Target object has been framed
     * - `0`: Target object has not been framed
     * - Note: When set to 1, aircraft will autonomously search for target during re-shoot. When set to 0, aircraft will only repeat actions according to aircraft attitude and payload attitude during re-shoot, without autonomous target search.
     */
    accurateFrameValid: '0' | '1'
    /**
     * Target frame angle
     * - [0, 360]
     * - Note: Rotation angle of target frame (clockwise rotation with Y-axis as reference)
     */
    targetAngle: string
    /**
     * Action unique identifier
     * - Note: When taking photos, this value will be written into photo files to associate actions with photo files.
     */
    actionUUID: string
    /**
     * Photo width
     * - px
     */
    imageWidth: '0'
    /**
     * Photo height
     * - px
     */
    imageHeight: '0'
    /**
     * AF motor position
     */
    AFPos: '0'
    /**
     * Gimbal port number
     * - Camera installation position for taking photos
     * - Note: For M30/M30T models, this value is fixed at 0
     */
    gimbalPort: '0'
    /**
     * Camera type
     * - `52` (Model: M30 dual camera),
     * - `53` (Model: M30T triple camera)
     * - `66` (Model: Mavic 3E camera)
     * - `67` (Model: Mavic 3T camera)
     * - `80` (Model: Matrice 3D camera)
     * - `81` (Model: Matrice 3TD camera)
     */
    orientedCameraType: '52' | '53' | '66' | '67' | '80' | '81'
    /**
     * Photo file path
     */
    orientedFilePath: string
    /**
     * Photo file size
     * - Byte
     */
    orientedFileSize: '0'
    /**
     * Photo file suffix
     * - This suffix will be added when naming generated media files
     */
    orientedFileSuffix: string
    /**
     * Aperture size
     */
    orientedCameraApertue?: string
    /**
     * Ambient brightness
     */
    orientedCameraLuminance?: string
    /**
     * Shutter time
     */
    orientedCameraShutterTime?: string
    /**
     * ISO
     */
    orientedCameraISO?: string
    /**
     * Photo mode
     * - `normalPhoto`: Normal photo
     * - `lowLightSmartShooting`: Low light smart shooting
     */
    orientedPhotoMode: 'normalPhoto' | 'lowLightSmartShooting'
    /**
     * Photo storage type
     * - `zoom`: Store zoom lens photos
     * - `wide`: Store wide-angle lens photos
     * - `ir`: Store infrared lens photos
     * - `narrow_band`: Store narrow-band lens photos
     * - `visable`: Visible light photos
     * - Note: To store multiple lens photos, format like `<wpml:payloadLensIndex>wide,ir,narrow_band</wpml:payloadLensIndex>` means using wide-angle, infrared and narrow-band lenses simultaneously
     */
    payloadLensIndex: string
    /**
     * Whether to use global storage type
     * - `0`: Do not use global settings
     * - `1`: Use global settings
     */
    useGlobalPayloadLensIndex: string
  }
}

/**
 * Action - Panoramic Shot
 * @memberof wpml:action
 */
export interface PanoShot extends ActionBaseType {
  actionActuatorFunc: 'panoShot'
  actionActuatorFuncParam: {
    /**
     * Payload mounting position, default main gimbal
     */
    payloadPositionIndex: '0'
    /**
     * Photo storage type
     * - `zoom`: Store zoom lens photos
     * - `wide`: Store wide-angle lens photos
     * - `ir`: Store infrared lens photos
     * - `narrow_band`: Store narrow-band lens photos
     * - `visable`: Visible light photos
     * - Note: To store multiple lens photos, format like `<wpml:payloadLensIndex>wide,ir,narrow_band</wpml:payloadLensIndex>` means using wide-angle, infrared and narrow-band lenses simultaneously
     */
    payloadLensIndex: string
    /**
     * Whether to use global storage type
     * - `0`: Do not use global settings
     * - `1`: Use global settings
     */
    useGlobalPayloadLensIndex: string
    /**
     * Panoramic photo mode
     * - `panoShot_360`: Panoramic mode
     */
    panoShotSubMode: 'panoShot_360'
  }
}

/**
 * Action information
 * @memberof wpml:action
 */
export type ActionType =
  TakePhoto
  | StartRecord
  | StopRecord
  | Focus
  | Zoom
  | CustomDirName
  | GimbalRotate
  | RotateYaw
  | Hover
  | GimbalEvenlyRotate
  | OrientedShoot
  | PanoShot

/**
 * Action group information
 * @memberof wpml:actionGroup
 */
export interface ActionGroupType {
  /**
   * Action list
   */
  action: Array<ActionType>
  /**
   * Waypoint where action group ends taking effect
   * - [0, 65535]
   * - Note: This element must be greater than or equal to `actionGroupStartIndex`.
   * - Note: When "waypoint where action group ends taking effect" is the same as "waypoint where action group starts taking effect", it means the action group only takes effect at that waypoint.
   */
  actionGroupEndIndex: string
  /**
   * Action group ID
   * - [0, 65535]
   * - Note: This ID must be unique within a kmz file. It is recommended to start from 0 and increment monotonically.
   */
  actionGroupId: string
  /**
   * Action execution mode
   * - `sequence`: Sequential execution. Actions in the action group are executed in order.
   */
  actionGroupMode: 'sequence'
  /**
   * Waypoint where action group starts taking effect
   * - [0, 65535]
   */
  actionGroupStartIndex: string
  /**
   * Action group trigger
   */
  actionTrigger: {
    /**
     * Action trigger type
     */
    actionTriggerType: ActionTriggerType
    /**
     * Action trigger parameter
     * - s or m
     * - Greater than 0
     * Note: When `actionTriggerType` is `multipleTiming`, this element represents interval time in seconds. When `actionTriggerType` is `multipleDistance`, this element represents interval distance in meters.
     */
    actionTriggerParam: string
  }
}

/**
 * Action trigger type
 * - `reachPoint` Execute when reaching waypoint
 * - `betweenAdjacentPoints` Segment trigger, evenly rotate gimbal
 * - `multipleTiming` Equal time interval trigger
 * - `multipleDistance` Equal distance interval trigger
 * - Note: `betweenAdjacentPoints` needs to be used with `gimbalEvenlyRotate` action, `multipleTiming` with `takePhoto` action can achieve equal time interval photography, `multipleDistance` with `takePhoto` action can achieve equal distance interval photography.
 */
export type ActionTriggerType = 'reachPoint' | 'betweenAdjacentPoints' |
  'multipleTiming' | 'multipleDistance'
