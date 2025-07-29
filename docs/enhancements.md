### 1. 图片处理

支持多种图片格式加载和转换

```javascript
import { ImageProcessor } from "media-extension";

const processor = new ImageProcessor();
processor.load("image.png").then((img) => img.resize(800, 600));
```

支持功能：

- 格式转换 (PNG, JPG, WebP)
- 尺寸调整
- 滤镜应用
- EXIF 信息读取

### 2. 视频处理

视频解码和基本编辑功能

```javascript
import { VideoPlayer } from "media-extension";

const player = new VideoPlayer();
player.load("video.mp4").then((vid) => vid.play());
```

支持功能：

- 主流格式解码 (MP4, WebM, MOV)
- 视频剪辑
- 帧提取
- 元数据读取

### 3. 音频处理

音频播放和处理工具

```javascript
import { AudioMixer } from "media-extension";

const mixer = new AudioMixer();
mixer.load("audio.mp3").then((audio) => audio.normalize());
```

支持功能：

- 多格式支持 (MP3, WAV, OGG)
- 音量标准化
- 音效处理
- 音频可视化

[返回组件系统 →](/components)
