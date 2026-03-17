# Spotto Help Documentation

Welcome to the Spotto help documentation! This directory contains all user-facing help content organized by application screen.

## Quick Navigation

### Main Screens

- **[Home](./home/)** - Search facilities, browse categories, view favorites
- **[Reservations](./reservations/)** - View and manage your bookings
- **[Shop](./shop/)** - Browse and purchase products
- **[Business](./business/)** - Manage your business profile and facilities
- **[Trainer](./trainer/)** - Create and manage trainings
- **[Profile](./profile/)** - Account settings and privacy

### Additional Resources

- **[Common Topics](./common/)** - Getting started, navigation, glossary
- **[Troubleshooting](./troubleshooting/)** - Solutions to common problems

---

## For Content Creators

### Creating New Content

1. **Choose the right screen directory**
2. **Use the appropriate template**:
   - `how-to-*.md` for step-by-step guides
   - `features/*.md` for feature explanations
   - `faq.md` for quick Q&A
3. **Follow the [Content Guidelines](../CONTENT_GUIDELINES.md)**
4. **Add screenshots** to `assets/images/{screen}/`
5. **Validate** before committing: `npm test`

### Directory Structure

Each screen directory contains:
```
{screen}/
├── README.md          # Screen overview
├── how-to-*.md       # Action guides
├── features/         # Feature explanations
│   └── *.md
└── faq.md            # Quick answers
```

### Templates

See [CONTENT_GUIDELINES.md](../CONTENT_GUIDELINES.md#document-structure) for:
- How-to guide template
- Feature explanation template
- Troubleshooting template
- FAQ template

---

## Status

### Coverage Progress

| Screen | Guides | Features | FAQ | Status |
|--------|--------|----------|-----|--------|
| Home | 0 | 0 | ❌ | 🔴 Not Started |
| Reservations | 0 | 0 | ❌ | 🔴 Not Started |
| Shop | 0 | 0 | ❌ | 🔴 Not Started |
| Business | 0 | 0 | ❌ | 🔴 Not Started |
| Trainer | 0 | 0 | ❌ | 🔴 Not Started |
| Profile | 0 | 0 | ❌ | 🔴 Not Started |
| Common | 0 | 0 | ❌ | 🔴 Not Started |
| Troubleshooting | 0 | 0 | ❌ | 🔴 Not Started |

**Legend**:
- 🔴 Not Started - No content yet
- 🟡 In Progress - Some content exists
- 🟢 Complete - All core content done

---

## Quick Links

### Most Needed Content (Priority)

1. **Home Screen**:
   - How to search for facilities
   - How to browse categories
   - How to book from search results

2. **Business Screen**:
   - How to create business profile
   - How to add facilities
   - How to set up TPay
   - How to manage schedule

3. **Reservations Screen**:
   - How to view bookings
   - How to cancel reservation
   - Understanding booking status

### Next Priority

4. **Shop Screen**: Product types, purchasing
5. **Trainer Screen**: Creating trainings, associations
6. **Profile Screen**: Settings, privacy

---

## Contributing

Read the [Contributing Guide](../CONTRIBUTING.md) for:
- Development workflow
- Content standards
- Pull request process
- Code review guidelines

---

**Last Updated**: 2026-03-17
**Maintainer**: Spotto Development Team
