#!/bin/bash

# Build script for WASM splat sort module
# Requires Emscripten SDK to be installed and activated

set -e

echo "Building WASM splat sort module..."

# Check if emcc is available
if ! command -v emcc &> /dev/null; then
    echo "Error: emcc not found. Please install and activate Emscripten SDK."
    echo "Visit: https://emscripten.org/docs/getting_started/downloads.html"
    exit 1
fi

# Compile with Emscripten
# Use EXPORT_ES6=1 to generate ES6 module with default export automatically
emcc sort.cpp \
    -O3 \
    -s WASM=1 \
    -s EXPORTED_FUNCTIONS='["_createInstance","_initSort","_setCenters","_setCamera","_sort","_cleanup","_malloc","_free"]' \
    -s EXPORTED_RUNTIME_METHODS='["ccall","cwrap","UTF8ToString","stringToUTF8","HEAPF32","HEAPU32"]' \
    -s ALLOW_MEMORY_GROWTH=1 \
    -s MODULARIZE=1 \
    -s EXPORT_ES6=1 \
    -s EXPORT_NAME="createSortModule" \
    -o sort.js \
    --no-entry

echo "Build complete! Generated files:"
echo "  - sort.js (JavaScript wrapper)"
echo "  - sort.wasm (WebAssembly binary)"
