# Content Writing Guidelines

This document defines the standards, style, and best practices for creating help content in the Spotto Help repository.

## Table of Contents

1. [Writing Principles](#writing-principles)
2. [Language & Tone](#language--tone)
3. [Document Structure](#document-structure)
4. [Formatting Standards](#formatting-standards)
5. [Screenshot Guidelines](#screenshot-guidelines)
6. [Link Management](#link-management)
7. [Content Types](#content-types)
8. [Quality Checklist](#quality-checklist)

---

## Writing Principles

### 1. User-First Approach
- **Write for the user**, not for developers
- **Assume minimal technical knowledge**
- **Focus on tasks**, not features
- **Provide context** before instructions

### 2. Clarity & Simplicity
- Use **simple, everyday Polish**
- **Short sentences** (max 20 words)
- **Short paragraphs** (max 3-4 sentences)
- **Active voice** over passive
- **Present tense** for actions

### 3. Scannability
- Use **headings and subheadings**
- Use **bulleted lists** for options
- Use **numbered lists** for steps
- **Bold key terms** sparingly
- **Break up long text** with visuals

### 4. Accuracy
- **Test every step** before publishing
- **Match exact UI text** from app
- **Update when app changes**
- **Verify links work**
- **Check screenshots are current**

---

## Language & Tone

### Voice Characteristics

**Friendly** - Like a helpful colleague, not a robot
- ✅ "Wybierz kategorię która Cię interesuje"
- ❌ "Użytkownik powinien wybrać odpowiednią kategorię"

**Professional** - Knowledgeable but not condescending
- ✅ "Podaj swój NIP aby utworzyć profil firmy"
- ❌ "Przecież każda firma ma NIP, wpisz go"

**Clear** - Straightforward, no jargon
- ✅ "Kliknij 'Zapisz' aby zapisać zmiany"
- ❌ "Zainicjuj proces persystencji poprzez aktywację kontrolki"

**Helpful** - Supportive, solution-oriented
- ✅ "Jeśli nie widzisz swojego miasta, spróbuj wpisać kod pocztowy"
- ❌ "Twoje miasto nie jest obsługiwane"

### Word Choice

**Use**:
- "możesz" (you can)
- "spróbuj" (try)
- "sprawdź" (check)
- "wybierz" (choose/select)
- "kliknij" (tap/click)

**Avoid**:
- "musisz" (you must) - too demanding
- "nigdy nie" (never) - too absolute
- "oczywiście" (obviously) - condescending
- "po prostu" (just/simply) - minimizes difficulty
- Technical jargon

### Grammar

**Polish Language Rules**:
- Use formal "Pan/Pani" sparingly, prefer "Ty" form
- Proper noun capitalization
- Correct verb conjugation
- Proper diacritics (ą, ć, ę, ł, ń, ó, ś, ź, ż)

---

## Document Structure

### Standard Document Template

```markdown
# [Clear, Action-Oriented Title]

**Ekran**: [Home / Rezerwacje / Sklep / Biznes / Trener / Profil]
**Rola**: [Gracz / Właściciel firmy / Trener / Wszystkie]
**Wymagania**: [List prerequisites, or "Brak"]
**Trudność**: [Łatwa / Średnia / Zaawansowana]

## Przegląd

[1-2 sentence overview explaining what this guide covers and why it's useful]

## Zanim zaczniesz

[Prerequisites, requirements, or preparation needed]
- Punkt 1
- Punkt 2

## Kroki

### Krok 1: [Action verb]

[Clear description of what to do]

![Opis zrzutu ekranu](../../assets/images/screen/step1.png)

**Wskazówka**: [Helpful tip if applicable]

**Uwaga**: [Warning or important note if applicable]

### Krok 2: [Action verb]

[Clear description of what to do]

## Weryfikacja

[How to verify the action was successful]

## Rozwiązywanie problemów

### Problem: [Common issue]
**Rozwiązanie**: [How to fix it]

### Problem: [Another issue]
**Rozwiązanie**: [How to fix it]

## Powiązane tematy

- [Link do powiązanego przewodnika](./related-guide.md)
- [Link do funkcji](./features/feature.md)

## Potrzebujesz więcej pomocy?

Jeśli nadal masz problem, [skontaktuj się z pomocą techniczną](../common/contact-support.md).

---

**Ostatnia aktualizacja**: 2026-03-17
**Dotyczy wersji**: 1.0.0+
```

### Title Guidelines

**Good Titles** (Action-Oriented):
- ✅ "Jak wyszukać obiekt sportowy"
- ✅ "Jak anulować rezerwację"
- ✅ "Jak utworzyć profil firmy"

**Bad Titles** (Feature-Oriented):
- ❌ "Wyszukiwanie obiektów"
- ❌ "Anulowanie rezerwacji"
- ❌ "Profil firmy"

### Heading Hierarchy

```markdown
# H1 - Document Title (only one per file)
## H2 - Main Sections
### H3 - Subsections
#### H4 - Sub-subsections (use sparingly)
```

**Never skip levels**: H1 → H2 → H3 (not H1 → H3)

---

## Formatting Standards

### Text Formatting

**Bold** - Use for:
- UI elements: **Zapisz**, **Anuluj**, **+ Dodaj**
- Emphasis: **ważne**, **uwaga**
- First mention of key term

**Italic** - Use for:
- Placeholder text: *Wpisz nazwę miasta*
- Book/document titles: *Regulamin*
- Minimal use overall

**Code** - Use for:
- Technical values: `NIP: 1234567890`
- Status codes: `HTTP 404`
- File paths: `/docs/home/`
- Minimal use in user docs

### Lists

**Numbered Lists** - Use for:
- Sequential steps
- Procedures with order
- Prioritized items

```markdown
1. Otwórz aplikację
2. Kliknij "Start"
3. Wybierz kategorię
```

**Bulleted Lists** - Use for:
- Options
- Features
- Non-sequential items

```markdown
- Dostępne kategorie:
  - Strzelectwo
  - Squash
  - Siłownia
```

### Callout Boxes

Use blockquotes for tips, warnings, and notes:

```markdown
> **Wskazówka**: Zapisz zmiany przed przejściem dalej.

> **Uwaga**: Ta operacja jest nieodwracalna.

> **Ważne**: Wymagane jest konto biznesowe.
```

### Tables

Use for comparison or reference data:

```markdown
| Typ produktu | Ważność | Liczba użyć |
|--------------|---------|-------------|
| Karnet jednorazowy | 30 dni | 1 |
| Karnet wielorazowy | 90 dni | 10 |
| Abonament | Miesięczny | Nielimitowane |
```

---

## Screenshot Guidelines

### When to Include Screenshots

**Always include for**:
- Visual UI steps
- Form filling
- Button locations
- Complex screens
- Settings configuration

**Skip screenshots for**:
- Simple text descriptions
- Common actions (login)
- Repetitive steps

### Screenshot Standards

#### Quality Requirements

- **Resolution**: Minimum 1080x1920 (phone screenshot)
- **Format**: PNG (not JPG)
- **Size**: Maximum 500KB per image
- **Clarity**: Sharp, not blurry
- **Orientation**: Portrait for mobile
- **Device**: Use actual device, not simulator

#### Composition

- **Crop**: Show only relevant area
- **Context**: Include enough for orientation
- **Clean**: No personal data
- **Consistent**: Same device/theme
- **Annotations**: Use arrows, circles if helpful

#### Naming Convention

```
{screen}-{feature}-{step}.png

Examples:
home-search-empty.png
home-search-results.png
business-profile-form.png
reservations-cancel-dialog.png
```

#### Storage Location

```
assets/images/{screen}/
  ├── home-search-empty.png
  ├── home-search-results.png
  └── home-category-carousel.png
```

#### Markdown Reference

```markdown
![Ekran wyszukiwania z wynikami](../../assets/images/home/home-search-results.png)
*Ekran wyszukiwania pokazujący znalezione obiekty sportowe*
```

### Screenshot Maintenance

- **Check monthly** for UI changes
- **Retake** when app updates
- **Remove** obsolete screenshots
- **Update captions** if needed

---

## Link Management

### Internal Links

**Relative paths** (always use these):
```markdown
[Powiązany przewodnik](./related-guide.md)
[Funkcja](./features/feature.md)
[Nadrzędny folder](../parent/guide.md)
```

**Absolute paths** (never use):
```markdown
❌ [Guide](/docs/home/guide.md)
```

### Link Text

**Good** (descriptive):
- ✅ [Dowiedz się więcej o kategoriach sportowych](./features/categories.md)
- ✅ [Zobacz przewodnik po rezerwacjach](../reservations/how-to-book.md)

**Bad** (generic):
- ❌ [Kliknij tutaj](./guide.md)
- ❌ [Zobacz więcej](./page.md)

### Link Validation

Run before committing:
```bash
npm run check-links
```

---

## Content Types

### 1. How-To Guides

**Purpose**: Step-by-step instructions
**Structure**: Problem → Solution → Verification
**File naming**: `how-to-{action}.md`

**Example topics**:
- Jak wyszukać obiekt sportowy
- Jak anulować rezerwację
- Jak utworzyć profil firmy

### 2. Feature Explanations

**Purpose**: Explain what and why
**Structure**: Overview → Details → Use Cases
**File naming**: `features/{feature-name}.md`

**Example topics**:
- Integracja TPay
- Zarządzanie grafikiem
- Powiązania z trenerami

### 3. Troubleshooting

**Purpose**: Solve common problems
**Structure**: Problem → Cause → Solution
**File naming**: `troubleshooting/{category}/{problem}.md`

**Example topics**:
- Nieudana płatność
- Nie można anulować rezerwacji
- Problem z logowaniem

### 4. FAQs

**Purpose**: Quick answers to common questions
**Structure**: Q&A format
**File naming**: `faq.md` (per screen)

**Example format**:
```markdown
## Pytania i odpowiedzi

### Czy mogę zmienić datę rezerwacji?
Nie, zmiana daty nie jest obecnie możliwa. Musisz anulować rezerwację i utworzyć nową.

### Jak długo czekam na zwrot pieniędzy?
Zwrot następuje w ciągu 3-5 dni roboczych na kartę użytą do płatności.
```

---

## Quality Checklist

### Before Committing

- [ ] **Title is clear and action-oriented**
- [ ] **Metadata complete** (screen, role, difficulty)
- [ ] **Overview paragraph present**
- [ ] **Steps are numbered and clear**
- [ ] **Screenshots included** for visual steps
- [ ] **Screenshots < 500KB each**
- [ ] **All links work** (run `npm run check-links`)
- [ ] **Polish grammar correct**
- [ ] **No personal data in screenshots**
- [ ] **Troubleshooting section included**
- [ ] **Related topics linked**
- [ ] **Last updated date set**
- [ ] **App version specified**

### Content Review

- [ ] **Tested steps myself**
- [ ] **Matches current app version**
- [ ] **UI text matches exactly**
- [ ] **No broken links**
- [ ] **No placeholder text**
- [ ] **Consistent terminology**
- [ ] **Proper Polish diacritics**
- [ ] **Scannable structure**
- [ ] **Helpful for target user**

### Technical Validation

```bash
# Run all validation checks
npm test

# Individual checks
npm run validate        # Markdown syntax
npm run check-links     # Broken links
npm run lint-markdown   # Style issues
npm run check-images    # Image sizes
```

---

## Common Mistakes to Avoid

### ❌ Don't

1. **Assume knowledge**: "Po prostu użyj API" → Explain what and how
2. **Use jargon**: "Wysyłamy request do endpointu" → Use plain language
3. **Skip steps**: "Zapisz profil" → Explain where button is
4. **Write for developers**: Technical implementation details
5. **Include outdated screenshots**: Always use latest app version
6. **Write huge paragraphs**: Break into smaller chunks
7. **Forget cross-references**: Link to related content
8. **Use absolute paths**: Always use relative links
9. **Include sensitive data**: No real emails, NIPs, names
10. **Skip validation**: Always run `npm test` before committing

### ✅ Do

1. **Test everything**: Follow your own guide
2. **Use actual app text**: Match UI exactly
3. **Add context**: Explain why, not just how
4. **Include visuals**: Screenshots for clarity
5. **Cross-reference**: Link related topics
6. **Keep updated**: Review monthly
7. **Write simply**: Clear Polish
8. **Structure well**: Headings, lists, sections
9. **Validate**: Run checks before commit
10. **Get feedback**: Ask others to review

---

## Style Examples

### Good vs Bad Examples

#### Example 1: Instructions

**Bad** ❌:
```markdown
Kliknij przycisk aby zapisać.
```

**Good** ✅:
```markdown
Kliknij przycisk **Zapisz** w prawym górnym rogu ekranu.
```

#### Example 2: Troubleshooting

**Bad** ❌:
```markdown
Nie działa? Spróbuj ponownie.
```

**Good** ✅:
```markdown
### Problem: Płatność nie przechodzi

**Rozwiązanie**:
1. Sprawdź czy masz wystarczające środki na karcie
2. Upewnij się że dane karty są poprawne
3. Spróbuj inną metodę płatności
4. Jeśli problem się powtarza, [skontaktuj się z pomocą](../common/support.md)
```

#### Example 3: Feature Description

**Bad** ❌:
```markdown
TPay to system płatności który pozwala przetwarzać transakcje.
```

**Good** ✅:
```markdown
## Integracja TPay

TPay to polski system płatności online który umożliwia przyjmowanie płatności od klientów za rezerwacje i produkty.

**Korzyści**:
- Szybkie płatności (BLIK, karty, przelewy)
- Automatyczne księgowanie
- Wypłaty na konto firmowe
- Wsparcie dla różnych metod płatności
```

---

## Resources

- **Polish Language**: [Wielki słownik języka polskiego](https://wsjp.pl/)
- **Grammar Check**: [LanguageTool](https://languagetool.org/)
- **Screenshot Tools**: Built-in device screenshot
- **Image Compression**: [TinyPNG](https://tinypng.com/)
- **Markdown Guide**: [Markdown Guide](https://www.markdownguide.org/)

---

**Last Updated**: 2026-03-17
**Version**: 1.0.0
**Maintainer**: Spotto Development Team
