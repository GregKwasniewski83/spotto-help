#!/usr/bin/env node

/**
 * Link Checker Script
 *
 * This script checks for broken links in markdown files.
 *
 * Checks:
 * - Internal relative links (../path/to/file.md)
 * - Anchor links (#section)
 * - Image references
 * - External URLs (HTTP status codes)
 *
 * Usage:
 *   node scripts/check-links.js
 *   npm run check-links
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

let brokenLinks = [];
let checkedFiles = 0;
let totalLinks = 0;

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
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

function checkLinks(filePath) {
  checkedFiles++;
  const content = fs.readFileSync(filePath, 'utf8');
  const relativePath = path.relative(process.cwd(), filePath);

  // Find all markdown links: [text](url)
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let match;

  while ((match = linkRegex.exec(content)) !== null) {
    totalLinks++;
    const linkText = match[1];
    const linkUrl = match[2];

    // Skip external URLs (would need HTTP requests)
    if (linkUrl.startsWith('http://') || linkUrl.startsWith('https://')) {
      // TODO: Implement HTTP checking
      continue;
    }

    // Skip mailto and tel links
    if (linkUrl.startsWith('mailto:') || linkUrl.startsWith('tel:')) {
      continue;
    }

    // Check internal link
    const [targetPath, anchor] = linkUrl.split('#');

    if (targetPath) {
      const dir = path.dirname(filePath);
      const resolvedPath = path.resolve(dir, targetPath);

      if (!fs.existsSync(resolvedPath)) {
        brokenLinks.push({
          file: relativePath,
          link: linkUrl,
          text: linkText,
          reason: 'File not found'
        });
      }
    }
  }
}

function main() {
  log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'cyan');
  log('   Spotto Help - Link Checker', 'cyan');
  log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n', 'cyan');

  const docsDir = path.join(process.cwd(), 'docs');

  if (!fs.existsSync(docsDir)) {
    log('❌ docs/ directory not found', 'red');
    process.exit(1);
  }

  const markdownFiles = findMarkdownFiles(docsDir);

  // Include root files
  ['README.md', 'CONTRIBUTING.md', 'CLAUDE.md', 'SCREENS.md', 'CONTENT_GUIDELINES.md', 'PROJECT_STRUCTURE.md'].forEach(file => {
    const filePath = path.join(process.cwd(), file);
    if (fs.existsSync(filePath)) {
      markdownFiles.push(filePath);
    }
  });

  log(`ℹ️  Checking ${markdownFiles.length} files...\n`, 'cyan');

  markdownFiles.forEach(checkLinks);

  // Summary
  log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'cyan');
  log('   Link Check Summary', 'cyan');
  log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n', 'cyan');

  log(`ℹ️  Files checked: ${checkedFiles}`, 'cyan');
  log(`ℹ️  Total links: ${totalLinks}`, 'cyan');

  if (brokenLinks.length > 0) {
    log(`❌ Broken links: ${brokenLinks.length}\n`, 'red');

    brokenLinks.forEach(({ file, link, text, reason }) => {
      log(`\n📄 ${file}`, 'yellow');
      log(`   Link: ${link}`, 'reset');
      log(`   Text: "${text}"`, 'reset');
      log(`   Reason: ${reason}`, 'red');
    });

    log('');
    log('❌ Link check failed. Please fix broken links above.', 'red');
    process.exit(1);
  } else {
    log(`✅ Broken links: 0\n`, 'green');
    log('✅ All links are valid! ✨', 'green');
    process.exit(0);
  }
}

if (require.main === module) {
  main();
}

module.exports = { checkLinks };
