# Spotto Help & Documentation Repository

**User-facing help documentation for the Spotto mobile application**

This repository contains comprehensive help content, guides, and troubleshooting documentation for Spotto users. The content is organized by application screens to provide contextual help where users need it most.

## 📋 Overview

- **Purpose**: Searchable help documentation for Spotto app users
- **Audience**: End users (Players, Business Owners, Trainers)
- **Platform**: Mobile app (iOS/Android)
- **Language**: Polish (primary), English (future)

## 🏗️ Repository Structure

```
spotto-help/
├── docs/
│   ├── home/           # Home screen help
│   ├── reservations/   # Reservations screen help
│   ├── shop/           # Shop screen help
│   ├── business/       # Business/Manage screen help
│   ├── trainer/        # Trainer screen help
│   ├── profile/        # Profile screen help
│   ├── common/         # Shared/common help topics
│   └── troubleshooting/ # Error messages & fixes
├── assets/
│   ├── images/         # Screenshots & diagrams
│   └── videos/         # Tutorial videos (links)
├── scripts/
│   └── validate.js     # Content validation script
├── README.md           # This file
├── CLAUDE.md          # AI assistant guidelines
├── CONTRIBUTING.md    # Development guidelines
├── PROJECT_STRUCTURE.md # Detailed structure explanation
├── CONTENT_GUIDELINES.md # Content writing standards
└── SCREENS.md         # Screen-by-screen breakdown
```

## 🚀 Quick Start

### Prerequisites

1. **Main Monorepo** (for reference only):
   ```bash
   # Clone main monorepo NEXT TO this repo (not inside)
   cd ..
   git clone https://github.com/your-org/spotto-monorepo.git
   ```

2. **Repository layout should look like**:
   ```
   parent-folder/
   ├── spotto-monorepo/    # Main app repo (reference only)
   └── spotto-help/        # This repo (working directory)
   ```

### Setup

```bash
# Clone this repository
git clone https://github.com/your-org/spotto-help.git
cd spotto-help

# Install dependencies (for validation scripts)
npm install

# Verify setup
npm run validate
```

## 📖 Screen Coverage

The help content is organized by main app screens:

| Screen | Polish | Description | Priority |
|--------|--------|-------------|----------|
| **Home** | Start | Search facilities, view favorites, browse categories | High |
| **Reservations** | Rezerwacje | View, manage, and cancel bookings | High |
| **Shop** | Sklep | Browse and purchase products (passes, memberships) | Medium |
| **Business** | Biznes | Business profile, facilities, products, agents | High |
| **Trainer** | Trener | Trainer profile, trainings, associations | Medium |
| **Profile** | Profil | User settings, account management, privacy | Medium |

See [SCREENS.md](./SCREENS.md) for detailed breakdown of each screen.

## 🔨 Development Workflow

### Creating New Content

1. **Always create a new branch**:
   ```bash
   git checkout main
   git pull
   git checkout -b feature/home-facility-search
   ```

2. **Follow naming conventions**:
   - Feature branches: `feature/screen-topic-name`
   - Bug fixes: `fix/screen-issue-description`
   - Content updates: `content/screen-updated-section`

3. **Make changes** following [CONTENT_GUIDELINES.md](./CONTENT_GUIDELINES.md)

4. **Validate before committing**:
   ```bash
   npm run validate
   npm run lint-markdown
   ```

5. **Commit and push**:
   ```bash
   git add .
   git commit -m "feat(home): add facility search guide"
   git push origin feature/home-facility-search
   ```

6. **Create Pull Request** on GitHub

### Branch Protection Rules

- ✅ Main branch requires PR reviews
- ✅ All validation scripts must pass
- ✅ No direct commits to main
- ❌ Never commit changes to `../spotto-monorepo/`

## 📝 Content Types

### 1. **How-to Guides** (Step-by-step instructions)
- Location: `docs/{screen}/how-to-{action}.md`
- Example: `docs/home/how-to-search-facilities.md`

### 2. **Feature Explanations** (What & why)
- Location: `docs/{screen}/features/{feature-name}.md`
- Example: `docs/business/features/tpay-integration.md`

### 3. **Troubleshooting** (Common issues & solutions)
- Location: `docs/troubleshooting/{category}/{issue}.md`
- Example: `docs/troubleshooting/payments/failed-transaction.md`

### 4. **FAQs** (Quick answers to common questions)
- Location: `docs/{screen}/faq.md`
- Example: `docs/reservations/faq.md`

## 🎯 Content Standards

- **Language**: Clear, concise Polish
- **Tone**: Friendly, helpful, professional
- **Structure**: Task-oriented, scannable
- **Screenshots**: Required for visual steps
- **Links**: Always relative, never broken

See [CONTENT_GUIDELINES.md](./CONTENT_GUIDELINES.md) for detailed standards.

## 🔍 Search & Discovery

Help content is designed to be:
- **Searchable** by keywords
- **Contextual** to user's current screen
- **Hierarchical** from general to specific
- **Cross-referenced** with related topics

## 🤝 Contributing

1. Read [CONTRIBUTING.md](./CONTRIBUTING.md)
2. Read [CONTENT_GUIDELINES.md](./CONTENT_GUIDELINES.md)
3. Review [SCREENS.md](./SCREENS.md) for screen details
4. Check [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) for file organization
5. Follow the development workflow above

## 📚 Resources

- **Main App Repo**: `../spotto-monorepo/` (read-only reference)
- **Mobile App Code**: `../spotto-monorepo/packages/mobile/`
- **API Documentation**: `../spotto-monorepo/packages/api/`
- **Figma Designs**: [Link to Figma]
- **User Research**: [Link to research docs]

## 🚨 Important Rules

### ❌ DO NOT:
- Commit or modify anything in `../spotto-monorepo/`
- Push directly to main branch
- Create content without a feature branch
- Include sensitive information (API keys, passwords)
- Link to internal/private resources

### ✅ DO:
- Always create feature branches
- Validate content before committing
- Reference main monorepo for accuracy
- Keep screenshots up-to-date
- Cross-reference related topics
- Update TOC when adding new content

## 🧪 Testing & Validation

```bash
# Validate all markdown files
npm run validate

# Check for broken links
npm run check-links

# Lint markdown
npm run lint-markdown

# Check image sizes
npm run check-images

# Full validation suite
npm test
```

## 📊 Metrics & Goals

- **Coverage**: 100% of main user flows documented
- **Freshness**: Content updated within 1 week of app changes
- **Accuracy**: Zero broken links, accurate screenshots
- **Usability**: Clear, tested with real users

## 🗺️ Roadmap

### Phase 1: Core Screens (Current)
- [ ] Home screen help
- [ ] Reservations screen help
- [ ] Business screen help

### Phase 2: Secondary Features
- [ ] Shop screen help
- [ ] Trainer screen help
- [ ] Profile screen help

### Phase 3: Advanced Topics
- [ ] Troubleshooting guides
- [ ] Video tutorials
- [ ] Interactive demos

### Phase 4: Internationalization
- [ ] English translations
- [ ] Multi-language support

## 📞 Support

For questions or issues:
- **Developer Questions**: Check [CLAUDE.md](./CLAUDE.md)
- **Content Questions**: Check [CONTENT_GUIDELINES.md](./CONTENT_GUIDELINES.md)
- **Technical Issues**: Open an issue on GitHub

## 📄 License

[License information]

---

**Last Updated**: 2026-03-17
**Version**: 1.0.0
**Maintainers**: Spotto Development Team
