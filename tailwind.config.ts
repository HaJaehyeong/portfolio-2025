import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}'],
  theme: {
    theme: {
      extend: {
        colors: {
          primary: 'var(--primary)',
          secondary: 'var(--secondary)',
          text: 'var(--text)',
          info: 'var(--info)',
          success: 'var(--success)',
          error: 'var(--error)',
          warning: 'var(--warning)',
          border: 'var(--border)',
          background: 'var(--background)',

          'primary-hover': 'var(--primary-hover)',
          'secondary-hover': 'var(--secondary-hover)',
          'primary-border': 'var(--primary-border)',
          'secondary-border': 'var(--secondary-border)',

          'text-secondary': 'var(--text-secondary)',
          'text-muted': 'var(--text-muted)',

          'background-alt': 'var(--background-alt)',
          'background-hover': 'var(--background-hover)',
          'background-disabled': 'var(--background-disabled)',

          'btn-primary-text': 'var(--btn-primary-text)',
          'btn-secondary-text': 'var(--btn-secondary-text)',
          'btn-disabled-bg': 'var(--btn-disabled-bg)',
          'btn-disabled-text': 'var(--btn-disabled-text)',

          surface: 'var(--surface)',
          'surface-border': 'var(--surface-border)',
          'surface-hover': 'var(--surface-hover)',

          'input-bg': 'var(--input-bg)',
          'input-border': 'var(--input-border)',
          'input-focus': 'var(--input-focus)',

          overlay: 'var(--overlay)',
          'gradient-primary': 'var(--gradient-primary)',

          'card-bg': 'var(--card-bg)',
          'card-border': 'var(--card-border)',
        },

        boxShadow: {
          sm: 'var(--shadow-sm)',
          md: 'var(--shadow-md)',
          lg: 'var(--shadow-lg)',
        },
      },
    },
  },
  plugins: [forms, typography],
};
export default config;
