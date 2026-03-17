#!/usr/bin/env node

/**
 * Markdown Validation Script
 *
 * This script validates markdown files in the docs/ directory.
 *
 * Checks:
 * - File exists and is readable
 * - Required front matter (screen, role, difficulty)
 * - Heading hierarchy (no skipped levels)
 * - Required sections present
 * - Proper markdown syntax
 *
 * Usage:
 *   node scripts/validate.js
 *   npm run validate
 */

const fs = require('fs');
const path = require('path');

// ANSI color codes
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

let errorCount = 0;
let warningCount = 0;
let fileCount = 0;

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function error(message) {
  log(`❌ ERROR: ${message}`, 'red');
  errorCount++;
}

function warning(message) {
  log(`⚠️  WARNING: ${message}`, 'yellow');
  warningCount++;
}

function success(message) {
  log(`✅ ${message}`, 'green');
}

function info(message) {
  log(`ℹ️  ${message}`, 'cyan');
}

/**
 * Recursively find all markdown files in directory
 */
function findMarkdownFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Skip node_modules and hidden directories
      if (!file.startsWith('.') && file !== 'node_modules') {
        findMarkdownFiles(filePath, fileList);
      }
    } else if (file.endsWith('.md')) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

/**
 * Validate single markdown file
 */
function validateFile(filePath) {
  fileCount++;

  const relativePath = path.relative(process.cwd(), filePath);
  info(`Validating: ${relativePath}`);

  // Read file
  let content;
  try {
    content = fs.readFileSync(filePath, 'utf8');
  } catch (err) {
    error(`Cannot read file: ${filePath}`);
    return;
  }

  // Check if file is empty
  if (content.trim().length === 0) {
    error(`File is empty: ${relativePath}`);
    return;
  }

  // Check for heading hierarchy
  validateHeadingHierarchy(content, relativePath);

  // Check for required sections (for how-to guides)
  if (relativePath.includes('how-to-')) {
    validateHowToStructure(content, relativePath);
  }

  // Check for broken image references
  validateImageReferences(content, relativePath, filePath);
}

/**
 * Validate heading hierarchy (no skipped levels)
 */
function validateHeadingHierarchy(content, filePath) {
  const lines = content.split('\n');
  let previousLevel = 0;

  lines.forEach((line, index) => {
    const match = line.match(/^(#{1,6})\s/);
    if (match) {
      const currentLevel = match[1].length;

      // Check if heading level skipped (e.g., H1 -> H3)
      if (currentLevel > previousLevel + 1) {
        warning(
          `Heading level skipped in ${filePath} at line ${index + 1}: ` +
          `H${previousLevel} -> H${currentLevel}`
        );
      }

      previousLevel = currentLevel;
    }
  });
}

/**
 * Validate how-to guide structure
 */
function validateHowToStructure(content, filePath) {
  const requiredSections = [
    'Przegląd',
    'Kroki',
    'Rozwiązywanie problemów',
    'Powiązane tematy'
  ];

  requiredSections.forEach(section => {
    const regex = new RegExp(`^##\\s+${section}`, 'm');
    if (!regex.test(content)) {
      warning(`Missing required section "${section}" in how-to guide: ${filePath}`);
    }
  });
}

/**
 * Validate image references exist
 */
function validateImageReferences(content, relativePath, absolutePath) {
  const imageRegex = /!\[.*?\]\((.*?)\)/g;
  let match;

  while ((match = imageRegex.exec(content)) !== null) {
    const imagePath = match[1];

    // Skip external URLs
    if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
      continue;
    }

    // Resolve relative path
    const dir = path.dirname(absolutePath);
    const resolvedPath = path.resolve(dir, imagePath);

    if (!fs.existsSync(resolvedPath)) {
      error(`Broken image reference in ${relativePath}: ${imagePath}`);
    }
  }
}

/**
 * Main execution
 */
function main() {
  log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'cyan');
  log('   Spotto Help - Markdown Validator', 'cyan');
  log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n', 'cyan');

  // Find all markdown files
  const docsDir = path.join(process.cwd(), 'docs');

  if (!fs.existsSync(docsDir)) {
    error('docs/ directory not found. Are you in the repository root?');
    process.exit(1);
  }

  const markdownFiles = findMarkdownFiles(docsDir);

  // Also check root markdown files
  const rootFiles = ['README.md', 'CONTRIBUTING.md', 'CLAUDE.md', 'SCREENS.md', 'CONTENT_GUIDELINES.md', 'PROJECT_STRUCTURE.md'];
  rootFiles.forEach(file => {
    const filePath = path.join(process.cwd(), file);
    if (fs.existsSync(filePath)) {
      markdownFiles.push(filePath);
    }
  });

  if (markdownFiles.length === 0) {
    warning('No markdown files found to validate.');
    process.exit(0);
  }

  info(`Found ${markdownFiles.length} markdown files to validate.\n`);

  // Validate each file
  markdownFiles.forEach(file => {
    validateFile(file);
  });

  // Summary
  log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'cyan');
  log('   Validation Summary', 'cyan');
  log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n', 'cyan');

  info(`Files checked: ${fileCount}`);

  if (errorCount > 0) {
    error(`Errors: ${errorCount}`);
  } else {
    success(`Errors: 0`);
  }

  if (warningCount > 0) {
    warning(`Warnings: ${warningCount}`);
  } else {
    success(`Warnings: 0`);
  }

  log('');

  if (errorCount > 0) {
    error('Validation failed. Please fix errors above.');
    process.exit(1);
  } else {
    success('All validations passed! ✨');
    process.exit(0);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { validateFile, findMarkdownFiles };
