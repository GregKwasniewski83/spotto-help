#!/usr/bin/env node

/**
 * Image Checker Script
 *
 * This script validates images in the assets/ directory.
 *
 * Checks:
 * - Image file size (< 500KB)
 * - Image format (PNG/JPG)
 * - Referenced in markdown files
 * - Orphaned images
 *
 * Usage:
 *   node scripts/check-images.js
 *   npm run check-images
 */

const fs = require('fs');
const path = require('path');

// ANSI colors
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
};

const MAX_SIZE_KB = 500;
const MAX_SIZE_BYTES = MAX_SIZE_KB * 1024;

let issues = [];
let imageCount = 0;
let totalSize = 0;

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

function findImages(dir, imageList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory() && !file.startsWith('.')) {
      findImages(filePath, imageList);
    } else if (/\.(png|jpg|jpeg|gif|svg|webp)$/i.test(file)) {
      imageList.push({
        path: filePath,
        size: stat.size,
        name: file
      });
    }
  });

  return imageList;
}

function findMarkdownFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      findMarkdownFiles(filePath, fileList);
    } else if (file.endsWith('.md')) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

function getReferencedImages() {
  const docsDir = path.join(process.cwd(), 'docs');
  const markdownFiles = findMarkdownFiles(docsDir);

  // Include root files
  ['README.md', 'CONTRIBUTING.md', 'CLAUDE.md', 'SCREENS.md', 'CONTENT_GUIDELINES.md', 'PROJECT_STRUCTURE.md'].forEach(file => {
    const filePath = path.join(process.cwd(), file);
    if (fs.existsSync(filePath)) {
      markdownFiles.push(filePath);
    }
  });

  const referenced = new Set();

  markdownFiles.forEach(mdFile => {
    const content = fs.readFileSync(mdFile, 'utf8');
    const imageRegex = /!\[.*?\]\(([^)]+)\)/g;
    let match;

    while ((match = imageRegex.exec(content)) !== null) {
      const imagePath = match[1];

      // Skip external URLs
      if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
        continue;
      }

      // Resolve relative path
      const dir = path.dirname(mdFile);
      const resolvedPath = path.resolve(dir, imagePath);

      if (fs.existsSync(resolvedPath)) {
        referenced.add(resolvedPath);
      }
    }
  });

  return referenced;
}

function checkImage(image, referencedImages) {
  imageCount++;
  totalSize += image.size;

  const relativePath = path.relative(process.cwd(), image.path);

  // Check file size
  if (image.size > MAX_SIZE_BYTES) {
    issues.push({
      file: relativePath,
      type: 'size',
      message: `File too large: ${formatBytes(image.size)} (max ${MAX_SIZE_KB}KB)`,
      severity: 'error'
    });
  }

  // Check if image is referenced
  if (!referencedImages.has(image.path)) {
    issues.push({
      file: relativePath,
      type: 'orphan',
      message: 'Image not referenced in any markdown file',
      severity: 'warning'
    });
  }

  // Check format (warn for non-optimal formats)
  if (image.name.endsWith('.jpg') || image.name.endsWith('.jpeg')) {
    if (image.size < 50 * 1024) { // If less than 50KB, PNG might be better
      issues.push({
        file: relativePath,
        type: 'format',
        message: 'Consider using PNG for small images and screenshots',
        severity: 'info'
      });
    }
  }
}

function main() {
  log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'cyan');
  log('   Spotto Help - Image Checker', 'cyan');
  log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n', 'cyan');

  const assetsDir = path.join(process.cwd(), 'assets');

  if (!fs.existsSync(assetsDir)) {
    log('ℹ️  No assets/ directory found. Creating...', 'cyan');
    fs.mkdirSync(assetsDir, { recursive: true });
    fs.mkdirSync(path.join(assetsDir, 'images'), { recursive: true });
    log('✅ Created assets/images/ directory\n', 'green');
    log('✅ No images to check yet. Add some screenshots!\n', 'green');
    process.exit(0);
  }

  // Find all images
  const images = findImages(assetsDir);

  if (images.length === 0) {
    log('ℹ️  No images found in assets/ directory\n', 'cyan');
    log('✅ Nothing to check!\n', 'green');
    process.exit(0);
  }

  log(`ℹ️  Found ${images.length} images to check...\n`, 'cyan');

  // Get referenced images
  const referencedImages = getReferencedImages();

  // Check each image
  images.forEach(image => checkImage(image, referencedImages));

  // Summary
  log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'cyan');
  log('   Image Check Summary', 'cyan');
  log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n', 'cyan');

  log(`ℹ️  Images checked: ${imageCount}`, 'cyan');
  log(`ℹ️  Total size: ${formatBytes(totalSize)}`, 'cyan');
  log(`ℹ️  Average size: ${formatBytes(Math.round(totalSize / imageCount))}\n`, 'cyan');

  // Categorize issues
  const errors = issues.filter(i => i.severity === 'error');
  const warnings = issues.filter(i => i.severity === 'warning');
  const infos = issues.filter(i => i.severity === 'info');

  if (errors.length > 0) {
    log(`❌ Errors: ${errors.length}`, 'red');
    errors.forEach(issue => {
      log(`\n   📄 ${issue.file}`, 'yellow');
      log(`      ${issue.message}`, 'red');
    });
  } else {
    log(`✅ Errors: 0`, 'green');
  }

  if (warnings.length > 0) {
    log(`\n⚠️  Warnings: ${warnings.length}`, 'yellow');
    warnings.forEach(issue => {
      log(`\n   📄 ${issue.file}`, 'yellow');
      log(`      ${issue.message}`, 'yellow');
    });
  } else {
    log(`✅ Warnings: 0`, 'green');
  }

  if (infos.length > 0) {
    log(`\nℹ️  Info: ${infos.length}`, 'cyan');
  }

  log('');

  if (errors.length > 0) {
    log('❌ Image check failed. Please fix errors above.', 'red');
    process.exit(1);
  } else if (warnings.length > 0) {
    log('⚠️  Image check passed with warnings.', 'yellow');
    process.exit(0);
  } else {
    log('✅ All images are valid! ✨', 'green');
    process.exit(0);
  }
}

if (require.main === module) {
  main();
}

module.exports = { checkImage, findImages };
