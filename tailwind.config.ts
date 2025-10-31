import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}'],
  plugins: [forms, typography],
};
export default config;
