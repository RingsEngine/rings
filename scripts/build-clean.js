import fs from 'fs';
import path from 'path';

// 获取包名
const packageName = process.argv[2];
if (!packageName) {
  console.error('Please provide package name as argument');
  process.exit(1);
}

// 移动文件从dist/packages/packageName到dist
const packageDir = `dist/packages/${packageName}`;
if (fs.existsSync(packageDir)) {
  const files = fs.readdirSync(packageDir);
  files.forEach(file => {
    const srcPath = path.join(packageDir, file);
    const destPath = path.join('dist', file);
    if (fs.existsSync(srcPath)) {
      fs.renameSync(srcPath, destPath);
      console.log(`Moved: ${srcPath} -> ${destPath}`);
    }
  });
}

// 清理目录
const dirsToClean = ['dist/src', 'dist/packages'];
dirsToClean.forEach(dir => {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
    console.log(`Cleaned: ${dir}`);
  }
});