import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          accent: 'var(--accent)',
          secondary: 'var(--accent-secondary)',
          bg: 'var(--bg-primary)',
          surface: 'var(--bg-secondary)',
          text: 'var(--text-primary)',
          muted: 'var(--text-secondary)',
          border: 'var(--border)'
        }
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0, 0, 0, 0.15)'
      }
    }
  },
  plugins: []
};

export default config;
