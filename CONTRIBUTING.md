# Contributing to Spotto Help

Thank you for contributing to the Spotto Help documentation! This guide will help you get started.

## Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [Getting Started](#getting-started)
3. [Development Workflow](#development-workflow)
4. [Pull Request Process](#pull-request-process)
5. [Content Standards](#content-standards)
6. [Review Process](#review-process)
7. [Questions](#questions)

---

## Code of Conduct

### Our Standards

- **Be respectful**: Treat all contributors with respect
- **Be collaborative**: Work together constructively
- **Be professional**: Keep discussions focused and productive
- **Be helpful**: Support other contributors
- **Be patient**: Everyone is learning

### Unacceptable Behavior

- Harassment, discrimination, or offensive comments
- Personal attacks or trolling
- Publishing private information
- Spam or irrelevant content

---

## Getting Started

### Prerequisites

1. **GitHub Account**: Required for pull requests
2. **Git Installed**: For version control
3. **Node.js**: For running validation scripts
4. **Main Monorepo**: Cloned for reference (read-only)

### Initial Setup

```bash
# 1. Fork the repository on GitHub

# 2. Clone your fork
git clone https://github.com/YOUR-USERNAME/spotto-help.git
cd spotto-help

# 3. Add upstream remote
git remote add upstream https://github.com/your-org/spotto-help.git

# 4. Install dependencies
npm install

# 5. Ensure main monorepo exists for reference
cd ..
ls spotto-monorepo/  # Should exist
cd spotto-help
```

### Repository Layout

Your parent folder should look like:
```
parent-folder/
├── spotto-monorepo/    # Main app (REFERENCE ONLY - DO NOT MODIFY)
└── spotto-help/        # This repo (your working directory)
```

---

## Development Workflow

### 1. Sync with Upstream

Before starting work, sync with the main repository:

```bash
git checkout main
git fetch upstream
git merge upstream/main
git push origin main
```

### 2. Create Feature Branch

**ALWAYS** create a new branch for your work:

```bash
git checkout -b feature/home-search-guide
```

**Branch naming conventions**:
- `feature/screen-topic` - New content
- `fix/screen-issue` - Fixes to existing content
- `content/screen-update` - Content updates
- `docs/topic` - Documentation improvements

**Examples**:
- `feature/home-category-browsing`
- `fix/business-tpay-screenshots`
- `content/reservations-cancel-update`

### 3. Make Changes

#### Research First

Reference the main monorepo to understand the feature:

```bash
# Check current app implementation
cd ../spotto-monorepo/packages/mobile

# Read relevant code
cat app/(tabs)/manage.tsx
cat components/manage/BusinessProfileForm.tsx

# Return to help repo
cd ../../spotto-help
```

#### Create Content

Follow templates from [CONTENT_GUIDELINES.md](./CONTENT_GUIDELINES.md):

```bash
# Create new guide
touch docs/home/how-to-search-facilities.md

# Add screenshots
mkdir -p assets/images/home
cp ~/screenshot.png assets/images/home/search-bar.png
```

#### Write Content

Use the standard template:

```markdown
# Jak wyszukać obiekt sportowy

**Ekran**: Home
**Rola**: Wszystkie
**Wymagania**: Konto użytkownika
**Trudność**: Łatwa

## Przegląd

Ten przewodnik pokazuje jak znaleźć i zarezerwować obiekt sportowy.

## Kroki

### Krok 1: Otwórz wyszukiwarkę

Kliknij w pasek wyszukiwania na górze ekranu.

![Pasek wyszukiwania](../../assets/images/home/search-bar.png)

...
```

### 4. Validate

**ALWAYS** run validation before committing:

```bash
# Full test suite
npm test

# Individual checks
npm run validate        # Markdown syntax
npm run check-links     # Broken links
npm run lint-markdown   # Style issues
npm run check-images    # Image sizes
```

Fix any errors before proceeding.

### 5. Commit Changes

Use conventional commits format:

```bash
git add .
git commit -m "feat(home): add facility search guide with screenshots"
```

**Commit message format**:
```
<type>(<scope>): <subject>

[optional body]

[optional footer]
```

**Types**:
- `feat` - New content/feature
- `fix` - Bug fixes, broken links
- `docs` - Documentation improvements
- `content` - Content updates
- `refactor` - Restructuring
- `test` - Test/validation updates
- `chore` - Maintenance tasks

**Scopes**:
- `home` - Home screen
- `reservations` - Reservations screen
- `shop` - Shop screen
- `business` - Business screen
- `trainer` - Trainer screen
- `profile` - Profile screen
- `common` - Common topics
- `troubleshooting` - Troubleshooting

**Examples**:
```bash
git commit -m "feat(home): add facility search guide"
git commit -m "fix(business): update TPay configuration screenshots"
git commit -m "content(reservations): clarify cancellation policy"
git commit -m "docs: improve contributing guidelines"
```

### 6. Push to Your Fork

```bash
git push origin feature/home-search-guide
```

### 7. Create Pull Request

1. Go to your fork on GitHub
2. Click "Compare & pull request"
3. Fill in PR template (see below)
4. Submit pull request

---

## Pull Request Process

### PR Template

When creating a PR, provide:

```markdown
## Description
Brief description of what this PR adds/changes

## Type of Change
- [ ] New content (feature)
- [ ] Bug fix (broken link, incorrect info)
- [ ] Content update
- [ ] Documentation improvement

## Screen
- [ ] Home
- [ ] Reservations
- [ ] Shop
- [ ] Business
- [ ] Trainer
- [ ] Profile
- [ ] Common
- [ ] Troubleshooting

## Checklist
- [ ] Followed content guidelines
- [ ] Added/updated screenshots
- [ ] Validated markdown (`npm run validate`)
- [ ] Checked links (`npm run check-links`)
- [ ] Checked images (`npm run check-images`)
- [ ] Tested steps myself
- [ ] Updated related content
- [ ] Added cross-references

## Screenshots (if applicable)
[Add screenshots here]

## Related Issues
Closes #123
```

### PR Review Checklist

Reviewers will check:

- [ ] **Content quality**
  - Clear and helpful
  - Correct Polish grammar
  - Appropriate tone
  - Complete information

- [ ] **Technical accuracy**
  - Steps are correct
  - Screenshots match current app
  - Links work
  - No outdated information

- [ ] **Formatting**
  - Follows template
  - Proper markdown
  - Consistent style
  - Proper headings

- [ ] **Images**
  - Relevant screenshots
  - Proper size (< 500KB)
  - Good quality
  - Properly referenced

- [ ] **Structure**
  - Correct location
  - Proper naming
  - Cross-references added
  - README updated

### Addressing Review Comments

1. **Read feedback carefully**
2. **Ask questions** if unclear
3. **Make requested changes**
4. **Push updates** to same branch
5. **Respond to comments** when done
6. **Request re-review**

```bash
# Make changes based on feedback
# ... edit files ...

# Commit updates
git add .
git commit -m "fix: address review comments"
git push origin feature/home-search-guide
```

### Merging

Once approved:
- Maintainer will merge PR
- Branch will be deleted
- Content goes live
- You'll be credited as contributor

---

## Content Standards

### Quality Requirements

All content must meet these standards:

#### 1. Accuracy
- [ ] Steps are correct and tested
- [ ] Screenshots are current
- [ ] Links work
- [ ] Information is up-to-date

#### 2. Clarity
- [ ] Easy to understand
- [ ] Simple language
- [ ] Well-structured
- [ ] Scannable

#### 3. Completeness
- [ ] All steps included
- [ ] Prerequisites listed
- [ ] Troubleshooting added
- [ ] Related topics linked

#### 4. Consistency
- [ ] Follows templates
- [ ] Uses standard terminology
- [ ] Matches app UI text
- [ ] Consistent style

### Common Mistakes

Avoid these common issues:

❌ **Don't**:
- Skip validation tests
- Use personal data in screenshots
- Copy content from other sources
- Include outdated screenshots
- Write huge paragraphs
- Use absolute links
- Modify main monorepo

✅ **Do**:
- Run `npm test` before committing
- Use anonymous data in examples
- Write original content
- Take fresh screenshots
- Break into small chunks
- Use relative links
- Only reference monorepo

---

## Review Process

### Review Timeline

- **Initial review**: Within 3 business days
- **Follow-up reviews**: Within 2 business days
- **Merge**: After approval + passing CI

### Review Criteria

Reviewers evaluate:

1. **Content Quality** (40%)
   - Helpful and clear
   - Correct information
   - Good examples

2. **Technical Accuracy** (30%)
   - Steps work correctly
   - Screenshots match app
   - Links are valid

3. **Formatting** (20%)
   - Follows guidelines
   - Proper structure
   - Consistent style

4. **Completeness** (10%)
   - All sections present
   - Cross-references added
   - Validation passed

### Approval Process

- **1 approval required** for small changes
- **2 approvals required** for major changes
- **Maintainer approval** for structural changes

### CI Checks

All PRs must pass:
- ✅ Markdown validation
- ✅ Link checking
- ✅ Image size checking
- ✅ Style linting

---

## Types of Contributions

### 1. New Content

**What**: Adding new guides, features, troubleshooting

**Process**:
1. Check if topic already exists
2. Create feature branch
3. Write content using template
4. Add screenshots
5. Validate
6. Submit PR

**Priority**:
- High: Core user flows (search, book, manage)
- Medium: Secondary features (shop, trainer)
- Low: Advanced topics (KSeF, child businesses)

### 2. Content Updates

**What**: Improving existing content

**Process**:
1. Find content to update
2. Create branch
3. Make improvements
4. Update screenshots if needed
5. Validate
6. Submit PR

**When to update**:
- App UI changes
- New features added
- User feedback
- Clarity improvements

### 3. Bug Fixes

**What**: Fixing errors, broken links, typos

**Process**:
1. Create fix branch
2. Fix issue
3. Validate
4. Submit PR

**Examples**:
- Broken links
- Incorrect steps
- Outdated screenshots
- Grammar errors

### 4. Translations

**What**: Adding English translations (future)

**Process**:
1. Create translation branch
2. Translate content
3. Maintain structure
4. Submit PR

**Not yet supported** - coming in Phase 4

---

## Best Practices

### Content Creation

1. **Research first**: Check app implementation
2. **Plan structure**: Outline before writing
3. **Write clearly**: Simple, direct language
4. **Add visuals**: Screenshots for clarity
5. **Test thoroughly**: Follow your own steps
6. **Cross-reference**: Link related topics
7. **Validate always**: Run all checks

### Git Workflow

1. **Sync often**: Pull upstream regularly
2. **Small commits**: Logical, focused changes
3. **Good messages**: Descriptive commits
4. **One PR per topic**: Don't mix concerns
5. **Clean history**: Rebase if needed
6. **Respond promptly**: Address reviews quickly

### Collaboration

1. **Be respectful**: Kind, constructive feedback
2. **Be responsive**: Reply to comments
3. **Be patient**: Reviews take time
4. **Be helpful**: Support others
5. **Ask questions**: If unclear, ask

---

## Getting Help

### Resources

- **Documentation**: Read all MD files in root
- **Examples**: Look at existing content
- **Templates**: Use provided templates
- **Guidelines**: Follow CONTENT_GUIDELINES.md

### Questions

**Before asking**:
1. Read documentation thoroughly
2. Search existing issues/PRs
3. Check if question already answered

**How to ask**:
1. **GitHub Issues**: For bugs, features
2. **PR Comments**: For review questions
3. **Discussions**: For general questions

**What to include**:
- Clear description
- Relevant context
- What you've tried
- Code/content samples
- Error messages

---

## Recognition

### Contributors

All contributors are:
- Listed in CONTRIBUTORS.md
- Credited in commit history
- Mentioned in release notes
- Appreciated by community

### Types of Contributions

We value all contributions:
- ✍️ Writing new content
- 🔧 Fixing issues
- 📸 Adding screenshots
- 🔍 Reviewing PRs
- 💡 Suggesting improvements
- 🐛 Reporting bugs
- 📚 Improving documentation

---

## License

By contributing, you agree that your contributions will be licensed under the same license as this repository.

---

## Contact

- **Issues**: [GitHub Issues](https://github.com/your-org/spotto-help/issues)
- **Pull Requests**: [GitHub PRs](https://github.com/your-org/spotto-help/pulls)
- **Discussions**: [GitHub Discussions](https://github.com/your-org/spotto-help/discussions)

---

**Thank you for contributing to Spotto Help!** 🎉

Your efforts help thousands of users understand and effectively use the Spotto platform.

---

**Last Updated**: 2026-03-17
**Version**: 1.0.0
**Maintainer**: Spotto Development Team
