# CLAUDE.md - Spotto Help Repository

This file provides guidance to Claude Code (AI assistant) when working with the Spotto Help documentation repository.

## Project Overview

**Spotto Help Repository** is a user-facing documentation project containing help articles, guides, and troubleshooting content for the Spotto mobile application. Content is organized by application screens to provide contextual, searchable help.

- **Purpose**: User help & documentation
- **Audience**: End users (not developers)
- **Language**: Polish (primary)
- **Format**: Markdown files with screenshots
- **Integration**: Will be consumed by mobile app's help system

## Repository Context

### Sibling Repository Structure

This repository works **alongside** the main Spotto monorepo:

```
parent-folder/
├── spotto-monorepo/          # Main application (REFERENCE ONLY)
│   ├── packages/
│   │   ├── mobile/          # React Native app
│   │   ├── api/             # .NET API
│   │   └── web/             # React web app
│   └── docs/
└── spotto-help/              # This repository (WORKING DIRECTORY)
    ├── docs/
    ├── assets/
    └── scripts/
```

### **CRITICAL RULES** ⚠️

1. **NEVER modify files in `../spotto-monorepo/`**
   - Use monorepo for **reference only**
   - Read code to understand features
   - Check UI components for accuracy
   - But **NEVER** edit, commit, or push changes there

2. **ALWAYS create feature branches**
   ```bash
   git checkout -b feature/home-search-guide
   # NOT: git commit -m "..." on main
   ```

3. **Validate before committing**
   ```bash
   npm run validate
   npm run check-links
   ```

## Common Commands

### Repository Setup
```bash
# Initial clone (done once)
cd parent-folder
git clone <spotto-help-repo-url>
cd spotto-help
npm install

# Ensure main monorepo exists for reference
cd ..
git clone <spotto-monorepo-url>  # If not already cloned
cd spotto-help
```

### Development Workflow
```bash
# Start new feature
git checkout main
git pull
git checkout -b feature/reservations-cancel-guide

# Work on content
# ... edit files ...

# Validate
npm run validate
npm run check-links

# Commit
git add .
git commit -m "feat(reservations): add cancellation guide with screenshots"
git push origin feature/reservations-cancel-guide

# Create PR on GitHub
```

### Content Validation
```bash
# Validate all markdown
npm run validate

# Check broken links
npm run check-links

# Lint markdown
npm run lint-markdown

# Check image sizes (max 500KB)
npm run check-images

# Run all checks
npm test
```

## File Organization

### Documentation Structure

