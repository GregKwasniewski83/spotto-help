import type { Config } from 'tailwindcss';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Spotto design system (source: packages/mobile/constants/Colors.ts)
        primary: {
          50: '#eef0f7',
          100: '#d3d8eb',
          200: '#a8b1d6',
          300: '#7c8ac1',
          400: '#5f70b6',
          500: '#4d63ac',  // brand primary
          600: '#3f5391',
          700: '#35435d',  // primaryLight (dark accent)
          800: '#293450',
          900: '#1e2638'
        },
        accent: {
          50: '#ffece5',
          100: '#ffcdb8',
          200: '#ffae8a',
          300: '#ff8e5c',
          400: '#ff762f',
          500: '#ff5622',  // accent CTA
          600: '#e64718',
          700: '#bf3812',
          800: '#982a0d',
          900: '#721d08'
        },
        dark: {
          DEFAULT: '#23262B',
          50: '#3a3f47',
          100: '#33373e',
          900: '#1a1d21'
        },
        spotto: {
          background: '#F0F4F7',
          card: '#FFFFFF',
          border: '#E5E7EB',
          book: '#5FA78A',
          success: '#5FA78A',
          warning: '#ff5622',
          error: '#006A7A',
          unavailable: '#c06f57'
        }
      },
      fontFamily: {
        brand: ['Poppins', 'system-ui', 'sans-serif'],
        body: ['Roboto', 'system-ui', 'sans-serif'],
        sans: ['Roboto', 'system-ui', 'sans-serif']
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#23262B',
            a: {
              color: '#4d63ac',
              '&:hover': {
                color: '#35435d',
              },
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} satisfies Config;
