import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.join(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const publicDir = path.join(rootDir, 'public');

// Ensure dist directory exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Files to copy from public to dist
const filesToCopy = [
  'web.config',
  'favicon.ico',
  'robots.txt'
];

// Directories to copy from public to dist
const dirsToCopy = [
  'lovable-uploads'
];

console.log('🚀 Starting IIS build file copy...');

// Copy individual files
filesToCopy.forEach(file => {
  const sourcePath = path.join(publicDir, file);
  const destPath = path.join(distDir, file);
  
  if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, destPath);
    console.log(`✅ Copied: ${file}`);
  } else {
    console.log(`⚠️  Warning: ${file} not found in public directory`);
  }
});

// Copy directories
dirsToCopy.forEach(dir => {
  const sourcePath = path.join(publicDir, dir);
  const destPath = path.join(distDir, dir);
  
  if (fs.existsSync(sourcePath)) {
    copyDirectoryRecursive(sourcePath, destPath);
    console.log(`✅ Copied directory: ${dir}`);
  } else {
    console.log(`⚠️  Warning: Directory ${dir} not found in public directory`);
  }
});

// Create IIS-specific optimizations
createIISOptimizations();

console.log('🎉 IIS build file copy completed!');

function copyDirectoryRecursive(source, destination) {
  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination, { recursive: true });
  }

  const files = fs.readdirSync(source);
  
  files.forEach(file => {
    const sourcePath = path.join(source, file);
    const destPath = path.join(destination, file);
    
    if (fs.statSync(sourcePath).isDirectory()) {
      copyDirectoryRecursive(sourcePath, destPath);
    } else {
      fs.copyFileSync(sourcePath, destPath);
    }
  });
}

function createIISOptimizations() {
  // Create a deployment manifest for IIS
  const manifest = {
    version: '1.0.0',
    buildDate: new Date().toISOString(),
    buildType: 'iis-production',
    files: []
  };

  // Scan dist directory and add files to manifest
  function scanDirectory(dir, relativePath = '') {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const fullPath = path.join(dir, file);
      const relativeFilePath = path.join(relativePath, file);
      
      if (fs.statSync(fullPath).isDirectory()) {
        scanDirectory(fullPath, relativeFilePath);
      } else {
        const stats = fs.statSync(fullPath);
        manifest.files.push({
          path: relativeFilePath.replace(/\\/g, '/'),
          size: stats.size,
          modified: stats.mtime.toISOString()
        });
      }
    });
  }

  scanDirectory(distDir);
  
  // Write manifest
  fs.writeFileSync(
    path.join(distDir, 'deployment-manifest.json'),
    JSON.stringify(manifest, null, 2)
  );
  
  console.log('✅ Created deployment manifest');
} 