```
docs/
├── home/
│   ├── README.md                    # Home screen overview
│   ├── how-to-search-facilities.md
│   ├── how-to-book-facility.md
│   ├── how-to-manage-favorites.md
│   ├── features/
│   │   ├── category-search.md
│   │   ├── map-view.md
│   │   └── nearby-facilities.md
│   └── faq.md
├── reservations/
│   ├── README.md                    # Reservations screen overview
│   ├── how-to-view-bookings.md
│   ├── how-to-cancel-booking.md
│   ├── how-to-reschedule.md
│   ├── features/
│   │   ├── partial-cancellation.md
│   │   ├── refund-policy.md
│   │   └── booking-status.md
│   └── faq.md
├── shop/
│   ├── README.md
│   ├── how-to-buy-pass.md
│   ├── how-to-use-membership.md
│   ├── features/
│   │   ├── product-types.md
│   │   └── payment-methods.md
│   └── faq.md
├── business/
│   ├── README.md                    # Business/Manage screen overview
│   ├── how-to-create-profile.md
│   ├── how-to-add-facility.md
│   ├── how-to-manage-schedule.md
│   ├── how-to-setup-tpay.md
│   ├── how-to-add-agents.md
│   ├── features/
│   │   ├── business-profile.md
│   │   ├── facility-management.md
│   │   ├── tpay-integration.md
│   │   ├── ksef-integration.md
│   │   ├── agent-management.md
│   │   ├── trainer-associations.md
│   │   ├── child-businesses.md
│   │   └── products.md
│   └── faq.md
├── trainer/
│   ├── README.md                    # Trainer screen overview
│   ├── how-to-create-trainer-profile.md
│   ├── how-to-create-training.md
│   ├── how-to-associate-with-business.md
│   ├── features/
│   │   ├── trainer-profile.md
│   │   ├── training-management.md
│   │   └── business-associations.md
│   └── faq.md
├── profile/
│   ├── README.md                    # Profile screen overview
│   ├── how-to-edit-profile.md
│   ├── how-to-change-password.md
│   ├── how-to-manage-privacy.md
│   ├── features/
│   │   ├── account-settings.md
│   │   ├── privacy-settings.md
│   │   └── role-management.md
│   └── faq.md
├── common/
│   ├── getting-started.md
│   ├── account-creation.md
│   ├── navigation.md
│   ├── search-tips.md
│   └── glossary.md
└── troubleshooting/
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

### Asset Organization

```
assets/
├── images/
│   ├── home/
│   │   ├── home-screen-overview.png
│   │   ├── search-facilities.png
│   │   └── category-selection.png
│   ├── reservations/
│   │   ├── reservation-list.png
│   │   ├── cancel-booking.png
│   │   └── booking-details.png
│   ├── business/
│   │   ├── business-profile.png
│   │   ├── facility-form.png
│   │   ├── tpay-config.png
│   │   └── agent-management.png
│   └── ...
└── videos/
    ├── video-links.md              # YouTube/Vimeo links
    └── thumbnails/
```

## Content Creation Guidelines

### When Creating New Help Content

1. **Research the feature** in main monorepo:
   ```bash
   # Read mobile app code for reference
   cd ../spotto-monorepo/packages/mobile

   # Find relevant screen
   cat app/(tabs)/manage.tsx
   cat components/manage/BusinessProfileForm.tsx

   # Return to help repo
   cd ../../spotto-help
   ```

2. **Create feature branch**:
   ```bash
   git checkout -b feature/business-tpay-setup
   ```

3. **Write content** following template:
   - Start with clear title and description
   - Include prerequisites (if any)
   - Write step-by-step instructions
   - Add screenshots for visual steps
   - Include troubleshooting tips
   - Link to related articles

4. **Add screenshot**:
   - Take screenshot from actual app
   - Crop to relevant area
   - Compress to < 500KB
   - Save to `assets/images/{screen}/`
   - Reference in markdown: `![Alt text](../../assets/images/business/tpay-config.png)`

5. **Validate**:
   ```bash
   npm run validate
   npm run check-links
   ```

6. **Commit and push**:
   ```bash
   git add .
   git commit -m "feat(business): add TPay configuration guide"
   git push origin feature/business-tpay-setup
   ```

### Content Template

Use this template for how-to guides:

```markdown
# How to [Action]

**Screen**: [Home / Reservations / Shop / Business / Trainer / Profile]
**Role**: [Player / Business Owner / Trainer]
**Prerequisites**: [List any requirements]
**Difficulty**: [Easy / Medium / Advanced]

## Overview

Brief description of what this guide covers and why users need it.

## Before You Start

- Requirement 1
- Requirement 2
- What you'll need

## Steps

### Step 1: [Action]

Description of step 1.

![Step 1 Screenshot](../../assets/images/screen/step1.png)

**Tip**: Helpful hint about this step.

### Step 2: [Action]

Description of step 2.

![Step 2 Screenshot](../../assets/images/screen/step2.png)

### Step 3: [Action]

Description of step 3.

## Verification

How to verify the action was successful.

## Troubleshooting

### Problem: [Common Issue]
**Solution**: How to fix it.

### Problem: [Another Issue]
**Solution**: How to fix it.

## Related Topics

- [Related Guide 1](../related/guide1.md)
- [Related Guide 2](../related/guide2.md)
- [Feature Explanation](./features/feature-name.md)

