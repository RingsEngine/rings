/**
 * tile loading status constants
 * FAILED is negative, ensure LRU cache unload failed tiles first
 */
export const FAILED = -1;
export const UNLOADED = 0;
export const LOADING = 1;
export const PARSING = 2;
export const LOADED = 3;

/**
 * WGS84 ellipsoid parameters (for geospatial coordinate system calculation)
 * 参考: https://en.wikipedia.org/wiki/World_Geodetic_System
 */
export const WGS84_RADIUS = 6378137; // meters
export const WGS84_FLATTENING = 1 / 298.257223563;
export const WGS84_HEIGHT = -(WGS84_FLATTENING * WGS84_RADIUS - WGS84_RADIUS);

/**
 * plugin registered mark (Symbol, used to mark if the plugin is registered)
 */
export const PLUGIN_REGISTERED = Symbol('PLUGIN_REGISTERED');

