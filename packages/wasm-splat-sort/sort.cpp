#include <emscripten.h>
#include <cmath>
#include <algorithm>
#include <cstring>
#include <unordered_map>

// Constants
const int COMPARE_BITS = 16;
const int BUCKET_COUNT = (1 << COMPARE_BITS) + 1; // 65537
const float EPSILON = 0.001f;
const uint32_t MAX_INSTANCES = 256; // Maximum number of concurrent instances

/**
 * SplatSorter class - handles sorting of Gaussian splats
 */
class SplatSorter {
private:
    float* centers;          // Input: centers array (x, y, z per point)
    uint32_t* distances;     // Temporary: quantized distances
    uint32_t* countBuffer;   // Temporary: counting sort buckets
    uint32_t numVertices;     // Number of points
    
    float cameraPos[3];      // Camera position
    float cameraDir[3];      // Camera direction
    
    float boundMin[3];        // Bounding box min
    float boundMax[3];        // Bounding box max
    
    bool initialized;

    // Binary search helper
    int binarySearch(int m, int n, uint32_t* order, float divider, float minDist) const {
        auto dist = [&](int i) -> float {
            return (float)distances[order[i]] / divider + minDist;
        };
        
        while (m <= n) {
            int k = (n + m) >> 1;
            float d = dist(k);
            if (d > 0.0f) {
                m = k + 1;
            } else if (d < 0.0f) {
                n = k - 1;
            } else {
                return k;
            }
        }
        return ~m;
    }

public:
    SplatSorter() : centers(nullptr), distances(nullptr), countBuffer(nullptr), 
                    numVertices(0), initialized(false) {
        memset(cameraPos, 0, sizeof(cameraPos));
        memset(cameraDir, 0, sizeof(cameraDir));
        memset(boundMin, 0, sizeof(boundMin));
        memset(boundMax, 0, sizeof(boundMax));
    }
    
    ~SplatSorter() {
        cleanup();
    }
    
    // Initialize sorting state with maximum number of vertices
    void init(uint32_t maxVertices) {
        if (initialized) {
            // Free existing buffers
            if (distances) {
                free(distances);
                distances = nullptr;
            }
            if (countBuffer) {
                free(countBuffer);
                countBuffer = nullptr;
            }
        }
        
        distances = (uint32_t*)malloc(maxVertices * sizeof(uint32_t));
        countBuffer = (uint32_t*)malloc(BUCKET_COUNT * sizeof(uint32_t));
        initialized = true;
    }
    
    // Set centers data (takes ownership of the buffer)
    void setCenters(float* centersData, uint32_t numVerts) {
        centers = centersData;
        numVertices = numVerts;
        
        // Calculate bounding box
        if (numVertices > 0) {
            boundMin[0] = boundMax[0] = centers[0];
            boundMin[1] = boundMax[1] = centers[1];
            boundMin[2] = boundMax[2] = centers[2];
            
            for (uint32_t i = 1; i < numVertices; ++i) {
                float x = centers[i * 3 + 0];
                float y = centers[i * 3 + 1];
                float z = centers[i * 3 + 2];
                
                boundMin[0] = std::min(boundMin[0], x);
                boundMin[1] = std::min(boundMin[1], y);
                boundMin[2] = std::min(boundMin[2], z);
                
                boundMax[0] = std::max(boundMax[0], x);
                boundMax[1] = std::max(boundMax[1], y);
                boundMax[2] = std::max(boundMax[2], z);
            }
        }
    }
    
    // Set camera position and direction
    void setCamera(float px, float py, float pz, float dx, float dy, float dz) {
        cameraPos[0] = px;
        cameraPos[1] = py;
        cameraPos[2] = pz;
        cameraDir[0] = dx;
        cameraDir[1] = dy;
        cameraDir[2] = dz;
    }
    