## Need More Help?

If you're still having trouble, [contact support](../common/contact-support.md).

---

**Last Updated**: 2026-03-17
**Applies to**: App Version 1.0.0+
```

## Screen-Specific Guidelines

### Home Screen (`docs/home/`)
Content about:
- Searching for facilities
- Browsing categories (Strzelectwo, Squash, etc.)
- Viewing favorites
- Map view
- Booking from search results

**Reference code**:
- `../spotto-monorepo/packages/mobile/app/(tabs)/index.tsx`
- `../spotto-monorepo/packages/mobile/components/home/`

### Reservations Screen (`docs/reservations/`)
Content about:
- Viewing upcoming bookings
- Viewing past bookings
- Canceling reservations
- Partial cancellation
- Refund policy
- Booking status

**Reference code**:
- `../spotto-monorepo/packages/mobile/app/(tabs)/reservations.tsx`
- `../spotto-monorepo/packages/mobile/components/reservations/`

### Shop Screen (`docs/shop/`)
Content about:
- Browsing products
- Product types (passes, memberships, packages)
- Purchasing products
- Viewing purchased products
- Using passes

**Reference code**:
- `../spotto-monorepo/packages/mobile/app/(tabs)/shop.tsx`
- `../spotto-monorepo/packages/mobile/components/shop/`

### Business Screen (`docs/business/`)
Content about:
- Creating business profile
- Managing facilities
- Setting up schedules
- TPay integration
- KSeF integration
- Agent management
- Trainer associations
- Child businesses
- Products

**Reference code**:
- `../spotto-monorepo/packages/mobile/app/(tabs)/manage.tsx`
- `../spotto-monorepo/packages/mobile/components/manage/`

### Trainer Screen (`docs/trainer/`)
Content about:
- Creating trainer profile
- Managing trainings
- Business associations
- Participant management
- Pricing & availability

**Reference code**:
- `../spotto-monorepo/packages/mobile/app/(tabs)/trainer.tsx`
- `../spotto-monorepo/packages/mobile/components/trainer/`

### Profile Screen (`docs/profile/`)
Content about:
- Editing profile information
- Changing password
- Privacy settings
- Role management
- Account deletion

**Reference code**:
- `../spotto-monorepo/packages/mobile/app/(tabs)/profile.tsx`
- `../spotto-monorepo/packages/mobile/app/(tabs)/settings.tsx`

## Important Patterns

### DO ✅

1. **Reference main monorepo** to ensure accuracy:
   ```bash
   # Check current implementation
   cat ../spotto-monorepo/packages/mobile/app/(tabs)/manage.tsx
   ```

2. **Create feature branches** for all work:
   ```bash
   git checkout -b feature/home-category-search
   ```

3. **Use consistent terminology**:
   - Match app UI text exactly
   - Use Polish terms from app
   - Reference `../spotto-monorepo/packages/mobile/hooks/useTranslation.ts`

4. **Add screenshots** for visual steps:
   - Real screenshots from actual app
   - Highlight important UI elements
   - Compress images < 500KB

5. **Cross-reference related content**:
   - Link to related how-to guides
   - Link to feature explanations
   - Link to troubleshooting

6. **Keep content updated**:
   - Check app version compatibility
   - Update when features change
   - Add "Last Updated" dates

### DON'T ❌

1. **Never modify main monorepo**:
   ```bash
   # ❌ WRONG
   cd ../spotto-monorepo
   git add .
   git commit -m "..."

   # ✅ RIGHT
   cd spotto-help
   git add .
   git commit -m "..."
   ```

2. **Never commit to main directly**:
   ```bash
   # ❌ WRONG
   git checkout main
   git commit -m "..."
   git push

   # ✅ RIGHT
   git checkout -b feature/new-content
   git commit -m "..."
   git push origin feature/new-content
   ```

3. **Never include sensitive info**:
   - API keys
   - Passwords
   - Internal URLs
   - Private data

4. **Never use outdated screenshots**:
   - Always use latest app version
   - Retake if UI changes
   - Check image dates

## Validation & Quality

### Before Committing

Run these checks:

```bash
# 1. Validate markdown syntax
npm run validate

