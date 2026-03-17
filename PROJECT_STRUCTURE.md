# Project Structure

This document explains the file organization, naming conventions, and directory structure of the Spotto Help repository.

## Table of Contents

1. [Overview](#overview)
2. [Root Structure](#root-structure)
3. [Documentation Directory](#documentation-directory)
4. [Assets Directory](#assets-directory)
5. [Scripts Directory](#scripts-directory)
6. [File Naming Conventions](#file-naming-conventions)
7. [Organization Principles](#organization-principles)

---

## Overview

The repository is organized to mirror the app's screen structure, making it easy for developers and users to find relevant help content.

```
spotto-help/
├── docs/              # All documentation content
├── assets/            # Images, videos, diagrams
├── scripts/           # Validation and utility scripts
├── .github/           # GitHub Actions workflows
├── .gitignore         # Git ignore rules
├── package.json       # Node dependencies & scripts
├── README.md          # Repository overview
├── CLAUDE.md          # AI assistant guide
├── CONTRIBUTING.md    # Developer guidelines
├── PROJECT_STRUCTURE.md  # This file
├── CONTENT_GUIDELINES.md # Writing standards
└── SCREENS.md         # Screen-by-screen breakdown
```

---

## Root Structure

### Configuration Files

#### `.gitignore`
```
# Dependencies
node_modules/
package-lock.json

# Build outputs
dist/
build/

# Editor files
.vscode/
.idea/
*.swp
*.swo
*~

# OS files
.DS_Store
Thumbs.db

# Monorepo (DO NOT COMMIT)
../spotto-monorepo/

# Temporary files
tmp/
temp/
*.tmp

# Logs
*.log
npm-debug.log*
```

#### `package.json`
```json
{
  "name": "spotto-help",
  "version": "1.0.0",
  "description": "User help documentation for Spotto app",
  "scripts": {
    "test": "npm run validate && npm run check-links && npm run check-images",
    "validate": "node scripts/validate.js",
    "check-links": "node scripts/check-links.js",
    "lint-markdown": "markdownlint docs/**/*.md",
    "check-images": "node scripts/check-images.js"
  },
  "devDependencies": {
    "markdownlint-cli": "^0.37.0"
  }
}
```

### Documentation Files

| File | Purpose |
|------|---------|
| `README.md` | Project overview, quick start, main entry point |
| `CLAUDE.md` | AI assistant instructions, critical for Claude Code |
| `CONTRIBUTING.md` | How to contribute, PR process, code review |
| `PROJECT_STRUCTURE.md` | This file - explains organization |
| `CONTENT_GUIDELINES.md` | Writing standards, style guide, templates |
| `SCREENS.md` | Screen breakdown, feature list, priorities |

---

## Documentation Directory

### Structure

```
docs/
├── home/                   # Home screen (Start)
│   ├── README.md          # Screen overview
│   ├── how-to-*.md        # Step-by-step guides
│   ├── features/          # Feature explanations
│   │   ├── search.md
│   │   ├── categories.md
│   │   └── favorites.md
│   └── faq.md             # Frequently asked questions
│
├── reservations/          # Reservations screen
│   ├── README.md
│   ├── how-to-*.md
│   ├── features/
│   │   ├── booking-status.md
│   │   ├── cancellation.md
│   │   └── refunds.md
│   └── faq.md
│
├── shop/                  # Shop screen
│   ├── README.md
│   ├── how-to-*.md
│   ├── features/
│   │   ├── product-types.md
│   │   └── payment-methods.md
│   └── faq.md
│
├── business/              # Business/Manage screen
│   ├── README.md
│   ├── how-to-*.md
│   ├── features/
│   │   ├── business-profile.md
│   │   ├── facility-management.md
│   │   ├── tpay-integration.md
│   │   ├── ksef-integration.md
│   │   ├── schedule-management.md
│   │   ├── agent-management.md
│   │   ├── trainer-associations.md
│   │   ├── child-businesses.md
│   │   └── products.md
│   └── faq.md
│
├── trainer/               # Trainer screen
│   ├── README.md
│   ├── how-to-*.md
│   ├── features/
│   │   ├── trainer-profile.md
│   │   ├── training-management.md
│   │   └── business-associations.md
│   └── faq.md
│
├── profile/               # Profile screen
│   ├── README.md
│   ├── how-to-*.md
│   ├── features/
│   │   ├── account-settings.md
│   │   ├── privacy-settings.md
│   │   └── role-management.md
│   └── faq.md
│
├── common/                # Cross-screen topics
│   ├── getting-started.md
│   ├── account-creation.md
│   ├── navigation.md
│   ├── search-tips.md
│   ├── glossary.md
│   └── contact-support.md
│
└── troubleshooting/       # Problem solving
    ├── authentication/
    │   ├── login-failed.md
    │   ├── forgot-password.md
    │   └── account-locked.md
    ├── payments/
    │   ├── payment-failed.md
    │   ├── refund-issues.md
    │   └── tpay-errors.md
    ├── bookings/
    │   ├── booking-failed.md
    │   ├── cannot-cancel.md
    │   └── time-slot-unavailable.md
    └── app-issues/
        ├── app-crash.md
        ├── slow-performance.md
        └── sync-issues.md
```

### Screen Directories

Each screen directory follows this pattern:

```
{screen}/
├── README.md              # Screen overview & navigation
├── how-to-*.md           # Action-oriented guides
├── features/             # Feature explanations
│   └── *.md
└── faq.md                # Common questions
```

#### README.md Template
```markdown
# [Screen Name] - Pomoc

## Przegląd
[Brief description of the screen and its purpose]

## Główne funkcje
- [Feature 1]
- [Feature 2]
- [Feature 3]

## Przewodniki
- [Link to guide 1](./how-to-feature-1.md)
- [Link to guide 2](./how-to-feature-2.md)

## Funkcje
- [Link to feature 1](./features/feature-1.md)
- [Link to feature 2](./features/feature-2.md)

## Najczęściej zadawane pytania
Zobacz [FAQ](./faq.md)

## Potrzebujesz pomocy?
[Contact support link](../common/contact-support.md)
```

---

## Assets Directory

### Structure

```
assets/
├── images/                # Screenshots and diagrams
│   ├── home/
│   │   ├── home-screen.png
│   │   ├── search-bar.png
│   │   ├── search-results.png
│   │   ├── category-carousel.png
│   │   └── favorites-section.png
│   ├── reservations/
│   │   ├── reservation-list.png
│   │   ├── reservation-details.png
│   │   └── cancel-dialog.png
│   ├── shop/
│   │   ├── product-list.png
│   │   ├── product-details.png
│   │   └── purchase-flow.png
│   ├── business/
│   │   ├── business-profile.png
│   │   ├── facility-form.png
│   │   ├── schedule-manager.png
│   │   ├── tpay-config.png
│   │   ├── ksef-config.png
│   │   ├── agent-management.png
│   │   └── trainer-associations.png
│   ├── trainer/
│   │   ├── trainer-profile.png
│   │   ├── training-form.png
│   │   └── participants.png
│   ├── profile/
│   │   ├── profile-view.png
│   │   ├── settings.png
│   │   └── privacy-settings.png
│   └── common/
│       ├── login.png
│       ├── signup.png
│       └── navigation.png
│
└── videos/                # Video tutorials (links only)
    ├── video-links.md     # YouTube/Vimeo URLs
    └── thumbnails/        # Video preview images
        └── *.png
```

### Image Naming Convention

```
{screen}-{feature}-{state}.png

Examples:
home-search-empty.png
home-search-typing.png
home-search-results.png
business-profile-form.png
business-facility-card.png
reservations-cancel-dialog.png
shop-product-details.png
```

### Image Requirements

- **Format**: PNG (preferred), JPG (photos only)
- **Max size**: 500KB
- **Min resolution**: 1080x1920 (phone)
- **Max resolution**: 1440x3040 (high-res phone)
- **Orientation**: Portrait for mobile screens
- **Compression**: Use TinyPNG or similar

---

## Scripts Directory

### Structure

```
scripts/
├── validate.js           # Validate markdown syntax
├── check-links.js        # Find broken links
├── check-images.js       # Check image sizes
├── generate-toc.js       # Generate table of contents
└── utils/
    ├── markdown-parser.js
    └── link-checker.js
```

### Script Descriptions

#### `validate.js`
Checks markdown files for:
- Syntax errors
- Missing required sections
- Proper front matter
- Heading hierarchy
- List formatting

#### `check-links.js`
Finds broken links:
- Internal links (relative paths)
- External links (HTTP status)
- Anchor links (#sections)
- Image references

#### `check-images.js`
Validates images:
- File size < 500KB
- Proper format (PNG/JPG)
- Referenced in markdown
- Orphaned images

---

## File Naming Conventions

### Markdown Files

#### How-To Guides
```
how-to-{action}.md

Examples:
how-to-search-facilities.md
how-to-cancel-booking.md
how-to-create-profile.md
how-to-setup-tpay.md
```

#### Feature Explanations
```
features/{feature-name}.md

Examples:
features/tpay-integration.md
features/schedule-management.md
features/booking-status.md
```

#### Troubleshooting
```
troubleshooting/{category}/{problem}.md

Examples:
troubleshooting/payments/payment-failed.md
troubleshooting/bookings/cannot-cancel.md
troubleshooting/authentication/login-failed.md
```

### Rules

- **Use kebab-case**: `my-file-name.md`
- **Use Polish terms**: `jak-wyszukac-obiekt.md` (if in Polish)
- **Be descriptive**: `tpay-config.md` not `config.md`
- **Avoid dates**: Don't use `guide-2024.md`
- **Avoid versions**: Don't use `guide-v2.md`
- **Use singular**: `facility.md` not `facilities.md`

---

## Organization Principles

### 1. Mirror App Structure
- Docs organized by app screens
- Same terminology as app UI
- Same navigation hierarchy

### 2. Discoverability
- Clear folder names
- Descriptive file names
- Comprehensive README files
- Cross-references between topics

### 3. Maintainability
- One concept per file
- Modular content
- Easy to update
- Clear ownership

### 4. Scalability
- Room for growth
- Consistent patterns
- Reusable components
- Extensible structure

### 5. Searchability
- Meaningful file names
- Rich metadata
- Keyword optimization
- Clear titles

---

## Adding New Content

### Decision Tree

```
Q: What type of content am I creating?

A: Step-by-step instructions
   → Create `how-to-{action}.md` in screen folder

A: Feature explanation
   → Create `features/{feature}.md` in screen folder

A: Problem solving
   → Create `troubleshooting/{category}/{problem}.md`

A: Quick answers
   → Add to `faq.md` in screen folder

A: General information
   → Create in `common/` folder
```

### Checklist

Before creating new file:

- [ ] Determined correct category
- [ ] Checked if topic already exists
- [ ] Followed naming convention
- [ ] Created in correct folder
- [ ] Updated parent README.md
- [ ] Added cross-references
- [ ] Included in navigation

---

## Directory Maintenance

### Regular Tasks

**Weekly**:
- Check for orphaned files
- Validate all links
- Review new content

**Monthly**:
- Update screenshots
- Check app version compatibility
- Archive obsolete content
- Reorganize if needed

**Quarterly**:
- Major structure review
- User feedback integration
- Navigation optimization

---

## Examples

### Adding Home Screen Search Guide

```bash
# 1. Create file in correct location
touch docs/home/how-to-search-facilities.md

# 2. Add screenshots
mkdir -p assets/images/home
cp ~/screenshot1.png assets/images/home/search-bar.png
cp ~/screenshot2.png assets/images/home/search-results.png

# 3. Write content using template
# ... edit file ...

# 4. Update home README.md
# Add link to new guide in "Przewodniki" section

# 5. Validate
npm run validate
npm run check-links

# 6. Commit
git add docs/home/how-to-search-facilities.md
git add assets/images/home/*.png
git add docs/home/README.md
git commit -m "feat(home): add facility search guide"
```

### Adding Troubleshooting Article

```bash
# 1. Create category if needed
mkdir -p docs/troubleshooting/payments

# 2. Create file
touch docs/troubleshooting/payments/payment-failed.md

# 3. Add screenshots
mkdir -p assets/images/troubleshooting
cp ~/error-screenshot.png assets/images/troubleshooting/payment-error.png

# 4. Write content
# ... edit file ...

# 5. Update troubleshooting README (if exists)

# 6. Validate and commit
npm run validate
git add docs/troubleshooting/payments/payment-failed.md
git commit -m "docs(troubleshooting): add payment failed guide"
```

---

## Best Practices

### DO ✅

1. **Follow conventions**: Stick to established patterns
2. **Keep it flat**: Max 3 levels deep
3. **Be consistent**: Same naming everywhere
4. **Document changes**: Update README files
5. **Cross-reference**: Link related content
6. **Clean up**: Remove obsolete files
7. **Validate**: Run scripts before commit

### DON'T ❌

1. **Deep nesting**: Avoid `docs/a/b/c/d/e/file.md`
2. **Random naming**: Don't use `doc1.md`, `test.md`
3. **Duplicate content**: Don't copy/paste guides
4. **Leave orphans**: Remove unreferenced files
5. **Mix concerns**: Keep categories separate
6. **Skip README**: Always update navigation
7. **Ignore validation**: Always run checks

---

## Migration Guide

### Moving Existing Content

If restructuring is needed:

1. **Create new location**
2. **Copy content** (don't move yet)
3. **Update all links** to new location
4. **Test thoroughly**
5. **Move file** (git mv)
6. **Add redirect** from old to new
7. **Update all references**
8. **Remove old file** after grace period

### Example

```bash
# Moving file from wrong location
git mv docs/home/business-profile.md docs/business/how-to-create-profile.md

# Update all links
grep -r "business-profile.md" docs/
# ... update links in files ...

# Commit
git add .
git commit -m "refactor: move business profile to correct location"
```

---

## References

- [Markdown Guide](https://www.markdownguide.org/)
- [Documentation Best Practices](https://www.writethedocs.org/guide/)
- [Content Organization Patterns](https://idratherbewriting.com/)

---

**Last Updated**: 2026-03-17
**Version**: 1.0.0
**Maintainer**: Spotto Development Team
