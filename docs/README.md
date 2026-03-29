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
| Home | 5 | 5 | ✅ | 🟢 Complete |
| Reservations | 4 | 3 | ✅ | 🟢 Complete |
| Shop | 5 | 4 | ✅ | 🟢 Complete |
| Business | 9 | 9 | ✅ | 🟢 Complete |
| Trainer | 5 | 4 | ✅ | 🟢 Complete |
| Profile | 5 | 3 | ✅ | 🟢 Complete |
| Troubleshooting | 9 | : | : | 🟢 Complete |

**Legend**:
- 🔴 Not Started - No content yet
- 🟡 In Progress - Some content exists
- 🟢 Complete - All core content done

---

## Contributing

Read the [Contributing Guide](../CONTRIBUTING.md) for:
- Development workflow
- Content standards
- Pull request process
- Code review guidelines

---

**Last Updated**: 2026-03-29
**Maintainer**: Spotto Development Team