# 2. Check for broken links
npm run check-links

# 3. Lint markdown
npm run lint-markdown

# 4. Check image sizes
npm run check-images

# 5. Full test suite
npm test
```

### Content Quality Checklist

- [ ] Clear, concise title
- [ ] Brief overview paragraph
- [ ] Prerequisites listed (if any)
- [ ] Step-by-step instructions
- [ ] Screenshots for visual steps
- [ ] Troubleshooting section
- [ ] Related topics linked
- [ ] Last updated date
- [ ] App version compatibility
- [ ] No broken links
- [ ] Images < 500KB
- [ ] Polish language (correct grammar)
- [ ] Consistent terminology

## Git Workflow Examples

### Example 1: Adding Business Profile Guide

```bash
# 1. Check current implementation
cd ../spotto-monorepo/packages/mobile
cat app/(tabs)/manage.tsx
cat components/manage/BusinessProfileForm.tsx

# 2. Return to help repo and create branch
cd ../../spotto-help
git checkout main
git pull
git checkout -b feature/business-profile-creation

# 3. Create content
mkdir -p docs/business
cat > docs/business/how-to-create-profile.md << 'EOF'
# Jak utworzyć profil firmy

**Ekran**: Biznes
**Rola**: Właściciel firmy
**Wymagania**: Konto użytkownika, NIP firmy
**Trudność**: Średnia

## Przegląd
Ten przewodnik pokazuje, jak utworzyć profil biznesowy...
EOF

# 4. Add screenshot
cp ~/screenshot.png assets/images/business/create-profile.png

# 5. Validate
npm run validate
npm run check-links

# 6. Commit and push
git add .
git commit -m "feat(business): add business profile creation guide with screenshots"
git push origin feature/business-profile-creation

# 7. Create PR on GitHub
```

### Example 2: Fixing Broken Link

```bash
# 1. Create fix branch
git checkout main
git pull
git checkout -b fix/business-broken-link

# 2. Fix the link
# ... edit file ...

# 3. Validate
npm run check-links

# 4. Commit
git add .
git commit -m "fix(business): correct broken link to TPay guide"
git push origin fix/business-broken-link

# 5. Create PR
```

## Testing Content

### Manual Testing

1. **Read through as a user**:
   - Does it make sense?
   - Are steps clear?
   - Are screenshots helpful?

2. **Follow your own guide**:
   - Open the actual app
   - Try to follow each step
   - Note any confusion

3. **Check links**:
   - Click every link
   - Verify they work
   - Check anchors

### Automated Testing

```bash
# Run validation suite
npm test

# Check specific aspects
npm run validate        # Markdown syntax
npm run check-links     # Broken links
npm run lint-markdown   # Style issues
npm run check-images    # Image sizes
```

## Additional Resources

- **Main App Repo**: `../spotto-monorepo/`
- **Project Structure**: [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)
- **Content Guidelines**: [CONTENT_GUIDELINES.md](./CONTENT_GUIDELINES.md)
- **Screen Breakdown**: [SCREENS.md](./SCREENS.md)
- **Contributing**: [CONTRIBUTING.md](./CONTRIBUTING.md)

## Key Takeaways

1. ✅ **Always create feature branches**
2. ❌ **Never modify main monorepo**
3. 📚 **Reference monorepo for accuracy**
4. ✍️ **Follow content templates**
5. 📸 **Include helpful screenshots**
6. 🔗 **Cross-reference related content**
7. ✅ **Validate before committing**
8. 🇵🇱 **Write in clear Polish**

---

**Last Updated**: 2026-03-17
**Repository**: spotto-help
**Maintainers**: Spotto Development Team
