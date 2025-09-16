import fs from 'fs';
import path from 'path';

// 清理dist/packages和dist/src目录
const dirsToClean = ['dist/packages', 'dist/src'];
dirsToClean.forEach(dir => {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
    console.log(`Cleaned: ${dir}`);
  }
});

// 将dist/src重命名为dist/types
const srcPath = 'dist/src';
const typesPath = 'dist/types';
if (fs.existsSync(srcPath)) {
  fs.renameSync(srcPath, typesPath);
  console.log(`Moved: ${srcPath} -> ${typesPath}`);
} else {
  console.log('src moved');
}