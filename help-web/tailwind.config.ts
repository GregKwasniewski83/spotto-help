import type { Config } from 'tailwindcss';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e3f2fd',
          100: '#bbdefb',
          200: '#90caf9',
          300: '#64b5f6',
          400: '#42a5f5',
          500: '#1E88E5',  // Main blue (matching mobile app)
          600: '#1976D2',
          700: '#1565C0',
          800: '#0d47a1',
          900: '#0a3a85'
        },
        accent: {
          50: '#fff3e0',
          100: '#ffe0b2',
          200: '#ffcc80',
          300: '#ffb74d',
          400: '#ffa726',
          500: '#FFA726',  // Orange accent
          600: '#fb8c00',
          700: '#f57c00',
          800: '#ef6c00',
          900: '#e65100'
        },
        background: {
          DEFAULT: '#F9FAFB',
          dark: '#1a1a1a'
        }
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#1f2937',
            a: {
              color: '#1E88E5',
              '&:hover': {
                color: '#1565C0',
              },
            },
            'code::before': {
              content: '""'
            },
            'code::after': {
              content: '""'
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} satisfies Config;
