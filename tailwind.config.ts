import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'media',
  content: ['./components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}'],
  plugins: [forms, typography],
};
export default config;
