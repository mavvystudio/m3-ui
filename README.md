# M3-UI - Material 3 React and Tailwind

Material 3 design system  for React and Tailwind

**Still on Active Development**

## Setup

### Install

```bash
npm install @mavvy/m3-ui
```

### Setup Tailwind

Make sure you already setup your tailwind on your app

[Install Tailwind](https://tailwindcss.com/docs/guides/create-react-app)

### Configuration

tailwind.config.ts

```javascript
const preset = require('@mavvy/m3-ui/preset');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: preset.content,
  theme: {
    extend: preset.theme.extend,
  },
  plugins: preset.plugins
};
```

globals.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --color-primary: 77 152 41;
    --icon-font-family: Material Symbols Outlined;
  }
}
```

html
```html
<head>
  <link
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
    rel="stylesheet"
  />
</head>
```


## Components

See all the components at:

[M3-UI Documentation](https://m3-ui-doc.vercel.app/)


## CSS Variables

```bash
--color-primary
--color-primary-light
--color-primary-dark
--color-on-primary
--color-primary-container
--color-on-primary-container
--color-secondary
--color-secondary-light
--color-on-secondary
--color-secondary-container
--color-on-secondary-container
--color-tertiary
--color-on-tertiary
--color-tertiary-container
--color-on-tertiary-container
--color-surface-container-low
--color-surface-container-lowest
--color-surface-container
--color-surface-container-high
--color-surface-container-highest
--color-on-surface-container-highest
--color-on-surface
--color-on-surface-variant
--color-outline
--color-outline-variant
--color-error
--color-on-error
--color-error-container
--color-on-error-container
--color-scrim
--color-inverse-surface
--color-on-inverse-surface
```

## Types

### Color

```bash
primary
on-primary
primary-container
secondary
on-secondary
secondary-container
tertiary
on-tertiary
tertiary-container
surface-container-lowest
surface-container-low
surface-container
surface-container-high
surface-container-highest
on-surface
on-surface-variant
surface-container
outline
outline-variant
success
info
warning
error
on-error
on-error-container
inverse-surface
on-inverse-surface
```

### Icon Variant
```bash
outlined
rounded
sharp
```
### Size
```bash
small
medium
large
```

### Text Variant
```bash
display
headline
title
label
body
```
