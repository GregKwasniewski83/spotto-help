# Scripts Directory

This directory contains validation and utility scripts for the Spotto Help repository.

## Available Scripts

### 1. validate.js
**Purpose**: Validate markdown syntax and structure

**Checks**:
- File readability
- Heading hierarchy (no skipped levels)
- Required sections for how-to guides
- Broken image references

**Usage**:
```bash
node scripts/validate.js
# or
npm run validate
```

**Exit codes**:
- `0` - All validations passed
- `1` - Validation errors found

---

### 2. check-links.js
**Purpose**: Find broken links in markdown files

**Checks**:
- Internal relative links
- Image references
- Anchor links
- File existence

**Usage**:
```bash
node scripts/check-links.js
# or
npm run check-links
```

**Exit codes**:
- `0` - No broken links
- `1` - Broken links found

---

### 3. check-images.js
**Purpose**: Validate images in assets directory

**Checks**:
- File size < 500KB
- Image format (PNG/JPG)
- Referenced in markdown
- Orphaned images

**Usage**:
```bash
node scripts/check-images.js
# or
npm run check-images
```

**Exit codes**:
- `0` - All images valid
- `1` - Image errors found

---

## Running All Checks

Run the full validation suite:

```bash
npm test
```

This runs:
1. Markdown validation
2. Link checking
3. Image validation
4. Markdown linting (if markdownlint-cli installed)

---

## Development

### Adding New Scripts

1. Create script file: `scripts/your-script.js`
2. Add shebang: `#!/usr/bin/env node`
3. Make executable: `chmod +x scripts/your-script.js`
4. Add npm script in `package.json`:
   ```json
   {
     "scripts": {
       "your-script": "node scripts/your-script.js"
     }
   }
   ```

### Script Template

```javascript
#!/usr/bin/env node

/**
 * Script Name
 *
 * Description of what this script does
 *
 * Usage:
 *   node scripts/your-script.js
 *   npm run your-script
 */

// Import modules
const fs = require('fs');
const path = require('path');

// ANSI colors for output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function main() {
  log('\\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'cyan');
  log('   Script Title', 'cyan');
  log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\n', 'cyan');

  // Your script logic here

  // Exit with appropriate code
  process.exit(0);
}

if (require.main === module) {
  main();
}

module.exports = { /* exported functions */ };
```

---

## Future Scripts

Planned scripts to add:

### generate-toc.js
Auto-generate table of contents for markdown files

### spell-check.js
Check spelling in Polish and English

### generate-index.js
Generate searchable index of all help content

### check-screenshots.js
Verify screenshots are up-to-date with app version

### generate-sitemap.js
Generate sitemap for help content

---

## Troubleshooting

### Script won't run
```bash
# Make script executable
chmod +x scripts/your-script.js

# Run with node explicitly
node scripts/your-script.js
```

### Module not found
```bash
# Install dependencies
npm install
```

### Permission denied
```bash
# Run with appropriate permissions
sudo npm test
```

---

## Contributing

When adding new validation scripts:

1. **Keep it simple**: One concern per script
2. **Clear output**: Use colors and formatting
3. **Exit codes**: 0 for success, 1 for failure
4. **Documentation**: Update this README
5. **Testing**: Test thoroughly before committing

---

**Last Updated**: 2026-03-17
**Maintainer**: Spotto Development Team
