import { ActionGroupType } from './action'
import {
  WaypointHeadingMode,
  WaypointHeadingPathMode,
  WaypointTurnMode
} from './global'

/**
 * Waypoint information
 * @memberof Placemark
 */
export interface PointType {
  /**
   * Waypoint longitude and latitude <longitude,latitude>
   * - Note: Format here is like `<Point> <coordinates> longitude,latitude </coordinates> </Point>`
   */
  Point: {
    coordinates: string
  }
  /**
   * Action group list
   */
  actionGroup: Array<ActionGroupType>
  /**
   * Waypoint height (WGS84 ellipsoid height)
   * - m
   * - Note: This element is used together with `wpml:height`, both are expressions of the same position with different elevation reference planes.
   */
  ellipsoidHeight: string
  /**
   * Waypoint execution height
   * - m
   * - Note: This element is only used in `waylines.wpml`. Specific elevation reference plane is declared in `wpml:executeHeightMode`.
   */
  executeHeight?: string
  /**
   * Waypoint height (EGM96 altitude height/relative to takeoff point height/AGL relative to ground height)
   * - m
   * - Note: This element is used together with `wpml:ellipsoidHeight`, both are expressions of the same position with different elevation reference planes.
   */
  height: string
  /**
   * Waypoint sequence number
   * - [0, 65535]
   * - Note: This ID must be unique within a wayline. This sequence number must start from 0 and increment monotonically.
   */
  index: string
  isRisky: string
  /**
   * Whether to use global heading mode parameters
   * - 0: Do not use global settings
   * - 1: Use global settings
   */
  useGlobalHeadingParam: '0' | '1'
  /**
   * Whether to use global height
   * - 0, 1
   */
  useGlobalHeight: '0' | '1'
  /**
   * Whether to use global flight speed
   * - 0: Do not use global settings
   * - 1: Use global settings
   * - Note: The global flight speed here is `wpml:autoFlightSpeed`
   */
  useGlobalSpeed: '0' | '1'
  /**
   * Whether to use global waypoint type (global waypoint turn mode)
   * - 0: Do not use global settings
   * - 1: Use global settings
   */
  useGlobalTurnParam: '0' | '1'
  /**
   * Whether this segment should follow straight line
   * - `0`: Segment trajectory is curved throughout
   * - `1`: Segment trajectory closely follows straight line between two points
   */
  useStraightLine: '0' | '1'
  /**
   * Heading mode parameters
   */
  waypointHeadingParam: {
    /**
     * Aircraft yaw angle
     * - °
     * - Set target yaw angle for a waypoint and smoothly transition to the next waypoint's target yaw angle during flight.
     * - Note: Required only when `wpml:waypointHeadingMode` is `smoothTransition`
     */
    waypointHeadingAngle: string
    /**
     * Aircraft yaw angle mode
     */
    waypointHeadingMode: WaypointHeadingMode
    /**
     * Aircraft yaw angle rotation direction
     */
    waypointHeadingPathMode: WaypointHeadingPathMode
  }
  /**
   * Waypoint flight speed
   * - m/s
   * - [1,15]
   */
  waypointSpeed: string
  /**
   * Waypoint type (waypoint turn mode)
   */
  waypointTurnParam: {
    /**
     * Waypoint turn damping distance
     * - m
     * - (0, maximum segment length]
     * - Note: Segment length between two waypoints must be greater than the sum of turn damping distances of both waypoints. This element defines how many meters before reaching the waypoint the aircraft should start turning.
     */
    waypointTurnDampingDist: string
    /**
     * Waypoint type (waypoint turn mode)
     */
    waypointTurnMode: WaypointTurnMode
  }
  /**
   * Waypoint gimbal pitch angle
   * - °
   */
  gimbalPitchAngle: string

  /**
   * Waypoint SLAM position information
   */
  slamPositionInfo: {
    slamPosition: string
    slamPositionIndex: string
    slamPositionValid: string
  }
}
