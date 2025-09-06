import { execSync } from 'child_process';

// 获取项目根目录
const rootDir = process.cwd();

try {
  // 使用vite的esbuild
  console.log('Minifying ES version...');
  execSync(`node -e "require('esbuild').buildSync({entryPoints:['dist/rings.es.max.js'],outfile:'dist/rings.es.js',minify:true,sourcemap:true})"`, {
    stdio: 'inherit',
    cwd: rootDir
  });

  console.log('Minifying UMD version...');
  execSync(`node -e "require('esbuild').buildSync({entryPoints:['dist/rings.umd.max.js'],outfile:'dist/rings.umd.js',minify:true,sourcemap:true})"`, {
    stdio: 'inherit',
    cwd: rootDir
  });

  console.log('Minification completed successfully!');
} catch (error) {
  console.error('Minification failed:', error.message);
  process.exit(1);
}