    // Perform sorting and return the sorted order
    int sort(uint32_t* orderOut) {
        if (!initialized || !centers || numVertices == 0) {
            return 0;
        }
        
        float px = cameraPos[0];
        float py = cameraPos[1];
        float pz = cameraPos[2];
        float dx = cameraDir[0];
        float dy = cameraDir[1];
        float dz = cameraDir[2];
        
        // Calculate distance range from bounding box
        float minDist, maxDist;
        for (int i = 0; i < 8; ++i) {
            float x = ((i & 1) ? boundMin[0] : boundMax[0]) - px;
            float y = ((i & 2) ? boundMin[1] : boundMax[1]) - py;
            float z = ((i & 4) ? boundMin[2] : boundMax[2]) - pz;
            float d = x * dx + y * dy + z * dz;
            
            if (i == 0) {
                minDist = maxDist = d;
            } else {
                minDist = std::min(minDist, d);
                maxDist = std::max(maxDist, d);
            }
        }
        
        // Clear count buffer
        memset(countBuffer, 0, BUCKET_COUNT * sizeof(uint32_t));
        
        // Quantize distances and count
        float range = maxDist - minDist;
        float divider = (range < 1e-6f) ? 0.0f : (1.0f / range) * (float)(1 << COMPARE_BITS);
        
        for (uint32_t i = 0; i < numVertices; ++i) {
            float x = centers[i * 3 + 0] - px;
            float y = centers[i * 3 + 1] - py;
            float z = centers[i * 3 + 2] - pz;
            float d = x * dx + y * dy + z * dz;
            uint32_t sortKey = (uint32_t)std::floor((d - minDist) * divider);
            
            // Clamp to valid range
            if (sortKey >= BUCKET_COUNT) {
                sortKey = BUCKET_COUNT - 1;
            }
            
            distances[i] = sortKey;
            countBuffer[sortKey]++;
        }
        
        // Prefix sum (calculate end positions)
        for (int i = 1; i < BUCKET_COUNT; i++) {
            countBuffer[i] += countBuffer[i - 1];
        }
        
        // Distribute elements (back-to-front for descending order)
        for (uint32_t i = 0; i < numVertices; i++) {
            uint32_t distance = distances[i];
            uint32_t destIndex = --countBuffer[distance];
            orderOut[destIndex] = i;
        }
        
        // Back-face culling: find first point with distance >= 0
        auto dist = [&](int i) -> float {
            return (float)distances[orderOut[i]] / divider + minDist;
        };
        
        int count = numVertices;
        if (dist(numVertices - 1) >= 0.0f) {
            // Binary search for first point with distance >= 0
            int result = binarySearch(0, numVertices - 1, orderOut, divider, minDist);
            count = std::min(numVertices, (uint32_t)std::abs(result));
        }
        
        return count;
    }
    
    // Cleanup resources
    void cleanup() {
        if (distances) {
            free(distances);
            distances = nullptr;
        }
        if (countBuffer) {
            free(countBuffer);
            countBuffer = nullptr;
        }
        initialized = false;
    }
    
    // Check if initialized
    bool isInitialized() const {
        return initialized;
    }
};

// Instance management: map instance ID to SplatSorter
static std::unordered_map<uint32_t, SplatSorter*> g_instances;
static uint32_t g_nextInstanceId = 1;

// Helper function to get instance
static SplatSorter* getInstance(uint32_t instanceId) {
    auto it = g_instances.find(instanceId);
    if (it == g_instances.end()) {
        return nullptr;
    }
    return it->second;
}

// C interface for Emscripten
extern "C" {
    // Create a new instance and return its ID
    EMSCRIPTEN_KEEPALIVE
    uint32_t createInstance(uint32_t maxVertices) {
        if (g_instances.size() >= MAX_INSTANCES) {
            return 0; // Failed: too many instances
        }
        
        uint32_t instanceId = g_nextInstanceId++;
        SplatSorter* sorter = new SplatSorter();
        sorter->init(maxVertices);
        
        g_instances[instanceId] = sorter;
        return instanceId;
    }
    
    // Initialize sorting state for an existing instance
    EMSCRIPTEN_KEEPALIVE
    void initSort(uint32_t instanceId, uint32_t maxVertices) {
        SplatSorter* sorter = getInstance(instanceId);
        if (!sorter) return;
        sorter->init(maxVertices);
    }
    
    // Set centers data
    EMSCRIPTEN_KEEPALIVE
    void setCenters(uint32_t instanceId, float* centers, uint32_t numVertices) {
        SplatSorter* sorter = getInstance(instanceId);
        if (!sorter) return;
        sorter->setCenters(centers, numVertices);
    }
    
    // Set camera position and direction
    EMSCRIPTEN_KEEPALIVE
    void setCamera(uint32_t instanceId, float px, float py, float pz, float dx, float dy, float dz) {
        SplatSorter* sorter = getInstance(instanceId);
        if (!sorter) return;
        sorter->setCamera(px, py, pz, dx, dy, dz);
    }
    
    // Perform sorting
    EMSCRIPTEN_KEEPALIVE
    int sort(uint32_t instanceId, uint32_t* orderOut) {
        SplatSorter* sorter = getInstance(instanceId);
        if (!sorter) return 0;
        return sorter->sort(orderOut);
    }
    
    // Cleanup instance
    EMSCRIPTEN_KEEPALIVE
    void cleanup(uint32_t instanceId) {
        auto it = g_instances.find(instanceId);
        if (it != g_instances.end()) {
            delete it->second;
            g_instances.erase(it);
        }
    }
}
