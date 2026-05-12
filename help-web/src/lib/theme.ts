/**
 * Spotto design tokens — single source of truth.
 * Mirrors packages/mobile/constants/Colors.ts from spotto-monorepo.
 * Use these for inline styles (Tailwind v4 classes don't apply reliably in this project).
 */

export const colors = {
  primary: '#4d63ac',
  primaryLight: '#35435d',
  accent: '#ff5622',
  dark: '#23262B',
  background: '#F0F4F7',
  backgroundSecondary: '#F9FAFB',
  card: '#FFFFFF',
  border: '#E5E7EB',
  bookButton: '#5FA78A',
  success: '#5FA78A',
  warning: '#ff5622',
  error: '#006A7A',
  unavailable: '#c06f57',
  textPrimary: '#23262B',
  textSecondary: '#35435d',
  textLight: '#F0F4F7',
  white: '#FFFFFF',
  black: '#23262B',
} as const;

export const fonts = {
  // Brand display — mirrors spotto.pl (font-display)
  display: '"Avenir Next", "SF Pro Display", "Helvetica Neue", system-ui, -apple-system, sans-serif',
  brand: '"Poppins", system-ui, sans-serif',
  body: '"Roboto", system-ui, sans-serif',
  mono: '"SF Mono", "Courier New", ui-monospace, monospace',
} as const;

export const radii = {
  sm: '6px',
  md: '10px',
  lg: '16px',
  pill: '9999px',
} as const;

export const shadows = {
  card: '0 1px 2px rgba(35, 38, 43, 0.06), 0 1px 3px rgba(35, 38, 43, 0.08)',
  logo: '0 20px 25px rgba(53, 67, 93, 0.4)',
} as const;
