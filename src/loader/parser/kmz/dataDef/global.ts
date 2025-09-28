/**
 * Aircraft yaw angle mode
 * - `followWayline` Follow wayline direction. Aircraft nose follows wayline direction to next waypoint
 * - `manually` Manual control. User can manually control aircraft nose orientation during flight to next waypoint
 * - `fixed` Lock current yaw angle. Aircraft nose maintains the yaw angle after completing waypoint actions to next waypoint
 * - `smoothTransition` Custom. Set target yaw angle for waypoint via `wpml:waypointHeadingAngle` and smoothly transition to next waypoint's target yaw angle during flight
 * - `towardPOI` Point of interest orientation
 */
export type WaypointHeadingMode =
  'followWayline'
  | 'manually'
  | 'fixed'
  | 'smoothTransition'

/**
 * Aircraft yaw angle rotation direction
 * - `clockwise` Rotate aircraft yaw angle clockwise
 * - `counterClockwise` Rotate aircraft yaw angle counter-clockwise
 * - `followBadArc` Rotate aircraft yaw angle along shortest path
 */
export type WaypointHeadingPathMode =
  'clockwise'
  | 'counterClockwise'
  | 'followBadArc'

/**
 * Waypoint type (waypoint turn mode)
 * - `coordinateTurn` Coordinated turn, no waypoint passing, early turn
 * - `toPointAndStopWithDiscontinuityCurvature` Straight flight, aircraft stops at waypoint
 * - `toPointAndStopWithContinuityCurvature` Curved flight, aircraft stops at waypoint
 * - `toPointAndPassWithContinuityCurvature` Curved flight, aircraft passes waypoint without stopping
 * - Note: For "smooth waypoint passing, early turn" mode in DJI Pilot 2/司空 2:
 *   1. Set `wpml:waypointTurnMode` to `toPointAndPassWithContinuityCurvature`
 *   2. Set `wpml:useStraightLine` to `1`
 */
export type WaypointTurnMode =
  'coordinateTurn'
  | 'toPointAndStopWithDiscontinuityCurvature'
  | 'toPointAndStopWithContinuityCurvature'
  | 'toPointAndPassWithContinuityCurvature'

/**
 * Fly to first waypoint mode
 * - `safely` Safe mode.
 *   - (M300) Aircraft takes off, climbs to first waypoint height, then flies horizontally to first waypoint. If first waypoint is lower than takeoff point, fly horizontally to above first waypoint then descend after takeoff.
 *   - (M30) Aircraft takes off, climbs to first waypoint height, then flies horizontally to first waypoint. If first waypoint is lower than "safe takeoff height", take off to "safe takeoff height" first, then fly horizontally to above first waypoint and descend. Note: "safe takeoff height" only takes effect when aircraft has not taken off.
 * - `pointToPoint` Inclined flight mode.
 *   - (M300) Aircraft takes off and flies inclined to first waypoint.
 *   - (M30) Aircraft takes off to "safe takeoff height", then climbs inclined to first waypoint. If first waypoint height is lower than "safe takeoff height", fly horizontally first then descend.
 */
export type FlyToWaypointType = 'safely' | 'pointToPoint'

/**
 * Wayline end action
 * - `goHome` After aircraft completes wayline mission, exit wayline mode and return home.
 * - `noAction` After aircraft completes wayline mission, exit wayline mode.
 * - `autoLand` After aircraft completes wayline mission, exit wayline mode and land in place.
 * - `gotoFirstWaypoint` After aircraft completes wayline mission, immediately fly to wayline starting point, exit wayline mode after arrival. * Note: During execution of above actions, if aircraft exits wayline mode and enters lost control state, lost control actions will be executed with priority.
 */
export type FinishAction =
  'goHome'
  | 'noAction'
  | 'autoLand'
  | 'gotoFirstWaypoint'

/**
 * Whether to continue wayline execution when lost control
 * - `goContinue` Continue wayline execution
 * - `executeLostAction` Exit wayline, execute lost control action
 */
export type ExitOnRCLost = 'goContinue' | 'executeLostAction'

/**
 * Lost control action type
 * - `goBack` Return home. Aircraft flies from lost control position to takeoff point
 * - `landing` Land. Aircraft lands in place from lost control position
 * - `hover` Hover. Aircraft hovers from lost control position
 */
export type ExecuteRCLostAction = 'goBack' | 'landing' | 'hover'
