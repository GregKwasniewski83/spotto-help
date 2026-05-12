# Help-web → Spotto Design System Migration Plan

Source of truth: `../spotto-monorepo/packages/mobile/constants/Colors.ts` and `packages/mobile/app/(auth)/welcome.tsx`.

## Brand identity

**Logo**
- File: `packages/mobile/assets/images/spotto-logo.png`
- Render: round (`borderRadius: 50%`), soft shadow `#35435d` (primaryLight)

**Wordmark "SPOTTO"**
- Split: `SPOT` + `TO`
- `SPOT`: Poppins-ExtraLight (weight 100), white
- `TO`: Poppins-Black (weight 900), `#ff5622` (accent)
- letterSpacing ~10 (relative), text-shadow on dark bg

**Tagline**
- "Schedule • Sport • Progress"
- Poppins-Light, uppercase, letterSpacing 3, color `#4d63ac` (primary)

**Fonts**
- Headings/brand: Poppins (ExtraLight / Light / Black)
- Body: Roboto (Helvetica Neue iOS fallback → system-ui on web)

## Color tokens

| Token | Hex | Use |
|---|---|---|
| `primary` | `#4d63ac` | brand, links, primary buttons |
| `primaryLight` | `#35435d` | accents, shadows |
| `accent` | `#ff5622` | CTA, "TO" wordmark |
| `dark` | `#23262B` | header, dark text |
| `background` | `#F0F4F7` | page bg |
| `card` | `#FFFFFF` | cards |
| `border` | `#E5E7EB` | borders |
| `bookButton` (success) | `#5FA78A` | success badges |
| `unavailable` | `#c06f57` | disabled/blocked |
| `error` | `#006A7A` | errors |

## Execution steps

1. **Tokens & fonts** — rewrite `tailwind.config.ts` palette; install `@fontsource/poppins` + `@fontsource/roboto`; wire in `index.css`; update `body` bg + `::selection`.
2. **Header** — round logo, SPOT/TO wordmark, tagline, Poppins; replace `bg-[#23262B]` hardcode with `bg-dark` token; align toolbar height.
3. **Sidebar** — recolor active state with new primary; fix `top-16` vs `h-14`+breadcrumbs offset.
4. **Footer** — recolor.
5. **HomePage** — fix white-on-white search input bug; replace `bg-green-50` with `bookButton`; restyle hero w/ Poppins.
6. **MarkdownRenderer / prose** — link color → primary; code block theme.
7. **Status badges + spinner + skeleton** — semantic colors.
8. **SearchBar / Modal** — focus ring.
9. **Dashboard** — chart colors.
10. **`index.html`** — favicon, `theme-color`, `<title>`.
11. **Cleanup** — drop dead `[data-theme="dark"]` block (or implement); export theme tokens for inline-style use (Tailwind v4 gotcha).

## Notes
- Tailwind v4 gotcha: classes don't apply in this project — use inline styles or `style={{...}}` with tokens from `src/lib/theme.ts`.
- Vite HMR doesn't work on WSL2 — restart dev server after changes.
