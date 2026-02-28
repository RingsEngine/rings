@echo off
REM Build script for WASM splat sort module (Windows)
REM Requires Emscripten SDK to be installed and activated

echo Building WASM splat sort module...

REM Check if emcc is available
echo Checking for emcc...
where emcc >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo Error: emcc not found. Please install and activate Emscripten SDK.
    echo Visit: https://emscripten.org/docs/getting_started/downloads.html
    pause
    exit /b 1
)
echo emcc found, starting compilation...

REM Compile with Emscripten
echo Compiling sort.cpp...
echo This may take a while, please wait...
echo.
REM Use EXPORT_ES6=1 to generate ES6 module with default export automatically
emcc sort.cpp ^
    -O3 ^
    -s WASM=1 ^
    -s "EXPORTED_FUNCTIONS=[\"_createInstance\",\"_initSort\",\"_setCenters\",\"_setCamera\",\"_sort\",\"_cleanup\",\"_malloc\",\"_free\"]" ^
    -s "EXPORTED_RUNTIME_METHODS=[\"ccall\",\"cwrap\",\"UTF8ToString\",\"stringToUTF8\",\"HEAPF32\",\"HEAPU32\"]" ^
    -s ALLOW_MEMORY_GROWTH=1 ^
    -s MODULARIZE=1 ^
    -s EXPORT_ES6=1 ^
    -s EXPORT_NAME="createSortModule" ^
    -o sort.js ^
    --no-entry 2>&1
set COMPILE_ERROR=%ERRORLEVEL%
echo.
echo Compilation finished with error level: %COMPILE_ERROR%

if %COMPILE_ERROR% EQU 0 (
    echo Compilation successful!
    echo ES6 module export is automatically included with EXPORT_ES6=1 flag.
    echo Build complete! Generated files:
    echo   - sort.js (JavaScript wrapper with ES6 export)
    echo   - sort.wasm (WebAssembly binary)
) else (
    echo Build failed with error code: %COMPILE_ERROR%
    echo Please check the error messages above.
    if exist sort.js (
        echo Note: sort.js file exists but may be incomplete or corrupted.
    ) else (
        echo Note: sort.js file was not created.
    )
    pause
    exit /b 1
)
