/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        // Tokens semánticos basados en CSS vars (cambian con [data-theme])
        page: 'rgb(var(--page) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        'surface-2': 'rgb(var(--surface-2) / <alpha-value>)',
        'surface-soft': 'rgb(var(--surface-soft) / <alpha-value>)',
        body: 'rgb(var(--text-body) / <alpha-value>)',
        soft: 'rgb(var(--text-soft) / <alpha-value>)',
        muted: 'rgb(var(--text-muted) / <alpha-value>)',
        faint: 'rgb(var(--text-faint) / <alpha-value>)',
        divider: 'rgb(var(--divider) / <alpha-value>)',
        'divider-strong': 'rgb(var(--divider-strong) / <alpha-value>)',

        // Tokens fijos de marca
        ink: {
          950: '#0a0a0a',
          900: '#0f0f10',
          850: '#141416',
          800: '#1a1a1c',
          750: '#1f1f22',
          700: '#26262a',
          600: '#36363c',
          500: '#54545c',
        },
        accent: {
          50:  '#fef2f2',
          100: '#fde2e2',
          200: '#fcc8c8',
          300: '#f99a9a',
          400: '#f56b6b',
          500: '#ed3a3a',
          600: '#d92626',
          700: '#b41d1d',
          800: '#931a1a',
          900: '#7a1818',
        },
        steel: {
          50:  '#f6f7f9',
          100: '#eceff3',
          200: '#d5dbe3',
          300: '#b1bbc9',
          400: '#8593a8',
          500: '#65748b',
          600: '#4f5b71',
          700: '#404a5c',
          800: '#37404e',
          900: '#313844',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      backgroundImage: {
        'grid-light': "linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)",
        'grid-dark': "linear-gradient(rgba(0,0,0,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.06) 1px, transparent 1px)",
        'noise': "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.06 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
