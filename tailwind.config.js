import preset from './preset';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './.storybook/**/*.{js,jsx,ts,tsx}',
  ].concat(preset.content),
  theme: {
    extend: preset.theme.extend,
  },
  plugins: preset.plugins,
};
